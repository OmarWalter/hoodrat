(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    9338: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 2781)),
        Promise.resolve().then(r.bind(r, 7423)),
        Promise.resolve().then(r.bind(r, 5651)),
        Promise.resolve().then(r.bind(r, 4223)),
        Promise.resolve().then(r.bind(r, 7550));
    },
    7867: function (e, t, r) {
      "use strict";
      r.d(t, {
        g: function () {
          return a;
        },
      });
      var n = r(7437),
        i = r(4839);
      let a = (e) => {
        let { as: t = "section", className: r, children: a, ...o } = e;
        return (0, n.jsx)(t, {
          className: (0, i.Z)("px-4 first:pt-10 md:px-6", r),
          ...o,
          children: (0, n.jsx)("div", {
            className: "mx-auto flex w-full max-w-7xl flex-col items-center",
            children: a,
          }),
        });
      };
    },
    8198: function (e, t, r) {
      "use strict";
      r.d(t, {
        a: function () {
          return i;
        },
      });
      var n = r(2265);
      function i(e, t) {
        let r = (0, n.useCallback)(
          (t) => {
            let r = matchMedia(e);
            return (
              r.addEventListener("change", t),
              () => {
                r.removeEventListener("change", t);
              }
            );
          },
          [e]
        );
        return (0, n.useSyncExternalStore)(
          r,
          () => matchMedia(e).matches,
          () => t
        );
      }
    },
    2781: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return x;
        },
      });
      var n = r(7437),
        i = r(7867),
        a = r(8410),
        o = r(2325),
        s = r(4490),
        l = r(2265),
        c = r(9582),
        u = r(1204),
        d = r(19),
        m = r(8198);
      function h(e) {
        let {} = e,
          t = (0, l.useRef)(null),
          r = (0, m.a)("(min-width: 768px)", !0),
          i = ["#f6002c", "#E9CFF6", "#CBEF9A"];
        return (
          (0, d.V)(
            () => {
              if (!t.current) return;
              let e = c.ZP.utils.toArray(".alternating-section"),
                n = c.ZP.timeline({
                  scrollTrigger: {
                    trigger: ".alternating-text-view",
                    endTrigger: ".alternating-text-container",
                    pin: !0,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: !0,
                  },
                });
              e.forEach((e, a) => {
                if (!t.current || 0 === a) return;
                let o = a % 2 != 0;
                n.to(t.current.position, {
                  x: r ? (o ? "-1" : "1") : 0,
                  ease: "circ.inOut",
                  delay: 0.5,
                })
                  .to(
                    t.current.rotation,
                    { y: r ? (o ? ".4" : "-.4") : 0, ease: "back.inOut" },
                    "<"
                  )
                  .to(".alternating-text-container", {
                    backgroundColor: c.ZP.utils.wrap(i, a),
                  });
              });
            },
            { dependencies: [r] }
          ),
          (0, n.jsxs)("group", {
            ref: t,
            "position-x": r ? 1 : 0,
            "rotation-y": r ? -0.3 : 0,
            children: [
              (0, n.jsx)("ambientLight", { intensity: 0.3 }),
              (0, n.jsx)(o.V, {
                transform: !0,
                wrapperClass: "video-wrapper",
                distanceFactor: 1.5,
                position: [0, 0, 0],
                children: (0, n.jsx)("img", {
                  src: "/webm/sprinkle.png", // ← use your PNG path
                  style: {
                    width: "300px",
                    height: "auto",
                    borderRadius: "8px",
                    background: "transparent",
                    outline: "none",
                    pointerEvents: "none",
                  },
                  alt: "sprinkle",
                }),
              }),
              (0, n.jsx)(s.qA, {
                files: "/hdr/lobby.hdr",
                environmentIntensity: 1.5,
              }),
            ],
          })
        );
      }
      c.ZP.registerPlugin(u.i, d.V);
      var p = r(4839),
        x = () =>
          (0, n.jsx)(i.g, {
            className: "alternating-text-container relative text-sky-950",
            children: (0, n.jsx)("div", {
              children: (0, n.jsxs)("div", {
                className: "relative z-[100] grid",
                children: [
                  (0, n.jsx)(a.G, {
                    className:
                      "alternating-text-view absolute left-0 top-0 h-screen w-full",
                    children: (0, n.jsx)(h, {}),
                  }),
                  [
                    {
                      heading: [
                        { text: "Hidden Gem ", type: "heading2" },
                      ],
                      body: [
                        {
                          text: "Mystery's best friend and Toki's master 🏆Legends like you recognize the narrative and thus potential early enough 🥂 be a part of it, mass adoption incoming, it's simple math 🚀",
                        },
                      ],
                    },
                    {
                      heading: [
                        { text: "Personality", type: "heading2" },
                      ],
                      body: [
                        {
                          text: "Hoodrat loves playing video games and hanging out in his cave. He’s the wild card of the group, often leading the characters into unpredictable situations. Despite his mischievous nature, he’s a loyal companion, always sticking with the group through the many fantastical challenges they face.",
                        },
                      ],
                    },
                    {
                      heading: [
                        { text: "Biography", type: "heading2" },
                      ],
                      body: [
                        {
                          text: "Hoodrat is playing video games in his cave when he's suddenly startled by Mystery, who enters unannounced, guided by Toki. After the surprise, the two shake hands, and the group, along with Wat, sets off for a ride. Later, they head to the beach for a swim, follow a mountain trail, and watch the sunset together.",
                        },
                      ],
                    },
                  ].map((e, t) => {
                    var r, i, a;
                    return (0, n.jsx)(
                      "div",
                      {
                        className:
                          "alternating-section grid h-screen place-items-center gap-x-12 md:grid-cols-2",
                        children: (0, n.jsxs)("div", {
                          className: (0, p.Z)(
                            t % 2 == 0 ? "col-start-1" : "md:col-start-2",
                            "rounded-lg p-4 backdrop-blur-lg max-md:bg-white/30"
                          ),
                          children: [
                            (0, n.jsx)("h2", {
                              className: "text-balance text-6xl font-bold",
                              children:
                                null === (r = e.heading[0]) || void 0 === r
                                  ? void 0
                                  : r.text,
                            }),
                            (0, n.jsx)("div", {
                              className: "mt-4 text-xl",
                              children: (0, n.jsx)("p", {
                                children:
                                  null === (i = e.body[0]) || void 0 === i
                                    ? void 0
                                    : i.text,
                              }),
                            }),
                          ],
                        }),
                      },
                      (null === (a = e.heading[0]) || void 0 === a
                        ? void 0
                        : a.text) || t
                    );
                  }),
                ],
              }),
            }),
          });
    },
    7423: function (e, t, r) {
      "use strict";
      var n = r(7437);
      t.default = () =>
        (0, n.jsx)("section", {
          className:
            "flex min-h-screen w-screen items-center justify-center overflow-hidden bg-[#FE6334] p-10 text-[#FEE832]",
          children: (0, n.jsxs)("div", {
            className:
              "flex flex-col items-center justify-center text-center font-black uppercase leading-[0.8]",
            children: [
              (0, n.jsx)("h2", {
                className: "flex flex-col",
                children: (0, n.jsx)("span", {
                  className: "text-[20vw] md:text-[20vw] lg:text-[20.5vw]",
                  children: "Hoodrat",
                }),
              }),
              (0, n.jsxs)("h4", {
                className:
                  "my-[2vw] flex flex-row items-center justify-center gap-[4vw] text-[31vw] md:flex-row md:text-[31vw] lg:text-[32vw]",
                children: [
                  (0, n.jsx)("span", { children: "is" }),
                  (0, n.jsx)("span", { children: "here" }),
                ],
              }),
              (0, n.jsx)("h3", {
                className: "text-[30vw] md:text-[32vw] lg:text-[32vw]",
                children: "Now.",
              }),
            ],
          }),
        });
    },
    5651: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return h;
        },
      });
      var n = r(7437),
        i = r(2265),
        a = r(4839),
        o = r(9582);
      function s(e) {
        return (0, n.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 52 52",
          ...e,
          children: (0, n.jsx)("path", {
            fill: "currentColor",
            d: "M9 25.7c0 1.1.6 2.2 1.1 2.8l18.6 18.6a4.4 4.4 0 006.2 0 4.4 4.4 0 000-6.2L19.7 25.7 35 10.5a4.4 4.4 0 000-6.2 4.4 4.4 0 00-6.2 0l-18 18C9.6 23.4 9 24.6 9 25.7z",
          }),
        });
      }
      var l = r(19);
      function c(e) {
        return (
          (0, l.V)(() => {
            o.p8.to(".wavy-circles-inner", {
              transformOrigin: "center",
              rotate: "360",
              duration: 16,
              ease: "none",
              repeat: -1,
            }),
              o.p8.to(".wavy-circles-outer", {
                transformOrigin: "center",
                rotate: "-360",
                duration: 22,
                scale: 1,
                ease: "none",
                repeat: -1,
              });
          }),
          (0, n.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 1165 1166",
            ...e,
            children: [
              (0, n.jsx)("path", {
                className: "wavy-circles-outer",
                fill: "currentColor",
                d: "M1133.5 619c-5 76.2-84.8 126.7-113.5 183.3-28.7 56.6-20.8 149-74 195.6-53 46.6-143.6 26.9-203.4 48-59.9 21.2-120.2 93.8-196.5 88.9-76.2-5-126.6-86.2-183.2-113.5-56.6-28.7-149-20.8-195.6-74-46.7-53-26.9-143.6-46.7-203.4-19.8-59.7-93.7-121.5-88.8-196.4 4.8-74.8 84.8-128 113.6-184.6 28.7-56.6 19.4-149 72.5-195.7 53.1-46.7 143.7-26.9 203.4-46.7C481 100.8 543 26.8 619.1 31.8c76.2 5 126.7 84.7 183.3 113.5 56.6 28.7 149 19.4 195.7 72.5 46.6 53.1 26.8 143.7 48 203.5 19.8 59.7 92.3 121.5 87.4 197.7z",
                opacity: "0.5",
              }),
              (0, n.jsx)("path", {
                className: "wavy-circles-inner",
                fill: "currentColor",
                d: "M827.9 672.6c-12.4 34-55.3 46.3-75.9 68.2-20.5 22-29.2 64.9-59.5 79-30.3 14.2-68.8-6.8-98.7-5.1-30 1.6-67 26.6-101 14.2-33.9-12.3-46-55.9-68-75.8-22-20.5-65-29.2-79-59.5-14.1-30.3 6.9-68.8 5.8-98.6-1-29.7-26.4-67.6-14.2-101 12.1-33.3 55.5-46.9 76-68.8 20.6-21.8 28.6-65 59-79.2 30.2-14.1 68.7 6.9 98.4 5.8 29.8-1 67.7-26.4 101.6-14 34 12.3 46.2 55.2 68.1 75.8 21.9 20.5 65 28.6 79.2 58.9 14.1 30.3-6.9 68.8-5.2 98.8 1 29.7 25.7 67.4 13.4 101.3z",
                opacity: "0.5",
              }),
            ],
          })
        );
      }
      o.p8.registerPlugin(l.V);
      let u = [
          { flavor: "blackCherry", color: "#710523", name: "Black Cherry" },
          { flavor: "grape", color: "#572981", name: "Grape Goodness" },
          { flavor: "lemonLime", color: "#164405", name: "Lemon Lime" },
          {
            flavor: "strawberryLemonade",
            color: "#690B3D",
            name: "Strawberry Lemonade",
          },
          { flavor: "watermelon", color: "#4B7002", name: "Watermelon Crush" },
        ],
        d = [
          {
            id: "robed",
            slides: [
              "Title: “Hoodrat by Matt Furie: Official Currency of Unlicensed Gurus”",
              "Abstract: “Wear the robe. Skip the sermon.”",
              "Tokenomics: “Burns when you apologize for being extra.”",
              "Utility: “Grants +10 aura. -10 for bad vibes.”",
              "Fine Print: “Sandals mandatory. Socks punishable.”",
            ],
          },
          {
            id: "taco",
            slides: [
              "Title: “Hoodrat by Matt Furie: Taco-Secured Blockchain”",
              "Abstract: “If the tacos stop, the chain breaks.”",
              "Tokenomics: “Inflation = guac prices. Deflation = nap time.”",
              "Staking: “Lock tokens. Earn crunch.”",
              "Risk: “May cause sudden enlightenment or salsa addiction.”",
            ],
          },
          {
            id: "frogs",
            slides: [
              "Title: “Hoodrat by Matt Furie: Frog-Resistant Asset Class”",
              "Abstract: “They tried suits. They failed. We laughed.”",
              "Tokenomics: “50% Hoodrat by Matt Furie. 50% ‘idk man just vibes’.”",
              "Governance: “Decisions made via rock-paper-scissors-lizard-Spock.”",
              "Note: “Frogs may audit. Results ignored.”",
            ],
          },
          {
            id: "lost",
            slides: [
              "Title: “Hoodrat by Matt Furie: For the Spiritually Unemployable”",
              "Abstract: “No roadmap. Just vibes & questionable decisions.”",
              "Tokenomics: “Mints when Hoodrat by Matt Furie says ‘Wait, that’s a good idea?’”",
              "Use: “Trade for wisdom, tacos, or someone else’s problems.”",
              "Exit Strategy: “There isn’t one. You’re part of the art now.”",
            ],
          },
          {
            id: "third",
            slides: [
              "Title: “Hoodrat by Matt Furie: Third Eye Verified. Wallet Not Required.”",
              "Abstract: “If you ‘get it,’ you’re already holding.”",
              "Tokenomics: “Supply = how many frogs I ignored today.”",
              "Utility: “Worthless? Maybe. Worth it? Absolutely.”",
              "Warning: “May cause spontaneous smirking in serious situations.”",
            ],
          },
          {
            id: "avocado",
            slides: [
              "Title: “Hoodrat by Matt Furie: Backed by Avocado Toast & Cosmic Irony”",
              "Abstract: “Boomers hate it. Millennials manifest with it.”",
              "Tokenomics: “Price = cost of brunch \xf7 emotional damage.”",
              "Staking: “Hold to earn ‘Basic Witch Energy’ NFTs.”",
              "Note: “Millennials: this won’t buy a house. But it’ll buy vibes.”",
            ],
          },
        ],
        m = [
          {
            image: "/webm/img1.png",
            name: "Manifestation",
          },
          { image: "/webm/img2.png", name: "Awakening" },
          { image: "/webm/img3.png", name: "Chaos" },
          { image: "/webm/img4.png", name: "Profit?" },
          { image: "/webm/img5.png", name: "Nirvana" },
        ];
      var h = () => {
        let [e, t] = (0, i.useState)(0),
          [r, s] = (0, i.useState)(0),
          l = (0, i.useRef)(null),
          h = (0, i.useRef)(0);
        (0, i.useEffect)(() => {
          l.current &&
            o.ZP.set(l.current, {
              rotation: 0,
              transformOrigin: "center center",
            });
        }, []);
        let x = (n) => {
            if (!l.current) return;
            let i = d.length,
              a = e + n,
              c = r;
            a >= 5
              ? ((a = 0), (c = (r + 1) % i))
              : a < 0 && ((a = 4), (c = (r - 1 + i) % i));
            let m = h.current + 2880 * (n > 0 ? -1 : 1),
              p = u[a].color;
            o.ZP.timeline()
              .to(
                l.current,
                {
                  rotation: m,
                  ease: "power2.inOut",
                  duration: 1,
                  onComplete: () => {
                    h.current = m;
                  },
                },
                0
              )
              .to(
                ".background",
                { backgroundColor: p, ease: "power2.inOut", duration: 1 },
                0
              )
              .to(
                ".wavy-circles-wrapper",
                { color: p, ease: "power2.inOut", duration: 1 },
                0
              )
              .to(".text-wrapper", { duration: 0.2, y: -10, opacity: 0 }, 0)
              .to(
                {},
                {
                  onStart: () => {
                    t(a), s(c);
                  },
                },
                0.5
              )
              .to(".text-wrapper", { duration: 0.2, y: 0, opacity: 1 }, 0.7);
          },
          f = d[r].slides[e],
          g = m[e],
          v = u[e].color;
        return (0, n.jsxs)("section", {
          className:
            "carousel relative grid h-screen grid-rows-[auto,4fr,auto] justify-center overflow-hidden bg-white py-12 text-white",
          children: [
            (0, n.jsx)("div", {
              className:
                "background pointer-events-none absolute inset-0 bg-[#710423] opacity-50",
              style: { backgroundColor: v, transition: "none" },
            }),
            (0, n.jsx)("div", {
              className: "wavy-circles-wrapper",
              style: { color: v },
              children: (0, n.jsx)(c, {
                className:
                  "absolute left-1/2 top-1/2 h-[120vmin] -translate-x-1/2 -translate-y-1/2",
              }),
            }),
            (0, n.jsx)("h2", {
              className: "relative text-center text-5xl font-bold",
              children: "Gallery",
            }),
            (0, n.jsxs)("div", {
              className: "grid grid-cols-[auto,auto,auto] items-center",
              children: [
                (0, n.jsx)(p, {
                  onClick: () => x(-1),
                  direction: "left",
                  label: "Previous",
                }),
                (0, n.jsx)("div", {
                  className:
                    "relative flex aspect-square h-[85vmin] min-h-40 items-center justify-center",
                  children: (0, n.jsx)("img", {
                    ref: l,
                    src: g.image, // ← changed from g.video
                    className: (0, a.Z)(
                      "max-h-full max-w-full object-contain",
                      "preserve-3d origin-center transform will-change-transform",
                      "translate-y-[-35%] scale-75 md:translate-y-0 md:scale-150",
                      "transition-transform duration-300 ease-out"
                    ),
                    alt: g.name, // ← replaces aria-label
                  }),
                }),
                (0, n.jsx)(p, {
                  onClick: () => x(1),
                  direction: "right",
                  label: "Next",
                }),
              ],
            }),
            // (0, n.jsx)("div", {
            //   className: "text-area relative mx-auto text-center",
            //   children: (0, n.jsx)("div", {
            //     className: "text-wrapper text-4xl font-medium",
            //     children: (0, n.jsx)("div", { children: f }),
            //   }),
            // }),
          ],
        });
      };
      function p(e) {
        let { label: t, onClick: r, direction: i = "right" } = e;
        return (0, n.jsx)("button", {
          onClick: r,
          className:
            "size-12 rounded-full border-2 border-white bg-white/10 p-3 opacity-85 ring-white focus:outline-none focus-visible:opacity-100 focus-visible:ring-4 md:size-16 lg:size-20",
          "aria-label": t,
          children: (0, n.jsx)(s, {
            className: (0, a.Z)("right" === i && "-scale-x-100"),
          }),
        });
      }
    },
    4223: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return N;
        },
      });
      var n = r(7437),
        i = r(9582),
        a = r(19),
        o = r(1204),
        s = r(7867),
        l = r(7138),
        c = r(2265);
      function u(e) {
        let { buttonLink: t, buttonText: r } = e;
        return (0, n.jsx)(l.default, {
          className:
            "rounded-xl bg-orange-600 px-5 py-4 text-center text-xl font-bold uppercase tracking-wide text-white transition-colors duration-150 hover:bg-orange-700 md:text-2xl",
          href: t.url,
          target: t.target,
          children: r,
        });
      }
      var d = r(4839);
      function m(e) {
        let { text: t, className: r, wordDisplayStyle: i = "inline-block" } = e;
        if (!t) return null;
        let a = t.split(" ");
        return a.map((e, t) => {
          let o = e.split("");
          return (0, n.jsxs)(
            "span",
            {
              className: (0, d.Z)("split-word", r),
              style: { display: i, whiteSpace: "pre" },
              children: [
                o.map((e, r) =>
                  " " === e
                    ? " "
                    : (0, n.jsx)(
                        "span",
                        {
                          className: "split-char inline-block split-char--"
                            .concat(t, "-")
                            .concat(r),
                          children: e,
                        },
                        r
                      )
                ),
                t < a.length - 1
                  ? (0, n.jsx)("span", {
                      className: "split-char",
                      children: " ",
                    })
                  : "",
              ],
            },
            "".concat(t, "-").concat(e)
          );
        });
      }
      var h = r(6648),
        p = r(8410),
        x = r(4490);
      let f = (0, r(9099).Ue)((e) => ({
        ready: !1,
        isReady: () => e({ ready: !0 }),
      }));
      var g = r(789),
        v = r(854),
        b = r(7776);
      let y = (0, c.forwardRef)((e, t) => {
        let {
            floatSpeed: r = 1.5,
            rotationIntensity: i = 1,
            floatIntensity: a = 1,
            floatingRange: o = [-0.1, 0.1],
            texturePath: s = "/cube/img1.webp",
            children: l,
            ...u
          } = e,
          d = (0, v.mE)(s),
          m = (0, c.useRef)(null);
        return (
          (0, c.useEffect)(() => {
            d &&
              ((d.wrapS = b.ClampToEdgeWrapping),
              (d.wrapT = b.ClampToEdgeWrapping),
              (d.needsUpdate = !0));
          }, [d]),
          (0, n.jsx)("group", {
            ref: t,
            ...u,
            children: (0, n.jsxs)(g.b, {
              speed: r,
              rotationIntensity: i,
              floatIntensity: a,
              floatingRange: o,
              children: [
                l,
                (0, n.jsxs)("mesh", {
                  ref: m,
                  children: [
                    (0, n.jsx)("boxGeometry", { args: [1, 1, 1] }),
                    (0, n.jsx)("meshStandardMaterial", { map: d }),
                  ],
                }),
              ],
            }),
          })
        );
      });
      function w(e) {
        let {} = e,
          t = f((e) => e.isReady),
          r = (0, c.useRef)(null),
          o = (0, c.useRef)(null),
          s = (0, c.useRef)(null),
          l = (0, c.useRef)(null),
          u = (0, c.useRef)(null),
          d = (0, c.useRef)(null),
          m = (0, c.useRef)(null),
          h = (0, c.useRef)(null);
        return (
          (0, a.V)(() => {
            if (
              !r.current ||
              !o.current ||
              !s.current ||
              !l.current ||
              !u.current ||
              !d.current ||
              !m.current ||
              !h.current
            )
              return;
            t(),
              i.ZP.set(r.current.position, { x: -1.5 }),
              i.ZP.set(r.current.rotation, { z: -0.5 }),
              i.ZP.set(o.current.position, { x: 1.5 }),
              i.ZP.set(o.current.rotation, { z: 0.5 }),
              i.ZP.set(s.current.position, { y: 5, z: 2 }),
              i.ZP.set(l.current.position, { x: 2, y: 4, z: 2 }),
              i.ZP.set(u.current.position, { y: -5 });
            let e = i.ZP.timeline({
              defaults: { duration: 3, ease: "back.out(1.4)" },
            });
            window.scrollY < 20 &&
              e
                .from(d.current.position, { y: -5, x: 1 }, 0)
                .from(d.current.rotation, { z: 3 }, 0)
                .from(m.current.position, { y: 5, x: 1 }, 0)
                .from(m.current.rotation, { z: 3 }, 0),
              i.ZP.timeline({
                defaults: { duration: 2 },
                scrollTrigger: {
                  trigger: ".hero",
                  start: "top top",
                  end: "bottom bottom",
                  scrub: 1.5,
                },
              })
                .to(h.current.rotation, { y: 2 * Math.PI })
                .to(r.current.position, { x: -0.2, y: -0.7, z: -2 }, 0)
                .to(r.current.rotation, { z: 0.3 }, 0)
                .to(o.current.position, { x: 1, y: -0.2, z: -1 }, 0)
                .to(o.current.rotation, { z: 0 }, 0)
                .to(s.current.position, { x: -0.3, y: 0.5, z: -1 }, 0)
                .to(s.current.rotation, { z: -0.1 }, 0)
                .to(l.current.position, { x: 0, y: -0.3, z: 0.5 }, 0)
                .to(l.current.rotation, { z: 0.3 }, 0)
                .to(u.current.position, { x: 0.3, y: 0.5, z: -0.5 }, 0)
                .to(u.current.rotation, { z: -0.25 }, 0)
                .to(
                  h.current.position,
                  { x: 1, duration: 3, ease: "sine.inOut" },
                  1.3
                );
          }),
          (0, n.jsxs)("group", {
            ref: h,
            children: [
              (0, n.jsx)("group", {
                ref: d,
                children: (0, n.jsx)(y, {
                  ref: r,
                  texturePath: "/cube/img1.webp",
                  floatSpeed: 1.5,
                }),
              }),
              (0, n.jsx)("group", {
                ref: m,
                children: (0, n.jsx)(y, {
                  ref: o,
                  texturePath: "/cube/img2.webp",
                  floatSpeed: 1.5,
                }),
              }),
              (0, n.jsx)(y, {
                ref: s,
                texturePath: "/cube/img3.webp",
                floatSpeed: 1.5,
              }),
              (0, n.jsx)(y, {
                ref: l,
                texturePath: "/cube/img4.webp",
                floatSpeed: 1.5,
              }),
              (0, n.jsx)(y, {
                ref: u,
                texturePath: "/cube/img5.webp",
                floatSpeed: 1.5,
              }),
              (0, n.jsx)(x.qA, {
                files: "/hdr/lobby.hdr",
                environmentIntensity: 1.5,
              }),
            ],
          })
        );
      }
      (y.displayName = "FloatingCube"), i.ZP.registerPlugin(a.V, o.i);
      var j = r(8914);
      function k(e) {
        let {
            count: t = 10,
            speed: r = 1,
            bubbleSize: a = 0.5,
            opacity: o = 0.55,
            repeat: s = !0,
          } = e,
          l = (0, c.useRef)(null),
          u = (0, c.useRef)(null),
          d = (0, c.useRef)(null),
          m = (0, v.mE)("/star.png"),
          h = 0.001 * r,
          p = 0.005 * r;
        (0, c.useEffect)(() => {
          let e = new Float32Array(3 * t),
            r = new Float32Array(t);
          for (let n = 0; n < t; n++) {
            let t = 3 * n;
            (e[t] = i.ZP.utils.random(-4, 4)),
              (e[t + 1] = i.ZP.utils.random(-4, 4)),
              (e[t + 2] = i.ZP.utils.random(-4, 4)),
              (r[n] = i.ZP.utils.random(h, p));
          }
          (u.current = e), (d.current = r);
          let n = new b.BufferGeometry();
          return (
            n.setAttribute("position", new b.BufferAttribute(e, 3)),
            l.current && (l.current.geometry = n),
            () => {
              n.dispose();
            }
          );
        }, [t, h, p]),
          (0, j.F)(() => {
            let e = l.current;
            if (!e || !u.current || !d.current) return;
            let r = u.current,
              n = d.current;
            for (let e = 0; e < t; e++) {
              let t = 3 * e;
              (r[t + 1] += n[e]),
                r[t + 1] > 4 &&
                  s &&
                  ((r[t + 1] = -2),
                  (r[t] = i.ZP.utils.random(-4, 4)),
                  (r[t + 2] = i.ZP.utils.random(0, 8)));
            }
            e.geometry.attributes.position.needsUpdate = !0;
          }),
          (m.colorSpace = b.SRGBColorSpace);
        let x = new b.PointsMaterial({
          size: a,
          map: m,
          transparent: !0,
          opacity: o,
          depthWrite: !1,
          blending: b.NormalBlending,
          sizeAttenuation: !0,
          alphaTest: 0.05,
        });
        return (0, n.jsx)("points", {
          ref: l,
          position: [0, 0, 0],
          material: x,
        });
      }
      var C = r(8198);
      i.ZP.registerPlugin(a.V, o.i);
      var N = () => {
        let e = f((e) => e.ready),
          t = (0, C.a)("(min-width: 768px)", !0);
        return (
          (0, a.V)(
            () => {
              (e || !t) &&
                (i.ZP.timeline()
                  .set(".hero", { opacity: 1 })
                  .from(".hero-header-word", {
                    scale: 3,
                    ease: "power4.in",
                    opacity: 0,
                    delay: 0.3,
                    stagger: 1,
                  })
                  .from(".hero-subheading", { opacity: 0, y: 30 }, "+=.8")
                  .from(".hero-body", { opacity: 0, y: 10 })
                  .from(".hero-social", { opacity: 0, y: 10, duration: 0.6 }),
                i.ZP.timeline({
                  scrollTrigger: {
                    trigger: ".hero",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1.5,
                  },
                })
                  .fromTo(
                    "body",
                    { backgroundColor: "#FDE047" },
                    { backgroundColor: "#D9F99D", overwrite: "auto" },
                    1
                  )
                  .from(".text-side-heading .split-char", {
                    scale: 1.3,
                    y: 40,
                    rotate: -25,
                    opacity: 0,
                    stagger: 0.1,
                    ease: "back.out(3)",
                    duration: 0.5,
                  })
                  .from(".text-side-body", { y: 20, opacity: 0 }));
            },
            { dependencies: [e, t] }
          ),
          (0, n.jsxs)(s.g, {
            className: "hero relative z-10 opacity-0",
            children: [
              t &&
                (0, n.jsxs)(p.G, {
                  className:
                    "hero-scene pointer-events-none sticky top-0 z-0 -mt-[100vh] hidden h-screen w-screen md:block",
                  children: [
                    (0, n.jsx)(w, {}),
                    (0, n.jsx)(k, { count: 300, speed: 2, repeat: !0 }),
                  ],
                }),
              (0, n.jsxs)("div", {
                className: "grid",
                children: [
                  (0, n.jsx)("div", {
                    className: "grid h-screen place-items-center",
                    children: (0, n.jsxs)("div", {
                      className:
                        "grid auto-rows-min place-items-center text-center",
                      children: [
                        (0, n.jsx)("h1", {
                          className:
                            "hero-header text-8xl font-black uppercase leading-[.8] text-orange-500 md:text-[9rem] lg:text-[13rem]",
                          style: {
                            fontFamily: "'Bitcount Grid Double', monospace",
                            fontWeight: 500,
                          },
                          children: (0, n.jsx)(m, {
                            text: "Hoodrat By Matt Furie",
                            wordDisplayStyle: "block",
                            className: "hero-header-word",
                          }),
                        }),
                        (0, n.jsx)("div", {
                          className:
                            "hero-subheading mt-12 text-5xl font-semibold text-sky-950 lg:text-6xl",
                          style: { fontFamily: "'Barriecito', cursive" },
                          // children: (0, n.jsx)("div", { children: "DEGENS" }),
                        }),
                        (0, n.jsx)("div", {
                          className:
                            "hero-body text-2xl font-normal text-sky-950",
                          children: (0, n.jsx)("p", {
                            children:
                              "Mystery's best friend and Toki's master from the og book 'The Night Riders'",
                          }),
                        }),
                        (0, n.jsxs)("div", {
                          className:
                            "hero-social relative z-20 mt-12 flex items-center gap-4",
                          children: [
                            (0, n.jsx)(u, {
                              buttonLink: {
                                url: "https://app.uniswap.org/swap?chain=mainnet&inputCurrency=NATIVE&outputCurrency=0xComingSoon",
                                target: "_blank",
                              },
                              buttonText: "Buy Now",
                            }),
                            (0, n.jsxs)("a", {
                              href: "https://x.com/hoodratbymf",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className:
                                "group relative flex h-14 w-14 items-center justify-center rounded-full bg-black transition-all duration-300 hover:scale-105",
                              "aria-label": "Twitter",
                              children: [
                                (0, n.jsx)("span", {
                                  className:
                                    "absolute inset-0 rounded-full border-2 border-transparent opacity-0 transition-opacity duration-300 group-hover:-inset-1 group-hover:border-black group-hover:opacity-100",
                                }),
                                (0, n.jsx)("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "20",
                                  height: "20",
                                  viewBox: "0 0 24 24",
                                  fill: "currentColor",
                                  className: "text-white",
                                  children: (0, n.jsx)("path", {
                                    d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
                                  }),
                                }),
                              ],
                            }),
                            (0, n.jsxs)("a", {
                              href: "https://t.me/hoodratbymf",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className:
                                "group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#26a5e4] transition-all duration-300 hover:scale-105",
                              "aria-label": "Telegram",
                              children: [
                                (0, n.jsx)("span", {
                                  className:
                                    "absolute inset-0 rounded-full border-2 border-transparent opacity-0 transition-opacity duration-300 group-hover:-inset-1 group-hover:border-black group-hover:opacity-100",
                                }),
                                (0, n.jsx)("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "20",
                                  height: "20",
                                  viewBox: "0 0 50 50",
                                  fill: "currentColor",
                                  className: "text-white",
                                  children: (0, n.jsx)("path", {
                                    d: "M 44.376953 5.9863281 C 43.889905 6.0076957 43.415817 6.1432497 42.988281 6.3144531 C 42.565113 6.4845113 40.128883 7.5243408 36.53125 9.0625 C 32.933617 10.600659 28.256963 12.603668 23.621094 14.589844 C 14.349356 18.562196 5.2382813 22.470703 5.2382812 22.470703 L 5.3046875 22.445312 C 5.3046875 22.445312 4.7547875 22.629122 4.1972656 23.017578 C 3.9185047 23.211806 3.6186028 23.462555 3.3730469 23.828125 C 3.127491 24.193695 2.9479735 24.711788 3.015625 25.259766 C 3.2532479 27.184511 5.2480469 27.730469 5.2480469 27.730469 L 5.2558594 27.734375 L 14.158203 30.78125 C 14.385177 31.538434 16.858319 39.792923 17.402344 41.541016 C 17.702797 42.507484 17.984013 43.064995 18.277344 43.445312 C 18.424133 43.635633 18.577962 43.782915 18.748047 43.890625 C 18.815627 43.933415 18.8867 43.965525 18.957031 43.994141 C 18.958531 43.994806 18.959437 43.99348 18.960938 43.994141 C 18.969579 43.997952 18.977708 43.998295 18.986328 44.001953 L 18.962891 43.996094 C 18.979231 44.002694 18.995359 44.013801 19.011719 44.019531 C 19.043456 44.030655 19.062905 44.030268 19.103516 44.039062 C 20.123059 44.395042 20.966797 43.734375 20.966797 43.734375 L 21.001953 43.707031 L 26.470703 38.634766 L 35.345703 45.554688 L 35.457031 45.605469 C 37.010484 46.295216 38.415349 45.910403 39.193359 45.277344 C 39.97137 44.644284 40.277344 43.828125 40.277344 43.828125 L 40.310547 43.742188 L 46.832031 9.7519531 C 46.998903 8.9915162 47.022612 8.334202 46.865234 7.7402344 C 46.707857 7.1462668 46.325492 6.6299361 45.845703 6.34375 C 45.365914 6.0575639 44.864001 5.9649605 44.376953 5.9863281 z M 44.429688 8.0195312 C 44.627491 8.0103707 44.774102 8.032983 44.820312 8.0605469 C 44.866523 8.0881109 44.887272 8.0844829 44.931641 8.2519531 C 44.976011 8.419423 45.000036 8.7721605 44.878906 9.3242188 L 44.875 9.3359375 L 38.390625 43.128906 C 38.375275 43.162926 38.240151 43.475531 37.931641 43.726562 C 37.616914 43.982653 37.266874 44.182554 36.337891 43.792969 L 26.632812 36.224609 L 26.359375 36.009766 L 26.353516 36.015625 L 23.451172 33.837891 L 39.761719 14.648438 A 1.0001 1.0001 0 0 0 38.974609 13 A 1.0001 1.0001 0 0 0 38.445312 13.167969 L 14.84375 28.902344 L 5.9277344 25.849609 C 5.9277344 25.849609 5.0423771 25.356927 5 25.013672 C 4.99765 24.994652 4.9871961 25.011869 5.0332031 24.943359 C 5.0792101 24.874869 5.1948546 24.759225 5.3398438 24.658203 C 5.6298218 24.456159 5.9609375 24.333984 5.9609375 24.333984 L 5.9941406 24.322266 L 6.0273438 24.308594 C 6.0273438 24.308594 15.138894 20.399882 24.410156 16.427734 C 29.045787 14.44166 33.721617 12.440122 37.318359 10.902344 C 40.914175 9.3649615 43.512419 8.2583658 43.732422 8.1699219 C 43.982886 8.0696253 44.231884 8.0286918 44.429688 8.0195312 z M 33.613281 18.792969 L 21.244141 33.345703 L 21.238281 33.351562 A 1.0001 1.0001 0 0 0 21.183594 33.423828 A 1.0001 1.0001 0 0 0 21.128906 33.507812 A 1.0001 1.0001 0 0 0 20.998047 33.892578 A 1.0001 1.0001 0 0 0 20.998047 33.900391 L 19.386719 41.146484 C 19.35993 41.068197 19.341173 41.039555 19.3125 40.947266 L 19.3125 40.945312 C 18.800713 39.30085 16.467362 31.5161 16.144531 30.439453 L 33.613281 18.792969 z M 22.640625 35.730469 L 24.863281 37.398438 L 21.597656 40.425781 L 22.640625 35.730469 z",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, n.jsxs)("div", {
                    className:
                      "text-side relative z-[80] grid h-screen items-center gap-4 md:grid-cols-2",
                    children: [
                      (0, n.jsx)("div", {
                        className: "relative w-full md:hidden",
                        children: (0, n.jsx)("video", {
                          src: "/webm/cosmic.webm",
                          poster: "/wreck.png",
                          className: "h-auto w-full object-cover",
                          autoPlay: !0,
                          loop: !0,
                          muted: !0,
                          playsInline: !0,
                          preload: "metadata",
                          "aria-label":
                            "The Elephant with third eye, joint, and flask",
                        }),
                      }),
                      (0, n.jsxs)("div", {
                        children: [
                          (0, n.jsx)("h2", {
                            className:
                              "text-side-heading text-balance text-6xl font-black uppercase text-sky-950 lg:text-8xl",
                            children: (0, n.jsx)(m, {
                              text: "Hoodrat",
                            }),
                          }),
                          (0, n.jsxs)("div", {
                            className:
                              "text-side-body mt-4 max-w-xl text-balance text-xl font-normal text-sky-950",
                            children: [
                              (0, n.jsx)("p", {
                                children:
                                  "Hoodrat the rat in ‘The Night Riders’ by Matt Furie, the artist behind Pepe.",
                              }),
                              
                              (0, n.jsx)("div", {
                                className: "mx-auto mt-8 w-full max-w-4xl px-4",
                                children:
                                  "Total Supply : 1 Billion",
                              }),
                              (0, n.jsx)("div", {
                                className: "mx-auto mt-8 w-full max-w-4xl px-4",
                                children:
                                  "Contract : Renounced",
                              }),
                              (0, n.jsx)("div", {
                                className: "mx-auto mt-8 w-full max-w-4xl px-4",
                                children:
                                  "Tax : 0/0",
                              }),
                              (0, n.jsx)("div", {
                                className: "mx-auto mt-8 w-full max-w-4xl px-4",
                                children:
                                  "LP : Locked",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  " ",
                ],
              }),
            ],
          })
        );
      };
    },
    7550: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return v;
        },
      });
      var n = r(7437),
        i = r(7867),
        a = r(7776),
        o = r(2265),
        s = r(7322),
        l = r(4490),
        c = r(4379),
        u = r(9582),
        d = r(19),
        m = r(1204),
        h = r(8198);
      function p(e) {
        let { sentence: t } = e,
          r = (0, o.useRef)(null),
          i = (0, o.useRef)(null),
          a = (0, o.useRef)(null),
          c = (0, o.useRef)(null),
          m = (0, o.useRef)(null),
          h = (0, o.useRef)(null),
          p = (Math.PI / 180) * 75,
          g = (e) => e * Math.cos(p),
          v = (e) => e * Math.sin(p),
          b = (e) => ({ x: g(e), y: v(-1 * e) });
        return (
          (0, d.V)(() => {
            m.current &&
              i.current &&
              h.current &&
              a.current &&
              c.current &&
              (u.ZP.set(m.current.position, { z: 10 }),
              u.ZP.set(i.current.position, { ...b(-4) }),
              u.ZP.set(
                h.current.children.map((e) => e.position),
                { ...b(7), z: 2 }
              ),
              u.ZP.set([c.current.position, a.current.position], { ...b(15) }),
              u.ZP.to(a.current.position, {
                y: "+=".concat(v(30)),
                x: "+=".concat(g(-30)),
                ease: "none",
                repeat: -1,
                duration: 6,
              }),
              u.ZP.to(c.current.position, {
                y: "+=".concat(v(30)),
                x: "+=".concat(g(-30)),
                ease: "none",
                repeat: -1,
                delay: 3,
                duration: 6,
              }),
              u.ZP.timeline({
                scrollTrigger: {
                  trigger: ".skydive",
                  pin: !0,
                  start: "top top",
                  end: "+=2000",
                  scrub: 1.5,
                },
              })
                .to("body", {
                  backgroundColor: "#C0F0F5",
                  overwrite: "auto",
                  duration: 0.1,
                })
                .to(m.current.position, { z: 0, duration: 0.3 }, 0)
                .to(i.current.position, {
                  x: 0,
                  y: 0,
                  duration: 0.3,
                  ease: "back.out(1.7)",
                })
                .to(
                  h.current.children.map((e) => e.position),
                  {
                    keyframes: [
                      { x: 0, y: 0, z: -1 },
                      { ...b(-7), z: -7 },
                    ],
                    stagger: 0.3,
                  },
                  0
                )
                .to(i.current.position, {
                  ...b(4),
                  duration: 0.5,
                  ease: "back.in(1.7)",
                })
                .to(m.current.position, { z: 7, duration: 0.5 }));
          }),
          (0, n.jsxs)("group", {
            ref: r,
            children: [
              (0, n.jsxs)("group", {
                ref: i,
                children: [
                  (0, n.jsx)(x, {}),
                  (0, n.jsx)("pointLight", {
                    intensity: 30,
                    color: "#8C0413",
                    decay: 0.6,
                  }),
                ],
              }),
              (0, n.jsxs)(s.lc, {
                ref: m,
                children: [
                  (0, n.jsx)(s.ZJ, { ref: a, bounds: [10, 10, 2] }),
                  (0, n.jsx)(s.ZJ, { ref: c, bounds: [10, 10, 2] }),
                ],
              }),
              (0, n.jsx)("group", {
                ref: h,
                children: t && (0, n.jsx)(f, { sentence: t, color: "#F97135" }),
              }),
              (0, n.jsx)("ambientLight", { intensity: 2, color: "#9DDEFA" }),
              (0, n.jsx)(l.qA, {
                files: "/hdr/field.hdr",
                environmentIntensity: 1.5,
              }),
            ],
          })
        );
      }
      function x() {
        let e = (0, o.useRef)(null),
          t = (0, o.useRef)(null),
          r = (0, o.useRef)(null);
        return (
          (0, d.V)(() => {
            try {
              let n = document.createElement("img");
                n.src = "/fly.png";
                n.crossOrigin = "anonymous";

                e.current = n;

                t.current = new a.Texture(n);
                t.current.needsUpdate = true;
                t.current.magFilter = a.LinearFilter;
                t.current.minFilter = a.LinearFilter;
                t.current.generateMipmaps = false;
              let i = new a.ShaderMaterial({
                  uniforms: {
                    videoTexture: { value: t.current },
                    time: { value: 0 },
                  },
                  vertexShader:
                    "\n            varying vec2 vUv;\n            void main() {\n              vUv = uv;\n              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n            }\n          ",
                  fragmentShader:
                    "\n          uniform sampler2D videoTexture;\nuniform float time;\nvarying vec2 vUv;\n\n// Noise function for organic variation\nfloat noise(vec2 uv) {\n  return fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\n// Generate blob/star shape with many points\nfloat blobMask(vec2 uv, float points, float radius, float roughness) {\n  vec2 center = vec2(0.5, 0.5);\n  vec2 diff = uv - center;\n  float angle = atan(diff.y, diff.x);\n  float distance = length(diff);\n  \n  // Create star-like pattern with many points\n  float frequency = points;\n  float spike = cos(floor(0.5 + angle * frequency / 6.28318) * 6.28318 / frequency - angle) * 0.5 + 0.5;\n  spike = pow(spike, 1.0 / roughness);\n  \n  // Add noise for organic variation\n  float noiseVal = noise(uv * 10.0 + time * 0.5);\n  spike *= 0.8 + noiseVal * 0.4;\n  \n  // Animate slight morphing\n  float morph = sin(time * 0.3) * 0.05 + 0.95;\n  float finalRadius = radius * (0.8 + spike * 0.4) * morph;\n  \n  return smoothstep(finalRadius, finalRadius - 0.08, distance);\n}\n\nvoid main() {\n  vec2 uv = vUv;\n  \n  // Create blob/star mask\n  float mask = blobMask(uv, 24.0, 0.80, 0.9);\n  \n  // ✂️ CROP: Discard fragments outside the visible mask (true cropping)\n  if (mask < 0.01) discard;\n\n  // Sample video texture\n  vec4 texColor = texture2D(videoTexture, uv);\n  \n  // Output final color with alpha masked\n  gl_FragColor = vec4(texColor.rgb, texColor.a * mask);\n}\n          ",
                  transparent: !0,
                  side: a.DoubleSide,
                }),
                o = () => {
                  i.uniforms.time && (i.uniforms.time.value += 0.016),
                    requestAnimationFrame(o);
                };
              o(),
                r.current && (r.current.material = i),
                setTimeout(() => {
                  n.play().catch((e) => {
                    console.log("Auto-play prevented:", e);
                    let t = () => {
                      n.play().then(() => {
                        document.removeEventListener("click", t),
                          document.removeEventListener("touchstart", t);
                      });
                    };
                    document.addEventListener("click", t),
                      document.addEventListener("touchstart", t);
                  });
                }, 100);
            } catch (e) {
              console.error("Error creating video texture:", e);
            }
          }, []),
          (0, n.jsx)("mesh", {
            ref: r,
            children: (0, n.jsx)("planeGeometry", { args: [2, 2] }),
          })
        );
      }
      function f(e) {
        let { sentence: t, color: r = "white" } = e,
          i = t.toUpperCase().split(" "),
          o = new a.MeshLambertMaterial(),
          s = (0, h.a)("(min-width: 950px)", !0);
        return i.map((e, t) =>
          (0, n.jsx)(
            c.x,
            {
              scale: s ? 1 : 0.5,
              color: r,
              material: o,
              font: "/fonts/Alpino-Variable.woff",
              fontWeight: 900,
              anchorX: "center",
              anchorY: "middle",
              characters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ!,.?",
              children: e,
            },
            "".concat(t, "-word")
          )
        );
      }
      u.ZP.registerPlugin(d.V, m.i);
      var g = r(8410),
        v = () =>
          (0, n.jsxs)(i.g, {
            className: "skydive h-screen",
            children: [
              (0, n.jsx)("h2", {
                className: "sr-only",
                children: "Hoodrat by Matt Furie",
              }),
              (0, n.jsx)(g.G, {
                className: "h-screen w-screen",
                children: (0, n.jsx)(p, {
                  sentence: "Hoodrat by Matt Furie",
                }),
              }),
            ],
          });
    },
  },
  function (e) {
    e.O(0, [689, 918, 922, 317, 611, 561, 971, 23, 744], function () {
      return e((e.s = 9338));
    }),
      (_N_E = e.O());
  },
]);
