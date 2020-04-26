(window.webpackJsonp = window.webpackJsonp || []).push([
    [6], {
        "07HA": function(d, p, a) {
            "use strict";
            a.r(p);
            var m = a("8Y7J");
            class o {}
            var n = a("t68o"),
                t = a("zbXB"),
                e = a("NcP4"),
                l = a("xYTU"),
                c = a("pMnS"),
                r = a("a5ZR"),
                i = a("cUpR");
            class u {
                constructor(d, p, a) {
                    this.router = d, this.route = p, this.location = a
                }
                ngOnInit() {
                    this.tour = this.route.snapshot.parent.parent.data.tour, this.location.go(`${this.tour.listingId}/${this.tour.seoUrl}/3dtour${this.tour.idxUrl}`), this.tour.showTour3d || this.router.navigateByUrl("/not-found", {
                        skipLocationChange: !0
                    })
                }
            }
            var s = a("iInd"),
                b = a("SVse"),
                h = m["\u0275crt"]({
                    encapsulation: 0,
                    styles: [
                        ["[_nghost-%COMP%]{-webkit-box-flex:1;flex:1}div[_ngcontent-%COMP%]{width:100%;height:100%;position:relative}iframe[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%}"]
                    ],
                    data: {}
                });

            function f(d) {
                return m["\u0275vid"](0, [m["\u0275pid"](0, r.a, [i.DomSanitizer]), (d()(), m["\u0275eld"](1, 0, null, null, 4, "div", [], null, null, null, null, null)), (d()(), m["\u0275ted"](-1, null, ["\n    "])), (d()(), m["\u0275eld"](3, 0, null, null, 1, "iframe", [
                    ["allowfullscreen", "true"],
                    ["frameborder", "0"],
                    ["mozallowfullscreen", "true"],
                    ["webkitallowfullscreen", "true"]
                ], [
                    [8, "src", 5]
                ], null, null, null, null)), m["\u0275ppd"](4, 1), (d()(), m["\u0275ted"](-1, null, ["\n"]))], null, (function(d, p) {
                    var a = p.component,
                        o = m["\u0275unv"](p, 3, 0, d(p, 4, 0, m["\u0275nov"](p, 0), a.tour.media.matterportUrl + "&play=1&help=0&wmode=opaque"));
                    d(p, 3, 0, o)
                }))
            }

            function g(d) {
                return m["\u0275vid"](0, [(d()(), m["\u0275eld"](0, 0, null, null, 1, "app-tour-3d", [], null, null, null, f, h)), m["\u0275did"](1, 114688, null, 0, u, [s.o, s.a, b.Location], null, null)], (function(d, p) {
                    d(p, 1, 0)
                }), null)
            }
            var v = m["\u0275ccf"]("app-tour-3d", u, g, {}, {}, []),
                R = a("/q54"),
                w = a("QQfA"),
                C = a("IP0z"),
                L = a("/Co4"),
                M = a("POq0"),
                O = a("Xd0L"),
                P = a("s6ns"),
                N = a("821u"),
                T = a("gavF"),
                _ = a("/HVE"),
                D = a("JjoW"),
                k = a("Mz6y"),
                y = a("OIZN"),
                F = a("7kcP"),
                I = a("qJ5m"),
                z = a("5GAg"),
                A = a("DkaU"),
                E = a("s7LF"),
                U = a("Lyw/"),
                x = a("VDRc"),
                Z = a("ura0"),
                H = a("Nhcz"),
                J = a("u9T3"),
                j = a("zMNK"),
                B = a("hOhj"),
                V = a("KPQW"),
                q = a("Fwaw"),
                S = a("mkRZ"),
                G = a("igqZ"),
                Q = a("r0V8"),
                W = a("kNGD"),
                K = a("02hT"),
                $ = a("5Bek"),
                X = a("c9fC"),
                Y = a("HsOI"),
                dd = a("FVPZ"),
                pd = a("Gi4r"),
                ad = a("oapL"),
                md = a("ZwOa"),
                od = a("Q+lL"),
                nd = a("8P0U"),
                td = a("W5yJ"),
                ed = a("elxJ"),
                ld = a("BV1i"),
                cd = a("pBi1"),
                rd = a("lT8R"),
                id = a("dFDH"),
                ud = a("qJ50"),
                sd = a("zQui"),
                bd = a("8rEH"),
                hd = a("rWV4"),
                fd = a("BzsH"),
                gd = a("AaDx"),
                vd = a("vvyD"),
                Rd = a("PCNd");
            class wd {}
            var Cd = a("dvZr");
            a.d(p, "Tour3DModuleNgFactory", (function() {
                return Ld
            }));
            var Ld = m["\u0275cmf"](o, [], (function(d) {
                return m["\u0275mod"]([m["\u0275mpd"](512, m.ComponentFactoryResolver, m["\u0275CodegenComponentFactoryResolver"], [
                    [8, [n.a, t.b, t.a, e.a, l.a, l.b, c.a, v]],
                    [3, m.ComponentFactoryResolver], m.NgModuleRef
                ]), m["\u0275mpd"](4608, b.NgLocalization, b.NgLocaleLocalization, [m.LOCALE_ID, [2, b["\u0275angular_packages_common_common_a"]]]), m["\u0275mpd"](5120, m.APP_BOOTSTRAP_LISTENER, (function(d, p) {
                    return [R.k(d, p)]
                }), [b.DOCUMENT, m.PLATFORM_ID]), m["\u0275mpd"](4608, w.a, w.a, [w.g, w.c, m.ComponentFactoryResolver, w.f, w.d, m.Injector, m.NgZone, b.DOCUMENT, C.b, [2, b.Location]]), m["\u0275mpd"](5120, w.h, w.i, [w.a]), m["\u0275mpd"](5120, L.a, L.b, [w.a]), m["\u0275mpd"](4608, M.c, M.c, []), m["\u0275mpd"](4608, O.d, O.d, []), m["\u0275mpd"](5120, P.c, P.d, [w.a]), m["\u0275mpd"](135680, P.e, P.e, [w.a, m.Injector, [2, b.Location],
                    [2, P.b], P.c, [3, P.e], w.c
                ]), m["\u0275mpd"](4608, N.h, N.h, []), m["\u0275mpd"](5120, N.a, N.b, [w.a]), m["\u0275mpd"](5120, T.c, T.j, [w.a]), m["\u0275mpd"](4608, O.c, O.y, [
                    [2, O.h], _.a
                ]), m["\u0275mpd"](5120, D.a, D.b, [w.a]), m["\u0275mpd"](5120, k.a, k.b, [w.a]), m["\u0275mpd"](4608, i.HAMMER_GESTURE_CONFIG, O.e, [
                    [2, O.i],
                    [2, O.n]
                ]), m["\u0275mpd"](5120, y.b, y.a, [
                    [3, y.b]
                ]), m["\u0275mpd"](5120, F.b, F.a, [
                    [3, F.b]
                ]), m["\u0275mpd"](5120, I.b, I.a, [
                    [3, I.b]
                ]), m["\u0275mpd"](135680, z.g, z.g, [m.NgZone, _.a]), m["\u0275mpd"](4608, A.e, A.e, [m.TemplateRef]), m["\u0275mpd"](4608, E.f, E.f, []), m["\u0275mpd"](4608, E.t, E.t, []), m["\u0275mpd"](4608, U.i, U.i, [m.PLATFORM_ID, [2, U.b],
                    [2, U.a],
                    [2, U.c]
                ]), m["\u0275mpd"](1073742336, b.CommonModule, b.CommonModule, []), m["\u0275mpd"](1073742336, R.c, R.c, []), m["\u0275mpd"](1073742336, C.a, C.a, []), m["\u0275mpd"](1073742336, x.e, x.e, []), m["\u0275mpd"](1073742336, Z.c, Z.c, []), m["\u0275mpd"](1073742336, H.a, H.a, []), m["\u0275mpd"](1073742336, J.a, J.a, [
                    [2, R.h], m.PLATFORM_ID
                ]), m["\u0275mpd"](1073742336, O.n, O.n, [
                    [2, O.f],
                    [2, i.HAMMER_LOADER]
                ]), m["\u0275mpd"](1073742336, _.b, _.b, []), m["\u0275mpd"](1073742336, O.x, O.x, []), m["\u0275mpd"](1073742336, O.v, O.v, []), m["\u0275mpd"](1073742336, O.s, O.s, []), m["\u0275mpd"](1073742336, j.g, j.g, []), m["\u0275mpd"](1073742336, B.c, B.c, []), m["\u0275mpd"](1073742336, w.e, w.e, []), m["\u0275mpd"](1073742336, L.c, L.c, []), m["\u0275mpd"](1073742336, M.d, M.d, []), m["\u0275mpd"](1073742336, z.a, z.a, []), m["\u0275mpd"](1073742336, V.a, V.a, []), m["\u0275mpd"](1073742336, q.c, q.c, []), m["\u0275mpd"](1073742336, S.a, S.a, []), m["\u0275mpd"](1073742336, G.a, G.a, []), m["\u0275mpd"](1073742336, Q.b, Q.b, []), m["\u0275mpd"](1073742336, Q.a, Q.a, []), m["\u0275mpd"](1073742336, W.b, W.b, []), m["\u0275mpd"](1073742336, P.i, P.i, []), m["\u0275mpd"](1073742336, N.i, N.i, []), m["\u0275mpd"](1073742336, K.b, K.b, []), m["\u0275mpd"](1073742336, $.c, $.c, []), m["\u0275mpd"](1073742336, X.a, X.a, []), m["\u0275mpd"](1073742336, Y.e, Y.e, []), m["\u0275mpd"](1073742336, O.o, O.o, []), m["\u0275mpd"](1073742336, dd.a, dd.a, []), m["\u0275mpd"](1073742336, pd.c, pd.c, []), m["\u0275mpd"](1073742336, ad.c, ad.c, []), m["\u0275mpd"](1073742336, md.b, md.b, []), m["\u0275mpd"](1073742336, od.c, od.c, []), m["\u0275mpd"](1073742336, T.i, T.i, []), m["\u0275mpd"](1073742336, T.f, T.f, []), m["\u0275mpd"](1073742336, O.z, O.z, []), m["\u0275mpd"](1073742336, O.p, O.p, []), m["\u0275mpd"](1073742336, D.c, D.c, []), m["\u0275mpd"](1073742336, k.c, k.c, []), m["\u0275mpd"](1073742336, y.c, y.c, []), m["\u0275mpd"](1073742336, nd.a, nd.a, []), m["\u0275mpd"](1073742336, td.c, td.c, []), m["\u0275mpd"](1073742336, ed.a, ed.a, []), m["\u0275mpd"](1073742336, ld.h, ld.h, []), m["\u0275mpd"](1073742336, cd.b, cd.b, []), m["\u0275mpd"](1073742336, cd.a, cd.a, []), m["\u0275mpd"](1073742336, rd.a, rd.a, []), m["\u0275mpd"](1073742336, id.d, id.d, []), m["\u0275mpd"](1073742336, F.c, F.c, []), m["\u0275mpd"](1073742336, ud.e, ud.e, []), m["\u0275mpd"](1073742336, I.c, I.c, []), m["\u0275mpd"](1073742336, sd.o, sd.o, []), m["\u0275mpd"](1073742336, bd.a, bd.a, []), m["\u0275mpd"](1073742336, hd.a, hd.a, []), m["\u0275mpd"](1073742336, fd.b, fd.b, []), m["\u0275mpd"](1073742336, A.c, A.c, []), m["\u0275mpd"](1073742336, gd.a, gd.a, []), m["\u0275mpd"](1073742336, vd.a, vd.a, []), m["\u0275mpd"](1073742336, E.s, E.s, []), m["\u0275mpd"](1073742336, E.p, E.p, []), m["\u0275mpd"](1073742336, U.m, U.m, []), m["\u0275mpd"](1073742336, U.j, U.j, []), m["\u0275mpd"](1073742336, E.i, E.i, []), m["\u0275mpd"](1073742336, U.h, U.h, []), m["\u0275mpd"](1073742336, Rd.a, Rd.a, []), m["\u0275mpd"](1073742336, s.s, s.s, [
                    [2, s.x],
                    [2, s.o]
                ]), m["\u0275mpd"](1073742336, wd, wd, []), m["\u0275mpd"](1073742336, o, o, []), m["\u0275mpd"](256, W.a, {
                    separatorKeyCodes: [Cd.f]
                }, []), m["\u0275mpd"](256, O.g, O.k, []), m["\u0275mpd"](1024, s.k, (function() {
                    return [
                        [{
                            path: "",
                            component: u
                        }]
                    ]
                }), [])])
            }))
        }
    }
]);