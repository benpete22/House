(window.webpackJsonp = window.webpackJsonp || []).push([
    [2], {
        538: function(t, r, e) {
            "use strict";
            var n = e(25),
                o = e(267),
                i = e(115),
                a = e(27),
                u = e(550),
                s = e(220),
                f = e(3),
                c = function(t) {
                    var r = "function" == typeof Symbol && t[Symbol.iterator],
                        e = 0;
                    return r ? r.call(t) : {
                        next: function() {
                            return t && e >= t.length && (t = void 0), {
                                value: t && t[e++],
                                done: !t
                            }
                        }
                    }
                },
                h = new f.a("measure->group"),
                l = function(t, r, e, n) {
                    if (e) {
                        var o = {
                            floor: t.floor,
                            room: t.room,
                            text: t.text,
                            type: t.type,
                            sid: t.sid,
                            visible: t.visible
                        };
                        r.startGroup(o), r.push(t.start_position), n.groupCount++
                    }
                    var i = r.groupCount - 1;
                    r.push(t.end_position), n.idToGroup[t.sid] = i, n.groupToIds[i] || (n.groupToIds[i] = []), n.groupToIds[i].push(t.sid)
                },
                p = e(84);
            e.d(r, "d", (function() {
                return v
            })), e.d(r, "c", (function() {
                return w
            })), e.d(r, "b", (function() {
                return b
            })), e.d(r, "a", (function() {
                return m
            }));
            var d, y = (d = function(t, r) {
                    return (d = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, r) {
                            t.__proto__ = r
                        } || function(t, r) {
                            for (var e in r) r.hasOwnProperty(e) && (t[e] = r[e])
                        })(t, r)
                }, function(t, r) {
                    function e() {
                        this.constructor = t
                    }
                    d(t, r), t.prototype = null === r ? Object.create(r) : (e.prototype = r.prototype, new e)
                }),
                g = function(t) {
                    var r = "function" == typeof Symbol && t[Symbol.iterator],
                        e = 0;
                    return r ? r.call(t) : {
                        next: function() {
                            return t && e >= t.length && (t = void 0), {
                                value: t && t[e++],
                                done: !t
                            }
                        }
                    }
                },
                v = function() {
                    var t = Object(p.b)([]);
                    return new s.Grouper(t)
                },
                w = function(t, r) {
                    var e, n;
                    if (r) try {
                        for (var o = g(r), a = o.next(); !a.done; a = o.next()) {
                            (0, a.value)(t)
                        }
                    } catch (t) {
                        e = {
                            error: t
                        }
                    } finally {
                        try {
                            a && !a.done && (n = o.return) && n.call(o)
                        } finally {
                            if (e) throw e.error
                        }
                    }
                    var u = Object(i.b)();
                    for (var s in t) {
                        var f = b(t[s]);
                        u.set(s, f)
                    }
                    return new m(u)
                },
                b = function(t) {
                    return t ? (new o.a).copy(t) : new o.a
                },
                m = function(t) {
                    function r(r) {
                        var e, n, o = t.call(this) || this;
                        if (o.name = "measure", o.map = Object(i.b)(), o.measurePointGroups = {
                                pointGroups: v(),
                                lookup: {
                                    idToGroup: {},
                                    groupToIds: {},
                                    groupCount: 0
                                }
                            }, r) {
                            try {
                                for (var a = g(r), u = a.next(); !u.done; u = a.next()) {
                                    var s = u.value;
                                    o.map.set(s.sid, s)
                                }
                            } catch (t) {
                                e = {
                                    error: t
                                }
                            } finally {
                                try {
                                    u && !u.done && (n = a.return) && n.call(a)
                                } finally {
                                    if (e) throw e.error
                                }
                            }
                            o.rebuildGroups()
                        }
                        return o
                    }
                    return y(r, t), r.prototype.rebuildGroups = function() {
                        ! function(t, r) {
                            var e, n;
                            if (r ? (r.pointGroups.reset(), r.lookup.idToGroup = {}, r.lookup.groupToIds = {}, r.lookup.groupCount = 0) : r = {
                                    pointGroups: v(),
                                    lookup: {
                                        idToGroup: {},
                                        groupToIds: {},
                                        groupCount: 0
                                    }
                                }, t.length > 0) {
                                t.sort((function(t, r) {
                                    return 100 * (t.group + 1) + t.groupOrder - (100 * (r.group + 1) + r.groupOrder)
                                }));
                                try {
                                    for (var o = c(t), i = o.next(); !i.done; i = o.next()) {
                                        var a = i.value,
                                            u = 0 === r.pointGroups.groupCount || a.group >= r.pointGroups.groupCount;
                                        l(a, r.pointGroups, u, r.lookup)
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
                                f.a.level >= 4 && (h.verbose("sorce", t.slice().map((function(t) {
                                    return t.sid + "," + t.group + "," + t.groupOrder
                                }))), h.verbose(r.pointGroups.toString()))
                            }
                        }(this.map.values, this.measurePointGroups)
                    }, Object.defineProperty(r.prototype, "grouper", {
                        get: function() {
                            return this.measurePointGroups
                        },
                        enumerable: !0,
                        configurable: !0
                    }), r.prototype.get = function(t) {
                        return this.map.get(t)
                    }, r.prototype.add = function(t) {
                        return t.sid = this.validateSid(t.sid), this.map.set(t.sid, t), t
                    }, r.prototype.validateSid = function(t) {
                        for (var r = t; !r || this.map.has(r);) r = Object(a.l)(11);
                        return r
                    }, r.prototype.removeGroup = function(t) {
                        var r = this;
                        return this.map.has(t) && this.map.atomic((function() {
                            var e = r.grouper.lookup.groupToIds[r.grouper.lookup.idToGroup[t]];
                            return e && e.forEach((function(t) {
                                return r.remove(t)
                            })), !0
                        })), !1
                    }, r.prototype.remove = function(t) {
                        return !!this.map.has(t) && this.map.delete(t)
                    }, r.prototype.clear = function() {
                        var t = this;
                        this.map.atomic((function() {
                            var r, e;
                            try {
                                for (var n = g(t.map.keys), o = n.next(); !o.done; o = n.next()) {
                                    var i = o.value;
                                    t.map.delete(i)
                                }
                            } catch (t) {
                                r = {
                                    error: t
                                }
                            } finally {
                                try {
                                    o && !o.done && (e = n.return) && e.call(n)
                                } finally {
                                    if (r) throw r.error
                                }
                            }
                        }))
                    }, Object.defineProperty(r.prototype, "length", {
                        get: function() {
                            return this.map.length
                        },
                        enumerable: !0,
                        configurable: !0
                    }), r.prototype.getCollection = function() {
                        return this.map
                    }, r.prototype.setVisibility = function(t) {
                        if (this.map.has(t)) {
                            var r = this.map.get(t);
                            return r.visible = !r.visible, !0
                        }
                        return !1
                    }, r.prototype.rename = function(t, r) {
                        return !!this.map.has(t) && (this.map.get(t).text = r, !0)
                    }, r.prototype.iterate = function(t) {
                        var r, e;
                        try {
                            for (var n = g(this.map.keys), o = n.next(); !o.done; o = n.next()) {
                                var i = o.value;
                                t(this.map.get(i), i)
                            }
                        } catch (t) {
                            r = {
                                error: t
                            }
                        } finally {
                            try {
                                o && !o.done && (e = n.return) && e.call(n)
                            } finally {
                                if (r) throw r.error
                            }
                        }
                    }, r.prototype.iterateGroups = function(t) {
                        var r, e;
                        try {
                            for (var n = g(this.measurePointGroups.pointGroups.groups()), o = n.next(); !o.done; o = n.next()) {
                                t(o.value)
                            }
                        } catch (t) {
                            r = {
                                error: t
                            }
                        } finally {
                            try {
                                o && !o.done && (e = n.return) && e.call(n)
                            } finally {
                                if (r) throw r.error
                            }
                        }
                    }, r.prototype.isEqual = function(t) {
                        var r, e;
                        if (this.map.length !== t.map.length) return !1;
                        try {
                            for (var n = g(this.map), o = n.next(); !o.done; o = n.next()) {
                                var i = o.value,
                                    a = t.map.get(i.sid);
                                if (!a || !this.measurementsAreEqual(i, a)) return !1
                            }
                        } catch (t) {
                            r = {
                                error: t
                            }
                        } finally {
                            try {
                                o && !o.done && (e = n.return) && e.call(n)
                            } finally {
                                if (r) throw r.error
                            }
                        }
                        return !0
                    }, r.prototype.measurementsAreEqual = function(t, r, e) {
                        void 0 === e && (e = !1);
                        var n = Object(u.a)(t.end_normal, r.end_normal),
                            o = Object(u.a)(t.start_normal, r.start_normal),
                            i = Object(u.a)(t.start_position, r.start_position),
                            a = Object(u.a)(t.end_position, r.end_position);
                        if (e) {
                            if (t.created.toUTCString() !== r.created.toUTCString()) return !1;
                            if (t.modified.toUTCString() !== r.modified.toUTCString()) return !1
                        }
                        return t.type === r.type && n && o && i && a && t.sid === r.sid && t.text === r.text && t.visible === r.visible && t.floor === r.floor && t.room === r.room && t.group === r.group && t.groupOrder === r.groupOrder
                    }, r.prototype.copy = function(t) {
                        var r, e;
                        this.clear();
                        try {
                            for (var n = g(t.map), o = n.next(); !o.done; o = n.next()) {
                                var i = o.value,
                                    a = b(i);
                                this.map.set(a.sid, a)
                            }
                        } catch (t) {
                            r = {
                                error: t
                            }
                        } finally {
                            try {
                                o && !o.done && (e = n.return) && e.call(n)
                            } finally {
                                if (r) throw r.error
                            }
                        }
                        return this.rebuildGroups(), this
                    }, r.prototype.clone = function() {
                        return (new r).copy(this)
                    }, r
                }(n.a)
        },
        545: function(t, r, e) {
            "use strict";
            e.d(r, "a", (function() {
                return u
            })), e.d(r, "c", (function() {
                return s
            })), e.d(r, "b", (function() {
                return f
            }));
            var n, o = e(21),
                i = (n = function(t, r) {
                    return (n = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, r) {
                            t.__proto__ = r
                        } || function(t, r) {
                            for (var e in r) r.hasOwnProperty(e) && (t[e] = r[e])
                        })(t, r)
                }, function(t, r) {
                    function e() {
                        this.constructor = t
                    }
                    n(t, r), t.prototype = null === r ? Object.create(r) : (e.prototype = r.prototype, new e)
                }),
                a = function() {
                    return (a = Object.assign || function(t) {
                        for (var r, e = 1, n = arguments.length; e < n; e++)
                            for (var o in r = arguments[e]) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
                        return t
                    }).apply(this, arguments)
                },
                u = function(t) {
                    function r(r, e, n) {
                        var o = t.call(this) || this;
                        return o.id = "ADD_MATTERTAG", o.payload = a({}, r, e, n), o
                    }
                    return i(r, t), r
                }(o.a),
                s = function(t) {
                    function r(r) {
                        var e = t.call(this) || this;
                        return e.id = "DELETE_MATTERTAG", e.payload = {
                            sid: r
                        }, e
                    }
                    return i(r, t), r
                }(o.a),
                f = function(t) {
                    function r(r, e, n, o) {
                        var i = t.call(this) || this;
                        return i.payload = {
                            sid: r,
                            options: a({}, e, n, o)
                        }, i
                    }
                    return i(r, t), r
                }(o.a)
        },
        549: function(t, r, e) {
            "use strict";
            var n, o, i = e(172),
                a = e(41),
                u = e(3),
                s = e(67),
                f = e(27),
                c = function(t) {
                    var r = "function" == typeof Symbol && t[Symbol.iterator],
                        e = 0;
                    return r ? r.call(t) : {
                        next: function() {
                            return t && e >= t.length && (t = void 0), {
                                value: t && t[e++],
                                done: !t
                            }
                        }
                    }
                },
                h = new u.a("api"),
                l = ((n = {})[s.d.BASE] = "low", n[s.d.STANDARD] = "high", n[s.d.HIGH] = "2k", n[s.d.ULTRAHIGH] = "4k", n),
                p = ((o = {})[s.d.BASE] = 256, o[s.d.STANDARD] = 1024, o[s.d.HIGH] = 2048, o[s.d.ULTRAHIGH] = 4096, o),
                d = function() {
                    function t(t) {
                        this.urls = t, this.sweepCubeTextures = {}
                    }
                    return t.prototype.useTexture = function(t) {
                        var r = this.getTexture(t);
                        if (!r) throw Error("Texture for sweep " + t + " not loaded before using");
                        return r
                    }, t.prototype.loadFace = function(t, r, e, n) {
                        return this.loadFaceImage(t, r, e, n).then((function(t) {
                            var r = new a.a(t);
                            return r.needsUpdate = !0, r
                        }))
                    }, t.prototype.load = function(t, r) {
                        var e = this;
                        void 0 === r && (r = s.d.STANDARD);
                        var n = this.sweepCubeTextures[t];
                        if (n) return h.debug("Skipping load of pano, already loaded"), new Promise((function(t, r) {
                            t(n)
                        }));
                        var o = [2, 4, 0, 5, 1, 3].map((function(n) {
                                return e.loadFaceImage(t, r, n)
                            })),
                            a = Promise.all(o).then((function(r) {
                                var n = new i.a(r);
                                return n.flipY = !1, n.needsUpdate = !0, e.sweepCubeTextures[t] = n, n
                            }));
                        return a.catch((function() {
                            h.error("Downloading cubemap for pano", t, "failed")
                        })), a
                    }, t.prototype.unload = function(t) {
                        var r = this.sweepCubeTextures[t];
                        if (!r) throw Error("Texture for sweep " + t + " not loaded before unloading");
                        r.dispose(), this.sweepCubeTextures[t] = null
                    }, t.prototype.unloadAll = function(t) {
                        var r, e, n = Object(f.b)(t);
                        try {
                            for (var o = c(Object.keys(this.sweepCubeTextures)), i = o.next(); !i.done; i = o.next()) {
                                var a = i.value;
                                this.sweepCubeTextures[a] && !n[a] && this.unload(a)
                            }
                        } catch (t) {
                            r = {
                                error: t
                            }
                        } finally {
                            try {
                                i && !i.done && (e = o.return) && e.call(o)
                            } finally {
                                if (r) throw r.error
                            }
                        }
                    }, t.prototype.loadFaceImage = function(t, r, e, n) {
                        var o = l[r],
                            i = p[r],
                            a = "pan/" + o + "/" + t + "_skybox" + e + ".jpg";
                        return this.urls.getImageBitmap(a, i, i, n)
                    }, t.prototype.getTexture = function(t) {
                        return this.sweepCubeTextures[t]
                    }, t
                }();
            r.a = d
        },
        550: function(t, r, e) {
            "use strict";
            e.d(r, "b", (function() {
                return n
            })), e.d(r, "a", (function() {
                return o
            }));
            e(5), e(1);
            var n = function(t, r, e) {
                    void 0 === e && (e = 0);
                    var n = [0, 0, 0, e];
                    return r.toArray(n), t.fromArray(n), t
                },
                o = function(t, r) {
                    return t.x === r.x && t.y === r.y && t.z === r.z
                }
        },
        563: function(t, r, e) {
            "use strict";
            e.d(r, "a", (function() {
                return h
            }));
            var n, o = e(29),
                i = e(1),
                a = e(13),
                u = e(18),
                s = e(257),
                f = e(99),
                c = (n = function(t, r) {
                    return (n = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, r) {
                            t.__proto__ = r
                        } || function(t, r) {
                            for (var e in r) r.hasOwnProperty(e) && (t[e] = r[e])
                        })(t, r)
                }, function(t, r) {
                    function e() {
                        this.constructor = t
                    }
                    n(t, r), t.prototype = null === r ? Object.create(r) : (e.prototype = r.prototype, new e)
                }),
                h = function(t) {
                    function r(r, e, n, o) {
                        var a = t.call(this, e, n) || this;
                        return a.discScale = 1, a.defaultColor = new u.a, a.hoverColor = new u.a, a.hsl = {
                            h: 0,
                            s: 0,
                            l: 0
                        }, a.userData.sid = r, a.discWorldPosition = new i.a, a.cameraPosition = new i.a, a.changeColor(n.uniforms.color.value), a.layers.mask = o.mask, a.scale.set(.01, .01, .01), a
                    }
                    return c(r, t), r.prototype.dispose = function() {
                        this.material.dispose(), this.geometry.dispose()
                    }, r.prototype.changeColor = function(t) {
                        this.defaultColor.set(t), this.defaultColor.getHSL(this.hsl), this.hoverColor.setHSL(this.hsl.h, this.hsl.s, .8 * this.hsl.l)
                    }, r.prototype.changeMaterial = function(t) {
                        this.material = t
                    }, r.prototype.update = function(t, r, e, n) {
                        var o = t.isActive ? this.hoverColor : this.defaultColor;
                        this.material.uniforms.color.value.copy(o);
                        var u = s.b.mattertags.disc.scale;
                        this.getWorldPosition(this.discWorldPosition);
                        var c = r.getWorldPosition(this.cameraPosition).distanceTo(this.discWorldPosition);
                        this.quaternion.copy(r.quaternion);
                        var h = u.maxSize - (u.maxSize - u.minSize) * a.a.smoothstep(c, u.nearBound, u.farBound),
                            l = this.discWorldPosition.clone().project(r),
                            p = new i.a(n.width / 2, n.height / 2, 1).multiply(l),
                            d = new i.a(h / 2, 0, 0).add(p),
                            y = new i.a(2 / n.width, 2 / n.height, 1).multiply(d).clone().unproject(r).clone().distanceTo(this.discWorldPosition),
                            g = 1 + s.b.mattertags.disc.scale.responsiveness / 100 * (e - 1);
                        this.discScale = y * g;
                        var v = a.a.clamp(this.discScale, f.a.epsilon, this.discScale);
                        this.scale.set(v, v, v)
                    }, r
                }(o.a)
        },
        565: function(t, r, e) {
            "use strict";
            e.d(r, "c", (function() {
                return n
            })), e.d(r, "b", (function() {
                return o
            })), e.d(r, "a", (function() {
                return i
            })), e.d(r, "d", (function() {
                return u
            })), e.d(r, "f", (function() {
                return s
            })), e.d(r, "e", (function() {
                return f
            }));
            var n, o, i, a = e(15);
            ! function(t) {
                t.WEBVR = "application.webvr", t.SHOWCASE = "application.showcase", t.WORKSHOP = "application.workshop"
            }(n || (n = {})),
            function(t) {
                t.UNINITIALIZED = "appphase.uninitialized", t.WAITING = "appphase.waiting", t.LOADING = "appphase.loading", t.STARTING = "appphase.starting", t.PLAYING = "appphase.playing", t.ERROR = "appphase.error"
            }(o || (o = {})),
            function(t) {
                t.PHASE_CHANGE = "application.phasechange", t.APP_CHANGE = "application.appchange"
            }(i || (i = {}));
            var u = function(t) {
                    switch (t) {
                        case n.WEBVR:
                            return a.b.WEBVR;
                        case n.SHOWCASE:
                            return a.b.SHOWCASE;
                        case n.WORKSHOP:
                            return a.b.WORKSHOP;
                        default:
                            return
                    }
                },
                s = function(t) {
                    switch (t) {
                        case a.b.WEBVR:
                            return n.WEBVR;
                        case a.b.SHOWCASE:
                            return n.SHOWCASE;
                        case a.b.WORKSHOP:
                            return n.WORKSHOP;
                        default:
                            return
                    }
                },
                f = function(t) {
                    var r = a.a[t];
                    if (r in o) return o[r]
                }
        },
        603: function(t, r, e) {
            "use strict";
            e.d(r, "d", (function() {
                return a
            })), e.d(r, "b", (function() {
                return u
            })), e.d(r, "e", (function() {
                return s
            })), e.d(r, "c", (function() {
                return f
            })), e.d(r, "a", (function() {
                return c
            }));
            var n, o = e(21),
                i = (n = function(t, r) {
                    return (n = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, r) {
                            t.__proto__ = r
                        } || function(t, r) {
                            for (var e in r) r.hasOwnProperty(e) && (t[e] = r[e])
                        })(t, r)
                }, function(t, r) {
                    function e() {
                        this.constructor = t
                    }
                    n(t, r), t.prototype = null === r ? Object.create(r) : (e.prototype = r.prototype, new e)
                }),
                a = function(t) {
                    function r() {
                        var r = null !== t && t.apply(this, arguments) || this;
                        return r.id = "RequestRenderTargetCommand", r
                    }
                    return i(r, t), r
                }(o.a),
                u = function(t) {
                    function r(r, e) {
                        var n = t.call(this) || this;
                        return n.payload = {
                            renderTarget: r,
                            context: e
                        }, n
                    }
                    return i(r, t), r
                }(o.a),
                s = function(t) {
                    function r(r, e, n) {
                        var o = t.call(this) || this;
                        return o.payload = {
                            renderTarget: r,
                            sceneObject: e,
                            camera: n
                        }, o
                    }
                    return i(r, t), r
                }(o.a),
                f = function(t) {
                    function r(r, e, n) {
                        void 0 === n && (n = 0);
                        var o = t.call(this) || this;
                        return o.payload = {
                            renderTarget: r,
                            texture: e,
                            heading: n
                        }, o
                    }
                    return i(r, t), r
                }(o.a),
                c = function(t) {
                    function r(r, e) {
                        var n = t.call(this) || this;
                        return n.payload = {
                            target1: r,
                            target2: e
                        }, n
                    }
                    return i(r, t), r
                }(o.a)
        },
        605: function(t, r, e) {
            "use strict";
            e.d(r, "a", (function() {
                return n
            }));
            var n = "TransitionType"
        },
        714: function(t, r, e) {
            "use strict";
            var n = e(27),
                o = function(t, r, e, n) {
                    return new(e || (e = Promise))((function(o, i) {
                        function a(t) {
                            try {
                                s(n.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function u(t) {
                            try {
                                s(n.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function s(t) {
                            t.done ? o(t.value) : new e((function(r) {
                                r(t.value)
                            })).then(a, u)
                        }
                        s((n = n.apply(t, r || [])).next())
                    }))
                },
                i = function(t, r) {
                    var e, n, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
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
                                if (e) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (e = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                    switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
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
                                            a.label++, n = i[1], i = [0];
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
                                    i = r.call(t, a)
                                } catch (t) {
                                    i = [6, t], n = 0
                                } finally {
                                    e = o = 0
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
                a = function() {
                    function t() {
                        this.activePromise = Promise.resolve(new u)
                    }
                    return t.prototype.lock = function() {
                        return o(this, void 0, Promise, (function() {
                            var t, r, e = this;
                            return i(this, (function(n) {
                                return t = new Promise((function(t) {
                                    return o(e, void 0, void 0, (function() {
                                        return i(this, (function(r) {
                                            switch (r.label) {
                                                case 0:
                                                    return [4, this.activePromise];
                                                case 1:
                                                    return r.sent().onUnlock((function() {
                                                        return t(new u)
                                                    })), [2]
                                            }
                                        }))
                                    }))
                                })), r = this.activePromise, this.activePromise = t, [2, r]
                            }))
                        }))
                    }, t
                }(),
                u = function() {
                    function t() {}
                    return t.prototype.onUnlock = function(t) {
                        this.unlockCB = t
                    }, t.prototype.unlock = function() {
                        this.unlockCB()
                    }, t
                }(),
                s = function(t, r, e, n) {
                    return new(e || (e = Promise))((function(o, i) {
                        function a(t) {
                            try {
                                s(n.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function u(t) {
                            try {
                                s(n.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function s(t) {
                            t.done ? o(t.value) : new e((function(r) {
                                r(t.value)
                            })).then(a, u)
                        }
                        s((n = n.apply(t, r || [])).next())
                    }))
                },
                f = function(t, r) {
                    var e, n, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
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
                                if (e) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (e = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                    switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
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
                                            a.label++, n = i[1], i = [0];
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
                                    i = r.call(t, a)
                                } catch (t) {
                                    i = [6, t], n = 0
                                } finally {
                                    e = o = 0
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
                c = function() {
                    function t(t) {
                        this.worker = t, this.lock = new a
                    }
                    return t.prototype.exec = function(t, r) {
                        return s(this, void 0, Promise, (function() {
                            var e, n = this;
                            return f(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, this.lock.lock()];
                                    case 1:
                                        return e = o.sent(), [2, new Promise((function(o, i) {
                                            var a = function(t) {
                                                n.worker.removeEventListener("message", a), o(t.data), e.unlock()
                                            };
                                            n.worker.addEventListener("message", a), n.worker.onerror = function(t) {
                                                i(t), e.unlock()
                                            }, n.worker.postMessage(t, r)
                                        }))]
                                }
                            }))
                        }))
                    }, t
                }();

            function h(t) {
                return function() {
                    return new c(new t)
                }
            }
            var l = e(804),
                p = e.n(l),
                d = e(805),
                y = e.n(d),
                g = h(p.a);
            h(y.a);
            e.d(r, "a", (function() {
                return m
            })), e.d(r, "c", (function() {
                return A
            })), e.d(r, "b", (function() {
                return P
            })), e.d(r, "d", (function() {
                return T
            }));
            var v = function(t, r, e, n) {
                    return new(e || (e = Promise))((function(o, i) {
                        function a(t) {
                            try {
                                s(n.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function u(t) {
                            try {
                                s(n.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function s(t) {
                            t.done ? o(t.value) : new e((function(r) {
                                r(t.value)
                            })).then(a, u)
                        }
                        s((n = n.apply(t, r || [])).next())
                    }))
                },
                w = function(t, r) {
                    var e, n, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
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
                                if (e) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (e = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                    switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
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
                                            a.label++, n = i[1], i = [0];
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
                                    i = r.call(t, a)
                                } catch (t) {
                                    i = [6, t], n = 0
                                } finally {
                                    e = o = 0
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
                b = g(),
                m = function(t, r) {
                    return v(void 0, void 0, Promise, (function() {
                        var e, n, o;
                        return w(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    return e = new Uint8Array(t.width * t.height * 4), t.readRenderTargetData(e), n = e.buffer, [4, b.exec({
                                        data: n,
                                        width: t.width,
                                        height: t.height,
                                        options: {
                                            exif: r,
                                            quality: 85,
                                            flipY: !0
                                        }
                                    }, [n])];
                                case 1:
                                    return o = i.sent(), [2, new Uint8Array(o.data)]
                            }
                        }))
                    }))
                },
                A = function(t) {
                    return new Blob([t], {
                        type: "image/jpeg"
                    })
                },
                P = function(t) {
                    return "data:image/jpg;base64," + Object(n.n)(t)
                },
                T = function(t, r, e, n) {
                    return 'http://ns.adobe.com/xap/1.0/\0<?xpacket begin="ï»¿" id="W5M0MpCehiHzreSzNTczkc9d"?><x:xmpmeta xmlns:x="adobe:ns:meta/"><rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:GPano="http://ns.google.com/photos/1.0/panorama/"><GPano:CroppedAreaImageHeightPixels>' + r + "</GPano:CroppedAreaImageHeightPixels><GPano:CroppedAreaImageWidthPixels>" + t + "</GPano:CroppedAreaImageWidthPixels><GPano:CroppedAreaLeftPixels>0</GPano:CroppedAreaLeftPixels><GPano:CroppedAreaTopPixels>0</GPano:CroppedAreaTopPixels><GPano:FullPanoHeightPixels>" + r + "</GPano:FullPanoHeightPixels><GPano:FullPanoWidthPixels>" + t + "</GPano:FullPanoWidthPixels><GPano:ProjectionType>equirectangular</GPano:ProjectionType><GPano:UsePanoramaViewer>True</GPano:UsePanoramaViewer><GPano:InitialViewHeadingDegrees>" + e + "</GPano:InitialViewHeadingDegrees><GPano:InitialViewPitchDegrees>" + n + '</GPano:InitialViewPitchDegrees><GPano:CaptureSoftware>Matterport Camera</GPano:CaptureSoftware><GPano:StitchingSoftware>Matterport Cloud</GPano:StitchingSoftware></rdf:Description></rdf:RDF></x:xmpmeta><?xpacket end="w"?>'
                }
        },
        724: function(t, r, e) {
            "use strict";
            e.d(r, "a", (function() {
                return T
            })), e.d(r, "b", (function() {
                return _
            }));
            var n, o = e(29),
                i = e(1),
                a = e(18),
                u = e(65),
                s = e(7),
                f = e(98),
                c = e(54),
                h = e(258),
                l = e(574),
                p = e(31),
                d = e(725),
                y = e(106),
                g = e(95),
                v = e(63),
                w = e(266),
                b = e(68),
                m = (n = function(t, r) {
                    return (n = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, r) {
                            t.__proto__ = r
                        } || function(t, r) {
                            for (var e in r) r.hasOwnProperty(e) && (t[e] = r[e])
                        })(t, r)
                }, function(t, r) {
                    function e() {
                        this.constructor = t
                    }
                    n(t, r), t.prototype = null === r ? Object.create(r) : (e.prototype = r.prototype, new e)
                }),
                A = function(t) {
                    var r = "function" == typeof Symbol && t[Symbol.iterator],
                        e = 0;
                    return r ? r.call(t) : {
                        next: function() {
                            return t && e >= t.length && (t = void 0), {
                                value: t && t[e++],
                                done: !t
                            }
                        }
                    }
                },
                P = function(t) {
                    function r() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return m(r, t), r
                }(o.a),
                T = function(t) {
                    function r() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return m(r, t), r
                }(o.a),
                _ = function() {
                    function t(t, r, e, n, o, u, s, f, c, h, l, p, d) {
                        void 0 === f && (f = new a.a(16724312)), void 0 === c && (c = new a.a(16724312)), void 0 === h && (h = .8), void 0 === l && (l = 300), void 0 === p && (p = .4), void 0 === d && (d = y.a.ALL);
                        var g = this;
                        this.scene = t, this.input = r, this.settingsData = e, this.sweepData = n, this.puckImagery = o, this.onFloor = u, this.checkRenderModes = s, this.idleColor = f, this.hoverColor = c, this.idleOpacity = h, this.selectionDuration = l, this.puckSize = p, this.layer = d, this.sweepToMesh = {}, this.colliderToSweep = {}, this.puckOffset = new i.a(0, .05, 0), this.bindings = [], this.wasDrawing = !1, this.updateLookAt = function(t) {
                            g.sweepData.iterate((function(r) {
                                var e = g.sweepToMesh[r.id];
                                e && e.visible && e.lookAt(t)
                            }))
                        }
                    }
                    return Object.defineProperty(t.prototype, "displayDisabled", {
                        get: function() {
                            return void 0 !== this.puckImagery.disabled
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.init = function() {
                        var t = this,
                            r = new u.a(this.puckSize, this.puckSize),
                            e = new h.a(.5 * this.puckSize, 10, 10);
                        if (this.onFloor) {
                            var n = new s.a;
                            n.makeRotationFromEuler(new f.a(-Math.PI / 2, 0, 0, "XYZ")), r.applyMatrix(n)
                        }
                        var o = {
                                color: this.idleColor.getHex(),
                                opacity: this.idleOpacity,
                                transparent: !0,
                                depthWrite: !1,
                                map: this.puckImagery.enabled
                            },
                            i = new c.a;
                        this.sweepData.iterate((function(n) {
                            if (n.alignmentType === v.a.ALIGNED) {
                                var a = new c.a(o);
                                t.puckImagery.disabled && !n.enabled && a.setValues({
                                    map: t.puckImagery.disabled
                                });
                                var u, s = new P(r, a);
                                t.onFloor ? (s.position.copy(n.floorPosition).add(t.puckOffset), u = new T(r, i)) : (s.position.copy(n.position), s.rotation.setFromQuaternion(n.rotation), u = new T(e, i)), s.name = n.id, s.updateMatrixWorld(!1);
                                var f = t.sweepData.getState(n.id);
                                s.visible = f.visible, f.onPropertyChanged("visible", (function(t) {
                                    s.visible = t
                                })), t.bindings.push(n.onPropertyChanged("enabled", (function() {
                                    a.setValues({
                                        map: n.enabled ? t.puckImagery.enabled : t.puckImagery.disabled
                                    })
                                })));
                                var h = 0;
                                t.bindings.push(f.onPropertyChanged("selected", (function(r) {
                                    var e = r.value,
                                        o = n.enabled ? t.puckImagery.enabled : t.puckImagery.disabled,
                                        i = n.enabled ? t.puckImagery.enabledHover : t.puckImagery.disabledHover;
                                    a.setValues({
                                        map: e > h ? i : o
                                    }), a.color.copy(t.idleColor).lerp(t.hoverColor, e), a.opacity = t.idleOpacity * (1 - e) + 1 * e, h = e
                                }))), s.renderOrder = g.a.panoMarker, u.position.copy(s.position), u.rotation.copy(s.rotation), u.name = n.id, u.updateMatrixWorld(!1), s.collider = u, s.layers.mask = t.layer.mask, t.sweepToMesh[n.id] = s, t.colliderToSweep[u.id] = n.id
                            }
                        }))
                    }, t.prototype.updatePuckImagery = function(t) {
                        var r, e = this;
                        this.displayDisabled || void 0 === t.disabled ? this.displayDisabled && void 0 === t.disabled && (r = !1) : r = !0, this.puckImagery = t, this.sweepData.iterate((function(t) {
                            if (t.alignmentType === v.a.ALIGNED) {
                                var n = e.sweepToMesh[t.id],
                                    o = e.sweepData.getState(t.id);
                                n.visible = o.visible;
                                var i = e.puckImagery.enabled;
                                if (!t.enabled && e.puckImagery.disabled && (i = e.puckImagery.disabled), e.sweepToMesh[t.id].material.setValues({
                                        map: i
                                    }), void 0 !== r) {
                                    if (t.enabled) return;
                                    r ? e.addSweepToScene(t.id) : e.removeSweepFromScene(t.id)
                                }
                            }
                        }))
                    }, t.prototype.updateCheckRenderModes = function(t) {
                        this.checkRenderModes = t
                    }, t.prototype.removeSweepFromScene = function(t) {
                        var r = this.sweepToMesh[t];
                        this.scene.remove(r), this.input.unregisterMesh(r.collider)
                    }, t.prototype.addSweepToScene = function(t) {
                        if (this.sweepData.getSweep(t).enabled || this.displayDisabled) {
                            var r = this.sweepToMesh[t];
                            this.scene.add(r), this.input.registerMesh(r.collider, !0)
                        }
                    }, t.prototype.render = function() {
                        var t = this.checkRenderModes(),
                            r = this.settingsData.tryGetProperty(w.a, !0);
                        if (t && r) {
                            if (!this.wasDrawing) {
                                for (var e in this.sweepToMesh) this.addSweepToScene(e);
                                this.wasDrawing = !0
                            }
                        } else if (this.wasDrawing) {
                            for (var e in this.sweepToMesh) this.removeSweepFromScene(e);
                            this.wasDrawing = !1
                        }
                    }, t.prototype.dispose = function() {
                        for (var t in this.sweepToMesh) {
                            var r = this.sweepToMesh[t];
                            r.material.dispose(), r.geometry.dispose()
                        }
                    }, t.prototype.activate = function(t) {
                        var r = this;
                        this.wasDrawing = !1, this.bindings.push(this.input.registerMeshHandler(p.e, b.a.isType(T), (function(e, n) {
                            return t.commandBinder.issueCommand(new l.c(r.colliderToSweep[n.id], !0, r.selectionDuration))
                        }))), this.bindings.push(this.input.registerMeshHandler(p.r, b.a.isType(T), (function(e, n) {
                            return t.commandBinder.issueCommand(new l.c(r.colliderToSweep[n.id], !1, r.selectionDuration))
                        }))), this.bindings.push(this.input.registerMeshHandler(p.a, b.a.isType(T), (function(e, n) {
                            var o = r.sweepData.getSweep(r.colliderToSweep[n.id]).index,
                                i = r.sweepData.getAlignedSweeps(!0).length;
                            t.broadcast(new d.a(r.colliderToSweep[n.id], o, i))
                        })))
                    }, t.prototype.deactivate = function(t) {
                        var r, e;
                        for (var n in this.sweepToMesh) this.removeSweepFromScene(n);
                        try {
                            for (var o = A(this.bindings), i = o.next(); !i.done; i = o.next()) {
                                i.value.cancel()
                            }
                        } catch (t) {
                            r = {
                                error: t
                            }
                        } finally {
                            try {
                                i && !i.done && (e = o.return) && e.call(o)
                            } finally {
                                if (r) throw r.error
                            }
                        }
                        this.bindings.length = 0
                    }, t
                }()
        },
        725: function(t, r, e) {
            "use strict";
            var n, o = e(9),
                i = (n = function(t, r) {
                    return (n = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, r) {
                            t.__proto__ = r
                        } || function(t, r) {
                            for (var e in r) r.hasOwnProperty(e) && (t[e] = r[e])
                        })(t, r)
                }, function(t, r) {
                    function e() {
                        this.constructor = t
                    }
                    n(t, r), t.prototype = null === r ? Object.create(r) : (e.prototype = r.prototype, new e)
                }),
                a = function(t) {
                    function r(r, e, n) {
                        var o = t.call(this) || this;
                        return o.sweepId = r, o.sweepIndex = e, o.totalSweeps = n, o
                    }
                    return i(r, t), r
                }(o.a);
            r.a = a
        },
        726: function(t, r, e) {
            "use strict";
            e.d(r, "a", (function() {
                return d
            })), e.d(r, "b", (function() {
                return y
            }));
            var n, o = e(21),
                i = e(216),
                a = e(5),
                u = e(1),
                s = e(61),
                f = e(73),
                c = (n = function(t, r) {
                    return (n = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, r) {
                            t.__proto__ = r
                        } || function(t, r) {
                            for (var e in r) r.hasOwnProperty(e) && (t[e] = r[e])
                        })(t, r)
                }, function(t, r) {
                    function e() {
                        this.constructor = t
                    }
                    n(t, r), t.prototype = null === r ? Object.create(r) : (e.prototype = r.prototype, new e)
                }),
                h = function(t, r, e, n) {
                    return new(e || (e = Promise))((function(o, i) {
                        function a(t) {
                            try {
                                s(n.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function u(t) {
                            try {
                                s(n.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function s(t) {
                            t.done ? o(t.value) : new e((function(r) {
                                r(t.value)
                            })).then(a, u)
                        }
                        s((n = n.apply(t, r || [])).next())
                    }))
                },
                l = function(t, r) {
                    var e, n, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
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
                                if (e) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (e = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                    switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
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
                                            a.label++, n = i[1], i = [0];
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
                                    i = r.call(t, a)
                                } catch (t) {
                                    i = [6, t], n = 0
                                } finally {
                                    e = o = 0
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
                p = function(t, r) {
                    var e = "function" == typeof Symbol && t[Symbol.iterator];
                    if (!e) return t;
                    var n, o, i = e.call(t),
                        a = [];
                    try {
                        for (;
                            (void 0 === r || r-- > 0) && !(n = i.next()).done;) a.push(n.value)
                    } catch (t) {
                        o = {
                            error: t
                        }
                    } finally {
                        try {
                            n && !n.done && (e = i.return) && e.call(i)
                        } finally {
                            if (o) throw o.error
                        }
                    }
                    return a
                },
                d = function(t) {
                    function r(r) {
                        var e = t.call(this) || this;
                        return e.id = "MATTERTAG_DISC_POSITIONS", e.payload = {
                            tags: r
                        }, e
                    }
                    return c(r, t), r
                }(o.a),
                y = function(t, r, e) {
                    return h(void 0, void 0, void 0, (function() {
                        var e = this;
                        return l(this, (function(n) {
                            return Promise.all([t.market.waitForData(i.a), t.market.waitForData(s.a)]).then((function(t) {
                                var n = p(t, 2),
                                    o = n[0],
                                    i = n[1],
                                    s = [],
                                    c = {},
                                    y = {},
                                    g = new u.a;
                                r.addBinding(d, (function(t) {
                                    return h(e, void 0, Promise, (function() {
                                        return l(this, (function(r) {
                                            return s.length = 0, t.tags.forEach((function(t) {
                                                var r = o.getTag(t);
                                                r && (y[t] || (y[t] = new u.a), y[t].copy(r.anchorPosition).add(r.stemVector), c[t] || (c[t] = new a.a), Object(f.e)(i, y[t], c[t], g), s.push({
                                                    sid: t,
                                                    screen: g.z > 1 ? null : c[t],
                                                    world: y[t]
                                                }))
                                            })), [2, s]
                                        }))
                                    }))
                                }))
                            })), [2]
                        }))
                    }))
                }
        },
        727: function(t, r, e) {
            "use strict";
            e.d(r, "a", (function() {
                return c
            })), e.d(r, "b", (function() {
                return h
            }));
            var n, o = e(21),
                i = e(159),
                a = e(565),
                u = (n = function(t, r) {
                    return (n = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, r) {
                            t.__proto__ = r
                        } || function(t, r) {
                            for (var e in r) r.hasOwnProperty(e) && (t[e] = r[e])
                        })(t, r)
                }, function(t, r) {
                    function e() {
                        this.constructor = t
                    }
                    n(t, r), t.prototype = null === r ? Object.create(r) : (e.prototype = r.prototype, new e)
                }),
                s = function(t, r, e, n) {
                    return new(e || (e = Promise))((function(o, i) {
                        function a(t) {
                            try {
                                s(n.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function u(t) {
                            try {
                                s(n.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function s(t) {
                            t.done ? o(t.value) : new e((function(r) {
                                r(t.value)
                            })).then(a, u)
                        }
                        s((n = n.apply(t, r || [])).next())
                    }))
                },
                f = function(t, r) {
                    var e, n, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
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
                                if (e) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (e = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                    switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
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
                                            a.label++, n = i[1], i = [0];
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
                                    i = r.call(t, a)
                                } catch (t) {
                                    i = [6, t], n = 0
                                } finally {
                                    e = o = 0
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
                c = function(t) {
                    function r(r) {
                        var e = t.call(this) || this;
                        return e.id = "SWITCH_APP", e.payload = {
                            app: r
                        }, e
                    }
                    return u(r, t), r
                }(o.a),
                h = function(t, r, e) {
                    t.waitForModule(i.default).then((function(t) {
                        r.addBinding(c, (function(r) {
                            return s(void 0, void 0, void 0, (function() {
                                return f(this, (function(e) {
                                    try {
                                        t.updateActiveApp(r.app)
                                    } catch (t) {
                                        throw Error("Error: Can't switch application mode at this time")
                                    }
                                    return [2]
                                }))
                            }))
                        }))
                    })), e.addCommandToInterface({
                        version: "3.x",
                        namespace: "App",
                        name: "switchApplication",
                        args: ["app"]
                    }, (function(t) {
                        var r = Object(a.d)(t.app);
                        if (void 0 === r) throw Error(t.app + " is not a valid application");
                        return new c(r)
                    }))
                }
        },
        728: function(t, r, e) {
            "use strict";
            var n = window.URL || window.webkitURL;
            t.exports = function(t, r) {
                try {
                    try {
                        var e;
                        try {
                            (e = new(window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder)).append(t), e = e.getBlob()
                        } catch (r) {
                            e = new Blob([t])
                        }
                        return new Worker(n.createObjectURL(e))
                    } catch (r) {
                        return new Worker("data:application/javascript," + encodeURIComponent(t))
                    }
                } catch (t) {
                    if (!r) throw Error("Inline worker is not supported");
                    return new Worker(r)
                }
            }
        },
        729: function(t, r, e) {
            "use strict";
            e.d(r, "b", (function() {
                return o
            })), e.d(r, "a", (function() {
                return T
            })), e.d(r, "c", (function() {
                return E
            }));
            var n, o, i = e(21),
                a = e(2),
                u = e(106),
                s = e(118),
                f = e(549),
                c = e(60),
                h = e(10),
                l = e(56),
                p = e(1),
                d = e(603),
                y = e(714),
                g = e(3),
                v = (n = function(t, r) {
                    return (n = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, r) {
                            t.__proto__ = r
                        } || function(t, r) {
                            for (var e in r) r.hasOwnProperty(e) && (t[e] = r[e])
                        })(t, r)
                }, function(t, r) {
                    function e() {
                        this.constructor = t
                    }
                    n(t, r), t.prototype = null === r ? Object.create(r) : (e.prototype = r.prototype, new e)
                }),
                w = function() {
                    return (w = Object.assign || function(t) {
                        for (var r, e = 1, n = arguments.length; e < n; e++)
                            for (var o in r = arguments[e]) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
                        return t
                    }).apply(this, arguments)
                },
                b = function(t, r, e, n) {
                    return new(e || (e = Promise))((function(o, i) {
                        function a(t) {
                            try {
                                s(n.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function u(t) {
                            try {
                                s(n.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function s(t) {
                            t.done ? o(t.value) : new e((function(r) {
                                r(t.value)
                            })).then(a, u)
                        }
                        s((n = n.apply(t, r || [])).next())
                    }))
                },
                m = function(t, r) {
                    var e, n, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
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
                                if (e) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (e = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                    switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
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
                                            a.label++, n = i[1], i = [0];
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
                                    i = r.call(t, a)
                                } catch (t) {
                                    i = [6, t], n = 0
                                } finally {
                                    e = o = 0
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
                A = function(t, r) {
                    var e = "function" == typeof Symbol && t[Symbol.iterator];
                    if (!e) return t;
                    var n, o, i = e.call(t),
                        a = [];
                    try {
                        for (;
                            (void 0 === r || r-- > 0) && !(n = i.next()).done;) a.push(n.value)
                    } catch (t) {
                        o = {
                            error: t
                        }
                    } finally {
                        try {
                            n && !n.done && (e = i.return) && e.call(i)
                        } finally {
                            if (o) throw o.error
                        }
                    }
                    return a
                },
                P = new g.a("Renderer");
            ! function(t) {
                t.Base64JPG = "screenshot.base64.jpg", t.ArrayBufferJPG = "screenshot.arraybuffer.jpg"
            }(o || (o = {}));
            var T = function(t) {
                    function r(r) {
                        var e = t.call(this) || this;
                        return e.id = "SCREENSHOT", e.payload = w({}, r), e
                    }
                    return v(r, t), r
                }(i.a),
                _ = function(t) {
                    function r() {
                        var r = t.call(this) || this;
                        return r.id = "EQSS", r.payload = {}, r
                    }
                    return v(r, t), r
                }(i.a),
                E = function(t, r, e) {
                    Promise.all([t.waitForModule(a.Nb), r.issueCommandWhenBound(new d.d), t.waitForModule(a.R), t.market.waitForData(c.a)]).then((function(t) {
                        var e = A(t, 4),
                            n = e[0],
                            i = e[1],
                            a = e[2],
                            u = e[3],
                            s = new f.a(a.getSignedUrls()),
                            c = n.getScene().camera,
                            g = n.getScene().scene,
                            v = c.clone();
                        r.addBinding(T, (function(t) {
                            return b(void 0, void 0, void 0, (function() {
                                var e, a, u;
                                return m(this, (function(s) {
                                    switch (s.label) {
                                        case 0:
                                            if (e = t.resolution, a = n.maxTextureSize, e.width <= 0 || e.width > a || e.height <= 0 || e.height > a) throw Error('"resolution" provided was not valid');
                                            return c.getWorldPosition(v.position), c.getWorldQuaternion(v.quaternion), v.projectionMatrix.copy(c.projectionMatrix), v.layers.mask = t.visibleObjects.mask, i.setSize(e.width, e.height), [4, r.issueCommand(new d.e(i, g, v))];
                                        case 1:
                                            return s.sent(), [4, Object(y.a)(i)];
                                        case 2:
                                            return u = s.sent(), i.setSize(0, 0), t.returnType === o.ArrayBufferJPG ? [2, u.buffer] : [2, Object(y.b)(u)]
                                    }
                                }))
                            }))
                        }));
                        var w = new p.a;
                        c.getWorldDirection(w);
                        var P = h.b.FORWARD.clone(),
                            E = 4096,
                            S = 2048;
                        r.addBinding(_, (function(t) {
                            return b(void 0, void 0, void 0, (function() {
                                var t, e, n, o;
                                return m(this, (function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (!u.currentSweep) throw new Error("Can only capture equirectangular projections while stationary in a sweep");
                                            return [4, s.load(u.currentSweep)];
                                        case 1:
                                            return t = a.sent(), e = u.getSweep(u.currentSweep), P.copy(h.b.FORWARD).applyQuaternion(e.rotation).setY(0), n = Object(l.q)(P, c.getWorldDirection(w).setY(0)) + Math.PI, i.setSize(E, S), [4, r.issueCommand(new d.c(i, t, n))];
                                        case 2:
                                            return a.sent(), [4, Object(y.a)(i, Object(y.d)(i.width, i.height, 0, 0))];
                                        case 3:
                                            return o = a.sent(), i.setSize(0, 0), [2, Object(y.b)(o)]
                                    }
                                }))
                            }))
                        }))
                    }));
                    var n = function(r) {
                        if (void 0 === r && (r = {}), !r.resolution) {
                            var e = t.market.tryGetData(s.a);
                            e && (r.resolution = {
                                width: e.width,
                                height: e.height
                            })
                        }
                        var n = u.a.ALL;
                        r.visibleObjects && (r.visibleObjects.hasOwnProperty("mattertags") && !r.visibleObjects.mattertags && n.removeLayers(t.getRenderLayer("mattertag-mesh")), r.visibleObjects.hasOwnProperty("sweeps") && !r.visibleObjects.sweep && n.removeLayers(t.getRenderLayer("sweep-pucks")), r.visibleObjects.hasOwnProperty("measurements") && !r.visibleObjects.measurements && n.removeLayers(t.getRenderLayer("measurements")));
                        var i = o.Base64JPG;
                        return r.returnType && (i = r.returnType.returnType), new T({
                            resolution: r.resolution,
                            visibleObjects: n,
                            returnType: i
                        })
                    };
                    e.addCommandToInterface({
                        version: "3.x",
                        namespace: "Renderer",
                        name: "takeScreenShot",
                        args: ["resolution", "visibleObjects", "returnType"]
                    }, n), e.addCommandToInterface({
                        version: "3.x",
                        namespace: "Renderer",
                        name: "takeEquirectangular",
                        args: []
                    }, (function() {
                        return new _
                    })), e.addCommandToInterface({
                        version: "3.x",
                        namespace: "Camera",
                        name: "takeScreenShot",
                        args: ["resolution", "visibleObjects"]
                    }, (function(t) {
                        return P.warn("Camera.takeScreenshot deprecated, please use Renderer.takeScreenshot"), n(t)
                    }))
                }
        },
        804: function(t, r, e) {
            t.exports = function() {
                return e(728)('/*! For license information please see 0ba3c1528f56763142bf.worker.js.LICENSE */\n!function(t){var r={};function e(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var i in t)e.d(n,i,function(r){return t[r]}.bind(null,i));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s=1)}([function(t,r,e){"use strict";(function(t){e.d(r,"a",(function(){return i}));function n(r){Math.round;var e,n,i,o,f,u=Math.floor,a=new Array(64),s=new Array(64),h=new Array(64),c=new Array(64),l=new Array(65535),p=new Array(65535),g=new Array(64),y=new Array(64),w=[],d=0,v=7,A=new Array(64),b=new Array(64),E=new Array(64),m=new Array(256),_=new Array(2048),R=[0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63],P=[0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0],T=[0,1,2,3,4,5,6,7,8,9,10,11],B=[0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125],S=[1,2,3,0,4,17,5,18,33,49,65,6,19,81,97,7,34,113,20,50,129,145,161,8,35,66,177,193,21,82,209,240,36,51,98,114,130,9,10,22,23,24,25,26,37,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,225,226,227,228,229,230,231,232,233,234,241,242,243,244,245,246,247,248,249,250],U=[0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0],Y=[0,1,2,3,4,5,6,7,8,9,10,11],I=[0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119],M=[0,1,2,3,17,4,5,33,49,6,18,65,81,7,97,113,19,34,50,129,8,20,66,145,161,177,193,9,35,51,82,240,21,98,114,209,10,22,36,52,225,37,241,23,24,25,26,38,39,40,41,42,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,130,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,226,227,228,229,230,231,232,233,234,242,243,244,245,246,247,248,249,250];function O(t,r){for(var e=0,n=0,i=new Array,o=1;o<=16;o++){for(var f=1;f<=t[o];f++)i[r[n]]=[],i[r[n]][0]=e,i[r[n]][1]=o,n++,e++;e*=2}return i}function C(t){for(var r=t[0],e=t[1]-1;e>=0;)r&1<<e&&(d|=1<<v),e--,--v<0&&(255==d?(L(255),L(0)):L(d),v=7,d=0)}function L(t){w.push(t)}function x(t){L(t>>8&255),L(255&t)}function D(t){t&&(x(65505),x(t.length+2),function(t){for(var r=0,e=t.length;r<e;r++)L(t.charCodeAt(r))}(t))}function N(t,r,e,n,i){for(var o,f=i[0],u=i[240],a=function(t,r){var e,n,i,o,f,u,a,s,h,c,l=0;for(h=0;h<8;++h){e=t[l],n=t[l+1],i=t[l+2],o=t[l+3],f=t[l+4],u=t[l+5],a=t[l+6];var p=e+(s=t[l+7]),y=e-s,w=n+a,d=n-a,v=i+u,A=i-u,b=o+f,E=o-f,m=p+b,_=p-b,R=w+v,P=w-v;t[l]=m+R,t[l+4]=m-R;var T=.707106781*(P+_);t[l+2]=_+T,t[l+6]=_-T;var B=.382683433*((m=E+A)-(P=d+y)),S=.5411961*m+B,U=1.306562965*P+B,Y=.707106781*(R=A+d),I=y+Y,M=y-Y;t[l+5]=M+S,t[l+3]=M-S,t[l+1]=I+U,t[l+7]=I-U,l+=8}for(l=0,h=0;h<8;++h){e=t[l],n=t[l+8],i=t[l+16],o=t[l+24],f=t[l+32],u=t[l+40],a=t[l+48];var O=e+(s=t[l+56]),C=e-s,L=n+a,x=n-a,D=i+u,N=i-u,j=o+f,k=o-f,z=O+j,F=O-j,q=L+D,V=L-D;t[l]=z+q,t[l+32]=z-q;var X=.707106781*(V+F);t[l+16]=F+X,t[l+48]=F-X;var J=.382683433*((z=k+N)-(V=x+C)),Z=.5411961*z+J,G=1.306562965*V+J,H=.707106781*(q=N+x),K=C+H,Q=C-H;t[l+40]=Q+Z,t[l+24]=Q-Z,t[l+8]=K+G,t[l+56]=K-G,l++}for(h=0;h<64;++h)c=t[h]*r[h],g[h]=c>0?c+.5|0:c-.5|0;return g}(t,r),s=0;s<64;++s)y[R[s]]=a[s];var h=y[0]-e;e=y[0],0==h?C(n[0]):(C(n[p[o=32767+h]]),C(l[o]));for(var c=63;c>0&&0==y[c];c--);if(0==c)return C(f),e;for(var w,d=1;d<=c;){for(var v=d;0==y[d]&&d<=c;++d);var A=d-v;if(A>=16){w=A>>4;for(var b=1;b<=w;++b)C(u);A&=15}o=32767+y[d],C(i[(A<<4)+p[o]]),C(l[o]),d++}return 63!=c&&C(f),e}function j(t){if(t<=0&&(t=1),t>100&&(t=100),f!=t){(function(t){for(var r=[16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99],e=0;e<64;e++){var n=u((r[e]*t+50)/100);n<1?n=1:n>255&&(n=255),a[R[e]]=n}for(var i=[17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99],o=0;o<64;o++){var f=u((i[o]*t+50)/100);f<1?f=1:f>255&&(f=255),s[R[o]]=f}for(var l=[1,1.387039845,1.306562965,1.175875602,1,.785694958,.5411961,.275899379],p=0,g=0;g<8;g++)for(var y=0;y<8;y++)h[p]=1/(a[R[p]]*l[g]*l[y]*8),c[p]=1/(s[R[p]]*l[g]*l[y]*8),p++})(t<50?Math.floor(5e3/t):Math.floor(200-2*t)),f=t}}this.encode=function(r,f){(new Date).getTime();var u=f.quality;u&&j(u),w=new Array,d=0,v=7,x(65496),x(65504),x(16),L(74),L(70),L(73),L(70),L(0),L(1),L(1),L(0),x(1),x(1),L(0),L(0),D(f.exif),function(){x(65499),x(132),L(0);for(var t=0;t<64;t++)L(a[t]);L(1);for(var r=0;r<64;r++)L(s[r])}(),function(t,r){x(65472),x(17),L(8),x(r),x(t),L(3),L(1),L(17),L(0),L(2),L(17),L(1),L(3),L(17),L(1)}(r.width,r.height),function(){x(65476),x(418),L(0);for(var t=0;t<16;t++)L(P[t+1]);for(var r=0;r<=11;r++)L(T[r]);L(16);for(var e=0;e<16;e++)L(B[e+1]);for(var n=0;n<=161;n++)L(S[n]);L(1);for(var i=0;i<16;i++)L(U[i+1]);for(var o=0;o<=11;o++)L(Y[o]);L(17);for(var f=0;f<16;f++)L(I[f+1]);for(var u=0;u<=161;u++)L(M[u])}(),x(65498),x(12),L(3),L(1),L(0),L(2),L(17),L(3),L(17),L(0),L(63),L(0);var l=0,p=0,g=0;d=0,v=7,this.encode.displayName="_encode_";for(var y,m,R,O,k,z,F,q,V,X=r.data,J=r.width,Z=r.height,G=f.flipY,H=4*J,K=G?Z:0,Q=G?-8:8;G&&K>0||!G&&K<Z;){for(y=0;y<H;){for(z=k=H*K+y,F=-1,q=0,V=0;V<64;V++)z=k+(q=(G?63-V:V)>>3)*H+(F=4*(7&V)),K+q>=Z&&(z-=H*(K+1+q-Z)),y+F>=H&&(z-=y+F-H+4),m=X[z++],R=X[z++],O=X[z++],A[V]=(_[m]+_[R+256>>0]+_[O+512>>0]>>16)-128,b[V]=(_[m+768>>0]+_[R+1024>>0]+_[O+1280>>0]>>16)-128,E[V]=(_[m+1280>>0]+_[R+1536>>0]+_[O+1792>>0]>>16)-128;l=N(A,h,l,e,i),p=N(b,c,p,n,o),g=N(E,c,g,n,o),y+=32}K+=Q}if(v>=0){var W=[];W[1]=v+1,W[0]=(1<<v+1)-1,C(W)}return x(65497),new t(w)},function(){(new Date).getTime();r||(r=50),function(){for(var t=String.fromCharCode,r=0;r<256;r++)m[r]=t(r)}(),e=O(P,T),n=O(U,Y),i=O(B,S),o=O(I,M),function(){for(var t=1,r=2,e=1;e<=15;e++){for(var n=t;n<r;n++)p[32767+n]=e,l[32767+n]=[],l[32767+n][1]=e,l[32767+n][0]=n;for(var i=-(r-1);i<=-t;i++)p[32767+i]=e,l[32767+i]=[],l[32767+i][1]=e,l[32767+i][0]=r-1+i;t<<=1,r<<=1}}(),function(){for(var t=0;t<256;t++)_[t]=19595*t,_[t+256>>0]=38470*t,_[t+512>>0]=7471*t+32768,_[t+768>>0]=-11059*t,_[t+1024>>0]=-21709*t,_[t+1280>>0]=32768*t+8421375,_[t+1536>>0]=-27439*t,_[t+1792>>0]=-5329*t}(),j(r),(new Date).getTime()}()}function i(t,r){return(r=r||{}).quality=r.quality||50,r.exif=r.exif||"",{data:new n(r.quality).encode(t,r),width:t.width,height:t.height}}}).call(this,e(2).Buffer)},function(t,r,e){"use strict";e.r(r);var n=e(0);self.addEventListener("message",(function(t){var r=t.data,e=r.data,i=r.width,o=r.height,f=r.options,u=new Uint8Array(e),a=Object(n.a)({data:u,width:i,height:o},f),s=a.data.buffer;postMessage({data:s,width:a.width,height:a.height},[s])}))},function(t,r,e){"use strict";(function(t){var n=e(4),i=e(5),o=e(6);function f(){return a.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function u(t,r){if(f()<r)throw new RangeError("Invalid typed array length");return a.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(r)).__proto__=a.prototype:(null===t&&(t=new a(r)),t.length=r),t}function a(t,r,e){if(!(a.TYPED_ARRAY_SUPPORT||this instanceof a))return new a(t,r,e);if("number"==typeof t){if("string"==typeof r)throw new Error("If encoding is specified then the first argument must be a string");return c(this,t)}return s(this,t,r,e)}function s(t,r,e,n){if("number"==typeof r)throw new TypeError(\'"value" argument must not be a number\');return"undefined"!=typeof ArrayBuffer&&r instanceof ArrayBuffer?function(t,r,e,n){if(r.byteLength,e<0||r.byteLength<e)throw new RangeError("\'offset\' is out of bounds");if(r.byteLength<e+(n||0))throw new RangeError("\'length\' is out of bounds");r=void 0===e&&void 0===n?new Uint8Array(r):void 0===n?new Uint8Array(r,e):new Uint8Array(r,e,n);a.TYPED_ARRAY_SUPPORT?(t=r).__proto__=a.prototype:t=l(t,r);return t}(t,r,e,n):"string"==typeof r?function(t,r,e){"string"==typeof e&&""!==e||(e="utf8");if(!a.isEncoding(e))throw new TypeError(\'"encoding" must be a valid string encoding\');var n=0|g(r,e),i=(t=u(t,n)).write(r,e);i!==n&&(t=t.slice(0,i));return t}(t,r,e):function(t,r){if(a.isBuffer(r)){var e=0|p(r.length);return 0===(t=u(t,e)).length?t:(r.copy(t,0,0,e),t)}if(r){if("undefined"!=typeof ArrayBuffer&&r.buffer instanceof ArrayBuffer||"length"in r)return"number"!=typeof r.length||(n=r.length)!=n?u(t,0):l(t,r);if("Buffer"===r.type&&o(r.data))return l(t,r.data)}var n;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,r)}function h(t){if("number"!=typeof t)throw new TypeError(\'"size" argument must be a number\');if(t<0)throw new RangeError(\'"size" argument must not be negative\')}function c(t,r){if(h(r),t=u(t,r<0?0:0|p(r)),!a.TYPED_ARRAY_SUPPORT)for(var e=0;e<r;++e)t[e]=0;return t}function l(t,r){var e=r.length<0?0:0|p(r.length);t=u(t,e);for(var n=0;n<e;n+=1)t[n]=255&r[n];return t}function p(t){if(t>=f())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+f().toString(16)+" bytes");return 0|t}function g(t,r){if(a.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var e=t.length;if(0===e)return 0;for(var n=!1;;)switch(r){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":case void 0:return k(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*e;case"hex":return e>>>1;case"base64":return z(t).length;default:if(n)return k(t).length;r=(""+r).toLowerCase(),n=!0}}function y(t,r,e){var n=!1;if((void 0===r||r<0)&&(r=0),r>this.length)return"";if((void 0===e||e>this.length)&&(e=this.length),e<=0)return"";if((e>>>=0)<=(r>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return U(this,r,e);case"utf8":case"utf-8":return T(this,r,e);case"ascii":return B(this,r,e);case"latin1":case"binary":return S(this,r,e);case"base64":return P(this,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Y(this,r,e);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function w(t,r,e){var n=t[r];t[r]=t[e],t[e]=n}function d(t,r,e,n,i){if(0===t.length)return-1;if("string"==typeof e?(n=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),e=+e,isNaN(e)&&(e=i?0:t.length-1),e<0&&(e=t.length+e),e>=t.length){if(i)return-1;e=t.length-1}else if(e<0){if(!i)return-1;e=0}if("string"==typeof r&&(r=a.from(r,n)),a.isBuffer(r))return 0===r.length?-1:v(t,r,e,n,i);if("number"==typeof r)return r&=255,a.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,r,e):Uint8Array.prototype.lastIndexOf.call(t,r,e):v(t,[r],e,n,i);throw new TypeError("val must be string, number or Buffer")}function v(t,r,e,n,i){var o,f=1,u=t.length,a=r.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||r.length<2)return-1;f=2,u/=2,a/=2,e/=2}function s(t,r){return 1===f?t[r]:t.readUInt16BE(r*f)}if(i){var h=-1;for(o=e;o<u;o++)if(s(t,o)===s(r,-1===h?0:o-h)){if(-1===h&&(h=o),o-h+1===a)return h*f}else-1!==h&&(o-=o-h),h=-1}else for(e+a>u&&(e=u-a),o=e;o>=0;o--){for(var c=!0,l=0;l<a;l++)if(s(t,o+l)!==s(r,l)){c=!1;break}if(c)return o}return-1}function A(t,r,e,n){e=Number(e)||0;var i=t.length-e;n?(n=Number(n))>i&&(n=i):n=i;var o=r.length;if(o%2!=0)throw new TypeError("Invalid hex string");n>o/2&&(n=o/2);for(var f=0;f<n;++f){var u=parseInt(r.substr(2*f,2),16);if(isNaN(u))return f;t[e+f]=u}return f}function b(t,r,e,n){return F(k(r,t.length-e),t,e,n)}function E(t,r,e,n){return F(function(t){for(var r=[],e=0;e<t.length;++e)r.push(255&t.charCodeAt(e));return r}(r),t,e,n)}function m(t,r,e,n){return E(t,r,e,n)}function _(t,r,e,n){return F(z(r),t,e,n)}function R(t,r,e,n){return F(function(t,r){for(var e,n,i,o=[],f=0;f<t.length&&!((r-=2)<0);++f)e=t.charCodeAt(f),n=e>>8,i=e%256,o.push(i),o.push(n);return o}(r,t.length-e),t,e,n)}function P(t,r,e){return 0===r&&e===t.length?n.fromByteArray(t):n.fromByteArray(t.slice(r,e))}function T(t,r,e){e=Math.min(t.length,e);for(var n=[],i=r;i<e;){var o,f,u,a,s=t[i],h=null,c=s>239?4:s>223?3:s>191?2:1;if(i+c<=e)switch(c){case 1:s<128&&(h=s);break;case 2:128==(192&(o=t[i+1]))&&(a=(31&s)<<6|63&o)>127&&(h=a);break;case 3:o=t[i+1],f=t[i+2],128==(192&o)&&128==(192&f)&&(a=(15&s)<<12|(63&o)<<6|63&f)>2047&&(a<55296||a>57343)&&(h=a);break;case 4:o=t[i+1],f=t[i+2],u=t[i+3],128==(192&o)&&128==(192&f)&&128==(192&u)&&(a=(15&s)<<18|(63&o)<<12|(63&f)<<6|63&u)>65535&&a<1114112&&(h=a)}null===h?(h=65533,c=1):h>65535&&(h-=65536,n.push(h>>>10&1023|55296),h=56320|1023&h),n.push(h),i+=c}return function(t){var r=t.length;if(r<=4096)return String.fromCharCode.apply(String,t);var e="",n=0;for(;n<r;)e+=String.fromCharCode.apply(String,t.slice(n,n+=4096));return e}(n)}r.Buffer=a,r.SlowBuffer=function(t){+t!=t&&(t=0);return a.alloc(+t)},r.INSPECT_MAX_BYTES=50,a.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(t){return!1}}(),r.kMaxLength=f(),a.poolSize=8192,a._augment=function(t){return t.__proto__=a.prototype,t},a.from=function(t,r,e){return s(null,t,r,e)},a.TYPED_ARRAY_SUPPORT&&(a.prototype.__proto__=Uint8Array.prototype,a.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&a[Symbol.species]===a&&Object.defineProperty(a,Symbol.species,{value:null,configurable:!0})),a.alloc=function(t,r,e){return function(t,r,e,n){return h(r),r<=0?u(t,r):void 0!==e?"string"==typeof n?u(t,r).fill(e,n):u(t,r).fill(e):u(t,r)}(null,t,r,e)},a.allocUnsafe=function(t){return c(null,t)},a.allocUnsafeSlow=function(t){return c(null,t)},a.isBuffer=function(t){return!(null==t||!t._isBuffer)},a.compare=function(t,r){if(!a.isBuffer(t)||!a.isBuffer(r))throw new TypeError("Arguments must be Buffers");if(t===r)return 0;for(var e=t.length,n=r.length,i=0,o=Math.min(e,n);i<o;++i)if(t[i]!==r[i]){e=t[i],n=r[i];break}return e<n?-1:n<e?1:0},a.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},a.concat=function(t,r){if(!o(t))throw new TypeError(\'"list" argument must be an Array of Buffers\');if(0===t.length)return a.alloc(0);var e;if(void 0===r)for(r=0,e=0;e<t.length;++e)r+=t[e].length;var n=a.allocUnsafe(r),i=0;for(e=0;e<t.length;++e){var f=t[e];if(!a.isBuffer(f))throw new TypeError(\'"list" argument must be an Array of Buffers\');f.copy(n,i),i+=f.length}return n},a.byteLength=g,a.prototype._isBuffer=!0,a.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<t;r+=2)w(this,r,r+1);return this},a.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<t;r+=4)w(this,r,r+3),w(this,r+1,r+2);return this},a.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<t;r+=8)w(this,r,r+7),w(this,r+1,r+6),w(this,r+2,r+5),w(this,r+3,r+4);return this},a.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?T(this,0,t):y.apply(this,arguments)},a.prototype.equals=function(t){if(!a.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===a.compare(this,t)},a.prototype.inspect=function(){var t="",e=r.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,e).match(/.{2}/g).join(" "),this.length>e&&(t+=" ... ")),"<Buffer "+t+">"},a.prototype.compare=function(t,r,e,n,i){if(!a.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===r&&(r=0),void 0===e&&(e=t?t.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),r<0||e>t.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&r>=e)return 0;if(n>=i)return-1;if(r>=e)return 1;if(this===t)return 0;for(var o=(i>>>=0)-(n>>>=0),f=(e>>>=0)-(r>>>=0),u=Math.min(o,f),s=this.slice(n,i),h=t.slice(r,e),c=0;c<u;++c)if(s[c]!==h[c]){o=s[c],f=h[c];break}return o<f?-1:f<o?1:0},a.prototype.includes=function(t,r,e){return-1!==this.indexOf(t,r,e)},a.prototype.indexOf=function(t,r,e){return d(this,t,r,e,!0)},a.prototype.lastIndexOf=function(t,r,e){return d(this,t,r,e,!1)},a.prototype.write=function(t,r,e,n){if(void 0===r)n="utf8",e=this.length,r=0;else if(void 0===e&&"string"==typeof r)n=r,e=this.length,r=0;else{if(!isFinite(r))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");r|=0,isFinite(e)?(e|=0,void 0===n&&(n="utf8")):(n=e,e=void 0)}var i=this.length-r;if((void 0===e||e>i)&&(e=i),t.length>0&&(e<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var o=!1;;)switch(n){case"hex":return A(this,t,r,e);case"utf8":case"utf-8":return b(this,t,r,e);case"ascii":return E(this,t,r,e);case"latin1":case"binary":return m(this,t,r,e);case"base64":return _(this,t,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return R(this,t,r,e);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function B(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i)n+=String.fromCharCode(127&t[i]);return n}function S(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i)n+=String.fromCharCode(t[i]);return n}function U(t,r,e){var n=t.length;(!r||r<0)&&(r=0),(!e||e<0||e>n)&&(e=n);for(var i="",o=r;o<e;++o)i+=j(t[o]);return i}function Y(t,r,e){for(var n=t.slice(r,e),i="",o=0;o<n.length;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}function I(t,r,e){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+r>e)throw new RangeError("Trying to access beyond buffer length")}function M(t,r,e,n,i,o){if(!a.isBuffer(t))throw new TypeError(\'"buffer" argument must be a Buffer instance\');if(r>i||r<o)throw new RangeError(\'"value" argument is out of bounds\');if(e+n>t.length)throw new RangeError("Index out of range")}function O(t,r,e,n){r<0&&(r=65535+r+1);for(var i=0,o=Math.min(t.length-e,2);i<o;++i)t[e+i]=(r&255<<8*(n?i:1-i))>>>8*(n?i:1-i)}function C(t,r,e,n){r<0&&(r=4294967295+r+1);for(var i=0,o=Math.min(t.length-e,4);i<o;++i)t[e+i]=r>>>8*(n?i:3-i)&255}function L(t,r,e,n,i,o){if(e+n>t.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function x(t,r,e,n,o){return o||L(t,0,e,4),i.write(t,r,e,n,23,4),e+4}function D(t,r,e,n,o){return o||L(t,0,e,8),i.write(t,r,e,n,52,8),e+8}a.prototype.slice=function(t,r){var e,n=this.length;if((t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(r=void 0===r?n:~~r)<0?(r+=n)<0&&(r=0):r>n&&(r=n),r<t&&(r=t),a.TYPED_ARRAY_SUPPORT)(e=this.subarray(t,r)).__proto__=a.prototype;else{var i=r-t;e=new a(i,void 0);for(var o=0;o<i;++o)e[o]=this[o+t]}return e},a.prototype.readUIntLE=function(t,r,e){t|=0,r|=0,e||I(t,r,this.length);for(var n=this[t],i=1,o=0;++o<r&&(i*=256);)n+=this[t+o]*i;return n},a.prototype.readUIntBE=function(t,r,e){t|=0,r|=0,e||I(t,r,this.length);for(var n=this[t+--r],i=1;r>0&&(i*=256);)n+=this[t+--r]*i;return n},a.prototype.readUInt8=function(t,r){return r||I(t,1,this.length),this[t]},a.prototype.readUInt16LE=function(t,r){return r||I(t,2,this.length),this[t]|this[t+1]<<8},a.prototype.readUInt16BE=function(t,r){return r||I(t,2,this.length),this[t]<<8|this[t+1]},a.prototype.readUInt32LE=function(t,r){return r||I(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},a.prototype.readUInt32BE=function(t,r){return r||I(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},a.prototype.readIntLE=function(t,r,e){t|=0,r|=0,e||I(t,r,this.length);for(var n=this[t],i=1,o=0;++o<r&&(i*=256);)n+=this[t+o]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*r)),n},a.prototype.readIntBE=function(t,r,e){t|=0,r|=0,e||I(t,r,this.length);for(var n=r,i=1,o=this[t+--n];n>0&&(i*=256);)o+=this[t+--n]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*r)),o},a.prototype.readInt8=function(t,r){return r||I(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},a.prototype.readInt16LE=function(t,r){r||I(t,2,this.length);var e=this[t]|this[t+1]<<8;return 32768&e?4294901760|e:e},a.prototype.readInt16BE=function(t,r){r||I(t,2,this.length);var e=this[t+1]|this[t]<<8;return 32768&e?4294901760|e:e},a.prototype.readInt32LE=function(t,r){return r||I(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},a.prototype.readInt32BE=function(t,r){return r||I(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},a.prototype.readFloatLE=function(t,r){return r||I(t,4,this.length),i.read(this,t,!0,23,4)},a.prototype.readFloatBE=function(t,r){return r||I(t,4,this.length),i.read(this,t,!1,23,4)},a.prototype.readDoubleLE=function(t,r){return r||I(t,8,this.length),i.read(this,t,!0,52,8)},a.prototype.readDoubleBE=function(t,r){return r||I(t,8,this.length),i.read(this,t,!1,52,8)},a.prototype.writeUIntLE=function(t,r,e,n){(t=+t,r|=0,e|=0,n)||M(this,t,r,e,Math.pow(2,8*e)-1,0);var i=1,o=0;for(this[r]=255&t;++o<e&&(i*=256);)this[r+o]=t/i&255;return r+e},a.prototype.writeUIntBE=function(t,r,e,n){(t=+t,r|=0,e|=0,n)||M(this,t,r,e,Math.pow(2,8*e)-1,0);var i=e-1,o=1;for(this[r+i]=255&t;--i>=0&&(o*=256);)this[r+i]=t/o&255;return r+e},a.prototype.writeUInt8=function(t,r,e){return t=+t,r|=0,e||M(this,t,r,1,255,0),a.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[r]=255&t,r+1},a.prototype.writeUInt16LE=function(t,r,e){return t=+t,r|=0,e||M(this,t,r,2,65535,0),a.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):O(this,t,r,!0),r+2},a.prototype.writeUInt16BE=function(t,r,e){return t=+t,r|=0,e||M(this,t,r,2,65535,0),a.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):O(this,t,r,!1),r+2},a.prototype.writeUInt32LE=function(t,r,e){return t=+t,r|=0,e||M(this,t,r,4,4294967295,0),a.TYPED_ARRAY_SUPPORT?(this[r+3]=t>>>24,this[r+2]=t>>>16,this[r+1]=t>>>8,this[r]=255&t):C(this,t,r,!0),r+4},a.prototype.writeUInt32BE=function(t,r,e){return t=+t,r|=0,e||M(this,t,r,4,4294967295,0),a.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):C(this,t,r,!1),r+4},a.prototype.writeIntLE=function(t,r,e,n){if(t=+t,r|=0,!n){var i=Math.pow(2,8*e-1);M(this,t,r,e,i-1,-i)}var o=0,f=1,u=0;for(this[r]=255&t;++o<e&&(f*=256);)t<0&&0===u&&0!==this[r+o-1]&&(u=1),this[r+o]=(t/f>>0)-u&255;return r+e},a.prototype.writeIntBE=function(t,r,e,n){if(t=+t,r|=0,!n){var i=Math.pow(2,8*e-1);M(this,t,r,e,i-1,-i)}var o=e-1,f=1,u=0;for(this[r+o]=255&t;--o>=0&&(f*=256);)t<0&&0===u&&0!==this[r+o+1]&&(u=1),this[r+o]=(t/f>>0)-u&255;return r+e},a.prototype.writeInt8=function(t,r,e){return t=+t,r|=0,e||M(this,t,r,1,127,-128),a.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[r]=255&t,r+1},a.prototype.writeInt16LE=function(t,r,e){return t=+t,r|=0,e||M(this,t,r,2,32767,-32768),a.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):O(this,t,r,!0),r+2},a.prototype.writeInt16BE=function(t,r,e){return t=+t,r|=0,e||M(this,t,r,2,32767,-32768),a.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):O(this,t,r,!1),r+2},a.prototype.writeInt32LE=function(t,r,e){return t=+t,r|=0,e||M(this,t,r,4,2147483647,-2147483648),a.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8,this[r+2]=t>>>16,this[r+3]=t>>>24):C(this,t,r,!0),r+4},a.prototype.writeInt32BE=function(t,r,e){return t=+t,r|=0,e||M(this,t,r,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),a.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):C(this,t,r,!1),r+4},a.prototype.writeFloatLE=function(t,r,e){return x(this,t,r,!0,e)},a.prototype.writeFloatBE=function(t,r,e){return x(this,t,r,!1,e)},a.prototype.writeDoubleLE=function(t,r,e){return D(this,t,r,!0,e)},a.prototype.writeDoubleBE=function(t,r,e){return D(this,t,r,!1,e)},a.prototype.copy=function(t,r,e,n){if(e||(e=0),n||0===n||(n=this.length),r>=t.length&&(r=t.length),r||(r=0),n>0&&n<e&&(n=e),n===e)return 0;if(0===t.length||0===this.length)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(e<0||e>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-r<n-e&&(n=t.length-r+e);var i,o=n-e;if(this===t&&e<r&&r<n)for(i=o-1;i>=0;--i)t[i+r]=this[i+e];else if(o<1e3||!a.TYPED_ARRAY_SUPPORT)for(i=0;i<o;++i)t[i+r]=this[i+e];else Uint8Array.prototype.set.call(t,this.subarray(e,e+o),r);return o},a.prototype.fill=function(t,r,e,n){if("string"==typeof t){if("string"==typeof r?(n=r,r=0,e=this.length):"string"==typeof e&&(n=e,e=this.length),1===t.length){var i=t.charCodeAt(0);i<256&&(t=i)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!a.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof t&&(t&=255);if(r<0||this.length<r||this.length<e)throw new RangeError("Out of range index");if(e<=r)return this;var o;if(r>>>=0,e=void 0===e?this.length:e>>>0,t||(t=0),"number"==typeof t)for(o=r;o<e;++o)this[o]=t;else{var f=a.isBuffer(t)?t:k(new a(t,n).toString()),u=f.length;for(o=0;o<e-r;++o)this[o+r]=f[o%u]}return this};var N=/[^+\\/0-9A-Za-z-_]/g;function j(t){return t<16?"0"+t.toString(16):t.toString(16)}function k(t,r){var e;r=r||1/0;for(var n=t.length,i=null,o=[],f=0;f<n;++f){if((e=t.charCodeAt(f))>55295&&e<57344){if(!i){if(e>56319){(r-=3)>-1&&o.push(239,191,189);continue}if(f+1===n){(r-=3)>-1&&o.push(239,191,189);continue}i=e;continue}if(e<56320){(r-=3)>-1&&o.push(239,191,189),i=e;continue}e=65536+(i-55296<<10|e-56320)}else i&&(r-=3)>-1&&o.push(239,191,189);if(i=null,e<128){if((r-=1)<0)break;o.push(e)}else if(e<2048){if((r-=2)<0)break;o.push(e>>6|192,63&e|128)}else if(e<65536){if((r-=3)<0)break;o.push(e>>12|224,e>>6&63|128,63&e|128)}else{if(!(e<1114112))throw new Error("Invalid code point");if((r-=4)<0)break;o.push(e>>18|240,e>>12&63|128,e>>6&63|128,63&e|128)}}return o}function z(t){return n.toByteArray(function(t){if((t=function(t){return t.trim?t.trim():t.replace(/^\\s+|\\s+$/g,"")}(t).replace(N,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function F(t,r,e,n){for(var i=0;i<n&&!(i+e>=r.length||i>=t.length);++i)r[i+e]=t[i];return i}}).call(this,e(3))},function(t,r){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"===("undefined"==typeof window?"undefined":e(window))&&(n=window)}t.exports=n},function(t,r,e){"use strict";r.byteLength=function(t){var r=s(t),e=r[0],n=r[1];return 3*(e+n)/4-n},r.toByteArray=function(t){for(var r,e=s(t),n=e[0],f=e[1],u=new o(function(t,r,e){return 3*(r+e)/4-e}(0,n,f)),a=0,h=f>0?n-4:n,c=0;c<h;c+=4)r=i[t.charCodeAt(c)]<<18|i[t.charCodeAt(c+1)]<<12|i[t.charCodeAt(c+2)]<<6|i[t.charCodeAt(c+3)],u[a++]=r>>16&255,u[a++]=r>>8&255,u[a++]=255&r;2===f&&(r=i[t.charCodeAt(c)]<<2|i[t.charCodeAt(c+1)]>>4,u[a++]=255&r);1===f&&(r=i[t.charCodeAt(c)]<<10|i[t.charCodeAt(c+1)]<<4|i[t.charCodeAt(c+2)]>>2,u[a++]=r>>8&255,u[a++]=255&r);return u},r.fromByteArray=function(t){for(var r,e=t.length,i=e%3,o=[],f=0,u=e-i;f<u;f+=16383)o.push(h(t,f,f+16383>u?u:f+16383));1===i?(r=t[e-1],o.push(n[r>>2]+n[r<<4&63]+"==")):2===i&&(r=(t[e-2]<<8)+t[e-1],o.push(n[r>>10]+n[r>>4&63]+n[r<<2&63]+"="));return o.join("")};for(var n=[],i=[],o="undefined"!=typeof Uint8Array?Uint8Array:Array,f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",u=0,a=f.length;u<a;++u)n[u]=f[u],i[f.charCodeAt(u)]=u;function s(t){var r=t.length;if(r%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var e=t.indexOf("=");return-1===e&&(e=r),[e,e===r?0:4-e%4]}function h(t,r,e){for(var i,o,f=[],u=r;u<e;u+=3)i=(t[u]<<16&16711680)+(t[u+1]<<8&65280)+(255&t[u+2]),f.push(n[(o=i)>>18&63]+n[o>>12&63]+n[o>>6&63]+n[63&o]);return f.join("")}i["-".charCodeAt(0)]=62,i["_".charCodeAt(0)]=63},function(t,r){r.read=function(t,r,e,n,i){var o,f,u=8*i-n-1,a=(1<<u)-1,s=a>>1,h=-7,c=e?i-1:0,l=e?-1:1,p=t[r+c];for(c+=l,o=p&(1<<-h)-1,p>>=-h,h+=u;h>0;o=256*o+t[r+c],c+=l,h-=8);for(f=o&(1<<-h)-1,o>>=-h,h+=n;h>0;f=256*f+t[r+c],c+=l,h-=8);if(0===o)o=1-s;else{if(o===a)return f?NaN:1/0*(p?-1:1);f+=Math.pow(2,n),o-=s}return(p?-1:1)*f*Math.pow(2,o-n)},r.write=function(t,r,e,n,i,o){var f,u,a,s=8*o-i-1,h=(1<<s)-1,c=h>>1,l=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:o-1,g=n?1:-1,y=r<0||0===r&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(u=isNaN(r)?1:0,f=h):(f=Math.floor(Math.log(r)/Math.LN2),r*(a=Math.pow(2,-f))<1&&(f--,a*=2),(r+=f+c>=1?l/a:l*Math.pow(2,1-c))*a>=2&&(f++,a/=2),f+c>=h?(u=0,f=h):f+c>=1?(u=(r*a-1)*Math.pow(2,i),f+=c):(u=r*Math.pow(2,c-1)*Math.pow(2,i),f=0));i>=8;t[e+p]=255&u,p+=g,u/=256,i-=8);for(f=f<<i|u,s+=i;s>0;t[e+p]=255&f,p+=g,f/=256,s-=8);t[e+p-g]|=128*y}},function(t,r){var e={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==e.call(t)}}]);', null)
            }
        },
        805: function(t, r, e) {
            t.exports = function() {
                return e(728)('/*! For license information please see 76ce864761ffd6ebeab9.worker.js.LICENSE */\n!function(r){var t={};function e(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return r[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=r,e.c=t,e.d=function(r,t,n){e.o(r,t)||Object.defineProperty(r,t,{enumerable:!0,get:n})},e.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},e.t=function(r,t){if(1&t&&(r=e(r)),8&t)return r;if(4&t&&"object"==typeof r&&r&&r.__esModule)return r;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:r}),2&t&&"string"!=typeof r)for(var o in r)e.d(n,o,function(t){return r[t]}.bind(null,o));return n},e.n=function(r){var t=r&&r.__esModule?function(){return r.default}:function(){return r};return e.d(t,"a",t),t},e.o=function(r,t){return Object.prototype.hasOwnProperty.call(r,t)},e.p="",e(e.s=2)}([function(r,t,e){"use strict";(function(r){var n=e(5),o=e(6),i=e(7);function a(){return s.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function f(r,t){if(a()<t)throw new RangeError("Invalid typed array length");return s.TYPED_ARRAY_SUPPORT?(r=new Uint8Array(t)).__proto__=s.prototype:(null===r&&(r=new s(t)),r.length=t),r}function s(r,t,e){if(!(s.TYPED_ARRAY_SUPPORT||this instanceof s))return new s(r,t,e);if("number"==typeof r){if("string"==typeof t)throw new Error("If encoding is specified then the first argument must be a string");return c(this,r)}return u(this,r,t,e)}function u(r,t,e,n){if("number"==typeof t)throw new TypeError(\'"value" argument must not be a number\');return"undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer?function(r,t,e,n){if(t.byteLength,e<0||t.byteLength<e)throw new RangeError("\'offset\' is out of bounds");if(t.byteLength<e+(n||0))throw new RangeError("\'length\' is out of bounds");t=void 0===e&&void 0===n?new Uint8Array(t):void 0===n?new Uint8Array(t,e):new Uint8Array(t,e,n);s.TYPED_ARRAY_SUPPORT?(r=t).__proto__=s.prototype:r=l(r,t);return r}(r,t,e,n):"string"==typeof t?function(r,t,e){"string"==typeof e&&""!==e||(e="utf8");if(!s.isEncoding(e))throw new TypeError(\'"encoding" must be a valid string encoding\');var n=0|y(t,e),o=(r=f(r,n)).write(t,e);o!==n&&(r=r.slice(0,o));return r}(r,t,e):function(r,t){if(s.isBuffer(t)){var e=0|p(t.length);return 0===(r=f(r,e)).length?r:(t.copy(r,0,0,e),r)}if(t){if("undefined"!=typeof ArrayBuffer&&t.buffer instanceof ArrayBuffer||"length"in t)return"number"!=typeof t.length||(n=t.length)!=n?f(r,0):l(r,t);if("Buffer"===t.type&&i(t.data))return l(r,t.data)}var n;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(r,t)}function h(r){if("number"!=typeof r)throw new TypeError(\'"size" argument must be a number\');if(r<0)throw new RangeError(\'"size" argument must not be negative\')}function c(r,t){if(h(t),r=f(r,t<0?0:0|p(t)),!s.TYPED_ARRAY_SUPPORT)for(var e=0;e<t;++e)r[e]=0;return r}function l(r,t){var e=t.length<0?0:0|p(t.length);r=f(r,e);for(var n=0;n<e;n+=1)r[n]=255&t[n];return r}function p(r){if(r>=a())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+a().toString(16)+" bytes");return 0|r}function y(r,t){if(s.isBuffer(r))return r.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(r)||r instanceof ArrayBuffer))return r.byteLength;"string"!=typeof r&&(r=""+r);var e=r.length;if(0===e)return 0;for(var n=!1;;)switch(t){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":case void 0:return j(r).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*e;case"hex":return e>>>1;case"base64":return N(r).length;default:if(n)return j(r).length;t=(""+t).toLowerCase(),n=!0}}function g(r,t,e){var n=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===e||e>this.length)&&(e=this.length),e<=0)return"";if((e>>>=0)<=(t>>>=0))return"";for(r||(r="utf8");;)switch(r){case"hex":return B(this,t,e);case"utf8":case"utf-8":return R(this,t,e);case"ascii":return S(this,t,e);case"latin1":case"binary":return U(this,t,e);case"base64":return _(this,t,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Y(this,t,e);default:if(n)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),n=!0}}function d(r,t,e){var n=r[t];r[t]=r[e],r[e]=n}function v(r,t,e,n,o){if(0===r.length)return-1;if("string"==typeof e?(n=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),e=+e,isNaN(e)&&(e=o?0:r.length-1),e<0&&(e=r.length+e),e>=r.length){if(o)return-1;e=r.length-1}else if(e<0){if(!o)return-1;e=0}if("string"==typeof t&&(t=s.from(t,n)),s.isBuffer(t))return 0===t.length?-1:w(r,t,e,n,o);if("number"==typeof t)return t&=255,s.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(r,t,e):Uint8Array.prototype.lastIndexOf.call(r,t,e):w(r,[t],e,n,o);throw new TypeError("val must be string, number or Buffer")}function w(r,t,e,n,o){var i,a=1,f=r.length,s=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(r.length<2||t.length<2)return-1;a=2,f/=2,s/=2,e/=2}function u(r,t){return 1===a?r[t]:r.readUInt16BE(t*a)}if(o){var h=-1;for(i=e;i<f;i++)if(u(r,i)===u(t,-1===h?0:i-h)){if(-1===h&&(h=i),i-h+1===s)return h*a}else-1!==h&&(i-=i-h),h=-1}else for(e+s>f&&(e=f-s),i=e;i>=0;i--){for(var c=!0,l=0;l<s;l++)if(u(r,i+l)!==u(t,l)){c=!1;break}if(c)return i}return-1}function m(r,t,e,n){e=Number(e)||0;var o=r.length-e;n?(n=Number(n))>o&&(n=o):n=o;var i=t.length;if(i%2!=0)throw new TypeError("Invalid hex string");n>i/2&&(n=i/2);for(var a=0;a<n;++a){var f=parseInt(t.substr(2*a,2),16);if(isNaN(f))return a;r[e+a]=f}return a}function b(r,t,e,n){return z(j(t,r.length-e),r,e,n)}function A(r,t,e,n){return z(function(r){for(var t=[],e=0;e<r.length;++e)t.push(255&r.charCodeAt(e));return t}(t),r,e,n)}function E(r,t,e,n){return A(r,t,e,n)}function T(r,t,e,n){return z(N(t),r,e,n)}function P(r,t,e,n){return z(function(r,t){for(var e,n,o,i=[],a=0;a<r.length&&!((t-=2)<0);++a)e=r.charCodeAt(a),n=e>>8,o=e%256,i.push(o),i.push(n);return i}(t,r.length-e),r,e,n)}function _(r,t,e){return 0===t&&e===r.length?n.fromByteArray(r):n.fromByteArray(r.slice(t,e))}function R(r,t,e){e=Math.min(r.length,e);for(var n=[],o=t;o<e;){var i,a,f,s,u=r[o],h=null,c=u>239?4:u>223?3:u>191?2:1;if(o+c<=e)switch(c){case 1:u<128&&(h=u);break;case 2:128==(192&(i=r[o+1]))&&(s=(31&u)<<6|63&i)>127&&(h=s);break;case 3:i=r[o+1],a=r[o+2],128==(192&i)&&128==(192&a)&&(s=(15&u)<<12|(63&i)<<6|63&a)>2047&&(s<55296||s>57343)&&(h=s);break;case 4:i=r[o+1],a=r[o+2],f=r[o+3],128==(192&i)&&128==(192&a)&&128==(192&f)&&(s=(15&u)<<18|(63&i)<<12|(63&a)<<6|63&f)>65535&&s<1114112&&(h=s)}null===h?(h=65533,c=1):h>65535&&(h-=65536,n.push(h>>>10&1023|55296),h=56320|1023&h),n.push(h),o+=c}return function(r){var t=r.length;if(t<=4096)return String.fromCharCode.apply(String,r);var e="",n=0;for(;n<t;)e+=String.fromCharCode.apply(String,r.slice(n,n+=4096));return e}(n)}t.Buffer=s,t.SlowBuffer=function(r){+r!=r&&(r=0);return s.alloc(+r)},t.INSPECT_MAX_BYTES=50,s.TYPED_ARRAY_SUPPORT=void 0!==r.TYPED_ARRAY_SUPPORT?r.TYPED_ARRAY_SUPPORT:function(){try{var r=new Uint8Array(1);return r.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===r.foo()&&"function"==typeof r.subarray&&0===r.subarray(1,1).byteLength}catch(r){return!1}}(),t.kMaxLength=a(),s.poolSize=8192,s._augment=function(r){return r.__proto__=s.prototype,r},s.from=function(r,t,e){return u(null,r,t,e)},s.TYPED_ARRAY_SUPPORT&&(s.prototype.__proto__=Uint8Array.prototype,s.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&s[Symbol.species]===s&&Object.defineProperty(s,Symbol.species,{value:null,configurable:!0})),s.alloc=function(r,t,e){return function(r,t,e,n){return h(t),t<=0?f(r,t):void 0!==e?"string"==typeof n?f(r,t).fill(e,n):f(r,t).fill(e):f(r,t)}(null,r,t,e)},s.allocUnsafe=function(r){return c(null,r)},s.allocUnsafeSlow=function(r){return c(null,r)},s.isBuffer=function(r){return!(null==r||!r._isBuffer)},s.compare=function(r,t){if(!s.isBuffer(r)||!s.isBuffer(t))throw new TypeError("Arguments must be Buffers");if(r===t)return 0;for(var e=r.length,n=t.length,o=0,i=Math.min(e,n);o<i;++o)if(r[o]!==t[o]){e=r[o],n=t[o];break}return e<n?-1:n<e?1:0},s.isEncoding=function(r){switch(String(r).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},s.concat=function(r,t){if(!i(r))throw new TypeError(\'"list" argument must be an Array of Buffers\');if(0===r.length)return s.alloc(0);var e;if(void 0===t)for(t=0,e=0;e<r.length;++e)t+=r[e].length;var n=s.allocUnsafe(t),o=0;for(e=0;e<r.length;++e){var a=r[e];if(!s.isBuffer(a))throw new TypeError(\'"list" argument must be an Array of Buffers\');a.copy(n,o),o+=a.length}return n},s.byteLength=y,s.prototype._isBuffer=!0,s.prototype.swap16=function(){var r=this.length;if(r%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<r;t+=2)d(this,t,t+1);return this},s.prototype.swap32=function(){var r=this.length;if(r%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<r;t+=4)d(this,t,t+3),d(this,t+1,t+2);return this},s.prototype.swap64=function(){var r=this.length;if(r%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<r;t+=8)d(this,t,t+7),d(this,t+1,t+6),d(this,t+2,t+5),d(this,t+3,t+4);return this},s.prototype.toString=function(){var r=0|this.length;return 0===r?"":0===arguments.length?R(this,0,r):g.apply(this,arguments)},s.prototype.equals=function(r){if(!s.isBuffer(r))throw new TypeError("Argument must be a Buffer");return this===r||0===s.compare(this,r)},s.prototype.inspect=function(){var r="",e=t.INSPECT_MAX_BYTES;return this.length>0&&(r=this.toString("hex",0,e).match(/.{2}/g).join(" "),this.length>e&&(r+=" ... ")),"<Buffer "+r+">"},s.prototype.compare=function(r,t,e,n,o){if(!s.isBuffer(r))throw new TypeError("Argument must be a Buffer");if(void 0===t&&(t=0),void 0===e&&(e=r?r.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),t<0||e>r.length||n<0||o>this.length)throw new RangeError("out of range index");if(n>=o&&t>=e)return 0;if(n>=o)return-1;if(t>=e)return 1;if(this===r)return 0;for(var i=(o>>>=0)-(n>>>=0),a=(e>>>=0)-(t>>>=0),f=Math.min(i,a),u=this.slice(n,o),h=r.slice(t,e),c=0;c<f;++c)if(u[c]!==h[c]){i=u[c],a=h[c];break}return i<a?-1:a<i?1:0},s.prototype.includes=function(r,t,e){return-1!==this.indexOf(r,t,e)},s.prototype.indexOf=function(r,t,e){return v(this,r,t,e,!0)},s.prototype.lastIndexOf=function(r,t,e){return v(this,r,t,e,!1)},s.prototype.write=function(r,t,e,n){if(void 0===t)n="utf8",e=this.length,t=0;else if(void 0===e&&"string"==typeof t)n=t,e=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t|=0,isFinite(e)?(e|=0,void 0===n&&(n="utf8")):(n=e,e=void 0)}var o=this.length-t;if((void 0===e||e>o)&&(e=o),r.length>0&&(e<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var i=!1;;)switch(n){case"hex":return m(this,r,t,e);case"utf8":case"utf-8":return b(this,r,t,e);case"ascii":return A(this,r,t,e);case"latin1":case"binary":return E(this,r,t,e);case"base64":return T(this,r,t,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return P(this,r,t,e);default:if(i)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),i=!0}},s.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function S(r,t,e){var n="";e=Math.min(r.length,e);for(var o=t;o<e;++o)n+=String.fromCharCode(127&r[o]);return n}function U(r,t,e){var n="";e=Math.min(r.length,e);for(var o=t;o<e;++o)n+=String.fromCharCode(r[o]);return n}function B(r,t,e){var n=r.length;(!t||t<0)&&(t=0),(!e||e<0||e>n)&&(e=n);for(var o="",i=t;i<e;++i)o+=X(r[i]);return o}function Y(r,t,e){for(var n=r.slice(t,e),o="",i=0;i<n.length;i+=2)o+=String.fromCharCode(n[i]+256*n[i+1]);return o}function k(r,t,e){if(r%1!=0||r<0)throw new RangeError("offset is not uint");if(r+t>e)throw new RangeError("Trying to access beyond buffer length")}function I(r,t,e,n,o,i){if(!s.isBuffer(r))throw new TypeError(\'"buffer" argument must be a Buffer instance\');if(t>o||t<i)throw new RangeError(\'"value" argument is out of bounds\');if(e+n>r.length)throw new RangeError("Index out of range")}function x(r,t,e,n){t<0&&(t=65535+t+1);for(var o=0,i=Math.min(r.length-e,2);o<i;++o)r[e+o]=(t&255<<8*(n?o:1-o))>>>8*(n?o:1-o)}function C(r,t,e,n){t<0&&(t=4294967295+t+1);for(var o=0,i=Math.min(r.length-e,4);o<i;++o)r[e+o]=t>>>8*(n?o:3-o)&255}function L(r,t,e,n,o,i){if(e+n>r.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function M(r,t,e,n,i){return i||L(r,0,e,4),o.write(r,t,e,n,23,4),e+4}function O(r,t,e,n,i){return i||L(r,0,e,8),o.write(r,t,e,n,52,8),e+8}s.prototype.slice=function(r,t){var e,n=this.length;if((r=~~r)<0?(r+=n)<0&&(r=0):r>n&&(r=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<r&&(t=r),s.TYPED_ARRAY_SUPPORT)(e=this.subarray(r,t)).__proto__=s.prototype;else{var o=t-r;e=new s(o,void 0);for(var i=0;i<o;++i)e[i]=this[i+r]}return e},s.prototype.readUIntLE=function(r,t,e){r|=0,t|=0,e||k(r,t,this.length);for(var n=this[r],o=1,i=0;++i<t&&(o*=256);)n+=this[r+i]*o;return n},s.prototype.readUIntBE=function(r,t,e){r|=0,t|=0,e||k(r,t,this.length);for(var n=this[r+--t],o=1;t>0&&(o*=256);)n+=this[r+--t]*o;return n},s.prototype.readUInt8=function(r,t){return t||k(r,1,this.length),this[r]},s.prototype.readUInt16LE=function(r,t){return t||k(r,2,this.length),this[r]|this[r+1]<<8},s.prototype.readUInt16BE=function(r,t){return t||k(r,2,this.length),this[r]<<8|this[r+1]},s.prototype.readUInt32LE=function(r,t){return t||k(r,4,this.length),(this[r]|this[r+1]<<8|this[r+2]<<16)+16777216*this[r+3]},s.prototype.readUInt32BE=function(r,t){return t||k(r,4,this.length),16777216*this[r]+(this[r+1]<<16|this[r+2]<<8|this[r+3])},s.prototype.readIntLE=function(r,t,e){r|=0,t|=0,e||k(r,t,this.length);for(var n=this[r],o=1,i=0;++i<t&&(o*=256);)n+=this[r+i]*o;return n>=(o*=128)&&(n-=Math.pow(2,8*t)),n},s.prototype.readIntBE=function(r,t,e){r|=0,t|=0,e||k(r,t,this.length);for(var n=t,o=1,i=this[r+--n];n>0&&(o*=256);)i+=this[r+--n]*o;return i>=(o*=128)&&(i-=Math.pow(2,8*t)),i},s.prototype.readInt8=function(r,t){return t||k(r,1,this.length),128&this[r]?-1*(255-this[r]+1):this[r]},s.prototype.readInt16LE=function(r,t){t||k(r,2,this.length);var e=this[r]|this[r+1]<<8;return 32768&e?4294901760|e:e},s.prototype.readInt16BE=function(r,t){t||k(r,2,this.length);var e=this[r+1]|this[r]<<8;return 32768&e?4294901760|e:e},s.prototype.readInt32LE=function(r,t){return t||k(r,4,this.length),this[r]|this[r+1]<<8|this[r+2]<<16|this[r+3]<<24},s.prototype.readInt32BE=function(r,t){return t||k(r,4,this.length),this[r]<<24|this[r+1]<<16|this[r+2]<<8|this[r+3]},s.prototype.readFloatLE=function(r,t){return t||k(r,4,this.length),o.read(this,r,!0,23,4)},s.prototype.readFloatBE=function(r,t){return t||k(r,4,this.length),o.read(this,r,!1,23,4)},s.prototype.readDoubleLE=function(r,t){return t||k(r,8,this.length),o.read(this,r,!0,52,8)},s.prototype.readDoubleBE=function(r,t){return t||k(r,8,this.length),o.read(this,r,!1,52,8)},s.prototype.writeUIntLE=function(r,t,e,n){(r=+r,t|=0,e|=0,n)||I(this,r,t,e,Math.pow(2,8*e)-1,0);var o=1,i=0;for(this[t]=255&r;++i<e&&(o*=256);)this[t+i]=r/o&255;return t+e},s.prototype.writeUIntBE=function(r,t,e,n){(r=+r,t|=0,e|=0,n)||I(this,r,t,e,Math.pow(2,8*e)-1,0);var o=e-1,i=1;for(this[t+o]=255&r;--o>=0&&(i*=256);)this[t+o]=r/i&255;return t+e},s.prototype.writeUInt8=function(r,t,e){return r=+r,t|=0,e||I(this,r,t,1,255,0),s.TYPED_ARRAY_SUPPORT||(r=Math.floor(r)),this[t]=255&r,t+1},s.prototype.writeUInt16LE=function(r,t,e){return r=+r,t|=0,e||I(this,r,t,2,65535,0),s.TYPED_ARRAY_SUPPORT?(this[t]=255&r,this[t+1]=r>>>8):x(this,r,t,!0),t+2},s.prototype.writeUInt16BE=function(r,t,e){return r=+r,t|=0,e||I(this,r,t,2,65535,0),s.TYPED_ARRAY_SUPPORT?(this[t]=r>>>8,this[t+1]=255&r):x(this,r,t,!1),t+2},s.prototype.writeUInt32LE=function(r,t,e){return r=+r,t|=0,e||I(this,r,t,4,4294967295,0),s.TYPED_ARRAY_SUPPORT?(this[t+3]=r>>>24,this[t+2]=r>>>16,this[t+1]=r>>>8,this[t]=255&r):C(this,r,t,!0),t+4},s.prototype.writeUInt32BE=function(r,t,e){return r=+r,t|=0,e||I(this,r,t,4,4294967295,0),s.TYPED_ARRAY_SUPPORT?(this[t]=r>>>24,this[t+1]=r>>>16,this[t+2]=r>>>8,this[t+3]=255&r):C(this,r,t,!1),t+4},s.prototype.writeIntLE=function(r,t,e,n){if(r=+r,t|=0,!n){var o=Math.pow(2,8*e-1);I(this,r,t,e,o-1,-o)}var i=0,a=1,f=0;for(this[t]=255&r;++i<e&&(a*=256);)r<0&&0===f&&0!==this[t+i-1]&&(f=1),this[t+i]=(r/a>>0)-f&255;return t+e},s.prototype.writeIntBE=function(r,t,e,n){if(r=+r,t|=0,!n){var o=Math.pow(2,8*e-1);I(this,r,t,e,o-1,-o)}var i=e-1,a=1,f=0;for(this[t+i]=255&r;--i>=0&&(a*=256);)r<0&&0===f&&0!==this[t+i+1]&&(f=1),this[t+i]=(r/a>>0)-f&255;return t+e},s.prototype.writeInt8=function(r,t,e){return r=+r,t|=0,e||I(this,r,t,1,127,-128),s.TYPED_ARRAY_SUPPORT||(r=Math.floor(r)),r<0&&(r=255+r+1),this[t]=255&r,t+1},s.prototype.writeInt16LE=function(r,t,e){return r=+r,t|=0,e||I(this,r,t,2,32767,-32768),s.TYPED_ARRAY_SUPPORT?(this[t]=255&r,this[t+1]=r>>>8):x(this,r,t,!0),t+2},s.prototype.writeInt16BE=function(r,t,e){return r=+r,t|=0,e||I(this,r,t,2,32767,-32768),s.TYPED_ARRAY_SUPPORT?(this[t]=r>>>8,this[t+1]=255&r):x(this,r,t,!1),t+2},s.prototype.writeInt32LE=function(r,t,e){return r=+r,t|=0,e||I(this,r,t,4,2147483647,-2147483648),s.TYPED_ARRAY_SUPPORT?(this[t]=255&r,this[t+1]=r>>>8,this[t+2]=r>>>16,this[t+3]=r>>>24):C(this,r,t,!0),t+4},s.prototype.writeInt32BE=function(r,t,e){return r=+r,t|=0,e||I(this,r,t,4,2147483647,-2147483648),r<0&&(r=4294967295+r+1),s.TYPED_ARRAY_SUPPORT?(this[t]=r>>>24,this[t+1]=r>>>16,this[t+2]=r>>>8,this[t+3]=255&r):C(this,r,t,!1),t+4},s.prototype.writeFloatLE=function(r,t,e){return M(this,r,t,!0,e)},s.prototype.writeFloatBE=function(r,t,e){return M(this,r,t,!1,e)},s.prototype.writeDoubleLE=function(r,t,e){return O(this,r,t,!0,e)},s.prototype.writeDoubleBE=function(r,t,e){return O(this,r,t,!1,e)},s.prototype.copy=function(r,t,e,n){if(e||(e=0),n||0===n||(n=this.length),t>=r.length&&(t=r.length),t||(t=0),n>0&&n<e&&(n=e),n===e)return 0;if(0===r.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(e<0||e>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),r.length-t<n-e&&(n=r.length-t+e);var o,i=n-e;if(this===r&&e<t&&t<n)for(o=i-1;o>=0;--o)r[o+t]=this[o+e];else if(i<1e3||!s.TYPED_ARRAY_SUPPORT)for(o=0;o<i;++o)r[o+t]=this[o+e];else Uint8Array.prototype.set.call(r,this.subarray(e,e+i),t);return i},s.prototype.fill=function(r,t,e,n){if("string"==typeof r){if("string"==typeof t?(n=t,t=0,e=this.length):"string"==typeof e&&(n=e,e=this.length),1===r.length){var o=r.charCodeAt(0);o<256&&(r=o)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!s.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof r&&(r&=255);if(t<0||this.length<t||this.length<e)throw new RangeError("Out of range index");if(e<=t)return this;var i;if(t>>>=0,e=void 0===e?this.length:e>>>0,r||(r=0),"number"==typeof r)for(i=t;i<e;++i)this[i]=r;else{var a=s.isBuffer(r)?r:j(new s(r,n).toString()),f=a.length;for(i=0;i<e-t;++i)this[i+t]=a[i%f]}return this};var D=/[^+\\/0-9A-Za-z-_]/g;function X(r){return r<16?"0"+r.toString(16):r.toString(16)}function j(r,t){var e;t=t||1/0;for(var n=r.length,o=null,i=[],a=0;a<n;++a){if((e=r.charCodeAt(a))>55295&&e<57344){if(!o){if(e>56319){(t-=3)>-1&&i.push(239,191,189);continue}if(a+1===n){(t-=3)>-1&&i.push(239,191,189);continue}o=e;continue}if(e<56320){(t-=3)>-1&&i.push(239,191,189),o=e;continue}e=65536+(o-55296<<10|e-56320)}else o&&(t-=3)>-1&&i.push(239,191,189);if(o=null,e<128){if((t-=1)<0)break;i.push(e)}else if(e<2048){if((t-=2)<0)break;i.push(e>>6|192,63&e|128)}else if(e<65536){if((t-=3)<0)break;i.push(e>>12|224,e>>6&63|128,63&e|128)}else{if(!(e<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;i.push(e>>18|240,e>>12&63|128,e>>6&63|128,63&e|128)}}return i}function N(r){return n.toByteArray(function(r){if((r=function(r){return r.trim?r.trim():r.replace(/^\\s+|\\s+$/g,"")}(r).replace(D,"")).length<2)return"";for(;r.length%4!=0;)r+="=";return r}(r))}function z(r,t,e,n){for(var o=0;o<n&&!(o+e>=t.length||o>=r.length);++o)t[o+e]=r[o];return o}}).call(this,e(4))},function(r,t,e){var n=e(3),o=e(8);r.exports={encode:n,decode:o}},function(r,t,e){"use strict";e.r(t);var n=e(1);self.addEventListener("message",(function(r){var t=r.data,e=Object(n.decode)(t),o=e.data.buffer;postMessage({data:o,width:e.width,height:e.height},[o])}))},function(r,t,e){(function(t){function e(r){Math.round;var e,n,o,i,a,f=Math.floor,s=new Array(64),u=new Array(64),h=new Array(64),c=new Array(64),l=new Array(65535),p=new Array(65535),y=new Array(64),g=new Array(64),d=[],v=0,w=7,m=new Array(64),b=new Array(64),A=new Array(64),E=new Array(256),T=new Array(2048),P=[0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63],_=[0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0],R=[0,1,2,3,4,5,6,7,8,9,10,11],S=[0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125],U=[1,2,3,0,4,17,5,18,33,49,65,6,19,81,97,7,34,113,20,50,129,145,161,8,35,66,177,193,21,82,209,240,36,51,98,114,130,9,10,22,23,24,25,26,37,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,225,226,227,228,229,230,231,232,233,234,241,242,243,244,245,246,247,248,249,250],B=[0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0],Y=[0,1,2,3,4,5,6,7,8,9,10,11],k=[0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119],I=[0,1,2,3,17,4,5,33,49,6,18,65,81,7,97,113,19,34,50,129,8,20,66,145,161,177,193,9,35,51,82,240,21,98,114,209,10,22,36,52,225,37,241,23,24,25,26,38,39,40,41,42,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,130,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,226,227,228,229,230,231,232,233,234,242,243,244,245,246,247,248,249,250];function x(r,t){for(var e=0,n=0,o=new Array,i=1;i<=16;i++){for(var a=1;a<=r[i];a++)o[t[n]]=[],o[t[n]][0]=e,o[t[n]][1]=i,n++,e++;e*=2}return o}function C(r){for(var t=r[0],e=r[1]-1;e>=0;)t&1<<e&&(v|=1<<w),e--,--w<0&&(255==v?(L(255),L(0)):L(v),w=7,v=0)}function L(r){d.push(r)}function M(r){L(r>>8&255),L(255&r)}function O(r,t,e,n,o){for(var i,a=o[0],f=o[240],s=function(r,t){var e,n,o,i,a,f,s,u,h,c,l=0;for(h=0;h<8;++h){e=r[l],n=r[l+1],o=r[l+2],i=r[l+3],a=r[l+4],f=r[l+5],s=r[l+6];var p=e+(u=r[l+7]),g=e-u,d=n+s,v=n-s,w=o+f,m=o-f,b=i+a,A=i-a,E=p+b,T=p-b,P=d+w,_=d-w;r[l]=E+P,r[l+4]=E-P;var R=.707106781*(_+T);r[l+2]=T+R,r[l+6]=T-R;var S=.382683433*((E=A+m)-(_=v+g)),U=.5411961*E+S,B=1.306562965*_+S,Y=.707106781*(P=m+v),k=g+Y,I=g-Y;r[l+5]=I+U,r[l+3]=I-U,r[l+1]=k+B,r[l+7]=k-B,l+=8}for(l=0,h=0;h<8;++h){e=r[l],n=r[l+8],o=r[l+16],i=r[l+24],a=r[l+32],f=r[l+40],s=r[l+48];var x=e+(u=r[l+56]),C=e-u,L=n+s,M=n-s,O=o+f,D=o-f,X=i+a,j=i-a,N=x+X,z=x-X,q=L+O,F=L-O;r[l]=N+q,r[l+32]=N-q;var H=.707106781*(F+z);r[l+16]=z+H,r[l+48]=z-H;var V=.382683433*((N=j+D)-(F=M+C)),G=.5411961*N+V,J=1.306562965*F+V,Q=.707106781*(q=D+M),W=C+Q,Z=C-Q;r[l+40]=Z+G,r[l+24]=Z-G,r[l+8]=W+J,r[l+56]=W-J,l++}for(h=0;h<64;++h)c=r[h]*t[h],y[h]=c>0?c+.5|0:c-.5|0;return y}(r,t),u=0;u<64;++u)g[P[u]]=s[u];var h=g[0]-e;e=g[0],0==h?C(n[0]):(C(n[p[i=32767+h]]),C(l[i]));for(var c=63;c>0&&0==g[c];c--);if(0==c)return C(a),e;for(var d,v=1;v<=c;){for(var w=v;0==g[v]&&v<=c;++v);var m=v-w;if(m>=16){d=m>>4;for(var b=1;b<=d;++b)C(f);m&=15}i=32767+g[v],C(o[(m<<4)+p[i]]),C(l[i]),v++}return 63!=c&&C(a),e}function D(r){if(r<=0&&(r=1),r>100&&(r=100),a!=r){(function(r){for(var t=[16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99],e=0;e<64;e++){var n=f((t[e]*r+50)/100);n<1?n=1:n>255&&(n=255),s[P[e]]=n}for(var o=[17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99],i=0;i<64;i++){var a=f((o[i]*r+50)/100);a<1?a=1:a>255&&(a=255),u[P[i]]=a}for(var l=[1,1.387039845,1.306562965,1.175875602,1,.785694958,.5411961,.275899379],p=0,y=0;y<8;y++)for(var g=0;g<8;g++)h[p]=1/(s[P[p]]*l[y]*l[g]*8),c[p]=1/(u[P[p]]*l[y]*l[g]*8),p++})(r<50?Math.floor(5e3/r):Math.floor(200-2*r)),a=r}}this.encode=function(r,a){(new Date).getTime();a&&D(a),d=new Array,v=0,w=7,M(65496),M(65504),M(16),L(74),L(70),L(73),L(70),L(0),L(1),L(1),L(0),M(1),M(1),L(0),L(0),function(){M(65499),M(132),L(0);for(var r=0;r<64;r++)L(s[r]);L(1);for(var t=0;t<64;t++)L(u[t])}(),function(r,t){M(65472),M(17),L(8),M(t),M(r),L(3),L(1),L(17),L(0),L(2),L(17),L(1),L(3),L(17),L(1)}(r.width,r.height),function(){M(65476),M(418),L(0);for(var r=0;r<16;r++)L(_[r+1]);for(var t=0;t<=11;t++)L(R[t]);L(16);for(var e=0;e<16;e++)L(S[e+1]);for(var n=0;n<=161;n++)L(U[n]);L(1);for(var o=0;o<16;o++)L(B[o+1]);for(var i=0;i<=11;i++)L(Y[i]);L(17);for(var a=0;a<16;a++)L(k[a+1]);for(var f=0;f<=161;f++)L(I[f])}(),M(65498),M(12),L(3),L(1),L(0),L(2),L(17),L(3),L(17),L(0),L(63),L(0);var f=0,l=0,p=0;v=0,w=7,this.encode.displayName="_encode_";for(var y,g,E,P,x,X,j,N,z,q=r.data,F=r.width,H=r.height,V=4*F,G=0;G<H;){for(y=0;y<V;){for(X=x=V*G+y,j=-1,N=0,z=0;z<64;z++)X=x+(N=z>>3)*V+(j=4*(7&z)),G+N>=H&&(X-=V*(G+1+N-H)),y+j>=V&&(X-=y+j-V+4),g=q[X++],E=q[X++],P=q[X++],m[z]=(T[g]+T[E+256>>0]+T[P+512>>0]>>16)-128,b[z]=(T[g+768>>0]+T[E+1024>>0]+T[P+1280>>0]>>16)-128,A[z]=(T[g+1280>>0]+T[E+1536>>0]+T[P+1792>>0]>>16)-128;f=O(m,h,f,e,o),l=O(b,c,l,n,i),p=O(A,c,p,n,i),y+=32}G+=8}if(w>=0){var J=[];J[1]=w+1,J[0]=(1<<w+1)-1,C(J)}return M(65497),new t(d)},function(){(new Date).getTime();r||(r=50),function(){for(var r=String.fromCharCode,t=0;t<256;t++)E[t]=r(t)}(),e=x(_,R),n=x(B,Y),o=x(S,U),i=x(k,I),function(){for(var r=1,t=2,e=1;e<=15;e++){for(var n=r;n<t;n++)p[32767+n]=e,l[32767+n]=[],l[32767+n][1]=e,l[32767+n][0]=n;for(var o=-(t-1);o<=-r;o++)p[32767+o]=e,l[32767+o]=[],l[32767+o][1]=e,l[32767+o][0]=t-1+o;r<<=1,t<<=1}}(),function(){for(var r=0;r<256;r++)T[r]=19595*r,T[r+256>>0]=38470*r,T[r+512>>0]=7471*r+32768,T[r+768>>0]=-11059*r,T[r+1024>>0]=-21709*r,T[r+1280>>0]=32768*r+8421375,T[r+1536>>0]=-27439*r,T[r+1792>>0]=-5329*r}(),D(r),(new Date).getTime()}()}r.exports=function(r,t){void 0===t&&(t=50);return{data:new e(t).encode(r,t),width:r.width,height:r.height}}}).call(this,e(0).Buffer)},function(r,t){function e(r){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===("undefined"==typeof window?"undefined":e(window))&&(n=window)}r.exports=n},function(r,t,e){"use strict";t.byteLength=function(r){var t=u(r),e=t[0],n=t[1];return 3*(e+n)/4-n},t.toByteArray=function(r){for(var t,e=u(r),n=e[0],a=e[1],f=new i(function(r,t,e){return 3*(t+e)/4-e}(0,n,a)),s=0,h=a>0?n-4:n,c=0;c<h;c+=4)t=o[r.charCodeAt(c)]<<18|o[r.charCodeAt(c+1)]<<12|o[r.charCodeAt(c+2)]<<6|o[r.charCodeAt(c+3)],f[s++]=t>>16&255,f[s++]=t>>8&255,f[s++]=255&t;2===a&&(t=o[r.charCodeAt(c)]<<2|o[r.charCodeAt(c+1)]>>4,f[s++]=255&t);1===a&&(t=o[r.charCodeAt(c)]<<10|o[r.charCodeAt(c+1)]<<4|o[r.charCodeAt(c+2)]>>2,f[s++]=t>>8&255,f[s++]=255&t);return f},t.fromByteArray=function(r){for(var t,e=r.length,o=e%3,i=[],a=0,f=e-o;a<f;a+=16383)i.push(h(r,a,a+16383>f?f:a+16383));1===o?(t=r[e-1],i.push(n[t>>2]+n[t<<4&63]+"==")):2===o&&(t=(r[e-2]<<8)+r[e-1],i.push(n[t>>10]+n[t>>4&63]+n[t<<2&63]+"="));return i.join("")};for(var n=[],o=[],i="undefined"!=typeof Uint8Array?Uint8Array:Array,a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f=0,s=a.length;f<s;++f)n[f]=a[f],o[a.charCodeAt(f)]=f;function u(r){var t=r.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var e=r.indexOf("=");return-1===e&&(e=t),[e,e===t?0:4-e%4]}function h(r,t,e){for(var o,i,a=[],f=t;f<e;f+=3)o=(r[f]<<16&16711680)+(r[f+1]<<8&65280)+(255&r[f+2]),a.push(n[(i=o)>>18&63]+n[i>>12&63]+n[i>>6&63]+n[63&i]);return a.join("")}o["-".charCodeAt(0)]=62,o["_".charCodeAt(0)]=63},function(r,t){t.read=function(r,t,e,n,o){var i,a,f=8*o-n-1,s=(1<<f)-1,u=s>>1,h=-7,c=e?o-1:0,l=e?-1:1,p=r[t+c];for(c+=l,i=p&(1<<-h)-1,p>>=-h,h+=f;h>0;i=256*i+r[t+c],c+=l,h-=8);for(a=i&(1<<-h)-1,i>>=-h,h+=n;h>0;a=256*a+r[t+c],c+=l,h-=8);if(0===i)i=1-u;else{if(i===s)return a?NaN:1/0*(p?-1:1);a+=Math.pow(2,n),i-=u}return(p?-1:1)*a*Math.pow(2,i-n)},t.write=function(r,t,e,n,o,i){var a,f,s,u=8*i-o-1,h=(1<<u)-1,c=h>>1,l=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:i-1,y=n?1:-1,g=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(f=isNaN(t)?1:0,a=h):(a=Math.floor(Math.log(t)/Math.LN2),t*(s=Math.pow(2,-a))<1&&(a--,s*=2),(t+=a+c>=1?l/s:l*Math.pow(2,1-c))*s>=2&&(a++,s/=2),a+c>=h?(f=0,a=h):a+c>=1?(f=(t*s-1)*Math.pow(2,o),a+=c):(f=t*Math.pow(2,c-1)*Math.pow(2,o),a=0));o>=8;r[e+p]=255&f,p+=y,f/=256,o-=8);for(a=a<<o|f,u+=o;u>0;r[e+p]=255&a,p+=y,a/=256,u-=8);r[e+p-y]|=128*g}},function(r,t){var e={}.toString;r.exports=Array.isArray||function(r){return"[object Array]"==e.call(r)}},function(r,t,e){(function(t){function e(r){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}var n=function(){"use strict";var r=new Int32Array([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63]);function t(){}function n(r,t){for(var e,n,o=0,i=[],a=16;a>0&&!r[a-1];)a--;i.push({children:[],index:0});var f,s=i[0];for(e=0;e<a;e++){for(n=0;n<r[e];n++){for((s=i.pop()).children[s.index]=t[o];s.index>0;)s=i.pop();for(s.index++,i.push(s);i.length<=e;)i.push(f={children:[],index:0}),s.children[s.index]=f.children,s=f;o++}e+1<a&&(i.push(f={children:[],index:0}),s.children[s.index]=f.children,s=f)}return i[0].children}function o(t,n,o,i,a,f,s,u,h){o.precision,o.samplesPerLine,o.scanLines;var c=o.mcusPerLine,l=o.progressive,p=(o.maxH,o.maxV,n),y=0,g=0;function d(){if(g>0)return g--,y>>g&1;if(255==(y=t[n++])){var r=t[n++];if(r)throw new Error("unexpected marker: "+(y<<8|r).toString(16))}return g=7,y>>>7}function v(r){for(var t,n=r;null!==(t=d());){if("number"==typeof(n=n[t]))return n;if("object"!==e(n))throw new Error("invalid huffman sequence")}return null}function w(r){for(var t=0;r>0;){var e=d();if(null===e)return;t=t<<1|e,r--}return t}function m(r){var t=w(r);return t>=1<<r-1?t:t+(-1<<r)+1}var b=0;var A,E=0;function T(r,t,e,n,o){var i=e%c,a=(e/c|0)*r.v+n,f=i*r.h+o;t(r,r.blocks[a][f])}function P(r,t,e){var n=e/r.blocksPerLine|0,o=e%r.blocksPerLine;t(r,r.blocks[n][o])}var _,R,S,U,B,Y,k=i.length;Y=l?0===f?0===u?function(r,t){var e=v(r.huffmanTableDC),n=0===e?0:m(e)<<h;t[0]=r.pred+=n}:function(r,t){t[0]|=d()<<h}:0===u?function(t,e){if(b>0)b--;else for(var n=f,o=s;n<=o;){var i=v(t.huffmanTableAC),a=15&i,u=i>>4;if(0!==a){e[r[n+=u]]=m(a)*(1<<h),n++}else{if(u<15){b=w(u)+(1<<u)-1;break}n+=16}}}:function(t,e){for(var n=f,o=s,i=0;n<=o;){var a=r[n],u=e[a]<0?-1:1;switch(E){case 0:var c=v(t.huffmanTableAC),l=15&c;i=c>>4;if(0===l)i<15?(b=w(i)+(1<<i),E=4):(i=16,E=1);else{if(1!==l)throw new Error("invalid ACn encoding");A=m(l),E=i?2:3}continue;case 1:case 2:e[a]?e[a]+=(d()<<h)*u:0===--i&&(E=2==E?3:0);break;case 3:e[a]?e[a]+=(d()<<h)*u:(e[a]=A<<h,E=0);break;case 4:e[a]&&(e[a]+=(d()<<h)*u)}n++}4===E&&0===--b&&(E=0)}:function(t,e){var n=v(t.huffmanTableDC),o=0===n?0:m(n);e[0]=t.pred+=o;for(var i=1;i<64;){var a=v(t.huffmanTableAC),f=15&a,s=a>>4;if(0!==f){e[r[i+=s]]=m(f),i++}else{if(s<15)break;i+=16}}};var I,x,C,L,M=0;for(x=1==k?i[0].blocksPerLine*i[0].blocksPerColumn:c*o.mcusPerColumn,a||(a=x);M<x;){for(R=0;R<k;R++)i[R].pred=0;if(b=0,1==k)for(_=i[0],B=0;B<a;B++)P(_,Y,M),M++;else for(B=0;B<a;B++){for(R=0;R<k;R++)for(C=(_=i[R]).h,L=_.v,S=0;S<L;S++)for(U=0;U<C;U++)T(_,Y,M,S,U);if(++M===x)break}if(g=0,(I=t[n]<<8|t[n+1])<65280)throw new Error("marker was not found");if(!(I>=65488&&I<=65495))break;n+=2}return n-p}function i(r,t){var e,n,o=[],i=t.blocksPerLine,a=t.blocksPerColumn,f=i<<3,s=new Int32Array(64),u=new Uint8Array(64);function h(r,e,n){var o,i,a,f,s,u,h,c,l,p,y=t.quantizationTable,g=n;for(p=0;p<64;p++)g[p]=r[p]*y[p];for(p=0;p<8;++p){var d=8*p;0!=g[1+d]||0!=g[2+d]||0!=g[3+d]||0!=g[4+d]||0!=g[5+d]||0!=g[6+d]||0!=g[7+d]?(o=5793*g[0+d]+128>>8,i=5793*g[4+d]+128>>8,a=g[2+d],f=g[6+d],s=2896*(g[1+d]-g[7+d])+128>>8,c=2896*(g[1+d]+g[7+d])+128>>8,u=g[3+d]<<4,l=o-i+1>>1,o=o+i+1>>1,i=l,l=3784*a+1567*f+128>>8,a=1567*a-3784*f+128>>8,f=l,l=s-(h=g[5+d]<<4)+1>>1,s=s+h+1>>1,h=l,l=c+u+1>>1,u=c-u+1>>1,c=l,l=o-f+1>>1,o=o+f+1>>1,f=l,l=i-a+1>>1,i=i+a+1>>1,a=l,l=2276*s+3406*c+2048>>12,s=3406*s-2276*c+2048>>12,c=l,l=799*u+4017*h+2048>>12,u=4017*u-799*h+2048>>12,h=l,g[0+d]=o+c,g[7+d]=o-c,g[1+d]=i+h,g[6+d]=i-h,g[2+d]=a+u,g[5+d]=a-u,g[3+d]=f+s,g[4+d]=f-s):(l=5793*g[0+d]+512>>10,g[0+d]=l,g[1+d]=l,g[2+d]=l,g[3+d]=l,g[4+d]=l,g[5+d]=l,g[6+d]=l,g[7+d]=l)}for(p=0;p<8;++p){var v=p;0!=g[8+v]||0!=g[16+v]||0!=g[24+v]||0!=g[32+v]||0!=g[40+v]||0!=g[48+v]||0!=g[56+v]?(o=5793*g[0+v]+2048>>12,i=5793*g[32+v]+2048>>12,a=g[16+v],f=g[48+v],s=2896*(g[8+v]-g[56+v])+2048>>12,c=2896*(g[8+v]+g[56+v])+2048>>12,u=g[24+v],l=o-i+1>>1,o=o+i+1>>1,i=l,l=3784*a+1567*f+2048>>12,a=1567*a-3784*f+2048>>12,f=l,l=s-(h=g[40+v])+1>>1,s=s+h+1>>1,h=l,l=c+u+1>>1,u=c-u+1>>1,c=l,l=o-f+1>>1,o=o+f+1>>1,f=l,l=i-a+1>>1,i=i+a+1>>1,a=l,l=2276*s+3406*c+2048>>12,s=3406*s-2276*c+2048>>12,c=l,l=799*u+4017*h+2048>>12,u=4017*u-799*h+2048>>12,h=l,g[0+v]=o+c,g[56+v]=o-c,g[8+v]=i+h,g[48+v]=i-h,g[16+v]=a+u,g[40+v]=a-u,g[24+v]=f+s,g[32+v]=f-s):(l=5793*n[p+0]+8192>>14,g[0+v]=l,g[8+v]=l,g[16+v]=l,g[24+v]=l,g[32+v]=l,g[40+v]=l,g[48+v]=l,g[56+v]=l)}for(p=0;p<64;++p){var w=128+(g[p]+8>>4);e[p]=w<0?0:w>255?255:w}}for(var c=0;c<a;c++){var l=c<<3;for(e=0;e<8;e++)o.push(new Uint8Array(f));for(var p=0;p<i;p++){h(t.blocks[c][p],u,s);var y=0,g=p<<3;for(n=0;n<8;n++){var d=o[l+n];for(e=0;e<8;e++)d[g+e]=u[y++]}}}return o}function a(r){return r<0?0:r>255?255:r}return t.prototype={load:function(r){var t=new XMLHttpRequest;t.open("GET",r,!0),t.responseType="arraybuffer",t.onload=function(){var r=new Uint8Array(t.response||t.mozResponseArrayBuffer);this.parse(r),this.onload&&this.onload()}.bind(this),t.send(null)},parse:function(t){var e=0;t.length;function a(){var r=t[e]<<8|t[e+1];return e+=2,r}function f(){var r=a(),n=t.subarray(e,e+r-2);return e+=n.length,n}function s(r){var t,e,n=0,o=0;for(e in r.components)r.components.hasOwnProperty(e)&&(n<(t=r.components[e]).h&&(n=t.h),o<t.v&&(o=t.v));var i=Math.ceil(r.samplesPerLine/8/n),a=Math.ceil(r.scanLines/8/o);for(e in r.components)if(r.components.hasOwnProperty(e)){t=r.components[e];for(var f=Math.ceil(Math.ceil(r.samplesPerLine/8)*t.h/n),s=Math.ceil(Math.ceil(r.scanLines/8)*t.v/o),u=i*t.h,h=a*t.v,c=[],l=0;l<h;l++){for(var p=[],y=0;y<u;y++)p.push(new Int32Array(64));c.push(p)}t.blocksPerLine=f,t.blocksPerColumn=s,t.blocks=c}r.maxH=n,r.maxV=o,r.mcusPerLine=i,r.mcusPerColumn=a}var u,h,c=null,l=null,p=[],y=[],g=[],d=[],v=a();if(65496!=v)throw new Error("SOI not found");for(v=a();65497!=v;){switch(v){case 65280:break;case 65504:case 65505:case 65506:case 65507:case 65508:case 65509:case 65510:case 65511:case 65512:case 65513:case 65514:case 65515:case 65516:case 65517:case 65518:case 65519:case 65534:var w=f();65504===v&&74===w[0]&&70===w[1]&&73===w[2]&&70===w[3]&&0===w[4]&&(c={version:{major:w[5],minor:w[6]},densityUnits:w[7],xDensity:w[8]<<8|w[9],yDensity:w[10]<<8|w[11],thumbWidth:w[12],thumbHeight:w[13],thumbData:w.subarray(14,14+3*w[12]*w[13])}),65518===v&&65===w[0]&&100===w[1]&&111===w[2]&&98===w[3]&&101===w[4]&&0===w[5]&&(l={version:w[6],flags0:w[7]<<8|w[8],flags1:w[9]<<8|w[10],transformCode:w[11]});break;case 65499:for(var m=a()+e-2;e<m;){var b=t[e++],A=new Int32Array(64);if(b>>4==0)for(N=0;N<64;N++){A[r[N]]=t[e++]}else{if(b>>4!=1)throw new Error("DQT: invalid table spec");for(N=0;N<64;N++){A[r[N]]=a()}}p[15&b]=A}break;case 65472:case 65473:case 65474:a(),(u={}).extended=65473===v,u.progressive=65474===v,u.precision=t[e++],u.scanLines=a(),u.samplesPerLine=a(),u.components={},u.componentsOrder=[];var E,T=t[e++];for(X=0;X<T;X++){E=t[e];var P=t[e+1]>>4,_=15&t[e+1],R=t[e+2];u.componentsOrder.push(E),u.components[E]={h:P,v:_,quantizationIdx:R},e+=3}s(u),y.push(u);break;case 65476:var S=a();for(X=2;X<S;){var U=t[e++],B=new Uint8Array(16),Y=0;for(N=0;N<16;N++,e++)Y+=B[N]=t[e];var k=new Uint8Array(Y);for(N=0;N<Y;N++,e++)k[N]=t[e];X+=17+Y,(U>>4==0?d:g)[15&U]=n(B,k)}break;case 65501:a(),h=a();break;case 65498:a();var I=t[e++],x=[];for(X=0;X<I;X++){z=u.components[t[e++]];var C=t[e++];z.huffmanTableDC=d[C>>4],z.huffmanTableAC=g[15&C],x.push(z)}var L=t[e++],M=t[e++],O=t[e++],D=o(t,e,u,x,h,L,M,O>>4,15&O);e+=D;break;case 65535:255!==t[e]&&e--;break;default:if(255==t[e-3]&&t[e-2]>=192&&t[e-2]<=254){e-=3;break}throw new Error("unknown JPEG marker "+v.toString(16))}v=a()}if(1!=y.length)throw new Error("only single frame JPEGs supported");for(var X=0;X<y.length;X++){var j=y[X].components;for(var N in j)j[N].quantizationTable=p[j[N].quantizationIdx],delete j[N].quantizationIdx}this.width=u.samplesPerLine,this.height=u.scanLines,this.jfif=c,this.adobe=l,this.components=[];for(X=0;X<u.componentsOrder.length;X++){var z=u.components[u.componentsOrder[X]];this.components.push({lines:i(0,z),scaleX:z.h/u.maxH,scaleY:z.v/u.maxV})}},getData:function(r,t){var e,n,o,i,f,s,u,h,c,l,p,y,g,d,v,w,m,b,A,E,T,P=this.width/r,_=this.height/t,R=0,S=r*t*this.components.length,U=new Uint8Array(S);switch(this.components.length){case 1:for(e=this.components[0],l=0;l<t;l++)for(f=e.lines[0|l*e.scaleY*_],c=0;c<r;c++)p=f[0|c*e.scaleX*P],U[R++]=p;break;case 2:for(e=this.components[0],n=this.components[1],l=0;l<t;l++)for(f=e.lines[0|l*e.scaleY*_],s=n.lines[0|l*n.scaleY*_],c=0;c<r;c++)p=f[0|c*e.scaleX*P],U[R++]=p,p=s[0|c*n.scaleX*P],U[R++]=p;break;case 3:for(T=!0,this.adobe&&this.adobe.transformCode?T=!0:void 0!==this.colorTransform&&(T=!!this.colorTransform),e=this.components[0],n=this.components[1],o=this.components[2],l=0;l<t;l++)for(f=e.lines[0|l*e.scaleY*_],s=n.lines[0|l*n.scaleY*_],u=o.lines[0|l*o.scaleY*_],c=0;c<r;c++)T?(p=f[0|c*e.scaleX*P],y=s[0|c*n.scaleX*P],b=a(p+1.402*((g=u[0|c*o.scaleX*P])-128)),A=a(p-.3441363*(y-128)-.71413636*(g-128)),E=a(p+1.772*(y-128))):(b=f[0|c*e.scaleX*P],A=s[0|c*n.scaleX*P],E=u[0|c*o.scaleX*P]),U[R++]=b,U[R++]=A,U[R++]=E;break;case 4:if(!this.adobe)throw new Error("Unsupported color mode (4 components)");for(T=!1,this.adobe&&this.adobe.transformCode?T=!0:void 0!==this.colorTransform&&(T=!!this.colorTransform),e=this.components[0],n=this.components[1],o=this.components[2],i=this.components[3],l=0;l<t;l++)for(f=e.lines[0|l*e.scaleY*_],s=n.lines[0|l*n.scaleY*_],u=o.lines[0|l*o.scaleY*_],h=i.lines[0|l*i.scaleY*_],c=0;c<r;c++)T?(p=f[0|c*e.scaleX*P],y=s[0|c*n.scaleX*P],g=u[0|c*o.scaleX*P],d=h[0|c*i.scaleX*P],v=255-a(p+1.402*(g-128)),w=255-a(p-.3441363*(y-128)-.71413636*(g-128)),m=255-a(p+1.772*(y-128))):(v=f[0|c*e.scaleX*P],w=s[0|c*n.scaleX*P],m=u[0|c*o.scaleX*P],d=h[0|c*i.scaleX*P]),U[R++]=255-v,U[R++]=255-w,U[R++]=255-m,U[R++]=255-d;break;default:throw new Error("Unsupported color mode")}return U},copyToImageData:function(r){var t,e,n,o,i,f,s,u,h,c=r.width,l=r.height,p=r.data,y=this.getData(c,l),g=0,d=0;switch(this.components.length){case 1:for(e=0;e<l;e++)for(t=0;t<c;t++)n=y[g++],p[d++]=n,p[d++]=n,p[d++]=n,p[d++]=255;break;case 3:for(e=0;e<l;e++)for(t=0;t<c;t++)s=y[g++],u=y[g++],h=y[g++],p[d++]=s,p[d++]=u,p[d++]=h,p[d++]=255;break;case 4:for(e=0;e<l;e++)for(t=0;t<c;t++)i=y[g++],f=y[g++],n=y[g++],s=255-a(i*(1-(o=y[g++])/255)+o),u=255-a(f*(1-o/255)+o),h=255-a(n*(1-o/255)+o),p[d++]=s,p[d++]=u,p[d++]=h,p[d++]=255;break;default:throw new Error("Unsupported color mode")}}},t}();r.exports=function(r,o){var i={useTArray:!1,colorTransform:!0};o?"object"===e(o)?o={useTArray:void 0===o.useTArray?i.useTArray:o.useTArray,colorTransform:void 0===o.colorTransform?i.colorTransform:o.colorTransform}:(o=i).useTArray=!0:o=i;var a=new Uint8Array(r),f=new n;f.parse(a),f.colorTransform=o.colorTransform;var s={width:f.width,height:f.height,data:o.useTArray?new Uint8Array(f.width*f.height*4):new t(f.width*f.height*4)};return f.copyToImageData(s),s}}).call(this,e(0).Buffer)}]);', null)
            }
        }
    }
]);