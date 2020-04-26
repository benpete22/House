(window.webpackJsonp = window.webpackJsonp || []).push([
    [1], {
        528: function(t, n, o) {
            "use strict";
            o.d(n, "a", (function() {
                return a
            }));
            var r, e = o(21),
                i = (r = function(t, n) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, n) {
                            t.__proto__ = n
                        } || function(t, n) {
                            for (var o in n) n.hasOwnProperty(o) && (t[o] = n[o])
                        })(t, n)
                }, function(t, n) {
                    function o() {
                        this.constructor = t
                    }
                    r(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }),
                a = function(t) {
                    function n(n, o, r) {
                        void 0 === o && (o = !1);
                        var e = t.call(this) || this;
                        return e.id = "MOVETO_FLOOR", e.payload = {
                            floor: n,
                            suppressCameraMovement: o,
                            transitionTime: r
                        }, e
                    }
                    return i(n, t), n
                }(e.a)
        },
        536: function(t, n, o) {
            "use strict";
            o.d(n, "b", (function() {
                return r
            })), o.d(n, "a", (function() {
                return i
            }));
            var r, e = o(62);
            ! function(t) {
                t.INSTANT = "transition.instant", t.FLY = "transition.fly", t.FADEOUT = "transition.fade"
            }(r || (r = {}));
            var i = function(t) {
                switch (t) {
                    case r.FADEOUT:
                        return e.a.FadeToBlack;
                    case r.INSTANT:
                        return e.a.Instant;
                    case r.FLY:
                        return e.a.Interpolate
                }
            }
        },
        544: function(t, n, o) {
            "use strict";
            o.d(n, "a", (function() {
                return a
            }));
            var r, e = o(9),
                i = (r = function(t, n) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, n) {
                            t.__proto__ = n
                        } || function(t, n) {
                            for (var o in n) n.hasOwnProperty(o) && (t[o] = n[o])
                        })(t, n)
                }, function(t, n) {
                    function o() {
                        this.constructor = t
                    }
                    r(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }),
                a = function(t) {
                    function n(n, o) {
                        var r = t.call(this) || this;
                        return r.from = n, r.to = o, r
                    }
                    return i(n, t), n
                }(e.a)
        },
        564: function(t, n, o) {
            "use strict";
            o.d(n, "c", (function() {
                return i
            })), o.d(n, "a", (function() {
                return a
            })), o.d(n, "b", (function() {
                return u
            }));
            var r = o(1),
                e = o(18),
                i = function(t) {
                    return !!t && (t instanceof r.a || !!("object" == typeof t && "x" in t && "y" in t && "z" in t && u(t.x) && u(t.y) && u(t.z)))
                },
                a = function(t) {
                    return !!t && (t instanceof e.a || !!("object" == typeof t && "r" in t && "g" in t && "b" in t && u(t.r) && u(t.g) && u(t.b)))
                },
                u = function(t) {
                    if (null == t || isNaN(t)) return !1;
                    if ("number" == typeof t) return !0;
                    var n = parseFloat(t);
                    return !isNaN(n) && "number" == typeof n
                }
        },
        566: function(t, n, o) {
            "use strict";
            o.d(n, "a", (function() {
                return f
            })), o.d(n, "b", (function() {
                return l
            }));
            var r, e = o(21),
                i = o(188),
                a = o(528),
                u = (r = function(t, n) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, n) {
                            t.__proto__ = n
                        } || function(t, n) {
                            for (var o in n) n.hasOwnProperty(o) && (t[o] = n[o])
                        })(t, n)
                }, function(t, n) {
                    function o() {
                        this.constructor = t
                    }
                    r(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }),
                c = function(t, n, o, r) {
                    return new(o || (o = Promise))((function(e, i) {
                        function a(t) {
                            try {
                                c(r.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function u(t) {
                            try {
                                c(r.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function c(t) {
                            t.done ? e(t.value) : new o((function(n) {
                                n(t.value)
                            })).then(a, u)
                        }
                        c((r = r.apply(t, n || [])).next())
                    }))
                },
                s = function(t, n) {
                    var o, r, e, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & e[0]) throw e[1];
                            return e[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function u(i) {
                        return function(u) {
                            return function(i) {
                                if (o) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (o = 1, r && (e = 2 & i[0] ? r.return : i[0] ? r.throw || ((e = r.return) && e.call(r), 0) : r.next) && !(e = e.call(r, i[1])).done) return e;
                                    switch (r = 0, e && (i = [2 & i[0], e.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            e = i;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: i[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++, r = i[1], i = [0];
                                            continue;
                                        case 7:
                                            i = a.ops.pop(), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(e = (e = a.trys).length > 0 && e[e.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!e || i[1] > e[0] && i[1] < e[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < e[1]) {
                                                a.label = e[1], e = i;
                                                break
                                            }
                                            if (e && a.label < e[2]) {
                                                a.label = e[2], a.ops.push(i);
                                                break
                                            }
                                            e[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    i = n.call(t, a)
                                } catch (t) {
                                    i = [6, t], r = 0
                                } finally {
                                    o = e = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, u])
                        }
                    }
                },
                f = function(t) {
                    function n(n) {
                        var o = t.call(this) || this;
                        return o.id = "SHOW_ALL_FLOORS", o.payload = n, o
                    }
                    return u(n, t), n
                }(e.a),
                l = function(t, n, o) {
                    t.market.waitForData(i.c).then((function(o) {
                        return n.addBinding(f, (function(n) {
                            return c(void 0, void 0, void 0, (function() {
                                var r;
                                return s(this, (function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return e.trys.push([0, 2, , 3]), r = "boolean" == typeof n.moveCamera && !n.moveCamera, [4, t.commandBinder.issueCommand(new a.a(-1, r))];
                                        case 1:
                                            return e.sent(), [2, o.currentFloor];
                                        case 2:
                                            throw e.sent(), Error("Could not show all floors");
                                        case 3:
                                            return [2]
                                    }
                                }))
                            }))
                        }))
                    })), o.addCommandToInterface({
                        version: "3.x",
                        namespace: "Floor",
                        name: "showAll",
                        args: ["moveCamera"]
                    }, (function(t) {
                        return new f(t)
                    }))
                }
        },
        567: function(t, n, o) {
            "use strict";
            o.d(n, "a", (function() {
                return u
            }));
            var r, e = o(21),
                i = (r = function(t, n) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, n) {
                            t.__proto__ = n
                        } || function(t, n) {
                            for (var o in n) n.hasOwnProperty(o) && (t[o] = n[o])
                        })(t, n)
                }, function(t, n) {
                    function o() {
                        this.constructor = t
                    }
                    r(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }),
                a = function() {
                    return (a = Object.assign || function(t) {
                        for (var n, o = 1, r = arguments.length; o < r; o++)
                            for (var e in n = arguments[o]) Object.prototype.hasOwnProperty.call(n, e) && (t[e] = n[e]);
                        return t
                    }).apply(this, arguments)
                },
                u = function(t) {
                    function n(n) {
                        var o = t.call(this) || this;
                        return o.payload = a({}, n), o
                    }
                    return i(n, t), n
                }(e.a)
        },
        574: function(t, n, o) {
            "use strict";
            o.d(n, "d", (function() {
                return a
            })), o.d(n, "c", (function() {
                return u
            })), o.d(n, "b", (function() {
                return c
            })), o.d(n, "a", (function() {
                return s
            }));
            var r, e = o(21),
                i = (r = function(t, n) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, n) {
                            t.__proto__ = n
                        } || function(t, n) {
                            for (var o in n) n.hasOwnProperty(o) && (t[o] = n[o])
                        })(t, n)
                }, function(t, n) {
                    function o() {
                        this.constructor = t
                    }
                    r(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }),
                a = function(t) {
                    function n(n, o, r) {
                        void 0 === r && (r = 500);
                        var e = t.call(this) || this;
                        return e.id = "SELECT_SWEEP", e.payload = {
                            id: n,
                            selected: o,
                            duration: r
                        }, e
                    }
                    return i(n, t), n
                }(e.a),
                u = function(t) {
                    function n(n, o, r) {
                        void 0 === r && (r = 500);
                        var e = t.call(this) || this;
                        return e.id = "HOVER_SWEEP", e.payload = {
                            id: n,
                            hovered: o,
                            duration: r
                        }, e
                    }
                    return i(n, t), n
                }(e.a),
                c = function(t) {
                    function n() {
                        var n = null !== t && t.apply(this, arguments) || this;
                        return n.id = "ENABLE_SWEEP_SELECTION", n
                    }
                    return i(n, t), n
                }(e.a),
                s = function(t) {
                    function n() {
                        var n = null !== t && t.apply(this, arguments) || this;
                        return n.id = "DISABLE_SWEEP_SELECTION", n
                    }
                    return i(n, t), n
                }(e.a)
        },
        582: function(t, n, o) {
            "use strict";
            o.d(n, "a", (function() {
                return w
            })), o.d(n, "b", (function() {
                return _
            }));
            var r, e = o(21),
                i = o(536),
                a = o(62),
                u = o(602),
                c = o(261),
                s = o(564),
                f = o(1),
                l = o(14),
                p = o(129),
                d = o(583),
                y = o(3),
                v = (r = function(t, n) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, n) {
                            t.__proto__ = n
                        } || function(t, n) {
                            for (var o in n) n.hasOwnProperty(o) && (t[o] = n[o])
                        })(t, n)
                }, function(t, n) {
                    function o() {
                        this.constructor = t
                    }
                    r(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }),
                h = function(t, n, o, r) {
                    return new(o || (o = Promise))((function(e, i) {
                        function a(t) {
                            try {
                                c(r.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function u(t) {
                            try {
                                c(r.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function c(t) {
                            t.done ? e(t.value) : new o((function(n) {
                                n(t.value)
                            })).then(a, u)
                        }
                        c((r = r.apply(t, n || [])).next())
                    }))
                },
                b = function(t, n) {
                    var o, r, e, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & e[0]) throw e[1];
                            return e[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function u(i) {
                        return function(u) {
                            return function(i) {
                                if (o) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (o = 1, r && (e = 2 & i[0] ? r.return : i[0] ? r.throw || ((e = r.return) && e.call(r), 0) : r.next) && !(e = e.call(r, i[1])).done) return e;
                                    switch (r = 0, e && (i = [2 & i[0], e.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            e = i;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: i[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++, r = i[1], i = [0];
                                            continue;
                                        case 7:
                                            i = a.ops.pop(), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(e = (e = a.trys).length > 0 && e[e.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!e || i[1] > e[0] && i[1] < e[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < e[1]) {
                                                a.label = e[1], e = i;
                                                break
                                            }
                                            if (e && a.label < e[2]) {
                                                a.label = e[2], a.ops.push(i);
                                                break
                                            }
                                            e[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    i = n.call(t, a)
                                } catch (t) {
                                    i = [6, t], r = 0
                                } finally {
                                    o = e = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, u])
                        }
                    }
                },
                m = new y.a("move-to-mode-command"),
                w = function(t) {
                    function n(n) {
                        var o = t.call(this) || this;
                        return o.id = "MOVE_TO_MODE", o.payload = n, o
                    }
                    return v(n, t), n.validateMoveToModeInput = function(t) {
                        if (!t) throw Error("Mode.moveTo -> no arguments provided -- mode is required");
                        t.options || (t.options = {});
                        var o = t.mode;
                        if (!Object(d.a)(p.b, t.mode)) throw Error("Mode.moveTo -> " + t.mode + " is not a valid viewmode");
                        if (o === p.b.TRANSITIONING) throw Error("Mode.moveTo -> " + t.mode + " is not a valid viewmode");
                        t.options && t.options.rotation && (t.options.rotation.z = t.options.rotation.z || 0);
                        var r = n.validatePayloadOptions(t.options);
                        return {
                            mode: o,
                            options: {
                                transition: r.transition,
                                position: r.position,
                                rotation: r.rotation,
                                zoom: r.zoom
                            }
                        }
                    }, n.validatePayloadOptions = function(t) {
                        var n, o, r, e;
                        if (t) {
                            if (t.transition && void 0 === (r = Object(i.a)(t.transition))) throw Error("Mode.moveTo -> " + t.transition + " is not a valid transition style");
                            t.rotation && Object(s.c)(t.rotation) && (n = Object(c.a)(t.rotation)), t.position && Object(s.c)(t.position) && (o = new f.a(t.position.x, t.position.y, t.position.z)), t.zoom && !isNaN(t.zoom) && (e = Object(l.e)(t.zoom, 1, 30))
                        }
                        return {
                            rotation: n,
                            position: o,
                            transition: r,
                            zoom: e
                        }
                    }, n
                }(e.a),
                _ = function(t, n, o) {
                    n.addBinding(w, (function(t) {
                        return h(void 0, void 0, void 0, (function() {
                            var o, r, e, i;
                            return b(this, (function(c) {
                                switch (c.label) {
                                    case 0:
                                        return c.trys.push([0, 2, , 3]), t.options = t.options || {}, o = a.a.Interpolate, void 0 === (r = t.options.transition) || isNaN(r) || (o = r), [4, n.issueCommand(new p.a(t.mode, o, {
                                            position: t.options.position,
                                            rotation: t.options.rotation,
                                            zoom: t.options.zoom
                                        }))];
                                    case 1:
                                        return c.sent(), [2, t.mode];
                                    case 2:
                                        if (e = c.sent(), i = e instanceof u.a ? "Mode.moveTo -> Cannot move to " + t.mode + " during a mode transition" : "Mode.moveTo -> Could not move to " + t.mode, m.error(e, i), e instanceof u.a) throw Error("Mode.moveTo -> Cannot move to " + t.mode + " during a mode transition");
                                        throw Error("Mode.moveTo -> Could not move to " + t.mode);
                                    case 3:
                                        return [2]
                                }
                            }))
                        }))
                    })), o.addCommandToInterface({
                        version: "3.x",
                        namespace: "Mode",
                        name: "moveTo",
                        args: ["mode", "options"]
                    }, (function(t) {
                        return new w(w.validateMoveToModeInput(t))
                    })), o.addEnumToInterface({
                        version: "3.x",
                        namespace: "Mode",
                        name: "Mode",
                        values: p.b
                    }), o.addEnumToInterface({
                        version: "3.x",
                        namespace: "Mode",
                        name: "TransitionType",
                        values: i.b
                    })
                }
        },
        583: function(t, n, o) {
            "use strict";
            o.d(n, "a", (function() {
                return e
            }));
            var r = function(t) {
                    var n = "function" == typeof Symbol && t[Symbol.iterator],
                        o = 0;
                    return n ? n.call(t) : {
                        next: function() {
                            return t && o >= t.length && (t = void 0), {
                                value: t && t[o++],
                                done: !t
                            }
                        }
                    }
                },
                e = function(t, n) {
                    var o, e, i = Object.keys(t);
                    try {
                        for (var a = r(i), u = a.next(); !u.done; u = a.next()) {
                            if (t[u.value] === n) return !0
                        }
                    } catch (t) {
                        o = {
                            error: t
                        }
                    } finally {
                        try {
                            u && !u.done && (e = a.return) && e.call(a)
                        } finally {
                            if (o) throw o.error
                        }
                    }
                    return !1
                }
        },
        602: function(t, n, o) {
            "use strict";
            o.d(n, "a", (function() {
                return i
            }));
            var r, e = (r = function(t, n) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, n) {
                            t.__proto__ = n
                        } || function(t, n) {
                            for (var o in n) n.hasOwnProperty(o) && (t[o] = n[o])
                        })(t, n)
                }, function(t, n) {
                    function o() {
                        this.constructor = t
                    }
                    r(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }),
                i = function(t) {
                    function n() {
                        var n = t.call(this) || this;
                        return n.message = "Tried to start view-mode transition while another transition was active!", n
                    }
                    return e(n, t), n
                }(Error)
        },
        610: function(t, n, o) {
            "use strict";
            o.d(n, "a", (function() {
                return l
            })), o.d(n, "b", (function() {
                return p
            }));
            var r, e = o(21),
                i = o(536),
                a = o(62),
                u = o(2),
                c = (r = function(t, n) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, n) {
                            t.__proto__ = n
                        } || function(t, n) {
                            for (var o in n) n.hasOwnProperty(o) && (t[o] = n[o])
                        })(t, n)
                }, function(t, n) {
                    function o() {
                        this.constructor = t
                    }
                    r(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }),
                s = function(t, n, o, r) {
                    return new(o || (o = Promise))((function(e, i) {
                        function a(t) {
                            try {
                                c(r.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function u(t) {
                            try {
                                c(r.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function c(t) {
                            t.done ? e(t.value) : new o((function(n) {
                                n(t.value)
                            })).then(a, u)
                        }
                        c((r = r.apply(t, n || [])).next())
                    }))
                },
                f = function(t, n) {
                    var o, r, e, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & e[0]) throw e[1];
                            return e[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function u(i) {
                        return function(u) {
                            return function(i) {
                                if (o) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (o = 1, r && (e = 2 & i[0] ? r.return : i[0] ? r.throw || ((e = r.return) && e.call(r), 0) : r.next) && !(e = e.call(r, i[1])).done) return e;
                                    switch (r = 0, e && (i = [2 & i[0], e.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            e = i;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: i[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++, r = i[1], i = [0];
                                            continue;
                                        case 7:
                                            i = a.ops.pop(), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(e = (e = a.trys).length > 0 && e[e.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!e || i[1] > e[0] && i[1] < e[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < e[1]) {
                                                a.label = e[1], e = i;
                                                break
                                            }
                                            if (e && a.label < e[2]) {
                                                a.label = e[2], a.ops.push(i);
                                                break
                                            }
                                            e[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    i = n.call(t, a)
                                } catch (t) {
                                    i = [6, t], r = 0
                                } finally {
                                    o = e = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, u])
                        }
                    }
                },
                l = function(t) {
                    function n(n, o) {
                        var r = t.call(this) || this;
                        r.id = "NAVIGATE_TO_MATTERTAG";
                        var e = Object(i.a)(o) || a.a.Interpolate;
                        return r.payload = {
                            sid: n,
                            transition: e
                        }, r
                    }
                    return c(n, t), n
                }(e.a),
                p = function(t, n, o) {
                    return s(void 0, void 0, void 0, (function() {
                        var r = this;
                        return f(this, (function(e) {
                            return o.addCommandToInterface({
                                version: "3.x",
                                namespace: "Mattertag",
                                name: "navigateToTag",
                                args: ["sid", "transitionType"]
                            }, (function(t) {
                                return new l(t.sid, t.transitionType)
                            })), o.addEnumToInterface({
                                version: "3.x",
                                namespace: "Mattertag",
                                name: "Transition",
                                values: i.b
                            }), t.waitForModule(u.L).then((function(t) {
                                return n.addBinding(l, (function(n) {
                                    return s(r, void 0, void 0, (function() {
                                        return f(this, (function(o) {
                                            switch (o.label) {
                                                case 0:
                                                    return o.trys.push([0, 2, , 3]), [4, t.navigateToTag(n.sid, n.transition)];
                                                case 1:
                                                    return o.sent(), [2, n.sid];
                                                case 2:
                                                    throw o.sent(), Error("Could not move to tag with sid " + n.sid);
                                                case 3:
                                                    return [2]
                                            }
                                        }))
                                    }))
                                }))
                            })), [2]
                        }))
                    }))
                }
        },
        667: function(t, n, o) {
            "use strict";
            o.d(n, "a", (function() {
                return f
            })), o.d(n, "b", (function() {
                return l
            }));
            var r, e = o(21),
                i = o(188),
                a = o(528),
                u = (r = function(t, n) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, n) {
                            t.__proto__ = n
                        } || function(t, n) {
                            for (var o in n) n.hasOwnProperty(o) && (t[o] = n[o])
                        })(t, n)
                }, function(t, n) {
                    function o() {
                        this.constructor = t
                    }
                    r(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }),
                c = function(t, n, o, r) {
                    return new(o || (o = Promise))((function(e, i) {
                        function a(t) {
                            try {
                                c(r.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function u(t) {
                            try {
                                c(r.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function c(t) {
                            t.done ? e(t.value) : new o((function(n) {
                                n(t.value)
                            })).then(a, u)
                        }
                        c((r = r.apply(t, n || [])).next())
                    }))
                },
                s = function(t, n) {
                    var o, r, e, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & e[0]) throw e[1];
                            return e[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function u(i) {
                        return function(u) {
                            return function(i) {
                                if (o) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (o = 1, r && (e = 2 & i[0] ? r.return : i[0] ? r.throw || ((e = r.return) && e.call(r), 0) : r.next) && !(e = e.call(r, i[1])).done) return e;
                                    switch (r = 0, e && (i = [2 & i[0], e.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            e = i;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: i[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++, r = i[1], i = [0];
                                            continue;
                                        case 7:
                                            i = a.ops.pop(), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(e = (e = a.trys).length > 0 && e[e.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!e || i[1] > e[0] && i[1] < e[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < e[1]) {
                                                a.label = e[1], e = i;
                                                break
                                            }
                                            if (e && a.label < e[2]) {
                                                a.label = e[2], a.ops.push(i);
                                                break
                                            }
                                            e[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    i = n.call(t, a)
                                } catch (t) {
                                    i = [6, t], r = 0
                                } finally {
                                    o = e = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, u])
                        }
                    }
                },
                f = function(t) {
                    function n(n) {
                        var o = t.call(this) || this;
                        return o.id = "MOVE_TO_FLOOR", o.payload = n, o
                    }
                    return u(n, t), n
                }(e.a),
                l = function(t, n, o) {
                    t.market.waitForData(i.c).then((function(o) {
                        return n.addBinding(f, (function(n) {
                            return c(void 0, void 0, void 0, (function() {
                                var r, e;
                                return s(this, (function(i) {
                                    switch (i.label) {
                                        case 0:
                                            if ("number" != typeof n.floorIndex || n.floorIndex < 0) throw Error("floor index must be a non-negative number");
                                            i.label = 1;
                                        case 1:
                                            return i.trys.push([1, 3, , 4]), r = "boolean" == typeof n.moveCamera && !n.moveCamera, e = r ? 250 : void 0, [4, t.commandBinder.issueCommand(new a.a(n.floorIndex, r, e))];
                                        case 2:
                                            return i.sent(), [2, o.currentFloor];
                                        case 3:
                                            throw i.sent(), Error("Could not move to floor at index " + n.floorIndex);
                                        case 4:
                                            return [2]
                                    }
                                }))
                            }))
                        }))
                    })), o.addCommandToInterface({
                        version: "3.x",
                        namespace: "Floor",
                        name: "moveTo",
                        args: ["floorIndex", "moveCamera"]
                    }, (function(t) {
                        return new f(t)
                    }))
                }
        },
        679: function(t, n, o) {
            "use strict";
            o.d(n, "a", (function() {
                return f
            })), o.d(n, "b", (function() {
                return l
            }));
            var r, e = o(21),
                i = o(2),
                a = (r = function(t, n) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, n) {
                            t.__proto__ = n
                        } || function(t, n) {
                            for (var o in n) n.hasOwnProperty(o) && (t[o] = n[o])
                        })(t, n)
                }, function(t, n) {
                    function o() {
                        this.constructor = t
                    }
                    r(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }),
                u = function(t, n, o, r) {
                    return new(o || (o = Promise))((function(e, i) {
                        function a(t) {
                            try {
                                c(r.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function u(t) {
                            try {
                                c(r.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function c(t) {
                            t.done ? e(t.value) : new o((function(n) {
                                n(t.value)
                            })).then(a, u)
                        }
                        c((r = r.apply(t, n || [])).next())
                    }))
                },
                c = function(t, n) {
                    var o, r, e, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & e[0]) throw e[1];
                            return e[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function u(i) {
                        return function(u) {
                            return function(i) {
                                if (o) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (o = 1, r && (e = 2 & i[0] ? r.return : i[0] ? r.throw || ((e = r.return) && e.call(r), 0) : r.next) && !(e = e.call(r, i[1])).done) return e;
                                    switch (r = 0, e && (i = [2 & i[0], e.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            e = i;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: i[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++, r = i[1], i = [0];
                                            continue;
                                        case 7:
                                            i = a.ops.pop(), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(e = (e = a.trys).length > 0 && e[e.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!e || i[1] > e[0] && i[1] < e[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < e[1]) {
                                                a.label = e[1], e = i;
                                                break
                                            }
                                            if (e && a.label < e[2]) {
                                                a.label = e[2], a.ops.push(i);
                                                break
                                            }
                                            e[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    i = n.call(t, a)
                                } catch (t) {
                                    i = [6, t], r = 0
                                } finally {
                                    o = e = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, u])
                        }
                    }
                },
                s = function(t) {
                    function n(n, o) {
                        var r = t.call(this) || this;
                        return r.id = "MATTERTAG_OPEN", r.payload = {
                            tags: n,
                            persistent: o
                        }, r
                    }
                    return a(n, t), n
                }(e.a),
                f = function(t) {
                    function n(n, o) {
                        var r = t.call(this) || this;
                        return r.id = "MATTERTAG_CLOSE", r.payload = {
                            tags: n,
                            persistent: o
                        }, r
                    }
                    return a(n, t), n
                }(e.a),
                l = function(t, n, o) {
                    return u(void 0, void 0, void 0, (function() {
                        var r = this;
                        return c(this, (function(e) {
                            return o.addCommandToInterface({
                                version: "3.x",
                                namespace: "Mattertag",
                                name: "openBillboards",
                                args: ["tags", "persistent"]
                            }, (function(t) {
                                return new s(t.tags, t.persistent)
                            })), o.addCommandToInterface({
                                version: "3.x",
                                namespace: "Mattertag",
                                name: "closeBillboards",
                                args: ["tags", "persistent"]
                            }, (function(t) {
                                return new f(t.tags, t.persistent)
                            })), t.waitForModule(i.L).then((function(t) {
                                n.addBinding(s, (function(n) {
                                    return u(r, void 0, Promise, (function() {
                                        return c(this, (function(o) {
                                            return t.addBillboards(n.tags, !!n.persistent), [2]
                                        }))
                                    }))
                                }))
                            })), t.waitForModule(i.L).then((function(t) {
                                n.addBinding(f, (function(n) {
                                    return u(r, void 0, Promise, (function() {
                                        return c(this, (function(o) {
                                            return t.removeBillboards(n.tags, !!n.persistent), [2]
                                        }))
                                    }))
                                }))
                            })), [2]
                        }))
                    }))
                }
        }
    }
]);