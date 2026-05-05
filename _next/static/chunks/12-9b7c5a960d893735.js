(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [12],
  {
    7585: function (e, t, n) {
      "use strict";
      n.d(t, {
        Xz: function () {
          return z;
        },
      });
      var r,
        i,
        s = n(8914),
        o = n(2265),
        u = n(7776),
        l = n(4692),
        c = n.n(l),
        a = Object.defineProperty,
        d = Object.defineProperties,
        f = Object.getOwnPropertyDescriptors,
        h = Object.getOwnPropertySymbols,
        p = Object.prototype.hasOwnProperty,
        m = Object.prototype.propertyIsEnumerable,
        v = (e, t, n) =>
          t in e
            ? a(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        y = (e, t) => {
          for (var n in t || (t = {})) p.call(t, n) && v(e, n, t[n]);
          if (h) for (var n of h(t)) m.call(t, n) && v(e, n, t[n]);
          return e;
        },
        _ = (e, t) => d(e, f(t));
      function S(e) {
        try {
          return Object.defineProperties(e, {
            _currentRenderer: { get: () => null, set() {} },
            _currentRenderer2: { get: () => null, set() {} },
          });
        } catch (t) {
          return e;
        }
      }
      "undefined" != typeof window &&
      ((null == (r = window.document) ? void 0 : r.createElement) ||
        (null == (i = window.navigator) ? void 0 : i.product) === "ReactNative")
        ? o.useLayoutEffect
        : o.useEffect;
      let b = console.error;
      console.error = function () {
        let e = [...arguments].join("");
        if (
          (null == e ? void 0 : e.startsWith("Warning:")) &&
          e.includes("useContext")
        ) {
          console.error = b;
          return;
        }
        return b.apply(this, arguments);
      };
      let g = S(o.createContext(null));
      class w extends o.Component {
        render() {
          return o.createElement(
            g.Provider,
            { value: this._reactInternals },
            this.props.children
          );
        }
      }
      var j = n(7437);
      n(2777), n(1543), n(8276);
      let R = ["x", "y", "top", "bottom", "left", "right", "width", "height"],
        x = (e, t) => R.every((n) => e[n] === t[n]),
        C = o.forwardRef(function (
          {
            children: e,
            fallback: t,
            resize: n,
            style: r,
            gl: i,
            events: l = s.c,
            eventSource: a,
            eventPrefix: d,
            shadows: f,
            linear: h,
            flat: p,
            legacy: m,
            orthographic: v,
            frameloop: b,
            dpr: R,
            performance: C,
            raycaster: z,
            camera: E,
            scene: F,
            onPointerMissed: O,
            onCreated: P,
            ...k
          },
          T
        ) {
          o.useMemo(() => (0, s.e)(u), []);
          let A = (function () {
              let e = (function () {
                let e = (function () {
                    let e = o.useContext(g);
                    if (null === e)
                      throw Error(
                        "its-fine: useFiber must be called within a <FiberProvider />!"
                      );
                    let t = o.useId();
                    return o.useMemo(() => {
                      for (let n of [e, null == e ? void 0 : e.alternate]) {
                        if (!n) continue;
                        let e = (function e(t, n, r) {
                          if (!t) return;
                          if (!0 === r(t)) return t;
                          let i = n ? t.return : t.child;
                          for (; i; ) {
                            let t = e(i, n, r);
                            if (t) return t;
                            i = n ? null : i.sibling;
                          }
                        })(n, !1, (e) => {
                          let n = e.memoizedState;
                          for (; n; ) {
                            if (n.memoizedState === t) return !0;
                            n = n.next;
                          }
                        });
                        if (e) return e;
                      }
                    }, [e, t]);
                  })(),
                  [t] = o.useState(() => new Map());
                t.clear();
                let n = e;
                for (; n; ) {
                  if (n.type && "object" == typeof n.type) {
                    let e =
                      void 0 === n.type._context && n.type.Provider === n.type
                        ? n.type
                        : n.type._context;
                    e && e !== g && !t.has(e) && t.set(e, o.useContext(S(e)));
                  }
                  n = n.return;
                }
                return t;
              })();
              return o.useMemo(
                () =>
                  Array.from(e.keys()).reduce(
                    (t, n) => (r) =>
                      o.createElement(
                        t,
                        null,
                        o.createElement(
                          n.Provider,
                          _(y({}, r), { value: e.get(n) })
                        )
                      ),
                    (e) => o.createElement(w, y({}, e))
                  ),
                [e]
              );
            })(),
            [I, M] = (function (
              { debounce: e, scroll: t, polyfill: n, offsetSize: r } = {
                debounce: 0,
                scroll: !1,
                offsetSize: !1,
              }
            ) {
              var i;
              let s =
                  n || ("undefined" != typeof window && window.ResizeObserver),
                [u, l] = (0, o.useState)({
                  left: 0,
                  top: 0,
                  width: 0,
                  height: 0,
                  bottom: 0,
                  right: 0,
                  x: 0,
                  y: 0,
                });
              if (!s)
                return (
                  (u.width = 1280), (u.height = 800), [() => {}, u, () => {}]
                );
              let a = (0, o.useRef)({
                  element: null,
                  scrollContainers: null,
                  resizeObserver: null,
                  lastBounds: u,
                }),
                d = e ? ("number" == typeof e ? e : e.scroll) : null,
                f = e ? ("number" == typeof e ? e : e.resize) : null,
                h = (0, o.useRef)(!1);
              (0, o.useEffect)(
                () => ((h.current = !0), () => void (h.current = !1))
              );
              let [p, m, v] = (0, o.useMemo)(() => {
                let e = () => {
                  if (!a.current.element) return;
                  let {
                      left: e,
                      top: t,
                      width: n,
                      height: i,
                      bottom: s,
                      right: o,
                      x: u,
                      y: c,
                    } = a.current.element.getBoundingClientRect(),
                    d = {
                      left: e,
                      top: t,
                      width: n,
                      height: i,
                      bottom: s,
                      right: o,
                      x: u,
                      y: c,
                    };
                  a.current.element instanceof HTMLElement &&
                    r &&
                    ((d.height = a.current.element.offsetHeight),
                    (d.width = a.current.element.offsetWidth)),
                    Object.freeze(d),
                    h.current &&
                      !x(a.current.lastBounds, d) &&
                      l((a.current.lastBounds = d));
                };
                return [e, f ? c()(e, f) : e, d ? c()(e, d) : e];
              }, [l, r, d, f]);
              function y() {
                a.current.scrollContainers &&
                  (a.current.scrollContainers.forEach((e) =>
                    e.removeEventListener("scroll", v, !0)
                  ),
                  (a.current.scrollContainers = null)),
                  a.current.resizeObserver &&
                    (a.current.resizeObserver.disconnect(),
                    (a.current.resizeObserver = null));
              }
              function _() {
                a.current.element &&
                  ((a.current.resizeObserver = new s(v)),
                  a.current.resizeObserver.observe(a.current.element),
                  t &&
                    a.current.scrollContainers &&
                    a.current.scrollContainers.forEach((e) =>
                      e.addEventListener("scroll", v, {
                        capture: !0,
                        passive: !0,
                      })
                    ));
              }
              return (
                (i = !!t),
                (0, o.useEffect)(() => {
                  if (i)
                    return (
                      window.addEventListener("scroll", v, {
                        capture: !0,
                        passive: !0,
                      }),
                      () => void window.removeEventListener("scroll", v, !0)
                    );
                }, [v, i]),
                (0, o.useEffect)(
                  () => (
                    window.addEventListener("resize", m),
                    () => void window.removeEventListener("resize", m)
                  ),
                  [m]
                ),
                (0, o.useEffect)(() => {
                  y(), _();
                }, [t, v, m]),
                (0, o.useEffect)(() => y, []),
                [
                  (e) => {
                    e &&
                      e !== a.current.element &&
                      (y(),
                      (a.current.element = e),
                      (a.current.scrollContainers = (function e(t) {
                        let n = [];
                        if (!t || t === document.body) return n;
                        let {
                          overflow: r,
                          overflowX: i,
                          overflowY: s,
                        } = window.getComputedStyle(t);
                        return (
                          [r, i, s].some(
                            (e) => "auto" === e || "scroll" === e
                          ) && n.push(t),
                          [...n, ...e(t.parentElement)]
                        );
                      })(e)),
                      _());
                  },
                  u,
                  p,
                ]
              );
            })({ scroll: !0, debounce: { scroll: 50, resize: 0 }, ...n }),
            L = o.useRef(null),
            N = o.useRef(null);
          o.useImperativeHandle(T, () => L.current);
          let B = (0, s.u)(O),
            [q, D] = o.useState(!1),
            [H, W] = o.useState(!1);
          if (q) throw q;
          if (H) throw H;
          let X = o.useRef(null);
          (0, s.a)(() => {
            let t = L.current;
            M.width > 0 &&
              M.height > 0 &&
              t &&
              (X.current || (X.current = (0, s.b)(t)),
              X.current.configure({
                gl: i,
                events: l,
                shadows: f,
                linear: h,
                flat: p,
                legacy: m,
                orthographic: v,
                frameloop: b,
                dpr: R,
                performance: C,
                raycaster: z,
                camera: E,
                scene: F,
                size: M,
                onPointerMissed: (...e) =>
                  null == B.current ? void 0 : B.current(...e),
                onCreated: (e) => {
                  null == e.events.connect ||
                    e.events.connect(
                      a ? ((0, s.i)(a) ? a.current : a) : N.current
                    ),
                    d &&
                      e.setEvents({
                        compute: (e, t) => {
                          let n = e[d + "X"],
                            r = e[d + "Y"];
                          t.pointer.set(
                            (n / t.size.width) * 2 - 1,
                            -((r / t.size.height) * 2) + 1
                          ),
                            t.raycaster.setFromCamera(t.pointer, t.camera);
                        },
                      }),
                    null == P || P(e);
                },
              }),
              X.current.render(
                (0, j.jsx)(A, {
                  children: (0, j.jsx)(s.E, {
                    set: W,
                    children: (0, j.jsx)(o.Suspense, {
                      fallback: (0, j.jsx)(s.B, { set: D }),
                      children: e,
                    }),
                  }),
                })
              ));
          }),
            o.useEffect(() => {
              let e = L.current;
              if (e) return () => (0, s.d)(e);
            }, []);
          let G = a ? "none" : "auto";
          return (0, j.jsx)("div", {
            ref: N,
            style: {
              position: "relative",
              width: "100%",
              height: "100%",
              overflow: "hidden",
              pointerEvents: G,
              ...r,
            },
            ...k,
            children: (0, j.jsx)("div", {
              ref: I,
              style: { width: "100%", height: "100%" },
              children: (0, j.jsx)("canvas", {
                ref: L,
                style: { display: "block" },
                children: t,
              }),
            }),
          });
        }),
        z = o.forwardRef(function (e, t) {
          return (0, j.jsx)(w, { children: (0, j.jsx)(C, { ...e, ref: t }) });
        });
    },
    4692: function (e) {
      function t(e, t, n) {
        function r() {
          var c = Date.now() - u;
          c < t && c >= 0
            ? (i = setTimeout(r, t - c))
            : ((i = null), n || ((l = e.apply(o, s)), (o = s = null)));
        }
        null == t && (t = 100);
        var i,
          s,
          o,
          u,
          l,
          c = function () {
            (o = this), (s = arguments), (u = Date.now());
            var c = n && !i;
            return (
              i || (i = setTimeout(r, t)),
              c && ((l = e.apply(o, s)), (o = s = null)),
              l
            );
          };
        return (
          (c.clear = function () {
            i && (clearTimeout(i), (i = null));
          }),
          (c.flush = function () {
            i &&
              ((l = e.apply(o, s)),
              (o = s = null),
              clearTimeout(i),
              (i = null));
          }),
          c
        );
      }
      (t.debounce = t), (e.exports = t);
    },
    7818: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return i.a;
        },
      });
      var r = n(551),
        i = n.n(r);
    },
    6810: function () {},
    551: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let r = n(9920);
      n(7437), n(2265);
      let i = r._(n(148));
      function s(e, t) {
        var n;
        let r = {
          loading: (e) => {
            let { error: t, isLoading: n, pastDelay: r } = e;
            return null;
          },
        };
        "function" == typeof e && (r.loader = e);
        let s = { ...r, ...t };
        return (0, i.default)({
          ...s,
          modules: null == (n = s.loadableGenerated) ? void 0 : n.modules,
        });
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    912: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "BailoutToCSR", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let r = n(5592);
      function i(e) {
        let { reason: t, children: n } = e;
        if ("undefined" == typeof window) throw new r.BailoutToCSRError(t);
        return n;
      }
    },
    148: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return c;
          },
        });
      let r = n(7437),
        i = n(2265),
        s = n(912),
        o = n(1481);
      function u(e) {
        return { default: e && "default" in e ? e.default : e };
      }
      let l = {
          loader: () => Promise.resolve(u(() => null)),
          loading: null,
          ssr: !0,
        },
        c = function (e) {
          let t = { ...l, ...e },
            n = (0, i.lazy)(() => t.loader().then(u)),
            c = t.loading;
          function a(e) {
            let u = c
                ? (0, r.jsx)(c, { isLoading: !0, pastDelay: !0, error: null })
                : null,
              l = t.ssr
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      "undefined" == typeof window
                        ? (0, r.jsx)(o.PreloadCss, { moduleIds: t.modules })
                        : null,
                      (0, r.jsx)(n, { ...e }),
                    ],
                  })
                : (0, r.jsx)(s.BailoutToCSR, {
                    reason: "next/dynamic",
                    children: (0, r.jsx)(n, { ...e }),
                  });
            return (0, r.jsx)(i.Suspense, { fallback: u, children: l });
          }
          return (a.displayName = "LoadableComponent"), a;
        };
    },
    1481: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "PreloadCss", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let r = n(7437),
        i = n(8512);
      function s(e) {
        let { moduleIds: t } = e;
        if ("undefined" != typeof window) return null;
        let n = (0, i.getExpectedRequestStore)("next/dynamic css"),
          s = [];
        if (n.reactLoadableManifest && t) {
          let e = n.reactLoadableManifest;
          for (let n of t) {
            if (!e[n]) continue;
            let t = e[n].files.filter((e) => e.endsWith(".css"));
            s.push(...t);
          }
        }
        return 0 === s.length
          ? null
          : (0, r.jsx)(r.Fragment, {
              children: s.map((e) =>
                (0, r.jsx)(
                  "link",
                  {
                    precedence: "dynamic",
                    rel: "stylesheet",
                    href: n.assetPrefix + "/_next/" + encodeURI(e),
                    as: "style",
                  },
                  e
                )
              ),
            });
      }
    },
    3398: function (e, t, n) {
      "use strict";
      var r = n(357);
      n(6810);
      var i = n(2265),
        s = i && "object" == typeof i && "default" in i ? i : { default: i },
        o = void 0 !== r && r.env && !0,
        u = function (e) {
          return "[object String]" === Object.prototype.toString.call(e);
        },
        l = (function () {
          function e(e) {
            var t = void 0 === e ? {} : e,
              n = t.name,
              r = void 0 === n ? "stylesheet" : n,
              i = t.optimizeForSpeed,
              s = void 0 === i ? o : i;
            c(u(r), "`name` must be a string"),
              (this._name = r),
              (this._deletedRulePlaceholder = "#" + r + "-deleted-rule____{}"),
              c("boolean" == typeof s, "`optimizeForSpeed` must be a boolean"),
              (this._optimizeForSpeed = s),
              (this._serverSheet = void 0),
              (this._tags = []),
              (this._injected = !1),
              (this._rulesCount = 0);
            var l =
              "undefined" != typeof window &&
              document.querySelector('meta[property="csp-nonce"]');
            this._nonce = l ? l.getAttribute("content") : null;
          }
          var t = e.prototype;
          return (
            (t.setOptimizeForSpeed = function (e) {
              c(
                "boolean" == typeof e,
                "`setOptimizeForSpeed` accepts a boolean"
              ),
                c(
                  0 === this._rulesCount,
                  "optimizeForSpeed cannot be when rules have already been inserted"
                ),
                this.flush(),
                (this._optimizeForSpeed = e),
                this.inject();
            }),
            (t.isOptimizeForSpeed = function () {
              return this._optimizeForSpeed;
            }),
            (t.inject = function () {
              var e = this;
              if (
                (c(!this._injected, "sheet already injected"),
                (this._injected = !0),
                "undefined" != typeof window && this._optimizeForSpeed)
              ) {
                (this._tags[0] = this.makeStyleTag(this._name)),
                  (this._optimizeForSpeed = "insertRule" in this.getSheet()),
                  this._optimizeForSpeed ||
                    (o ||
                      console.warn(
                        "StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."
                      ),
                    this.flush(),
                    (this._injected = !0));
                return;
              }
              this._serverSheet = {
                cssRules: [],
                insertRule: function (t, n) {
                  return (
                    "number" == typeof n
                      ? (e._serverSheet.cssRules[n] = { cssText: t })
                      : e._serverSheet.cssRules.push({ cssText: t }),
                    n
                  );
                },
                deleteRule: function (t) {
                  e._serverSheet.cssRules[t] = null;
                },
              };
            }),
            (t.getSheetForTag = function (e) {
              if (e.sheet) return e.sheet;
              for (var t = 0; t < document.styleSheets.length; t++)
                if (document.styleSheets[t].ownerNode === e)
                  return document.styleSheets[t];
            }),
            (t.getSheet = function () {
              return this.getSheetForTag(this._tags[this._tags.length - 1]);
            }),
            (t.insertRule = function (e, t) {
              if (
                (c(u(e), "`insertRule` accepts only strings"),
                "undefined" == typeof window)
              )
                return (
                  "number" != typeof t &&
                    (t = this._serverSheet.cssRules.length),
                  this._serverSheet.insertRule(e, t),
                  this._rulesCount++
                );
              if (this._optimizeForSpeed) {
                var n = this.getSheet();
                "number" != typeof t && (t = n.cssRules.length);
                try {
                  n.insertRule(e, t);
                } catch (t) {
                  return (
                    o ||
                      console.warn(
                        "StyleSheet: illegal rule: \n\n" +
                          e +
                          "\n\nSee https://stackoverflow.com/q/20007992 for more info"
                      ),
                    -1
                  );
                }
              } else {
                var r = this._tags[t];
                this._tags.push(this.makeStyleTag(this._name, e, r));
              }
              return this._rulesCount++;
            }),
            (t.replaceRule = function (e, t) {
              if (this._optimizeForSpeed || "undefined" == typeof window) {
                var n =
                  "undefined" != typeof window
                    ? this.getSheet()
                    : this._serverSheet;
                if (
                  (t.trim() || (t = this._deletedRulePlaceholder),
                  !n.cssRules[e])
                )
                  return e;
                n.deleteRule(e);
                try {
                  n.insertRule(t, e);
                } catch (r) {
                  o ||
                    console.warn(
                      "StyleSheet: illegal rule: \n\n" +
                        t +
                        "\n\nSee https://stackoverflow.com/q/20007992 for more info"
                    ),
                    n.insertRule(this._deletedRulePlaceholder, e);
                }
              } else {
                var r = this._tags[e];
                c(r, "old rule at index `" + e + "` not found"),
                  (r.textContent = t);
              }
              return e;
            }),
            (t.deleteRule = function (e) {
              if ("undefined" == typeof window) {
                this._serverSheet.deleteRule(e);
                return;
              }
              if (this._optimizeForSpeed) this.replaceRule(e, "");
              else {
                var t = this._tags[e];
                c(t, "rule at index `" + e + "` not found"),
                  t.parentNode.removeChild(t),
                  (this._tags[e] = null);
              }
            }),
            (t.flush = function () {
              (this._injected = !1),
                (this._rulesCount = 0),
                "undefined" != typeof window
                  ? (this._tags.forEach(function (e) {
                      return e && e.parentNode.removeChild(e);
                    }),
                    (this._tags = []))
                  : (this._serverSheet.cssRules = []);
            }),
            (t.cssRules = function () {
              var e = this;
              return "undefined" == typeof window
                ? this._serverSheet.cssRules
                : this._tags.reduce(function (t, n) {
                    return (
                      n
                        ? (t = t.concat(
                            Array.prototype.map.call(
                              e.getSheetForTag(n).cssRules,
                              function (t) {
                                return t.cssText === e._deletedRulePlaceholder
                                  ? null
                                  : t;
                              }
                            )
                          ))
                        : t.push(null),
                      t
                    );
                  }, []);
            }),
            (t.makeStyleTag = function (e, t, n) {
              t &&
                c(
                  u(t),
                  "makeStyleTag accepts only strings as second parameter"
                );
              var r = document.createElement("style");
              this._nonce && r.setAttribute("nonce", this._nonce),
                (r.type = "text/css"),
                r.setAttribute("data-" + e, ""),
                t && r.appendChild(document.createTextNode(t));
              var i = document.head || document.getElementsByTagName("head")[0];
              return n ? i.insertBefore(r, n) : i.appendChild(r), r;
            }),
            (function (e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            })(e.prototype, [
              {
                key: "length",
                get: function () {
                  return this._rulesCount;
                },
              },
            ]),
            e
          );
        })();
      function c(e, t) {
        if (!e) throw Error("StyleSheet: " + t + ".");
      }
      var a = function (e) {
          for (var t = 5381, n = e.length; n; )
            t = (33 * t) ^ e.charCodeAt(--n);
          return t >>> 0;
        },
        d = {};
      function f(e, t) {
        if (!t) return "jsx-" + e;
        var n = String(t),
          r = e + n;
        return d[r] || (d[r] = "jsx-" + a(e + "-" + n)), d[r];
      }
      function h(e, t) {
        "undefined" == typeof window &&
          (t = t.replace(/\/style/gi, "\\/style"));
        var n = e + t;
        return (
          d[n] || (d[n] = t.replace(/__jsx-style-dynamic-selector/g, e)), d[n]
        );
      }
      var p = (function () {
          function e(e) {
            var t = void 0 === e ? {} : e,
              n = t.styleSheet,
              r = void 0 === n ? null : n,
              i = t.optimizeForSpeed,
              s = void 0 !== i && i;
            (this._sheet =
              r || new l({ name: "styled-jsx", optimizeForSpeed: s })),
              this._sheet.inject(),
              r &&
                "boolean" == typeof s &&
                (this._sheet.setOptimizeForSpeed(s),
                (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
              (this._fromServer = void 0),
              (this._indices = {}),
              (this._instancesCounts = {});
          }
          var t = e.prototype;
          return (
            (t.add = function (e) {
              var t = this;
              void 0 === this._optimizeForSpeed &&
                ((this._optimizeForSpeed = Array.isArray(e.children)),
                this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),
                (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
                "undefined" == typeof window ||
                  this._fromServer ||
                  ((this._fromServer = this.selectFromServer()),
                  (this._instancesCounts = Object.keys(this._fromServer).reduce(
                    function (e, t) {
                      return (e[t] = 0), e;
                    },
                    {}
                  )));
              var n = this.getIdAndRules(e),
                r = n.styleId,
                i = n.rules;
              if (r in this._instancesCounts) {
                this._instancesCounts[r] += 1;
                return;
              }
              var s = i
                .map(function (e) {
                  return t._sheet.insertRule(e);
                })
                .filter(function (e) {
                  return -1 !== e;
                });
              (this._indices[r] = s), (this._instancesCounts[r] = 1);
            }),
            (t.remove = function (e) {
              var t = this,
                n = this.getIdAndRules(e).styleId;
              if (
                ((function (e, t) {
                  if (!e) throw Error("StyleSheetRegistry: " + t + ".");
                })(
                  n in this._instancesCounts,
                  "styleId: `" + n + "` not found"
                ),
                (this._instancesCounts[n] -= 1),
                this._instancesCounts[n] < 1)
              ) {
                var r = this._fromServer && this._fromServer[n];
                r
                  ? (r.parentNode.removeChild(r), delete this._fromServer[n])
                  : (this._indices[n].forEach(function (e) {
                      return t._sheet.deleteRule(e);
                    }),
                    delete this._indices[n]),
                  delete this._instancesCounts[n];
              }
            }),
            (t.update = function (e, t) {
              this.add(t), this.remove(e);
            }),
            (t.flush = function () {
              this._sheet.flush(),
                this._sheet.inject(),
                (this._fromServer = void 0),
                (this._indices = {}),
                (this._instancesCounts = {});
            }),
            (t.cssRules = function () {
              var e = this,
                t = this._fromServer
                  ? Object.keys(this._fromServer).map(function (t) {
                      return [t, e._fromServer[t]];
                    })
                  : [],
                n = this._sheet.cssRules();
              return t.concat(
                Object.keys(this._indices)
                  .map(function (t) {
                    return [
                      t,
                      e._indices[t]
                        .map(function (e) {
                          return n[e].cssText;
                        })
                        .join(e._optimizeForSpeed ? "" : "\n"),
                    ];
                  })
                  .filter(function (e) {
                    return !!e[1];
                  })
              );
            }),
            (t.styles = function (e) {
              var t, n;
              return (
                (t = this.cssRules()),
                void 0 === (n = e) && (n = {}),
                t.map(function (e) {
                  var t = e[0],
                    r = e[1];
                  return s.default.createElement("style", {
                    id: "__" + t,
                    key: "__" + t,
                    nonce: n.nonce ? n.nonce : void 0,
                    dangerouslySetInnerHTML: { __html: r },
                  });
                })
              );
            }),
            (t.getIdAndRules = function (e) {
              var t = e.children,
                n = e.dynamic,
                r = e.id;
              if (n) {
                var i = f(r, n);
                return {
                  styleId: i,
                  rules: Array.isArray(t)
                    ? t.map(function (e) {
                        return h(i, e);
                      })
                    : [h(i, t)],
                };
              }
              return { styleId: f(r), rules: Array.isArray(t) ? t : [t] };
            }),
            (t.selectFromServer = function () {
              return Array.prototype.slice
                .call(document.querySelectorAll('[id^="__jsx-"]'))
                .reduce(function (e, t) {
                  return (e[t.id.slice(2)] = t), e;
                }, {});
            }),
            e
          );
        })(),
        m = i.createContext(null);
      m.displayName = "StyleSheetContext";
      var v = s.default.useInsertionEffect || s.default.useLayoutEffect,
        y = "undefined" != typeof window ? new p() : void 0;
      function _(e) {
        var t = y || i.useContext(m);
        return (
          t &&
            ("undefined" == typeof window
              ? t.add(e)
              : v(
                  function () {
                    return (
                      t.add(e),
                      function () {
                        t.remove(e);
                      }
                    );
                  },
                  [e.id, String(e.dynamic)]
                )),
          null
        );
      }
      (_.dynamic = function (e) {
        return e
          .map(function (e) {
            return f(e[0], e[1]);
          })
          .join(" ");
      }),
        (t.style = _);
    },
    8059: function (e, t, n) {
      "use strict";
      e.exports = n(3398).style;
    },
    1846: function (e) {
      e.exports = {
        style: { fontFamily: "'__alpino_5a83fb', '__alpino_Fallback_5a83fb'" },
        className: "__className_5a83fb",
        variable: "__variable_5a83fb",
      };
    },
  },
]);
