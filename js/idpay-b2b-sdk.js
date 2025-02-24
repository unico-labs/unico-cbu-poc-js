/* eslint-disable no-undef */
//import _sdkVersion from '../assets/.version.js';

const _sdkVersion = '2.0.2';


let _type;
let _currentHost;
let _initialized = false;
let _openWhileInitializing = false;
let _collectionId;
let _script;

const TYPE__IFRAME = 'IFRAME';
const TYPE__REDIRECT = 'REDIRECT';
const TYPE__SILENT = 'SILENT';

const ENV_DEV = 'dev';
const ENV_UAT = 'uat';
const ENV_PROD = 'prod';

const _HOSTS = {
  [ENV_DEV]: 'https://idpay-dev.unico.io',
  [ENV_UAT]: 'https://idpay-uat.unico.io',
  [ENV_PROD]: 'https://idpay.unico.io',
};

const _createScript = () => {
  if (_script) {
    return Promise.resolve();
  }

  _script = document.createElement('script');
  _script.src = `${_currentHost}/sdk-assets/index.js`;

  const prmScript = new Promise((resolve) => {
    _script.onload = resolve;
  });

  document.body.appendChild(_script);

  return Promise.all([prmScript]);
};

const _createStyles = () => {
  const style = document.createElement('link');
  style.setAttribute('href', `${_currentHost}/sdk-assets/assets/styles.css`);
  style.setAttribute('rel', 'stylesheet');

  const prmStyle = new Promise((resolve) => {
    style.onload = resolve;
  });

  document.head.appendChild(style);

  return Promise.all([prmStyle]);
};

const init = async ({ token, useCurrentOrigin, env = ENV_PROD, type = TYPE__IFRAME }) => {

  _type = type;
  _currentHost = useCurrentOrigin
    ? window.location.origin
    : _HOSTS[env];

  await _createScript();

  UnicoSDKAssets.trackEvent(UnicoSDKAssets.EVENT_TYPES.INITIALIZE);

  switch (_type) {
    case TYPE__SILENT:
      _collectionId = await UnicoSDKAssets.clientBoxControl.initSilent();
      break;
    case TYPE__REDIRECT:
      break;
    default:
      await _createStyles();
      UnicoSDKAssets.clientBoxControl.create({ host: _currentHost, token, sdkVersion: _sdkVersion });
  }

  _initialized = true;

  if (_openWhileInitializing) {
    open(_openWhileInitializing);
  }

  if (_collectionId) {
    return _collectionId;
  }
};

const open = ({ transactionId, token, onFinish }) => {
  const transactionData = {
    transactionId,
    token,
    onFinish,
    host: _currentHost,
    sdkVersion: _sdkVersion,
    collectionId: _collectionId,
  };

  console.log('open', transactionData);

  if (!_initialized) {
    _openWhileInitializing = transactionData;
    return;
  }

  UnicoSDKAssets.trackEvent(UnicoSDKAssets.EVENT_TYPES.START_FLOW, transactionData);

  switch (_type) {
    case TYPE__SILENT:
      UnicoSDKAssets.clientBoxControl.verify(transactionData);
      break;
    case TYPE__REDIRECT:
      UnicoSDKAssets.clientBoxControl.redirect(transactionId, token, _currentHost, _sdkVersion);
      break;
    default:
      UnicoSDKAssets.clientBoxControl.open(transactionData);
  }
};

const close = () => {
  UnicoSDKAssets.clientBoxControl.close();
};

export const UnicoSDK = { init, close, open };
