(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [185],
  {
    7403: function (e, i, t) {
      Promise.resolve().then(t.t.bind(t, 1846, 23)),
        Promise.resolve().then(t.t.bind(t, 3916, 23)),
        Promise.resolve().then(t.bind(t, 4218)),
        Promise.resolve().then(t.bind(t, 9966)),
        Promise.resolve().then(t.bind(t, 6504)),
        Promise.resolve().then(t.bind(t, 418));
    },
    4218: function (e, i, t) {
      "use strict";
      t.d(i, {
        default: function () {
          return h;
        },
      });
      var n = t(7437),
        s = t(2265),
        r = t(4839);
      function o(e) {
        let { className: i, ...t } = e;
        // return (0, n.jsx)("video", {
        //   src: "/webm/logo.webm",
        //   width: 204.25,
        //   height: 45.427441,
        //   className: (0, r.Z)("group", i),
        //   autoPlay: !0,
        //   loop: !0,
        //   muted: !0,
        //   playsInline: !0,
        //   "aria-label": "Fizzi",
        //   disablePictureInPicture: !0,
        //   preload: "metadata",
        //   ...t,
        // });
      }
      function a(e) {
        let {
          textColor: i = "#1A871D",
          backgroundColor: t = "#FFFCFA",
          className: s,
        } = e;
        return (0, n.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 123 123",
          className: (0, r.Z)("circle-text", s),
          "aria-labelledby": "circle-text",
          children: [
            (0, n.jsx)("title", {
              id: "circle-text",
              children: "Spiritual awakening with a liquidity pool.",
            }),
            (0, n.jsx)("path", {
              fill: t,
              d: "M122 61.5a61 61 0 11-122 0 61 61 0 01122 0z",
            }),
            (0, n.jsx)("defs", {
              children: (0, n.jsx)("path", {
                id: "circle-path",
                d: "M 61.5 20.5 A 41 41 0 1 1 61.5 102.5 A 41 41 0 1 1 61.5 20.5",
                fill: "none",
              }),
            }),
            (0, n.jsx)("text", {
              fill: i,
              className: "animate-spin-slow origin-center",
              fontSize: "14",
              fontWeight: "bold",
              textAnchor: "middle",
              dominantBaseline: "middle",
              children: (0, n.jsx)("textPath", {
                href: "#circle-path",
                startOffset: "50%",
                children: "Spiritual awakening with a liquidity pool.",
              }),
            }),
          ],
        });
      }
      var l = t(8059),
        c = t.n(l),
        m = t(6648),
        d = () => {
          let e = (0, s.useRef)(null),
            i = (0, s.useRef)([]),
            t = (0, s.useRef)(null),
            r = (0, s.useRef)(!1),
            o = (0, s.useRef)(0),
            a = () => {
              t.current &&
                (cancelAnimationFrame(t.current), (t.current = null)),
                document.querySelectorAll(".footer-splash-img").forEach((e) => {
                  (e.style.opacity = "0"),
                    (e.style.transform =
                      "translate(0, 0) rotate(0deg) scale(0.5)");
                }),
                (i.current = []),
                (r.current = !1);
            },
            l = () => {
              let e = document.querySelectorAll(".footer-splash-img");
              i.current = Array.from(e).map(
                (e) => (
                  (e.style.left = "".concat(10 + 80 * Math.random(), "%")),
                  (e.style.bottom = "".concat(20 * Math.random(), "px")),
                  (e.style.opacity = "0"),
                  (e.style.transform = "scale(0.5)"),
                  (e.style.pointerEvents = "none"),
                  (e.style.zIndex = "1000"),
                  (e.style.willChange = "transform, opacity"),
                  {
                    element: e,
                    x: 0,
                    y: 0,
                    vx:
                      20 * (0.8 + 0.4 * Math.random()) * (Math.random() - 0.5),
                    vy:
                      -(24 * (0.7 + 0.6 * Math.random())) - 15 * Math.random(),
                    rotation: 0,
                    rotationSpeed: (Math.random() - 0.5) * 80,
                  }
                )
              );
            },
            d = () => {
              let e = !1;
              i.current.forEach((i) => {
                (i.vy += 0.8),
                  (i.vx *= 0.95),
                  (i.vy *= 0.95),
                  (i.rotationSpeed *= 0.95),
                  (i.x += i.vx),
                  (i.y += i.vy),
                  (i.rotation += i.rotationSpeed),
                  (i.element.style.transform = "\n        translate("
                    .concat(i.x, "px, ")
                    .concat(i.y, "px)\n        rotate(")
                    .concat(i.rotation, "deg)\n        scale(")
                    .concat(
                      1 + 0.1 * Math.sin(0.05 * i.rotation),
                      ")\n      "
                    )),
                  (i.element.style.opacity = "".concat(
                    Math.max(0, Math.min(1, 1 - Math.abs(i.vy) / 30))
                  )),
                  (Math.abs(i.vy) > 0.1 || Math.abs(i.vx) > 0.1) && (e = !0);
              }),
                e && r.current
                  ? (t.current = requestAnimationFrame(d))
                  : (r.current = !1);
            },
            h = () => {
              r.current ||
                ((r.current = !0),
                i.current.forEach((e) => {
                  (e.element.style.opacity = "1"),
                    (e.element.style.transform =
                      "translate(0, 0) rotate(0deg) scale(1)");
                }),
                setTimeout(() => {
                  t.current = requestAnimationFrame(d);
                }, 50));
            };
          return (
            (0, s.useEffect)(() => {
              let i = new IntersectionObserver(
                  (e) => {
                    e.forEach((e) => {
                      if (e.isIntersecting) {
                        let e = Date.now();
                        e - o.current < 1e3 || ((o.current = e), a(), l(), h());
                      }
                    });
                  },
                  { threshold: 0.1 }
                ),
                t = e.current;
              return (
                t && i.observe(t),
                () => {
                  t && i.unobserve(t), a();
                }
              );
            }, [h]),
            (0, n.jsxs)("div", {
              ref: e,
              className: "jsx-5d92200e4f342026 pointer-events-none relative",
              // children: [
              //   (0, n.jsx)(c(), {
              //     id: "5d92200e4f342026",
              //     children:
              //       ".footer-splash-img{position:fixed;width:160px;height:auto;bottom:0;left:50%;opacity:0;z-index:1000;will-change:transform,opacity}",
              //   }),
              //   [...Array(10)].map((e, i) =>
              //     (0, n.jsx)(
              //       m.default,
              //       {
              //         src: "/footer/img".concat(i + 1, ".webp"),
              //         alt: "Splash ".concat(i + 1),
              //         className: "footer-splash-img",
              //         loading: "eager",
              //         width: 160,
              //         height: 160,
              //         unoptimized: !0,
              //       },
              //       i
              //     )
              //   ),
              // ],
            })
          );
        };
      function h(e) {
        let {} = e,
          [i, t] = (0, s.useState)(null),
          r = (0, s.useRef)(null),
          l = (e) => {
            t(i === e ? null : e);
          },
          c = () => {
            t(null);
          };
        (0, s.useEffect)(() => {
          let e = (e) => {
            r.current && !r.current.contains(e.target) && i && c();
          };
          return (
            i
              ? (document.addEventListener("mousedown", e),
                (document.body.style.overflow = "hidden"))
              : (document.body.style.overflow = "unset"),
            () => {
              document.removeEventListener("mousedown", e),
                (document.body.style.overflow = "unset");
            }
          );
        }, [i]),
          (0, s.useEffect)(() => {
            let e = (e) => {
              "Escape" === e.key && i && c();
            };
            return (
              window.addEventListener("keydown", e),
              () => window.removeEventListener("keydown", e)
            );
          }, [i]);
        let m = (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)("h3", {
                style: {
                  textAlign: "center",
                  marginBottom: "24px",
                  fontWeight: "600",
                  fontSize: "1.5rem",
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children: "Elephanto FAN SITE PRIVACY POLICY",
              }),
              (0, n.jsx)("p", {
                style: {
                  fontStyle: "italic",
                  textAlign: "center",
                  marginBottom: "32px",
                  fontSize: "0.95rem",
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children: "Last Updated: September 2025",
              }),
              (0, n.jsx)("hr", {
                style: { margin: "24px 0", borderColor: "#eee" },
              }),
              (0, n.jsx)("h4", {
                style: {
                  fontWeight: "600",
                  marginTop: "24px",
                  fontSize: "1.1rem",
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children: "1. IMPORTANT DISCLAIMER",
              }),
              (0, n.jsx)("p", {
                style: {
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children:
                  "This website (“Site”) is an independent, fan-created project developed solely for entertainment purposes. It is not affiliated with, sponsored by, endorsed by, or officially connected to any entity, brand, organization, or blockchain project named “Elephanto” or similar.",
              }),
              (0, n.jsx)("p", {
                style: {
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children: (0, n.jsx)("strong", {
                  children:
                    "Elephanto is a meme. This Site is a joke. Nothing herein constitutes financial, legal, tax, or professional advice. Use at your own risk.",
                }),
              }),
              (0, n.jsx)("h4", {
                style: {
                  fontWeight: "600",
                  marginTop: "24px",
                  fontSize: "1.1rem",
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children: "2. NO COLLECTION OF PERSONAL DATA",
              }),
              (0, n.jsx)("p", {
                style: {
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children:
                  "We do not request, collect, store, process, or retain any personally identifiable information (“PII”) from users of this Site. This includes, but is not limited to:",
              }),
              (0, n.jsxs)("ul", {
                style: {
                  paddingLeft: "20px",
                  lineHeight: 1.6,
                  marginBottom: "16px",
                  listStyleType: "disc",
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children: [
                  (0, n.jsx)("li", {
                    children:
                      "Name, email address, phone number, physical address",
                  }),
                  (0, n.jsx)("li", {
                    children: "Government-issued identification or KYC data",
                  }),
                  (0, n.jsx)("li", {
                    children:
                      "Financial information (credit cards, bank accounts, PayPal)",
                  }),
                  (0, n.jsx)("li", {
                    children:
                      "Private keys, seed phrases, or wallet recovery data",
                  }),
                  (0, n.jsx)("li", {
                    children:
                      "Device identifiers permanently linked to your identity",
                  }),
                ],
              }),
              (0, n.jsx)("p", {
                style: {
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children:
                  "Any interaction you initiate (e.g., wallet connection) occurs client-side only. No data is transmitted to or stored on our servers.",
              }),
              (0, n.jsx)("h4", {
                style: {
                  fontWeight: "600",
                  marginTop: "24px",
                  fontSize: "1.1rem",
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children: "3. ON-CHAIN ACTIVITY DISCLAIMER",
              }),
              (0, n.jsx)("p", {
                style: {
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children:
                  "If you voluntarily connect a cryptocurrency wallet or interact with third-party smart contracts via this Site:",
              }),
              (0, n.jsxs)("ul", {
                style: {
                  paddingLeft: "20px",
                  lineHeight: 1.6,
                  marginBottom: "16px",
                  listStyleType: "disc",
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children: [
                  (0, n.jsx)("li", {
                    children:
                      "All transactions occur directly between your wallet and the blockchain.",
                  }),
                  (0, n.jsx)("li", {
                    children:
                      "We do not control, monitor, or record these interactions.",
                  }),
                  (0, n.jsx)("li", {
                    children:
                      "On-chain data is public, immutable, and irreversible — we cannot delete, modify, or recover it.",
                  }),
                  (0, n.jsx)("li", {
                    children:
                      "You assume full responsibility for transaction accuracy, gas fees, and security.",
                  }),
                ],
              }),
              (0, n.jsx)("h4", {
                style: {
                  fontWeight: "600",
                  marginTop: "24px",
                  fontSize: "1.1rem",
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children: "4. COOKIES AND ANALYTICS",
              }),
              (0, n.jsx)("p", {
                style: {
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children:
                  "We may use minimal, anonymous session cookies for functional purposes (e.g., UI preferences). We do not use tracking cookies for advertising or profiling.",
              }),
              (0, n.jsx)("p", {
                style: {
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children:
                  "Optional analytics (e.g., Plausible, GoatCounter) may be employed to measure aggregate traffic. These tools do not collect PII or track individual users.",
              }),
              (0, n.jsx)("p", {
                style: {
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children:
                  "You may disable cookies via browser settings without materially affecting Site functionality.",
              }),
              (0, n.jsx)("h4", {
                style: {
                  fontWeight: "600",
                  marginTop: "24px",
                  fontSize: "1.1rem",
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children: "5. THIRD-PARTY SERVICES",
              }),
              (0, n.jsx)("p", {
                style: {
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children:
                  "This Site may contain links to external platforms, including wallets, decentralized exchanges, block explorers, and social channels. We are not responsible for the privacy practices, security, or content of any third-party service. Review their policies independently before interacting.",
              }),
              (0, n.jsx)("h4", {
                style: {
                  fontWeight: "600",
                  marginTop: "24px",
                  fontSize: "1.1rem",
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children: "6. CHILDREN’S PRIVACY",
              }),
              (0, n.jsx)("p", {
                style: {
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children:
                  "This Site is not intended for users under the age of 18. We do not knowingly collect information from minors. If we become aware that a minor has accessed the Site, we will take reasonable steps to remove any inadvertently collected data — though on-chain activity remains immutable.",
              }),
              (0, n.jsx)("h4", {
                style: {
                  fontWeight: "600",
                  marginTop: "24px",
                  fontSize: "1.1rem",
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children: "7. POLICY UPDATES",
              }),
              (0, n.jsx)("p", {
                style: {
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children:
                  "We reserve the right to update this Privacy Policy at any time. The “Last Updated” date at the top of this document will reflect the most recent revision. Your continued use of the Site following any modification constitutes acceptance of the updated terms.",
              }),
              (0, n.jsx)("h4", {
                style: {
                  fontWeight: "600",
                  marginTop: "24px",
                  fontSize: "1.1rem",
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children: "8. CONTACT",
              }),
              (0, n.jsxs)("p", {
                style: {
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children: [
                  "For questions about these Terms of Use, please contact: ",
                  (0, n.jsx)("br", {}),
                  (0, n.jsx)("strong", { children: "Email:" }),
                  " hello@theelephanto.com",
                  (0, n.jsx)("br", {}),
                  (0, n.jsx)("strong", { children: "Twitter:" }),
                  " @hoodratbymf (run by Chad in his basement)",
                  (0, n.jsx)("br", {}),
                  (0, n.jsx)("strong", { children: "Telegram:" }),
                  " @hoodratbymf (run by Giga Chad in the same basement)",
                ],
              }),
              (0, n.jsx)("h4", {
                style: {
                  fontWeight: "600",
                  marginTop: "24px",
                  fontSize: "1.1rem",
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children: "9. LEGAL DISCLAIMER & ASSUMPTION OF RISK",
              }),
              (0, n.jsx)("p", {
                style: {
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children:
                  "By accessing or using this Site, you expressly acknowledge and agree that:",
              }),
              (0, n.jsxs)("ul", {
                style: {
                  paddingLeft: "20px",
                  lineHeight: 1.6,
                  marginBottom: "16px",
                  listStyleType: "disc",
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children: [
                  (0, n.jsx)("li", {
                    children:
                      "This is a fan project created for entertainment purposes only.",
                  }),
                  (0, n.jsx)("li", {
                    children:
                      "The Elephanto token has no intrinsic value, utility, or investment purpose.",
                  }),
                  (0, n.jsx)("li", {
                    children:
                      "You assume all risks associated with blockchain interactions, including loss of funds.",
                  }),
                  (0, n.jsx)("li", {
                    children:
                      "You waive any and all claims against the developers, contributors, or supporters of this Site.",
                  }),
                  (0, n.jsx)("li", {
                    children:
                      "You understand that cryptocurrency activities are experimental, volatile, and potentially unlawful in your jurisdiction.",
                  }),
                ],
              }),
              (0, n.jsx)("p", {
                style: {
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children: (0, n.jsx)("strong", {
                  children:
                    "YOU ARE SOLELY RESPONSIBLE FOR YOUR ACTIONS, WALLET, AND TRANSACTIONS.",
                }),
              }),
            ],
          }),
          h = (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)("h3", {
                style: {
                  textAlign: "center",
                  marginBottom: "24px",
                  fontWeight: "600",
                  fontSize: "1.5rem",
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children: "TERMS OF USE",
              }),
              (0, n.jsx)("p", {
                style: {
                  fontStyle: "italic",
                  textAlign: "center",
                  marginBottom: "32px",
                  fontSize: "0.95rem",
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children: "Last Updated: September 2025",
              }),
              (0, n.jsx)("hr", {
                style: { margin: "24px 0", borderColor: "#eee" },
              }),
              (0, n.jsx)("h4", {
                style: {
                  fontWeight: "600",
                  marginTop: "24px",
                  fontSize: "1.1rem",
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children: "1. IMPORTANT NOTICE",
              }),
              (0, n.jsx)("p", {
                style: {
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children: (0, n.jsx)("strong", {
                  children:
                    "THIS WEBSITE IS AN INDEPENDENT, COMMUNITY-DRIVEN PLATFORM FOR ENTERTAINMENT PURPOSES ONLY. IT DOES NOT OFFICIALLY REPRESENT Elephanto. Elephanto HAS NO CENTRAL OWNER OR AUTHORITY AND IS A FULLY DECENTRALIZED TOKEN.",
                }),
              }),
              (0, n.jsx)("h4", {
                style: {
                  fontWeight: "600",
                  marginTop: "24px",
                  fontSize: "1.1rem",
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children: "2. ACCEPTANCE OF TERMS",
              }),
              (0, n.jsx)("p", {
                style: {
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children:
                  "By accessing or using this Website, you agree to be bound by these Terms of Use. If you do not agree to these Terms in their entirety, you must immediately cease use of the Website.",
              }),
              (0, n.jsx)("p", {
                style: {
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children: (0, n.jsx)("strong", {
                  children:
                    "THIS AGREEMENT CONTAINS IMPORTANT DISCLAIMERS, INCLUDING BUT NOT LIMITED TO DISCLAIMERS REGARDING FINANCIAL ADVICE, WARRANTIES, AND LIMITATIONS OF LIABILITY.",
                }),
              }),
              (0, n.jsx)("h4", {
                style: {
                  fontWeight: "600",
                  marginTop: "24px",
                  fontSize: "1.1rem",
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children: "3. NATURE OF Elephanto",
              }),
              (0, n.jsxs)("p", {
                style: {
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children: [
                  (0, n.jsx)("strong", {
                    children:
                      "Elephanto IS A FULLY DECENTRALIZED TOKEN WITH NO CENTRAL OWNERSHIP OR AUTHORITY.",
                  }),
                  " ",
                  "It can be used by anyone in any manner they choose, in accordance with applicable laws and regulations.",
                ],
              }),
              (0, n.jsx)("p", {
                style: {
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children: (0, n.jsx)("strong", {
                  children: "Key characteristics of Elephanto:",
                }),
              }),
              (0, n.jsxs)("ul", {
                style: {
                  paddingLeft: "20px",
                  lineHeight: 1.6,
                  marginBottom: "16px",
                  listStyleType: "disc",
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children: [
                  (0, n.jsx)("li", {
                    children: "No central owner or controlling entity",
                  }),
                  (0, n.jsx)("li", {
                    children: "No profit generation mechanism",
                  }),
                  (0, n.jsx)("li", { children: "No treasury or central fund" }),
                  (0, n.jsx)("li", {
                    children: "Community-driven development",
                  }),
                  (0, n.jsx)("li", {
                    children: "Not classified as a security",
                  }),
                ],
              }),
              (0, n.jsx)("h4", {
                style: {
                  fontWeight: "600",
                  marginTop: "24px",
                  fontSize: "1.1rem",
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children: "4. FINANCIAL DISCLAIMERS",
              }),
              (0, n.jsxs)("p", {
                style: {
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children: [
                  (0, n.jsx)("strong", { children: "NOT FINANCIAL ADVICE:" }),
                  " THIS WEBSITE DOES NOT PROVIDE FINANCIAL OR INVESTMENT ADVICE. ALWAYS CONSULT A PROFESSIONAL BEFORE MAKING ANY FINANCIAL DECISIONS INVOLVING Elephanto OR ANY OTHER CRYPTOCURRENCY.",
                ],
              }),
              (0, n.jsx)("p", {
                style: {
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children: (0, n.jsx)("strong", {
                  children: "Important financial considerations:",
                }),
              }),
              (0, n.jsxs)("ul", {
                style: {
                  paddingLeft: "20px",
                  lineHeight: 1.6,
                  marginBottom: "16px",
                  listStyleType: "disc",
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children: [
                  (0, n.jsx)("li", {
                    children: "No guarantees of profit or future value",
                  }),
                  (0, n.jsx)("li", {
                    children: "Cryptocurrencies are highly volatile",
                  }),
                  (0, n.jsx)("li", {
                    children: "Value may fluctuate significantly",
                  }),
                  (0, n.jsx)("li", {
                    children: "Participation is at your own risk",
                  }),
                  (0, n.jsx)("li", {
                    children: "You are responsible for any losses",
                  }),
                ],
              }),
              (0, n.jsx)("h4", {
                style: {
                  fontWeight: "600",
                  marginTop: "24px",
                  fontSize: "1.1rem",
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children: "5. THIRD-PARTY SERVICES",
              }),
              (0, n.jsx)("p", {
                style: {
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children:
                  "Elephanto partnerships consist solely of community collaborations and do not involve formal contracts or agreements. The Elephanto project does not endorse or vet any third-party applications, exchanges, or platforms where Elephanto may be traded or used.",
              }),
              (0, n.jsx)("p", {
                style: {
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children: (0, n.jsx)("strong", {
                  children: "We are not responsible for:",
                }),
              }),
              (0, n.jsxs)("ul", {
                style: {
                  paddingLeft: "20px",
                  lineHeight: 1.6,
                  marginBottom: "16px",
                  listStyleType: "disc",
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children: [
                  (0, n.jsx)("li", {
                    children: "Third-party exchanges or trading platforms",
                  }),
                  (0, n.jsx)("li", {
                    children: "Wallet providers or applications",
                  }),
                  (0, n.jsx)("li", {
                    children: "Any third-party services or integrations",
                  }),
                ],
              }),
              (0, n.jsx)("h4", {
                style: {
                  fontWeight: "600",
                  marginTop: "24px",
                  fontSize: "1.1rem",
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children: "6. REGULATORY COMPLIANCE",
              }),
              (0, n.jsx)("p", {
                style: {
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children:
                  "Users are responsible for complying with all applicable local KYC (Know Your Customer) and AML (Anti-Money Laundering) laws and regulations when engaging with Elephanto.",
              }),
              (0, n.jsx)("p", {
                style: {
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children: (0, n.jsx)("strong", {
                  children:
                    "CERTAIN COUNTRIES MAY RESTRICT OR PROHIBIT CRYPTOCURRENCY USE. IT IS THE USER'S RESPONSIBILITY TO COMPLY WITH ALL LOCAL REGULATIONS.",
                }),
              }),
              (0, n.jsx)("p", {
                style: {
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children: (0, n.jsx)("strong", {
                  children: "You must ensure compliance with:",
                }),
              }),
              (0, n.jsxs)("ul", {
                style: {
                  paddingLeft: "20px",
                  lineHeight: 1.6,
                  marginBottom: "16px",
                  listStyleType: "disc",
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children: [
                  (0, n.jsx)("li", {
                    children: "Local laws and regulations in your jurisdiction",
                  }),
                  (0, n.jsx)("li", {
                    children: "Tax obligations related to cryptocurrency",
                  }),
                  (0, n.jsx)("li", {
                    children: "Any restrictions on cryptocurrency trading",
                  }),
                ],
              }),
              (0, n.jsx)("h4", {
                style: {
                  fontWeight: "600",
                  marginTop: "24px",
                  fontSize: "1.1rem",
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children: "7. MARKET AND LEGAL RISKS",
              }),
              (0, n.jsx)("p", {
                style: {
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children:
                  "By using this Website and engaging with Elephanto, you acknowledge and accept the following risks:",
              }),
              (0, n.jsxs)("ul", {
                style: {
                  paddingLeft: "20px",
                  lineHeight: 1.6,
                  marginBottom: "16px",
                  listStyleType: "disc",
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children: [
                  (0, n.jsx)("li", { children: "Extreme price volatility" }),
                  (0, n.jsx)("li", {
                    children: "Regulatory uncertainty and changes",
                  }),
                  (0, n.jsx)("li", {
                    children: "Technical risks related to blockchain",
                  }),
                  (0, n.jsx)("li", {
                    children: "Security risks including hacking and theft",
                  }),
                  (0, n.jsx)("li", {
                    children: "Loss of access to wallets or private keys",
                  }),
                ],
              }),
              (0, n.jsx)("h4", {
                style: {
                  fontWeight: "600",
                  marginTop: "24px",
                  fontSize: "1.1rem",
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children: "8. DISCLAIMER OF WARRANTIES",
              }),
              (0, n.jsx)("p", {
                style: {
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children:
                  "THE WEBSITE AND ALL INFORMATION PROVIDED ARE ON AN “AS IS” AND “AS AVAILABLE” BASIS. ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT, ARE DISCLAIMED TO THE FULLEST EXTENT PERMISSIBLE BY LAW.",
              }),
              (0, n.jsx)("h4", {
                style: {
                  fontWeight: "600",
                  marginTop: "24px",
                  fontSize: "1.1rem",
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children: "9. LIMITATION OF LIABILITY",
              }),
              (0, n.jsx)("p", {
                style: {
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children:
                  "TO THE FULLEST EXTENT PERMISSIBLE BY LAW, THE WEBSITE OPERATORS, DEVELOPERS, CONTRIBUTORS, AND ALL ASSOCIATED PARTIES SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING FROM YOUR USE OF THE WEBSITE OR ENGAGEMENT WITH Elephanto — INCLUDING LOSS OF FUNDS, DATA, PROFITS, OR REPUTATION.",
              }),
              (0, n.jsx)("h4", {
                style: {
                  fontWeight: "600",
                  marginTop: "24px",
                  fontSize: "1.1rem",
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children: "10. USER RESPONSIBILITIES",
              }),
              (0, n.jsx)("p", {
                style: {
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children:
                  "As a user of this Website, you are solely responsible for:",
              }),
              (0, n.jsxs)("ul", {
                style: {
                  paddingLeft: "20px",
                  lineHeight: 1.6,
                  marginBottom: "16px",
                  listStyleType: "disc",
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children: [
                  (0, n.jsx)("li", {
                    children: "Ensuring compliance with all applicable laws",
                  }),
                  (0, n.jsx)("li", {
                    children: "Conducting your own research (DYOR)",
                  }),
                  (0, n.jsx)("li", {
                    children: "Understanding the risks involved",
                  }),
                  (0, n.jsx)("li", {
                    children: "Securing your own wallets and private keys",
                  }),
                  (0, n.jsx)("li", {
                    children:
                      "Approving transactions only after careful review",
                  }),
                ],
              }),
              (0, n.jsx)("h4", {
                style: {
                  fontWeight: "600",
                  marginTop: "24px",
                  fontSize: "1.1rem",
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children: "11. MODIFICATIONS",
              }),
              (0, n.jsx)("p", {
                style: {
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children:
                  "We reserve the right to modify these Terms at any time. The “Last Updated” date will reflect changes. Your continued use after any revision constitutes acceptance.",
              }),
              (0, n.jsx)("h4", {
                style: {
                  fontWeight: "600",
                  marginTop: "24px",
                  fontSize: "1.1rem",
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children: "12. CONTACT INFORMATION",
              }),
              (0, n.jsxs)("p", {
                style: {
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                },
                children: [
                  "For questions about these Terms of Use, please contact: ",
                  (0, n.jsx)("br", {}),
                  (0, n.jsx)("strong", { children: "Email:" }),
                  " hello@theelephanto.com",
                  (0, n.jsx)("br", {}),
                  (0, n.jsx)("strong", { children: "Twitter:" }),
                  " @hoodratbymf (run by Chad in his basement)",
                  (0, n.jsx)("br", {}),
                  (0, n.jsx)("strong", { children: "Telegram:" }),
                  " @hoodratbymf (run by Giga Chad in the same basement)",
                ],
              }),
              (0, n.jsx)("p", {
                style: {
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                  fontStyle: "italic",
                },
                children:
                  "Note: We are not a company, legal entity, or registered organization. Responses are provided on a voluntary, best-effort basis.",
              }),
            ],
          });
        return (0, n.jsxs)("footer", {
          className: "relative bg-[#FEE832] text-[#FE6334]",
          children: [
            (0, n.jsx)(d, {}),
            (0, n.jsxs)("div", {
              className:
                "relative mx-auto flex w-full max-w-4xl justify-center px-4 py-10",
              children: [
                (0, n.jsx)(o, {}),
                (0, n.jsx)("div", {
                  className:
                    "absolute right-24 top-0 size-28 origin-center -translate-y-40 translate-x-20 md:size-48 md:-translate-y-28",
                  children: (0, n.jsx)(a, {
                    className: "animate-spin [animation-duration:8s]",
                  }),
                }),
                (0, n.jsxs)("div", {
                  className:
                    "absolute bottom-4 right-4 flex space-x-6 text-sm font-medium",
                  children: [
                    (0, n.jsx)("button", {
                      onClick: () => l("privacy"),
                      className: "hover:underline focus:outline-none",
                      "aria-label": "Privacy Policy",
                      children: "Privacy Policy",
                    }),
                    (0, n.jsx)("span", { children: "•" }),
                    (0, n.jsx)("button", {
                      onClick: () => l("terms"),
                      className: "hover:underline focus:outline-none",
                      "aria-label": "Terms of Use",
                      children: "Terms of Use",
                    }),
                  ],
                }),
              ],
            }),
            i &&
              (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)("div", {
                    className:
                      "fixed inset-0 z-50 bg-black/40 backdrop-blur-md transition-opacity duration-300",
                    "aria-hidden": "true",
                    style: { WebkitBackdropFilter: "blur(8px)" },
                  }),
                  (0, n.jsx)("div", {
                    className:
                      "fixed inset-0 z-50 flex items-center justify-center p-4",
                    children: (0, n.jsxs)("div", {
                      ref: r,
                      className:
                        "duration-400 relative w-full max-w-2xl transform overflow-y-auto rounded-xl bg-white p-6 text-gray-800 shadow-2xl transition-all ease-out ".concat(
                          i
                            ? "translate-y-0 opacity-100"
                            : "translate-y-8 opacity-0"
                        ),
                      role: "dialog",
                      "aria-modal": "true",
                      "aria-labelledby": "".concat(i, "-title"),
                      style: {
                        maxHeight: "80vh",
                        margin: "10vh 20vw",
                        boxSizing: "border-box",
                      },
                      children: [
                        (0, n.jsx)("button", {
                          onClick: c,
                          className:
                            "absolute right-4 top-4 text-xl font-bold text-gray-600 hover:text-gray-900 focus:outline-none",
                          "aria-label": "Close",
                          children: "\xd7",
                        }),
                        (0, n.jsxs)("div", {
                          className: "mt-4",
                          children: [
                            (0, n.jsx)("h2", {
                              id: "".concat(i, "-title"),
                              className:
                                "mb-4 text-2xl font-bold text-[#FE6334]",
                              style: {
                                fontFamily:
                                  'Georgia, "Times New Roman", Times, serif',
                              },
                              children:
                                "privacy" === i
                                  ? "Privacy Policy"
                                  : "Terms of Use",
                            }),
                            (0, n.jsx)("div", {
                              className: "text-sm leading-relaxed",
                              style: {
                                fontFamily:
                                  'Georgia, "Times New Roman", Times, serif',
                              },
                              children: "privacy" === i ? m : h,
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
          ],
        });
      }
    },
    9966: function (e, i, t) {
      "use strict";
      var n = t(7437),
        s = t(2265);
      i.default = () => {
        let [e, i] = (0, s.useState)(!1),
          t = async () => {
            try {
              await navigator.clipboard.writeText(
                "0xComingSoon"
              ),
                i(!0),
                setTimeout(() => i(!1), 1500);
            } catch (e) {
              console.error("Failed to copy: ", e);
            }
          };
        return (0, n.jsx)("div", {
          className:
            "sticky bottom-0 left-0 z-10 flex w-full flex-row justify-center",
          children: (0, n.jsxs)("div", {
            onClick: t,
            className:
              "text-md relative cursor-pointer rounded-full bg-white/15 px-2 font-bold uppercase text-sky-800 backdrop-blur-xl transition-colors hover:text-sky-600 md:text-xl",
            title: "Click to copy",
            children: [
              "CA: 0xComingSoon",
              e &&
                (0, n.jsx)("span", {
                  className:
                    "absolute -top-6 left-1/2 -translate-x-1/2 transform whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-white opacity-90",
                  children: "Copied!",
                }),
            ],
          }),
        });
      };
    },
    6504: function (e, i, t) {
      "use strict";
      var n = t(7437);
      t(2265),
        (i.default = () =>
          (0, n.jsx)("nav", {
            className:
              "fixed left-0 right-0 top-0 z-50 flex items-center justify-end px-6 py-1 text-gray-800",
            children: (0, n.jsxs)("div", {
              className:
                "hero-social relative z-20 flex items-center gap-4 rounded-full bg-white/10 p-1 backdrop-blur-xl",
              children: [
                (0, n.jsxs)("a", {
                  href: "https://app.uniswap.org/swap?chain=mainnet&inputCurrency=NATIVE&outputCurrency=0xComingSoon",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "group relative flex h-6 w-20 items-center justify-center rounded-full bg-orange-600 transition-all duration-300 hover:scale-105 hover:bg-orange-700",
                  "aria-label": "Buy Now",
                  children: [
                    (0, n.jsx)("span", {
                      className:
                        "absolute inset-0 rounded-full border-2 border-transparent opacity-0 transition-opacity duration-300 group-hover:-inset-1 group-hover:border-white group-hover:opacity-100",
                    }),
                    (0, n.jsx)("span", {
                      className:
                        "text-xs font-bold uppercase tracking-wide text-white",
                      children: "Buy now",
                    }),
                  ],
                }),
                (0, n.jsxs)("a", {
                  href: "https://x.com/hoodratbymf",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "group relative flex h-6 w-10 items-center justify-center rounded-full bg-black transition-all duration-300 hover:scale-105",
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
                    "group relative flex h-6 w-10 items-center justify-center rounded-full bg-[#26a5e4] transition-all duration-300 hover:scale-105",
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
          }));
    },
    418: function (e, i, t) {
      "use strict";
      t.d(i, {
        default: function () {
          return l;
        },
      });
      var n = t(7437),
        s = t(7585),
        r = t(8410),
        o = t(2265);
      let a = (0, t(7818).default)(
        () =>
          Promise.all([t.e(918), t.e(317), t.e(254)])
            .then(t.bind(t, 4254))
            .then((e) => e.Loader),
        { loadableGenerated: { webpack: () => [4254] }, ssr: !1 }
      );
      function l(e) {
        let {} = e;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsxs)(s.Xz, {
              style: {
                position: "fixed",
                top: 0,
                left: "50%",
                transform: "translateX(-50%)",
                overflow: "hidden",
                pointerEvents: "none",
                zIndex: 30,
              },
              shadows: !0,
              dpr: [1, 1.5],
              gl: { antialias: !0 },
              camera: { fov: 30 },
              children: [
                (0, n.jsx)(o.Suspense, { fallback: null }),
                (0, n.jsx)(r.G.Port, {}),
              ],
            }),
            (0, n.jsx)(a, {}),
          ],
        });
      }
    },
    3916: function () {},
  },
  function (e) {
    e.O(0, [521, 689, 611, 12, 971, 23, 744], function () {
      return e((e.s = 7403));
    }),
      (_N_E = e.O());
  },
]);
