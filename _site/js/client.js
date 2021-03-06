/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
function triggerGoal(n) {
    n && $.ajax({
        url: "/api/personalisation/triggergoal?goalid=" + n,
        method: "GET",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function() {},
        fail: function(n, t) {
            console.log("Request failed: " + t)
        }
    })
}
function triggerDownloadEvent(n) {
    n && $.ajax({
        url: "/api/personalisation/triggerdownloadevent?mediaId=" + n,
        method: "GET",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function() {},
        fail: function(n, t) {
            console.log("Request failed: " + t)
        }
    })
}
function triggerSearchEvent(n) {
    n && $.ajax({
        url: "/api/personalisation/triggersearchevent?query=" + n,
        method: "GET",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function() {},
        fail: function(n, t) {
            console.log("Request failed: " + t)
        }
    })
}
function onYouTubeIframeAPIReady() {
    if (typeof bga.sc.feature.media.playerInfoList != "undefined")
        for (var n = 0; n < bga.sc.feature.media.playerInfoList.length; n++)
            bga.sc.feature.media.createPlayer(bga.sc.feature.media.playerInfoList[n])
}
function onPlayerReady(n) {
    var t = n.target && n.target.getDuration();
    t && $("#totalVideoTimeLabel-" + n.target.playerInfo.videoData.video_id).append("Time: " + bga.sc.global.UI.displayInMMSS(t))
}
function onPlayerStateChange(n) {
    n.data == YT.PlayerState.PLAYING ? bga.sc.feature.media.playerPlaying(n.target) : n.data == YT.PlayerState.ENDED ? ($("#media-player-button-" + n.target.playerInfo.videoData.video_id).css("visibility", "visible"),
    $("#media-player-player-youtube-" + n.target.playerInfo.videoData.video_id).css("visibility", "hidden"),
    bga.sc.feature.media.playerNotPlaying(n.target)) : bga.sc.feature.media.playerNotPlaying(n.target)
}
function onPlayVideoClick(n) {
    $("#media-player-button-" + n).css("visibility", "hidden");
    $("#media-player-player-youtube-" + n).css("visibility", "visible");
    var t = YT.get(bga.sc.feature.media.getYTVideoId(n));
    t.playVideo()
}
function RefreshPagination(n, t, i) {
    var r, f, u;
    $(".search-pagination").html("");
    r = CalculateTotalPages(t, i);
    f = IsPagerNavigationDisplayed(n, r);
    f === !0 && (bga.sc.global.UI.isWindowThin() ? ($(".search-pagination").append("<ul>"),
    DisplayPreviousNavigation(n, !0),
    DisplayCurrentPageText(n, r, !0),
    DisplayNextNavigation(n, r, !0),
    $(".search-pagination").append("<\/ul>")) : ($(".search-pagination").append("<ul>"),
    DisplayPreviousNavigation(n, !1),
    u = GetPageNumberList(n, r),
    u && u.length > 0 && DisplayPagerNavigation(u, n),
    DisplayNextNavigation(n, r, !1),
    $(".search-pagination").append("<\/ul>"),
    DisplayCurrentPageText(n, r, !1)));
    bga.sc.global.UI.addLinkEventListener()
}
function IsPagerNavigationDisplayed(n, t) {
    return n && t && t > 1
}
function DisplayPreviousNavigation(n, t) {
    var i, r;
    if (n > 1) {
        const u = t ? "<<" : "<< First";
        i = '<li><span tabindex="0" role="link" onClick=onChangePage(1)>' + u + "<\/span><\/li>";
        $(".search-pagination ul").append(i);
        const f = t ? "<" : "< Previous";
        r = '<li><span tabindex="0" role="link" onClick=onChangePage(' + (n * 1 - 1).toString() + ")>" + f + "<\/span><\/li>";
        $(".search-pagination ul").append(r)
    }
}
function DisplayPagerNavigation(n, t) {
    n.forEach(function(n) {
        DisplayPagerNumbers(n, t)
    })
}
function DisplayNextNavigation(n, t, i) {
    var r, u;
    if (n < t) {
        const f = i ? ">" : "Next >";
        r = '<li><span tabindex="0" role="link" onClick=onChangePage(' + (n * 1 + 1).toString() + ")>" + f + "<\/span><\/li>";
        $(".search-pagination ul").append(r);
        const e = i ? ">>" : "Last >>";
        u = '<li><span tabindex="0" role="link" onClick=onChangePage(' + t.toString() + ")>" + e + "<\/span><\/li>";
        $(".search-pagination ul").append(u)
    }
}
function DisplayCurrentPageText(n, t, i) {
    const r = i ? "li" : "p";
    var u = "<" + r + " class=search-pagination-current-page-text>Page " + n.toString() + " of " + t.toString() + "<\/" + r + ">";
    const f = i ? ".search-pagination ul" : ".search-pagination";
    $(f).append(u)
}
function CalculateTotalPages(n, t) {
    return n === 0 ? 0 : n < t ? 1 : Math.ceil(n / t)
}
function GetPageNumberList(n, t) {
    var f = 0, i = t, u, r;
    if (!(i <= 1)) {
        n < 3 && (f = 3 - n,
        minindex = 1);
        i > 5 && (i = n * 1 + 2 + f * 1,
        i > t && (i = t));
        u = [];
        r = n - 2;
        r < 0 && (r = 1);
        for (let n = r; n <= i; n++)
            n > 0 && u.push(n);
        return u
    }
}
function DisplayPagerNumbers(n, t) {
    if (n) {
        var i = ""
          , r = 'tabindex="0" role="link" '
          , u = "onClick = onChangePage(" + n + ")";
        t * 1 == n * 1 && (i = 'class="active"',
        r = "",
        u = "");
        var f = "<li key=" + n + ' class="page-item"><span ' + r + i + u + ">"
          , e = f + n + "<\/span><\/li>";
        $(".search-pagination ul").append(e)
    }
}
function updatePathways() {
    $(".image-pathway-list").width() > 991 ? ($(".image-pathway-list-block").removeClass("col-lg-6"),
    $(".image-pathway-list-block").addClass("col-lg-4"),
    $(".image-pathway-list-block").removeClass("col-md-6"),
    $(".image-pathway-list-block").addClass("col-md-4"),
    $(".image-pathway-list-block").removeClass("col-sm-6"),
    $(".image-pathway-list-block").addClass("col-sm-4")) : ($(".image-pathway-list-block").removeClass("col-lg-4"),
    $(".image-pathway-list-block").addClass("col-lg-6"),
    $(".image-pathway-list-block").removeClass("col-md-4"),
    $(".image-pathway-list-block").addClass("col-md-6"),
    $(".image-pathway-list-block").removeClass("col-sm-4"),
    $(".image-pathway-list-block").addClass("col-sm-6"));
    $(".light-pathway-list").width() <= 768 ? ($(".light-pathway-list-wrapper").removeClass("col-md-4"),
    $(".light-pathway-list-wrapper").addClass("col-md-6")) : ($(".light-pathway-list-wrapper").removeClass("col-md-6"),
    $(".light-pathway-list-wrapper").addClass("col-md-4"));
    $(".main-section").find(".twoCol39-right").length > 0 && ($(".image-pathway-list").parent().parent().removeClass("container-fluid"),
    $(".hero-pathway-list-card").parent().parent().removeClass("container-fluid"),
    $(".image-pathway-list-body").css({
        "padding-left": "12px",
        "padding-right": "12px"
    }),
    $(".image-pathway-list").width() > 768 ? ($(".image-pathway-list-block").removeClass("col-md-6"),
    $(".image-pathway-list-block").addClass("col-md-4")) : ($(".image-pathway-list-block").removeClass("col-md-4"),
    $(".image-pathway-list-block").addClass("col-md-6")));
    $(".main-section").find(".hero-pathway-list-content-wrapper").length > 0 && $(".main-section").find(".hero-pathway-list-content-wrapper").each(function() {
        $(this).width() < 450 && $(this).find(".hero-pathway-list-content-right").css({
            display: "none"
        })
    })
}
!function(n, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = n.document ? t(n, !0) : function(n) {
        if (!n.document)
            throw new Error("jQuery requires a window with a document");
        return t(n)
    }
    : t(n)
}("undefined" != typeof window ? window : this, function(n, t) {
    "use strict";
    function br(n, t, i) {
        var r, e, u = (i = i || f).createElement("script");
        if (u.text = n,
        t)
            for (r in ee)
                (e = t[r] || t.getAttribute && t.getAttribute(r)) && u.setAttribute(r, e);
        i.head.appendChild(u).parentNode.removeChild(u)
    }
    function it(n) {
        return null == n ? n + "" : "object" == typeof n || "function" == typeof n ? ri[pr.call(n)] || "object" : typeof n
    }
    function pi(n) {
        var t = !!n && "length"in n && n.length
          , i = it(n);
        return !u(n) && !tt(n) && ("array" === i || 0 === t || "number" == typeof t && 0 < t && t - 1 in n)
    }
    function c(n, t) {
        return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase()
    }
    function bi(n, t, r) {
        return u(t) ? i.grep(n, function(n, i) {
            return !!t.call(n, i, n) !== r
        }) : t.nodeType ? i.grep(n, function(n) {
            return n === t !== r
        }) : "string" != typeof t ? i.grep(n, function(n) {
            return -1 < ii.call(t, n) !== r
        }) : i.filter(t, n, r)
    }
    function uu(n, t) {
        while ((n = n[t]) && 1 !== n.nodeType)
            ;
        return n
    }
    function ut(n) {
        return n
    }
    function fi(n) {
        throw n;
    }
    function fu(n, t, i, r) {
        var f;
        try {
            n && u(f = n.promise) ? f.call(n).done(t).fail(i) : n && u(f = n.then) ? f.call(n, t, i) : t.apply(void 0, [n].slice(r))
        } catch (n) {
            i.apply(void 0, [n])
        }
    }
    function oi() {
        f.removeEventListener("DOMContentLoaded", oi);
        n.removeEventListener("load", oi);
        i.ready()
    }
    function ce(n, t) {
        return t.toUpperCase()
    }
    function y(n) {
        return n.replace(se, "ms-").replace(he, ce)
    }
    function pt() {
        this.expando = i.expando + pt.uid++
    }
    function ou(n, t, i) {
        var u, r;
        if (void 0 === i && 1 === n.nodeType)
            if (u = "data-" + t.replace(ae, "-$&").toLowerCase(),
            "string" == typeof (i = n.getAttribute(u))) {
                try {
                    i = "true" === (r = i) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : le.test(r) ? JSON.parse(r) : r)
                } catch (n) {}
                o.set(n, t, i)
            } else
                i = void 0;
        return i
    }
    function hu(n, t, r, u) {
        var s, h, c = 20, l = u ? function() {
            return u.cur()
        }
        : function() {
            return i.css(n, t, "")
        }
        , o = l(), e = r && r[3] || (i.cssNumber[t] ? "" : "px"), f = n.nodeType && (i.cssNumber[t] || "px" !== e && +o) && wt.exec(i.css(n, t));
        if (f && f[3] !== e) {
            for (o /= 2,
            e = e || f[3],
            f = +o || 1; c--; )
                i.style(n, t, f + e),
                (1 - h) * (1 - (h = l() / o || .5)) <= 0 && (c = 0),
                f /= h;
            f *= 2;
            i.style(n, t, f + e);
            r = r || []
        }
        return r && (f = +f || +o || 0,
        s = r[1] ? f + (r[1] + 1) * r[2] : +r[2],
        u && (u.unit = e,
        u.start = f,
        u.end = s)),
        s
    }
    function et(n, t) {
        for (var h, f, a, s, c, l, e, o = [], u = 0, v = n.length; u < v; u++)
            (f = n[u]).style && (h = f.style.display,
            t ? ("none" === h && (o[u] = r.get(f, "display") || null,
            o[u] || (f.style.display = "")),
            "" === f.style.display && kt(f) && (o[u] = (e = c = s = void 0,
            c = (a = f).ownerDocument,
            l = a.nodeName,
            (e = di[l]) || (s = c.body.appendChild(c.createElement(l)),
            e = i.css(s, "display"),
            s.parentNode.removeChild(s),
            "none" === e && (e = "block"),
            di[l] = e)))) : "none" !== h && (o[u] = "none",
            r.set(f, "display", h)));
        for (u = 0; u < v; u++)
            null != o[u] && (n[u].style.display = o[u]);
        return n
    }
    function s(n, t) {
        var r;
        return r = "undefined" != typeof n.getElementsByTagName ? n.getElementsByTagName(t || "*") : "undefined" != typeof n.querySelectorAll ? n.querySelectorAll(t || "*") : [],
        void 0 === t || t && c(n, t) ? i.merge([n], r) : r
    }
    function gi(n, t) {
        for (var i = 0, u = n.length; i < u; i++)
            r.set(n[i], "globalEval", !t || r.get(t[i], "globalEval"))
    }
    function vu(n, t, r, u, f) {
        for (var e, o, p, a, w, v, c = t.createDocumentFragment(), y = [], l = 0, b = n.length; l < b; l++)
            if ((e = n[l]) || 0 === e)
                if ("object" === it(e))
                    i.merge(y, e.nodeType ? [e] : e);
                else if (au.test(e)) {
                    for (o = o || c.appendChild(t.createElement("div")),
                    p = (cu.exec(e) || ["", ""])[1].toLowerCase(),
                    a = h[p] || h._default,
                    o.innerHTML = a[1] + i.htmlPrefilter(e) + a[2],
                    v = a[0]; v--; )
                        o = o.lastChild;
                    i.merge(y, o.childNodes);
                    (o = c.firstChild).textContent = ""
                } else
                    y.push(t.createTextNode(e));
        for (c.textContent = "",
        l = 0; e = y[l++]; )
            if (u && -1 < i.inArray(e, u))
                f && f.push(e);
            else if (w = ft(e),
            o = s(c.appendChild(e), "script"),
            w && gi(o),
            r)
                for (v = 0; e = o[v++]; )
                    lu.test(e.type || "") && r.push(e);
        return c
    }
    function ot() {
        return !0
    }
    function st() {
        return !1
    }
    function we(n, t) {
        return n === function() {
            try {
                return f.activeElement
            } catch (n) {}
        }() == ("focus" === t)
    }
    function nr(n, t, r, u, f, e) {
        var o, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof r && (u = u || r,
            r = void 0),
            t)
                nr(n, s, r, u, t[s], e);
            return n
        }
        if (null == u && null == f ? (f = r,
        u = r = void 0) : null == f && ("string" == typeof r ? (f = u,
        u = void 0) : (f = u,
        u = r,
        r = void 0)),
        !1 === f)
            f = st;
        else if (!f)
            return n;
        return 1 === e && (o = f,
        (f = function(n) {
            return i().off(n),
            o.apply(this, arguments)
        }
        ).guid = o.guid || (o.guid = i.guid++)),
        n.each(function() {
            i.event.add(this, t, f, u, r)
        })
    }
    function hi(n, t, u) {
        u ? (r.set(n, t, !1),
        i.event.add(n, t, {
            namespace: !1,
            handler: function(n) {
                var o, e, f = r.get(this, t);
                if (1 & n.isTrigger && this[t]) {
                    if (f.length)
                        (i.event.special[t] || {}).delegateType && n.stopPropagation();
                    else if (f = b.call(arguments),
                    r.set(this, t, f),
                    o = u(this, t),
                    this[t](),
                    f !== (e = r.get(this, t)) || o ? r.set(this, t, !1) : e = {},
                    f !== e)
                        return n.stopImmediatePropagation(),
                        n.preventDefault(),
                        e.value
                } else
                    f.length && (r.set(this, t, {
                        value: i.event.trigger(i.extend(f[0], i.Event.prototype), f.slice(1), this)
                    }),
                    n.stopImmediatePropagation())
            }
        })) : void 0 === r.get(n, t) && i.event.add(n, t, ot)
    }
    function pu(n, t) {
        return c(n, "table") && c(11 !== t.nodeType ? t : t.firstChild, "tr") && i(n).children("tbody")[0] || n
    }
    function no(n) {
        return n.type = (null !== n.getAttribute("type")) + "/" + n.type,
        n
    }
    function to(n) {
        return "true/" === (n.type || "").slice(0, 5) ? n.type = n.type.slice(5) : n.removeAttribute("type"),
        n
    }
    function wu(n, t) {
        var u, c, f, s, h, l, a, e;
        if (1 === t.nodeType) {
            if (r.hasData(n) && (s = r.access(n),
            h = r.set(t, s),
            e = s.events))
                for (f in delete h.handle,
                h.events = {},
                e)
                    for (u = 0,
                    c = e[f].length; u < c; u++)
                        i.event.add(t, f, e[f][u]);
            o.hasData(n) && (l = o.access(n),
            a = i.extend({}, l),
            o.set(t, a))
        }
    }
    function ht(n, t, f, o) {
        t = yr.apply([], t);
        var a, w, l, v, h, b, c = 0, y = n.length, d = y - 1, p = t[0], k = u(p);
        if (k || 1 < y && "string" == typeof p && !e.checkClone && de.test(p))
            return n.each(function(i) {
                var r = n.eq(i);
                k && (t[0] = p.call(this, i, r.html()));
                ht(r, t, f, o)
            });
        if (y && (w = (a = vu(t, n[0].ownerDocument, !1, n, o)).firstChild,
        1 === a.childNodes.length && (a = w),
        w || o)) {
            for (v = (l = i.map(s(a, "script"), no)).length; c < y; c++)
                h = a,
                c !== d && (h = i.clone(h, !0, !0),
                v && i.merge(l, s(h, "script"))),
                f.call(n[c], h, c);
            if (v)
                for (b = l[l.length - 1].ownerDocument,
                i.map(l, to),
                c = 0; c < v; c++)
                    h = l[c],
                    lu.test(h.type || "") && !r.access(h, "globalEval") && i.contains(b, h) && (h.src && "module" !== (h.type || "").toLowerCase() ? i._evalUrl && !h.noModule && i._evalUrl(h.src, {
                        nonce: h.nonce || h.getAttribute("nonce")
                    }) : br(h.textContent.replace(ge, ""), h, b))
        }
        return n
    }
    function bu(n, t, r) {
        for (var u, e = t ? i.filter(t, n) : n, f = 0; null != (u = e[f]); f++)
            r || 1 !== u.nodeType || i.cleanData(s(u)),
            u.parentNode && (r && ft(u) && gi(s(u, "script")),
            u.parentNode.removeChild(u));
        return n
    }
    function ni(n, t, r) {
        var o, s, h, f, u = n.style;
        return (r = r || ci(n)) && ("" !== (f = r.getPropertyValue(t) || r[t]) || ft(n) || (f = i.style(n, t)),
        !e.pixelBoxStyles() && tr.test(f) && io.test(t) && (o = u.width,
        s = u.minWidth,
        h = u.maxWidth,
        u.minWidth = u.maxWidth = u.width = f,
        f = r.width,
        u.width = o,
        u.minWidth = s,
        u.maxWidth = h)),
        void 0 !== f ? f + "" : f
    }
    function ku(n, t) {
        return {
            get: function() {
                if (!n())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    function ir(n) {
        var t = i.cssProps[n] || nf[n];
        return t || (n in gu ? n : nf[n] = function(n) {
            for (var i = n[0].toUpperCase() + n.slice(1), t = du.length; t--; )
                if ((n = du[t] + i)in gu)
                    return n
        }(n) || n)
    }
    function uf(n, t, i) {
        var r = wt.exec(t);
        return r ? Math.max(0, r[2] - (i || 0)) + (r[3] || "px") : t
    }
    function rr(n, t, r, u, f, e) {
        var o = "width" === t ? 1 : 0
          , h = 0
          , s = 0;
        if (r === (u ? "border" : "content"))
            return 0;
        for (; o < 4; o += 2)
            "margin" === r && (s += i.css(n, r + w[o], !0, f)),
            u ? ("content" === r && (s -= i.css(n, "padding" + w[o], !0, f)),
            "margin" !== r && (s -= i.css(n, "border" + w[o] + "Width", !0, f))) : (s += i.css(n, "padding" + w[o], !0, f),
            "padding" !== r ? s += i.css(n, "border" + w[o] + "Width", !0, f) : h += i.css(n, "border" + w[o] + "Width", !0, f));
        return !u && 0 <= e && (s += Math.max(0, Math.ceil(n["offset" + t[0].toUpperCase() + t.slice(1)] - e - s - h - .5)) || 0),
        s
    }
    function ff(n, t, r) {
        var f = ci(n)
          , o = (!e.boxSizingReliable() || r) && "border-box" === i.css(n, "boxSizing", !1, f)
          , s = o
          , u = ni(n, t, f)
          , h = "offset" + t[0].toUpperCase() + t.slice(1);
        if (tr.test(u)) {
            if (!r)
                return u;
            u = "auto"
        }
        return (!e.boxSizingReliable() && o || "auto" === u || !parseFloat(u) && "inline" === i.css(n, "display", !1, f)) && n.getClientRects().length && (o = "border-box" === i.css(n, "boxSizing", !1, f),
        (s = h in n) && (u = n[h])),
        (u = parseFloat(u) || 0) + rr(n, t, r || (o ? "border" : "content"), s, f, u) + "px"
    }
    function a(n, t, i, r, u) {
        return new a.prototype.init(n,t,i,r,u)
    }
    function ur() {
        li && (!1 === f.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(ur) : n.setTimeout(ur, i.fx.interval),
        i.fx.tick())
    }
    function hf() {
        return n.setTimeout(function() {
            ct = void 0
        }),
        ct = Date.now()
    }
    function ai(n, t) {
        var u, r = 0, i = {
            height: n
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i["margin" + (u = w[r])] = i["padding" + u] = n;
        return t && (i.opacity = i.width = n),
        i
    }
    function cf(n, t, i) {
        for (var u, f = (v.tweeners[t] || []).concat(v.tweeners["*"]), r = 0, e = f.length; r < e; r++)
            if (u = f[r].call(i, t, n))
                return u
    }
    function v(n, t, r) {
        var o, s, h = 0, a = v.prefilters.length, e = i.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (s)
                return !1;
            for (var o = ct || hf(), t = Math.max(0, f.startTime + f.duration - o), i = 1 - (t / f.duration || 0), r = 0, u = f.tweens.length; r < u; r++)
                f.tweens[r].run(i);
            return e.notifyWith(n, [f, i, t]),
            i < 1 && u ? t : (u || e.notifyWith(n, [f, 1, 0]),
            e.resolveWith(n, [f]),
            !1)
        }, f = e.promise({
            elem: n,
            props: i.extend({}, t),
            opts: i.extend(!0, {
                specialEasing: {},
                easing: i.easing._default
            }, r),
            originalProperties: t,
            originalOptions: r,
            startTime: ct || hf(),
            duration: r.duration,
            tweens: [],
            createTween: function(t, r) {
                var u = i.Tween(n, f.opts, t, r, f.opts.specialEasing[t] || f.opts.easing);
                return f.tweens.push(u),
                u
            },
            stop: function(t) {
                var i = 0
                  , r = t ? f.tweens.length : 0;
                if (s)
                    return this;
                for (s = !0; i < r; i++)
                    f.tweens[i].run(1);
                return t ? (e.notifyWith(n, [f, 1, 0]),
                e.resolveWith(n, [f, t])) : e.rejectWith(n, [f, t]),
                this
            }
        }), c = f.props;
        for (!function(n, t) {
            var r, f, e, u, o;
            for (r in n)
                if (e = t[f = y(r)],
                u = n[r],
                Array.isArray(u) && (e = u[1],
                u = n[r] = u[0]),
                r !== f && (n[f] = u,
                delete n[r]),
                (o = i.cssHooks[f]) && "expand"in o)
                    for (r in u = o.expand(u),
                    delete n[f],
                    u)
                        r in n || (n[r] = u[r],
                        t[r] = e);
                else
                    t[f] = e
        }(c, f.opts.specialEasing); h < a; h++)
            if (o = v.prefilters[h].call(f, n, c, f.opts))
                return u(o.stop) && (i._queueHooks(f.elem, f.opts.queue).stop = o.stop.bind(o)),
                o;
        return i.map(c, cf, f),
        u(f.opts.start) && f.opts.start.call(n, f),
        f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always),
        i.fx.timer(i.extend(l, {
            elem: n,
            anim: f,
            queue: f.opts.queue
        })),
        f
    }
    function g(n) {
        return (n.match(l) || []).join(" ")
    }
    function nt(n) {
        return n.getAttribute && n.getAttribute("class") || ""
    }
    function fr(n) {
        return Array.isArray(n) ? n : "string" == typeof n && n.match(l) || []
    }
    function hr(n, t, r, u) {
        var f;
        if (Array.isArray(t))
            i.each(t, function(t, i) {
                r || fo.test(n) ? u(n, i) : hr(n + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, r, u)
            });
        else if (r || "object" !== it(t))
            u(n, t);
        else
            for (f in t)
                hr(n + "[" + f + "]", t[f], r, u)
    }
    function df(n) {
        return function(t, i) {
            "string" != typeof t && (i = t,
            t = "*");
            var r, f = 0, e = t.toLowerCase().match(l) || [];
            if (u(i))
                while (r = e[f++])
                    "+" === r[0] ? (r = r.slice(1) || "*",
                    (n[r] = n[r] || []).unshift(i)) : (n[r] = n[r] || []).push(i)
        }
    }
    function gf(n, t, r, u) {
        function e(s) {
            var h;
            return f[s] = !0,
            i.each(n[s] || [], function(n, i) {
                var s = i(t, r, u);
                return "string" != typeof s || o || f[s] ? o ? !(h = s) : void 0 : (t.dataTypes.unshift(s),
                e(s),
                !1)
            }),
            h
        }
        var f = {}
          , o = n === cr;
        return e(t.dataTypes[0]) || !f["*"] && e("*")
    }
    function ar(n, t) {
        var r, u, f = i.ajaxSettings.flatOptions || {};
        for (r in t)
            void 0 !== t[r] && ((f[r] ? n : u || (u = {}))[r] = t[r]);
        return u && i.extend(!0, n, u),
        n
    }
    var d = [], f = n.document, ue = Object.getPrototypeOf, b = d.slice, yr = d.concat, yi = d.push, ii = d.indexOf, ri = {}, pr = ri.toString, ui = ri.hasOwnProperty, wr = ui.toString, fe = wr.call(Object), e = {}, u = function(n) {
        return "function" == typeof n && "number" != typeof n.nodeType
    }, tt = function(n) {
        return null != n && n === n.window
    }, ee = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    }, kr = "3.4.1", i = function(n, t) {
        return new i.fn.init(n,t)
    }, oe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, k, wi, nu, tu, iu, ru, l, eu, ei, yt, kt, ki, di, gt, si, au, ct, li, lt, ef, of, sf, lf, at, af, vf, yf, er, or, ne, vt, te, vr, vi, ie, re;
    i.fn = i.prototype = {
        jquery: kr,
        constructor: i,
        length: 0,
        toArray: function() {
            return b.call(this)
        },
        get: function(n) {
            return null == n ? b.call(this) : n < 0 ? this[n + this.length] : this[n]
        },
        pushStack: function(n) {
            var t = i.merge(this.constructor(), n);
            return t.prevObject = this,
            t
        },
        each: function(n) {
            return i.each(this, n)
        },
        map: function(n) {
            return this.pushStack(i.map(this, function(t, i) {
                return n.call(t, i, t)
            }))
        },
        slice: function() {
            return this.pushStack(b.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(n) {
            var i = this.length
              , t = +n + (n < 0 ? i : 0);
            return this.pushStack(0 <= t && t < i ? [this[t]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: yi,
        sort: d.sort,
        splice: d.splice
    };
    i.extend = i.fn.extend = function() {
        var s, f, e, t, o, c, n = arguments[0] || {}, r = 1, l = arguments.length, h = !1;
        for ("boolean" == typeof n && (h = n,
        n = arguments[r] || {},
        r++),
        "object" == typeof n || u(n) || (n = {}),
        r === l && (n = this,
        r--); r < l; r++)
            if (null != (s = arguments[r]))
                for (f in s)
                    t = s[f],
                    "__proto__" !== f && n !== t && (h && t && (i.isPlainObject(t) || (o = Array.isArray(t))) ? (e = n[f],
                    c = o && !Array.isArray(e) ? [] : o || i.isPlainObject(e) ? e : {},
                    o = !1,
                    n[f] = i.extend(h, c, t)) : void 0 !== t && (n[f] = t));
        return n
    }
    ;
    i.extend({
        expando: "jQuery" + (kr + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(n) {
            throw new Error(n);
        },
        noop: function() {},
        isPlainObject: function(n) {
            var t, i;
            return !(!n || "[object Object]" !== pr.call(n)) && (!(t = ue(n)) || "function" == typeof (i = ui.call(t, "constructor") && t.constructor) && wr.call(i) === fe)
        },
        isEmptyObject: function(n) {
            for (var t in n)
                return !1;
            return !0
        },
        globalEval: function(n, t) {
            br(n, {
                nonce: t && t.nonce
            })
        },
        each: function(n, t) {
            var r, i = 0;
            if (pi(n)) {
                for (r = n.length; i < r; i++)
                    if (!1 === t.call(n[i], i, n[i]))
                        break
            } else
                for (i in n)
                    if (!1 === t.call(n[i], i, n[i]))
                        break;
            return n
        },
        trim: function(n) {
            return null == n ? "" : (n + "").replace(oe, "")
        },
        makeArray: function(n, t) {
            var r = t || [];
            return null != n && (pi(Object(n)) ? i.merge(r, "string" == typeof n ? [n] : n) : yi.call(r, n)),
            r
        },
        inArray: function(n, t, i) {
            return null == t ? -1 : ii.call(t, n, i)
        },
        merge: function(n, t) {
            for (var u = +t.length, i = 0, r = n.length; i < u; i++)
                n[r++] = t[i];
            return n.length = r,
            n
        },
        grep: function(n, t, i) {
            for (var u = [], r = 0, f = n.length, e = !i; r < f; r++)
                !t(n[r], r) !== e && u.push(n[r]);
            return u
        },
        map: function(n, t, i) {
            var e, u, r = 0, f = [];
            if (pi(n))
                for (e = n.length; r < e; r++)
                    null != (u = t(n[r], r, i)) && f.push(u);
            else
                for (r in n)
                    null != (u = t(n[r], r, i)) && f.push(u);
            return yr.apply([], f)
        },
        guid: 1,
        support: e
    });
    "function" == typeof Symbol && (i.fn[Symbol.iterator] = d[Symbol.iterator]);
    i.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(n, t) {
        ri["[object " + t + "]"] = t.toLowerCase()
    });
    k = function(n) {
        function u(n, t, r, u) {
            var s, p, l, v, w, d, g, y = t && t.ownerDocument, a = t ? t.nodeType : 9;
            if (r = r || [],
            "string" != typeof n || !n || 1 !== a && 9 !== a && 11 !== a)
                return r;
            if (!u && ((t ? t.ownerDocument || t : c) !== i && b(t),
            t = t || i,
            h)) {
                if (11 !== a && (w = ar.exec(n)))
                    if (s = w[1]) {
                        if (9 === a) {
                            if (!(l = t.getElementById(s)))
                                return r;
                            if (l.id === s)
                                return r.push(l),
                                r
                        } else if (y && (l = y.getElementById(s)) && et(t, l) && l.id === s)
                            return r.push(l),
                            r
                    } else {
                        if (w[2])
                            return k.apply(r, t.getElementsByTagName(n)),
                            r;
                        if ((s = w[3]) && e.getElementsByClassName && t.getElementsByClassName)
                            return k.apply(r, t.getElementsByClassName(s)),
                            r
                    }
                if (e.qsa && !lt[n + " "] && (!o || !o.test(n)) && (1 !== a || "object" !== t.nodeName.toLowerCase())) {
                    if (g = n,
                    y = t,
                    1 === a && er.test(n)) {
                        for ((v = t.getAttribute("id")) ? v = v.replace(yi, pi) : t.setAttribute("id", v = f),
                        p = (d = ft(n)).length; p--; )
                            d[p] = "#" + v + " " + pt(d[p]);
                        g = d.join(",");
                        y = ti.test(n) && ri(t.parentNode) || t
                    }
                    try {
                        return k.apply(r, y.querySelectorAll(g)),
                        r
                    } catch (t) {
                        lt(n, !0)
                    } finally {
                        v === f && t.removeAttribute("id")
                    }
                }
            }
            return si(n.replace(at, "$1"), t, r, u)
        }
        function yt() {
            var n = [];
            return function i(r, u) {
                return n.push(r + " ") > t.cacheLength && delete i[n.shift()],
                i[r + " "] = u
            }
        }
        function l(n) {
            return n[f] = !0,
            n
        }
        function a(n) {
            var t = i.createElement("fieldset");
            try {
                return !!n(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t);
                t = null
            }
        }
        function ii(n, i) {
            for (var r = n.split("|"), u = r.length; u--; )
                t.attrHandle[r[u]] = i
        }
        function bi(n, t) {
            var i = t && n
              , r = i && 1 === n.nodeType && 1 === t.nodeType && n.sourceIndex - t.sourceIndex;
            if (r)
                return r;
            if (i)
                while (i = i.nextSibling)
                    if (i === t)
                        return -1;
            return n ? 1 : -1
        }
        function yr(n) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === n
            }
        }
        function pr(n) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && t.type === n
            }
        }
        function ki(n) {
            return function(t) {
                return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === n : t.disabled === n : t.isDisabled === n || t.isDisabled !== !n && vr(t) === n : t.disabled === n : "label"in t && t.disabled === n
            }
        }
        function it(n) {
            return l(function(t) {
                return t = +t,
                l(function(i, r) {
                    for (var u, f = n([], i.length, t), e = f.length; e--; )
                        i[u = f[e]] && (i[u] = !(r[u] = i[u]))
                })
            })
        }
        function ri(n) {
            return n && "undefined" != typeof n.getElementsByTagName && n
        }
        function di() {}
        function pt(n) {
            for (var t = 0, r = n.length, i = ""; t < r; t++)
                i += n[t].value;
            return i
        }
        function wt(n, t, i) {
            var r = t.dir
              , u = t.next
              , e = u || r
              , o = i && "parentNode" === e
              , s = gi++;
            return t.first ? function(t, i, u) {
                while (t = t[r])
                    if (1 === t.nodeType || o)
                        return n(t, i, u);
                return !1
            }
            : function(t, i, h) {
                var c, l, a, y = [v, s];
                if (h) {
                    while (t = t[r])
                        if ((1 === t.nodeType || o) && n(t, i, h))
                            return !0
                } else
                    while (t = t[r])
                        if (1 === t.nodeType || o)
                            if (l = (a = t[f] || (t[f] = {}))[t.uniqueID] || (a[t.uniqueID] = {}),
                            u && u === t.nodeName.toLowerCase())
                                t = t[r] || t;
                            else {
                                if ((c = l[e]) && c[0] === v && c[1] === s)
                                    return y[2] = c[2];
                                if ((l[e] = y)[2] = n(t, i, h))
                                    return !0
                            }
                return !1
            }
        }
        function ui(n) {
            return 1 < n.length ? function(t, i, r) {
                for (var u = n.length; u--; )
                    if (!n[u](t, i, r))
                        return !1;
                return !0
            }
            : n[0]
        }
        function bt(n, t, i, r, u) {
            for (var e, o = [], f = 0, s = n.length, h = null != t; f < s; f++)
                (e = n[f]) && (i && !i(e, r, u) || (o.push(e),
                h && t.push(f)));
            return o
        }
        function fi(n, t, i, r, e, o) {
            return r && !r[f] && (r = fi(r)),
            e && !e[f] && (e = fi(e, o)),
            l(function(f, o, s, h) {
                var a, l, v, w = [], p = [], b = o.length, d = f || function(n, t, i) {
                    for (var r = 0, f = t.length; r < f; r++)
                        u(n, t[r], i);
                    return i
                }(t || "*", s.nodeType ? [s] : s, []), y = !n || !f && t ? d : bt(d, w, n, s, h), c = i ? e || (f ? n : b || r) ? [] : o : y;
                if (i && i(y, c, s, h),
                r)
                    for (a = bt(c, p),
                    r(a, [], s, h),
                    l = a.length; l--; )
                        (v = a[l]) && (c[p[l]] = !(y[p[l]] = v));
                if (f) {
                    if (e || n) {
                        if (e) {
                            for (a = [],
                            l = c.length; l--; )
                                (v = c[l]) && a.push(y[l] = v);
                            e(null, c = [], a, h)
                        }
                        for (l = c.length; l--; )
                            (v = c[l]) && -1 < (a = e ? nt(f, v) : w[l]) && (f[a] = !(o[a] = v))
                    }
                } else
                    c = bt(c === o ? c.splice(b, c.length) : c),
                    e ? e(null, o, c, h) : k.apply(o, c)
            })
        }
        function ei(n) {
            for (var o, u, r, s = n.length, h = t.relative[n[0].type], c = h || t.relative[" "], i = h ? 1 : 0, l = wt(function(n) {
                return n === o
            }, c, !0), a = wt(function(n) {
                return -1 < nt(o, n)
            }, c, !0), e = [function(n, t, i) {
                var r = !h && (i || t !== ht) || ((o = t).nodeType ? l(n, t, i) : a(n, t, i));
                return o = null,
                r
            }
            ]; i < s; i++)
                if (u = t.relative[n[i].type])
                    e = [wt(ui(e), u)];
                else {
                    if ((u = t.filter[n[i].type].apply(null, n[i].matches))[f]) {
                        for (r = ++i; r < s; r++)
                            if (t.relative[n[r].type])
                                break;
                        return fi(1 < i && ui(e), 1 < i && pt(n.slice(0, i - 1).concat({
                            value: " " === n[i - 2].type ? "*" : ""
                        })).replace(at, "$1"), u, i < r && ei(n.slice(i, r)), r < s && ei(n = n.slice(r)), r < s && pt(n))
                    }
                    e.push(u)
                }
            return ui(e)
        }
        var rt, e, t, st, oi, ft, kt, si, ht, w, ut, b, i, s, h, o, d, ct, et, f = "sizzle" + 1 * new Date, c = n.document, v = 0, gi = 0, hi = yt(), ci = yt(), li = yt(), lt = yt(), dt = function(n, t) {
            return n === t && (ut = !0),
            0
        }, nr = {}.hasOwnProperty, g = [], tr = g.pop, ir = g.push, k = g.push, ai = g.slice, nt = function(n, t) {
            for (var i = 0, r = n.length; i < r; i++)
                if (n[i] === t)
                    return i;
            return -1
        }, gt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", r = "[\\x20\\t\\r\\n\\f]", tt = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", vi = "\\[" + r + "*(" + tt + ")(?:" + r + "*([*^$|!~]?=)" + r + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + tt + "))|)" + r + "*\\]", ni = ":(" + tt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + vi + ")*)|.*)\\)|)", rr = new RegExp(r + "+","g"), at = new RegExp("^" + r + "+|((?:^|[^\\\\])(?:\\\\.)*)" + r + "+$","g"), ur = new RegExp("^" + r + "*," + r + "*"), fr = new RegExp("^" + r + "*([>+~]|" + r + ")" + r + "*"), er = new RegExp(r + "|>"), or = new RegExp(ni), sr = new RegExp("^" + tt + "$"), vt = {
            ID: new RegExp("^#(" + tt + ")"),
            CLASS: new RegExp("^\\.(" + tt + ")"),
            TAG: new RegExp("^(" + tt + "|[*])"),
            ATTR: new RegExp("^" + vi),
            PSEUDO: new RegExp("^" + ni),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + r + "*(even|odd|(([+-]|)(\\d*)n|)" + r + "*(?:([+-]|)" + r + "*(\\d+)|))" + r + "*\\)|)","i"),
            bool: new RegExp("^(?:" + gt + ")$","i"),
            needsContext: new RegExp("^" + r + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + r + "*((?:-\\d)?\\d*)" + r + "*\\)|)(?=[^-]|$)","i")
        }, hr = /HTML$/i, cr = /^(?:input|select|textarea|button)$/i, lr = /^h\d$/i, ot = /^[^{]+\{\s*\[native \w/, ar = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ti = /[+~]/, y = new RegExp("\\\\([\\da-f]{1,6}" + r + "?|(" + r + ")|.)","ig"), p = function(n, t, i) {
            var r = "0x" + t - 65536;
            return r != r || i ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }, yi = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, pi = function(n, t) {
            return t ? "\0" === n ? "???" : n.slice(0, -1) + "\\" + n.charCodeAt(n.length - 1).toString(16) + " " : "\\" + n
        }, wi = function() {
            b()
        }, vr = wt(function(n) {
            return !0 === n.disabled && "fieldset" === n.nodeName.toLowerCase()
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            k.apply(g = ai.call(c.childNodes), c.childNodes);
            g[c.childNodes.length].nodeType
        } catch (rt) {
            k = {
                apply: g.length ? function(n, t) {
                    ir.apply(n, ai.call(t))
                }
                : function(n, t) {
                    for (var i = n.length, r = 0; n[i++] = t[r++]; )
                        ;
                    n.length = i - 1
                }
            }
        }
        for (rt in e = u.support = {},
        oi = u.isXML = function(n) {
            var i = n.namespaceURI
              , t = (n.ownerDocument || n).documentElement;
            return !hr.test(i || t && t.nodeName || "HTML")
        }
        ,
        b = u.setDocument = function(n) {
            var v, u, l = n ? n.ownerDocument || n : c;
            return l !== i && 9 === l.nodeType && l.documentElement && (s = (i = l).documentElement,
            h = !oi(i),
            c !== i && (u = i.defaultView) && u.top !== u && (u.addEventListener ? u.addEventListener("unload", wi, !1) : u.attachEvent && u.attachEvent("onunload", wi)),
            e.attributes = a(function(n) {
                return n.className = "i",
                !n.getAttribute("className")
            }),
            e.getElementsByTagName = a(function(n) {
                return n.appendChild(i.createComment("")),
                !n.getElementsByTagName("*").length
            }),
            e.getElementsByClassName = ot.test(i.getElementsByClassName),
            e.getById = a(function(n) {
                return s.appendChild(n).id = f,
                !i.getElementsByName || !i.getElementsByName(f).length
            }),
            e.getById ? (t.filter.ID = function(n) {
                var t = n.replace(y, p);
                return function(n) {
                    return n.getAttribute("id") === t
                }
            }
            ,
            t.find.ID = function(n, t) {
                if ("undefined" != typeof t.getElementById && h) {
                    var i = t.getElementById(n);
                    return i ? [i] : []
                }
            }
            ) : (t.filter.ID = function(n) {
                var t = n.replace(y, p);
                return function(n) {
                    var i = "undefined" != typeof n.getAttributeNode && n.getAttributeNode("id");
                    return i && i.value === t
                }
            }
            ,
            t.find.ID = function(n, t) {
                if ("undefined" != typeof t.getElementById && h) {
                    var r, u, f, i = t.getElementById(n);
                    if (i) {
                        if ((r = i.getAttributeNode("id")) && r.value === n)
                            return [i];
                        for (f = t.getElementsByName(n),
                        u = 0; i = f[u++]; )
                            if ((r = i.getAttributeNode("id")) && r.value === n)
                                return [i]
                    }
                    return []
                }
            }
            ),
            t.find.TAG = e.getElementsByTagName ? function(n, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(n) : e.qsa ? t.querySelectorAll(n) : void 0
            }
            : function(n, t) {
                var i, r = [], f = 0, u = t.getElementsByTagName(n);
                if ("*" === n) {
                    while (i = u[f++])
                        1 === i.nodeType && r.push(i);
                    return r
                }
                return u
            }
            ,
            t.find.CLASS = e.getElementsByClassName && function(n, t) {
                if ("undefined" != typeof t.getElementsByClassName && h)
                    return t.getElementsByClassName(n)
            }
            ,
            d = [],
            o = [],
            (e.qsa = ot.test(i.querySelectorAll)) && (a(function(n) {
                s.appendChild(n).innerHTML = "<a id='" + f + "'><\/a><select id='" + f + "-\r\\' msallowcapture=''><option selected=''><\/option><\/select>";
                n.querySelectorAll("[msallowcapture^='']").length && o.push("[*^$]=" + r + "*(?:''|\"\")");
                n.querySelectorAll("[selected]").length || o.push("\\[" + r + "*(?:value|" + gt + ")");
                n.querySelectorAll("[id~=" + f + "-]").length || o.push("~=");
                n.querySelectorAll(":checked").length || o.push(":checked");
                n.querySelectorAll("a#" + f + "+*").length || o.push(".#.+[+~]")
            }),
            a(function(n) {
                n.innerHTML = "<a href='' disabled='disabled'><\/a><select disabled='disabled'><option/><\/select>";
                var t = i.createElement("input");
                t.setAttribute("type", "hidden");
                n.appendChild(t).setAttribute("name", "D");
                n.querySelectorAll("[name=d]").length && o.push("name" + r + "*[*^$|!~]?=");
                2 !== n.querySelectorAll(":enabled").length && o.push(":enabled", ":disabled");
                s.appendChild(n).disabled = !0;
                2 !== n.querySelectorAll(":disabled").length && o.push(":enabled", ":disabled");
                n.querySelectorAll("*,:x");
                o.push(",.*:")
            })),
            (e.matchesSelector = ot.test(ct = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && a(function(n) {
                e.disconnectedMatch = ct.call(n, "*");
                ct.call(n, "[s!='']:x");
                d.push("!=", ni)
            }),
            o = o.length && new RegExp(o.join("|")),
            d = d.length && new RegExp(d.join("|")),
            v = ot.test(s.compareDocumentPosition),
            et = v || ot.test(s.contains) ? function(n, t) {
                var r = 9 === n.nodeType ? n.documentElement : n
                  , i = t && t.parentNode;
                return n === i || !(!i || 1 !== i.nodeType || !(r.contains ? r.contains(i) : n.compareDocumentPosition && 16 & n.compareDocumentPosition(i)))
            }
            : function(n, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === n)
                            return !0;
                return !1
            }
            ,
            dt = v ? function(n, t) {
                if (n === t)
                    return ut = !0,
                    0;
                var r = !n.compareDocumentPosition - !t.compareDocumentPosition;
                return r || (1 & (r = (n.ownerDocument || n) === (t.ownerDocument || t) ? n.compareDocumentPosition(t) : 1) || !e.sortDetached && t.compareDocumentPosition(n) === r ? n === i || n.ownerDocument === c && et(c, n) ? -1 : t === i || t.ownerDocument === c && et(c, t) ? 1 : w ? nt(w, n) - nt(w, t) : 0 : 4 & r ? -1 : 1)
            }
            : function(n, t) {
                if (n === t)
                    return ut = !0,
                    0;
                var r, u = 0, o = n.parentNode, s = t.parentNode, f = [n], e = [t];
                if (!o || !s)
                    return n === i ? -1 : t === i ? 1 : o ? -1 : s ? 1 : w ? nt(w, n) - nt(w, t) : 0;
                if (o === s)
                    return bi(n, t);
                for (r = n; r = r.parentNode; )
                    f.unshift(r);
                for (r = t; r = r.parentNode; )
                    e.unshift(r);
                while (f[u] === e[u])
                    u++;
                return u ? bi(f[u], e[u]) : f[u] === c ? -1 : e[u] === c ? 1 : 0
            }
            ),
            i
        }
        ,
        u.matches = function(n, t) {
            return u(n, null, null, t)
        }
        ,
        u.matchesSelector = function(n, t) {
            if ((n.ownerDocument || n) !== i && b(n),
            e.matchesSelector && h && !lt[t + " "] && (!d || !d.test(t)) && (!o || !o.test(t)))
                try {
                    var r = ct.call(n, t);
                    if (r || e.disconnectedMatch || n.document && 11 !== n.document.nodeType)
                        return r
                } catch (n) {
                    lt(t, !0)
                }
            return 0 < u(t, i, null, [n]).length
        }
        ,
        u.contains = function(n, t) {
            return (n.ownerDocument || n) !== i && b(n),
            et(n, t)
        }
        ,
        u.attr = function(n, r) {
            (n.ownerDocument || n) !== i && b(n);
            var f = t.attrHandle[r.toLowerCase()]
              , u = f && nr.call(t.attrHandle, r.toLowerCase()) ? f(n, r, !h) : void 0;
            return void 0 !== u ? u : e.attributes || !h ? n.getAttribute(r) : (u = n.getAttributeNode(r)) && u.specified ? u.value : null
        }
        ,
        u.escape = function(n) {
            return (n + "").replace(yi, pi)
        }
        ,
        u.error = function(n) {
            throw new Error("Syntax error, unrecognized expression: " + n);
        }
        ,
        u.uniqueSort = function(n) {
            var r, u = [], t = 0, i = 0;
            if (ut = !e.detectDuplicates,
            w = !e.sortStable && n.slice(0),
            n.sort(dt),
            ut) {
                while (r = n[i++])
                    r === n[i] && (t = u.push(i));
                while (t--)
                    n.splice(u[t], 1)
            }
            return w = null,
            n
        }
        ,
        st = u.getText = function(n) {
            var r, i = "", u = 0, t = n.nodeType;
            if (t) {
                if (1 === t || 9 === t || 11 === t) {
                    if ("string" == typeof n.textContent)
                        return n.textContent;
                    for (n = n.firstChild; n; n = n.nextSibling)
                        i += st(n)
                } else if (3 === t || 4 === t)
                    return n.nodeValue
            } else
                while (r = n[u++])
                    i += st(r);
            return i
        }
        ,
        (t = u.selectors = {
            cacheLength: 50,
            createPseudo: l,
            match: vt,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(n) {
                    return n[1] = n[1].replace(y, p),
                    n[3] = (n[3] || n[4] || n[5] || "").replace(y, p),
                    "~=" === n[2] && (n[3] = " " + n[3] + " "),
                    n.slice(0, 4)
                },
                CHILD: function(n) {
                    return n[1] = n[1].toLowerCase(),
                    "nth" === n[1].slice(0, 3) ? (n[3] || u.error(n[0]),
                    n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * ("even" === n[3] || "odd" === n[3])),
                    n[5] = +(n[7] + n[8] || "odd" === n[3])) : n[3] && u.error(n[0]),
                    n
                },
                PSEUDO: function(n) {
                    var i, t = !n[6] && n[2];
                    return vt.CHILD.test(n[0]) ? null : (n[3] ? n[2] = n[4] || n[5] || "" : t && or.test(t) && (i = ft(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (n[0] = n[0].slice(0, i),
                    n[2] = t.slice(0, i)),
                    n.slice(0, 3))
                }
            },
            filter: {
                TAG: function(n) {
                    var t = n.replace(y, p).toLowerCase();
                    return "*" === n ? function() {
                        return !0
                    }
                    : function(n) {
                        return n.nodeName && n.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(n) {
                    var t = hi[n + " "];
                    return t || (t = new RegExp("(^|" + r + ")" + n + "(" + r + "|$)")) && hi(n, function(n) {
                        return t.test("string" == typeof n.className && n.className || "undefined" != typeof n.getAttribute && n.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, t, i) {
                    return function(r) {
                        var f = u.attr(r, n);
                        return null == f ? "!=" === t : !t || (f += "",
                        "=" === t ? f === i : "!=" === t ? f !== i : "^=" === t ? i && 0 === f.indexOf(i) : "*=" === t ? i && -1 < f.indexOf(i) : "$=" === t ? i && f.slice(-i.length) === i : "~=" === t ? -1 < (" " + f.replace(rr, " ") + " ").indexOf(i) : "|=" === t && (f === i || f.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(n, t, i, r, u) {
                    var s = "nth" !== n.slice(0, 3)
                      , o = "last" !== n.slice(-4)
                      , e = "of-type" === t;
                    return 1 === r && 0 === u ? function(n) {
                        return !!n.parentNode
                    }
                    : function(t, i, h) {
                        var p, d, y, c, a, w, b = s !== o ? "nextSibling" : "previousSibling", k = t.parentNode, nt = e && t.nodeName.toLowerCase(), g = !h && !e, l = !1;
                        if (k) {
                            if (s) {
                                while (b) {
                                    for (c = t; c = c[b]; )
                                        if (e ? c.nodeName.toLowerCase() === nt : 1 === c.nodeType)
                                            return !1;
                                    w = b = "only" === n && !w && "nextSibling"
                                }
                                return !0
                            }
                            if (w = [o ? k.firstChild : k.lastChild],
                            o && g) {
                                for (l = (a = (p = (d = (y = (c = k)[f] || (c[f] = {}))[c.uniqueID] || (y[c.uniqueID] = {}))[n] || [])[0] === v && p[1]) && p[2],
                                c = a && k.childNodes[a]; c = ++a && c && c[b] || (l = a = 0) || w.pop(); )
                                    if (1 === c.nodeType && ++l && c === t) {
                                        d[n] = [v, a, l];
                                        break
                                    }
                            } else if (g && (l = a = (p = (d = (y = (c = t)[f] || (c[f] = {}))[c.uniqueID] || (y[c.uniqueID] = {}))[n] || [])[0] === v && p[1]),
                            !1 === l)
                                while (c = ++a && c && c[b] || (l = a = 0) || w.pop())
                                    if ((e ? c.nodeName.toLowerCase() === nt : 1 === c.nodeType) && ++l && (g && ((d = (y = c[f] || (c[f] = {}))[c.uniqueID] || (y[c.uniqueID] = {}))[n] = [v, l]),
                                    c === t))
                                        break;
                            return (l -= u) === r || l % r == 0 && 0 <= l / r
                        }
                    }
                },
                PSEUDO: function(n, i) {
                    var e, r = t.pseudos[n] || t.setFilters[n.toLowerCase()] || u.error("unsupported pseudo: " + n);
                    return r[f] ? r(i) : 1 < r.length ? (e = [n, n, "", i],
                    t.setFilters.hasOwnProperty(n.toLowerCase()) ? l(function(n, t) {
                        for (var e, u = r(n, i), f = u.length; f--; )
                            n[e = nt(n, u[f])] = !(t[e] = u[f])
                    }) : function(n) {
                        return r(n, 0, e)
                    }
                    ) : r
                }
            },
            pseudos: {
                not: l(function(n) {
                    var t = []
                      , r = []
                      , i = kt(n.replace(at, "$1"));
                    return i[f] ? l(function(n, t, r, u) {
                        for (var e, o = i(n, null, u, []), f = n.length; f--; )
                            (e = o[f]) && (n[f] = !(t[f] = e))
                    }) : function(n, u, f) {
                        return t[0] = n,
                        i(t, null, f, r),
                        t[0] = null,
                        !r.pop()
                    }
                }),
                has: l(function(n) {
                    return function(t) {
                        return 0 < u(n, t).length
                    }
                }),
                contains: l(function(n) {
                    return n = n.replace(y, p),
                    function(t) {
                        return -1 < (t.textContent || st(t)).indexOf(n)
                    }
                }),
                lang: l(function(n) {
                    return sr.test(n || "") || u.error("unsupported lang: " + n),
                    n = n.replace(y, p).toLowerCase(),
                    function(t) {
                        var i;
                        do
                            if (i = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return (i = i.toLowerCase()) === n || 0 === i.indexOf(n + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);return !1
                    }
                }),
                target: function(t) {
                    var i = n.location && n.location.hash;
                    return i && i.slice(1) === t.id
                },
                root: function(n) {
                    return n === s
                },
                focus: function(n) {
                    return n === i.activeElement && (!i.hasFocus || i.hasFocus()) && !!(n.type || n.href || ~n.tabIndex)
                },
                enabled: ki(!1),
                disabled: ki(!0),
                checked: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return "input" === t && !!n.checked || "option" === t && !!n.selected
                },
                selected: function(n) {
                    return n.parentNode && n.parentNode.selectedIndex,
                    !0 === n.selected
                },
                empty: function(n) {
                    for (n = n.firstChild; n; n = n.nextSibling)
                        if (n.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(n) {
                    return !t.pseudos.empty(n)
                },
                header: function(n) {
                    return lr.test(n.nodeName)
                },
                input: function(n) {
                    return cr.test(n.nodeName)
                },
                button: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return "input" === t && "button" === n.type || "button" === t
                },
                text: function(n) {
                    var t;
                    return "input" === n.nodeName.toLowerCase() && "text" === n.type && (null == (t = n.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: it(function() {
                    return [0]
                }),
                last: it(function(n, t) {
                    return [t - 1]
                }),
                eq: it(function(n, t, i) {
                    return [i < 0 ? i + t : i]
                }),
                even: it(function(n, t) {
                    for (var i = 0; i < t; i += 2)
                        n.push(i);
                    return n
                }),
                odd: it(function(n, t) {
                    for (var i = 1; i < t; i += 2)
                        n.push(i);
                    return n
                }),
                lt: it(function(n, t, i) {
                    for (var r = i < 0 ? i + t : t < i ? t : i; 0 <= --r; )
                        n.push(r);
                    return n
                }),
                gt: it(function(n, t, i) {
                    for (var r = i < 0 ? i + t : i; ++r < t; )
                        n.push(r);
                    return n
                })
            }
        }).pseudos.nth = t.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            t.pseudos[rt] = yr(rt);
        for (rt in {
            submit: !0,
            reset: !0
        })
            t.pseudos[rt] = pr(rt);
        return di.prototype = t.filters = t.pseudos,
        t.setFilters = new di,
        ft = u.tokenize = function(n, i) {
            var e, f, s, o, r, h, c, l = ci[n + " "];
            if (l)
                return i ? 0 : l.slice(0);
            for (r = n,
            h = [],
            c = t.preFilter; r; ) {
                for (o in e && !(f = ur.exec(r)) || (f && (r = r.slice(f[0].length) || r),
                h.push(s = [])),
                e = !1,
                (f = fr.exec(r)) && (e = f.shift(),
                s.push({
                    value: e,
                    type: f[0].replace(at, " ")
                }),
                r = r.slice(e.length)),
                t.filter)
                    (f = vt[o].exec(r)) && (!c[o] || (f = c[o](f))) && (e = f.shift(),
                    s.push({
                        value: e,
                        type: o,
                        matches: f
                    }),
                    r = r.slice(e.length));
                if (!e)
                    break
            }
            return i ? r.length : r ? u.error(n) : ci(n, h).slice(0)
        }
        ,
        kt = u.compile = function(n, r) {
            var s, c, a, o, y, p, w = [], d = [], e = li[n + " "];
            if (!e) {
                for (r || (r = ft(n)),
                s = r.length; s--; )
                    (e = ei(r[s]))[f] ? w.push(e) : d.push(e);
                (e = li(n, (c = d,
                o = 0 < (a = w).length,
                y = 0 < c.length,
                p = function(n, r, f, e, s) {
                    var l, nt, d, g = 0, p = "0", tt = n && [], w = [], it = ht, rt = n || y && t.find.TAG("*", s), ut = v += null == it ? 1 : Math.random() || .1, ft = rt.length;
                    for (s && (ht = r === i || r || s); p !== ft && null != (l = rt[p]); p++) {
                        if (y && l) {
                            for (nt = 0,
                            r || l.ownerDocument === i || (b(l),
                            f = !h); d = c[nt++]; )
                                if (d(l, r || i, f)) {
                                    e.push(l);
                                    break
                                }
                            s && (v = ut)
                        }
                        o && ((l = !d && l) && g--,
                        n && tt.push(l))
                    }
                    if (g += p,
                    o && p !== g) {
                        for (nt = 0; d = a[nt++]; )
                            d(tt, w, r, f);
                        if (n) {
                            if (0 < g)
                                while (p--)
                                    tt[p] || w[p] || (w[p] = tr.call(e));
                            w = bt(w)
                        }
                        k.apply(e, w);
                        s && !n && 0 < w.length && 1 < g + a.length && u.uniqueSort(e)
                    }
                    return s && (v = ut,
                    ht = it),
                    tt
                }
                ,
                o ? l(p) : p))).selector = n
            }
            return e
        }
        ,
        si = u.select = function(n, i, r, u) {
            var o, f, e, l, a, c = "function" == typeof n && n, s = !u && ft(n = c.selector || n);
            if (r = r || [],
            1 === s.length) {
                if (2 < (f = s[0] = s[0].slice(0)).length && "ID" === (e = f[0]).type && 9 === i.nodeType && h && t.relative[f[1].type]) {
                    if (!(i = (t.find.ID(e.matches[0].replace(y, p), i) || [])[0]))
                        return r;
                    c && (i = i.parentNode);
                    n = n.slice(f.shift().value.length)
                }
                for (o = vt.needsContext.test(n) ? 0 : f.length; o--; ) {
                    if (e = f[o],
                    t.relative[l = e.type])
                        break;
                    if ((a = t.find[l]) && (u = a(e.matches[0].replace(y, p), ti.test(f[0].type) && ri(i.parentNode) || i))) {
                        if (f.splice(o, 1),
                        !(n = u.length && pt(f)))
                            return k.apply(r, u),
                            r;
                        break
                    }
                }
            }
            return (c || kt(n, s))(u, i, !h, r, !i || ti.test(n) && ri(i.parentNode) || i),
            r
        }
        ,
        e.sortStable = f.split("").sort(dt).join("") === f,
        e.detectDuplicates = !!ut,
        b(),
        e.sortDetached = a(function(n) {
            return 1 & n.compareDocumentPosition(i.createElement("fieldset"))
        }),
        a(function(n) {
            return n.innerHTML = "<a href='#'><\/a>",
            "#" === n.firstChild.getAttribute("href")
        }) || ii("type|href|height|width", function(n, t, i) {
            if (!i)
                return n.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        e.attributes && a(function(n) {
            return n.innerHTML = "<input/>",
            n.firstChild.setAttribute("value", ""),
            "" === n.firstChild.getAttribute("value")
        }) || ii("value", function(n, t, i) {
            if (!i && "input" === n.nodeName.toLowerCase())
                return n.defaultValue
        }),
        a(function(n) {
            return null == n.getAttribute("disabled")
        }) || ii(gt, function(n, t, i) {
            var r;
            if (!i)
                return !0 === n[t] ? t.toLowerCase() : (r = n.getAttributeNode(t)) && r.specified ? r.value : null
        }),
        u
    }(n);
    i.find = k;
    i.expr = k.selectors;
    i.expr[":"] = i.expr.pseudos;
    i.uniqueSort = i.unique = k.uniqueSort;
    i.text = k.getText;
    i.isXMLDoc = k.isXML;
    i.contains = k.contains;
    i.escapeSelector = k.escape;
    var rt = function(n, t, r) {
        for (var u = [], f = void 0 !== r; (n = n[t]) && 9 !== n.nodeType; )
            if (1 === n.nodeType) {
                if (f && i(n).is(r))
                    break;
                u.push(n)
            }
        return u
    }
      , dr = function(n, t) {
        for (var i = []; n; n = n.nextSibling)
            1 === n.nodeType && n !== t && i.push(n);
        return i
    }
      , gr = i.expr.match.needsContext;
    wi = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    i.filter = function(n, t, r) {
        var u = t[0];
        return r && (n = ":not(" + n + ")"),
        1 === t.length && 1 === u.nodeType ? i.find.matchesSelector(u, n) ? [u] : [] : i.find.matches(n, i.grep(t, function(n) {
            return 1 === n.nodeType
        }))
    }
    ;
    i.fn.extend({
        find: function(n) {
            var t, r, u = this.length, f = this;
            if ("string" != typeof n)
                return this.pushStack(i(n).filter(function() {
                    for (t = 0; t < u; t++)
                        if (i.contains(f[t], this))
                            return !0
                }));
            for (r = this.pushStack([]),
            t = 0; t < u; t++)
                i.find(n, f[t], r);
            return 1 < u ? i.uniqueSort(r) : r
        },
        filter: function(n) {
            return this.pushStack(bi(this, n || [], !1))
        },
        not: function(n) {
            return this.pushStack(bi(this, n || [], !0))
        },
        is: function(n) {
            return !!bi(this, "string" == typeof n && gr.test(n) ? i(n) : n || [], !1).length
        }
    });
    tu = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (i.fn.init = function(n, t, r) {
        var e, o;
        if (!n)
            return this;
        if (r = r || nu,
        "string" == typeof n) {
            if (!(e = "<" === n[0] && ">" === n[n.length - 1] && 3 <= n.length ? [null, n, null] : tu.exec(n)) || !e[1] && t)
                return !t || t.jquery ? (t || r).find(n) : this.constructor(t).find(n);
            if (e[1]) {
                if (t = t instanceof i ? t[0] : t,
                i.merge(this, i.parseHTML(e[1], t && t.nodeType ? t.ownerDocument || t : f, !0)),
                wi.test(e[1]) && i.isPlainObject(t))
                    for (e in t)
                        u(this[e]) ? this[e](t[e]) : this.attr(e, t[e]);
                return this
            }
            return (o = f.getElementById(e[2])) && (this[0] = o,
            this.length = 1),
            this
        }
        return n.nodeType ? (this[0] = n,
        this.length = 1,
        this) : u(n) ? void 0 !== r.ready ? r.ready(n) : n(i) : i.makeArray(n, this)
    }
    ).prototype = i.fn;
    nu = i(f);
    iu = /^(?:parents|prev(?:Until|All))/;
    ru = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    i.fn.extend({
        has: function(n) {
            var t = i(n, this)
              , r = t.length;
            return this.filter(function() {
                for (var n = 0; n < r; n++)
                    if (i.contains(this, t[n]))
                        return !0
            })
        },
        closest: function(n, t) {
            var r, f = 0, o = this.length, u = [], e = "string" != typeof n && i(n);
            if (!gr.test(n))
                for (; f < o; f++)
                    for (r = this[f]; r && r !== t; r = r.parentNode)
                        if (r.nodeType < 11 && (e ? -1 < e.index(r) : 1 === r.nodeType && i.find.matchesSelector(r, n))) {
                            u.push(r);
                            break
                        }
            return this.pushStack(1 < u.length ? i.uniqueSort(u) : u)
        },
        index: function(n) {
            return n ? "string" == typeof n ? ii.call(i(n), this[0]) : ii.call(this, n.jquery ? n[0] : n) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(n, t) {
            return this.pushStack(i.uniqueSort(i.merge(this.get(), i(n, t))))
        },
        addBack: function(n) {
            return this.add(null == n ? this.prevObject : this.prevObject.filter(n))
        }
    });
    i.each({
        parent: function(n) {
            var t = n.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(n) {
            return rt(n, "parentNode")
        },
        parentsUntil: function(n, t, i) {
            return rt(n, "parentNode", i)
        },
        next: function(n) {
            return uu(n, "nextSibling")
        },
        prev: function(n) {
            return uu(n, "previousSibling")
        },
        nextAll: function(n) {
            return rt(n, "nextSibling")
        },
        prevAll: function(n) {
            return rt(n, "previousSibling")
        },
        nextUntil: function(n, t, i) {
            return rt(n, "nextSibling", i)
        },
        prevUntil: function(n, t, i) {
            return rt(n, "previousSibling", i)
        },
        siblings: function(n) {
            return dr((n.parentNode || {}).firstChild, n)
        },
        children: function(n) {
            return dr(n.firstChild)
        },
        contents: function(n) {
            return "undefined" != typeof n.contentDocument ? n.contentDocument : (c(n, "template") && (n = n.content || n),
            i.merge([], n.childNodes))
        }
    }, function(n, t) {
        i.fn[n] = function(r, u) {
            var f = i.map(this, t, r);
            return "Until" !== n.slice(-5) && (u = r),
            u && "string" == typeof u && (f = i.filter(u, f)),
            1 < this.length && (ru[n] || i.uniqueSort(f),
            iu.test(n) && f.reverse()),
            this.pushStack(f)
        }
    });
    l = /[^\x20\t\r\n\f]+/g;
    i.Callbacks = function(n) {
        var a, h;
        n = "string" == typeof n ? (a = n,
        h = {},
        i.each(a.match(l) || [], function(n, t) {
            h[t] = !0
        }),
        h) : i.extend({}, n);
        var o, r, v, f, t = [], s = [], e = -1, y = function() {
            for (f = f || n.once,
            v = o = !0; s.length; e = -1)
                for (r = s.shift(); ++e < t.length; )
                    !1 === t[e].apply(r[0], r[1]) && n.stopOnFalse && (e = t.length,
                    r = !1);
            n.memory || (r = !1);
            o = !1;
            f && (t = r ? [] : "")
        }, c = {
            add: function() {
                return t && (r && !o && (e = t.length - 1,
                s.push(r)),
                function f(r) {
                    i.each(r, function(i, r) {
                        u(r) ? n.unique && c.has(r) || t.push(r) : r && r.length && "string" !== it(r) && f(r)
                    })
                }(arguments),
                r && !o && y()),
                this
            },
            remove: function() {
                return i.each(arguments, function(n, r) {
                    for (var u; -1 < (u = i.inArray(r, t, u)); )
                        t.splice(u, 1),
                        u <= e && e--
                }),
                this
            },
            has: function(n) {
                return n ? -1 < i.inArray(n, t) : 0 < t.length
            },
            empty: function() {
                return t && (t = []),
                this
            },
            disable: function() {
                return f = s = [],
                t = r = "",
                this
            },
            disabled: function() {
                return !t
            },
            lock: function() {
                return f = s = [],
                r || o || (t = r = ""),
                this
            },
            locked: function() {
                return !!f
            },
            fireWith: function(n, t) {
                return f || (t = [n, (t = t || []).slice ? t.slice() : t],
                s.push(t),
                o || y()),
                this
            },
            fire: function() {
                return c.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!v
            }
        };
        return c
    }
    ;
    i.extend({
        Deferred: function(t) {
            var f = [["notify", "progress", i.Callbacks("memory"), i.Callbacks("memory"), 2], ["resolve", "done", i.Callbacks("once memory"), i.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", i.Callbacks("once memory"), i.Callbacks("once memory"), 1, "rejected"]]
              , o = "pending"
              , e = {
                state: function() {
                    return o
                },
                always: function() {
                    return r.done(arguments).fail(arguments),
                    this
                },
                "catch": function(n) {
                    return e.then(null, n)
                },
                pipe: function() {
                    var n = arguments;
                    return i.Deferred(function(t) {
                        i.each(f, function(i, f) {
                            var e = u(n[f[4]]) && n[f[4]];
                            r[f[1]](function() {
                                var n = e && e.apply(this, arguments);
                                n && u(n.promise) ? n.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[f[0] + "With"](this, e ? [n] : arguments)
                            })
                        });
                        n = null
                    }).promise()
                },
                then: function(t, r, e) {
                    function s(t, r, f, e) {
                        return function() {
                            var h = this
                              , c = arguments
                              , l = function() {
                                var n, i;
                                if (!(t < o)) {
                                    if ((n = f.apply(h, c)) === r.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    i = n && ("object" == typeof n || "function" == typeof n) && n.then;
                                    u(i) ? e ? i.call(n, s(o, r, ut, e), s(o, r, fi, e)) : (o++,
                                    i.call(n, s(o, r, ut, e), s(o, r, fi, e), s(o, r, ut, r.notifyWith))) : (f !== ut && (h = void 0,
                                    c = [n]),
                                    (e || r.resolveWith)(h, c))
                                }
                            }
                              , a = e ? l : function() {
                                try {
                                    l()
                                } catch (l) {
                                    i.Deferred.exceptionHook && i.Deferred.exceptionHook(l, a.stackTrace);
                                    o <= t + 1 && (f !== fi && (h = void 0,
                                    c = [l]),
                                    r.rejectWith(h, c))
                                }
                            }
                            ;
                            t ? a() : (i.Deferred.getStackHook && (a.stackTrace = i.Deferred.getStackHook()),
                            n.setTimeout(a))
                        }
                    }
                    var o = 0;
                    return i.Deferred(function(n) {
                        f[0][3].add(s(0, n, u(e) ? e : ut, n.notifyWith));
                        f[1][3].add(s(0, n, u(t) ? t : ut));
                        f[2][3].add(s(0, n, u(r) ? r : fi))
                    }).promise()
                },
                promise: function(n) {
                    return null != n ? i.extend(n, e) : e
                }
            }
              , r = {};
            return i.each(f, function(n, t) {
                var i = t[2]
                  , u = t[5];
                e[t[1]] = i.add;
                u && i.add(function() {
                    o = u
                }, f[3 - n][2].disable, f[3 - n][3].disable, f[0][2].lock, f[0][3].lock);
                i.add(t[3].fire);
                r[t[0]] = function() {
                    return r[t[0] + "With"](this === r ? void 0 : this, arguments),
                    this
                }
                ;
                r[t[0] + "With"] = i.fireWith
            }),
            e.promise(r),
            t && t.call(r, r),
            r
        },
        when: function(n) {
            var e = arguments.length
              , t = e
              , o = Array(t)
              , f = b.call(arguments)
              , r = i.Deferred()
              , s = function(n) {
                return function(t) {
                    o[n] = this;
                    f[n] = 1 < arguments.length ? b.call(arguments) : t;
                    --e || r.resolveWith(o, f)
                }
            };
            if (e <= 1 && (fu(n, r.done(s(t)).resolve, r.reject, !e),
            "pending" === r.state() || u(f[t] && f[t].then)))
                return r.then();
            while (t--)
                fu(f[t], s(t), r.reject);
            return r.promise()
        }
    });
    eu = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    i.Deferred.exceptionHook = function(t, i) {
        n.console && n.console.warn && t && eu.test(t.name) && n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, i)
    }
    ;
    i.readyException = function(t) {
        n.setTimeout(function() {
            throw t;
        })
    }
    ;
    ei = i.Deferred();
    i.fn.ready = function(n) {
        return ei.then(n)["catch"](function(n) {
            i.readyException(n)
        }),
        this
    }
    ;
    i.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(n) {
            (!0 === n ? --i.readyWait : i.isReady) || (i.isReady = !0) !== n && 0 < --i.readyWait || ei.resolveWith(f, [i])
        }
    });
    i.ready.then = ei.then;
    "complete" === f.readyState || "loading" !== f.readyState && !f.documentElement.doScroll ? n.setTimeout(i.ready) : (f.addEventListener("DOMContentLoaded", oi),
    n.addEventListener("load", oi));
    var p = function(n, t, r, f, e, o, s) {
        var h = 0
          , l = n.length
          , c = null == r;
        if ("object" === it(r))
            for (h in e = !0,
            r)
                p(n, t, h, r[h], !0, o, s);
        else if (void 0 !== f && (e = !0,
        u(f) || (s = !0),
        c && (s ? (t.call(n, f),
        t = null) : (c = t,
        t = function(n, t, r) {
            return c.call(i(n), r)
        }
        )),
        t))
            for (; h < l; h++)
                t(n[h], r, s ? f : f.call(n[h], h, t(n[h], r)));
        return e ? n : c ? t.call(n) : l ? t(n[0], r) : o
    }
      , se = /^-ms-/
      , he = /-([a-z])/g;
    yt = function(n) {
        return 1 === n.nodeType || 9 === n.nodeType || !+n.nodeType
    }
    ;
    pt.uid = 1;
    pt.prototype = {
        cache: function(n) {
            var t = n[this.expando];
            return t || (t = {},
            yt(n) && (n.nodeType ? n[this.expando] = t : Object.defineProperty(n, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(n, t, i) {
            var r, u = this.cache(n);
            if ("string" == typeof t)
                u[y(t)] = i;
            else
                for (r in t)
                    u[y(r)] = t[r];
            return u
        },
        get: function(n, t) {
            return void 0 === t ? this.cache(n) : n[this.expando] && n[this.expando][y(t)]
        },
        access: function(n, t, i) {
            return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(n, t) : (this.set(n, t, i),
            void 0 !== i ? i : t)
        },
        remove: function(n, t) {
            var u, r = n[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t)
                    for (u = (t = Array.isArray(t) ? t.map(y) : (t = y(t))in r ? [t] : t.match(l) || []).length; u--; )
                        delete r[t[u]];
                (void 0 === t || i.isEmptyObject(r)) && (n.nodeType ? n[this.expando] = void 0 : delete n[this.expando])
            }
        },
        hasData: function(n) {
            var t = n[this.expando];
            return void 0 !== t && !i.isEmptyObject(t)
        }
    };
    var r = new pt
      , o = new pt
      , le = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , ae = /[A-Z]/g;
    i.extend({
        hasData: function(n) {
            return o.hasData(n) || r.hasData(n)
        },
        data: function(n, t, i) {
            return o.access(n, t, i)
        },
        removeData: function(n, t) {
            o.remove(n, t)
        },
        _data: function(n, t, i) {
            return r.access(n, t, i)
        },
        _removeData: function(n, t) {
            r.remove(n, t)
        }
    });
    i.fn.extend({
        data: function(n, t) {
            var f, u, e, i = this[0], s = i && i.attributes;
            if (void 0 === n) {
                if (this.length && (e = o.get(i),
                1 === i.nodeType && !r.get(i, "hasDataAttrs"))) {
                    for (f = s.length; f--; )
                        s[f] && 0 === (u = s[f].name).indexOf("data-") && (u = y(u.slice(5)),
                        ou(i, u, e[u]));
                    r.set(i, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof n ? this.each(function() {
                o.set(this, n)
            }) : p(this, function(t) {
                var r;
                if (i && void 0 === t)
                    return void 0 !== (r = o.get(i, n)) ? r : void 0 !== (r = ou(i, n)) ? r : void 0;
                this.each(function() {
                    o.set(this, n, t)
                })
            }, null, t, 1 < arguments.length, null, !0)
        },
        removeData: function(n) {
            return this.each(function() {
                o.remove(this, n)
            })
        }
    });
    i.extend({
        queue: function(n, t, u) {
            var f;
            if (n)
                return t = (t || "fx") + "queue",
                f = r.get(n, t),
                u && (!f || Array.isArray(u) ? f = r.access(n, t, i.makeArray(u)) : f.push(u)),
                f || []
        },
        dequeue: function(n, t) {
            t = t || "fx";
            var r = i.queue(n, t)
              , e = r.length
              , u = r.shift()
              , f = i._queueHooks(n, t);
            "inprogress" === u && (u = r.shift(),
            e--);
            u && ("fx" === t && r.unshift("inprogress"),
            delete f.stop,
            u.call(n, function() {
                i.dequeue(n, t)
            }, f));
            !e && f && f.empty.fire()
        },
        _queueHooks: function(n, t) {
            var u = t + "queueHooks";
            return r.get(n, u) || r.access(n, u, {
                empty: i.Callbacks("once memory").add(function() {
                    r.remove(n, [t + "queue", u])
                })
            })
        }
    });
    i.fn.extend({
        queue: function(n, t) {
            var r = 2;
            return "string" != typeof n && (t = n,
            n = "fx",
            r--),
            arguments.length < r ? i.queue(this[0], n) : void 0 === t ? this : this.each(function() {
                var r = i.queue(this, n, t);
                i._queueHooks(this, n);
                "fx" === n && "inprogress" !== r[0] && i.dequeue(this, n)
            })
        },
        dequeue: function(n) {
            return this.each(function() {
                i.dequeue(this, n)
            })
        },
        clearQueue: function(n) {
            return this.queue(n || "fx", [])
        },
        promise: function(n, t) {
            var u, e = 1, o = i.Deferred(), f = this, s = this.length, h = function() {
                --e || o.resolveWith(f, [f])
            };
            for ("string" != typeof n && (t = n,
            n = void 0),
            n = n || "fx"; s--; )
                (u = r.get(f[s], n + "queueHooks")) && u.empty && (e++,
                u.empty.add(h));
            return h(),
            o.promise(t)
        }
    });
    var su = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , wt = new RegExp("^(?:([+-])=|)(" + su + ")([a-z%]*)$","i")
      , w = ["Top", "Right", "Bottom", "Left"]
      , bt = f.documentElement
      , ft = function(n) {
        return i.contains(n.ownerDocument, n)
    }
      , ve = {
        composed: !0
    };
    bt.getRootNode && (ft = function(n) {
        return i.contains(n.ownerDocument, n) || n.getRootNode(ve) === n.ownerDocument
    }
    );
    kt = function(n, t) {
        return "none" === (n = t || n).style.display || "" === n.style.display && ft(n) && "none" === i.css(n, "display")
    }
    ;
    ki = function(n, t, i, r) {
        var f, u, e = {};
        for (u in t)
            e[u] = n.style[u],
            n.style[u] = t[u];
        for (u in f = i.apply(n, r || []),
        t)
            n.style[u] = e[u];
        return f
    }
    ;
    di = {};
    i.fn.extend({
        show: function() {
            return et(this, !0)
        },
        hide: function() {
            return et(this)
        },
        toggle: function(n) {
            return "boolean" == typeof n ? n ? this.show() : this.hide() : this.each(function() {
                kt(this) ? i(this).show() : i(this).hide()
            })
        }
    });
    var dt = /^(?:checkbox|radio)$/i
      , cu = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i
      , lu = /^$|^module$|\/(?:java|ecma)script/i
      , h = {
        option: [1, "<select multiple='multiple'>", "<\/select>"],
        thead: [1, "<table>", "<\/table>"],
        col: [2, "<table><colgroup>", "<\/colgroup><\/table>"],
        tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
        td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
        _default: [0, "", ""]
    };
    h.optgroup = h.option;
    h.tbody = h.tfoot = h.colgroup = h.caption = h.thead;
    h.th = h.td;
    au = /<|&#?\w+;/;
    gt = f.createDocumentFragment().appendChild(f.createElement("div"));
    (si = f.createElement("input")).setAttribute("type", "radio");
    si.setAttribute("checked", "checked");
    si.setAttribute("name", "t");
    gt.appendChild(si);
    e.checkClone = gt.cloneNode(!0).cloneNode(!0).lastChild.checked;
    gt.innerHTML = "<textarea>x<\/textarea>";
    e.noCloneChecked = !!gt.cloneNode(!0).lastChild.defaultValue;
    var ye = /^key/
      , pe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , yu = /^([^.]*)(?:\.(.+)|)/;
    i.event = {
        global: {},
        add: function(n, t, u, f, e) {
            var p, v, k, y, w, h, s, c, o, b, d, a = r.get(n);
            if (a)
                for (u.handler && (u = (p = u).handler,
                e = p.selector),
                e && i.find.matchesSelector(bt, e),
                u.guid || (u.guid = i.guid++),
                (y = a.events) || (y = a.events = {}),
                (v = a.handle) || (v = a.handle = function(t) {
                    if ("undefined" != typeof i && i.event.triggered !== t.type)
                        return i.event.dispatch.apply(n, arguments)
                }
                ),
                w = (t = (t || "").match(l) || [""]).length; w--; )
                    o = d = (k = yu.exec(t[w]) || [])[1],
                    b = (k[2] || "").split(".").sort(),
                    o && (s = i.event.special[o] || {},
                    o = (e ? s.delegateType : s.bindType) || o,
                    s = i.event.special[o] || {},
                    h = i.extend({
                        type: o,
                        origType: d,
                        data: f,
                        handler: u,
                        guid: u.guid,
                        selector: e,
                        needsContext: e && i.expr.match.needsContext.test(e),
                        namespace: b.join(".")
                    }, p),
                    (c = y[o]) || ((c = y[o] = []).delegateCount = 0,
                    s.setup && !1 !== s.setup.call(n, f, b, v) || n.addEventListener && n.addEventListener(o, v)),
                    s.add && (s.add.call(n, h),
                    h.handler.guid || (h.handler.guid = u.guid)),
                    e ? c.splice(c.delegateCount++, 0, h) : c.push(h),
                    i.event.global[o] = !0)
        },
        remove: function(n, t, u, f, e) {
            var y, k, c, v, p, s, h, a, o, b, d, w = r.hasData(n) && r.get(n);
            if (w && (v = w.events)) {
                for (p = (t = (t || "").match(l) || [""]).length; p--; )
                    if (o = d = (c = yu.exec(t[p]) || [])[1],
                    b = (c[2] || "").split(".").sort(),
                    o) {
                        for (h = i.event.special[o] || {},
                        a = v[o = (f ? h.delegateType : h.bindType) || o] || [],
                        c = c[2] && new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        k = y = a.length; y--; )
                            s = a[y],
                            !e && d !== s.origType || u && u.guid !== s.guid || c && !c.test(s.namespace) || f && f !== s.selector && ("**" !== f || !s.selector) || (a.splice(y, 1),
                            s.selector && a.delegateCount--,
                            h.remove && h.remove.call(n, s));
                        k && !a.length && (h.teardown && !1 !== h.teardown.call(n, b, w.handle) || i.removeEvent(n, o, w.handle),
                        delete v[o])
                    } else
                        for (o in v)
                            i.event.remove(n, o + t[p], u, f, !0);
                i.isEmptyObject(v) && r.remove(n, "handle events")
            }
        },
        dispatch: function(n) {
            var u, h, c, e, f, l, t = i.event.fix(n), s = new Array(arguments.length), a = (r.get(this, "events") || {})[t.type] || [], o = i.event.special[t.type] || {};
            for (s[0] = t,
            u = 1; u < arguments.length; u++)
                s[u] = arguments[u];
            if (t.delegateTarget = this,
            !o.preDispatch || !1 !== o.preDispatch.call(this, t)) {
                for (l = i.event.handlers.call(this, t, a),
                u = 0; (e = l[u++]) && !t.isPropagationStopped(); )
                    for (t.currentTarget = e.elem,
                    h = 0; (f = e.handlers[h++]) && !t.isImmediatePropagationStopped(); )
                        t.rnamespace && !1 !== f.namespace && !t.rnamespace.test(f.namespace) || (t.handleObj = f,
                        t.data = f.data,
                        void 0 !== (c = ((i.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, s)) && !1 === (t.result = c) && (t.preventDefault(),
                        t.stopPropagation()));
                return o.postDispatch && o.postDispatch.call(this, t),
                t.result
            }
        },
        handlers: function(n, t) {
            var f, h, u, e, o, c = [], s = t.delegateCount, r = n.target;
            if (s && r.nodeType && !("click" === n.type && 1 <= n.button))
                for (; r !== this; r = r.parentNode || this)
                    if (1 === r.nodeType && ("click" !== n.type || !0 !== r.disabled)) {
                        for (e = [],
                        o = {},
                        f = 0; f < s; f++)
                            void 0 === o[u = (h = t[f]).selector + " "] && (o[u] = h.needsContext ? -1 < i(u, this).index(r) : i.find(u, this, null, [r]).length),
                            o[u] && e.push(h);
                        e.length && c.push({
                            elem: r,
                            handlers: e
                        })
                    }
            return r = this,
            s < t.length && c.push({
                elem: r,
                handlers: t.slice(s)
            }),
            c
        },
        addProp: function(n, t) {
            Object.defineProperty(i.Event.prototype, n, {
                enumerable: !0,
                configurable: !0,
                get: u(t) ? function() {
                    if (this.originalEvent)
                        return t(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[n]
                }
                ,
                set: function(t) {
                    Object.defineProperty(this, n, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(n) {
            return n[i.expando] ? n : new i.Event(n)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(n) {
                    var t = this || n;
                    return dt.test(t.type) && t.click && c(t, "input") && hi(t, "click", ot),
                    !1
                },
                trigger: function(n) {
                    var t = this || n;
                    return dt.test(t.type) && t.click && c(t, "input") && hi(t, "click"),
                    !0
                },
                _default: function(n) {
                    var t = n.target;
                    return dt.test(t.type) && t.click && c(t, "input") && r.get(t, "click") || c(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(n) {
                    void 0 !== n.result && n.originalEvent && (n.originalEvent.returnValue = n.result)
                }
            }
        }
    };
    i.removeEvent = function(n, t, i) {
        n.removeEventListener && n.removeEventListener(t, i)
    }
    ;
    i.Event = function(n, t) {
        if (!(this instanceof i.Event))
            return new i.Event(n,t);
        n && n.type ? (this.originalEvent = n,
        this.type = n.type,
        this.isDefaultPrevented = n.defaultPrevented || void 0 === n.defaultPrevented && !1 === n.returnValue ? ot : st,
        this.target = n.target && 3 === n.target.nodeType ? n.target.parentNode : n.target,
        this.currentTarget = n.currentTarget,
        this.relatedTarget = n.relatedTarget) : this.type = n;
        t && i.extend(this, t);
        this.timeStamp = n && n.timeStamp || Date.now();
        this[i.expando] = !0
    }
    ;
    i.Event.prototype = {
        constructor: i.Event,
        isDefaultPrevented: st,
        isPropagationStopped: st,
        isImmediatePropagationStopped: st,
        isSimulated: !1,
        preventDefault: function() {
            var n = this.originalEvent;
            this.isDefaultPrevented = ot;
            n && !this.isSimulated && n.preventDefault()
        },
        stopPropagation: function() {
            var n = this.originalEvent;
            this.isPropagationStopped = ot;
            n && !this.isSimulated && n.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var n = this.originalEvent;
            this.isImmediatePropagationStopped = ot;
            n && !this.isSimulated && n.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    i.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(n) {
            var t = n.button;
            return null == n.which && ye.test(n.type) ? null != n.charCode ? n.charCode : n.keyCode : !n.which && void 0 !== t && pe.test(n.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : n.which
        }
    }, i.event.addProp);
    i.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, t) {
        i.event.special[n] = {
            setup: function() {
                return hi(this, n, we),
                !1
            },
            trigger: function() {
                return hi(this, n),
                !0
            },
            delegateType: t
        }
    });
    i.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(n, t) {
        i.event.special[n] = {
            delegateType: t,
            bindType: t,
            handle: function(n) {
                var u, r = n.relatedTarget, f = n.handleObj;
                return r && (r === this || i.contains(this, r)) || (n.type = f.origType,
                u = f.handler.apply(this, arguments),
                n.type = t),
                u
            }
        }
    });
    i.fn.extend({
        on: function(n, t, i, r) {
            return nr(this, n, t, i, r)
        },
        one: function(n, t, i, r) {
            return nr(this, n, t, i, r, 1)
        },
        off: function(n, t, r) {
            var u, f;
            if (n && n.preventDefault && n.handleObj)
                return u = n.handleObj,
                i(n.delegateTarget).off(u.namespace ? u.origType + "." + u.namespace : u.origType, u.selector, u.handler),
                this;
            if ("object" == typeof n) {
                for (f in n)
                    this.off(f, t, n[f]);
                return this
            }
            return !1 !== t && "function" != typeof t || (r = t,
            t = void 0),
            !1 === r && (r = st),
            this.each(function() {
                i.event.remove(this, n, r, t)
            })
        }
    });
    var be = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
      , ke = /<script|<style|<link/i
      , de = /checked\s*(?:[^=]|=\s*.checked.)/i
      , ge = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    i.extend({
        htmlPrefilter: function(n) {
            return n.replace(be, "<$1><\/$2>")
        },
        clone: function(n, t, r) {
            var u, c, o, f, l, a, v, h = n.cloneNode(!0), y = ft(n);
            if (!(e.noCloneChecked || 1 !== n.nodeType && 11 !== n.nodeType || i.isXMLDoc(n)))
                for (f = s(h),
                u = 0,
                c = (o = s(n)).length; u < c; u++)
                    l = o[u],
                    a = f[u],
                    void 0,
                    "input" === (v = a.nodeName.toLowerCase()) && dt.test(l.type) ? a.checked = l.checked : "input" !== v && "textarea" !== v || (a.defaultValue = l.defaultValue);
            if (t)
                if (r)
                    for (o = o || s(n),
                    f = f || s(h),
                    u = 0,
                    c = o.length; u < c; u++)
                        wu(o[u], f[u]);
                else
                    wu(n, h);
            return 0 < (f = s(h, "script")).length && gi(f, !y && s(n, "script")),
            h
        },
        cleanData: function(n) {
            for (var u, t, f, s = i.event.special, e = 0; void 0 !== (t = n[e]); e++)
                if (yt(t)) {
                    if (u = t[r.expando]) {
                        if (u.events)
                            for (f in u.events)
                                s[f] ? i.event.remove(t, f) : i.removeEvent(t, f, u.handle);
                        t[r.expando] = void 0
                    }
                    t[o.expando] && (t[o.expando] = void 0)
                }
        }
    });
    i.fn.extend({
        detach: function(n) {
            return bu(this, n, !0)
        },
        remove: function(n) {
            return bu(this, n)
        },
        text: function(n) {
            return p(this, function(n) {
                return void 0 === n ? i.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = n)
                })
            }, null, n, arguments.length)
        },
        append: function() {
            return ht(this, arguments, function(n) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || pu(this, n).appendChild(n)
            })
        },
        prepend: function() {
            return ht(this, arguments, function(n) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = pu(this, n);
                    t.insertBefore(n, t.firstChild)
                }
            })
        },
        before: function() {
            return ht(this, arguments, function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this)
            })
        },
        after: function() {
            return ht(this, arguments, function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this.nextSibling)
            })
        },
        empty: function() {
            for (var n, t = 0; null != (n = this[t]); t++)
                1 === n.nodeType && (i.cleanData(s(n, !1)),
                n.textContent = "");
            return this
        },
        clone: function(n, t) {
            return n = null != n && n,
            t = null == t ? n : t,
            this.map(function() {
                return i.clone(this, n, t)
            })
        },
        html: function(n) {
            return p(this, function(n) {
                var t = this[0] || {}
                  , r = 0
                  , u = this.length;
                if (void 0 === n && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof n && !ke.test(n) && !h[(cu.exec(n) || ["", ""])[1].toLowerCase()]) {
                    n = i.htmlPrefilter(n);
                    try {
                        for (; r < u; r++)
                            1 === (t = this[r] || {}).nodeType && (i.cleanData(s(t, !1)),
                            t.innerHTML = n);
                        t = 0
                    } catch (n) {}
                }
                t && this.empty().append(n)
            }, null, n, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return ht(this, arguments, function(t) {
                var r = this.parentNode;
                i.inArray(this, n) < 0 && (i.cleanData(s(this)),
                r && r.replaceChild(t, this))
            }, n)
        }
    });
    i.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(n, t) {
        i.fn[n] = function(n) {
            for (var u, f = [], e = i(n), o = e.length - 1, r = 0; r <= o; r++)
                u = r === o ? this : this.clone(!0),
                i(e[r])[t](u),
                yi.apply(f, u.get());
            return this.pushStack(f)
        }
    });
    var tr = new RegExp("^(" + su + ")(?!px)[a-z%]+$","i")
      , ci = function(t) {
        var i = t.ownerDocument.defaultView;
        return i && i.opener || (i = n),
        i.getComputedStyle(t)
    }
      , io = new RegExp(w.join("|"),"i");
    !function() {
        function r() {
            if (t) {
                o.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
                t.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
                bt.appendChild(o).appendChild(t);
                var i = n.getComputedStyle(t);
                s = "1%" !== i.top;
                a = 12 === u(i.marginLeft);
                t.style.right = "60%";
                l = 36 === u(i.right);
                h = 36 === u(i.width);
                t.style.position = "absolute";
                c = 12 === u(t.offsetWidth / 3);
                bt.removeChild(o);
                t = null
            }
        }
        function u(n) {
            return Math.round(parseFloat(n))
        }
        var s, h, c, l, a, o = f.createElement("div"), t = f.createElement("div");
        t.style && (t.style.backgroundClip = "content-box",
        t.cloneNode(!0).style.backgroundClip = "",
        e.clearCloneStyle = "content-box" === t.style.backgroundClip,
        i.extend(e, {
            boxSizingReliable: function() {
                return r(),
                h
            },
            pixelBoxStyles: function() {
                return r(),
                l
            },
            pixelPosition: function() {
                return r(),
                s
            },
            reliableMarginLeft: function() {
                return r(),
                a
            },
            scrollboxSize: function() {
                return r(),
                c
            }
        }))
    }();
    var du = ["Webkit", "Moz", "ms"]
      , gu = f.createElement("div").style
      , nf = {};
    var ro = /^(none|table(?!-c[ea]).+)/
      , tf = /^--/
      , uo = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , rf = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    i.extend({
        cssHooks: {
            opacity: {
                get: function(n, t) {
                    if (t) {
                        var i = ni(n, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(n, t, r, u) {
            if (n && 3 !== n.nodeType && 8 !== n.nodeType && n.style) {
                var f, h, o, c = y(t), l = tf.test(t), s = n.style;
                if (l || (t = ir(c)),
                o = i.cssHooks[t] || i.cssHooks[c],
                void 0 === r)
                    return o && "get"in o && void 0 !== (f = o.get(n, !1, u)) ? f : s[t];
                "string" == (h = typeof r) && (f = wt.exec(r)) && f[1] && (r = hu(n, t, f),
                h = "number");
                null != r && r == r && ("number" !== h || l || (r += f && f[3] || (i.cssNumber[c] ? "" : "px")),
                e.clearCloneStyle || "" !== r || 0 !== t.indexOf("background") || (s[t] = "inherit"),
                o && "set"in o && void 0 === (r = o.set(n, r, u)) || (l ? s.setProperty(t, r) : s[t] = r))
            }
        },
        css: function(n, t, r, u) {
            var f, e, o, s = y(t);
            return tf.test(t) || (t = ir(s)),
            (o = i.cssHooks[t] || i.cssHooks[s]) && "get"in o && (f = o.get(n, !0, r)),
            void 0 === f && (f = ni(n, t, u)),
            "normal" === f && t in rf && (f = rf[t]),
            "" === r || r ? (e = parseFloat(f),
            !0 === r || isFinite(e) ? e || 0 : f) : f
        }
    });
    i.each(["height", "width"], function(n, t) {
        i.cssHooks[t] = {
            get: function(n, r, u) {
                if (r)
                    return !ro.test(i.css(n, "display")) || n.getClientRects().length && n.getBoundingClientRect().width ? ff(n, t, u) : ki(n, uo, function() {
                        return ff(n, t, u)
                    })
            },
            set: function(n, r, u) {
                var s, f = ci(n), h = !e.scrollboxSize() && "absolute" === f.position, c = (h || u) && "border-box" === i.css(n, "boxSizing", !1, f), o = u ? rr(n, t, u, c, f) : 0;
                return c && h && (o -= Math.ceil(n["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(f[t]) - rr(n, t, "border", !1, f) - .5)),
                o && (s = wt.exec(r)) && "px" !== (s[3] || "px") && (n.style[t] = r,
                r = i.css(n, t)),
                uf(0, r, o)
            }
        }
    });
    i.cssHooks.marginLeft = ku(e.reliableMarginLeft, function(n, t) {
        if (t)
            return (parseFloat(ni(n, "marginLeft")) || n.getBoundingClientRect().left - ki(n, {
                marginLeft: 0
            }, function() {
                return n.getBoundingClientRect().left
            })) + "px"
    });
    i.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(n, t) {
        i.cssHooks[n + t] = {
            expand: function(i) {
                for (var r = 0, f = {}, u = "string" == typeof i ? i.split(" ") : [i]; r < 4; r++)
                    f[n + w[r] + t] = u[r] || u[r - 2] || u[0];
                return f
            }
        };
        "margin" !== n && (i.cssHooks[n + t].set = uf)
    });
    i.fn.extend({
        css: function(n, t) {
            return p(this, function(n, t, r) {
                var f, e, o = {}, u = 0;
                if (Array.isArray(t)) {
                    for (f = ci(n),
                    e = t.length; u < e; u++)
                        o[t[u]] = i.css(n, t[u], !1, f);
                    return o
                }
                return void 0 !== r ? i.style(n, t, r) : i.css(n, t)
            }, n, t, 1 < arguments.length)
        }
    });
    ((i.Tween = a).prototype = {
        constructor: a,
        init: function(n, t, r, u, f, e) {
            this.elem = n;
            this.prop = r;
            this.easing = f || i.easing._default;
            this.options = t;
            this.start = this.now = this.cur();
            this.end = u;
            this.unit = e || (i.cssNumber[r] ? "" : "px")
        },
        cur: function() {
            var n = a.propHooks[this.prop];
            return n && n.get ? n.get(this) : a.propHooks._default.get(this)
        },
        run: function(n) {
            var t, r = a.propHooks[this.prop];
            return this.pos = this.options.duration ? t = i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : t = n,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            r && r.set ? r.set(this) : a.propHooks._default.set(this),
            this
        }
    }).init.prototype = a.prototype;
    (a.propHooks = {
        _default: {
            get: function(n) {
                var t;
                return 1 !== n.elem.nodeType || null != n.elem[n.prop] && null == n.elem.style[n.prop] ? n.elem[n.prop] : (t = i.css(n.elem, n.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(n) {
                i.fx.step[n.prop] ? i.fx.step[n.prop](n) : 1 !== n.elem.nodeType || !i.cssHooks[n.prop] && null == n.elem.style[ir(n.prop)] ? n.elem[n.prop] = n.now : i.style(n.elem, n.prop, n.now + n.unit)
            }
        }
    }).scrollTop = a.propHooks.scrollLeft = {
        set: function(n) {
            n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
        }
    };
    i.easing = {
        linear: function(n) {
            return n
        },
        swing: function(n) {
            return .5 - Math.cos(n * Math.PI) / 2
        },
        _default: "swing"
    };
    i.fx = a.prototype.init;
    i.fx.step = {};
    of = /^(?:toggle|show|hide)$/;
    sf = /queueHooks$/;
    i.Animation = i.extend(v, {
        tweeners: {
            "*": [function(n, t) {
                var i = this.createTween(n, t);
                return hu(i.elem, n, wt.exec(t), i),
                i
            }
            ]
        },
        tweener: function(n, t) {
            u(n) ? (t = n,
            n = ["*"]) : n = n.match(l);
            for (var i, r = 0, f = n.length; r < f; r++)
                i = n[r],
                v.tweeners[i] = v.tweeners[i] || [],
                v.tweeners[i].unshift(t)
        },
        prefilters: [function(n, t, u) {
            var f, y, w, c, b, h, o, l, k = "width"in t || "height"in t, v = this, p = {}, s = n.style, a = n.nodeType && kt(n), e = r.get(n, "fxshow");
            for (f in u.queue || (null == (c = i._queueHooks(n, "fx")).unqueued && (c.unqueued = 0,
            b = c.empty.fire,
            c.empty.fire = function() {
                c.unqueued || b()
            }
            ),
            c.unqueued++,
            v.always(function() {
                v.always(function() {
                    c.unqueued--;
                    i.queue(n, "fx").length || c.empty.fire()
                })
            })),
            t)
                if (y = t[f],
                of.test(y)) {
                    if (delete t[f],
                    w = w || "toggle" === y,
                    y === (a ? "hide" : "show")) {
                        if ("show" !== y || !e || void 0 === e[f])
                            continue;
                        a = !0
                    }
                    p[f] = e && e[f] || i.style(n, f)
                }
            if ((h = !i.isEmptyObject(t)) || !i.isEmptyObject(p))
                for (f in k && 1 === n.nodeType && (u.overflow = [s.overflow, s.overflowX, s.overflowY],
                null == (o = e && e.display) && (o = r.get(n, "display")),
                "none" === (l = i.css(n, "display")) && (o ? l = o : (et([n], !0),
                o = n.style.display || o,
                l = i.css(n, "display"),
                et([n]))),
                ("inline" === l || "inline-block" === l && null != o) && "none" === i.css(n, "float") && (h || (v.done(function() {
                    s.display = o
                }),
                null == o && (l = s.display,
                o = "none" === l ? "" : l)),
                s.display = "inline-block")),
                u.overflow && (s.overflow = "hidden",
                v.always(function() {
                    s.overflow = u.overflow[0];
                    s.overflowX = u.overflow[1];
                    s.overflowY = u.overflow[2]
                })),
                h = !1,
                p)
                    h || (e ? "hidden"in e && (a = e.hidden) : e = r.access(n, "fxshow", {
                        display: o
                    }),
                    w && (e.hidden = !a),
                    a && et([n], !0),
                    v.done(function() {
                        for (f in a || et([n]),
                        r.remove(n, "fxshow"),
                        p)
                            i.style(n, f, p[f])
                    })),
                    h = cf(a ? e[f] : 0, f, v),
                    f in e || (e[f] = h.start,
                    a && (h.end = h.start,
                    h.start = 0))
        }
        ],
        prefilter: function(n, t) {
            t ? v.prefilters.unshift(n) : v.prefilters.push(n)
        }
    });
    i.speed = function(n, t, r) {
        var f = n && "object" == typeof n ? i.extend({}, n) : {
            complete: r || !r && t || u(n) && n,
            duration: n,
            easing: r && t || t && !u(t) && t
        };
        return i.fx.off ? f.duration = 0 : "number" != typeof f.duration && (f.duration = f.duration in i.fx.speeds ? i.fx.speeds[f.duration] : i.fx.speeds._default),
        null != f.queue && !0 !== f.queue || (f.queue = "fx"),
        f.old = f.complete,
        f.complete = function() {
            u(f.old) && f.old.call(this);
            f.queue && i.dequeue(this, f.queue)
        }
        ,
        f
    }
    ;
    i.fn.extend({
        fadeTo: function(n, t, i, r) {
            return this.filter(kt).css("opacity", 0).show().end().animate({
                opacity: t
            }, n, i, r)
        },
        animate: function(n, t, u, f) {
            var s = i.isEmptyObject(n)
              , o = i.speed(t, u, f)
              , e = function() {
                var t = v(this, i.extend({}, n), o);
                (s || r.get(this, "finish")) && t.stop(!0)
            };
            return e.finish = e,
            s || !1 === o.queue ? this.each(e) : this.queue(o.queue, e)
        },
        stop: function(n, t, u) {
            var f = function(n) {
                var t = n.stop;
                delete n.stop;
                t(u)
            };
            return "string" != typeof n && (u = t,
            t = n,
            n = void 0),
            t && !1 !== n && this.queue(n || "fx", []),
            this.each(function() {
                var s = !0
                  , t = null != n && n + "queueHooks"
                  , o = i.timers
                  , e = r.get(this);
                if (t)
                    e[t] && e[t].stop && f(e[t]);
                else
                    for (t in e)
                        e[t] && e[t].stop && sf.test(t) && f(e[t]);
                for (t = o.length; t--; )
                    o[t].elem !== this || null != n && o[t].queue !== n || (o[t].anim.stop(u),
                    s = !1,
                    o.splice(t, 1));
                !s && u || i.dequeue(this, n)
            })
        },
        finish: function(n) {
            return !1 !== n && (n = n || "fx"),
            this.each(function() {
                var t, e = r.get(this), u = e[n + "queue"], o = e[n + "queueHooks"], f = i.timers, s = u ? u.length : 0;
                for (e.finish = !0,
                i.queue(this, n, []),
                o && o.stop && o.stop.call(this, !0),
                t = f.length; t--; )
                    f[t].elem === this && f[t].queue === n && (f[t].anim.stop(!0),
                    f.splice(t, 1));
                for (t = 0; t < s; t++)
                    u[t] && u[t].finish && u[t].finish.call(this);
                delete e.finish
            })
        }
    });
    i.each(["toggle", "show", "hide"], function(n, t) {
        var r = i.fn[t];
        i.fn[t] = function(n, i, u) {
            return null == n || "boolean" == typeof n ? r.apply(this, arguments) : this.animate(ai(t, !0), n, i, u)
        }
    });
    i.each({
        slideDown: ai("show"),
        slideUp: ai("hide"),
        slideToggle: ai("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(n, t) {
        i.fn[n] = function(n, i, r) {
            return this.animate(t, n, i, r)
        }
    });
    i.timers = [];
    i.fx.tick = function() {
        var r, n = 0, t = i.timers;
        for (ct = Date.now(); n < t.length; n++)
            (r = t[n])() || t[n] !== r || t.splice(n--, 1);
        t.length || i.fx.stop();
        ct = void 0
    }
    ;
    i.fx.timer = function(n) {
        i.timers.push(n);
        i.fx.start()
    }
    ;
    i.fx.interval = 13;
    i.fx.start = function() {
        li || (li = !0,
        ur())
    }
    ;
    i.fx.stop = function() {
        li = null
    }
    ;
    i.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    i.fn.delay = function(t, r) {
        return t = i.fx && i.fx.speeds[t] || t,
        r = r || "fx",
        this.queue(r, function(i, r) {
            var u = n.setTimeout(i, t);
            r.stop = function() {
                n.clearTimeout(u)
            }
        })
    }
    ;
    lt = f.createElement("input");
    ef = f.createElement("select").appendChild(f.createElement("option"));
    lt.type = "checkbox";
    e.checkOn = "" !== lt.value;
    e.optSelected = ef.selected;
    (lt = f.createElement("input")).value = "t";
    lt.type = "radio";
    e.radioValue = "t" === lt.value;
    at = i.expr.attrHandle;
    i.fn.extend({
        attr: function(n, t) {
            return p(this, i.attr, n, t, 1 < arguments.length)
        },
        removeAttr: function(n) {
            return this.each(function() {
                i.removeAttr(this, n)
            })
        }
    });
    i.extend({
        attr: function(n, t, r) {
            var f, u, e = n.nodeType;
            if (3 !== e && 8 !== e && 2 !== e)
                return "undefined" == typeof n.getAttribute ? i.prop(n, t, r) : (1 === e && i.isXMLDoc(n) || (u = i.attrHooks[t.toLowerCase()] || (i.expr.match.bool.test(t) ? lf : void 0)),
                void 0 !== r ? null === r ? void i.removeAttr(n, t) : u && "set"in u && void 0 !== (f = u.set(n, r, t)) ? f : (n.setAttribute(t, r + ""),
                r) : u && "get"in u && null !== (f = u.get(n, t)) ? f : null == (f = i.find.attr(n, t)) ? void 0 : f)
        },
        attrHooks: {
            type: {
                set: function(n, t) {
                    if (!e.radioValue && "radio" === t && c(n, "input")) {
                        var i = n.value;
                        return n.setAttribute("type", t),
                        i && (n.value = i),
                        t
                    }
                }
            }
        },
        removeAttr: function(n, t) {
            var i, u = 0, r = t && t.match(l);
            if (r && 1 === n.nodeType)
                while (i = r[u++])
                    n.removeAttribute(i)
        }
    });
    lf = {
        set: function(n, t, r) {
            return !1 === t ? i.removeAttr(n, r) : n.setAttribute(r, r),
            r
        }
    };
    i.each(i.expr.match.bool.source.match(/\w+/g), function(n, t) {
        var r = at[t] || i.find.attr;
        at[t] = function(n, t, i) {
            var f, e, u = t.toLowerCase();
            return i || (e = at[u],
            at[u] = f,
            f = null != r(n, t, i) ? u : null,
            at[u] = e),
            f
        }
    });
    af = /^(?:input|select|textarea|button)$/i;
    vf = /^(?:a|area)$/i;
    i.fn.extend({
        prop: function(n, t) {
            return p(this, i.prop, n, t, 1 < arguments.length)
        },
        removeProp: function(n) {
            return this.each(function() {
                delete this[i.propFix[n] || n]
            })
        }
    });
    i.extend({
        prop: function(n, t, r) {
            var f, u, e = n.nodeType;
            if (3 !== e && 8 !== e && 2 !== e)
                return 1 === e && i.isXMLDoc(n) || (t = i.propFix[t] || t,
                u = i.propHooks[t]),
                void 0 !== r ? u && "set"in u && void 0 !== (f = u.set(n, r, t)) ? f : n[t] = r : u && "get"in u && null !== (f = u.get(n, t)) ? f : n[t]
        },
        propHooks: {
            tabIndex: {
                get: function(n) {
                    var t = i.find.attr(n, "tabindex");
                    return t ? parseInt(t, 10) : af.test(n.nodeName) || vf.test(n.nodeName) && n.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    });
    e.optSelected || (i.propHooks.selected = {
        get: function(n) {
            var t = n.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(n) {
            var t = n.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    });
    i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        i.propFix[this.toLowerCase()] = this
    });
    i.fn.extend({
        addClass: function(n) {
            var o, t, r, f, e, s, h, c = 0;
            if (u(n))
                return this.each(function(t) {
                    i(this).addClass(n.call(this, t, nt(this)))
                });
            if ((o = fr(n)).length)
                while (t = this[c++])
                    if (f = nt(t),
                    r = 1 === t.nodeType && " " + g(f) + " ") {
                        for (s = 0; e = o[s++]; )
                            r.indexOf(" " + e + " ") < 0 && (r += e + " ");
                        f !== (h = g(r)) && t.setAttribute("class", h)
                    }
            return this
        },
        removeClass: function(n) {
            var o, r, t, f, e, s, h, c = 0;
            if (u(n))
                return this.each(function(t) {
                    i(this).removeClass(n.call(this, t, nt(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ((o = fr(n)).length)
                while (r = this[c++])
                    if (f = nt(r),
                    t = 1 === r.nodeType && " " + g(f) + " ") {
                        for (s = 0; e = o[s++]; )
                            while (-1 < t.indexOf(" " + e + " "))
                                t = t.replace(" " + e + " ", " ");
                        f !== (h = g(t)) && r.setAttribute("class", h)
                    }
            return this
        },
        toggleClass: function(n, t) {
            var f = typeof n
              , e = "string" === f || Array.isArray(n);
            return "boolean" == typeof t && e ? t ? this.addClass(n) : this.removeClass(n) : u(n) ? this.each(function(r) {
                i(this).toggleClass(n.call(this, r, nt(this), t), t)
            }) : this.each(function() {
                var t, o, u, s;
                if (e)
                    for (o = 0,
                    u = i(this),
                    s = fr(n); t = s[o++]; )
                        u.hasClass(t) ? u.removeClass(t) : u.addClass(t);
                else
                    void 0 !== n && "boolean" !== f || ((t = nt(this)) && r.set(this, "__className__", t),
                    this.setAttribute && this.setAttribute("class", t || !1 === n ? "" : r.get(this, "__className__") || ""))
            })
        },
        hasClass: function(n) {
            for (var t, r = 0, i = " " + n + " "; t = this[r++]; )
                if (1 === t.nodeType && -1 < (" " + g(nt(t)) + " ").indexOf(i))
                    return !0;
            return !1
        }
    });
    yf = /\r/g;
    i.fn.extend({
        val: function(n) {
            var t, r, e, f = this[0];
            return arguments.length ? (e = u(n),
            this.each(function(r) {
                var u;
                1 === this.nodeType && (null == (u = e ? n.call(this, r, i(this).val()) : n) ? u = "" : "number" == typeof u ? u += "" : Array.isArray(u) && (u = i.map(u, function(n) {
                    return null == n ? "" : n + ""
                })),
                (t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, u, "value") || (this.value = u))
            })) : f ? (t = i.valHooks[f.type] || i.valHooks[f.nodeName.toLowerCase()]) && "get"in t && void 0 !== (r = t.get(f, "value")) ? r : "string" == typeof (r = f.value) ? r.replace(yf, "") : null == r ? "" : r : void 0
        }
    });
    i.extend({
        valHooks: {
            option: {
                get: function(n) {
                    var t = i.find.attr(n, "value");
                    return null != t ? t : g(i.text(n))
                }
            },
            select: {
                get: function(n) {
                    for (var e, t, o = n.options, u = n.selectedIndex, f = "select-one" === n.type, s = f ? null : [], h = f ? u + 1 : o.length, r = u < 0 ? h : f ? u : 0; r < h; r++)
                        if (((t = o[r]).selected || r === u) && !t.disabled && (!t.parentNode.disabled || !c(t.parentNode, "optgroup"))) {
                            if (e = i(t).val(),
                            f)
                                return e;
                            s.push(e)
                        }
                    return s
                },
                set: function(n, t) {
                    for (var r, u, f = n.options, e = i.makeArray(t), o = f.length; o--; )
                        ((u = f[o]).selected = -1 < i.inArray(i.valHooks.option.get(u), e)) && (r = !0);
                    return r || (n.selectedIndex = -1),
                    e
                }
            }
        }
    });
    i.each(["radio", "checkbox"], function() {
        i.valHooks[this] = {
            set: function(n, t) {
                if (Array.isArray(t))
                    return n.checked = -1 < i.inArray(i(n).val(), t)
            }
        };
        e.checkOn || (i.valHooks[this].get = function(n) {
            return null === n.getAttribute("value") ? "on" : n.value
        }
        )
    });
    e.focusin = "onfocusin"in n;
    er = /^(?:focusinfocus|focusoutblur)$/;
    or = function(n) {
        n.stopPropagation()
    }
    ;
    i.extend(i.event, {
        trigger: function(t, e, o, s) {
            var k, c, l, d, v, y, a, p, w = [o || f], h = ui.call(t, "type") ? t.type : t, b = ui.call(t, "namespace") ? t.namespace.split(".") : [];
            if (c = p = l = o = o || f,
            3 !== o.nodeType && 8 !== o.nodeType && !er.test(h + i.event.triggered) && (-1 < h.indexOf(".") && (h = (b = h.split(".")).shift(),
            b.sort()),
            v = h.indexOf(":") < 0 && "on" + h,
            (t = t[i.expando] ? t : new i.Event(h,"object" == typeof t && t)).isTrigger = s ? 2 : 3,
            t.namespace = b.join("."),
            t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = o),
            e = null == e ? [t] : i.makeArray(e, [t]),
            a = i.event.special[h] || {},
            s || !a.trigger || !1 !== a.trigger.apply(o, e))) {
                if (!s && !a.noBubble && !tt(o)) {
                    for (d = a.delegateType || h,
                    er.test(d + h) || (c = c.parentNode); c; c = c.parentNode)
                        w.push(c),
                        l = c;
                    l === (o.ownerDocument || f) && w.push(l.defaultView || l.parentWindow || n)
                }
                for (k = 0; (c = w[k++]) && !t.isPropagationStopped(); )
                    p = c,
                    t.type = 1 < k ? d : a.bindType || h,
                    (y = (r.get(c, "events") || {})[t.type] && r.get(c, "handle")) && y.apply(c, e),
                    (y = v && c[v]) && y.apply && yt(c) && (t.result = y.apply(c, e),
                    !1 === t.result && t.preventDefault());
                return t.type = h,
                s || t.isDefaultPrevented() || a._default && !1 !== a._default.apply(w.pop(), e) || !yt(o) || v && u(o[h]) && !tt(o) && ((l = o[v]) && (o[v] = null),
                i.event.triggered = h,
                t.isPropagationStopped() && p.addEventListener(h, or),
                o[h](),
                t.isPropagationStopped() && p.removeEventListener(h, or),
                i.event.triggered = void 0,
                l && (o[v] = l)),
                t.result
            }
        },
        simulate: function(n, t, r) {
            var u = i.extend(new i.Event, r, {
                type: n,
                isSimulated: !0
            });
            i.event.trigger(u, null, t)
        }
    });
    i.fn.extend({
        trigger: function(n, t) {
            return this.each(function() {
                i.event.trigger(n, t, this)
            })
        },
        triggerHandler: function(n, t) {
            var r = this[0];
            if (r)
                return i.event.trigger(n, t, r, !0)
        }
    });
    e.focusin || i.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, t) {
        var u = function(n) {
            i.event.simulate(t, n.target, i.event.fix(n))
        };
        i.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this
                  , f = r.access(i, t);
                f || i.addEventListener(n, u, !0);
                r.access(i, t, (f || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this
                  , f = r.access(i, t) - 1;
                f ? r.access(i, t, f) : (i.removeEventListener(n, u, !0),
                r.remove(i, t))
            }
        }
    });
    var ti = n.location
      , pf = Date.now()
      , sr = /\?/;
    i.parseXML = function(t) {
        var r;
        if (!t || "string" != typeof t)
            return null;
        try {
            r = (new n.DOMParser).parseFromString(t, "text/xml")
        } catch (t) {
            r = void 0
        }
        return r && !r.getElementsByTagName("parsererror").length || i.error("Invalid XML: " + t),
        r
    }
    ;
    var fo = /\[\]$/
      , wf = /\r?\n/g
      , eo = /^(?:submit|button|image|reset|file)$/i
      , oo = /^(?:input|select|textarea|keygen)/i;
    i.param = function(n, t) {
        var r, f = [], e = function(n, t) {
            var i = u(t) ? t() : t;
            f[f.length] = encodeURIComponent(n) + "=" + encodeURIComponent(null == i ? "" : i)
        };
        if (null == n)
            return "";
        if (Array.isArray(n) || n.jquery && !i.isPlainObject(n))
            i.each(n, function() {
                e(this.name, this.value)
            });
        else
            for (r in n)
                hr(r, n[r], t, e);
        return f.join("&")
    }
    ;
    i.fn.extend({
        serialize: function() {
            return i.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var n = i.prop(this, "elements");
                return n ? i.makeArray(n) : this
            }).filter(function() {
                var n = this.type;
                return this.name && !i(this).is(":disabled") && oo.test(this.nodeName) && !eo.test(n) && (this.checked || !dt.test(n))
            }).map(function(n, t) {
                var r = i(this).val();
                return null == r ? null : Array.isArray(r) ? i.map(r, function(n) {
                    return {
                        name: t.name,
                        value: n.replace(wf, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: r.replace(wf, "\r\n")
                }
            }).get()
        }
    });
    var so = /%20/g
      , ho = /#.*$/
      , co = /([?&])_=[^&]*/
      , lo = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , ao = /^(?:GET|HEAD)$/
      , vo = /^\/\//
      , bf = {}
      , cr = {}
      , kf = "*/".concat("*")
      , lr = f.createElement("a");
    return lr.href = ti.href,
    i.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ti.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ti.protocol),
            global: !0,
            processData: !0,
            "async": !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": kf,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": i.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(n, t) {
            return t ? ar(ar(n, i.ajaxSettings), t) : ar(i.ajaxSettings, n)
        },
        ajaxPrefilter: df(bf),
        ajaxTransport: df(cr),
        ajax: function(t, r) {
            function b(t, r, f, c) {
                var v, rt, b, p, g, l = r;
                s || (s = !0,
                d && n.clearTimeout(d),
                a = void 0,
                k = c || "",
                e.readyState = 0 < t ? 4 : 0,
                v = 200 <= t && t < 300 || 304 === t,
                f && (p = function(n, t, i) {
                    for (var e, u, f, o, s = n.contents, r = n.dataTypes; "*" === r[0]; )
                        r.shift(),
                        void 0 === e && (e = n.mimeType || t.getResponseHeader("Content-Type"));
                    if (e)
                        for (u in s)
                            if (s[u] && s[u].test(e)) {
                                r.unshift(u);
                                break
                            }
                    if (r[0]in i)
                        f = r[0];
                    else {
                        for (u in i) {
                            if (!r[0] || n.converters[u + " " + r[0]]) {
                                f = u;
                                break
                            }
                            o || (o = u)
                        }
                        f = f || o
                    }
                    if (f)
                        return f !== r[0] && r.unshift(f),
                        i[f]
                }(u, e, f)),
                p = function(n, t, i, r) {
                    var h, u, f, s, e, o = {}, c = n.dataTypes.slice();
                    if (c[1])
                        for (f in n.converters)
                            o[f.toLowerCase()] = n.converters[f];
                    for (u = c.shift(); u; )
                        if (n.responseFields[u] && (i[n.responseFields[u]] = t),
                        !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)),
                        e = u,
                        u = c.shift())
                            if ("*" === u)
                                u = e;
                            else if ("*" !== e && e !== u) {
                                if (!(f = o[e + " " + u] || o["* " + u]))
                                    for (h in o)
                                        if ((s = h.split(" "))[1] === u && (f = o[e + " " + s[0]] || o["* " + s[0]])) {
                                            !0 === f ? f = o[h] : !0 !== o[h] && (u = s[0],
                                            c.unshift(s[1]));
                                            break
                                        }
                                if (!0 !== f)
                                    if (f && n.throws)
                                        t = f(t);
                                    else
                                        try {
                                            t = f(t)
                                        } catch (n) {
                                            return {
                                                state: "parsererror",
                                                error: f ? n : "No conversion from " + e + " to " + u
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(u, p, e, v),
                v ? (u.ifModified && ((g = e.getResponseHeader("Last-Modified")) && (i.lastModified[o] = g),
                (g = e.getResponseHeader("etag")) && (i.etag[o] = g)),
                204 === t || "HEAD" === u.type ? l = "nocontent" : 304 === t ? l = "notmodified" : (l = p.state,
                rt = p.data,
                v = !(b = p.error))) : (b = l,
                !t && l || (l = "error",
                t < 0 && (t = 0))),
                e.status = t,
                e.statusText = (r || l) + "",
                v ? tt.resolveWith(h, [rt, l, e]) : tt.rejectWith(h, [e, l, b]),
                e.statusCode(w),
                w = void 0,
                y && nt.trigger(v ? "ajaxSuccess" : "ajaxError", [e, u, v ? rt : b]),
                it.fireWith(h, [e, l]),
                y && (nt.trigger("ajaxComplete", [e, u]),
                --i.active || i.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (r = t,
            t = void 0);
            r = r || {};
            var a, o, k, v, d, c, s, y, g, p, u = i.ajaxSetup({}, r), h = u.context || u, nt = u.context && (h.nodeType || h.jquery) ? i(h) : i.event, tt = i.Deferred(), it = i.Callbacks("once memory"), w = u.statusCode || {}, rt = {}, ut = {}, ft = "canceled", e = {
                readyState: 0,
                getResponseHeader: function(n) {
                    var t;
                    if (s) {
                        if (!v)
                            for (v = {}; t = lo.exec(k); )
                                v[t[1].toLowerCase() + " "] = (v[t[1].toLowerCase() + " "] || []).concat(t[2]);
                        t = v[n.toLowerCase() + " "]
                    }
                    return null == t ? null : t.join(", ")
                },
                getAllResponseHeaders: function() {
                    return s ? k : null
                },
                setRequestHeader: function(n, t) {
                    return null == s && (n = ut[n.toLowerCase()] = ut[n.toLowerCase()] || n,
                    rt[n] = t),
                    this
                },
                overrideMimeType: function(n) {
                    return null == s && (u.mimeType = n),
                    this
                },
                statusCode: function(n) {
                    var t;
                    if (n)
                        if (s)
                            e.always(n[e.status]);
                        else
                            for (t in n)
                                w[t] = [w[t], n[t]];
                    return this
                },
                abort: function(n) {
                    var t = n || ft;
                    return a && a.abort(t),
                    b(0, t),
                    this
                }
            };
            if (tt.promise(e),
            u.url = ((t || u.url || ti.href) + "").replace(vo, ti.protocol + "//"),
            u.type = r.method || r.type || u.method || u.type,
            u.dataTypes = (u.dataType || "*").toLowerCase().match(l) || [""],
            null == u.crossDomain) {
                c = f.createElement("a");
                try {
                    c.href = u.url;
                    c.href = c.href;
                    u.crossDomain = lr.protocol + "//" + lr.host != c.protocol + "//" + c.host
                } catch (t) {
                    u.crossDomain = !0
                }
            }
            if (u.data && u.processData && "string" != typeof u.data && (u.data = i.param(u.data, u.traditional)),
            gf(bf, u, r, e),
            s)
                return e;
            for (g in (y = i.event && u.global) && 0 == i.active++ && i.event.trigger("ajaxStart"),
            u.type = u.type.toUpperCase(),
            u.hasContent = !ao.test(u.type),
            o = u.url.replace(ho, ""),
            u.hasContent ? u.data && u.processData && 0 === (u.contentType || "").indexOf("application/x-www-form-urlencoded") && (u.data = u.data.replace(so, "+")) : (p = u.url.slice(o.length),
            u.data && (u.processData || "string" == typeof u.data) && (o += (sr.test(o) ? "&" : "?") + u.data,
            delete u.data),
            !1 === u.cache && (o = o.replace(co, "$1"),
            p = (sr.test(o) ? "&" : "?") + "_=" + pf++ + p),
            u.url = o + p),
            u.ifModified && (i.lastModified[o] && e.setRequestHeader("If-Modified-Since", i.lastModified[o]),
            i.etag[o] && e.setRequestHeader("If-None-Match", i.etag[o])),
            (u.data && u.hasContent && !1 !== u.contentType || r.contentType) && e.setRequestHeader("Content-Type", u.contentType),
            e.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + kf + "; q=0.01" : "") : u.accepts["*"]),
            u.headers)
                e.setRequestHeader(g, u.headers[g]);
            if (u.beforeSend && (!1 === u.beforeSend.call(h, e, u) || s))
                return e.abort();
            if (ft = "abort",
            it.add(u.complete),
            e.done(u.success),
            e.fail(u.error),
            a = gf(cr, u, r, e)) {
                if (e.readyState = 1,
                y && nt.trigger("ajaxSend", [e, u]),
                s)
                    return e;
                u.async && 0 < u.timeout && (d = n.setTimeout(function() {
                    e.abort("timeout")
                }, u.timeout));
                try {
                    s = !1;
                    a.send(rt, b)
                } catch (t) {
                    if (s)
                        throw t;
                    b(-1, t)
                }
            } else
                b(-1, "No Transport");
            return e
        },
        getJSON: function(n, t, r) {
            return i.get(n, t, r, "json")
        },
        getScript: function(n, t) {
            return i.get(n, void 0, t, "script")
        }
    }),
    i.each(["get", "post"], function(n, t) {
        i[t] = function(n, r, f, e) {
            return u(r) && (e = e || f,
            f = r,
            r = void 0),
            i.ajax(i.extend({
                url: n,
                type: t,
                dataType: e,
                data: r,
                success: f
            }, i.isPlainObject(n) && n))
        }
    }),
    i._evalUrl = function(n, t) {
        return i.ajax({
            url: n,
            type: "GET",
            dataType: "script",
            cache: !0,
            "async": !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(n) {
                i.globalEval(n, t)
            }
        })
    }
    ,
    i.fn.extend({
        wrapAll: function(n) {
            var t;
            return this[0] && (u(n) && (n = n.call(this[0])),
            t = i(n, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                for (var n = this; n.firstElementChild; )
                    n = n.firstElementChild;
                return n
            }).append(this)),
            this
        },
        wrapInner: function(n) {
            return u(n) ? this.each(function(t) {
                i(this).wrapInner(n.call(this, t))
            }) : this.each(function() {
                var t = i(this)
                  , r = t.contents();
                r.length ? r.wrapAll(n) : t.append(n)
            })
        },
        wrap: function(n) {
            var t = u(n);
            return this.each(function(r) {
                i(this).wrapAll(t ? n.call(this, r) : n)
            })
        },
        unwrap: function(n) {
            return this.parent(n).not("body").each(function() {
                i(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    i.expr.pseudos.hidden = function(n) {
        return !i.expr.pseudos.visible(n)
    }
    ,
    i.expr.pseudos.visible = function(n) {
        return !!(n.offsetWidth || n.offsetHeight || n.getClientRects().length)
    }
    ,
    i.ajaxSettings.xhr = function() {
        try {
            return new n.XMLHttpRequest
        } catch (t) {}
    }
    ,
    ne = {
        0: 200,
        1223: 204
    },
    vt = i.ajaxSettings.xhr(),
    e.cors = !!vt && "withCredentials"in vt,
    e.ajax = vt = !!vt,
    i.ajaxTransport(function(t) {
        var i, r;
        if (e.cors || vt && !t.crossDomain)
            return {
                send: function(u, f) {
                    var o, e = t.xhr();
                    if (e.open(t.type, t.url, t.async, t.username, t.password),
                    t.xhrFields)
                        for (o in t.xhrFields)
                            e[o] = t.xhrFields[o];
                    for (o in t.mimeType && e.overrideMimeType && e.overrideMimeType(t.mimeType),
                    t.crossDomain || u["X-Requested-With"] || (u["X-Requested-With"] = "XMLHttpRequest"),
                    u)
                        e.setRequestHeader(o, u[o]);
                    i = function(n) {
                        return function() {
                            i && (i = r = e.onload = e.onerror = e.onabort = e.ontimeout = e.onreadystatechange = null,
                            "abort" === n ? e.abort() : "error" === n ? "number" != typeof e.status ? f(0, "error") : f(e.status, e.statusText) : f(ne[e.status] || e.status, e.statusText, "text" !== (e.responseType || "text") || "string" != typeof e.responseText ? {
                                binary: e.response
                            } : {
                                text: e.responseText
                            }, e.getAllResponseHeaders()))
                        }
                    }
                    ;
                    e.onload = i();
                    r = e.onerror = e.ontimeout = i("error");
                    void 0 !== e.onabort ? e.onabort = r : e.onreadystatechange = function() {
                        4 === e.readyState && n.setTimeout(function() {
                            i && r()
                        })
                    }
                    ;
                    i = i("abort");
                    try {
                        e.send(t.hasContent && t.data || null)
                    } catch (u) {
                        if (i)
                            throw u;
                    }
                },
                abort: function() {
                    i && i()
                }
            }
    }),
    i.ajaxPrefilter(function(n) {
        n.crossDomain && (n.contents.script = !1)
    }),
    i.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(n) {
                return i.globalEval(n),
                n
            }
        }
    }),
    i.ajaxPrefilter("script", function(n) {
        void 0 === n.cache && (n.cache = !1);
        n.crossDomain && (n.type = "GET")
    }),
    i.ajaxTransport("script", function(n) {
        var r, t;
        if (n.crossDomain || n.scriptAttrs)
            return {
                send: function(u, e) {
                    r = i("<script>").attr(n.scriptAttrs || {}).prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", t = function(n) {
                        r.remove();
                        t = null;
                        n && e("error" === n.type ? 404 : 200, n.type)
                    }
                    );
                    f.head.appendChild(r[0])
                },
                abort: function() {
                    t && t()
                }
            }
    }),
    vr = [],
    vi = /(=)\?(?=&|$)|\?\?/,
    i.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var n = vr.pop() || i.expando + "_" + pf++;
            return this[n] = !0,
            n
        }
    }),
    i.ajaxPrefilter("json jsonp", function(t, r, f) {
        var e, o, s, h = !1 !== t.jsonp && (vi.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && vi.test(t.data) && "data");
        if (h || "jsonp" === t.dataTypes[0])
            return e = t.jsonpCallback = u(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
            h ? t[h] = t[h].replace(vi, "$1" + e) : !1 !== t.jsonp && (t.url += (sr.test(t.url) ? "&" : "?") + t.jsonp + "=" + e),
            t.converters["script json"] = function() {
                return s || i.error(e + " was not called"),
                s[0]
            }
            ,
            t.dataTypes[0] = "json",
            o = n[e],
            n[e] = function() {
                s = arguments
            }
            ,
            f.always(function() {
                void 0 === o ? i(n).removeProp(e) : n[e] = o;
                t[e] && (t.jsonpCallback = r.jsonpCallback,
                vr.push(e));
                s && u(o) && o(s[0]);
                s = o = void 0
            }),
            "script"
    }),
    e.createHTMLDocument = ((te = f.implementation.createHTMLDocument("").body).innerHTML = "<form><\/form><form><\/form>",
    2 === te.childNodes.length),
    i.parseHTML = function(n, t, r) {
        return "string" != typeof n ? [] : ("boolean" == typeof t && (r = t,
        t = !1),
        t || (e.createHTMLDocument ? ((s = (t = f.implementation.createHTMLDocument("")).createElement("base")).href = f.location.href,
        t.head.appendChild(s)) : t = f),
        u = !r && [],
        (o = wi.exec(n)) ? [t.createElement(o[1])] : (o = vu([n], t, u),
        u && u.length && i(u).remove(),
        i.merge([], o.childNodes)));
        var s, o, u
    }
    ,
    i.fn.load = function(n, t, r) {
        var f, s, h, e = this, o = n.indexOf(" ");
        return -1 < o && (f = g(n.slice(o)),
        n = n.slice(0, o)),
        u(t) ? (r = t,
        t = void 0) : t && "object" == typeof t && (s = "POST"),
        0 < e.length && i.ajax({
            url: n,
            type: s || "GET",
            dataType: "html",
            data: t
        }).done(function(n) {
            h = arguments;
            e.html(f ? i("<div>").append(i.parseHTML(n)).find(f) : n)
        }).always(r && function(n, t) {
            e.each(function() {
                r.apply(this, h || [n.responseText, t, n])
            })
        }
        ),
        this
    }
    ,
    i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(n, t) {
        i.fn[t] = function(n) {
            return this.on(t, n)
        }
    }),
    i.expr.pseudos.animated = function(n) {
        return i.grep(i.timers, function(t) {
            return n === t.elem
        }).length
    }
    ,
    i.offset = {
        setOffset: function(n, t, r) {
            var v, o, s, h, f, c, l = i.css(n, "position"), a = i(n), e = {};
            "static" === l && (n.style.position = "relative");
            f = a.offset();
            s = i.css(n, "top");
            c = i.css(n, "left");
            ("absolute" === l || "fixed" === l) && -1 < (s + c).indexOf("auto") ? (h = (v = a.position()).top,
            o = v.left) : (h = parseFloat(s) || 0,
            o = parseFloat(c) || 0);
            u(t) && (t = t.call(n, r, i.extend({}, f)));
            null != t.top && (e.top = t.top - f.top + h);
            null != t.left && (e.left = t.left - f.left + o);
            "using"in t ? t.using.call(n, e) : a.css(e)
        }
    },
    i.fn.extend({
        offset: function(n) {
            if (arguments.length)
                return void 0 === n ? this : this.each(function(t) {
                    i.offset.setOffset(this, n, t)
                });
            var r, u, t = this[0];
            if (t)
                return t.getClientRects().length ? (r = t.getBoundingClientRect(),
                u = t.ownerDocument.defaultView,
                {
                    top: r.top + u.pageYOffset,
                    left: r.left + u.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                }
        },
        position: function() {
            if (this[0]) {
                var n, r, u, t = this[0], f = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === i.css(t, "position"))
                    r = t.getBoundingClientRect();
                else {
                    for (r = this.offset(),
                    u = t.ownerDocument,
                    n = t.offsetParent || u.documentElement; n && (n === u.body || n === u.documentElement) && "static" === i.css(n, "position"); )
                        n = n.parentNode;
                    n && n !== t && 1 === n.nodeType && ((f = i(n).offset()).top += i.css(n, "borderTopWidth", !0),
                    f.left += i.css(n, "borderLeftWidth", !0))
                }
                return {
                    top: r.top - f.top - i.css(t, "marginTop", !0),
                    left: r.left - f.left - i.css(t, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var n = this.offsetParent; n && "static" === i.css(n, "position"); )
                    n = n.offsetParent;
                return n || bt
            })
        }
    }),
    i.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(n, t) {
        var r = "pageYOffset" === t;
        i.fn[n] = function(i) {
            return p(this, function(n, i, u) {
                var f;
                if (tt(n) ? f = n : 9 === n.nodeType && (f = n.defaultView),
                void 0 === u)
                    return f ? f[t] : n[i];
                f ? f.scrollTo(r ? f.pageXOffset : u, r ? u : f.pageYOffset) : n[i] = u
            }, n, i, arguments.length)
        }
    }),
    i.each(["top", "left"], function(n, t) {
        i.cssHooks[t] = ku(e.pixelPosition, function(n, r) {
            if (r)
                return r = ni(n, t),
                tr.test(r) ? i(n).position()[t] + "px" : r
        })
    }),
    i.each({
        Height: "height",
        Width: "width"
    }, function(n, t) {
        i.each({
            padding: "inner" + n,
            content: t,
            "": "outer" + n
        }, function(r, u) {
            i.fn[u] = function(f, e) {
                var o = arguments.length && (r || "boolean" != typeof f)
                  , s = r || (!0 === f || !0 === e ? "margin" : "border");
                return p(this, function(t, r, f) {
                    var e;
                    return tt(t) ? 0 === u.indexOf("outer") ? t["inner" + n] : t.document.documentElement["client" + n] : 9 === t.nodeType ? (e = t.documentElement,
                    Math.max(t.body["scroll" + n], e["scroll" + n], t.body["offset" + n], e["offset" + n], e["client" + n])) : void 0 === f ? i.css(t, r, s) : i.style(t, r, f, s)
                }, t, o ? f : void 0, o)
            }
        })
    }),
    i.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(n, t) {
        i.fn[t] = function(n, i) {
            return 0 < arguments.length ? this.on(t, null, n, i) : this.trigger(t)
        }
    }),
    i.fn.extend({
        hover: function(n, t) {
            return this.mouseenter(n).mouseleave(t || n)
        }
    }),
    i.fn.extend({
        bind: function(n, t, i) {
            return this.on(n, null, t, i)
        },
        unbind: function(n, t) {
            return this.off(n, null, t)
        },
        delegate: function(n, t, i, r) {
            return this.on(t, n, i, r)
        },
        undelegate: function(n, t, i) {
            return 1 === arguments.length ? this.off(n, "**") : this.off(t, n || "**", i)
        }
    }),
    i.proxy = function(n, t) {
        var r, f, e;
        if ("string" == typeof t && (r = n[t],
        t = n,
        n = r),
        u(n))
            return f = b.call(arguments, 2),
            (e = function() {
                return n.apply(t || this, f.concat(b.call(arguments)))
            }
            ).guid = n.guid = n.guid || i.guid++,
            e
    }
    ,
    i.holdReady = function(n) {
        n ? i.readyWait++ : i.ready(!0)
    }
    ,
    i.isArray = Array.isArray,
    i.parseJSON = JSON.parse,
    i.nodeName = c,
    i.isFunction = u,
    i.isWindow = tt,
    i.camelCase = y,
    i.type = it,
    i.now = Date.now,
    i.isNumeric = function(n) {
        var t = i.type(n);
        return ("number" === t || "string" === t) && !isNaN(n - parseFloat(n))
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return i
    }),
    ie = n.jQuery,
    re = n.$,
    i.noConflict = function(t) {
        return n.$ === i && (n.$ = re),
        t && n.jQuery === i && (n.jQuery = ie),
        i
    }
    ,
    t || (n.jQuery = n.$ = i),
    i
}),
function(n) {
    "use strict";
    function e(n) {
        n = n || "";
        (n instanceof URLSearchParams || n instanceof e) && (n = n.toString());
        this[r] = h(n)
    }
    function p(n) {
        var t = {
            "!": "%21",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "~": "%7E",
            "%20": "+",
            "%00": "\x00"
        };
        return encodeURIComponent(n).replace(/[!'\(\)~]|%20|%00/g, function(n) {
            return t[n]
        })
    }
    function o(n) {
        return n.replace(/[ +]/g, "%20").replace(/(%[a-f0-9]{2})+/ig, function(n) {
            return decodeURIComponent(n)
        })
    }
    function s(t) {
        var i = {
            next: function() {
                var n = t.shift();
                return {
                    done: n === undefined,
                    value: n
                }
            }
        };
        return a && (i[n.Symbol.iterator] = function() {
            return i
        }
        ),
        i
    }
    function h(n) {
        var i = {}, u, r, e, c, s, t, h;
        if (typeof n == "object")
            if (w(n))
                for (u = 0; u < n.length; u++)
                    if (r = n[u],
                    w(r) && r.length === 2)
                        f(i, r[0], r[1]);
                    else
                        throw new TypeError("Failed to construct 'URLSearchParams': Sequence initializer must only contain pair elements");
            else
                for (e in n)
                    n.hasOwnProperty(e) && f(i, e, n[e]);
        else
            for (n.indexOf("?") === 0 && (n = n.slice(1)),
            c = n.split("&"),
            s = 0; s < c.length; s++)
                t = c[s],
                h = t.indexOf("="),
                -1 < h ? f(i, o(t.slice(0, h)), o(t.slice(h + 1))) : t && f(i, o(t), "");
        return i
    }
    function f(n, t, i) {
        var r = typeof i == "string" ? i : i !== null && i !== undefined && typeof i.toString == "function" ? i.toString() : JSON.stringify(i);
        b(n, t) ? n[t].push(r) : n[t] = [r]
    }
    function w(n) {
        return !!n && "[object Array]" === Object.prototype.toString.call(n)
    }
    function b(n, t) {
        return Object.prototype.hasOwnProperty.call(n, t)
    }
    var i = function() {
        try {
            if (n.URLSearchParams && new n.URLSearchParams("foo=bar").get("foo") === "bar")
                return n.URLSearchParams
        } catch (t) {}
        return null
    }(), c = i && new i({
        a: 1
    }).toString() === "a=1", l = i && new i("s=%2B").get("s") === "+", r = "__URLSearchParams__", k = i ? function() {
        var n = new i;
        return n.append("s", " &"),
        n.toString() === "s=+%26"
    }() : !0, u = e.prototype, a = !!(n.Symbol && n.Symbol.iterator), v, y, t;
    i && c && l && k || (u.append = function(n, t) {
        f(this[r], n, t)
    }
    ,
    u["delete"] = function(n) {
        delete this[r][n]
    }
    ,
    u.get = function(n) {
        var t = this[r];
        return this.has(n) ? t[n][0] : null
    }
    ,
    u.getAll = function(n) {
        var t = this[r];
        return this.has(n) ? t[n].slice(0) : []
    }
    ,
    u.has = function(n) {
        return b(this[r], n)
    }
    ,
    u.set = function(n, t) {
        this[r][n] = ["" + t]
    }
    ,
    u.toString = function() {
        var u = this[r], f = [], n, t, e, i;
        for (t in u)
            for (e = p(t),
            n = 0,
            i = u[t]; n < i.length; n++)
                f.push(e + "=" + p(i[n]));
        return f.join("&")
    }
    ,
    v = !l,
    y = !v && i && !c && n.Proxy,
    Object.defineProperty(n, "URLSearchParams", {
        value: y ? new Proxy(i,{
            construct: function(n, t) {
                return new n(new e(t[0]).toString())
            }
        }) : e
    }),
    t = n.URLSearchParams.prototype,
    t.polyfill = !0,
    t.forEach = t.forEach || function(n, t) {
        var i = h(this.toString());
        Object.getOwnPropertyNames(i).forEach(function(r) {
            i[r].forEach(function(i) {
                n.call(t, i, r, this)
            }, this)
        }, this)
    }
    ,
    t.sort = t.sort || function() {
        var f = h(this.toString()), t = [], e, n, i, r, u;
        for (e in f)
            t.push(e);
        for (t.sort(),
        n = 0; n < t.length; n++)
            this["delete"](t[n]);
        for (n = 0; n < t.length; n++)
            for (r = t[n],
            u = f[r],
            i = 0; i < u.length; i++)
                this.append(r, u[i])
    }
    ,
    t.keys = t.keys || function() {
        var n = [];
        return this.forEach(function(t, i) {
            n.push(i)
        }),
        s(n)
    }
    ,
    t.values = t.values || function() {
        var n = [];
        return this.forEach(function(t) {
            n.push(t)
        }),
        s(n)
    }
    ,
    t.entries = t.entries || function() {
        var n = [];
        return this.forEach(function(t, i) {
            n.push([i, t])
        }),
        s(n)
    }
    ,
    a && (t[n.Symbol.iterator] = t[n.Symbol.iterator] || t.entries))
}(typeof global != "undefined" ? global : typeof window != "undefined" ? window : this),
function(n, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : n.Popper = t()
}(this, function() {
    "use strict";
    function ut(n) {
        return n && "[object Function]" === {}.toString.call(n)
    }
    function r(n, t) {
        if (1 !== n.nodeType)
            return [];
        var r = n.ownerDocument.defaultView
          , i = r.getComputedStyle(n, null);
        return t ? i[t] : i
    }
    function y(n) {
        return "HTML" === n.nodeName ? n : n.parentNode || n.host
    }
    function s(n) {
        if (!n)
            return document.body;
        switch (n.nodeName) {
        case "HTML":
        case "BODY":
            return n.ownerDocument.body;
        case "#document":
            return n.body
        }
        var t = r(n)
          , i = t.overflow
          , u = t.overflowX
          , f = t.overflowY;
        return /(auto|scroll|overlay)/.test(i + f + u) ? n : s(y(n))
    }
    function ft(n) {
        return n && n.referenceNode ? n.referenceNode : n
    }
    function u(n) {
        return 11 === n ? ii : 10 === n ? ri : ii || ri
    }
    function f(n) {
        var e, t, i;
        if (!n)
            return document.documentElement;
        for (e = u(10) ? document.body : null,
        t = n.offsetParent || null; t === e && n.nextElementSibling; )
            t = (n = n.nextElementSibling).offsetParent;
        return i = t && t.nodeName,
        i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(t.nodeName) && "static" === r(t, "position") ? f(t) : t : n ? n.ownerDocument.documentElement : document.documentElement
    }
    function fi(n) {
        var t = n.nodeName;
        return "BODY" !== t && ("HTML" === t || f(n.firstElementChild) === n)
    }
    function p(n) {
        return null === n.parentNode ? n : p(n.parentNode)
    }
    function l(n, t) {
        var i, u;
        if (!n || !n.nodeType || !t || !t.nodeType)
            return document.documentElement;
        var e = n.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING
          , o = e ? n : t
          , s = e ? t : n
          , r = document.createRange();
        return (r.setStart(o, 0),
        r.setEnd(s, 0),
        i = r.commonAncestorContainer,
        n !== i && t !== i || o.contains(s)) ? fi(i) ? i : f(i) : (u = p(n),
        u.host ? l(u.host, t) : l(n, p(t).host))
    }
    function e(n) {
        var f = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top", t = "top" === f ? "scrollTop" : "scrollLeft", i = n.nodeName, r, u;
        return "BODY" === i || "HTML" === i ? (r = n.ownerDocument.documentElement,
        u = n.ownerDocument.scrollingElement || r,
        u[t]) : n[t]
    }
    function ei(n, t) {
        var f = 2 < arguments.length && void 0 !== arguments[2] && arguments[2]
          , r = e(t, "top")
          , u = e(t, "left")
          , i = f ? -1 : 1;
        return n.top += r * i,
        n.bottom += r * i,
        n.left += u * i,
        n.right += u * i,
        n
    }
    function et(n, t) {
        var i = "x" === t ? "Left" : "Top"
          , r = "Left" == i ? "Right" : "Bottom";
        return parseFloat(n["border" + i + "Width"], 10) + parseFloat(n["border" + r + "Width"], 10)
    }
    function ot(n, i, r, f) {
        return t(i["offset" + n], i["scroll" + n], r["client" + n], r["offset" + n], r["scroll" + n], u(10) ? parseInt(r["offset" + n]) + parseInt(f["margin" + ("Height" === n ? "Top" : "Left")]) + parseInt(f["margin" + ("Height" === n ? "Bottom" : "Right")]) : 0)
    }
    function st(n) {
        var i = n.body
          , t = n.documentElement
          , r = u(10) && getComputedStyle(t);
        return {
            height: ot("Height", i, t, r),
            width: ot("Width", i, t, r)
        }
    }
    function i(t) {
        return n({}, t, {
            right: t.left + t.width,
            bottom: t.top + t.height
        })
    }
    function w(n) {
        var t = {}, o, s, l;
        try {
            u(10) ? (t = n.getBoundingClientRect(),
            o = e(n, "top"),
            s = e(n, "left"),
            t.top += o,
            t.left += s,
            t.bottom += o,
            t.right += s) : t = n.getBoundingClientRect()
        } catch (r) {}
        var f = {
            left: t.left,
            top: t.top,
            width: t.right - t.left,
            height: t.bottom - t.top
        }
          , a = "HTML" === n.nodeName ? st(n.ownerDocument) : {}
          , v = a.width || n.clientWidth || f.width
          , y = a.height || n.clientHeight || f.height
          , h = n.offsetWidth - v
          , c = n.offsetHeight - y;
        return (h || c) && (l = r(n),
        h -= et(l, "x"),
        c -= et(l, "y"),
        f.width -= h,
        f.height -= c),
        i(f)
    }
    function b(n, f) {
        var b = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], k = u(10), d = "HTML" === f.nodeName, h = w(n), o = w(f), v = s(n), c = r(f), y = parseFloat(c.borderTopWidth, 10), p = parseFloat(c.borderLeftWidth, 10), e, l, a;
        return b && d && (o.top = t(o.top, 0),
        o.left = t(o.left, 0)),
        e = i({
            top: h.top - o.top - y,
            left: h.left - o.left - p,
            width: h.width,
            height: h.height
        }),
        (e.marginTop = 0,
        e.marginLeft = 0,
        !k && d) && (l = parseFloat(c.marginTop, 10),
        a = parseFloat(c.marginLeft, 10),
        e.top -= y - l,
        e.bottom -= y - l,
        e.left -= p - a,
        e.right -= p - a,
        e.marginTop = l,
        e.marginLeft = a),
        (k && !b ? f.contains(v) : f === v && "BODY" !== v.nodeName) && (e = ei(e, f)),
        e
    }
    function oi(n) {
        var f = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
          , r = n.ownerDocument.documentElement
          , u = b(n, r)
          , o = t(r.clientWidth, window.innerWidth || 0)
          , s = t(r.clientHeight, window.innerHeight || 0)
          , h = f ? 0 : e(r)
          , c = f ? 0 : e(r, "left")
          , l = {
            top: h - u.top + u.marginTop,
            left: c - u.left + u.marginLeft,
            width: o,
            height: s
        };
        return i(l)
    }
    function ht(n) {
        var i = n.nodeName, t;
        return "BODY" === i || "HTML" === i ? !1 : "fixed" === r(n, "position") ? !0 : (t = y(n),
        !!t && ht(t))
    }
    function ct(n) {
        if (!n || !n.parentElement || u())
            return document.documentElement;
        for (var t = n.parentElement; t && "none" === r(t, "transform"); )
            t = t.parentElement;
        return t || document.documentElement
    }
    function k(n, t, i, r) {
        var h = 4 < arguments.length && void 0 !== arguments[4] && arguments[4], u = {
            top: 0,
            left: 0
        }, c = h ? ct(n) : l(n, ft(t)), e, f, o;
        if ("viewport" === r)
            u = oi(c, h);
        else if ("scrollParent" === r ? (e = s(y(t)),
        "BODY" === e.nodeName && (e = n.ownerDocument.documentElement)) : e = "window" === r ? n.ownerDocument.documentElement : r,
        f = b(e, c, h),
        "HTML" !== e.nodeName || ht(c))
            u = f;
        else {
            var a = st(n.ownerDocument)
              , v = a.height
              , p = a.width;
            u.top += f.top - f.marginTop;
            u.bottom = v + f.top;
            u.left += f.left - f.marginLeft;
            u.right = p + f.left
        }
        return i = i || 0,
        o = "number" == typeof i,
        u.left += o ? i : i.left || 0,
        u.top += o ? i : i.top || 0,
        u.right -= o ? i : i.right || 0,
        u.bottom -= o ? i : i.bottom || 0,
        u
    }
    function si(n) {
        var t = n.width
          , i = n.height;
        return t * i
    }
    function lt(t, i, r, u, f) {
        var l = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === t.indexOf("auto"))
            return t;
        var e = k(r, u, l, f)
          , o = {
            top: {
                width: e.width,
                height: i.top - e.top
            },
            right: {
                width: e.right - i.right,
                height: e.height
            },
            bottom: {
                width: e.width,
                height: e.bottom - i.bottom
            },
            left: {
                width: i.left - e.left,
                height: e.height
            }
        }
          , s = Object.keys(o).map(function(t) {
            return n({
                key: t
            }, o[t], {
                area: si(o[t])
            })
        }).sort(function(n, t) {
            return t.area - n.area
        })
          , h = s.filter(function(n) {
            var t = n.width
              , i = n.height;
            return t >= r.clientWidth && i >= r.clientHeight
        })
          , a = 0 < h.length ? h[0].key : s[0].key
          , c = t.split("-")[1];
        return a + (c ? "-" + c : "")
    }
    function at(n, t, i) {
        var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null
          , u = r ? ct(t) : l(t, ft(i));
        return b(i, u, r)
    }
    function vt(n) {
        var i = n.ownerDocument.defaultView
          , t = i.getComputedStyle(n)
          , r = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0)
          , u = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
        return {
            width: n.offsetWidth + u,
            height: n.offsetHeight + r
        }
    }
    function a(n) {
        var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return n.replace(/left|right|bottom|top/g, function(n) {
            return t[n]
        })
    }
    function yt(n, t, i) {
        i = i.split("-")[0];
        var r = vt(n)
          , e = {
            width: r.width,
            height: r.height
        }
          , u = -1 !== ["right", "left"].indexOf(i)
          , o = u ? "top" : "left"
          , f = u ? "left" : "top"
          , s = u ? "height" : "width"
          , h = u ? "width" : "height";
        return e[o] = t[o] + t[s] / 2 - r[s] / 2,
        e[f] = i === f ? t[f] - r[h] : t[a(f)],
        e
    }
    function h(n, t) {
        return Array.prototype.find ? n.find(t) : n.filter(t)[0]
    }
    function hi(n, t, i) {
        if (Array.prototype.findIndex)
            return n.findIndex(function(n) {
                return n[t] === i
            });
        var r = h(n, function(n) {
            return n[t] === i
        });
        return n.indexOf(r)
    }
    function pt(n, t, r) {
        var u = void 0 === r ? n : n.slice(0, hi(n, "name", r));
        return u.forEach(function(n) {
            n["function"] && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var r = n["function"] || n.fn;
            n.enabled && ut(r) && (t.offsets.popper = i(t.offsets.popper),
            t.offsets.reference = i(t.offsets.reference),
            t = r(t, n))
        }),
        t
    }
    function ci() {
        if (!this.state.isDestroyed) {
            var n = {
                instance: this,
                styles: {},
                arrowStyles: {},
                attributes: {},
                flipped: !1,
                offsets: {}
            };
            n.offsets.reference = at(this.state, this.popper, this.reference, this.options.positionFixed);
            n.placement = lt(this.options.placement, n.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);
            n.originalPlacement = n.placement;
            n.positionFixed = this.options.positionFixed;
            n.offsets.popper = yt(this.popper, n.offsets.reference, n.placement);
            n.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute";
            n = pt(this.modifiers, n);
            this.state.isCreated ? this.options.onUpdate(n) : (this.state.isCreated = !0,
            this.options.onCreate(n))
        }
    }
    function wt(n, t) {
        return n.some(function(n) {
            var i = n.name
              , r = n.enabled;
            return r && i === t
        })
    }
    function d(n) {
        for (var i, r, u = [!1, "ms", "Webkit", "Moz", "O"], f = n.charAt(0).toUpperCase() + n.slice(1), t = 0; t < u.length; t++)
            if (i = u[t],
            r = i ? "" + i + f : n,
            "undefined" != typeof document.body.style[r])
                return r;
        return null
    }
    function li() {
        return this.state.isDestroyed = !0,
        wt(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"),
        this.popper.style.position = "",
        this.popper.style.top = "",
        this.popper.style.left = "",
        this.popper.style.right = "",
        this.popper.style.bottom = "",
        this.popper.style.willChange = "",
        this.popper.style[d("transform")] = ""),
        this.disableEventListeners(),
        this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
        this
    }
    function bt(n) {
        var t = n.ownerDocument;
        return t ? t.defaultView : window
    }
    function kt(n, t, i, r) {
        var f = "BODY" === n.nodeName
          , u = f ? n.ownerDocument.defaultView : n;
        u.addEventListener(t, i, {
            passive: !0
        });
        f || kt(s(u.parentNode), t, i, r);
        r.push(u)
    }
    function ai(n, t, i, r) {
        i.updateBound = r;
        bt(n).addEventListener("resize", i.updateBound, {
            passive: !0
        });
        var u = s(n);
        return kt(u, "scroll", i.updateBound, i.scrollParents),
        i.scrollElement = u,
        i.eventsEnabled = !0,
        i
    }
    function vi() {
        this.state.eventsEnabled || (this.state = ai(this.reference, this.options, this.state, this.scheduleUpdate))
    }
    function yi(n, t) {
        return bt(n).removeEventListener("resize", t.updateBound),
        t.scrollParents.forEach(function(n) {
            n.removeEventListener("scroll", t.updateBound)
        }),
        t.updateBound = null,
        t.scrollParents = [],
        t.scrollElement = null,
        t.eventsEnabled = !1,
        t
    }
    function pi() {
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate),
        this.state = yi(this.reference, this.state))
    }
    function g(n) {
        return "" !== n && !isNaN(parseFloat(n)) && isFinite(n)
    }
    function nt(n, t) {
        Object.keys(t).forEach(function(i) {
            var r = "";
            -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(i) && g(t[i]) && (r = "px");
            n.style[i] = t[i] + r
        })
    }
    function wi(n, t) {
        Object.keys(t).forEach(function(i) {
            var r = t[i];
            !1 === r ? n.removeAttribute(i) : n.setAttribute(i, t[i])
        })
    }
    function bi(n, t) {
        var u = n.offsets
          , i = u.popper
          , l = u.reference
          , r = ti
          , f = function(n) {
            return n
        }
          , e = r(l.width)
          , o = r(i.width)
          , a = -1 !== ["left", "right"].indexOf(n.placement)
          , s = -1 !== n.placement.indexOf("-")
          , h = t ? a || s || e % 2 == o % 2 ? r : tt : f
          , c = t ? r : f;
        return {
            left: h(1 == e % 2 && 1 == o % 2 && !s && t ? i.left - 1 : i.left),
            top: c(i.top),
            bottom: c(i.bottom),
            right: h(i.right)
        }
    }
    function dt(n, t, i) {
        var u = h(n, function(n) {
            var i = n.name;
            return i === t
        }), f = !!u && n.some(function(n) {
            return n.name === i && n.enabled && n.order < u.order
        }), r;
        return f || (r = "`" + t + "`",
        console.warn("`" + i + "` modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!")),
        f
    }
    function ki(n) {
        return "end" === n ? "start" : "start" === n ? "end" : n
    }
    function gt(n) {
        var r = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
          , t = it.indexOf(n)
          , i = it.slice(t + 1).concat(it.slice(0, t));
        return r ? i.reverse() : i
    }
    function di(n, r, u, f) {
        var h = n.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), o = +h[1], e = h[2], s, c, l;
        if (!o)
            return n;
        if (0 === e.indexOf("%")) {
            switch (e) {
            case "%p":
                s = u;
                break;
            case "%":
            case "%r":
            default:
                s = f
            }
            return c = i(s),
            c[r] / 100 * o
        }
        return "vh" === e || "vw" === e ? (l = "vh" === e ? t(document.documentElement.clientHeight, window.innerHeight || 0) : t(document.documentElement.clientWidth, window.innerWidth || 0),
        l / 100 * o) : o
    }
    function gi(n, t, i, r) {
        var s = [0, 0], c = -1 !== ["right", "left"].indexOf(r), u = n.split(/(\+|\-)/).map(function(n) {
            return n.trim()
        }), f = u.indexOf(h(u, function(n) {
            return -1 !== n.search(/,|\s/)
        })), o, e;
        return u[f] && -1 === u[f].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead."),
        o = /\s*,\s*|\s+/,
        e = -1 === f ? [u] : [u.slice(0, f).concat([u[f].split(o)[0]]), [u[f].split(o)[1]].concat(u.slice(f + 1))],
        e = e.map(function(n, r) {
            var f = (1 === r ? !c : c) ? "height" : "width"
              , u = !1;
            return n.reduce(function(n, t) {
                return "" === n[n.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (n[n.length - 1] = t,
                u = !0,
                n) : u ? (n[n.length - 1] += t,
                u = !1,
                n) : n.concat(t)
            }, []).map(function(n) {
                return di(n, f, t, i)
            })
        }),
        e.forEach(function(n, t) {
            n.forEach(function(i, r) {
                g(i) && (s[t] += i * ("-" === n[r - 1] ? -1 : 1))
            })
        }),
        s
    }
    function nr(n, t) {
        var r, f = t.offset, o = n.placement, e = n.offsets, i = e.popper, s = e.reference, u = o.split("-")[0];
        return r = g(+f) ? [+f, 0] : gi(f, i, s, u),
        "left" === u ? (i.top += r[0],
        i.left -= r[1]) : "right" === u ? (i.top += r[0],
        i.left += r[1]) : "top" === u ? (i.left += r[0],
        i.top -= r[1]) : "bottom" === u && (i.left += r[0],
        i.top += r[1]),
        n.popper = i,
        n
    }
    var ni = Math.min
      , tt = Math.floor
      , ti = Math.round
      , t = Math.max
      , c = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator
      , tr = function() {
        for (var t = ["Edge", "Trident", "Firefox"], n = 0; n < t.length; n += 1)
            if (c && 0 <= navigator.userAgent.indexOf(t[n]))
                return 1;
        return 0
    }()
      , ir = c && window.Promise
      , rr = ir ? function(n) {
        var t = !1;
        return function() {
            t || (t = !0,
            window.Promise.resolve().then(function() {
                t = !1;
                n()
            }))
        }
    }
    : function(n) {
        var t = !1;
        return function() {
            t || (t = !0,
            setTimeout(function() {
                t = !1;
                n()
            }, tr))
        }
    }
      , ii = c && !!(window.MSInputMethodContext && document.documentMode)
      , ri = c && /MSIE 10/.test(navigator.userAgent)
      , ur = function(n, t) {
        if (!(n instanceof t))
            throw new TypeError("Cannot call a class as a function");
    }
      , fr = function() {
        function n(n, t) {
            for (var i, r = 0; r < t.length; r++)
                i = t[r],
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(n, i.key, i)
        }
        return function(t, i, r) {
            return i && n(t.prototype, i),
            r && n(t, r),
            t
        }
    }()
      , o = function(n, t, i) {
        return t in n ? Object.defineProperty(n, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : n[t] = i,
        n
    }
      , n = Object.assign || function(n) {
        for (var t, r, i = 1; i < arguments.length; i++)
            for (r in t = arguments[i],
            t)
                Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
        return n
    }
      , er = c && /Firefox/i.test(navigator.userAgent)
      , ui = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"]
      , it = ui.slice(3)
      , rt = {
        FLIP: "flip",
        CLOCKWISE: "clockwise",
        COUNTERCLOCKWISE: "counterclockwise"
    }
      , v = function() {
        function t(i, r) {
            var u = this, f = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}, e;
            ur(this, t);
            this.scheduleUpdate = function() {
                return requestAnimationFrame(u.update)
            }
            ;
            this.update = rr(this.update.bind(this));
            this.options = n({}, t.Defaults, f);
            this.state = {
                isDestroyed: !1,
                isCreated: !1,
                scrollParents: []
            };
            this.reference = i && i.jquery ? i[0] : i;
            this.popper = r && r.jquery ? r[0] : r;
            this.options.modifiers = {};
            Object.keys(n({}, t.Defaults.modifiers, f.modifiers)).forEach(function(i) {
                u.options.modifiers[i] = n({}, t.Defaults.modifiers[i] || {}, f.modifiers ? f.modifiers[i] : {})
            });
            this.modifiers = Object.keys(this.options.modifiers).map(function(t) {
                return n({
                    name: t
                }, u.options.modifiers[t])
            }).sort(function(n, t) {
                return n.order - t.order
            });
            this.modifiers.forEach(function(n) {
                n.enabled && ut(n.onLoad) && n.onLoad(u.reference, u.popper, u.options, n, u.state)
            });
            this.update();
            e = this.options.eventsEnabled;
            e && this.enableEventListeners();
            this.state.eventsEnabled = e
        }
        return fr(t, [{
            key: "update",
            value: function() {
                return ci.call(this)
            }
        }, {
            key: "destroy",
            value: function() {
                return li.call(this)
            }
        }, {
            key: "enableEventListeners",
            value: function() {
                return vi.call(this)
            }
        }, {
            key: "disableEventListeners",
            value: function() {
                return pi.call(this)
            }
        }]),
        t
    }();
    return v.Utils = ("undefined" == typeof window ? global : window).PopperUtils,
    v.placements = ui,
    v.Defaults = {
        placement: "bottom",
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(t) {
                    var u = t.placement
                      , l = u.split("-")[0]
                      , f = u.split("-")[1];
                    if (f) {
                        var e = t.offsets
                          , r = e.reference
                          , s = e.popper
                          , h = -1 !== ["bottom", "top"].indexOf(l)
                          , i = h ? "left" : "top"
                          , c = h ? "width" : "height"
                          , a = {
                            start: o({}, i, r[i]),
                            end: o({}, i, r[i] + r[c] - s[c])
                        };
                        t.offsets.popper = n({}, s, a[f])
                    }
                    return t
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: nr,
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(i, r) {
                    var h = r.boundariesElement || f(i.instance.popper), s;
                    i.instance.reference === h && (h = f(h));
                    var c = d("transform")
                      , e = i.instance.popper.style
                      , l = e.top
                      , a = e.left
                      , v = e[c];
                    e.top = "";
                    e.left = "";
                    e[c] = "";
                    s = k(i.instance.popper, i.instance.reference, r.padding, h, i.positionFixed);
                    e.top = l;
                    e.left = a;
                    e[c] = v;
                    r.boundaries = s;
                    var y = r.priority
                      , u = i.offsets.popper
                      , p = {
                        primary: function(n) {
                            var i = u[n];
                            return u[n] < s[n] && !r.escapeWithReference && (i = t(u[n], s[n])),
                            o({}, n, i)
                        },
                        secondary: function(n) {
                            var t = "right" === n ? "left" : "top"
                              , i = u[t];
                            return u[n] > s[n] && !r.escapeWithReference && (i = ni(u[t], s[n] - ("right" === n ? u.width : u.height))),
                            o({}, t, i)
                        }
                    };
                    return y.forEach(function(t) {
                        var i = -1 === ["left", "top"].indexOf(t) ? "secondary" : "primary";
                        u = n({}, u, p[i](t))
                    }),
                    i.offsets.popper = u,
                    i
                },
                priority: ["left", "right", "top", "bottom"],
                padding: 5,
                boundariesElement: "scrollParent"
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(n) {
                    var o = n.offsets
                      , u = o.popper
                      , i = o.reference
                      , s = n.placement.split("-")[0]
                      , r = tt
                      , f = -1 !== ["top", "bottom"].indexOf(s)
                      , e = f ? "right" : "bottom"
                      , t = f ? "left" : "top"
                      , h = f ? "width" : "height";
                    return u[e] < r(i[t]) && (n.offsets.popper[t] = r(i[t]) - u[h]),
                    u[t] > r(i[e]) && (n.offsets.popper[t] = r(i[e])),
                    n
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(n, u) {
                    var l, e;
                    if (!dt(n.instance.modifiers, "arrow", "keepTogether"))
                        return n;
                    if (e = u.element,
                    "string" == typeof e) {
                        if (e = n.instance.popper.querySelector(e),
                        !e)
                            return n
                    } else if (!n.instance.popper.contains(e))
                        return console.warn("WARNING: `arrow.element` must be child of its popper element!"),
                        n;
                    var d = n.placement.split("-")[0]
                      , b = n.offsets
                      , c = b.popper
                      , s = b.reference
                      , a = -1 !== ["left", "right"].indexOf(d)
                      , y = a ? "height" : "width"
                      , p = a ? "Top" : "Left"
                      , f = p.toLowerCase()
                      , g = a ? "left" : "top"
                      , v = a ? "bottom" : "right"
                      , h = vt(e)[y];
                    s[v] - h < c[f] && (n.offsets.popper[f] -= c[f] - (s[v] - h));
                    s[f] + h > c[v] && (n.offsets.popper[f] += s[f] + h - c[v]);
                    n.offsets.popper = i(n.offsets.popper);
                    var nt = s[f] + s[y] / 2 - h / 2
                      , k = r(n.instance.popper)
                      , tt = parseFloat(k["margin" + p], 10)
                      , it = parseFloat(k["border" + p + "Width"], 10)
                      , w = nt - n.offsets.popper[f] - tt - it;
                    return w = t(ni(c[y] - h, w), 0),
                    n.arrowElement = e,
                    n.offsets.arrow = (l = {},
                    o(l, f, ti(w)),
                    o(l, g, ""),
                    l),
                    n
                },
                element: "[x-arrow]"
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(t, i) {
                    if (wt(t.instance.modifiers, "inner") || t.flipped && t.placement === t.originalPlacement)
                        return t;
                    var e = k(t.instance.popper, t.instance.reference, i.padding, i.boundariesElement, t.positionFixed)
                      , r = t.placement.split("-")[0]
                      , o = a(r)
                      , u = t.placement.split("-")[1] || ""
                      , f = [];
                    switch (i.behavior) {
                    case rt.FLIP:
                        f = [r, o];
                        break;
                    case rt.CLOCKWISE:
                        f = gt(r);
                        break;
                    case rt.COUNTERCLOCKWISE:
                        f = gt(r, !0);
                        break;
                    default:
                        f = i.behavior
                    }
                    return f.forEach(function(s, h) {
                        if (r !== s || f.length === h + 1)
                            return t;
                        r = t.placement.split("-")[0];
                        o = a(r);
                        var l = t.offsets.popper
                          , y = t.offsets.reference
                          , c = tt
                          , d = "left" === r && c(l.right) > c(y.left) || "right" === r && c(l.left) < c(y.right) || "top" === r && c(l.bottom) > c(y.top) || "bottom" === r && c(l.top) < c(y.bottom)
                          , p = c(l.left) < c(e.left)
                          , w = c(l.right) > c(e.right)
                          , b = c(l.top) < c(e.top)
                          , k = c(l.bottom) > c(e.bottom)
                          , g = "left" === r && p || "right" === r && w || "top" === r && b || "bottom" === r && k
                          , v = -1 !== ["top", "bottom"].indexOf(r)
                          , it = !!i.flipVariations && (v && "start" === u && p || v && "end" === u && w || !v && "start" === u && b || !v && "end" === u && k)
                          , rt = !!i.flipVariationsByContent && (v && "start" === u && w || v && "end" === u && p || !v && "start" === u && k || !v && "end" === u && b)
                          , nt = it || rt;
                        (d || g || nt) && (t.flipped = !0,
                        (d || g) && (r = f[h + 1]),
                        nt && (u = ki(u)),
                        t.placement = r + (u ? "-" + u : ""),
                        t.offsets.popper = n({}, t.offsets.popper, yt(t.instance.popper, t.offsets.reference, t.placement)),
                        t = pt(t.instance.modifiers, t, "flip"))
                    }),
                    t
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport",
                flipVariations: !1,
                flipVariationsByContent: !1
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(n) {
                    var u = n.placement
                      , t = u.split("-")[0]
                      , f = n.offsets
                      , r = f.popper
                      , o = f.reference
                      , e = -1 !== ["left", "right"].indexOf(t)
                      , s = -1 === ["top", "left"].indexOf(t);
                    return r[e ? "left" : "top"] = o[t] - (s ? r[e ? "width" : "height"] : 0),
                    n.placement = a(u),
                    n.offsets.popper = i(r),
                    n
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(n) {
                    if (!dt(n.instance.modifiers, "hide", "preventOverflow"))
                        return n;
                    var t = n.offsets.reference
                      , i = h(n.instance.modifiers, function(n) {
                        return "preventOverflow" === n.name
                    }).boundaries;
                    if (t.bottom < i.top || t.left > i.right || t.top > i.bottom || t.right < i.left) {
                        if (!0 === n.hide)
                            return n;
                        n.hide = !0;
                        n.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === n.hide)
                            return n;
                        n.hide = !1;
                        n.attributes["x-out-of-boundaries"] = !1
                    }
                    return n
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(t, i) {
                    var g = i.x, nt = i.y, tt = t.offsets.popper, c = h(t.instance.modifiers, function(n) {
                        return "applyStyle" === n.name
                    }).gpuAcceleration, p, b, k;
                    void 0 !== c && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var l, a, it = void 0 === c ? i.gpuAcceleration : c, e = f(t.instance.popper), v = w(e), r = {
                        position: tt.position
                    }, u = bi(t, 2 > window.devicePixelRatio || !er), o = "bottom" === g ? "top" : "bottom", s = "right" === nt ? "left" : "right", y = d("transform");
                    return (a = "bottom" == o ? "HTML" === e.nodeName ? -e.clientHeight + u.bottom : -v.height + u.bottom : u.top,
                    l = "right" == s ? "HTML" === e.nodeName ? -e.clientWidth + u.right : -v.width + u.right : u.left,
                    it && y) ? (r[y] = "translate3d(" + l + "px, " + a + "px, 0)",
                    r[o] = 0,
                    r[s] = 0,
                    r.willChange = "transform") : (p = "bottom" == o ? -1 : 1,
                    b = "right" == s ? -1 : 1,
                    r[o] = a * p,
                    r[s] = l * b,
                    r.willChange = o + ", " + s),
                    k = {
                        "x-placement": t.placement
                    },
                    t.attributes = n({}, k, t.attributes),
                    t.styles = n({}, r, t.styles),
                    t.arrowStyles = n({}, t.offsets.arrow, t.arrowStyles),
                    t
                },
                gpuAcceleration: !0,
                x: "bottom",
                y: "right"
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(n) {
                    return nt(n.instance.popper, n.styles),
                    wi(n.instance.popper, n.attributes),
                    n.arrowElement && Object.keys(n.arrowStyles).length && nt(n.arrowElement, n.arrowStyles),
                    n
                },
                onLoad: function(n, t, i, r, u) {
                    var f = at(u, t, n, i.positionFixed)
                      , e = lt(i.placement, f, t, n, i.modifiers.flip.boundariesElement, i.modifiers.flip.padding);
                    return t.setAttribute("x-placement", e),
                    nt(t, {
                        position: i.positionFixed ? "fixed" : "absolute"
                    }),
                    i
                },
                gpuAcceleration: void 0
            }
        }
    },
    v
});
var bga = bga || {};
bga.createNS = function(n) {
    var t = n.split("."), i = bga, r, u;
    for (t[0] === "bga" && (t = t.slice(1)),
    r = 0; r < t.length; r++)
        u = t[r],
        typeof i[u] == "undefined" && (i[u] = {}),
        i = i[u];
    return i
}
;
bga.createNS("bga.sc.global.UI");
bga.createNS("bga.sc.global.Lib");
bga.createNS("bga.sc.global.Vendor");
bga.createNS("bga.sc.global.Utils");
bga.sc.global.Utils.formatted_string = function(n, t, i) {
    return typeof t == "undefined" ? n : i == "r" ? (t + n).substring(0, n.length) : (n + t).slice(-n.length)
}
;
bga.sc.global.Utils.urlExists = function(n, t) {
    $.ajax({
        type: "HEAD",
        url: n,
        success: function() {
            t(!0)
        },
        error: function() {
            t(!1)
        }
    })
}
;
bga.sc.global.UI.displayInMMSS = function(n) {
    if (n) {
        const t = Math.floor(n / 60)
          , i = Math.floor(n - t * 60);
        return finalTime = bga.sc.global.Utils.formatted_string("00", t) + ":" + bga.sc.global.Utils.formatted_string("00", i)
    }
    return "00:00"
}
;
bga.sc.global.UI.isWindowThin = function() {
    return window.innerWidth <= 768
}
;
bga.sc.global.UI.addLinkEventListener = function() {
    document.querySelectorAll('[role="link"]').forEach(function(n) {
        n.addEventListener("keydown", function(t) {
            t.keyCode == 13 && n.click()
        })
    })
}
;
bga.sc.global.UI.addTabEventListener = function() {
    document.querySelectorAll('[role="tab"]').forEach(function(n) {
        n.addEventListener("keydown", function(t) {
            t.keyCode == 13 && n.click()
        })
    })
}
;
bga.sc.global.UI.addButtonEventListener = function() {
    document.querySelectorAll('[role="button"]').forEach(function(n) {
        n.addEventListener("keydown", function(t) {
            t.keyCode == 13 && n.click()
        })
    })
}
;
bga.sc.global.capitalizeText = function(n) {
    return n.length > 0 ? n.charAt(0).toUpperCase() + n.slice(1) : ""
}
;
$(document).ready(function() {
    bga.sc.global.UI.addButtonEventListener();
    bga.sc.global.UI.addLinkEventListener();
    bga.sc.global.UI.addTabEventListener()
});
window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach);
/*!
  * Bootstrap v4.4.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(n, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], t) : t((n = n || self).bootstrap = {}, n.jQuery)
}(this, function(n, t) {
    "use strict";
    function lf(n, t) {
        for (var i, r = 0; r < t.length; r++)
            i = t[r],
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(n, i.key, i)
    }
    function c(n, t, i) {
        return t && lf(n.prototype, t),
        i && lf(n, i),
        n
    }
    function af(n, t) {
        var r = Object.keys(n), i;
        return Object.getOwnPropertySymbols && (i = Object.getOwnPropertySymbols(n),
        t && (i = i.filter(function(t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable
        })),
        r.push.apply(r, i)),
        r
    }
    function u(n) {
        for (var i, t = 1; t < arguments.length; t++)
            i = null != arguments[t] ? arguments[t] : {},
            t % 2 ? af(Object(i), !0).forEach(function(t) {
                var r, u, f;
                r = n;
                f = i[u = t];
                u in r ? Object.defineProperty(r, u, {
                    value: f,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[u] = f
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : af(Object(i)).forEach(function(t) {
                Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(i, t))
            });
        return n
    }
    function po(n) {
        var u = this
          , r = !1;
        return t(this).one(i.TRANSITION_END, function() {
            r = !0
        }),
        setTimeout(function() {
            r || i.triggerTransitionEnd(u)
        }, n),
        this
    }
    function df(n) {
        return n && "[object Function]" === {}.toString.call(n)
    }
    function tt(n, t) {
        if (1 !== n.nodeType)
            return [];
        var i = n.ownerDocument.defaultView.getComputedStyle(n, null);
        return t ? i[t] : i
    }
    function vu(n) {
        return "HTML" === n.nodeName ? n : n.parentNode || n.host
    }
    function ci(n) {
        if (!n)
            return document.body;
        switch (n.nodeName) {
        case "HTML":
        case "BODY":
            return n.ownerDocument.body;
        case "#document":
            return n.body
        }
        var t = tt(n)
          , i = t.overflow
          , r = t.overflowX
          , u = t.overflowY;
        return /(auto|scroll|overlay)/.test(i + u + r) ? n : ci(vu(n))
    }
    function gf(n) {
        return n && n.referenceNode ? n.referenceNode : n
    }
    function ct(n) {
        return 11 === n ? yu : 10 === n ? pu : yu || pu
    }
    function lt(n) {
        var r, t, i;
        if (!n)
            return document.documentElement;
        for (r = ct(10) ? document.body : null,
        t = n.offsetParent || null; t === r && n.nextElementSibling; )
            t = (n = n.nextElementSibling).offsetParent;
        return i = t && t.nodeName,
        i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(t.nodeName) && "static" === tt(t, "position") ? lt(t) : t : n ? n.ownerDocument.documentElement : document.documentElement
    }
    function wu(n) {
        return null !== n.parentNode ? wu(n.parentNode) : n
    }
    function ar(n, t) {
        var i, u;
        if (!(n && n.nodeType && t && t.nodeType))
            return document.documentElement;
        var f = n.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING
          , e = f ? n : t
          , o = f ? t : n
          , r = document.createRange();
        return (r.setStart(e, 0),
        r.setEnd(o, 0),
        i = r.commonAncestorContainer,
        n !== i && t !== i || e.contains(o)) ? function(n) {
            var t = n.nodeName;
            return "BODY" !== t && ("HTML" === t || lt(n.firstElementChild) === n)
        }(i) ? i : lt(i) : (u = wu(n),
        u.host ? ar(u.host, t) : ar(n, wu(t).host))
    }
    function at(n, t) {
        var i = "top" === (1 < arguments.length && void 0 !== t ? t : "top") ? "scrollTop" : "scrollLeft", r = n.nodeName, u;
        return "BODY" !== r && "HTML" !== r ? n[i] : (u = n.ownerDocument.documentElement,
        (n.ownerDocument.scrollingElement || u)[i])
    }
    function ne(n, t) {
        var i = "x" === t ? "Left" : "Top"
          , r = "Left" == i ? "Right" : "Bottom";
        return parseFloat(n["border" + i + "Width"], 10) + parseFloat(n["border" + r + "Width"], 10)
    }
    function te(n, t, i, r) {
        return Math.max(t["offset" + n], t["scroll" + n], i["client" + n], i["offset" + n], i["scroll" + n], ct(10) ? parseInt(i["offset" + n]) + parseInt(r["margin" + ("Height" === n ? "Top" : "Left")]) + parseInt(r["margin" + ("Height" === n ? "Bottom" : "Right")]) : 0)
    }
    function ie(n) {
        var i = n.body
          , t = n.documentElement
          , r = ct(10) && getComputedStyle(t);
        return {
            height: te("Height", i, t, r),
            width: te("Width", i, t, r)
        }
    }
    function ue(n, t) {
        for (var i, r = 0; r < t.length; r++)
            i = t[r],
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(n, i.key, i)
    }
    function vt(n, t, i) {
        return t in n ? Object.defineProperty(n, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : n[t] = i,
        n
    }
    function w(n) {
        return o({}, n, {
            right: n.left + n.width,
            bottom: n.top + n.height
        })
    }
    function bu(n) {
        var t = {}, r, u, o;
        try {
            ct(10) ? (t = n.getBoundingClientRect(),
            r = at(n, "top"),
            u = at(n, "left"),
            t.top += r,
            t.left += u,
            t.bottom += r,
            t.right += u) : t = n.getBoundingClientRect()
        } catch (n) {}
        var i = {
            left: t.left,
            top: t.top,
            width: t.right - t.left,
            height: t.bottom - t.top
        }
          , s = "HTML" === n.nodeName ? ie(n.ownerDocument) : {}
          , h = s.width || n.clientWidth || i.width
          , c = s.height || n.clientHeight || i.height
          , f = n.offsetWidth - h
          , e = n.offsetHeight - c;
        return (f || e) && (o = tt(n),
        f -= ne(o, "x"),
        e -= ne(o, "y"),
        i.width -= f,
        i.height -= e),
        w(i)
    }
    function ku(n, t, i) {
        var a = 2 < arguments.length && void 0 !== i && i, v = ct(10), y = "HTML" === t.nodeName, f = bu(n), u = bu(t), h = ci(n), e = tt(t), c = parseFloat(e.borderTopWidth, 10), l = parseFloat(e.borderLeftWidth, 10), r, o, s;
        return a && y && (u.top = Math.max(u.top, 0),
        u.left = Math.max(u.left, 0)),
        r = w({
            top: f.top - u.top - c,
            left: f.left - u.left - l,
            width: f.width,
            height: f.height
        }),
        (r.marginTop = 0,
        r.marginLeft = 0,
        !v && y) && (o = parseFloat(e.marginTop, 10),
        s = parseFloat(e.marginLeft, 10),
        r.top -= c - o,
        r.bottom -= c - o,
        r.left -= l - s,
        r.right -= l - s,
        r.marginTop = o,
        r.marginLeft = s),
        (v && !a ? t.contains(h) : t === h && "BODY" !== h.nodeName) && (r = function(n, t, i) {
            var e = 2 < arguments.length && void 0 !== i && i
              , u = at(t, "top")
              , f = at(t, "left")
              , r = e ? -1 : 1;
            return n.top += u * r,
            n.bottom += u * r,
            n.left += f * r,
            n.right += f * r,
            n
        }(r, t)),
        r
    }
    function fe(n) {
        if (!n || !n.parentElement || ct())
            return document.documentElement;
        for (var t = n.parentElement; t && "none" === tt(t, "transform"); )
            t = t.parentElement;
        return t || document.documentElement
    }
    function du(n, t, i, r, u) {
        var h = 4 < arguments.length && void 0 !== u && u, f = {
            top: 0,
            left: 0
        }, c = h ? fe(n) : ar(n, gf(t)), o, e, s;
        if ("viewport" === r)
            f = function(n, t) {
                var u = 1 < arguments.length && void 0 !== t && t
                  , i = n.ownerDocument.documentElement
                  , r = ku(n, i)
                  , f = Math.max(i.clientWidth, window.innerWidth || 0)
                  , e = Math.max(i.clientHeight, window.innerHeight || 0)
                  , o = u ? 0 : at(i)
                  , s = u ? 0 : at(i, "left");
                return w({
                    top: o - r.top + r.marginTop,
                    left: s - r.left + r.marginLeft,
                    width: f,
                    height: e
                })
            }(c, h);
        else if (o = void 0,
        "scrollParent" === r ? "BODY" === (o = ci(vu(t))).nodeName && (o = n.ownerDocument.documentElement) : o = "window" === r ? n.ownerDocument.documentElement : r,
        e = ku(o, c, h),
        "HTML" !== o.nodeName || function n(t) {
            var r = t.nodeName, i;
            return "BODY" === r || "HTML" === r ? !1 : "fixed" === tt(t, "position") ? !0 : (i = vu(t),
            !!i && n(i))
        }(c))
            f = e;
        else {
            var l = ie(n.ownerDocument)
              , a = l.height
              , v = l.width;
            f.top += e.top - e.marginTop;
            f.bottom = a + e.top;
            f.left += e.left - e.marginLeft;
            f.right = v + e.left
        }
        return s = "number" == typeof (i = i || 0),
        f.left += s ? i : i.left || 0,
        f.top += s ? i : i.top || 0,
        f.right -= s ? i : i.right || 0,
        f.bottom -= s ? i : i.bottom || 0,
        f
    }
    function ee(n, t, i, r, u, f) {
        var a = 5 < arguments.length && void 0 !== f ? f : 0;
        if (-1 === n.indexOf("auto"))
            return n;
        var e = du(i, r, a, u)
          , s = {
            top: {
                width: e.width,
                height: t.top - e.top
            },
            right: {
                width: e.right - t.right,
                height: e.height
            },
            bottom: {
                width: e.width,
                height: e.bottom - t.bottom
            },
            left: {
                width: t.left - e.left,
                height: e.height
            }
        }
          , h = Object.keys(s).map(function(n) {
            return o({
                key: n
            }, s[n], {
                area: function(n) {
                    return n.width * n.height
                }(s[n])
            })
        }).sort(function(n, t) {
            return t.area - n.area
        })
          , c = h.filter(function(n) {
            var t = n.width
              , r = n.height;
            return t >= i.clientWidth && r >= i.clientHeight
        })
          , v = 0 < c.length ? c[0].key : h[0].key
          , l = n.split("-")[1];
        return v + (l ? "-" + l : "")
    }
    function oe(n, t, i, r) {
        var u = 3 < arguments.length && void 0 !== r ? r : null;
        return ku(i, u ? fe(t) : ar(t, gf(i)), u)
    }
    function se(n) {
        var t = n.ownerDocument.defaultView.getComputedStyle(n)
          , i = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0)
          , r = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
        return {
            width: n.offsetWidth + r,
            height: n.offsetHeight + i
        }
    }
    function vr(n) {
        var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return n.replace(/left|right|bottom|top/g, function(n) {
            return t[n]
        })
    }
    function he(n, t, i) {
        i = i.split("-")[0];
        var r = se(n)
          , e = {
            width: r.width,
            height: r.height
        }
          , u = -1 !== ["right", "left"].indexOf(i)
          , o = u ? "top" : "left"
          , f = u ? "left" : "top"
          , s = u ? "height" : "width"
          , h = u ? "width" : "height";
        return e[o] = t[o] + t[s] / 2 - r[s] / 2,
        e[f] = i === f ? t[f] - r[h] : t[vr(f)],
        e
    }
    function li(n, t) {
        return Array.prototype.find ? n.find(t) : n.filter(t)[0]
    }
    function ce(n, t, i) {
        return (void 0 === i ? n : n.slice(0, function(n, t, i) {
            if (Array.prototype.findIndex)
                return n.findIndex(function(n) {
                    return n[t] === i
                });
            var r = li(n, function(n) {
                return n[t] === i
            });
            return n.indexOf(r)
        }(n, "name", i))).forEach(function(n) {
            n.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var i = n.function || n.fn;
            n.enabled && df(i) && (t.offsets.popper = w(t.offsets.popper),
            t.offsets.reference = w(t.offsets.reference),
            t = i(t, n))
        }),
        t
    }
    function le(n, t) {
        return n.some(function(n) {
            var i = n.name;
            return n.enabled && i === t
        })
    }
    function gu(n) {
        for (var i, r, u = [!1, "ms", "Webkit", "Moz", "O"], f = n.charAt(0).toUpperCase() + n.slice(1), t = 0; t < u.length; t++)
            if (i = u[t],
            r = i ? "" + i + f : n,
            "undefined" != typeof document.body.style[r])
                return r;
        return null
    }
    function ae(n) {
        var t = n.ownerDocument;
        return t ? t.defaultView : window
    }
    function hh(n, t, i, r) {
        i.updateBound = r;
        ae(n).addEventListener("resize", i.updateBound, {
            passive: !0
        });
        var u = ci(n);
        return function n(t, i, r, u) {
            var e = "BODY" === t.nodeName
              , f = e ? t.ownerDocument.defaultView : t;
            f.addEventListener(i, r, {
                passive: !0
            });
            e || n(ci(f.parentNode), i, r, u);
            u.push(f)
        }(u, "scroll", i.updateBound, i.scrollParents),
        i.scrollElement = u,
        i.eventsEnabled = !0,
        i
    }
    function ch() {
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate),
        this.state = function(n, t) {
            return ae(n).removeEventListener("resize", t.updateBound),
            t.scrollParents.forEach(function(n) {
                n.removeEventListener("scroll", t.updateBound)
            }),
            t.updateBound = null,
            t.scrollParents = [],
            t.scrollElement = null,
            t.eventsEnabled = !1,
            t
        }(this.reference, this.state))
    }
    function nf(n) {
        return "" !== n && !isNaN(parseFloat(n)) && isFinite(n)
    }
    function tf(n, t) {
        Object.keys(t).forEach(function(i) {
            var r = "";
            -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(i) && nf(t[i]) && (r = "px");
            n.style[i] = t[i] + r
        })
    }
    function lh(n, t) {
        function u(n) {
            return n
        }
        var f = n.offsets
          , i = f.popper
          , l = f.reference
          , r = Math.round
          , a = Math.floor
          , e = r(l.width)
          , o = r(i.width)
          , v = -1 !== ["left", "right"].indexOf(n.placement)
          , s = -1 !== n.placement.indexOf("-")
          , h = t ? v || s || e % 2 == o % 2 ? r : a : u
          , c = t ? r : u;
        return {
            left: h(e % 2 == 1 && o % 2 == 1 && !s && t ? i.left - 1 : i.left),
            top: c(i.top),
            bottom: c(i.bottom),
            right: h(i.right)
        }
    }
    function ye(n, t, i) {
        var u = li(n, function(n) {
            return n.name === t
        }), f = !!u && n.some(function(n) {
            return n.name === i && n.enabled && n.order < u.order
        }), r, e;
        return f || (r = "`" + t + "`",
        e = "`" + i + "`",
        console.warn(e + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!")),
        f
    }
    function pe(n, t) {
        var u = 1 < arguments.length && void 0 !== t && t
          , i = yr.indexOf(n)
          , r = yr.slice(i + 1).concat(yr.slice(0, i));
        return u ? r.reverse() : r
    }
    function ph(n, t, i, r) {
        var s = [0, 0], h = -1 !== ["right", "left"].indexOf(r), u = n.split(/(\+|\-)/).map(function(n) {
            return n.trim()
        }), f = u.indexOf(li(u, function(n) {
            return -1 !== n.search(/,|\s/)
        })), e, o;
        return u[f] && -1 === u[f].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead."),
        e = /\s*,\s*|\s+/,
        o = -1 !== f ? [u.slice(0, f).concat([u[f].split(e)[0]]), [u[f].split(e)[1]].concat(u.slice(f + 1))] : [u],
        (o = o.map(function(n, r) {
            var f = (1 === r ? !h : h) ? "height" : "width"
              , u = !1;
            return n.reduce(function(n, t) {
                return "" === n[n.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (n[n.length - 1] = t,
                u = !0,
                n) : u ? (n[n.length - 1] += t,
                u = !1,
                n) : n.concat(t)
            }, []).map(function(n) {
                return function(n, t, i, r) {
                    var o = n.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), f = +o[1], u = o[2], e;
                    if (!f)
                        return n;
                    if (0 !== u.indexOf("%"))
                        return "vh" !== u && "vw" !== u ? f : ("vh" === u ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * f;
                    e = void 0;
                    switch (u) {
                    case "%p":
                        e = i;
                        break;
                    case "%":
                    case "%r":
                    default:
                        e = r
                    }
                    return w(e)[t] / 100 * f
                }(n, f, t, i)
            })
        })).forEach(function(n, t) {
            n.forEach(function(i, r) {
                nf(i) && (s[t] += i * ("-" === n[r - 1] ? -1 : 1))
            })
        }),
        s
    }
    function yt(n, t) {
        var i = this, r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}, u;
        !function(n, t) {
            if (!(n instanceof t))
                throw new TypeError("Cannot call a class as a function");
        }(this, yt);
        this.scheduleUpdate = function() {
            return requestAnimationFrame(i.update)
        }
        ;
        this.update = sh(this.update.bind(this));
        this.options = o({}, yt.Defaults, r);
        this.state = {
            isDestroyed: !1,
            isCreated: !1,
            scrollParents: []
        };
        this.reference = n && n.jquery ? n[0] : n;
        this.popper = t && t.jquery ? t[0] : t;
        this.options.modifiers = {};
        Object.keys(o({}, yt.Defaults.modifiers, r.modifiers)).forEach(function(n) {
            i.options.modifiers[n] = o({}, yt.Defaults.modifiers[n] || {}, r.modifiers ? r.modifiers[n] : {})
        });
        this.modifiers = Object.keys(this.options.modifiers).map(function(n) {
            return o({
                name: n
            }, i.options.modifiers[n])
        }).sort(function(n, t) {
            return n.order - t.order
        });
        this.modifiers.forEach(function(n) {
            n.enabled && df(n.onLoad) && n.onLoad(i.reference, i.popper, i.options, n, i.state)
        });
        this.update();
        u = this.options.eventsEnabled;
        u && this.enableEventListeners();
        this.state.eventsEnabled = u
    }
    function to(n, t, i) {
        if (0 === n.length)
            return n;
        if (i && "function" == typeof i)
            return i(n);
        for (var u = (new window.DOMParser).parseFromString(n, "text/html"), e = Object.keys(t), f = [].slice.call(u.body.querySelectorAll("*")), o = function(n) {
            var i = f[n], o = i.nodeName.toLowerCase(), r, u;
            if (-1 === e.indexOf(i.nodeName.toLowerCase()))
                return i.parentNode.removeChild(i),
                "continue";
            r = [].slice.call(i.attributes);
            u = [].concat(t["*"] || [], t[o] || []);
            r.forEach(function(n) {
                (function(n, t) {
                    var i = n.nodeName.toLowerCase();
                    if (-1 !== t.indexOf(i))
                        return -1 === dc.indexOf(i) || Boolean(n.nodeValue.match(gc) || n.nodeValue.match(nl));
                    for (var u = t.filter(function(n) {
                        return n instanceof RegExp
                    }), r = 0, f = u.length; r < f; r++)
                        if (i.match(u[r]))
                            return !0;
                    return !1
                }
                )(n, u) || i.removeAttribute(n.nodeName)
            })
        }, r = 0, s = f.length; r < s; r++)
            o(r);
        return u.body.innerHTML
    }
    var ni, i, yu, pu, re, o, ve, rf, yr, we, b;
    t = t && t.hasOwnProperty("default") ? t.default : t;
    ni = "transitionend";
    i = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(n) {
            for (; n += ~~(1e6 * Math.random()),
            document.getElementById(n); )
                ;
            return n
        },
        getSelectorFromElement: function(n) {
            var t = n.getAttribute("data-target"), i;
            t && "#" !== t || (i = n.getAttribute("href"),
            t = i && "#" !== i ? i.trim() : "");
            try {
                return document.querySelector(t) ? t : null
            } catch (n) {
                return null
            }
        },
        getTransitionDurationFromElement: function(n) {
            if (!n)
                return 0;
            var i = t(n).css("transition-duration")
              , r = t(n).css("transition-delay")
              , u = parseFloat(i)
              , f = parseFloat(r);
            return u || f ? (i = i.split(",")[0],
            r = r.split(",")[0],
            1e3 * (parseFloat(i) + parseFloat(r))) : 0
        },
        reflow: function(n) {
            return n.offsetHeight
        },
        triggerTransitionEnd: function(n) {
            t(n).trigger(ni)
        },
        supportsTransitionEnd: function() {
            return Boolean(ni)
        },
        isElement: function(n) {
            return (n[0] || n).nodeType
        },
        typeCheckConfig: function(n, t, r) {
            var u, s;
            for (u in r)
                if (Object.prototype.hasOwnProperty.call(r, u)) {
                    var e = r[u]
                      , f = t[u]
                      , o = f && i.isElement(f) ? "element" : (s = f,
                    {}.toString.call(s).match(/\s([a-z]+)/i)[1].toLowerCase());
                    if (!new RegExp(e).test(o))
                        throw new Error(n.toUpperCase() + ': Option "' + u + '" provided type "' + o + '" but expected type "' + e + '".');
                }
        },
        findShadowRoot: function(n) {
            if (!document.documentElement.attachShadow)
                return null;
            if ("function" != typeof n.getRootNode)
                return n instanceof ShadowRoot ? n : n.parentNode ? i.findShadowRoot(n.parentNode) : null;
            var t = n.getRootNode();
            return t instanceof ShadowRoot ? t : null
        },
        jQueryDetection: function() {
            if ("undefined" == typeof t)
                throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var n = t.fn.jquery.split(" ")[0].split(".");
            if (n[0] < 2 && n[1] < 9 || 1 === n[0] && 9 === n[1] && n[2] < 1 || 4 <= n[0])
                throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
        }
    };
    i.jQueryDetection();
    t.fn.emulateTransitionEnd = po;
    t.event.special[i.TRANSITION_END] = {
        bindType: ni,
        delegateType: ni,
        handle: function(n) {
            if (t(n.target).is(this))
                return n.handleObj.handler.apply(this, arguments)
        }
    };
    var ti = "alert"
      , fr = "bs.alert"
      , fu = "." + fr
      , wo = t.fn[ti]
      , eu = {
        CLOSE: "close" + fu,
        CLOSED: "closed" + fu,
        CLICK_DATA_API: "click" + fu + ".data-api"
    }
      , bo = "alert"
      , ko = "fade"
      , go = "show"
      , et = function() {
        function n(n) {
            this._element = n
        }
        var r = n.prototype;
        return r.close = function(n) {
            var t = this._element;
            n && (t = this._getRootElement(n));
            this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
        }
        ,
        r.dispose = function() {
            t.removeData(this._element, fr);
            this._element = null
        }
        ,
        r._getRootElement = function(n) {
            var u = i.getSelectorFromElement(n)
              , r = !1;
            return u && (r = document.querySelector(u)),
            r = r || t(n).closest("." + bo)[0]
        }
        ,
        r._triggerCloseEvent = function(n) {
            var i = t.Event(eu.CLOSE);
            return t(n).trigger(i),
            i
        }
        ,
        r._removeElement = function(n) {
            var u = this, r;
            (t(n).removeClass(go),
            t(n).hasClass(ko)) ? (r = i.getTransitionDurationFromElement(n),
            t(n).one(i.TRANSITION_END, function(t) {
                return u._destroyElement(n, t)
            }).emulateTransitionEnd(r)) : this._destroyElement(n)
        }
        ,
        r._destroyElement = function(n) {
            t(n).detach().trigger(eu.CLOSED).remove()
        }
        ,
        n._jQueryInterface = function(i) {
            return this.each(function() {
                var u = t(this)
                  , r = u.data(fr);
                r || (r = new n(this),
                u.data(fr, r));
                "close" === i && r[i](this)
            })
        }
        ,
        n._handleDismiss = function(n) {
            return function(t) {
                t && t.preventDefault();
                n.close(this)
            }
        }
        ,
        c(n, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }]),
        n
    }();
    t(document).on(eu.CLICK_DATA_API, '[data-dismiss="alert"]', et._handleDismiss(new et));
    t.fn[ti] = et._jQueryInterface;
    t.fn[ti].Constructor = et;
    t.fn[ti].noConflict = function() {
        return t.fn[ti] = wo,
        et._jQueryInterface
    }
    ;
    var ii = "button"
      , er = "bs.button"
      , or = "." + er
      , sr = ".data-api"
      , ns = t.fn[ii]
      , y = "active"
      , ts = "btn"
      , is = "focus"
      , vf = '[data-toggle^="button"]'
      , rs = '[data-toggle="buttons"]'
      , us = '[data-toggle="button"]'
      , fs = '[data-toggle="buttons"] .btn'
      , ou = 'input:not([type="hidden"])'
      , es = ".active"
      , yf = ".btn"
      , su = {
        CLICK_DATA_API: "click" + or + sr,
        FOCUS_BLUR_DATA_API: "focus" + or + sr + " blur" + or + sr,
        LOAD_DATA_API: "load" + or + sr
    }
      , ri = function() {
        function n(n) {
            this._element = n
        }
        var i = n.prototype;
        return i.toggle = function() {
            var i = !0, u = !0, f = t(this._element).closest(rs)[0], n, r;
            f && (n = this._element.querySelector(ou),
            n && ("radio" === n.type ? n.checked && this._element.classList.contains(y) ? i = !1 : (r = f.querySelector(es),
            r && t(r).removeClass(y)) : "checkbox" === n.type ? "LABEL" === this._element.tagName && n.checked === this._element.classList.contains(y) && (i = !1) : i = !1,
            i && (n.checked = !this._element.classList.contains(y),
            t(n).trigger("change")),
            n.focus(),
            u = !1));
            this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (u && this._element.setAttribute("aria-pressed", !this._element.classList.contains(y)),
            i && t(this._element).toggleClass(y))
        }
        ,
        i.dispose = function() {
            t.removeData(this._element, er);
            this._element = null
        }
        ,
        n._jQueryInterface = function(i) {
            return this.each(function() {
                var r = t(this).data(er);
                r || (r = new n(this),
                t(this).data(er, r));
                "toggle" === i && r[i]()
            })
        }
        ,
        c(n, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }]),
        n
    }();
    t(document).on(su.CLICK_DATA_API, vf, function(n) {
        var i = n.target, r;
        if (t(i).hasClass(ts) || (i = t(i).closest(yf)[0]),
        !i || i.hasAttribute("disabled") || i.classList.contains("disabled"))
            n.preventDefault();
        else {
            if (r = i.querySelector(ou),
            r && (r.hasAttribute("disabled") || r.classList.contains("disabled")))
                return void n.preventDefault();
            ri._jQueryInterface.call(t(i), "toggle")
        }
    }).on(su.FOCUS_BLUR_DATA_API, vf, function(n) {
        var i = t(n.target).closest(yf)[0];
        t(i).toggleClass(is, /^focus(in)?$/.test(n.type))
    });
    t(window).on(su.LOAD_DATA_API, function() {
        for (var t, f, i, e, r, n = [].slice.call(document.querySelectorAll(fs)), u = 0, o = n.length; u < o; u++)
            t = n[u],
            f = t.querySelector(ou),
            f.checked || f.hasAttribute("checked") ? t.classList.add(y) : t.classList.remove(y);
        for (i = 0,
        e = (n = [].slice.call(document.querySelectorAll(us))).length; i < e; i++)
            r = n[i],
            "true" === r.getAttribute("aria-pressed") ? r.classList.add(y) : r.classList.remove(y)
    });
    t.fn[ii] = ri._jQueryInterface;
    t.fn[ii].Constructor = ri;
    t.fn[ii].noConflict = function() {
        return t.fn[ii] = ns,
        ri._jQueryInterface
    }
    ;
    var ot = "carousel"
      , ui = "bs.carousel"
      , f = "." + ui
      , pf = ".data-api"
      , os = t.fn[ot]
      , hu = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0
    }
      , ss = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean"
    }
      , hr = "next"
      , cr = "prev"
      , hs = "left"
      , cs = "right"
      , e = {
        SLIDE: "slide" + f,
        SLID: "slid" + f,
        KEYDOWN: "keydown" + f,
        MOUSEENTER: "mouseenter" + f,
        MOUSELEAVE: "mouseleave" + f,
        TOUCHSTART: "touchstart" + f,
        TOUCHMOVE: "touchmove" + f,
        TOUCHEND: "touchend" + f,
        POINTERDOWN: "pointerdown" + f,
        POINTERUP: "pointerup" + f,
        DRAG_START: "dragstart" + f,
        LOAD_DATA_API: "load" + f + pf,
        CLICK_DATA_API: "click" + f + pf
    }
      , ls = "carousel"
      , d = "active"
      , as = "slide"
      , vs = "carousel-item-right"
      , ys = "carousel-item-left"
      , ps = "carousel-item-next"
      , ws = "carousel-item-prev"
      , bs = "pointer-event"
      , ks = ".active"
      , cu = ".active.carousel-item"
      , ds = ".carousel-item"
      , gs = ".carousel-item img"
      , nh = ".carousel-item-next, .carousel-item-prev"
      , th = ".carousel-indicators"
      , ih = '[data-ride="carousel"]'
      , wf = {
        TOUCH: "touch",
        PEN: "pen"
    }
      , st = function() {
        function r(n, t) {
            this._items = null;
            this._interval = null;
            this._activeElement = null;
            this._isPaused = !1;
            this._isSliding = !1;
            this.touchTimeout = null;
            this.touchStartX = 0;
            this.touchDeltaX = 0;
            this._config = this._getConfig(t);
            this._element = n;
            this._indicatorsElement = this._element.querySelector(th);
            this._touchSupported = "ontouchstart"in document.documentElement || 0 < navigator.maxTouchPoints;
            this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent);
            this._addEventListeners()
        }
        var n = r.prototype;
        return n.next = function() {
            this._isSliding || this._slide(hr)
        }
        ,
        n.nextWhenVisible = function() {
            !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next()
        }
        ,
        n.prev = function() {
            this._isSliding || this._slide(cr)
        }
        ,
        n.pause = function(n) {
            n || (this._isPaused = !0);
            this._element.querySelector(nh) && (i.triggerTransitionEnd(this._element),
            this.cycle(!0));
            clearInterval(this._interval);
            this._interval = null
        }
        ,
        n.cycle = function(n) {
            n || (this._isPaused = !1);
            this._interval && (clearInterval(this._interval),
            this._interval = null);
            this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }
        ,
        n.to = function(n) {
            var u = this, i, r;
            if (this._activeElement = this._element.querySelector(cu),
            i = this._getItemIndex(this._activeElement),
            !(n > this._items.length - 1 || n < 0))
                if (this._isSliding)
                    t(this._element).one(e.SLID, function() {
                        return u.to(n)
                    });
                else {
                    if (i === n)
                        return this.pause(),
                        void this.cycle();
                    r = i < n ? hr : cr;
                    this._slide(r, this._items[n])
                }
        }
        ,
        n.dispose = function() {
            t(this._element).off(f);
            t.removeData(this._element, ui);
            this._items = null;
            this._config = null;
            this._element = null;
            this._interval = null;
            this._isPaused = null;
            this._isSliding = null;
            this._activeElement = null;
            this._indicatorsElement = null
        }
        ,
        n._getConfig = function(n) {
            return n = u({}, hu, {}, n),
            i.typeCheckConfig(ot, n, ss),
            n
        }
        ,
        n._handleSwipe = function() {
            var t = Math.abs(this.touchDeltaX), n;
            t <= 40 || (n = t / this.touchDeltaX,
            (this.touchDeltaX = 0) < n && this.prev(),
            n < 0 && this.next())
        }
        ,
        n._addEventListeners = function() {
            var n = this;
            this._config.keyboard && t(this._element).on(e.KEYDOWN, function(t) {
                return n._keydown(t)
            });
            "hover" === this._config.pause && t(this._element).on(e.MOUSEENTER, function(t) {
                return n.pause(t)
            }).on(e.MOUSELEAVE, function(t) {
                return n.cycle(t)
            });
            this._config.touch && this._addTouchEventListeners()
        }
        ,
        n._addTouchEventListeners = function() {
            var n = this, i, r;
            this._touchSupported && (i = function(t) {
                n._pointerEvent && wf[t.originalEvent.pointerType.toUpperCase()] ? n.touchStartX = t.originalEvent.clientX : n._pointerEvent || (n.touchStartX = t.originalEvent.touches[0].clientX)
            }
            ,
            r = function(t) {
                n._pointerEvent && wf[t.originalEvent.pointerType.toUpperCase()] && (n.touchDeltaX = t.originalEvent.clientX - n.touchStartX);
                n._handleSwipe();
                "hover" === n._config.pause && (n.pause(),
                n.touchTimeout && clearTimeout(n.touchTimeout),
                n.touchTimeout = setTimeout(function(t) {
                    return n.cycle(t)
                }, 500 + n._config.interval))
            }
            ,
            t(this._element.querySelectorAll(gs)).on(e.DRAG_START, function(n) {
                return n.preventDefault()
            }),
            this._pointerEvent ? (t(this._element).on(e.POINTERDOWN, function(n) {
                return i(n)
            }),
            t(this._element).on(e.POINTERUP, function(n) {
                return r(n)
            }),
            this._element.classList.add(bs)) : (t(this._element).on(e.TOUCHSTART, function(n) {
                return i(n)
            }),
            t(this._element).on(e.TOUCHMOVE, function(t) {
                return function(t) {
                    n.touchDeltaX = t.originalEvent.touches && 1 < t.originalEvent.touches.length ? 0 : t.originalEvent.touches[0].clientX - n.touchStartX
                }(t)
            }),
            t(this._element).on(e.TOUCHEND, function(n) {
                return r(n)
            })))
        }
        ,
        n._keydown = function(n) {
            if (!/input|textarea/i.test(n.target.tagName))
                switch (n.which) {
                case 37:
                    n.preventDefault();
                    this.prev();
                    break;
                case 39:
                    n.preventDefault();
                    this.next()
                }
        }
        ,
        n._getItemIndex = function(n) {
            return this._items = n && n.parentNode ? [].slice.call(n.parentNode.querySelectorAll(ds)) : [],
            this._items.indexOf(n)
        }
        ,
        n._getItemByDirection = function(n, t) {
            var u = n === hr, f = n === cr, i = this._getItemIndex(t), e = this._items.length - 1, r;
            return (f && 0 === i || u && i === e) && !this._config.wrap ? t : (r = (i + (n === cr ? -1 : 1)) % this._items.length,
            -1 == r ? this._items[this._items.length - 1] : this._items[r])
        }
        ,
        n._triggerSlideEvent = function(n, i) {
            var u = this._getItemIndex(n)
              , f = this._getItemIndex(this._element.querySelector(cu))
              , r = t.Event(e.SLIDE, {
                relatedTarget: n,
                direction: i,
                from: f,
                to: u
            });
            return t(this._element).trigger(r),
            r
        }
        ,
        n._setActiveIndicatorElement = function(n) {
            var r, i;
            this._indicatorsElement && (r = [].slice.call(this._indicatorsElement.querySelectorAll(ks)),
            t(r).removeClass(d),
            i = this._indicatorsElement.children[this._getItemIndex(n)],
            i && t(i).addClass(d))
        }
        ,
        n._slide = function(n, r) {
            var o, s, h, a = this, f = this._element.querySelector(cu), p = this._getItemIndex(f), u = r || f && this._getItemByDirection(n, f), w = this._getItemIndex(u), v = Boolean(this._interval), c, l, y;
            (h = n === hr ? (o = ys,
            s = ps,
            hs) : (o = vs,
            s = ws,
            cs),
            u && t(u).hasClass(d)) ? this._isSliding = !1 : !this._triggerSlideEvent(u, h).isDefaultPrevented() && f && u && (this._isSliding = !0,
            v && this.pause(),
            this._setActiveIndicatorElement(u),
            c = t.Event(e.SLID, {
                relatedTarget: u,
                direction: h,
                from: p,
                to: w
            }),
            t(this._element).hasClass(as) ? (t(u).addClass(s),
            i.reflow(u),
            t(f).addClass(o),
            t(u).addClass(o),
            l = parseInt(u.getAttribute("data-interval"), 10),
            l ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval,
            this._config.interval = l) : this._config.interval = this._config.defaultInterval || this._config.interval,
            y = i.getTransitionDurationFromElement(f),
            t(f).one(i.TRANSITION_END, function() {
                t(u).removeClass(o + " " + s).addClass(d);
                t(f).removeClass(d + " " + s + " " + o);
                a._isSliding = !1;
                setTimeout(function() {
                    return t(a._element).trigger(c)
                }, 0)
            }).emulateTransitionEnd(y)) : (t(f).removeClass(d),
            t(u).addClass(d),
            this._isSliding = !1,
            t(this._element).trigger(c)),
            v && this.cycle())
        }
        ,
        r._jQueryInterface = function(n) {
            return this.each(function() {
                var i = t(this).data(ui), f = u({}, hu, {}, t(this).data()), e;
                if ("object" == typeof n && (f = u({}, f, {}, n)),
                e = "string" == typeof n ? n : f.slide,
                i || (i = new r(this,f),
                t(this).data(ui, i)),
                "number" == typeof n)
                    i.to(n);
                else if ("string" == typeof e) {
                    if ("undefined" == typeof i[e])
                        throw new TypeError('No method named "' + e + '"');
                    i[e]()
                } else
                    f.interval && f.ride && (i.pause(),
                    i.cycle())
            })
        }
        ,
        r._dataApiClickHandler = function(n) {
            var s = i.getSelectorFromElement(this), f, o, e;
            s && (f = t(s)[0],
            f && t(f).hasClass(ls) && (o = u({}, t(f).data(), {}, t(this).data()),
            e = this.getAttribute("data-slide-to"),
            e && (o.interval = !1),
            r._jQueryInterface.call(t(f), o),
            e && t(f).data(ui).to(e),
            n.preventDefault()))
        }
        ,
        c(r, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }, {
            key: "Default",
            get: function() {
                return hu
            }
        }]),
        r
    }();
    t(document).on(e.CLICK_DATA_API, "[data-slide], [data-slide-to]", st._dataApiClickHandler);
    t(window).on(e.LOAD_DATA_API, function() {
        for (var i, r = [].slice.call(document.querySelectorAll(ih)), n = 0, u = r.length; n < u; n++)
            i = t(r[n]),
            st._jQueryInterface.call(i, i.data())
    });
    t.fn[ot] = st._jQueryInterface;
    t.fn[ot].Constructor = st;
    t.fn[ot].noConflict = function() {
        return t.fn[ot] = os,
        st._jQueryInterface
    }
    ;
    var ht = "collapse"
      , g = "bs.collapse"
      , fi = "." + g
      , rh = t.fn[ht]
      , lu = {
        toggle: !0,
        parent: ""
    }
      , uh = {
        toggle: "boolean",
        parent: "(string|element)"
    }
      , ei = {
        SHOW: "show" + fi,
        SHOWN: "shown" + fi,
        HIDE: "hide" + fi,
        HIDDEN: "hidden" + fi,
        CLICK_DATA_API: "click" + fi + ".data-api"
    }
      , nt = "show"
      , oi = "collapse"
      , lr = "collapsing"
      , au = "collapsed"
      , bf = "width"
      , fh = "height"
      , eh = ".show, .collapsing"
      , kf = '[data-toggle="collapse"]'
      , si = function() {
        function r(n, t) {
            this._isTransitioning = !1;
            this._element = n;
            this._config = this._getConfig(t);
            this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + n.id + '"],[data-toggle="collapse"][data-target="#' + n.id + '"]'));
            for (var f = [].slice.call(document.querySelectorAll(kf)), r = 0, o = f.length; r < o; r++) {
                var e = f[r]
                  , u = i.getSelectorFromElement(e)
                  , s = [].slice.call(document.querySelectorAll(u)).filter(function(t) {
                    return t === n
                });
                null !== u && 0 < s.length && (this._selector = u,
                this._triggerArray.push(e))
            }
            this._parent = this._config.parent ? this._getParent() : null;
            this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray);
            this._config.toggle && this.toggle()
        }
        var n = r.prototype;
        return n.toggle = function() {
            t(this._element).hasClass(nt) ? this.hide() : this.show()
        }
        ,
        n.show = function() {
            var n, e, u = this, o, f, s, h;
            this._isTransitioning || t(this._element).hasClass(nt) || (this._parent && 0 === (n = [].slice.call(this._parent.querySelectorAll(eh)).filter(function(n) {
                return "string" == typeof u._config.parent ? n.getAttribute("data-parent") === u._config.parent : n.classList.contains(oi)
            })).length && (n = null),
            n && (e = t(n).not(this._selector).data(g)) && e._isTransitioning) || (o = t.Event(ei.SHOW),
            (t(this._element).trigger(o),
            o.isDefaultPrevented()) || (n && (r._jQueryInterface.call(t(n).not(this._selector), "hide"),
            e || t(n).data(g, null)),
            f = this._getDimension(),
            t(this._element).removeClass(oi).addClass(lr),
            this._element.style[f] = 0,
            this._triggerArray.length && t(this._triggerArray).removeClass(au).attr("aria-expanded", !0),
            this.setTransitioning(!0),
            s = "scroll" + (f[0].toUpperCase() + f.slice(1)),
            h = i.getTransitionDurationFromElement(this._element),
            t(this._element).one(i.TRANSITION_END, function() {
                t(u._element).removeClass(lr).addClass(oi).addClass(nt);
                u._element.style[f] = "";
                u.setTransitioning(!1);
                t(u._element).trigger(ei.SHOWN)
            }).emulateTransitionEnd(h),
            this._element.style[f] = this._element[s] + "px"))
        }
        ,
        n.hide = function() {
            var s = this, u, n, f, r, e, o, h;
            if (!this._isTransitioning && t(this._element).hasClass(nt) && (u = t.Event(ei.HIDE),
            t(this._element).trigger(u),
            !u.isDefaultPrevented())) {
                if (n = this._getDimension(),
                this._element.style[n] = this._element.getBoundingClientRect()[n] + "px",
                i.reflow(this._element),
                t(this._element).addClass(lr).removeClass(oi).removeClass(nt),
                f = this._triggerArray.length,
                0 < f)
                    for (r = 0; r < f; r++)
                        e = this._triggerArray[r],
                        o = i.getSelectorFromElement(e),
                        null !== o && (t([].slice.call(document.querySelectorAll(o))).hasClass(nt) || t(e).addClass(au).attr("aria-expanded", !1));
                this.setTransitioning(!0);
                this._element.style[n] = "";
                h = i.getTransitionDurationFromElement(this._element);
                t(this._element).one(i.TRANSITION_END, function() {
                    s.setTransitioning(!1);
                    t(s._element).removeClass(lr).addClass(oi).trigger(ei.HIDDEN)
                }).emulateTransitionEnd(h)
            }
        }
        ,
        n.setTransitioning = function(n) {
            this._isTransitioning = n
        }
        ,
        n.dispose = function() {
            t.removeData(this._element, g);
            this._config = null;
            this._parent = null;
            this._element = null;
            this._triggerArray = null;
            this._isTransitioning = null
        }
        ,
        n._getConfig = function(n) {
            return (n = u({}, lu, {}, n)).toggle = Boolean(n.toggle),
            i.typeCheckConfig(ht, n, uh),
            n
        }
        ,
        n._getDimension = function() {
            return t(this._element).hasClass(bf) ? bf : fh
        }
        ,
        n._getParent = function() {
            var n, e = this, u, f;
            return i.isElement(this._config.parent) ? (n = this._config.parent,
            "undefined" != typeof this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent),
            u = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
            f = [].slice.call(n.querySelectorAll(u)),
            t(f).each(function(n, t) {
                e._addAriaAndCollapsedClass(r._getTargetFromElement(t), [t])
            }),
            n
        }
        ,
        n._addAriaAndCollapsedClass = function(n, i) {
            var r = t(n).hasClass(nt);
            i.length && t(i).toggleClass(au, !r).attr("aria-expanded", r)
        }
        ,
        r._getTargetFromElement = function(n) {
            var t = i.getSelectorFromElement(n);
            return t ? document.querySelector(t) : null
        }
        ,
        r._jQueryInterface = function(n) {
            return this.each(function() {
                var f = t(this)
                  , i = f.data(g)
                  , e = u({}, lu, {}, f.data(), {}, "object" == typeof n && n ? n : {});
                if (!i && e.toggle && /show|hide/.test(n) && (e.toggle = !1),
                i || (i = new r(this,e),
                f.data(g, i)),
                "string" == typeof n) {
                    if ("undefined" == typeof i[n])
                        throw new TypeError('No method named "' + n + '"');
                    i[n]()
                }
            })
        }
        ,
        c(r, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }, {
            key: "Default",
            get: function() {
                return lu
            }
        }]),
        r
    }();
    t(document).on(ei.CLICK_DATA_API, kf, function(n) {
        "A" === n.currentTarget.tagName && n.preventDefault();
        var r = t(this)
          , u = i.getSelectorFromElement(this)
          , f = [].slice.call(document.querySelectorAll(u));
        t(f).each(function() {
            var n = t(this)
              , i = n.data(g) ? "toggle" : r.data();
            si._jQueryInterface.call(n, i)
        })
    });
    t.fn[ht] = si._jQueryInterface;
    t.fn[ht].Constructor = si;
    t.fn[ht].noConflict = function() {
        return t.fn[ht] = rh,
        si._jQueryInterface
    }
    ;
    var hi = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator
      , oh = function() {
        for (var t = ["Edge", "Trident", "Firefox"], n = 0; n < t.length; n += 1)
            if (hi && 0 <= navigator.userAgent.indexOf(t[n]))
                return 1;
        return 0
    }()
      , sh = hi && window.Promise ? function(n) {
        var t = !1;
        return function() {
            t || (t = !0,
            window.Promise.resolve().then(function() {
                t = !1;
                n()
            }))
        }
    }
    : function(n) {
        var t = !1;
        return function() {
            t || (t = !0,
            setTimeout(function() {
                t = !1;
                n()
            }, oh))
        }
    }
    ;
    yu = hi && !(!window.MSInputMethodContext || !document.documentMode);
    pu = hi && /MSIE 10/.test(navigator.userAgent);
    re = function(n, t, i) {
        return t && ue(n.prototype, t),
        i && ue(n, i),
        n
    }
    ;
    o = Object.assign || function(n) {
        for (var i, r, t = 1; t < arguments.length; t++) {
            i = arguments[t];
            for (r in i)
                Object.prototype.hasOwnProperty.call(i, r) && (n[r] = i[r])
        }
        return n
    }
    ;
    ve = hi && /Firefox/i.test(navigator.userAgent);
    rf = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"];
    yr = rf.slice(3);
    var ah = "flip"
      , vh = "clockwise"
      , yh = "counterclockwise";
    we = {
        placement: "bottom",
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(n) {
                    var r = n.placement
                      , c = r.split("-")[0]
                      , u = r.split("-")[1];
                    if (u) {
                        var f = n.offsets
                          , i = f.reference
                          , e = f.popper
                          , s = -1 !== ["bottom", "top"].indexOf(c)
                          , t = s ? "left" : "top"
                          , h = s ? "width" : "height"
                          , l = {
                            start: vt({}, t, i[t]),
                            end: vt({}, t, i[t] + i[h] - e[h])
                        };
                        n.offsets.popper = o({}, e, l[u])
                    }
                    return n
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: function(n, t) {
                    var f = t.offset
                      , o = n.placement
                      , e = n.offsets
                      , i = e.popper
                      , s = e.reference
                      , u = o.split("-")[0]
                      , r = void 0;
                    return r = nf(+f) ? [+f, 0] : ph(f, i, s, u),
                    "left" === u ? (i.top += r[0],
                    i.left -= r[1]) : "right" === u ? (i.top += r[0],
                    i.left += r[1]) : "top" === u ? (i.left += r[0],
                    i.top -= r[1]) : "bottom" === u && (i.left += r[0],
                    i.top += r[1]),
                    n.popper = i,
                    n
                },
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(n, t) {
                    var f = t.boundariesElement || lt(n.instance.popper), u;
                    n.instance.reference === f && (f = lt(f));
                    var e = gu("transform")
                      , r = n.instance.popper.style
                      , s = r.top
                      , h = r.left
                      , c = r[e];
                    r.top = "";
                    r.left = "";
                    r[e] = "";
                    u = du(n.instance.popper, n.instance.reference, t.padding, f, n.positionFixed);
                    r.top = s;
                    r.left = h;
                    r[e] = c;
                    t.boundaries = u;
                    var l = t.priority
                      , i = n.offsets.popper
                      , a = {
                        primary: function(n) {
                            var r = i[n];
                            return i[n] < u[n] && !t.escapeWithReference && (r = Math.max(i[n], u[n])),
                            vt({}, n, r)
                        },
                        secondary: function(n) {
                            var r = "right" === n ? "left" : "top"
                              , f = i[r];
                            return i[n] > u[n] && !t.escapeWithReference && (f = Math.min(i[r], u[n] - ("right" === n ? i.width : i.height))),
                            vt({}, r, f)
                        }
                    };
                    return l.forEach(function(n) {
                        var t = -1 !== ["left", "top"].indexOf(n) ? "primary" : "secondary";
                        i = o({}, i, a[t](n))
                    }),
                    n.offsets.popper = i,
                    n
                },
                priority: ["left", "right", "top", "bottom"],
                padding: 5,
                boundariesElement: "scrollParent"
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(n) {
                    var o = n.offsets
                      , u = o.popper
                      , i = o.reference
                      , s = n.placement.split("-")[0]
                      , r = Math.floor
                      , f = -1 !== ["top", "bottom"].indexOf(s)
                      , e = f ? "right" : "bottom"
                      , t = f ? "left" : "top"
                      , h = f ? "width" : "height";
                    return u[e] < r(i[t]) && (n.offsets.popper[t] = r(i[t]) - u[h]),
                    u[t] > r(i[e]) && (n.offsets.popper[t] = r(i[e])),
                    n
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(n, t) {
                    var h, r;
                    if (!ye(n.instance.modifiers, "arrow", "keepTogether"))
                        return n;
                    if (r = t.element,
                    "string" == typeof r) {
                        if (!(r = n.instance.popper.querySelector(r)))
                            return n
                    } else if (!n.instance.popper.contains(r))
                        return console.warn("WARNING: `arrow.element` must be child of its popper element!"),
                        n;
                    var p = n.placement.split("-")[0]
                      , v = n.offsets
                      , e = v.popper
                      , u = v.reference
                      , o = -1 !== ["left", "right"].indexOf(p)
                      , c = o ? "height" : "width"
                      , l = o ? "Top" : "Left"
                      , i = l.toLowerCase()
                      , b = o ? "left" : "top"
                      , s = o ? "bottom" : "right"
                      , f = se(r)[c];
                    u[s] - f < e[i] && (n.offsets.popper[i] -= e[i] - (u[s] - f));
                    u[i] + f > e[s] && (n.offsets.popper[i] += u[i] + f - e[s]);
                    n.offsets.popper = w(n.offsets.popper);
                    var k = u[i] + u[c] / 2 - f / 2
                      , y = tt(n.instance.popper)
                      , d = parseFloat(y["margin" + l], 10)
                      , g = parseFloat(y["border" + l + "Width"], 10)
                      , a = k - n.offsets.popper[i] - d - g;
                    return a = Math.max(Math.min(e[c] - f, a), 0),
                    n.arrowElement = r,
                    n.offsets.arrow = (vt(h = {}, i, Math.round(a)),
                    vt(h, b, ""),
                    h),
                    n
                },
                element: "[x-arrow]"
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(n, t) {
                    if (le(n.instance.modifiers, "inner") || n.flipped && n.placement === n.originalPlacement)
                        return n;
                    var f = du(n.instance.popper, n.instance.reference, t.padding, t.boundariesElement, n.positionFixed)
                      , i = n.placement.split("-")[0]
                      , e = vr(i)
                      , r = n.placement.split("-")[1] || ""
                      , u = [];
                    switch (t.behavior) {
                    case ah:
                        u = [i, e];
                        break;
                    case vh:
                        u = pe(i);
                        break;
                    case yh:
                        u = pe(i, !0);
                        break;
                    default:
                        u = t.behavior
                    }
                    return u.forEach(function(s, h) {
                        if (i !== s || u.length === h + 1)
                            return n;
                        i = n.placement.split("-")[0];
                        e = vr(i);
                        var l = n.offsets.popper
                          , v = n.offsets.reference
                          , c = Math.floor
                          , k = "left" === i && c(l.right) > c(v.left) || "right" === i && c(l.left) < c(v.right) || "top" === i && c(l.bottom) > c(v.top) || "bottom" === i && c(l.top) < c(v.bottom)
                          , y = c(l.left) < c(f.left)
                          , p = c(l.right) > c(f.right)
                          , w = c(l.top) < c(f.top)
                          , b = c(l.bottom) > c(f.bottom)
                          , d = "left" === i && y || "right" === i && p || "top" === i && w || "bottom" === i && b
                          , a = -1 !== ["top", "bottom"].indexOf(i)
                          , nt = !!t.flipVariations && (a && "start" === r && y || a && "end" === r && p || !a && "start" === r && w || !a && "end" === r && b)
                          , tt = !!t.flipVariationsByContent && (a && "start" === r && p || a && "end" === r && y || !a && "start" === r && b || !a && "end" === r && w)
                          , g = nt || tt;
                        (k || d || g) && (n.flipped = !0,
                        (k || d) && (i = u[h + 1]),
                        g && (r = function(n) {
                            return "end" === n ? "start" : "start" === n ? "end" : n
                        }(r)),
                        n.placement = i + (r ? "-" + r : ""),
                        n.offsets.popper = o({}, n.offsets.popper, he(n.instance.popper, n.offsets.reference, n.placement)),
                        n = ce(n.instance.modifiers, n, "flip"))
                    }),
                    n
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport",
                flipVariations: !1,
                flipVariationsByContent: !1
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(n) {
                    var r = n.placement
                      , t = r.split("-")[0]
                      , u = n.offsets
                      , i = u.popper
                      , e = u.reference
                      , f = -1 !== ["left", "right"].indexOf(t)
                      , o = -1 === ["top", "left"].indexOf(t);
                    return i[f ? "left" : "top"] = e[t] - (o ? i[f ? "width" : "height"] : 0),
                    n.placement = vr(r),
                    n.offsets.popper = w(i),
                    n
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(n) {
                    if (!ye(n.instance.modifiers, "hide", "preventOverflow"))
                        return n;
                    var t = n.offsets.reference
                      , i = li(n.instance.modifiers, function(n) {
                        return "preventOverflow" === n.name
                    }).boundaries;
                    if (t.bottom < i.top || t.left > i.right || t.top > i.bottom || t.right < i.left) {
                        if (!0 === n.hide)
                            return n;
                        n.hide = !0;
                        n.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === n.hide)
                            return n;
                        n.hide = !1;
                        n.attributes["x-out-of-boundaries"] = !1
                    }
                    return n
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(n, t) {
                    var w = t.x, b = t.y, k = n.offsets.popper, s = li(n.instance.modifiers, function(n) {
                        return "applyStyle" === n.name
                    }).gpuAcceleration, v, y, p;
                    void 0 !== s && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var d = void 0 !== s ? s : t.gpuAcceleration
                      , u = lt(n.instance.popper)
                      , l = bu(u)
                      , i = {
                        position: k.position
                    }
                      , r = lh(n, window.devicePixelRatio < 2 || !ve)
                      , f = "bottom" === w ? "top" : "bottom"
                      , e = "right" === b ? "left" : "right"
                      , a = gu("transform")
                      , h = void 0
                      , c = void 0;
                    return (c = "bottom" == f ? "HTML" === u.nodeName ? -u.clientHeight + r.bottom : -l.height + r.bottom : r.top,
                    h = "right" == e ? "HTML" === u.nodeName ? -u.clientWidth + r.right : -l.width + r.right : r.left,
                    d && a) ? (i[a] = "translate3d(" + h + "px, " + c + "px, 0)",
                    i[f] = 0,
                    i[e] = 0,
                    i.willChange = "transform") : (v = "bottom" == f ? -1 : 1,
                    y = "right" == e ? -1 : 1,
                    i[f] = c * v,
                    i[e] = h * y,
                    i.willChange = f + ", " + e),
                    p = {
                        "x-placement": n.placement
                    },
                    n.attributes = o({}, p, n.attributes),
                    n.styles = o({}, i, n.styles),
                    n.arrowStyles = o({}, n.offsets.arrow, n.arrowStyles),
                    n
                },
                gpuAcceleration: !0,
                x: "bottom",
                y: "right"
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(n) {
                    return tf(n.instance.popper, n.styles),
                    function(n, t) {
                        Object.keys(t).forEach(function(i) {
                            !1 !== t[i] ? n.setAttribute(i, t[i]) : n.removeAttribute(i)
                        })
                    }(n.instance.popper, n.attributes),
                    n.arrowElement && Object.keys(n.arrowStyles).length && tf(n.arrowElement, n.arrowStyles),
                    n
                },
                onLoad: function(n, t, i, r, u) {
                    var f = oe(u, t, n, i.positionFixed)
                      , e = ee(i.placement, f, t, n, i.modifiers.flip.boundariesElement, i.modifiers.flip.padding);
                    return t.setAttribute("x-placement", e),
                    tf(t, {
                        position: i.positionFixed ? "fixed" : "absolute"
                    }),
                    i
                },
                gpuAcceleration: void 0
            }
        }
    };
    b = (re(yt, [{
        key: "update",
        value: function() {
            return function() {
                if (!this.state.isDestroyed) {
                    var n = {
                        instance: this,
                        styles: {},
                        arrowStyles: {},
                        attributes: {},
                        flipped: !1,
                        offsets: {}
                    };
                    n.offsets.reference = oe(this.state, this.popper, this.reference, this.options.positionFixed);
                    n.placement = ee(this.options.placement, n.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);
                    n.originalPlacement = n.placement;
                    n.positionFixed = this.options.positionFixed;
                    n.offsets.popper = he(this.popper, n.offsets.reference, n.placement);
                    n.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute";
                    n = ce(this.modifiers, n);
                    this.state.isCreated ? this.options.onUpdate(n) : (this.state.isCreated = !0,
                    this.options.onCreate(n))
                }
            }
            .call(this)
        }
    }, {
        key: "destroy",
        value: function() {
            return function() {
                return this.state.isDestroyed = !0,
                le(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"),
                this.popper.style.position = "",
                this.popper.style.top = "",
                this.popper.style.left = "",
                this.popper.style.right = "",
                this.popper.style.bottom = "",
                this.popper.style.willChange = "",
                this.popper.style[gu("transform")] = ""),
                this.disableEventListeners(),
                this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
                this
            }
            .call(this)
        }
    }, {
        key: "enableEventListeners",
        value: function() {
            return function() {
                this.state.eventsEnabled || (this.state = hh(this.reference, this.options, this.state, this.scheduleUpdate))
            }
            .call(this)
        }
    }, {
        key: "disableEventListeners",
        value: function() {
            return ch.call(this)
        }
    }]),
    yt);
    b.Utils = ("undefined" != typeof window ? window : global).PopperUtils;
    b.placements = rf;
    b.Defaults = we;
    var pt = "dropdown"
      , ai = "bs.dropdown"
      , p = "." + ai
      , uf = ".data-api"
      , wh = t.fn[pt]
      , bh = new RegExp("38|40|27")
      , s = {
        HIDE: "hide" + p,
        HIDDEN: "hidden" + p,
        SHOW: "show" + p,
        SHOWN: "shown" + p,
        CLICK: "click" + p,
        CLICK_DATA_API: "click" + p + uf,
        KEYDOWN_DATA_API: "keydown" + p + uf,
        KEYUP_DATA_API: "keyup" + p + uf
    }
      , pr = "disabled"
      , l = "show"
      , kh = "dropup"
      , dh = "dropright"
      , gh = "dropleft"
      , be = "dropdown-menu-right"
      , nc = "position-static"
      , wr = '[data-toggle="dropdown"]'
      , ff = ".dropdown-menu"
      , tc = ".navbar-nav"
      , ic = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
      , rc = "top-start"
      , uc = "top-end"
      , fc = "bottom-start"
      , ec = "bottom-end"
      , oc = "right-start"
      , sc = "left-start"
      , hc = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null
    }
      , cc = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string",
        popperConfig: "(null|object)"
    }
      , k = function() {
        function n(n, t) {
            this._element = n;
            this._popper = null;
            this._config = this._getConfig(t);
            this._menu = this._getMenuElement();
            this._inNavbar = this._detectNavbar();
            this._addEventListeners()
        }
        var r = n.prototype;
        return r.toggle = function() {
            if (!this._element.disabled && !t(this._element).hasClass(pr)) {
                var i = t(this._menu).hasClass(l);
                n._clearMenus();
                i || this.show(!0)
            }
        }
        ,
        r.show = function(r) {
            var f;
            if (void 0 === r && (r = !1),
            !(this._element.disabled || t(this._element).hasClass(pr) || t(this._menu).hasClass(l))) {
                var e = {
                    relatedTarget: this._element
                }
                  , o = t.Event(s.SHOW, e)
                  , u = n._getParentFromElement(this._element);
                if (t(u).trigger(o),
                !o.isDefaultPrevented()) {
                    if (!this._inNavbar && r) {
                        if ("undefined" == typeof b)
                            throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                        f = this._element;
                        "parent" === this._config.reference ? f = u : i.isElement(this._config.reference) && (f = this._config.reference,
                        "undefined" != typeof this._config.reference.jquery && (f = this._config.reference[0]));
                        "scrollParent" !== this._config.boundary && t(u).addClass(nc);
                        this._popper = new b(f,this._menu,this._getPopperConfig())
                    }
                    "ontouchstart"in document.documentElement && 0 === t(u).closest(tc).length && t(document.body).children().on("mouseover", null, t.noop);
                    this._element.focus();
                    this._element.setAttribute("aria-expanded", !0);
                    t(this._menu).toggleClass(l);
                    t(u).toggleClass(l).trigger(t.Event(s.SHOWN, e))
                }
            }
        }
        ,
        r.hide = function() {
            if (!this._element.disabled && !t(this._element).hasClass(pr) && t(this._menu).hasClass(l)) {
                var i = {
                    relatedTarget: this._element
                }
                  , r = t.Event(s.HIDE, i)
                  , u = n._getParentFromElement(this._element);
                t(u).trigger(r);
                r.isDefaultPrevented() || (this._popper && this._popper.destroy(),
                t(this._menu).toggleClass(l),
                t(u).toggleClass(l).trigger(t.Event(s.HIDDEN, i)))
            }
        }
        ,
        r.dispose = function() {
            t.removeData(this._element, ai);
            t(this._element).off(p);
            this._element = null;
            (this._menu = null) !== this._popper && (this._popper.destroy(),
            this._popper = null)
        }
        ,
        r.update = function() {
            this._inNavbar = this._detectNavbar();
            null !== this._popper && this._popper.scheduleUpdate()
        }
        ,
        r._addEventListeners = function() {
            var n = this;
            t(this._element).on(s.CLICK, function(t) {
                t.preventDefault();
                t.stopPropagation();
                n.toggle()
            })
        }
        ,
        r._getConfig = function(n) {
            return n = u({}, this.constructor.Default, {}, t(this._element).data(), {}, n),
            i.typeCheckConfig(pt, n, this.constructor.DefaultType),
            n
        }
        ,
        r._getMenuElement = function() {
            if (!this._menu) {
                var t = n._getParentFromElement(this._element);
                t && (this._menu = t.querySelector(ff))
            }
            return this._menu
        }
        ,
        r._getPlacement = function() {
            var i = t(this._element.parentNode)
              , n = fc;
            return i.hasClass(kh) ? (n = rc,
            t(this._menu).hasClass(be) && (n = uc)) : i.hasClass(dh) ? n = oc : i.hasClass(gh) ? n = sc : t(this._menu).hasClass(be) && (n = ec),
            n
        }
        ,
        r._detectNavbar = function() {
            return 0 < t(this._element).closest(".navbar").length
        }
        ,
        r._getOffset = function() {
            var t = this
              , n = {};
            return "function" == typeof this._config.offset ? n.fn = function(n) {
                return n.offsets = u({}, n.offsets, {}, t._config.offset(n.offsets, t._element) || {}),
                n
            }
            : n.offset = this._config.offset,
            n
        }
        ,
        r._getPopperConfig = function() {
            var n = {
                placement: this._getPlacement(),
                modifiers: {
                    offset: this._getOffset(),
                    flip: {
                        enabled: this._config.flip
                    },
                    preventOverflow: {
                        boundariesElement: this._config.boundary
                    }
                }
            };
            return "static" === this._config.display && (n.modifiers.applyStyle = {
                enabled: !1
            }),
            u({}, n, {}, this._config.popperConfig)
        }
        ,
        n._jQueryInterface = function(i) {
            return this.each(function() {
                var r = t(this).data(ai);
                if (r || (r = new n(this,"object" == typeof i ? i : null),
                t(this).data(ai, r)),
                "string" == typeof i) {
                    if ("undefined" == typeof r[i])
                        throw new TypeError('No method named "' + i + '"');
                    r[i]()
                }
            })
        }
        ,
        n._clearMenus = function(i) {
            var c, h;
            if (!i || 3 !== i.which && ("keyup" !== i.type || 9 === i.which))
                for (var u = [].slice.call(document.querySelectorAll(wr)), r = 0, a = u.length; r < a; r++) {
                    var f = n._getParentFromElement(u[r])
                      , e = t(u[r]).data(ai)
                      , o = {
                        relatedTarget: u[r]
                    };
                    (i && "click" === i.type && (o.clickEvent = i),
                    e) && (c = e._menu,
                    !t(f).hasClass(l) || i && ("click" === i.type && /input|textarea/i.test(i.target.tagName) || "keyup" === i.type && 9 === i.which) && t.contains(f, i.target) || (h = t.Event(s.HIDE, o),
                    t(f).trigger(h),
                    h.isDefaultPrevented() || ("ontouchstart"in document.documentElement && t(document.body).children().off("mouseover", null, t.noop),
                    u[r].setAttribute("aria-expanded", "false"),
                    e._popper && e._popper.destroy(),
                    t(c).removeClass(l),
                    t(f).removeClass(l).trigger(t.Event(s.HIDDEN, o)))))
                }
        }
        ,
        n._getParentFromElement = function(n) {
            var t, r = i.getSelectorFromElement(n);
            return r && (t = document.querySelector(r)),
            t || n.parentNode
        }
        ,
        n._dataApiKeydownHandler = function(i) {
            var f, e, u, r, o;
            (/input|textarea/i.test(i.target.tagName) ? 32 === i.which || 27 !== i.which && (40 !== i.which && 38 !== i.which || t(i.target).closest(ff).length) : !bh.test(i.which)) || (i.preventDefault(),
            i.stopPropagation(),
            this.disabled || t(this).hasClass(pr)) || (f = n._getParentFromElement(this),
            e = t(f).hasClass(l),
            (e || 27 !== i.which) && (e && (!e || 27 !== i.which && 32 !== i.which) ? (u = [].slice.call(f.querySelectorAll(ic)).filter(function(n) {
                return t(n).is(":visible")
            }),
            0 !== u.length && (r = u.indexOf(i.target),
            38 === i.which && 0 < r && r--,
            40 === i.which && r < u.length - 1 && r++,
            r < 0 && (r = 0),
            u[r].focus())) : (27 === i.which && (o = f.querySelector(wr),
            t(o).trigger("focus")),
            t(this).trigger("click"))))
        }
        ,
        c(n, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }, {
            key: "Default",
            get: function() {
                return hc
            }
        }, {
            key: "DefaultType",
            get: function() {
                return cc
            }
        }]),
        n
    }();
    t(document).on(s.KEYDOWN_DATA_API, wr, k._dataApiKeydownHandler).on(s.KEYDOWN_DATA_API, ff, k._dataApiKeydownHandler).on(s.CLICK_DATA_API + " " + s.KEYUP_DATA_API, k._clearMenus).on(s.CLICK_DATA_API, wr, function(n) {
        n.preventDefault();
        n.stopPropagation();
        k._jQueryInterface.call(t(this), "toggle")
    }).on(s.CLICK_DATA_API, ".dropdown form", function(n) {
        n.stopPropagation()
    });
    t.fn[pt] = k._jQueryInterface;
    t.fn[pt].Constructor = k;
    t.fn[pt].noConflict = function() {
        return t.fn[pt] = wh,
        k._jQueryInterface
    }
    ;
    var wt = "modal"
      , vi = "bs.modal"
      , h = "." + vi
      , lc = t.fn[wt]
      , ef = {
        backdrop: !0,
        keyboard: !0,
        focus: !0,
        show: !0
    }
      , ac = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean"
    }
      , r = {
        HIDE: "hide" + h,
        HIDE_PREVENTED: "hidePrevented" + h,
        HIDDEN: "hidden" + h,
        SHOW: "show" + h,
        SHOWN: "shown" + h,
        FOCUSIN: "focusin" + h,
        RESIZE: "resize" + h,
        CLICK_DISMISS: "click.dismiss" + h,
        KEYDOWN_DISMISS: "keydown.dismiss" + h,
        MOUSEUP_DISMISS: "mouseup.dismiss" + h,
        MOUSEDOWN_DISMISS: "mousedown.dismiss" + h,
        CLICK_DATA_API: "click" + h + ".data-api"
    }
      , vc = "modal-dialog-scrollable"
      , yc = "modal-scrollbar-measure"
      , pc = "modal-backdrop"
      , ke = "modal-open"
      , bt = "fade"
      , br = "show"
      , de = "modal-static"
      , wc = ".modal-dialog"
      , bc = ".modal-body"
      , kc = '[data-dismiss="modal"]'
      , ge = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
      , no = ".sticky-top"
      , yi = function() {
        function f(n, t) {
            this._config = this._getConfig(t);
            this._element = n;
            this._dialog = n.querySelector(wc);
            this._backdrop = null;
            this._isShown = !1;
            this._isBodyOverflowing = !1;
            this._ignoreBackdropClick = !1;
            this._isTransitioning = !1;
            this._scrollbarWidth = 0
        }
        var n = f.prototype;
        return n.toggle = function(n) {
            return this._isShown ? this.hide() : this.show(n)
        }
        ,
        n.show = function(n) {
            var i = this, u;
            this._isShown || this._isTransitioning || (t(this._element).hasClass(bt) && (this._isTransitioning = !0),
            u = t.Event(r.SHOW, {
                relatedTarget: n
            }),
            t(this._element).trigger(u),
            this._isShown || u.isDefaultPrevented() || (this._isShown = !0,
            this._checkScrollbar(),
            this._setScrollbar(),
            this._adjustDialog(),
            this._setEscapeEvent(),
            this._setResizeEvent(),
            t(this._element).on(r.CLICK_DISMISS, kc, function(n) {
                return i.hide(n)
            }),
            t(this._dialog).on(r.MOUSEDOWN_DISMISS, function() {
                t(i._element).one(r.MOUSEUP_DISMISS, function(n) {
                    t(n.target).is(i._element) && (i._ignoreBackdropClick = !0)
                })
            }),
            this._showBackdrop(function() {
                return i._showElement(n)
            })))
        }
        ,
        n.hide = function(n) {
            var o = this, u, f, e;
            (n && n.preventDefault(),
            this._isShown && !this._isTransitioning) && (u = t.Event(r.HIDE),
            (t(this._element).trigger(u),
            this._isShown && !u.isDefaultPrevented()) && (this._isShown = !1,
            f = t(this._element).hasClass(bt),
            (f && (this._isTransitioning = !0),
            this._setEscapeEvent(),
            this._setResizeEvent(),
            t(document).off(r.FOCUSIN),
            t(this._element).removeClass(br),
            t(this._element).off(r.CLICK_DISMISS),
            t(this._dialog).off(r.MOUSEDOWN_DISMISS),
            f) ? (e = i.getTransitionDurationFromElement(this._element),
            t(this._element).one(i.TRANSITION_END, function(n) {
                return o._hideModal(n)
            }).emulateTransitionEnd(e)) : this._hideModal()))
        }
        ,
        n.dispose = function() {
            [window, this._element, this._dialog].forEach(function(n) {
                return t(n).off(h)
            });
            t(document).off(r.FOCUSIN);
            t.removeData(this._element, vi);
            this._config = null;
            this._element = null;
            this._dialog = null;
            this._backdrop = null;
            this._isShown = null;
            this._isBodyOverflowing = null;
            this._ignoreBackdropClick = null;
            this._isTransitioning = null;
            this._scrollbarWidth = null
        }
        ,
        n.handleUpdate = function() {
            this._adjustDialog()
        }
        ,
        n._getConfig = function(n) {
            return n = u({}, ef, {}, n),
            i.typeCheckConfig(wt, n, ac),
            n
        }
        ,
        n._triggerBackdropTransition = function() {
            var f = this, n, u;
            if ("static" === this._config.backdrop) {
                if (n = t.Event(r.HIDE_PREVENTED),
                t(this._element).trigger(n),
                n.defaultPrevented)
                    return;
                this._element.classList.add(de);
                u = i.getTransitionDurationFromElement(this._element);
                t(this._element).one(i.TRANSITION_END, function() {
                    f._element.classList.remove(de)
                }).emulateTransitionEnd(u);
                this._element.focus()
            } else
                this.hide()
        }
        ,
        n._showElement = function(n) {
            function o() {
                u._config.focus && u._element.focus();
                u._isTransitioning = !1;
                t(u._element).trigger(s)
            }
            var u = this, f = t(this._element).hasClass(bt), e = this._dialog ? this._dialog.querySelector(bc) : null, s, h;
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element);
            this._element.style.display = "block";
            this._element.removeAttribute("aria-hidden");
            this._element.setAttribute("aria-modal", !0);
            t(this._dialog).hasClass(vc) && e ? e.scrollTop = 0 : this._element.scrollTop = 0;
            f && i.reflow(this._element);
            t(this._element).addClass(br);
            this._config.focus && this._enforceFocus();
            s = t.Event(r.SHOWN, {
                relatedTarget: n
            });
            f ? (h = i.getTransitionDurationFromElement(this._dialog),
            t(this._dialog).one(i.TRANSITION_END, o).emulateTransitionEnd(h)) : o()
        }
        ,
        n._enforceFocus = function() {
            var n = this;
            t(document).off(r.FOCUSIN).on(r.FOCUSIN, function(i) {
                document !== i.target && n._element !== i.target && 0 === t(n._element).has(i.target).length && n._element.focus()
            })
        }
        ,
        n._setEscapeEvent = function() {
            var n = this;
            this._isShown && this._config.keyboard ? t(this._element).on(r.KEYDOWN_DISMISS, function(t) {
                27 === t.which && n._triggerBackdropTransition()
            }) : this._isShown || t(this._element).off(r.KEYDOWN_DISMISS)
        }
        ,
        n._setResizeEvent = function() {
            var n = this;
            this._isShown ? t(window).on(r.RESIZE, function(t) {
                return n.handleUpdate(t)
            }) : t(window).off(r.RESIZE)
        }
        ,
        n._hideModal = function() {
            var n = this;
            this._element.style.display = "none";
            this._element.setAttribute("aria-hidden", !0);
            this._element.removeAttribute("aria-modal");
            this._isTransitioning = !1;
            this._showBackdrop(function() {
                t(document.body).removeClass(ke);
                n._resetAdjustments();
                n._resetScrollbar();
                t(n._element).trigger(r.HIDDEN)
            })
        }
        ,
        n._removeBackdrop = function() {
            this._backdrop && (t(this._backdrop).remove(),
            this._backdrop = null)
        }
        ,
        n._showBackdrop = function(n) {
            var u = this, f = t(this._element).hasClass(bt) ? bt : "", o, e, s;
            if (this._isShown && this._config.backdrop) {
                if (this._backdrop = document.createElement("div"),
                this._backdrop.className = pc,
                f && this._backdrop.classList.add(f),
                t(this._backdrop).appendTo(document.body),
                t(this._element).on(r.CLICK_DISMISS, function(n) {
                    u._ignoreBackdropClick ? u._ignoreBackdropClick = !1 : n.target === n.currentTarget && u._triggerBackdropTransition()
                }),
                f && i.reflow(this._backdrop),
                t(this._backdrop).addClass(br),
                !n)
                    return;
                if (!f)
                    return void n();
                o = i.getTransitionDurationFromElement(this._backdrop);
                t(this._backdrop).one(i.TRANSITION_END, n).emulateTransitionEnd(o)
            } else
                !this._isShown && this._backdrop ? (t(this._backdrop).removeClass(br),
                e = function() {
                    u._removeBackdrop();
                    n && n()
                }
                ,
                t(this._element).hasClass(bt) ? (s = i.getTransitionDurationFromElement(this._backdrop),
                t(this._backdrop).one(i.TRANSITION_END, e).emulateTransitionEnd(s)) : e()) : n && n()
        }
        ,
        n._adjustDialog = function() {
            var n = this._element.scrollHeight > document.documentElement.clientHeight;
            !this._isBodyOverflowing && n && (this._element.style.paddingLeft = this._scrollbarWidth + "px");
            this._isBodyOverflowing && !n && (this._element.style.paddingRight = this._scrollbarWidth + "px")
        }
        ,
        n._resetAdjustments = function() {
            this._element.style.paddingLeft = "";
            this._element.style.paddingRight = ""
        }
        ,
        n._checkScrollbar = function() {
            var n = document.body.getBoundingClientRect();
            this._isBodyOverflowing = n.left + n.right < window.innerWidth;
            this._scrollbarWidth = this._getScrollbarWidth()
        }
        ,
        n._setScrollbar = function() {
            var n = this, i, r, u, f;
            this._isBodyOverflowing && (i = [].slice.call(document.querySelectorAll(ge)),
            r = [].slice.call(document.querySelectorAll(no)),
            t(i).each(function(i, r) {
                var u = r.style.paddingRight
                  , f = t(r).css("padding-right");
                t(r).data("padding-right", u).css("padding-right", parseFloat(f) + n._scrollbarWidth + "px")
            }),
            t(r).each(function(i, r) {
                var u = r.style.marginRight
                  , f = t(r).css("margin-right");
                t(r).data("margin-right", u).css("margin-right", parseFloat(f) - n._scrollbarWidth + "px")
            }),
            u = document.body.style.paddingRight,
            f = t(document.body).css("padding-right"),
            t(document.body).data("padding-right", u).css("padding-right", parseFloat(f) + this._scrollbarWidth + "px"));
            t(document.body).addClass(ke)
        }
        ,
        n._resetScrollbar = function() {
            var r = [].slice.call(document.querySelectorAll(ge)), n, i;
            t(r).each(function(n, i) {
                var r = t(i).data("padding-right");
                t(i).removeData("padding-right");
                i.style.paddingRight = r || ""
            });
            n = [].slice.call(document.querySelectorAll("" + no));
            t(n).each(function(n, i) {
                var r = t(i).data("margin-right");
                "undefined" != typeof r && t(i).css("margin-right", r).removeData("margin-right")
            });
            i = t(document.body).data("padding-right");
            t(document.body).removeData("padding-right");
            document.body.style.paddingRight = i || ""
        }
        ,
        n._getScrollbarWidth = function() {
            var n = document.createElement("div"), t;
            return n.className = yc,
            document.body.appendChild(n),
            t = n.getBoundingClientRect().width - n.clientWidth,
            document.body.removeChild(n),
            t
        }
        ,
        f._jQueryInterface = function(n, i) {
            return this.each(function() {
                var r = t(this).data(vi)
                  , e = u({}, ef, {}, t(this).data(), {}, "object" == typeof n && n ? n : {});
                if (r || (r = new f(this,e),
                t(this).data(vi, r)),
                "string" == typeof n) {
                    if ("undefined" == typeof r[n])
                        throw new TypeError('No method named "' + n + '"');
                    r[n](i)
                } else
                    e.show && r.show(i)
            })
        }
        ,
        c(f, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }, {
            key: "Default",
            get: function() {
                return ef
            }
        }]),
        f
    }();
    t(document).on(r.CLICK_DATA_API, '[data-toggle="modal"]', function(n) {
        var f, e = this, o = i.getSelectorFromElement(this), s, h;
        o && (f = document.querySelector(o));
        s = t(f).data(vi) ? "toggle" : u({}, t(f).data(), {}, t(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || n.preventDefault();
        h = t(f).one(r.SHOW, function(n) {
            n.isDefaultPrevented() || h.one(r.HIDDEN, function() {
                t(e).is(":visible") && e.focus()
            })
        });
        yi._jQueryInterface.call(t(f), s, this)
    });
    t.fn[wt] = yi._jQueryInterface;
    t.fn[wt].Constructor = yi;
    t.fn[wt].noConflict = function() {
        return t.fn[wt] = lc,
        yi._jQueryInterface
    }
    ;
    var dc = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]
      , gc = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi
      , nl = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
    var it = "tooltip"
      , kr = "bs.tooltip"
      , a = "." + kr
      , tl = t.fn[it]
      , io = "bs-tooltip"
      , il = new RegExp("(^|\\s)" + io + "\\S+","g")
      , rl = ["sanitize", "whiteList", "sanitizeFn"]
      , ul = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(number|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacement: "(string|array)",
        boundary: "(string|element)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        whiteList: "object",
        popperConfig: "(null|object)"
    }
      , fl = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: "right",
        BOTTOM: "bottom",
        LEFT: "left"
    }
      , el = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="arrow"><\/div><div class="tooltip-inner"><\/div><\/div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: 0,
        container: !1,
        fallbackPlacement: "flip",
        boundary: "scrollParent",
        sanitize: !0,
        sanitizeFn: null,
        whiteList: {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        },
        popperConfig: null
    }
      , pi = "show"
      , of = "out"
      , ol = {
        HIDE: "hide" + a,
        HIDDEN: "hidden" + a,
        SHOW: "show" + a,
        SHOWN: "shown" + a,
        INSERTED: "inserted" + a,
        CLICK: "click" + a,
        FOCUSIN: "focusin" + a,
        FOCUSOUT: "focusout" + a,
        MOUSEENTER: "mouseenter" + a,
        MOUSELEAVE: "mouseleave" + a
    }
      , wi = "fade"
      , bi = "show"
      , sl = ".tooltip-inner"
      , hl = ".arrow"
      , ki = "hover"
      , sf = "focus"
      , cl = "click"
      , ll = "manual"
      , rt = function() {
        function r(n, t) {
            if ("undefined" == typeof b)
                throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
            this._isEnabled = !0;
            this._timeout = 0;
            this._hoverState = "";
            this._activeTrigger = {};
            this._popper = null;
            this.element = n;
            this.config = this._getConfig(t);
            this.tip = null;
            this._setListeners()
        }
        var n = r.prototype;
        return n.enable = function() {
            this._isEnabled = !0
        }
        ,
        n.disable = function() {
            this._isEnabled = !1
        }
        ,
        n.toggleEnabled = function() {
            this._isEnabled = !this._isEnabled
        }
        ,
        n.toggle = function(n) {
            if (this._isEnabled)
                if (n) {
                    var r = this.constructor.DATA_KEY
                      , i = t(n.currentTarget).data(r);
                    i || (i = new this.constructor(n.currentTarget,this._getDelegateConfig()),
                    t(n.currentTarget).data(r, i));
                    i._activeTrigger.click = !i._activeTrigger.click;
                    i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                } else {
                    if (t(this.getTipElement()).hasClass(bi))
                        return void this._leave(null, this);
                    this._enter(null, this)
                }
        }
        ,
        n.dispose = function() {
            clearTimeout(this._timeout);
            t.removeData(this.element, this.constructor.DATA_KEY);
            t(this.element).off(this.constructor.EVENT_KEY);
            t(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler);
            this.tip && t(this.tip).remove();
            this._isEnabled = null;
            this._timeout = null;
            this._hoverState = null;
            this._activeTrigger = null;
            this._popper && this._popper.destroy();
            this._popper = null;
            this.element = null;
            this.config = null;
            this.tip = null
        }
        ,
        n.show = function() {
            var n = this, u, f, h, r, e, c, o, l, s, a;
            if ("none" === t(this.element).css("display"))
                throw new Error("Please use show on visible elements");
            if (u = t.Event(this.constructor.Event.SHOW),
            this.isWithContent() && this._isEnabled) {
                if (t(this.element).trigger(u),
                f = i.findShadowRoot(this.element),
                h = t.contains(null !== f ? f : this.element.ownerDocument.documentElement, this.element),
                u.isDefaultPrevented() || !h)
                    return;
                r = this.getTipElement();
                e = i.getUID(this.constructor.NAME);
                r.setAttribute("id", e);
                this.element.setAttribute("aria-describedby", e);
                this.setContent();
                this.config.animation && t(r).addClass(wi);
                c = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement;
                o = this._getAttachment(c);
                this.addAttachmentClass(o);
                l = this._getContainer();
                t(r).data(this.constructor.DATA_KEY, this);
                t.contains(this.element.ownerDocument.documentElement, this.tip) || t(r).appendTo(l);
                t(this.element).trigger(this.constructor.Event.INSERTED);
                this._popper = new b(this.element,r,this._getPopperConfig(o));
                t(r).addClass(bi);
                "ontouchstart"in document.documentElement && t(document.body).children().on("mouseover", null, t.noop);
                s = function() {
                    n.config.animation && n._fixTransition();
                    var i = n._hoverState;
                    n._hoverState = null;
                    t(n.element).trigger(n.constructor.Event.SHOWN);
                    i === of && n._leave(null, n)
                }
                ;
                t(this.tip).hasClass(wi) ? (a = i.getTransitionDurationFromElement(this.tip),
                t(this.tip).one(i.TRANSITION_END, s).emulateTransitionEnd(a)) : s()
            }
        }
        ,
        n.hide = function(n) {
            function f() {
                r._hoverState !== pi && u.parentNode && u.parentNode.removeChild(u);
                r._cleanTipClass();
                r.element.removeAttribute("aria-describedby");
                t(r.element).trigger(r.constructor.Event.HIDDEN);
                null !== r._popper && r._popper.destroy();
                n && n()
            }
            var r = this, u = this.getTipElement(), e = t.Event(this.constructor.Event.HIDE), o;
            (t(this.element).trigger(e),
            e.isDefaultPrevented()) || ((t(u).removeClass(bi),
            "ontouchstart"in document.documentElement && t(document.body).children().off("mouseover", null, t.noop),
            this._activeTrigger[cl] = !1,
            this._activeTrigger[sf] = !1,
            this._activeTrigger[ki] = !1,
            t(this.tip).hasClass(wi)) ? (o = i.getTransitionDurationFromElement(u),
            t(u).one(i.TRANSITION_END, f).emulateTransitionEnd(o)) : f(),
            this._hoverState = "")
        }
        ,
        n.update = function() {
            null !== this._popper && this._popper.scheduleUpdate()
        }
        ,
        n.isWithContent = function() {
            return Boolean(this.getTitle())
        }
        ,
        n.addAttachmentClass = function(n) {
            t(this.getTipElement()).addClass(io + "-" + n)
        }
        ,
        n.getTipElement = function() {
            return this.tip = this.tip || t(this.config.template)[0],
            this.tip
        }
        ,
        n.setContent = function() {
            var n = this.getTipElement();
            this.setElementContent(t(n.querySelectorAll(sl)), this.getTitle());
            t(n).removeClass(wi + " " + bi)
        }
        ,
        n.setElementContent = function(n, i) {
            "object" != typeof i || !i.nodeType && !i.jquery ? this.config.html ? (this.config.sanitize && (i = to(i, this.config.whiteList, this.config.sanitizeFn)),
            n.html(i)) : n.text(i) : this.config.html ? t(i).parent().is(n) || n.empty().append(i) : n.text(t(i).text())
        }
        ,
        n.getTitle = function() {
            var n = this.element.getAttribute("data-original-title");
            return n || ("function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title)
        }
        ,
        n._getPopperConfig = function(n) {
            var t = this;
            return u({}, {
                placement: n,
                modifiers: {
                    offset: this._getOffset(),
                    flip: {
                        behavior: this.config.fallbackPlacement
                    },
                    arrow: {
                        element: hl
                    },
                    preventOverflow: {
                        boundariesElement: this.config.boundary
                    }
                },
                onCreate: function(n) {
                    n.originalPlacement !== n.placement && t._handlePopperPlacementChange(n)
                },
                onUpdate: function(n) {
                    return t._handlePopperPlacementChange(n)
                }
            }, {}, this.config.popperConfig)
        }
        ,
        n._getOffset = function() {
            var t = this
              , n = {};
            return "function" == typeof this.config.offset ? n.fn = function(n) {
                return n.offsets = u({}, n.offsets, {}, t.config.offset(n.offsets, t.element) || {}),
                n
            }
            : n.offset = this.config.offset,
            n
        }
        ,
        n._getContainer = function() {
            return !1 === this.config.container ? document.body : i.isElement(this.config.container) ? t(this.config.container) : t(document).find(this.config.container)
        }
        ,
        n._getAttachment = function(n) {
            return fl[n.toUpperCase()]
        }
        ,
        n._setListeners = function() {
            var n = this;
            this.config.trigger.split(" ").forEach(function(i) {
                if ("click" === i)
                    t(n.element).on(n.constructor.Event.CLICK, n.config.selector, function(t) {
                        return n.toggle(t)
                    });
                else if (i !== ll) {
                    var r = i === ki ? n.constructor.Event.MOUSEENTER : n.constructor.Event.FOCUSIN
                      , u = i === ki ? n.constructor.Event.MOUSELEAVE : n.constructor.Event.FOCUSOUT;
                    t(n.element).on(r, n.config.selector, function(t) {
                        return n._enter(t)
                    }).on(u, n.config.selector, function(t) {
                        return n._leave(t)
                    })
                }
            });
            this._hideModalHandler = function() {
                n.element && n.hide()
            }
            ;
            t(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler);
            this.config.selector ? this.config = u({}, this.config, {
                trigger: "manual",
                selector: ""
            }) : this._fixTitle()
        }
        ,
        n._fixTitle = function() {
            var n = typeof this.element.getAttribute("data-original-title");
            (this.element.getAttribute("title") || "string" != n) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""),
            this.element.setAttribute("title", ""))
        }
        ,
        n._enter = function(n, i) {
            var r = this.constructor.DATA_KEY;
            (i = i || t(n.currentTarget).data(r)) || (i = new this.constructor(n.currentTarget,this._getDelegateConfig()),
            t(n.currentTarget).data(r, i));
            n && (i._activeTrigger["focusin" === n.type ? sf : ki] = !0);
            t(i.getTipElement()).hasClass(bi) || i._hoverState === pi ? i._hoverState = pi : (clearTimeout(i._timeout),
            i._hoverState = pi,
            i.config.delay && i.config.delay.show ? i._timeout = setTimeout(function() {
                i._hoverState === pi && i.show()
            }, i.config.delay.show) : i.show())
        }
        ,
        n._leave = function(n, i) {
            var r = this.constructor.DATA_KEY;
            (i = i || t(n.currentTarget).data(r)) || (i = new this.constructor(n.currentTarget,this._getDelegateConfig()),
            t(n.currentTarget).data(r, i));
            n && (i._activeTrigger["focusout" === n.type ? sf : ki] = !1);
            i._isWithActiveTrigger() || (clearTimeout(i._timeout),
            i._hoverState = of,
            i.config.delay && i.config.delay.hide ? i._timeout = setTimeout(function() {
                i._hoverState === of && i.hide()
            }, i.config.delay.hide) : i.hide())
        }
        ,
        n._isWithActiveTrigger = function() {
            for (var n in this._activeTrigger)
                if (this._activeTrigger[n])
                    return !0;
            return !1
        }
        ,
        n._getConfig = function(n) {
            var r = t(this.element).data();
            return Object.keys(r).forEach(function(n) {
                -1 !== rl.indexOf(n) && delete r[n]
            }),
            "number" == typeof (n = u({}, this.constructor.Default, {}, r, {}, "object" == typeof n && n ? n : {})).delay && (n.delay = {
                show: n.delay,
                hide: n.delay
            }),
            "number" == typeof n.title && (n.title = n.title.toString()),
            "number" == typeof n.content && (n.content = n.content.toString()),
            i.typeCheckConfig(it, n, this.constructor.DefaultType),
            n.sanitize && (n.template = to(n.template, n.whiteList, n.sanitizeFn)),
            n
        }
        ,
        n._getDelegateConfig = function() {
            var t = {}, n;
            if (this.config)
                for (n in this.config)
                    this.constructor.Default[n] !== this.config[n] && (t[n] = this.config[n]);
            return t
        }
        ,
        n._cleanTipClass = function() {
            var i = t(this.getTipElement())
              , n = i.attr("class").match(il);
            null !== n && n.length && i.removeClass(n.join(""))
        }
        ,
        n._handlePopperPlacementChange = function(n) {
            var t = n.instance;
            this.tip = t.popper;
            this._cleanTipClass();
            this.addAttachmentClass(this._getAttachment(n.placement))
        }
        ,
        n._fixTransition = function() {
            var n = this.getTipElement()
              , i = this.config.animation;
            null === n.getAttribute("x-placement") && (t(n).removeClass(wi),
            this.config.animation = !1,
            this.hide(),
            this.show(),
            this.config.animation = i)
        }
        ,
        r._jQueryInterface = function(n) {
            return this.each(function() {
                var i = t(this).data(kr)
                  , u = "object" == typeof n && n;
                if ((i || !/dispose|hide/.test(n)) && (i || (i = new r(this,u),
                t(this).data(kr, i)),
                "string" == typeof n)) {
                    if ("undefined" == typeof i[n])
                        throw new TypeError('No method named "' + n + '"');
                    i[n]()
                }
            })
        }
        ,
        c(r, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }, {
            key: "Default",
            get: function() {
                return el
            }
        }, {
            key: "NAME",
            get: function() {
                return it
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return kr
            }
        }, {
            key: "Event",
            get: function() {
                return ol
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return a
            }
        }, {
            key: "DefaultType",
            get: function() {
                return ul
            }
        }]),
        r
    }();
    t.fn[it] = rt._jQueryInterface;
    t.fn[it].Constructor = rt;
    t.fn[it].noConflict = function() {
        return t.fn[it] = tl,
        rt._jQueryInterface
    }
    ;
    var kt = "popover"
      , dr = "bs.popover"
      , v = "." + dr
      , al = t.fn[kt]
      , ro = "bs-popover"
      , vl = new RegExp("(^|\\s)" + ro + "\\S+","g")
      , yl = u({}, rt.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"><\/div><h3 class="popover-header"><\/h3><div class="popover-body"><\/div><\/div>'
    })
      , pl = u({}, rt.DefaultType, {
        content: "(string|element|function)"
    })
      , wl = "fade"
      , bl = "show"
      , kl = ".popover-header"
      , dl = ".popover-body"
      , gl = {
        HIDE: "hide" + v,
        HIDDEN: "hidden" + v,
        SHOW: "show" + v,
        SHOWN: "shown" + v,
        INSERTED: "inserted" + v,
        CLICK: "click" + v,
        FOCUSIN: "focusin" + v,
        FOCUSOUT: "focusout" + v,
        MOUSEENTER: "mouseenter" + v,
        MOUSELEAVE: "mouseleave" + v
    }
      , gr = function(n) {
        function i() {
            return n.apply(this, arguments) || this
        }
        !function(n, t) {
            n.prototype = Object.create(t.prototype);
            (n.prototype.constructor = n).__proto__ = t
        }(i, n);
        var r = i.prototype;
        return r.isWithContent = function() {
            return this.getTitle() || this._getContent()
        }
        ,
        r.addAttachmentClass = function(n) {
            t(this.getTipElement()).addClass(ro + "-" + n)
        }
        ,
        r.getTipElement = function() {
            return this.tip = this.tip || t(this.config.template)[0],
            this.tip
        }
        ,
        r.setContent = function() {
            var i = t(this.getTipElement()), n;
            this.setElementContent(i.find(kl), this.getTitle());
            n = this._getContent();
            "function" == typeof n && (n = n.call(this.element));
            this.setElementContent(i.find(dl), n);
            i.removeClass(wl + " " + bl)
        }
        ,
        r._getContent = function() {
            return this.element.getAttribute("data-content") || this.config.content
        }
        ,
        r._cleanTipClass = function() {
            var i = t(this.getTipElement())
              , n = i.attr("class").match(vl);
            null !== n && 0 < n.length && i.removeClass(n.join(""))
        }
        ,
        i._jQueryInterface = function(n) {
            return this.each(function() {
                var r = t(this).data(dr)
                  , u = "object" == typeof n ? n : null;
                if ((r || !/dispose|hide/.test(n)) && (r || (r = new i(this,u),
                t(this).data(dr, r)),
                "string" == typeof n)) {
                    if ("undefined" == typeof r[n])
                        throw new TypeError('No method named "' + n + '"');
                    r[n]()
                }
            })
        }
        ,
        c(i, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }, {
            key: "Default",
            get: function() {
                return yl
            }
        }, {
            key: "NAME",
            get: function() {
                return kt
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return dr
            }
        }, {
            key: "Event",
            get: function() {
                return gl
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return v
            }
        }, {
            key: "DefaultType",
            get: function() {
                return pl
            }
        }]),
        i
    }(rt);
    t.fn[kt] = gr._jQueryInterface;
    t.fn[kt].Constructor = gr;
    t.fn[kt].noConflict = function() {
        return t.fn[kt] = al,
        gr._jQueryInterface
    }
    ;
    var ut = "scrollspy"
      , nu = "bs.scrollspy"
      , tu = "." + nu
      , na = t.fn[ut]
      , uo = {
        offset: 10,
        method: "auto",
        target: ""
    }
      , ta = {
        offset: "number",
        method: "string",
        target: "(string|element)"
    }
      , hf = {
        ACTIVATE: "activate" + tu,
        SCROLL: "scroll" + tu,
        LOAD_DATA_API: "load" + tu + ".data-api"
    }
      , ia = "dropdown-item"
      , ft = "active"
      , ra = '[data-spy="scroll"]'
      , fo = ".nav, .list-group"
      , cf = ".nav-link"
      , ua = ".nav-item"
      , eo = ".list-group-item"
      , fa = ".dropdown"
      , ea = ".dropdown-item"
      , oa = ".dropdown-toggle"
      , sa = "offset"
      , oo = "position"
      , di = function() {
        function r(n, i) {
            var r = this;
            this._element = n;
            this._scrollElement = "BODY" === n.tagName ? window : n;
            this._config = this._getConfig(i);
            this._selector = this._config.target + " " + cf + "," + this._config.target + " " + eo + "," + this._config.target + " " + ea;
            this._offsets = [];
            this._targets = [];
            this._activeTarget = null;
            this._scrollHeight = 0;
            t(this._scrollElement).on(hf.SCROLL, function(n) {
                return r._process(n)
            });
            this.refresh();
            this._process()
        }
        var n = r.prototype;
        return n.refresh = function() {
            var n = this
              , u = this._scrollElement === this._scrollElement.window ? sa : oo
              , r = "auto" === this._config.method ? u : this._config.method
              , f = r === oo ? this._getScrollTop() : 0;
            this._offsets = [];
            this._targets = [];
            this._scrollHeight = this._getScrollHeight();
            [].slice.call(document.querySelectorAll(this._selector)).map(function(n) {
                var u, e = i.getSelectorFromElement(n), o;
                return (e && (u = document.querySelector(e)),
                u) && (o = u.getBoundingClientRect(),
                o.width || o.height) ? [t(u)[r]().top + f, e] : null
            }).filter(function(n) {
                return n
            }).sort(function(n, t) {
                return n[0] - t[0]
            }).forEach(function(t) {
                n._offsets.push(t[0]);
                n._targets.push(t[1])
            })
        }
        ,
        n.dispose = function() {
            t.removeData(this._element, nu);
            t(this._scrollElement).off(tu);
            this._element = null;
            this._scrollElement = null;
            this._config = null;
            this._selector = null;
            this._offsets = null;
            this._targets = null;
            this._activeTarget = null;
            this._scrollHeight = null
        }
        ,
        n._getConfig = function(n) {
            if ("string" != typeof (n = u({}, uo, {}, "object" == typeof n && n ? n : {})).target) {
                var r = t(n.target).attr("id");
                r || (r = i.getUID(ut),
                t(n.target).attr("id", r));
                n.target = "#" + r
            }
            return i.typeCheckConfig(ut, n, ta),
            n
        }
        ,
        n._getScrollTop = function() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }
        ,
        n._getScrollHeight = function() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }
        ,
        n._getOffsetHeight = function() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }
        ,
        n._process = function() {
            var t = this._getScrollTop() + this._config.offset, r = this._getScrollHeight(), u = this._config.offset + r - this._getOffsetHeight(), i, n;
            if (this._scrollHeight !== r && this.refresh(),
            u <= t)
                i = this._targets[this._targets.length - 1],
                this._activeTarget !== i && this._activate(i);
            else {
                if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0])
                    return this._activeTarget = null,
                    void this._clear();
                for (n = this._offsets.length; n--; )
                    this._activeTarget !== this._targets[n] && t >= this._offsets[n] && ("undefined" == typeof this._offsets[n + 1] || t < this._offsets[n + 1]) && this._activate(this._targets[n])
            }
        }
        ,
        n._activate = function(n) {
            this._activeTarget = n;
            this._clear();
            var r = this._selector.split(",").map(function(t) {
                return t + '[data-target="' + n + '"],' + t + '[href="' + n + '"]'
            })
              , i = t([].slice.call(document.querySelectorAll(r.join(","))));
            i.hasClass(ia) ? (i.closest(fa).find(oa).addClass(ft),
            i.addClass(ft)) : (i.addClass(ft),
            i.parents(fo).prev(cf + ", " + eo).addClass(ft),
            i.parents(fo).prev(ua).children(cf).addClass(ft));
            t(this._scrollElement).trigger(hf.ACTIVATE, {
                relatedTarget: n
            })
        }
        ,
        n._clear = function() {
            [].slice.call(document.querySelectorAll(this._selector)).filter(function(n) {
                return n.classList.contains(ft)
            }).forEach(function(n) {
                return n.classList.remove(ft)
            })
        }
        ,
        r._jQueryInterface = function(n) {
            return this.each(function() {
                var i = t(this).data(nu);
                if (i || (i = new r(this,"object" == typeof n && n),
                t(this).data(nu, i)),
                "string" == typeof n) {
                    if ("undefined" == typeof i[n])
                        throw new TypeError('No method named "' + n + '"');
                    i[n]()
                }
            })
        }
        ,
        c(r, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }, {
            key: "Default",
            get: function() {
                return uo
            }
        }]),
        r
    }();
    t(window).on(hf.LOAD_DATA_API, function() {
        for (var r, n = [].slice.call(document.querySelectorAll(ra)), i = n.length; i--; )
            r = t(n[i]),
            di._jQueryInterface.call(r, r.data())
    });
    t.fn[ut] = di._jQueryInterface;
    t.fn[ut].Constructor = di;
    t.fn[ut].noConflict = function() {
        return t.fn[ut] = na,
        di._jQueryInterface
    }
    ;
    var iu = "bs.tab"
      , gi = "." + iu
      , ha = t.fn.tab
      , nr = {
        HIDE: "hide" + gi,
        HIDDEN: "hidden" + gi,
        SHOW: "show" + gi,
        SHOWN: "shown" + gi,
        CLICK_DATA_API: "click" + gi + ".data-api"
    }
      , ca = "dropdown-menu"
      , tr = "active"
      , la = "disabled"
      , so = "fade"
      , ho = "show"
      , aa = ".dropdown"
      , va = ".nav, .list-group"
      , co = ".active"
      , lo = "> li > .active"
      , ya = ".dropdown-toggle"
      , pa = "> .dropdown-menu .active"
      , ir = function() {
        function n(n) {
            this._element = n
        }
        var r = n.prototype;
        return r.show = function() {
            var h = this, u, n, r, f, c, e, o, s;
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(tr) || t(this._element).hasClass(la) || (r = t(this._element).closest(va)[0],
            f = i.getSelectorFromElement(this._element),
            r && (c = "UL" === r.nodeName || "OL" === r.nodeName ? lo : co,
            n = (n = t.makeArray(t(r).find(c)))[n.length - 1]),
            e = t.Event(nr.HIDE, {
                relatedTarget: this._element
            }),
            o = t.Event(nr.SHOW, {
                relatedTarget: n
            }),
            (n && t(n).trigger(e),
            t(this._element).trigger(o),
            o.isDefaultPrevented() || e.isDefaultPrevented()) || (f && (u = document.querySelector(f)),
            this._activate(this._element, r),
            s = function() {
                var i = t.Event(nr.HIDDEN, {
                    relatedTarget: h._element
                })
                  , r = t.Event(nr.SHOWN, {
                    relatedTarget: n
                });
                t(n).trigger(i);
                t(h._element).trigger(r)
            }
            ,
            u ? this._activate(u, u.parentNode, s) : s()))
        }
        ,
        r.dispose = function() {
            t.removeData(this._element, iu);
            this._element = null
        }
        ,
        r._activate = function(n, r, u) {
            function e() {
                return s._transitionComplete(n, f, u)
            }
            var s = this, f = (!r || "UL" !== r.nodeName && "OL" !== r.nodeName ? t(r).children(co) : t(r).find(lo))[0], h = u && f && t(f).hasClass(so), o;
            f && h ? (o = i.getTransitionDurationFromElement(f),
            t(f).removeClass(ho).one(i.TRANSITION_END, e).emulateTransitionEnd(o)) : e()
        }
        ,
        r._transitionComplete = function(n, r, u) {
            var f, e, o;
            r && (t(r).removeClass(tr),
            f = t(r.parentNode).find(pa)[0],
            f && t(f).removeClass(tr),
            "tab" === r.getAttribute("role") && r.setAttribute("aria-selected", !1));
            (t(n).addClass(tr),
            "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !0),
            i.reflow(n),
            n.classList.contains(so) && n.classList.add(ho),
            n.parentNode && t(n.parentNode).hasClass(ca)) && (e = t(n).closest(aa)[0],
            e && (o = [].slice.call(e.querySelectorAll(ya)),
            t(o).addClass(tr)),
            n.setAttribute("aria-expanded", !0));
            u && u()
        }
        ,
        n._jQueryInterface = function(i) {
            return this.each(function() {
                var u = t(this)
                  , r = u.data(iu);
                if (r || (r = new n(this),
                u.data(iu, r)),
                "string" == typeof i) {
                    if ("undefined" == typeof r[i])
                        throw new TypeError('No method named "' + i + '"');
                    r[i]()
                }
            })
        }
        ,
        c(n, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }]),
        n
    }();
    t(document).on(nr.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function(n) {
        n.preventDefault();
        ir._jQueryInterface.call(t(this), "show")
    });
    t.fn.tab = ir._jQueryInterface;
    t.fn.tab.Constructor = ir;
    t.fn.tab.noConflict = function() {
        return t.fn.tab = ha,
        ir._jQueryInterface
    }
    ;
    var dt = "toast"
      , ru = "bs.toast"
      , rr = "." + ru
      , wa = t.fn[dt]
      , gt = {
        CLICK_DISMISS: "click.dismiss" + rr,
        HIDE: "hide" + rr,
        HIDDEN: "hidden" + rr,
        SHOW: "show" + rr,
        SHOWN: "shown" + rr
    }
      , ba = "fade"
      , ao = "hide"
      , ur = "show"
      , vo = "showing"
      , ka = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }
      , yo = {
        animation: !0,
        autohide: !0,
        delay: 500
    }
      , da = '[data-dismiss="toast"]'
      , uu = function() {
        function r(n, t) {
            this._element = n;
            this._config = this._getConfig(t);
            this._timeout = null;
            this._setListeners()
        }
        var n = r.prototype;
        return n.show = function() {
            var n = this, u = t.Event(gt.SHOW), r, f;
            (t(this._element).trigger(u),
            u.isDefaultPrevented()) || (this._config.animation && this._element.classList.add(ba),
            r = function() {
                n._element.classList.remove(vo);
                n._element.classList.add(ur);
                t(n._element).trigger(gt.SHOWN);
                n._config.autohide && (n._timeout = setTimeout(function() {
                    n.hide()
                }, n._config.delay))
            }
            ,
            (this._element.classList.remove(ao),
            i.reflow(this._element),
            this._element.classList.add(vo),
            this._config.animation) ? (f = i.getTransitionDurationFromElement(this._element),
            t(this._element).one(i.TRANSITION_END, r).emulateTransitionEnd(f)) : r())
        }
        ,
        n.hide = function() {
            if (this._element.classList.contains(ur)) {
                var n = t.Event(gt.HIDE);
                t(this._element).trigger(n);
                n.isDefaultPrevented() || this._close()
            }
        }
        ,
        n.dispose = function() {
            clearTimeout(this._timeout);
            this._timeout = null;
            this._element.classList.contains(ur) && this._element.classList.remove(ur);
            t(this._element).off(gt.CLICK_DISMISS);
            t.removeData(this._element, ru);
            this._element = null;
            this._config = null
        }
        ,
        n._getConfig = function(n) {
            return n = u({}, yo, {}, t(this._element).data(), {}, "object" == typeof n && n ? n : {}),
            i.typeCheckConfig(dt, n, this.constructor.DefaultType),
            n
        }
        ,
        n._setListeners = function() {
            var n = this;
            t(this._element).on(gt.CLICK_DISMISS, da, function() {
                return n.hide()
            })
        }
        ,
        n._close = function() {
            function n() {
                r._element.classList.add(ao);
                t(r._element).trigger(gt.HIDDEN)
            }
            var r = this, u;
            (this._element.classList.remove(ur),
            this._config.animation) ? (u = i.getTransitionDurationFromElement(this._element),
            t(this._element).one(i.TRANSITION_END, n).emulateTransitionEnd(u)) : n()
        }
        ,
        r._jQueryInterface = function(n) {
            return this.each(function() {
                var u = t(this)
                  , i = u.data(ru);
                if (i || (i = new r(this,"object" == typeof n && n),
                u.data(ru, i)),
                "string" == typeof n) {
                    if ("undefined" == typeof i[n])
                        throw new TypeError('No method named "' + n + '"');
                    i[n](this)
                }
            })
        }
        ,
        c(r, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }, {
            key: "DefaultType",
            get: function() {
                return ka
            }
        }, {
            key: "Default",
            get: function() {
                return yo
            }
        }]),
        r
    }();
    t.fn[dt] = uu._jQueryInterface;
    t.fn[dt].Constructor = uu;
    t.fn[dt].noConflict = function() {
        return t.fn[dt] = wa,
        uu._jQueryInterface
    }
    ;
    n.Alert = et;
    n.Button = ri;
    n.Carousel = st;
    n.Collapse = si;
    n.Dropdown = k;
    n.Modal = yi;
    n.Popover = gr;
    n.Scrollspy = di;
    n.Tab = ir;
    n.Toast = uu;
    n.Tooltip = rt;
    n.Util = i;
    Object.defineProperty(n, "__esModule", {
        value: !0
    })
});
$(function() {
    $('input[data-sc-field-name="txtFamilyName"').length > 0 && $('input[data-sc-field-name="txtFamilyName"').attr("autocomplete", "family-name");
    $('input[data-sc-field-name="txtGivenName"').length > 0 && $('input[data-sc-field-name="txtGivenName"').attr("autocomplete", "given-name");
    $('input[data-sc-field-name="txtName"').length > 0 && $('input[data-sc-field-name="txtName"').attr("autocomplete", "name");
    $('input[data-sc-field-name="txtPhone"').length > 0 && $('input[data-sc-field-name="txtPhone"').attr("autocomplete", "tel");
    $('input[data-sc-field-name="txtEmail"').length > 0 && $('input[data-sc-field-name="txtEmail"').attr("autocomplete", "email");
    $('input[data-sc-field-name="txtPostcode"').length > 0 && $('input[data-sc-field-name="txtPostcode"').attr("autocomplete", "postal-code");
    !0 && $("label[class='p']").hide();
    $("input[type='radio']").focus(function() {
        $(".form-radio-group").removeClass("radio-focus");
        $(this).parent().addClass("radio-focus");
        $(this).val() == "AusIndustry Feedback" && $("select").children("option:first").attr("label", "Please select")
    });
    $("input[type='radio']").blur(function() {
        $(".form-radio-group").removeClass("radio-focus")
    });
    $(":input").on("blur", function() {
        $(this).hasClass("valid") ? $(this).removeClass("error-border") : $(this).attr("data-val-required") != null && $(this).hasClass("input-validation-error") && $(this).addClass("error-border")
    });
    $("form").one("submit", function() {
        $(this).find(".field-validation-error").length > 0 ? $(".field-validation-error").each(function() {
            $(this).parent().find(":input:visible").addClass("error-border")
        }) : $(this).find('input[type="submit"]').attr("disabled", "disabled")
    })
});
bga.createNS("bga.sc.feature.media");
bga.sc.feature.media.playerInfoList = [];
bga.sc.feature.media.transcriptList = [];
bga.sc.feature.media.enlistPlayer = function(n) {
    bga.sc.feature.media.playerInfoList.push({
        id: bga.sc.feature.media.getYTVideoId(n),
        height: "100%",
        width: "100%",
        videoId: n
    })
}
;
bga.sc.feature.media.createPlayer = function(n) {
    var t = new YT.Player(n.id,{
        height: n.height,
        width: n.width,
        videoId: n.videoId,
        playerVars: {
            autoplay: 0,
            mute: 0,
            controls: 1,
            showinfo: 0,
            modestbranding: 1,
            playsinline: 1,
            color: "white",
            rel: 0,
            enablejsapi: 1,
            origin: window.location.origin,
            iv_load_policy: 3
        },
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
        }
    })
}
;
bga.sc.feature.media.playerPlaying = function(n) {
    var t = n.getCurrentTime();
    bga.sc.feature.media.highlightCaptionFromTimestamp(n, t)
}
;
bga.sc.feature.media.playerNotPlaying = function(n) {
    var i = n.playerInfo.videoData.video_id
      , t = bga.sc.feature.media.findItemInArrayById(bga.sc.feature.media.transcriptList, i);
    t && clearTimeout(t.captionTimeout)
}
;
bga.sc.feature.media.findItemInArrayById = function(n, t) {
    var i = $.grep(n, function(n) {
        return n.id === t
    });
    if (i.length >= 1)
        return i[0]
}
;
bga.sc.feature.media.getYTVideoId = function(n) {
    return "video-player-youtube-" + n
}
;
bga.sc.feature.media.isValidVideoId = function(n) {
    return n && n.length > 0
}
;
bga.sc.feature.media.showMediaNotFound = function(n) {
    $("#media-player-not-available-" + n).removeClass("hide");
    $("#media-player-not-available-" + n).css("visibility", "visible");
    $("#media-player-button-" + n).remove();
    $("#media-player-player-" + n).remove();
    $("#media-player-transcript-info-" + n).remove();
    $("#media-player-info-" + n).remove()
}
;
bga.sc.feature.media.showYouTubeVideo = function(n) {
    $("#media-player-not-available-" + n).remove();
    $("#media-player-player-vimeo-" + n).remove()
}
;
bga.sc.feature.media.showVimeoVideo = function(n) {
    $("#media-player-not-available-" + n).remove();
    $("#media-player-button-" + n).remove();
    $("#media-player-player-youtube-" + n).remove();
    $("#media-player-transcript-info-" + n).remove();
    $("#media-player-info-" + n).remove();
    $("#media-player-player-" + n).css("padding-top", "6%")
}
;
bga.sc.feature.media.isValidYouTubeId = function(n) {
    var i = "https://www.youtube.com/watch?v=" + n
      , t = !1;
    return $.getJSON("https://noembed.com/embed", {
        format: "json",
        url: i
    }).done(function(n) {
        t = n && n.html && n.html.length > 0
    }).fail(function() {
        t = !1
    }),
    t
}
;
bga.sc.feature.media.isValidVimeoId = function(n) {
    var i = "https://vimeo.com/" + n
      , t = !1;
    return $.getJSON("https://vimeo.com/api/oembed.json", {
        format: "json",
        url: i
    }).done(function(n) {
        t = n && n.html && n.html.length > 0
    }).fail(function() {
        t = !1
    }),
    t
}
;
bga.sc.feature.media.loadYouTubeBackgroundImage = function(n, t) {
    var i = "https://img.youtube.com/vi/" + n + "/0.jpg";
    t ? $("#media-player-player-" + n).attr("style", "background-image: url(" + t + ");") : $("#media-player-player-" + n).attr("style", "background-image: url(" + i + ");")
}
;
bga.sc.feature.media.loadAndDisplayYouTubeTranscriptText = function(n) {
    var t = "https://video.google.com/timedtext?lang=en-GB&v=" + n;
    $.ajax({
        type: "POST",
        url: t,
        "async": !0,
        dataType: "xml"
    }).done(function(t) {
        if (t)
            bga.sc.feature.media.parseXmlAndDisplayTranscript(t, n),
            $("button[id^='t-" + n + "-']").click(function() {
                var t = $(this).attr("data-timeinseconds");
                bga.sc.feature.media.playVideoFromTime(n, t)
            });
        else {
            var i = "https://video.google.com/timedtext?lang=en&v=" + n;
            $.ajax({
                type: "POST",
                url: i,
                "async": !0,
                dataType: "xml"
            }).done(function(t) {
                bga.sc.feature.media.parseXmlAndDisplayTranscript(t, n);
                $("button[id^='t-" + n + "-']").click(function() {
                    var t = $(this).attr("data-timeinseconds");
                    bga.sc.feature.media.playVideoFromTime(n, t)
                })
            }).fail(function() {
                bga.sc.feature.media.hideTranscriptSection(n)
            })
        }
    }).fail(function() {
        var t = "https://video.google.com/timedtext?lang=en&v=" + n;
        $.ajax({
            type: "POST",
            url: t,
            "async": !0,
            dataType: "xml"
        }).done(function(t) {
            bga.sc.feature.media.parseXmlAndDisplayTranscript(t, n);
            $("button[id^='t-" + n + "-']").click(function() {
                var t = $(this).attr("data-timeinseconds");
                bga.sc.feature.media.playVideoFromTime(n, t)
            })
        }).fail(function() {
            bga.sc.feature.media.hideTranscriptSection(n)
        })
    })
}
;
bga.sc.feature.media.loadYouTubeIframeAPIPlayer = function() {
    var t = document.createElement("script"), n;
    t.src = "https://www.youtube.com/iframe_api";
    n = document.getElementsByTagName("script")[0];
    n.parentNode.insertBefore(t, n)
}
;
bga.sc.feature.media.loadVimeoIframeAPIPlayer = function() {
    var t = document.createElement("script"), n;
    t.src = "https://player.vimeo.com/api/player.js";
    n = document.getElementsByTagName("script")[0];
    n.parentNode.insertBefore(t, n)
}
;
bga.sc.feature.media.toggleTranscript = function(n, t) {
    $("#media-player-transcript-" + t).is(":hidden") ? bga.sc.feature.media.showTranscript(n, t) : bga.sc.feature.media.hideTranscript(n, t)
}
;
bga.sc.feature.media.hideTranscriptSection = function(n) {
    $("#media-player-transcript-info-" + n).hide()
}
;
bga.sc.feature.media.showTranscript = function(n, t) {
    $("#media-player-transcript-" + t).show();
    $("#toggle-transcript-" + t + " > span").html("Close Transcript");
    $("#toggle-transcript-" + t + " > div").addClass("active-expand");
    n.setAttribute("aria-label", "Toggle video transcript, transcript opened")
}
;
bga.sc.feature.media.hideTranscript = function(n, t) {
    $("#media-player-transcript-" + t).hide();
    $("#toggle-transcript-" + t + " > span").html("Open Transcript");
    $("#toggle-transcript-" + t + " > div").removeClass("active-expand");
    n.length == 1 ? n[0].setAttribute("aria-label", "Toggle video transcript, transcript closed") : n.setAttribute("aria-label", "Toggle video transcript, transcript closed")
}
;
bga.sc.feature.media.playVideoFromTime = function(n, t) {
    if (t) {
        t < 1 && (t = 0);
        var i = YT.get(bga.sc.feature.media.getYTVideoId(n));
        i && i.seekTo(t, !0);
        $("#media-player-button-" + n).is(":visible") && $("#media-player-button-" + n).click();
        i.playVideo()
    }
}
;
bga.sc.feature.media.parseXmlAndDisplayTranscript = function(n, t) {
    if (n) {
        var i = "";
        $("#media-player-transcript-info-" + t).show();
        bga.sc.feature.media.transcriptList.push({
            id: t,
            captions: $(n).find("text"),
            currentCaptionIndex: 0,
            nextCaptionIndex: 1,
            captionTimeout: null
        });
        $(n).find("text").each(function(n) {
            i = i + bga.sc.feature.media.constructTranscriptRowHtml($(this), t, n)
        });
        i && $("#media-transcript-content-" + t).append("<div><ul>" + i + "<\/ul><\/div>")
    } else
        bga.sc.feature.media.hideTranscriptSection(t)
}
;
bga.sc.feature.media.constructTranscriptRowHtml = function(n, t, i) {
    var f = n.text(), r = n.attr("start"), u, e;
    return r && r < 1 && (r = 0),
    u = n.attr("dur"),
    u && u < 1 && (u = 0),
    r = Math.floor(r),
    e = bga.sc.global.UI.displayInMMSS(r),
    '<li class="media-transcript-content-line"><button data-timeinseconds="' + r + '" data-duration="' + u + '" id="' + bga.sc.feature.media.getTimeIdFromTimestampIndex(t, i) + '"><p>' + f + "<\/p><\/button><\/li>"
}
;
bga.sc.feature.media.highlightCaptionAndPrepareForNext = function(n) {
    var i = n.playerInfo.videoData.video_id, t = bga.sc.feature.media.findItemInArrayById(bga.sc.feature.media.transcriptList, i), r, u;
    t.currentCaptionIndex != t.nextCaptionIndex && bga.sc.feature.media.clearCurrentHighlighting(i, t.currentCaptionIndex);
    bga.sc.feature.media.highlightNextCaption(i, t.nextCaptionIndex);
    t.currentCaptionIndex = t.nextCaptionIndex;
    t.nextCaptionIndex++;
    r = n.getCurrentTime();
    u = bga.sc.feature.media.calculateTimeout(i, r);
    t.nextCaptionIndex <= t.captions.length && bga.sc.feature.media.setCaptionTimeout(n, u)
}
;
bga.sc.feature.media.highlightCaptionFromTimestamp = function(n, t) {
    var r = n.playerInfo.videoData.video_id
      , i = bga.sc.feature.media.findItemInArrayById(bga.sc.feature.media.transcriptList, r);
    if (i) {
        bga.sc.feature.media.clearCurrentHighlighting(r, i.currentCaptionIndex);
        i.nextCaptionIndex = bga.sc.feature.media.findCaptionIndexFromTimestamp(r, t);
        i.currentCaptionIndex = i.nextCaptionIndex;
        var f = Number(bga.sc.feature.media.getStartTimeFromCaption(r, i.currentCaptionIndex))
          , e = n.getCurrentTime()
          , u = -1;
        t < f ? u = f - e : (bga.sc.feature.media.highlightNextCaption(r, i.nextCaptionIndex),
        u = bga.sc.feature.media.calculateTimeout(r, e));
        i.nextCaptionIndex <= i.captions.length && bga.sc.feature.media.setCaptionTimeout(n, u)
    }
}
;
bga.sc.feature.media.findCaptionIndexFromTimestamp = function(n, t) {
    for (var f = bga.sc.feature.media.findItemInArrayById(bga.sc.feature.media.transcriptList, n), r = 0, u = 0, i = 0, e = f.captions.length; i < e; i++) {
        if (r = Number(bga.sc.feature.media.getStartTimeFromCaption(n, i)),
        u = Number(bga.sc.feature.media.getDurationFromCaption(n, i)),
        t < r && i == 0)
            break;
        if (t >= r && t < r + u)
            break
    }
    return i
}
;
bga.sc.feature.media.clearCurrentHighlighting = function(n, t) {
    var i = bga.sc.feature.media.getTimeIdFromTimestampIndex(n, t);
    $("#" + i).parent().removeClass("media-transcript-active")
}
;
bga.sc.feature.media.highlightNextCaption = function(n, t) {
    var i = bga.sc.feature.media.getTimeIdFromTimestampIndex(n, t), r, u;
    $("#" + i).parent().addClass("media-transcript-active");
    $("#" + i).parent().position() && (r = $("#" + i).parent().position().top,
    u = $("#" + i).parent().parent().parent().parent().scrollTop(),
    $("#" + i).parent().parent().parent().parent().scrollTop(u + r - 30))
}
;
bga.sc.feature.media.calculateTimeout = function(n, t) {
    var i = bga.sc.feature.media.findItemInArrayById(bga.sc.feature.media.transcriptList, n)
      , u = Number(bga.sc.feature.media.getStartTimeFromCaption(n, i.currentCaptionIndex))
      , f = Number(bga.sc.feature.media.getDurationFromCaption(n, i.currentCaptionIndex))
      , r = u - t + f;
    return r >= 0 ? r : 0
}
;
bga.sc.feature.media.setCaptionTimeout = function(n, t) {
    if (!(t < 0)) {
        var r = n.playerInfo.videoData.video_id
          , i = bga.sc.feature.media.findItemInArrayById(bga.sc.feature.media.transcriptList, r);
        i && (clearTimeout(i.captionTimeout),
        i.captionTimeout = setTimeout(function() {
            bga.sc.feature.media.highlightCaptionAndPrepareForNext(n)
        }, t * 1e3))
    }
}
;
bga.sc.feature.media.getStartTimeFromCaption = function(n, t) {
    var i = bga.sc.feature.media.findItemInArrayById(bga.sc.feature.media.transcriptList, n);
    return t >= i.captions.length ? -1 : i.captions[t].getAttribute("start")
}
;
bga.sc.feature.media.getDurationFromCaption = function(n, t) {
    var i = bga.sc.feature.media.findItemInArrayById(bga.sc.feature.media.transcriptList, n);
    return t >= i.captions.length ? -1 : i.captions[t].getAttribute("dur")
}
;
bga.sc.feature.media.getTimeIdFromTimestampIndex = function(n, t) {
    var i = "" + t;
    return "t-" + n + "-" + i
}
;
$(function() {
    $(".dropdown-menu a.dropdown-toggle-custom").on("click", function() {
        var n = $(this), t;
        n.next().hasClass("show") || n.parents(".dropdown-menu").first().find(".show").removeClass("show");
        n.toggleClass("show");
        n.hasClass("show") ? n.attr("aria-expanded", "true") : n.attr("aria-expanded", "false");
        t = n.next(".dropdown-menu");
        t.toggleClass("show");
        n.parents("li.nav-item.dropdown.show").on("hidden.bs.dropdown", function() {
            $(".dropdown-submenu .show").removeClass("show")
        });
        return !1
    })
});
$(function() {
    var n = !1
      , t = !1;
    $("#ChangeToggle").click(function() {
        $("div.search-bar-outer-wrapper-mobile div.search-bar-backdrop").is(":visible") && hideSearch();
        $("#navbar-hamburger").toggleClass("hidden");
        $("#navbar-close").toggleClass("hidden")
    });
    closeTopSearchItem = function() {
        $("div.search-bar-search.input-group input").removeClass();
        $("div.search-bar-search.input-group input").addClass("desktop-mode");
        $("div.search-bar-search.input-group input").attr("placeholder", "search");
        $("div.search-bar-search.input-group div.top-searches").removeClass("active")
    }
    ;
    hideSearch = function() {
        $("div.search-bar-outer-wrapper-mobile div.search-bar-backdrop").hide();
        $("div.search-bar-search.input-group #closebutton").hide();
        $("div.search-bar-modal div.input-group input").val("");
        $("div.search-bar-search.input-group #searchbutton").show();
        $(document.body).removeClass("noscroll");
        t = !1
    }
    ;
    updateSearchBackDrop = function() {
        t && $("div.search-bar-outer-wrapper-mobile div.search-bar-backdrop").css({
            top: $(".search-bar-container").offset().top - $(document).scrollTop()
        })
    }
    ;
    showMobileSearchInput = function() {
        $("#navigation-bar").is(":visible") && $("#ChangeToggle").click();
        t && ($("div.search-bar-outer-wrapper-mobile div.search-bar-backdrop").css({
            top: $(".search-bar-container").offset().top - $(document).scrollTop()
        }),
        $("div.search-bar-outer-wrapper-mobile div.search-bar-backdrop").show())
    }
    ;
    doSearch = function(n) {
        if (n.length > 0) {
            let i = n.split(" ").join("")
              , r = /^\d{11}$/.test(i);
            if (r) {
                var t = "https://abr.business.gov.au/ABN/View?id=" + n;
                return $("#abnLink").attr("href", t),
                $("#abnLink")[0].click(),
                null
            }
        }
        let i = window.location.origin + "/SearchResult?query=" + encodeURIComponent(bga.sc.global.capitalizeText(n));
        window.open(i, "_self")
    }
    ;
    $("div.search-bar-search.input-group input").on("focus", function() {
        $(this).removeClass();
        $(this).addClass("desktop-mode search-active focus-visible");
        $(this).attr("placeholder", "search business.gov.au");
        $("div.search-bar-search.input-group div.top-searches").addClass("active");
        n = !0
    }).on("keypress", function(n) {
        if (n.key == "Enter") {
            var t = $(this).val();
            doSearch(t)
        }
    });
    $("div.search-bar-modal div.input-group input").on("keypress", function(n) {
        if (n.key == "Enter") {
            var t = $(this).val();
            doSearch(t)
        }
    });
    $("div.search-bar-search.input-group #searchbutton").on("click", function() {
        var i = $("div.search-bar-wrapper div.desktop-mode").is(":visible"), n;
        i ? (n = $("div.search-bar-search.input-group input").val(),
        doSearch(n)) : ($(this).hide(),
        $("div.search-bar-search.input-group #closebutton").css("display", "block"),
        t = !0,
        showMobileSearchInput(),
        $(document.body).addClass("noscroll"))
    });
    $("div.search-bar-modal div.input-group #mobileSearchButton").on("click", function() {
        var n = $("div.search-bar-modal div.input-group input").val();
        doSearch(n)
    });
    $("div.search-bar-search.input-group #closebutton").on("click", function() {
        hideSearch()
    });
    $("div.top-searches li a").on("click", function() {
        var n = $(this).text();
        doSearch(n)
    });
    $("div.search-bar-outer-wrapper-mobile #searchbutton").on("click", function() {
        var n = $("div.search-bar-modal.input-group input").val();
        doSearch(n)
    });
    $(document.activeElement).on("focusin", function() {
        n = $(document.activeElement).parents("div.input-group-container").length > 0;
        n || closeTopSearchItem()
    }).on("mousedown", function(t) {
        n = $(t.target).parents("div.input-group-container").length > 0;
        n || closeTopSearchItem()
    })
});
$(function() {
    bga.createNS("bga.sc.feature.search.card");
    bga.sc.feature.search.card.otherCard = function(n) {
        var t = "";
        t += "<div class='search-card-result'><a href='" + n.url + "' class='search-card-button'><div class='search-result-card search-card-content'><div class='search-card-standard-content'><p class='search-card-content-type' aria-hidden='true'>" + n.type + "<\/p><h5 class='search-card-heading'>" + n.title + "<\/h5><p class='sr-only'>" + n.type + "<\/p><p class='search-card-body'>" + n.longdescription + "<\/p><\/div><\/div><\/a><\/div>";
        $(".results").append(t)
    }
    ;
    bga.sc.feature.search.card.eventsCard = function(n, t) {
        var i = ""
          , r = ""
          , u = "";
        if (!n)
            return "";
        t != null && (r = bga.sc.feature.search.card.getEventType(n.eventtype, t.EventType),
        u = bga.sc.feature.search.card.getStateList(n.computedrelevantstates, t.Location));
        i += "<div class='search-card-result'><a href='" + n.url + "' class='search-card-button'><div class='search-result-card search-card-content'><div class='search-card-standard-content'><p class='search-card-content-type' aria-hidden='true'>Events &amp; Training<\/p><h5 class='search-card-heading'>" + n.title + "<\/h5><p class='sr-only'>Events &amp; Training<\/p><p class='search-card-body'>" + n.longdescription + "<\/p><\/div><ul class='search-card-footer'>" + r + u + "<\/ul><\/div><\/a><\/div>";
        $(".results").append(i)
    }
    ;
    bga.sc.feature.search.card.getStateList = function(n, t) {
        var i = n === null ? n : n.join("/ ");
        return i != null ? "<li><div class='BgaIcon'>" + t + " <\/div><div class='search-card-category left-align-grant-status'><span>" + i.toString().toUpperCase() + "<\/span><\/div><\/li>" : ""
    }
    ;
    bga.sc.feature.search.card.getEventType = function(n, t) {
        return n ? "<li><div class='BgaIcon'>" + t + "<\/div><div class='search-card-category left-align-grant-status'><span>" + n.split(",").join(", ") + "<\/span><\/div><\/li>" : ""
    }
    ;
    bga.sc.feature.search.card.newsCard = function(n) {
        var r = "", t, i;
        if (!n)
            return "";
        t = n.type;
        i = n.category;
        t || (t = "Article");
        i || (i = "");
        r += "<div class='search-card-result'><a href='" + n.url + "' class='search-card-button'><div class='search-result-card search-card-content'><div class='search-card-standard-content'><p class='search-card-content-type' aria-hidden='true'>" + t + "<\/p><h5 class='search-card-heading'>" + n.title + "<\/h5><p class='sr-only'>" + n.type + "<\/p><p class='search-card-body'>" + n.longdescription + "<\/p><\/div><div class='searchCategory search-card-footer'>" + i + "<\/div><\/div><\/a><\/div>";
        $(".results").append(r)
    }
    ;
    bga.sc.feature.search.card.advisorCard = function(n, t) {
        var i = "";
        i += "<div class='search-card-result'><a href='" + n.url + "' class='search-card-button'><div class='search-result-card search-card-content'><div class='search-card-standard-content'><p class='search-card-content-type' aria-hidden='true'>Expertise & advice<\/p><h5 class='search-card-heading'>" + n.title + "<\/h5><p class='sr-only'>Expertise & advice<\/p><p class='search-card-body'>" + n.longdescription + "<\/p><\/div><ul class='search-card-footer'>" + bga.sc.feature.search.card.getServiceOfferings(n.serviceofferingtype, t) + bga.sc.feature.search.card.getStateList(n.computedrelevantstates, t.Location) + "<\/ul><\/div><\/a><\/div>";
        $(".results").append(i)
    }
    ;
    bga.sc.feature.search.card.getServiceOfferings = function(n, t) {
        var i = n;
        return i != null && i.length > 0 ? i.map(function(n) {
            return bga.sc.feature.search.card.getServiceOfferingItems(n, t)
        }).join(" ") : ""
    }
    ;
    bga.sc.feature.search.card.getServiceOfferingItems = function(n, t) {
        switch (n) {
        case "In Person":
            return "<li><div class='BgaIcon'>" + t.InPerson + "<\/div><div class='search-card-category left-align-grant-status'><span>" + n + "<\/span><\/div><\/li>";
        case "Online Service":
            return "<li><div class='BgaIcon'>" + t.OnlineService + "<\/div><div class='search-card-category left-align-grant-status'><span>" + n + "<\/span><\/div><\/li>";
        case "Phone":
            return "<li><div class='BgaIcon'>" + t.Phone + "<\/div><div class='search-card-category left-align-grant-status'><span>" + n + "<\/span><\/div><\/li>";
        case "Mobile":
            return "<li><div class='BgaIcon'>" + t.Mobile + "<\/div><div class='search-card-category left-align-grant-status'><span>" + n + "<\/span><\/div><\/li>";
        default:
            return ""
        }
    }
    ;
    bga.sc.feature.search.card.grantsCard = function(n, t) {
        var r = ""
          , i = bga.sc.feature.search.card.getGrantSection(n.computedstatus, t);
        (i == null || i == "undefined") && (i = "");
        r += "<div class='search-card-result'><div><a href='" + n.url + "' class='search-card-button'><div class='search-result-card search-card-content'><div class='search-card-standard-content'><p class='search-card-content-type' aria-hidden='true'>" + n.labeloverride + "<\/p><h5 class='search-card-heading'>" + n.headline + "<\/h5><p class='sr-only'>" + n.labeloverride + "<\/p><p class='search-card-body'>" + n.longdescription + "<\/p><\/div><ul class='search-card-footer'><li>" + i + "<\/li><\/ul><\/div><\/a><div class='accordion-expand-wrapper'><div class='collapse' id='searchAccordion" + n.id + "'><div class='card'><div class='card-body'><div class='accordion-expand-contents'><div><p class='accordion-grant-content-heading'>Who is this for?<\/p><p class='accordion-grant-content-description'>" + n.whothisisfor + "<\/p><\/div><div><p class='accordion-grant-content-heading'>What you get?<\/p><p class='accordion-grant-content-description'>" + n.whatyouget + "<\/p><\/div><\/div><\/div><\/div><\/div><button aria-label='Who can apply - content expands above' class='grant-expand-title' data-toggle='collapse' data-target='#searchAccordion" + n.id + "' aria-expanded='false' aria-controls='searchAccordion" + n.id + "' onclick='toggleSvg(this)'><div class='accordion-title'><span>Who can apply<\/span><span class='fill-white'><svg width='16' height='16'><path fill-rule='evenodd' d='M8 9.028L1.982 3 0 4.986 8 13l8-8.014L14.018 3z'><\/path><\/svg><\/span><\/div><\/button><\/div><\/div>";
        $(".results").append(r)
    }
    ;
    bga.sc.feature.search.card.getGrantSection = function(n, t) {
        return !n || !t ? "" : n === "Open" ? "<span>" + t.Open + "<div class='search-card-category left-align-grant-status'><span>" + n + "<\/span><\/span><\/div>" : n === "Closed" ? "<span>" + t.Closed + "<div class='search-card-category left-align-grant-status'><span>" + n + "<\/span><\/span><\/div>" : ""
    }
});
$(function() {
    function i(n, t) {
        for (var r, f = !1, e = "", i = [], s = window.location.search.substring(1).replace(/\+/g, " "), o = s.split("&"), u = 0; u < o.length; u++)
            r = o[u].split("="),
            r[0] === n && (f ? i.push(r[1]) : (e = r[1],
            f = !0,
            i.push(r[1])));
        return i.length > 1 ? i : i.length == 1 && t == "multi" ? i : e
    }
    var v = 10, b = 0, s = !1, u = i("requestType"), y = "", t = i("page") || 1, r = i("useAndSearch"), n = i("query"), p = !1, k = i("postcode"), d = i("industry"), e = !0, w = [], h, c, l;
    w = i("businessObjectives", "multi");
    h = [];
    h = i("audiences", "multi");
    e = !1;
    c = [];
    c = i("advice", "multi");
    l = [];
    l = i("eventTopic", "multi");
    var g = i("distance")
      , nt = i("locationState")
      , o = $("#IsIspSearch").val()
      , a = !1
      , f = i("sortBy");
    closeTopSearchItemOnSearchCard = function() {
        $("div.search-card-search.input-group #txtSearchInput").removeClass();
        $("div.search-card-search.input-group #txtSearchInput").addClass("search-type");
        $("div.search-card-inner-wrapper .top-searches").removeClass("active")
    }
    ;
    $(document).ready(function() {
        if (window.matchMedia("(max-width: 767px)").matches ? $("#search-filter").addClass("search-filter-mobile") : $("#search-filter").removeClass("search-filter-mobile"),
        i(),
        getResults(!1),
        setInputTextValue(),
        window.history && window.history.pushState)
            $(window).on("popstate", function() {
                updateOnBackButtonClicked()
            });
        $("#txtSearchInput").on("keypress", function(n) {
            n.key == "Enter" && searchButtonHandler()
        });
        $("select.search-type").change(function() {
            o === "True" ? (f = $("select.search-type").children("option:selected").val(),
            a || (t = 1,
            getResults(!0))) : useAndOrSearch(this.selectedIndex === 0 ? !1 : !0, !0)
        });
        $("#txtSearchInput").on("focus", function() {
            $(this).removeClass();
            $(this).addClass("search-type search-active focus-visible");
            $("div.top-search-wrapper-search-type div.top-searches").addClass("active")
        });
        $(document.activeElement).on("focusin", function() {
            isTopSearchActive = $(document.activeElement).parents("div.search-card-inner-wrapper").length > 0;
            isTopSearchActive || closeTopSearchItemOnSearchCard()
        }).on("mousedown", function(n) {
            isTopSearchActive = $(n.target).parents("div.search-card-inner-wrapper").length > 0;
            isTopSearchActive || closeTopSearchItemOnSearchCard()
        })
    });
    getFilterTab = function(n) {
        var t = $("#searchFilterAll");
        switch (n) {
        case "Grants":
            t = $("#searchFilterGrants");
            break;
        case "Events":
            t = $("#searchFilterEvents");
            break;
        case "Advisors":
            t = $("#searchFilterAdvisors");
            break;
        case "News":
            t = $("#searchFilterNews")
        }
        return t
    }
    ;
    updateOnBackButtonClicked = function() {
        var i = new URLSearchParams(location.search);
        n = i.has("query") ? i.get("query").split("+").join(" ") : "";
        i.has("requestType") ? (u = i.get("requestType"),
        highlightTab(getFilterTab(i.get("requestType")))) : (u = "",
        highlightTab(getFilterTab("")));
        t = i.has("page") ? Number(i.get("page")) : 1;
        i.has("useAndSearch") ? (r = i.get("useAndSearch") === "true" ? !0 : !1,
        r && (a = !1,
        $("select.search-type").prop("selectedIndex", 1))) : (r = !1,
        $("select.search-type").prop("selectedIndex", 0));
        i.has("sortBy") && (f = i.get("sortBy"),
        a = !1,
        $("select.search-type").val(f));
        getResults(!1)
    }
    ;
    setInputTextValue = function() {
        n = n.replace(/%/g, "%25");
        n = decodeURIComponent(bga.sc.global.capitalizeText(n));
        $("#txtSearchInput").val(n)
    }
    ;
    toggleSvg = function(n) {
        $(n).find(".accordion-title span svg").toggleClass("transform")
    }
    ;
    updateURL = function() {
        if (p) {
            var e = window.location.search.replace("?", "").split("&")
              , i = new URLSearchParams(location.search)
              , o = !1;
            e.forEach(function(e) {
                var h = e.split("=")[0];
                switch (h) {
                case "query":
                    return i.set("query", n.replace(/\+/g, "%20")),
                    !0;
                case "requestType":
                    return u !== "" ? i.set("requestType", u) : i.delete("requestType"),
                    !0;
                case "page":
                    if (s)
                        i.delete("page");
                    else
                        return t != "undefined" && t !== 1 ? i.set("page", t.toString()) : i.delete("page"),
                        !0;
                    break;
                case "useAndSearch":
                    return r ? i.set("useAndSearch", r) : i.delete("useAndSearch"),
                    !0;
                case "sortBy":
                    return o === !0 ? i.set("sortBy", f) : i.delete("sortBy"),
                    !0
                }
            });
            i.has("query") || n === "" || i.append("query", n.replace(/\+/g, "%20"));
            i.has("requestType") || u === "" || i.append("requestType", u);
            i.has("page") || t === 1 || i.append("page", t.toString());
            i.has("useAndSearch") || r !== !0 || i.append("useAndSearch", r.toString());
            i.has("sortBy") || f === "undefined" || f === "" || i.append("sortBy", f.toString())
        }
        s = !1;
        window.history.pushState(null, null, window.location.pathname + "?" + i.toString())
    }
    ;
    hideAndShowSearchingText = function() {
        e ? ($(".results-loader").css("display", "block"),
        $(".results").html(""),
        $(".search-pagination").html(""),
        $(".search-record-count").css("display", "none"),
        $("#no-results").html("")) : $(".results-loader").css("display", "none")
    }
    ;
    getResults = function(i) {
        var s;
        e = !0;
        hideAndShowSearchingText();
        n = decodeURIComponent(bga.sc.global.capitalizeText(n));
        var a = ""
          , tt = !1
          , s = new URLSearchParams(location.search);
        if (s.has("query") && (tt = !0),
        s.has("requestType") && highlightTab(getFilterTab(s.get("requestType"))),
        tt)
            return o === "True" ? a = "/SearchApi/SearchIsp" : ($(".search-bar-search").css("display", "none"),
            a = "/SearchApi/Search"),
            s = {
                query: n,
                requestType: u,
                useAndSearch: r,
                postcode: k,
                businessObjectives: w,
                industryId: d,
                audiences: h,
                adviceCategories: c,
                eventTopics: l,
                distance: g,
                locationState: nt,
                sortBy: f,
                page: t,
                perPage: v
            },
            fetch(a, {
                method: "post",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(s)
            }).then(function(n) {
                return n.json()
            }).then(function(r) {
                r != null && (e = !1,
                hideAndShowSearchingText(),
                b = r.TotalCount,
                r.TotalCount > 0 ? (y = r.Icons,
                getTenResultsPerPage(y, r.Results),
                $("#no-results").html("")) : showNoResultFound(r.Message),
                RefreshPagination(t, r.TotalCount, v),
                $("#txtSearchInput").val(bga.sc.global.capitalizeText(n)),
                $("#searchCount").text(r.TotalCount),
                r.TotalCount * 1 == 0 ? (o === "True" && $("#search-filter-dropdown").hide(),
                o === "True" && ($(".search-filters").hide(),
                $(".search-card-inner-wrapper").hide())) : $("#search-filter-dropdown").show(),
                $(".search-record-count").show(),
                p = i,
                $("#searchText").text(n),
                $(window).scrollTop() >= $(".search-card-outer-wrapper").offset().top ? ($(".search-card-outer-wrapper").focus(),
                $("html, body").animate({
                    scrollTop: $(".search-card-outer-wrapper").offset().top
                }, 0)) : $("html, body").animate({
                    scrollTop: "0px"
                }, 0),
                updateURL())
            }).catch(function() {})
    }
    ;
    searchButtonHandler = function() {
        if (closeTopSearchItemOnSearchCard(),
        n = $("#txtSearchInput").val(),
        n.length > 0) {
            n = n.replace(/%/g, "%25");
            let t = n.split(" ").join("")
              , r = /^\d{11}$/.test(t);
            if (r) {
                var i = "https://abr.business.gov.au/ABN/View?id=" + n;
                return $("#abnLink").attr("href", i),
                $("#abnLink")[0].click(),
                null
            }
        }
        t = 1;
        getResults(!0)
    }
    ;
    useAndOrSearch = function(n, i) {
        i && (r = n,
        t = 1,
        getResults(!0))
    }
    ;
    handleFilter = function(n, i) {
        return t = 1,
        u = n,
        s = !0,
        getResults(!0),
        highlightTab(i),
        !1
    }
    ;
    highlightTab = function(n) {
        $("a.selected").removeClass("selected");
        $(n).addClass("selected")
    }
    ;
    onChangePage = function(n) {
        t = n;
        getResults(!0)
    }
    ;
    getTenResultsPerPage = function(n, t) {
        SearchCard(t, n)
    }
    ;
    SearchCard = function(n, t) {
        $(".results").html("");
        $(n).each(function(n, i) {
            switch (i.type) {
            case "News":
                return bga.sc.feature.search.card.newsCard(i, t);
            case "Grants":
                return bga.sc.feature.search.card.grantsCard(i, t);
            case "Events":
                return bga.sc.feature.search.card.eventsCard(i, t);
            case "Advisors":
                return bga.sc.feature.search.card.advisorCard(i, t);
            default:
                return bga.sc.feature.search.card.otherCard(i)
            }
        })
    }
    ;
    showNoResultFound = function(n) {
        $("#no-results").html("");
        $("#no-results").append(n)
    }
});
$(document).ready(function() {
    function r(n, t) {
        t.removeClass("svgvisible").addClass("svghide");
        n.removeClass("svghide").addClass("svgvisible")
    }
    function u() {
        var n = [];
        return $(".support-pathway").find(".question-wrapper").each(function() {
            n.push({
                key: this.id,
                queryParam: this.id.replace("PathwayQuestion", ""),
                value: $(this).attr("questionType")
            })
        }),
        n
    }
    function f() {
        var t = window.location.href.split("/Result?"), r, u;
        t.length > 1 && (r = t[1],
        u = r.split("&"),
        $(n).each(function(n, t) {
            $(u).each(function(n, i) {
                var u, r;
                if (i.search(t.queryParam) !== -1) {
                    u = i.split("=");
                    u.length > 1 && (r = u[1]);
                    switch (t.value) {
                    case "Text":
                        $("#" + t.key).find("input").val(r);
                        break;
                    case "SingleSelect":
                        $("#" + t.key).find("option").each(function() {
                            $(this).attr("value") == r ? $(this).prop("selected", !0) : $(this).prop("selected", !1)
                        });
                        break;
                    case "MultiSelection":
                        $("#" + t.key).find("button").each(function() {
                            $(this).attr("data-value") == r && $(this).click()
                        })
                    }
                }
            })
        }),
        i())
    }
    function t(t) {
        if (t < n.length - 1) {
            var i = n[t + 1].key;
            $("#" + i).show()
        } else
            $("#supportPathwaySearchButton").show()
    }
    function e() {
        var t = "/Result?", i;
        return $(n).each(function(n, i) {
            switch (i.value) {
            case "Text":
                t = t + i.queryParam + "=" + $("#" + i.key).find("input").val() + "&";
                break;
            case "SingleSelect":
                t = t + i.queryParam + "=" + $("#" + i.key).find("option:selected").val() + "&";
                break;
            case "MultiSelection":
                var r = [];
                $("#" + i.key).find("button").each(function() {
                    $(this).hasClass("selected") && r.push($(this).attr("data-value"))
                });
                $(r).each(function(n, r) {
                    t = t + i.queryParam + "=" + r + "&"
                })
            }
        }),
        i = "requestType=" + $("#SearchType").val(),
        t[t.length - 1] != "&" && (i = "&" + i),
        t += i + "&query="
    }
    function i() {
        $(".support-pathway-submit-wrapper").hide();
        $(".support-pathway-questions").hide();
        $(".support-pathway-title").hide();
        $(".support-pathway-category").hide();
        $(".support-pathway-change-answers").show()
    }
    function o() {
        $(".support-pathway-change-answers").hide();
        $(".support-pathway-submit-wrapper").show();
        $(".support-pathway-questions").show();
        $(".question-wrapper").show();
        $("#closeSearchParamsButtonWrapper").show();
        $("#supportPathwaySearchButton").show()
    }
    function s(n) {
        var t = !1;
        return $("#" + n).find("button").each(function() {
            $(this).hasClass("selected") && (t = !0)
        }),
        t
    }
    function h(n, t, i, r) {
        var u = !1;
        if (n.is(":visible"))
            u = !0;
        else
            switch (r) {
            case "Text":
                $("#" + i + " :input").val() == "" && (u = !0);
                break;
            case "SingleSelect":
                $("#" + i + " option:selected").val() == "" && (u = !0);
                break;
            case "MultiSelection":
                s(i) || (u = !0);
                break;
            default:
                return null
            }
        return u && (n.show(),
        t.addClass("error")),
        u
    }
    function c() {
        var t = !1;
        return $(n).each(function() {
            var n = $("#" + this.key).closest(".question-wrapper")
              , i = $("#" + this.key).find(".validation-message");
            return t = h(i, n, this.key, this.value),
            t ? !1 : void 0
        }),
        t
    }
    var n = u();
    $(n).each(function(n, i) {
        switch (i.value) {
        case "Text":
            if (i.key == "postcodePathwayQuestion")
                $("#" + i.key).find("input").on("input", function() {
                    if (this.value = this.value.replace(/[^0-9]/g, ""),
                    $("#" + i.key).closest(".question-wrapper").removeClass("error"),
                    $("#" + i.key).find(".validation-message").hide(),
                    this.value.length == 4) {
                        var r = {};
                        r.postCode = this.value;
                        $.ajax({
                            url: "/SearchApi/IsValidPostCode/",
                            dataType: "json",
                            type: "GET",
                            cache: !1,
                            data: r,
                            success: function(r) {
                                r ? t(n) : ($("#" + i.key).closest(".question-wrapper").addClass("error"),
                                $("#" + i.key).find(".validation-message").show())
                            },
                            error: function() {}
                        })
                    }
                });
            break;
        case "SingleSelect":
            $("#" + i.key).find("select").on("change", function() {
                t(n);
                $(this).closest(".question-wrapper").removeClass("error").find(".validation-message").hide();
                this.blur()
            });
            break;
        case "MultiSelection":
            $("#" + i.key).find("button").on("click", function() {
                var i = $(this).closest(".question-wrapper").find('*[isnoneofthese="True"]')
                  , u = $(this).closest(".question-wrapper").find('*[isnoneofthese="True"]').length;
                $(this).hasClass("not-selected") ? ($(this).removeClass("not-selected").addClass("selected"),
                $(this).attr("aria-pressed", "true"),
                $(this).find(".BgaIcon").removeClass("plus").addClass("tick"),
                u > 0 && ($(this).attr("isnoneofthese") == "True" ? $(this).closest(".question-wrapper").find("button").each(function() {
                    $(this).attr("isnoneofthese") == "False" && $(this).hasClass("selected") && $(this).click()
                }) : $(i).hasClass("selected") && ($(i).removeClass("selected").addClass("not-selected"),
                $(i).attr("aria-pressed", "false"),
                $(i).find(".BgaIcon").removeClass("tick").addClass("plus"),
                $(i).find(".noneselectedtick").removeClass("svgvisible").addClass("svghide"),
                $(i).find(".noneselectedplus").removeClass("svghide").addClass("svgvisible"))),
                $(this).closest(".question-wrapper").removeClass("error").find(".validation-message").hide()) : ($(this).removeClass("selected").addClass("not-selected"),
                $(this).attr("aria-pressed", "false"),
                $(this).find(".BgaIcon").removeClass("tick").addClass("plus"));
                r($(this).find(".svghide"), $(this).find(".svgvisible"));
                t(n)
            })
        }
    });
    f();
    n.length > 0 && $("#" + n[0].key).show();
    Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
        enumerable: !1,
        value: function(n) {
            var t = this.filter(function(t) {
                return t === n
            });
            return t.length > 0
        }
    });
    $("#supportPathwaySearchButton").on("click", function() {
        if (!c()) {
            var t = e()
              , i = window.location.href.split("/Result?")
              , n = i[0];
            n.charAt(n.length - 1) == "/" && (n = n.substring(0, n.length - 1));
            window.location.href = n + t
        }
    });
    $(".change-answers").on("click", function() {
        o()
    });
    $("#closeSearchParamsButton").on("click", function() {
        i()
    })
});
$(function() {
    $('[data-toggle="popover"]').popover({
        sanitize: !1
    });
    $("body").on("click", function(n) {
        $('[data-toggle="popover"]').each(function() {
            $(this).is(n.target) || $(this).has(n.target).length !== 0 || $(".popover").has(n.target).length !== 0 || $(this).popover("hide")
        })
    });
    $(document).on("click", ".share-item a", function() {
        var t = window.location.href, n;
        return $(this).attr("id") == "share-fb" ? n = "http://www.facebook.com/share.php?u=" + t : $(this).attr("id") == "share-li" ? n = "https://www.linkedin.com/shareArticle?mini=true&amp;url=" + t : $(this).attr("id") == "share-tw" && (n = "https://twitter.com/home?status=" + t),
        $(this).attr("href", n),
        window.open(this.href, "sharewindow", "resizable, height=260,width=370"),
        !1
    });
    handleEmail = function(n, t) {
        location.href = "mailto:?subject=" + n + " | business.gov.au&body=I thought you might be interested in " + n + " | business.gov.au. You can view this article: " + t
    }
});
$(document).ready(function() {
    updatePathways()
});
$(function() {
    $(window).on("resize", function() {
        updatePathways()
    });
    var n = $(".hero-pathway-list-card");
    n.length > 0 && n.find(".hero-pathway-list-content-wrapper").each(function() {
        var n = $(this).height() + 16;
        $(this).find(".action-card-button").each(function() {
            $(this).css({
                height: n + "px"
            })
        })
    });
    $(".hero-pathway-label").length > 0 ? $(".hero-pathway-list-title").length > 0 ? ($(".hero-pathway-label").css({
        "padding-bottom": "16px"
    }),
    $(".hero-pathway-list-title h2").css({
        "padding-top": "8px"
    }),
    $(".hero-pathway-list-title h3").css({
        "padding-top": "0px"
    }),
    $(".hero-pathway-list-title h4").css({
        "padding-top": "0px"
    }),
    $(".hero-pathway-list-title p").css({
        "padding-top": "16px"
    }),
    $(".hero-pathway-description").css({
        "padding-top": "0px"
    })) : $(".hero-pathway-description").css({
        "padding-top": "24px"
    }) : $(".hero-pathway-list-title").css({
        "padding-top": "0px"
    })
});
$(function() {
    $(".image-pathway-list-label").length > 0 ? $(".image-pathway-list-content").length > 0 ? ($(".image-pathway-list-label").css({
        "padding-bottom": "16px"
    }),
    $(".image-pathway-list-content h2").css({
        "padding-top": "8px"
    }),
    $(".image-pathway-list-content h3").css({
        "padding-top": "0px"
    }),
    $(".image-pathway-list-content h4").css({
        "padding-top": "0px"
    }),
    $(".image-pathway-list-content p").css({
        "padding-top": "16px"
    }),
    $(".image-pathway-list-description").css({
        "padding-top": "0px"
    })) : $(".image-pathway-list-description").css({
        "padding-top": "24px"
    }) : $(".image-pathway-list-content").css({
        "padding-top": "0px"
    })
});
$(function() {
    $(".category-text").length > 0 ? $(".category-title").length > 0 ? ($(".category-text").css({
        "padding-bottom": "16px"
    }),
    $(".category-title h2").css({
        "padding-top": "8px"
    }),
    $(".category-title h3").css({
        "padding-top": "0px"
    }),
    $(".category-title h4").css({
        "padding-top": "0px"
    }),
    $(".category-title p").css({
        "padding-top": "16px"
    }),
    $(".category-text-description").css({
        "padding-top": "0px"
    })) : $(".category-text-description").css({
        "padding-top": "24px"
    }) : $(".category-title").css({
        "padding-top": "0px"
    })
});
$(function() {
    $(".light-pathway-label").length > 0 ? $(".light-pathway-title").length > 0 ? ($(".light-pathway-label").css({
        "padding-bottom": "16px"
    }),
    $(".light-pathway-title h2").css({
        "padding-top": "0px"
    }),
    $(".light-pathway-title h3").css({
        "padding-top": "0px"
    }),
    $(".light-pathway-title h4").css({
        "padding-top": "0px"
    }),
    $(".light-pathway-title p").css({
        "padding-top": "0px"
    }),
    $(".light-pathway-description").css({
        "padding-top": "0px"
    })) : $(".light-pathway-description").css({
        "padding-top": "24px"
    }) : $(".light-pathway-title").css({
        "padding-top": "0px"
    })
});

$(function() {
    if ($(".anchor-menu").length > 0) {
        var n = 32
          , u = $(".anchor-menu").offset()
          , t = $(".anchor-menu").height()
          , i = []
          , r = []
          , f = 0;
        function s(t, i) {
            for (var u, r = 0; r < t.length; r++)
                u = t[r] - n,
                $(window).scrollTop() >= u && $(window).scrollTop() <= u + i[r] && ($(".sticky-item ul li a").removeClass("active"),
                $(".sticky-item ul li a").css("font-weight", "400"),
                $(".sticky-item ul li a[data-value=" + t[r] + "]").addClass("active"))
        }
        function o() {
            var r = $(window), f = $(".twoCol39-left").width(), i;
            $(window).scroll(function() {
                if (window.innerWidth >= 576) {
                    f = $(".twoCol39-left").width();
                    i = $(".twoCol39-left").parents().eq(1).next().length > 0 ? $(".twoCol39-left").parents().eq(1).next().offset().top : $(".twoCol39-left").parents().eq(2).next().offset() ? $(".twoCol39-left").parents().eq(2).next().offset().top : $(".twoCol39-left").parents().eq(3).nextAll("div").length > 0 ? $(".twoCol39-left").parents().eq(3).nextAll("div").offset().top : $(".twoCol39-left").parents().eq(4).nextAll("div").offset().top;
                    var e = i - r.scrollTop() - t - n;
                    r.scrollTop() >= u.top - n && r.scrollTop() <= i - t - n ? $(".sticky-container").css("position", "fixed").css("top", n + "px").css("width", f) : r.scrollTop() < u.top ? ($(".sticky-container").css("position", "relative").css("top", "auto").css("width", f).css("height", t + "px"),
                    $(".sticky-item ul li a").removeClass("active").re) : $(".sticky-container").css("position", "fixed").css("top", e + "px").css("width", f).css("height", t + "px")
                } else
                    $(".sticky-item ul li a").removeClass("active")
            })
        }
        function e() {
            $(".sticky-item ul li a").each(function() {
                var f = this, n = $(f).attr("href"), e = n.replace("#", ""), t, u;
                n = $("div[id='" + e + "']");
                t = $(n).offset().top;
                u = $(n).height();
                i.push(Math.round(t));
                r.push(Math.round(u));
                $(this).attr("data-value", Math.round(t))
            })
        }
        o();
        $(".accordion-group-toggle").click(function() {
            e()
        });
        $(".accordion-item").click(function() {
            e()
        });
        $(".sticky-item ul li a").each(function() {
            var e = this, n = $(e).attr("href"), o = n.replace("#", ""), t, u;
            n = $("div[id='" + o + "']");
            t = $(n).offset().top - f;
            u = $(n).height();
            i.push(Math.round(t));
            r.push(Math.round(u));
            $(n).find(".accordion-item-content").each(function() {
                $(this).attr("aria-hidden") == "true" && (f += $(this).height())
            });
            $(this).attr("data-value", Math.round(t))
        });
        $(".sticky-item ul li a").on("click", function() {
            var n = $(this).attr("data-value");
            return $([document.documentElement, document.body]).animate({
                scrollTop: n
            }, 400),
            !1
        });
        $(window).scroll(function() {
            s(i, r)
        });
        $(window).on("resize", function() {
            $(".sticky-container").length && (e(),
            o())
        })
    }
});

//Accordion
$(function() {
    $(document).ready(function() {
        $(".accordion-item-content").hide()
    });
    onTitleClick = function(n) {
        if ($(n).next(".accordion-item-content").toggle(),
        $(n).find(".BgaIcon").toggleClass("active-expand"),
        $(n).toggleClass("backgroundColour"),
        $(n).find(".BgaIcon").hasClass("active-expand") ? ($(n).attr("aria-expanded", "true"),
        $(n).find("h5").css("color", "black"),
        $(n).next(".accordion-item-content").attr("aria-hidden", "false")) : ($(n).attr("aria-expanded", "false"),
        $(n).next(".accordion-item-content").attr("aria-hidden", "true")),
        $(n).next(".accordion-item-content").toggleClass("backgroundColour"),
        $(n).next(".accordion-item-content").next(".accordion-item-banner").toggleClass("height"),
        allPanelOpened = $(n).parent().parent().parent().find('.accordion-item-tile[aria-expanded="false"]').length < 1,
        allPanelOpened)
            $(n).parent().parent().parent().find(".accordion-group-toggle-content").addClass("all-open"),
            $(n).parent().parent().parent().find(".iconAnimateWrapper").addClass("active-expand"),
            $(n).parent().parent().parent().find(".accordion-group-toggle-content").children("h5").text("Close all");
        else {
            var t = $(n).parent().parent().parent().find('.accordion-item-tile[aria-expanded="true"]').length < 1;
            t && ($(n).parent().parent().parent().find(".accordion-group-toggle-content").removeClass("all-open"),
            $(n).parent().parent().parent().find(".iconAnimateWrapper").removeClass("active-expand"),
            $(n).parent().parent().parent().find(".accordion-group-toggle-content").children("h5").text("Open all"))
        }
    }
    ;
    openCloseToggle = function(n) {
        var t = $(n).parent().parent();
        $(n).hasClass("all-open") ? ($(n).removeClass("all-open"),
        $(n).children("h5").text("Open all"),
        $(t).find(".accordion-item-content").hide(),
        $(t).find(".BgaIcon").removeClass("active-expand"),
        $(t).find(".accordion-item-content").removeClass("backgroundColour"),
        $(t).find(".accordion-item-tile").removeClass("backgroundColour"),
        $(t).find(".accordion-item-banner").removeClass("height"),
        $(t).find(".accordion-item-tile").attr("aria-expanded", "false"),
        $(t).find(".accordion-item-content").attr("aria-hidden", "true"),
        $(t).find(".accordion-item-tile-inner-title>h5").css("color", "").css("box-shadow", "").css("padding-bottom", "")) : ($(n).addClass("all-open"),
        $(n).children("h5").text("Close all"),
        $(t).find(".accordion-item-content").show(),
        $(t).find(".BgaIcon").addClass("active-expand"),
        $(t).find(".accordion-item-content").addClass("backgroundColour"),
        $(t).find(".accordion-item-tile").addClass("backgroundColour"),
        $(t).find(".accordion-item-banner").addClass("height"),
        $(t).find(".accordion-item-tile").attr("aria-expanded", "true"),
        $(t).find(".accordion-item-content").attr("aria-hidden", "false"),
        $(t).find(".accordion-item-tile-inner-title>h5").css("color", "#000").css("box-shadow", "inset 0 -2.08px 0 #666").css("padding-bottom", "2px"))
    }
    ;
    $(".accordion-item-tile").mouseover(function() {
        $(this).next(".accordion-item-content").next(".accordion-item-banner").css("height", "0.25rem");
        $(this).attr("aria-expanded") == "false" && $(this).find("h5").css("color", "#000").css("box-shadow", "inset 0 -2.08px 0 #666").css("padding-bottom", "2px")
    });
    $(".accordion-item-tile").mouseout(function() {
        $(this).next(".accordion-item-content").next(".accordion-item-banner").css("height", "0rem");
        $(this).attr("aria-expanded") == "false" && $(this).find("h5").css("color", "").css("box-shadow", "").css("padding-bottom", "")
    })
});
$(document).ready(function() {
    function i(n) {
        var t = $(document).find(":not(iframe, script)").contents().filter(function() {
            return this.nodeType == 3 && this.textContent.indexOf(n) > -1
        });
        return t.parent()
    }
    var n = "", t;
    $(".main-section").find(".twoCol39-right").length > 0 && ($(".twoCol39-right").children().each(function() {
        n = $(this).text().trim().split(" ")[0]
    }),
    t = i(n),
    t.css("padding-top", "0px"))
});
