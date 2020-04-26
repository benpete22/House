(window.webpackJsonp = window.webpackJsonp || []).push([
    [0], {
        530: function(t, r, n) {
            "use strict";
            n.d(r, "c", (function() {
                return l
            })), n.d(r, "d", (function() {
                return a
            })), n.d(r, "f", (function() {
                return u
            })), n.d(r, "a", (function() {
                return s
            })), n.d(r, "e", (function() {
                return c
            })), n.d(r, "b", (function() {
                return f
            }));
            var e, o = n(9),
                i = (e = function(t, r) {
                    return (e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, r) {
                            t.__proto__ = r
                        } || function(t, r) {
                            for (var n in r) r.hasOwnProperty(n) && (t[n] = r[n])
                        })(t, r)
                }, function(t, r) {
                    function n() {
                        this.constructor = t
                    }
                    e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
                }),
                l = function(t) {
                    function r() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return i(r, t), r
                }(o.a),
                a = function(t) {
                    function r(r) {
                        var n = t.call(this) || this;
                        return n.index = r, n
                    }
                    return i(r, t), r
                }(o.a),
                u = function(t) {
                    function r() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return i(r, t), r
                }(o.a),
                s = function(t) {
                    function r() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return i(r, t), r
                }(o.a),
                c = function(t) {
                    function r() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return i(r, t), r
                }(o.a),
                f = function(t) {
                    function r() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return i(r, t), r
                }(o.a)
        },
        535: function(t, r, n) {
            "use strict";
            n.d(r, "b", (function() {
                return c
            })), n.d(r, "a", (function() {
                return f
            }));
            var e, o = n(25),
                i = n(306),
                l = n(115),
                a = n(27),
                u = (e = function(t, r) {
                    return (e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, r) {
                            t.__proto__ = r
                        } || function(t, r) {
                            for (var n in r) r.hasOwnProperty(n) && (t[n] = r[n])
                        })(t, r)
                }, function(t, r) {
                    function n() {
                        this.constructor = t
                    }
                    e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
                }),
                s = function(t) {
                    var r = "function" == typeof Symbol && t[Symbol.iterator],
                        n = 0;
                    return r ? r.call(t) : {
                        next: function() {
                            return t && n >= t.length && (t = void 0), {
                                value: t && t[n++],
                                done: !t
                            }
                        }
                    }
                },
                c = function(t) {
                    return t ? (new i.a).copy(t) : new i.a
                },
                f = function(t) {
                    function r(r) {
                        var n, e, o = t.call(this) || this;
                        if (o.name = "label", o.getLabel = function(t) {
                                return o.map.get(t)
                            }, o.map = Object(l.b)(), r) try {
                            for (var i = s(r), a = i.next(); !a.done; a = i.next()) {
                                var u = a.value;
                                o.map.set(u.sid, u)
                            }
                        } catch (t) {
                            n = {
                                error: t
                            }
                        } finally {
                            try {
                                a && !a.done && (e = i.return) && e.call(i)
                            } finally {
                                if (n) throw n.error
                            }
                        }
                        return o
                    }
                    return u(r, t), r.prototype.add = function(t) {
                        for (var r = t.sid; !r || this.map.has(r);) r = Object(a.l)(11);
                        t.sid = r, this.map.set(r, t)
                    }, r.prototype.remove = function(t) {
                        return !!this.map.has(t) && (this.map.delete(t), !0)
                    }, r.prototype.clear = function() {
                        var t, r;
                        try {
                            for (var n = s(this.map.keys), e = n.next(); !e.done; e = n.next()) {
                                var o = e.value;
                                this.map.delete(o)
                            }
                        } catch (r) {
                            t = {
                                error: r
                            }
                        } finally {
                            try {
                                e && !e.done && (r = n.return) && r.call(n)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                    }, r.prototype.getCollection = function() {
                        return this.map
                    }, r.prototype.iterate = function(t) {
                        var r, n;
                        try {
                            for (var e = s(this.map.keys), o = e.next(); !o.done; o = e.next()) {
                                var i = o.value;
                                t(this.map.get(i), i)
                            }
                        } catch (t) {
                            r = {
                                error: t
                            }
                        } finally {
                            try {
                                o && !o.done && (n = e.return) && n.call(e)
                            } finally {
                                if (r) throw r.error
                            }
                        }
                    }, r.prototype.isEqual = function(t) {
                        var n, e;
                        if (this.map.length !== t.map.length) return !1;
                        try {
                            for (var o = s(this.map), i = o.next(); !i.done; i = o.next()) {
                                var l = i.value,
                                    a = t.map.get(l.sid);
                                if (!a || !r.labelsAreEqual(l, a)) return !1
                            }
                        } catch (t) {
                            n = {
                                error: t
                            }
                        } finally {
                            try {
                                i && !i.done && (e = o.return) && e.call(o)
                            } finally {
                                if (n) throw n.error
                            }
                        }
                        return !0
                    }, r.labelsAreEqual = function(t, r) {
                        return t.floor === r.floor && t.position.x === r.position.x && t.position.y === r.position.y && t.position.z === r.position.z && t.sid === r.sid && t.text === r.text && t.visible === r.visible
                    }, r.prototype.copy = function(t) {
                        var r, n;
                        this.map = Object(l.b)();
                        try {
                            for (var e = s(t.map), o = e.next(); !o.done; o = e.next()) {
                                var i = o.value,
                                    a = c(i);
                                this.map.set(a.sid, a)
                            }
                        } catch (t) {
                            r = {
                                error: t
                            }
                        } finally {
                            try {
                                o && !o.done && (n = e.return) && n.call(e)
                            } finally {
                                if (r) throw r.error
                            }
                        }
                        return this
                    }, r.prototype.clone = function() {
                        return (new r).copy(this)
                    }, r
                }(o.a)
        },
        547: function(t, r, n) {
            "use strict";
            var e, o = n(25),
                i = n(37),
                l = n(1),
                a = n(95),
                u = n(241),
                s = function(t, r) {
                    var n, e, o, i, l = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function a(i) {
                        return function(a) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; l;) try {
                                    if (n = 1, e && (o = 2 & i[0] ? e.return : i[0] ? e.throw || ((o = e.return) && o.call(e), 0) : e.next) && !(o = o.call(e, i[1])).done) return o;
                                    switch (e = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            return l.label++, {
                                                value: i[1],
                                                done: !1
                                            };
                                        case 5:
                                            l.label++, e = i[1], i = [0];
                                            continue;
                                        case 7:
                                            i = l.ops.pop(), l.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = l.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                l = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                l.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && l.label < o[1]) {
                                                l.label = o[1], o = i;
                                                break
                                            }
                                            if (o && l.label < o[2]) {
                                                l.label = o[2], l.ops.push(i);
                                                break
                                            }
                                            o[2] && l.ops.pop(), l.trys.pop();
                                            continue
                                    }
                                    i = r.call(t, l)
                                } catch (t) {
                                    i = [6, t], e = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, a])
                        }
                    }
                },
                c = function(t) {
                    var r = "function" == typeof Symbol && t[Symbol.iterator],
                        n = 0;
                    return r ? r.call(t) : {
                        next: function() {
                            return t && n >= t.length && (t = void 0), {
                                value: t && t[n++],
                                done: !t
                            }
                        }
                    }
                },
                f = function() {
                    function t() {
                        this.list = []
                    }
                    return t.prototype.insort = function(t) {
                        var r = this.binarySearch(t),
                            n = r.index;
                        if (!r.success)
                            for (; this.compare(t, this.list[n]) >= 0 && n < this.list.length;) n++;
                        for (var e = this.list.length; e > n; e--) this.list[e] = this.list[e - 1];
                        this.list[n] = t
                    }, t.prototype.removeIndex = function(t) {
                        if (t > this.list.length) throw Error("OrderList.removeIndex() -> Invalid index: " + t);
                        this.list.splice(t, 1)
                    }, t.prototype.getElement = function(t) {
                        if (t >= 0 && t < this.list.length) return this.list[t];
                        throw new Error("OrderList.getElement() -> Invalid index: " + t)
                    }, Object.defineProperty(t.prototype, "length", {
                        get: function() {
                            return this.list.length
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype[Symbol.iterator] = function() {
                        var t, r, n, e, o;
                        return s(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    i.trys.push([0, 5, 6, 7]), n = c(this.list), e = n.next(), i.label = 1;
                                case 1:
                                    return e.done ? [3, 4] : [4, e.value];
                                case 2:
                                    i.sent(), i.label = 3;
                                case 3:
                                    return e = n.next(), [3, 1];
                                case 4:
                                    return [3, 7];
                                case 5:
                                    return o = i.sent(), t = {
                                        error: o
                                    }, [3, 7];
                                case 6:
                                    try {
                                        e && !e.done && (r = n.return) && r.call(n)
                                    } finally {
                                        if (t) throw t.error
                                    }
                                    return [7];
                                case 7:
                                    return [2]
                            }
                        }))
                    }, t.prototype.find = function(t) {
                        var r = this.binarySearch(t);
                        return r.success ? r.index : -1
                    }, t.prototype.compare = function(t, r) {
                        return void 0 === r ? 1 : "number" == typeof t ? t === r ? 0 : t < r ? -1 : 1 : t.compare(r)
                    }, t.prototype.binarySearch = function(t) {
                        for (var r = 0, n = this.list.length - 1, e = -1, o = null, i = 0; r <= n;) {
                            if (e = Math.floor((r + n) / 2), o = this.list[e], 0 === (i = this.compare(t, o))) return {
                                success: !0,
                                index: e
                            };
                            i < 0 ? n = e - 1 : r = e + 1
                        }
                        return {
                            success: !1,
                            index: e
                        }
                    }, t
                }(),
                p = n(63),
                h = n(23),
                y = n(40),
                d = (e = function(t, r) {
                    return (e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, r) {
                            t.__proto__ = r
                        } || function(t, r) {
                            for (var n in r) r.hasOwnProperty(n) && (t[n] = r[n])
                        })(t, r)
                }, function(t, r) {
                    function n() {
                        this.constructor = t
                    }
                    e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
                }),
                v = function(t) {
                    var r = "function" == typeof Symbol && t[Symbol.iterator],
                        n = 0;
                    return r ? r.call(t) : {
                        next: function() {
                            return t && n >= t.length && (t = void 0), {
                                value: t && t[n++],
                                done: !t
                            }
                        }
                    }
                },
                b = function(t) {
                    function r(r, n) {
                        var e = t.call(this) || this;
                        return e.floorIndex = r, e.colliderGroupName = "", e.mesh = null, e.sweepHeights = new f, e.medianSweepHeight = function() {
                            return e.sweepHeights.getElement(Math.floor(e.sweepHeights.length / 2))
                        }, e.size = new l.a, e.center = new l.a, e.allColliders = [], e.name = n || e.floorIndex + "", e.boundingBox = new i.a, e.sweeps = new u.a((function(t) {
                            return t.id
                        })), e
                    }
                    return d(r, t), r.prototype.setFloorMesh = function(t, r, n) {
                        var e, o;
                        this.mesh = t, this.colliderGroupName = n, this.allColliders.push.apply(this.allColliders, r);
                        try {
                            for (var i = v(t.roomMeshes), l = i.next(); !l.done; l = i.next()) {
                                l.value.renderOrder = a.a.ghostFloor
                            }
                        } catch (t) {
                            e = {
                                error: t
                            }
                        } finally {
                            try {
                                l && !l.done && (o = i.return) && o.call(i)
                            } finally {
                                if (e) throw e.error
                            }
                        }
                        this.boundingBox.copy(t.boundingBox), this.boundingBox.getSize(this.size), this.boundingBox.getCenter(this.center)
                    }, r.prototype.hasCollider = function(t) {
                        return -1 !== this.allColliders.indexOf(t)
                    }, r.prototype.distanceToPoint = function(t) {
                        return this.boundingBox.distanceToPoint(t)
                    }, r.prototype.containsPoint = function(t) {
                        return this.boundingBox.containsPoint(t)
                    }, r.prototype.addSweep = function(t) {
                        this.sweeps.add(t), this.sweepHeights.insort(t.position.y)
                    }, r.prototype.getSweepClosestToPoint = function(t) {
                        var r, n, e = null,
                            o = 0,
                            i = new l.a;
                        try {
                            for (var a = v(this.sweeps), u = a.next(); !u.done; u = a.next()) {
                                var s = u.value;
                                if (s.alignmentType !== p.a.UNALIGNED && s.enabled) {
                                    i.copy(s.position).sub(t);
                                    var c = i.length();
                                    (!e || c < o) && (e = s, o = c)
                                }
                            }
                        } catch (t) {
                            r = {
                                error: t
                            }
                        } finally {
                            try {
                                u && !u.done && (n = a.return) && n.call(a)
                            } finally {
                                if (r) throw r.error
                            }
                        }
                        return e
                    }, r.prototype.deepCopy = function() {
                        return Object(h.a)({
                            name: this.name,
                            center: this.center,
                            boundingBox: this.boundingBox,
                            size: this.size
                        })
                    }, r
                }(y.a),
                g = n(115),
                x = n(3);
            n.d(r, "c", (function() {
                return O
            })), n.d(r, "b", (function() {
                return P
            })), n.d(r, "a", (function() {
                return S
            }));
            var w = function() {
                    var t = function(r, n) {
                        return (t = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(t, r) {
                                t.__proto__ = r
                            } || function(t, r) {
                                for (var n in r) r.hasOwnProperty(n) && (t[n] = r[n])
                            })(r, n)
                    };
                    return function(r, n) {
                        function e() {
                            this.constructor = r
                        }
                        t(r, n), r.prototype = null === n ? Object.create(n) : (e.prototype = n.prototype, new e)
                    }
                }(),
                m = function(t) {
                    var r = "function" == typeof Symbol && t[Symbol.iterator],
                        n = 0;
                    return r ? r.call(t) : {
                        next: function() {
                            return t && n >= t.length && (t = void 0), {
                                value: t && t[n++],
                                done: !t
                            }
                        }
                    }
                },
                _ = new x.a("floor-data"),
                O = function(t) {
                    var r = Object(g.b)();
                    for (var n in t) {
                        var e = P(t[n].floorIndex, t[n].name);
                        r.set(n, e)
                    }
                    return new S(r)
                },
                P = function(t, r) {
                    return new b(t, r)
                },
                S = function(t) {
                    function r(r) {
                        var n, e, o = t.call(this) || this;
                        if (o.name = "floors", o.sweepFloorMap = {}, o.floors = Object(g.b)(), r) try {
                            for (var i = m(r), l = i.next(); !l.done; l = i.next()) {
                                var a = l.value;
                                o.floors.set(a.floorIndex, a)
                            }
                        } catch (t) {
                            n = {
                                error: t
                            }
                        } finally {
                            try {
                                l && !l.done && (e = i.return) && e.call(i)
                            } finally {
                                if (n) throw n.error
                            }
                        }
                        return o
                    }
                    return w(r, t), r.prototype.getFloor = function(t) {
                        if (this.floors.has(t)) return this.floors.get(t);
                        _.debug("Could not find floor based on index")
                    }, r.prototype.getFloorCount = function() {
                        return this.floors.length
                    }, r.prototype.clone = function() {
                        var t = (new r).copy(this);
                        return t.sweepFloorMap = this.sweepFloorMap, t
                    }, r.prototype.copy = function(t) {
                        var r, n;
                        this.floors = Object(g.b)();
                        try {
                            for (var e = m(t.floors.keys), o = e.next(); !o.done; o = e.next()) {
                                var i = o.value,
                                    l = t.floors.get(i);
                                this.floors.set(i, l)
                            }
                        } catch (t) {
                            r = {
                                error: t
                            }
                        } finally {
                            try {
                                o && !o.done && (n = e.return) && n.call(e)
                            } finally {
                                if (r) throw r.error
                            }
                        }
                        return this
                    }, r.prototype.getCollection = function() {
                        return this.floors
                    }, r.prototype.iterate = function(t) {
                        var r, n;
                        try {
                            for (var e = m(this.floors), o = e.next(); !o.done; o = e.next()) {
                                t(o.value)
                            }
                        } catch (t) {
                            r = {
                                error: t
                            }
                        } finally {
                            try {
                                o && !o.done && (n = e.return) && n.call(e)
                            } finally {
                                if (r) throw r.error
                            }
                        }
                    }, r.prototype.getTopFloor = function() {
                        var t, r, n = null;
                        try {
                            for (var e = m(this.floors), o = e.next(); !o.done; o = e.next()) {
                                var i = o.value;
                                (!n || i.floorIndex > n) && (n = i.floorIndex)
                            }
                        } catch (r) {
                            t = {
                                error: r
                            }
                        } finally {
                            try {
                                o && !o.done && (r = e.return) && r.call(e)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                        return null !== n ? this.floors.get(n) : null
                    }, r.prototype.getFloorAtPoint = function(t) {
                        var r, n, e = null,
                            o = 1 / 0;
                        try {
                            for (var i = m(this.floors), l = i.next(); !l.done; l = i.next()) {
                                var a = l.value,
                                    u = a.distanceToPoint(t);
                                (!e || o > u) && (o = u, e = a)
                            }
                        } catch (t) {
                            r = {
                                error: t
                            }
                        } finally {
                            try {
                                l && !l.done && (n = i.return) && n.call(i)
                            } finally {
                                if (r) throw r.error
                            }
                        }
                        return e
                    }, r.prototype.getFloorContainingPoint = function(t, r) {
                        var n, e;
                        void 0 === r && (r = !1);
                        var o = r ? this.floors.keys.reverse() : this.floors.keys;
                        try {
                            for (var i = m(o), l = i.next(); !l.done; l = i.next()) {
                                var a = l.value,
                                    u = this.floors.get(a);
                                if (u.boundingBox.containsPoint(t)) return u
                            }
                        } catch (t) {
                            n = {
                                error: t
                            }
                        } finally {
                            try {
                                l && !l.done && (e = i.return) && e.call(i)
                            } finally {
                                if (n) throw n.error
                            }
                        }
                        return null
                    }, r.prototype.getFloorAtHeight = function(t, r) {
                        var n, e;
                        void 0 === r && (r = !1);
                        var o = r ? this.floors.keys.reverse() : this.floors.keys;
                        try {
                            for (var i = m(o), l = i.next(); !l.done; l = i.next()) {
                                var a = l.value,
                                    u = this.floors.get(a),
                                    s = u.boundingBox;
                                if (s.min.y <= t && t <= s.max.y) return u
                            }
                        } catch (t) {
                            n = {
                                error: t
                            }
                        } finally {
                            try {
                                l && !l.done && (e = i.return) && e.call(i)
                            } finally {
                                if (n) throw n.error
                            }
                        }
                        if (t < this.floors.get(0).boundingBox.min.y) return this.floors.get(0);
                        var c = this.getTopFloor();
                        if (c) return c;
                        throw Error("getFloorAtHeight - couldn't find a valid floor")
                    }, r.prototype.getClosestFloorAtHeight = function(t) {
                        var r, n, e = null,
                            o = 1 / 0;
                        try {
                            for (var i = m(this.floors), l = i.next(); !l.done; l = i.next()) {
                                var a = l.value,
                                    u = Math.abs(a.center.y - t);
                                (!e || o > u) && (o = u, e = a)
                            }
                        } catch (t) {
                            r = {
                                error: t
                            }
                        } finally {
                            try {
                                l && !l.done && (n = i.return) && n.call(i)
                            } finally {
                                if (r) throw r.error
                            }
                        }
                        return e
                    }, r.prototype.nextFloor = function(t, r) {
                        return this.floors.get(t.floorIndex + r) || null
                    }, r.prototype.size = function() {
                        return this.getFloorCount()
                    }, r.prototype.getFloorByCollider = function(t) {
                        var r, n;
                        try {
                            for (var e = m(this.floors), o = e.next(); !o.done; o = e.next()) {
                                var i = o.value;
                                if (i.hasCollider(t)) return i
                            }
                        } catch (t) {
                            r = {
                                error: t
                            }
                        } finally {
                            try {
                                o && !o.done && (n = e.return) && n.call(e)
                            } finally {
                                if (r) throw r.error
                            }
                        }
                        return null
                    }, r.prototype.rename = function(t, r) {
                        if (this.floors.has(t)) {
                            var n = this.floors.get(t);
                            n.name = r, n.commit()
                        }
                    }, r
                }(o.a)
        }
    }
]);