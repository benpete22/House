(window.webpackJsonp = window.webpackJsonp || []).push([
    [18], {
        1035: function(t, n, e) {
            "use strict";
            e.r(n);
            var o, i = e(2),
                r = e(31),
                a = e(153),
                u = e(91),
                s = e(152),
                c = e(61),
                l = e(102),
                h = e(113),
                d = e(20),
                f = e(60),
                p = e(13),
                m = e(53),
                y = e(14),
                b = .1,
                v = .7,
                w = 2,
                g = 3,
                T = 1.1,
                D = e(646),
                O = e(3),
                z = e(325),
                _ = e(67),
                M = (o = function(t, n) {
                    return (o = Object.setPrototypeOf || {
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
                    o(t, n), t.prototype = null === n ? Object.create(n) : (e.prototype = n.prototype, new e)
                }),
                Z = function(t, n, e, o) {
                    return new(e || (e = Promise))((function(i, r) {
                        function a(t) {
                            try {
                                s(o.next(t))
                            } catch (t) {
                                r(t)
                            }
                        }

                        function u(t) {
                            try {
                                s(o.throw(t))
                            } catch (t) {
                                r(t)
                            }
                        }

                        function s(t) {
                            t.done ? i(t.value) : new e((function(n) {
                                n(t.value)
                            })).then(a, u)
                        }
                        s((o = o.apply(t, n || [])).next())
                    }))
                },
                B = function(t, n) {
                    var e, o, i, r, a = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return r = {
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                        return this
                    }), r;

                    function u(r) {
                        return function(u) {
                            return function(r) {
                                if (e) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (e = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
                                    switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                                        case 0:
                                        case 1:
                                            i = r;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: r[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++, o = r[1], r = [0];
                                            continue;
                                        case 7:
                                            r = a.ops.pop(), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                                a.label = r[1];
                                                break
                                            }
                                            if (6 === r[0] && a.label < i[1]) {
                                                a.label = i[1], i = r;
                                                break
                                            }
                                            if (i && a.label < i[2]) {
                                                a.label = i[2], a.ops.push(r);
                                                break
                                            }
                                            i[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    r = n.call(t, a)
                                } catch (t) {
                                    r = [6, t], o = 0
                                } finally {
                                    e = i = 0
                                }
                                if (5 & r[0]) throw r[1];
                                return {
                                    value: r[0] ? r[1] : void 0,
                                    done: !0
                                }
                            }([r, u])
                        }
                    }
                },
                k = new O.a("Showcase Zoom Controls"),
                S = function(t) {
                    function n() {
                        var n = null !== t && t.apply(this, arguments) || this;
                        return n.name = "zoom-controls", n.uhQuality = {}, n.config = {
                            enabled: !0,
                            tiles: !0
                        }, n
                    }
                    return M(n, t), n.prototype.init = function(t, n) {
                        return Z(this, void 0, void 0, (function() {
                            var e, o, r = this;
                            return B(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (this.config.enabled = t.enabled, this.config.tiles = t.tiles, !this.config.enabled || !this.config.tiles) return [3, 5];
                                        a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), e = this, [4, n.getModule(i.xb)];
                                    case 2:
                                        return e.sweepTilingModule = a.sent(), this.enableZooming(n), [3, 4];
                                    case 3:
                                        return o = a.sent(), k.debug("Tiling not enabled for zoom controls - " + o), [3, 4];
                                    case 4:
                                        return [3, 6];
                                    case 5:
                                        this.config.enabled && this.enableZooming(n), a.label = 6;
                                    case 6:
                                        return this.bindings.push(n.commandBinder.addBinding(D.b, (function() {
                                            return Z(r, void 0, void 0, (function() {
                                                return B(this, (function(t) {
                                                    return [2, this.zoomBy(b)]
                                                }))
                                            }))
                                        })), n.commandBinder.addBinding(D.c, (function() {
                                            return Z(r, void 0, void 0, (function() {
                                                return B(this, (function(t) {
                                                    return [2, this.zoomBy(-b)]
                                                }))
                                            }))
                                        })), n.commandBinder.addBinding(D.d, (function() {
                                            return Z(r, void 0, void 0, (function() {
                                                return B(this, (function(t) {
                                                    return [2, this.zoomTo(1)]
                                                }))
                                            }))
                                        })), n.commandBinder.addBinding(D.e, (function(t) {
                                            return Z(r, void 0, void 0, (function() {
                                                return B(this, (function(n) {
                                                    return [2, this.zoomTo(t.value)]
                                                }))
                                            }))
                                        })), n.commandBinder.addBinding(D.a, this.getMaxZoomAvailable.bind(this))), [2]
                                }
                            }))
                        }))
                    }, n.prototype.enableZooming = function(t) {
                        return Z(this, void 0, void 0, (function() {
                            var n, e, o, u, s = this;
                            return B(this, (function(l) {
                                switch (l.label) {
                                    case 0:
                                        return this.config.enabled ? (this.engine = t, n = this, [4, t.getModule(i.c)]) : [2];
                                    case 1:
                                        return n.cameraModule = l.sent(), e = this, [4, t.market.waitForData(c.a)];
                                    case 2:
                                        return e.cameraData = l.sent(), o = this, [4, t.market.waitForData(h.a)];
                                    case 3:
                                        return o.viewmodeData = l.sent(), u = this, [4, t.market.waitForData(f.a)];
                                    case 4:
                                        return u.sweepData = l.sent(), t.getModule(i.x).then((function(t) {
                                            s.bindings.push(t.registerHandler(r.q, (function(t) {
                                                return s.zoomBy(s.scrollToZoomDelta(t))
                                            }))), s.bindings.push(t.registerHandler(r.l, (function(t) {
                                                return s.zoomBy(s.pinchToZoomDelta(t))
                                            }))), s.bindings.push(t.registerHandler(a.a, (function(t) {
                                                return s.keyHandler(t)
                                            })))
                                        })), [2]
                                }
                            }))
                        }))
                    }, n.prototype.zoomTo = function(t) {
                        var n = this.cameraData.zoom();
                        if (!this.validateViewmode() || !this.config.enabled) return n;
                        this.engine.broadcast(new z.a(t));
                        var e = this.sweepData.currentSweep;
                        if (this.config.tiles && this.checkTilingZoomLevels(t, e), (t = Object(y.e)(t, v, this.getMaxZoom(e))) !== n) {
                            var o = p.a.radToDeg(this.cameraData.baseFovY / t),
                                i = l.a.near,
                                r = l.a.far;
                            this.cameraModule.updateCameraProjection((new m.a).makePerspectiveFov(o, this.cameraData.aspect(), i, r))
                        }
                        return t
                    }, n.prototype.checkTilingZoomLevels = function(t, n) {
                        var e = this;
                        t >= T && this.zoomedSweep !== n ? (this.zoomedSweep = n, this.sweepTilingModule.enableZooming(!0, n).then((function(t) {
                            t ? e.uhQuality[n] = !0 : (e.uhQuality[n] = !1, e.zoomedSweep = void 0)
                        }))) : t < T && this.zoomedSweep === n && (this.sweepTilingModule.enableZooming(!1, this.zoomedSweep), this.zoomedSweep = void 0)
                    }, n.prototype.getMaxZoom = function(t) {
                        return this.uhQuality[t] ? g : w
                    }, n.prototype.zoomBy = function(t) {
                        var n = this.cameraData.zoom();
                        return this.validateViewmode() && this.config.enabled ? this.zoomTo(n + t) : n
                    }, n.prototype.validateViewmode = function() {
                        return this.viewmodeData.currentMode === d.a.Panorama && this.cameraData.canTransition()
                    }, n.prototype.scrollToZoomDelta = function(t) {
                        return -Math.sign(t.delta.y) * b
                    }, n.prototype.pinchToZoomDelta = function(t) {
                        return t.pinchDelta * (w - v)
                    }, n.prototype.keyHandler = function(t) {
                        if (t.state === s.a.DOWN) switch (t.key) {
                            case u.a.PLUSEQUALS:
                                this.zoomBy(b);
                                break;
                            case u.a.DASHUNDERSCORE:
                                this.zoomBy(-b);
                                break;
                            case u.a.OPENBRACKET:
                                this.zoomTo(1)
                        }
                    }, n.prototype.getMaxZoomAvailable = function() {
                        return Z(this, void 0, Promise, (function() {
                            var t;
                            return B(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return t = this.sweepData.currentSweep, [4, this.sweepTilingModule.availableResolution(t, _.d.ULTRAHIGH)];
                                    case 1:
                                        return [2, n.sent() >= _.d.ULTRAHIGH ? g : w]
                                }
                            }))
                        }))
                    }, n
                }(i.Qb);
            n.default = S
        },
        646: function(t, n, e) {
            "use strict";
            e.d(n, "b", (function() {
                return a
            })), e.d(n, "c", (function() {
                return u
            })), e.d(n, "d", (function() {
                return s
            })), e.d(n, "a", (function() {
                return c
            })), e.d(n, "e", (function() {
                return l
            }));
            var o, i = e(21),
                r = (o = function(t, n) {
                    return (o = Object.setPrototypeOf || {
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
                    o(t, n), t.prototype = null === n ? Object.create(n) : (e.prototype = n.prototype, new e)
                }),
                a = function(t) {
                    function n() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return r(n, t), n.id = "ZOOM_IN", n
                }(i.a),
                u = function(t) {
                    function n() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return r(n, t), n.id = "ZOOM_OUT", n
                }(i.a),
                s = function(t) {
                    function n() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return r(n, t), n.id = "ZOOM_RESET", n
                }(i.a),
                c = function(t) {
                    function n() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return r(n, t), n.id = "ZOOM_MAX_VALUE", n
                }(i.a),
                l = function(t) {
                    function n(n) {
                        var e = t.call(this) || this;
                        return e.payload = {
                            value: n
                        }, e
                    }
                    return r(n, t), n.id = "ZOOM_SET", n
                }(i.a)
        }
    }
]);