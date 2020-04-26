(window.webpackJsonp = window.webpackJsonp || []).push([
    [7], {
        1006: function(t, n, e) {
            "use strict";
            e.r(n);
            var r, o, a = e(66),
                i = e(565),
                c = function(t, n) {
                    n.addEnumToInterface({
                        version: "3.x",
                        namespace: "App",
                        name: "Phase",
                        values: i.b
                    });
                    var e = [void 0],
                        r = function(t) {
                            return e[0] = Object(i.e)(t.phase), e
                        };
                    t.subscribe(a.a, (function(t) {
                        n.broadcast(i.a.PHASE_CHANGE, r, t)
                    }))
                },
                u = function(t, n) {
                    n.addEnumToInterface({
                        version: "3.x",
                        namespace: "App",
                        name: "Application",
                        values: i.c
                    }), n.addEnumToInterface({
                        version: "3.x",
                        namespace: "App",
                        name: "Event",
                        values: i.a
                    });
                    var e = [void 0],
                        r = function(t) {
                            return e[0] = Object(i.f)(t.application), e
                        };
                    t.subscribe(a.b, (function(t) {
                        n.broadcast(i.a.APP_CHANGE, r, t)
                    }))
                },
                l = e(727),
                s = e(21),
                f = e(159),
                p = (r = function(t, n) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, n) {
                            t.__proto__ = n
                        } || function(t, n) {
                            for (var e in n) n.hasOwnProperty(e) && (t[e] = n[e])
                        })(t, n)
                }, function(t, n) {
                    function e() {
                        this.constructor = t
                    }
                    r(t, n), t.prototype = null === n ? Object.create(n) : (e.prototype = n.prototype, new e)
                }),
                d = function(t, n, e, r) {
                    return new(e || (e = Promise))((function(o, a) {
                        function i(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function c(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new e((function(n) {
                                n(t.value)
                            })).then(i, c)
                        }
                        u((r = r.apply(t, n || [])).next())
                    }))
                },
                h = function(t, n) {
                    var e, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: c(0),
                        throw: c(1),
                        return: c(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function c(a) {
                        return function(c) {
                            return function(a) {
                                if (e) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (e = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1], o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2], i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = n.call(t, i)
                                } catch (t) {
                                    a = [6, t], r = 0
                                } finally {
                                    e = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, c])
                        }
                    }
                },
                y = function(t) {
                    function n() {
                        var n = t.call(this) || this;
                        return n.id = "GET_APP_STATE", n
                    }
                    return p(n, t), n
                }(s.a),
                b = function(t, n, e) {
                    t.waitForModule(f.default).then((function(t) {
                        n.addBinding(y, (function(n) {
                            return d(void 0, void 0, void 0, (function() {
                                var n;
                                return h(this, (function(e) {
                                    try {
                                        return n = t.getData(), [2, {
                                            phase: Object(i.e)(n.phase),
                                            application: Object(i.f)(n.application)
                                        }]
                                    } catch (t) {
                                        throw Error("Error: Can't get application data at this time")
                                    }
                                    return [2]
                                }))
                            }))
                        }))
                    })), e.addCommandToInterface({
                        version: "3.x",
                        namespace: "App",
                        name: "getState",
                        args: []
                    }, (function() {
                        return new y
                    }))
                },
                v = e(15),
                w = function() {
                    var t = function(n, e) {
                        return (t = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(t, n) {
                                t.__proto__ = n
                            } || function(t, n) {
                                for (var e in n) n.hasOwnProperty(e) && (t[e] = n[e])
                            })(n, e)
                    };
                    return function(n, e) {
                        function r() {
                            this.constructor = n
                        }
                        t(n, e), n.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
                    }
                }(),
                m = function(t, n, e, r) {
                    return new(e || (e = Promise))((function(o, a) {
                        function i(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function c(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new e((function(n) {
                                n(t.value)
                            })).then(i, c)
                        }
                        u((r = r.apply(t, n || [])).next())
                    }))
                },
                g = function(t, n) {
                    var e, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: c(0),
                        throw: c(1),
                        return: c(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function c(a) {
                        return function(c) {
                            return function(a) {
                                if (e) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (e = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1], o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2], i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = n.call(t, i)
                                } catch (t) {
                                    a = [6, t], r = 0
                                } finally {
                                    e = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, c])
                        }
                    }
                },
                x = function(t) {
                    function n() {
                        var n = t.call(this) || this;
                        return n.id = "GET_APP_PHASE_TIMES", n
                    }
                    return w(n, t), n
                }(s.a),
                O = function(t, n, e) {
                    n.addBinding(x, (function() {
                        return m(void 0, void 0, void 0, (function() {
                            var n, e, r, o, a, c;
                            return g(this, (function(u) {
                                switch (u.label) {
                                    case 0:
                                        return (n = {})[i.b.WAITING] = null, n[i.b.LOADING] = null, n[i.b.STARTING] = null, n[i.b.PLAYING] = null, n[i.b.ERROR] = null, e = n, [4, t.market.waitForData(v.c)];
                                    case 1:
                                        for (o in (r = u.sent()).phaseTimes) a = Number(o), (c = Object(i.e)(a)) && (e[c] = r.phaseTimes[a]);
                                        return [2, e]
                                }
                            }))
                        }))
                    })), e.addCommandToInterface({
                        version: "3.x",
                        namespace: "App",
                        name: "getLoadTimes",
                        args: []
                    }, (function() {
                        return new x
                    }))
                },
                T = function(t, n, e, r) {
                    return new(e || (e = Promise))((function(o, a) {
                        function i(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function c(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new e((function(n) {
                                n(t.value)
                            })).then(i, c)
                        }
                        u((r = r.apply(t, n || [])).next())
                    }))
                },
                E = function(t, n) {
                    var e, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: c(0),
                        throw: c(1),
                        return: c(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function c(a) {
                        return function(c) {
                            return function(a) {
                                if (e) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (e = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1], o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2], i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = n.call(t, i)
                                } catch (t) {
                                    a = [6, t], r = 0
                                } finally {
                                    e = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, c])
                        }
                    }
                },
                _ = function(t, n) {
                    var e = "function" == typeof Symbol && t[Symbol.iterator];
                    if (!e) return t;
                    var r, o, a = e.call(t),
                        i = [];
                    try {
                        for (;
                            (void 0 === n || n-- > 0) && !(r = a.next()).done;) i.push(r.value)
                    } catch (t) {
                        o = {
                            error: t
                        }
                    } finally {
                        try {
                            r && !r.done && (e = a.return) && e.call(a)
                        } finally {
                            if (o) throw o.error
                        }
                    }
                    return i
                },
                S = function() {
                    for (var t = [], n = 0; n < arguments.length; n++) t = t.concat(_(arguments[n]));
                    return t
                },
                P = function() {
                    function t(t, n, e) {
                        var r;
                        this.dependencies = t, this.subscribeToChanges = n, this.freshDataCache = new e, this.currData = new e, (r = this.currData).update.apply(r, S(this.dependencies))
                    }
                    return t.create = function(n, e, r) {
                        return T(this, void 0, void 0, (function() {
                            return E(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, n()];
                                    case 1:
                                        return [2, new t(o.sent(), e, r)]
                                }
                            }))
                        }))
                    }, t.prototype.getData = function() {
                        return this.currData.data
                    }, t.prototype.subscribe = function(t) {
                        var n, e = this;
                        return (n = this.currData).update.apply(n, S(this.dependencies)), this.subscribeToChanges.apply(this, S([function() {
                            var n;
                            (n = e.freshDataCache).update.apply(n, S(e.dependencies)), e.freshDataCache.equals(e.currData) || (e.currData.copy(e.freshDataCache), t())
                        }], this.dependencies))
                    }, t
                }(),
                k = e(23),
                A = function(t, n) {
                    var e = P.create((function() {
                        return Promise.all([t.market.waitForData(v.c)])
                    }), (function(t, n) {
                        return n.onChanged(t)
                    }), I);
                    n.addObservableToInterface({
                        version: "3.1",
                        namespace: "App",
                        name: "state"
                    }, e)
                },
                I = function() {
                    function t() {
                        this.data = {
                            phase: i.b.UNINITIALIZED,
                            phaseTimes: {},
                            application: i.c.SHOWCASE
                        }
                    }
                    return t.prototype.equals = function(t) {
                        return !Object(k.b)(this, t)
                    }, t.prototype.copy = function(t) {
                        this.data.phase = t.data.phase, this.data.application = t.data.application, Object.assign(this.data.phaseTimes, t.data.phaseTimes)
                    }, t.prototype.update = function(t) {
                        this.data.phase = Object(i.e)(t.phase), this.data.application = Object(i.f)(t.application), this.data.phaseTimes[i.b.WAITING] = t.phaseTimes[v.a.WAITING], this.data.phaseTimes[i.b.LOADING] = t.phaseTimes[v.a.LOADING], this.data.phaseTimes[i.b.PLAYING] = t.phaseTimes[v.a.PLAYING], this.data.phaseTimes[i.b.STARTING] = t.phaseTimes[v.a.STARTING], this.data.phaseTimes[i.b.UNINITIALIZED] = t.phaseTimes[v.a.UNINITIALIZED], this.data.phaseTimes[i.b.ERROR] = t.phaseTimes[v.a.ERROR]
                    }, t
                }();
            ! function(t) {
                t.FORWARD = "FORWARD", t.LEFT = "LEFT", t.RIGHT = "RIGHT", t.BACK = "BACK", t.UP = "UP", t.DOWN = "DOWN"
            }(o || (o = {}));
            var D, j, N, C = e(10),
                M = {
                    FORWARD: C.b.FORWARD.clone(),
                    LEFT: C.b.LEFT.clone(),
                    RIGHT: C.b.RIGHT.clone(),
                    BACK: C.b.BACK.clone(),
                    UP: C.b.UP.clone(),
                    DOWN: C.b.DOWN.clone()
                },
                F = e(2),
                G = function() {
                    var t = function(n, e) {
                        return (t = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(t, n) {
                                t.__proto__ = n
                            } || function(t, n) {
                                for (var e in n) n.hasOwnProperty(e) && (t[e] = n[e])
                            })(n, e)
                    };
                    return function(n, e) {
                        function r() {
                            this.constructor = n
                        }
                        t(n, e), n.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
                    }
                }(),
                R = function(t, n, e, r) {
                    return new(e || (e = Promise))((function(o, a) {
                        function i(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function c(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new e((function(n) {
                                n(t.value)
                            })).then(i, c)
                        }
                        u((r = r.apply(t, n || [])).next())
                    }))
                },
                L = function(t, n) {
                    var e, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: c(0),
                        throw: c(1),
                        return: c(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function c(a) {
                        return function(c) {
                            return function(a) {
                                if (e) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (e = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1], o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2], i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = n.call(t, i)
                                } catch (t) {
                                    a = [6, t], r = 0
                                } finally {
                                    e = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, c])
                        }
                    }
                },
                z = function(t, n, e) {
                    t.waitForModule(F.V).then((function(t) {
                        return n.addBinding(B, (function(n) {
                            return R(void 0, void 0, void 0, (function() {
                                var e, r, a;
                                return L(this, (function(i) {
                                    switch (i.label) {
                                        case 0:
                                            if (e = Object.keys(o), -1 === (r = e.indexOf(n.direction))) throw new Error(n.direction + " is not a valid direction");
                                            return a = e[r], [4, t.navigateInLocalDirection(M[a])];
                                        case 1:
                                            return i.sent(), [2]
                                    }
                                }))
                            }))
                        }))
                    }));
                    e.addEnumToInterface({
                        version: "3.x",
                        namespace: "Camera",
                        name: "Direction",
                        values: o
                    }), e.addCommandToInterface({
                        version: "3.x",
                        namespace: "Camera",
                        name: "moveInDirection",
                        args: ["direction"]
                    }, (function(t) {
                        return new B(t || {})
                    }))
                },
                B = function(t) {
                    function n(n) {
                        var e = t.call(this) || this;
                        return e.id = "MOVE_DIRECTION", e.payload = n, e
                    }
                    return G(n, t), n
                }(s.a),
                H = e(619),
                V = e(5),
                U = function() {
                    var t = function(n, e) {
                        return (t = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(t, n) {
                                t.__proto__ = n
                            } || function(t, n) {
                                for (var e in n) n.hasOwnProperty(e) && (t[e] = n[e])
                            })(n, e)
                    };
                    return function(n, e) {
                        function r() {
                            this.constructor = n
                        }
                        t(n, e), n.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
                    }
                }(),
                W = function(t, n, e, r) {
                    return new(e || (e = Promise))((function(o, a) {
                        function i(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function c(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new e((function(n) {
                                n(t.value)
                            })).then(i, c)
                        }
                        u((r = r.apply(t, n || [])).next())
                    }))
                },
                K = function(t, n) {
                    var e, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: c(0),
                        throw: c(1),
                        return: c(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function c(a) {
                        return function(c) {
                            return function(a) {
                                if (e) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (e = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1], o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2], i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = n.call(t, i)
                                } catch (t) {
                                    a = [6, t], r = 0
                                } finally {
                                    e = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, c])
                        }
                    }
                },
                Y = function(t, n, e) {
                    Promise.all([t.waitForModule(F.f), t.waitForModule(F.c)]).then((function(t) {
                        var e = t[0],
                            r = t[1];
                        n.addBinding(X, (function(t) {
                            return W(void 0, void 0, void 0, (function() {
                                var n, o, a, i, c, u;
                                return K(this, (function(l) {
                                    switch (l.label) {
                                        case 0:
                                            return n = r.getData(!1), o = n.pose.position, a = t.x - o.x, i = t.z - o.z, c = new V.a(a, i), u = c.length(), c.setLength(.005), [4, e.startTranslateTransition(u / .005, c, !1)];
                                        case 1:
                                            return l.sent(), [2]
                                    }
                                }))
                            }))
                        }))
                    }));
                    e.addCommandToInterface({
                        version: "3.x",
                        namespace: "Camera",
                        name: "pan",
                        args: ["position"]
                    }, (function(t) {
                        if ((t = t || {}).position = t.position || {}, t.position.x = t.position.x - 0, t.position.z = t.position.z - 0, isNaN(t.position.x) || isNaN(t.position.z)) throw new Error(JSON.stringify(t) + " does not contain a valid position to pan");
                        return new X({
                            x: t.position.x,
                            z: t.position.z
                        })
                    }))
                },
                X = function(t) {
                    function n(n) {
                        var e = t.call(this) || this;
                        return e.id = "PAN", e.payload = {
                            x: n.x,
                            z: n.z
                        }, e
                    }
                    return U(n, t), n
                }(s.a),
                Z = e(13),
                J = e(98),
                q = e(61),
                Q = e(113),
                $ = e(20),
                tt = function() {
                    var t = function(n, e) {
                        return (t = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(t, n) {
                                t.__proto__ = n
                            } || function(t, n) {
                                for (var e in n) n.hasOwnProperty(e) && (t[e] = n[e])
                            })(n, e)
                    };
                    return function(n, e) {
                        function r() {
                            this.constructor = n
                        }
                        t(n, e), n.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
                    }
                }(),
                nt = function(t, n, e, r) {
                    return new(e || (e = Promise))((function(o, a) {
                        function i(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function c(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new e((function(n) {
                                n(t.value)
                            })).then(i, c)
                        }
                        u((r = r.apply(t, n || [])).next())
                    }))
                },
                et = function(t, n) {
                    var e, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: c(0),
                        throw: c(1),
                        return: c(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function c(a) {
                        return function(c) {
                            return function(a) {
                                if (e) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (e = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1], o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2], i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = n.call(t, i)
                                } catch (t) {
                                    a = [6, t], r = 0
                                } finally {
                                    e = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, c])
                        }
                    }
                },
                rt = function(t, n) {
                    var e = "function" == typeof Symbol && t[Symbol.iterator];
                    if (!e) return t;
                    var r, o, a = e.call(t),
                        i = [];
                    try {
                        for (;
                            (void 0 === n || n-- > 0) && !(r = a.next()).done;) i.push(r.value)
                    } catch (t) {
                        o = {
                            error: t
                        }
                    } finally {
                        try {
                            r && !r.done && (e = a.return) && e.call(a)
                        } finally {
                            if (o) throw o.error
                        }
                    }
                    return i
                },
                ot = Z.a.degToRad(80) / 1e3,
                at = function(t, n, e) {
                    Promise.all([t.waitForModule(F.f), t.market.waitForData(q.a), t.market.waitForData(Q.a)]).then((function(t) {
                        var e = rt(t, 3),
                            r = e[0],
                            o = e[1],
                            a = e[2];
                        n.addBinding(ut, (function(t) {
                            return nt(void 0, void 0, void 0, (function() {
                                return et(this, (function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return [4, it(r, t)];
                                        case 1:
                                            return [2, n.sent()]
                                    }
                                }))
                            }))
                        })), n.addBinding(lt, (function(t) {
                            return nt(void 0, void 0, void 0, (function() {
                                return et(this, (function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return [4, ct(o, r, a, t)];
                                        case 1:
                                            return [2, n.sent()]
                                    }
                                }))
                            }))
                        }))
                    }));
                    var r = function(t) {
                        var n = (t = t || {}).options || {},
                            e = Z.a.degToRad(t.xAngle || 0),
                            r = Z.a.degToRad(t.yAngle || 0),
                            o = Z.a.degToRad(t.zAngle || 0),
                            a = ot;
                        if (n.speed) {
                            if (isNaN(n.speed) || n.speed <= 0) throw new Error(JSON.stringify(n) + " does not contain valid rotation speed");
                            a = Z.a.degToRad(n.speed) / 1e3
                        }
                        if (isNaN(e) || isNaN(r) || isNaN(o)) throw new Error(JSON.stringify(t) + " does not contain valid rotation angles");
                        return {
                            xAngle: e,
                            yAngle: r,
                            zAngle: o,
                            rotationSpeed: a
                        }
                    };
                    e.addCommandToInterface({
                        version: "3.x",
                        namespace: "Camera",
                        name: "rotate",
                        args: ["xAngle", "yAngle", "options"]
                    }, (function(t) {
                        return new ut(r(t))
                    })), e.addCommandToInterface({
                        version: "3.x",
                        namespace: "Camera",
                        name: "setRotation",
                        args: ["rotation", "options"]
                    }, (function(t) {
                        var n = (t = t || {}).rotation || {};
                        return new lt(r({
                            xAngle: n.x,
                            yAngle: n.y,
                            zAngle: n.z,
                            options: t.options
                        }))
                    }))
                },
                it = function(t, n) {
                    return nt(void 0, void 0, void 0, (function() {
                        var e, r, o, a, i, c, u, l, s, f, p, d, h, y;
                        return et(this, (function(b) {
                            return e = n.rotationSpeed, r = 0, o = Math.abs(n.xAngle), a = Math.abs(n.yAngle), (i = Math.max(o, a)) >= Math.PI ? (c = i / Math.PI, u = Math.floor(c), f = o - (l = o / c) * u, p = a - (s = a / c) * u, d = Math.acos(Math.cos(l) * Math.cos(s)) * u, h = Math.acos(Math.cos(f) * Math.cos(p)), r = d + h) : r = Math.acos(Math.cos(Math.abs(n.xAngle)) * Math.cos(Math.abs(n.yAngle))), r ? ((y = new V.a(-n.xAngle, n.yAngle)).multiplyScalar(e / r), [2, t.startRotateTransition(r / e, y, !1)]) : [2]
                        }))
                    }))
                },
                ct = (D = new J.a, j = new J.a, function(t, n, e, r) {
                    return nt(void 0, void 0, void 0, (function() {
                        var o, a, i;
                        return et(this, (function(c) {
                            if (e.currentMode !== $.a.Panorama) throw Error("Camera.setRotation is only available in Panorama mode");
                            return o = r.xAngle % (.5 * Math.PI), a = r.yAngle % (2 * Math.PI), i = t.pose.rotation, D.setFromQuaternion(i, "YXZ"), j.set(o - D.x, a - D.y, 0, "YXZ"), j.y %= 2 * Math.PI, [2, it(n, {
                                xAngle: -j.y,
                                yAngle: j.x,
                                zAngle: 0,
                                rotationSpeed: r.rotationSpeed
                            })]
                        }))
                    }))
                }),
                ut = function(t) {
                    function n(n) {
                        var e = t.call(this) || this;
                        return e.id = "ROTATE", e.payload = {
                            xAngle: n.xAngle,
                            yAngle: n.yAngle,
                            zAngle: n.zAngle,
                            rotationSpeed: n.rotationSpeed
                        }, e
                    }
                    return tt(n, t), n
                }(s.a),
                lt = function(t) {
                    function n() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return tt(n, t), n
                }(ut);
            ! function(t) {
                t.MOVE = "camera.move"
            }(N || (N = {}));
            var st = e(129),
                ft = e(3),
                pt = e(60),
                dt = new ft.a("broadcast.move"),
                ht = function(t, n) {
                    Promise.all([t.market.waitForData(q.a), t.market.waitForData(pt.a), t.market.waitForData(Q.a)]).then((function(t) {
                        var e, r, o, a = t[0],
                            i = t[1],
                            c = t[2],
                            u = [{
                                position: {
                                    x: 0,
                                    y: 0,
                                    z: 0
                                },
                                rotation: {
                                    x: 0,
                                    y: 0
                                },
                                projection: new Float32Array(16),
                                sweep: "",
                                mode: st.b.TRANSITIONING
                            }],
                            l = (e = 0, r = !1, o = function() {
                                return Object(H.c)(u[0], a, i, c), u
                            }, function() {
                                var t = Date.now(),
                                    a = e + 100;
                                if (t > a) {
                                    r = !1, e = t;
                                    try {
                                        n.broadcast(N.MOVE, o)
                                    } catch (t) {
                                        dt.debug("failed to broadcast pose, one of the module dependencies are probably not loaded yet")
                                    }
                                } else r || (setTimeout((function() {
                                    return l()
                                }), a - t), r = !0)
                            });
                        a.onChanged(l), c.onChanged(l)
                    })), n.addEnumToInterface({
                        version: "3.x",
                        namespace: "Camera",
                        name: "Event",
                        values: N
                    })
                },
                yt = e(73),
                bt = function() {
                    var t = function(n, e) {
                        return (t = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(t, n) {
                                t.__proto__ = n
                            } || function(t, n) {
                                for (var e in n) n.hasOwnProperty(e) && (t[e] = n[e])
                            })(n, e)
                    };
                    return function(n, e) {
                        function r() {
                            this.constructor = n
                        }
                        t(n, e), n.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
                    }
                }(),
                vt = function(t, n, e, r) {
                    return new(e || (e = Promise))((function(o, a) {
                        function i(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function c(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new e((function(n) {
                                n(t.value)
                            })).then(i, c)
                        }
                        u((r = r.apply(t, n || [])).next())
                    }))
                },
                wt = function(t, n) {
                    var e, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: c(0),
                        throw: c(1),
                        return: c(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function c(a) {
                        return function(c) {
                            return function(a) {
                                if (e) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (e = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1], o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2], i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = n.call(t, i)
                                } catch (t) {
                                    a = [6, t], r = 0
                                } finally {
                                    e = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, c])
                        }
                    }
                },
                mt = function(t, n) {
                    var e = "function" == typeof Symbol && t[Symbol.iterator];
                    if (!e) return t;
                    var r, o, a = e.call(t),
                        i = [];
                    try {
                        for (;
                            (void 0 === n || n-- > 0) && !(r = a.next()).done;) i.push(r.value)
                    } catch (t) {
                        o = {
                            error: t
                        }
                    } finally {
                        try {
                            r && !r.done && (e = a.return) && e.call(a)
                        } finally {
                            if (o) throw o.error
                        }
                    }
                    return i
                },
                gt = Z.a.degToRad(40) / 1e3,
                xt = function(t) {
                    function n(n) {
                        var e = t.call(this) || this;
                        return e.payload = n, e
                    }
                    return bt(n, t), n
                }(s.a);

            function Ot(t, n, e) {
                Promise.all([t.waitForModule(F.f)]).then((function(e) {
                    var r = mt(e, 1)[0];
                    n.addBinding(xt, (function(n) {
                        return void 0 === n && (n = {}), vt(this, void 0, void 0, (function() {
                            var e, o, a, i, c, u, l, s;
                            return wt(this, (function(f) {
                                if (!(e = t.market.tryGetData(Q.a)) || !e.isPano()) throw Error("Camera.lookAtScreenCoords must be called from Inside mode");
                                if (!(o = t.market.tryGetData(q.a))) throw Error("Error resolving current pose");
                                return a = Object(yt.c)(n.x, n.y, o.width, o.height), i = C.b.FORWARD.clone().applyQuaternion(o.pose.rotation), c = Object(yt.a)(o, new V.a(a.x, a.y), 1).normalize(), u = i.clone().setY(0).angleTo(c.clone().setY(0)), l = Math.asin(c.y - i.y), s = u * Math.sign(a.x), [2, it(r, {
                                    xAngle: s,
                                    yAngle: l,
                                    zAngle: 0,
                                    rotationSpeed: gt
                                })]
                            }))
                        }))
                    }))
                })), e.addCommandToInterface({
                    version: "3.x",
                    namespace: "Camera",
                    name: "lookAtScreenCoords",
                    args: ["x", "y"]
                }, (function(t) {
                    if (void 0 === t && (t = {}), t.x = t.x || 0, t.y = t.y || 0, isNaN(t.x) || isNaN(t.y)) throw new Error(JSON.stringify(t) + " does not contain valid screen coordinates");
                    return new xt({
                        x: t.x,
                        y: t.y
                    })
                }))
            }
            var Tt, Et = e(167),
                _t = e(160),
                St = e(590),
                Pt = function(t, n, e, r) {
                    return new(e || (e = Promise))((function(o, a) {
                        function i(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function c(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new e((function(n) {
                                n(t.value)
                            })).then(i, c)
                        }
                        u((r = r.apply(t, n || [])).next())
                    }))
                },
                kt = function(t, n) {
                    var e, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: c(0),
                        throw: c(1),
                        return: c(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function c(a) {
                        return function(c) {
                            return function(a) {
                                if (e) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (e = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1], o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2], i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = n.call(t, i)
                                } catch (t) {
                                    a = [6, t], r = 0
                                } finally {
                                    e = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, c])
                        }
                    }
                },
                At = function(t, n) {
                    var e = "function" == typeof Symbol && t[Symbol.iterator];
                    if (!e) return t;
                    var r, o, a = e.call(t),
                        i = [];
                    try {
                        for (;
                            (void 0 === n || n-- > 0) && !(r = a.next()).done;) i.push(r.value)
                    } catch (t) {
                        o = {
                            error: t
                        }
                    } finally {
                        try {
                            r && !r.done && (e = a.return) && e.call(a)
                        } finally {
                            if (o) throw o.error
                        }
                    }
                    return i
                },
                It = function(t, n) {
                    return Pt(void 0, void 0, void 0, (function() {
                        var e, r, o, a, i, c;
                        return kt(this, (function(u) {
                            switch (u.label) {
                                case 0:
                                    return [4, Promise.all([t.market.waitForData(q.a), t.market.waitForData(pt.a), t.market.waitForData(Q.a)])];
                                case 1:
                                    return e = At.apply(void 0, [u.sent(), 3]), r = e[0], o = e[1], a = e[2], i = new Et.a((function() {}), (function(t) {
                                        r.onChanged(t), o.onChanged(t), a.onChanged(t)
                                    }), (function(t) {
                                        r.removeOnChanged(t), o.removeOnChanged(t), a.removeOnChanged(t)
                                    })), c = P.create((function() {
                                        return Promise.all([t.market.waitForData(q.a), t.market.waitForData(pt.a), t.market.waitForData(Q.a)])
                                    }), (function(t) {
                                        return i.createSubscription(t, !0)
                                    }), Dt), n.addObservableToInterface({
                                        version: "3.1",
                                        namespace: "Camera",
                                        name: "pose"
                                    }, c), [2]
                            }
                        }))
                    }))
                },
                Dt = function() {
                    function t() {
                        this._data = {
                            position: {
                                x: 0,
                                y: 0,
                                z: 0
                            },
                            rotation: {
                                x: 0,
                                y: 0
                            },
                            projection: new Float32Array(16),
                            sweep: "",
                            mode: st.b.TRANSITIONING
                        }
                    }
                    return Object.defineProperty(t.prototype, "data", {
                        get: function() {
                            return this._data
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.equals = function(t) {
                        return Object(_t.a)(t.data.position.x, this.data.position.x, 1e-5) && Object(_t.a)(t.data.position.y, this.data.position.y, 1e-5) && Object(_t.a)(t.data.position.z, this.data.position.z, 1e-5) && Object(_t.a)(t.data.rotation.x, this.data.rotation.x, 1e-5) && Object(_t.a)(t.data.rotation.y, this.data.rotation.y, 1e-5) && function(t, n) {
                            for (var e = 0; e < t.length; ++e)
                                if (!Object(_t.a)(t[e], n[e], 1e-5)) return !1;
                            return !0
                        }(t.data.projection, this.data.projection) && t.data.sweep === this.data.sweep && t.data.mode === this.data.mode
                    }, t.prototype.copy = function(t) {
                        this.data.position.x = t.data.position.x, this.data.position.y = t.data.position.y, this.data.position.z = t.data.position.z, this.data.rotation.x = t.data.rotation.x, this.data.rotation.y = t.data.rotation.y;
                        for (var n = 0; n < t.data.projection.length; ++n) this.data.projection[n] = t.data.projection[n];
                        this.data.sweep = t.data.sweep, this.data.mode = t.data.mode
                    }, t.prototype.update = function(t, n, e) {
                        var r = (new J.a).setFromQuaternion(t.pose.rotation, "YXZ"),
                            o = n.currentSweep && n.isSweepUnaligned(n.currentSweep);
                        this.data.position.x = t.pose.position.x, this.data.position.y = t.pose.position.y, this.data.position.z = t.pose.position.z, this.data.rotation.x = Z.a.radToDeg(r.x), this.data.rotation.y = Z.a.radToDeg(r.y), this.data.projection = Float32Array.from(t.pose.projection.asThreeMatrix4().transpose().elements), this.data.sweep = n.currentSweep, this.data.mode = Object(St.a)(e.currentMode, !o)
                    }, t
                }(),
                jt = e(729),
                Nt = e(620),
                Ct = e(57),
                Mt = e(1),
                Ft = e(56),
                Gt = e(123),
                Rt = e(43),
                Lt = e(188),
                zt = function(t, n, e, r) {
                    return new(e || (e = Promise))((function(o, a) {
                        function i(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function c(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new e((function(n) {
                                n(t.value)
                            })).then(i, c)
                        }
                        u((r = r.apply(t, n || [])).next())
                    }))
                },
                Bt = function(t, n) {
                    var e, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: c(0),
                        throw: c(1),
                        return: c(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function c(a) {
                        return function(c) {
                            return function(a) {
                                if (e) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (e = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1], o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2], i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = n.call(t, i)
                                } catch (t) {
                                    a = [6, t], r = 0
                                } finally {
                                    e = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, c])
                        }
                    }
                },
                Ht = function(t, n) {
                    var e = "function" == typeof Symbol && t[Symbol.iterator];
                    if (!e) return t;
                    var r, o, a = e.call(t),
                        i = [];
                    try {
                        for (;
                            (void 0 === n || n-- > 0) && !(r = a.next()).done;) i.push(r.value)
                    } catch (t) {
                        o = {
                            error: t
                        }
                    } finally {
                        try {
                            r && !r.done && (e = a.return) && e.call(a)
                        } finally {
                            if (o) throw o.error
                        }
                    }
                    return i
                },
                Vt = new Mt.a,
                Ut = new Mt.a,
                Wt = new Ct.a(C.b.DOWN, 0),
                Kt = function(t, n, e) {
                    Promise.all([t.waitForModule(F.Nb), t.market.waitForData(q.a), t.market.waitForData(Q.a), t.waitForModule(F.eb), t.waitForModule(F.t), t.market.waitForData(Lt.c)]).then((function(e) {
                        var r = Ht(e, 6),
                            o = r[0],
                            a = r[1],
                            i = r[2],
                            c = r[3],
                            u = r[4],
                            l = r[5],
                            s = function(t) {
                                var n = t.getFloorMins();
                                return function(t) {
                                    var e = 0;
                                    return n.every((function(n, r) {
                                        return e = r, t > n
                                    })), t > n[n.length - 1] && e++, e - 1
                                }
                            }(u);
                        n.addBinding(Nt.a, (function(n) {
                            return zt(void 0, void 0, void 0, (function() {
                                var e, r, u, f, p, d, h, y, b, v, w, m;
                                return Bt(this, (function(g) {
                                    switch (g.label) {
                                        case 0:
                                            return [4, t.after(Rt.a.End)];
                                        case 1:
                                            return g.sent(), e = o.getScene().camera, r = n.screenPosition, u = Object(yt.c)(r.x, r.y, a.width, a.height), f = null, p = -1, Vt.set(u.x, u.y, -1).unproject(e), Ut.set(u.x, u.y, 1).unproject(e), d = void 0 !== n.includeHiddenFloors && n.includeHiddenFloors, h = c.cast(Vt, Ut.clone().sub(Vt).normalize(), l.raycastGroups(d)), (y = h[0]) && y.object instanceof Gt.a && (f = y && y.point || null, p = "floorIndex" in y.object ? y.object.floorIndex : s(f.y)), void 0 === n.height ? [3, 3] : (v = (b = Vt).copy, [4, t.market.waitForData(q.a)]);
                                        case 2:
                                            v.apply(b, [g.sent().pose.position]), w = Object(yt.a)(a, u), i.currentMode !== $.a.Floorplan ? (m = Object(Ft.j)(Vt, w), Wt.set(C.b.DOWN, n.height), f = Object(Ft.h)(Vt, m, Wt) || null) : (w.y = n.height, f = w), g.label = 3;
                                        case 3:
                                            return [2, {
                                                position: f,
                                                floor: p
                                            }]
                                    }
                                }))
                            }))
                        }))
                    })), e.addCommandToInterface({
                        version: "3.x",
                        namespace: "Renderer",
                        name: "getWorldPositionData",
                        args: ["screenPosition", "height", "includeHiddenFloors"]
                    }, (function(t) {
                        return new Nt.a(t)
                    }))
                },
                Yt = e(567),
                Xt = function(t, n, e, r) {
                    return new(e || (e = Promise))((function(o, a) {
                        function i(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function c(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new e((function(n) {
                                n(t.value)
                            })).then(i, c)
                        }
                        u((r = r.apply(t, n || [])).next())
                    }))
                },
                Zt = function(t, n) {
                    var e, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: c(0),
                        throw: c(1),
                        return: c(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function c(a) {
                        return function(c) {
                            return function(a) {
                                if (e) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (e = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1], o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2], i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = n.call(t, i)
                                } catch (t) {
                                    a = [6, t], r = 0
                                } finally {
                                    e = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, c])
                        }
                    }
                },
                Jt = function(t, n, e) {
                    t.market.waitForData(q.a).then((function(t) {
                        n.addBinding(Yt.a, (function(n) {
                            return Xt(void 0, void 0, void 0, (function() {
                                return Zt(this, (function(e) {
                                    return [2, Object(yt.e)(t, n.worldPosition).screenPosition]
                                }))
                            }))
                        }))
                    })), e.addCommandToInterface({
                        version: "3.x",
                        namespace: "Renderer",
                        name: "getScreenPosition",
                        args: ["worldPosition"]
                    }, (function(t) {
                        return new Yt.a(t)
                    }))
                },
                qt = function(t, n, e, r) {
                    return new(e || (e = Promise))((function(o, a) {
                        function i(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function c(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new e((function(n) {
                                n(t.value)
                            })).then(i, c)
                        }
                        u((r = r.apply(t, n || [])).next())
                    }))
                },
                Qt = function(t, n) {
                    var e, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: c(0),
                        throw: c(1),
                        return: c(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function c(a) {
                        return function(c) {
                            return function(a) {
                                if (e) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (e = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1], o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2], i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = n.call(t, i)
                                } catch (t) {
                                    a = [6, t], r = 0
                                } finally {
                                    e = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, c])
                        }
                    }
                },
                $t = function() {
                    var t = function(n, e) {
                        return (t = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(t, n) {
                                t.__proto__ = n
                            } || function(t, n) {
                                for (var e in n) n.hasOwnProperty(e) && (t[e] = n[e])
                            })(n, e)
                    };
                    return function(n, e) {
                        function r() {
                            this.constructor = n
                        }
                        t(n, e), n.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
                    }
                }(),
                tn = function(t, n, e, r) {
                    return new(e || (e = Promise))((function(o, a) {
                        function i(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function c(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new e((function(n) {
                                n(t.value)
                            })).then(i, c)
                        }
                        u((r = r.apply(t, n || [])).next())
                    }))
                },
                nn = function(t, n) {
                    var e, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: c(0),
                        throw: c(1),
                        return: c(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function c(a) {
                        return function(c) {
                            return function(a) {
                                if (e) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (e = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1], o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2], i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = n.call(t, i)
                                } catch (t) {
                                    a = [6, t], r = 0
                                } finally {
                                    e = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, c])
                        }
                    }
                },
                en = function(t) {
                    function n() {
                        var n = null !== t && t.apply(this, arguments) || this;
                        return n.id = "GET_FLOORS_DATA", n
                    }
                    return $t(n, t), n
                }(s.a),
                rn = function(t, n, e) {
                    return tn(void 0, void 0, void 0, (function() {
                        var r = this;
                        return nn(this, (function(o) {
                            return n.addBinding(en, (function() {
                                return tn(r, void 0, void 0, (function() {
                                    return nn(this, (function(n) {
                                        return [2, t.market.waitForData(Lt.c).then((function(t) {
                                            return on(t)
                                        }))]
                                    }))
                                }))
                            })), e.addCommandToInterface({
                                version: "3.x",
                                namespace: "Floor",
                                name: "getData",
                                args: []
                            }, (function() {
                                return new en
                            })), [2]
                        }))
                    }))
                },
                on = function(t) {
                    return tn(void 0, void 0, void 0, (function() {
                        return nn(this, (function(n) {
                            try {
                                return [2, (e = t, qt(void 0, void 0, void 0, (function() {
                                    var t, n, r;
                                    return Qt(this, (function(o) {
                                        return t = e.currentFloor, n = e.totalFloors, r = e.getFloorNames(), [2, {
                                            currentFloor: t,
                                            floorNames: r,
                                            totalFloors: n
                                        }]
                                    }))
                                })))]
                            } catch (t) {
                                throw Error("no floors currently loaded")
                            }
                            var e;
                            return [2]
                        }))
                    }))
                },
                an = e(667);
            ! function(t) {
                t.CHANGE_START = "floors.changestart", t.CHANGE_END = "floors.changeend"
            }(Tt || (Tt = {}));
            var cn, un = e(544),
                ln = e(259),
                sn = function(t, n) {
                    n.addEnumToInterface({
                        version: "3.x",
                        namespace: "Floor",
                        name: "Event",
                        values: Tt
                    });
                    var e = [-1, -1],
                        r = function(t) {
                            return e[0] = t.to, e[1] = t.from, e
                        };
                    t.subscribe(un.a, (function(t) {
                        return n.broadcast(Tt.CHANGE_START, r, t)
                    }));
                    var o = [-1, ""],
                        a = function(t) {
                            return o[0] = t.floorIndex, o[1] = t.floorName, o
                        };
                    t.subscribe(ln.a, (function(t) {
                        return n.broadcast(Tt.CHANGE_END, a, t)
                    }))
                },
                fn = e(566),
                pn = e(535),
                dn = function() {
                    return (dn = Object.assign || function(t) {
                        for (var n, e = 1, r = arguments.length; e < r; e++)
                            for (var o in n = arguments[e]) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
                        return t
                    }).apply(this, arguments)
                },
                hn = function(t) {
                    var n = "function" == typeof Symbol && t[Symbol.iterator],
                        e = 0;
                    return n ? n.call(t) : {
                        next: function() {
                            return t && e >= t.length && (t = void 0), {
                                value: t && t[e++],
                                done: !t
                            }
                        }
                    }
                },
                yn = function(t, n) {
                    var e, r, o = n.getCollection(),
                        a = [],
                        i = new V.a;
                    try {
                        for (var c = hn(o), u = c.next(); !u.done; u = c.next()) {
                            var l = u.value;
                            Object(yt.e)(t, l.position, i);
                            var s = Object(k.a)(l);
                            a.push(dn({}, s, {
                                position: (new Mt.a).copy(l.position),
                                screenPosition: i
                            }))
                        }
                    } catch (t) {
                        e = {
                            error: t
                        }
                    } finally {
                        try {
                            u && !u.done && (r = c.return) && r.call(c)
                        } finally {
                            if (e) throw e.error
                        }
                    }
                    return a
                },
                bn = function() {
                    var t = function(n, e) {
                        return (t = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(t, n) {
                                t.__proto__ = n
                            } || function(t, n) {
                                for (var e in n) n.hasOwnProperty(e) && (t[e] = n[e])
                            })(n, e)
                    };
                    return function(n, e) {
                        function r() {
                            this.constructor = n
                        }
                        t(n, e), n.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
                    }
                }(),
                vn = function(t, n, e, r) {
                    return new(e || (e = Promise))((function(o, a) {
                        function i(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function c(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new e((function(n) {
                                n(t.value)
                            })).then(i, c)
                        }
                        u((r = r.apply(t, n || [])).next())
                    }))
                },
                wn = function(t, n) {
                    var e, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: c(0),
                        throw: c(1),
                        return: c(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function c(a) {
                        return function(c) {
                            return function(a) {
                                if (e) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (e = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1], o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2], i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = n.call(t, i)
                                } catch (t) {
                                    a = [6, t], r = 0
                                } finally {
                                    e = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, c])
                        }
                    }
                },
                mn = function(t) {
                    function n() {
                        var n = null !== t && t.apply(this, arguments) || this;
                        return n.id = "LABEL_GET", n
                    }
                    return bn(n, t), n
                }(s.a),
                gn = function(t, n, e) {
                    n.addBinding(mn, (function() {
                        return vn(void 0, void 0, void 0, (function() {
                            return wn(this, (function(n) {
                                return [2, Promise.all([t.market.waitForData(q.a), t.market.waitForData(pn.a)]).then((function(t) {
                                    return yn(t[0], t[1])
                                }))]
                            }))
                        }))
                    })), e.addCommandToInterface({
                        version: "3.x",
                        namespace: "Label",
                        name: "getData",
                        args: []
                    }, (function() {
                        return new mn
                    }))
                };
            ! function(t) {
                t.VISIBILITY_CHANGED = "label.visibilitychange", t.POSITION_UPDATED = "label.positionupdated"
            }(cn || (cn = {}));
            var xn, On = function(t, n) {
                    var e = "function" == typeof Symbol && t[Symbol.iterator];
                    if (!e) return t;
                    var r, o, a = e.call(t),
                        i = [];
                    try {
                        for (;
                            (void 0 === n || n-- > 0) && !(r = a.next()).done;) i.push(r.value)
                    } catch (t) {
                        o = {
                            error: t
                        }
                    } finally {
                        try {
                            r && !r.done && (e = a.return) && e.call(a)
                        } finally {
                            if (o) throw o.error
                        }
                    }
                    return i
                },
                Tn = function(t, n) {
                    n.addEnumToInterface({
                        version: "3.x",
                        namespace: "Label",
                        name: "Event",
                        values: cn
                    }), Promise.all([t.market.waitForData(q.a), t.market.waitForData(pn.a), t.market.waitForData(Q.a)]).then((function(t) {
                        var e = On(t, 3),
                            r = e[0],
                            o = e[1],
                            a = e[2],
                            i = function() {
                                return [yn(r, o)]
                            };
                        r.onChanged((function(t) {
                            a.currentMode === $.a.Floorplan && n.broadcast(cn.POSITION_UPDATED, i, t)
                        }))
                    }))
                },
                En = e(538),
                _n = function() {
                    var t = function(n, e) {
                        return (t = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(t, n) {
                                t.__proto__ = n
                            } || function(t, n) {
                                for (var e in n) n.hasOwnProperty(e) && (t[e] = n[e])
                            })(n, e)
                    };
                    return function(n, e) {
                        function r() {
                            this.constructor = n
                        }
                        t(n, e), n.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
                    }
                }(),
                Sn = function(t, n, e, r) {
                    return new(e || (e = Promise))((function(o, a) {
                        function i(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function c(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new e((function(n) {
                                n(t.value)
                            })).then(i, c)
                        }
                        u((r = r.apply(t, n || [])).next())
                    }))
                },
                Pn = function(t, n) {
                    var e, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: c(0),
                        throw: c(1),
                        return: c(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function c(a) {
                        return function(c) {
                            return function(a) {
                                if (e) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (e = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1], o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2], i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = n.call(t, i)
                                } catch (t) {
                                    a = [6, t], r = 0
                                } finally {
                                    e = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, c])
                        }
                    }
                },
                kn = function(t) {
                    function n() {
                        var n = null !== t && t.apply(this, arguments) || this;
                        return n.id = "MEASUREMENTS_GET", n
                    }
                    return _n(n, t), n
                }(s.a),
                An = function(t, n, e) {
                    n.addBinding(kn, (function() {
                        return Sn(void 0, void 0, void 0, (function() {
                            return Pn(this, (function(n) {
                                return [2, t.market.waitForData(En.a).then((function(t) {
                                    return In(t)
                                }))]
                            }))
                        }))
                    })), e.addCommandToInterface({
                        version: "3.x",
                        namespace: "Measurements",
                        name: "getData",
                        args: []
                    }, (function() {
                        return new kn
                    }))
                },
                In = function(t) {
                    return Sn(void 0, void 0, void 0, (function() {
                        var n;
                        return Pn(this, (function(e) {
                            return n = [], t.iterate((function(t) {
                                n.push({
                                    sid: t.sid,
                                    label: t.text,
                                    floor: t.floor,
                                    start: {
                                        x: t.start_position.x,
                                        y: t.start_position.y,
                                        z: t.start_position.z
                                    },
                                    end: {
                                        x: t.end_position.x,
                                        y: t.end_position.y,
                                        z: t.end_position.z
                                    }
                                })
                            })), [2, n]
                        }))
                    }))
                };
            ! function(t) {
                t.HOVER = "tag.hover", t.CLICK = "tag.click", t.LINK_OPEN = "tag.linkopen"
            }(xn || (xn = {}));
            var Dn, jn = e(221),
                Nn = e(219),
                Cn = function(t, n, e, r) {
                    return new(e || (e = Promise))((function(o, a) {
                        function i(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function c(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new e((function(n) {
                                n(t.value)
                            })).then(i, c)
                        }
                        u((r = r.apply(t, n || [])).next())
                    }))
                },
                Mn = function(t, n) {
                    var e, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: c(0),
                        throw: c(1),
                        return: c(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function c(a) {
                        return function(c) {
                            return function(a) {
                                if (e) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (e = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1], o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2], i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = n.call(t, i)
                                } catch (t) {
                                    a = [6, t], r = 0
                                } finally {
                                    e = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, c])
                        }
                    }
                },
                Fn = function(t, n) {
                    return Cn(void 0, void 0, void 0, (function() {
                        return Mn(this, (function(e) {
                            return n.addEnumToInterface({
                                version: "3.x",
                                namespace: "Mattertag",
                                name: "Event",
                                values: xn
                            }), t.market.waitForData(Nn.c).then((function(e) {
                                var r = ["", !1],
                                    o = function(t) {
                                        return r[0] = t.sid, r[1] = t.hovering, r
                                    };
                                t.subscribe(jn.b, (function(t) {
                                    n.broadcast(xn.HOVER, o, t)
                                }));
                                var a = [""],
                                    i = function(t) {
                                        return a[0] = t.sid, a
                                    };
                                t.subscribe(jn.a, (function(t) {
                                    n.broadcast(xn.CLICK, i, t)
                                }));
                                var c = ["", ""],
                                    u = function(t) {
                                        return c[0] = e.selected, c[1] = t.url, c
                                    };
                                t.subscribe(jn.c, (function(t) {
                                    n.broadcast(xn.LINK_OPEN, u, t)
                                }))
                            })), [2]
                        }))
                    }))
                },
                Gn = e(216),
                Rn = e(92),
                Ln = e(77),
                zn = function() {
                    var t = function(n, e) {
                        return (t = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(t, n) {
                                t.__proto__ = n
                            } || function(t, n) {
                                for (var e in n) n.hasOwnProperty(e) && (t[e] = n[e])
                            })(n, e)
                    };
                    return function(n, e) {
                        function r() {
                            this.constructor = n
                        }
                        t(n, e), n.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
                    }
                }(),
                Bn = function(t, n, e, r) {
                    return new(e || (e = Promise))((function(o, a) {
                        function i(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function c(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new e((function(n) {
                                n(t.value)
                            })).then(i, c)
                        }
                        u((r = r.apply(t, n || [])).next())
                    }))
                },
                Hn = function(t, n) {
                    var e, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: c(0),
                        throw: c(1),
                        return: c(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function c(a) {
                        return function(c) {
                            return function(a) {
                                if (e) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (e = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1], o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2], i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = n.call(t, i)
                                } catch (t) {
                                    a = [6, t], r = 0
                                } finally {
                                    e = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, c])
                        }
                    }
                },
                Vn = function(t, n) {
                    var e = "function" == typeof Symbol && t[Symbol.iterator];
                    if (!e) return t;
                    var r, o, a = e.call(t),
                        i = [];
                    try {
                        for (;
                            (void 0 === n || n-- > 0) && !(r = a.next()).done;) i.push(r.value)
                    } catch (t) {
                        o = {
                            error: t
                        }
                    } finally {
                        try {
                            r && !r.done && (e = a.return) && e.call(a)
                        } finally {
                            if (o) throw o.error
                        }
                    }
                    return i
                },
                Un = function(t) {
                    function n() {
                        var n = null !== t && t.apply(this, arguments) || this;
                        return n.id = "MATTERTAG_GET", n
                    }
                    return zn(n, t), n
                }(s.a),
                Wn = function(t, n, e) {
                    n.addBinding(Un, (function() {
                        return Bn(void 0, void 0, void 0, (function() {
                            var n, e;
                            return Hn(this, (function(r) {
                                return n = t.market.waitForData(Gn.a), e = t.market.waitForData(Ln.a), [2, Promise.all([n, e]).then((function(t) {
                                    var n = Vn(t, 2),
                                        e = n[0],
                                        r = n[1];
                                    try {
                                        var o = r.tryGetProperty("mls", !1),
                                            a = [];
                                        return e.iterate((function(t) {
                                            var n = t.mediaSrc,
                                                e = t.mediaType,
                                                r = t.mediaType === Rn.a.photo;
                                            o && !r && (n = "", e = Rn.a.none), a.push({
                                                sid: t.sid,
                                                label: t.label,
                                                description: t.description,
                                                parsedDescription: t.parsedDescription,
                                                mediaSrc: n,
                                                mediaType: e,
                                                media: {
                                                    type: e,
                                                    src: n
                                                },
                                                anchorPosition: {
                                                    x: t.anchorPosition.x,
                                                    y: t.anchorPosition.y,
                                                    z: t.anchorPosition.z
                                                },
                                                anchorNormal: {
                                                    x: t.anchorNormal.x,
                                                    y: t.anchorNormal.y,
                                                    z: t.anchorNormal.z
                                                },
                                                color: {
                                                    r: t.color.r,
                                                    g: t.color.g,
                                                    b: t.color.b
                                                },
                                                enabled: t.enabled,
                                                floorIndex: t.floorIndex,
                                                stemVector: {
                                                    x: t.stemVector.x,
                                                    y: t.stemVector.y,
                                                    z: t.stemVector.z
                                                },
                                                stemVisible: t.stemVisible
                                            })
                                        })), a
                                    } catch (t) {
                                        throw Error("problem getting tag data")
                                    }
                                }))]
                            }))
                        }))
                    })), e.addCommandToInterface({
                        version: "3.x",
                        namespace: "Mattertag",
                        name: "getData",
                        args: []
                    }, (function() {
                        return new Un
                    }))
                },
                Kn = e(610),
                Yn = e(726),
                Xn = e(679);
            ! function(t) {
                t.LABEL = "label", t.DESCRIPTION = "description", t.MEDIA_SRC = "mediaSrc"
            }(Dn || (Dn = {}));
            var Zn = e(583),
                Jn = function() {
                    var t = function(n, e) {
                        return (t = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(t, n) {
                                t.__proto__ = n
                            } || function(t, n) {
                                for (var e in n) n.hasOwnProperty(e) && (t[e] = n[e])
                            })(n, e)
                    };
                    return function(n, e) {
                        function r() {
                            this.constructor = n
                        }
                        t(n, e), n.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
                    }
                }(),
                qn = function(t, n, e, r) {
                    return new(e || (e = Promise))((function(o, a) {
                        function i(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function c(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new e((function(n) {
                                n(t.value)
                            })).then(i, c)
                        }
                        u((r = r.apply(t, n || [])).next())
                    }))
                },
                Qn = function(t, n) {
                    var e, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: c(0),
                        throw: c(1),
                        return: c(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function c(a) {
                        return function(c) {
                            return function(a) {
                                if (e) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (e = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1], o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2], i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = n.call(t, i)
                                } catch (t) {
                                    a = [6, t], r = 0
                                } finally {
                                    e = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, c])
                        }
                    }
                },
                $n = function(t) {
                    function n(n, e, r) {
                        var o = t.call(this) || this;
                        return o.id = "FILTER_MATTERTAGS", o.payload = {
                            search: n,
                            category: e,
                            matchCase: r
                        }, o
                    }
                    return Jn(n, t), n
                }(s.a),
                te = function(t, n, e) {
                    return qn(void 0, void 0, void 0, (function() {
                        var e = this;
                        return Qn(this, (function(r) {
                            return t.market.waitForData(Gn.a).then((function(t) {
                                n.addBinding($n, (function(n) {
                                    return qn(e, void 0, Promise, (function() {
                                        var e;
                                        return Qn(this, (function(r) {
                                            return function(t) {
                                                if ("string" != typeof t.search) throw new Error("Cannot filter without a valid search string");
                                                if (t.category && !Object(Zn.a)(Dn, t.category)) throw new Error("Cannot filter an incorrect category")
                                            }(n), e = [], t.iterate((function(t) {
                                                n.matchCase || (n.search = n.search.toLowerCase());
                                                var r = !1;
                                                [Dn.LABEL, Dn.DESCRIPTION, Dn.MEDIA_SRC].forEach((function(o) {
                                                    if (!(n.category && n.category !== o || r)) {
                                                        var a = t[o];
                                                        n.matchCase || (a = a.toLowerCase()), a.includes(n.search) && (r = !0, e.push(t.sid))
                                                    }
                                                }))
                                            })), [2, e]
                                        }))
                                    }))
                                }))
                            })), [2]
                        }))
                    }))
                },
                ne = e(545),
                ee = e(18),
                re = e(14),
                oe = e(564),
                ae = new ft.a("mattertag-util");

            function ie(t) {
                return !!Object(oe.a)(t) && (Object(re.o)(t.r, 0, 1) || ae.warn("The color provided to Mattertag.editColor should have an r value be in the range of [0, 1]"), Object(re.o)(t.g, 0, 1) || ae.warn("The color provided to Mattertag.editColor should have an g value be in the range of [0, 1]"), Object(re.o)(t.b, 0, 1) || ae.warn("The color provided to Mattertag.editColor should have an b value be in the range of [0, 1]"), Object(re.f)(t), !0)
            }
            var ce, ue, le, se = function() {
                    var t = function(n, e) {
                        return (t = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(t, n) {
                                t.__proto__ = n
                            } || function(t, n) {
                                for (var e in n) n.hasOwnProperty(e) && (t[e] = n[e])
                            })(n, e)
                    };
                    return function(n, e) {
                        function r() {
                            this.constructor = n
                        }
                        t(n, e), n.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
                    }
                }(),
                fe = function(t, n, e, r) {
                    return new(e || (e = Promise))((function(o, a) {
                        function i(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function c(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new e((function(n) {
                                n(t.value)
                            })).then(i, c)
                        }
                        u((r = r.apply(t, n || [])).next())
                    }))
                },
                pe = function(t, n) {
                    var e, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: c(0),
                        throw: c(1),
                        return: c(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function c(a) {
                        return function(c) {
                            return function(a) {
                                if (e) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (e = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1], o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2], i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = n.call(t, i)
                                } catch (t) {
                                    a = [6, t], r = 0
                                } finally {
                                    e = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, c])
                        }
                    }
                };
            ! function(t) {
                t.LABEL = "label", t.DESCRIPTION = "description", t.MEDIA = "media"
            }(ue || (ue = {})),
            function(t) {
                t.NONE = "mattertag.media.none", t.PHOTO = "mattertag.media.photo", t.VIDEO = "mattertag.media.video", t.RICH = "mattertag.media.rich"
            }(le || (le = {}));
            var de, he, ye = ((ce = {})[le.NONE] = Rn.a.none, ce[le.PHOTO] = Rn.a.photo, ce[le.VIDEO] = Rn.a.video, ce[le.RICH] = Rn.a.rich, ce),
                be = function(t) {
                    function n(n, e) {
                        var r = t.call(this) || this;
                        return r.payload = {
                            tagId: n,
                            properties: e
                        }, r
                    }
                    return se(n, t), n
                }(s.a),
                ve = function(t) {
                    function n(n, e) {
                        var r = t.call(this) || this;
                        return r.payload = {
                            tagId: n,
                            color: e
                        }, r
                    }
                    return se(n, t), n
                }(s.a),
                we = function(t, n, e) {
                    return fe(void 0, void 0, void 0, (function() {
                        var r = this;
                        return pe(this, (function(o) {
                            return Promise.all([t.market.waitForData(Gn.a)]).then((function() {
                                n.addBinding(be, (function(t) {
                                    return fe(r, void 0, void 0, (function() {
                                        var e, r, o, a, i;
                                        return pe(this, (function(c) {
                                            switch (c.label) {
                                                case 0:
                                                    if (!t.properties) return [2];
                                                    if (e = t.properties[ue.LABEL], r = t.properties[ue.MEDIA], o = t.properties[ue.DESCRIPTION], null != e && "string" != typeof e) throw Error("Mattertag.editBillboard only accepts a string for the title field");
                                                    if (null != o && "string" != typeof o) throw Error("Mattertag.editBillboard only accepts a string for the description field");
                                                    if (null != r) {
                                                        if ("string" != typeof r.src) throw Error("Mattertag.editBillboard only accepts a string for the media.src field");
                                                        if (!Object(Zn.a)(le, r.type)) throw Error("Mattertag.editBillboard only accepts a value from Mattertag.MediaType for the media.type field")
                                                    }
                                                    return r && (a = {
                                                        mediaType: ye[r.type],
                                                        mediaSrc: r.src
                                                    }), i = {
                                                        label: e,
                                                        description: o
                                                    }, [4, n.issueCommand(new ne.b(t.tagId, i, a))];
                                                case 1:
                                                    return c.sent(), [2]
                                            }
                                        }))
                                    }))
                                })), n.addBinding(ve, (function(t) {
                                    return fe(r, void 0, void 0, (function() {
                                        var e, r;
                                        return pe(this, (function(o) {
                                            switch (o.label) {
                                                case 0:
                                                    if (null != (e = t.color) && !ie(e)) throw Error("Mattertag.editColor only accepts a Color object of the form {r, g, b} for the color field");
                                                    return r = {
                                                        color: (new ee.a).setRGB(e.r, e.g, e.b)
                                                    }, [4, n.issueCommand(new ne.b(t.tagId, r))];
                                                case 1:
                                                    return o.sent(), [2]
                                            }
                                        }))
                                    }))
                                }))
                            })), e.addCommandToInterface({
                                namespace: "Mattertag",
                                name: "editBillboard",
                                args: ["tag", "values"],
                                version: "3.2"
                            }, (function(t) {
                                return new be(t.tag, t.values)
                            })), e.addCommandToInterface({
                                namespace: "Mattertag",
                                name: "editColor",
                                args: ["tag", "color"],
                                version: "3.2"
                            }, (function(t) {
                                return new ve(t.tag, t.color)
                            })), e.addEnumToInterface({
                                namespace: "Mattertag",
                                name: "MediaType",
                                values: le,
                                version: "3.2"
                            }), [2]
                        }))
                    }))
                },
                me = e(547),
                ge = function(t, n) {
                    var e = "function" == typeof Symbol && t[Symbol.iterator];
                    if (!e) return t;
                    var r, o, a = e.call(t),
                        i = [];
                    try {
                        for (;
                            (void 0 === n || n-- > 0) && !(r = a.next()).done;) i.push(r.value)
                    } catch (t) {
                        o = {
                            error: t
                        }
                    } finally {
                        try {
                            r && !r.done && (e = a.return) && e.call(a)
                        } finally {
                            if (o) throw o.error
                        }
                    }
                    return i
                },
                xe = function(t, n, e) {
                    var r;
                    e.addCommandToInterface({
                        version: "3.2",
                        namespace: "Mattertag",
                        name: "editPosition",
                        args: ["sid", "options"]
                    }, (function(t) {
                        if (!r) throw Error("Edit command not bound yet");
                        return r(t)
                    }));
                    var o = new Mt.a;
                    Promise.all([t.market.waitForData(Gn.a), t.market.waitForData(me.a)]).then((function(t) {
                        var n = ge(t, 2),
                            e = n[0],
                            a = n[1];
                        r = function(t) {
                            if (!e.getTag(t.sid)) throw Error(t.sid + " was not found in the mattertag data");
                            var n = t.options,
                                r = n.anchorPosition,
                                i = o.copy(n.stemVector);
                            if (r && (!Object(oe.b)(r.x) || !Object(oe.b)(r.y) || !Object(oe.b)(r.z))) throw Error(r + " is not a valid Vector3");
                            if (i && (!Object(oe.b)(i.x) || !Object(oe.b)(i.y) || !Object(oe.b)(i.z))) throw Error(i + " is not a valid Vector3");
                            var c = o.length();
                            return i.normalize(), new ne.b(t.sid, {
                                stemHeight: c
                            }, void 0, {
                                floorIndex: a.getFloorAtHeight(r.y).floorIndex,
                                normal: i,
                                position: r
                            })
                        }
                    }))
                },
                Oe = e(262),
                Te = function() {
                    var t = function(n, e) {
                        return (t = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(t, n) {
                                t.__proto__ = n
                            } || function(t, n) {
                                for (var e in n) n.hasOwnProperty(e) && (t[e] = n[e])
                            })(n, e)
                    };
                    return function(n, e) {
                        function r() {
                            this.constructor = n
                        }
                        t(n, e), n.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
                    }
                }(),
                Ee = function(t, n, e, r) {
                    return new(e || (e = Promise))((function(o, a) {
                        function i(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function c(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new e((function(n) {
                                n(t.value)
                            })).then(i, c)
                        }
                        u((r = r.apply(t, n || [])).next())
                    }))
                },
                _e = function(t, n) {
                    var e, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: c(0),
                        throw: c(1),
                        return: c(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function c(a) {
                        return function(c) {
                            return function(a) {
                                if (e) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (e = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1], o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2], i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = n.call(t, i)
                                } catch (t) {
                                    a = [6, t], r = 0
                                } finally {
                                    e = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, c])
                        }
                    }
                },
                Se = function(t, n) {
                    var e = "function" == typeof Symbol && t[Symbol.iterator];
                    if (!e) return t;
                    var r, o, a = e.call(t),
                        i = [];
                    try {
                        for (;
                            (void 0 === n || n-- > 0) && !(r = a.next()).done;) i.push(r.value)
                    } catch (t) {
                        o = {
                            error: t
                        }
                    } finally {
                        try {
                            r && !r.done && (e = a.return) && e.call(a)
                        } finally {
                            if (o) throw o.error
                        }
                    }
                    return i
                },
                Pe = ((de = {})[le.NONE] = Rn.a.none, de[le.PHOTO] = Rn.a.photo, de[le.VIDEO] = Rn.a.video, de[le.RICH] = Rn.a.rich, de),
                ke = function(t) {
                    function n(n) {
                        var e = t.call(this) || this;
                        return e.payload = n, e.id = "BATCH_ADD_MATTERTAG", e
                    }
                    return Te(n, t), n
                }(s.a),
                Ae = function(t, n, e) {
                    return Ee(void 0, void 0, void 0, (function() {
                        function r(t, n) {
                            if (!Object(oe.c)(t.anchorPosition)) throw Error("anchorPosition is not a valid Vector3");
                            if (!Object(oe.c)(t.stemVector)) throw Error("stemVector is not a valid Vector3");
                            var e = (new Mt.a).copy(t.anchorPosition),
                                r = (new Mt.a).copy(t.stemVector),
                                o = r.length();
                            r.normalize();
                            var a, i = n.getFloorAtHeight(e.y).floorIndex,
                                c = ie(t.color) ? (new ee.a).setRGB(t.color.r, t.color.g, t.color.b) : Oe.a.MATTERTAG_BLUE,
                                u = t.description,
                                l = t.label;
                            return t.media && (a = {
                                mediaType: Pe[t.media.type] || Rn.a.none,
                                mediaSrc: t.media.src || ""
                            }), new ne.a({
                                position: e,
                                normal: r,
                                floorIndex: i
                            }, {
                                color: c,
                                description: u,
                                label: l,
                                stemHeight: o,
                                stemVisible: !0,
                                enabled: !0
                            }, a)
                        }
                        var o = this;
                        return _e(this, (function(a) {
                            return e.addCommandToInterface({
                                version: "3.2",
                                namespace: "Mattertag",
                                name: "add",
                                args: ["tags"]
                            }, (function(t) {
                                return new ke(t)
                            })), n.addBinding(ke, (function(e) {
                                return Ee(o, void 0, void 0, (function() {
                                    var o, a, i, c, u, l, s;
                                    return _e(this, (function(f) {
                                        switch (f.label) {
                                            case 0:
                                                return [4, Promise.all([t.market.waitForData(me.a), t.waitForModule(F.I)])];
                                            case 1:
                                                o = Se.apply(void 0, [f.sent(), 1]), a = o[0], i = function(t, n) {
                                                    var e = [];
                                                    if (t.tags instanceof Array) {
                                                        var o = t.tags,
                                                            a = o.length;
                                                        e.length = a;
                                                        for (var i = 0; i < o.length; ++i) try {
                                                            e[i] = r(o[i], n)
                                                        } catch (t) {
                                                            throw Error("Error in tag " + i + " - " + t.message)
                                                        }
                                                    } else try {
                                                        e.push(r(t.tags, n))
                                                    } catch (t) {
                                                        throw Error("Error in tag payload " + t.message)
                                                    }
                                                    return e
                                                }(e, a), (c = []).length = i.length, u = 0, f.label = 2;
                                            case 2:
                                                return u < i.length ? (l = c, s = u, [4, n.issueCommand(i[u])]) : [3, 5];
                                            case 3:
                                                l[s] = f.sent(), f.label = 4;
                                            case 4:
                                                return ++u, [3, 2];
                                            case 5:
                                                return [2, c]
                                        }
                                    }))
                                }))
                            })), [2]
                        }))
                    }))
                },
                Ie = function() {
                    var t = function(n, e) {
                        return (t = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(t, n) {
                                t.__proto__ = n
                            } || function(t, n) {
                                for (var e in n) n.hasOwnProperty(e) && (t[e] = n[e])
                            })(n, e)
                    };
                    return function(n, e) {
                        function r() {
                            this.constructor = n
                        }
                        t(n, e), n.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
                    }
                }(),
                De = function(t, n, e, r) {
                    return new(e || (e = Promise))((function(o, a) {
                        function i(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function c(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new e((function(n) {
                                n(t.value)
                            })).then(i, c)
                        }
                        u((r = r.apply(t, n || [])).next())
                    }))
                },
                je = function(t, n) {
                    var e, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: c(0),
                        throw: c(1),
                        return: c(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function c(a) {
                        return function(c) {
                            return function(a) {
                                if (e) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (e = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1], o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2], i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = n.call(t, i)
                                } catch (t) {
                                    a = [6, t], r = 0
                                } finally {
                                    e = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, c])
                        }
                    }
                },
                Ne = function(t) {
                    var n = "function" == typeof Symbol && t[Symbol.iterator],
                        e = 0;
                    return n ? n.call(t) : {
                        next: function() {
                            return t && e >= t.length && (t = void 0), {
                                value: t && t[e++],
                                done: !t
                            }
                        }
                    }
                },
                Ce = function(t) {
                    function n(n) {
                        var e = t.call(this) || this;
                        return e.id = "BATCH_REMOVE_MATTERTAG", e.payload = {
                            removeCommands: n
                        }, e
                    }
                    return Ie(n, t), n
                }(s.a),
                Me = function(t, n, e) {
                    e.addCommandToInterface({
                        version: "3.2",
                        namespace: "Mattertag",
                        name: "remove",
                        args: ["tags"]
                    }, (function(t) {
                        var n = [];
                        if (!t.tags) throw Error("invalid list of tags to remove");
                        if (t.tags instanceof Array) {
                            var e = t.tags,
                                r = e.length;
                            n.length = r;
                            for (var o = 0; o < e.length; ++o) n[o] = new ne.c(e[o])
                        } else n.push(new ne.c(t.tags));
                        return new Ce(n)
                    })), n.addBinding(Ce, (function(t) {
                        return De(void 0, void 0, void 0, (function() {
                            var e, r, o, a, i, c, u, l, s;
                            return je(this, (function(f) {
                                switch (f.label) {
                                    case 0:
                                        o = [], a = t.removeCommands, o.length = a.length, f.label = 1;
                                    case 1:
                                        f.trys.push([1, 6, 7, 8]), i = Ne(a), c = i.next(), f.label = 2;
                                    case 2:
                                        return c.done ? [3, 5] : (u = c.value, [4, n.issueCommand(u)]);
                                    case 3:
                                        (l = f.sent()) && o.push(l), f.label = 4;
                                    case 4:
                                        return c = i.next(), [3, 2];
                                    case 5:
                                        return [3, 8];
                                    case 6:
                                        return s = f.sent(), e = {
                                            error: s
                                        }, [3, 8];
                                    case 7:
                                        try {
                                            c && !c.done && (r = i.return) && r.call(i)
                                        } finally {
                                            if (e) throw e.error
                                        }
                                        return [7];
                                    case 8:
                                        return [2, o]
                                }
                            }))
                        }))
                    }))
                },
                Fe = e(256),
                Ge = e(255);
            ! function(t) {
                t.CHANGE_START = "viewmode.changestart", t.CHANGE_END = "viewmode.changeend"
            }(he || (he = {}));
            var Re, Le, ze, Be = e(197),
                He = e(154),
                Ve = function(t, n) {
                    var e = "function" == typeof Symbol && t[Symbol.iterator];
                    if (!e) return t;
                    var r, o, a = e.call(t),
                        i = [];
                    try {
                        for (;
                            (void 0 === n || n-- > 0) && !(r = a.next()).done;) i.push(r.value)
                    } catch (t) {
                        o = {
                            error: t
                        }
                    } finally {
                        try {
                            r && !r.done && (e = a.return) && e.call(a)
                        } finally {
                            if (o) throw o.error
                        }
                    }
                    return i
                },
                Ue = function(t, n) {
                    n.addEnumToInterface({
                        version: "3.x",
                        namespace: "Mode",
                        name: "Event",
                        values: he
                    }), Promise.all([t.market.waitForData(pt.a), t.waitForModule(F.Mb)]).then((function(e) {
                        var r = Ve(e, 2),
                            o = r[0],
                            a = r[1],
                            i = [void 0, void 0],
                            c = function(t) {
                                var n = a.currentMode,
                                    e = Object(He.b)(o, t.fromSweep),
                                    r = Object(He.b)(o, t.toSweep);
                                return i[0] = Object(St.a)(n, e), i[1] = Object(St.a)(n, r), i
                            };
                        t.subscribe(Be.a, (function(t) {
                            Object(He.b)(o, t.fromSweep) !== Object(He.b)(o, t.toSweep) && n.broadcast(he.CHANGE_END, c, t)
                        }));
                        var u = [void 0, void 0],
                            l = function(t) {
                                var n = Object(He.a)(o);
                                return u[0] = Object(St.a)(t.fromMode, n), u[1] = Object(St.a)(t.toMode, n), u
                            };
                        t.subscribe(Fe.a, (function(t) {
                            return n.broadcast(he.CHANGE_START, l, t)
                        }));
                        var s = [void 0, void 0],
                            f = function(t) {
                                var n = Object(He.a)(o);
                                return s[0] = Object(St.a)(t.fromMode, n), s[1] = Object(St.a)(t.toMode, n), s
                            };
                        t.subscribe(Ge.a, (function(t) {
                            return n.broadcast(he.CHANGE_END, f, t)
                        }))
                    }))
                },
                We = e(582),
                Ke = e(261),
                Ye = e(536),
                Xe = e(63);
            ! function(t) {
                t.ALIGNED = "aligned", t.UNALIGNED = "unaligned"
            }(Le || (Le = {})),
            function(t) {
                t.UNPLACED = "unplaced", t.AUTO = "auto", t.MANUAL = "manual"
            }(ze || (ze = {}));
            var Ze, Je = ((Re = {})[Xe.a.ALIGNED] = Le.ALIGNED, Re[Xe.a.UNALIGNED] = Le.UNALIGNED, Re),
                qe = function(t) {
                    t.addEnumToInterface({
                        version: "3.x",
                        namespace: "Sweep",
                        name: "Transition",
                        values: Ye.b
                    }), t.addEnumToInterface({
                        version: "3.x",
                        namespace: "Mode",
                        name: "Alignment",
                        values: Le
                    }), t.addEnumToInterface({
                        version: "3.x",
                        namespace: "Mode",
                        name: "Placement",
                        values: ze
                    })
                },
                Qe = function(t) {
                    var n = "function" == typeof Symbol && t[Symbol.iterator],
                        e = 0;
                    return n ? n.call(t) : {
                        next: function() {
                            return t && e >= t.length && (t = void 0), {
                                value: t && t[e++],
                                done: !t
                            }
                        }
                    }
                },
                $e = function(t, n, e, r) {
                    var o, a, i;
                    r.sweeps = [];
                    try {
                        for (var c = Qe(e), u = c.next(); !u.done; u = c.next()) {
                            var l = u.value;
                            r.sweeps.push({
                                uuid: l.id,
                                alignmentType: Je[l.alignmentType],
                                neighbors: l.neighbours,
                                position: (i = l, null !== i.position ? {
                                    x: i.position.x,
                                    y: i.position.y,
                                    z: i.position.z
                                } : null),
                                rotation: Object(Ke.b)(l.rotation),
                                floor: l.floor
                            })
                        }
                    } catch (t) {
                        o = {
                            error: t
                        }
                    } finally {
                        try {
                            u && !u.done && (a = c.return) && a.call(c)
                        } finally {
                            if (o) throw o.error
                        }
                    }
                    return r.sid = t, r.modelSupportsVr = n, r
                },
                tr = function() {
                    var t = function(n, e) {
                        return (t = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(t, n) {
                                t.__proto__ = n
                            } || function(t, n) {
                                for (var e in n) n.hasOwnProperty(e) && (t[e] = n[e])
                            })(n, e)
                    };
                    return function(n, e) {
                        function r() {
                            this.constructor = n
                        }
                        t(n, e), n.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
                    }
                }(),
                nr = function(t, n, e, r) {
                    return new(e || (e = Promise))((function(o, a) {
                        function i(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function c(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new e((function(n) {
                                n(t.value)
                            })).then(i, c)
                        }
                        u((r = r.apply(t, n || [])).next())
                    }))
                },
                er = function(t, n) {
                    var e, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: c(0),
                        throw: c(1),
                        return: c(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function c(a) {
                        return function(c) {
                            return function(a) {
                                if (e) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (e = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1], o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2], i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = n.call(t, i)
                                } catch (t) {
                                    a = [6, t], r = 0
                                } finally {
                                    e = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, c])
                        }
                    }
                },
                rr = function(t) {
                    function n() {
                        var n = null !== t && t.apply(this, arguments) || this;
                        return n.id = "GET_MODEL_DATA", n
                    }
                    return tr(n, t), n
                }(s.a),
                or = function(t, n, e) {
                    var r = {
                        sid: "",
                        sweeps: [],
                        modelSupportsVr: !1
                    };
                    n.addBinding(rr, (function() {
                        return nr(void 0, void 0, void 0, (function() {
                            var n, e;
                            return er(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, t.waitForModule(F.R)];
                                    case 1:
                                        return n = o.sent(), [4, t.market.waitForData(pt.a)];
                                    case 2:
                                        return e = o.sent(), [2, ar(n, r, e)]
                                }
                            }))
                        }))
                    })), e.addCommandToInterface({
                        version: "3.x",
                        namespace: "Model",
                        name: "getData",
                        args: []
                    }, (function() {
                        return new rr
                    }))
                },
                ar = function(t, n, e) {
                    return nr(void 0, void 0, void 0, (function() {
                        var r, o;
                        return er(this, (function(a) {
                            try {
                                return r = e.getSweepList(), o = t.getModel(), [2, $e(o.sid, o.vrSupported, r, n)]
                            } catch (t) {
                                throw Error("no model currently loaded")
                            }
                            return [2]
                        }))
                    }))
                },
                ir = e(78),
                cr = function() {
                    var t = function(n, e) {
                        return (t = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(t, n) {
                                t.__proto__ = n
                            } || function(t, n) {
                                for (var e in n) n.hasOwnProperty(e) && (t[e] = n[e])
                            })(n, e)
                    };
                    return function(n, e) {
                        function r() {
                            this.constructor = n
                        }
                        t(n, e), n.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
                    }
                }(),
                ur = function(t, n, e, r) {
                    return new(e || (e = Promise))((function(o, a) {
                        function i(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function c(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new e((function(n) {
                                n(t.value)
                            })).then(i, c)
                        }
                        u((r = r.apply(t, n || [])).next())
                    }))
                },
                lr = function(t, n) {
                    var e, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: c(0),
                        throw: c(1),
                        return: c(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function c(a) {
                        return function(c) {
                            return function(a) {
                                if (e) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (e = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1], o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2], i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = n.call(t, i)
                                } catch (t) {
                                    a = [6, t], r = 0
                                } finally {
                                    e = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, c])
                        }
                    }
                },
                sr = function(t) {
                    function n() {
                        var n = null !== t && t.apply(this, arguments) || this;
                        return n.id = "GET_MODEL_DETAILS", n
                    }
                    return cr(n, t), n
                }(s.a),
                fr = function(t, n, e) {
                    Promise.all([t.waitForModule(F.R), t.market.waitForData(Ln.a)]).then((function(t) {
                        return n.addBinding(sr, (function() {
                            return ur(void 0, void 0, void 0, (function() {
                                return lr(this, (function(n) {
                                    return [2, pr(t[0], t[1])]
                                }))
                            }))
                        }))
                    })), e.addCommandToInterface({
                        version: "3.x",
                        namespace: "Model",
                        name: "getDetails",
                        args: []
                    }, (function() {
                        return new sr
                    }))
                },
                pr = function(t, n) {
                    function e(t, e) {
                        if (n.tryGetProperty(t, !0)) return e
                    }
                    var r = t.getModel();
                    return {
                        sid: r.data.sid,
                        name: e(ir.a.DetailsModelName, r.data.name),
                        presentedBy: e(ir.a.PresentedBy, r.data.presentedBy),
                        summary: e(ir.a.DetailsSummary, r.data.summary),
                        formattedAddress: e(ir.a.DetailsAddress, r.data.formattedAddress),
                        contactEmail: e(ir.a.DetailsEmail, r.data.contact.email),
                        contactName: e(ir.a.DetailsName, r.data.contact.name),
                        phone: e(ir.a.DetailsPhone, r.data.contact.phone),
                        formattedContactPhone: e(ir.a.DetailsPhone, r.data.contact.formattedPhone),
                        externalUrl: e(ir.a.DetailsExternalUrl, r.data.externalUrl)
                    }
                },
                dr = e(323);
            ! function(t) {
                t.MODEL_LOADED = "model.loaded"
            }(Ze || (Ze = {}));
            var hr, yr = function(t, n) {
                    n.addEnumToInterface({
                        version: "3.x",
                        namespace: "Model",
                        name: "Event",
                        values: Ze
                    });
                    var e = {
                            sid: "",
                            sweeps: [],
                            modelSupportsVr: !1
                        },
                        r = [e],
                        o = function(t) {
                            return $e(t.sid, t.vrSupported, t.sweepList, e), r
                        };
                    t.subscribe(dr.a, (function(t) {
                        n.broadcast(Ze.MODEL_LOADED, o, t)
                    }))
                },
                br = e(82),
                vr = function() {
                    var t = function(n, e) {
                        return (t = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(t, n) {
                                t.__proto__ = n
                            } || function(t, n) {
                                for (var e in n) n.hasOwnProperty(e) && (t[e] = n[e])
                            })(n, e)
                    };
                    return function(n, e) {
                        function r() {
                            this.constructor = n
                        }
                        t(n, e), n.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
                    }
                }(),
                wr = function(t) {
                    function n(n, e) {
                        var r = t.call(this) || this;
                        return r.payload = {
                            key: n,
                            value: e
                        }, r
                    }
                    return vr(n, t), n.id = "SETTING_UPDATE", n
                }(s.a),
                mr = function(t, n, e, r) {
                    return new(e || (e = Promise))((function(o, a) {
                        function i(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function c(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new e((function(n) {
                                n(t.value)
                            })).then(i, c)
                        }
                        u((r = r.apply(t, n || [])).next())
                    }))
                },
                gr = function(t, n) {
                    var e, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: c(0),
                        throw: c(1),
                        return: c(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function c(a) {
                        return function(c) {
                            return function(a) {
                                if (e) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (e = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1], o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2], i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = n.call(t, i)
                                } catch (t) {
                                    a = [6, t], r = 0
                                } finally {
                                    e = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, c])
                        }
                    }
                },
                xr = function(t, n, e) {
                    t.commandBinder.addBinding(wr, (function(n) {
                        return mr(void 0, void 0, void 0, (function() {
                            var e;
                            return gr(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (!n.key || "string" != typeof n.key) throw Error("Settings: invalid key");
                                        return [4, t.waitForModule(br.default)];
                                    case 1:
                                        return (e = r.sent()).updateSetting(n.key, n.value), [2, e.tryGetProperty(n.key, void 0)]
                                }
                            }))
                        }))
                    })), e.addCommandToInterface({
                        version: "3.x",
                        namespace: "Settings",
                        name: "update",
                        args: ["key", "value"]
                    }, (function(t) {
                        return new wr(t.key, t.value)
                    }))
                },
                Or = function() {
                    var t = function(n, e) {
                        return (t = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(t, n) {
                                t.__proto__ = n
                            } || function(t, n) {
                                for (var e in n) n.hasOwnProperty(e) && (t[e] = n[e])
                            })(n, e)
                    };
                    return function(n, e) {
                        function r() {
                            this.constructor = n
                        }
                        t(n, e), n.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
                    }
                }(),
                Tr = function(t) {
                    function n(n) {
                        var e = t.call(this) || this;
                        return e.payload = {
                            key: n
                        }, e
                    }
                    return Or(n, t), n.id = "SETTING_GET", n
                }(s.a),
                Er = function(t, n, e, r) {
                    return new(e || (e = Promise))((function(o, a) {
                        function i(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function c(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new e((function(n) {
                                n(t.value)
                            })).then(i, c)
                        }
                        u((r = r.apply(t, n || [])).next())
                    }))
                },
                _r = function(t, n) {
                    var e, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: c(0),
                        throw: c(1),
                        return: c(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function c(a) {
                        return function(c) {
                            return function(a) {
                                if (e) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (e = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1], o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2], i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = n.call(t, i)
                                } catch (t) {
                                    a = [6, t], r = 0
                                } finally {
                                    e = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, c])
                        }
                    }
                },
                Sr = function(t, n, e) {
                    t.commandBinder.addBinding(Tr, (function(n) {
                        return Er(void 0, void 0, void 0, (function() {
                            return _r(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, t.waitForModule(br.default)];
                                    case 1:
                                        return [2, e.sent().tryGetProperty(n.key, void 0)]
                                }
                            }))
                        }))
                    })), e.addCommandToInterface({
                        version: "3.x",
                        namespace: "Settings",
                        name: "get",
                        args: ["key"]
                    }, (function(t) {
                        return new Tr(t.key)
                    }))
                };
            ! function(t) {
                t.ENTER = "sweep.enter", t.EXIT = "sweep.exit"
            }(hr || (hr = {}));
            var Pr, kr = e(198),
                Ar = function(t, n) {
                    var e;
                    n.addEnumToInterface({
                        version: "3.x",
                        namespace: "Sweep",
                        name: "Event",
                        values: hr
                    });
                    var r = [""],
                        o = function() {
                            return r[0] = e, r
                        };
                    t.subscribe(kr.a, (function(t) {
                        t.fromSweep && t.fromSweep !== t.toSweep && n.broadcast(hr.EXIT, o, t)
                    })), t.subscribe(Fe.a, (function(t) {
                        t.fromMode === $.a.Panorama && t.toMode !== $.a.Panorama && n.broadcast(hr.EXIT, o, t)
                    }));
                    var a = ["", ""],
                        i = function(t) {
                            return a[0] = t.fromSweep, a[1] = t.toSweep, a
                        };
                    t.subscribe(Be.a, (function(t) {
                        e = t.toSweep, n.broadcast(hr.ENTER, i, t)
                    }))
                },
                Ir = e(218),
                Dr = e(62),
                jr = e(605),
                Nr = function(t, n, e, r) {
                    return new(e || (e = Promise))((function(o, a) {
                        function i(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function c(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new e((function(n) {
                                n(t.value)
                            })).then(i, c)
                        }
                        u((r = r.apply(t, n || [])).next())
                    }))
                },
                Cr = function(t, n) {
                    var e, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: c(0),
                        throw: c(1),
                        return: c(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function c(a) {
                        return function(c) {
                            return function(a) {
                                if (e) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (e = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1], o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2], i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = n.call(t, i)
                                } catch (t) {
                                    a = [6, t], r = 0
                                } finally {
                                    e = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, c])
                        }
                    }
                },
                Mr = function(t, n, e) {
                    Fr(t);
                    e.addEnumToInterface({
                        version: "3.x",
                        namespace: "Sweep",
                        name: "Transition",
                        values: Ye.b
                    }), e.addCommandToInterface({
                        version: "3.x",
                        namespace: "Sweep",
                        name: "moveTo",
                        args: ["sweep", "options"]
                    }, (function(t) {
                        return (t = t || {}).options = t.options || {}, new Ir.a({
                            sweep: t.sweep || "",
                            rotation: Gr(t.options.rotation),
                            transition: Rr(t.options.transition)
                        })
                    }))
                },
                Fr = function(t) {
                    t.commandBinder.addBinding(Ir.a, (function(n) {
                        return Nr(void 0, void 0, void 0, (function() {
                            var e, r, o, a, i, c;
                            return Cr(this, (function(u) {
                                switch (u.label) {
                                    case 0:
                                        return [4, t.waitForModule(F.ub)];
                                    case 1:
                                        return e = u.sent(), [4, t.market.waitForData(pt.a)];
                                    case 2:
                                        return r = u.sent(), [4, t.market.waitForData(Ln.a)];
                                    case 3:
                                        return o = u.sent(), [4, t.waitForModule(F.Mb)];
                                    case 4:
                                        if (a = u.sent(), i = o.tryGetProperty(jr.a, Dr.a.Interpolate), !n.sweep) throw Error("Sweep.moveTo -> no sweep specified");
                                        return c = n.transition, void 0 === n.transition && (c = i), [4, a.currentMode !== $.a.Panorama ? a.switchToMode($.a.Panorama, c, {
                                            sweepID: n.sweep,
                                            rotation: n.rotation
                                        }) : e.moveToSweep({
                                            transitionType: c,
                                            sweepId: n.sweep,
                                            rotation: n.rotation
                                        })];
                                    case 5:
                                        return u.sent(), [2, r.currentSweep]
                                }
                            }))
                        }))
                    }))
                },
                Gr = function(t) {
                    if (t) {
                        t.z = t.z || 0;
                        var n = Object(Ke.a)(t);
                        if (isNaN(n.x) || isNaN(n.y) || isNaN(n.z) || isNaN(n.w)) {
                            var e = "{ " + t.x + ", " + t.y + ", " + t.z + " }";
                            throw Error("Sweep.moveTo -> " + e + " is not a valid rotation")
                        }
                        return n
                    }
                },
                Rr = function(t) {
                    if (t) {
                        var n = Object(Ye.a)(t);
                        if (void 0 === n) throw Error("Sweep.moveTo -> " + t + " is not a valid transition style");
                        return n
                    }
                },
                Lr = e(179);
            ! function(t) {
                t.STARTED = "tour.started", t.STOPPED = "tour.stopped", t.ENDED = "tour.ended", t.STEPPED = "tour.stepped"
            }(Pr || (Pr = {}));
            var zr, Br = e(530),
                Hr = function(t, n) {
                    n.addEnumToInterface({
                        version: "3.x",
                        namespace: "Tour",
                        name: "Event",
                        values: Pr
                    }), t.subscribe(Br.c, (function() {
                        return n.broadcast(Pr.STARTED)
                    })), t.subscribe(Br.f, (function() {
                        return n.broadcast(Pr.STOPPED)
                    })), t.subscribe(Br.a, (function() {
                        return n.broadcast(Pr.ENDED)
                    }));
                    var e = [-1],
                        r = function(t) {
                            return e[0] = t.index, e
                        };
                    t.subscribe(Br.d, (function(t) {
                        return n.broadcast(Pr.STEPPED, r, t)
                    }))
                },
                Vr = e(697);
            ! function(t) {
                t.FPS = "stat.fps"
            }(zr || (zr = {}));
            var Ur, Wr = function(t, n, e, r) {
                    return new(e || (e = Promise))((function(o, a) {
                        function i(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function c(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new e((function(n) {
                                n(t.value)
                            })).then(i, c)
                        }
                        u((r = r.apply(t, n || [])).next())
                    }))
                },
                Kr = function(t, n) {
                    var e, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: c(0),
                        throw: c(1),
                        return: c(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function c(a) {
                        return function(c) {
                            return function(a) {
                                if (e) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (e = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1], o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2], i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = n.call(t, i)
                                } catch (t) {
                                    a = [6, t], r = 0
                                } finally {
                                    e = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, c])
                        }
                    }
                },
                Yr = function(t, n) {
                    var e = "function" == typeof Symbol && t[Symbol.iterator];
                    if (!e) return t;
                    var r, o, a = e.call(t),
                        i = [];
                    try {
                        for (;
                            (void 0 === n || n-- > 0) && !(r = a.next()).done;) i.push(r.value)
                    } catch (t) {
                        o = {
                            error: t
                        }
                    } finally {
                        try {
                            r && !r.done && (e = a.return) && e.call(a)
                        } finally {
                            if (o) throw o.error
                        }
                    }
                    return i
                },
                Xr = function(t, n) {
                    Promise.all([t.market.waitForData(Ln.a)]).then((function(e) {
                        var r = Yr(e, 1)[0];
                        new Zr(t, r).calcAndBroadcast(n)
                    })), n.addEnumToInterface({
                        version: "3.x",
                        namespace: "Stat",
                        name: "Event",
                        values: zr
                    })
                },
                Zr = function() {
                    function t(t, n) {
                        this.engine = t, this.perfStatInterval = 1e3, this.elapsedTime = 0, this.frameCount = 0, this.lastCalcTime = 0, this.fps = [0], this.perfStatInterval = n.tryGetProperty("perfInterval", this.perfStatInterval)
                    }
                    return t.prototype.calcAndBroadcast = function(t) {
                        return Wr(this, void 0, void 0, (function() {
                            var n, e, r = this;
                            return Kr(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, this.engine.after(Rt.a.End)];
                                    case 1:
                                        return o.sent(), n = Date.now(), e = n - this.lastCalcTime, this.lastCalcTime = n, this.elapsedTime += e, this.frameCount++, this.elapsedTime >= this.perfStatInterval && (this.fps[0] = 1e3 * this.frameCount / this.elapsedTime, this.elapsedTime = 0, this.frameCount = 0, t.broadcast(zr.FPS, (function() {
                                            return r.fps
                                        }))), this.calcAndBroadcast(t), [2]
                                }
                            }))
                        }))
                    }, t
                }(),
                Jr = e(138),
                qr = e(563),
                Qr = e(724),
                $r = function(t, n, e, r) {
                    return new(e || (e = Promise))((function(o, a) {
                        function i(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function c(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new e((function(n) {
                                n(t.value)
                            })).then(i, c)
                        }
                        u((r = r.apply(t, n || [])).next())
                    }))
                },
                to = function(t, n) {
                    var e, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: c(0),
                        throw: c(1),
                        return: c(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function c(a) {
                        return function(c) {
                            return function(a) {
                                if (e) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (e = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1], o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2], i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = n.call(t, i)
                                } catch (t) {
                                    a = [6, t], r = 0
                                } finally {
                                    e = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, c])
                        }
                    }
                };
            ! function(t) {
                t.NONE = "intersectedobject.none", t.MODEL = "intersectedobject.model", t.TAG = "intersectedobject.tag", t.SWEEP = "intersectedobject.sweep", t.UNKNOWN = "intersectedobject.unknown"
            }(Ur || (Ur = {}));
            var no = function(t, n) {
                    return $r(void 0, void 0, void 0, (function() {
                        var e, r;
                        return to(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    return [4, t.market.waitForData(Jr.b)];
                                case 1:
                                    return e = o.sent(), r = P.create((function() {
                                        return Promise.all([t.market.waitForData(Jr.b)])
                                    }), (function(t) {
                                        return e.onChanged(t)
                                    }), eo), n.addEnumToInterface({
                                        version: "3.1",
                                        namespace: "Pointer",
                                        name: "Colliders",
                                        values: Ur
                                    }), n.addObservableToInterface({
                                        version: "3.1",
                                        namespace: "Pointer",
                                        name: "intersection"
                                    }, r), [2]
                            }
                        }))
                    }))
                },
                eo = function() {
                    function t() {
                        this._data = {
                            position: {
                                x: 0,
                                y: 0,
                                z: 0
                            },
                            normal: {
                                x: 0,
                                y: 0,
                                z: 0
                            },
                            object: Ur.NONE
                        }
                    }
                    return Object.defineProperty(t.prototype, "data", {
                        get: function() {
                            return this._data
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.equals = function(t) {
                        var n = t.data.position,
                            e = this.data.position,
                            r = t.data.normal,
                            o = this.data.normal;
                        return Object(_t.a)(n.x, e.x, 1e-5) && Object(_t.a)(n.y, e.y, 1e-5) && Object(_t.a)(n.z, e.z, 1e-5) && Object(_t.a)(r.x, o.x, 1e-5) && Object(_t.a)(r.y, o.y, 1e-5) && Object(_t.a)(r.z, o.z, 1e-5) && t.data.object === this.data.object
                    }, t.prototype.copy = function(t) {
                        this.data.position.x = t.data.position.x, this.data.position.y = t.data.position.y, this.data.position.z = t.data.position.z, this.data.normal.x = t.data.normal.x, this.data.normal.y = t.data.normal.y, this.data.normal.z = t.data.normal.z, this.data.object = t.data.object
                    }, t.prototype.update = function(t) {
                        var n = t.hit;
                        n ? (this.data.position.x = n.point.x, this.data.position.y = n.point.y, this.data.position.z = n.point.z, this.data.normal.x = n.face.normal.x, this.data.normal.y = n.face.normal.y, this.data.normal.z = n.face.normal.z, n.object instanceof Gt.a ? this.data.object = Ur.MODEL : n.object instanceof qr.a ? this.data.object = Ur.TAG : n.object instanceof Qr.a ? this.data.object = Ur.SWEEP : this.data.object = Ur.UNKNOWN) : (this.data.position.x = 0, this.data.position.y = 0, this.data.position.z = 0, this.data.normal.x = 0, this.data.normal.y = 0, this.data.normal.z = 0, this.data.object = Ur.NONE)
                    }, t
                }(),
                ro = e(243);
            e.d(n, "bindSdkInterface", (function() {
                return ao
            }));
            var oo = function(t) {
                    var n = "function" == typeof Symbol && t[Symbol.iterator],
                        e = 0;
                    return n ? n.call(t) : {
                        next: function() {
                            return t && e >= t.length && (t = void 0), {
                                value: t && t[e++],
                                done: !t
                            }
                        }
                    }
                },
                ao = function(t, n, e) {
                    var r, o, a, i, s, f, p, d, h = [l.b, b, O, We.b, H.b, or, Lr.d, fr, An, Wn, Kn.b, Yn.b, te, Xn.b, Mr, jt.c, Kt, Jt, at, Y, Ot, z, rn, an.b, fn.b, gn, Vr.c, xr, Sr, we, xe, Ae, Me].concat(ro.a);
                    try {
                        for (var y = oo(h), v = y.next(); !v.done; v = y.next()) {
                            (0, v.value)(t, n, e)
                        }
                    } catch (t) {
                        r = {
                            error: t
                        }
                    } finally {
                        try {
                            v && !v.done && (o = y.return) && o.call(y)
                        } finally {
                            if (r) throw r.error
                        }
                    }
                    var w = [c, u, Hr, Ue, yr, Fn, Ar, ht, sn, Tn, Xr];
                    try {
                        for (var m = oo(w), g = m.next(); !g.done; g = m.next()) {
                            (0, g.value)(t, e)
                        }
                    } catch (t) {
                        a = {
                            error: t
                        }
                    } finally {
                        try {
                            g && !g.done && (i = m.return) && i.call(m)
                        } finally {
                            if (a) throw a.error
                        }
                    }
                    var x = [qe];
                    try {
                        for (var T = oo(x), E = T.next(); !E.done; E = T.next()) {
                            (0, E.value)(e)
                        }
                    } catch (t) {
                        s = {
                            error: t
                        }
                    } finally {
                        try {
                            E && !E.done && (f = T.return) && f.call(T)
                        } finally {
                            if (s) throw s.error
                        }
                    }
                    var _ = [It, no, A];
                    try {
                        for (var S = oo(_), P = S.next(); !P.done; P = S.next()) {
                            (0, P.value)(t, e)
                        }
                    } catch (t) {
                        p = {
                            error: t
                        }
                    } finally {
                        try {
                            P && !P.done && (d = S.return) && d.call(S)
                        } finally {
                            if (p) throw p.error
                        }
                    }
                }
        },
        1013: function(t, n, e) {
            "use strict";
            e.r(n);
            var r, o = e(2),
                a = e(571),
                i = function(t, n, e) {
                    t.waitForModule(o.B).then((function(t) {
                        e.addCommandToInterface({
                            version: "3.x",
                            namespace: "Label",
                            name: "createLabel",
                            args: ["floor", "position", "text", "roomId"]
                        }, (function(t) {
                            return new a.a(t)
                        }))
                    }))
                },
                c = function() {
                    return (c = Object.assign || function(t) {
                        for (var n, e = 1, r = arguments.length; e < r; e++)
                            for (var o in n = arguments[e]) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
                        return t
                    }).apply(this, arguments)
                },
                u = function(t, n, e) {
                    t.waitForModule(o.B).then((function(t) {
                        e.addCommandToInterface({
                            version: "3.x",
                            namespace: "Label",
                            name: "updateLabel",
                            args: ["sid", "properties"]
                        }, (function(t) {
                            var n = c({}, t.properties, {
                                sid: t.sid
                            });
                            return new a.c(n)
                        }))
                    }))
                },
                l = function(t, n, e) {
                    t.waitForModule(o.B).then((function(t) {
                        e.addCommandToInterface({
                            version: "3.x",
                            namespace: "Label",
                            name: "deleteLabel",
                            args: ["sid"]
                        }, (function(t) {
                            return new a.b(t.sid)
                        }))
                    }))
                },
                s = e(21),
                f = e(28),
                p = (r = function(t, n) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, n) {
                            t.__proto__ = n
                        } || function(t, n) {
                            for (var e in n) n.hasOwnProperty(e) && (t[e] = n[e])
                        })(t, n)
                }, function(t, n) {
                    function e() {
                        this.constructor = t
                    }
                    r(t, n), t.prototype = null === n ? Object.create(n) : (e.prototype = n.prototype, new e)
                }),
                d = function(t, n, e, r) {
                    return new(e || (e = Promise))((function(o, a) {
                        function i(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function c(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new e((function(n) {
                                n(t.value)
                            })).then(i, c)
                        }
                        u((r = r.apply(t, n || [])).next())
                    }))
                },
                h = function(t, n) {
                    var e, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: c(0),
                        throw: c(1),
                        return: c(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function c(a) {
                        return function(c) {
                            return function(a) {
                                if (e) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (e = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1], o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2], i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = n.call(t, i)
                                } catch (t) {
                                    a = [6, t], r = 0
                                } finally {
                                    e = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, c])
                        }
                    }
                },
                y = function(t) {
                    function n() {
                        var n = null !== t && t.apply(this, arguments) || this;
                        return n.id = "PUBLISH", n
                    }
                    return p(n, t), n
                }(s.a),
                b = function(t, n, e) {
                    n.addBinding(y, (function() {
                        return d(void 0, void 0, void 0, (function() {
                            return h(this, (function(t) {
                                return [2, f.b.publishAll()]
                            }))
                        }))
                    })), e.addCommandToInterface({
                        version: "3.x",
                        namespace: "Edit",
                        name: "publish",
                        args: []
                    }, (function(t) {
                        return new y
                    }))
                };
            e.d(n, "bindSdkInterface", (function() {
                return v
            }));
            var v = function(t, n, e) {
                [i, u, l, b].forEach((function(r) {
                    r(t, n, e)
                }))
            }
        },
        571: function(t, n, e) {
            "use strict";
            e.d(n, "a", (function() {
                return c
            })), e.d(n, "c", (function() {
                return u
            })), e.d(n, "b", (function() {
                return l
            }));
            var r, o = e(21),
                a = (r = function(t, n) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, n) {
                            t.__proto__ = n
                        } || function(t, n) {
                            for (var e in n) n.hasOwnProperty(e) && (t[e] = n[e])
                        })(t, n)
                }, function(t, n) {
                    function e() {
                        this.constructor = t
                    }
                    r(t, n), t.prototype = null === n ? Object.create(n) : (e.prototype = n.prototype, new e)
                }),
                i = function() {
                    return (i = Object.assign || function(t) {
                        for (var n, e = 1, r = arguments.length; e < r; e++)
                            for (var o in n = arguments[e]) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
                        return t
                    }).apply(this, arguments)
                },
                c = function(t) {
                    function n(n) {
                        var e = t.call(this) || this;
                        return e.id = "CREATE_LABEL", e.payload = i({}, n), e
                    }
                    return a(n, t), n
                }(o.a),
                u = function(t) {
                    function n(n) {
                        var e = t.call(this) || this;
                        return e.id = "UPDATE_LABEL", e.payload = i({}, n), e
                    }
                    return a(n, t), n
                }(o.a),
                l = function(t) {
                    function n(n) {
                        var e = t.call(this) || this;
                        return e.id = "DELETE_LABEL", e.payload = {
                            sid: n
                        }, e
                    }
                    return a(n, t), n
                }(o.a)
        },
        590: function(t, n, e) {
            "use strict";
            e.d(n, "a", (function() {
                return a
            }));
            var r, o = e(20);
            e(129);
            ! function(t) {
                t.INSIDE = "mode.inside", t.OUTSIDE = "mode.outside", t.DOLLHOUSE = "mode.dollhouse", t.FLOORPLAN = "mode.floorplan", t.TRANSITIONING = "mode.transitioning"
            }(r || (r = {}));
            var a = function(t, n) {
                switch (t) {
                    case o.a.Panorama:
                        return n ? r.INSIDE : r.OUTSIDE;
                    case o.a.Dollhouse:
                        return r.DOLLHOUSE;
                    case o.a.Floorplan:
                        return r.FLOORPLAN;
                    case o.a.Transition:
                        return r.TRANSITIONING;
                    case o.a.Outdoor:
                        return r.OUTSIDE;
                    default:
                        return r.INSIDE
                }
            }
        },
        619: function(t, n, e) {
            "use strict";
            e.d(n, "a", (function() {
                return y
            })), e.d(n, "b", (function() {
                return b
            })), e.d(n, "c", (function() {
                return v
            }));
            var r, o = e(21),
                a = e(129),
                i = e(61),
                c = e(60),
                u = e(113),
                l = e(98),
                s = e(13),
                f = e(590),
                p = (r = function(t, n) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, n) {
                            t.__proto__ = n
                        } || function(t, n) {
                            for (var e in n) n.hasOwnProperty(e) && (t[e] = n[e])
                        })(t, n)
                }, function(t, n) {
                    function e() {
                        this.constructor = t
                    }
                    r(t, n), t.prototype = null === n ? Object.create(n) : (e.prototype = n.prototype, new e)
                }),
                d = function(t, n, e, r) {
                    return new(e || (e = Promise))((function(o, a) {
                        function i(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function c(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new e((function(n) {
                                n(t.value)
                            })).then(i, c)
                        }
                        u((r = r.apply(t, n || [])).next())
                    }))
                },
                h = function(t, n) {
                    var e, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: c(0),
                        throw: c(1),
                        return: c(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function c(a) {
                        return function(c) {
                            return function(a) {
                                if (e) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (e = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1], o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2], i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = n.call(t, i)
                                } catch (t) {
                                    a = [6, t], r = 0
                                } finally {
                                    e = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, c])
                        }
                    }
                },
                y = function(t) {
                    function n() {
                        var n = t.call(this) || this;
                        return n.id = "GET_POSE", n
                    }
                    return p(n, t), n
                }(o.a),
                b = function(t, n, e) {
                    Promise.all([t.market.waitForData(i.a), t.market.waitForData(c.a), t.market.waitForData(u.a)]).then((function(t) {
                        var e = t[0],
                            r = t[1],
                            o = t[2],
                            i = {
                                position: {
                                    x: 0,
                                    y: 0,
                                    z: 0
                                },
                                rotation: {
                                    x: 0,
                                    y: 0
                                },
                                projection: new Float32Array(16),
                                sweep: "",
                                mode: a.b.TRANSITIONING
                            };
                        n.addBinding(y, (function() {
                            return d(void 0, void 0, void 0, (function() {
                                return h(this, (function(t) {
                                    return [2, v(i, e, r, o)]
                                }))
                            }))
                        }))
                    })), e.addCommandToInterface({
                        version: "3.x",
                        namespace: "Camera",
                        name: "getPose",
                        args: []
                    }, (function() {
                        return new y
                    }))
                },
                v = function(t, n, e, r) {
                    var o = (new l.a).setFromQuaternion(n.pose.rotation, "YXZ"),
                        a = e.currentSweep && e.isSweepUnaligned(e.currentSweep);
                    return t.position.x = n.pose.position.x, t.position.y = n.pose.position.y, t.position.z = n.pose.position.z, t.rotation.x = s.a.radToDeg(o.x), t.rotation.y = s.a.radToDeg(o.y), t.projection = Float32Array.from(n.pose.projection.asThreeMatrix4().transpose().elements), t.sweep = e.currentSweep, t.mode = Object(f.a)(r.currentMode, !a), t
                }
        },
        620: function(t, n, e) {
            "use strict";
            e.d(n, "a", (function() {
                return c
            }));
            var r, o = e(21),
                a = (r = function(t, n) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, n) {
                            t.__proto__ = n
                        } || function(t, n) {
                            for (var e in n) n.hasOwnProperty(e) && (t[e] = n[e])
                        })(t, n)
                }, function(t, n) {
                    function e() {
                        this.constructor = t
                    }
                    r(t, n), t.prototype = null === n ? Object.create(n) : (e.prototype = n.prototype, new e)
                }),
                i = function() {
                    return (i = Object.assign || function(t) {
                        for (var n, e = 1, r = arguments.length; e < r; e++)
                            for (var o in n = arguments[e]) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
                        return t
                    }).apply(this, arguments)
                },
                c = function(t) {
                    function n(n) {
                        var e = t.call(this) || this;
                        return e.payload = i({}, n), e
                    }
                    return a(n, t), n
                }(o.a)
        },
        697: function(t, n, e) {
            "use strict";
            e.d(n, "a", (function() {
                return l
            })), e.d(n, "b", (function() {
                return s
            })), e.d(n, "c", (function() {
                return d
            }));
            var r, o = e(21),
                a = e(2),
                i = (r = function(t, n) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, n) {
                            t.__proto__ = n
                        } || function(t, n) {
                            for (var e in n) n.hasOwnProperty(e) && (t[e] = n[e])
                        })(t, n)
                }, function(t, n) {
                    function e() {
                        this.constructor = t
                    }
                    r(t, n), t.prototype = null === n ? Object.create(n) : (e.prototype = n.prototype, new e)
                }),
                c = function(t, n, e, r) {
                    return new(e || (e = Promise))((function(o, a) {
                        function i(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function c(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new e((function(n) {
                                n(t.value)
                            })).then(i, c)
                        }
                        u((r = r.apply(t, n || [])).next())
                    }))
                },
                u = function(t, n) {
                    var e, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: c(0),
                        throw: c(1),
                        return: c(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function c(a) {
                        return function(c) {
                            return function(a) {
                                if (e) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (e = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1], o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2], i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = n.call(t, i)
                                } catch (t) {
                                    a = [6, t], r = 0
                                } finally {
                                    e = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, c])
                        }
                    }
                },
                l = function(t) {
                    function n() {
                        var n = null !== t && t.apply(this, arguments) || this;
                        return n.id = "WEBVR_PRELOAD", n
                    }
                    return i(n, t), n
                }(o.a),
                s = function(t) {
                    function n() {
                        var n = null !== t && t.apply(this, arguments) || this;
                        return n.id = "WEBVR_PRESENT", n
                    }
                    return i(n, t), n
                }(o.a),
                f = function(t) {
                    return c(void 0, void 0, void 0, (function() {
                        return u(this, (function(n) {
                            return t.hackLoadVrScript(), [2]
                        }))
                    }))
                },
                p = function(t) {
                    return c(void 0, void 0, void 0, (function() {
                        return u(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, t.hackEnterVrMode()];
                                case 1:
                                    return n.sent(), [2]
                            }
                        }))
                    }))
                },
                d = function(t, n, e) {
                    t.waitForModule(a.Ob).then((function(t) {
                        n.addBinding(l, (function() {
                            return c(void 0, void 0, void 0, (function() {
                                return u(this, (function(n) {
                                    return [2, f(t)]
                                }))
                            }))
                        })), n.addBinding(s, (function() {
                            return c(void 0, void 0, void 0, (function() {
                                return u(this, (function(n) {
                                    return [2, p(t)]
                                }))
                            }))
                        }))
                    })), e.addCommandToInterface({
                        version: "3.x",
                        namespace: "VR",
                        name: "preloadVr",
                        args: []
                    }, (function() {
                        return new l
                    })), e.addCommandToInterface({
                        version: "3.x",
                        namespace: "VR",
                        name: "presentVr",
                        args: []
                    }, (function() {
                        return new s
                    }))
                }
        }
    }
]);