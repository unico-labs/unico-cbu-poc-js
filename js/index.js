!function() {
    "use strict";
    var t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
      , e = function(t) {
        return t && t.Math === Math && t
    }
      , n = e("object" == typeof globalThis && globalThis) || e("object" == typeof window && window) || e("object" == typeof self && self) || e("object" == typeof t && t) || e("object" == typeof t && t) || function() {
        return this
    }() || Function("return this")()
      , o = function(t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }
      , r = !o((function() {
        return 7 !== Object.defineProperty({}, 1, {
            get: function() {
                return 7
            }
        })[1]
    }
    ))
      , i = {
        exports: {}
    }
      , a = !o((function() {
        var t = function() {}
        .bind();
        return "function" != typeof t || t.hasOwnProperty("prototype")
    }
    ))
      , c = a
      , s = Function.prototype
      , u = s.call
      , l = c && s.bind.bind(u, u)
      , f = c ? l : function(t) {
        return function() {
            return u.apply(t, arguments)
        }
    }
      , d = "object" == typeof document && document.all
      , p = void 0 === d && void 0 !== d ? function(t) {
        return "function" == typeof t || t === d
    }
    : function(t) {
        return "function" == typeof t
    }
      , y = function(t) {
        return null == t
    }
      , g = y
      , m = TypeError
      , h = function(t) {
        if (g(t))
            throw new m("Can't call method on " + t);
        return t
    }
      , v = h
      , b = Object
      , w = function(t) {
        return b(v(t))
    }
      , O = f({}.hasOwnProperty)
      , S = Object.hasOwn || function(t, e) {
        return O(w(t), e)
    }
      , I = r
      , E = S
      , j = Function.prototype
      , k = I && Object.getOwnPropertyDescriptor
      , T = E(j, "name")
      , _ = {
        EXISTS: T,
        PROPER: T && "something" === function() {}
        .name,
        CONFIGURABLE: T && (!I || I && k(j, "name").configurable)
    }
      , N = {
        exports: {}
    }
      , D = n
      , P = Object.defineProperty
      , F = function(t, e) {
        try {
            P(D, t, {
                value: e,
                configurable: !0,
                writable: !0
            })
        } catch (n) {
            D[t] = e
        }
        return e
    }
      , L = n
      , A = F
      , x = "__core-js_shared__"
      , C = N.exports = L[x] || A(x, {});
    (C.versions || (C.versions = [])).push({
        version: "3.39.0",
        mode: "global",
        copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
        license: "https://github.com/zloirock/core-js/blob/v3.39.0/LICENSE",
        source: "https://github.com/zloirock/core-js"
    });
    var R = N.exports
      , W = p
      , M = R
      , B = f(Function.toString);
    W(M.inspectSource) || (M.inspectSource = function(t) {
        return B(t)
    }
    );
    var V, U, $ = M.inspectSource, G = p, z = n.WeakMap, K = G(z) && /native code/.test(String(z)), H = p, J = function(t) {
        return "object" == typeof t ? null !== t : H(t)
    }, q = {}, Y = J, Z = n.document, X = Y(Z) && Y(Z.createElement), Q = function(t) {
        return X ? Z.createElement(t) : {}
    }, tt = Q, et = !r && !o((function() {
        return 7 !== Object.defineProperty(tt("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    }
    )), nt = r && o((function() {
        return 42 !== Object.defineProperty((function() {}
        ), "prototype", {
            value: 42,
            writable: !1
        }).prototype
    }
    )), ot = J, rt = String, it = TypeError, at = function(t) {
        if (ot(t))
            return t;
        throw new it(rt(t) + " is not an object")
    }, ct = a, st = Function.prototype.call, ut = ct ? st.bind(st) : function() {
        return st.apply(st, arguments)
    }
    , lt = n, ft = p, dt = function(t, e) {
        return arguments.length < 2 ? (n = lt[t],
        ft(n) ? n : void 0) : lt[t] && lt[t][e];
        var n
    }, pt = f({}.isPrototypeOf), yt = n.navigator, gt = yt && yt.userAgent, mt = gt ? String(gt) : "", ht = n, vt = mt, bt = ht.process, wt = ht.Deno, Ot = bt && bt.versions || wt && wt.version, St = Ot && Ot.v8;
    St && (U = (V = St.split("."))[0] > 0 && V[0] < 4 ? 1 : +(V[0] + V[1])),
    !U && vt && (!(V = vt.match(/Edge\/(\d+)/)) || V[1] >= 74) && (V = vt.match(/Chrome\/(\d+)/)) && (U = +V[1]);
    var It = U
      , Et = o
      , jt = n.String
      , kt = !!Object.getOwnPropertySymbols && !Et((function() {
        var t = Symbol("symbol detection");
        return !jt(t) || !(Object(t)instanceof Symbol) || !Symbol.sham && It && It < 41
    }
    ))
      , Tt = kt && !Symbol.sham && "symbol" == typeof Symbol.iterator
      , _t = dt
      , Nt = p
      , Dt = pt
      , Pt = Object
      , Ft = Tt ? function(t) {
        return "symbol" == typeof t
    }
    : function(t) {
        var e = _t("Symbol");
        return Nt(e) && Dt(e.prototype, Pt(t))
    }
      , Lt = String
      , At = p
      , xt = function(t) {
        try {
            return Lt(t)
        } catch (t) {
            return "Object"
        }
    }
      , Ct = TypeError
      , Rt = function(t) {
        if (At(t))
            return t;
        throw new Ct(xt(t) + " is not a function")
    }
      , Wt = Rt
      , Mt = y
      , Bt = ut
      , Vt = p
      , Ut = J
      , $t = TypeError
      , Gt = R
      , zt = function(t, e) {
        return Gt[t] || (Gt[t] = e || {})
    }
      , Kt = f
      , Ht = 0
      , Jt = Math.random()
      , qt = Kt(1..toString)
      , Yt = function(t) {
        return "Symbol(" + (void 0 === t ? "" : t) + ")_" + qt(++Ht + Jt, 36)
    }
      , Zt = zt
      , Xt = S
      , Qt = Yt
      , te = kt
      , ee = Tt
      , ne = n.Symbol
      , oe = Zt("wks")
      , re = ee ? ne.for || ne : ne && ne.withoutSetter || Qt
      , ie = ut
      , ae = J
      , ce = Ft
      , se = function(t, e) {
        var n = t[e];
        return Mt(n) ? void 0 : Wt(n)
    }
      , ue = function(t, e) {
        var n, o;
        if ("string" === e && Vt(n = t.toString) && !Ut(o = Bt(n, t)))
            return o;
        if (Vt(n = t.valueOf) && !Ut(o = Bt(n, t)))
            return o;
        if ("string" !== e && Vt(n = t.toString) && !Ut(o = Bt(n, t)))
            return o;
        throw new $t("Can't convert object to primitive value")
    }
      , le = TypeError
      , fe = function(t) {
        return Xt(oe, t) || (oe[t] = te && Xt(ne, t) ? ne[t] : re("Symbol." + t)),
        oe[t]
    }("toPrimitive")
      , de = function(t, e) {
        if (!ae(t) || ce(t))
            return t;
        var n, o = se(t, fe);
        if (o) {
            if (void 0 === e && (e = "default"),
            n = ie(o, t, e),
            !ae(n) || ce(n))
                return n;
            throw new le("Can't convert object to primitive value")
        }
        return void 0 === e && (e = "number"),
        ue(t, e)
    }
      , pe = Ft
      , ye = function(t) {
        var e = de(t, "string");
        return pe(e) ? e : e + ""
    }
      , ge = r
      , me = et
      , he = nt
      , ve = at
      , be = ye
      , we = TypeError
      , Oe = Object.defineProperty
      , Se = Object.getOwnPropertyDescriptor
      , Ie = "enumerable"
      , Ee = "configurable"
      , je = "writable";
    q.f = ge ? he ? function(t, e, n) {
        if (ve(t),
        e = be(e),
        ve(n),
        "function" == typeof t && "prototype" === e && "value"in n && je in n && !n[je]) {
            var o = Se(t, e);
            o && o[je] && (t[e] = n.value,
            n = {
                configurable: Ee in n ? n[Ee] : o[Ee],
                enumerable: Ie in n ? n[Ie] : o[Ie],
                writable: !1
            })
        }
        return Oe(t, e, n)
    }
    : Oe : function(t, e, n) {
        if (ve(t),
        e = be(e),
        ve(n),
        me)
            try {
                return Oe(t, e, n)
            } catch (t) {}
        if ("get"in n || "set"in n)
            throw new we("Accessors not supported");
        return "value"in n && (t[e] = n.value),
        t
    }
    ;
    var ke, Te, _e, Ne = function(t, e) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
        }
    }, De = q, Pe = Ne, Fe = r ? function(t, e, n) {
        return De.f(t, e, Pe(1, n))
    }
    : function(t, e, n) {
        return t[e] = n,
        t
    }
    , Le = Yt, Ae = zt("keys"), xe = {}, Ce = K, Re = n, We = J, Me = Fe, Be = S, Ve = R, Ue = function(t) {
        return Ae[t] || (Ae[t] = Le(t))
    }, $e = xe, Ge = "Object already initialized", ze = Re.TypeError, Ke = Re.WeakMap;
    if (Ce || Ve.state) {
        var He = Ve.state || (Ve.state = new Ke);
        He.get = He.get,
        He.has = He.has,
        He.set = He.set,
        ke = function(t, e) {
            if (He.has(t))
                throw new ze(Ge);
            return e.facade = t,
            He.set(t, e),
            e
        }
        ,
        Te = function(t) {
            return He.get(t) || {}
        }
        ,
        _e = function(t) {
            return He.has(t)
        }
    } else {
        var Je = Ue("state");
        $e[Je] = !0,
        ke = function(t, e) {
            if (Be(t, Je))
                throw new ze(Ge);
            return e.facade = t,
            Me(t, Je, e),
            e
        }
        ,
        Te = function(t) {
            return Be(t, Je) ? t[Je] : {}
        }
        ,
        _e = function(t) {
            return Be(t, Je)
        }
    }
    var qe = {
        set: ke,
        get: Te,
        has: _e,
        enforce: function(t) {
            return _e(t) ? Te(t) : ke(t, {})
        },
        getterFor: function(t) {
            return function(e) {
                var n;
                if (!We(e) || (n = Te(e)).type !== t)
                    throw new ze("Incompatible receiver, " + t + " required");
                return n
            }
        }
    }
      , Ye = f
      , Ze = o
      , Xe = p
      , Qe = S
      , tn = r
      , en = _.CONFIGURABLE
      , nn = $
      , on = qe.enforce
      , rn = qe.get
      , an = String
      , cn = Object.defineProperty
      , sn = Ye("".slice)
      , un = Ye("".replace)
      , ln = Ye([].join)
      , fn = tn && !Ze((function() {
        return 8 !== cn((function() {}
        ), "length", {
            value: 8
        }).length
    }
    ))
      , dn = String(String).split("String")
      , pn = i.exports = function(t, e, n) {
        "Symbol(" === sn(an(e), 0, 7) && (e = "[" + un(an(e), /^Symbol\(([^)]*)\).*$/, "$1") + "]"),
        n && n.getter && (e = "get " + e),
        n && n.setter && (e = "set " + e),
        (!Qe(t, "name") || en && t.name !== e) && (tn ? cn(t, "name", {
            value: e,
            configurable: !0
        }) : t.name = e),
        fn && n && Qe(n, "arity") && t.length !== n.arity && cn(t, "length", {
            value: n.arity
        });
        try {
            n && Qe(n, "constructor") && n.constructor ? tn && cn(t, "prototype", {
                writable: !1
            }) : t.prototype && (t.prototype = void 0)
        } catch (t) {}
        var o = on(t);
        return Qe(o, "source") || (o.source = ln(dn, "string" == typeof e ? e : "")),
        t
    }
    ;
    Function.prototype.toString = pn((function() {
        return Xe(this) && rn(this).source || nn(this)
    }
    ), "toString");
    var yn = i.exports
      , gn = yn
      , mn = q
      , hn = at
      , vn = r
      , bn = function(t, e, n) {
        return n.get && gn(n.get, e, {
            getter: !0
        }),
        n.set && gn(n.set, e, {
            setter: !0
        }),
        mn.f(t, e, n)
    }
      , wn = function() {
        var t = hn(this)
          , e = "";
        return t.hasIndices && (e += "d"),
        t.global && (e += "g"),
        t.ignoreCase && (e += "i"),
        t.multiline && (e += "m"),
        t.dotAll && (e += "s"),
        t.unicode && (e += "u"),
        t.unicodeSets && (e += "v"),
        t.sticky && (e += "y"),
        e
    }
      , On = o
      , Sn = n.RegExp
      , In = Sn.prototype;
    vn && On((function() {
        var t = !0;
        try {
            Sn(".", "d")
        } catch (e) {
            t = !1
        }
        var e = {}
          , n = ""
          , o = t ? "dgimsy" : "gimsy"
          , r = function(t, o) {
            Object.defineProperty(e, t, {
                get: function() {
                    return n += o,
                    !0
                }
            })
        }
          , i = {
            dotAll: "s",
            global: "g",
            ignoreCase: "i",
            multiline: "m",
            sticky: "y"
        };
        for (var a in t && (i.hasIndices = "d"),
        i)
            r(a, i[a]);
        return Object.getOwnPropertyDescriptor(In, "flags").get.call(e) !== o || n !== o
    }
    )) && bn(In, "flags", {
        configurable: !0,
        get: wn
    });
    var En = {}
      , jn = {}
      , kn = {}.propertyIsEnumerable
      , Tn = Object.getOwnPropertyDescriptor
      , _n = Tn && !kn.call({
        1: 2
    }, 1);
    jn.f = _n ? function(t) {
        var e = Tn(this, t);
        return !!e && e.enumerable
    }
    : kn;
    var Nn = f
      , Dn = Nn({}.toString)
      , Pn = Nn("".slice)
      , Fn = function(t) {
        return Pn(Dn(t), 8, -1)
    }
      , Ln = o
      , An = Fn
      , xn = Object
      , Cn = f("".split)
      , Rn = Ln((function() {
        return !xn("z").propertyIsEnumerable(0)
    }
    )) ? function(t) {
        return "String" === An(t) ? Cn(t, "") : xn(t)
    }
    : xn
      , Wn = h
      , Mn = function(t) {
        return Rn(Wn(t))
    }
      , Bn = r
      , Vn = ut
      , Un = jn
      , $n = Ne
      , Gn = Mn
      , zn = ye
      , Kn = S
      , Hn = et
      , Jn = Object.getOwnPropertyDescriptor;
    En.f = Bn ? Jn : function(t, e) {
        if (t = Gn(t),
        e = zn(e),
        Hn)
            try {
                return Jn(t, e)
            } catch (t) {}
        if (Kn(t, e))
            return $n(!Vn(Un.f, t, e), t[e])
    }
    ;
    var qn = p
      , Yn = q
      , Zn = yn
      , Xn = F
      , Qn = {}
      , to = Math.ceil
      , eo = Math.floor
      , no = Math.trunc || function(t) {
        var e = +t;
        return (e > 0 ? eo : to)(e)
    }
      , oo = function(t) {
        var e = +t;
        return e != e || 0 === e ? 0 : no(e)
    }
      , ro = oo
      , io = Math.max
      , ao = Math.min
      , co = oo
      , so = Math.min
      , uo = function(t) {
        var e = co(t);
        return e > 0 ? so(e, 9007199254740991) : 0
    }
      , lo = Mn
      , fo = function(t, e) {
        var n = ro(t);
        return n < 0 ? io(n + e, 0) : ao(n, e)
    }
      , po = function(t) {
        return uo(t.length)
    }
      , yo = function(t) {
        return function(e, n, o) {
            var r = lo(e)
              , i = po(r);
            if (0 === i)
                return !t && -1;
            var a, c = fo(o, i);
            if (t && n != n) {
                for (; i > c; )
                    if ((a = r[c++]) != a)
                        return !0
            } else
                for (; i > c; c++)
                    if ((t || c in r) && r[c] === n)
                        return t || c || 0;
            return !t && -1
        }
    }
      , go = {
        includes: yo(!0),
        indexOf: yo(!1)
    }
      , mo = S
      , ho = Mn
      , vo = go.indexOf
      , bo = xe
      , wo = f([].push)
      , Oo = function(t, e) {
        var n, o = ho(t), r = 0, i = [];
        for (n in o)
            !mo(bo, n) && mo(o, n) && wo(i, n);
        for (; e.length > r; )
            mo(o, n = e[r++]) && (~vo(i, n) || wo(i, n));
        return i
    }
      , So = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"].concat("length", "prototype");
    Qn.f = Object.getOwnPropertyNames || function(t) {
        return Oo(t, So)
    }
    ;
    var Io = {};
    Io.f = Object.getOwnPropertySymbols;
    var Eo, jo, ko, To, _o = dt, No = Qn, Do = Io, Po = at, Fo = f([].concat), Lo = _o("Reflect", "ownKeys") || function(t) {
        var e = No.f(Po(t))
          , n = Do.f;
        return n ? Fo(e, n(t)) : e
    }
    , Ao = S, xo = Lo, Co = En, Ro = q, Wo = o, Mo = p, Bo = /#|\.prototype\./, Vo = function(t, e) {
        var n = $o[Uo(t)];
        return n === zo || n !== Go && (Mo(e) ? Wo(e) : !!e)
    }, Uo = Vo.normalize = function(t) {
        return String(t).replace(Bo, ".").toLowerCase()
    }
    , $o = Vo.data = {}, Go = Vo.NATIVE = "N", zo = Vo.POLYFILL = "P", Ko = Vo, Ho = n, Jo = En.f, qo = Fe, Yo = function(t, e, n, o) {
        o || (o = {});
        var r = o.enumerable
          , i = void 0 !== o.name ? o.name : e;
        if (qn(n) && Zn(n, i, o),
        o.global)
            r ? t[e] = n : Xn(e, n);
        else {
            try {
                o.unsafe ? t[e] && (r = !0) : delete t[e]
            } catch (t) {}
            r ? t[e] = n : Yn.f(t, e, {
                value: n,
                enumerable: !1,
                configurable: !o.nonConfigurable,
                writable: !o.nonWritable
            })
        }
        return t
    }, Zo = F, Xo = function(t, e, n) {
        for (var o = xo(e), r = Ro.f, i = Co.f, a = 0; a < o.length; a++) {
            var c = o[a];
            Ao(t, c) || n && Ao(n, c) || r(t, c, i(e, c))
        }
    }, Qo = Ko, tr = function(t, e) {
        var n, o, r, i, a, c = t.target, s = t.global, u = t.stat;
        if (n = s ? Ho : u ? Ho[c] || Zo(c, {}) : Ho[c] && Ho[c].prototype)
            for (o in e) {
                if (i = e[o],
                r = t.dontCallGetSet ? (a = Jo(n, o)) && a.value : n[o],
                !Qo(s ? o : c + (u ? "." : "#") + o, t.forced) && void 0 !== r) {
                    if (typeof i == typeof r)
                        continue;
                    Xo(i, r)
                }
                (t.sham || r && r.sham) && qo(i, "sham", !0),
                Yo(n, o, i, t)
            }
    }, er = a, nr = Function.prototype, or = nr.apply, rr = nr.call, ir = "object" == typeof Reflect && Reflect.apply || (er ? rr.bind(or) : function() {
        return rr.apply(or, arguments)
    }
    ), ar = Fn, cr = f, sr = function(t) {
        if ("Function" === ar(t))
            return cr(t)
    }, ur = Rt, lr = a, fr = sr(sr.bind), dr = dt("document", "documentElement"), pr = f([].slice), yr = TypeError, gr = function(t, e) {
        if (t < e)
            throw new yr("Not enough arguments");
        return t
    }, mr = /(?:ipad|iphone|ipod).*applewebkit/i.test(mt), hr = n, vr = mt, br = Fn, wr = function(t) {
        return vr.slice(0, t.length) === t
    }, Or = wr("Bun/") ? "BUN" : wr("Cloudflare-Workers") ? "CLOUDFLARE" : wr("Deno/") ? "DENO" : wr("Node.js/") ? "NODE" : hr.Bun && "string" == typeof Bun.version ? "BUN" : hr.Deno && "object" == typeof Deno.version ? "DENO" : "process" === br(hr.process) ? "NODE" : hr.window && hr.document ? "BROWSER" : "REST", Sr = n, Ir = ir, Er = function(t, e) {
        return ur(t),
        void 0 === e ? t : lr ? fr(t, e) : function() {
            return t.apply(e, arguments)
        }
    }, jr = p, kr = S, Tr = o, _r = dr, Nr = pr, Dr = Q, Pr = gr, Fr = mr, Lr = "NODE" === Or, Ar = Sr.setImmediate, xr = Sr.clearImmediate, Cr = Sr.process, Rr = Sr.Dispatch, Wr = Sr.Function, Mr = Sr.MessageChannel, Br = Sr.String, Vr = 0, Ur = {}, $r = "onreadystatechange";
    Tr((function() {
        Eo = Sr.location
    }
    ));
    var Gr = function(t) {
        if (kr(Ur, t)) {
            var e = Ur[t];
            delete Ur[t],
            e()
        }
    }
      , zr = function(t) {
        return function() {
            Gr(t)
        }
    }
      , Kr = function(t) {
        Gr(t.data)
    }
      , Hr = function(t) {
        Sr.postMessage(Br(t), Eo.protocol + "//" + Eo.host)
    };
    Ar && xr || (Ar = function(t) {
        Pr(arguments.length, 1);
        var e = jr(t) ? t : Wr(t)
          , n = Nr(arguments, 1);
        return Ur[++Vr] = function() {
            Ir(e, void 0, n)
        }
        ,
        jo(Vr),
        Vr
    }
    ,
    xr = function(t) {
        delete Ur[t]
    }
    ,
    Lr ? jo = function(t) {
        Cr.nextTick(zr(t))
    }
    : Rr && Rr.now ? jo = function(t) {
        Rr.now(zr(t))
    }
    : Mr && !Fr ? (To = (ko = new Mr).port2,
    ko.port1.onmessage = Kr,
    jo = Er(To.postMessage, To)) : Sr.addEventListener && jr(Sr.postMessage) && !Sr.importScripts && Eo && "file:" !== Eo.protocol && !Tr(Hr) ? (jo = Hr,
    Sr.addEventListener("message", Kr, !1)) : jo = $r in Dr("script") ? function(t) {
        _r.appendChild(Dr("script"))[$r] = function() {
            _r.removeChild(this),
            Gr(t)
        }
    }
    : function(t) {
        setTimeout(zr(t), 0)
    }
    );
    var Jr = {
        set: Ar,
        clear: xr
    }
      , qr = Jr.clear;
    tr({
        global: !0,
        bind: !0,
        enumerable: !0,
        forced: n.clearImmediate !== qr
    }, {
        clearImmediate: qr
    });
    var Yr = n
      , Zr = ir
      , Xr = p
      , Qr = Or
      , ti = mt
      , ei = pr
      , ni = gr
      , oi = Yr.Function
      , ri = /MSIE .\./.test(ti) || "BUN" === Qr && function() {
        var t = Yr.Bun.version.split(".");
        return t.length < 3 || "0" === t[0] && (t[1] < 3 || "3" === t[1] && "0" === t[2])
    }()
      , ii = tr
      , ai = n
      , ci = Jr.set
      , si = function(t, e) {
        var n = e ? 2 : 1;
        return ri ? function(o, r) {
            var i = ni(arguments.length, 1) > n
              , a = Xr(o) ? o : oi(o)
              , c = i ? ei(arguments, n) : []
              , s = i ? function() {
                Zr(a, this, c)
            }
            : a;
            return e ? t(s, r) : t(s)
        }
        : t
    }
      , ui = ai.setImmediate ? si(ci, !1) : ci;
    ii({
        global: !0,
        bind: !0,
        enumerable: !0,
        forced: ai.setImmediate !== ui
    }, {
        setImmediate: ui
    });
    const li = "https://idpay-uat.unico.io"
      , fi = {
        LOAD_GA: "loadGaSDK",
        INITIALIZE: "initializeSDK",
        START_FLOW: "startFlow",
        OPEN_FLOW: "openFlow",
        SHOW_FLOW: "showFlow",
        FINISHED_FLOW: "finishedFlow",
        ERROR_FLOW: "errorFlow",
        INVALID_TOKEN: "invalidToken"
    }
      , di = "INITIALIZED"
      , pi = "INJECT_TRANSACTION_ID"
      , yi = "SHOW"
      , gi = "ERROR"
      , mi = "FINISH"
      , hi = {
        idPay: {
            gtmId: "GTM-T9235STH",
            prefix: "IDPay_SDK_"
        }
    }
      , vi = {
        "https://idpay-dev.unico.io": hi.idPay,
        "https://idpay-uat.unico.io": hi.idPay,
        "https://idpay.unico.io": hi.idPay
    };
    let bi, wi, Oi, Si = [];
    const Ii = function(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "UNICO_GA_EVENT";
        Oi.contentWindow.postMessage({
            type: e,
            data: t
        }, "*")
    }
      , Ei = async function(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        console.log("Tracking", {
            eventName: t,
            data: e
        });
        const n = {
            event: wi?.prefix + t,
            transactionId: e?.transactionId,
            sdkVersion: e?.sdkVersion,
            createdAt: (new Date).toISOString()
        };
        Oi ? Ii(n) : Si.push(n)
    }
      , ji = function(t) {
        let {transactionId: e, host: n, token: o} = t
          , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const i = _i(o)
          , a = Ti(o)
          , c = a?.processPath
          , s = i ? `${i}${c}` : `${n || li}/notify`;
        let u = {};
        e && (u = {
            ...u,
            id: e
        }),
        o && (u = {
            ...u,
            token: o
        }),
        u = {
            ...u,
            ...r
        };
        const l = new URL(s);
        return Object.keys(u).forEach((t => {
            l.searchParams.append(t, u[t])
        }
        )),
        l.toString()
    }
      , ki = t => {
        if ("string" != typeof t)
            return console.log("Invalid Token JWT"),
            {};
        const e = t.split(".");
        if (3 !== e.length)
            return console.log("Invalid Token JWT"),
            {};
        const n = e[1]
          , o = atob(n);
        return JSON.parse(o)
    }
      , Ti = t => {
        if (!t)
            return {};
        const e = ki(t);
        return e?.extra$ || {}
    }
      , _i = t => {
        if (!t)
            return null;
        const e = ki(t);
        return e?.iss
    }
      , Ni = t => !!(t => !!t?.extra$?.domains && t.extra$.domains.includes(window.location.origin))(ki(t)) || (console.log("Domain not allowed"),
    Ei(fi.INVALID_TOKEN, {
        msg: "Domain not allowed"
    }),
    !1)
      , Di = "unico_sdk__flow-box"
      , Pi = "--is-visible";
    let Fi, Li, Ai = null, xi = !1;
    const Ci = t => {
        t.preventDefault(),
        t.returnValue = "Tem certeza que deseja continuar? É possível que sua compra seja cancelada."
    }
      , Ri = (t, e) => {
        console.log("floxBox injectTransactionId", {
            transactionId: t,
            token: e
        }),
        Li.contentWindow.postMessage(JSON.parse(JSON.stringify(Vi(t, e))), "*")
    }
      , Wi = {
        [di]: () => {
            xi = !0,
            Ai && Ri(Ai.transactionId, Ai.token)
        }
        ,
        [yi]: t => {
            let {transaction: e} = t;
            Ei(fi.SHOW_FLOW, {
                transaction: e
            }),
            setTimeout(( () => {
                Li?.classList?.add(Pi)
            }
            ), 100)
        }
        ,
        [mi]: t => {
            let {transaction: e, type: n} = t;
            Ei(fi.FINISHED_FLOW, {
                transaction: e
            }),
            Fi?.({
                transaction: e,
                type: n
            }),
            Gi()
        }
        ,
        [gi]: t => {
            let {transaction: e, type: n} = t;
            Ei(fi.ERROR_FLOW, {
                transaction: e
            }),
            Fi?.({
                transaction: e,
                type: n
            }),
            Gi()
        }
    }
      , Mi = t => Wi[t?.type] ? Wi[t?.type](t) : () => {}
      , Bi = t => Mi(t?.data)
      , Vi = (t, e) => ({
        type: pi,
        transactionId: t,
        token: e
    })
      , Ui = function() {
        let {host: t, token: e, sdkVersion: n} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (Li)
            return;
        const o = document.getElementById("unico_iframe_embedded")
          , r = document.createElement("iframe");
        r.setAttribute("allow", "fullscreen;camera;geolocation;accelerometer;gyroscope;clipboard-write;web-share;");
        let i = ji({
            host: t,
            token: e
        }, {
            sdkVersion: n,
            iframe: !0
        });
        if (r.setAttribute("src", i),
        r.setAttribute("id", Di),
        o) {
            o.appendChild(r);
            const t = document.getElementById(Di);
            Object.assign(t.style, {
                position: "static"
            })
        } else
            document.body.appendChild(r);
        Li = r,
        window.addEventListener("message", Bi, !1)
    }
      , $i = () => {
        Li?.remove?.(),
        Li = null,
        Fi = null,
        window.removeEventListener("message", Bi)
    }
      , Gi = () => {
        Li?.classList?.remove?.(Pi),
        setTimeout($i, 250),
        window.removeEventListener("beforeunload", Ci)
    }
      , zi = {
        create: Ui,
        initSilent: async () => {
            const t = await import(`${li}/plus/index.js`);
            return await t.default.init()
        }
        ,
        close: Gi,
        open: t => {
            let {transactionId: e, token: n, onFinish: o, sdkVersion: r, host: i} = t;
            console.log("flowBox open", {
                transactionId: e,
                onFinish: o
            }),
            !n || Ni(n) ? (Fi = o,
            Ei(fi.OPEN_FLOW),
            Li || Ui({
                token: n,
                sdkVersion: r,
                host: i
            }),
            window.addEventListener("beforeunload", Ci),
            (t => {
                let {transactionId: e, token: n} = t;
                console.log("floxBox show", {
                    transactionId: e,
                    token: n
                });
                const o = Ti(n);
                o?.configs?.silentStart || setTimeout(( () => {
                    Li?.classList?.add(Pi)
                }
                ), 100),
                xi ? Ri(e, n) : Ai = {
                    transactionId: e,
                    token: n
                }
            }
            )({
                transactionId: e,
                token: n
            })) : Gi()
        }
        ,
        redirect: (t, e, n, o) => {
            console.log("flowBox redirect", {
                transactionId: t,
                host: n,
                token: e,
                sdkVersion: o
            }),
            !e || Ni(e) ? window.location.assign(ji({
                transactionId: t,
                host: n,
                token: e
            }, {
                sdkVersion: o
            })) : Gi()
        }
        ,
        verify: async t => {
            let {transactionId: e, token: n, collectionId: o, onFinish: r} = t;
            try {
                await (async (t, e, n) => {
                    const o = {
                        collectionID: n
                    }
                      , r = `https://transactions.transactional.uat.unico.app/api/customer/v1/credit/transactions/${t}/validate/frictionless`
                      , i = {
                        "content-type": "application/json",
                        authorization: e
                    }
                      , a = await fetch(r, {
                        method: "POST",
                        headers: i,
                        body: JSON.stringify(o)
                    });
                    if (!a.ok)
                        throw new Error("frictionlessValidateTransaction: response not ok");
                    return await a.json()
                }
                )(e, n, o),
                r?.({
                    type: mi
                })
            } catch (t) {
                r?.({
                    type: gi
                })
            }
        }
        ,
        _handleAction: Mi,
        _injectTransactionId: Ri,
        _setFlowBox: t => {
            Li = t
        }
        ,
        _setOnFinish: t => {
            Fi = t
        }
        ,
        _setInjectionWaiting: t => {
            Ai = t
        }
    }
      , Ki = {
        create: zi.create,
        close: zi.close,
        open: zi.open,
        redirect: zi.redirect,
        initSilent: zi.initSilent,
        verify: zi.verify
    };
    ( () => {
        bi = document.querySelector('script[src*="sdk-assets/index.js"]');
        const t = new URL(bi.src).origin;
        if (wi = vi[t],
        !wi || Oi)
            return;
        const e = document.createElement("iframe");
        e.setAttribute("src", `${t}/sdk-assets/ga.html`),
        e.setAttribute("id", "unico_ga_events"),
        e.setAttribute("style", "display: none;"),
        bi.parentNode.appendChild(e),
        e.onload = () => {
            Oi = e,
            Ii({
                gtmId: wi.gtmId
            }, "UNICO_GA_GTM_ID"),
            Si.forEach((t => Ii(t))),
            Si = []
        }
        ,
        Ei(fi.LOAD_GA)
    }
    )(),
    window.UnicoSDKAssets = {
        EVENT_TYPES: fi,
        trackEvent: Ei,
        clientBoxControl: Ki
    },
    window.IDPaySDKAssets = window.UnicoSDKAssets
}();
