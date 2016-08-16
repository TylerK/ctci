!function(t, e) {
    e(t)
}(this, function(t) {
    function e() {
        this.extend = function(t) {
            _.merge(this, t)
        }
    }
    return t.app = t.app || new e
}),
!function(t, e) {
    e(t)
}(this, function(t) {
    function e() {
        this.extend = function(t) {
            _.merge(this, t)
        }
    }
    return t.overwatch = t.overwatch instanceof e ? t.overwatch : new e
}),
!function(t, e) {
    e(t, t.overwatch)
}(this, function(t, e) {
    function n() {
        var e = this
          , n = t.document
          , i = t.document.body;
        this.width = function() {
            return t.innerWidth || n.documentElement.clientWidth || i.clientWidth
        }
        ,
        this.height = function() {
            return t.innerHeight || n.documentElement.clientHeight || i.clientHeight
        }
        ,
        this.sizes = function() {
            var t = e.width();
            return {
                xs: 400 > t,
                sm: t >= 400 && 768 > t,
                md: t >= 768 && 992 > t,
                lg: t >= 992 && 1300 > t,
                xl: t >= 1300 && 1600 > t,
                xxl: t >= 1600
            }
        }
        ,
        this.mobile = function() {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobi/i.test(window.navigator.userAgent)
        }
        ,
        this.touch = function() {
            return "ontouchstart"in window || window.navigator.MaxTouchPoints > 0 || window.navigator.msMaxTouchPoints > 0
        }
        ,
        this.vendor = function() {
            var t = null
              , e = n.documentElement.style;
            return _.each(["webkit", "Moz", "ms", "O"], function(n, i) {
                void 0 !== e[n + "Transform"] && (t = n)
            }),
            t
        }
        ,
        this.size = function() {
            var t = null ;
            return _.each(e.sizes(), function(e, n) {
                e && (t = n)
            }),
            t
        }
        ,
        this.ie = function() {
            var e = t.navigator.userAgent
              , n = /MSIE \d/.test(e)
              , i = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.test(e);
            return n || i
        }
        ,
        this.browser = function() {
            var n = t.navigator.userAgent
              , i = t.navigator.vendor
              , o = /gecko\/\d/i.test(n)
              , a = /Chrome\//.test(n)
              , r = /Apple Computer/.test(i)
              , s = /Edge/.test(n);
            return {
                ie: e.ie(),
                gecko: o,
                chrome: a,
                safari: r,
                edge: s
            }
        }
        ,
        this.posX = function() {
            return t.pageXOffset || t.scrollX || i.scrollLeft || n.documentElement.scrollLeft
        }
        ,
        this.posY = function() {
            return t.pageYOffset || t.scrollY || i.scrollTop || n.documentElement.scrollTop
        }
        ,
        this.scroll = function() {
            return i.scrollHeight > i.clientHeight && "fixed" !== i.style.position
        }
        ,
        this.vw = function(t) {
            return e.width() / 100 * t
        }
        ,
        this.vh = function(t) {
            return e.height() / 100 * t
        }
    }
    return e.extend({
        util: new n
    }),
    e.util
}),
!function(t, e) {
    e(t.overwatch, t.localStorage)
}(this, function(t, e) {
    function n() {
        this.available = function() {
            return !!e
        }
        ,
        this.set = function(t, n) {
            e.setItem(t, JSON.stringify(n))
        }
        ,
        this.get = function(t) {
            return JSON.parse(e.getItem(t))
        }
        ,
        this.remove = function(t) {
            e.removeItem(t)
        }
        ,
        this.clear = function() {
            e.clear()
        }
    }
    return t.extend({
        storage: new n
    }),
    t.storage
}),
!function(t, e) {
    e(t, t.overwatch)
}(this, function(t, e) {
    function n() {
        function n() {
            u.on("click.blackout", function(t) {
                t.stopPropagation(),
                a.hide()
            })
        }
        function i() {
            s || (s = 1,
            u.trigger("show"),
            u.toggleClass("open", !0),
            n(),
            r = l.scrollTop(),
            c.css({
                position: "fixed",
                marginTop: -r + "px"
            }))
        }
        function o() {
            s && (s = 0,
            u.trigger("hide"),
            u.toggleClass("open", !1),
            c.css({
                position: "",
                marginTop: ""
            }),
            l.scrollTop(r),
            u.off("click.blackout"),
            r = 0)
        }
        var a = this
          , r = (e.util,
        0)
          , s = 0
          , l = $(t)
          , c = $("body")
          , u = $('<div class="blackout" blackout />').appendTo(c);
        this.show = i,
        this.hide = o,
        this.open = i,
        this.close = o,
        this.on = function() {
            u.on.apply(u, arguments)
        }
        ,
        this.off = function() {
            u.off.apply(u, arguments)
        }
        ,
        this.one = function() {
            u.one.apply(u, arguments)
        }
    }
    return e.extend({
        blackout: new n
    }),
    e.blackout
}),
!function(t, e) {
    e(t, t.overwatch)
}(this, function(t, e) {
    function n() {
        function e() {
            h.one("click.lightbox", function(t) {
                t.stopPropagation(),
                l.hide(),
                h.trigger("lightbox.background")
            }),
            y.one("click.lightbox", function(t) {
                t.stopPropagation(),
                l.hide(),
                h.trigger("lightbox.x")
            }),
            f.on("click.lightbox", function(t) {
                t.stopPropagation()
            }),
            u.on("keyup.lightbox", function(t) {
                var e = t.which;
                /37|39|32|27/.test(e) && t.preventDefault(),
                27 == e ? (l.hide(),
                h.trigger("key.esc")) : 37 == e ? h.trigger("prev") : 39 == e ? h.trigger("next") : 32 == e && h.trigger("pause")
            })
        }
        function n(t, e) {
            var t = _.isPlainObject(t) ? t : {}
              , e = _.isFunction(t) ? t : _.isFunction(e) ? e : _.noop;
            $(t.content || null );
            if ("fluid" === t.size ? h.toggleClass("fluid", !0) : h.toggleClass("fluid", !1),
            t.controls ? d.toggleClass("m-controls", !0) : d.toggleClass("m-controls", !1),
            t.body) {
                var n = $(t.body);
                n.length || (n = $("<div>", {
                    html: t.body
                })),
                v.remove(),
                v = n.addClass("lightbox-content").appendTo(d)
            }
            t.header && p.html(t.header),
            t.footer && w.html(t.footer),
            e()
        }
        function o() {
            c || (c = 1,
            i.show(),
            e(),
            h.toggleClass("open", !0),
            h.trigger("show")),
            n.apply(null , arguments)
        }
        function a() {
            c && (c = 0,
            i.hide(),
            u.off("keyup.lightbox"),
            h.toggleClass("open", !1),
            h.trigger("hide"),
            f.off("click.lightbox"))
        }
        function r() {
            v.remove(),
            v = $("<div>"),
            p.empty(),
            w.empty()
        }
        function s() {
            m.on("click.lightbox", function(t) {
                t.preventDefault(),
                h.trigger("prev")
            }),
            g.on("click.lightbox", function(t) {
                t.preventDefault(),
                h.trigger("next")
            })
        }
        var l = this
          , c = 0
          , u = $(t)
          , d = $("body")
          , h = $('<div class="lightbox" lightbox="main"></div>').appendTo(d)
          , f = $('<div class="lightbox-container"></div>').appendTo(h)
          , p = $('<div class="lightbox-header"></div>').appendTo(f)
          , d = $('<div class="lightbox-body"></div>').appendTo(f)
          , v = $('<div class="lightbox-content"></div>').appendTo(d)
          , m = $('<a href="#" class="lightbox-prev"></a>').appendTo(d)
          , g = $('<a href="#" class="lightbox-next"></a>').appendTo(d)
          , w = $('<div class="lightbox-footer"></div>').appendTo(f)
          , y = $('<div class="lightbox-close"></div>').appendTo(h);
        this.set = n,
        this.show = o,
        this.hide = a,
        this.open = o,
        this.close = a,
        this.empty = r,
        this.on = function() {
            h.on.apply(h, arguments)
        }
        ,
        this.off = function() {
            h.off.apply(h, arguments)
        }
        ,
        this.one = function() {
            h.one.apply(h, arguments)
        }
        ,
        s()
    }
    var i = e.blackout;
    return e.extend({
        lightbox: new n
    }),
    e.lightbox
}),
!function(t, e) {
    e(t, t.overwatch)
}(this, function(t, e) {
    function n() {
        for (var t = 0; t < p.length; t++)
            p[t]();
        p = []
    }
    function i() {
        for (var t = 0; t < v.length; t++)
            v[t]();
        v = []
    }
    function o() {
        if (!d && !h && !f) {
            h = 1;
            var t = $("<script>", {
                attr: {
                    async: !0,
                    src: m,
                    type: "text/javascript"
                }
            })[0];
            t.onerror = function() {
                d = 0,
                f = 1,
                i()
            }
            ,
            window.onYouTubeIframeAPIReady = function() {
                d = 1,
                h = 0,
                n()
            }
            ,
            document.body.appendChild(t)
        }
    }
    function a(t, e) {
        var e = e || _.noop
          , t = t || _.noop;
        f ? e() : d ? t() : h ? (p.push(t),
        v.push(e)) : (p.push(t),
        v.push(e),
        o())
    }
    function r(t, e) {
        function n() {
            d.toggleClass(h, !1),
            o.player.stopVideo && o.player.stopVideo(),
            o.player.clearVideo && o.player.clearVideo(),
            o.player.destroy && o.player.destroy(),
            o.player = null ,
            o.$root.empty(),
            u[r] = null
        }
        function i() {
            var n = l.browser();
            d.toggleClass("loading", !0),
            d.toggleClass("unstarted", !0),
            d.toggleClass("m-mobile", l.mobile()),
            d.toggleClass("m-touch", l.touch()),
            d.toggleClass("m-edge", n.edge),
            d.toggleClass("m-ie", n.ie),
            d.toggleClass("m-chrome", n.chrome),
            d.toggleClass("m-safari", n.safari),
            d.toggleClass("m-gecko", n.gecko),
            _.each(t.build, function(e, n) {
                e && d.append(s[n] = t.templates[n].call(o))
            }),
            a(function() {
                o.player = new YT.Player(s.$video[0],{
                    events: {
                        onReady: function(t) {
                            o.loaded = 1,
                            o.loading = 0,
                            d.toggleClass("loading", !1),
                            d.trigger("ready"),
                            e(o)
                        },
                        onStateChange: function(e) {
                            var n = t.states[e.data];
                            h && d.toggleClass(h, !1),
                            d.toggleClass(n, !0),
                            d.trigger("stateChange", n),
                            o.state = h = n
                        }
                    }
                })
            }),
            s.$video.on("load", function() {
                d.toggleClass("loading", !1)
            }),
            u[r] = o
        }
        var o = this
          , e = e || _.noop
          , t = _.merge({}, w, t)
          , r = c++
          , s = {}
          , d = $(t.elem)
          , h = null ;
        this.id = t.id,
        this.loaded = 0,
        this.loading = 1,
        this.state = h,
        this.uid = r,
        this.opts = t,
        this.$root = d,
        this.destroy = n,
        this.elems = s,
        this.on = function() {
            d.on.apply(d, arguments)
        }
        ,
        this.off = function() {
            d.off.apply(d, arguments)
        }
        ,
        this.one = function() {
            d.one.apply(d, arguments)
        }
        ,
        i()
    }
    function s() {
        function t(t, e) {
            return new r(t,e)
        }
        function e(t) {
            return t.destroy ? t.destroy() : void 0
        }
        function n(e) {
            $("[video]").each(function() {
                t({
                    elem: this,
                    id: $(this).attr("video")
                }, e)
            })
        }
        function i(t) {
            return u[t]
        }
        function o(t) {
            return _.merge(w, t)
        }
        function a() {}
        this.create = t,
        this.destroy = e,
        this.createAll = n,
        this.get = i,
        this.set = o,
        a()
    }
    var l = e.util
      , c = (e.lightbox,
    0)
      , u = {}
      , d = 0
      , h = 0
      , f = 0
      , p = []
      , v = []
      , m = "//www.youtube.com/iframe_api/"
      , g = "//www.youtube.com/embed/"
      , w = {
        id: null ,
        states: {
            "-1": "unstarted",
            0: "ended",
            1: "playing",
            2: "paused",
            3: "buffering",
            5: "video-cued"
        },
        params: {
            autoplay: 1,
            autohide: 1,
            controls: 1,
            modestbranding: 1,
            showinfo: 1,
            version: 3,
            enablejsapi: 1,
            wmode: "transparent",
            rel: 0
        },
        build: {
            $play: !0,
            $poster: !0,
            $video: !0
        },
        templates: {
            $play: function() {
                var t = this
                  , e = $("<div>", {
                    addClass: "play",
                    on: {
                        click: function() {
                            t.loaded ? t.player.playVideo() : t.one("ready", function() {
                                t.player.playVideo()
                            })
                        }
                    }
                });
                return e
            },
            $poster: function() {
                return $('<div class="poster">')
            },
            $video: function() {
                var t = this
                  , e = $("<iframe>", {
                    addClass: "video",
                    attr: {
                        width: "100%",
                        height: "100%",
                        allowfullscreen: !0,
                        frameborder: 0,
                        src: g + t.id + "?" + $.param(t.opts.params)
                    }
                });
                return e
            }
        }
    };
    return a(),
    e.extend({
        video: new s
    }),
    e.video
}),
!function(t, e) {
    "function" == typeof define && define.amd ? define("overwatch-ability-showcase", ["overwatch", "jQuery"], e) : "object" == typeof exports ? module.exports = e(require("overwatch", "jQuery")) : t.overwatch.AbilityShowcase = e(t.overwatch, t.jQuery)
}(this, function(t, e) {
    function n(t) {
        var n = e(t);
        this.$videos = n.find("video"),
        this.videos = this.$videos.get(),
        this.$abilityName = n.find(a),
        this.$abilityButtons = n.find(r),
        this.$abilityButtonsList = n.find(s),
        this.$currentProgressSvg = null ,
        this.currentVideo = null ,
        this.abilities = o(this.$abilityButtons),
        this.length = this.videos.length,
        this.currentIndex = 0,
        this.nextIndex = null
    }
    function i(t) {
        return t.currentTime / t.duration
    }
    function o(t) {
        return e.map(t, function(t) {
            var n = e(t);
            return {
                name: n.data("ability-name")
            }
        })
    }
    var a = ".ability-name"
      , r = ".ability-showcase-button"
      , s = ".ability-button-list"
      , l = ".progress-svg"
      , c = "is-active";
    return n.prototype.init = function() {
        var t = this;
        t.$videos.on("ended", function() {
            t.play(t.getNextIndex())
        }),
        t.$videos.on("playing", function() {
            var e = 1e3 * t.currentVideo.duration;
            t.$currentProgressSvg.velocity({
                strokeDashoffset: [0, 314]
            }, e, "linear")
        }),
        t.$videos.on("timeupdate", function() {
            if (null === t.nextIndex) {
                var e = i(this);
                e > .5 && t.queue(t.getNextIndex())
            }
        }),
        t.$abilityButtonsList.on("click", "li", function() {
            var n = e(this).index();
            t.play(n)
        }),
        t.load(t.currentIndex),
        t.play(t.currentIndex)
    }
    ,
    n.prototype.getNextIndex = function() {
        return null !== this.nextIndex ? this.nextIndex : this.currentIndex + 1
    }
    ,
    n.prototype.displayPlay = function(t) {
        t %= this.length;
        var e = this.abilities[t];
        this.$abilityName.text(e.name),
        this.$abilityButtons.eq(t).addClass(c),
        this.$videos.eq(t).addClass(c),
        this.currentVideo = this.videos[t],
        this.$currentProgressSvg = this.$abilityButtons.eq(t).find(l)
    }
    ,
    n.prototype.displayStop = function(t) {
        t %= this.length,
        this.$abilityButtons.eq(t).removeClass(c),
        this.$videos.eq(t).removeClass(c),
        this.$abilityButtons.eq(t).find(l).velocity("stop").velocity({
            strokeDashoffset: 314
        }, 0)
    }
    ,
    n.prototype.play = function(t) {
        this.stop(this.currentIndex),
        this.currentIndex = void 0 === t ? this.currentIndex : t % this.length,
        this.reset(this.currentIndex),
        this._play(this.currentIndex),
        this.nextIndex = null
    }
    ,
    n.prototype.stop = function(t) {
        return void 0 === t ? void this._stopAll() : (t %= this.length,
        this.videos[t].pause(),
        void this.displayStop(t))
    }
    ,
    n.prototype.reset = function(t) {
        t %= this.length,
        4 === this.videos[t].readyState && (this.videos[t].currentTime = 0)
    }
    ,
    n.prototype.queue = function(t) {
        null === this.nextIndex && (t %= this.length,
        this.nextIndex = t,
        this.load(t))
    }
    ,
    n.prototype.load = function(t) {
        t %= this.length,
        this.videos[t].load()
    }
    ,
    n.prototype._play = function(t) {
        t %= this.length,
        this.videos[t].play(),
        this.displayPlay(t)
    }
    ,
    n.prototype._stopAll = function() {
        for (var t = 0; t < this.length; t++)
            this.stop(t)
    }
    ,
    t.extend({
        AbilityShowcase: n
    }),
    n
}),
!function(t, e) {
    e(t.overwatch)
}(this, function(t) {
    function e() {
        function t(t, e) {
            var e = _.merge({
                duration: 300,
                easing: "easeOutCirc"
            }, e);
            t.velocity({
                translateX: ["+=100%", "-100%"],
                translateZ: 0
            }, e)
        }
        function e(t, e) {
            var e = _.merge({
                duration: 300,
                easing: "easeOutCirc"
            }, e);
            t.velocity({
                translateX: ["-=100%", 0],
                translateZ: 0
            }, e)
        }
        this.slideInLeft = t,
        this.slideOutLeft = e
    }
    return t.extend({
        animate: new e
    }),
    t.animate
}),
function(t) {
    var e = t.$;
    e(".js-button-group").on("click", ".button", function(t) {
        e(this).siblings().removeClass("is-active"),
        e(this).addClass("is-active")
    })
}(window),
!function(t, e) {
    e(t, t.jQuery, t.overwatch)
}(this, function(t, e, n) {
    var i = {
        defaults: {
            numToShow: 1,
            numToSlide: 1,
            animationDuration: 500,
            autoScroll: !1,
            timePerSlide: 5e3,
            loop: !0,
            pagination: !0,
            slideWidth: 0,
            gutter: 12
        },
        item_width: 0,
        klass: "carousel",
        mask_klass: "carousel-mask",
        wrapper_klass: "carousel-wrapper",
        slide_klass: "carouse-slide",
        pagination_klass: "carousel-pagination",
        page_klass: "carousel-page",
        init: function(t, e) {
            this.options = _.merge({}, this.defaults, e);
            var e = this.options;
            this.element = t,
            this.setup(),
            this.calculateDimensions(),
            this.addElements(),
            this.setupEvents(),
            e.autoScroll && this.startSliding()
        },
        setup: function() {
            var t = this.options;
            this.element.addClass(this.klass),
            this.defineObjects(),
            t.pagination && (this.pagination = this.buildPagination()),
            t.slideWidth && (this.item_width = t.slideWidth)
        },
        defineObjects: function() {
            var t = this.options;
            this.wrapper = this.element.children("ul").addClass(this.wrapper_klass),
            this.items = this.wrapper.children("li"),
            this.pages = Math.ceil(this.items.length / t.numToSlide),
            this.mask = e("<div/>").addClass(this.mask_klass),
            this.duration = t.animationDuration
        },
        buildPagination: function() {
            for (var t = this.options, n = 1, i = e("<ul/>").attr("class", this.pagination_klass), o = ""; n <= this.pages - (t.numToShow - t.numToSlide); )
                o += '<li class="' + this.page_klass,
                1 === n && (o += " is-active"),
                o += '" data-page="' + n + '"',
                o += ">&nbsp</li>",
                n++;
            return i.html(o),
            i
        },
        calculateDimensions: function() {
            var t = this.options
              , e = this;
            this.items.addClass(e.slide_klass),
            1 === t.numToShow ? this.items.css("margin", 0) : this.items.css("margin", "0 " + t.gutter + "px"),
            0 === this.item_width && (this.item_width = this.items.first().outerWidth(!0)),
            this.maxHeight = this.items.first().outerHeight(!0),
            this.mask.css({
                width: this.item_width * t.numToShow,
                height: this.maxHeight
            }),
            this.wrapper.css("width", this.item_width * this.items.length)
        },
        addElements: function() {
            var t = this.options;
            this.mask = this.wrapper.wrap(this.mask).parent(),
            t.pagination && this.element.append(this.pagination)
        },
        setupEvents: function() {
            this.element.on("click", "." + this.page_klass, {
                self: this
            }, this.pageHandler)
        },
        pageHandler: function(t) {
            var n = t.data.self
              , i = e(this);
            n.options;
            t.preventDefault(),
            n.gotoPage = i.data("page"),
            n.slide()
        },
        slide: function(t, e) {
            var n = this;
            this.stopSliding(),
            t && "number" == typeof t && (this.gotoPage = t),
            "number" == typeof e && (this.duration = e),
            this.slideAmount = this.getSlideAmount(),
            this.wrapper.velocity({
                left: this.slideAmount
            }, this.duration, function() {
                n.callback()
            })
        },
        callback: function() {
            var t = this.options;
            if (t.pagination) {
                var n = this.pagination.find("li");
                n.removeClass("is-active");
                var i = n.get(this.gotoPage - 1);
                e(i).addClass("is-active")
            }
            this.duration = t.animationDuration
        },
        getSlideAmount: function() {
            var t = this.options;
            return -(this.item_width * t.numToSlide * (this.gotoPage - 1))
        },
        startSliding: function(t) {
            var e = this
              , n = e.options;
            t && "number" == typeof t && (n.timePerSlide = t),
            this.interval = setInterval(function() {
                e.gotoPage++,
                e.slide()
            }, n.timePerSlide)
        },
        stopSliding: function() {
            clearInterval(this.interval)
        }
    };
    n.extend({
        carousel: i
    })
}),
function() {
    $.fn.dropdown = function() {
        var t, e, n, i, o, a = this;
        i = $(a),
        t = $("<div />", {
            "class": "dropdown",
            style: "width:" + i.outerWidth() + "px"
        }),
        o = i.attr("class") ? i.attr("class").replace("dropdown_original", "") : "",
        t.addClass(o),
        t = i.wrap(t).parent(),
        n = $("option:selected", a).text(),
        e = $("<span />", {
            "class": "dropdown_styled",
            text: n
        }).prependTo(t),
        i.addClass("dropdown_original"),
        i.on("change", function() {
            n = $("option:selected", a).text(),
            e.text(n)
        });
        var r = function() {
            t.css("width", "auto"),
            setTimeout(function() {
                t.css("width", i.outerWidth())
            }, 100)
        }
        ;
        return {
            updateWidth: r
        }
    }
}(jQuery),
!function(t, e) {
    e(t, t.overwatch)
}(this, function(t, e) {
    function n(t) {
        return t.gallery ? [$("<h1>", {
            addClass: "gallery-title",
            html: t.data.categoryName
        }), $("<p>", {
            addClass: "gallery-index",
            html: t.index + 1 + " / " + t.gallery.length
        })] : void 0
    }
    function i(t) {
        return "wallpaper" == t.type ? $("<div>", {
            addClass: "gallery-sub-content row m-" + t.type,
            html: function() {
                var e = [];
                return _.each(t.data.content.wallpaper, function(t, n) {
                    e.push($("<a>", {
                        addClass: "column xs-6 md-4 lg-2 wallpaper-icon m-" + n.toLowerCase(),
                        attr: {
                            href: t,
                            target: "_blank"
                        },
                        html: [$("<span>", {
                            html: u.wallpaper[n].title
                        }), $("<span>", {
                            html: u.wallpaper[n].dimensions
                        })]
                    }))
                }),
                e
            }()
        }) : $("<p>", {
            addClass: "gallery-name",
            html: t.data.name
        })
    }
    function o(e) {
        function o() {
            if ("video_youtube" == f) {
                var e = $("<div video>");
                u.video = c.create({
                    elem: e,
                    id: p.youtubeId
                }, function(t) {
                    t.player.playVideo()
                }),
                l.set({
                    body: e,
                    header: n(u),
                    footer: i(u),
                    controls: u.gallery.length > 1
                })
            } else if ("pdf" == f || "link" == f) {
                var o = t.open(p.url, "_blank");
                o && o.focus()
            } else {
                var a = $("<a>", {
                    addClass: "gallery-item m-" + f + " m-" + u.data.category,
                    attr: {
                        href: p.url || p.urlStandard,
                        target: "_blank"
                    },
                    css: {
                        backgroundImage: "url(" + (p.url || p.urlStandard) + ")"
                    }
                });
                l.set({
                    body: a,
                    header: n(u),
                    footer: i(u),
                    controls: u.gallery.length > 1
                })
            }
        }
        function a() {
            "video_youtube" == u.data.type && (u.video && u.video.destroy(),
            u.video = null ),
            l.empty()
        }
        function r() {
            v.on("click", "[data-js=media-gallery-content]", function(t) {
                /video_youtube|pdf|link/.test(f) && (s.mobile() || s.touch()) || (t.preventDefault(),
                v.trigger("open", u))
            })
        }
        var u = this
          , e = _.merge({}, h, e)
          , d = e.data.content
          , f = d.type.toLowerCase()
          , p = d.image || d.videoYouTube || d.pdf || d.wallpaper || d.link
          , v = $(e.elem);
        e.gallery;
        this.attach = o,
        this.detach = a,
        this.data = e.data,
        this.index = e.index,
        this.id = e.id,
        this.gallery = e.gallery,
        this.$elem = v,
        this.type = f,
        this.on = function() {
            v.on.apply(v, arguments)
        }
        ,
        this.off = function() {
            v.off.apply(v, arguments)
        }
        ,
        this.one = function() {
            v.one.apply(v, arguments)
        }
        ,
        r()
    }
    function a(t) {
        function e() {
            l.on("prev", c),
            l.on("next", u),
            l.on("pause", h),
            l.on("hide", s)
        }
        function n(t) {
            var e;
            v[t.id] || (_.merge(t, {
                index: b++,
                elem: t.elem || g[t.id],
                gallery: p
            }),
            e = v[t.id] = new o(t),
            "pdf" !== e.type && (e.result = m.push(e) - 1),
            e.on("open", function(t, e) {
                r(e)
            }),
            p.length++)
        }
        function i(t) {
            return t instanceof o ? t : v[t] || m[t]
        }
        function a(t) {
            var t = i(t);
            y && y.detach(),
            t && (y = t,
            y.attach())
        }
        function r(t) {
            var t = i(t);
            a(t),
            "pdf" !== t.type && "link" !== t.type && (C || (p.isOpen = C = 1,
            e(),
            l.open({
                controls: m.length > 1
            })))
        }
        function s() {
            y && y.detach(),
            C && (p.isOpen = C = 0,
            l.off("prev", c),
            l.off("next", u),
            l.off("pause", h),
            l.off("hide", s))
        }
        function c() {
            var t = y.result > 0 ? y.result - 1 : m.length - 1;
            a(m[t])
        }
        function u() {
            var t = y.result < m.length - 1 ? y.result + 1 : 0;
            a(m[t])
        }
        function h() {
            var t = y.video.player;
            t && ("playing" === y.video.state ? t.pauseVideo() : t.playVideo())
        }
        function f() {
            w.find("[data-media-id]").each(function() {
                var t = $(this).data("mediaId");
                g[t] = this
            })
        }
        var p = this
          , v = {}
          , m = []
          , g = {}
          , t = _.merge({}, d, t)
          , w = $(t.elem)
          , y = null
          , b = 0
          , C = 0;
        this.add = n,
        this.prev = c,
        this.next = u,
        this.pause = h,
        this.close = s,
        this.open = r,
        this.to = a,
        this.get = i,
        this.length = 0,
        this.isOpen = 0,
        f()
    }
    function r() {
        function t(t) {
            return t.uid = i++,
            o[t.id] = new a(t)
        }
        function e(t) {
            return o[t]
        }
        function n() {
            $("[data-js-media-gallery]").each(function() {
                t({
                    elem: this,
                    id: $(this).data("js-media-gallery")
                })
            })
        }
        var i = 0
          , o = {};
        this.create = t,
        this.get = e,
        n()
    }
    var s = e.util
      , l = e.lightbox
      , c = e.video
      , u = t.messages
      , d = {
        elem: null
    }
      , h = {
        id: null ,
        elem: null ,
        data: {},
        gallery: null ,
        index: null ,
        result: null
    };
    return e.extend({
        Media: o,
        gallery: new r
    }),
    e.gallery
}),
!function(t, e) {
    e(t.overwatch)
}(this, function(t) {
    function e() {
        function t(t) {
            var n = t.timeToHideMs
              , i = t.menuSelector;
            setTimeout(function() {
                $(i).addClass("is-menu-hidden")
            }, n);
            var o = $("section")
              , a = $(o[0]).attr("id");
            $(i + " ." + a).addClass("active"),
            $(window).on("scroll", function() {
                requestAnimationFrame(function() {
                    e(i)
                })
            }),
            $(window).on("touchmove", function() {
                requestAnimationFrame(function() {
                    e(i)
                })
            }),
            $(i + " li a").smoothScroll({
                easing: "easeOutCirc",
                speed: 300,
                offset: -72,
                beforeScroll: function(t) {
                    var e = $(t.scrollTarget).data("scroll-offset");
                    "undefined" != typeof e && (t.offset += parseInt(e))
                }
            })
        }
        function e(t) {
            $(t + " li").removeClass("active");
            for (var e = $(window), i = {
                top: e.scrollTop(),
                left: e.scrollLeft(),
                right: this.left + e.width(),
                bottom: this.top + e.height()
            }, o = $("section"), a = 0; a < o.length; a++)
                if (n(o[a], i)) {
                    $(t + " ." + $(o[a]).attr("id")).addClass("active");
                    break
                }
        }
        function n(t, e) {
            var n = $(t)
              , i = n.offset().top
              , o = n.offset().left
              , a = o + n.width()
              , r = i + n.height()
              , s = !(o > e.right || a < e.left || i > e.bottom || r < e.top);
            return s
        }
        return {
            init: t
        }
    }
    return $.extend(jQuery.easing, {
        easeOutCirc: function(t, e, n, i, o) {
            return i * Math.sqrt(1 - (e = e / o - 1) * e) + n
        }
    }),
    overwatch.extend({
        menuScroll: new e
    })
}),
!function(t, e) {
    e(t, t.overwatch)
}(this, function(t, e) {
    function n() {
        function e() {
            u && (u = 0,
            f.velocity("stop", !0),
            f.velocity({
                top: -44
            }, {
                duration: 200,
                easing: "easeOutCirc"
            }))
        }
        function n() {
            u || (u = 1,
            f.velocity("stop", !0),
            f.velocity({
                top: 0
            }, {
                duration: 200,
                easing: "easeOutCirc"
            }))
        }
        function o() {
            c || (c = 1,
            d.velocity("stop", !0),
            d.velocity({
                marginTop: 0,
                marginLeft: 0,
                marginRight: 0
            }, {
                duration: 100,
                easing: "easeOutCirc"
            }))
        }
        function a() {
            c && (c = 0,
            d.velocity("stop", !0),
            d.velocity({
                marginTop: 20,
                marginLeft: 20,
                marginRight: 20
            }, {
                duration: 100,
                easing: "easeOutCirc"
            }))
        }
        function r() {
            var t = i.posY()
              , r = i.width()
              , s = 64;
            768 > r ? (e(),
            o()) : r >= 768 && s >= t && (n(),
            a())
        }
        function s() {
            var t = i.posY()
              , r = i.scroll()
              , s = i.width()
              , l = 64;
            t > l && r && s >= 768 ? (e(),
            o()) : l >= t && r && s >= 768 && (n(),
            a())
        }
        function l() {
            var e = d.find(".nav-search-bar");
            s(),
            r(),
            $(t).on("scroll", _.throttle(s, 32)),
            $(t).on("resize", _.throttle(r, 32)),
            h.find(".nav-menu").on("click", ".m-has-children", function(t) {
                t.preventDefault(),
                $(this).next(".nav-menu").toggleClass("m-open")
            }),
            d.find(".nav-menu").on("click", ".js-icon-search", function(t) {
                t.preventDefault(),
                $(this).toggleClass("is-open"),
                e.toggleClass("is-open"),
                e.hasClass("is-open") && e.find("input[name=q]").focus()
            }),
            d.find(".js-bnet").on("click", function(t) {
                t.preventDefault(),
                p.toggleClass("out", !0),
                $("#nav-blackout").one("click", function(t) {
                    t.preventDefault(),
                    p.toggleClass("out", !1)
                })
            })
        }
        var c = 0
          , u = 1
          , d = $("nav[role=main]")
          , h = $("nav[role=mobile]")
          , f = $(".navbars")
          , p = $(".nav-mobile-menu-wrap.right");
        l(),
        this.hideBnet = e,
        this.showBnet = n,
        this.expandNav = o,
        this.contractNav = a
    }
    var i = e.util;
    return e.extend({
        nav: new n
    }),
    e.nav
}),
!function(t, e) {
    e(t, t.overwatch, t.jQuery)
}(this, function(t, e, n) {
    function i(t) {
        var e = n(t)
          , i = e.data(r)
          , a = e.find("[data-" + s + "]");
        e.on("click", "[data-" + s + "]", function(t) {
            t.preventDefault();
            var e = n(this)
              , r = e.data(l);
            a.removeClass("is-active"),
            n(this).addClass("is-active"),
            o.trigger("click-navigation", {
                parentId: i,
                id: r
            })
        })
    }
    var o = n(t)
      , a = "js-nav2"
      , r = "nav2-id"
      , s = "js-nav2-link"
      , l = "nav2-link-id";
    n("[data-" + a + "]").each(function() {
        i(this)
    })
}),
!function(t, e) {
    "function" == typeof define && define.amd ? define("overwatch-progress", ["overwatch", "jQuery"], e) : "object" == typeof exports ? module.exports = e(require("overwatch", "jQuery")) : t.overwatch.Progress = e(t.overwatch, t.jQuery)
}(this, function(t, e) {
    e(".progress").each(function(t, n) {
        var i = e(n)
          , o = i.find(".glow")
          , a = parseFloat(i.data("overwatch-progress-percent"))
          , r = 1 - a
          , s = i.hasClass("m-animated");
        o.css("transform", "scaleX(" + a + ")"),
        s ? e.Velocity.animate(i.find(".cover"), {
            scaleX: r
        }, 2e3).then(function() {
            o.addClass("is-active")
        }) : i.find(".cover").css("transform", "scaleX(" + r + ")")
    }),
    e(".progress-2").each(function(t, n) {
        var i = e(n)
          , o = parseFloat(i.data("overwatch-progress-percent"))
          , a = 100 * (1 - o) + "%"
          , r = i.hasClass("m-animated");
        r ? i.find(".bar").velocity({
            right: a
        }, {
            easing: "ease",
            duration: 2e3
        }) : i.find(".bar").css("right", a)
    })
}),
!function(t, e) {
    e(t, t.overwatch)
}(this, function(t, e) {
    function n() {
        return l.set("promo", h)
    }
    function i(t) {
        h[t.id] = t,
        n()
    }
    function o(e) {
        function n() {
            return e.start <= d && e.end > d
        }
        function o() {
            v.on("resize.promo", _.throttle(function() {
                r.width() < 768 && u()
            }, 32)),
            s.one("lightbox.x.promo", function() {
                c && c.push({
                    event: "overlay-dismiss",
                    "analytics.eventPlacement": "X"
                })
            }),
            s.one("lightbox.background.promo", function() {
                c && c.push({
                    event: "overlay-dismiss",
                    "analytics.eventPlacement": "Background"
                })
            }),
            s.one("key.esc.promo", function() {
                c && c.push({
                    event: "overlay-dismiss",
                    "analytics.eventPlacement": "Escape"
                })
            }),
            s.one("hide.promo", function() {
                u()
            })
        }
        function a() {
            v.off("resize.promo"),
            s.off("hide.promo")
        }
        function l() {
            m || (m = 1,
            p.count++,
            i(p),
            o(),
            s.open({
                body: e.elem
            }))
        }
        function u() {
            m && (m = 0,
            a(),
            s.close(),
            s.empty())
        }
        function h() {
            i(p)
        }
        var p = this
          , e = _.defaults(e, f)
          , v = $(t)
          , m = 0;
        this.start = e.start,
        this.end = e.end,
        this.elem = e.elem,
        this.id = e.id,
        this.open = l,
        this.close = u,
        this.check = n,
        this.count = e.count,
        h()
    }
    function a() {
        function t(t) {
            return i[t]
        }
        function e(t) {
            var e = $(t.elem)
              , n = t.id || e.attr("promo");
            if (!i[n]) {
                var a = new o({
                    elem: t.elem,
                    id: n,
                    start: t.start || e.attr("promo-start"),
                    end: t.end || e.attr("promo-end"),
                    count: h[n] ? h[n].count : 0
                });
                i[n] = a
            }
        }
        function n() {
            $("[promo]").each(function() {
                e({
                    elem: this
                })
            }),
            !r.mobile() && r.width() > 768 && !/promo=false/.test(u) && _.find(i, function(t) {
                return t.count < 1 && t.check() || "showpromo" === window.location.hash.substr(1) ? (t.open(),
                c && c.push({
                    event: "overlay.load"
                }),
                !0) : void 0
            })
        }
        var i = {};
        this.get = t,
        this.create = e,
        n()
    }
    var r = e.util
      , s = e.lightbox
      , l = e.storage
      , c = t.dataLayer
      , u = t.location.search
      , d = Math.floor(Date.now() / 1e3)
      , h = l.get("promo") || {}
      , f = {
        end: null ,
        start: null ,
        elem: null ,
        id: null ,
        count: 0
    };
    return e.extend({
        promo: new a
    }),
    e.promo
}),
!function(t, e) {
    e(t, t.overwatch)
}(this, function(t, e) {
    function n(t, e) {
        function n() {
            l || (l = 1,
            t.trigger("open"),
            s.one("hide.slide-menu", i),
            t.velocity("stop", !0),
            r.slideInLeft(t, {
                begin: function() {
                    a++,
                    1 >= a && s.open()
                }
            }))
        }
        function i() {
            l && (l = 0,
            t.trigger("close"),
            s.off("hide.slide-menu"),
            t.velocity("stop", !0),
            r.slideOutLeft(t, {
                begin: function() {
                    1 >= a && s.close()
                },
                complete: function() {
                    a--
                }
            }))
        }
        function o() {
            t.find(".close, [close]").on("click", function(t) {
                i()
            })
        }
        var l = 0;
        o(),
        this.open = n,
        this.close = i,
        this.on = function() {
            return t.on.apply(t, arguments)
        }
        ,
        this.off = function() {
            return t.off.apply(t, arguments)
        }
        ,
        this.one = function() {
            return t.one.apply(t, arguments)
        }
    }
    function i() {
        function e(t) {
            return t ? o[t].open() : void _.each(o, function(t, e) {
                t.open()
            })
        }
        function i(t) {
            return t ? o[t].close() : void _.each(o, function(t, e) {
                t.close()
            })
        }
        function a(t, e) {
            var t = $(t)
              , e = e || t.attr("slide-menu")
              , i = new n(t,e);
            return o[e] = i
        }
        function r() {
            $("[slide-menu]").each(function() {
                a(this)
            }),
            $("[slide-menu-open]").on("click", function(t) {
                var n = $(this).attr("slide-menu-open");
                e(n)
            }),
            $("[slide-menu-close]").on("click", function(t) {
                var e = $(this).attr("slide-menu-close");
                i(e)
            }),
            $(t).on("keyup.slide-menu", function(t) {
                27 === t.which && i()
            })
        }
        r(),
        this.open = e,
        this.close = i,
        this.create = a,
        this.cache = o
    }
    var o = {}
      , a = 0
      , r = e.animate
      , s = e.blackout;
    return e.extend({
        menu: new i
    }),
    e.menu
}),
!function(t, e) {
    e(t.overwatch, t.jQuery)
}(this, function(t, e) {
    function n(t) {
        this.$spotlight = e(t),
        this.$holder = this.$spotlight.find("." + o),
        this.$header = this.$spotlight.find("." + i),
        this.$caption = this.$spotlight.find("." + a),
        this.lastLoadedImageUrl = null ,
        0 === this.$header.length,
        0 === this.$holder.length
    }
    var i = "header"
      , o = "holder"
      , a = "caption";
    return n.prototype.setHeader = function(t) {
        this.$header.text(t)
    }
    ,
    n.prototype.setCaption = function(t) {
        this.$caption.text(t)
    }
    ,
    n.prototype.loadImage = function(t, n) {
        var i = this;
        t = encodeURI(t),
        i.lastLoadedImageUrl = t,
        i._startTransition(),
        e("<img/>").attr("src", t).load(function(o) {
            e(this).remove(),
            t === i.lastLoadedImageUrl && (i._setImage(t),
            i._endTransition(),
            n && n())
        })
    }
    ,
    n.prototype._setImage = function(t) {
        this.$holder.css("background-image", "url(" + encodeURI(t) + ")")
    }
    ,
    n.prototype._startTransition = function() {
        this.$spotlight.velocity("stop").velocity({
            opacity: 0
        }, {
            duration: 100,
            easing: "easeOutQuad"
        })
    }
    ,
    n.prototype._endTransition = function() {
        this.$spotlight.velocity("stop").velocity({
            opacity: [1, 0]
        }, {
            duration: 100,
            easing: "easeOutQuad"
        })
    }
    ,
    t.extend({
        Spotlight: n
    }),
    n
}),
!function(t, e) {
    e(t.overwatch)
}(this, function(t) {
    function e(e, n, i) {
        function o() {
            return this.exec < 1
        }
        function a(t) {
            return t.replace(/-([a-z])/g, function(t) {
                return t[1].toUpperCase()
            })
        }
        function r(t) {
            return t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
        }
        function s() {
            return ["tags", a(e)].join(".")
        }
        function l(t) {
            return {
                created: t.created,
                exec: t.exec
            }
        }
        function c(t, e) {
            return {
                $elem: $(t),
                created: e && e.created || (new Date).getTime(),
                exec: e && e.exec || 0
            }
        }
        function u() {
            return k.get(s()) || {}
        }
        function d() {
            for (var t = u(), e = Object.keys(b), n = 0; n < e.length; n++) {
                var i = b[e[n]];
                t[e[n]] = l(i)
            }
            k.set(s(), t)
        }
        function h(t) {
            var e = t.rule || o;
            return e.call(t)
        }
        function f(t) {
            var t = a(t)
              , e = b[t]
              , n = C[t];
            h(e) && (n.call(e, e.$elem, e.exec, e.created),
            e.exec++,
            d())
        }
        function p(t) {
            for (var e = document.querySelectorAll("[" + r(t) + "]"), n = u(), i = 0; i < e.length; i++) {
                var o = e[i]
                  , s = o.getAttribute(r(t))
                  , l = n[a(s)];
                b[a(s)] = c(o, l)
            }
        }
        function v(t, e) {
            var t = a(t)
              , n = b[t];
            n && e.rule && (n.rule = e.rule),
            n && e.callback && (C[t] = e.callback,
            n.trigger = function() {
                f(t)
            }
            ,
            n.trigger())
        }
        function m(t) {
            for (var e = Object.keys(t), n = 0; n < e.length; n++)
                v(e[n], t[e[n]])
        }
        function g(t) {
            t instanceof Function && (o = t)
        }
        function w() {
            i && i.clearStorage && k.remove(s()),
            i && i.defaultRule && g(i.defaultRule),
            p(e),
            m(n),
            t.tags ? null : t.tags = {},
            t.tags[a(e)] = y,
            y.cache = b,
            y.add = m,
            y.trigger = f,
            y.setDefaultRule = g,
            d()
        }
        var y = this
          , b = {}
          , C = {}
          , k = t.storage;
        w()
    }
    return t.extend({
        Tag: e
    }),
    t.Tag
}),
!function(t, e) {
    e(t, t.overwatch)
}(this, function(t, e) {
    function n() {}
    return e.extend({
        waypoint: new n
    }),
    e.waypoint
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("overwatch-hero-selector", ["overwatch", "shuffle"], e) : "object" == typeof exports ? module.exports = e(require("overwatch", "shuffle")) : t.overwatch.HeroSelector = e(t.overwatch, t.jQuery, t.shuffle)
}(this, function(t, e, n) {
    function i() {
        this.init = function(t) {
            var n = this;
            n.$grid = t.$container;
            t.$sizer;
            n.$navigationLinks = t.$navigationLinks,
            n.itemSelector = t.itemSelector,
            n.$grid.shuffle({
                itemSelector: n.itemSelector,
                speed: 200,
                easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
            }),
            n.largestOrder = function() {
                var t = 0;
                return e.each(e(n.itemSelector), function(n, i) {
                    t < e(i).data("order") && (t = e(i).data("order"))
                }),
                t
            }(),
            n.$navigationLinks.on("click", function() {
                var t = e(this).data("filter-key");
                n.filter(t)
            })
        }
    }
    i.prototype.filter = function(t) {
        var n = this;
        if (window.location.hash = t.toLowerCase(),
        n.$navigationLinks.parent().removeClass("active"),
        e('[data-filter-key="' + t + '"]', n.$navigationLinks.parent()).parent().addClass("active"),
        "all" === t) {
            e(n.itemSelector).children().removeClass("m-subdued m-selected");
            var i = {}
        } else
            var i = {
                reverse: !0,
                by: function(i) {
                    var o = e(i.children()[0]);
                    return o.removeClass("m-subdued m-selected"),
                    i.data("groups")[0] === t ? (o.addClass("m-selected"),
                    n.largestOrder - i.data("order")) : (o.addClass("m-subdued"),
                    ~i.data("order"))
                }
            };
        this.$grid.shuffle("sort", i)
    }
    ;
    var o = new i;
    return o
}),
!function(t, e) {
    e(t, t.app, t.jQuery)
}(this, function(t, e, n) {
    function i() {
        this.loadVideoIntoFrame = function(t) {
            var e = a.create({
                elem: n("<div video>"),
                id: t
            }, function(t) {
                t.player.playVideo()
            });
            r.open({
                body: e.$root
            }),
            o.lightbox.one("hide", function() {
                e.destroy(),
                r.empty()
            })
        }
        ,
        this.loadImageIntoFrame = function(t) {
            o.lightbox.open({
                body: n("<div>", {
                    html: '<img src="' + t + '" />',
                    addClass: "img-embed"
                }),
                size: "fluid"
            })
        }
    }
    var o = t.overwatch
      , a = o.video
      , r = o.lightbox;
    return e.extend({
        helpers: new i
    }),
    e.helpers
}),
function(t, e) {
    function n(t, e) {
        var n = 0
          , i = [];
        for (var o in heroAbilities) {
            var a = heroAbilities[o]
              , r = {};
            r.title = a.title,
            r.subtitle = a.subtitle,
            r.description = a.description,
            r.sources = [{
                type: "video/webm",
                src: a.sources.webm
            }, {
                type: "video/mp4",
                src: a.sources.mp4
            }],
            r.contentClass = "hero-" + t,
            r.autoplay = !0,
            i.push(r),
            e === o && (n = i.length - 1)
        }
        return [i, n]
    }
    var i = {
        init: function() {
            function t() {
                i.mobileVideo.each(function(t, e) {
                    $(e).children("video").get(0).pause()
                })
            }
            i.desktopVideo = $(".abilities .ability-video.desktop-video"),
            i.videoOverlay = $(".abilities .video-overlay"),
            i.mobileVideo = $(".ability-video.mobile-video"),
            i.videoOverlay.hover(function() {
                $(this).siblings("video")[0].play()
            }, function(t) {
                $(this).siblings("video")[0].pause(),
                $(this).siblings("video")[0].load()
            }),
            i.desktopVideo.on("click", function() {
                if ("8" !== e.util.ie()) {
                    var t = $(this).data("hero")
                      , i = $(this).data("ability")
                      , o = n(t, i)
                      , a = o[0]
                      , r = o[1];
                    Lightbox.loadHTML5Video(a, r)
                }
            }),
            e.util.mobile() === !0 && MediaQuery.onDesktop(function() {
                document.exitFullscreen(),
                t()
            })
        }
    };
    t.Abilities = i
}(window, window.overwatch),
function(t, e) {
    var n = e.util
      , i = {
        init: function(t) {
            var e = t.$videoWraps
              , i = $(".gameplay-video-wrapper.desktop-only .video-wrap");
            i.on("click", function() {
                Lightbox.loadEmbed([{
                    title: $(this).data("title"),
                    src: $(this).data("yt-id"),
                    contentClass: $(this).id,
                    type: "youtube"
                }])
            });
            var o = $(".section.game .yt-container .video-wrap");
            o.each(function(t, e) {
                YtEmbedder.load($(e))
            }),
            n.ie() && n.ie() <= 8 && n.VideoPoster(e)
        }
    };
    t.GamePlayVideo = i
}(window, window.overwatch),
!function(t, e, n) {
    function i() {
        r.on("mouseenter", function() {
            a ? a.enable() : !o.mobile() && !o.touch() && o.width() >= 768 && (a = n.parallax = new Parallax(s[0],l))
        }),
        r.on("mouseleave", function() {
            a && a.disable()
        }),
        n.extend({
            parallax: a
        })
    }
    var o = n.util
      , a = null
      , r = $("[hero-scene]")
      , s = r.find("#hero-scene")
      , l = {
        scalarX: 1,
        scalarY: 1,
        frictionX: 1,
        frictionY: 1
    };
    e.extend({
        heroScene: {
            init: i
        }
    })
}(this, this.app, this.overwatch),
function(t, e) {
    var n = function() {
        function t(t) {
            var o = t.$section
              , a = t.$overlay
              , r = t.$overlayText
              , s = t.$overlayTextBorder
              , l = t.$overlayWrap
              , c = t.$selectionWrap
              , u = t.classLoaded;
            c.on("mouseenter", ".selection-link", function(t) {
                var c = $(this)
                  , d = c.data("hero-slug")
                  , h = c.data("hero-role")
                  , f = c.data("hero-role-id")
                  , p = c.data("hero-overlay");
                "undefined" == d || e.util.mobile() || (o.addClass("overlay-ready"),
                a.attr("style", ""),
                l.addClass("loading"),
                n.currentHero = d,
                i(p, d, function(t, e) {
                    n.currentHero == e && (l.removeClass("loading"),
                    a.attr("style", "background-image:url(" + t + ")"))
                }),
                o.addClass(u),
                r.find("h2").html(d),
                r.find("i").attr("class", "icon role-" + f),
                r.find("p").text(h),
                r.addClass(u),
                s.addClass(u))
            }),
            c.on("mouseleave", ".selection-link", function() {
                o.removeClass(u),
                r.removeClass(u),
                s.removeClass(u),
                l.removeClass("loading")
            }),
            $(".selection-item.is-highlighted").each(function(t, e) {
                var n = $(e);
                n.find(".selection-link").each(function(t, e) {
                    var i = n;
                    $(e).on("mouseenter", function(t) {
                        i.removeClass("is-highlighted"),
                        $(this).off("mouseenter")
                    })
                })
            })
        }
        function i(t, e, n) {
            var i = new Image;
            $(i).load(function() {
                n && n(i.src, e)
            }),
            i.src = t
        }
        return {
            init: t
        }
    }();
    t.HeroSelect = n
}(window, window.overwatch),
function(t, e) {
    var n = {
        init: function(t) {
            var n = t.$ytVideoWraps
              , i = t.$videoWraps
              , o = t.$characterDemoVideo
              , a = $(".btn-abilities");
            o.on("click", function() {
                Lightbox.loadEmbed([{
                    title: $(this).data("hero"),
                    src: $(this).data("yt-id"),
                    type: "youtube"
                }])
            }),
            n.each(function(t, e) {
                YtEmbedder.load($(e))
            }),
            a.on("click", function() {
                return $.smoothScroll({
                    scrollTarget: "#abilities"
                }),
                !1
            }),
            "8" === e.util.ie() && e.util.VideoPoster(i)
        }
    };
    t.HeroSummary = n
}(window, window.overwatch),
!function(t, e, n) {
    function i() {
        var e = []
          , n = "38,38,40,40,37,39,37,39,66,65"
          , i = $(t.document)
          , r = $("body");
        i.on("keydown", function(t) {
            e.push(t.keyCode),
            e.toString().indexOf(n) >= 0 && (r.addClass("konami"),
            i.off("keydown", arguments.callee),
            i.trigger("konami"))
        }),
        i.one("konami", function() {
            !o.mobile() && !o.touch() && o.width() > 768 && (r.append('<div class="egg" id="egg-particles">'),
            particlesJS("egg-particles", a),
            new Audio(t.clientVars.codeFile).play())
        })
    }
    var o = n.util
      , a = {
        particles: {
            number: {
                value: 25,
                density: {
                    enable: !0,
                    value_area: 800
                }
            },
            color: {
                value: "#fff"
            },
            shape: {
                type: "image",
                stroke: {
                    width: 0,
                    color: "#000000"
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: t.messages.img.dva,
                    width: 285,
                    height: 298
                }
            },
            opacity: {
                value: .5,
                random: !0,
                anim: {
                    enable: !0,
                    speed: 1,
                    opacity_min: .1,
                    sync: !1
                }
            },
            size: {
                value: 50,
                random: !0,
                anim: {
                    enable: !1,
                    speed: 40,
                    size_min: .1,
                    sync: !1
                }
            },
            line_linked: {
                enable: !1,
                distance: 100,
                color: "#ffffff",
                opacity: .4,
                width: 2
            },
            move: {
                enable: !0,
                speed: 1,
                direction: "bottom",
                random: !1,
                straight: !1,
                out_mode: "out",
                bounce: !1,
                attract: {
                    enable: !1,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: !1,
                    mode: "bubble"
                },
                onclick: {
                    enable: !1,
                    mode: "repulse"
                },
                resize: !0
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: .5
                    }
                },
                bubble: {
                    distance: 400,
                    size: 4,
                    duration: .3,
                    opacity: 1,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: .4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: !0
    };
    i()
}(this, this.app, this.overwatch),
function(t, e) {
    var n = function() {
        function t(t) {
            var e = t.$desktopTrailers
              , n = t.$mobileTrailers
              , i = [];
            e.each(function(t) {
                i.push({
                    title: $(this).data("title"),
                    src: $(this).data("yt-id"),
                    contentClass: $(this).id,
                    type: "youtube",
                    autoplay: !0
                }),
                $(this).on("click", function() {
                    Lightbox.loadEmbed(i, t)
                })
            }),
            n.each(function(t, e) {
                YtEmbedder.load($(e))
            })
        }
        return {
            init: t
        }
    }();
    t.LandingTrailers = n
}(window, window.overwatch),
function(t, e) {
    var n = function() {
        function e(e) {
            function n(t) {
                l.toggleClass(u, t > 44)
            }
            var i = $(t)
              , o = e.$menuMainWrap
              , a = e.$menuMain
              , r = e.$socialMenuMain
              , s = e.$menuMainPin
              , l = e.$buyButtonWrap
              , c = e.hiddenClass
              , u = e.fixedClass
              , d = e.menuMainThreshold
              , h = 0;
            i.on("scroll", function() {
                var t = i.scrollTop();
                if (t !== h) {
                    var e = t > d;
                    e = e && t > h,
                    o.toggleClass(c, e),
                    h = t
                }
                a.toggleClass(u, t > 44),
                r.toggleClass(u, t > 44),
                n(t)
            }),
            s.on("mouseenter", function() {
                o.removeClass(c)
            }),
            $(".nav-search-form, .nav-search-mobile").on("submit", function() {
                var t = $("input", $(this))
                  , e = t.val();
                t.val(e.replace(/#/g, "-"))
            })
        }
        return {
            init: e
        }
    }
    ;
    t.MainMenu = n()
}(window, window.overwatch),
function() {
    var t = {
        section: null ,
        navItem: null ,
        mapPanel: null ,
        mapList: null ,
        mapItem: null ,
        init: function() {
            function e() {
                t.scrollTo(window.location.hash.slice(1))
            }
            t.section = $(".map.section"),
            t.controls = $(".map-controls"),
            t.navItem = $(".map-nav-item"),
            t.navItemDesc = $(".map-nav-description"),
            t.mapItem = $(".map"),
            t.getMap(),
            t.navItem.on("click", function() {
                var e = $(this).attr("data-map-type")
                  , n = $(".map-info[data-map-type='" + e + "']").find(".map-list").find(".map-name").first().attr("data-map");
                t.updatePanel(e, n)
            }),
            t.mapItem.on("click", function() {
                t.updatePanel($(this).closest(".map-info").attr("data-map-type"), $(this).attr("data-map"))
            }),
            setTimeout(e, 500),
            $(window).on("hashchange", function() {
                e()
            }),
            $(window).on("popstate", function() {
                e()
            })
        },
        updatePanel: function(e, n) {
            $(".map-nav-item").removeClass("active"),
            $(".map-nav-description").removeClass("active"),
            $(".map-info").removeClass("active"),
            $(".map-screen").removeClass("active"),
            $(".map-nav-item[data-map-type='" + e + "']").addClass("active"),
            $(".map-nav-description[data-map-type='" + e + "']").addClass("active"),
            $(".map-info[data-map-type='" + e + "']").addClass("active"),
            $(".map-name[data-map='" + n + "']").addClass("active"),
            $(".map-screen[data-map=" + n + "]").addClass("active"),
            t.getMap()
        },
        getMap: function() {
            var e = $(".map-screen.active").attr("data-map")
              , n = $(".map-screen.active").attr("data-map-type");
            t.mapItem.removeClass("active"),
            $(".map-info[data-map-type='" + n + "']").find(".map[data-map='" + e + "']").addClass("active")
        },
        scrollTo: function(e) {
            if (e) {
                var n = t.mapItem.filter(["[data-map=", e, "]"].join(""));
                n[0] && $("html, body").animate({
                    scrollTop: $("#objectives").offset().top
                }, 200, function() {
                    n.click()
                })
            }
        }
    };
    window.Maps = t
}(window, window.overwatch),
function(t, e) {
    var n = {
        init: function(t) {
            this.bindScreenshots(),
            this.bindArtwork(),
            this.bindVideos()
        },
        bindScreenshots: function() {
            var t = this;
            $(".web .screenshots-list a").bind("click", function(e) {
                var n = $(this)
                  , i = t.getSectionList("screenshots")
                  , o = t.indexOf(i, n, 0);
                Lightbox.loadImage(i, o),
                e.preventDefault()
            })
        },
        bindArtwork: function() {
            var t = this;
            $(".web .artwork-list a").bind("click", function(e) {
                var n = $(this)
                  , i = t.getSectionList("artwork")
                  , o = t.indexOf(i, n, 0);
                Lightbox.loadImage(i, o),
                e.preventDefault()
            })
        },
        bindVideos: function() {
            var t = this;
            $(".web .videos-list a").bind("click", function(e) {
                var n = $(this)
                  , i = t.getSectionList("videos")
                  , o = t.indexOf(i, n, 0);
                Lightbox.loadEmbed(i, o),
                e.preventDefault()
            })
        },
        getSectionList: function(t) {
            var e = [];
            return $("." + t + "-list li").each(function(t) {
                e.push($(this).data())
            }),
            e
        },
        indexOf: function(t, e, n) {
            "undefined" == typeof n && (n = -1);
            for (var i = $(e), o = 0; o < t.length; o++)
                if (i.data("key") === t[o].key)
                    return o;
            return n
        }
    };
    t.MediaLightbox = n
}(window, window.overwatch),
function(t, e, n) {
    var i = function() {
        function n(e) {
            t.addEventListener("orientationchange", e)
        }
        function i(t, e) {
            var n = s(e);
            n && n.addListener(function(e) {
                return e.matches ? t() : void 0
            })
        }
        function o(t, e) {
            var n = s(e);
            n && n.addListener(function(e) {
                return e.matches ? void 0 : t()
            })
        }
        function a(t, e) {
            return i(t, e)
        }
        function r(t, e) {
            return o(t, e)
        }
        function s(n) {
            if (!t.matchMedia)
                return null ;
            var n = n || u.defaultMediaQuery;
            return n = e.util.removeWhitespace(n),
            c[n] || l(n)
        }
        function l(n) {
            return n = e.util.removeWhitespace(n),
            c[n] = t.matchMedia(n)
        }
        var c = {}
          , u = {
            defaultMediaQuery: "(max-width: 760px)"
        };
        return {
            supported: "function" == typeof t.matchMedia,
            config: u,
            onOrientationChange: n,
            onMatch: i,
            onUnmatch: o,
            onMobile: a,
            onDesktop: r,
            getMql: s
        }
    }
    ;
    t.MediaQuery = i()
}(window, window.overwatch, window.Utilities),
function(t, e) {
    var n = {
        init: function(t) {
            this.triggerHover()
        },
        triggerHover: function() {
            $(".wallpaper-list .media-wrap").on("touchend", function(t) {
                $(this).addClass("hovered")
            })
        }
    };
    t.Media = n
}(window, window.overwatch),
!function(t, e) {
    e(t, t.app, t.overwatch)
}(this, function(t, e, n) {
    var i = n.util
      , o = $(".news-panels");
    o.find(".grid-item.youtube").on("click", "a", function(t) {
        t.preventDefault();
        var e = $(this).attr("data-id");
        a(e)
    }),
    $(document.body).on("click", "[data-js=youtube-lightbox]", function(t) {
        t.preventDefault();
        var e = $(this).attr("data-id");
        a(e)
    });
    var a = function(t) {
        i.mobile() || i.touch() || e.helpers.loadVideoIntoFrame(t)
    }
}),
!function(t, e) {
    e(t, t.app)
}(this, function(t, e) {
    function n() {
        this.shuffleArray = function(t) {
            for (var e, n, i = t.length; 0 !== i; )
                n = Math.floor(Math.random() * i),
                i -= 1,
                e = t[i],
                t[i] = t[n],
                t[n] = e;
            return t
        }
        ,
        this.removeWhitespace = function(t) {
            return t.replace(/\s/g, "")
        }
        ,
        this.now = Date.now || function() {
            return (new Date).getTime()
        }
        ,
        this.once = function(t) {
            var e;
            return function() {
                return t && (e = t.apply(this, arguments),
                t = null ),
                e
            }
        }
        ,
        this.debounce = function(t, e, n) {
            var i, o, a, r, s, l = function() {
                var c = Utilities.now() - r;
                e > c && c >= 0 ? i = setTimeout(l, e - c) : (i = null ,
                n || (s = t.apply(a, o),
                i || (a = o = null )))
            }
            ;
            return function() {
                a = this,
                o = arguments,
                r = Utilities.now();
                var c = n && !i;
                return i || (i = setTimeout(l, e)),
                c && (s = t.apply(a, o),
                a = o = null ),
                s
            }
        }
        ,
        this.VideoPoster = function(t) {
            for (var e = t.length - 1; e >= 0; e--) {
                var n = $(t[e])
                  , i = n.find("video")
                  , o = i.attr("poster");
                n.css("background-image", "url(" + o + ")")
            }
        }
    }
    return e.extend({
        util: new n
    }),
    e.util
}),
function(t, e) {
    var n = (e.util,
    function() {
        return {
            defaultConfig: {
                fs: 1,
                rel: 0,
                showinfo: 0,
                autohide: 1,
                enablejsapi: 1,
                modestbranding: 1,
                wmode: "opaque"
            },
            queue: [],
            load: function(t, e, n) {
                var i = this;
                this.queue.push(function() {
                    return i.appendIframeTo(t, e, n)
                })
            },
            appendIframeTo: function(t, e, n) {
                var e = e || this.defaultConfig
                  , n = n || t.data("ytId")
                  , i = $("<div>").appendTo(t).get(0);
                return new this.YT.Player(i,{
                    videoId: n,
                    playerVars: e
                })
            },
            init: function() {}
        }
    }
    );
    t.YtEmbedder = new n,
    e.extend({
        YtEmbedder: new n
    })
}(window, window.overwatch),
window.overwatch = window.overwatch || {},
window.overwatch.BuyMediator = function(t) {
    function e(t) {
        a = t.Sku,
        r = t.Country,
        s = t.Platform,
        l = t.PrimaryRetailer,
        c = t.SecondaryRetailer,
        n(a.eventNameChange, function(t) {
            s.updateList(t.id);
            var e = s.getCurrent()
              , n = r.getCurrent();
            l.setCurrentRetailerByPlatformAndSkuIdAndCountryCode(e, t.id, n),
            c.setCurrentRetailersByCountryCodeAndSkuIdAndPlatform(n, t.id, e)
        }),
        n(r.eventNameChange, function(t) {
            a.updateList(t)
        }),
        n(s.eventNameChange, function(t) {
            var e = a.getCurrent()
              , n = r.getCurrent();
            l.setCurrentRetailerByPlatformAndSkuIdAndCountryCode(t, e.id, n),
            c.setCurrentRetailersByCountryCodeAndSkuIdAndPlatform(n, e.id, t)
        }),
        n(l.eventNameChange, function(t) {}),
        n(c.eventNameChange, function(t) {})
    }
    function n(t, e, n) {
        n = n || this;
        var i = o[t] = o[t] || [];
        i.push({
            context: n,
            callback: e
        })
    }
    function i(t) {
        for (var e = o[t] || [], n = Array.prototype.slice.call(arguments, 1), i = 0; i < e.length; i++) {
            var a = e[i]
              , r = a.context
              , s = a.callback;
            s.apply(r, n)
        }
    }
    var o = {}
      , a = null
      , r = null
      , s = null
      , l = null
      , c = null ;
    return {
        init: e,
        on: n,
        publish: i
    }
}(window.overwatch),
window.overwatch = window.overwatch || {},
window.overwatch.CountryModel = {
    Mediator: null ,
    eventNameChange: null ,
    current: null ,
    $doc: $(document),
    init: function(t) {
        this.Mediator = t.Mediator,
        this.eventNameChange = t.eventNameChange,
        this.current = t.current
    },
    getCurrent: function() {
        return this.current
    },
    setCurrent: function(t) {
        this.current = t,
        this._publish()
    },
    _publish: function() {
        this.Mediator.publish(this.eventNameChange, this.current)
    }
},
function(t, e, n) {
    overwatch.buy = overwatch.buy || {},
    overwatch.buy.navigation = overwatch.buy.navigation || {},
    overwatch.buy.navigation.init = function() {
        function i() {
            var t = c.width();
            return t > 2560 ? (t - 2560) / 2 : 0
        }
        function o(t) {
            var t = t || {
                duration: 0
            }
              , e = r[0].getBoundingClientRect();
            s.velocity({
                left: e.left - i(),
                width: r[0].clientWidth
            }, t)
        }
        var a = n(".edition-select")
          , r = a.children(".active")
          , s = r.children(".active-splash")
          , l = t.overwatch.BuyMediator
          , c = t.overwatch.util;
        "undefined" != typeof s[0] && n(e).on("ready", function(c) {
            var u = s[0].getBoundingClientRect();
            s.velocity({
                left: u.left - i(),
                width: s[0].clientWidth
            }, {
                duration: 0,
                complete: function() {
                    s = s.appendTo(a.parent())
                }
            }),
            l.on("ow.sku.change", function(t) {
                r = a.find("[data-sku-change='" + t.id + "']"),
                o({
                    duration: 200,
                    easing: "easeOutQuad"
                })
            }),
            n(t).on("resize", function() {
                o()
            }),
            n(e).on("ow.buy.form.show ow.buy.form.hide", function() {
                o()
            })
        })
    }
}(window, window.document, window.jQuery),
window.overwatch = window.overwatch || {},
window.overwatch.PlatformModel = {
    Mediator: null ,
    eventNameChange: null ,
    defaultList: null ,
    currentList: null ,
    current: null ,
    defaultPlatform: null ,
    $doc: $(document),
    platformExceptions: null ,
    init: function(t) {
        this.Mediator = t.Mediator,
        this.eventNameChange = t.eventNameChange,
        this.defaultList = t.defaultPlatformList,
        this.currentList = this.defaultList,
        this.current = t.current,
        this.defaultPlatform = t.defaultPlatform,
        this.platformExceptions = t.platformExceptions
    },
    updateList: function(t) {
        var e = this.platformExceptions[t];
        e ? this.currentList = this.defaultList.filter(function(t) {
            return -1 === e.indexOf(t)
        }) : this.currentList = this.defaultList,
        -1 === this.currentList.indexOf(this.current) && this.setCurrent(this.defaultPlatform)
    },
    getList: function() {
        return this.currentList
    },
    getUnavailableList: function() {
        var t = this.currentList;
        return this.defaultList.filter(function(e) {
            return -1 === t.indexOf(e)
        })
    },
    getCurrent: function() {
        return this.current
    },
    setCurrent: function(t) {
        this.current = t,
        this._publish()
    },
    _publish: function() {
        this.Mediator.publish(this.eventNameChange, this.current)
    }
},
window.overwatch = window.overwatch || {},
window.overwatch.PrimaryRetailerModel = {
    Mediator: null ,
    eventNameChange: null ,
    retailerMap: null ,
    currentRetailer: null ,
    platformMap: null ,
    $doc: $(document),
    init: function(t) {
        this.eventNameChange = t.eventNameChange,
        this.retailerMap = t.retailerMap,
        this.currentRetailer = t.currentRetailer,
        this.platformMap = t.platformMap,
        this.Mediator = t.Mediator
    },
    getCurrentRetailer: function() {
        return this.currentRetailer
    },
    setCurrentRetailerByPlatformAndSkuIdAndCountryCode: function(t, e, n) {
        var i = null
          , o = this.platformMap[t].shopName || this.platformMap[t].name
          , a = this.retailerMap[t] || {}
          , r = this._getRetailerUrl(a, e, n);
        r && (i = {
            name: o,
            platform: a.platform,
            href: r
        }),
        this.setCurrentRetailer(i)
    },
    setCurrentRetailer: function(t) {
        this.currentRetailer = t,
        this._publish()
    },
    _getRetailerUrl: function(t, e, n) {
        var i = null ;
        return "ORIGINS" === e && t.countryLinkOrigins && t.countryLinkOrigins[n] ? i = t.countryLinkOrigins[n] : "BASIC" === e && t.countryLinkBasic && t.countryLinkBasic[n] ? i = t.countryLinkBasic[n] : "COLLECTORS" === e && t.countryLinkCollectors && t.countryLinkCollectors[n] ? i = t.countryLinkCollectors[n] : t.skuLinks && (i = t.skuLinks[e]),
        i
    },
    _publish: function() {
        this.Mediator.publish(this.eventNameChange, this.currentRetailer)
    }
},
window.overwatch.SecondaryRetailerModel = {
    Mediator: null ,
    eventNameChange: null ,
    retailerMap: null ,
    currentRetailers: null ,
    $doc: $(document),
    init: function(t) {
        this.Mediator = t.Mediator,
        this.eventNameChange = t.eventNameChange,
        this.retailerMap = t.retailerMap,
        this.currentRetailers = t.currentRetailers || []
    },
    getCurrentRetailers: function() {
        return this.currentRetailers
    },
    setCurrentRetailersByCountryCodeAndSkuIdAndPlatform: function(t, e, n) {
        var i = this.retailerMap[t] || [];
        i = i.filter(function(t) {
            return null === t.platform || t.platform === n
        }).filter(function(t) {
            var n = t.skuLinks[e];
            return void 0 !== n
        }).map(function(t) {
            return {
                name: t.name,
                href: t.skuLinks[e]
            }
        }),
        0 === i.length && (i = null ),
        this.setCurrentRetailers(i)
    },
    setCurrentRetailers: function(t) {
        this.currentRetailers = t,
        this._publish()
    },
    _publish: function() {
        this.Mediator.publish(this.eventNameChange, this.currentRetailers)
    }
},
function(t, e, n, i) {
    overwatch.buy = overwatch.buy || {},
    overwatch.buy.scroll = overwatch.buy.scroll || {},
    overwatch.buy.scroll.init = function() {
        var o = n(e)
          , a = n(".learn-more-tip-container")
          , r = !1
          , s = 0;
        o.on("ready", function(e) {
            function l() {
                c = 0,
                o.off("scroll.learnmore"),
                a.velocity("fadeOut", {
                    duration: 200,
                    easing: "easeOutQuart",
                    complete: function() {
                        a.detach()
                    }
                })
            }
            var c = 1;
            r = n(".detail.active"),
            s = r.offset().top,
            a.on("click", function(t) {
                t.preventDefault(),
                c && (r = n(".detail.active"),
                s = r.offset().top,
                r.velocity("scroll", {
                    duration: 200,
                    easing: "easeOutQuart"
                }),
                l())
            });
            var u = i.debounce(function(e) {
                s <= o.scrollTop() && (l(),
                n(t).off("scroll", u))
            }, 100);
            a.length > 0 && n(t).on("scroll", u)
        })
    }
}(window, window.document, window.jQuery, window._),
window.overwatch = window.overwatch || {},
window.overwatch.SkuModel = {
    Mediator: null ,
    eventNameChange: null ,
    countrySkuMap: null ,
    currentList: null ,
    current: null ,
    currentIndex: null ,
    $doc: $(document),
    init: function(t) {
        this.Mediator = t.Mediator,
        this.eventNameChange = t.eventNameChange,
        this.countrySkuMap = t.countrySkuMap,
        this.currentList = t.currentList,
        this.setCurrentById(t.defaultId)
    },
    getCurrent: function() {
        return this.current
    },
    getPrevious: function() {
        var t = this._mod(this.currentIndex - 1, this.currentList.length);
        return this.currentList[t]
    },
    getNext: function() {
        var t = this._mod(this.currentIndex + 1, this.currentList.length);
        return this.currentList[t]
    },
    getCurrentById: function(t) {
        for (var e = this.currentList.length - 1; e >= 0; e--) {
            var n = this.currentList[e];
            if (n.id === t)
                return n
        }
    },
    setCurrent: function(t) {
        this.current = t,
        this.currentIndex = this.currentList.indexOf(t),
        this._publish()
    },
    setCurrentById: function(t) {
        var e = this.getCurrentById(t);
        this.setCurrent(e)
    },
    updateList: function(t) {
        this.currentList = this.countrySkuMap[t],
        this.setCurrentById(this.current.id)
    },
    _publish: function() {
        this.Mediator.publish(this.eventNameChange, this.current)
    },
    _mod: function(t, e) {
        return (t % e + e) % e
    }
},
function(t, e, n) {
    function i(e) {
        function i() {
            var e = a.data("ytId");
            if (r.mobile() || r.touch()) {
                a.toggleClass("active", !0);
                n("<iframe/>", {
                    attr: {
                        width: "100%",
                        height: "100%",
                        allowFullScreen: !0,
                        frameBorder: 0,
                        src: "https://www.youtube.com/embed/" + e + "?" + n.param(o)
                    }
                }).appendTo(a)
            } else {
                var i = n("<div/>").appendTo(a);
                new t.YT.Player(i[0],{
                    videoId: e,
                    playerVars: o,
                    events: {
                        onReady: function(t) {
                            a.on("click", function() {
                                t.target.playVideo(),
                                a.toggleClass("active", !0)
                            })
                        }
                    }
                });
                a.on("click", function(t) {
                    t.preventDefault(),
                    a.toggleClass("active", !0)
                })
            }
        }
        var o = {
            rel: 0,
            autoplay: 0,
            autohide: 1,
            controls: 1,
            modestbranding: 1,
            showinfo: 0,
            version: 3,
            enablejsapi: 1,
            wmode: "opaque"
        }
          , a = e.$videoTrailer
          , r = t.overwatch.util;
        t.onYouTubeIframeAPIReady = function() {
            i()
        }
    }
    t.overwatch.OriginsTrailers = {
        init: i
    }
}(window, window.document, window.jQuery),
function(t, e, n) {
    function i() {
        o++,
        $.get("/" + t.blizzard.urlLocale + "/blog/next-posts", {
            page: o
        }).then(function(t) {
            return $(".blog-roll .blog-list").append(t.content),
            t.totalPages == t.page ? ($(".blog-load-more").hide(),
            !1) : void 0
        })
    }
    $(".blog-wrap .lightbox").on("click", function(t) {
        return e.helpers.loadImageIntoFrame($(this).attr("href")),
        !1
    }),
    $(".blog-load-more a").click(i);
    var o = 1
}(window, window.app, window.overwatch),
function(t, e, n) {
    e.buy = e.buy || {},
    e.buy.init = function() {
        function i(t, e, i) {
            var o = ot[e]
              , r = o[i] || o.base;
            t.html(r).find("[data-sku-change]").on("click", function() {
                var t = n(this).attr("data-sku-change");
                a(event, t, !0)
            })
        }
        function o() {
            for (var t = _.current, e = S.current.price, n = 0; n < at.length; n++)
                "pc" === t && e ? at[n].$parent.append(at[n].$elem) : at[n].$elem.detach()
        }
        function a(t, e, n) {
            S.setCurrentById(e),
            n && r(),
            t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        }
        function r() {
            var e = "/buy"
              , n = S.getCurrent().id
              , i = t.location.href.indexOf(e)
              , o = t.location.href.substr(0, i + e.length)
              , a = o + "/" + A[n];
            t.history.pushState(S.getCurrent(), t.title, a)
        }
        function s(t) {
            return S.currentList.forEach(function(e, n) {
                return e.id === t ? void (skuExists = !0) : void 0
            }),
            skuExists
        }
        function l() {
            var e, n = t.location.hash;
            for (e in A)
                if (A[e] === n && s(e))
                    return e;
            return null
        }
        function c(t) {
            U.html(t)
        }
        function u(t) {
            G.filter("[value='" + t + "']").prop("checked", !0)
        }
        function d(t) {
            var e = null !== t;
            e ? (dt.detach(),
            Q.append(H),
            H.attr("href", t.href),
            H.find("span").text(t.name)) : (i(dt, "digital"),
            Q.append(dt),
            H.detach())
        }
        function h(t) {
            var e = null !== t && t.length;
            if (e) {
                var n = y(t);
                ht.detach(),
                q.empty(),
                q.append(n)
            } else
                q.empty(),
                i(ht, "physical", S.current.id.toLowerCase()),
                F.append(ht)
        }
        function f(t) {
            W.removeClass(nt),
            W.filter("[data-sku-display='" + t.id + "']").addClass(nt)
        }
        function p(t) {
            B.removeClass("m-active"),
            B.filter("[data-sku-change='" + t.id + "']").addClass("m-active")
        }
        function v(t, e) {
            D.attr("data-sku-change", t.id),
            V.attr("data-sku-change", e.id),
            D.find(".nav-pager-thumb-custom-text").html(t.id),
            V.find(".nav-pager-thumb-custom-text").html(e.id)
        }
        function m(t, e) {
            Z.removeClass(nt),
            G.prop("disabled", !1),
            G.each(function(i, o) {
                var a = o.value;
                if (-1 !== t.indexOf(a)) {
                    o.setAttribute("disabled", !0);
                    var r = n(o).siblings(".platform-warning");
                    r.addClass(nt),
                    r.find(K).text(e.id),
                    r.find(tt).text("Overwatch: Origins Edition").click(function() {
                        S.setCurrentById("ORIGINS"),
                        _.setCurrent(a),
                        event.preventDefault ? event.preventDefault() : event.returnValue = !1
                    })
                }
            })
        }
        function g() {
            var t = e.PlatformModel.currentList;
            if (1 === t.length) {
                var n = t[0];
                _.setCurrent(n);
                for (var o in pt)
                    o !== n ? pt[o].detach() : ft.append(pt[o]);
                i(mt, "platform", n),
                ft.append(mt)
            } else
                for (var o in pt)
                    mt.detach(),
                    ft.append(pt[o])
        }
        function w() {
            var t = I.current;
            wt.text(st.find("option[value=" + t + "]").text())
        }
        function y(e) {
            var n = document.createDocumentFragment();
            e = t.app.util.shuffleArray(e);
            for (var i = 0; i < e.length; i++) {
                var o = e[i]
                  , a = document.createElement("li");
                a.className = "link-list-item";
                var r = document.createElement("a");
                r.className = "link-list-link",
                r.setAttribute("href", o.href),
                r.setAttribute("target", "_blank"),
                r.textContent = o.name,
                a.appendChild(r),
                n.appendChild(a)
            }
            return n
        }
        function b(t, e) {
            L.css("position", t ? "fixed" : "static"),
            L.css("top", t ? -e : "auto"),
            t || x.scrollTop(e)
        }
        function C(e) {
            var n = S.getCurrent()
              , i = _.getCurrent()
              , o = I.getCurrent()
              , a = "product:" + n.id + " - platform:" + i + " - country:" + o;
            t.dataLayer && t.dataLayer.push({
                "analytics.eventPanel": a,
                "analytics.eventPlacement": e,
                event: "buyBar"
            })
        }
        function $(e, n) {
            var i = S.getCurrent()
              , o = _.getCurrent()
              , a = "product:" + i.id + " - platform:" + o;
            t.dataLayer && t.dataLayer.push({
                "analytics.eventPanel": a,
                "analytics.eventPlacement": e + " > " + n,
                event: "buyCountrySwitch"
            })
        }
        var k = t.ow.buyConfig
          , x = n(t)
          , M = n(document)
          , L = n("body")
          , S = t.overwatch.SkuModel
          , I = t.overwatch.CountryModel
          , _ = t.overwatch.PlatformModel
          , T = t.overwatch.PrimaryRetailerModel
          , P = t.overwatch.SecondaryRetailerModel
          , O = t.overwatch.BuyMediator
          , j = t.overwatch.OriginsTrailers
          , R = {
            pc: "Battle.net Shop",
            "xbox-one": "Microsoft Store",
            ps4: "PlayStation Store"
        }
          , A = {
            BASIC: "#overwatch-edition",
            ORIGINS: "#origins-edition",
            COLLECTORS: "#collectors-edition"
        }
          , N = ["basic", "origins", "collectors"]
          , E = N.join(" ");
        S.init({
            eventNameChange: "ow.sku.change",
            countrySkuMap: k.skus,
            currentList: k.skus[k.defaultCountry],
            defaultId: k.defaultSkuId,
            Mediator: O
        }),
        I.init({
            eventNameChange: "ow.country.change",
            current: k.defaultCountry,
            Mediator: O
        }),
        _.init({
            eventNameChange: "ow.platform.change",
            defaultPlatformList: Object.keys(k.platformMap),
            platformMap: k.platformMap,
            current: k.defaultPlatform,
            defaultPlatform: "pc",
            platformExceptions: {
                BASIC: ["xbox-one", "ps4"]
            },
            Mediator: O
        }),
        T.init({
            eventNameChange: "ow.retailer-primary.change",
            retailerMap: k.primaryRetailerMap,
            platformMap: k.platformMap,
            currentRetailer: k.primaryRetailerMap[k.defaultPlatform],
            Mediator: O
        }),
        P.init({
            eventNameChange: "ow.retailer-secondary.change",
            retailerMap: k.secondaryRetailerMap,
            currentRetailers: k.secondaryRetailerMap[k.defaultCountry],
            Mediator: O
        }),
        O.init({
            Sku: S,
            Country: I,
            Platform: _,
            PrimaryRetailer: T,
            SecondaryRetailer: P
        }),
        j.init({
            $videoTrailer: n(".video-wrap")
        });
        for (var B = n(".nav-tabs-item[data-sku-change]"), D = n(".nav-pager-left"), V = n(".nav-pager-right"), W = n("[data-sku-display].is-showable-block"), z = n(".retailer-menu-btn, .mobile-retailer-menu-btn, .js-close"), Q = n(".retailer-wrap.digital"), F = n(".retailer-wrap.physical"), H = Q.find(".primary-retailer-btn"), q = F.find(".link-list"), Y = n(".price-preview"), U = n(".price, .js-price"), X = n(".order-form"), G = (n(".order-form fieldset"),
        n(".order-form .radio-list-item input[type='radio']")), J = n(".js-product-splash"), Z = n(".platform-warning"), K = ".js-platform-warning-label-platform-unsupported", tt = ".js-platform-warning-label-redirect", et = !1, nt = "active", it = 0, ot = t.ow.errorMessages.buy, at = [], rt = 0; rt < U.length; rt++)
            at.push({
                $elem: n(U[rt]),
                $parent: n(U[rt]).parent()
            });
        z.click(function(t) {
            et = !et,
            et ? M.trigger("ow.buy.form.show") : M.trigger("ow.buy.form.hide"),
            t.preventDefault ? t.preventDefault() : t.returnValue = !1
        }),
        n(".blackout.js-close").click(function() {
            C("Close - Background")
        }),
        n(".close.x.js-close").click(function() {
            C("Close - X")
        }),
        Q.on("click", ".primary-retailer-btn", function() {
            var t = R[_.getCurrent()];
            C("Click - " + t)
        }),
        F.on("click", ".link-list-link", function() {
            var t = this.textContent;
            C("Click - Retail - " + t)
        }),
        M.on("ow.buy.form.show", function() {
            et = !0,
            it = x.scrollTop(),
            b(!0, it),
            n(".buy-bar-container").addClass("open"),
            X.addClass(nt),
            Y.addClass(nt),
            C("Open")
        }),
        M.on("ow.buy.form.hide", function() {
            et = !1,
            b(!1, it),
            n(".buy-bar-container").removeClass("open"),
            X.removeClass(nt),
            Y.removeClass(nt)
        });
        var st = n(".js-country-select");
        st.on("change", function() {
            var t = n(this).val()
              , e = I.getCurrent();
            I.setCurrent(t);
            var i = I.getCurrent();
            $(e, i)
        });
        var lt = n("[data-sku-change]");
        lt.click(function(t) {
            var e = n(this).attr("data-sku-change");
            a(t, e, !0)
        });
        var ct = null ;
        t.addEventListener("popstate", function(t) {
            ct = t.state;
            var e = null !== ct ? ct.id : k.defaultSkuId;
            a(t, e, !1)
        }),
        t.addEventListener("hashchange", function(t) {
            var e = l();
            a(null , e ? e : k.defaultSkuId, !1)
        }),
        G.click(function(t) {
            var e = n(this).val();
            _.setCurrent(e)
        });
        var ut = n("body, .buy-bar");
        O.on("ow.sku.change", function(t) {
            var e = S.getPrevious()
              , n = S.getNext();
            ut.toggleClass(E, !1),
            ut.toggleClass(t.id.toLowerCase(), !0),
            c(t.price),
            f(t),
            p(t),
            v(e, n);
            var i = _.getUnavailableList();
            m(i, t),
            o()
        }),
        O.on("ow.retailer-primary.change", function(t) {
            d(t)
        }),
        O.on("ow.retailer-secondary.change", function(t) {
            h(t)
        }),
        O.on("ow.platform.change", function(t) {
            u(t),
            J.attr("data-platform-display", t),
            o()
        });
        var dt = n('<div class="error-msg"></div>')
          , ht = n('<div class="error-msg"></div>');
        h(e.SecondaryRetailerModel.currentRetailers);
        for (var ft = n(".buy-bar .radio-list"), pt = {}, vt = e.PlatformModel.defaultList, mt = n('<li class="radio-list-item error-msg"></li>'), rt = 0; rt < vt.length; rt++) {
            var gt = vt[rt];
            pt[gt] = G.filter("[value=" + gt + "]").parent()
        }
        var wt = n(".custom-select .select-title .text");
        w(),
        O.on("ow.sku.change", function(t) {
            g()
        }),
        O.on("ow.country.change", function(t) {
            w(),
            g()
        });
        var yt = l();
        a(null , yt ? yt : k.defaultSkuId, !1),
        _.setCurrent(k.defaultPlatform);
        var bt = st.find("option")
          , Ct = bt.sort(function(t, e) {
            return t.text.charAt(0).toLowerCase().charCodeAt(0) - e.text.charAt(0).toLowerCase().charCodeAt(0)
        });
        st.empty().append(Ct)
    }
}(window, window.overwatch, window.jQuery),
function(t, e, n, i, o) {
    function a(e, n, a) {
        i(".js-career-select").on("change", function(t) {
            $this = i(this);
            var e = $this.val()
              , n = $this.data("groupId")
              , o = i('.toggle-display[data-group-id="' + n + '"]', $this.parent().parent());
            o.removeClass("is-active"),
            o.filter('[data-category-id="' + e + '"]').addClass("is-active"),
            i(".js-stats:visible").masonry({
                itemSelector: ".column"
            })
        }),
        i(".js-career-select").trigger("change"),
        i(".js-show-more-heroes").on("click", function() {
            var t = i(this)
              , e = t.siblings(".progress-category")
              , n = "";
            t.data("showMore") ? (e.removeClass("is-partial"),
            t.data("showMore", !1)) : (e.addClass("is-partial"),
            t.data("showMore", !0)),
            n = t.text(),
            t.text(t.data("label")),
            t.data("label", n)
        });
        var r = i("#quick-play, #competitive-play, #ai-play")
          , s = i("#profile-btn-switcher a");
        i("#competitive-play, #ai-play").css("display", "none");
        var l = [];
        i(".js-career-select").each(function() {
            l.push(i(this).dropdown())
        }),
        i("#profile-btn-switcher a").on("click", function(t) {
            for (var e = 0; e < l.length; e++)
                l[e].updateWidth();
            var n = i(this);
            return s.removeClass("is-active"),
            n.addClass("is-active"),
            r.css("display", "none").removeClass("active"),
            i(n.attr("href")).css("display", "block").addClass("active"),
            !1
        });
        var c = i("#profile-platforms")
          , u = o.template(document.getElementById("platform-btn-template").innerHTML);
        i.ajax("/" + clientVars.urlLocale + "/career/get-platforms/" + e).done(function(t) {
            for (var e, i = "", o = "", r = 0; r < t.length; r++)
                t[r].hasAccount === !0 && (e = "pc" === t[r].platform ? t[r].platform + " " + t[r].region : t[r].platform,
                i = "",
                t[r].platform === n && t[r].region === a && (i = " is-active"),
                o += u({
                    careerLink: "/" + clientVars.urlLocale + t[r].careerLink,
                    platformName: e,
                    classes: i
                }));
            c.append(o)
        }).fail(function(e, i) {
            var o = "pc" === n ? n + " " + a : n
              , r = u({
                careerLink: t.location.href,
                platformName: o,
                classes: " is-active"
            });
            c.append(r)
        }).always(function() {
            c.removeClass("loading")
        });
        var d = function(t, e, n) {
            return t.offsetLeft + t.offsetWidth / 2 - e.offsetWidth / 2 - n
        }
          , h = !1;
        i("[data-tooltip]").on("click", function() {
            var t = i(this)
              , e = t.data("tooltip")
              , n = t
              , o = i("#" + e)
              , a = i("#" + e + " .tooltip-arrow")
              , r = 0;
            if (h !== e) {
                i("#" + h).removeClass("is-active"),
                h = e,
                o.addClass("is-active");
                var s = o[0].offsetWidth
                  , r = n[0].offsetLeft
                  , l = i("#achievements-section .toggle-display.is-active")[0].offsetWidth;
                return s + r > l && (r = l - s),
                a.css("left", d(n[0], a[0], r)),
                void o.css("left", r)
            }
            h = !1,
            i("#" + e).removeClass("is-active")
        }),
        i(t).resize(o.debounce(function() {
            var t = i(".tooltip-tip.is-active")
              , e = i(".tooltip-tip.is-active .tooltip-arrow")
              , n = i('[data-tooltip="' + t.attr("id") + '"]')
              , o = t[0].offsetWidth
              , a = n[0].offsetLeft
              , r = i("#achievements-section .toggle-display.is-active")[0].offsetWidth;
            o + a > r && (a = r - o),
            e.css("left", d(n[0], e[0], a))
        }, 500)),
        i(".js-stats:visible").masonry({
            itemSelector: ".column"
        })
    }
    var r = {
        init: a
    };
    e.extend({
        career: r
    })
}(window, window.app, window.overwatch, window.jQuery, window._),
!function(t, e) {
    e(t, t.app, t.overwatch, t.jQuery)
}(this, function(t, e, n, i) {
    function o() {
        function n() {
            var t = o.getBoundingClientRect();
            t.top <= t.height / 2 && (r || (r = 1,
            o.play()))
        }
        var o = i("#scroll-to-play")[0]
          , r = 0;
        i(t.document).on("scroll resize", _.throttle(n, 32)),
        i(".overwatch-trailer").on("click", function(t) {
            var n = i(this).attr("data-yt-id");
            a.mobile() || a.touch() || (t.preventDefault(),
            e.helpers.loadVideoIntoFrame(n))
        }),
        n(),
        t.Maps.init()
    }
    var a = n.util;
    e.extend({
        game: {
            init: o
        }
    })
}),
function(t, e, n) {
    document.exitFullscreen = document.exitFullscreen || document.mozCancelFullscreen || document.webkitExitFullscreen || _.noop,
    t.Login = {
        open: function() {
            t.location = "?login"
        }
    },
    n.init({
        $menuMainWrap: $(".menu-main-wrap"),
        $menuMain: $(".menu-main"),
        $socialMenuMain: $(".menu-social.desktop-only"),
        $menuMainPin: $(".menu-main-wrap .menu-main-pin"),
        $buyButtonWrap: $(".erebos-button-container"),
        menuMainThreshold: 100,
        hiddenClass: "menu-hidden",
        fixedClass: "is-fixed"
    }),
    YtEmbedder.init(),
    $(document).on("webkitfullscreenchange mozfullscreenchange fullscreenchange", function() {
        var t = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen || null ;
        $(document.body).toggleClass("is-fullscreen", t)
    }),
    $(".promo-video-link").on("click", function(n) {
        var i = $(this).attr("data-yt-id");
        e.util.mobile() || e.util.touch() || (n.preventDefault(),
        t.app.helpers.loadVideoIntoFrame(i))
    })
}(window, window.overwatch, window.MainMenu),
function(t, e, n, i, o) {
    var a = {};
    a.setupMediaEvents = function() {
        i(".media-thumbnail").on("click", function() {
            var t = i(this).data("media-type");
            switch (t) {
            case "youtube":
                var n = i(this).data("yt-id");
                e.helpers.loadVideoIntoFrame(n);
                break;
            case "img":
                e.helpers.loadImageIntoFrame(i(this).attr("href"));
                break;
            default:
                return !0
            }
            return !1
        })
    }
    ,
    a.loadTabs = function() {
        var e = t.location.hash.substr(1)
          , n = i("#details")
          , o = n.find(".hero-detail-video")
          , a = n.find(".hero-detail-background")
          , r = i("#details-tabs")
          , s = function() {
            switch (e) {
            case "overview":
            case "story":
                return !0;
            default:
                return !1
            }
        }();
        this.tabs = new Foundation.Tabs(r),
        r.on("change.zf.tabs", function() {
            var t = i(this).find('[aria-selected="true"]')
              , e = t.attr("aria-controls");
            "story" === e ? (o.removeClass("is-active"),
            a.addClass("is-active")) : (o.addClass("is-active"),
            a.removeClass("is-active"))
        }),
        s && this.tabs.selectTab("#" + e)
    }
    ,
    a.loadShowcase = function() {
        var e = i(".ability-showcase")
          , a = new n.AbilityShowcase(".ability-showcase")
          , r = !1
          , s = !1
          , l = o.debounce(function() {
            var t = e.is(":visible");
            t && !r ? (a.init(),
            r = !0,
            s = !0) : t && !s ? (a.play(),
            s = !0) : t || (a.stop(),
            s = !1)
        }, 250);
        i(t).on("resize", l),
        l()
    }
    ,
    a.init = function(t) {
        this.setupMediaEvents(),
        this.loadTabs(),
        this.loadShowcase(),
        this.initHeroesGallery(t)
    }
    ,
    a.initHeroesGallery = function(t) {
        var e = i("[data-js-media-gallery=hero]")
          , a = e.find("[data-media-id]")
          , r = i("[data-load-more-media]")
          , s = function() {
            e.removeClass("is-partial"),
            r.remove()
        }
        ;
        if (a.length <= 4)
            return void s();
        r.on("click", function(t) {
            s()
        });
        var l = n.gallery.get("hero");
        o.each(t, function(t, e) {
            l.add({
                data: t,
                id: t.id
            })
        })
    }
    ,
    e.extend({
        hero_details: a
    })
}(window, window.app, window.overwatch, window.jQuery, window._),
function(t, e, n) {
    var i = {};
    i.init = function() {
        n.HeroSelector.init({
            $container: $("#heroes-selector-container"),
            $sizer: !1,
            $navigationLinks: $("#hero-selector-navigation-selector .navigation-link"),
            itemSelector: "#heroes-selector-container .hero-portrait-detailed-container"
        });
        var t = location.href.substr(location.href.indexOf("#") + 1).toUpperCase();
        -1 !== ["OFFENSE", "DEFENSE", "TANK", "SUPPORT"].indexOf(t) && n.HeroSelector.filter(t)
    }
    ,
    e.extend({
        heroes: i
    })
}(window, window.app, window.overwatch),
function(t, e, n, i, o) {
    var a = {}
      , r = n.util
      , s = "is-active"
      , l = function() {
        var t, e = document.createElement("fakeelement"), n = {
            animation: "animationend",
            OAnimation: "oAnimationEnd",
            MozAnimation: "animationend",
            WebkitAnimation: "webkitAnimationEnd"
        };
        for (t in n)
            if (void 0 !== e.style[t])
                return n[t];
        return !1
    }();
    a.registerSpotlight = function(e) {
        function a() {
            if (d.is(":visible")) {
                var t = i(this)
                  , e = t.data()
                  , n = e.heroImage
                  , o = e.heroName
                  , a = e.heroDescription;
                t.addClass(s),
                c !== o && (u && u.removeClass(s),
                r.loadImage(n, function() {
                    r.setHeader(o),
                    r.setCaption(a)
                }),
                u = t,
                c = o)
            }
        }
        var r = new n.Spotlight(e)
          , l = i(".js-hero-portrait-group")
          , c = ""
          , u = null
          , d = i(e)
          , h = l.find(".hero-portrait");
        l.on("mouseenter touchend", ".hero-portrait", a);
        var f = l.find(".hero-portrait.pre-selected").first();
        a.apply(f[0]);
        var p = o.debounce(function() {
            d.is(":visible") ? (u = u || f,
            a.apply(u[0])) : h.removeClass(s)
        }, 250);
        i(t).on("resize", p)
    }
    ,
    a.trailerSetup = function() {
        i(".intro-trailer, .video-cta").on("click", function(t) {
            var n = i(this).data("yt-id");
            r.mobile() || r.touch() || (t.preventDefault(),
            e.helpers.loadVideoIntoFrame(n))
        })
    }
    ,
    a.rotatingCTA = function() {
        var t = i(".buy-cta .btn-art")
          , e = 1
          , n = 0
          , o = function(e) {
            i(t[e]).removeClass("trans-out").addClass("trans-in")
        }
          , a = function(e) {
            i(t[e]).removeClass("trans-in").addClass("trans-out")
        }
        ;
        i.each(t, function(r, s) {
            i(s).on(l, function(s) {
                i(this).hasClass("trans-in") && (e = r + 1 > t.length - 1 ? 0 : r + 1,
                n = r,
                a(n),
                o(e))
            })
        }),
        l !== !1 && setTimeout(function() {
            t.removeClass("fallback"),
            o(e),
            a(n)
        }, 3e3)
    }
    ,
    a.fftfBGTransition = function() {
        var t = i(".bg-fftf")
          , e = 0
          , n = 2
          , o = function(e) {
            i(t[e]).removeClass("trans-out").addClass("trans-in")
        }
          , a = function(e) {
            i(t[e]).removeClass("trans-in").removeClass("trans-out").addClass("trans-out-latest")
        }
        ;
        i.each(t, function(r, s) {
            i(s).on(l, function(s) {
                i(this).hasClass("trans-in") && (e = r + 1 > t.length - 1 ? 0 : r + 1,
                n = r,
                t.removeClass("trans-out-latest").addClass("trans-out"),
                a(n),
                o(e))
            })
        })
    }
    ,
    a.init = function() {
        Array.prototype.forEach.call(document.querySelectorAll(".spotlight"), this.registerSpotlight),
        this.trailerSetup(),
        this.rotatingCTA(),
        this.fftfBGTransition()
    }
    ,
    e.extend({
        home: a
    })
}(window, window.app, window.overwatch, window.jQuery, window._),
function(t, e, n, i, o) {
    var a = {};
    a.init = function() {
        e.menuScroll.init({
            menuSelector: "#sub-nav-menu",
            timeToHideMs: 5e3
        })
    }
    ,
    a.init(),
    app.extend({
        media: a
    })
}(window, window.overwatch, window.Media, window.MediaLightbox, window.SecondaryMenu),
function(t, e, n, i, o) {
    function a(e) {
        var n = i(".search-results")
          , a = i("#search-results-count")
          , r = o.template(document.getElementById("search-result-item-template").innerHTML);
        i.ajax("/" + clientVars.urlLocale + "/search/account-by-name/" + encodeURIComponent(e)).done(function(e) {
            if (1 === e.length)
                return void (t.location.href = "/" + clientVars.urlLocale + e[0].careerLink);
            for (var i = 0; i < e.length; i++) {
                var s = i === e.length - 1
                  , l = s ? " end" : ""
                  , c = r({
                    careerLink: "/" + clientVars.urlLocale + e[i].careerLink,
                    portraitUrl: e[i].portrait,
                    classes: l,
                    careerLevel: e[i].level,
                    platformDisplayName: e[i].platformDisplayName
                });
                n.append(c)
            }
            if (0 === e.length) {
                var u = o.template(document.getElementById("search-result-zero-template").innerHTML);
                n.append(u())
            }
            a.text(e.length)
        }).fail(function(t, e) {
            var i = o.template(document.getElementById("search-result-fail-template").innerHTML);
            n.append(i())
        }).always(function() {
            n.removeClass("loading")
        })
    }
    var r = {
        loadResults: a
    };
    e.extend({
        search: r
    })
}(window, window.app, window.overwatch, window.jQuery, window._);
