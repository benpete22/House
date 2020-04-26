(window.webpackJsonp = window.webpackJsonp || []).push([
    [6], {
        1008: function(t, e, n) {
            "use strict";
            n.r(e);
            var r, o = n(108),
                i = n(139),
                a = n(2),
                s = n(20),
                u = n(96),
                c = n(113),
                l = n(62),
                h = n(530),
                p = n(31),
                f = n(153),
                d = n(152),
                y = n(15),
                v = n(66),
                m = n(77),
                w = n(61),
                g = n(254),
                b = n(27),
                T = function(t, e, n, r) {
                    return new(n || (n = Promise))((function(o, i) {
                        function a(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function s(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new n((function(e) {
                                e(t.value)
                            })).then(a, s)
                        }
                        u((r = r.apply(t, e || [])).next())
                    }))
                },
                P = function(t, e) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function s(i) {
                        return function(s) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
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
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1], o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    i = e.call(t, a)
                                } catch (t) {
                                    i = [6, t], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, s])
                        }
                    }
                },
                D = function() {
                    function t(t) {
                        this.delayDuration = t, this.type = g.c.Delay, this.toIndex = -1, this.currentTransitionPromise = null, this.cancelDelay = function() {
                            return null
                        }
                    }
                    return Object.defineProperty(t.prototype, "active", {
                        get: function() {
                            return null !== this.currentTransitionPromise
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "promise", {
                        get: function() {
                            return this.currentTransitionPromise ? this.currentTransitionPromise : Promise.resolve()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.stop = function() {
                        return T(this, void 0, Promise, (function() {
                            return P(this, (function(t) {
                                return this.currentTransitionPromise && (this.cancelDelay(), this.currentTransitionPromise = null), [2]
                            }))
                        }))
                    }, t.prototype.start = function() {
                        var t = this;
                        if (this.active) throw Error("Transition already active");
                        var e = Object(b.c)(this.delayDuration);
                        return this.cancelDelay = function() {
                            e.cancel()
                        }, this.currentTransitionPromise = e.promise.then((function() {
                            return t.stop()
                        })), this
                    }, t
                }(),
                S = function(t, e, n, r) {
                    return new(n || (n = Promise))((function(o, i) {
                        function a(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function s(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new n((function(e) {
                                e(t.value)
                            })).then(a, s)
                        }
                        u((r = r.apply(t, e || [])).next())
                    }))
                },
                x = function(t, e) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function s(i) {
                        return function(s) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
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
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1], o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    i = e.call(t, a)
                                } catch (t) {
                                    i = [6, t], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, s])
                        }
                    }
                },
                M = function() {
                    function t(t, e) {
                        this.zoom = t, this.stopZooming = e, this.type = g.c.Zoom, this.toIndex = -1, this.currentTransitionPromise = null, this.onStopRequested = function() {
                            return Promise.resolve()
                        }
                    }
                    return Object.defineProperty(t.prototype, "active", {
                        get: function() {
                            return null !== this.currentTransitionPromise
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "promise", {
                        get: function() {
                            return this.currentTransitionPromise ? this.currentTransitionPromise : Promise.resolve()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.stop = function() {
                        return S(this, void 0, Promise, (function() {
                            return x(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.currentTransitionPromise ? [4, this.onStopRequested()] : [3, 3];
                                    case 1:
                                        return t.sent(), [4, this.promise];
                                    case 2:
                                        t.sent(), this.currentTransitionPromise = null, t.label = 3;
                                    case 3:
                                        return [2]
                                }
                            }))
                        }))
                    }, t.prototype.start = function() {
                        var t = this;
                        if (this.active) throw Error("Transition already active");
                        return this.currentTransitionPromise = this.zoom(i.g.snapshotPanDuration, -5e-4).then((function() {
                            t.currentTransitionPromise = null
                        })), this.onStopRequested = function() {
                            return S(t, void 0, void 0, (function() {
                                return x(this, (function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, this.stopZooming()];
                                        case 1:
                                            return t.sent(), [2]
                                    }
                                }))
                            }))
                        }, this
                    }, t
                }(),
                _ = n(99),
                O = n(10),
                k = n(5),
                C = n(13),
                A = function(t, e, n, r) {
                    return new(n || (n = Promise))((function(o, i) {
                        function a(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function s(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new n((function(e) {
                                e(t.value)
                            })).then(a, s)
                        }
                        u((r = r.apply(t, e || [])).next())
                    }))
                },
                E = function(t, e) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function s(i) {
                        return function(s) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
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
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1], o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    i = e.call(t, a)
                                } catch (t) {
                                    i = [6, t], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, s])
                        }
                    }
                },
                R = function() {
                    function t(t, e, n, r) {
                        var o = this;
                        this.getPanAngle = t, this.getPanDuration = e, this.rotate = n, this.stopRotating = r, this.type = g.c.Burns, this.toIndex = -1, this.currentTransitionPromise = null, this.onStopRequested = function() {
                            return Promise.resolve()
                        }, this.getPanDirection = function(t, e) {
                            var n = -C.a.degToRad(o.getPanAngle()) / o.getPanDuration();
                            if (t && t.metadata.scan_id && t.metadata.camera_quaternion && t.metadata.camera_position && e && e.metadata.scan_id && e.metadata.camera_position && e.metadata.camera_quaternion) {
                                var r = O.b.FORWARD.clone().applyQuaternion(t.metadata.camera_quaternion),
                                    i = e.metadata.camera_position,
                                    a = t.metadata.camera_position,
                                    s = i.clone().sub(a).normalize();
                                s.lengthSq() < _.a.epsilon && (s = O.b.FORWARD.clone().applyQuaternion(e.metadata.camera_quaternion)), r.cross(s).y > 0 && (n = -n)
                            }
                            return n
                        }
                    }
                    return Object.defineProperty(t.prototype, "active", {
                        get: function() {
                            return null !== this.currentTransitionPromise
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "promise", {
                        get: function() {
                            return this.currentTransitionPromise ? this.currentTransitionPromise : Promise.resolve()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.stop = function() {
                        return A(this, void 0, Promise, (function() {
                            return E(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.currentTransitionPromise ? [4, this.onStopRequested()] : [3, 3];
                                    case 1:
                                        return t.sent(), [4, this.promise];
                                    case 2:
                                        t.sent(), this.currentTransitionPromise = null, t.label = 3;
                                    case 3:
                                        return [2]
                                }
                            }))
                        }))
                    }, t.prototype.start = function(t) {
                        var e = this;
                        if (this.active) throw Error("Transition already active");
                        if (!t) throw Error("Tour pan requires two snapshots");
                        if (!t.snapshot || !t.nextSnapshot) return this.currentTransitionPromise = Promise.resolve(), this;
                        var n = this.build(t.snapshot, t.nextSnapshot, t.overrideDirection).deferred;
                        return this.currentTransitionPromise = n.then((function() {
                            e.currentTransitionPromise = null
                        })), this
                    }, t.prototype.build = function(t, e, n) {
                        var r, o = this;
                        return r = void 0 !== n ? n * (C.a.degToRad(this.getPanAngle()) / this.getPanDuration()) : this.getPanDirection(t, e), this.onStopRequested = function() {
                            return A(o, void 0, void 0, (function() {
                                return E(this, (function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, this.stopRotating()];
                                        case 1:
                                            return t.sent(), [2]
                                    }
                                }))
                            }))
                        }, {
                            deferred: this.rotate(this.getPanDuration(), new k.a(r, 0))
                        }
                    }, t
                }(),
                I = n(14),
                F = n(94),
                j = n(33),
                U = function(t, e, n, r) {
                    var o = Math.min(t.distanceTo(e), 5),
                        i = o * (1 / r) * 1e3,
                        a = i,
                        s = n / i;
                    s > .001 && (a += a * ((s - .001) / .001));
                    var u = Math.abs(t.clone().setX(0).setZ(0).distanceTo(e.clone().setX(0).setZ(0)) / Math.max(o, 1));
                    u > .1 && (a *= .9 + .75 * u);
                    return a
                },
                B = function(t, e, n, r) {
                    return new(n || (n = Promise))((function(o, i) {
                        function a(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function s(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new n((function(e) {
                                e(t.value)
                            })).then(a, s)
                        }
                        u((r = r.apply(t, e || [])).next())
                    }))
                },
                G = function(t, e) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function s(i) {
                        return function(s) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
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
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1], o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    i = e.call(t, a)
                                } catch (t) {
                                    i = [6, t], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, s])
                        }
                    }
                },
                N = function() {
                    function t(t, e, n, r, o, i) {
                        this.cameraPose = t, this.moveToSweep = e, this.updateTransitionSpeed = n, this.setRestrictedSweeps = r, this.generators = o, this.getWalkingTourSpeed = i, this.toIndex = -1, this.currentGenerator = null, this.currentTransitionPromise = null, this.type = g.c.Move
                    }
                    return Object.defineProperty(t.prototype, "active", {
                        get: function() {
                            return null !== this.currentTransitionPromise || null !== this.currentGenerator
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "promise", {
                        get: function() {
                            return this.currentTransitionPromise ? this.currentTransitionPromise : Promise.resolve()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.stop = function() {
                        return B(this, void 0, Promise, (function() {
                            return G(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.currentTransitionPromise ? [4, this.onStopRequested()] : [3, 3];
                                    case 1:
                                        return t.sent(), [4, this.promise];
                                    case 2:
                                        t.sent(), this.currentTransitionPromise = null, t.label = 3;
                                    case 3:
                                        return this.currentGenerator && (this.generators.stopGenerator(this.currentGenerator), this.currentGenerator = null), [2]
                                }
                            }))
                        }))
                    }, t.prototype.start = function(t) {
                        if (this.active) throw Error("Transition already active");
                        var e = this.build(t.path, t.orientations),
                            n = e.generator,
                            r = e.deferred;
                        return this.generators.startGenerator(n), this.currentGenerator = n, this.currentTransitionPromise = r.nativePromise(), this
                    }, t.prototype.build = function(t, e) {
                        var n = this,
                            r = new j.a,
                            i = this,
                            s = !1;
                        return this.onStopRequested = function() {
                            return B(n, void 0, void 0, (function() {
                                return G(this, (function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return s = !0, [4, this.updateTransitionSpeed(a.p)];
                                        case 1:
                                            return t.sent(), [2]
                                    }
                                }))
                            }))
                        }, {
                            generator: function() {
                                var n, a, u, c, h, p, f, d, y, v, m;
                                return G(this, (function(w) {
                                    switch (w.label) {
                                        case 0:
                                            n = 1, w.label = 1;
                                        case 1:
                                            return n < t.length && !s ? (a = n - 1, u = t[n], c = u.position, h = t[a], p = e[n], f = Object(I.d)(i.cameraPose.rotation, p), d = i.getWalkingTourSpeed(), y = U(h.position, c, f, d), v = {
                                                transitionType: l.a.Interpolate,
                                                sweepId: u.id,
                                                rotation: p,
                                                transitionTime: y,
                                                easing: F.i
                                            }, i.setRestrictedSweeps(t, a), m = i.moveToSweep(v), [4, new o.c(m.nativePromise())]) : [3, 3];
                                        case 2:
                                            return w.sent(), n++, [3, 1];
                                        case 3:
                                            return i.setRestrictedSweeps(null), r.resolve(), i.currentTransitionPromise = null, i.stop(), [2]
                                    }
                                }))
                            },
                            deferred: r
                        }
                    }, t
                }(),
                L = n(188),
                V = n(16),
                z = n(1),
                H = n(3),
                W = function(t, e, n, r) {
                    return new(n || (n = Promise))((function(o, i) {
                        function a(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function s(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new n((function(e) {
                                e(t.value)
                            })).then(a, s)
                        }
                        u((r = r.apply(t, e || [])).next())
                    }))
                },
                q = function(t, e) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function s(i) {
                        return function(s) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
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
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1], o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    i = e.call(t, a)
                                } catch (t) {
                                    i = [6, t], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, s])
                        }
                    }
                },
                Q = new H.a("tours"),
                Y = function() {
                    function t(t, e, n, r, i, s, u, c, h) {
                        var p = this;
                        this.cameraPose = t, this.cameraTransition = e, this.sweepTransition = n, this.sweepControl = r, this.cameraControl = i, this.generators = s, this.setRestrictedSweeps = u, this.getCurve = c, this.getWalkingTourSpeed = h, this.type = g.c.Path, this.toIndex = -1, this.currentTransitionGenerator = null, this.currentTransitionPromise = null, this.canceling = !1, this.buildTransition = function(t, e) {
                            if (t.length <= 2) throw Q.debug("invalid path: " + t), new Error("smooth path requires more than 2 stops");
                            var n = p,
                                r = new j.a;
                            n.setRestrictedSweeps(t);
                            var i = t.map((function(t) {
                                    return t.position
                                })),
                                s = n.getCurve(i),
                                u = F.i,
                                c = F.e,
                                h = F.d,
                                f = function(t, e, n) {
                                    for (var r = 0, o = 0; o < t.length - 1; o++) {
                                        var i = Object(I.d)(e[o], e[o + 1]);
                                        r += U(t[o].position, t[o + 1].position, i, n)
                                    }
                                    return r
                                }(t, e, n.getWalkingTourSpeed());
                            Q.debug("path duration: " + f.toFixed(0) + "ms, at speed: " + n.getWalkingTourSpeed() + "m/s"), n.cameraControl.beginExternalTransition();
                            return {
                                generator: function() {
                                    var i, p, d, y, v, m, w, g, b, T, P, D, S, x, M, _, O, k, C;
                                    return q(this, (function(A) {
                                        switch (A.label) {
                                            case 0:
                                                return r.notify(0), i = new z.a, p = new V.a, d = 0, y = 0, v = 0, w = t[m = 1].id, [4, new o.c(n.sweepControl.activateSweepUnsafe({
                                                    sweepId: w
                                                }))];
                                            case 1:
                                                A.sent(), n.sweepControl.beginSweepTransition({
                                                    sweepId: w,
                                                    transitionTime: f,
                                                    internalProgress: !1
                                                }), t.length > 2 && n.sweepControl.activateSweepUnsafe({
                                                    sweepId: t[2].id
                                                }), g = n.cameraPose.rotation.clone(), A.label = 2;
                                            case 2:
                                                return d < f && !n.canceling ? (b = d / f, v > 0 && (g = e[v].clone()), T = e[m], P = s.normalSourceDistances[v], D = s.normalSourceDistances[m], S = t[m], (y = Object(I.p)(b, P, D, 0, 1)) <= 1 && (x = h(y, 0, 1, 1), n.sweepTransition.progress.modifyAnimation(x, 1, 0), M = c(y, 0, 1, 1), p.copy(g).slerp(T, M)), b < 1 && i.copy(s.curve.getPointAt(u(b, 0, 1, 1))), n.cameraControl.updateCameraPosition(i), n.cameraControl.updateCameraRotation(p), b >= D ? (n.sweepControl.endSweepTransition({
                                                    sweepId: S.id
                                                }), v++, m++, w = t[v + 1].id, [4, new o.c(n.sweepControl.activateSweepUnsafe({
                                                    sweepId: w
                                                }))]) : [3, 4]) : [3, 6];
                                            case 3:
                                                A.sent(), n.sweepControl.beginSweepTransition({
                                                    sweepId: w,
                                                    transitionTime: f,
                                                    internalProgress: !1
                                                }), t.length > v + 2 && n.sweepControl.activateSweepUnsafe({
                                                    sweepId: t[v + 2].id
                                                }), A.label = 4;
                                            case 4:
                                                return r.notify(b), d = Date.now() - n.cameraTransition.startTime, [4, new o.b];
                                            case 5:
                                                return A.sent(), [3, 2];
                                            case 6:
                                                return n.cameraControl.endExternalTransition(), n.canceling ? (n.canceling = !1, _ = t[m].position, O = n.getWalkingTourSpeed(), k = U(n.cameraPose.position, _, 0, O), (C = n.cameraControl.moveTo({
                                                    transitionTime: k / a.p,
                                                    transitionType: l.a.Interpolate,
                                                    pose: {
                                                        position: _
                                                    }
                                                })).progress((function(t) {
                                                    var e = Object(I.p)(t, 0, 1, y, 1);
                                                    n.sweepTransition.progress.modifyAnimation(e, 1, 0)
                                                })), [4, new o.c(C.nativePromise())]) : [3, 8];
                                            case 7:
                                                A.sent(), A.label = 8;
                                            case 8:
                                                return n.sweepControl.endSweepTransition({
                                                    sweepId: w
                                                }), n.setRestrictedSweeps(null), r.notify(1), r.resolve(), [2]
                                        }
                                    }))
                                },
                                deferred: r
                            }
                        }
                    }
                    return Object.defineProperty(t.prototype, "active", {
                        get: function() {
                            return null !== this.currentTransitionPromise || null !== this.currentTransitionGenerator
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "promise", {
                        get: function() {
                            return this.currentTransitionPromise ? this.currentTransitionPromise : Promise.resolve()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.stop = function() {
                        return W(this, void 0, Promise, (function() {
                            return q(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.canceling = !0, this.currentTransitionPromise ? [4, this.promise] : [3, 2];
                                    case 1:
                                        t.sent(), this.currentTransitionPromise = null, t.label = 2;
                                    case 2:
                                        return this.currentTransitionGenerator && (this.generators.stopGenerator(this.currentTransitionGenerator), this.currentTransitionGenerator = null), [2]
                                }
                            }))
                        }))
                    }, t.prototype.start = function(t) {
                        var e = this;
                        if (Q.debug("starting smooth transition with " + (t.path.length - 1) + " stops"), this.active) throw Error("Transition already active");
                        this.canceling = !1;
                        var n = this.buildTransition(t.path, t.orientations),
                            r = n.generator,
                            o = n.deferred;
                        return this.generators.startGenerator(r), this.currentTransitionGenerator = r, this.currentTransitionPromise = o.nativePromise().then((function() {
                            e.currentTransitionPromise = null, e.currentTransitionGenerator = null
                        })), this
                    }, t
                }(),
                J = n(60),
                Z = function(t, e, n, r) {
                    return new(n || (n = Promise))((function(o, i) {
                        function a(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function s(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new n((function(e) {
                                e(t.value)
                            })).then(a, s)
                        }
                        u((r = r.apply(t, e || [])).next())
                    }))
                },
                K = function(t, e) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function s(i) {
                        return function(s) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
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
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1], o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    i = e.call(t, a)
                                } catch (t) {
                                    i = [6, t], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, s])
                        }
                    }
                },
                X = function() {
                    function t(t, e, n, r, o, i, a) {
                        this.cameraPose = t, this.viewmodeData = e, this.cameraControl = n, this.sweepControl = r, this.switchToMode = o, this.setRestrictedSweeps = i, this.generators = a, this.toIndex = -1, this.type = g.c.Move, this.currentTransitionPromise = null, this.onStopRequested = function() {
                            return Promise.resolve()
                        }
                    }
                    return Object.defineProperty(t.prototype, "active", {
                        get: function() {
                            return null !== this.currentTransitionPromise
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "promise", {
                        get: function() {
                            return this.currentTransitionPromise ? this.currentTransitionPromise : Promise.resolve()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.stop = function() {
                        return Z(this, void 0, Promise, (function() {
                            return K(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.currentTransitionPromise ? [4, this.onStopRequested()] : [3, 3];
                                    case 1:
                                        return t.sent(), [4, this.promise];
                                    case 2:
                                        t.sent(), this.currentTransitionPromise = null, t.label = 3;
                                    case 3:
                                        return [2]
                                }
                            }))
                        }))
                    }, t.prototype.start = function(t) {
                        var e = this;
                        if (this.active) throw Error("Transition already active");
                        if (!t.snapshot) return this.currentTransitionPromise = Promise.resolve(), this;
                        var n = this.build(t.snapshot, t.currentSweep, t.transitionType).deferred;
                        return this.currentTransitionPromise = n.then((function() {
                            e.currentTransitionPromise = null
                        })), this
                    }, t.prototype.build = function(t, e, n) {
                        Promise.resolve();
                        var r = t.metadata.camera_mode,
                            o = t.metadata.camera_quaternion,
                            i = t.metadata.scan_id,
                            a = this.cameraPose.rotation,
                            s = Object(I.d)(a, o),
                            u = t.metadata.camera_position,
                            c = !t.is360,
                            h = {
                                position: u,
                                rotation: o,
                                sweepID: i,
                                zoom: t.metadata.ortho_zoom
                            },
                            p = n === l.a.Interpolate ? Math.max(1e3 * s / (75 * C.a.DEG2RAD), 1200) : void 0,
                            f = r !== this.viewmodeData.currentMode,
                            d = !!i && this.viewmodeData.isPano(),
                            y = d && !e || i !== e;
                        return {
                            deferred: f ? this.switchToMode(r, n, h, p) : d ? y ? this.standardTransitionSweepMovePromise(h, i, c) : this.standardTransitionSweepRotationPromise(h, s) : this.cameraControl.moveTo({
                                transitionType: l.a.Interpolate,
                                pose: h,
                                transitionTime: p
                            }).nativePromise()
                        }
                    }, t.prototype.standardTransitionSweepRotationPromise = function(t, e) {
                        if (!t.rotation) throw Error("Rotation transition requires a rotation");
                        if (e < .01) return Promise.resolve();
                        this.setRestrictedSweeps(null);
                        var n = Math.max(1e3 * e / (35 * C.a.DEG2RAD), 1200);
                        return this.cameraControl.moveTo({
                            transitionType: l.a.Interpolate,
                            pose: {
                                rotation: t.rotation
                            },
                            transitionTime: n
                        }).nativePromise()
                    }, t.prototype.standardTransitionSweepMovePromise = function(t, e, n) {
                        if (!t.position) throw Error("Push transition requires a position");
                        var r = t.position.clone().sub(this.cameraPose.position).normalize(),
                            i = this.cameraPose.position.clone().add(r.multiplyScalar(.15)),
                            a = new j.a;
                        this.setRestrictedSweeps(null);
                        var s = this;
                        return this.generators.startGenerator((function() {
                            var r, u, c, h, p, f, d, y, v;
                            return K(this, (function(m) {
                                switch (m.label) {
                                    case 0:
                                        return [4, new o.c(s.sweepControl.activateSweepUnsafe({
                                            sweepId: e
                                        }))];
                                    case 1:
                                        m.sent(), r = new z.a, u = s.cameraPose.position.clone(), c = Date.now(), h = 600, p = 0, f = !1, d = !1, m.label = 2;
                                    case 2:
                                        return p < h ? (v = Object(F.f)(p, 0, p / h, h), n && s.cameraControl.updateCameraPosition(r.copy(u).lerp(i, v)), v >= .3 && !d && (y = s.cameraControl.moveTo({
                                            transitionType: l.a.FadeToBlack,
                                            pose: t,
                                            transitionTime: h
                                        }).progress((function(t) {
                                            t >= .5 && !f && (s.sweepControl.instantSweepTransition(e), f = !0)
                                        })), d = !0), [4, new o.b]) : [3, 4];
                                    case 3:
                                        return m.sent(), p = Date.now() - c, [3, 2];
                                    case 4:
                                        return y ? [4, new o.c(y.nativePromise())] : [3, 6];
                                    case 5:
                                        m.sent(), m.label = 6;
                                    case 6:
                                        return a.resolve(), [2]
                                }
                            }))
                        })), a.nativePromise()
                    }, t
                }(),
                $ = n(528),
                tt = function(t, e, n, r) {
                    return new(n || (n = Promise))((function(o, i) {
                        function a(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function s(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new n((function(e) {
                                e(t.value)
                            })).then(a, s)
                        }
                        u((r = r.apply(t, e || [])).next())
                    }))
                },
                et = function(t, e) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function s(i) {
                        return function(s) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
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
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1], o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    i = e.call(t, a)
                                } catch (t) {
                                    i = [6, t], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, s])
                        }
                    }
                },
                nt = function() {
                    function t(t, e) {
                        this.issueCommand = t, this.currentFloor = e, this.type = g.c.FloorChange, this.toIndex = -1, this.currentTransitionPromise = null, this.onStopRequested = function() {
                            return Promise.resolve()
                        }
                    }
                    return Object.defineProperty(t.prototype, "active", {
                        get: function() {
                            return null !== this.currentTransitionPromise
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "promise", {
                        get: function() {
                            return this.currentTransitionPromise ? this.currentTransitionPromise : Promise.resolve()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.stop = function() {
                        return tt(this, void 0, Promise, (function() {
                            return et(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.currentTransitionPromise ? [4, this.onStopRequested()] : [3, 3];
                                    case 1:
                                        return t.sent(), [4, this.promise];
                                    case 2:
                                        t.sent(), this.currentTransitionPromise = null, t.label = 3;
                                    case 3:
                                        return [2]
                                }
                            }))
                        }))
                    }, t.prototype.start = function(t) {
                        var e = this;
                        if (this.active) throw Error("Transition already active");
                        var n = Promise.resolve(),
                            r = t.targetSnapshot.metadata.floor,
                            o = r !== this.currentFloor(),
                            i = t.targetSnapshot.metadata.camera_mode;
                        return i !== s.a.Panorama && i !== s.a.Outdoor && o && (n = this.issueCommand(new $.a(r, !0))), this.currentTransitionPromise = n.then((function() {
                            e.currentTransitionPromise = null
                        })), this
                    }, t
                }(),
                rt = function(t, e, n, r) {
                    return new(n || (n = Promise))((function(o, i) {
                        function a(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function s(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new n((function(e) {
                                e(t.value)
                            })).then(a, s)
                        }
                        u((r = r.apply(t, e || [])).next())
                    }))
                },
                ot = function(t, e) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function s(i) {
                        return function(s) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
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
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1], o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    i = e.call(t, a)
                                } catch (t) {
                                    i = [6, t], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, s])
                        }
                    }
                },
                it = function() {
                    function t(t, e, n, r) {
                        this.getPanAngle = t, this.getPanDuration = e, this.rotate = n, this.stopRotating = r, this.type = g.c.Burns, this.toIndex = -1, this.currentTransitionPromise = null, this.onStopRequested = function() {
                            return Promise.resolve()
                        }
                    }
                    return Object.defineProperty(t.prototype, "active", {
                        get: function() {
                            return null !== this.currentTransitionPromise
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "promise", {
                        get: function() {
                            return this.currentTransitionPromise ? this.currentTransitionPromise : Promise.resolve()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.stop = function() {
                        return rt(this, void 0, Promise, (function() {
                            return ot(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.currentTransitionPromise ? [4, this.onStopRequested()] : [3, 3];
                                    case 1:
                                        return t.sent(), [4, this.promise];
                                    case 2:
                                        t.sent(), this.currentTransitionPromise = null, t.label = 3;
                                    case 3:
                                        return [2]
                                }
                            }))
                        }))
                    }, t.prototype.start = function(t) {
                        var e = this;
                        if (this.active) throw Error("Transition already active");
                        if (!t) throw Error("Tour pan requires two snapshots");
                        if (!t.snapshot || !t.nextSnapshot) return this.currentTransitionPromise = Promise.resolve(), this;
                        var n = this.build(t.snapshot, t.nextSnapshot, t.overrideDirection).deferred;
                        return this.currentTransitionPromise = n.then((function() {
                            e.currentTransitionPromise = null
                        })), this
                    }, t.prototype.build = function(t, e, n) {
                        var r = this,
                            o = -C.a.degToRad(this.getPanAngle()) / this.getPanDuration();
                        if (o *= .2, void 0 !== n) o *= n;
                        else if (t && t.metadata.camera_quaternion && e && e.metadata.camera_quaternion) {
                            var i = O.b.FORWARD.clone().applyQuaternion(t.metadata.camera_quaternion),
                                a = O.b.FORWARD.clone().applyQuaternion(e.metadata.camera_quaternion),
                                s = Math.sign(i.cross(a).y);
                            o = 0 !== s ? o * s : o
                        }
                        return this.onStopRequested = function() {
                            return rt(r, void 0, void 0, (function() {
                                return ot(this, (function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, this.stopRotating()];
                                        case 1:
                                            return t.sent(), [2]
                                    }
                                }))
                            }))
                        }, {
                            deferred: this.rotate(this.getPanDuration(), new k.a(o, 0))
                        }
                    }, t
                }(),
                at = function(t, e, n, r) {
                    return new(n || (n = Promise))((function(o, i) {
                        function a(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function s(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new n((function(e) {
                                e(t.value)
                            })).then(a, s)
                        }
                        u((r = r.apply(t, e || [])).next())
                    }))
                },
                st = function(t, e) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function s(i) {
                        return function(s) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
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
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1], o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    i = e.call(t, a)
                                } catch (t) {
                                    i = [6, t], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, s])
                        }
                    }
                },
                ut = function() {
                    function t(t, e, n, r, o, i) {
                        this.cameraPose = t, this.getPanAngle = e, this.getPanDuration = n, this.rotate = r, this.stopRotating = o, this.getCurve = i, this.type = g.c.Burns, this.toIndex = -1, this.currentTransitionPromise = null, this.onStopRequested = function() {
                            return Promise.resolve()
                        }
                    }
                    return Object.defineProperty(t.prototype, "active", {
                        get: function() {
                            return null !== this.currentTransitionPromise
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "promise", {
                        get: function() {
                            return this.currentTransitionPromise ? this.currentTransitionPromise : Promise.resolve()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.stop = function() {
                        return at(this, void 0, Promise, (function() {
                            return st(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.currentTransitionPromise ? [4, this.onStopRequested()] : [3, 3];
                                    case 1:
                                        return t.sent(), [4, this.promise];
                                    case 2:
                                        t.sent(), this.currentTransitionPromise = null, t.label = 3;
                                    case 3:
                                        return [2]
                                }
                            }))
                        }))
                    }, t.prototype.start = function(t) {
                        var e = this;
                        if (this.active) throw Error("Transition already active");
                        var n = this.build(t.path, t.snapshot, t.nextSnapshot, t.overrideDirection).deferred;
                        return this.currentTransitionPromise = n.then((function() {
                            e.currentTransitionPromise = null
                        })), this
                    }, t.prototype.build = function(t, e, n, r) {
                        var o = this;
                        this.onStopRequested = function() {
                            return at(o, void 0, void 0, (function() {
                                return st(this, (function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, this.stopRotating()];
                                        case 1:
                                            return t.sent(), [2]
                                    }
                                }))
                            }))
                        };
                        var i = C.a.degToRad(this.getPanAngle()) / this.getPanDuration();
                        if (void 0 !== r) i *= r;
                        else if (t) {
                            var a = this.cameraPose.position.clone().setY(0),
                                u = t.map((function(t) {
                                    return t.position
                                })),
                                c = this.getCurve(u).curve.getPointAt(.1).setY(0).clone().sub(a).normalize(),
                                l = O.b.FORWARD.clone().applyQuaternion(this.cameraPose.rotation);
                            i = 0 !== (h = Math.sign(l.cross(c).y)) ? i * h : i
                        } else if (n && e) {
                            if (e.metadata.camera_mode !== s.a.Panorama && (i = -i), e.metadata.scan_id === n.metadata.scan_id) {
                                var h;
                                l = O.b.FORWARD.clone().applyQuaternion(this.cameraPose.rotation), c = O.b.FORWARD.clone().applyQuaternion(n.metadata.camera_quaternion);
                                i = 0 !== (h = Math.sign(l.cross(c).y)) ? i * h : i
                            }
                        }
                        return {
                            deferred: this.rotate(this.getPanDuration(), new k.a(i, 0))
                        }
                    }, t
                }(),
                ct = n(651),
                lt = function(t, e, n, r) {
                    return new(n || (n = Promise))((function(o, i) {
                        function a(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function s(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new n((function(e) {
                                e(t.value)
                            })).then(a, s)
                        }
                        u((r = r.apply(t, e || [])).next())
                    }))
                },
                ht = function(t, e) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function s(i) {
                        return function(s) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
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
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1], o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    i = e.call(t, a)
                                } catch (t) {
                                    i = [6, t], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, s])
                        }
                    }
                },
                pt = function() {
                    function t(t, e, n, r, o) {
                        var u = this;
                        this.engine = t, this.tourData = e, this.cameraData = n, this.settingsData = r, this.viewmodeData = o, this.useLegacyPan = function() {
                            return !1
                        }, this.init = function() {
                            return lt(u, void 0, void 0, (function() {
                                var t, e, n, r, o, s, u, c = this;
                                return ht(this, (function(l) {
                                    switch (l.label) {
                                        case 0:
                                            return t = this, [4, this.engine.getModule(a.ub)];
                                        case 1:
                                            return t.sweepModule = l.sent(), e = this, [4, this.engine.market.waitForData(J.a)];
                                        case 2:
                                            return e.sweepData = l.sent(), n = this, [4, this.engine.getModule(a.c)];
                                        case 3:
                                            return n.cameraModule = l.sent(), r = this, [4, this.engine.waitForModule(a.zb)];
                                        case 4:
                                            return r.pathModule = l.sent(), o = this, [4, this.engine.market.waitForData(L.c)];
                                        case 5:
                                            return o.floorsViewData = l.sent(), s = this, [4, this.engine.getModule(a.f)];
                                        case 6:
                                            return s.commonControlsModule = l.sent(), u = this, [4, this.engine.getModule(a.Mb)];
                                        case 7:
                                            return u.viewmodeModule = l.sent(), this.smoothWalkingTransition = new Y(this.cameraData.pose, this.cameraData.transition, this.sweepData.transition, this.sweepModule, this.cameraModule, this.engine, this.pathModule.setRestrictedSweeps.bind(this.pathModule), this.pathModule.getCurveForPath.bind(this.pathModule), (function() {
                                                return c.settingsData.tryGetProperty(i.c, i.d)
                                            })), this.directWalkingTransition = new N(this.cameraData.pose, this.sweepModule.moveToSweep.bind(this.sweepModule), this.cameraModule.updateTransitionSpeed.bind(this.cameraModule), this.pathModule.setRestrictedSweeps.bind(this.pathModule), this.engine, (function() {
                                                return c.settingsData.tryGetProperty(i.c, i.d)
                                            })), this.panTransition = new R((function() {
                                                return i.g.snapshotPanAngle
                                            }), (function() {
                                                return i.g.snapshotPanDuration
                                            }), this.commonControlsModule.startRotateTransition.bind(this.commonControlsModule), this.commonControlsModule.stop.bind(this.commonControlsModule)), this.panLegacyTransition = new ut(this.cameraData.pose, (function() {
                                                return i.g.snapshotPanAngle
                                            }), (function() {
                                                return i.g.snapshotPanDuration
                                            }), this.commonControlsModule.startRotateTransition.bind(this.commonControlsModule), this.commonControlsModule.stop.bind(this.commonControlsModule), this.pathModule.getCurveForPath.bind(this.pathModule)), this.panDollhouseTransition = new it((function() {
                                                return i.g.snapshotPanAngle
                                            }), (function() {
                                                return i.g.snapshotPanDuration
                                            }), this.commonControlsModule.startRotateTransition.bind(this.commonControlsModule), this.commonControlsModule.stop.bind(this.commonControlsModule)), this.fadeTransition = new X(this.cameraData.pose, this.viewmodeData, this.cameraModule, this.sweepModule, this.viewmodeModule.switchToMode.bind(this.viewmodeModule), this.pathModule.setRestrictedSweeps.bind(this.pathModule), this.engine), this.zoomTransition = new M(this.commonControlsModule.startZoomTransition.bind(this.commonControlsModule), this.commonControlsModule.stop.bind(this.commonControlsModule)), this.floorChangeTransition = new nt(this.engine.commandBinder.issueCommand.bind(this.engine.commandBinder), (function() {
                                                return c.floorsViewData.currentFloor
                                            })), this.delayTransition = new D(i.g.snapshotPanDuration), this.useLegacyPan = function() {
                                                return c.settingsData.tryGetProperty(i.a, !1)
                                            }, this.nopTransition = {
                                                active: !1,
                                                type: g.c.Nop,
                                                promise: Promise.resolve(),
                                                stop: function() {
                                                    return Promise.resolve()
                                                },
                                                toIndex: -1
                                            }, this.pathOrientHelper = new ct.a, [2]
                                    }
                                }))
                            }))
                        }, this.getValidWalkingPath = function(t) {
                            var e = t.metadata.scan_id,
                                n = u.sweepData.currentSweep,
                                r = u.tourData.getTourCurrentSnapshotIndex(),
                                o = null;
                            if (r >= 0) {
                                var a = u.tourData.getTourSnapshotSid(r);
                                o = u.tourData.getSnapshot(a)
                            }
                            if (u.viewmodeData.currentMode !== s.a.Panorama || !n || !e || e === n || t.is360 || !o || o.is360) return null;
                            var c = u.pathModule.findShortestPath(n, e, i.g.walkingTourIncludeExtraPanosDistance, i.g.walkingStageMinimumDistance, i.g.maxWalkingSweepsBetweenSnapshots) || [];
                            return 0 === c.length ? null : c
                        }
                    }
                    return t.prototype.getFloorTransition = function(t) {
                        var e = this.tourData.getTourSnapshotSid(t),
                            n = this.tourData.getSnapshot(e);
                        return n ? this.floorChangeTransition.start({
                            targetSnapshot: n
                        }) : this.nopTransition
                    }, t.prototype.getMainTransition = function(t, e) {
                        var n = this.tourData.getTourSnapshotSid(t),
                            r = this.tourData.getSnapshot(n);
                        if (!r) return this.nopTransition;
                        var o = null;
                        if (e === l.a.Interpolate) {
                            var a = r.metadata.camera_quaternion,
                                s = this.getValidWalkingPath(r);
                            if (s) {
                                var u = s.map((function(t) {
                                        return t.position
                                    })),
                                    c = this.pathOrientHelper.getOrientationsForPath(u, Object(I.m)(a));
                                o = s.length > 2 && this.settingsData.tryGetProperty(i.b, !1) ? this.smoothWalkingTransition.start({
                                    path: s,
                                    orientations: c
                                }) : this.directWalkingTransition.start({
                                    path: s,
                                    orientations: c
                                })
                            }
                        }
                        if (!o) {
                            var h = this.sweepData.currentSweep;
                            o = this.fadeTransition.start({
                                snapshot: r,
                                currentSweep: h,
                                transitionType: e
                            })
                        }
                        return o
                    }, t.prototype.getBurnsTransition = function(t, e) {
                        var n, r = this.tourData.getTourSnapshotSid(t),
                            o = (t + 1) % this.tourData.getSnapshotCount(),
                            i = this.tourData.getTourSnapshotSid(o),
                            a = this.tourData.getHighlightDescription(r);
                        a.reelEntry && a.reelEntry.overrides && a.reelEntry.overrides.panDirection && (n = a.reelEntry.overrides.panDirection);
                        var s = this.tourData.getSnapshot(i),
                            u = this.nopTransition;
                        switch (e) {
                            case g.a.Pan:
                                if (this.useLegacyPan() && s) {
                                    var c = this.getValidWalkingPath(s);
                                    u = this.panLegacyTransition.start({
                                        path: c,
                                        snapshot: a.snapshot,
                                        nextSnapshot: s,
                                        overrideDirection: n
                                    })
                                }
                                u === this.nopTransition && (u = this.panTransition.start({
                                    snapshot: a.snapshot,
                                    nextSnapshot: s,
                                    overrideDirection: n
                                }));
                                break;
                            case g.a.PanDollhouse:
                                u = this.panDollhouseTransition.start({
                                    snapshot: a.snapshot,
                                    nextSnapshot: s,
                                    overrideDirection: n
                                });
                                break;
                            case g.a.Zoom:
                                u = this.zoomTransition.start();
                                break;
                            case g.a.Delay:
                                u = this.delayTransition.start();
                                break;
                            case g.a.None:
                                u = this.nopTransition;
                                break;
                            default:
                                throw Error("unhandled TourBurnsStyle")
                        }
                        return u
                    }, t
                }(),
                ft = n(605),
                dt = n(222),
                yt = (r = function(t, e) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                }, function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                vt = function(t, e, n, r) {
                    return new(n || (n = Promise))((function(o, i) {
                        function a(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function s(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new n((function(e) {
                                e(t.value)
                            })).then(a, s)
                        }
                        u((r = r.apply(t, e || [])).next())
                    }))
                },
                mt = function(t, e) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function s(i) {
                        return function(s) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
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
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1], o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    i = e.call(t, a)
                                } catch (t) {
                                    i = [6, t], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, s])
                        }
                    }
                },
                wt = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.name = "tours-controls", e.panAtSnapshot = i.g.panAtSnapshot, e.getBurnsStyleForSnapshot = function(t, n) {
                            var r = t.getTourSnapshotSid(n),
                                o = t.getHighlightDescription(r),
                                i = t.getSnapshotCount();
                            if (!o || !o.snapshot) return g.a.None;
                            var a = o.snapshot.metadata.camera_mode,
                                u = n === i - 1,
                                c = o.reelEntry && o.reelEntry.overrides && o.reelEntry.overrides.panDirection,
                                l = a === s.a.Dollhouse ? g.a.PanDollhouse : a === s.a.Floorplan ? g.a.Zoom : g.a.Pan;
                            return e.panAtSnapshot ? u && void 0 !== c ? l : u ? g.a.None : l : g.a.Delay
                        }, e.canChangeTourLocation = function() {
                            var t = e.data.getTourState(),
                                n = e.data.isTourTransitionActive(),
                                r = e.cameraData.canTransition();
                            return t === u.c.Inactive && !n && !(e.viewmodeData.transition && e.viewmodeData.transition.active) && r
                        }, e
                    }
                    return yt(e, t), e.prototype.init = function(t, e) {
                        return vt(this, void 0, void 0, (function() {
                            var t, n, r, o, i = this;
                            return mt(this, (function(s) {
                                switch (s.label) {
                                    case 0:
                                        return this.engine = e, t = this, [4, e.market.waitForData(w.a)];
                                    case 1:
                                        return t.cameraData = s.sent(), n = this, [4, e.market.waitForData(c.a)];
                                    case 2:
                                        return n.viewmodeData = s.sent(), r = this, [4, e.market.waitForData(m.a)];
                                    case 3:
                                        return r.settings = s.sent(), o = this, [4, e.market.waitForData(u.b)];
                                    case 4:
                                        return o.data = s.sent(), e.getModule(a.x).then((function(t) {
                                            t.registerHandler(p.m, (function() {
                                                i.handleTourInputInterrupt()
                                            })), t.registerHandler(p.q, (function() {
                                                i.handleTourInputInterrupt()
                                            })), t.registerHandler(f.a, (function(t) {
                                                t.state === d.a.DOWN && i.handleTourInputInterrupt()
                                            }))
                                        })), this.transitionFactory = new pt(e, this.data, this.cameraData, this.settings, this.viewmodeData), [4, this.transitionFactory.init()];
                                    case 5:
                                        return s.sent(), this.setupAutoPlay(e), this.bindings.push(e.subscribe(h.d, (function() {
                                            i.data.setTourTransitionToIndex(-1)
                                        })), e.subscribe(h.f, (function() {
                                            i.data.setTourTransitionToIndex(-1)
                                        }))), [2]
                                }
                            }))
                        }))
                    }, e.prototype.handleTourInputInterrupt = function() {
                        this.data.getTourState() !== u.c.Inactive && this.stopTour()
                    }, e.prototype.startTour = function(t) {
                        var e = this.data.getTourState(),
                            n = this.data.getSnapshotCount();
                        if (!(e !== u.c.Inactive || t && (t < -1 || t >= n - 1))) {
                            var r, i = this.data.getTourCurrentSnapshotIndex();
                            r = t ? t - 1 : i >= n - 1 ? -1 : i;
                            var a = this.settings.tryGetProperty(dt.a, null);
                            this.settings.setProperty(dt.a, null);
                            var s = this;
                            this.tourGenerator = function() {
                                var t, e;
                                return mt(this, (function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return r < n - 1 ? (t = r + 1, e = s.composeTourTransition(t), [4, new o.c(e)]) : [3, 2];
                                        case 1:
                                            return i.sent(), (r = t) === n - 1 && s.data.isLooping() && (r = -1), [3, 0];
                                        case 2:
                                            return s.stopTour(), s.settings.setProperty(dt.a, a), [2]
                                    }
                                }))
                            }, this.engine.startGenerator(this.tourGenerator), this.data.setTourState(u.c.Active), this.data.tourEnded = !1, this.data.tourPlaying = !0, this.engine.broadcast(new h.c)
                        }
                    }, e.prototype.composeTourTransition = function(t, e, n) {
                        return vt(this, void 0, void 0, (function() {
                            var r, o, i, a, c, p, f, d, y, v, m, w, g;
                            return mt(this, (function(b) {
                                switch (b.label) {
                                    case 0:
                                        if (r = this.data.getTourSnapshotSid(t), !(o = this.data.getHighlightDescription(r)).snapshot) throw Error("Highlight not found for reel index " + t);
                                        return i = e || this.getBurnsStyleForSnapshot(this.data, t), a = this.settings.tryGetProperty(ft.a, l.a.Interpolate), c = o.snapshot.metadata.camera_mode, p = c === s.a.Dollhouse || c === s.a.Floorplan, f = !this.viewmodeData.isPano() && c === s.a.Panorama, d = this.viewmodeData.isPano() && p, y = !this.viewmodeData.isPano() && p, v = this.viewmodeData.isPano() && c === s.a.Panorama, (f || d || y) && (a = l.a.Interpolate), v && 0 === t && (a = l.a.FadeToBlack), o.reelEntry && o.reelEntry.overrides && void 0 !== o.reelEntry.overrides.transitionType && (a = o.reelEntry.overrides.transitionType), void 0 !== n && (a = n), this.data.setTourTransitionToIndex(t), this.engine.broadcast(new h.b), m = this.transitionFactory.getFloorTransition(t), this.data.useTransition(m), [4, m.promise];
                                    case 1:
                                        return b.sent(), this.data.getTourState() === u.c.StopScheduled ? [2] : (w = this.transitionFactory.getMainTransition(t, a), this.data.useTransition(w), [4, w.promise]);
                                    case 2:
                                        return b.sent(), this.data.setTourCurrentSnapshotByIndex(t), this.engine.broadcast(new h.d(t)), this.data.getTourState() === u.c.StopScheduled ? [2] : (g = this.transitionFactory.getBurnsTransition(t, i), this.data.useTransition(g), [4, g.promise]);
                                    case 3:
                                        return b.sent(), [2]
                                }
                            }))
                        }))
                    }, e.prototype.stopTour = function() {
                        return vt(this, void 0, Promise, (function() {
                            return mt(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.data.getTourState() !== u.c.Active ? [3, 2] : (this.data.setTourState(u.c.StopScheduled), this.data.tourPlaying = !1, [4, this.data.stopTourTransition()]);
                                    case 1:
                                        t.sent(), this.tourGenerator && this.engine.stopGenerator(this.tourGenerator), this.engine.broadcast(new h.f), this.data.getTourCurrentSnapshotIndex() !== this.data.getSnapshotCount() - 1 || this.data.isLooping() || (this.data.tourEnded = !0, this.engine.broadcast(new h.a)), this.data.setTourState(u.c.Inactive), t.label = 2;
                                    case 2:
                                        return [2]
                                }
                            }))
                        }))
                    }, e.prototype.tourGoNext = function() {
                        return vt(this, void 0, Promise, (function() {
                            var t;
                            return mt(this, (function(e) {
                                return (t = this.data.getTourCurrentSnapshotIndex() + 1) >= this.data.getSnapshotCount() && (t = 0), [2, this.tourGoTo(t)]
                            }))
                        }))
                    }, e.prototype.tourGoPrevious = function() {
                        return vt(this, void 0, Promise, (function() {
                            var t, e;
                            return mt(this, (function(n) {
                                return (t = this.data.getTourCurrentSnapshotIndex()) < 0 && (t = 0), (e = t - 1) < 0 && (e = this.data.getSnapshotCount() - 1), [2, this.tourGoTo(e)]
                            }))
                        }))
                    }, e.prototype.tourGoTo = function(t, e) {
                        return void 0 === e && (e = l.a.FadeToBlack), vt(this, void 0, Promise, (function() {
                            var n;
                            return mt(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (this.viewmodeData.transition && this.viewmodeData.transition.active) return [2, Promise.reject("Cannot go to tour location during viewmode transition")];
                                        if (this.data.getTourState() !== u.c.Inactive) return [2, Promise.reject("tourGoTo() -> Cannot jump to tour location while tour is active.")];
                                        r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, 4, 5]), this.data.setTourState(u.c.Active), [4, this.composeTourTransition(t, g.a.None, e)];
                                    case 2:
                                        return r.sent(), [3, 5];
                                    case 3:
                                        return n = r.sent(), this.log.error(n), [3, 5];
                                    case 4:
                                        return this.data.setTourState(u.c.Inactive), [7];
                                    case 5:
                                        return [2]
                                }
                            }))
                        }))
                    }, e.prototype.setupAutoPlay = function(t) {
                        var e = this,
                            n = 1e3 * i.g.autoStartDelay,
                            r = function() {
                                var t = !0,
                                    r = e.cameraData.pose.onChanged((function() {
                                        t = !1, r.cancel()
                                    }));
                                setTimeout((function() {
                                    t && e.startTour(), r.cancel()
                                }), n)
                            };
                        if (n >= 0) {
                            var o = t.market.tryGetData(y.c);
                            if (o && o.phase === y.a.PLAYING) r();
                            else {
                                var a = function(e) {
                                    e.phase === y.a.PLAYING && (r(), t.unsubscribe(v.a, a))
                                };
                                t.subscribe(v.a, a)
                            }
                        }
                    }, e
                }(a.Ib);
            e.default = wt
        },
        1011: function(t, e, n) {
            "use strict";
            n.r(e);
            var r, o = n(221),
                i = n(257),
                a = n(31),
                s = n(563),
                u = n(30),
                c = n(114),
                l = n(18),
                h = n(133),
                p = n(134),
                f = {
                    tags: {
                        uniforms: {
                            opacity: {
                                type: "f",
                                value: 1
                            },
                            color: {
                                type: "c",
                                value: new l.a
                            },
                            bg: {
                                type: "t",
                                value: null
                            },
                            mask: {
                                type: "t",
                                value: null
                            }
                        },
                        vertexShader: p + n(268),
                        fragmentShader: h + n(801)
                    }
                },
                d = (r = function(t, e) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                }, function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                y = function(t) {
                    function e(e, n, r, o) {
                        var i = u.a.clone(f.tags.uniforms);
                        return i.bg.value = n, i.mask.value = r, i.color.value.copy(e), i.opacity.value = o, t.call(this, {
                            fragmentShader: f.tags.fragmentShader,
                            vertexShader: f.tags.vertexShader,
                            uniforms: i,
                            name: "DiscMaterial",
                            transparent: !0,
                            depthWrite: !1
                        }) || this
                    }
                    return d(e, t), e
                }(c.a),
                v = n(24),
                m = n(12),
                w = n(107),
                g = n(137),
                b = function() {
                    var t = function(e, n) {
                        return (t = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(t, e) {
                                t.__proto__ = e
                            } || function(t, e) {
                                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                            })(e, n)
                    };
                    return function(e, n) {
                        function r() {
                            this.constructor = e
                        }
                        t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                    }
                }(),
                T = new w.a({
                    linewidth: i.b.mattertags.pole.width,
                    color: i.b.mattertags.pole.color,
                    opacity: i.b.mattertags.pole.opacity,
                    transparent: !0,
                    alphaTest: i.b.mattertags.pole.opacity * i.b.mattertags.visibility.alphaTestLevel
                }),
                P = function(t) {
                    function e(e, n) {
                        var r = this,
                            o = new v.a,
                            i = new Float32Array(6);
                        return i[0] = i[1] = i[2] = 0, i[3] = e.x, i[4] = e.y, i[5] = e.z, o.setAttribute("position", new m.a(i, 3)), (r = t.call(this, o, T) || this).geometry = o, r.layers.mask = n.mask, r
                    }
                    return b(e, t), e.prototype.dispose = function() {
                        this.geometry.dispose()
                    }, e
                }(g.a),
                D = n(17),
                S = function() {
                    var t = function(e, n) {
                        return (t = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(t, e) {
                                t.__proto__ = e
                            } || function(t, e) {
                                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                            })(e, n)
                    };
                    return function(e, n) {
                        function r() {
                            this.constructor = e
                        }
                        t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                    }
                }(),
                x = function(t) {
                    function e(e, n, r, o, i) {
                        var a = t.call(this) || this;
                        a.position.copy(e.anchorPosition);
                        var u = new y(e.color, n, r, 1);
                        return a.disc = new s.a(e.sid, o, u, i), a.disc.position.copy(e.stemVector), a.pole = new P(e.stemVector, i), a.add(a.disc), a.add(a.pole), a
                    }
                    return S(e, t), e.prototype.dispose = function() {
                        this.remove(this.disc), this.remove(this.pole), this.disc.material.dispose(), this.disc.dispose(), this.pole.dispose()
                    }, e.prototype.changeDiscPosition = function(t) {
                        var e = this.pole.geometry.getAttribute("position");
                        e.setXYZ(1, t.x, t.y, t.z), e.needsUpdate = !0, this.disc.position.copy(t)
                    }, e.prototype.changeColor = function(t) {
                        this.disc.changeColor(t)
                    }, e.prototype.setDimmed = function(t) {
                        this.disc.material.uniforms.opacity.value = t ? .5 : 1
                    }, e.prototype.setVisibility = function(t) {
                        this.visible = t, this.disc.visible = t
                    }, e.prototype.changePosition = function(t) {
                        this.position.copy(t)
                    }, e.prototype.setStemVisibility = function(t) {
                        this.pole.visible = t
                    }, e.prototype.update = function(t, e, n, r) {
                        this.disc.update(t, e, n, r)
                    }, e
                }(D.a),
                M = n(77),
                _ = n(83),
                O = n(65),
                k = n(106),
                C = n(68),
                A = n(802),
                E = n.n(A),
                R = n(803),
                I = n.n(R),
                F = function(t) {
                    var e = "function" == typeof Symbol && t[Symbol.iterator],
                        n = 0;
                    return e ? e.call(t) : {
                        next: function() {
                            return t && n >= t.length && (t = void 0), {
                                value: t && t[n++],
                                done: !t
                            }
                        }
                    }
                },
                j = function() {
                    function t(t, e, n, r, o, a, s) {
                        void 0 === r && (r = k.a.ALL);
                        var u = this;
                        this.scene = t, this.input = e, this.camera = n, this.layer = r, this.raycasterGroup = o, this.mattertagData = a, this.canvas = s, this.tagToMesh = {}, this.meshToTag = {}, this.tagSettingEnabled = !1, this.textures = {
                            mask: Object(_.a)(E.a),
                            background: Object(_.a)(I.a)
                        }, this.geometry = new O.a(1, 1), this.bindings = [], this.disposeTag = function(t) {
                            var e = u.tagToMesh[t];
                            e && (u.input.unregisterMesh(e.disc), delete u.tagToMesh[t], delete u.meshToTag[e.id], e.dispose())
                        }, this.createTagMesh = function(t) {
                            var e = new x(t, u.textures.background, u.textures.mask, u.geometry, u.layer);
                            return u.tagToMesh[t.sid] = e, u.meshToTag[e.id] = t.sid, e
                        }, this.addNewTagMesh = function(t, e) {
                            var n = u.createTagMesh(t);
                            n.visible = !0, u.addTagToScene(n)
                        }, this.removeTagMesh = function(t, e) {
                            u.disposeTag(e)
                        }, this.updateTagMesh = function(t, e) {
                            var n = u.mattertagData.getTag(e);
                            if (n) {
                                var r = u.tagToMesh[e];
                                r && (r.changePosition(n.anchorPosition), r.changeColor(n.color), r.setVisibility(n.enabled), r.changeDiscPosition(n.stemVector), r.setStemVisibility(n.stemVisible), u.changeTagVisibility(e, u.tagSettingEnabled))
                            }
                        }, this.updateTagEnabledSetting = function(t) {
                            u.tagSettingEnabled = t.tryGetProperty(i.a, !0)
                        }
                    }
                    return t.prototype.init = function() {
                        var t = this;
                        this.mattertagData.iterate((function(e) {
                            var n = t.createTagMesh(e);
                            e.enabled || n.setVisibility(!1), n.setStemVisibility(e.stemVisible)
                        })), this.bindings.push(this.mattertagData.collection.onElementChanged({
                            onAdded: this.addNewTagMesh,
                            onRemoved: this.removeTagMesh,
                            onUpdated: this.updateTagMesh
                        }))
                    }, t.prototype.dispose = function() {
                        var t, e;
                        for (var n in this.tagToMesh) this.disposeTag(n);
                        try {
                            for (var r = F(this.bindings), o = r.next(); !o.done; o = r.next()) {
                                o.value.cancel()
                            }
                        } catch (e) {
                            t = {
                                error: e
                            }
                        } finally {
                            try {
                                o && !o.done && (e = r.return) && e.call(r)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                        this.bindings.length = 0, this.textures.background.dispose(), this.textures.mask.dispose(), this.geometry.dispose()
                    }, t.prototype.activate = function(t) {
                        var e = this;
                        for (var n in this.bindings.push(this.input.registerMeshHandler(a.e, C.a.isType(s.a), (function(e, n) {
                                return t.broadcast(new o.b(n.userData.sid, !0))
                            }))), this.bindings.push(this.input.registerMeshHandler(a.r, C.a.isType(s.a), (function(e, n) {
                                return t.broadcast(new o.b(n.userData.sid, !1))
                            }))), this.bindings.push(this.input.registerMeshHandler(a.a, C.a.isType(s.a), (function(e, n) {
                                return t.broadcast(new o.a(n.userData.sid))
                            }))), t.market.waitForData(M.a).then((function(t) {
                                t.onPropertyChanged(i.a, (function() {
                                    e.updateTagEnabledSetting(t)
                                })), e.updateTagEnabledSetting(t)
                            })), this.tagToMesh) {
                            var r = this.tagToMesh[n];
                            r.visible = !0, this.addTagToScene(r)
                        }
                    }, t.prototype.addTagToScene = function(t) {
                        this.scene.add(t), this.input.registerMesh(t.disc, !1, this.raycasterGroup)
                    }, t.prototype.deactivate = function(t) {
                        var e, n;
                        try {
                            for (var r = F(this.bindings), o = r.next(); !o.done; o = r.next()) {
                                o.value.cancel()
                            }
                        } catch (t) {
                            e = {
                                error: t
                            }
                        } finally {
                            try {
                                o && !o.done && (n = r.return) && n.call(r)
                            } finally {
                                if (e) throw e.error
                            }
                        }
                        for (var i in this.bindings.length = 0, this.tagToMesh) {
                            var a = this.tagToMesh[i];
                            this.scene.remove(a), this.input.unregisterMesh(a.disc), a.visible = !1
                        }
                    }, t.prototype.changeVisibility = function(t) {
                        var e, n;
                        try {
                            for (var r = F(Object.keys(this.tagToMesh)), o = r.next(); !o.done; o = r.next()) {
                                var i = o.value;
                                this.changeTagVisibility(i, t(i, this.tagToMesh[i].visible))
                            }
                        } catch (t) {
                            e = {
                                error: t
                            }
                        } finally {
                            try {
                                o && !o.done && (n = r.return) && n.call(r)
                            } finally {
                                if (e) throw e.error
                            }
                        }
                    }, t.prototype.changeTagVisibility = function(t, e) {
                        this.tagToMesh[t].setVisibility(this.mattertagData.getTag(t).enabled && e && this.tagSettingEnabled)
                    }, t.prototype.changeOpacityOfDiscs = function(t, e) {
                        for (var n in this.tagToMesh) void 0 !== e && n === e || this.changeDiscOpacity(n, t)
                    }, t.prototype.changeDiscOpacity = function(t, e) {
                        this.tagToMesh[t].setDimmed(e)
                    }, t.prototype.getMeshByTagId = function(t) {
                        return this.tagToMesh[t] || null
                    }, t.prototype.getTagIdByMesh = function(t) {
                        return this.meshToTag[t.id] || null
                    }, t.prototype.render = function() {
                        var t = this.getViewportScale(this.canvas);
                        for (var e in this.tagToMesh) this.tagToMesh[e].update(this.mattertagData.getTag(e), this.camera, t, this.canvas)
                    }, t.prototype.getViewportScale = function(t) {
                        return Math.sqrt(Math.min(t.width, t.height) / i.b.mattertags.disc.scale.baseViewportSize)
                    }, t
                }(),
                U = n(2),
                B = n(216),
                G = n(118),
                N = function() {
                    var t = function(e, n) {
                        return (t = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(t, e) {
                                t.__proto__ = e
                            } || function(t, e) {
                                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                            })(e, n)
                    };
                    return function(e, n) {
                        function r() {
                            this.constructor = e
                        }
                        t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                    }
                }(),
                L = function(t, e, n, r) {
                    return new(n || (n = Promise))((function(o, i) {
                        function a(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function s(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new n((function(e) {
                                e(t.value)
                            })).then(a, s)
                        }
                        u((r = r.apply(t, e || [])).next())
                    }))
                },
                V = function(t, e) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function s(i) {
                        return function(s) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
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
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1], o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    i = e.call(t, a)
                                } catch (t) {
                                    i = [6, t], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, s])
                        }
                    }
                },
                z = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.name = "mattertag-mesh", e
                    }
                    return N(e, t), e.prototype.init = function(t, n) {
                        return L(this, void 0, void 0, (function() {
                            var t, r, o, i, a;
                            return V(this, (function(s) {
                                switch (s.label) {
                                    case 0:
                                        return [4, n.getModule(U.Nb)];
                                    case 1:
                                        return t = s.sent().getScene(), [4, n.getModule(U.x)];
                                    case 2:
                                        return r = s.sent(), [4, n.market.waitForData(B.a)];
                                    case 3:
                                        return o = s.sent(), [4, n.market.waitForData(G.a)];
                                    case 4:
                                        return i = s.sent(), a = n.claimRenderLayer(this.name), this.renderer = new j(t.scene, r, t.camera, a, e._raycastGroup, o, i), n.addComponent(this, this.renderer), [2]
                                }
                            }))
                        }))
                    }, e.prototype.getTagIdByMesh = function(t) {
                        return this.renderer ? this.renderer.getTagIdByMesh(t) : null
                    }, e.prototype.getMeshByTagId = function(t) {
                        return this.renderer ? this.renderer.getMeshByTagId(t) : null
                    }, e.prototype.changeVisibility = function(t) {
                        this.renderer && this.renderer.changeVisibility(t)
                    }, e.prototype.changeOpacityOfDiscs = function(t, e) {
                        this.renderer && this.renderer.changeOpacityOfDiscs(t, e)
                    }, e.prototype.changeDiscOpacity = function(t, e) {
                        this.renderer && this.renderer.changeDiscOpacity(t, e)
                    }, e.prototype.showAll = function() {
                        this.renderer && this.renderer.changeVisibility((function() {
                            return !0
                        }))
                    }, e.prototype.hideAll = function() {
                        this.renderer && this.renderer.changeVisibility((function() {
                            return !1
                        }))
                    }, Object.defineProperty(e.prototype, "raycastGroup", {
                        get: function() {
                            return e._raycastGroup
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e._raycastGroup = "mattertag-mesh", e
                }(U.K);
            e.default = z
        },
        1012: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(1),
                o = n(13),
                i = n(7);

            function a() {
                this.type = "Curve", this.arcLengthDivisions = 200
            }

            function s() {
                var t = 0,
                    e = 0,
                    n = 0,
                    r = 0;

                function o(o, i, a, s) {
                    t = o, e = a, n = -3 * o + 3 * i - 2 * a - s, r = 2 * o - 2 * i + a + s
                }
                return {
                    initCatmullRom: function(t, e, n, r, i) {
                        o(e, n, i * (n - t), i * (r - e))
                    },
                    initNonuniformCatmullRom: function(t, e, n, r, i, a, s) {
                        var u = (e - t) / i - (n - t) / (i + a) + (n - e) / a,
                            c = (n - e) / a - (r - e) / (a + s) + (r - n) / s;
                        o(e, n, u *= a, c *= a)
                    },
                    calc: function(o) {
                        var i = o * o;
                        return t + e * o + n * i + r * (i * o)
                    }
                }
            }
            Object.assign(a.prototype, {
                getPoint: function() {
                    return console.warn("THREE.Curve: .getPoint() not implemented."), null
                },
                getPointAt: function(t, e) {
                    var n = this.getUtoTmapping(t);
                    return this.getPoint(n, e)
                },
                getPoints: function(t) {
                    void 0 === t && (t = 5);
                    for (var e = [], n = 0; n <= t; n++) e.push(this.getPoint(n / t));
                    return e
                },
                getSpacedPoints: function(t) {
                    void 0 === t && (t = 5);
                    for (var e = [], n = 0; n <= t; n++) e.push(this.getPointAt(n / t));
                    return e
                },
                getLength: function() {
                    var t = this.getLengths();
                    return t[t.length - 1]
                },
                getLengths: function(t) {
                    if (void 0 === t && (t = this.arcLengthDivisions), this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate) return this.cacheArcLengths;
                    this.needsUpdate = !1;
                    var e, n, r = [],
                        o = this.getPoint(0),
                        i = 0;
                    for (r.push(0), n = 1; n <= t; n++) i += (e = this.getPoint(n / t)).distanceTo(o), r.push(i), o = e;
                    return this.cacheArcLengths = r, r
                },
                updateArcLengths: function() {
                    this.needsUpdate = !0, this.getLengths()
                },
                getUtoTmapping: function(t, e) {
                    var n, r = this.getLengths(),
                        o = 0,
                        i = r.length;
                    n = e || t * r[i - 1];
                    for (var a, s = 0, u = i - 1; s <= u;)
                        if ((a = r[o = Math.floor(s + (u - s) / 2)] - n) < 0) s = o + 1;
                        else {
                            if (!(a > 0)) {
                                u = o;
                                break
                            }
                            u = o - 1
                        }
                    if (r[o = u] === n) return o / (i - 1);
                    var c = r[o];
                    return (o + (n - c) / (r[o + 1] - c)) / (i - 1)
                },
                getTangent: function(t) {
                    var e = t - 1e-4,
                        n = t + 1e-4;
                    e < 0 && (e = 0), n > 1 && (n = 1);
                    var r = this.getPoint(e);
                    return this.getPoint(n).clone().sub(r).normalize()
                },
                getTangentAt: function(t) {
                    var e = this.getUtoTmapping(t);
                    return this.getTangent(e)
                },
                computeFrenetFrames: function(t, e) {
                    var n, a, s, u = new r.a,
                        c = [],
                        l = [],
                        h = [],
                        p = new r.a,
                        f = new i.a;
                    for (n = 0; n <= t; n++) a = n / t, c[n] = this.getTangentAt(a), c[n].normalize();
                    l[0] = new r.a, h[0] = new r.a;
                    var d = Number.MAX_VALUE,
                        y = Math.abs(c[0].x),
                        v = Math.abs(c[0].y),
                        m = Math.abs(c[0].z);
                    for (y <= d && (d = y, u.set(1, 0, 0)), v <= d && (d = v, u.set(0, 1, 0)), m <= d && u.set(0, 0, 1), p.crossVectors(c[0], u).normalize(), l[0].crossVectors(c[0], p), h[0].crossVectors(c[0], l[0]), n = 1; n <= t; n++) l[n] = l[n - 1].clone(), h[n] = h[n - 1].clone(), p.crossVectors(c[n - 1], c[n]), p.length() > Number.EPSILON && (p.normalize(), s = Math.acos(o.a.clamp(c[n - 1].dot(c[n]), -1, 1)), l[n].applyMatrix4(f.makeRotationAxis(p, s))), h[n].crossVectors(c[n], l[n]);
                    if (!0 === e)
                        for (s = Math.acos(o.a.clamp(l[0].dot(l[t]), -1, 1)), s /= t, c[0].dot(p.crossVectors(l[0], l[t])) > 0 && (s = -s), n = 1; n <= t; n++) l[n].applyMatrix4(f.makeRotationAxis(c[n], s * n)), h[n].crossVectors(c[n], l[n]);
                    return {
                        tangents: c,
                        normals: l,
                        binormals: h
                    }
                },
                clone: function() {
                    return (new this.constructor).copy(this)
                },
                copy: function(t) {
                    return this.arcLengthDivisions = t.arcLengthDivisions, this
                },
                toJSON: function() {
                    var t = {
                        metadata: {
                            version: 4.5,
                            type: "Curve",
                            generator: "Curve.toJSON"
                        }
                    };
                    return t.arcLengthDivisions = this.arcLengthDivisions, t.type = this.type, t
                },
                fromJSON: function(t) {
                    return this.arcLengthDivisions = t.arcLengthDivisions, this
                }
            });
            var u = new r.a,
                c = new s,
                l = new s,
                h = new s;

            function p(t, e, n, r) {
                a.call(this), this.type = "CatmullRomCurve3", this.points = t || [], this.closed = e || !1, this.curveType = n || "centripetal", this.tension = r || .5
            }
            p.prototype = Object.create(a.prototype), p.prototype.constructor = p, p.prototype.isCatmullRomCurve3 = !0, p.prototype.getPoint = function(t, e) {
                var n, o, i, a, s = e || new r.a,
                    p = this.points,
                    f = p.length,
                    d = (f - (this.closed ? 0 : 1)) * t,
                    y = Math.floor(d),
                    v = d - y;
                if (this.closed ? y += y > 0 ? 0 : (Math.floor(Math.abs(y) / f) + 1) * f : 0 === v && y === f - 1 && (y = f - 2, v = 1), this.closed || y > 0 ? n = p[(y - 1) % f] : (u.subVectors(p[0], p[1]).add(p[0]), n = u), o = p[y % f], i = p[(y + 1) % f], this.closed || y + 2 < f ? a = p[(y + 2) % f] : (u.subVectors(p[f - 1], p[f - 2]).add(p[f - 1]), a = u), "centripetal" === this.curveType || "chordal" === this.curveType) {
                    var m = "chordal" === this.curveType ? .5 : .25,
                        w = Math.pow(n.distanceToSquared(o), m),
                        g = Math.pow(o.distanceToSquared(i), m),
                        b = Math.pow(i.distanceToSquared(a), m);
                    g < 1e-4 && (g = 1), w < 1e-4 && (w = g), b < 1e-4 && (b = g), c.initNonuniformCatmullRom(n.x, o.x, i.x, a.x, w, g, b), l.initNonuniformCatmullRom(n.y, o.y, i.y, a.y, w, g, b), h.initNonuniformCatmullRom(n.z, o.z, i.z, a.z, w, g, b)
                } else "catmullrom" === this.curveType && (c.initCatmullRom(n.x, o.x, i.x, a.x, this.tension), l.initCatmullRom(n.y, o.y, i.y, a.y, this.tension), h.initCatmullRom(n.z, o.z, i.z, a.z, this.tension));
                return s.set(c.calc(v), l.calc(v), h.calc(v)), s
            }, p.prototype.copy = function(t) {
                a.prototype.copy.call(this, t), this.points = [];
                for (var e = 0, n = t.points.length; e < n; e++) {
                    var r = t.points[e];
                    this.points.push(r.clone())
                }
                return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this
            }, p.prototype.toJSON = function() {
                var t = a.prototype.toJSON.call(this);
                t.points = [];
                for (var e = 0, n = this.points.length; e < n; e++) {
                    var r = this.points[e];
                    t.points.push(r.toArray())
                }
                return t.closed = this.closed, t.curveType = this.curveType, t.tension = this.tension, t
            }, p.prototype.fromJSON = function(t) {
                a.prototype.fromJSON.call(this, t), this.points = [];
                for (var e = 0, n = t.points.length; e < n; e++) {
                    var o = t.points[e];
                    this.points.push((new r.a).fromArray(o))
                }
                return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this
            };
            var f, d = n(2),
                y = n(60),
                v = function() {
                    function t(t) {
                        this.comparator = t, this.nodes = []
                    }
                    return t.prototype.push = function(t) {
                        return this.nodes.push(t), this.siftdown(0, this.nodes.length - 1)
                    }, t.prototype.pop = function() {
                        var t, e;
                        return this.nodes.length && (t = this.nodes.pop()) ? (this.nodes.length ? (e = this.nodes[0], this.nodes[0] = t, this.siftup(0)) : e = t, e) : null
                    }, t.prototype.peek = function() {
                        return this.nodes[0]
                    }, t.prototype.contains = function(t) {
                        return -1 !== this.nodes.indexOf(t)
                    }, t.prototype.replace = function(t) {
                        if (this.nodes.length) {
                            var e = this.nodes[0];
                            return this.nodes[0] = t, this.siftup(0), e
                        }
                        return null
                    }, t.prototype._pushpop = function(t, e, n) {
                        var r, o = n || this.defaultCompare;
                        return t.length && o(t[0], e) < 0 && (e = (r = [t[0], e])[0], t[0] = r[1], this._siftup(t, 0, o)), e
                    }, t.prototype.pushpop = function(t) {
                        return this._pushpop(this.nodes, t, this.comparator)
                    }, t.prototype._heapify = function(t, e) {
                        var n, r, o, i, a, s, u = Math.floor(t.length / 2),
                            c = function() {
                                for (s = [], o = 0, a = u; 0 <= a ? o < a : o > a; 0 <= a ? o++ : o--) s.push(o);
                                return s
                            }.apply(this).reverse(),
                            l = [];
                        for (r = 0, i = c.length; r < i; r++) n = c[r], l.push(this._siftup(t, n, e));
                        return l
                    }, t.prototype.heapify = function() {
                        var t, e, n, r, o, i, a = Math.floor(this.nodes.length / 2),
                            s = function() {
                                for (i = [], n = 0, o = a; 0 <= o ? n < o : n > o; 0 <= o ? n++ : n--) i.push(n);
                                return i
                            }.apply(this).reverse(),
                            u = [];
                        for (e = 0, r = s.length; e < r; e++) t = s[e], u.push(this.siftup(t));
                        return u
                    }, t.prototype.updateItem = function(t) {
                        var e = this.nodes.indexOf(t);
                        return -1 === e ? null : (this.siftdown(0, e), this.siftup(e))
                    }, t.prototype.clear = function() {
                        return this.nodes = []
                    }, t.prototype.empty = function() {
                        return 0 === this.nodes.length
                    }, t.prototype.size = function() {
                        return this.nodes.length
                    }, t.prototype.clone = function() {
                        var e = new t(this.comparator);
                        return e.nodes = this.nodes.slice(0), e
                    }, t.prototype.toArray = function() {
                        return this.nodes.slice(0)
                    }, t.prototype.insert = function(t) {
                        return this.push(t)
                    }, t.prototype.top = function() {
                        return this.peek()
                    }, t.prototype.front = function() {
                        return this.peek()
                    }, t.prototype.has = function(t) {
                        return this.contains(t)
                    }, t.prototype.copy = function() {
                        return this.clone()
                    }, t.prototype.nlargest = function(t) {
                        var e, n, r, o = this.nodes.slice(0, t);
                        if (!o.length) return o;
                        this._heapify(o, this.comparator);
                        var i = this.nodes.slice(t);
                        for (n = 0, r = i.length; n < r; n++) e = i[n], this._pushpop(o, e, this.comparator);
                        return o.sort(this.comparator).reverse()
                    }, t.prototype.defaultCompare = function(t, e) {
                        return t < e ? -1 : t > e ? 1 : 0
                    }, t.prototype._siftdown = function(t, e, n, r) {
                        for (var o, i, a = r || this.defaultCompare, s = t[n]; n > e && a(s, o = t[i = n - 1 >> 1]) < 0;) t[n] = o, n = i;
                        return t[n] = s
                    }, t.prototype.siftdown = function(t, e) {
                        return this._siftdown(this.nodes, t, e, this.comparator)
                    }, t.prototype._siftup = function(t, e, n) {
                        var r, o, i = n || this.defaultCompare,
                            a = t.length,
                            s = e,
                            u = t[e];
                        for (r = 2 * e + 1; r < a;)(o = r + 1) < a && !(i(t[r], t[o]) < 0) && (r = o), t[e] = t[r], r = 2 * (e = r) + 1;
                        return t[e] = u, this._siftdown(t, s, e, i)
                    }, t.prototype.siftup = function(t) {
                        return this._siftup(this.nodes, t, this.comparator)
                    }, t
                }(),
                m = function(t) {
                    var e = "function" == typeof Symbol && t[Symbol.iterator],
                        n = 0;
                    return e ? e.call(t) : {
                        next: function() {
                            return t && n >= t.length && (t = void 0), {
                                value: t && t[n++],
                                done: !t
                            }
                        }
                    }
                };

            function w(t, e) {
                var n, r;
                try {
                    for (var o = m(e), i = o.next(); !i.done; i = o.next()) {
                        if (i.value === t) return !0
                    }
                } catch (t) {
                    n = {
                        error: t
                    }
                } finally {
                    try {
                        i && !i.done && (r = o.return) && r.call(o)
                    } finally {
                        if (n) throw n.error
                    }
                }
                return !1
            }! function(t) {
                t[t.Success = 0] = "Success", t[t.NoPath = 1] = "NoPath", t[t.Timeout = 2] = "Timeout"
            }(f || (f = {}));

            function g(t) {
                if (void 0 !== t.parent) {
                    var e = g(t.parent);
                    return e.push(t.data), e
                }
                return [t.data]
            }

            function b(t) {
                return t.toString()
            }

            function T(t, e) {
                if (t.f && e.f) return t.f - e.f;
                throw new Error('heapComparator() -> Property "f" is undefined.')
            }
            var P, D = Object.freeze({
                    sweeps: {
                        maxNeighborDistance: 50
                    }
                }),
                S = n(599),
                x = n(600),
                M = (P = function(t, e) {
                    return (P = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                }, function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    P(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                _ = function(t, e, n, r) {
                    return new(n || (n = Promise))((function(o, i) {
                        function a(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function s(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new n((function(e) {
                                e(t.value)
                            })).then(a, s)
                        }
                        u((r = r.apply(t, e || [])).next())
                    }))
                },
                O = function(t, e) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function s(i) {
                        return function(s) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
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
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1], o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    i = e.call(t, a)
                                } catch (t) {
                                    i = [6, t], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, s])
                        }
                    }
                },
                k = function(t) {
                    var e = "function" == typeof Symbol && t[Symbol.iterator],
                        n = 0;
                    return e ? e.call(t) : {
                        next: function() {
                            return t && n >= t.length && (t = void 0), {
                                value: t && t[n++],
                                done: !t
                            }
                        }
                    }
                },
                C = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.name = "sweep-path", e
                    }
                    return M(e, t), e.prototype.init = function(t, e) {
                        return _(this, void 0, void 0, (function() {
                            var n;
                            return O(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return this.engine = e, n = this, [4, e.market.waitForData(y.a)];
                                    case 1:
                                        return n.sweepData = r.sent(), this.validNeighbors = {}, this.maxNeighborDistance = t.maxNeighborDistance || D.sweeps.maxNeighborDistance, this.buildDistanceMap(), [2]
                                }
                            }))
                        }))
                    }, e.prototype.setRestrictedSweeps = function(t, e) {
                        if (void 0 === e && (e = 0), this.restrictedSweeps = [], t) {
                            for (var n = e; n < t.length; n++) this.restrictedSweeps.push(t[n].id);
                            this.engine.broadcast(new S.a(this.restrictedSweeps))
                        } else this.restrictedSweeps = void 0, this.engine.broadcast(new x.a)
                    }, e.prototype.findShortestPath = function(t, e, n, r, o, i, a) {
                        var s = this;
                        void 0 === a && (a = 5e3);
                        var u = this.sweepData.getSweep(t),
                            c = this.sweepData.getSweep(e),
                            l = function(t) {
                                var e, n;
                                void 0 === t.timeout && (t.timeout = 1 / 0);
                                var r = t.hash || b,
                                    o = {
                                        data: t.start,
                                        g: 0,
                                        h: t.heuristic(t.start)
                                    },
                                    i = o;
                                o.f = o.h;
                                var a = [],
                                    s = new v(T),
                                    u = {};
                                s.push(o), u[r(o.data)] = o;
                                for (var c, l, h = Date.now(); s.size();) {
                                    if (Date.now() - h > t.timeout) return {
                                        status: f.Timeout,
                                        cost: i.g,
                                        path: g(i)
                                    };
                                    var p = s.pop();
                                    if (delete u[r(p.data)], p && t.isEnd(p.data)) return {
                                        status: f.Success,
                                        cost: p.g,
                                        path: g(p)
                                    };
                                    w(c = r(p.data), l = a) || l.push(c);
                                    var d = t.neighbor(p.data);
                                    try {
                                        for (var y = m(d), P = y.next(); !P.done; P = y.next()) {
                                            var D = P.value;
                                            if (!w(r(D), a)) {
                                                var S = p.g + t.distance(p.data, D),
                                                    x = u[r(D)],
                                                    M = !1;
                                                if (void 0 === x) x = {
                                                    data: D,
                                                    g: 0,
                                                    h: 0,
                                                    f: 0
                                                }, u[r(D)] = x;
                                                else {
                                                    if (x.g < S) continue;
                                                    M = !0
                                                }
                                                x.parent = p || void 0, x.g = S, x.h = t.heuristic(D), x.f = S + x.h, x.h < i.h && (i = x), M ? s.heapify() : s.push(x)
                                            }
                                        }
                                    } catch (t) {
                                        e = {
                                            error: t
                                        }
                                    } finally {
                                        try {
                                            P && !P.done && (n = y.return) && n.call(y)
                                        } finally {
                                            if (e) throw e.error
                                        }
                                    }
                                }
                                return {
                                    status: f.NoPath,
                                    cost: i.g,
                                    path: g(i)
                                }
                            }({
                                start: u,
                                isEnd: function(t) {
                                    return t === c
                                },
                                neighbor: function(t) {
                                    return s.getValidNeighbors(t.id, i)
                                },
                                distance: function(t, e) {
                                    return s.getDistance(t.id, e.id)
                                },
                                heuristic: function(t, e) {
                                    return 1
                                },
                                hash: function(t) {
                                    return t.id
                                },
                                timeout: a
                            });
                        return l.status === f.Success && l.path.length < o ? (this.addSweepsNearPath(l.path, n), this.filterCloseSweepsFromPath(l.path, r)) : null
                    }, e.prototype.addSweepsNearPath = function(t, e) {
                        for (var n, o, i = new r.a, a = new r.a, s = new r.a, u = new r.a, c = new r.a, l = new r.a, h = [], p = new r.a, f = function(t, e, n) {
                                return s.copy(e).sub(t), s.dot(n)
                            }, d = function(t, e) {
                                return f(p, t.position, i) - f(p, e.position, i)
                            }, y = 0; y < t.length - 1;) {
                            var v = t[y].id,
                                m = t[y + 1].id,
                                w = this.sweepData.getSweep(v),
                                g = this.sweepData.getSweep(m);
                            p.copy(w.position), h.length = 0, i.copy(g.position).sub(p).normalize();
                            var b = this.findConnectedSweeps(w, this.maxNeighborDistance),
                                T = this.findConnectedSweeps(g, this.maxNeighborDistance),
                                P = b.concat(T);
                            try {
                                for (var D = k(P), S = D.next(); !S.done; S = D.next()) {
                                    var x = S.value,
                                        M = s.copy(x.position).sub(p).dot(i);
                                    if (M > 0)
                                        if (c.copy(i), c.multiplyScalar(M), u.copy(s), u.sub(c), u.length() < e) a.copy(i).negate(), l.copy(x.position).sub(g.position), l.dot(a) > 0 && h.push(x)
                                }
                            } catch (t) {
                                n = {
                                    error: t
                                }
                            } finally {
                                try {
                                    S && !S.done && (o = D.return) && o.call(D)
                                } finally {
                                    if (n) throw n.error
                                }
                            }
                            if (h.length > 0) {
                                h.sort(d);
                                for (var _ = t.length + h.length - 1; _ >= y + h.length; _--) t[_] = t[_ - h.length];
                                for (var O = 0; O < h.length; O++) t[O + y + 1] = h[O]
                            }
                            y += h.length + 1
                        }
                    }, e.prototype.findConnectedSweeps = function(t, e, n) {
                        void 0 === n && (n = 2);
                        var r = [];
                        return this._findConnectedSweeps(t, t, e, r, {}, n, 0), r
                    }, e.prototype._findConnectedSweeps = function(t, e, n, r, o, i, a) {
                        var s, u, c = this.getValidNeighbors(t.id);
                        try {
                            for (var l = k(c), h = l.next(); !h.done; h = l.next()) {
                                var p = h.value;
                                if (!o[p.id]) p.position.distanceTo(e.position) < n && (r.push(p), o[p.id] = !0, a < i && this._findConnectedSweeps(p, e, n, r, o, i, a + 1))
                            }
                        } catch (t) {
                            s = {
                                error: t
                            }
                        } finally {
                            try {
                                h && !h.done && (u = l.return) && u.call(l)
                            } finally {
                                if (s) throw s.error
                            }
                        }
                    }, e.prototype.getValidNeighbors = function(t, e) {
                        var n, r, o = this.validNeighbors[t];
                        if (!o) {
                            o = [], this.validNeighbors[t] = o;
                            var i = this.sweepData.getSweep(t),
                                a = i.neighbours;
                            try {
                                for (var s = k(a), u = s.next(); !u.done; u = s.next()) {
                                    var c = u.value,
                                        l = this.sweepData.getSweep(c),
                                        h = this.getDistance(t, c);
                                    if (l.enabled && !(h > this.maxNeighborDistance)) {
                                        var p = !0;
                                        if (e) {
                                            var f = l.position.clone().sub(i.position).normalize();
                                            p = 0 === e(i.position, f, h).length
                                        }
                                        p && o.push(l)
                                    }
                                }
                            } catch (t) {
                                n = {
                                    error: t
                                }
                            } finally {
                                try {
                                    u && !u.done && (r = s.return) && r.call(s)
                                } finally {
                                    if (n) throw n.error
                                }
                            }
                        }
                        return o
                    }, e.prototype.filterCloseSweepsFromPath = function(t, e) {
                        var n, r, o = [],
                            i = null,
                            a = !1;
                        try {
                            for (var s = k(t), u = s.next(); !u.done; u = s.next()) {
                                var c = u.value;
                                a = i && c.position.distanceTo(i.position) < e || !1, i && a || (o.push(c), i = c)
                            }
                        } catch (t) {
                            n = {
                                error: t
                            }
                        } finally {
                            try {
                                u && !u.done && (r = s.return) && r.call(s)
                            } finally {
                                if (n) throw n.error
                            }
                        }
                        return o.length < 2 ? t : (a && t.length > 1 && (o[o.length - 1] = t[t.length - 1]), o)
                    }, e.prototype.getCurveForPath = function(t) {
                        for (var e = 0, n = [0], r = 1; r < t.length; r++) e += t[r - 1].distanceTo(t[r]), n.push(e);
                        var o = [0];
                        for (r = 1; r < t.length; r++) o.push(n[r] / e);
                        var i = new p(t, !1);
                        return {
                            curve: new p(i.getSpacedPoints(2 * e).concat(t[t.length - 1])),
                            totalLength: e,
                            sourceDistances: n,
                            normalSourceDistances: o
                        }
                    }, e.prototype.buildDistanceMap = function() {
                        var t = this,
                            e = {},
                            n = new r.a(0, 0, 0);
                        this.sweepData.iterate((function(r) {
                            var o, i, a = {},
                                s = r.neighbours;
                            try {
                                for (var u = k(s), c = u.next(); !c.done; c = u.next()) {
                                    var l = c.value,
                                        h = t.sweepData.getSweep(l);
                                    n.copy(r.position).sub(h.position);
                                    var p = Math.max(0, Math.abs(n.y) - .2),
                                        f = Math.sqrt(n.x * n.x + n.z * n.z),
                                        d = void 0;
                                    p > 0 ? (p = Math.pow(4 * p, 2), f = Math.pow(f, 2), d = Math.sqrt(p * p + f * f)) : d = n.length(), a[h.id] = d
                                }
                            } catch (t) {
                                o = {
                                    error: t
                                }
                            } finally {
                                try {
                                    c && !c.done && (i = u.return) && i.call(u)
                                } finally {
                                    if (o) throw o.error
                                }
                            }
                            e[r.id] = a
                        })), this.distanceMap = e
                    }, e.prototype.getDistance = function(t, e) {
                        return this.distanceMap[t][e]
                    }, e
                }(d.zb);
            e.default = C
        },
        1017: function(t, e, n) {
            "use strict";
            n.r(e);
            var r, o = n(2),
                i = n(0),
                a = n(114),
                s = n(30),
                u = n(809),
                c = n.n(u),
                l = n(810),
                h = n.n(l),
                p = (r = function(t, e) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                }, function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                f = function(t) {
                    function e() {
                        var n = s.a.clone(e.uniforms);
                        return t.call(this, {
                            vertexShader: c.a,
                            fragmentShader: h.a,
                            uniforms: n,
                            name: "PortalViewportMaterial",
                            side: i.h
                        }) || this
                    }
                    return p(e, t), e.prototype.updateTexture = function(t) {
                        this.uniforms.tMap.value = t
                    }, e.uniforms = {
                        tMap: {
                            type: "t",
                            value: null
                        }
                    }, e
                }(a.a),
                d = n(67),
                y = n(74),
                v = n(126),
                m = n(29),
                w = n(1),
                g = function(t, e, n, r) {
                    return new(n || (n = Promise))((function(o, i) {
                        function a(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function s(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new n((function(e) {
                                e(t.value)
                            })).then(a, s)
                        }
                        u((r = r.apply(t, e || [])).next())
                    }))
                },
                b = function(t, e) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function s(i) {
                        return function(s) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
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
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1], o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    i = e.call(t, a)
                                } catch (t) {
                                    i = [6, t], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, s])
                        }
                    }
                },
                T = function() {
                    function t(t, e, n, r) {
                        this.tempLookDirection = new w.a, this.worldCamera = r, this.camera = new v.a, this.renderSize = n, this.sweepTextureLoader = t, this.textureRenderer = e, this.renderTargets = {}, this.renderCube = new m.a(new y.b(4, 4, 4), new f)
                    }
                    return t.prototype.getPortalTexture = function(t, e, n) {
                        return g(this, void 0, void 0, (function() {
                            var r, o;
                            return b(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return r = this.renderTargets[t] || this.textureRenderer.createRenderTarget2D(this.renderSize, this.renderSize), [4, this.sweepTextureLoader.load(t, d.d.BASE)];
                                    case 1:
                                        return o = i.sent(), this.renderCube.material.updateTexture(o), this.renderCube.quaternion.copy(e), this.camera.projectionMatrix.copy(this.worldCamera.projectionMatrix), this.worldCamera.getWorldPosition(this.tempLookDirection), this.camera.lookAt(this.tempLookDirection.sub(n).negate()), this.textureRenderer.render(r, this.renderCube, this.camera), [2, r.texture]
                                }
                            }))
                        }))
                    }, t.prototype.releasePortalTexture = function(t) {
                        var e = this.renderTargets[t];
                        e && this.textureRenderer.disposeRenderTarget2D(e)
                    }, t
                }(),
                P = n(772),
                D = n(6),
                S = Object(D.z)("geond", 15),
                x = Object(D.z)("geowo", .1),
                M = n(60),
                _ = n(63),
                O = n(549),
                k = n(529),
                C = n(541),
                A = n(3),
                E = function() {
                    var t = function(e, n) {
                        return (t = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(t, e) {
                                t.__proto__ = e
                            } || function(t, e) {
                                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                            })(e, n)
                    };
                    return function(e, n) {
                        function r() {
                            this.constructor = e
                        }
                        t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                    }
                }(),
                R = function(t, e, n, r) {
                    return new(n || (n = Promise))((function(o, i) {
                        function a(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function s(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new n((function(e) {
                                e(t.value)
                            })).then(a, s)
                        }
                        u((r = r.apply(t, e || [])).next())
                    }))
                },
                I = function(t, e) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function s(i) {
                        return function(s) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
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
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1], o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    i = e.call(t, a)
                                } catch (t) {
                                    i = [6, t], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, s])
                        }
                    }
                },
                F = function(t, e) {
                    var n = "function" == typeof Symbol && t[Symbol.iterator];
                    if (!n) return t;
                    var r, o, i = n.call(t),
                        a = [];
                    try {
                        for (;
                            (void 0 === e || e-- > 0) && !(r = i.next()).done;) a.push(r.value)
                    } catch (t) {
                        o = {
                            error: t
                        }
                    } finally {
                        try {
                            r && !r.done && (n = i.return) && n.call(i)
                        } finally {
                            if (o) throw o.error
                        }
                    }
                    return a
                },
                j = function(t) {
                    var e = "function" == typeof Symbol && t[Symbol.iterator],
                        n = 0;
                    return e ? e.call(t) : {
                        next: function() {
                            return t && n >= t.length && (t = void 0), {
                                value: t && t[n++],
                                done: !t
                            }
                        }
                    }
                },
                U = new A.a("sweep-portal-mesh"),
                B = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.name = "sweep-portal-mesh", e.portalCount = 0, e
                    }
                    return E(e, t), e.prototype.init = function(t, e) {
                        return R(this, void 0, void 0, (function() {
                            var t, n, r, i, a, s, u, c, l, h, p, f, d, y = this;
                            return I(this, (function(v) {
                                switch (v.label) {
                                    case 0:
                                        return [4, Promise.all([e.getModule(o.R), e.getModule(o.S), e.getModule(o.x), e.getModule(o.fb), e.getModule(o.Nb), e.market.waitForData(M.a), e.getModule(o.t)])];
                                    case 1:
                                        return t = F.apply(void 0, [v.sent(), 6]), n = t[0], r = t[1], i = t[2], a = t[3], s = t[4], u = t[5], this.portalData = {}, c = s.getScene().camera, l = new O.a(n.getSignedUrls()), h = new T(l, a, 256, c), p = s.getScene().scene, this.portalRenderer = new P.b(p, i, h), f = _.b.MANUAL, d = u.filter((function(t) {
                                            return k.j(t)
                                        })), u.iterate((function(t) {
                                            y.portalData[t.id] || (y.portalData[t.id] = []), k.j(t) && y.addPortals(t, y.portalRenderer, r, u, d);
                                            var e = t.placementType;
                                            y.bindings.push(t.onPropertyChanged("placementType", (function(n) {
                                                e !== f && n === f && y.addPortals(t, y.portalRenderer, r, u, d), e === f && n !== f && y.removePortals(t.id, y.portalRenderer), e = n
                                            }))), y.bindings.push(t.onChanged((function() {
                                                k.j(t) && (y.removePortals(t.id, y.portalRenderer), y.addPortals(t, y.portalRenderer, r, u, d))
                                            })))
                                        })), e.addComponent(this, this.portalRenderer), [2]
                                }
                            }))
                        }))
                    }, e.prototype.filter = function(t) {
                        this.portalRenderer.filter(t)
                    }, e.prototype.getPortalToExterior = function(t) {
                        return this.portalRenderer.mapSweepToMesh(t)
                    }, e.prototype.removePortals = function(t, e) {
                        var n, r;
                        try {
                            for (var o = j(this.portalData[t]), i = o.next(); !i.done; i = o.next()) {
                                var a = i.value;
                                e.removePortal(a)
                            }
                        } catch (t) {
                            n = {
                                error: t
                            }
                        } finally {
                            try {
                                i && !i.done && (r = o.return) && r.call(o)
                            } finally {
                                if (n) throw n.error
                            }
                        }
                        this.portalData[t] = []
                    }, e.prototype.addPortals = function(t, e, n, r, o) {
                        var i, a, s = this.nearestAlignedSweep(t, r);
                        if (s) {
                            var u = this.entryLinks(t, s, n),
                                c = this.neighborLinks(t, o);
                            this.portalData[t.id] = u.concat(c);
                            try {
                                for (var l = j(this.portalData[t.id]), h = l.next(); !h.done; h = l.next()) {
                                    var p = h.value;
                                    e.addPortal(p)
                                }
                            } catch (t) {
                                i = {
                                    error: t
                                }
                            } finally {
                                try {
                                    h && !h.done && (a = l.return) && a.call(l)
                                } finally {
                                    if (i) throw i.error
                                }
                            }
                        } else U.debug("Couldn't find the nearest sweep for a 360 on floor " + t.floor + "; not adding portals")
                    }, e.prototype.nearestAlignedSweep = function(t, e) {
                        var n = [k.h(t), k.c(), k.b(), k.i(t)],
                            r = [C.c(t.position)],
                            o = e.sortByScore(n, r)[0];
                        return o ? o.sweep : null
                    }, e.prototype.modelIntersection = function(t, e, n) {
                        var r = (new w.a).copy(t.position).sub(e.position).setY(0).normalize();
                        return {
                            intersect: n.raycast(e.position, r, 100)[0],
                            rayDirection: r
                        }
                    }, e.prototype.entryLinks = function(t, e, n) {
                        var r = [],
                            o = this.modelIntersection(t, e, n),
                            i = new w.a,
                            a = new w.a;
                        return o.intersect && o.intersect.face ? (i = o.intersect.face.normal.clone().setY(0).normalize(), a = o.intersect.point.clone().addScaledVector(i, x)) : (i = o.rayDirection.clone().negate(), a = e.position.clone().addScaledVector(o.rayDirection, 2)), r.push({
                            index: this.portalCount++,
                            toSweep: t,
                            fromSweep: e,
                            position: a,
                            lookDirection: i,
                            toExterior: !0,
                            fromInterior: !0
                        }), r.push({
                            index: this.portalCount++,
                            toSweep: e,
                            fromSweep: t,
                            position: t.position.clone().addScaledVector(i, 2).setY(t.position.y),
                            lookDirection: i.clone().negate(),
                            toExterior: !1,
                            fromInterior: !1
                        }), r
                    }, e.prototype.neighborLinks = function(t, e) {
                        var n, r, o = [];
                        try {
                            for (var i = j(e), a = i.next(); !a.done; a = i.next()) {
                                var s = a.value;
                                if (s.floor === t.floor && t.position.distanceTo(s.position) < S) {
                                    var u = s.position.clone().sub(t.position).setY(0).normalize(),
                                        c = t.position.clone().addScaledVector(u, 2);
                                    u.negate(), o.push({
                                        index: this.portalCount++,
                                        toSweep: s,
                                        fromSweep: t,
                                        position: c,
                                        lookDirection: u,
                                        toExterior: !0,
                                        fromInterior: !1
                                    })
                                }
                            }
                        } catch (t) {
                            n = {
                                error: t
                            }
                        } finally {
                            try {
                                a && !a.done && (r = i.return) && r.call(i)
                            } finally {
                                if (n) throw n.error
                            }
                        }
                        return o
                    }, e
                }(o.bb);
            e.default = B
        },
        1023: function(t, e, n) {
            "use strict";
            n.r(e);
            var r, o = n(2),
                i = n(60),
                a = n(61),
                s = n(20),
                u = n(113),
                c = n(603),
                l = n(714),
                h = n(576),
                p = n(222),
                f = n(106),
                d = n(67),
                y = n(14),
                v = n(499),
                m = n(81),
                w = n(174),
                g = n(224),
                b = n(27),
                T = n(3),
                P = new T.a("snapshots"),
                D = function() {
                    function t(t, e, n, r, o, i, a) {
                        this.sweepData = t, this.meshData = e, this.viewmodeData = n, this.cameraData = r, this.floorsViewData = o, this.queue = i, this.uploadEndpoint = a, this.cameraMeshMode = 3
                    }
                    return t.prototype.upload = function(t, e) {
                        var n = new FormData;
                        return n.append("src", t, e.name + ".jpg"), n.append("name", e.name), n.append("metadata", JSON.stringify(e.metadata)), n.append("category", e.category), this.queue.post(this.uploadEndpoint + "?format=json", {
                            body: n,
                            responseType: "json"
                        }).then((function(t) {
                            return P.info("Captured successfully!", t), Object(g.b)(t)
                        })).catch((function(t) {
                            return P.error(t), null
                        }))
                    }, t.prototype.rename = function(t, e) {
                        var n = {
                            name: e
                        };
                        return this.queue.patch("" + this.uploadEndpoint + t + "?format=json", {
                            body: n,
                            responseType: "json"
                        }).then((function(t) {
                            P.info("Renamed successfully!", t)
                        })).catch((function(t) {
                            P.error(t)
                        }))
                    }, t.prototype.delete = function(t) {
                        return this.queue.delete("" + this.uploadEndpoint + t + "?format=json").then((function(t) {
                            P.info("deleted successfully!", t)
                        })).catch((function(t) {
                            P.error(t)
                        }))
                    }, Object.defineProperty(t.prototype, "lastUploadedWasMeshSnapshot", {
                        get: function() {
                            return 1 === this.meshData.opacity.value
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.formatPoseMetaData = function(t) {
                        var e = this.viewmodeData.isPano(),
                            n = Object(b.h)(new Date);
                        if (e) {
                            var r = this.sweepData.getSweep(this.sweepData.currentSweep).name;
                            r && (n = r)
                        }
                        var o = Object(y.j)(this.cameraData.pose.position),
                            i = Object(y.i)(this.cameraData.pose.rotation),
                            a = {
                                x: i.x,
                                y: i.y,
                                z: i.z,
                                w: i.w
                            },
                            u = this.viewmodeData.isPano() && 1 === this.meshData.opacity.value ? this.cameraMeshMode : Object(s.b)(this.viewmodeData.currentMode),
                            c = this.viewmodeData.currentMode === s.a.Floorplan,
                            l = {
                                camera_mode: u,
                                camera_position: o,
                                camera_quaternion: a,
                                ortho_zoom: c ? this.cameraData.zoom() : -1,
                                ss_zoom: this.cameraData.zoom(),
                                scan_id: e ? this.sweepData.currentSweep : "",
                                is_ortho: c,
                                floorVisibility: this.floorsViewData.getFloorsVisibility()
                            };
                        return !e && (-1 !== this.floorsViewData.currentFloor || Math.max(this.floorsViewData.currentFloor, 0) < this.floorsViewData.totalFloors) && (l.highest_floor = this.floorsViewData.currentFloor), {
                            name: n,
                            category: t,
                            metadata: l
                        }
                    }, t
                }(),
                S = n(10),
                x = n(496),
                M = n(56),
                _ = n(502),
                O = (r = function(t, e) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                }, function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                k = function(t) {
                    function e(e) {
                        var n = t.call(this, e) || this;
                        return n.name = "SnapshotCaptureError", n
                    }
                    return O(e, t), e
                }(Error),
                C = function(t) {
                    function e(e) {
                        var n = t.call(this, e) || this;
                        return n.name = "SnapshotUploadError", n
                    }
                    return O(e, t), e
                }(Error),
                A = n(188),
                E = n(532),
                R = n(63),
                I = n(154),
                F = n(580),
                j = function() {
                    var t = function(e, n) {
                        return (t = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(t, e) {
                                t.__proto__ = e
                            } || function(t, e) {
                                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                            })(e, n)
                    };
                    return function(e, n) {
                        function r() {
                            this.constructor = e
                        }
                        t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                    }
                }(),
                U = function(t, e, n, r) {
                    return new(n || (n = Promise))((function(o, i) {
                        function a(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function s(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new n((function(e) {
                                e(t.value)
                            })).then(a, s)
                        }
                        u((r = r.apply(t, e || [])).next())
                    }))
                },
                B = function(t, e) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function s(i) {
                        return function(s) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
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
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1], o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    i = e.call(t, a)
                                } catch (t) {
                                    i = [6, t], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, s])
                        }
                    }
                },
                G = function(t, e) {
                    var n = "function" == typeof Symbol && t[Symbol.iterator];
                    if (!n) return t;
                    var r, o, i = n.call(t),
                        a = [];
                    try {
                        for (;
                            (void 0 === e || e-- > 0) && !(r = i.next()).done;) a.push(r.value)
                    } catch (t) {
                        o = {
                            error: t
                        }
                    } finally {
                        try {
                            r && !r.done && (n = i.return) && n.call(i)
                        } finally {
                            if (o) throw o.error
                        }
                    }
                    return a
                },
                N = new T.a("snapshot-editor"),
                L = p.c.uploadIntervalDelay,
                V = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.name = "snapshots-editor", e
                    }
                    return j(e, t), e.prototype.init = function(t, e) {
                        return U(this, void 0, void 0, (function() {
                            var n, r, h, p, f, y, T, P, x, O = this;
                            return B(this, (function(k) {
                                switch (k.label) {
                                    case 0:
                                        return this.engine = e, [4, Promise.all([e.getModule(o.Nb), e.getModule(o.xb), e.getModule(o.sb)])];
                                    case 1:
                                        return n = G.apply(void 0, [k.sent(), 3]), this.renderer = n[0], this.sweepTilingModule = n[1], this.snapshotsModule = n[2], [4, Promise.all([e.market.waitForData(i.a), e.market.waitForData(u.a), e.market.waitForData(E.a), e.market.waitForData(a.a)])];
                                    case 2:
                                        return r = G.apply(void 0, [k.sent(), 4]), this.sweepData = r[0], this.viewmodeData = r[1], this.meshData = r[2], this.cameraData = r[3], [4, Promise.all([e.commandBinder.issueCommandWhenBound(new c.d), e.commandBinder.issueCommandWhenBound(new c.d)])];
                                    case 3:
                                        return h = G.apply(void 0, [k.sent(), 2]), this.snapshotTarget = h[0], this.snapshotOverlayTarget = h[1], [4, Promise.all([e.market.waitForData(A.c), e.market.waitForData(w.a)])];
                                    case 4:
                                        return p = G.apply(void 0, [k.sent(), 2]), f = p[0], y = p[1], T = new D(this.sweepData, this.meshData, this.viewmodeData, this.cameraData, f, t.queue, t.uploadEndpoint), this.bindings.push(e.commandBinder.addBinding(v.a, (function(t) {
                                            return U(O, void 0, void 0, (function() {
                                                var n, r, o, i, a, u, l, h = this;
                                                return B(this, (function(p) {
                                                    switch (p.label) {
                                                        case 0:
                                                            return n = 10, (r = t.onProgress || Object(m.b)(0)).value = n, e.commandBinder.issueCommand(new F.a), [4, this.queryIdealResolution(t.maxSize, t.aspect)];
                                                        case 1:
                                                            return o = p.sent(), this.snapshotTarget.setSize(o.width, o.height), this.snapshotOverlayTarget.setSize(o.width, o.height), [4, this.fetchHighestAvailable(!1, t.maxSize, (function(t) {
                                                                return r.value = Math.max(n, t)
                                                            }))];
                                                        case 2:
                                                            return p.sent(), [4, Object(b.d)(2 * L)];
                                                        case 3:
                                                            return p.sent(), [4, this.takeScreenshot()];
                                                        case 4:
                                                            return p.sent(), t.getOverlay ? [4, t.getOverlay(o.width, o.height)] : [3, 8];
                                                        case 5:
                                                            return (i = p.sent()) ? [4, e.commandBinder.issueCommand(new c.b(this.snapshotOverlayTarget, i))] : [3, 8];
                                                        case 6:
                                                            return p.sent(), [4, e.commandBinder.issueCommand(new c.a(this.snapshotTarget, this.snapshotOverlayTarget))];
                                                        case 7:
                                                            p.sent(), p.label = 8;
                                                        case 8:
                                                            return a = this.sweepData.getSweep(this.sweepData.currentSweep), this.viewmodeData.currentMode !== s.a.Panorama ? [3, 10] : [4, this.sweepTilingModule.revertTilingSettings(a.id)];
                                                        case 9:
                                                            p.sent(), p.label = 10;
                                                        case 10:
                                                            return e.commandBinder.issueCommand(new F.b), u = t.category, a && (a.alignmentType === R.a.UNALIGNED || a.placementType === R.b.MANUAL) && u === g.a.user && (u = g.a.unaligned), l = this.uploadAndAddSnapshot(T, this.sweepData, y, u, t.setAsStartLocation).then((function(t) {
                                                                return t && t.sid
                                                            })).catch((function(t) {
                                                                throw N.error(t), h.engine.broadcast(new _.b(t)), t
                                                            })), [2, t.waitForUpload ? l : null]
                                                    }
                                                }))
                                            }))
                                        }))), P = S.b.FORWARD.clone(), x = S.b.FORWARD.clone(), this.bindings.push(e.commandBinder.addBinding(v.c, (function(t) {
                                            return U(O, void 0, void 0, (function() {
                                                var n, r, o, i, a, s, u, c = this;
                                                return B(this, (function(h) {
                                                    switch (h.label) {
                                                        case 0:
                                                            return n = 10, (r = t.onProgress || Object(m.b)(0)).value = n, e.commandBinder.issueCommand(new F.a), [4, Object(b.d)(50)];
                                                        case 1:
                                                            return h.sent(), o = this.queryIdealEqResolution(), this.snapshotTarget.setSize(o.width, o.height), i = this.sweepData.getSweep(this.sweepData.currentSweep), P.copy(S.b.FORWARD).applyQuaternion(i.rotation).setY(0), x.copy(S.b.FORWARD).applyQuaternion(this.cameraData.pose.rotation).setY(0), a = Object(M.q)(P, x) + Math.PI, [4, this.fetchHighestAvailable(!0, d.d.ULTRAHIGH, (function(t) {
                                                                return r.value = Math.max(n, t)
                                                            }))];
                                                        case 2:
                                                            return h.sent(), [4, this.takeEquirectangular(a)];
                                                        case 3:
                                                            return h.sent(), [4, this.sweepTilingModule.revertTilingSettings(i.id)];
                                                        case 4:
                                                            return h.sent(), e.commandBinder.issueCommand(new F.b), s = Object(l.d)(this.snapshotTarget.width, this.snapshotTarget.height, a, 0), u = this.uploadAndAddSnapshot(T, this.sweepData, y, g.a.panorama, t.setAsStartLocation, s).then((function(t) {
                                                                return t && t.sid
                                                            })).catch((function(t) {
                                                                throw N.error(t), c.engine.broadcast(new _.b(t)), t
                                                            })), [2, t.waitForUpload ? u : null]
                                                    }
                                                }))
                                            }))
                                        }))), this.bindings.push(e.commandBinder.addBinding(v.e, (function(t) {
                                            return U(O, void 0, void 0, (function() {
                                                var e;
                                                return B(this, (function(n) {
                                                    return (e = y.get(t.sid)).name = t.name, [2, T.rename(e.sid, e.name)]
                                                }))
                                            }))
                                        }))), this.bindings.push(e.commandBinder.addBinding(v.d, (function(t) {
                                            return U(O, void 0, void 0, (function() {
                                                return B(this, (function(e) {
                                                    return [2, T.delete(t.sid)]
                                                }))
                                            }))
                                        }))), [2]
                                }
                            }))
                        }))
                    }, e.prototype.uploadAndAddSnapshot = function(t, e, n, r, i, a) {
                        return void 0 === i && (i = !1), U(this, void 0, void 0, (function() {
                            var u, c, h, p, f, d, y;
                            return B(this, (function(v) {
                                switch (v.label) {
                                    case 0:
                                        return u = t.formatPoseMetaData(r), h = l.c, [4, Object(l.a)(this.snapshotTarget, a)];
                                    case 1:
                                        return c = h.apply(void 0, [v.sent()]), [4, t.upload(c, u)];
                                    case 2:
                                        if (!(p = v.sent())) throw new C("Failed to upload snapshot");
                                        return f = p.metadata.camera_mode === s.a.Panorama, d = !Object(I.b)(e, p.metadata.scan_id), p.is360 = f && d, this.snapshotsModule.addSnapshot(p), y = n.get(p.sid), this.engine.broadcast(new _.a(y.sid, y.is360, r, y.height, t.lastUploadedWasMeshSnapshot, p.imageUrl)), i ? [4, this.engine.getModule(o.d)] : [3, 4];
                                    case 3:
                                        v.sent().updateStartLocationFromSnapshot(p), v.label = 4;
                                    case 4:
                                        return [2, p]
                                }
                            }))
                        }))
                    }, e.prototype.queryIdealResolution = function(t, e) {
                        return void 0 === t && (t = d.d.ULTRAHIGH), U(this, void 0, Promise, (function() {
                            var n, r, o, i, a, u, c;
                            return B(this, (function(l) {
                                switch (l.label) {
                                    case 0:
                                        return r = (n = 3840) * x.b, o = this.renderer.maxTextureSize, n > o && (N.warn("The active gl context does not support 4k x 2k equirectangular capture\nCapture is limited to a max size of " + o), r = (n = o) * x.b), this.viewmodeData.currentMode !== s.a.Panorama ? [3, 2] : [4, this.sweepTilingModule.availableResolution(this.sweepData.currentSweep, t)];
                                    case 1:
                                        i = l.sent(), a = h.b.getPanoSize(i), u = this.cameraData.fovY() * y.c, c = a * u / 90, n = Math.min(Math.round(c * e), o), r = Math.round(n / e), l.label = 2;
                                    case 2:
                                        return [2, Promise.resolve({
                                            width: n,
                                            height: r
                                        })]
                                }
                            }))
                        }))
                    }, e.prototype.queryIdealEqResolution = function() {
                        var t = 4096;
                        if (this.viewmodeData.currentMode !== s.a.Panorama) throw new k("Equirectangular capture is only supported in Panorama mode");
                        var e = this.renderer.maxTextureSize;
                        return t > e && N.warn("The active gl context does not support 4k x 2k equirectangular capture\nCapture is limited to a max size of " + e), {
                            width: t = Math.min(e, t),
                            height: .5 * t
                        }
                    }, e.prototype.fetchHighestAvailable = function(t, n, r) {
                        var i = this;
                        if (void 0 === n && (n = d.d.ULTRAHIGH), this.viewmodeData.currentMode === s.a.Panorama) {
                            var a = this.sweepData.currentSweep,
                                u = t ? o.m.FullPanorama : o.m.CurrentView;
                            return this.sweepTilingModule.requestResolution(a, n, u, !0).then((function(t) {
                                var n = i.sweepTilingModule.waitForQueue(u, t);
                                return r && n.progress((function(t) {
                                    return r(t * e.captureProgressFudgeFactor)
                                })), n
                            }))
                        }
                        return r && r(e.captureProgressFudgeFactor), Promise.resolve()
                    }, e.prototype.takeScreenshot = function() {
                        var t = f.a.ALL;
                        t.removeLayers(this.engine.getRenderLayer("grid-underlay")), t.removeLayers(this.engine.getRenderLayer("cursor-mesh")), t.removeLayers(this.engine.getRenderLayer("current-pano-marker"));
                        var e = this.renderer.getScene().scene,
                            n = this.renderer.getScene().camera,
                            r = n.layers.mask;
                        return n.layers.mask = t.mask, this.engine.commandBinder.issueCommand(new c.e(this.snapshotTarget, e, n)).then((function() {
                            n.layers.mask = r
                        }))
                    }, e.prototype.takeEquirectangular = function(t) {
                        var e = this.sweepData.currentSweep,
                            n = this.sweepTilingModule.getRenderer(),
                            r = n.useTexture(e),
                            o = this.engine.commandBinder.issueCommand(new c.c(this.snapshotTarget, r, t));
                        return n.freeTexture(e), o
                    }, e.captureProgressFudgeFactor = 90, e
                }(o.rb);
            e.default = V
        },
        1024: function(t, e, n) {
            "use strict";
            n.r(e);
            var r, o = n(2),
                i = n(60),
                a = n(599),
                s = n(600),
                u = n(27),
                c = function(t) {
                    var e = "function" == typeof Symbol && t[Symbol.iterator],
                        n = 0;
                    return e ? e.call(t) : {
                        next: function() {
                            return t && n >= t.length && (t = void 0), {
                                value: t && t[n++],
                                done: !t
                            }
                        }
                    }
                };
            ! function(t) {
                t[t.None = 0] = "None", t[t.Queued = 1] = "Queued", t[t.Rendering = 2] = "Rendering", t[t.Rendered = 3] = "Rendered"
            }(r || (r = {}));
            var l, h = function() {
                    function t(t) {
                        this.statusMap = {}, this.active = [], this.queued = [], this.panoRenderer = t, this.disablePreRendering()
                    }
                    return t.prototype.init = function() {}, t.prototype.dispose = function() {}, t.prototype.activate = function(t) {}, t.prototype.deactivate = function(t) {
                        this.disablePreRendering()
                    }, t.prototype.enablePreRendering = function() {
                        this.enabled = !0
                    }, t.prototype.disablePreRendering = function() {
                        this.enabled = !1
                    }, t.prototype.render = function() {}, t.prototype.beforeRender = function() {
                        this.enabled && this.processQueued()
                    }, t.prototype.tryPreRender = function(t) {
                        return this.getPreRenderState(t) === r.None && (this.queued.push(t), this.statusMap[t] = r.Queued, !0)
                    }, t.prototype.getPreRenderState = function(t) {
                        var e = this.statusMap[t];
                        return void 0 !== e ? e : r.None
                    }, t.prototype.processQueued = function() {
                        var t, e, n = this,
                            o = 0;
                        try {
                            for (var i = c(Object.keys(this.statusMap)), a = i.next(); !a.done; a = i.next()) {
                                var s = a.value;
                                this.statusMap[s] === r.Rendering && o++
                            }
                        } catch (e) {
                            t = {
                                error: e
                            }
                        } finally {
                            try {
                                a && !a.done && (e = i.return) && e.call(i)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                        if (0 === o && this.queued.length > 0) {
                            var u = this.queued.shift();
                            if (u) this.active.push(u), this.statusMap[u] = r.Rendering, this.panoRenderer.activateSweep(u).then((function() {
                                n.onRendered(u)
                            }))
                        }
                    }, t.prototype.cleanup = function(t) {
                        var e, n, o, i;
                        void 0 === t && (t = []);
                        var a = Object(u.b)(t),
                            s = [];
                        try {
                            for (var l = c(this.queued), h = l.next(); !h.done; h = l.next()) {
                                a[y = h.value] ? s.push(y) : this.statusMap[y] = r.None
                            }
                        } catch (t) {
                            e = {
                                error: t
                            }
                        } finally {
                            try {
                                h && !h.done && (n = l.return) && n.call(l)
                            } finally {
                                if (e) throw e.error
                            }
                        }
                        this.queued.length = 0, this.queued.push.apply(this.queued, s);
                        var p = [];
                        try {
                            for (var f = c(this.active), d = f.next(); !d.done; d = f.next()) {
                                var y;
                                a[y = d.value] ? p.push(y) : this.statusMap[y] = r.None
                            }
                        } catch (t) {
                            o = {
                                error: t
                            }
                        } finally {
                            try {
                                d && !d.done && (i = f.return) && i.call(f)
                            } finally {
                                if (o) throw o.error
                            }
                        }
                        this.active.length = 0, this.active.push.apply(this.active, p)
                    }, t.prototype.onRendered = function(t) {
                        this.statusMap[t] = r.Rendered
                    }, t
                }(),
                p = n(6),
                f = Object.freeze({
                    prerender: {
                        preRenderTourPanos: p.z("pre", 1)
                    }
                }),
                d = (l = function(t, e) {
                    return (l = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                }, function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    l(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                y = function(t, e, n, r) {
                    return new(n || (n = Promise))((function(o, i) {
                        function a(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function s(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new n((function(e) {
                                e(t.value)
                            })).then(a, s)
                        }
                        u((r = r.apply(t, e || [])).next())
                    }))
                },
                v = function(t, e) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function s(i) {
                        return function(s) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
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
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1], o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    i = e.call(t, a)
                                } catch (t) {
                                    i = [6, t], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, s])
                        }
                    }
                },
                m = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.name = "prerenderer-module", e.lastPrerendered = null, e
                    }
                    return d(e, t), e.prototype.init = function(t, e) {
                        return y(this, void 0, void 0, (function() {
                            var n, r, u = this;
                            return v(this, (function(c) {
                                switch (c.label) {
                                    case 0:
                                        return f.prerender.preRenderTourPanos || t.preRenderTourPanos ? (n = this, [4, e.market.waitForData(i.a)]) : [3, 3];
                                    case 1:
                                        return n.sweepData = c.sent(), r = this, [4, e.getModuleByParent(o.vb)];
                                    case 2:
                                        r.panoRenderer = c.sent().getRenderer(), this.preRenderer = new h(this.panoRenderer), e.addComponent(this, this.preRenderer), this.bindings.push(e.subscribe(a.a, (function(t) {
                                            u.preRenderer.enablePreRendering(), u.lastPrerendered = null, t.sweepIds && t.sweepIds.length >= 3 && (u.lastPrerendered = t.sweepIds[2], u.preRenderer.tryPreRender(u.lastPrerendered)), u.cleanup(u.sweepData), u.currentRestrictedSweeps = t.sweepIds
                                        }))), this.bindings.push(e.subscribe(s.a, (function(t) {
                                            u.preRenderer.disablePreRendering(), u.cleanup(u.sweepData, !0), u.currentRestrictedSweeps = null
                                        }))), c.label = 3;
                                    case 3:
                                        return [2]
                                }
                            }))
                        }))
                    }, e.prototype.getCurrentSweeps = function() {
                        return this.currentRestrictedSweeps || []
                    }, e.prototype.cleanup = function(t, e) {
                        void 0 === e && (e = !1);
                        var n = [];
                        t.transition.active ? (t.transition.from && n.push(t.transition.from), t.transition.to && n.push(t.transition.to)) : t.currentSweep && n.push(t.currentSweep), this.lastPrerendered && n.push(this.lastPrerendered), e && this.panoRenderer.freeAllTextures(n), this.preRenderer.cleanup(n)
                    }, e
                }(o.cb);
            e.default = m
        },
        1025: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(3),
                o = n(2),
                i = n(179),
                a = n(82),
                s = n(530),
                u = n(6),
                c = n(72);

            function l(t) {
                return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }
            var h, p, f = function() {
                    function t(t, e) {
                        for (var n, r = function(t) {
                                for (var e = t[0].width, n = t[0].height, r = t[0].duration, o = 1; o < t.length; o++) {
                                    if (t[o].width != e) throw "Frame " + (o + 1) + " has a different width";
                                    if (t[o].height != n) throw "Frame " + (o + 1) + " has a different height";
                                    if (t[o].duration < 0 || t[o].duration > 32767) throw "Frame " + (o + 1) + " has a weird duration (must be between 0 and 32767)";
                                    r += t[o].duration
                                }
                                return {
                                    duration: r,
                                    width: e,
                                    height: n
                                }
                            }(t), o = [{
                                id: 440786851,
                                data: [{
                                    data: 1,
                                    id: 17030
                                }, {
                                    data: 1,
                                    id: 17143
                                }, {
                                    data: 4,
                                    id: 17138
                                }, {
                                    data: 8,
                                    id: 17139
                                }, {
                                    data: "webm",
                                    id: 17026
                                }, {
                                    data: 2,
                                    id: 17031
                                }, {
                                    data: 2,
                                    id: 17029
                                }]
                            }, {
                                id: 408125543,
                                data: [{
                                    id: 357149030,
                                    data: [{
                                        data: 1e6,
                                        id: 2807729
                                    }, {
                                        data: "whammy",
                                        id: 19840
                                    }, {
                                        data: "whammy",
                                        id: 22337
                                    }, {
                                        data: (n = r.duration, [].slice.call(new Uint8Array(new Float64Array([n]).buffer), 0).map((function(t) {
                                            return String.fromCharCode(t)
                                        })).reverse().join("")),
                                        id: 17545
                                    }]
                                }, {
                                    id: 374648427,
                                    data: [{
                                        id: 174,
                                        data: [{
                                            data: 1,
                                            id: 215
                                        }, {
                                            data: 1,
                                            id: 29637
                                        }, {
                                            data: 0,
                                            id: 156
                                        }, {
                                            data: "und",
                                            id: 2274716
                                        }, {
                                            data: "V_VP8",
                                            id: 134
                                        }, {
                                            data: "VP8",
                                            id: 2459272
                                        }, {
                                            data: 1,
                                            id: 131
                                        }, {
                                            id: 224,
                                            data: [{
                                                data: r.width,
                                                id: 176
                                            }, {
                                                data: r.height,
                                                id: 186
                                            }]
                                        }]
                                    }]
                                }, {
                                    id: 475249515,
                                    data: []
                                }]
                            }], s = o[1], u = s.data[2], c = 0, l = 0; c < t.length;) {
                            var h = {
                                id: 187,
                                data: [{
                                    data: Math.round(l),
                                    id: 179
                                }, {
                                    id: 183,
                                    data: [{
                                        data: 1,
                                        id: 247
                                    }, {
                                        data: 0,
                                        size: 8,
                                        id: 241
                                    }]
                                }]
                            };
                            u.data.push(h);
                            var p = [],
                                f = 0;
                            do {
                                p.push(t[c]), f += t[c].duration, c++
                            } while (c < t.length && f < 3e4);
                            var d = 0,
                                y = {
                                    id: 524531317,
                                    data: [{
                                        data: Math.round(l),
                                        id: 231
                                    }].concat(p.map((function(t) {
                                        var e = a({
                                            discardable: 0,
                                            frame: t.data.slice(4),
                                            invisible: 0,
                                            keyframe: 1,
                                            lacing: 0,
                                            trackNum: 1,
                                            timecode: Math.round(d)
                                        });
                                        return d += t.duration, {
                                            data: e,
                                            id: 163
                                        }
                                    })))
                                };
                            s.data.push(y), l += f
                        }
                        for (var v = 0, m = 0; m < s.data.length; m++) {
                            m >= 3 && (u.data[m - 3].data[1].data[1].data = v);
                            var w = i([s.data[m]], e);
                            v += w.size || w.byteLength || w.length, 2 != m && (s.data[m] = w)
                        }
                        return i(o, e)
                    }

                    function e(t) {
                        for (var e = []; t > 0;) e.push(255 & t), t >>= 8;
                        return new Uint8Array(e.reverse())
                    }

                    function n(t, e) {
                        for (var n = new Uint8Array(e), r = e - 1; r >= 0; r--) n[r] = 255 & t, t >>= 8;
                        return n
                    }

                    function r(t) {
                        for (var e = new Uint8Array(t.length), n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
                        return e
                    }

                    function o(t) {
                        var e = [];
                        t = (t.length % 8 ? new Array(9 - t.length % 8).join("0") : "") + t;
                        for (var n = 0; n < t.length; n += 8) e.push(parseInt(t.substr(n, 8), 2));
                        return new Uint8Array(e)
                    }

                    function i(t, a) {
                        for (var s = [], u = 0; u < t.length; u++)
                            if ("id" in t[u]) {
                                var c = t[u].data;
                                if ("object" == l(c) && (c = i(c, a)), "number" == typeof c && (c = "size" in t[u] ? n(c, t[u].size) : o(c.toString(2))), "string" == typeof c && (c = r(c)), c.length);
                                var h = c.size || c.byteLength || c.length,
                                    p = Math.ceil(Math.ceil(Math.log(h) / Math.log(2)) / 8),
                                    f = h.toString(2),
                                    d = new Array(7 * p + 7 + 1 - f.length).join("0") + f,
                                    y = new Array(p).join("0") + "1" + d;
                                s.push(e(t[u].id)), s.push(o(y)), s.push(c)
                            } else s.push(t[u]);
                        if (a) {
                            var v = function t(e, n) {
                                null == n && (n = []);
                                for (var r = 0; r < e.length; r++) "object" == l(e[r]) ? t(e[r], n) : n.push(e[r]);
                                return n
                            }(s);
                            return new Uint8Array(v)
                        }
                        return new Blob(s, {
                            type: "video/webm"
                        })
                    }

                    function a(t) {
                        var e = 0;
                        if (t.keyframe && (e |= 128), t.invisible && (e |= 8), t.lacing && (e |= t.lacing << 1), t.discardable && (e |= 1), t.trackNum > 127) throw "TrackNumber > 127 not supported";
                        return [128 | t.trackNum, t.timecode >> 8, 255 & t.timecode, e].map((function(t) {
                            return String.fromCharCode(t)
                        })).join("") + t.frame
                    }

                    function s(t) {
                        for (var e, n, r = t.RIFF[0].WEBP[0], o = r.indexOf("*"), i = 0, a = []; i < 4; i++) a[i] = r.charCodeAt(o + 3 + i);
                        return e = 16383 & (n = a[1] << 8 | a[0]), n >> 14, (n = a[3] << 8 | a[2]) >> 14, {
                            width: e,
                            height: 16383 & n,
                            data: r,
                            riff: t
                        }
                    }

                    function u(t) {
                        for (var e = 0, n = {}; e < t.length;) {
                            var r = t.substr(e, 4);
                            if (n[r] = n[r] || [], "RIFF" == r || "LIST" == r) {
                                var o = parseInt(t.substr(e + 4, 4).split("").map((function(t) {
                                        var e = t.charCodeAt(0).toString(2);
                                        return new Array(8 - e.length + 1).join("0") + e
                                    })).join(""), 2),
                                    i = t.substr(e + 4 + 4, o);
                                e += 8 + o, n[r].push(u(i))
                            } else "WEBP" == r ? (n[r].push(t.substr(e + 8)), e = t.length) : (n[r].push(t.substr(e + 4)), e = t.length)
                        }
                        return n
                    }

                    function c(t, e) {
                        this.frames = [], this.duration = 1e3 / t, this.quality = e || .8
                    }
                    return c.prototype.add = function(t, e) {
                        if (void 0 !== e && this.duration) throw "you can't pass a duration if the fps is set";
                        if (void 0 === e && !this.duration) throw "if you don't have the fps set, you need to have durations here.";
                        if (t.canvas && (t = t.canvas), t.toDataURL) t = t.toDataURL("image/webp", this.quality);
                        else if ("string" != typeof t) throw "frame must be a a HTMLCanvasElement, a CanvasRenderingContext2D or a DataURI formatted string";
                        if ("string" == typeof t && !/^data:image\/webp;base64,/gi.test(t)) throw "Input must be formatted properly as a base64 encoded DataURI of type image/webp";
                        this.frames.push({
                            image: t,
                            duration: e || this.duration
                        })
                    }, c.prototype.encodeFrames = function(t) {
                        if (this.frames[0].image instanceof ImageData) {
                            var e = this.frames,
                                n = document.createElement("canvas"),
                                r = n.getContext("2d");
                            n.width = this.frames[0].image.width, n.height = this.frames[0].image.height;
                            var o = function(i) {
                                console.log("encodeFrame", i);
                                var a = e[i];
                                r.putImageData(a.image, 0, 0), a.image = n.toDataURL("image/webp", this.quality), i < e.length - 1 ? setTimeout((function() {
                                    o(i + 1)
                                }), 1) : t()
                            }.bind(this);
                            o(0)
                        } else t()
                    }, c.prototype.compile = function(e, n) {
                        this.encodeFrames(function() {
                            var r = new t(this.frames.map((function(t) {
                                var e = s(u(atob(t.image.slice(23))));
                                return e.duration = t.duration, e
                            })), e);
                            n(r)
                        }.bind(this))
                    }, {
                        Video: c,
                        fromImageArray: function(e, n, r) {
                            return t(e.map((function(t) {
                                var e = s(u(atob(t.slice(23))));
                                return e.duration = 1e3 / n, e
                            })), r)
                        },
                        toWebM: t
                    }
                }(),
                d = function() {
                    function t() {
                        this._dateNow = Date.now, this._performanceNow = performance.now, this.nowOverride = 0
                    }
                    return t.prototype.slowTime = function(t) {
                        var e = this;
                        this.fps = t, this.nowOverride = Date.now(), Date.now = function() {
                            return e.nowOverride
                        }, performance.now = function() {
                            return e.nowOverride
                        }
                    }, t.prototype.tick = function() {
                        this.nowOverride += 1e3 / this.fps
                    }, t.prototype.resetTime = function() {
                        Date.now = this._dateNow, performance.now = this._performanceNow
                    }, t
                }(),
                y = n(584),
                v = n(108),
                m = (h = function(t, e) {
                    return (h = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                }, function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    h(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                w = function(t, e, n, r) {
                    return new(n || (n = Promise))((function(o, i) {
                        function a(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function s(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new n((function(e) {
                                e(t.value)
                            })).then(a, s)
                        }
                        u((r = r.apply(t, e || [])).next())
                    }))
                },
                g = function(t, e) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function s(i) {
                        return function(s) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
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
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1], o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    i = e.call(t, a)
                                } catch (t) {
                                    i = [6, t], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, s])
                        }
                    }
                },
                b = new r.a("video-recorder");
            ! function(t) {
                t[t.STOPPED = 0] = "STOPPED", t[t.RECORDING = 1] = "RECORDING"
            }(p || (p = {}));
            var T = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.name = "video-recorder-module", e.state = p.STOPPED, e.frostMage = new d, e
                }
                return m(e, t), e.prototype.init = function(t, e) {
                    return w(this, void 0, void 0, (function() {
                        var t, n, r = this;
                        return g(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    return t = this, [4, e.getModule(a.default)];
                                case 1:
                                    return t.settingsModule = i.sent(), n = this, [4, e.getModule(o.Nb)];
                                case 2:
                                    return n.webglRenderer = i.sent(), this.engine = e, this.settingsModule.registerButton("Tour Recorder (Chrome Only)", "Download 1080p @ 60", (function() {
                                        r.state === p.STOPPED && r.record(1920, 1080, 60)
                                    })), this.settingsModule.registerButton("Tour Recorder (Chrome Only)", "Download 720p @ 30", (function() {
                                        r.state === p.STOPPED && r.record(1280, 720, 30)
                                    })), this.settingsModule.registerButton("Tour Recorder (Chrome Only)", "Download instagram", (function() {
                                        r.state === p.STOPPED && r.record(1080, 1080, 30)
                                    })), this.settingsModule.registerButton("Tour Recorder (Chrome Only)", "Download instagram story", (function() {
                                        r.state === p.STOPPED && r.record(1080, 1920, 30)
                                    })), this.settingsModule.registerButton("Tour Recorder (Chrome Only)", "Stop & download current", (function() {
                                        r.state === p.RECORDING && r.stop()
                                    })), [2]
                            }
                        }))
                    }))
                }, e.prototype.record = function(t, e, n) {
                    return w(this, void 0, void 0, (function() {
                        var r, o, a = this;
                        return g(this, (function(u) {
                            switch (u.label) {
                                case 0:
                                    return this.state !== p.STOPPED ? (b.warn("Can't start recording... we're already recording!"), [2]) : (b.info("Starting recording of tour. Now is a good time to get a coffee :)"), this.state = p.RECORDING, this.encoder = new f.Video(n), this.frostMage.slowTime(n), [4, this.engine.commandBinder.issueCommand(new c.a({
                                        resizeDimensions: [{
                                            property: c.b.width,
                                            setDimension: t,
                                            duration: 0
                                        }, {
                                            property: c.b.height,
                                            setDimension: e,
                                            duration: 0
                                        }]
                                    }))]);
                                case 1:
                                    return u.sent(), [4, this.engine.commandBinder.issueCommand(new i.a)];
                                case 2:
                                    return u.sent(), r = this.engine.subscribe(s.f, (function() {
                                        r.cancel(), a.state === p.RECORDING && a.stop()
                                    })), o = this, this.engine.startGenerator((function() {
                                        return g(this, (function(t) {
                                            switch (t.label) {
                                                case 0:
                                                    return o.state !== p.RECORDING ? [3, 2] : (o.encoder.add(o.webglRenderer.cwfRenderer.renderer.getContext()), o.frostMage.tick(), [4, new v.b]);
                                                case 1:
                                                    return t.sent(), [3, 0];
                                                case 2:
                                                    return [2]
                                            }
                                        }))
                                    })), [2]
                            }
                        }))
                    }))
                }, e.prototype.stop = function() {
                    return w(this, void 0, void 0, (function() {
                        return g(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.state !== p.RECORDING ? (b.warn("Can't stop recording, we weren't recording at all"), [2]) : (this.frostMage.resetTime(), this.state = p.STOPPED, [4, this.engine.commandBinder.issueCommand(new c.a(Object(y.b)(0)))]);
                                case 1:
                                    return t.sent(), b.info("Encoding tour to video..."), this.encoder.compile(!1, (function(t) {
                                        b.info("Tour encoded! Prompting user to download."), Object(u.v)(t, "tour.webm")
                                    })), [2]
                            }
                        }))
                    }))
                }, e
            }(o.Kb);
            e.default = T
        },
        1028: function(t, e, n) {
            "use strict";
            n.r(e);
            var r, o = n(2),
                i = n(20),
                a = n(29),
                s = n(54),
                u = n(65),
                c = function() {
                    function t(e, n, r, o, i) {
                        this.viewmodeData = r, this.sweepData = o, this.scene = e, this.mesh = new a.a(t.planeGeometry, new s.a({
                            transparent: !0,
                            map: n,
                            depthWrite: !1
                        })), this.mesh.lookAt(this.mesh.position.clone().setY(1)), this.mesh.layers.mask = i.mask
                    }
                    return t.prototype.init = function() {}, t.prototype.render = function(t) {
                        var e = this.sweepData && this.sweepData.currentSweep && !this.sweepData.isSweepUnaligned(this.sweepData.currentSweep) && this.sweepData.getSweep(this.sweepData.currentSweep);
                        this.viewmodeData && this.viewmodeData.currentMode !== i.a.Panorama && this.viewmodeData.currentMode !== i.a.Transition && e ? (this.move(e.floorPosition), this.mesh.material.opacity = 1) : this.resetMesh()
                    }, t.prototype.dispose = function() {}, t.prototype.activate = function(t) {
                        this.scene.add(this.mesh)
                    }, t.prototype.deactivate = function(t) {
                        this.scene.remove(this.mesh)
                    }, t.prototype.move = function(e) {
                        this.mesh.position.copy(e).setY(e.y + t.floorOffset)
                    }, t.prototype.resetMesh = function() {
                        this.mesh.material.opacity = 0
                    }, t.floorOffset = .01, t.planeGeometry = new u.b(.5, .5), t
                }(),
                l = n(83),
                h = n(113),
                p = n(60),
                f = n(806),
                d = n.n(f),
                y = (r = function(t, e) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                }, function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                v = function(t, e, n, r) {
                    return new(n || (n = Promise))((function(o, i) {
                        function a(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function s(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new n((function(e) {
                                e(t.value)
                            })).then(a, s)
                        }
                        u((r = r.apply(t, e || [])).next())
                    }))
                },
                m = function(t, e) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function s(i) {
                        return function(s) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
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
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1], o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    i = e.call(t, a)
                                } catch (t) {
                                    i = [6, t], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, s])
                        }
                    }
                },
                w = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.name = "current-pano-marker", e
                    }
                    return y(e, t), e.prototype.init = function(t, e) {
                        return v(this, void 0, void 0, (function() {
                            var t, n, r, i, a, s;
                            return m(this, (function(u) {
                                switch (u.label) {
                                    case 0:
                                        return t = Object(l.a)(d.a), [4, e.getModule(o.Nb)];
                                    case 1:
                                        return n = u.sent(), r = n.getScene(), [4, e.market.waitForData(p.a)];
                                    case 2:
                                        return i = u.sent(), [4, e.market.waitForData(h.a)];
                                    case 3:
                                        return a = u.sent(), s = e.claimRenderLayer(this.name), e.addComponent(this, new c(r.scene, t, a, i, s)), [2]
                                }
                            }))
                        }))
                    }, e
                }(o.g);
            e.default = w
        },
        1029: function(t, e, n) {
            "use strict";
            n.r(e);
            var r, o = n(2),
                i = n(17),
                a = n(661),
                s = n(662),
                u = n(596),
                c = n(63),
                l = n(67),
                h = n(529),
                p = n(31),
                f = n(27),
                d = n(3),
                y = n(574),
                v = n(68),
                m = function(t) {
                    var e = "function" == typeof Symbol && t[Symbol.iterator],
                        n = 0;
                    return e ? e.call(t) : {
                        next: function() {
                            return t && n >= t.length && (t = void 0), {
                                value: t && t[n++],
                                done: !t
                            }
                        }
                    }
                },
                w = new d.a("pin-mesh"),
                g = function() {
                    function t(t, e, n, r, o) {
                        var a = this;
                        this.sweepData = t, this.scene = e, this.sweepTextureLoader = n, this.input = r, this.container = new i.a, this.bindings = [], this.sweepFocused = null, this.visibilityFilter = function() {
                            return !0
                        }, this.selectSweep = function() {
                            var t = a.sweepData.selectedSweep.value;
                            if (t) {
                                a.issueCommand(new y.d(t.id, !0, 0));
                                var e = a.dataToMeshMap[t.id];
                                e && e.setPinHover(1)
                            }
                        }, this.hoverSweep = function(t, e) {
                            a.issueCommand(new y.c(t, e, 0));
                            var n = a.dataToMeshMap[t];
                            n && n.setPinHover(e ? 1 : 0)
                        }, this.meshes = [], this.meshToDataMap = {}, this.dataToMeshMap = {};
                        var s = c.b.MANUAL;
                        t.iterate((function(t) {
                            if (t.alignmentType !== c.a.ALIGNED) {
                                t.placementType === c.b.MANUAL && a.createPinMesh(t, o);
                                var e = t.placementType;
                                a.bindings.push(t.onPropertyChanged("placementType", (function(n) {
                                    e !== s && n === s && a.createPinMesh(t, o), e === s && n !== s && a.removePinMesh(t), e = n
                                }))), a.bindings.push(t.onChanged((function() {
                                    h.j(t) && a.updatePinMeshPosition(t.id, t.position)
                                })))
                            }
                        }))
                    }
                    return t.prototype.updatePinMeshPosition = function(t, e) {
                        this.mapSweepToMesh(t).updatePosition(e)
                    }, t.prototype.mapSweepToMesh = function(t) {
                        return this.dataToMeshMap[t]
                    }, t.prototype.mapColliderToSweep = function(t) {
                        var e = t.hasOwnProperty("collider") ? t : t.parent;
                        if (e) {
                            var n = this.meshToDataMap[e.id];
                            if (n) return n.sweep
                        }
                        return null
                    }, t.prototype.filter = function(t) {
                        var e, n;
                        this.visibilityFilter = t;
                        try {
                            for (var r = m(this.meshes), o = r.next(); !o.done; o = r.next()) {
                                var i = o.value;
                                this.filterMesh(i)
                            }
                        } catch (t) {
                            e = {
                                error: t
                            }
                        } finally {
                            try {
                                o && !o.done && (n = r.return) && n.call(r)
                            } finally {
                                if (e) throw e.error
                            }
                        }
                    }, t.prototype.init = function() {}, t.prototype.dispose = function() {
                        for (var t in this.meshToDataMap) {
                            var e = this.meshToDataMap[t];
                            this.removePinMesh(e.sweep)
                        }
                    }, t.prototype.render = function(t) {
                        var e, n;
                        try {
                            for (var r = m(this.meshes), o = r.next(); !o.done; o = r.next()) {
                                o.value.render(t)
                            }
                        } catch (t) {
                            e = {
                                error: t
                            }
                        } finally {
                            try {
                                o && !o.done && (n = r.return) && n.call(r)
                            } finally {
                                if (e) throw e.error
                            }
                        }
                    }, t.prototype.activate = function(t) {
                        var e = this;
                        this.engine = t, this.selectSub = this.sweepData.selectedSweep.onChanged(this.selectSweep), this.issueCommand = t.commandBinder.issueCommand.bind(t.commandBinder), this.bindings.push(this.input.registerMeshHandler(p.e, v.a.isType(u.a), (function(t, n) {
                            return e.onHoverEvent(n, !0)
                        }))), this.bindings.push(this.input.registerMeshHandler(p.r, v.a.isType(u.a), (function(t, n) {
                            return e.onHoverEvent(n, !1)
                        }))), this.scene.add(this.container)
                    }, t.prototype.deactivate = function(t) {
                        var e, n;
                        try {
                            for (var r = m(this.bindings), o = r.next(); !o.done; o = r.next()) {
                                o.value.cancel()
                            }
                        } catch (t) {
                            e = {
                                error: t
                            }
                        } finally {
                            try {
                                o && !o.done && (n = r.return) && n.call(r)
                            } finally {
                                if (e) throw e.error
                            }
                        }
                        this.bindings.length = 0, this.selectSub.cancel(), this.scene.remove(this.container)
                    }, t.prototype.getMeshes = function() {
                        return this.meshToDataMap
                    }, t.prototype.setPinVisualsSelected = function(t, e) {
                        null === this.sweepFocused && this.dataToMeshMap[t] && this.dataToMeshMap[t].setPinHover(e ? 1 : 0, !1)
                    }, t.prototype.lockSelection = function(t) {
                        var e = this;
                        if (t && t.id !== this.sweepFocused) {
                            this.hover(t, !0), this.sweepFocused = t.id, this.engine.broadcast(new a.a(t.id, !0)), this.deselectCallback = function() {
                                e.clearMenu(t, n, r), e.sweepData.selectedSweep.value = null
                            };
                            var n = this.input.registerUnfilteredHandler(p.a, (function(t) {
                                    return e.deselectCallback()
                                })),
                                r = this.input.registerUnfilteredHandler(p.b, (function(t) {
                                    return e.deselectCallback()
                                }));
                            return window.addEventListener("mousedown", this.deselectCallback), !0
                        }
                        return !1
                    }, t.prototype.createPinMesh = function(t, e) {
                        var n = new u.b(t.position, null, e);
                        this.meshes.push(n), this.dataToMeshMap[t.id] = n, this.meshToDataMap[n.id] = {
                            id: n.id,
                            sweep: t
                        }, this.container.add(n), this.filterMesh(n), this.sweepTextureLoader.loadFace(t.id, l.d.BASE, 1, {
                            flipY: !0
                        }).then((function(t) {
                            n.material.uniforms.tPinHole.value = t
                        })).catch((function(e) {
                            w.error(t.id + " failed to load texture: " + e)
                        }))
                    }, t.prototype.removePinMesh = function(t) {
                        var e = this.dataToMeshMap[t.id],
                            n = this.meshes.findIndex((function(t) {
                                return t.id === e.id
                            }));
                        this.meshes.splice(n, 1), this.container.remove(e), this.deactivateMesh(e), delete this.meshToDataMap[e.id], delete this.dataToMeshMap[t.id], e.dispose()
                    }, t.prototype.filterMesh = function(t) {
                        var e = this.meshToDataMap[t.id];
                        if (e) {
                            var n = e.sweep;
                            this.visibilityFilter(n) ? this.activateMesh(t) : this.deactivateMesh(t)
                        }
                    }, t.prototype.onHoverEvent = function(t, e) {
                        var n = this.mapColliderToSweep(t);
                        n && this.hover(n, e)
                    }, t.prototype.hover = function(t, e, n) {
                        void 0 === n && (n = !1), this.engine.broadcast(new s.a(t, e)), (n || null === this.sweepFocused) && this.hoverSweep(t.id, e)
                    }, t.prototype.clearMenu = function(e, n, r) {
                        var o = this;
                        n.cancel(), r.cancel(), window.removeEventListener("mousedown", this.deselectCallback), this.sweepFocused = null, Object(f.d)(t.MENU_CLEAR_DEBOUNCE).then((function() {
                            o.hover(e, !1, !0)
                        }))
                    }, t.prototype.activateMesh = function(t) {
                        this.input.registerMesh(t.collider, !1), t.activate()
                    }, t.prototype.deactivateMesh = function(t) {
                        this.input.unregisterMesh(t.collider);
                        var e = this.meshToDataMap[t.id];
                        e && (this.hoverSweep(e.sweep.id, !1), t.deactivate())
                    }, t.MENU_CLEAR_DEBOUNCE = 100, t
                }(),
                b = n(61),
                T = n(663),
                P = n(549),
                D = n(113),
                S = n(77),
                x = n(213),
                M = n(20),
                _ = n(260),
                O = n(188),
                k = n(548),
                C = (r = function(t, e) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                }, function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                A = function(t, e, n, r) {
                    return new(n || (n = Promise))((function(o, i) {
                        function a(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function s(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new n((function(e) {
                                e(t.value)
                            })).then(a, s)
                        }
                        u((r = r.apply(t, e || [])).next())
                    }))
                },
                E = function(t, e) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function s(i) {
                        return function(s) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
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
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1], o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    i = e.call(t, a)
                                } catch (t) {
                                    i = [6, t], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, s])
                        }
                    }
                },
                R = function(t, e) {
                    var n = "function" == typeof Symbol && t[Symbol.iterator];
                    if (!n) return t;
                    var r, o, i = n.call(t),
                        a = [];
                    try {
                        for (;
                            (void 0 === e || e-- > 0) && !(r = i.next()).done;) a.push(r.value)
                    } catch (t) {
                        o = {
                            error: t
                        }
                    } finally {
                        try {
                            r && !r.done && (n = i.return) && n.call(i)
                        } finally {
                            if (o) throw o.error
                        }
                    }
                    return a
                },
                I = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.name = "sweep-pin-mesh", e.onChange = function() {
                            e.pinRenderer.filter((function(t) {
                                if (!e.settingsData.tryGetProperty(_.a, !0)) return !1;
                                if (e.selectedSweep && e.selectedSweep === t) return !1;
                                if (e.viewmodeData.transition.active && e.viewmodeData.transition.to === M.a.Panorama) return !1;
                                var n = -1 === e.floorsData.currentFloor || e.floorsData.currentFloor === t.floor,
                                    r = e.viewmodeData.closestMode === M.a.Dollhouse || e.viewmodeData.closestMode === M.a.Floorplan;
                                return n && r
                            }))
                        }, e
                    }
                    return C(e, t), e.prototype.init = function(t, e) {
                        return A(this, void 0, void 0, (function() {
                            var t, n, r, i = this;
                            return E(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, Promise.all([e.getModule(o.R), e.getModule(o.Nb), e.getModule(o.x), e.market.waitForData(k.a), e.market.waitForData(b.a), e.market.waitForData(S.a), e.market.waitForData(O.c), e.market.waitForData(D.a)])];
                                    case 1:
                                        return t = R.apply(void 0, [a.sent(), 8]), this.model = t[0], this.webglRenderer = t[1], this.input = t[2], this.sweepViewData = t[3], this.cameraData = t[4], this.settingsData = t[5], this.floorsData = t[6], this.viewmodeData = t[7], n = this.webglRenderer.getScene().scene, r = new P.a(this.model.getSignedUrls()), this.pinRenderer = new g(this.sweepViewData, n, r, this.input, this.cameraData), e.addComponent(this, this.pinRenderer), this.settingsData.onPropertyChanged(_.a, this.onChange), this.bindings.push(this.floorsData.onChanged(this.onChange), this.viewmodeData.onChanged(this.onChange), e.subscribe(x.d, (function(t) {
                                            i.selectedSweep = i.sweepViewData.getSweep(t.sweepId), i.onChange()
                                        })), e.subscribe(x.a, (function(t) {
                                            i.selectedSweep = null, i.onChange()
                                        })), e.commandBinder.addBinding(T.a, (function(t) {
                                            return A(i, void 0, void 0, (function() {
                                                return E(this, (function(e) {
                                                    return this.pinRenderer.setPinVisualsSelected(t.id, t.selected), [2]
                                                }))
                                            }))
                                        }))), this.onChange(), [2]
                                }
                            }))
                        }))
                    }, e.prototype.mapColliderToSweep = function(t) {
                        return this.pinRenderer.mapColliderToSweep(t)
                    }, e.prototype.select = function(t) {
                        var e = this.mapColliderToSweep(t);
                        return !!e && this.pinRenderer.lockSelection(e)
                    }, e.prototype.mapSweepToMesh = function(t) {
                        return this.pinRenderer.mapSweepToMesh(t)
                    }, e.prototype.updatePosition = function(t, e) {
                        this.pinRenderer.updatePinMeshPosition(t, e)
                    }, e
                }(o.Ab);
            e.default = I
        },
        1031: function(t, e, n) {
            "use strict";
            n.r(e);
            var r, o = n(6),
                i = n(132),
                a = Object(o.z)("geodist", Object(i.a)(Object(o.z)("geodistft", 20))),
                s = n(2),
                u = n(63),
                c = n(20),
                l = n(62),
                h = n(61),
                p = n(60),
                f = n(113),
                d = n(772),
                y = n(218),
                v = n(77),
                m = n(260),
                w = (r = function(t, e) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                }, function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                g = function(t, e, n, r) {
                    return new(n || (n = Promise))((function(o, i) {
                        function a(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function s(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new n((function(e) {
                                e(t.value)
                            })).then(a, s)
                        }
                        u((r = r.apply(t, e || [])).next())
                    }))
                },
                b = function(t, e) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function s(i) {
                        return function(s) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
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
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1], o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    i = e.call(t, a)
                                } catch (t) {
                                    i = [6, t], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, s])
                        }
                    }
                },
                T = function(t, e) {
                    var n = "function" == typeof Symbol && t[Symbol.iterator];
                    if (!n) return t;
                    var r, o, i = n.call(t),
                        a = [];
                    try {
                        for (;
                            (void 0 === e || e-- > 0) && !(r = i.next()).done;) a.push(r.value)
                    } catch (t) {
                        o = {
                            error: t
                        }
                    } finally {
                        try {
                            r && !r.done && (n = i.return) && n.call(i)
                        } finally {
                            if (o) throw o.error
                        }
                    }
                    return a
                },
                P = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.name = "sweep-portal-navigation", e.onChange = function() {
                            e.portalRenderer.filter((function(t) {
                                if (!e.settingsData.tryGetProperty(m.a, !0)) return d.c.HIDE;
                                if (e.viewmodeData.closestMode !== c.a.Panorama) return d.c.HIDE;
                                var n = e.sweepData.getSweep(e.sweepData.currentSweep || "");
                                if (n)
                                    if (n.alignmentType === u.a.ALIGNED) {
                                        if (t.fromInterior && t.toExterior && t.position.distanceTo(n.position) < a) return d.c.SHOW
                                    } else if (n.placementType === u.b.MANUAL && t.fromSweep.id === n.id) return d.c.ONTOP;
                                return d.c.HIDE
                            }))
                        }, e
                    }
                    return w(e, t), e.prototype.init = function(t, e) {
                        return g(this, void 0, void 0, (function() {
                            var t, n, r = this;
                            return b(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, Promise.all([e.getModule(s.bb), e.market.waitForData(h.a), e.getModule(s.Mb), e.market.waitForData(f.a), e.market.waitForData(p.a), e.market.waitForData(v.a)])];
                                    case 1:
                                        return t = T.apply(void 0, [o.sent(), 6]), this.portalRenderer = t[0], this.cameraData = t[1], this.viewmodeModule = t[2], this.viewmodeData = t[3], this.sweepData = t[4], this.settingsData = t[5], n = function(t, n) {
                                            r.viewmodeData.currentMode && r.cameraData.canTransition() && (r.viewmodeData.currentMode !== c.a.Panorama ? r.viewmodeModule.switchToMode(c.a.Panorama, l.a.FadeToBlack, {
                                                sweepID: t,
                                                rotation: n
                                            }) : e.commandBinder.issueCommand(new y.a({
                                                sweep: t,
                                                rotation: n,
                                                transition: l.a.FadeToBlack
                                            })))
                                        }, this.settingsData.onPropertyChanged(m.a, this.onChange), this.bindings.push(e.subscribe(d.a, (function(t) {
                                            n(t.toSweep.id)
                                        })), this.viewmodeData.onChanged(this.onChange), this.sweepData.onChanged(this.onChange)), this.onChange(), [2]
                                }
                            }))
                        }))
                    }, e
                }(s.Cb);
            e.default = P
        },
        1033: function(t, e, n) {
            "use strict";
            n.r(e);
            var r, o = n(1),
                i = n(16),
                a = n(13),
                s = n(2),
                u = n(10),
                c = n(20),
                l = n(62),
                h = n(61),
                p = n(216),
                f = n(219),
                d = n(577),
                y = n(60),
                v = n(529),
                m = n(541),
                w = n(129),
                g = n(218),
                b = n(3),
                T = n(56),
                P = n(14),
                D = n(73),
                S = {
                    anyDistance: !0,
                    visibleDistance: 8,
                    cameraClearance: .1
                },
                x = {
                    tiltTolerance: 25
                },
                M = n(501),
                _ = (r = function(t, e) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                }, function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                O = function(t, e, n, r) {
                    return new(n || (n = Promise))((function(o, i) {
                        function a(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function s(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new n((function(e) {
                                e(t.value)
                            })).then(a, s)
                        }
                        u((r = r.apply(t, e || [])).next())
                    }))
                },
                k = function(t, e) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function s(i) {
                        return function(s) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
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
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1], o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    i = e.call(t, a)
                                } catch (t) {
                                    i = [6, t], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, s])
                        }
                    }
                },
                C = function(t) {
                    var e = "function" == typeof Symbol && t[Symbol.iterator],
                        n = 0;
                    return e ? e.call(t) : {
                        next: function() {
                            return t && n >= t.length && (t = void 0), {
                                value: t && t[n++],
                                done: !t
                            }
                        }
                    }
                },
                A = function(t, e) {
                    var n = "function" == typeof Symbol && t[Symbol.iterator];
                    if (!n) return t;
                    var r, o, i = n.call(t),
                        a = [];
                    try {
                        for (;
                            (void 0 === e || e-- > 0) && !(r = i.next()).done;) a.push(r.value)
                    } catch (t) {
                        o = {
                            error: t
                        }
                    } finally {
                        try {
                            r && !r.done && (n = i.return) && n.call(i)
                        } finally {
                            if (o) throw o.error
                        }
                    }
                    return a
                },
                E = new b.a("mattertag-navigation"),
                R = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.name = "navigation", e.navigateToTag = function(t) {
                            return O(e, void 0, Promise, (function() {
                                var e, n;
                                return k(this, (function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return r.trys.push([0, 2, , 9]), [4, this.tryNavigateToTag(t)];
                                        case 1:
                                            return r.sent(), [3, 9];
                                        case 2:
                                            return e = r.sent(), E.debug(e), t.transition !== l.a.Interpolate ? [2, this.goToNearestSweep(t)] : [4, this.commandBinder.issueCommand(new w.a(w.b.DOLLHOUSE, l.a.Interpolate))];
                                        case 3:
                                            r.sent(), r.label = 4;
                                        case 4:
                                            return r.trys.push([4, 6, , 8]), [4, this.tryNavigateToTag(t)];
                                        case 5:
                                            return r.sent(), [3, 8];
                                        case 6:
                                            return n = r.sent(), E.debug(n), [4, this.goToNearestSweep(t)];
                                        case 7:
                                            return r.sent(), [3, 8];
                                        case 8:
                                            return [3, 9];
                                        case 9:
                                            return [2]
                                    }
                                }))
                            }))
                        }, e.tryNavigateToTag = function(t) {
                            var n = t.tagId,
                                r = t.transition,
                                i = t.onSweepChosen,
                                a = t.tagDirection;
                            return O(e, void 0, void 0, (function() {
                                var t, e, s, u, h, p, f, d, y, w, b, T, P, S, x, M, _, O, A, E, R, I, F, j, U;
                                return k(this, (function(k) {
                                    switch (k.label) {
                                        case 0:
                                            if (!this.cameraData.canTransition() || !this.sweepData.canTransition()) return [2];
                                            s = [], u = [], h = this.tagData.getTag(n), p = h.anchorPosition.clone().add(h.stemVector), s.push(v.b()), s.push(v.c()), this.viewmodeModule.currentMode === c.a.Panorama && (.5, f = this.sweepData.currentSweep, d = this.sweepData.getSweep(f), y = d.position.clone().sub(p).normalize(), s.push(v.a(p, y, .5)), s.push(v.d(d)), u.push(m.b(p, y))), s.push(this.withinLatitudeFilter(p)), s.push(this.notTooCloseFilter(p)), s.push(this.notTooFarFilter(p)), -2, u.push(m.d(p, -2)), w = this.sweepData.sortByScore(s, u), this.raycaster.getRaycaster().enableForGroup(this.mattertagRaycastGroup, !1), b = new o.a, T = null, P = !1;
                                            try {
                                                for (S = C(w), x = S.next(); !x.done; x = S.next())
                                                    if (M = x.value, _ = M.sweep, b.copy(p).sub(_.position).normalize(), O = _.position.distanceTo(p), 0 === (A = this.raycaster.cast(_.position, b)).length || A[0].distance > O) {
                                                        P = !0, E = this.getSweepToTagRotation(_.position, p, a), R = this.cameraData.pose.projection.asThreeMatrix4(), I = this.cameraData, F = I.width, j = I.height, U = Object(D.b)(p, _.position, E, F, j, R), i && i(U), T = this.viewmodeModule.currentMode !== c.a.Panorama ? this.viewmodeModule.switchToMode(c.a.Panorama, r, {
                                                            rotation: E,
                                                            sweepID: _.id
                                                        }) : this.commandBinder.issueCommand(new g.a({
                                                            transition: r || l.a.Interpolate,
                                                            sweep: _.id,
                                                            rotation: E
                                                        }));
                                                        break
                                                    }
                                            } catch (e) {
                                                t = {
                                                    error: e
                                                }
                                            } finally {
                                                try {
                                                    x && !x.done && (e = S.return) && e.call(S)
                                                } finally {
                                                    if (t) throw t.error
                                                }
                                            }
                                            if (!P) throw new Error("No direct Mattertag navigation found.");
                                            return T ? [4, T] : [3, 2];
                                        case 1:
                                            k.sent(), k.label = 2;
                                        case 2:
                                            return this.raycaster.getRaycaster().enableForGroup(this.mattertagRaycastGroup, !0), [2]
                                    }
                                }))
                            }))
                        }, e.notTooCloseFilter = function(t) {
                            return function(e) {
                                return Math.abs(e.position.x - t.x) > S.cameraClearance || Math.abs(e.position.z - t.z) > S.cameraClearance
                            }
                        }, e.notTooFarFilter = function(t) {
                            return function(e) {
                                return !!S.anyDistance || e.position.distanceTo(t) > S.visibleDistance
                            }
                        }, e.withinLatitudeFilter = function(t) {
                            return function(e) {
                                var n = (new o.a).copy(t).sub(e.position),
                                    r = -Math.atan(n.y / Math.sqrt(n.x * n.x + n.z * n.z)),
                                    i = a.a.degToRad(x.tiltTolerance);
                                return d.d - i < r && r < d.e + i
                            }
                        }, e.getSweepToTagRotation = function(t, e, n) {
                            var r = new i.a,
                                a = Object(T.j)(t, e),
                                s = (new o.a).copy(e).sub(t).normalize().y,
                                c = 0,
                                l = 0;
                            return !n || [f.d.RIGHT, f.d.RIGHT_DOWN, f.d.RIGHT_UP].includes(n) ? l -= .25 : [f.d.LEFT, f.d.LEFT_DOWN, f.d.LEFT_UP].includes(n) && (l += .25), n ? [f.d.UP, f.d.RIGHT_UP, f.d.LEFT_UP].includes(n) ? c += .25 : [f.d.DOWN, f.d.RIGHT_DOWN, f.d.LEFT_DOWN].includes(n) && (c -= .25) : c = s < 0 ? .25 : -.25, c && (r.setFromAxisAngle(u.b.RIGHT, c), a.multiply(r)), l && (r.setFromAxisAngle(u.b.UP, l), a.multiply(r)), E.debug("Calculated sweep to tag rotation offset [" + l + ", " + c + "] for tag direction: " + n), Object(P.m)(a)
                        }, e
                    }
                    return _(e, t), e.prototype.init = function(t, e) {
                        return O(this, void 0, void 0, (function() {
                            var t, n, r, o, i, a, u;
                            return k(this, (function(c) {
                                switch (c.label) {
                                    case 0:
                                        return [4, Promise.all([e.market.waitForData(h.a), e.getModule(s.Mb), e.getModule(s.eb), e.getModule(s.K), e.market.waitForData(y.a), e.market.waitForData(p.a)])];
                                    case 1:
                                        return t = A.apply(void 0, [c.sent(), 6]), n = t[0], r = t[1], o = t[2], i = t[3], a = t[4], u = t[5], this.tagData = u, this.cameraData = n, this.viewmodeModule = r, this.raycaster = o, this.mattertagRaycastGroup = i.raycastGroup, this.sweepData = a, this.commandBinder = e.commandBinder, this.bindings.push(e.commandBinder.addBinding(M.a, this.navigateToTag)), [2]
                                }
                            }))
                        }))
                    }, e.prototype.goToNearestSweep = function(t) {
                        var e = t.tagId,
                            n = t.transition,
                            r = t.onSweepChosen,
                            o = t.tagDirection;
                        return O(this, void 0, void 0, (function() {
                            var t, i, a, s, u, c, h, p, f;
                            return k(this, (function(d) {
                                switch (d.label) {
                                    case 0:
                                        if (t = this.tagData.getTag(e), i = t.anchorPosition.clone().add(t.stemVector), !(a = this.sweepData.getClosestSweep(i, !0))) throw new Error("Cannot find sweep closest to Mattertag disc");
                                        return s = this.getSweepToTagRotation(a.position, i, o), u = this.cameraData.pose.projection.asThreeMatrix4(), c = this.cameraData, h = c.width, p = c.height, f = Object(D.b)(i, a.position, s, h, p, u), r && r(f), [4, this.commandBinder.issueCommand(new g.a({
                                            sweep: a.id,
                                            rotation: s,
                                            transition: n || l.a.Interpolate
                                        }))];
                                    case 1:
                                        return d.sent(), [2]
                                }
                            }))
                        }))
                    }, e
                }(s.Fb);
            e.default = R
        },
        1034: function(t, e, n) {
            "use strict";
            n.r(e);
            var r, o = n(29),
                i = n(65),
                a = n(54),
                s = n(0),
                u = n(155),
                c = n(307),
                l = n(138),
                h = n(106),
                p = n(50),
                f = n(10),
                d = n(83),
                y = n(308),
                v = n(800),
                m = n.n(v),
                w = function(t, e, n, r) {
                    return new(n || (n = Promise))((function(o, i) {
                        function a(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function s(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new n((function(e) {
                                e(t.value)
                            })).then(a, s)
                        }
                        u((r = r.apply(t, e || [])).next())
                    }))
                },
                g = function(t, e) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function s(i) {
                        return function(s) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
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
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1], o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    i = e.call(t, a)
                                } catch (t) {
                                    i = [6, t], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, s])
                        }
                    }
                },
                b = function(t) {
                    var e = "function" == typeof Symbol && t[Symbol.iterator],
                        n = 0;
                    return e ? e.call(t) : {
                        next: function() {
                            return t && n >= t.length && (t = void 0), {
                                value: t && t[n++],
                                done: !t
                            }
                        }
                    }
                },
                T = function() {
                    function t(t, e) {
                        void 0 === e && (e = h.a.ALL);
                        var n = this;
                        this.scene = t, this.layer = e, this.supportsMobile = !1, this.style = y.a.Reticle, this.defaultTexture = Object(d.a)(m.a), this.bindings = [], this.onOpacityUpdate = function(t) {
                            n.container.children.forEach((function(e) {
                                return e.material.opacity = t.opacity.value
                            }))
                        }, this.onPositionUpdate = function(t) {
                            if (t.hit && t.hit.face) {
                                var e = t.hit.point.clone(),
                                    r = t.hit.face.normal;
                                n.container.position.copy(e).addScaledVector(r, .01), n.container.quaternion.setFromUnitVectors(f.b.FORWARD, r)
                            }
                        }, this.container = new u.a;
                        var r = new i.b(.4, .4);
                        this.material = new a.a({
                            side: s.w,
                            transparent: !0,
                            depthTest: !0,
                            depthWrite: !1,
                            map: this.defaultTexture
                        }), this.container.add(new o.a(r, this.material)), this.container.children.forEach((function(t) {
                            return t.layers.mask = n.layer.mask
                        }))
                    }
                    return t.prototype.init = function() {}, t.prototype.render = function() {}, t.prototype.dispose = function() {
                        this.material.map && this.material.map.dispose(), this.container.children.forEach((function(t) {
                            if (t.isMesh) {
                                t.geometry.dispose();
                                var e = t.material;
                                e.dispose(), e.map && e.map.dispose()
                            }
                        }))
                    }, t.prototype.activate = function(t) {
                        return w(this, void 0, void 0, (function() {
                            var e, n;
                            return g(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, t.market.waitForData(c.a)];
                                    case 1:
                                        return e = r.sent(), [4, t.market.waitForData(l.b)];
                                    case 2:
                                        return n = r.sent(), this.bindings.push(e.onChanged(this.onOpacityUpdate), n.onChanged(this.onPositionUpdate)), this.scene.addChild(p.a.Root, this.container), [2]
                                }
                            }))
                        }))
                    }, t.prototype.deactivate = function(t) {
                        var e, n;
                        try {
                            for (var r = b(this.bindings), o = r.next(); !o.done; o = r.next()) {
                                o.value.cancel()
                            }
                        } catch (t) {
                            e = {
                                error: t
                            }
                        } finally {
                            try {
                                o && !o.done && (n = r.return) && n.call(r)
                            } finally {
                                if (e) throw e.error
                            }
                        }
                        this.bindings.length = 0, this.scene.removeChild(p.a.Root, this.container)
                    }, t.prototype.setVisible = function(t) {
                        this.container.visible = t
                    }, t
                }(),
                P = n(2),
                D = n(6),
                S = n(322),
                x = (r = function(t, e) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                }, function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                M = function(t, e, n, r) {
                    return new(n || (n = Promise))((function(o, i) {
                        function a(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function s(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new n((function(e) {
                                e(t.value)
                            })).then(a, s)
                        }
                        u((r = r.apply(t, e || [])).next())
                    }))
                },
                _ = function(t, e) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function s(i) {
                        return function(s) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
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
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1], o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    i = e.call(t, a)
                                } catch (t) {
                                    i = [6, t], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, s])
                        }
                    }
                },
                O = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.name = "cursor-mesh", e
                    }
                    return x(e, t), e.prototype.init = function(t, e) {
                        return M(this, void 0, void 0, (function() {
                            var t, n, r, o;
                            return _(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return this.engine = e, [4, e.getModule(P.Nb)];
                                    case 1:
                                        return n = i.sent(), r = n.getScene(), o = e.claimRenderLayer(this.name), this.mobile = Object(D.o)(), this.cursors = ((t = {})[y.a.Reticle] = new T(r, o), t[y.a.GridPlane] = new S.a(r, o), t), this.setCursorStyle(y.a.Reticle), [2]
                                }
                            }))
                        }))
                    }, Object.defineProperty(e.prototype, "container", {
                        get: function() {
                            return this.renderer.container
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.setVisible = function(t) {
                        this.renderer.setVisible(t)
                    }, e.prototype.setCursorStyle = function(t) {
                        this.renderer && this.renderer.style === t || (this.engine.removeComponent(this, this.renderer), this.renderer = this.cursors[t], (!this.mobile || this.mobile && this.renderer.supportsMobile) && this.engine.addComponent(this, this.renderer))
                    }, e
                }(P.j);
            e.default = O
        },
        213: function(t, e, n) {
            "use strict";
            n.d(e, "b", (function() {
                return a
            })), n.d(e, "e", (function() {
                return s
            })), n.d(e, "d", (function() {
                return u
            })), n.d(e, "c", (function() {
                return c
            })), n.d(e, "a", (function() {
                return l
            })), n.d(e, "f", (function() {
                return h
            }));
            var r, o = n(9),
                i = (r = function(t, e) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                }, function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                a = function(t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        return r.sweepId = e, r.position = n, r
                    }
                    return i(e, t), e
                }(o.a),
                s = function(t) {
                    function e(e) {
                        var n = t.call(this) || this;
                        return n.sweepId = e, n
                    }
                    return i(e, t), e
                }(o.a),
                u = function(t) {
                    function e(e) {
                        var n = t.call(this) || this;
                        return n.sweepId = e, n
                    }
                    return i(e, t), e
                }(o.a),
                c = function(t) {
                    function e(e, n, r) {
                        var o = t.call(this) || this;
                        return o.sweepId = e, o.orientation = n, o.deltaAngle = r, o
                    }
                    return i(e, t), e
                }(o.a),
                l = function(t) {
                    function e(e) {
                        var n = t.call(this) || this;
                        return n.sweepId = e, n
                    }
                    return i(e, t), e
                }(o.a),
                h = function(t) {
                    function e(e, n, r) {
                        var o = t.call(this) || this;
                        return o.sweepId = e, o.numSweeps = n, o.numDisabledSweeps = r, o
                    }
                    return i(e, t), e
                }(o.a)
        },
        496: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return r
            })), n.d(e, "b", (function() {
                return o
            }));
            var r = 16 / 9,
                o = 1 / r
        },
        499: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return c
            })), n.d(e, "c", (function() {
                return l
            })), n.d(e, "e", (function() {
                return h
            })), n.d(e, "d", (function() {
                return p
            })), n.d(e, "b", (function() {
                return f
            }));
            var r, o = n(224),
                i = n(21),
                a = n(67),
                s = n(496),
                u = (r = function(t, e) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                }, function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                c = function(t) {
                    function e(e) {
                        var n = t.call(this) || this;
                        return n.id = "CAPTURE_SNAPSHOT", n.payload = {
                            maxSize: e.maxSize || a.d.ULTRAHIGH,
                            aspect: e.aspect || s.a,
                            category: e.category || o.a.user,
                            setAsStartLocation: e.setAsStartLocation || !1,
                            onProgress: e.onProgress,
                            getOverlay: e.getOverlay,
                            waitForUpload: void 0 === e.waitForUpload || e.waitForUpload
                        }, n
                    }
                    return u(e, t), e
                }(i.a),
                l = function(t) {
                    function e(e) {
                        var n = t.call(this) || this;
                        return n.id = "EQUIRECTANGULAR_SNAPSHOT", n.payload = {
                            onProgress: e.onProgress,
                            setAsStartLocation: e.setAsStartLocation || !1,
                            waitForUpload: void 0 === e.waitForUpload || e.waitForUpload
                        }, n
                    }
                    return u(e, t), e
                }(i.a),
                h = function(t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        return r.id = "RENAME_SNAPSHOT", r.payload = {
                            sid: e,
                            name: n
                        }, r
                    }
                    return u(e, t), e
                }(i.a),
                p = function(t) {
                    function e(e) {
                        var n = t.call(this) || this;
                        return n.id = "DELETE_SNAPSHOT", n.payload = {
                            sid: e
                        }, n
                    }
                    return u(e, t), e
                }(i.a),
                f = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.id = "DELETE_UNUSED_TOUR_SNAPSHOTS", e
                    }
                    return u(e, t), e
                }(i.a)
        },
        501: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return s
            }));
            var r, o = n(21),
                i = n(62),
                a = (r = function(t, e) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                }, function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                s = function(t) {
                    function e(e) {
                        var n = e.tagId,
                            r = e.transition,
                            o = e.onSweepChosen,
                            a = e.tagDirection,
                            s = t.call(this) || this;
                        return s.id = "MOVE_TO_MATTERTAG", s.payload = {
                            tagId: n,
                            transition: r || i.a.Interpolate,
                            onSweepChosen: o,
                            tagDirection: a
                        }, s
                    }
                    return a(e, t), e
                }(o.a)
        },
        502: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return a
            })), n.d(e, "b", (function() {
                return s
            }));
            var r, o = n(9),
                i = (r = function(t, e) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                }, function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                a = function(t) {
                    function e(e, n, r, o, i, a) {
                        var s = t.call(this) || this;
                        return s.sid = e, s.is360 = n, s.category = r, s.height = o, s.isMeshMode = i, s.url = a, s
                    }
                    return i(e, t), e
                }(o.a),
                s = function(t) {
                    function e(e) {
                        return t.call(this) || this
                    }
                    return i(e, t), e
                }(o.a)
        },
        528: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return a
            }));
            var r, o = n(21),
                i = (r = function(t, e) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                }, function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                a = function(t) {
                    function e(e, n, r) {
                        void 0 === n && (n = !1);
                        var o = t.call(this) || this;
                        return o.id = "MOVETO_FLOOR", o.payload = {
                            floor: e,
                            suppressCameraMovement: n,
                            transitionTime: r
                        }, o
                    }
                    return i(e, t), e
                }(o.a)
        },
        529: function(t, e, n) {
            "use strict";
            n.d(e, "h", (function() {
                return a
            })), n.d(e, "e", (function() {
                return s
            })), n.d(e, "d", (function() {
                return u
            })), n.d(e, "a", (function() {
                return c
            })), n.d(e, "c", (function() {
                return l
            })), n.d(e, "j", (function() {
                return h
            })), n.d(e, "b", (function() {
                return p
            })), n.d(e, "g", (function() {
                return f
            })), n.d(e, "i", (function() {
                return d
            })), n.d(e, "f", (function() {
                return y
            }));
            var r = n(63),
                o = n(1),
                i = .25,
                a = function(t) {
                    return function(e) {
                        return e !== t
                    }
                },
                s = function(t) {
                    return function(e) {
                        return -1 !== t.neighbours.indexOf(e.id)
                    }
                },
                u = function(t) {
                    return function(e) {
                        return t === e || s(t)(e)
                    }
                },
                c = function(t, e, n) {
                    void 0 === n && (n = i);
                    var r = new o.a;
                    return function(o) {
                        return r.copy(o.position).sub(t).normalize().dot(e) > n
                    }
                },
                l = function() {
                    return function(t) {
                        return t.enabled
                    }
                },
                h = function(t) {
                    return t.placementType === r.b.MANUAL
                },
                p = function() {
                    return function(t) {
                        return t.alignmentType === r.a.ALIGNED
                    }
                },
                f = function() {
                    return function(t) {
                        return t.alignmentType !== r.a.ALIGNED
                    }
                },
                d = function(t) {
                    return function(e) {
                        return t.floor === e.floor
                    }
                },
                y = function(t, e) {
                    var n = new o.a;
                    return e = e.clone(),
                        function(r) {
                            return n.copy(r.position).sub(t).normalize().dot(e) > 0
                        }
                }
        },
        532: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return c
            }));
            var r, o = n(25),
                i = n(1),
                a = n(37),
                s = n(97),
                u = (r = function(t, e) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                }, function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                c = function(t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        return r.name = "model", r.opacity = new s.a(e), r.bounds = n, n && (r.center = r.bounds.getCenter(new i.a), r.size = r.bounds.getSize(new i.a)), r
                    }
                    return u(e, t), e.prototype.copy = function(t) {
                        this.opacity.copy(t.opacity), this.bounds = new a.a(t.bounds.min, t.bounds.max), this.center = this.bounds.getCenter(new i.a), this.size = this.bounds.getSize(new i.a)
                    }, e
                }(o.a)
        },
        536: function(t, e, n) {
            "use strict";
            n.d(e, "b", (function() {
                return r
            })), n.d(e, "a", (function() {
                return i
            }));
            var r, o = n(62);
            ! function(t) {
                t.INSTANT = "transition.instant", t.FLY = "transition.fly", t.FADEOUT = "transition.fade"
            }(r || (r = {}));
            var i = function(t) {
                switch (t) {
                    case r.FADEOUT:
                        return o.a.FadeToBlack;
                    case r.INSTANT:
                        return o.a.Instant;
                    case r.FLY:
                        return o.a.Interpolate
                }
            }
        },
        539: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return a
            }));
            var r, o = n(559),
                i = function() {
                    return (i = Object.assign || function(t) {
                        for (var e, n = 1, r = arguments.length; n < r; n++)
                            for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                        return t
                    }).apply(this, arguments)
                };
            ! function(t) {
                t[t.SELECTED = 1] = "SELECTED", t[t.HIDE = 2] = "HIDE", t[t.SHOW = 3] = "SHOW"
            }(r || (r = {}));
            var a = i({}, o.a, r)
        },
        540: function(t, e, n) {
            "use strict";
            n.d(e, "b", (function() {
                return g
            })), n.d(e, "a", (function() {
                return b
            })), n.d(e, "g", (function() {
                return T
            })), n.d(e, "c", (function() {
                return P
            })), n.d(e, "f", (function() {
                return D
            })), n.d(e, "e", (function() {
                return S
            })), n.d(e, "d", (function() {
                return x
            })), n.d(e, "i", (function() {
                return M
            })), n.d(e, "h", (function() {
                return O
            }));
            var r, o, i, a, s, u, c, l, h, p = n(144),
                f = n(1),
                d = n(7),
                y = n(16),
                v = n(598),
                m = n(575),
                w = n(14),
                g = 512,
                b = 6,
                T = function(t, e, n, r, o, i, a, s) {
                    var u = t / e,
                        c = 2 * (e / t),
                        l = c / 2,
                        h = 2 * (r / u) - 1 + l,
                        f = 2 * ((o = u - 1 - o) / u) - 1 + l;
                    switch (i = i || v.a.Center) {
                        case v.a.UpperLeft:
                            h -= l, f += l, h += a * c;
                            break;
                        case v.a.UpperRight:
                            h += l, f += l, f -= a * c;
                            break;
                        case v.a.LowerRight:
                            h += l, f -= l, h -= a * c;
                            break;
                        case v.a.LowerLeft:
                            h -= l, f -= l, f += a * c;
                            break;
                        case v.a.Center:
                    }
                    switch (n) {
                        case p.a.GL_TEXTURE_CUBE_MAP_POSITIVE_X:
                            s.set(-1, f, -h);
                            break;
                        case p.a.GL_TEXTURE_CUBE_MAP_NEGATIVE_X:
                            s.set(1, f, h);
                            break;
                        case p.a.GL_TEXTURE_CUBE_MAP_POSITIVE_Y:
                            s.set(-h, 1, -f);
                            break;
                        case p.a.GL_TEXTURE_CUBE_MAP_NEGATIVE_Y:
                            s.set(-h, -1, f);
                            break;
                        case p.a.GL_TEXTURE_CUBE_MAP_POSITIVE_Z:
                            s.set(-h, f, 1);
                            break;
                        case p.a.GL_TEXTURE_CUBE_MAP_NEGATIVE_Z:
                            s.set(h, f, -1)
                    }
                    s.normalize()
                },
                P = function(t, e) {
                    var n = g;
                    t < g && (n = t);
                    var r = Math.floor(t / n),
                        o = r * r;
                    return Math.floor(e / o)
                },
                D = function(t, e, n) {
                    var r = g;
                    t < g && (r = t);
                    var o = P(t, e),
                        i = Math.floor(t / r),
                        a = e - o * (i * i);
                    n.tileX = a % i, n.tileY = Math.floor(a / i), n.face = o, n.faceTileIndex = a
                },
                S = function(t) {
                    if (t <= g) return b;
                    var e = Math.floor(t / g);
                    return e * e * b
                },
                x = (r = new d.a, o = new y.a, function(t, e) {
                    o.copy(t), o.inverse(), r.makeRotationFromQuaternion(o), e.applyMatrix4(r), e.normalize()
                }),
                M = (a = new f.a, s = new f.a(0, 0, -1), u = new y.a, c = function(t, e) {
                    t.push({
                        face: e.face,
                        faceTileIndex: e.faceTileIndex,
                        tileX: e.tileX,
                        tileY: e.tileY
                    })
                }, i = {
                    face: -1,
                    faceTileIndex: -1,
                    tileX: -1,
                    tileY: -1
                }, l = function(t, e, n) {
                    for (var r = S(t), o = 0, a = 0; a < r; a++) D(t, a, i), e && !e(i) || (o++, n && c(n, i));
                    return o
                }, function(t, e, n, r, o, i, c) {
                    void 0 === o && (o = !1), r.length = o ? 0 : r.length;
                    var h = e < g ? e : g;
                    if (!i && !c) return l(e, null, r);
                    var p = !!c;
                    i = i || 0, c = c || i, c = Math.max(0, Math.min(c, 360)), i = Math.max(0, Math.min(i, 360)), a.copy(n);
                    var f = t.rotation || new y.a;
                    return x(f, a), p ? (u.setFromUnitVectors(a, s), l(e, (function(t) {
                        return _(e, h, t.face, t.tileX, t.tileY, u, i || 0, c || 0)
                    }), r)) : l(e, (function(t) {
                        return O(e, h, t.face, t.tileX, t.tileY, a, i || 0)
                    }), r)
                }),
                _ = (h = new f.a, function(t, e, n, r, o, i, a, s) {
                    for (var u = Math.tan(.5 * s * w.b), c = -u, l = Math.tan(.5 * a * w.b), p = -l, f = Object(m.a)(n), d = 0, y = 0, g = 0, b = 0, P = 0, D = v.a.Center; D <= v.a.LowerLeft; D++)
                        if (T(t, e, f, r, o, D, 0, h), h.applyQuaternion(i), !(h.z >= -1e-5)) {
                            var S = -1 / h.z,
                                x = h.x * S,
                                M = h.y * S;
                            M > u ? d++ : M < c && y++, x > l ? g++ : x < p && b++, P++
                        }
                    return y !== P && d !== P && g !== P && b !== P
                }),
                O = function() {
                    var t = new f.a,
                        e = new f.a(0, 1, 0),
                        n = new f.a(1, 0, 0);
                    return function(r, o, i, a, s, u, c) {
                        var l = Object(m.a)(i);
                        if (n.copy(u).cross(e), T(r, o, l, a, s, v.a.Center, 0, t), k(t, u, c)) return !0;
                        for (var h = c / 360, p = Math.floor(1 / h), f = 0, d = 0; d < p; d++) {
                            for (var y = v.a.UpperLeft; y <= v.a.LowerLeft; y++)
                                if (T(r, o, l, a, s, y, f, t), k(t, u, c)) return !0;
                            f += h
                        }
                        return !1
                    }
                }(),
                k = function() {
                    var t = new f.a,
                        e = new f.a;
                    return function(n, r, o, i) {
                        if (e.copy(n), i) {
                            t.copy(i), t.normalize();
                            var a = t.dot(n);
                            t.x *= a, t.y *= a, t.z *= a, e.sub(t)
                        }
                        var s = o / 2 * w.b,
                            u = Math.cos(s);
                        return e.dot(r) >= u
                    }
                }()
        },
        541: function(t, e, n) {
            "use strict";
            n.d(e, "d", (function() {
                return s
            })), n.d(e, "c", (function() {
                return u
            })), n.d(e, "b", (function() {
                return c
            })), n.d(e, "a", (function() {
                return l
            }));
            var r = n(1),
                o = -1,
                i = 10,
                a = 5,
                s = function(t, e) {
                    return void 0 === e && (e = o),
                        function(n) {
                            return t.distanceToSquared(n.position) * e
                        }
                },
                u = function(t, e) {
                    return void 0 === e && (e = o),
                        function(n) {
                            return t.distanceTo(n.position) * e
                        }
                },
                c = function(t, e, n) {
                    void 0 === n && (n = i);
                    var o = new r.a;
                    return function(r) {
                        return o.copy(r.position).sub(t).normalize().dot(e) * n
                    }
                },
                l = function(t, e) {
                    return void 0 === e && (e = a),
                        function(e) {
                            return t === e.floor ? a : 0
                        }
                }
        },
        542: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return a
            }));
            var r, o = n(21),
                i = (r = function(t, e) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                }, function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                a = function(t) {
                    function e(e) {
                        var n = t.call(this) || this;
                        return n.id = "SET_MESH_OPACITY", n.payload = {
                            value: e
                        }, n
                    }
                    return i(e, t), e
                }(o.a)
        },
        543: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return a
            }));
            var r, o = n(29),
                i = (r = function(t, e) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                }, function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                a = function(t) {
                    function e(e, n) {
                        return t.call(this, e, n) || this
                    }
                    return i(e, t), e
                }(o.a)
        },
        544: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return a
            }));
            var r, o = n(9),
                i = (r = function(t, e) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                }, function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                a = function(t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        return r.from = e, r.to = n, r
                    }
                    return i(e, t), e
                }(o.a)
        },
        548: function(t, e, n) {
            "use strict";
            n.d(e, "b", (function() {
                return y
            })), n.d(e, "a", (function() {
                return v
            }));
            var r, o = n(25),
                i = n(97),
                a = n(21),
                s = n(529),
                u = n(81),
                c = n(539),
                l = n(40),
                h = n(115),
                p = (r = function(t, e) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                }, function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                f = function(t) {
                    var e = "function" == typeof Symbol && t[Symbol.iterator],
                        n = 0;
                    return e ? e.call(t) : {
                        next: function() {
                            return t && n >= t.length && (t = void 0), {
                                value: t && t[n++],
                                done: !t
                            }
                        }
                    }
                },
                d = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.visible = !0, e.selected = new i.a(0), e
                    }
                    return p(e, t), e
                }(l.a),
                y = function(t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        return r.sweepId = e, r.visible = n, r.payload = {
                            sweepId: e,
                            visible: n
                        }, r
                    }
                    return p(e, t), e
                }(a.a),
                v = function(t) {
                    function e(e, n) {
                        var r, o, i = t.call(this) || this;
                        if (i.data = e, i.name = "sweeps-view", i.states = new h.a, i.sweepIdList = [], i.sweepMap = {}, i.makeViewData = void 0, i.sweepInteractionMap = {}, i.derivedData = {}, i.selectedSweep = new u.a(null), i.hoveredSweep = new u.a(null), n) try {
                            for (var a = f(n), s = a.next(); !s.done; s = a.next()) {
                                var c = s.value,
                                    l = new d;
                                i.states.set(c.id, l), l.commit()
                            }
                        } catch (t) {
                            r = {
                                error: t
                            }
                        } finally {
                            try {
                                s && !s.done && (o = a.return) && o.call(a)
                            } finally {
                                if (r) throw r.error
                            }
                        }
                        return i
                    }
                    return p(e, t), e.prototype.getSweep = function(t) {
                        return this.data.getSweep(t)
                    }, e.prototype.setViewDataFactory = function(t) {
                        this.makeViewData = t
                    }, e.prototype.getViewData = function(t) {
                        var e = this.data.getSweep(t),
                            n = this.derivedData[t];
                        return e && !n && this.makeViewData && (this.derivedData[t] = this.makeViewData(e, e.index)), this.derivedData[t]
                    }, e.prototype.iterate = function(t) {
                        this.data.iterate(t)
                    }, e.prototype.getState = function(t) {
                        return this.states.get(t)
                    }, e.prototype.isVisible = function(t) {
                        return this.states.get(t).visible
                    }, e.prototype.setVisible = function(t, e) {
                        var n = this.getState(t);
                        n.visible = e, n.commit()
                    }, e.prototype.updateAnimations = function(t) {
                        var e, n;
                        try {
                            for (var r = f(this.states), o = r.next(); !o.done; o = r.next()) {
                                o.value.selected.tick(t)
                            }
                        } catch (t) {
                            e = {
                                error: t
                            }
                        } finally {
                            try {
                                o && !o.done && (n = r.return) && n.call(r)
                            } finally {
                                if (e) throw e.error
                            }
                        }
                    }, e.prototype.modifySelectAnimation = function(t, e) {
                        var n = this.getState(t).selected;
                        1 === n.endValue ? n.modifyAnimation(n.value, 0, e) : n.modifyAnimation(0, 1, e)
                    }, e.prototype.setSweepInteraction = function(t, e) {
                        this.sweepInteractionMap[t].interaction = e, this.commit()
                    }, e.prototype.getIndexByAlignment = function(t, e) {
                        return this.getAlignedSweeps(t).findIndex((function(t) {
                            return t.id === e
                        }))
                    }, e.prototype.getAlignedSweeps = function(t) {
                        var e = this,
                            n = this.sweepIdList.map((function(t) {
                                return e.getViewData(t)
                            }));
                        return t ? n.filter(Object(s.b)()) : n.filter(Object(s.g)())
                    }, e.prototype.unselectAllSweeps = function() {
                        var t, e;
                        try {
                            for (var n = f(this.sweepIdList), r = n.next(); !r.done; r = n.next()) {
                                var o = r.value;
                                this.sweepInteractionMap[o].interaction = c.a.NONE
                            }
                        } catch (e) {
                            t = {
                                error: e
                            }
                        } finally {
                            try {
                                r && !r.done && (e = n.return) && e.call(n)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                        this.commit()
                    }, e
                }(o.a)
        },
        551: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return s
            }));
            var r, o = n(25),
                i = n(81),
                a = (r = function(t, e) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                }, function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                s = function(t) {
                    function e(e) {
                        var n = t.call(this) || this;
                        return n.data = e, n.name = "measure-view", n.addState = !1, n.selected = new i.a(null), n.hovered = new i.a(null), n.derivedData = {}, n
                    }
                    return a(e, t), e.prototype.setViewDataFactory = function(t) {
                        this.makeViewData = t
                    }, e.prototype.getViewData = function(t) {
                        var e = this.data.get(t);
                        return e && !this.derivedData[t] && this.makeViewData && (this.derivedData[t] = this.makeViewData(e)), this.derivedData[t]
                    }, e.prototype.iterate = function(t) {
                        this.data.iterate(t)
                    }, e.prototype.iterateDerived = function(t) {
                        for (var e in this.derivedData) t(this.derivedData[e])
                    }, e.prototype.initialize = function(t) {}, e.prototype.dispose = function() {}, e
                }(o.a)
        },
        559: function(t, e, n) {
            "use strict";
            var r;
            n.d(e, "a", (function() {
                    return r
                })),
                function(t) {
                    t[t.NONE = 0] = "NONE"
                }(r || (r = {}))
        },
        560: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return o
            }));
            var r = function() {
                    function t(t) {
                        this._value = t
                    }
                    return t.prototype.value = function() {
                        return this._value
                    }, t.prototype.set = function(t) {
                        this._value = t
                    }, t
                }(),
                o = function() {
                    function t() {
                        this.storage = {}
                    }
                    return t.prototype.get = function(t, e) {
                        var n = this.storage[t];
                        return n || (n = e(), this.storage[t] = n), n
                    }, t.prototype.getNumber = function(t) {
                        return this.get(t, (function() {
                            return new r(0)
                        }))
                    }, t.prototype.getString = function(t) {
                        return this.get(t, (function() {
                            return new r("")
                        }))
                    }, t.prototype.getArray = function(t) {
                        return this.get(t, (function() {
                            return []
                        }))
                    }, t.prototype.getNumberMap = function(t) {
                        return this.get(t, (function() {
                            return {}
                        }))
                    }, t.prototype.getStringMap = function(t) {
                        return this.get(t, (function() {
                            return {}
                        }))
                    }, t
                }()
        },
        561: function(t, e, n) {
            "use strict";
            var r, o = n(1),
                i = n(7),
                a = n(26),
                s = n(18),
                u = n(133),
                c = n(134),
                l = n(562);
            e.a = {
                cube: {
                    uniforms: {
                        map: {
                            type: "t",
                            value: null
                        },
                        opacity: {
                            type: "f",
                            value: 1
                        }
                    },
                    vertexShader: c + n(636),
                    fragmentShader: u + n(637)
                },
                modelChunk: {
                    uniforms: (r = {}, r[l.a.MeshTexture] = {
                        map: {
                            type: "t",
                            value: null
                        },
                        meshOpacity: {
                            type: "f",
                            value: 0
                        },
                        opacity: {
                            type: "f",
                            value: 1
                        }
                    }, r[l.a.PanoTexture] = {
                        pano0Map: {
                            type: "t",
                            value: null
                        },
                        pano0Position: {
                            type: "v3",
                            value: new o.a
                        },
                        pano0Matrix: {
                            type: "m4",
                            value: new i.a
                        }
                    }, r[l.a.PanoTextureTransition] = {
                        progress: {
                            type: "f",
                            value: 0
                        },
                        pano1Map: {
                            type: "t",
                            value: null
                        },
                        pano1Position: {
                            type: "v3",
                            value: new o.a
                        },
                        pano1Matrix: {
                            type: "m4",
                            value: new i.a
                        }
                    }, r[l.a.ColorOverlay] = {
                        colorOverlay: {
                            type: "v4",
                            value: null
                        }
                    }, r[l.a.MeshPreviewSphere] = {
                        meshPreviewCenter: {
                            type: "v3",
                            value: null
                        },
                        meshPreviewSize: {
                            type: "f",
                            value: .3
                        }
                    }, r[l.a.Wireframe] = {
                        time: {
                            value: 0
                        },
                        fill: {
                            value: new s.a(16711680)
                        },
                        stroke: {
                            value: new s.a(16777215)
                        },
                        dualStroke: {
                            value: !1
                        },
                        fillEnabled: {
                            value: !1
                        },
                        insideAltColor: {
                            value: !1
                        },
                        thickness: {
                            value: .1
                        },
                        secondThickness: {
                            value: .1
                        },
                        dashEnabled: {
                            value: !1
                        },
                        dashRepeats: {
                            value: 10
                        },
                        dashOverlap: {
                            value: !1
                        },
                        dashLength: {
                            value: .1,
                            range: [0, 1]
                        },
                        dashAnimate: {
                            value: !1
                        },
                        squeeze: {
                            value: !1
                        },
                        squeezeMin: {
                            value: .1
                        },
                        squeezeMax: {
                            value: 1
                        },
                        wireframeOpacity: {
                            value: 1,
                            range: [0, 1]
                        }
                    }, r),
                    vertexShader: c + n(638),
                    fragmentShader: u + n(639)
                },
                modelOutside: {
                    uniforms: {
                        map: {
                            type: "t",
                            value: null
                        },
                        opacity: {
                            type: "f",
                            value: 1
                        },
                        colorOverlay: {
                            type: "v4",
                            value: new a.a(0, 0, 0, 0)
                        }
                    },
                    vertexShader: c + n(640),
                    fragmentShader: u + n(641)
                },
                depth: {
                    uniforms: {
                        opacity: {
                            type: "f",
                            value: 1
                        },
                        maxDistance: {
                            type: "f",
                            value: 20
                        }
                    },
                    vertexShader: c + n(642),
                    fragmentShader: u + n(643)
                }
            }
        },
        562: function(t, e, n) {
            "use strict";
            var r;
            n.d(e, "a", (function() {
                    return r
                })),
                function(t) {
                    t.PanoTexture = "PANO_TEXTURE", t.PanoTextureTransition = "PANO_TEXTURE_TRANSITION", t.MeshTexture = "MESH_TEXTURE", t.ColorOverlay = "COLOR_OVERLAY", t.MeshPreviewSphere = "MESH_PREVIEW_SPHERE", t.Wireframe = "WIREFRAME", t.FlatShading = "FLAT_SHADING"
                }(r || (r = {}))
        },
        564: function(t, e, n) {
            "use strict";
            n.d(e, "c", (function() {
                return i
            })), n.d(e, "a", (function() {
                return a
            })), n.d(e, "b", (function() {
                return s
            }));
            var r = n(1),
                o = n(18),
                i = function(t) {
                    return !!t && (t instanceof r.a || !!("object" == typeof t && "x" in t && "y" in t && "z" in t && s(t.x) && s(t.y) && s(t.z)))
                },
                a = function(t) {
                    return !!t && (t instanceof o.a || !!("object" == typeof t && "r" in t && "g" in t && "b" in t && s(t.r) && s(t.g) && s(t.b)))
                },
                s = function(t) {
                    if (null == t || isNaN(t)) return !1;
                    if ("number" == typeof t) return !0;
                    var e = parseFloat(t);
                    return !isNaN(e) && "number" == typeof e
                }
        },
        574: function(t, e, n) {
            "use strict";
            n.d(e, "d", (function() {
                return a
            })), n.d(e, "c", (function() {
                return s
            })), n.d(e, "b", (function() {
                return u
            })), n.d(e, "a", (function() {
                return c
            }));
            var r, o = n(21),
                i = (r = function(t, e) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                }, function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                a = function(t) {
                    function e(e, n, r) {
                        void 0 === r && (r = 500);
                        var o = t.call(this) || this;
                        return o.id = "SELECT_SWEEP", o.payload = {
                            id: e,
                            selected: n,
                            duration: r
                        }, o
                    }
                    return i(e, t), e
                }(o.a),
                s = function(t) {
                    function e(e, n, r) {
                        void 0 === r && (r = 500);
                        var o = t.call(this) || this;
                        return o.id = "HOVER_SWEEP", o.payload = {
                            id: e,
                            hovered: n,
                            duration: r
                        }, o
                    }
                    return i(e, t), e
                }(o.a),
                u = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.id = "ENABLE_SWEEP_SELECTION", e
                    }
                    return i(e, t), e
                }(o.a),
                c = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.id = "DISABLE_SWEEP_SELECTION", e
                    }
                    return i(e, t), e
                }(o.a)
        },
        575: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return a
            }));
            var r = n(144),
                o = n(302),
                i = {
                    0: r.a.GL_TEXTURE_CUBE_MAP_POSITIVE_Y,
                    1: r.a.GL_TEXTURE_CUBE_MAP_POSITIVE_Z,
                    2: r.a.GL_TEXTURE_CUBE_MAP_POSITIVE_X,
                    3: r.a.GL_TEXTURE_CUBE_MAP_NEGATIVE_Z,
                    4: r.a.GL_TEXTURE_CUBE_MAP_NEGATIVE_X,
                    5: r.a.GL_TEXTURE_CUBE_MAP_NEGATIVE_Y
                },
                a = function(t) {
                    if (t < 0 || t > 5) throw new o.a("mapFaceToCubemapFace() -> face must be in the range [0, 5]");
                    return i[t]
                }
        },
        576: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return r
            }));
            var r, o = n(67),
                i = n(222),
                a = n(560),
                s = n(540),
                u = n(33),
                c = new(n(3).a)("panoqualitymanager");
            ! function(t) {
                t[t.Untested = 0] = "Untested", t[t.Testing = 1] = "Testing", t[t.Success = 2] = "Success", t[t.Fail = 3] = "Fail"
            }(r || (r = {}));
            var l = function() {
                function t(t, e, n, r) {
                    this.urls = t, this.maxCubemapSize = e, this.maxNavPanoSize = n, this.maxZoomPanoSize = r, this.overrideWindow = !1, this.devicePixelRatio = window.devicePixelRatio || 1, this.navPanoSize = -1, this.zoomPanoSize = -1, this.windowHeight = window.innerHeight * this.devicePixelRatio, this.highQualityThreshold = i.c.windowHeightHighQualityThresholdOverride || i.c.windowHeightHighQualityThreshold, this.persistentStorage = new a.a, this.downloadTestResults = {}, this.updateMaximums()
                }
                return t.prototype.setWindowSize = function(t, e) {
                    this.windowHeight = e * this.devicePixelRatio, this.updateMaximums()
                }, t.prototype.overrideWindowMaximums = function(t) {
                    this.overrideWindow = t, this.updateMaximums()
                }, t.prototype.getTestResults = function(t, e) {
                    var n = this.downloadTestResults[t];
                    if (n) {
                        var o = n[e];
                        if (o) return o
                    }
                    return r.Untested
                }, t.prototype.ultraHighQualityModeEnabled = function(t) {
                    var e = o.b[this.getZoomPanoSize()],
                        n = this.downloadTestResults[t];
                    return !(!n || !n[e]) && n[e] === r.Success
                }, t.prototype.updateMaximums = function() {
                    this.windowHeight < this.highQualityThreshold && !this.overrideWindow ? (this.navPanoSize = Math.min(t.getPanoSize(o.d.STANDARD), this.maxNavPanoSize), this.zoomPanoSize = Math.min(t.getPanoSize(o.d.HIGH), this.maxZoomPanoSize)) : (this.navPanoSize = this.maxNavPanoSize, this.zoomPanoSize = this.maxZoomPanoSize), this.zoomPanoSize < this.navPanoSize && (this.navPanoSize = this.zoomPanoSize), this.zoomPanoSize = Math.min(this.maxCubemapSize, this.zoomPanoSize), this.navPanoSize = Math.min(this.maxCubemapSize, this.navPanoSize)
                }, t.getPanoSize = function(t) {
                    if (t in o.a) return o.a[t];
                    throw new Error("Not a panoSizeClass: " + t)
                }, t.getPanoSizeClass = function(t) {
                    if (t in o.b) return o.b[t];
                    throw new Error("Not a valid pano resolution: " + t)
                }, t.prototype.getMaxPossiblePanoSize = function() {
                    return t.getPanoSize(o.d.ULTRAHIGH)
                }, t.prototype.getNavPanoSize = function() {
                    return this.navPanoSize
                }, t.prototype.getZoomPanoSize = function() {
                    return this.zoomPanoSize
                }, t.prototype.availableResolution = function(t, e) {
                    var n = this,
                        o = new u.a;
                    switch (e < 1 && o.reject(0), this.getTestResults(t, e)) {
                        case r.Success:
                            o.resolve(e);
                            break;
                        case r.Fail:
                            return this.availableResolution(t, e - 1);
                        case r.Untested:
                            this.testDownload(t, e, s.b).then((function(r) {
                                r ? o.resolve(e) : n.availableResolution(t, e - 1).then((function(t) {
                                    return o.resolve(t)
                                }))
                            }));
                            break;
                        case r.Testing:
                            c.warn("resolution is already testing, do we need to handle this?")
                    }
                    return o
                }, t.prototype.testDownload = function(e, n, o) {
                    var i = this;
                    if (!this.urls) throw new Error("Can't call testDownload without signed urls");
                    var a = t.getPanoSize(n),
                        s = new u.a;
                    this.downloadTestResults[e] || (this.downloadTestResults[e] = {});
                    var c = this.downloadTestResults[e] && this.downloadTestResults[e][n];
                    if (c) c === r.Success ? s.resolve(!0) : c === r.Fail && s.resolve(!1);
                    else {
                        this.downloadTestResults[e][n] = r.Testing;
                        var l = this.getTileUrl(e, a, o, 0);
                        this.urls.getImage(l, {
                            maxRetries: 0
                        }).then((function(t) {
                            i.downloadTestResults[e][n] = r.Success, s.resolve(!0)
                        }), (function() {
                            i.downloadTestResults[e][n] = r.Fail, s.resolve(!1)
                        }))
                    }
                    return s
                }, t.prototype.getTileUrl = function(t, e, n, r) {
                    var o = this.persistentStorage.get("getTileUrl:sizeMap", (function() {
                            return {
                                256: "256",
                                512: "512",
                                1024: "1k",
                                2048: "2k",
                                4096: "4k"
                            }
                        })),
                        i = this.persistentStorage.get("getTileUrl:sizeMap", (function() {
                            return {
                                face: -1,
                                faceTileIndex: -1,
                                tileX: -1,
                                tileY: -1
                            }
                        }));
                    s.f(e, r, i);
                    var a = Math.floor(e / n),
                        u = a * a,
                        c = Math.floor(r / u);
                    return "tiles/" + t + "/" + o[e] + "_face" + c + "_" + i.tileX + "_" + i.tileY + ".jpg"
                }, t
            }();
            e.b = l
        },
        577: function(t, e, n) {
            "use strict";
            n.d(e, "b", (function() {
                return o
            })), n.d(e, "e", (function() {
                return i
            })), n.d(e, "d", (function() {
                return a
            })), n.d(e, "a", (function() {
                return s
            })), n.d(e, "c", (function() {
                return u
            }));
            var r = n(13),
                o = 1e3 / 60,
                i = r.a.degToRad(70),
                a = -i,
                s = .05,
                u = .1 / 60
        },
        578: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return l
            }));
            var r, o = n(25),
                i = n(37),
                a = n(81),
                s = (r = function(t, e) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                }, function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                u = function(t, e) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function s(i) {
                        return function(s) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
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
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1], o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    i = e.call(t, a)
                                } catch (t) {
                                    i = [6, t], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, s])
                        }
                    }
                },
                c = function(t) {
                    var e = "function" == typeof Symbol && t[Symbol.iterator],
                        n = 0;
                    return e ? e.call(t) : {
                        next: function() {
                            return t && n >= t.length && (t = void 0), {
                                value: t && t[n++],
                                done: !t
                            }
                        }
                    }
                },
                l = function(t) {
                    function e(e) {
                        var n, r, o = t.call(this) || this;
                        if (o.name = "rooms", o.selected = new a.a(null), o.floorToRoomsMap = new Map, o._bbox = new i.a, o.addRoomToMaps = function(t, e) {
                                e._rooms[t.id] = t;
                                var n = e.floorToRoomsMap.get(t.floorId);
                                n ? n.push(t) : e.floorToRoomsMap.set(t.floorId, [t])
                            }, o.rooms = function() {
                                var t = o._rooms,
                                    e = Object.keys(o._rooms);
                                return function() {
                                    var n, r, o, i, a, s;
                                    return u(this, (function(u) {
                                        switch (u.label) {
                                            case 0:
                                                u.trys.push([0, 5, 6, 7]), o = c(e), i = o.next(), u.label = 1;
                                            case 1:
                                                return i.done ? [3, 4] : (a = i.value, [4, t[a]]);
                                            case 2:
                                                u.sent(), u.label = 3;
                                            case 3:
                                                return i = o.next(), [3, 1];
                                            case 4:
                                                return [3, 7];
                                            case 5:
                                                return s = u.sent(), n = {
                                                    error: s
                                                }, [3, 7];
                                            case 6:
                                                try {
                                                    i && !i.done && (r = o.return) && r.call(o)
                                                } finally {
                                                    if (n) throw n.error
                                                }
                                                return [7];
                                            case 7:
                                                return [2]
                                        }
                                    }))
                                }()
                            }, o.get = function(t) {
                                return o._rooms["room-" + t]
                            }, o.roomIdsFromPoint = function(t) {
                                var e, n, r = [];
                                try {
                                    for (var i = c(o.rooms()), a = i.next(); !a.done; a = i.next()) {
                                        var s = a.value;
                                        o._bbox.min.set(s.min.x, s.min.y, s.min.z), o._bbox.max.set(s.max.x, s.max.y, s.max.z), o._bbox.containsPoint(t) && r.push(s.index)
                                    }
                                } catch (t) {
                                    e = {
                                        error: t
                                    }
                                } finally {
                                    try {
                                        a && !a.done && (n = i.return) && n.call(i)
                                    } finally {
                                        if (e) throw e.error
                                    }
                                }
                                return r
                            }, o._rooms = {}, e) try {
                            for (var s = c(Object.keys(e)), l = s.next(); !l.done; l = s.next()) {
                                var h = l.value;
                                o.addRoomToMaps(e[h], o)
                            }
                        } catch (t) {
                            n = {
                                error: t
                            }
                        } finally {
                            try {
                                l && !l.done && (r = s.return) && r.call(s)
                            } finally {
                                if (n) throw n.error
                            }
                        }
                        return o
                    }
                    return s(e, t), e.prototype.copy = function(t) {
                        var e, n;
                        this._rooms = {}, this.floorToRoomsMap.clear();
                        try {
                            for (var r = c(t.rooms()), o = r.next(); !o.done; o = r.next()) {
                                var i = o.value,
                                    a = {
                                        id: i.id,
                                        floorId: i.floorId,
                                        min: i.min,
                                        max: i.max,
                                        mesh: i.mesh,
                                        index: i.index
                                    };
                                this.addRoomToMaps(a, this), this._rooms[i.id] = a
                            }
                        } catch (t) {
                            e = {
                                error: t
                            }
                        } finally {
                            try {
                                o && !o.done && (n = r.return) && n.call(r)
                            } finally {
                                if (e) throw e.error
                            }
                        }
                        return this
                    }, Object.defineProperty(e.prototype, "roomCount", {
                        get: function() {
                            return Object.keys(this._rooms).length
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "floorCount", {
                        get: function() {
                            return this.floorToRoomsMap.size
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "collection", {
                        get: function() {
                            return this._rooms
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.roomsByFloor = function(t) {
                        return this.floorToRoomsMap.get(t) || []
                    }, e
                }(o.a)
        },
        580: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return a
            })), n.d(e, "b", (function() {
                return s
            }));
            var r, o = n(21),
                i = (r = function(t, e) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                }, function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                a = function(t) {
                    function e() {
                        var e = t.call(this) || this;
                        return e.id = "LOCK_NAVIGATION", e
                    }
                    return i(e, t), e
                }(o.a),
                s = function(t) {
                    function e() {
                        var e = t.call(this) || this;
                        return e.id = "UNLOCK_NAVIGATION", e
                    }
                    return i(e, t), e
                }(o.a)
        },
        581: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return a
            }));
            var r, o = n(21),
                i = (r = function(t, e) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                }, function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                a = function(t) {
                    function e(e) {
                        var n = t.call(this) || this;
                        return n.id = "MATTERTAG_NAV_LINK", n.payload = {
                            chunk: e
                        }, n
                    }
                    return i(e, t), e
                }(o.a)
        },
        582: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return g
            })), n.d(e, "b", (function() {
                return b
            }));
            var r, o = n(21),
                i = n(536),
                a = n(62),
                s = n(602),
                u = n(261),
                c = n(564),
                l = n(1),
                h = n(14),
                p = n(129),
                f = n(583),
                d = n(3),
                y = (r = function(t, e) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                }, function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                v = function(t, e, n, r) {
                    return new(n || (n = Promise))((function(o, i) {
                        function a(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function s(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new n((function(e) {
                                e(t.value)
                            })).then(a, s)
                        }
                        u((r = r.apply(t, e || [])).next())
                    }))
                },
                m = function(t, e) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function s(i) {
                        return function(s) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
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
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1], o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    i = e.call(t, a)
                                } catch (t) {
                                    i = [6, t], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, s])
                        }
                    }
                },
                w = new d.a("move-to-mode-command"),
                g = function(t) {
                    function e(e) {
                        var n = t.call(this) || this;
                        return n.id = "MOVE_TO_MODE", n.payload = e, n
                    }
                    return y(e, t), e.validateMoveToModeInput = function(t) {
                        if (!t) throw Error("Mode.moveTo -> no arguments provided -- mode is required");
                        t.options || (t.options = {});
                        var n = t.mode;
                        if (!Object(f.a)(p.b, t.mode)) throw Error("Mode.moveTo -> " + t.mode + " is not a valid viewmode");
                        if (n === p.b.TRANSITIONING) throw Error("Mode.moveTo -> " + t.mode + " is not a valid viewmode");
                        t.options && t.options.rotation && (t.options.rotation.z = t.options.rotation.z || 0);
                        var r = e.validatePayloadOptions(t.options);
                        return {
                            mode: n,
                            options: {
                                transition: r.transition,
                                position: r.position,
                                rotation: r.rotation,
                                zoom: r.zoom
                            }
                        }
                    }, e.validatePayloadOptions = function(t) {
                        var e, n, r, o;
                        if (t) {
                            if (t.transition && void 0 === (r = Object(i.a)(t.transition))) throw Error("Mode.moveTo -> " + t.transition + " is not a valid transition style");
                            t.rotation && Object(c.c)(t.rotation) && (e = Object(u.a)(t.rotation)), t.position && Object(c.c)(t.position) && (n = new l.a(t.position.x, t.position.y, t.position.z)), t.zoom && !isNaN(t.zoom) && (o = Object(h.e)(t.zoom, 1, 30))
                        }
                        return {
                            rotation: e,
                            position: n,
                            transition: r,
                            zoom: o
                        }
                    }, e
                }(o.a),
                b = function(t, e, n) {
                    e.addBinding(g, (function(t) {
                        return v(void 0, void 0, void 0, (function() {
                            var n, r, o, i;
                            return m(this, (function(u) {
                                switch (u.label) {
                                    case 0:
                                        return u.trys.push([0, 2, , 3]), t.options = t.options || {}, n = a.a.Interpolate, void 0 === (r = t.options.transition) || isNaN(r) || (n = r), [4, e.issueCommand(new p.a(t.mode, n, {
                                            position: t.options.position,
                                            rotation: t.options.rotation,
                                            zoom: t.options.zoom
                                        }))];
                                    case 1:
                                        return u.sent(), [2, t.mode];
                                    case 2:
                                        if (o = u.sent(), i = o instanceof s.a ? "Mode.moveTo -> Cannot move to " + t.mode + " during a mode transition" : "Mode.moveTo -> Could not move to " + t.mode, w.error(o, i), o instanceof s.a) throw Error("Mode.moveTo -> Cannot move to " + t.mode + " during a mode transition");
                                        throw Error("Mode.moveTo -> Could not move to " + t.mode);
                                    case 3:
                                        return [2]
                                }
                            }))
                        }))
                    })), n.addCommandToInterface({
                        version: "3.x",
                        namespace: "Mode",
                        name: "moveTo",
                        args: ["mode", "options"]
                    }, (function(t) {
                        return new g(g.validateMoveToModeInput(t))
                    })), n.addEnumToInterface({
                        version: "3.x",
                        namespace: "Mode",
                        name: "Mode",
                        values: p.b
                    }), n.addEnumToInterface({
                        version: "3.x",
                        namespace: "Mode",
                        name: "TransitionType",
                        values: i.b
                    })
                }
        },
        583: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return o
            }));
            var r = function(t) {
                    var e = "function" == typeof Symbol && t[Symbol.iterator],
                        n = 0;
                    return e ? e.call(t) : {
                        next: function() {
                            return t && n >= t.length && (t = void 0), {
                                value: t && t[n++],
                                done: !t
                            }
                        }
                    }
                },
                o = function(t, e) {
                    var n, o, i = Object.keys(t);
                    try {
                        for (var a = r(i), s = a.next(); !s.done; s = a.next()) {
                            if (t[s.value] === e) return !0
                        }
                    } catch (t) {
                        n = {
                            error: t
                        }
                    } finally {
                        try {
                            s && !s.done && (o = a.return) && o.call(a)
                        } finally {
                            if (n) throw n.error
                        }
                    }
                    return !1
                }
        },
        584: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return o
            })), n.d(e, "b", (function() {
                return i
            }));
            var r = n(72),
                o = function(t, e) {
                    void 0 === e && (e = 200);
                    var n = 0,
                        o = 0,
                        i = 1 / t,
                        a = function(t) {
                            return t.width / t.height
                        };
                    return {
                        resizeDimensions: [{
                            property: r.b.width,
                            setDimension: function(e) {
                                return n = a(e) < t ? e.width : e.height * t
                            },
                            duration: e
                        }, {
                            property: r.b.height,
                            setDimension: function(e) {
                                return o = a(e) < t ? e.width * i : e.height
                            },
                            duration: e
                        }, {
                            property: r.b.top,
                            setDimension: function(e) {
                                return a(e) < t ? (e.height - o) / 2 : 0
                            },
                            duration: e
                        }, {
                            property: r.b.left,
                            setDimension: function(e) {
                                return a(e) < t ? 0 : (e.width - n) / 2
                            },
                            duration: e
                        }]
                    }
                },
                i = function(t) {
                    return void 0 === t && (t = 200), {
                        resizeDimensions: [{
                            property: r.b.width,
                            setDimension: function(t) {
                                return t.width
                            },
                            duration: t
                        }, {
                            property: r.b.height,
                            setDimension: function(t) {
                                return t.height
                            },
                            duration: t
                        }, {
                            property: r.b.top,
                            setDimension: function() {
                                return 0
                            },
                            duration: t
                        }, {
                            property: r.b.left,
                            setDimension: function() {
                                return 0
                            },
                            duration: t
                        }]
                    }
                }
        },
        596: function(t, e, n) {
            "use strict";
            var r, o = n(29),
                i = n(54),
                a = n(65),
                s = n(258),
                u = n(114),
                c = n(30),
                l = n(18),
                h = n(658),
                p = n.n(h),
                f = n(659),
                d = n.n(f),
                y = (r = function(t, e) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                }, function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                v = function(t) {
                    function e(n, r) {
                        var o = c.a.clone(e.uniforms);
                        return o.tMask.value = n, o.tPinHole.value = r, t.call(this, {
                            vertexShader: p.a,
                            fragmentShader: d.a,
                            uniforms: o,
                            name: "PinMaterial",
                            transparent: !0
                        }) || this
                    }
                    return y(e, t), e.uniforms = {
                        tMask: {
                            type: "t",
                            value: null
                        },
                        tPinHole: {
                            type: "t",
                            value: null
                        },
                        pinColor: {
                            type: "c",
                            value: new l.a
                        },
                        opacity: {
                            type: "f",
                            value: 1
                        }
                    }, e
                }(u.a),
                m = n(83),
                w = n(14),
                g = n(95),
                b = n(262),
                T = n(543),
                P = n(660),
                D = n.n(P);
            n.d(e, "a", (function() {
                return x
            })), n.d(e, "b", (function() {
                return M
            }));
            var S = function() {
                    var t = function(e, n) {
                        return (t = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(t, e) {
                                t.__proto__ = e
                            } || function(t, e) {
                                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                            })(e, n)
                    };
                    return function(e, n) {
                        function r() {
                            this.constructor = e
                        }
                        t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                    }
                }(),
                x = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return S(e, t), e
                }(o.a),
                M = function(t) {
                    function e(n, r, o) {
                        var i = this,
                            a = new v(e.pinTexture, r);
                        return (i = t.call(this, e.geometry, a) || this).name = "PinMesh", i.cameraData = o, i._collider = new x(e.colliderGeometry, e.colliderMaterial), i._collider.material.visible = !1, i.add(i._collider), i.opacityProgress = 0, i.shouldHide = !0, i.uniforms = a.uniforms, i.unhover(), i.selected = 0, i.visible = !1, i.position.copy(n), i.renderOrder = g.a.pins, i
                    }
                    return S(e, t), e.prototype.updatePosition = function(t) {
                        this.position.copy(t)
                    }, Object.defineProperty(e.prototype, "collider", {
                        get: function() {
                            return this._collider
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.render = function(t) {
                        this.quaternion.copy(this.cameraData.pose.rotation), null === this.uniforms.tPinHole.value ? this.opacityProgress = 0 : !this.shouldHide && this.opacityProgress < 1 ? this.opacityProgress += t / e.FADE_DURATION : this.shouldHide && this.opacityProgress > 0 && (this.opacityProgress -= t / e.FADE_DURATION), this.opacityProgress = Object(w.e)(this.opacityProgress, 0, 1), this.uniforms.opacity.value = this.opacityProgress, this.visible = 0 !== this.opacityProgress
                    }, e.prototype.activate = function() {
                        this.shouldHide = !1
                    }, e.prototype.deactivate = function() {
                        this.shouldHide = !0
                    }, e.prototype.dispose = function() {
                        this.collider.geometry.dispose(), this.collider.material.dispose()
                    }, e.prototype.setPinHover = function(t, e, n) {
                        void 0 === e && (e = !0), void 0 === n && (n = !0);
                        var r = Math.min(Math.max(t, 0), 1);
                        this.selected !== r && (n && this.uniforms.pinColor.value.copy(b.a.WHITE).lerp(b.a.MP_BRAND, r), e && r > 0 && r <= 1 && (this.material.depthTest = !1), 0 === r && (this.material.depthTest = !0), this.selected = r)
                    }, e.prototype.unhover = function() {
                        this.uniforms.pinColor.value.copy(b.a.WHITE)
                    }, e.FADE_DURATION = 500, e.geometry = new a.a(1.5, 1.5), e.pinTexture = Object(m.a)(D.a), e.colliderGeometry = new s.a(1.5 * .65), e.colliderMaterial = new i.a({
                        transparent: !0,
                        opacity: .5,
                        depthWrite: !1,
                        color: 16724312
                    }), e
                }(T.a)
        },
        597: function(t, e, n) {
            "use strict";
            var r, o = n(114),
                i = n(30),
                a = n(0),
                s = n(1),
                u = n(7),
                c = n(41),
                l = n(561),
                h = n(189),
                p = (r = function(t, e) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                }, function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                f = function() {
                    return (f = Object.assign || function(t) {
                        for (var e, n = 1, r = arguments.length; n < r; n++)
                            for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                        return t
                    }).apply(this, arguments)
                };

            function d(t) {
                var e = {};
                for (var n in t) t[n] && (e = f({}, l.a.modelChunk.uniforms[n], e));
                return i.a.clone(e)
            }
            var y = function(t) {
                    function e(e, n) {
                        return t.call(this, {
                            extensions: {
                                derivatives: !0
                            },
                            fragmentShader: l.a.modelChunk.fragmentShader,
                            vertexShader: l.a.modelChunk.vertexShader,
                            uniforms: d(n),
                            name: e,
                            defines: n
                        }) || this
                    }
                    return p(e, t), e.prototype.tryUpdateUniform = function(t, e) {
                        var n = this.uniforms[t];
                        if (n) {
                            var r = n.value && n.value.copy,
                                o = n.value && e instanceof n.value.constructor;
                            !r || !o || n.value instanceof c.a ? n.value = e : n.value.copy(e), "opacity" === t && (this.transparent = 1 !== e, this.depthWrite = e > h.a)
                        }
                    }, e
                }(o.a),
                v = n(562),
                m = n(601);
            n.d(e, "b", (function() {
                return w
            })), n.d(e, "a", (function() {
                return P
            }));
            var w, g = function(t) {
                    var e = "function" == typeof Symbol && t[Symbol.iterator],
                        n = 0;
                    return e ? e.call(t) : {
                        next: function() {
                            return t && n >= t.length && (t = void 0), {
                                value: t && t[n++],
                                done: !t
                            }
                        }
                    }
                },
                b = 1,
                T = new s.a(1, 1, 1);
            ! function(t) {
                t[t.Standard = 0] = "Standard", t[t.Depth = 1] = "Depth", t[t.Transparent = 2] = "Transparent", t[t.Wireframe = 3] = "Wireframe"
            }(w || (w = {}));
            var P = function() {
                function t(t, e, n, r) {
                    var s;
                    void 0 === r && (r = "");
                    var u = this;
                    this.floorIndex = t, this.roomIndex = e, this.geometry = n, this.textureName = r, this.id = b++, this.capabilityFuncs = ((s = {})[v.a.PanoTextureTransition] = {
                        enabled: function() {
                            return u.uniformCache.pano0Map !== u.uniformCache.pano1Map && u.uniformCache.progress > 0
                        },
                        dependsOn: [v.a.PanoTexture]
                    }, s[v.a.PanoTexture] = {
                        enabled: function() {
                            return u.uniformCache.meshOpacity < 1
                        },
                        dependsOn: []
                    }, s[v.a.ColorOverlay] = {
                        enabled: function() {
                            return null !== u.uniformCache.colorOverlay
                        },
                        dependsOn: []
                    }, s[v.a.MeshPreviewSphere] = {
                        enabled: function() {
                            return null !== u.uniformCache.meshPreviewCenter
                        },
                        dependsOn: [v.a.MeshTexture]
                    }, s[v.a.MeshTexture] = {
                        enabled: function() {
                            return u.uniformCache.meshOpacity > 0
                        },
                        dependsOn: []
                    }, s[v.a.Wireframe] = {
                        enabled: function() {
                            return !1
                        },
                        dependsOn: []
                    }, s[v.a.FlatShading] = {
                        enabled: function() {
                            return !1
                        },
                        dependsOn: []
                    }, s), this.chunkMaterials = {}, this.modeMaterials = {}, this.uniformCache = this.getUniformDefaults(), this.modeMaterials[w.Standard] = this.getChunkMaterial(this.getCapabilities());
                    var c = i.a.clone(l.a.depth.uniforms);
                    this.modeMaterials[w.Depth] = new o.a({
                        fragmentShader: l.a.depth.fragmentShader,
                        vertexShader: l.a.depth.vertexShader,
                        uniforms: c,
                        side: a.F,
                        name: "materialDepth"
                    });
                    var h = i.a.clone(l.a.modelOutside.uniforms);
                    h.opacity.value = .2, this.modeMaterials[w.Transparent] = new o.a({
                        fragmentShader: l.a.modelOutside.fragmentShader,
                        vertexShader: l.a.modelOutside.vertexShader,
                        uniforms: h,
                        side: a.F,
                        transparent: !0,
                        name: "materialTransparent"
                    });
                    var p = i.a.clone(l.a.modelOutside.uniforms);
                    p.opacity.value = .5, p.colorOverlay.value.set(1, 1, 1, 1), this.modeMaterials[w.Wireframe] = new o.a({
                        fragmentShader: l.a.modelOutside.fragmentShader,
                        vertexShader: l.a.modelOutside.vertexShader,
                        uniforms: p,
                        side: a.F,
                        transparent: !0,
                        wireframe: !0,
                        name: "materialWireframe"
                    })
                }
                return t.prototype.getUniformDefaults = function() {
                    var t = {};
                    for (var e in l.a.modelChunk.uniforms)
                        for (var n in l.a.modelChunk.uniforms[e]) t[n] = l.a.modelChunk.uniforms[e][n].value;
                    return t
                }, t.prototype.build = function(t, e) {
                    this.roomMesh = t, this.materialIndex = e
                }, Object.defineProperty(t.prototype, "material", {
                    get: function() {
                        return this.roomMesh.material[this.materialIndex]
                    },
                    set: function(t) {
                        this.roomMesh.material[this.materialIndex] = t
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.setMeshTexture = function(t) {
                    this.setMaterialsUniform("map", t)
                }, t.prototype.setColorOverlay = function(t) {
                    this.setMaterialsUniform("colorOverlay", t)
                }, t.prototype.setMeshTextureOpacity = function(t) {
                    this.setMaterialsUniform("meshOpacity", t)
                }, t.prototype.setProgress = function(t) {
                    this.setMaterialsUniform("progress", t)
                }, t.prototype.setOpacity = function(t) {
                    this.setMaterialsUniform("opacity", t)
                }, t.prototype.setMeshPreviewSphere = function(t, e) {
                    void 0 === e && (e = .3), this.setMaterialsUniform("meshPreviewCenter", t), this.setMaterialsUniform("meshPreviewSize", e)
                }, t.prototype.setWireframe = function(t) {
                    if (t) {
                        if (this.roomMesh.geometry.getIndex()) {
                            var e = this.roomMesh.geometry;
                            this.roomMesh.geometry = e.toNonIndexed(), this.roomMesh.geometry.boundingBox = e.boundingBox, this.roomMesh.geometry.boundingSphere = e.boundingSphere
                        }
                        Object(m.a)(this.roomMesh.geometry)
                    }
                    this.capabilityFuncs[v.a.Wireframe].enabled = function() {
                        return t
                    }, this.updateMaterialCapabilities()
                }, t.prototype.setFlatShading = function(t) {
                    t && this.roomMesh.geometry.computeVertexNormals(), this.capabilityFuncs[v.a.FlatShading].enabled = function() {
                        return t
                    }, this.updateMaterialCapabilities()
                }, t.prototype.getCapabilities = function() {
                    var t, e, n = {};
                    for (var r in this.capabilityFuncs)
                        if (n[r] = n[r] || this.capabilityFuncs[r].enabled(), n[r]) try {
                            for (var o = g(this.capabilityFuncs[r].dependsOn), i = o.next(); !i.done; i = o.next()) {
                                n[i.value] = !0
                            }
                        } catch (e) {
                            t = {
                                error: e
                            }
                        } finally {
                            try {
                                i && !i.done && (e = o.return) && e.call(o)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                    return n
                }, t.prototype.overrideCapability = function(t, e) {
                    this.capabilityFuncs[t].enabled = function() {
                        return e
                    }
                }, t.prototype.updateMaterialCapabilities = function() {
                    var t = this.getCapabilities(),
                        e = this.modeMaterials[w.Standard],
                        n = this.getChunkMaterial(t);
                    if (e !== n) {
                        for (var r in this.uniformCache) n.tryUpdateUniform(r, this.uniformCache[r]);
                        n.side = e.side, this.modeMaterials[w.Standard] = n, this.renderingMode === w.Standard && (this.material = n)
                    }
                }, t.prototype.getChunkMaterial = function(t) {
                    var e = "chunkMaterial_";
                    for (var n in t) e += t[n] ? "1" : "0";
                    return this.chunkMaterials[e] || (this.chunkMaterials[e] = new y(e, t)), this.chunkMaterials[e]
                }, t.prototype.setMaterialsUniform = function(t, e) {
                    this.uniformCache[t] = e, this.modeMaterials[w.Standard].tryUpdateUniform(t, e), this.updateMaterialCapabilities()
                }, t.prototype.setRenderingMode = function(t) {
                    this.renderingMode = t, this.material = this.modeMaterials[t]
                }, t.prototype.setSide = function(t) {
                    for (var e in this.chunkMaterials) this.chunkMaterials[e].side = t
                }, t.prototype.forEachMaterial = function(t) {
                    for (var e in this.chunkMaterials) t(this.chunkMaterials[e])
                }, t.prototype.setProjectedPano = function(t, e, n, r) {
                    var o = "pano" + t;
                    if (r && this.setMaterialsUniform(o + "Map", r), e && this.setMaterialsUniform(o + "Position", e), n && e) {
                        var i = (new u.a).compose(e, n, T);
                        this.setMaterialsUniform(o + "Matrix", i)
                    }
                }, t
            }()
        },
        598: function(t, e, n) {
            "use strict";
            var r;
            ! function(t) {
                t[t.Center = 0] = "Center", t[t.UpperLeft = 1] = "UpperLeft", t[t.UpperRight = 2] = "UpperRight", t[t.LowerRight = 3] = "LowerRight", t[t.LowerLeft = 4] = "LowerLeft"
            }(r || (r = {})), e.a = r
        },
        599: function(t, e, n) {
            "use strict";
            var r, o = n(9),
                i = (r = function(t, e) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                }, function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                a = function(t) {
                    function e(e) {
                        var n = t.call(this) || this;
                        return n.sweepIds = e, n
                    }
                    return i(e, t), e
                }(o.a);
            e.a = a
        },
        600: function(t, e, n) {
            "use strict";
            var r, o = n(9),
                i = (r = function(t, e) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                }, function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                a = function(t) {
                    function e() {
                        return t.call(this) || this
                    }
                    return i(e, t), e
                }(o.a);
            e.a = a
        },
        601: function(t, e, n) {
            "use strict";
            n.d(e, "b", (function() {
                return o
            })), n.d(e, "a", (function() {
                return i
            }));
            var r = n(12);

            function o(t) {
                var e = t.match(/group([0-9]+)/),
                    n = t.match(/sub([0-9]+)/);
                return {
                    floorIndex: e ? parseInt(e[1], 10) : 0,
                    roomIndex: n ? parseInt(n[1], 10) : 0
                }
            }

            function i(t, e) {
                if (void 0 === e && (e = !1), !t.getAttribute("barycentric")) {
                    for (var n = (t.getIndex() || t.getAttribute("position")).count / 3, o = [], i = 0; i < n; i++) {
                        var a = e ? 1 : 0;
                        i % 2 == 0 ? o.push(0, 0, 1, 0, 1, 0, 1, 0, a) : o.push(0, 1, 0, 0, 0, 1, 1, 0, a)
                    }
                    var s = new Float32Array(o),
                        u = new r.a(s, 3);
                    t.setAttribute("barycentric", u)
                }
            }
        },
        602: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return i
            }));
            var r, o = (r = function(t, e) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                }, function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                i = function(t) {
                    function e() {
                        var e = t.call(this) || this;
                        return e.message = "Tried to start view-mode transition while another transition was active!", e
                    }
                    return o(e, t), e
                }(Error)
        },
        604: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return i
            })), n.d(e, "b", (function() {
                return a
            }));
            var r = n(3),
                o = new r.a("webvr"),
                i = function() {
                    return "getVRDisplays" in navigator
                },
                a = function() {
                    return navigator.getVRDisplays().then((function(t) {
                        return t.length > 0 && t[0].capabilities.canPresent ? t[0] : null
                    })).catch((function(t) {
                        return o.warn("Getting VR display failed"), o.warn(t), null
                    }))
                }
        },
        634: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return o
            }));
            var r = function(t) {
                    var e = "function" == typeof Symbol && t[Symbol.iterator],
                        n = 0;
                    return e ? e.call(t) : {
                        next: function() {
                            return t && n >= t.length && (t = void 0), {
                                value: t && t[n++],
                                done: !t
                            }
                        }
                    }
                },
                o = function() {
                    function t(t) {
                        this.comparer = t || this.defaultComparer, this.poolArray = []
                    }
                    return t.prototype.add = function(t) {
                        var e = this.createObjectDescriptor(t);
                        return e.object = t, e.inUse = !0, this.addObjectDescriptorToPool(e), e
                    }, t.prototype.get = function(t) {
                        var e, n;
                        try {
                            for (var o = r(this.poolArray), i = o.next(); !i.done; i = o.next()) {
                                var a = i.value;
                                if (!a.inUse && this.comparer(a, t)) return a.inUse = !0, a
                            }
                        } catch (t) {
                            e = {
                                error: t
                            }
                        } finally {
                            try {
                                i && !i.done && (n = o.return) && n.call(o)
                            } finally {
                                if (e) throw e.error
                            }
                        }
                        return null
                    }, t.prototype.free = function(t) {
                        var e, n;
                        try {
                            for (var o = r(this.poolArray), i = o.next(); !i.done; i = o.next()) {
                                var a = i.value;
                                if (a.object === t) return a.inUse = !1, !0
                            }
                        } catch (t) {
                            e = {
                                error: t
                            }
                        } finally {
                            try {
                                i && !i.done && (n = o.return) && n.call(o)
                            } finally {
                                if (e) throw e.error
                            }
                        }
                        return !1
                    }, t.prototype.all = function() {
                        return this.poolArray
                    }, t.prototype.remove = function(t) {
                        var e = this.poolArray.findIndex((function(e) {
                            return e.object === t
                        }));
                        return -1 !== e && (this.poolArray.splice(e, 1), !0)
                    }, t.prototype.defaultComparer = function(t, e) {
                        return !0
                    }, t.prototype.createObjectDescriptor = function(t) {
                        return {
                            object: t,
                            inUse: !1
                        }
                    }, t.prototype.addObjectDescriptorToPool = function(t) {
                        this.poolArray.push(t)
                    }, t
                }()
        },
        636: function(t, e) {
            t.exports = "varying vec3 vWorldPosition;\n\nvoid main() {\n  vWorldPosition = position;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}\n"
        },
        637: function(t, e) {
            t.exports = "uniform samplerCube map;\nuniform float opacity;\n\nvarying vec3 vWorldPosition;\n\nvoid main() {\n  vec4 color = textureCube( map, vec3( -vWorldPosition.x, vWorldPosition.yz ) );\n  gl_FragColor = vec4(color.rgb, opacity);\n}\n"
        },
        638: function(t, e) {
            t.exports = "#ifdef PANO_TEXTURE\n  uniform vec3 pano0Position;\n  uniform mat4 pano0Matrix;\n  varying vec3 vWorldPosition0;\n#endif\n\n#ifdef PANO_TEXTURE_TRANSITION\n  varying vec3 vWorldPosition1;\n  uniform vec3 pano1Position;\n  uniform mat4 pano1Matrix;\n#endif\n\n#ifdef MESH_PREVIEW_SPHERE\n  varying vec3 worldPos;\n#endif\n\n#ifdef MESH_TEXTURE\n  varying vec2 vUv;\n#endif\n\n#ifdef WIREFRAME\n  attribute vec3 barycentric;\n  varying vec3 vBarycentric;\n#endif\n\n#ifdef FLAT_SHADING\n  varying vec3 vNormal;\n#endif\n\nvoid main() {\n\n  vec4 worldPosition = modelMatrix * vec4(position, 1.0);\n\n  #ifdef MESH_TEXTURE\n    vUv = uv;\n  #endif\n\n  #ifdef WIREFRAME\n    vBarycentric = barycentric;\n  #endif\n\n  #ifdef MESH_PREVIEW_SPHERE\n    worldPos = worldPosition.xyz;\n  #endif\n\n  #ifdef FLAT_SHADING\n    vNormal = normal;\n  #endif\n\n  #ifdef PANO_TEXTURE\n    vec3 positionLocalToPanoCenter0 = worldPosition.xyz - pano0Position;\n    vWorldPosition0 = (vec4(positionLocalToPanoCenter0, 1.0) * pano0Matrix).xyz;\n    vWorldPosition0.x *= -1.0;\n  #endif\n\n  #ifdef PANO_TEXTURE_TRANSITION\n    vec3 positionLocalToPanoCenter1 = worldPosition.xyz - pano1Position;\n    vWorldPosition1 = (vec4(positionLocalToPanoCenter1, 1.0) * pano1Matrix).xyz;\n    vWorldPosition1.x *= -1.0;\n  #endif\n\n  vec4 projectedPosition = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n\n  gl_Position = projectedPosition;\n\n}\n"
        },
        639: function(t, e) {
            t.exports = "#ifdef PANO_TEXTURE\n  uniform vec3 pano0Position;\n  uniform samplerCube pano0Map;\n  varying vec3 vWorldPosition0;\n#endif\n\n#ifdef PANO_TEXTURE_TRANSITION\n  uniform float progress;\n\n  uniform vec3 pano1Position;\n  uniform samplerCube pano1Map;\n  varying vec3 vWorldPosition1;\n#endif\n\n#ifdef MESH_PREVIEW_SPHERE\n  uniform vec3 meshPreviewCenter;\n  uniform float meshPreviewSize;\n  varying vec3 worldPos;\n#endif\n\n#ifdef MESH_TEXTURE\n  varying vec2 vUv;\n  uniform sampler2D map;\n  uniform float meshOpacity;\n  uniform float opacity;\n#endif\n\n#ifdef COLOR_OVERLAY\n  uniform vec4 colorOverlay;\n#endif\n\n#ifdef WIREFRAME\n  // Wireframe stuff is based on https://github.com/mattdesl/webgl-wireframes\n  varying vec3 vBarycentric;\n\n  uniform float time;\n  uniform float thickness;\n  uniform float secondThickness;\n\n  uniform float dashRepeats;\n  uniform float dashLength;\n  uniform bool dashOverlap;\n  uniform bool dashEnabled;\n  uniform bool dashAnimate;\n\n  uniform bool fillEnabled;\n  uniform bool insideAltColor;\n  uniform bool dualStroke;\n\n  uniform bool squeeze;\n  uniform float squeezeMin;\n  uniform float squeezeMax;\n  uniform float wireframeOpacity;\n\n  uniform vec3 stroke;\n  uniform vec3 fill;\n\n\n  // This is like\n  float aastep (float threshold, float dist) {\n    float afwidth = fwidth(dist) * 0.5;\n    return smoothstep(threshold - afwidth, threshold + afwidth, dist);\n  }\n\n  // This function is not currently used, but it can be useful\n  // to achieve a fixed width wireframe regardless of z-depth\n  float computeScreenSpaceWireframe (vec3 barycentric, float lineWidth) {\n    vec3 dist = fwidth(barycentric);\n    vec3 smoothed = smoothstep(\n      dist * ((lineWidth * 0.5) - 0.5),\n      dist * ((lineWidth * 0.5) + 0.5),\n      barycentric);\n    return 1.0 - min(min(smoothed.x, smoothed.y), smoothed.z);\n  }\n\n  // This function returns the fragment color for our styled wireframe effect\n  // based on the barycentric coordinates for this fragment\n  vec4 getStyledWireframe (vec3 barycentric) {\n\n    float PI = 3.14159265359;\n\n    // this will be our signed distance for the wireframe edge\n    float d = min(min(barycentric.x, barycentric.y), barycentric.z);\n\n    // for dashed rendering, we can use this to get the 0 .. 1 value of the line length\n    float positionAlong = max(barycentric.x, barycentric.y);\n    if (barycentric.y < barycentric.x && barycentric.y < barycentric.z) {\n      positionAlong = 1.0 - positionAlong;\n    }\n\n    // the thickness of the stroke\n    float computedThickness = thickness;\n\n    // if we want to shrink the thickness toward the center of the line segment\n    if (squeeze) {\n      computedThickness *= mix(squeezeMin, squeezeMax, (1.0 - sin(positionAlong * PI)));\n    }\n\n    // if we should create a dash pattern\n    if (dashEnabled) {\n      // here we offset the stroke position depending on whether it\n      // should overlap or not\n      float offset = 1.0 / dashRepeats * dashLength / 2.0;\n      if (!dashOverlap) {\n        offset += 1.0 / dashRepeats / 2.0;\n      }\n\n      // if we should animate the dash or not\n      if (dashAnimate) {\n        offset += time * 0.22;\n      }\n\n      // create the repeating dash pattern\n      float pattern = fract((positionAlong + offset) * dashRepeats);\n      computedThickness *= 1.0 - aastep(dashLength, pattern);\n    }\n\n    // Compute the anti-aliased stroke edge\n    float edge = computeScreenSpaceWireframe(barycentric, computedThickness);\n    // Replace with the folloing you want world-space thickness instead of screenspace\n    // float edge = 1.0 - aastep(computedThickness, d);\n\n    // now compute the final color of the mesh\n    vec4 outColor = vec4(0.0, 0.0, 0.0, 0.0);\n    if (!fillEnabled) {\n      outColor = vec4(stroke, edge);\n      if (insideAltColor && !gl_FrontFacing) {\n        outColor.rgb = fill;\n      }\n    } else {\n      outColor.a = 1.0;\n      if (dualStroke) {\n        float inner = 1.0 - aastep(secondThickness, d);\n        vec3 wireColor = mix(fill, stroke, abs(inner - edge));\n        outColor.rgb = wireColor;\n      } else {\n        outColor.rgb = mix(fill, stroke, edge);\n      }\n    }\n    outColor.a *= wireframeOpacity;\n    return outColor;\n  }\n#endif\n\n#ifdef FLAT_SHADING\n  varying vec3 vNormal;\n#endif\n\nvoid main() {\n  #ifdef PANO_TEXTURE_TRANSITION\n    vec4 colorFromPano0 = textureCube( pano0Map, vWorldPosition0.xyz);\n    vec4 colorFromPano1 = textureCube( pano1Map, vWorldPosition1.xyz);\n    vec4 color = mix(colorFromPano0, colorFromPano1, progress);\n  #elif defined(PANO_TEXTURE)\n    vec4 color = textureCube( pano0Map, vWorldPosition0.xyz);\n  #else\n    vec4 color = vec4(0.0, 0.0, 0.0, 1.0);\n  #endif\n\n  #ifdef MESH_TEXTURE\n    vec4 colorFromTexture = texture2D( map, vUv );\n  #endif\n\n  #ifdef MESH_PREVIEW_SPHERE\n    // the area within the previewDistance will show the mesh texture\n    float previewDistance = distance(worldPos.xyz, meshPreviewCenter.xyz);\n    float inSphere = step(previewDistance, meshPreviewSize );\n    // 20% brightness bump for in-sphere texture\n    colorFromTexture += colorFromTexture * (0.2 * inSphere);\n\n    color = mix(color, colorFromTexture, max(meshOpacity, inSphere));\n  #elif defined(MESH_TEXTURE)\n    color = mix(color, colorFromTexture, meshOpacity);\n  #endif\n\n  #ifdef FLAT_SHADING\n    float ao = 0.9 - abs(vNormal.y) * 0.1 - abs(vNormal.x) * 0.05 + abs(vNormal.z) * 0.05;\n    color.rgb = vec3(ao, ao * 1.025, ao * 1.05);\n  #endif\n\n  #ifdef COLOR_OVERLAY\n    color = mix(color, vec4(colorOverlay.rgb, 1.0), colorOverlay.a);\n  #endif\n\n  #ifdef WIREFRAME\n    vec4 colorFromWireframe = getStyledWireframe(vBarycentric);\n    color = mix(color, vec4(colorFromWireframe.rgb, 1.0), colorFromWireframe.a);\n  #endif\n\n  #ifdef MESH_TEXTURE\n    const vec4 WHITE = vec4(0.8, 0.8, 0.8, 1.0);\n    float whiteness = 1.0 - smoothstep(0.1, 0.2, opacity);\n    color = mix(color, WHITE, whiteness);\n    color.a = opacity;\n  #endif\n\n  gl_FragColor = color;\n}\n"
        },
        640: function(t, e) {
            t.exports = "varying vec2 vUv;\n\nvoid main() {\n\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n}\n"
        },
        641: function(t, e) {
            t.exports = "uniform sampler2D map;\nuniform float opacity;\nuniform vec4 colorOverlay;\nvarying vec2 vUv;\n\nvec4 white = vec4(0.8, 0.8, 0.8, 1.0);\nvec4 black = vec4(0.0, 0.0, 0.0, 1.0);\n\nvoid main() {\n\n  vec4 colorFromTexture = texture2D( map, vUv );\n  float whiteness = 1.0 - smoothstep(0.1, 0.2, opacity);\n  colorFromTexture = mix(colorFromTexture, vec4(colorOverlay.rgb, 1.0), colorOverlay.a);\n  colorFromTexture = mix(colorFromTexture, white, whiteness);\n  gl_FragColor = vec4(colorFromTexture.rgb, opacity);\n\n}\n"
        },
        642: function(t, e) {
            t.exports = "varying vec3 vWorldPosition;\n\nvoid main() {\n\n  vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n}\n"
        },
        643: function(t, e) {
            t.exports = "uniform vec3 color;\nuniform float opacity;\nuniform float maxDistance;\n\nvarying vec3 vWorldPosition;\n\nvoid main() {\n\n  float distanceToCamera = distance(cameraPosition, vWorldPosition);\n  float distanceBucketed = 1.0 - clamp(distanceToCamera / maxDistance, 0.0, 1.0);\n  // If the floor is ghosted, we don't want to load any texture from it,\n  // and more importantly we don't want it to block the texture beneath the ghosted floor\n  if (opacity < 1.0) {\n    discard;\n  }\n  gl_FragColor = vec4(distanceBucketed, distanceBucketed, distanceBucketed, 1.0);\n\n}\n"
        },
        644: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return a
            }));
            var r, o = n(21),
                i = (r = function(t, e) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                }, function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                a = function(t) {
                    function e(e) {
                        var n = t.call(this) || this;
                        return n.id = "SET_CHUNK_RENDER_MODE", n.payload = {
                            mode: e
                        }, n
                    }
                    return i(e, t), e
                }(o.a)
        },
        648: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return a
            }));
            var r = n(83),
                o = n(649),
                i = n.n(o),
                a = Object(r.a)(i.a)
        },
        649: function(t, e) {
            t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAAAP1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////9Du/pqAAAAFXRSTlMAmYWNk1l7bCJCEQpjKHQ0GE9HHToMZFdDAAAHfklEQVR42uzcC3LcIAwAUAnxMT//73/WTmcnnWw7za6xMMLJO0HsCEkI1vDjx49rhbz7xaTRKkWkETWRUnZMZvF7DnBjIa9pVPiCGtN6v/cw72YkPIBGs89wD8PqCIuQWwfoW/BO4yna+W7XQzYKWSiToTvZEDKivt7BZgjZkdmgC9FbrMT6CNINSWNFOsmuC5PF6uwEUnmFl1AeBIoL4WVoEZcMFsJL0QKSrISXoxWk2AmboB0kGCw2Y9sXxZCwqRSgqVVjY3qFdjaLAtgNGllQiAVaGBSKoRokQ9989X+mPVwrOhTGRfjSfcP/rWVw6/B/vQxuH/6vlsH9w//LZfAtwv+6ZWBQOANVJRQvQUVi099nDmqJIvY+r9kIVQTB6f+ZClDB3M3zI6oZ2A2EHaEBmGXR5f9fOgOrobPnR9QDMJq7iv8Hmr9j/q9TC2KXz4+oIvCwWIUmZUfnRqtIYxVWZv+rnPE5RHgSQ/bGKUQU1xUn5GPNtMGXtslYWTsjg0yUmSK8JU5Gidkde+Sg3RTgkDA5jRy8gAbI+lh43ax5Q8RQANUyQ7F5UW2LocOTxgwn5bFhKVjxHDcAg8HhOWujBJA2YLIl9jRQPwGkGRjNqUEacKIu7wz26jTgsRh5qMDTpd3AoMVdXArpyjSgsJDKUE0u/6vgoEXo0ZS56B7RhmVogsomwjLbFTMQO0N1s71gOrKKDP8PpnpDGDQW0BNcZCr7+wK8K8k4jOE+pkrwpkHKcRz3QeUA77FiDmT/L6h6eXDH48YIF4sjHrfDO0jSpQzezRrBG9ZOnr/oDaxVAmCERsYaIbCUjBsaiYp/SxBJev4/VwsocgcAzdDQTNwhQNcMHNtdXSHmOVjzn3JPvNMxJXP/x7k3VJyv04IAljFobU8J8MNMbP+1obcE8DCxbQpTdwngwTDNBaI+mE3EUHiEjjw1UNCnjTJPJbRyfplR9yaX5TgLIFHfOAuER2wMqUTYp2w8Q/qm7lqg4vVL5xNJ+493/GU4ncBNtxmwIA+asytARA/8bD65BnLnAXAwBPK5FSDy04bbuTWg5I/BX3Fn+vjQdQkoKAQBnvkezgFeGU80cq7PXdCzfGIZ6y63wScSmYYng/jvNr1lKU5ka99N0Ie5+JzUdbwN+syWJgHqdh9cXMyoMHS0uO+5fhZ12VLeu+8CP7iy+zKmu7MAhjMCU9ZCiRoF/iuUNbR0hy7oQZVkwdDhadD/mJJgzrdJAYeSQC7pA0UXwd9iSS+Y7tEGPtiCwd54nxQAYArKgLpPCgCYCipa59PQ4tloQRWEDiAerYMZb9MGHVvQGR52vMlO6MEd3g55vFEROFIGPDwseIthyPGhyPLnlXU/EP/F3pkjAQzCMBDGDBXh/8/NpMmQUunslZ/gHPiQljMu+YVevUgvrB5q6y0Ey3QCWjewz3OjTBkgFAJTTcBoKWIIZY2WgGgpItQERKlC8McDjULTgCemmoCRXhjwja3+03qpVkBpBpwAfwL+CfoYdCHkUrjNDm+G8O0wfiCCH4nhh6L4sTh+MYJfjeGXo/j1uAUSeIkMXiSFl8nhhZJ4qSxeLG25PN4wgbfM4E1TeNucjZN46yzePI23zxuggEdo4CEqeIyOQUp4lBYepmacHh6oiEdqGqqKx+riwcpGa+Ph6ni8vi9YwF+xcbN3pzkOwjAUgJ9DFrLQQLn/XUfzZzSbWjBOa5bvBBEimx3pXSErp4/ZuYKWTh+1dYWtnT5u7/SBi1fk5hW6evrY3St4+fTR21f4+unj95EsMdiKF6m88SV8WboV6rwbOmK5YwVPLH5EcyN3bCtbzTxdRWO1I5559XsrldPAEdPEqDTzmAHNDPxRcSoNXCWhiVSIgV23icTWRTQQO2KLYAjE53sI6z3xBXa5ga+MEDQW2sBkdsFxizJDyFyIQaBwG2mb0ENAH2ibCLZAG90GbDTcaKMgUXXkM9MItnESGEAW6jvw+ZjBkKMnBuHOTSQJNtSEVVINliRE4cM3n3E1Y5FcnSEhDpsVkuNdnfHQXJ0nOQUCAskywcUhZfyQ0xBdMCQrQISnJmxn/C2EmzedpSa8XAtul+SalmmXX0CyVTF2tDt/Hy68/UC0nIID0G/Dzr6AHfDp7c0YCVraVOOOVsKfjcrz7QWtWtXZ0y74jP9oPBV/UXj+/V8h9Qr+UNGaekbR/fexqPpAYCOa6xVvBqbHC2S1S2HIeI27ymlg73jg+NPgye9/+Gmw4Pc/8m6wbPU/7jQwPd5hIiUmvMms4nbkZ6xxtA2Ru/kpeLj0nboHWYzHO2yqniJ9tHN3OwiDMBSA1x7KxgQU5P2f1QtvTIxubox1Zt8btOEnJOUsUkC7QOm0yKDmkDtNEqgpqIt1vLRsAZLKbFvH1AQri/B5cbW0Obv7h/WvBm9oQ8bruPimhrs2Yp3Krf/uLqDqICpjHD8JgrrVK4ptmisIUxV8xOqfRtebtSOWbv/nzjpD7kGLoM/6z/x5bkUi6AeIUlSkNNU0huwj0wSOPoejr/qJPhSXxEfLDBgiAzDb6CW58t+Vn04aPQDVw5SJCNPsmgAAAABJRU5ErkJggg=="
        },
        650: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return s
            }));
            var r, o = n(25),
                i = n(81),
                a = (r = function(t, e) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                }, function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                s = function(t) {
                    function e(e) {
                        var n = t.call(this) || this;
                        return n.data = e, n.name = "label-view", n.selected = new i.a(null), n.editing = new i.a(null), n
                    }
                    return a(e, t), e.prototype.initialize = function(t) {}, e.prototype.dispose = function() {}, e.prototype.iterate = function(t) {
                        this.data.iterate(t)
                    }, e
                }(o.a)
        },
        651: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return u
            }));
            var r = n(1),
                o = n(7),
                i = n(16),
                a = n(10),
                s = {
                    sharpTurnDotThreshold: .65,
                    directionWeightFactorStd: .75,
                    directionWeightFactorSharp: .2,
                    positionalWeightFactorStd: .4,
                    positionalWeightFactorSharp: .2,
                    finalWalkingNodeDirectionWeight: 5,
                    lookAheadNodes: 3
                },
                u = function() {
                    function t(t) {
                        void 0 === t && (t = s), this.settings = t
                    }
                    return t.prototype.getOrientationsForPath = function(t, e) {
                        for (var n = [], s = 0; s < t.length; s++) {
                            var u = new r.a;
                            this.getLookVectorsForPathNode(t, s, e, u);
                            var c = (new o.a).lookAt(t[s], u, a.b.UP);
                            n[s] = (new i.a).setFromRotationMatrix(c)
                        }
                        return n.push(e), n
                    }, t.prototype.getLookVectorsForPathNode = function(t, e, n, o) {
                        var i = new r.a,
                            a = new r.a,
                            s = new r.a,
                            u = new r.a,
                            c = t.length;
                        if (e >= c) return !1;
                        for (var l, h = 1, p = 1, f = new r.a, d = e; d < e + this.settings.lookAheadNodes && d < c; d++) {
                            if (l = t[d], this.getOrientationForPathNode(t, d, n, s), d === e && i.copy(s), d > e) {
                                var y = i.dot(s) < this.settings.sharpTurnDotThreshold;
                                h *= y ? this.settings.directionWeightFactorSharp : this.settings.directionWeightFactorStd, p *= y ? this.settings.positionalWeightFactorSharp : this.settings.positionalWeightFactorStd
                            }
                            d === c - 1 && (h = this.settings.finalWalkingNodeDirectionWeight, p = 1), f.copy(s), s.multiplyScalar(h), a.add(s), u.lerp(l, p)
                        }
                        return a.normalize(), o.copy(u), o.add(a), !0
                    }, t.prototype.getOrientationForPathNode = function(t, e, n, r) {
                        if (e >= t.length) return !1;
                        if (e === t.length - 1) r.copy(a.b.FORWARD).applyQuaternion(n);
                        else {
                            var o = t[e],
                                i = t[e + 1];
                            r.copy(i).sub(o)
                        }
                        return r.normalize(), !0
                    }, t
                }()
        },
        652: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return a
            }));
            var r, o = n(21),
                i = (r = function(t, e) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                }, function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                a = function(t) {
                    function e(e, n, r) {
                        var o = t.call(this) || this;
                        return o.id = "MESH_PREVIEW_POSITION", o.payload = {
                            enabled: e,
                            previewCirclePosition: n,
                            size: r
                        }, o
                    }
                    return i(e, t), e
                }(o.a)
        },
        653: function(t, e, n) {
            "use strict";
            n.d(e, "b", (function() {
                return p
            })), n.d(e, "a", (function() {
                return f
            })), n.d(e, "d", (function() {
                return d
            })), n.d(e, "c", (function() {
                return y
            }));
            var r = n(83),
                o = n(654),
                i = n.n(o),
                a = n(655),
                s = n.n(a),
                u = n(656),
                c = n.n(u),
                l = n(657),
                h = n.n(l),
                p = Object(r.a)(i.a),
                f = Object(r.a)(s.a),
                d = Object(r.a)(c.a),
                y = Object(r.a)(h.a)
        },
        654: function(t, e, n) {
            t.exports = n.p + "images/exterior.png"
        },
        655: function(t, e, n) {
            t.exports = n.p + "images/exterior_hover.png"
        },
        656: function(t, e, n) {
            t.exports = n.p + "images/interior.png"
        },
        657: function(t, e, n) {
            t.exports = n.p + "images/interior_hover.png"
        },
        658: function(t, e) {
            t.exports = "precision highp float;\nprecision highp int;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nattribute vec3 position;\nattribute vec2 uv;\n\nvarying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n"
        },
        659: function(t, e) {
            t.exports = "precision highp float;\nprecision highp int;\n\nvarying vec2 vUv;\nuniform sampler2D tMask;\nuniform sampler2D tPinHole;\nuniform vec3 pinColor;\nuniform float opacity;\n\n// The pin mask has red color which should be replaced with the pin's image.\n// and white color that can be replaced with any other color.\n// 0.1 means color must be almost fully red to be considered red\n// 0.9 means color only has to contain a tad red to be considered red.\n#define COLOR_TOLERANCE 0.9\n\nvoid main() {\n  vec4 maskColor = texture2D(tMask, vUv);\n\n  // The pin hole is slightly off center; the hole center is at y = 110 of the pin with height = 128\n  // so we shift the sampling of the pin hole texture (in NDC) by 110 / 128 / 2 = 0.11\n  vec4 pinHoleColor = vec4(texture2D(tPinHole, vec2(vUv.x, vUv.y - 0.11)).xyz, 1.0);\n\n  float maskHasRed = step(COLOR_TOLERANCE, maskColor.r);\n  float maskHasntBlue = step(maskColor.b, 1.0 - COLOR_TOLERANCE);\n  vec4 mixedPinColor = mix(vec4(pinColor, 1.0), pinHoleColor, maskHasRed * maskHasntBlue);\n  mixedPinColor.a = min(mixedPinColor.a, maskColor.a) * opacity;\n  gl_FragColor = mixedPinColor;\n}\n"
        },
        660: function(t, e, n) {
            t.exports = n.p + "images/360_placement_pin_mask.png"
        },
        661: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return a
            }));
            var r, o = n(9),
                i = (r = function(t, e) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                }, function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                a = function(t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        return r.sweepId = e, r.clicked = n, r
                    }
                    return i(e, t), e
                }(o.a)
        },
        662: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return a
            }));
            var r, o = n(9),
                i = (r = function(t, e) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                }, function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                a = function(t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        return r.toSweep = e, r.selected = n, r
                    }
                    return i(e, t), e
                }(o.a)
        },
        663: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return a
            }));
            var r, o = n(21),
                i = (r = function(t, e) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                }, function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                a = function(t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        return r.id = "PIN_SWEEP", r.payload = {
                            id: e,
                            selected: n
                        }, r
                    }
                    return i(e, t), e
                }(o.a)
        },
        772: function(t, e, n) {
            "use strict";
            var r, o, i = n(9),
                a = n(29),
                s = n(65),
                u = n(114),
                c = n(30),
                l = n(807),
                h = n.n(l),
                p = n(808),
                f = n.n(p),
                d = (r = function(t, e) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                }, function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                y = function(t) {
                    function e(n, r) {
                        var o = c.a.clone(e.uniforms);
                        return o.tNoHover.value = n, o.tHover.value = r, o.tPortal.value = null, t.call(this, {
                            vertexShader: h.a,
                            fragmentShader: f.a,
                            uniforms: o,
                            name: "PortalMaterial",
                            transparent: !0
                        }) || this
                    }
                    return d(e, t), e.uniforms = {
                        tNoHover: {
                            type: "t",
                            value: null
                        },
                        tHover: {
                            type: "t",
                            value: null
                        },
                        tPortal: {
                            type: "t",
                            vlaue: null
                        },
                        progress: {
                            type: "f",
                            value: 1
                        },
                        opacity: {
                            type: "f",
                            value: 1
                        }
                    }, e
                }(u.a),
                v = n(653),
                m = n(14),
                w = n(95),
                g = function() {
                    var t = function(e, n) {
                        return (t = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(t, e) {
                                t.__proto__ = e
                            } || function(t, e) {
                                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                            })(e, n)
                    };
                    return function(e, n) {
                        function r() {
                            this.constructor = e
                        }
                        t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                    }
                }();
            ! function(t) {
                t[t.HIDE = 0] = "HIDE", t[t.SHOW = 1] = "SHOW", t[t.ONTOP = 2] = "ONTOP"
            }(o || (o = {}));
            var b = function(t) {
                    function e(n) {
                        var r = this,
                            i = new y(v.d, v.c);
                        return (r = t.call(this, e.geometry, i) || this).uniforms = i.uniforms, r.renderOrder = w.a.portals, r.setState(o.HIDE), r.update(n), r
                    }
                    return g(e, t), e.prototype.update = function(t) {
                        var e = t.lookDirection.clone().add(t.position);
                        this.position.copy(t.position), this.lookAt(e), this.hoverProgress = 0, this.hovered = !1, t.toExterior ? (this.uniforms.tNoHover.value = v.b, this.uniforms.tHover.value = v.a) : (this.uniforms.tNoHover.value = v.d, this.uniforms.tHover.value = v.c)
                    }, e.prototype.resetMesh = function(t, e, n) {
                        void 0 === t && (t = 0), void 0 === e && (e = !1), void 0 === n && (n = !1), this.uniforms.opacity.value = t, this.material.depthTest = e, this.material.depthWrite = n
                    }, e.prototype.setHover = function(t) {
                        this.hovered = t
                    }, e.prototype.setState = function(t) {
                        switch (t) {
                            case o.HIDE:
                                this.resetMesh(0, !0, !0);
                                break;
                            case o.SHOW:
                                this.resetMesh(1, !0, !0);
                                break;
                            case o.ONTOP:
                                this.resetMesh(1)
                        }
                    }, e.prototype.render = function(t) {
                        this.hovered && this.hoverProgress < 1 ? this.hoverProgress += t / 300 : !this.hovered && this.hoverProgress > 0 && (this.hoverProgress -= t / 300), this.hoverProgress = Object(m.e)(this.hoverProgress, 0, 1), this.uniforms.progress.value = this.hoverProgress
                    }, e.prototype.updatePortalTexture = function(t) {
                        this.uniforms.tPortal.value = t
                    }, e.geometry = new s.b(.3, .3), e
                }(a.a),
                T = n(17),
                P = n(634),
                D = n(31),
                S = n(68);
            n.d(e, "a", (function() {
                return _
            })), n.d(e, "b", (function() {
                return O
            })), n.d(e, "c", (function() {
                return o
            }));
            var x = function() {
                    var t = function(e, n) {
                        return (t = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(t, e) {
                                t.__proto__ = e
                            } || function(t, e) {
                                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                            })(e, n)
                    };
                    return function(e, n) {
                        function r() {
                            this.constructor = e
                        }
                        t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                    }
                }(),
                M = function(t) {
                    var e = "function" == typeof Symbol && t[Symbol.iterator],
                        n = 0;
                    return e ? e.call(t) : {
                        next: function() {
                            return t && n >= t.length && (t = void 0), {
                                value: t && t[n++],
                                done: !t
                            }
                        }
                    }
                },
                _ = function(t) {
                    function e(e) {
                        var n = t.call(this) || this;
                        return n.toSweep = e.toSweep, n.toExterior = e.toExterior, n.fromInterior = e.fromInterior, n.meshPosition = e.position, n
                    }
                    return x(e, t), e
                }(i.a),
                O = function() {
                    function t(t, e, n) {
                        this.container = new T.a, this.bindings = [], this.visibilityFilter = function(t) {
                            return o.HIDE
                        }, this.scene = t, this.input = e, this.viewportLoader = n, this.meshes = [], this.activeMeshes = {}, this.meshToDataMap = {}, this.dataToMeshMap = {}, this.activeTexturePromises = {}, this.meshPool = new P.a
                    }
                    return t.prototype.addPortal = function(t) {
                        var e, n = this.meshPool.get();
                        n ? (e = n.object).update(t) : e = this.meshPool.add(new b(t)).object, this.meshes.push(e), this.container.add(e), this.meshToDataMap[e.id] = t, this.dataToMeshMap[t.index] = e, this.activateMesh(e, this.visibilityFilter(t))
                    }, t.prototype.removePortal = function(t) {
                        var e = this.dataToMeshMap[t.index];
                        if (e) {
                            this.meshPool.free(e);
                            var n = this.meshes.findIndex((function(t) {
                                return t.id === e.id
                            }));
                            this.meshes.splice(n, 1), this.container.remove(e), this.deactivateMesh(e), delete this.meshToDataMap[e.id], delete this.dataToMeshMap[t.index]
                        }
                    }, t.prototype.init = function() {}, t.prototype.activate = function(t) {
                        var e = this;
                        this.broadcast = t.broadcast.bind(t), this.bindings.push(this.input.registerMeshHandler(D.e, S.a.isType(b), (function(t, n) {
                            e.onPuckSelect(n)
                        }))), this.bindings.push(this.input.registerMeshHandler(D.r, S.a.isType(b), (function(t, n) {
                            e.onPuckDeselect(n)
                        }))), this.bindings.push(this.input.registerMeshHandler(D.a, S.a.isType(b), (function(t, n) {
                            e.onPuckClick(n)
                        }))), this.scene.add(this.container)
                    }, t.prototype.dispose = function() {
                        var t, e;
                        try {
                            for (var n = M(Object.keys(this.meshToDataMap)), r = n.next(); !r.done; r = n.next()) {
                                var o = r.value,
                                    i = this.meshToDataMap[o],
                                    a = this.dataToMeshMap[i.index];
                                this.removePortal(i), a.material.dispose(), a.geometry.dispose()
                            }
                        } catch (e) {
                            t = {
                                error: e
                            }
                        } finally {
                            try {
                                r && !r.done && (e = n.return) && e.call(n)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                    }, t.prototype.deactivate = function(t) {
                        var e, n;
                        try {
                            for (var r = M(this.bindings), o = r.next(); !o.done; o = r.next()) {
                                o.value.cancel()
                            }
                        } catch (t) {
                            e = {
                                error: t
                            }
                        } finally {
                            try {
                                o && !o.done && (n = r.return) && n.call(r)
                            } finally {
                                if (e) throw e.error
                            }
                        }
                        this.bindings.length = 0, this.scene.remove(this.container)
                    }, t.prototype.render = function(t) {
                        var e, n;
                        try {
                            for (var r = M(this.meshes), o = r.next(); !o.done; o = r.next()) {
                                o.value.render(t)
                            }
                        } catch (t) {
                            e = {
                                error: t
                            }
                        } finally {
                            try {
                                o && !o.done && (n = r.return) && n.call(r)
                            } finally {
                                if (e) throw e.error
                            }
                        }
                    }, t.prototype.filter = function(t) {
                        var e, n;
                        this.visibilityFilter = t;
                        try {
                            for (var r = M(this.meshes), i = r.next(); !i.done; i = r.next()) {
                                var a = i.value,
                                    s = t(this.meshToDataMap[a.id]);
                                s === o.HIDE ? this.deactivateMesh(a) : this.activateMesh(a, s)
                            }
                        } catch (t) {
                            e = {
                                error: t
                            }
                        } finally {
                            try {
                                i && !i.done && (n = r.return) && n.call(r)
                            } finally {
                                if (e) throw e.error
                            }
                        }
                    }, t.prototype.mapSweepToMesh = function(t) {
                        for (var e in this.meshToDataMap) {
                            var n = this.meshToDataMap[e];
                            if (n.toSweep.id === t && n.toExterior && n.fromInterior) return this.dataToMeshMap[n.index]
                        }
                        return null
                    }, t.prototype.activateMesh = function(e, n) {
                        void 0 === n && (n = 0), this.activeMeshes[e.id] || (this.input.registerMesh(e, !1, t.raycasterGroup), this.activeMeshes[e.id] = !0), e.setState(n)
                    }, t.prototype.deactivateMesh = function(t) {
                        this.input.unregisterMesh(t), this.activeMeshes[t.id] = !1, this.onPuckDeselect(t), t.setState(o.HIDE)
                    }, t.prototype.onPuckClick = function(t) {
                        this.broadcast(new _(this.meshToDataMap[t.id]))
                    }, t.prototype.onPuckSelect = function(t) {
                        var e = this,
                            n = this.meshToDataMap[t.id].toSweep,
                            r = this.viewportLoader.getPortalTexture(n.id, n.rotation, t.position);
                        this.activeTexturePromises[t.id] = r, r.then((function(n) {
                            e.activeTexturePromises.hasOwnProperty(t.id) && r === e.activeTexturePromises[t.id] && (t.updatePortalTexture(n), t.setHover(!0))
                        }))
                    }, t.prototype.onPuckDeselect = function(t) {
                        t.setHover(!1), this.viewportLoader.releasePortalTexture(this.meshToDataMap[t.id].toSweep.id), delete this.activeTexturePromises[t.id]
                    }, t.raycasterGroup = "portal-raycast-group", t
                }()
        },
        800: function(t, e) {
            t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAAAhFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8g2+bRAAAAK3RSTlMAswpHBJ4d+GmsJHYX2zYTkGDwT4Prp4kPWjvMP6Ms5uFvMJZVfsPSe7i+UNMvaAAAD+NJREFUeNrs2Yd2okAUBuB/CsPM0AXFXrDL+7/fuutKMclmKSLJyfcAOvdyy3DAjx8/umW7u020VZejsx4OzKvBcO0cD8qIrYBpju9r7Er/7JjpP5nrg3FiAt/MmO3JOq1gcNgGGt+DCIxjWsuQWFOKL40y30kbMYn8spUg5MVM2+D47OvNRmEd0k9cx//KuVpdl8Gn3bCd4wsZy8PHocyUv9mxRFAUcHs5D+XeuHy8JVa+i6+BLcz3Izj7gUvxCS6YtZi9/wtHOUbfedb6vWq/RKGHMu55QugrITyPo4wvA8N574eMKfpsaZhvz3y2Eo47KlwWWJFvKFKiDD+yAuYWO8Nj8TsLdLbr7URkl7dFGzOKG6qZjBbkU4tIMp2lwQ4Ww/TBetPL20E4e/OsLI0bwaRPKvFldh/mbLtKywZR74bB7vgY/UbgD5udRqSW0YnZuJn7w4cU7HtVBewh/KG/xG/clQZpxJAux298d374D6s3KXAfev8cclxR11KkBcr6uzzFySnv1QB9oEfl2vQ1rngWfUs54LcyOJT77PVLkUalxedsxn/fAEnLjEDcym1U+sORwEsxpxR+wAHweUyeIp5zXInSZcO0OF5GkNLO3+GK7gzyNMaO4kqXUjBL8CJB8RjrCa5sqchTKWnfUlAsgpjiBTxVPMOe/gmfdOCWguRS7D0XnWOrNLcQnYWfpyB00oy5QbeoX2xCF8BYKtIZJccAuDVIM8RDh5bHNLOaAODhiHRqFPKHKbx20ZmNmddeRAG4Bumc4eJqtyosRHRDnAurLwFgR+QlIhuAZ3TdBklh+vkU4KEiL6JCDiAc5m0wxdOFZt79DID2yQv5GoB97nAbbNKM8gA+IS824QCkmRclnon7ea4lAOGTl/MFgMTJ7yQcT0NJvvs1AKZIDygGwMuPdqZ4EjHLC40D1CI9YVEA+/zheHiKZFUuf4P0hiEAsOxe6Ai0rfT7AwZg3ovyv1NzAMt1tp+WaB0zs2WbAFySnpEcsLMeHUzRsrmZdZgA6J70zp4Wp7TJ0Co3q39CARqTHoopgG2WgSlalAyK9wxvS3pp6wGIsy5YojXL7Lbdt/FfZojiOlwJtERn+y8AoEekt0a6eFt3PLRCr4vxu71af4+UC0Bm85qiBcIpxs9aKdVIhmyaaGGPOR/bQidTFsqoldZixRo4czQ2LsUfNg3dmsw1xQeonk+spmkIi3NggcZIcf4x0sDCYgL/QTBr0bQG4rbejvNcRgBcUpc6hQIViPCkSF1u8T5goRGW/rUFoOueKWYUlVEW1822BkBauRDp+wVIARCjem0/sVGTPTHqbUMB0Fl6s/ZQGz2mNwcKeLUOs9FoRG9qJd0D7Pv2JqhtdE+iDdBtvS+ZjdT+3rqlwHLQbAzk69RMar3/qMBDK7xA1XozYvfzuw3fgHcA31fuwwlFa+ik8vzZc2DfaAyIYWEBSlKRpGgVrX4CAKTJGDinNxcA8+rfK9pV5wvMHPCc+mNApjdDGxCqWvUzPAWr1gdKAIlZdwzo+wBgADWqbb4xnmRcbScaNH+ODkU1h/QmBmCRChYJnij5Rd25LScLBEG4WVjkpKIQxROJ0eTX+P7v91+IswHRnbUquvvdJVWpCM70dA+IRikh/dXJ88cm4CowTEDlGH/KuDTMRdkbzXIDwkvrJIYCsMCfszCUgUK9l3xiJZ5BblD+NZ5AbdAGeQBI80ng00kzOuFlhadQlUYlOX5vyjkEEzFs/qIGEhPn8RzMfFkC7E9nZqZLkC8gyG1qf8XCpAnIEC7ZCkijszAQ3Kfim+wIw2nT0uBAolEAWcyV2yWezJL90jIgpb2ugQc8Aii5/6TG06ljrjYDQaNq7wJ6PGUBRvwl3AtIYv6StOCPwqWyjoG09/03qQEZAD9NtBPcEDCt+Aq4xItY8nXwkyabhvXpzAGoZlbq/wOzYFYBkt7Y+xxVqUQWzv8H/UCktL3EPahStkAW2+b/HveEcaZKQHAW4R/sAijxYkrTEtjiDsmvAuAJ7Ms/xFzxRpUqgY8At9lRmTALoMbLqZklQBZ/j5uIKQlFZr8AmglhRv290m6CBxkQOSEABjIQASNtKGyuhUpAcEbAZgwrGG84g0CQyZM6F5wAe4/BJyzh02Owp83IoLo/A7+ZKWALa9iyEgGFwgi9VI1KLniXwmYvn4AEz7WvgUPzWTf0MlEzcG53BHgsFMyB8HRmhGsoMeZA6OnJYRW5pyekqJOjh+x0pgYmnh7LHnKXeHomJIPvvUJC/RFI6zPQNRFPBpsLZWtcs6JFwIihgNY8wuaCmLF2Yznd9dclVCYgdcQDGzvilBY+b8EtG7xiucDYugJgv+zmOpl/axmcsjrAjicYdZiwemB3Yw6IgUEHxJaEgDbj2KAHhujg0++D2L0RwB0EsZoDCdqoyhhxsrWVZKwe2PTngSFpQ+RSCjLNRBE5fq/XBg4EIF0zgSZ2ULYOlSCLeOTUkYS1SE73/uvbC+U0BH0XTRDfDPnAnI6V+H1WDq5KIE8GD4DfIwKV6ouZPlZbzFwbYoBx44Z7XMA3ELq1CDFfjIQ08RIoUronwHcxBpgEAp8uEU2u16EFwwUcYDUHvhPYXWtgCOw8DQWspvA07ICaGr6ThKaA8HRY/v0neg0TCC6HS4zolGi91AaWs2H42BUVfINqCl8fKC0nZajgprsUmVNAipwegqxBGNHQU3oekw8sHZcAhgiUZHtkdyGcARt3g9AFqVexsDsG3s5GGBDOSwBDBARwHgMfnSQwBEKHk+CFBd8MB+17446MdZgD3/azZqzFftppoCBN8J1dBikSfhrw2zYgZazWrU5CZwTjosZXOw6l9GPq/hAApF7Io/ZSaE5ZsHTjtrB7sA6iaH+aVJIPyt28IvKfvTNoTRgIovCAm4gxEhOwFMHqQYL9/3+wl5mJUyis1EOSb/fW3lyym5l57315TR85ujxURVmwEamW3QvndcSVN8S7mJFoRXZL7wRyuoGdawNjHIckSbPNhrw1R5IkRbfYwSrhbjHWyH/ZJjuRbZCIbzYgaVdQB2VUQq3IEJqBk83J68U3wyJ5v+IUpIHBrGP1gkWhabUZG3ANU0E9EBkPz4zcsX+vz4yDrNfeyxsw2289Pq9UNiB7A8oRKJdgeQ2GQqhjFEKdF0KlFC7NUGmHn5SxL+xApNIUBXYkhh+K7lUdx47Fe+WLYIWRDV0aaxQfixVHE1Qe33p3f9O/KQaJ5AaJWArWWIuM3QlYk9RDX4swm9z+t1v+gjVK1hqbxVplZdDXANUsLaM3xMe12+WP0S4fc6M9NjCh/6qwkZlGi2FsaEo0Ut1RY3Pmk9pQg5Oem8NGZ886KMeGp42g0VLj83YJ9FSAgs1JL1iERmOAISpExSEia8foOC4nrgmyRQUp2c5csSgtB81RYWr+bFBxetPeUIGKdjruVKSmPR3fVKiqo7drKlbX2qQHFaxs/cAhQdHazta+U+HqNi4dqXh9OdsdQf3AgolmH9RPbPyQd2+7jcJAGID/MbY54zSkkIQcSbpq1+//fqvdBJterFRzCEh8l71oizszNrHU3zSJXGjICvjFdElCP3GcfC/cHoeM2cG1ydpbaNCSCdoRS43awqYpgYWGrWHblMBS4/ZM5m690MBFsHf9z++lRm6aiNp8oaGrYOfmpXChsbt4a1ZrocHL5o1gLRcavW1eCmmh4etAoR/uC43fN+9NZ+Wy1rTZ4iW2G3KpS3U277g/ZIeGcGoCEie8wEmQUwMIhy2wwSt7GJAh0ZwGwY5+LpT2CFBxOKifTfCeAB452CiMSm3IgQck788GqOGk1OaeCDE5ONYYUX0kB7HNEtcl3LBUPwQAE+TiusVItldyIRgQ6IeUwVHm29KRIbkoPIzCK8hFKG0r+xmcxc3aKeBAblYRBhetyM0BUKnNEndH9kCIgBwFDINi7r/Bt0foQl3shwj8gxwVO4bBsF1Bjj64/XDnomB0GQPaA1hJrsI3hUGot5BclQzw9PcB0H0MrE8Au5GzMEjQWxKE5OzGgNPaHAE7o6aGEkAJ6uAaoZfoSh0IBSSX7wOg3xioGCAL6kLsEnSU7AR1UUiAVXYA9LD3W8sYhdRN6TE4Y15J3YRRq3j9PXq56qcbgIy6Cj9zCQcy/wypqwzATT9d0dNKtw7THvVwjD2JH5BefKQePAClflqht6Nu3Snk1I+Id4eI4T9YdNjFgvrJW7c7+oj++Fe7mjwagNgEubevI5lsOd8mMqr3Xh5sBA3Aa/ftF0d/dp7qAEAW0oyFGYBA271rECpt10BU0GwVUfvvnyoMRJ710ycAKWimhATwqZ/OEoM5rdt7gbrRLN1Ue/6vTxjQ3m+fB1hJM1Sy9v7v7zEoz6wAMYB90Ox8MICReX4PA9ubLqgSgAc0MwEHksrU/x6DO5lJeDkBOMxqOwwPAE4XM/9OGIFMzfp6M9sMhATgmRpNJUahKt0+FrOYZiJm7eOvrhRGwr50gxQAbxZtEHoAFOnGF8No+FE30hqAXNHkVhJAnerGkWNMK93wAwB8RxPbcQCBrxsrjCz2ba0l5r5iAvYGJrGd6ccY3f6iG+85AJ6HNJEw5wDyd9247PECirQhFIBkQ5PYJACU0AYpOOrfBuc7AGSCXk5kAHA/v7D8reyiDZIAeF7QSxU5ByBJG5cMDoZsg3XMAWyDkF4mDLYAeLyeoPxbbWCk+eMOi17kceOWp3qC8reyVFu/69csgX38+re20gwTYKWvLRF1uMnsfN8aCW35JcM06kpb/mMJ2F3QaMSdPR7f11ZVYzI89r8tgQQAfihpFOWBA4AU335ozDElWegWv8geX30TNDDxJvFXVvi6pZj+n7zuK932684BgGdxSIMJ4+zxXe+/dFs1j9ibP+3d626CMBQAYKGUVkqRdlSNomCQi573f7+xsBFuytAtlsTvbxOS9hzaENpTEUETL6qomPUYPN17s8qrgkNTpE09J5MpaLmUaVDlAcVPZj71vh91vkCLYjqV8jFTCS3KDxcVFxVr4yHrArmLSugraJGpTt3/sg0ktEVJaNW//GliTJLQejOBFSYRtMng5Ye2B5inGDrUQbh1s4NocDBGHQKKnDq8rjgo6IhPukX/h3XeQ0++QavGKNkeEizw8bIz02E/YAJ5dqNvK7TJoWd/1vreyx0m0MexOFrd0Vq5tu2UbNtd9RqPAnPoI1iPhe+eLc1hCNljhuxfbRHCewJDcqrjqz/A8yO4gfArTulHeHStVsTdY/hBU3zlBG6IfG8xI2GiYASRKuKlSEkCI1QygxuOOizkc/gT3Edaz3t3ONQg8BRiUM0K901l7pih4CHKYDtdV/yJHJFkEiaQWSJmHvk+GxU4i2FEnOECvf4j//9YDhJsg5dZzmMlSUmqmOfZEm+YQM5cZ7u3t7n6BCyj3BOxzBQ1AAAAAElFTkSuQmCC"
        },
        801: function(t, e) {
            t.exports = "uniform float opacity;\nuniform vec3 color;\nuniform sampler2D bg;\nuniform sampler2D mask;\n\nvarying vec2 vUv;\n\nvoid main() {\n  vec4 maskColor = texture2D(mask, vUv);\n  vec4 bgColor = texture2D(bg, vUv);\n  vec3 mappedColor = mix(bgColor.rgb, color, maskColor.a);\n  gl_FragColor = vec4(mappedColor, bgColor.a * opacity);\n}\n"
        },
        802: function(t, e, n) {
            t.exports = n.p + "images/tagmask.png"
        },
        803: function(t, e, n) {
            t.exports = n.p + "images/tagbg.png"
        },
        806: function(t, e, n) {
            t.exports = n.p + "images/puck_256_red.png"
        },
        807: function(t, e) {
            t.exports = "precision highp float;\nprecision highp int;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nattribute vec3 position;\nattribute vec2 uv;\n\nvarying vec2 vUv;\nvoid main() {\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n"
        },
        808: function(t, e) {
            t.exports = "precision highp float;\nprecision highp int;\n\nvarying vec2 vUv;\nuniform float progress;\nuniform float opacity;\nuniform sampler2D tNoHover;\nuniform sampler2D tHover;\nuniform sampler2D tPortal;\n\nvoid main() {\n  vec4 noHoverColor = texture2D(tNoHover, vUv);\n  vec4 hoverColor = texture2D(tHover, vUv);\n  vec4 portalColor = texture2D(tPortal, vUv);\n\n  float xToCtr = 2.0 * vUv.x - 1.0;\n  float yToCtr = 2.0 * vUv.y - 1.0;\n\n  float withinRadius = step(xToCtr * xToCtr + yToCtr * yToCtr, 0.9);\n  vec4 mixedPortalColor = mix(hoverColor, portalColor, withinRadius);\n  mixedPortalColor = mix(mixedPortalColor, hoverColor, hoverColor.a);\n  mixedPortalColor = mix(noHoverColor, mixedPortalColor, progress);\n  mixedPortalColor.a = min(mixedPortalColor.a, opacity);\n  gl_FragColor = mixedPortalColor;\n}\n"
        },
        809: function(t, e) {
            t.exports = "precision highp float;\nprecision highp int;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nattribute vec3 position;\n\nvarying vec3 vUvw;\n\nvoid main() {\n  vUvw = position;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n"
        },
        810: function(t, e) {
            t.exports = "precision highp float;\nprecision highp int;\n\nuniform samplerCube tMap;\n\nvarying vec3 vUvw;\n\nvoid main() {\n  vec4 color = textureCube(tMap, vec3(-vUvw.x, vUvw.yz));\n  gl_FragColor = vec4(color.rgb, 1.0);\n}\n"
        },
        974: function(t, e, n) {
            "use strict";
            n.r(e);
            var r, o = n(2),
                i = n(18),
                a = n(724),
                s = n(725),
                u = n(77),
                c = n(61),
                l = n(548),
                h = n(648),
                p = n(218),
                f = n(62),
                d = (r = function(t, e) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                }, function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                y = function() {
                    return (y = Object.assign || function(t) {
                        for (var e, n = 1, r = arguments.length; n < r; n++)
                            for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                        return t
                    }).apply(this, arguments)
                },
                v = function(t, e, n, r) {
                    return new(n || (n = Promise))((function(o, i) {
                        function a(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function s(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new n((function(e) {
                                e(t.value)
                            })).then(a, s)
                        }
                        u((r = r.apply(t, e || [])).next())
                    }))
                },
                m = function(t, e) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function s(i) {
                        return function(s) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
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
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1], o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    i = e.call(t, a)
                                } catch (t) {
                                    i = [6, t], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, s])
                        }
                    }
                },
                w = {
                    enabled: h.a,
                    enabledHover: h.a
                },
                g = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.name = "sweep-pucks", e.IDLE_OPACITY = .3, e.IDLE_COLOR = new i.a("white"), e.HOVER_COLOR = new i.a("white"), e.defaultCheckRenderModes = function() {
                            return !0
                        }, e
                    }
                    return d(e, t), e.prototype.init = function(t, e) {
                        return v(this, void 0, void 0, (function() {
                            var n, r, i, h, d;
                            return m(this, (function(y) {
                                switch (y.label) {
                                    case 0:
                                        return void 0 !== t.checkRenderModes && (this.defaultCheckRenderModes = t.checkRenderModes), [4, e.getModule(o.Nb)];
                                    case 1:
                                        return n = y.sent().getScene(), [4, e.getModule(o.x)];
                                    case 2:
                                        return r = y.sent(), [4, e.market.waitForData(u.a)];
                                    case 3:
                                        return i = y.sent(), [4, e.market.waitForData(c.a)];
                                    case 4:
                                        return h = y.sent(), [4, e.market.waitForData(l.a)];
                                    case 5:
                                        return d = y.sent(), !0, this.bindings.push(e.subscribe(s.a, (function(t) {
                                            if (!t.sweepId) throw new Error("SweepPucks -> on PuckClickedMessage: Tried to move to invalid sweep id.");
                                            d.data.canTransition() && h.canTransition() && e.commandBinder.issueCommand(new p.a({
                                                transition: f.a.Interpolate,
                                                sweep: t.sweepId
                                            }))
                                        }))), this.renderer = new a.b(n.scene, r, i, d, w, !0, this.defaultCheckRenderModes, this.IDLE_COLOR, this.HOVER_COLOR, this.IDLE_OPACITY, void 0, void 0, e.claimRenderLayer(this.name)), e.addComponent(this, this.renderer), [2]
                                }
                            }))
                        }))
                    }, e.prototype.updatePuckImagery = function(t) {
                        void 0 === t && (t = {});
                        var e = y({}, w, t);
                        e.disabled && !e.disabledHover && (e.disabledHover = e.disabled), this.renderer.updatePuckImagery(e)
                    }, e.prototype.updateCheckRenderModes = function(t) {
                        this.renderer.updateCheckRenderModes(t || this.defaultCheckRenderModes)
                    }, e
                }(o.Db);
            e.default = g
        },
        975: function(t, e, n) {
            "use strict";
            n.r(e);
            var r, o = n(2),
                i = n(5),
                a = n(13),
                s = n(307),
                u = n(31),
                c = n(3),
                l = (r = function(t, e) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                }, function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                h = function(t, e, n, r) {
                    return new(n || (n = Promise))((function(o, i) {
                        function a(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function s(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new n((function(e) {
                                e(t.value)
                            })).then(a, s)
                        }
                        u((r = r.apply(t, e || [])).next())
                    }))
                },
                p = function(t, e) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function s(i) {
                        return function(s) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
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
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1], o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    i = e.call(t, a)
                                } catch (t) {
                                    i = [6, t], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, s])
                        }
                    }
                },
                f = new c.a("cursor-data"),
                d = function(t) {
                    function e() {
                        var n = null !== t && t.apply(this, arguments) || this;
                        return n.name = "cursor-data", n.cursorState = new s.a, n.position = new i.a, n.timeToFade = 0, n.allowFadeout = !0, n.enableCursorFading = function(t) {
                            n.allowFadeout = t
                        }, n.onPointerMove = function(t) {
                            if (0 !== n.raycasterModule.getPointerHits().length && (t.position.x !== n.position.x || t.position.y !== n.position.y)) {
                                n.position.set(t.position.x, t.position.y), n.timeToFade = e.fadeOutDelay;
                                var r = a.a.lerp(0, e.fadeInDuration, 1 - n.cursorState.opacity.value);
                                n.cursorState.opacity.modifyAnimation(n.cursorState.opacity.value, 1, r), n.cursorState.commit()
                            }
                        }, n
                    }
                    return l(e, t), e.prototype.init = function(t, n) {
                        return h(this, void 0, void 0, (function() {
                            var t, r;
                            return p(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return this.engine = n, t = this, [4, n.getModule(o.x)];
                                    case 1:
                                        return t.input = i.sent(), r = this, [4, n.getModule(o.eb)];
                                    case 2:
                                        return r.raycasterModule = i.sent(), this.market = n.market, this.market.register(this, s.a, this.cursorState), this.bindings.push(this.input.registerHandler(u.n, this.onPointerMove)), e.fadeInDuration > e.fadeOutDelay && f.warn("faceInDuration should be less than fadeOutDelay!"), [2]
                                }
                            }))
                        }))
                    }, e.prototype.dispose = function() {
                        t.prototype.dispose.call(this, this.engine), this.market.unregister(this, s.a)
                    }, e.prototype.onUpdate = function(t) {
                        var n = !1;
                        this.timeToFade > 0 && (this.timeToFade -= t, this.timeToFade <= 0 && (n = !0)), this.cursorState.opacity.tick(t), this.cursorState.commit(), n && this.allowFadeout && this.cursorState.opacity.modifyAnimation(1, 0, e.fadeOutDuration)
                    }, e.fadeOutDelay = 700, e.fadeOutDuration = 700, e.fadeInDuration = 300, e
                }(o.i);
            e.default = d
        },
        976: function(t, e, n) {
            "use strict";
            n.r(e);
            var r, o = n(2),
                i = n(530),
                a = n(198),
                s = n(60),
                u = n(63),
                c = n(256),
                l = n(20),
                h = (r = function(t, e) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                }, function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                p = function(t, e, n, r) {
                    return new(n || (n = Promise))((function(o, i) {
                        function a(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function s(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new n((function(e) {
                                e(t.value)
                            })).then(a, s)
                        }
                        u((r = r.apply(t, e || [])).next())
                    }))
                },
                f = function(t, e) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function s(i) {
                        return function(s) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
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
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1], o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    i = e.call(t, a)
                                } catch (t) {
                                    i = [6, t], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, s])
                        }
                    }
                },
                d = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.name = "cursor-controller", e.visibilityRules = [], e
                    }
                    return h(e, t), e.prototype.init = function(t, e) {
                        return p(this, void 0, Promise, (function() {
                            var t, n, r, h, p, d = this;
                            return f(this, (function(f) {
                                switch (f.label) {
                                    case 0:
                                        return t = this, [4, e.getModule(o.j)];
                                    case 1:
                                        return t.cursorMesh = f.sent(), n = !1, r = function(t) {
                                            n = t instanceof i.c, d.updateCursorVisibility()
                                        }, this.visibilityRules.push((function() {
                                            return !n
                                        })), this.bindings.push(e.subscribe(i.c, r)), this.bindings.push(e.subscribe(i.f, r)), h = !1, this.bindings.push(e.subscribe(a.a, (function(t) {
                                            var n = e.market.tryGetData(s.a);
                                            if (n) {
                                                var r = n.getSweep(t.toSweep);
                                                h = r.alignmentType === u.a.ALIGNED, d.updateCursorVisibility()
                                            }
                                        }))), p = !1, this.visibilityRules.push((function() {
                                            return !p || p && h
                                        })), this.bindings.push(e.subscribe(c.a, (function(t) {
                                            p = t.toMode === l.a.Panorama, d.updateCursorVisibility()
                                        }))), [2]
                                }
                            }))
                        }))
                    }, e.prototype.addVisibilityRule = function(t) {
                        var e = this;
                        return this.visibilityRules.push(t),
                            function() {
                                return e.updateCursorVisibility()
                            }
                    }, e.prototype.removeVisibilityRule = function(t) {
                        var e = this.visibilityRules.indexOf(t); - 1 !== e && this.visibilityRules.splice(e, 1)
                    }, e.prototype.updateCursorVisibility = function() {
                        var t = this.visibilityRules.reduce((function(t, e) {
                            return t && e()
                        }), !0);
                        this.cursorMesh.setVisible(t)
                    }, e
                }(o.h);
            e.default = d
        },
        977: function(t, e, n) {
            "use strict";
            n.r(e);
            var r, o = n(2),
                i = n(535),
                a = n(115),
                s = (r = function(t, e) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                }, function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                u = function(t, e, n, r) {
                    return new(n || (n = Promise))((function(o, i) {
                        function a(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function s(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new n((function(e) {
                                e(t.value)
                            })).then(a, s)
                        }
                        u((r = r.apply(t, e || [])).next())
                    }))
                },
                c = function(t, e) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function s(i) {
                        return function(s) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
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
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1], o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    i = e.call(t, a)
                                } catch (t) {
                                    i = [6, t], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, s])
                        }
                    }
                },
                l = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.name = "label-data", e
                    }
                    return s(e, t), e.prototype.init = function(t, e) {
                        return u(this, void 0, void 0, (function() {
                            var n, r;
                            return c(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return this.market = e.market, [4, t.labelsSync.load()];
                                    case 1:
                                        return n = o.sent() || {}, r = Object(a.b)(n), this.labelData = new i.a(r), this.market.register(this, i.a, this.labelData), [2]
                                }
                            }))
                        }))
                    }, e.prototype.onUpdate = function(t) {}, e
                }(o.z);
            e.default = l
        },
        978: function(t, e, n) {
            "use strict";
            n.r(e);
            var r, o = n(2),
                i = n(535),
                a = n(650),
                s = (r = function(t, e) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                }, function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                u = function(t, e, n, r) {
                    return new(n || (n = Promise))((function(o, i) {
                        function a(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function s(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new n((function(e) {
                                e(t.value)
                            })).then(a, s)
                        }
                        u((r = r.apply(t, e || [])).next())
                    }))
                },
                c = function(t, e) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function s(i) {
                        return function(s) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
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
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1], o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    i = e.call(t, a)
                                } catch (t) {
                                    i = [6, t], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, s])
                        }
                    }
                },
                l = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.name = "label-viewdata", e
                    }
                    return s(e, t), e.prototype.init = function(t, e) {
                        return u(this, void 0, void 0, (function() {
                            var t, n;
                            return c(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return t = this, [4, e.market.waitForData(i.a)];
                                    case 1:
                                        return t.data = r.sent(), (n = new a.a(this.data)).initialize(e), e.market.register(this, a.a, n), [2]
                                }
                            }))
                        }))
                    }, e
                }(o.A);
            e.default = l
        },
        979: function(t, e, n) {
            "use strict";
            n.r(e);
            var r, o = n(3),
                i = n(2),
                a = n(538),
                s = n(547),
                u = n(578),
                c = n(1),
                l = n(10),
                h = n(189),
                p = n(39),
                f = (r = function(t, e) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                }, function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                d = function(t, e, n, r) {
                    return new(n || (n = Promise))((function(o, i) {
                        function a(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function s(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new n((function(e) {
                                e(t.value)
                            })).then(a, s)
                        }
                        u((r = r.apply(t, e || [])).next())
                    }))
                },
                y = function(t, e) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function s(i) {
                        return function(s) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
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
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1], o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    i = e.call(t, a)
                                } catch (t) {
                                    i = [6, t], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, s])
                        }
                    }
                },
                v = function(t) {
                    var e = "function" == typeof Symbol && t[Symbol.iterator],
                        n = 0;
                    return e ? e.call(t) : {
                        next: function() {
                            return t && n >= t.length && (t = void 0), {
                                value: t && t[n++],
                                done: !t
                            }
                        }
                    }
                },
                m = new o.a("measurements"),
                w = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.name = "measurements-data", e.tryInferRooms = function(t) {
                            var n = new c.a;
                            for (var r in t) {
                                var o = t[r];
                                if (o.type === p.a.ThreeD && (void 0 === o.room || -1 === o.room)) {
                                    var i = e.roomData.roomIdsFromPoint(o.start_position);
                                    if (1 === i.length) o.room = i[0];
                                    else {
                                        n.copy(o.start_position).addScaledVector(l.b.UP, .2);
                                        var a = e.raycaster.pick(n, l.b.DOWN, (function(t) {
                                            return t instanceof h.b
                                        }));
                                        a && a.object instanceof h.b && (o.room = a.object.roomIndex, o.floor = a.object.floorIndex)
                                    }
                                }
                            }
                        }, e.tryInferFloors = function(t) {
                            for (var n in t) {
                                var r = t[n];
                                if (void 0 === r.floor || r.floor < 0) try {
                                    var o = e.floorsData.getFloorContainingPoint(r.start_position, !0) || e.floorsData.getFloorAtHeight(r.start_position.y, !0);
                                    o && (r.floor = o.floorIndex)
                                } catch (t) {
                                    m.debug("Couldn't find valid floor for measurement " + r.sid + ", defaulting to 0"), r.floor = 0
                                }
                            }
                        }, e.tryInferGroups = function(t) {
                            var e, n, r = Object.keys(t);
                            if (!r.every((function(e) {
                                    return void 0 !== t[e].group && -1 !== t[e].group
                                }))) {
                                var o = 0,
                                    i = 0,
                                    a = 0,
                                    s = {},
                                    u = {},
                                    c = new Set,
                                    l = function(t) {
                                        return t.x.toFixed(5) + "," + t.y.toFixed(5) + "," + t.z.toFixed(5)
                                    };
                                try {
                                    for (var h = v(r), p = h.next(); !p.done; p = h.next()) {
                                        var f = p.value,
                                            d = t[f],
                                            y = l(d.start_position),
                                            m = l(d.end_position);
                                        c.has(y) ? (i = s[y], a = t[u[y]].groupOrder + 1) : c.has(m) ? (i = s[m], a = t[u[m]].groupOrder + 1) : (i = o++, a = 0), c.has(y) || c.add(y), c.has(m) || c.add(m), s[y] = i, s[m] = i, u[y] = d.sid, u[m] = d.sid, d.group = i, d.groupOrder = a, d.commit()
                                    }
                                } catch (t) {
                                    e = {
                                        error: t
                                    }
                                } finally {
                                    try {
                                        p && !p.done && (n = h.return) && n.call(h)
                                    } finally {
                                        if (e) throw e.error
                                    }
                                }
                            }
                        }, e
                    }
                    return f(e, t), e.prototype.init = function(t, e) {
                        return d(this, void 0, void 0, (function() {
                            var n, r, o, c, l, h;
                            return y(this, (function(p) {
                                switch (p.label) {
                                    case 0:
                                        return n = {}, r = [this.tryInferRooms, this.tryInferFloors, this.tryInferGroups], [4, t.measurementsSync.load()];
                                    case 1:
                                        return n = p.sent() || {}, o = this, [4, e.market.waitForData(s.a)];
                                    case 2:
                                        return o.floorsData = p.sent(), c = this, [4, e.market.waitForData(u.a)];
                                    case 3:
                                        return c.roomData = p.sent(), l = this, [4, e.waitForModule(i.eb)];
                                    case 4:
                                        return l.raycaster = p.sent().getRaycaster(), h = Object(a.c)(n, r), m.debug("Creating " + h.length + " measurements", h.getCollection()), e.market.register(this, a.a, h), [2]
                                }
                            }))
                        }))
                    }, e.prototype.onUpdate = function(t) {}, e
                }(i.M);
            e.default = w
        },
        980: function(t, e, n) {
            "use strict";
            n.r(e);
            var r, o = n(2),
                i = n(538),
                a = n(104),
                s = n(55),
                u = n(551),
                c = n(320),
                l = n(61),
                h = n(113),
                p = n(60),
                f = n(154),
                d = n(255),
                y = n(188),
                v = n(77),
                m = n(78),
                w = (r = function(t, e) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                }, function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                g = function(t, e, n, r) {
                    return new(n || (n = Promise))((function(o, i) {
                        function a(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function s(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new n((function(e) {
                                e(t.value)
                            })).then(a, s)
                        }
                        u((r = r.apply(t, e || [])).next())
                    }))
                },
                b = function(t, e) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function s(i) {
                        return function(s) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
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
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1], o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    i = e.call(t, a)
                                } catch (t) {
                                    i = [6, t], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, s])
                        }
                    }
                },
                T = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.name = "measurements-viewdata", e.isFeatureEnabled = function() {
                            return !1
                        }, e.dirty = !1, e.setDirty = function() {
                            e.dirty = !0
                        }, e.updateViewData = function() {
                            e.data.iterate((function(t, n) {
                                e.viewData.derivedData[n] = e.makeViewDataForMeasurement(t, e.viewData.derivedData[n])
                            })), e.viewData.insertionHeight = e.viewmodeData.isFloorplan() ? e.floorsViewData.getFloorMax() : void 0, e.viewData.isFloorplan = e.viewmodeData.isFloorplan(), e.viewData.isUnaligned = e.viewmodeData.isPano() && !Object(f.a)(e.sweepData), e.viewData.commit(), e.dirty = !1
                        }, e.makeViewDataForMeasurement = function(t, n) {
                            return e.lineDerivedDataFactory.make(t.sid, (function() {
                                return t
                            }), n)
                        }, e
                    }
                    return w(e, t), e.prototype.init = function(t, e) {
                        return g(this, void 0, void 0, (function() {
                            var t, n, r, o, w, g, T = this;
                            return b(this, (function(b) {
                                switch (b.label) {
                                    case 0:
                                        return t = this, [4, e.market.waitForData(i.a)];
                                    case 1:
                                        return t.data = b.sent(), n = this, [4, e.market.waitForData(l.a)];
                                    case 2:
                                        return n.cameraData = b.sent(), r = this, [4, e.market.waitForData(y.c)];
                                    case 3:
                                        return r.floorsViewData = b.sent(), o = this, [4, e.market.waitForData(h.a)];
                                    case 4:
                                        return o.viewmodeData = b.sent(), w = this, [4, e.market.waitForData(p.a)];
                                    case 5:
                                        return w.sweepData = b.sent(), g = this, [4, e.market.waitForData(v.a)];
                                    case 6:
                                        return g.settingsData = b.sent(), this.lineDerivedDataFactory = new c.a(this.cameraData, this.viewmodeData, this.floorsViewData, (function() {
                                            return Object(f.a)(T.sweepData)
                                        }), (function() {
                                            return T.getUnitType()
                                        }), (function() {
                                            return T.isFeatureEnabled()
                                        })), this.viewData = new u.a(this.data), this.viewData.initialize(e), this.viewData.setViewDataFactory(this.makeViewDataForMeasurement), e.market.register(this, u.a, this.viewData), this.defaultFeatureCheck(), this.setDirty(), this.bindings.push(this.cameraData.onChanged(this.setDirty), e.subscribe(d.a, this.setDirty), this.floorsViewData.onChanged(this.setDirty), this.viewData.onChanged(this.setDirty), this.settingsData.onPropertyChanged(a.b, this.setDirty), this.settingsData.onPropertyChanged(m.a.Measurements, this.setDirty), this.settingsData.onPropertyChanged(m.a.SavedMeasurements, this.setDirty), this.settingsData.onPropertyChanged(s.a.UnitType, this.setDirty)), [2]
                                }
                            }))
                        }))
                    }, e.prototype.getUnitType = function() {
                        return this.settingsData.tryGetProperty(s.a.UnitType, m.c.USFractional)
                    }, e.prototype.setFeatureVisibilityCheck = function(t) {
                        this.isFeatureEnabled = t, this.setDirty()
                    }, e.prototype.defaultFeatureCheck = function() {
                        var t = this;
                        this.setFeatureVisibilityCheck((function() {
                            var e = t.settingsData.tryGetProperty(a.b, !1),
                                n = t.settingsData.tryGetProperty(m.a.Measurements, !1),
                                r = t.settingsData.tryGetProperty(m.a.SavedMeasurements, !1);
                            return n && r && e
                        }))
                    }, e.prototype.dispose = function(e) {
                        t.prototype.dispose.call(this, e), this.settingsData.removeOnPropertyChanged(a.b, this.setDirty), this.settingsData.removeOnPropertyChanged(m.a.Measurements, this.setDirty), this.settingsData.removeOnPropertyChanged(m.a.SavedMeasurements, this.setDirty), this.settingsData.removeOnPropertyChanged(s.a.UnitType, this.setDirty)
                    }, e.prototype.onUpdate = function(t) {
                        this.viewData.iterateDerived((function(e) {
                            e.opacity.tick(t)
                        })), this.isFeatureEnabled() && this.dirty && this.updateViewData()
                    }, e
                }(o.N);
            e.default = T
        },
        981: function(t, e, n) {
            "use strict";
            n.r(e);
            var r, o = n(2),
                i = n(216),
                a = n(319),
                s = n(545),
                u = n(305),
                c = n(27),
                l = (r = function(t, e) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                }, function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                h = function(t, e, n, r) {
                    return new(n || (n = Promise))((function(o, i) {
                        function a(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function s(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new n((function(e) {
                                e(t.value)
                            })).then(a, s)
                        }
                        u((r = r.apply(t, e || [])).next())
                    }))
                },
                p = function(t, e) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function s(i) {
                        return function(s) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
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
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1], o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    i = e.call(t, a)
                                } catch (t) {
                                    i = [6, t], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, s])
                        }
                    }
                },
                f = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.name = "mattertag-data", e.addTag = function(t) {
                            return h(e, void 0, void 0, (function() {
                                var e, n;
                                return p(this, (function(r) {
                                    for (e = new a.a, n = Object(c.l)(11); this.data.getTag(n);) n = Object(c.l)(11);
                                    return e.sid = n, this._editTag(e, t), this.data.addTag(e), [2, n]
                                }))
                            }))
                        }, e.editTag = function(t) {
                            return h(e, void 0, void 0, (function() {
                                var e;
                                return p(this, (function(n) {
                                    return (e = this.data.getTag(t.sid)) ? (this._editTag(e, t.options), [2]) : [2]
                                }))
                            }))
                        }, e._editTag = function(t, n) {
                            if (void 0 !== n.color && t.color.copy(n.color), void 0 !== n.enabled && (t.enabled = n.enabled), void 0 !== n.stemHeight && t.stemVector.copy(t.anchorNormal).setLength(n.stemHeight), void 0 !== n.stemVisible && (t.stemVisible = n.stemVisible), void 0 !== n.label && (t.label = n.label.slice()), void 0 !== n.description && (t.description = n.description, t.parsedDescription = e.descParser.parse(t.description)), void 0 !== n.floorIndex && (t.floorIndex = n.floorIndex), void 0 !== n.mediaType && (t.mediaType = n.mediaType), void 0 !== n.mediaSrc && (t.mediaSrc = n.mediaSrc.slice()), void 0 !== n.normal) {
                                t.anchorNormal.copy(n.normal).normalize();
                                var r = t.stemVector.length();
                                t.stemVector.copy(n.normal).setLength(r)
                            }
                            void 0 !== n.position && t.anchorPosition.copy(n.position), t.modified = new Date, t.commit()
                        }, e.removeTag = function(t) {
                            return h(e, void 0, void 0, (function() {
                                return p(this, (function(e) {
                                    return void 0 !== this.data.getTag(t.sid) && this.data.removeTag(t.sid) ? [2, t.sid] : [2, void 0]
                                }))
                            }))
                        }, e
                    }
                    return l(e, t), e.prototype.init = function(t, e) {
                        return h(this, void 0, void 0, (function() {
                            var n;
                            return p(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, t.tagSync.load()];
                                    case 1:
                                        return n = r.sent() || {}, this.data = e.market.tryGetData(i.a) || new i.a, this.initializeTagData(n, e.market), this.descParser = new u.a({
                                            model: t.modelSid || "",
                                            supportLinks: !0,
                                            keepLinkLabels: !0
                                        }), this.bindings.push(e.commandBinder.addBinding(s.a, this.addTag)), this.bindings.push(e.commandBinder.addBinding(s.b, this.editTag)), this.bindings.push(e.commandBinder.addBinding(s.c, this.removeTag)), [2]
                                }
                            }))
                        }))
                    }, e.prototype.initializeTagData = function(t, e) {
                        for (var n in t) this.data.addTag(t[n]);
                        e.register(this, i.a, this.data)
                    }, e
                }(o.I);
            e.default = f
        },
        982: function(t, e, n) {
            "use strict";
            n.r(e);
            var r, o = n(1),
                i = n(2),
                a = n(216),
                s = n(726),
                u = n(61),
                c = n(221),
                l = n(198),
                h = n(256),
                p = n(66),
                f = n(62),
                d = n(60),
                y = n(501),
                v = n(269),
                m = n(15),
                w = n(563),
                g = n(20),
                b = n(257),
                T = n(77),
                P = n(581),
                D = n(218),
                S = n(582),
                x = n(3),
                M = n(129),
                _ = n(219),
                O = (r = function(t, e) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                }, function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                k = function(t, e, n, r) {
                    return new(n || (n = Promise))((function(o, i) {
                        function a(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function s(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new n((function(e) {
                                e(t.value)
                            })).then(a, s)
                        }
                        u((r = r.apply(t, e || [])).next())
                    }))
                },
                C = function(t, e) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function s(i) {
                        return function(s) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
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
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1], o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    i = e.call(t, a)
                                } catch (t) {
                                    i = [6, t], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, s])
                        }
                    }
                },
                A = function(t) {
                    var e = "function" == typeof Symbol && t[Symbol.iterator],
                        n = 0;
                    return e ? e.call(t) : {
                        next: function() {
                            return t && n >= t.length && (t = void 0), {
                                value: t && t[n++],
                                done: !t
                            }
                        }
                    }
                },
                E = function(t, e) {
                    var n = "function" == typeof Symbol && t[Symbol.iterator];
                    if (!n) return t;
                    var r, o, i = n.call(t),
                        a = [];
                    try {
                        for (;
                            (void 0 === e || e-- > 0) && !(r = i.next()).done;) a.push(r.value)
                    } catch (t) {
                        o = {
                            error: t
                        }
                    } finally {
                        try {
                            r && !r.done && (n = i.return) && n.call(i)
                        } finally {
                            if (o) throw o.error
                        }
                    }
                    return a
                },
                R = new x.a("mattertag-viewdata-module"),
                I = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.name = "mattertags-viewdata", e.distance = new o.a, e.cameraPosition = new o.a, e.hoverTimeout = 0, e.discDirection = new o.a, e.discPosition = new o.a, e.updateViewData = function() {
                            e.data.iterate((function(t) {
                                e.viewData.derivedData[t.sid] = e.makeViewDataForMattertag(t)
                            })), e.viewData.commit()
                        }, e.makeViewDataForMattertag = function(t) {
                            var n = e.viewData.activeBillboards.get(t.sid),
                                r = e.viewData.selected === t.sid,
                                o = n ? n.position : null,
                                i = n ? n.distance : 0;
                            return {
                                position: o,
                                selected: r,
                                located: !(!o || !i),
                                closeTheTag: !n || n.closing || !(r || !e.viewData.selected),
                                navigating: !(!e.viewData.navigating || e.viewData.navigating !== t.sid),
                                navigatingPosition: r ? e.viewData.getNavigatingPosition() : void 0,
                                positioned: !1,
                                distance: i,
                                stemHeight: t.stemVector.length(),
                                visible: t.enabled,
                                color: "#" + t.color.getHexString(),
                                onTagDirectionChanged: e.onTagDirectionChanged
                            }
                        }, e.onCameraUpdate = function(t) {
                            e.viewData.activeBillboards.keys.length > 0 && (e.cameraPosition.copy(t.pose.position), e.updateActiveBillboards(e.viewData.activeBillboards.keys), e.viewData.commit())
                        }, e.updateBillboardData = function(t, n) {
                            var r = e.viewData.activeBillboards.get(t);
                            r && (Object.assign(r, n), r.commit())
                        }, e.addActiveBillboard = function(t) {
                            e.viewData.activeBillboards.has(t) || e.viewData.activeBillboards.set(t, new _.a(t))
                        }, e.removeFromActiveBillboards = function(t) {
                            if (e.viewData.activeBillboards.has(t)) {
                                var n = e.data.getTag(t);
                                n && n.isActive || e.viewData.activeBillboards.delete(t)
                            }
                        }, e.handleOpenAndActiveBillboards = function() {
                            var t, n, r = e.viewData.getBillboards();
                            r.forEach((function(t) {
                                e.viewData.activeBillboards.get(t) ? (window.clearTimeout(e.viewData.activeBillboards.get(t).timeoutId), e.updateBillboardData(t, {
                                    timeoutId: 0,
                                    closing: !1
                                })) : e.addActiveBillboard(t)
                            })), e.updateActiveBillboards(r);
                            var o = function(t) {
                                if (-1 !== r.indexOf(t)) return {
                                    value: void 0
                                };
                                e.updateBillboardData(t, {
                                    closing: !0,
                                    direction: void 0,
                                    timeoutId: window.setTimeout((function() {
                                        e.removeFromActiveBillboards(t)
                                    }), 1e3)
                                })
                            };
                            try {
                                for (var i = A(e.viewData.activeBillboards.keys), a = i.next(); !a.done; a = i.next()) {
                                    var s = o(a.value);
                                    if ("object" == typeof s) return s.value
                                }
                            } catch (e) {
                                t = {
                                    error: e
                                }
                            } finally {
                                try {
                                    a && !a.done && (n = i.return) && n.call(i)
                                } finally {
                                    if (t) throw t.error
                                }
                            }
                        }, e.updateActiveBillboards = function(t) {
                            return k(e, void 0, void 0, (function() {
                                var e, n = this;
                                return C(this, (function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return r.trys.push([0, 2, , 3]), [4, this.engine.commandBinder.issueCommand(new s.a(t)).then((function(t) {
                                                var e, r;
                                                try {
                                                    for (var o = A(t), i = o.next(); !i.done; i = o.next()) {
                                                        var a = i.value;
                                                        n.updateBillboardData(a.sid, {
                                                            distance: n.distance.copy(n.cameraPosition).distanceToSquared(a.world),
                                                            position: a.screen
                                                        })
                                                    }
                                                } catch (t) {
                                                    e = {
                                                        error: t
                                                    }
                                                } finally {
                                                    try {
                                                        i && !i.done && (r = o.return) && r.call(o)
                                                    } finally {
                                                        if (e) throw e.error
                                                    }
                                                }
                                            }))];
                                        case 1:
                                            return r.sent(), [3, 3];
                                        case 2:
                                            return e = r.sent(), R.error("Could not get Disc Positions for tags - " + e), [3, 3];
                                        case 3:
                                            return [2]
                                    }
                                }))
                            }))
                        }, e.onSweepChosen = function(t) {
                            e.viewData.setNavigatingPosition(t)
                        }, e.updateHoverTimeout = function(t) {
                            if (clearTimeout(e.hoverTimeout), t.hovering) e.viewData.editing || (e.hoverTimeout = window.setTimeout((function() {
                                return e.onDiscHoverChange(t.sid, t.hovering)
                            }), 125));
                            else {
                                if (t.sid === e.viewData.selected) return;
                                e.onDiscHoverChange(t.sid, !1)
                            }
                        }, e.onDiscClicked = function(t) {
                            t.sid === e.viewData.selected ? (e.viewData.selectTag(null), e.removeBillboards([t.sid])) : e.navigateToTag(t.sid, f.a.Interpolate)
                        }, e.onSweepExit = function(t) {
                            if (t.toSweep && t.fromSweep !== t.toSweep) {
                                if (e.viewData.selected && e.viewData.navigating) return e.viewData.removeAllBillboardsExcept(e.viewData.selected);
                                e.viewData.isAddingTag() || e.removeBillboards(e.data.getTagList()), e.onEnterSweep(t.toSweep)
                            }
                        }, e.onAppChange = function(t) {
                            e.currentApp = t.application, e.viewData.resetBillboardData()
                        }, e.onViewmodeChange = function(t) {
                            null === e.viewData.navigating && t.fromMode === g.a.Panorama && e.removeBillboards(e.data.getTagList()), t.toMode !== g.a.Panorama ? e.toggleAllPersistent(!0) : e.sweepData.currentSweep && e.onEnterSweep(e.sweepData.currentSweep)
                        }, e.onEnterSweep = function(t) {
                            e.sweepData.isSweepUnaligned(t) ? e.toggleAllPersistent(!1) : e.updatePersistentBillboards(e.sweepData.getSweep(t).position)
                        }, e.onNavigationLinkClicked = function(t) {
                            return k(e, void 0, void 0, (function() {
                                var e, n, r, o, i, a, s, u, c;
                                return C(this, (function(l) {
                                    if (t.chunk.link && t.chunk.link.navigationData)
                                        if (e = {
                                                2: M.b.DOLLHOUSE,
                                                3: M.b.FLOORPLAN
                                            }, n = t.chunk.link.navigationData, r = n.sweepIndex, o = n.quaternion, i = n.mode, a = t.chunk.link.navigationData, s = a.panoId, u = a.position, s || void 0 === r || (c = this.sweepData.getSweepByIndex(r)) && (s = c.id), s) this.engine.commandBinder.issueCommand(new D.a({
                                            sweep: s,
                                            rotation: o,
                                            transition: f.a.FadeToBlack
                                        }));
                                        else {
                                            if (!(i in e)) throw new Error("Unknown navigation link pose: " + JSON.stringify(t.chunk.link.navigationData));
                                            this.engine.commandBinder.issueCommand(new S.a({
                                                mode: e[i],
                                                options: {
                                                    rotation: o,
                                                    position: u
                                                }
                                            }))
                                        }
                                    return [2]
                                }))
                            }))
                        }, e.onTagDirectionChanged = function(t, n) {
                            e.updateBillboardData(t, {
                                direction: n
                            })
                        }, e
                    }
                    return O(e, t), e.prototype.init = function(t, e) {
                        return k(this, void 0, void 0, (function() {
                            var t, n = this;
                            return C(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return this.engine = e, [4, Promise.all([e.market.waitForData(a.a), e.market.waitForData(d.a), e.waitForModule(i.eb), e.market.waitForData(T.a), e.market.waitForData(u.a)])];
                                    case 1:
                                        return t = E.apply(void 0, [r.sent(), 5]), this.data = t[0], this.sweepData = t[1], this.raycaster = t[2], this.settings = t[3], this.cameraData = t[4], this.viewData = e.market.tryGetData(_.c) || new _.c(this.data), e.market.register(this, _.c, this.viewData), this.viewData.setViewDataFactory(this.makeViewDataForMattertag), this.updateViewData(), this.settings.onPropertyChanged(b.a, (function(t) {
                                            0 !== t && n.viewData.removeBillboards([], !0)
                                        })), this.bindings.push(e.subscribe(c.b, this.updateHoverTimeout), e.subscribe(c.a, this.onDiscClicked), e.subscribe(l.a, this.onSweepExit), e.subscribe(h.a, this.onViewmodeChange), e.subscribe(p.b, this.onAppChange), this.cameraData.onChanged(this.onCameraUpdate), this.data.onChanged(this.updateViewData), this.viewData.openBillboards.onChanged(this.handleOpenAndActiveBillboards), this.viewData.activeBillboards.onChanged(this.updateViewData)), this.engine.commandBinder.addBinding(P.a, this.onNavigationLinkClicked), [2]
                                }
                            }))
                        }))
                    }, e.prototype.addBillboards = function(t, e) {
                        t && t.length && (this.viewData.togglePersistentBillboards(t, e), e && this.sweepData.currentSweep ? this.viewmodeData.isPano() ? this.sweepData.currentSweep && this.onEnterSweep(this.sweepData.currentSweep) : this.toggleAllPersistent(!0) : this.viewData.addBillboards(t))
                    }, e.prototype.removeBillboards = function(t, e) {
                        var n = t && t.length ? t : this.data.getTagList();
                        e && this.viewData.togglePersistentBillboards(n, !1), this.viewData.selectTag(null), this.viewData.removeBillboards(n)
                    }, e.prototype.navigateToTag = function(t, e) {
                        return k(this, void 0, Promise, (function() {
                            var n, r, o, i = this;
                            return C(this, (function(a) {
                                if (!(n = this.data.getTag(t))) throw new Error("No tag with that sid was found");
                                if (!n.enabled) throw new Error("Cannot navigate to a disabled mattertag");
                                return this.viewData.setNavigatingTag(t), this.viewData.selected === t || (this.viewData.selected && this.viewData.removeBillboards([this.viewData.selected]), this.viewData.addBillboards([t]), this.viewData.selectTag(t)), r = this.viewData.activeBillboards.get(t), o = r && r.direction, [2, this.engine.commandBinder.issueCommand(new y.a({
                                    tagId: t,
                                    transition: e,
                                    onSweepChosen: this.onSweepChosen,
                                    tagDirection: o
                                })).then((function() {
                                    i.onTagVisited(t), i.viewData.addBillboards([t]), i.viewData.setNavigatingTag(null), i.viewData.setNavigatingPosition(void 0)
                                })).catch((function(t) {
                                    R.debug(t), i.viewData.setNavigatingTag(null), i.viewData.setNavigatingPosition(void 0)
                                }))]
                            }))
                        }))
                    }, e.prototype.onTagVisited = function(t) {
                        this.viewData.visitTag(t), this.engine.broadcast(new c.e(t, v.b.OPEN)), this.engine.broadcast(new c.d(t))
                    }, e.prototype.onDiscHoverChange = function(t, e) {
                        if (this.data.getTag(t)) {
                            var n = this.viewData.getBillboards().indexOf(t);
                            if (e) {
                                if (-1 !== n) return;
                                this.currentApp === m.b.SHOWCASE && this.engine.broadcast(new c.e(t, v.b.HOVER)), this.viewData.removeAllBillboardsExcept(t), this.viewData.addBillboards([t]), this.viewData.selected && this.viewData.selected !== t && this.viewData.selectTag(null)
                            } else {
                                if (-1 === n) return;
                                this.removeBillboards([t])
                            }
                            this.viewData.commit()
                        }
                    }, e.prototype.updatePersistentBillboards = function(t, e) {
                        return k(this, void 0, void 0, (function() {
                            var e, n, r, o, i, a;
                            return C(this, (function(s) {
                                for (r in e = [], n = [], this.viewData.persistentBillboards) this.viewData.persistentBillboards[r] && (t ? (o = this.data.getTag(r), this.discPosition.copy(o.anchorPosition).add(o.stemVector), i = t.distanceTo(this.discPosition), this.discDirection.copy(this.discPosition).sub(t).normalize(), (a = this.raycaster.cast(t, this.discDirection)) && (0 === a.length || a[0].distance > i || a[0].object instanceof w.a ? e.push(r) : n.push(r))) : e.push(r));
                                return e.length && this.viewData.addBillboards(e), n.length && this.viewData.removeBillboards(n, !0), [2]
                            }))
                        }))
                    }, e.prototype.toggleAllPersistent = function(t) {
                        var e = [];
                        for (var n in this.viewData.persistentBillboards) this.viewData.persistentBillboards[n] && e.push(n);
                        t ? this.viewData.addBillboards(e) : this.viewData.removeBillboards(e, !0)
                    }, e
                }(i.L);
            e.default = I
        },
        983: function(t, e, n) {
            "use strict";
            n.r(e);
            var r, o = n(2),
                i = n(60),
                a = n(15),
                s = n(77),
                u = n(63),
                c = n(216),
                l = n(544),
                h = n(259),
                p = n(113),
                f = n(255),
                d = n(20),
                y = n(188),
                v = n(140),
                m = n(200),
                w = n(257),
                g = (r = function(t, e) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                }, function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                b = function(t, e, n, r) {
                    return new(n || (n = Promise))((function(o, i) {
                        function a(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function s(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new n((function(e) {
                                e(t.value)
                            })).then(a, s)
                        }
                        u((r = r.apply(t, e || [])).next())
                    }))
                },
                T = function(t, e) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function s(i) {
                        return function(s) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
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
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1], o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    i = e.call(t, a)
                                } catch (t) {
                                    i = [6, t], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, s])
                        }
                    }
                },
                P = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.name = "mattertag-controller", e.tagSettingEnabled = !1, e.updateTagVisibilityBySetting = function(t) {
                            e.tagSettingEnabled = t.tryGetProperty(w.a, !0), e.setTagsVisibility()
                        }, e.updateTagVisibilityByViewmode = function(t) {
                            e.viewmode = t.toMode, e.setTagsVisibility()
                        }, e
                    }
                    return g(e, t), e.prototype.init = function(t, e) {
                        return b(this, void 0, void 0, (function() {
                            var t, n, r, u, y = this;
                            return T(this, (function(g) {
                                switch (g.label) {
                                    case 0:
                                        return this.engine = e, t = this, [4, e.getModule(o.K)];
                                    case 1:
                                        return t.mattertagMeshModule = g.sent(), n = this, [4, e.market.waitForData(i.a)];
                                    case 2:
                                        return n.sweepData = g.sent(), [4, e.market.waitForData(a.c)];
                                    case 3:
                                        return r = g.sent(), this.bindings.push(e.subscribe(v.a, (function(t) {
                                            return y.setTagsVisibility()
                                        }))), this.setTagsVisibility(), this.bindings.push(e.subscribe(h.a, (function(t) {
                                            var n = e.market.tryGetData(c.a),
                                                r = e.market.tryGetData(p.a);
                                            n && r && (r.currentMode !== d.a.Dollhouse && r.currentMode !== d.a.Floorplan || y.mattertagMeshModule.changeVisibility((function(e) {
                                                return -1 === t.floorIndex || t.floorIndex === n.getTag(e).floorIndex
                                            })))
                                        }))), this.bindings.push(e.subscribe(l.a, (function(t) {
                                            var n = e.market.tryGetData(c.a),
                                                r = e.market.tryGetData(p.a);
                                            n && r && (r.currentMode !== d.a.Dollhouse && r.currentMode !== d.a.Floorplan || y.mattertagMeshModule.changeVisibility((function(e, r) {
                                                return r && (-1 === t.to || t.to === n.getTag(e).floorIndex)
                                            })))
                                        }))), this.bindings.push(e.subscribe(m.a, this.updateTagVisibilityByViewmode), e.subscribe(f.a, this.updateTagVisibilityByViewmode)), u = r.application, this.bindings.push(r.onPropertyChanged("application", (function(t) {
                                            t !== u && (y.setTagsVisibility(), u = t)
                                        }))), e.market.waitForData(s.a).then((function(t) {
                                            t.onPropertyChanged(w.a, (function() {
                                                y.updateTagVisibilityBySetting(t)
                                            })), y.updateTagVisibilityBySetting(t)
                                        })), [2]
                                }
                            }))
                        }))
                    }, e.prototype.setTagsVisibility = function() {
                        if (!this.tagSettingEnabled) return this.mattertagMeshModule.hideAll();
                        if (!this.viewmode) {
                            var t = this.engine.market.tryGetData(p.a);
                            t && t.currentMode && (this.viewmode = t.currentMode)
                        }
                        if (this.viewmode === d.a.Panorama) this.sweepData.currentSweep && (this.sweepData.getSweep(this.sweepData.currentSweep).alignmentType === u.a.UNALIGNED ? this.mattertagMeshModule.hideAll() : this.mattertagMeshModule.showAll());
                        else if (this.viewmode === d.a.Dollhouse || this.viewmode === d.a.Floorplan) {
                            var e = this.engine.market.tryGetData(y.c),
                                n = this.engine.market.tryGetData(c.a);
                            e && n && (-1 === e.currentFloor ? this.mattertagMeshModule.showAll() : this.mattertagMeshModule.changeVisibility((function(t, r) {
                                return e.currentFloor === n.getTag(t).floorIndex
                            })))
                        }
                    }, e
                }(o.H);
            e.default = P
        },
        984: function(t, e, n) {
            "use strict";
            n.r(e);
            var r, o = n(78),
                i = n(2),
                a = n(77),
                s = n(20),
                u = n(96),
                c = n(60),
                l = n(181),
                h = n(174),
                p = n(499),
                f = n(224),
                d = n(3),
                y = (r = function(t, e) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                }, function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                v = function(t, e, n, r) {
                    return new(n || (n = Promise))((function(o, i) {
                        function a(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function s(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new n((function(e) {
                                e(t.value)
                            })).then(a, s)
                        }
                        u((r = r.apply(t, e || [])).next())
                    }))
                },
                m = function(t, e) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function s(i) {
                        return function(s) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
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
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1], o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    i = e.call(t, a)
                                } catch (t) {
                                    i = [6, t], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, s])
                        }
                    }
                },
                w = new d.a("tour-data"),
                g = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.name = "tours-data", e.defaultModes = [s.a.Panorama, s.a.Outdoor], e.deleteUnusedTourSnapshots = function() {
                            return v(e, void 0, void 0, (function() {
                                var t, e, n, r, o;
                                return m(this, (function(i) {
                                    switch (i.label) {
                                        case 0:
                                            for (e in t = [], this.snapshotsData.collection) t.push(e);
                                            n = 0, i.label = 1;
                                        case 1:
                                            return n < t.length ? (r = t[n], (o = this.snapshotsData.collection[r]).category !== f.a.tour || this.tourData.isSnapshotInTour(o.sid) ? [3, 3] : [4, this.engine.commandBinder.issueCommand(new p.d(o.sid))]) : [3, 4];
                                        case 2:
                                            i.sent(), i.label = 3;
                                        case 3:
                                            return n++, [3, 1];
                                        case 4:
                                            return [2]
                                    }
                                }))
                            }))
                        }, e.onUpdateSnapshots = function() {
                            e.tourData.updateSnapshots(e.snapshotsData.collection)
                        }, e
                    }
                    return y(e, t), e.prototype.init = function(t, e) {
                        return v(this, void 0, void 0, (function() {
                            var n, r, o, i, s, f, d;
                            return m(this, (function(y) {
                                switch (y.label) {
                                    case 0:
                                        return this.engine = e, [4, e.market.waitForData(a.a)];
                                    case 1:
                                        return n = y.sent(), r = this.getFilterModes(n, this.defaultModes), [4, t.activeReelSync.load()];
                                    case 2:
                                        return o = y.sent() || new l.a, i = this, [4, e.market.waitForData(c.a)];
                                    case 3:
                                        return i.sweepData = y.sent(), s = this, [4, e.market.waitForData(h.a)];
                                    case 4:
                                        return s.snapshotsData = y.sent(), this.tourData = new u.b(this.snapshotsData.collection, o, r, this.sweepData.getSweepList(), t.looping), e.market.register(this, u.b, this.tourData), this.bindings.push(e.commandBinder.addBinding(p.b, this.deleteUnusedTourSnapshots)), this.bindings.push(this.snapshotsData.onChanged(this.onUpdateSnapshots)), f = Object.keys(o.reel).length, d = this.tourData.getSnapshotCount(), f !== d && w.info(f - d + " items in snapshots, but not in reel"), [2]
                                }
                            }))
                        }))
                    }, e.prototype.getFilterModes = function(t, e) {
                        var n = t.tryGetProperty("dh", 1) > 0,
                            r = t.tryGetProperty(o.a.Dollhouse, !0);
                        n && r && e.push(s.a.Dollhouse);
                        var i = t.tryGetProperty("fp", 1) > 0,
                            a = t.tryGetProperty(o.a.FloorPlan, !0);
                        return i && a && e.push(s.a.Floorplan), e
                    }, e
                }(i.Jb);
            e.default = g
        },
        985: function(t, e, n) {
            "use strict";
            n.r(e);
            n(350), n(351);
            var r, o = n(2),
                i = n(604),
                a = n(6),
                s = n(82),
                u = n(3),
                c = n(727),
                l = n(15),
                h = (r = function(t, e) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                }, function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                p = function(t, e, n, r) {
                    return new(n || (n = Promise))((function(o, i) {
                        function a(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function s(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new n((function(e) {
                                e(t.value)
                            })).then(a, s)
                        }
                        u((r = r.apply(t, e || [])).next())
                    }))
                },
                f = function(t, e) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function s(i) {
                        return function(s) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
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
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1], o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    i = e.call(t, a)
                                } catch (t) {
                                    i = [6, t], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, s])
                        }
                    }
                },
                d = new u.a("webvr-loader"),
                y = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.name = "webvr-loader", e
                    }
                    return h(e, t), e.prototype.init = function(t, e) {
                        return p(this, void 0, void 0, (function() {
                            var t, n;
                            return f(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return this.engine = e, this.onExitVr = this.onExitVr.bind(this), [4, this.maybeCacheVrDisplay()];
                                    case 1:
                                        return r.sent(), [4, e.getModule(o.a)];
                                    case 2:
                                        return t = r.sent(), n = this, [4, t.getApi().getAppKey("SHOWCASE", "webvr_version")];
                                    case 3:
                                        return n.hackWebVRVersion = r.sent(), [2]
                                }
                            }))
                        }))
                    }, e.prototype.maybeCacheVrDisplay = function() {
                        return p(this, void 0, void 0, (function() {
                            var t;
                            return f(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return navigator.getVRDisplays ? [4, i.b()] : [3, 2];
                                    case 1:
                                        (t = e.sent()) && (this.vrDisplay = t), e.label = 2;
                                    case 2:
                                        return [2]
                                }
                            }))
                        }))
                    }, e.prototype.hackEnterVrMode = function() {
                        return p(this, void 0, void 0, (function() {
                            return f(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, this.maybeCacheVrDisplay()];
                                    case 1:
                                        return t.sent(), this.vrDisplay ? (d.info("Headset mounted"), this.engine.getModuleSync(s.default).disposeGui(), this.engine.deactivate(), this.explosivelyDisableGui(), [4, this.engine.commandBinder.issueCommand(new c.a(l.b.WEBVR))]) : [3, 3];
                                    case 2:
                                        return t.sent(), [3, 4];
                                    case 3:
                                        d.error("vrDisplay not found"), t.label = 4;
                                    case 4:
                                        return [2]
                                }
                            }))
                        }))
                    }, e.prototype.hackLoadVrScript = function() {
                        var t = "https://static.matterport.com/webvr/" + (a.z("webvr") || this.hackWebVRVersion) + "/js/main.js";
                        return new Promise((function(e, n) {
                            var r = document.createElement("script");
                            r.type = "text/javascript", r.src = t, r.onload = e, document.head.appendChild(r)
                        }))
                    }, e.prototype.onExitVr = function() {
                        this.vrDisplay.isPresenting || (window.removeEventListener("vrdisplaypresentchange", this.onExitVr), d.info("Exiting VR"), this.hackUnload())
                    }, e.prototype.hackUnload = function() {
                        var t = window.location.href; - 1 === window.location.search.indexOf("&qs=1") && (t += "&qs=1"), window.location.replace(t)
                    }, e.prototype.explosivelyDisableGui = function() {
                        var t = document.getElementById("gui");
                        t && t.remove()
                    }, e
                }(o.Ob);
            e.default = y
        },
        986: function(t, e, n) {
            "use strict";
            n.r(e);
            var r, o = n(2),
                i = n(82),
                a = n(61),
                s = n(60),
                u = n(113),
                c = n(166),
                l = n(577),
                h = n(188),
                p = n(266),
                f = n(173),
                d = n(139),
                y = n(77),
                v = n(91),
                m = (r = function(t, e) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                }, function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                w = function(t, e, n, r) {
                    return new(n || (n = Promise))((function(o, i) {
                        function a(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function s(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new n((function(e) {
                                e(t.value)
                            })).then(a, s)
                        }
                        u((r = r.apply(t, e || [])).next())
                    }))
                },
                g = function(t, e) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function s(i) {
                        return function(s) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
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
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1], o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    i = e.call(t, a)
                                } catch (t) {
                                    i = [6, t], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, s])
                        }
                    }
                },
                b = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.name = "quick-menus", e
                    }
                    return m(e, t), e.prototype.init = function(t, e) {
                        return w(this, void 0, void 0, (function() {
                            var t, n, r, f, m, w, b = this;
                            return g(this, (function(g) {
                                switch (g.label) {
                                    case 0:
                                        return t = this, [4, e.getModuleSync(i.default)];
                                    case 1:
                                        return t.settingsModule = g.sent(), this.settingsGui = this.settingsModule.getSettingsGui(), [4, e.market.waitForData(s.a)];
                                    case 2:
                                        return n = g.sent(), [4, e.market.waitForData(y.a)];
                                    case 3:
                                        return r = g.sent(), [4, e.market.waitForData(u.a)];
                                    case 4:
                                        return f = g.sent(), [4, e.market.waitForData(h.c)];
                                    case 5:
                                        return m = g.sent(), [4, e.market.waitForData(a.a)];
                                    case 6:
                                        return w = g.sent(), this.uIndex = this.settingsGui.addPanel("Link to location", [v.a.U], {
                                            allowSubGroups: !1,
                                            width: 400,
                                            ratio: 90
                                        }), this.pIndex = this.settingsGui.addPanel("Quick settings", [v.a.P], {
                                            allowSubGroups: !1
                                        }), this.settingsGui.loadPromise.then((function() {
                                            b.settingsGui.addControl(b.uIndex, "", "Link", {}), b.settingsGui.addControl(b.uIndex, "", "Shorten URL", !0), b.settingsGui.addButton(b.uIndex, "", "Copy to clipboard", (function() {
                                                var t = document.createElement("input");
                                                t.type = "text", t.value = b.buildLink(w, f, m, n), document.body.appendChild(t), t.select(), document.execCommand("copy"), document.body.removeChild(t)
                                            })), b.settingsGui.toggle(b.uIndex);
                                            var t = l.c * (180 / Math.PI) * 60;
                                            b.settingsGui.addControl(b.pIndex, "", p.a, !0), b.settingsGui.addSlider(b.pIndex, "", o.Sb, t, .25, 10, 2), b.settingsGui.addSlider(b.pIndex, "", o.Rb, c.a.camera.baseTransitionTime, 1, 5e3, 0);
                                            var e = r.tryGetProperty(d.c, d.d);
                                            b.settingsGui.addSlider(b.pIndex, "", d.e, Object(d.f)(e), .5, 10, 2), b.settingsGui.toggle(b.pIndex), b.settingsModule.registerSetting("Quick settings", o.Sb, t, !1), b.settingsModule.registerSetting("Quick settings", o.Rb, c.a.camera.baseTransitionTime, !1), b.settingsGui.onToggle(b.uIndex, (function(t) {
                                                t && b.settingsGui.updateSetting(b.uIndex, "Link", b.buildLink(w, f, m, n))
                                            })), w.pose.onChanged((function() {
                                                b.settingsGui.isLoaded && b.settingsGui.isVisible(b.uIndex) && b.settingsGui.updateSetting(b.uIndex, "Link", b.buildLink(w, f, m, n))
                                            })), r.onPropertyChanged(d.e, (function(t) {
                                                r.setProperty(d.c, Object(d.h)(t))
                                            }))
                                        })), [2]
                                }
                            }))
                        }))
                    }, e.prototype.buildLink = function(t, e, n, r) {
                        var o = this.settingsGui.getSetting(this.uIndex, "Shorten URL"),
                            i = f.a.getQueryString({
                                cameraData: t,
                                viewmodeData: e,
                                floorsViewData: n,
                                sweepData: r
                            }, o);
                        return location.origin + "/show/?" + i
                    }, e
                }(o.db);
            e.default = b
        },
        987: function(t, e, n) {
            "use strict";
            n.r(e);
            var r, o = n(2),
                i = n(652),
                a = (r = function(t, e) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                }, function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                s = function(t, e, n, r) {
                    return new(n || (n = Promise))((function(o, i) {
                        function a(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function s(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new n((function(e) {
                                e(t.value)
                            })).then(a, s)
                        }
                        u((r = r.apply(t, e || [])).next())
                    }))
                },
                u = function(t, e) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function s(i) {
                        return function(s) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
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
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1], o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    i = e.call(t, a)
                                } catch (t) {
                                    i = [6, t], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, s])
                        }
                    }
                },
                c = function(t) {
                    var e = "function" == typeof Symbol && t[Symbol.iterator],
                        n = 0;
                    return e ? e.call(t) : {
                        next: function() {
                            return t && n >= t.length && (t = void 0), {
                                value: t && t[n++],
                                done: !t
                            }
                        }
                    }
                },
                l = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.name = "model-mesh-preview", e.defaultSize = .3, e
                    }
                    return a(e, t), e.prototype.init = function(t, e) {
                        return s(this, void 0, void 0, (function() {
                            var t;
                            return u(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.engine = e, this.bindings.push(e.commandBinder.addBinding(i.a, this.update.bind(this))), t = this, [4, e.getModule(o.S)];
                                    case 1:
                                        return t.modelMeshModule = n.sent(), [2]
                                }
                            }))
                        }))
                    }, e.prototype.update = function(t) {
                        return s(this, void 0, void 0, (function() {
                            var e, n, r, i, a, s, l;
                            return u(this, (function(u) {
                                switch (u.label) {
                                    case 0:
                                        return this.modelMeshModule ? [3, 2] : (r = this, [4, this.engine.getModule(o.S)]);
                                    case 1:
                                        r.modelMeshModule = u.sent(), u.label = 2;
                                    case 2:
                                        i = t.enabled && t.previewCirclePosition ? t.previewCirclePosition : null, a = t.size ? t.size : this.defaultSize;
                                        try {
                                            for (s = c(this.modelMeshModule.mesh.chunks), l = s.next(); !l.done; l = s.next()) l.value.setMeshPreviewSphere(i, a)
                                        } catch (t) {
                                            e = {
                                                error: t
                                            }
                                        } finally {
                                            try {
                                                l && !l.done && (n = s.return) && n.call(s)
                                            } finally {
                                                if (e) throw e.error
                                            }
                                        }
                                        return [2]
                                }
                            }))
                        }))
                    }, e
                }(o.T);
            e.default = l
        },
        988: function(t, e, n) {
            "use strict";
            n.r(e);
            var r, o = n(2),
                i = n(1),
                a = n(18),
                s = n(175),
                u = n(177),
                c = n(61),
                l = n(50),
                h = n(118),
                p = n(35),
                f = (r = function(t, e) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                }, function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                d = function() {
                    return (d = Object.assign || function(t) {
                        for (var e, n = 1, r = arguments.length; n < r; n++)
                            for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                        return t
                    }).apply(this, arguments)
                },
                y = function(t, e, n, r) {
                    return new(n || (n = Promise))((function(o, i) {
                        function a(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function s(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new n((function(e) {
                                e(t.value)
                            })).then(a, s)
                        }
                        u((r = r.apply(t, e || [])).next())
                    }))
                },
                v = function(t, e) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function s(i) {
                        return function(s) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
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
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1], o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    i = e.call(t, a)
                                } catch (t) {
                                    i = [6, t], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, s])
                        }
                    }
                },
                m = function(t) {
                    var e = "function" == typeof Symbol && t[Symbol.iterator],
                        n = 0;
                    return e ? e.call(t) : {
                        next: function() {
                            return t && n >= t.length && (t = void 0), {
                                value: t && t[n++],
                                done: !t
                            }
                        }
                    }
                },
                w = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.name = "lines", e.makeLineMaterial = function(t, n, r, o, i) {
                            void 0 === r && (r = {});
                            var a = i || e.textures.get(u.f.LINE_HOVER),
                                s = o || e.textures.get(u.f.LINE_DEFAULT);
                            return n ? new u.e(d({}, r, {
                                color: t
                            }), a, s) : new u.e(d({}, r, {
                                color: t
                            }))
                        }, e.makeEndpointMaterial = function(t, n, r) {
                            var o = r || e.textures.get(u.f.END_HOVER),
                                i = n || e.textures.get(u.f.END_DEFAULT),
                                s = t instanceof a.a ? t : new a.a(t);
                            return new u.c(s, i, o)
                        }, e.onCanvasChange = function(t) {
                            var n, r;
                            try {
                                for (var o = m(e.segments), i = o.next(); !i.done; i = o.next()) {
                                    i.value.updateResolution(t.width, t.height)
                                }
                            } catch (t) {
                                n = {
                                    error: t
                                }
                            } finally {
                                try {
                                    i && !i.done && (r = o.return) && r.call(o)
                                } finally {
                                    if (n) throw n.error
                                }
                            }
                        }, e
                    }
                    return f(e, t), e.prototype.init = function(t, e) {
                        return y(this, void 0, void 0, (function() {
                            var t, n, r;
                            return v(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, e.getModule(o.Nb)];
                                    case 1:
                                        return t = a.sent(), this.scene = t.getScene(), n = this, [4, e.market.waitForData(h.a)];
                                    case 2:
                                        return n.canvas = a.sent(), r = this, [4, e.market.waitForData(c.a)];
                                    case 3:
                                        return r.cameraData = a.sent(), this.bindings.push(this.canvas.onChanged(this.onCanvasChange)), this.textures = new u.g, this.cameraPosition = new i.a, this.segments = [], [2]
                                }
                            }))
                        }))
                    }, e.prototype.onUpdate = function() {
                        this.cameraPosition.copy(this.cameraData.pose.position)
                    }, e.prototype.dispose = function(e) {
                        t.prototype.dispose.call(this, e), this.segments.forEach((function(t) {
                            return t.dispose()
                        })), this.textures.dispose()
                    }, e.prototype.makeLine = function(t, e, n, r, o) {
                        var i = this;
                        void 0 === o && (o = function() {
                            return !1
                        });
                        var a = o() ? p.c.OFFSET_TOWARDS_CAMERA : 0,
                            u = o() ? function(t) {
                                return i.cameraPosition.clone().sub(t).setLength(a).add(t)
                            } : function(t) {
                                return t
                            },
                            c = new s.b(t, e, n, {
                                beforeUpdatePositions: u,
                                onShow: function() {
                                    return c.children.forEach((function(t) {
                                        return i.scene.addChild(l.a.Root, t)
                                    }))
                                },
                                onHide: function() {
                                    return c.children.forEach((function(t) {
                                        return i.scene.removeChild(l.a.Root, t)
                                    }))
                                }
                            }, r);
                        return c.updateResolution(this.canvas.width, this.canvas.height), c.opacity(1), c.show(), c.updatePositions(t, e), this.segments.push(c), c
                    }, e
                }(o.D);
            e.default = w
        },
        989: function(t, e, n) {
            "use strict";
            n.r(e);
            var r, o = n(2),
                i = n(82),
                a = n(729),
                s = n(118),
                u = n(6),
                c = n(714),
                l = n(644),
                h = n(597),
                p = n(542),
                f = n(3),
                d = n(106),
                y = (r = function(t, e) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                }, function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                v = function(t, e, n, r) {
                    return new(n || (n = Promise))((function(o, i) {
                        function a(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function s(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new n((function(e) {
                                e(t.value)
                            })).then(a, s)
                        }
                        u((r = r.apply(t, e || [])).next())
                    }))
                },
                m = function(t, e) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function s(i) {
                        return function(s) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
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
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1], o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    i = e.call(t, a)
                                } catch (t) {
                                    i = [6, t], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, s])
                        }
                    }
                },
                w = function(t, e) {
                    var n = "function" == typeof Symbol && t[Symbol.iterator];
                    if (!n) return t;
                    var r, o, i = n.call(t),
                        a = [];
                    try {
                        for (;
                            (void 0 === e || e-- > 0) && !(r = i.next()).done;) a.push(r.value)
                    } catch (t) {
                        o = {
                            error: t
                        }
                    } finally {
                        try {
                            r && !r.done && (n = i.return) && n.call(i)
                        } finally {
                            if (o) throw o.error
                        }
                    }
                    return a
                },
                g = new f.a("screenshots"),
                b = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.name = "screenshots-module", e
                    }
                    return y(e, t), e.prototype.init = function(t, e) {
                        return v(this, void 0, void 0, (function() {
                            var t, n = this;
                            return m(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return this.engine = e, [4, Promise.all([e.waitForModule(i.default), e.market.waitForData(s.a)])];
                                    case 1:
                                        return t = w.apply(void 0, [r.sent(), 2]), this.settingsModule = t[0], this.canvas = t[1], this.settingsModule.registerButton("Debug", "Take screenshot", (function() {
                                            return v(n, void 0, void 0, (function() {
                                                var t;
                                                return m(this, (function(e) {
                                                    switch (e.label) {
                                                        case 0:
                                                            return t = Date.now(), [4, this.takeAndDownloadScreenshot({
                                                                height: this.canvas.height,
                                                                width: this.canvas.width
                                                            }, "image_" + t + ".jpg", d.a.ALL)];
                                                        case 1:
                                                            return e.sent(), [2]
                                                    }
                                                }))
                                            }))
                                        })), this.settingsModule.registerButton("Debug", "Take 16k screenshot", (function() {
                                            return v(n, void 0, void 0, (function() {
                                                var t;
                                                return m(this, (function(e) {
                                                    switch (e.label) {
                                                        case 0:
                                                            return t = Date.now(), [4, this.takeAndDownloadScreenshot({
                                                                height: 9e3,
                                                                width: 16e3
                                                            }, "image_" + t + ".jpg", d.a.ALL)];
                                                        case 1:
                                                            return e.sent(), [2]
                                                    }
                                                }))
                                            }))
                                        })), this.settingsModule.registerButton("Debug", "Take FB 3D screenshot", (function() {
                                            return v(n, void 0, void 0, (function() {
                                                var t, e, n, r, o;
                                                return m(this, (function(i) {
                                                    switch (i.label) {
                                                        case 0:
                                                            t = Date.now(), e = this.engine.getRenderLayer("model-mesh"), n = this.engine.getRenderLayer("skybox"), (r = e.clone()).addLayers(n), i.label = 1;
                                                        case 1:
                                                            return i.trys.push([1, 6, 7, 10]), [4, this.takeAndDownloadScreenshot({
                                                                height: this.canvas.height,
                                                                width: this.canvas.width
                                                            }, "image_" + t + ".jpg", r)];
                                                        case 2:
                                                            return i.sent(), [4, this.engine.commandBinder.issueCommand(new l.a(h.b.Depth))];
                                                        case 3:
                                                            return i.sent(), [4, this.engine.commandBinder.issueCommand(new p.a(1))];
                                                        case 4:
                                                            return i.sent(), [4, this.takeAndDownloadScreenshot({
                                                                height: Math.floor(this.canvas.height / 4),
                                                                width: Math.floor(this.canvas.width / 4)
                                                            }, "image_" + t + "_depth.jpg", e)];
                                                        case 5:
                                                            return i.sent(), [3, 10];
                                                        case 6:
                                                            throw o = i.sent(), g.error("Could not take screenshot"), o;
                                                        case 7:
                                                            return [4, this.engine.commandBinder.issueCommand(new l.a(null))];
                                                        case 8:
                                                            return i.sent(), [4, this.engine.commandBinder.issueCommand(new p.a(0))];
                                                        case 9:
                                                            return i.sent(), [7];
                                                        case 10:
                                                            return [2]
                                                    }
                                                }))
                                            }))
                                        })), [2]
                                }
                            }))
                        }))
                    }, e.prototype.takeAndDownloadScreenshot = function(t, e, n) {
                        return v(this, void 0, void 0, (function() {
                            var r;
                            return m(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, this.engine.commandBinder.issueCommand(new a.a({
                                            visibleObjects: n,
                                            resolution: t,
                                            returnType: a.b.ArrayBufferJPG
                                        }))];
                                    case 1:
                                        return r = o.sent(), Object(u.v)(Object(c.c)(r), e), [2]
                                }
                            }))
                        }))
                    }, e
                }(o.lb);
            e.default = b
        },
        990: function(t, e, n) {
            "use strict";
            n.r(e);
            var r, o = n(2),
                i = n(3),
                a = n(50),
                s = n(61),
                u = n(77),
                c = n(551),
                l = n(104),
                h = n(220),
                p = n(329),
                f = n(84),
                d = n(59),
                y = n(78),
                v = n(95),
                m = n(15),
                w = n(113),
                g = n(35),
                b = (r = function(t, e) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                }, function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                T = function(t, e, n, r) {
                    return new(n || (n = Promise))((function(o, i) {
                        function a(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function s(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new n((function(e) {
                                e(t.value)
                            })).then(a, s)
                        }
                        u((r = r.apply(t, e || [])).next())
                    }))
                },
                P = function(t, e) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function s(i) {
                        return function(s) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
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
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1], o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    i = e.call(t, a)
                                } catch (t) {
                                    i = [6, t], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, s])
                        }
                    }
                },
                D = function(t, e) {
                    var n = "function" == typeof Symbol && t[Symbol.iterator];
                    if (!n) return t;
                    var r, o, i = n.call(t),
                        a = [];
                    try {
                        for (;
                            (void 0 === e || e-- > 0) && !(r = i.next()).done;) a.push(r.value)
                    } catch (t) {
                        o = {
                            error: t
                        }
                    } finally {
                        try {
                            r && !r.done && (n = i.return) && n.call(i)
                        } finally {
                            if (o) throw o.error
                        }
                    }
                    return a
                },
                S = new i.a("showcase-measurements"),
                x = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.name = "measurement3d", e.featureActive = !1, e.checkFeatureEnablement = function() {
                            var t = e.settings.tryGetProperty(l.c, !1),
                                n = e.settings.tryGetProperty(y.a.Measurements, !1),
                                r = e.measurementModeData.phase !== h.MeasuringPhase.CLOSED,
                                o = e.appData && e.appData.application === m.b.SHOWCASE && t && n && r;
                            o !== e.featureActive && (S.debug("checkFeatureEnablement():", {
                                featureVisible: o,
                                featureFlagEnabled: t,
                                userEnabled: n
                            }), o ? e.activate() : e.deactivate())
                        }, e.clearPointGroups = function() {
                            for (; e.pointGroups.length > 0;) e.pointGroups.pop()
                        }, e.addMeasurementsToPointGroups = function() {
                            var t = e.measurementViewData.data.grouper;
                            e.pointGroups.copy(t.pointGroups.groups()), e.lookup = t.lookup
                        }, e
                    }
                    return b(e, t), e.prototype.init = function(t, e) {
                        return T(this, void 0, void 0, (function() {
                            var t, n, r, i, a, l, y, g, b, T, S, x, M, _, O, k, C = this;
                            return P(this, (function(P) {
                                switch (P.label) {
                                    case 0:
                                        return [4, Promise.all([e.getModule(o.Nb), e.getModule(o.D), e.market.waitForData(s.a), e.market.waitForData(u.a), e.market.waitForData(c.a), e.market.waitForData(h.MeasurementModeData), e.market.waitForData(m.c), e.market.waitForData(w.a)])];
                                    case 1:
                                        return t = D.apply(void 0, [P.sent(), 8]), n = t[0], r = t[1], i = t[2], a = t[3], l = t[4], y = t[5], g = t[6], b = t[7], this.appData = g, this.measurementModeData = y, this.measurementViewData = l, this.scene = n.getScene(), this.settings = a, this.engine = e, T = e.claimRenderLayer(this.name), S = Object(f.b)([]), this.pointGroups = new h.Grouper(S), x = function(t, e, n) {
                                            return void 0 === n && (n = !1), Object(d.b)(S, t).createSubscription(e, n)
                                        }, M = function() {
                                            var t = C.measurementViewData.selected.value;
                                            return t ? C.lookup.idToGroup[t] : -1
                                        }, _ = function() {
                                            return b.isFloorplan()
                                        }, O = function(t, e, n) {
                                            var r = e - C.pointGroups.getGroupStartIndex(t),
                                                o = C.lookup.groupToIds[t][r];
                                            return C.measurementViewData.getViewData(o)
                                        }, this.lineRenderer = new h.MeasurementLineRenderer(this.pointGroups, x, i, r, T, T, M, _, O, 16777215), k = new p.a({
                                            color: "black",
                                            backgroundColor: "white"
                                        }), this.textRenderer = new h.MeasurementLabelRenderer(this.pointGroups, x, i, T, v.a.visibleFloor + 3, k, O, _), this.checkFeatureEnablement(), [2]
                                }
                            }))
                        }))
                    }, e.prototype.activate = function() {
                        this.engine.addComponent(this, this.lineRenderer), this.engine.addComponent(this, this.textRenderer), this.addMeasurementsToPointGroups(), this.scene.addChild(a.a.Root, this.textRenderer.container), this.featureActive = !0
                    }, e.prototype.deactivate = function() {
                        this.clearPointGroups(), this.engine.removeComponent(this, this.lineRenderer), this.engine.removeComponent(this, this.textRenderer), this.scene.removeChild(a.a.Root, this.textRenderer.container), this.featureActive = !1
                    }, e.prototype.onUpdate = function() {
                        if (this.checkFeatureEnablement(), this.featureActive)
                            for (var t = 0; t < this.pointGroups.groupCount; t++) {
                                var e = this.lookup.groupToIds[t][0],
                                    n = this.measurementViewData.getViewData(e);
                                if (void 0 !== n) {
                                    var r = n.opacity.value;
                                    (n.opacity.value <= g.c.LABEL_HIDDEN_OPACITY || g.c.HIDE_LABELS) && (r = 0), this.textRenderer && this.textRenderer.setTextOpacityByGroup(t, r), this.lineRenderer && this.lineRenderer.setLineOpacityByGroup(t, n.opacity.value)
                                }
                            }
                    }, e.prototype.dispose = function(e) {
                        this.deactivate(), this.textRenderer.dispose(), this.lineRenderer.dispose(), e.disposeRenderLayer(this.name), t.prototype.dispose.call(this, e)
                    }, e
                }(o.O);
            e.default = x
        },
        991: function(t, e, n) {
            "use strict";
            n.r(e);
            var r, o = n(2),
                i = n(596),
                a = n(20),
                s = n(62),
                u = n(113),
                c = n(16),
                l = n(31),
                h = n(68),
                p = (r = function(t, e) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                }, function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                f = function(t, e, n, r) {
                    return new(n || (n = Promise))((function(o, i) {
                        function a(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function s(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function u(t) {
                            t.done ? o(t.value) : new n((function(e) {
                                e(t.value)
                            })).then(a, s)
                        }
                        u((r = r.apply(t, e || [])).next())
                    }))
                },
                d = function(t, e) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function s(i) {
                        return function(s) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
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
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1], o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    i = e.call(t, a)
                                } catch (t) {
                                    i = [6, t], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, s])
                        }
                    }
                },
                y = function(t, e) {
                    var n = "function" == typeof Symbol && t[Symbol.iterator];
                    if (!n) return t;
                    var r, o, i = n.call(t),
                        a = [];
                    try {
                        for (;
                            (void 0 === e || e-- > 0) && !(r = i.next()).done;) a.push(r.value)
                    } catch (t) {
                        o = {
                            error: t
                        }
                    } finally {
                        try {
                            r && !r.done && (n = i.return) && n.call(i)
                        } finally {
                            if (o) throw o.error
                        }
                    }
                    return a
                },
                v = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.name = "sweep-pin-navigation", e
                    }
                    return p(e, t), e.prototype.init = function(t, e) {
                        return f(this, void 0, void 0, (function() {
                            var t, n, r, p, f, v, m;
                            return d(this, (function(d) {
                                switch (d.label) {
                                    case 0:
                                        return [4, Promise.all([e.getModule(o.Ab), e.getModule(o.Mb), e.market.waitForData(u.a), e.getModule(o.x)])];
                                    case 1:
                                        return t = y.apply(void 0, [d.sent(), 4]), n = t[0], r = t[1], p = t[2], f = t[3], v = function(t, e) {
                                            p.currentMode && p.currentMode !== a.a.Panorama && r.switchToMode(a.a.Panorama, s.a.FadeToBlack, {
                                                sweepID: t,
                                                rotation: e
                                            })
                                        }, m = new c.a, this.bindings.push(f.registerMeshHandler(l.a, h.a.isType(i.a), (function(t, e, r) {
                                            var o = n.mapColliderToSweep(e);
                                            return !(!o || p.transition.active) && (m.set(0, 0, 0, 1).multiply(o.rotation), v(o.id, m), !0)
                                        }))), [2]
                                }
                            }))
                        }))
                    }, e
                }(o.Bb);
            e.default = v
        }
    }
]);