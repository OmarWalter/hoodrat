"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [317],
  {
    7322: function (e, t, r) {
      let n;
      r.d(t, {
        ZJ: function () {
          return _;
        },
        Zk: function () {
          return E;
        },
        lc: function () {
          return M;
        },
      });
      var a = r(2988),
        i = r(2265),
        o = r(7776),
        l = r(8914),
        s = r(854),
        u = {
          randomUUID:
            "undefined" != typeof crypto &&
            crypto.randomUUID &&
            crypto.randomUUID.bind(crypto),
        };
      let c = new Uint8Array(16),
        f = [];
      for (let e = 0; e < 256; ++e) f.push((e + 256).toString(16).slice(1));
      var d = function (e, t, r) {
          if (u.randomUUID && !t && !e) return u.randomUUID();
          let a =
            (e = e || {}).random ||
            (
              e.rng ||
              function () {
                if (
                  !n &&
                  !(n =
                    "undefined" != typeof crypto &&
                    crypto.getRandomValues &&
                    crypto.getRandomValues.bind(crypto))
                )
                  throw Error(
                    "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
                  );
                return n(c);
              }
            )();
          if (((a[6] = (15 & a[6]) | 64), (a[8] = (63 & a[8]) | 128), t)) {
            r = r || 0;
            for (let e = 0; e < 16; ++e) t[r + e] = a[e];
            return t;
          }
          return (function (e, t = 0) {
            return (
              f[e[t + 0]] +
              f[e[t + 1]] +
              f[e[t + 2]] +
              f[e[t + 3]] +
              "-" +
              f[e[t + 4]] +
              f[e[t + 5]] +
              "-" +
              f[e[t + 6]] +
              f[e[t + 7]] +
              "-" +
              f[e[t + 8]] +
              f[e[t + 9]] +
              "-" +
              f[e[t + 10]] +
              f[e[t + 11]] +
              f[e[t + 12]] +
              f[e[t + 13]] +
              f[e[t + 14]] +
              f[e[t + 15]]
            );
          })(a);
        },
        h = r(6078);
      let p =
          "https://rawcdn.githack.com/pmndrs/drei-assets/9225a9f1fbd449d9411125c2f419b843d0308c9f/cloud.png",
        v = new o.Matrix4(),
        g = new o.Vector3(),
        m = new o.Quaternion(),
        y = new o.Vector3(),
        w = new o.Quaternion(),
        b = new o.Vector3(),
        x = i.createContext(null),
        M = i.forwardRef(
          (
            {
              children: e,
              material: t = o.MeshLambertMaterial,
              texture: r = p,
              range: n,
              limit: u = 200,
              frustumCulled: c,
              ...f
            },
            d
          ) => {
            var M, E;
            let _;
            let T = i.useMemo(
              () =>
                class extends t {
                  constructor() {
                    super();
                    let e =
                      parseInt(o.REVISION.replace(/\D+/g, "")) >= 154
                        ? "opaque_fragment"
                        : "output_fragment";
                    this.onBeforeCompile = (t) => {
                      (t.vertexShader =
                        `attribute float cloudOpacity;
               varying float vOpacity;
              ` +
                        t.vertexShader.replace(
                          "#include <fog_vertex>",
                          `#include <fog_vertex>
                 vOpacity = cloudOpacity;
                `
                        )),
                        (t.fragmentShader =
                          `varying float vOpacity;
              ` +
                          t.fragmentShader.replace(
                            `#include <${e}>`,
                            `#include <${e}>
                 gl_FragColor = vec4(outgoingLight, diffuseColor.a * vOpacity);
                `
                          ));
                    };
                  }
                },
              [t]
            );
            (0, l.e)({ CloudMaterial: T });
            let S = i.useRef(null),
              R = i.useRef([]),
              A = i.useMemo(
                () => new Float32Array(Array.from({ length: u }, () => 1)),
                [u]
              ),
              k = i.useMemo(
                () =>
                  new Float32Array(
                    Array.from({ length: u }, () => [1, 1, 1]).flat()
                  ),
                [u]
              ),
              U = (0, s.mE)(r),
              I = 0,
              F = 0,
              C = new o.Quaternion(),
              L = new o.Vector3(0, 0, 1),
              D = new o.Vector3();
            (0, l.F)((e, t) => {
              for (
                I = e.clock.getElapsedTime(),
                  v.copy(S.current.matrixWorld).invert(),
                  e.camera.matrixWorld.decompose(y, w, b),
                  F = 0;
                F < R.current.length;
                F++
              )
                (_ = R.current[F]).ref.current.matrixWorld.decompose(g, m, b),
                  g.add(D.copy(_.position).applyQuaternion(m).multiply(b)),
                  m
                    .copy(w)
                    .multiply(
                      C.setFromAxisAngle(
                        L,
                        (_.rotation += t * _.rotationFactor)
                      )
                    ),
                  b.multiplyScalar(
                    _.volume +
                      ((1 + Math.sin(I * _.density * _.speed)) / 2) * _.growth
                  ),
                  _.matrix.compose(g, m, b).premultiply(v),
                  (_.dist = g.distanceTo(y));
              for (
                R.current.sort((e, t) => t.dist - e.dist), F = 0;
                F < R.current.length;
                F++
              )
                (_ = R.current[F]),
                  (A[F] =
                    _.opacity * (_.dist < _.fade - 1 ? _.dist / _.fade : 1)),
                  S.current.setMatrixAt(F, _.matrix),
                  S.current.setColorAt(F, _.color);
              (S.current.geometry.attributes.cloudOpacity.needsUpdate = !0),
                (S.current.instanceMatrix.needsUpdate = !0),
                S.current.instanceColor &&
                  (S.current.instanceColor.needsUpdate = !0);
            }),
              i.useLayoutEffect(() => {
                let e = Math.min(u, void 0 !== n ? n : u, R.current.length);
                (S.current.count = e),
                  (0, h.Jj)(S.current.instanceMatrix, {
                    offset: 0,
                    count: 16 * e,
                  }),
                  S.current.instanceColor &&
                    (0, h.Jj)(S.current.instanceColor, {
                      offset: 0,
                      count: 3 * e,
                    }),
                  (0, h.Jj)(S.current.geometry.attributes.cloudOpacity, {
                    offset: 0,
                    count: e,
                  });
              });
            let P = [
                null !== (M = U.image.width) && void 0 !== M ? M : 1,
                null !== (E = U.image.height) && void 0 !== E ? E : 1,
              ],
              O = Math.max(P[0], P[1]);
            return (
              (P = [P[0] / O, P[1] / O]),
              i.createElement(
                "group",
                (0, a.Z)({ ref: d }, f),
                i.createElement(
                  x.Provider,
                  { value: R },
                  e,
                  i.createElement(
                    "instancedMesh",
                    {
                      matrixAutoUpdate: !1,
                      ref: S,
                      args: [null, null, u],
                      frustumCulled: c,
                    },
                    i.createElement("instancedBufferAttribute", {
                      usage: o.DynamicDrawUsage,
                      attach: "instanceColor",
                      args: [k, 3],
                    }),
                    i.createElement(
                      "planeGeometry",
                      { args: [...P] },
                      i.createElement("instancedBufferAttribute", {
                        usage: o.DynamicDrawUsage,
                        attach: "attributes-cloudOpacity",
                        args: [A, 1],
                      })
                    ),
                    i.createElement("cloudMaterial", {
                      key: t.name,
                      map: U,
                      transparent: !0,
                      depthWrite: !1,
                    })
                  )
                )
              )
            );
          }
        ),
        E = i.forwardRef(
          (
            {
              opacity: e = 1,
              speed: t = 0,
              bounds: r = [5, 1, 1],
              segments: n = 20,
              color: s = "#ffffff",
              fade: u = 10,
              volume: c = 6,
              smallestVolume: f = 0.25,
              distribute: h = null,
              growth: p = 4,
              concentrate: v = "inside",
              seed: g = Math.random(),
              ...m
            },
            y
          ) => {
            function w() {
              let e = 1e4 * Math.sin(g++);
              return e - Math.floor(e);
            }
            let b = i.useContext(x),
              M = i.useRef(null),
              [E] = i.useState(() => d()),
              _ = i.useMemo(
                () =>
                  [...Array(n)].map((e, t) => ({
                    segments: n,
                    bounds: new o.Vector3(1, 1, 1),
                    position: new o.Vector3(),
                    uuid: E,
                    index: t,
                    ref: M,
                    dist: 0,
                    matrix: new o.Matrix4(),
                    color: new o.Color(),
                    rotation: (Math.PI / n) * t,
                  })),
                [n, E]
              );
            return (
              i.useLayoutEffect(() => {
                _.forEach((a, i) => {
                  (0, l.k)(a, {
                    volume: c,
                    color: s,
                    speed: t,
                    growth: p,
                    opacity: e,
                    fade: u,
                    bounds: r,
                    density: Math.max(0.5, w()),
                    rotationFactor: Math.max(0.2, 0.5 * w()) * t,
                  });
                  let o = null == h ? void 0 : h(a, i);
                  if (o || n > 1) {
                    var d;
                    a.position
                      .copy(a.bounds)
                      .multiply(
                        null !== (d = null == o ? void 0 : o.point) &&
                          void 0 !== d
                          ? d
                          : { x: 2 * w() - 1, y: 2 * w() - 1, z: 2 * w() - 1 }
                      );
                  }
                  let g = Math.abs(a.position.x),
                    m = Math.abs(a.position.y),
                    y = Math.abs(a.position.z),
                    b = Math.max(g, m, y);
                  (a.length = 1),
                    g === b && (a.length -= g / a.bounds.x),
                    m === b && (a.length -= m / a.bounds.y),
                    y === b && (a.length -= y / a.bounds.z),
                    (a.volume =
                      ((null == o ? void 0 : o.volume) !== void 0
                        ? o.volume
                        : Math.max(
                            Math.max(0, f),
                            "random" === v
                              ? w()
                              : "inside" === v
                              ? a.length
                              : 1 - a.length
                          )) * c);
                });
              }, [v, r, u, s, e, p, c, g, n, t]),
              i.useLayoutEffect(
                () => (
                  (b.current = [...b.current, ..._]),
                  () => {
                    b.current = b.current.filter((e) => e.uuid !== E);
                  }
                ),
                [_]
              ),
              i.useImperativeHandle(y, () => M.current, []),
              i.createElement("group", (0, a.Z)({ ref: M }, m))
            );
          }
        ),
        _ = i.forwardRef((e, t) =>
          i.useContext(x)
            ? i.createElement(E, (0, a.Z)({ ref: t }, e))
            : i.createElement(
                M,
                null,
                i.createElement(E, (0, a.Z)({ ref: t }, e))
              )
        );
    },
    4490: function (e, t, r) {
      r.d(t, {
        qA: function () {
          return m;
        },
        bm: function () {
          return p;
        },
        QM: function () {
          return h;
        },
        qr: function () {
          return v;
        },
      });
      var n = r(2988),
        a = r(2265),
        i = r(8914),
        o = r(7776);
      let l = (e) => e && e.isCubeTexture;
      class s extends o.Mesh {
        constructor(e, t) {
          var r, n;
          let a = l(e),
            i = Math.floor(
              Math.log2(
                (null !=
                (n = a
                  ? null == (r = e.image[0])
                    ? void 0
                    : r.width
                  : e.image.width)
                  ? n
                  : 1024) / 4
              )
            ),
            s = Math.pow(2, i),
            u = `
        varying vec3 vWorldPosition;
        void main() 
        {
            vec4 worldPosition = ( modelMatrix * vec4( position, 1.0 ) );
            vWorldPosition = worldPosition.xyz;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
        `,
            c =
              [
                a ? "#define ENVMAP_TYPE_CUBE" : "",
                `#define CUBEUV_TEXEL_WIDTH ${1 / (3 * Math.max(s, 112))}`,
                `#define CUBEUV_TEXEL_HEIGHT ${1 / (4 * s)}`,
                `#define CUBEUV_MAX_MIP ${i}.0`,
              ].join("\n") +
              `
        #define ENVMAP_TYPE_CUBE_UV
        varying vec3 vWorldPosition;
        uniform float radius;
        uniform float height;
        uniform float angle;
        #ifdef ENVMAP_TYPE_CUBE
            uniform samplerCube map;
        #else
            uniform sampler2D map;
        #endif
        // From: https://www.shadertoy.com/view/4tsBD7
        float diskIntersectWithBackFaceCulling( vec3 ro, vec3 rd, vec3 c, vec3 n, float r ) 
        {
            float d = dot ( rd, n );
            
            if( d > 0.0 ) { return 1e6; }
            
            vec3  o = ro - c;
            float t = - dot( n, o ) / d;
            vec3  q = o + rd * t;
            
            return ( dot( q, q ) < r * r ) ? t : 1e6;
        }
        // From: https://www.iquilezles.org/www/articles/intersectors/intersectors.htm
        float sphereIntersect( vec3 ro, vec3 rd, vec3 ce, float ra ) 
        {
            vec3 oc = ro - ce;
            float b = dot( oc, rd );
            float c = dot( oc, oc ) - ra * ra;
            float h = b * b - c;
            
            if( h < 0.0 ) { return -1.0; }
            
            h = sqrt( h );
            
            return - b + h;
        }
        vec3 project() 
        {
            vec3 p = normalize( vWorldPosition );
            vec3 camPos = cameraPosition;
            camPos.y -= height;
            float intersection = sphereIntersect( camPos, p, vec3( 0.0 ), radius );
            if( intersection > 0.0 ) {
                
                vec3 h = vec3( 0.0, - height, 0.0 );
                float intersection2 = diskIntersectWithBackFaceCulling( camPos, p, h, vec3( 0.0, 1.0, 0.0 ), radius );
                p = ( camPos + min( intersection, intersection2 ) * p ) / radius;
            } else {
                p = vec3( 0.0, 1.0, 0.0 );
            }
            return p;
        }
        #include <common>
        #include <cube_uv_reflection_fragment>
        void main() 
        {
            vec3 projectedWorldPosition = project();
            
            #ifdef ENVMAP_TYPE_CUBE
                vec3 outcolor = textureCube( map, projectedWorldPosition ).rgb;
            #else
                vec3 direction = normalize( projectedWorldPosition );
                vec2 uv = equirectUv( direction );
                vec3 outcolor = texture2D( map, uv ).rgb;
            #endif
            gl_FragColor = vec4( outcolor, 1.0 );
            #include <tonemapping_fragment>
            #include <${
              parseInt(o.REVISION.replace(/\D+/g, "")) >= 154
                ? "colorspace_fragment"
                : "encodings_fragment"
            }>
        }
        `;
          super(
            new o.IcosahedronGeometry(1, 16),
            new o.ShaderMaterial({
              uniforms: {
                map: { value: e },
                height: { value: (null == t ? void 0 : t.height) || 15 },
                radius: { value: (null == t ? void 0 : t.radius) || 100 },
              },
              fragmentShader: c,
              vertexShader: u,
              side: o.DoubleSide,
            })
          );
        }
        set radius(e) {
          this.material.uniforms.radius.value = e;
        }
        get radius() {
          return this.material.uniforms.radius.value;
        }
        set height(e) {
          this.material.uniforms.height.value = e;
        }
        get height() {
          return this.material.uniforms.height.value;
        }
      }
      var u = r(2961);
      let c = (e) => e.current && e.current.isScene,
        f = (e) => (c(e) ? e.current : e);
      function d(e, t, r, n, a = {}) {
        var o, l, s, u, c;
        a = {
          backgroundBlurriness: null !== (o = a.blur) && void 0 !== o ? o : 0,
          backgroundIntensity: 1,
          backgroundRotation: [0, 0, 0],
          environmentIntensity: 1,
          environmentRotation: [0, 0, 0],
          ...a,
        };
        let d = f(t || r),
          h = d.background,
          p = d.environment,
          v = {
            backgroundBlurriness: d.backgroundBlurriness,
            backgroundIntensity: d.backgroundIntensity,
            backgroundRotation:
              null !==
                (l =
                  null == (s = d.backgroundRotation) || null == s.clone
                    ? void 0
                    : s.clone()) && void 0 !== l
                ? l
                : [0, 0, 0],
            environmentIntensity: d.environmentIntensity,
            environmentRotation:
              null !==
                (u =
                  null == (c = d.environmentRotation) || null == c.clone
                    ? void 0
                    : c.clone()) && void 0 !== u
                ? u
                : [0, 0, 0],
          };
        return (
          "only" !== e && (d.environment = n),
          e && (d.background = n),
          (0, i.k)(d, a),
          () => {
            "only" !== e && (d.environment = p),
              e && (d.background = h),
              (0, i.k)(d, v);
          }
        );
      }
      function h({ scene: e, background: t = !1, map: r, ...n }) {
        let o = (0, i.D)((e) => e.scene);
        return (
          a.useLayoutEffect(() => {
            if (r) return d(t, e, o, r, n);
          }),
          null
        );
      }
      function p({
        background: e = !1,
        scene: t,
        blur: r,
        backgroundBlurriness: n,
        backgroundIntensity: o,
        backgroundRotation: l,
        environmentIntensity: s,
        environmentRotation: c,
        ...f
      }) {
        let h = (0, u.O)(f),
          p = (0, i.D)((e) => e.scene);
        return (
          a.useLayoutEffect(() =>
            d(e, t, p, h, {
              blur: r,
              backgroundBlurriness: n,
              backgroundIntensity: o,
              backgroundRotation: l,
              environmentIntensity: s,
              environmentRotation: c,
            })
          ),
          null
        );
      }
      function v({
        children: e,
        near: t = 1,
        far: r = 1e3,
        resolution: n = 256,
        frames: l = 1,
        map: s,
        background: u = !1,
        blur: c,
        backgroundBlurriness: f,
        backgroundIntensity: v,
        backgroundRotation: g,
        environmentIntensity: m,
        environmentRotation: y,
        scene: w,
        files: b,
        path: x,
        preset: M,
        extensions: E,
      }) {
        let _ = (0, i.D)((e) => e.gl),
          T = (0, i.D)((e) => e.scene),
          S = a.useRef(null),
          [R] = a.useState(() => new o.Scene()),
          A = a.useMemo(() => {
            let e = new o.WebGLCubeRenderTarget(n);
            return (e.texture.type = o.HalfFloatType), e;
          }, [n]);
        a.useLayoutEffect(
          () => (
            1 === l && S.current.update(_, R),
            d(u, w, T, A.texture, {
              blur: c,
              backgroundBlurriness: f,
              backgroundIntensity: v,
              backgroundRotation: g,
              environmentIntensity: m,
              environmentRotation: y,
            })
          ),
          [e, R, A.texture, w, T, u, l, _]
        );
        let k = 1;
        return (
          (0, i.F)(() => {
            (l === 1 / 0 || k < l) && (S.current.update(_, R), k++);
          }),
          a.createElement(
            a.Fragment,
            null,
            (0, i.h)(
              a.createElement(
                a.Fragment,
                null,
                e,
                a.createElement("cubeCamera", { ref: S, args: [t, r, A] }),
                b || M
                  ? a.createElement(p, {
                      background: !0,
                      files: b,
                      preset: M,
                      path: x,
                      extensions: E,
                    })
                  : s
                  ? a.createElement(h, {
                      background: !0,
                      map: s,
                      extensions: E,
                    })
                  : null
              ),
              R
            )
          )
        );
      }
      function g(e) {
        var t, r, o, l;
        let c = (0, u.O)(e),
          f = e.map || c;
        a.useMemo(() => (0, i.e)({ GroundProjectedEnvImpl: s }), []);
        let d = a.useMemo(() => [f], [f]),
          p = null == (t = e.ground) ? void 0 : t.height,
          v = null == (r = e.ground) ? void 0 : r.radius,
          g =
            null !== (o = null == (l = e.ground) ? void 0 : l.scale) &&
            void 0 !== o
              ? o
              : 1e3;
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(h, (0, n.Z)({}, e, { map: f })),
          a.createElement("groundProjectedEnvImpl", {
            args: d,
            scale: g,
            height: p,
            radius: v,
          })
        );
      }
      function m(e) {
        return e.ground
          ? a.createElement(g, e)
          : e.map
          ? a.createElement(h, e)
          : e.children
          ? a.createElement(v, e)
          : a.createElement(p, e);
      }
    },
    789: function (e, t, r) {
      r.d(t, {
        b: function () {
          return o;
        },
      });
      var n = r(2265),
        a = r(8914),
        i = r(7776);
      let o = n.forwardRef(
        (
          {
            children: e,
            enabled: t = !0,
            speed: r = 1,
            rotationIntensity: o = 1,
            floatIntensity: l = 1,
            floatingRange: s = [-0.1, 0.1],
            autoInvalidate: u = !1,
            ...c
          },
          f
        ) => {
          let d = n.useRef(null);
          n.useImperativeHandle(f, () => d.current, []);
          let h = n.useRef(1e4 * Math.random());
          return (
            (0, a.F)((e) => {
              var n, a;
              if (!t || 0 === r) return;
              u && e.invalidate();
              let c = h.current + e.clock.getElapsedTime();
              (d.current.rotation.x = (Math.cos((c / 4) * r) / 8) * o),
                (d.current.rotation.y = (Math.sin((c / 4) * r) / 8) * o),
                (d.current.rotation.z = (Math.sin((c / 4) * r) / 20) * o);
              let f = Math.sin((c / 4) * r) / 10;
              (f = i.MathUtils.mapLinear(
                f,
                -0.1,
                0.1,
                null !== (n = null == s ? void 0 : s[0]) && void 0 !== n
                  ? n
                  : -0.1,
                null !== (a = null == s ? void 0 : s[1]) && void 0 !== a
                  ? a
                  : 0.1
              )),
                (d.current.position.y = f * l),
                d.current.updateMatrix();
            }),
            n.createElement(
              "group",
              c,
              n.createElement("group", { ref: d, matrixAutoUpdate: !1 }, e)
            )
          );
        }
      );
    },
    4379: function (e, t, r) {
      r.d(t, {
        x: function () {
          return s;
        },
      });
      var n = r(2988),
        a = r(2265),
        i = r(5212),
        o = r(8914),
        l = r(9429);
      let s = a.forwardRef(
        (
          {
            sdfGlyphSize: e = 64,
            anchorX: t = "center",
            anchorY: r = "middle",
            font: s,
            fontSize: u = 1,
            children: c,
            characters: f,
            onSync: d,
            ...h
          },
          p
        ) => {
          let v = (0, o.D)(({ invalidate: e }) => e),
            [g] = a.useState(() => new i.xv()),
            [m, y] = a.useMemo(() => {
              let e = [],
                t = "";
              return (
                a.Children.forEach(c, (r) => {
                  "string" == typeof r || "number" == typeof r
                    ? (t += r)
                    : e.push(r);
                }),
                [e, t]
              );
            }, [c]);
          return (
            (0, l.Rq)(
              () =>
                new Promise((e) => (0, i.C5)({ font: s, characters: f }, e)),
              ["troika-text", s, f]
            ),
            a.useLayoutEffect(
              () =>
                void g.sync(() => {
                  v(), d && d(g);
                })
            ),
            a.useEffect(() => () => g.dispose(), [g]),
            a.createElement(
              "primitive",
              (0, n.Z)(
                {
                  object: g,
                  ref: p,
                  font: s,
                  text: y,
                  anchorX: t,
                  anchorY: r,
                  fontSize: u,
                  sdfGlyphSize: e,
                },
                h
              ),
              m
            )
          );
        }
      );
    },
    854: function (e, t, r) {
      r.d(t, {
        ci: function () {
          return o;
        },
        mE: function () {
          return l;
        },
        xE: function () {
          return s;
        },
      });
      var n = r(2265),
        a = r(7776),
        i = r(8914);
      let o = (e) =>
        e === Object(e) && !Array.isArray(e) && "function" != typeof e;
      function l(e, t) {
        let r = (0, i.D)((e) => e.gl),
          l = (0, i.H)(a.TextureLoader, o(e) ? Object.values(e) : e);
        return (
          (0, n.useLayoutEffect)(() => {
            null == t || t(l);
          }, [t]),
          (0, n.useEffect)(() => {
            if ("initTexture" in r) {
              let e = [];
              Array.isArray(l)
                ? (e = l)
                : l instanceof a.Texture
                ? (e = [l])
                : o(l) && (e = Object.values(l)),
                e.forEach((e) => {
                  e instanceof a.Texture && r.initTexture(e);
                });
            }
          }, [r, l]),
          (0, n.useMemo)(() => {
            if (!o(e)) return l;
            {
              let t = {},
                r = 0;
              for (let n in e) t[n] = l[r++];
              return t;
            }
          }, [e, l])
        );
      }
      (l.preload = (e) => i.H.preload(a.TextureLoader, e)),
        (l.clear = (e) => i.H.clear(a.TextureLoader, e));
      let s = ({ children: e, input: t, onLoad: r }) => {
        let a = l(t, r);
        return n.createElement(n.Fragment, null, null == e ? void 0 : e(a));
      };
    },
    2961: function (e, t, r) {
      let n;
      r.d(t, {
        O: function () {
          return F;
        },
      });
      var a = r(8914),
        i = r(7776);
      class o extends i.DataTextureLoader {
        constructor(e) {
          super(e), (this.type = i.HalfFloatType);
        }
        parse(e) {
          let t, r, n;
          let a = function (e, t) {
              switch (e) {
                case 1:
                  throw Error("THREE.RGBELoader: Read Error: " + (t || ""));
                case 2:
                  throw Error("THREE.RGBELoader: Write Error: " + (t || ""));
                case 3:
                  throw Error(
                    "THREE.RGBELoader: Bad File Format: " + (t || "")
                  );
                default:
                  throw Error("THREE.RGBELoader: Memory Error: " + (t || ""));
              }
            },
            o = function (e, t, r) {
              t = t || 1024;
              let n = e.pos,
                a = -1,
                i = 0,
                o = "",
                l = String.fromCharCode.apply(
                  null,
                  new Uint16Array(e.subarray(n, n + 128))
                );
              for (; 0 > (a = l.indexOf("\n")) && i < t && n < e.byteLength; )
                (o += l),
                  (i += l.length),
                  (n += 128),
                  (l += String.fromCharCode.apply(
                    null,
                    new Uint16Array(e.subarray(n, n + 128))
                  ));
              return (
                -1 < a && (!1 !== r && (e.pos += i + a + 1), o + l.slice(0, a))
              );
            },
            l = new Uint8Array(e);
          l.pos = 0;
          let s = (function (e) {
              let t, r;
              let n = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,
                i = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,
                l = /^\s*FORMAT=(\S+)\s*$/,
                s = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,
                u = {
                  valid: 0,
                  string: "",
                  comments: "",
                  programtype: "RGBE",
                  format: "",
                  gamma: 1,
                  exposure: 1,
                  width: 0,
                  height: 0,
                };
              for (
                (!(e.pos >= e.byteLength) && (t = o(e))) ||
                  a(1, "no header found"),
                  (r = t.match(/^#\?(\S+)/)) || a(3, "bad initial token"),
                  u.valid |= 1,
                  u.programtype = r[1],
                  u.string += t + "\n";
                !1 !== (t = o(e));

              ) {
                if (((u.string += t + "\n"), "#" === t.charAt(0))) {
                  u.comments += t + "\n";
                  continue;
                }
                if (
                  ((r = t.match(n)) && (u.gamma = parseFloat(r[1])),
                  (r = t.match(i)) && (u.exposure = parseFloat(r[1])),
                  (r = t.match(l)) && ((u.valid |= 2), (u.format = r[1])),
                  (r = t.match(s)) &&
                    ((u.valid |= 4),
                    (u.height = parseInt(r[1], 10)),
                    (u.width = parseInt(r[2], 10))),
                  2 & u.valid && 4 & u.valid)
                )
                  break;
              }
              return (
                2 & u.valid || a(3, "missing format specifier"),
                4 & u.valid || a(3, "missing image size specifier"),
                u
              );
            })(l),
            u = s.width,
            c = s.height,
            f = (function (e, t, r) {
              if (t < 8 || t > 32767 || 2 !== e[0] || 2 !== e[1] || 128 & e[2])
                return new Uint8Array(e);
              t !== ((e[2] << 8) | e[3]) && a(3, "wrong scanline width");
              let n = new Uint8Array(4 * t * r);
              n.length || a(4, "unable to allocate buffer space");
              let i = 0,
                o = 0,
                l = 4 * t,
                s = new Uint8Array(4),
                u = new Uint8Array(l),
                c = r;
              for (; c > 0 && o < e.byteLength; ) {
                o + 4 > e.byteLength && a(1),
                  (s[0] = e[o++]),
                  (s[1] = e[o++]),
                  (s[2] = e[o++]),
                  (s[3] = e[o++]),
                  (2 != s[0] || 2 != s[1] || ((s[2] << 8) | s[3]) != t) &&
                    a(3, "bad rgbe scanline format");
                let r = 0,
                  f;
                for (; r < l && o < e.byteLength; ) {
                  let t = (f = e[o++]) > 128;
                  if (
                    (t && (f -= 128),
                    (0 === f || r + f > l) && a(3, "bad scanline data"),
                    t)
                  ) {
                    let t = e[o++];
                    for (let e = 0; e < f; e++) u[r++] = t;
                  } else u.set(e.subarray(o, o + f), r), (r += f), (o += f);
                }
                for (let e = 0; e < t; e++) {
                  let r = 0;
                  (n[i] = u[e + r]),
                    (r += t),
                    (n[i + 1] = u[e + r]),
                    (r += t),
                    (n[i + 2] = u[e + r]),
                    (r += t),
                    (n[i + 3] = u[e + r]),
                    (i += 4);
                }
                c--;
              }
              return n;
            })(l.subarray(l.pos), u, c);
          switch (this.type) {
            case i.FloatType:
              let d = new Float32Array(4 * (n = f.length / 4));
              for (let e = 0; e < n; e++)
                !(function (e, t, r, n) {
                  let a = Math.pow(2, e[t + 3] - 128) / 255;
                  (r[n + 0] = e[t + 0] * a),
                    (r[n + 1] = e[t + 1] * a),
                    (r[n + 2] = e[t + 2] * a),
                    (r[n + 3] = 1);
                })(f, 4 * e, d, 4 * e);
              (t = d), (r = i.FloatType);
              break;
            case i.HalfFloatType:
              let h = new Uint16Array(4 * (n = f.length / 4));
              for (let e = 0; e < n; e++)
                !(function (e, t, r, n) {
                  let a = Math.pow(2, e[t + 3] - 128) / 255;
                  (r[n + 0] = i.DataUtils.toHalfFloat(
                    Math.min(e[t + 0] * a, 65504)
                  )),
                    (r[n + 1] = i.DataUtils.toHalfFloat(
                      Math.min(e[t + 1] * a, 65504)
                    )),
                    (r[n + 2] = i.DataUtils.toHalfFloat(
                      Math.min(e[t + 2] * a, 65504)
                    )),
                    (r[n + 3] = i.DataUtils.toHalfFloat(1));
                })(f, 4 * e, h, 4 * e);
              (t = h), (r = i.HalfFloatType);
              break;
            default:
              throw Error("THREE.RGBELoader: Unsupported type: " + this.type);
          }
          return {
            width: u,
            height: c,
            data: t,
            header: s.string,
            gamma: s.gamma,
            exposure: s.exposure,
            type: r,
          };
        }
        setDataType(e) {
          return (this.type = e), this;
        }
        load(e, t, r, n) {
          return super.load(
            e,
            function (e, r) {
              switch (e.type) {
                case i.FloatType:
                case i.HalfFloatType:
                  "colorSpace" in e
                    ? (e.colorSpace = "srgb-linear")
                    : (e.encoding = 3e3),
                    (e.minFilter = i.LinearFilter),
                    (e.magFilter = i.LinearFilter),
                    (e.generateMipmaps = !1),
                    (e.flipY = !0);
              }
              t && t(e, r);
            },
            r,
            n
          );
        }
      }
      var l = r(557);
      let s = "colorSpace" in new i.Texture();
      class u extends i.DataTextureLoader {
        constructor(e) {
          super(e), (this.type = i.HalfFloatType);
        }
        parse(e) {
          let t = { l: 0, c: 0, lc: 0 };
          function r(e, r, n, a, i) {
            for (; n < e; ) (r = (r << 8) | A(a, i)), (n += 8);
            (n -= e), (t.l = (r >> n) & ((1 << e) - 1)), (t.c = r), (t.lc = n);
          }
          let n = Array(59),
            a = { c: 0, lc: 0 };
          function o(e, t, r, n) {
            (e = (e << 8) | A(r, n)), (t += 8), (a.c = e), (a.lc = t);
          }
          let u = { c: 0, lc: 0 };
          function c(e, t, r, n, i, l, s, c, f, d) {
            if (e == t) {
              n < 8 && (o(r, n, i, s), (r = a.c), (n = a.lc));
              var h = r >> (n -= 8),
                h = new Uint8Array([h])[0];
              if (f.value + h > d) return !1;
              for (var p = c[f.value - 1]; h-- > 0; ) c[f.value++] = p;
            } else {
              if (!(f.value < d)) return !1;
              c[f.value++] = e;
            }
            (u.c = r), (u.lc = n);
          }
          function f(e) {
            var t = 65535 & e;
            return t > 32767 ? t - 65536 : t;
          }
          let d = { a: 0, b: 0 };
          function h(e, t) {
            var r = f(e),
              n = f(t),
              a = r + (1 & n) + (n >> 1),
              i = a - n;
            (d.a = a), (d.b = i);
          }
          function p(e, t) {
            var r = 65535 & t,
              n = ((65535 & e) - (r >> 1)) & 65535;
            (d.a = (r + n - 32768) & 65535), (d.b = n);
          }
          function v(e, i, l, s, f, d) {
            var h = l.value,
              p = R(i, l),
              v = R(i, l);
            l.value += 4;
            var g = R(i, l);
            if (((l.value += 4), p < 0 || p >= 65537 || v < 0 || v >= 65537))
              throw "Something wrong with HUF_ENCSIZE";
            var m = Array(65537),
              y = Array(16384);
            !(function (e) {
              for (var t = 0; t < 16384; t++)
                (e[t] = {}), (e[t].len = 0), (e[t].lit = 0), (e[t].p = null);
            })(y);
            var w = s - (l.value - h);
            if (
              (!(function (e, a, i, o, l, s, u) {
                for (var c = 0, f = 0; l <= s; l++) {
                  if (i.value - i.value > o) return !1;
                  r(6, c, f, e, i);
                  var d = t.l;
                  if (((c = t.c), (f = t.lc), (u[l] = d), 63 == d)) {
                    if (i.value - i.value > o)
                      throw "Something wrong with hufUnpackEncTable";
                    r(8, c, f, e, i);
                    var h = t.l + 6;
                    if (((c = t.c), (f = t.lc), l + h > s + 1))
                      throw "Something wrong with hufUnpackEncTable";
                    for (; h--; ) u[l++] = 0;
                    l--;
                  } else if (d >= 59) {
                    var h = d - 59 + 2;
                    if (l + h > s + 1)
                      throw "Something wrong with hufUnpackEncTable";
                    for (; h--; ) u[l++] = 0;
                    l--;
                  }
                }
                !(function (e) {
                  for (var t = 0; t <= 58; ++t) n[t] = 0;
                  for (var t = 0; t < 65537; ++t) n[e[t]] += 1;
                  for (var r = 0, t = 58; t > 0; --t) {
                    var a = (r + n[t]) >> 1;
                    (n[t] = r), (r = a);
                  }
                  for (var t = 0; t < 65537; ++t) {
                    var i = e[t];
                    i > 0 && (e[t] = i | (n[i]++ << 6));
                  }
                })(u);
              })(e, 0, l, w, p, v, m),
              g > 8 * (s - (l.value - h)))
            )
              throw "Something wrong with hufUncompress";
            !(function (e, t, r, n) {
              for (; t <= r; t++) {
                var a = e[t] >> 6,
                  i = 63 & e[t];
                if (a >> i) throw "Invalid table entry";
                if (i > 14) {
                  var o = n[a >> (i - 14)];
                  if (o.len) throw "Invalid table entry";
                  if ((o.lit++, o.p)) {
                    var l = o.p;
                    o.p = Array(o.lit);
                    for (var s = 0; s < o.lit - 1; ++s) o.p[s] = l[s];
                  } else o.p = [,];
                  o.p[o.lit - 1] = t;
                } else if (i)
                  for (var u = 0, s = 1 << (14 - i); s > 0; s--) {
                    var o = n[(a << (14 - i)) + u];
                    if (o.len || o.p) throw "Invalid table entry";
                    (o.len = i), (o.lit = t), u++;
                  }
              }
            })(m, p, v, y),
              (function (e, t, r, n, i, l, s, f, d, h) {
                for (
                  var p = 0, v = 0, g = Math.trunc(i.value + (l + 7) / 8);
                  i.value < g;

                )
                  for (o(p, v, r, i), p = a.c, v = a.lc; v >= 14; ) {
                    var m = t[(p >> (v - 14)) & 16383];
                    if (m.len)
                      (v -= m.len),
                        c(m.lit, s, p, v, r, n, i, d, h, f),
                        (p = u.c),
                        (v = u.lc);
                    else {
                      if (!m.p) throw "hufDecode issues";
                      for (y = 0; y < m.lit; y++) {
                        for (var y, w = 63 & e[m.p[y]]; v < w && i.value < g; )
                          o(p, v, r, i), (p = a.c), (v = a.lc);
                        if (
                          v >= w &&
                          e[m.p[y]] >> 6 == ((p >> (v - w)) & ((1 << w) - 1))
                        ) {
                          (v -= w),
                            c(m.p[y], s, p, v, r, n, i, d, h, f),
                            (p = u.c),
                            (v = u.lc);
                          break;
                        }
                      }
                      if (y == m.lit) throw "hufDecode issues";
                    }
                  }
                var b = (8 - l) & 7;
                for (p >>= b, v -= b; v > 0; ) {
                  var m = t[(p << (14 - v)) & 16383];
                  if (m.len)
                    (v -= m.len),
                      c(m.lit, s, p, v, r, n, i, d, h, f),
                      (p = u.c),
                      (v = u.lc);
                  else throw "hufDecode issues";
                }
              })(m, y, e, i, l, g, v, d, f, { value: 0 });
          }
          function g(e) {
            for (var t = 1; t < e.length; t++) {
              var r = e[t - 1] + e[t] - 128;
              e[t] = r;
            }
          }
          function m(e, t) {
            for (
              var r = 0,
                n = Math.floor((e.length + 1) / 2),
                a = 0,
                i = e.length - 1;
              !(a > i) && ((t[a++] = e[r++]), !(a > i));

            )
              t[a++] = e[n++];
          }
          function y(e) {
            for (
              var t = e.byteLength, r = [], n = 0, a = new DataView(e);
              t > 0;

            ) {
              var i = a.getInt8(n++);
              if (i < 0) {
                var o = -i;
                t -= o + 1;
                for (var l = 0; l < o; l++) r.push(a.getUint8(n++));
              } else {
                var o = i;
                t -= 2;
                for (var s = a.getUint8(n++), l = 0; l < o + 1; l++) r.push(s);
              }
            }
            return r;
          }
          function w(e) {
            return new DataView(e.array.buffer, e.offset.value, e.size);
          }
          function b(e) {
            var t = new Uint8Array(
                y(
                  e.viewer.buffer.slice(e.offset.value, e.offset.value + e.size)
                )
              ),
              r = new Uint8Array(t.length);
            return g(t), m(t, r), new DataView(r.buffer);
          }
          function x(e) {
            var t = e.array.slice(e.offset.value, e.offset.value + e.size),
              r = (0, l.HT)(t),
              n = new Uint8Array(r.length);
            return g(r), m(r, n), new DataView(n.buffer);
          }
          function M(e) {
            for (
              var t = e.viewer,
                r = { value: e.offset.value },
                n = new Uint16Array(
                  e.width * e.scanlineBlockSize * (e.channels * e.type)
                ),
                a = new Uint8Array(8192),
                i = 0,
                o = Array(e.channels),
                l = 0;
              l < e.channels;
              l++
            )
              (o[l] = {}),
                (o[l].start = i),
                (o[l].end = o[l].start),
                (o[l].nx = e.width),
                (o[l].ny = e.lines),
                (o[l].size = e.type),
                (i += o[l].nx * o[l].ny * o[l].size);
            var s = L(t, r),
              u = L(t, r);
            if (u >= 8192)
              throw "Something is wrong with PIZ_COMPRESSION BITMAP_SIZE";
            if (s <= u) for (var l = 0; l < u - s + 1; l++) a[l + s] = k(t, r);
            var c = new Uint16Array(65536),
              f = (function (e, t) {
                for (var r = 0, n = 0; n < 65536; ++n)
                  (0 == n || e[n >> 3] & (1 << (7 & n))) && (t[r++] = n);
                for (var a = r - 1; r < 65536; ) t[r++] = 0;
                return a;
              })(a, c),
              g = R(t, r);
            v(e.array, t, r, g, n, i);
            for (var l = 0; l < e.channels; ++l)
              for (var m = o[l], y = 0; y < o[l].size; ++y)
                !(function (e, t, r, n, a, i, o) {
                  for (var l = o < 16384, s = r > a ? a : r, u = 1; u <= s; )
                    u <<= 1;
                  for (u >>= 1, c = u, u >>= 1; u >= 1; ) {
                    for (
                      var c,
                        f,
                        v,
                        g,
                        m,
                        y = 0,
                        w = 0 + i * (a - c),
                        b = i * u,
                        x = i * c,
                        M = n * u,
                        E = n * c;
                      y <= w;
                      y += x
                    ) {
                      for (var _ = y, T = y + n * (r - c); _ <= T; _ += E) {
                        var S = _ + M,
                          R = _ + b,
                          A = R + M;
                        l
                          ? (h(e[_ + t], e[R + t]),
                            (f = d.a),
                            (g = d.b),
                            h(e[S + t], e[A + t]),
                            (v = d.a),
                            (m = d.b),
                            h(f, v),
                            (e[_ + t] = d.a),
                            (e[S + t] = d.b),
                            h(g, m))
                          : (p(e[_ + t], e[R + t]),
                            (f = d.a),
                            (g = d.b),
                            p(e[S + t], e[A + t]),
                            (v = d.a),
                            (m = d.b),
                            p(f, v),
                            (e[_ + t] = d.a),
                            (e[S + t] = d.b),
                            p(g, m)),
                          (e[R + t] = d.a),
                          (e[A + t] = d.b);
                      }
                      if (r & u) {
                        var R = _ + b;
                        l ? h(e[_ + t], e[R + t]) : p(e[_ + t], e[R + t]),
                          (f = d.a),
                          (e[R + t] = d.b),
                          (e[_ + t] = f);
                      }
                    }
                    if (a & u)
                      for (var _ = y, T = y + n * (r - c); _ <= T; _ += E) {
                        var S = _ + M;
                        l ? h(e[_ + t], e[S + t]) : p(e[_ + t], e[S + t]),
                          (f = d.a),
                          (e[S + t] = d.b),
                          (e[_ + t] = f);
                      }
                    (c = u), (u >>= 1);
                  }
                })(n, m.start + y, m.nx, m.size, m.ny, m.nx * m.size, f);
            !(function (e, t, r) {
              for (var n = 0; n < r; ++n) t[n] = e[t[n]];
            })(c, n, i);
            for (
              var w = 0, b = new Uint8Array(n.buffer.byteLength), x = 0;
              x < e.lines;
              x++
            )
              for (var M = 0; M < e.channels; M++) {
                var m = o[M],
                  E = m.nx * m.size,
                  _ = new Uint8Array(n.buffer, 2 * m.end, 2 * E);
                b.set(_, w), (w += 2 * E), (m.end += E);
              }
            return new DataView(b.buffer);
          }
          function E(e) {
            var t = e.array.slice(e.offset.value, e.offset.value + e.size),
              r = (0, l.HT)(t);
            let n = e.lines * e.channels * e.width,
              a = 1 == e.type ? new Uint16Array(n) : new Uint32Array(n),
              i = 0,
              o = 0,
              s = [, , , ,];
            for (let t = 0; t < e.lines; t++)
              for (let t = 0; t < e.channels; t++) {
                let t = 0;
                switch (e.type) {
                  case 1:
                    (s[0] = i), (s[1] = s[0] + e.width), (i = s[1] + e.width);
                    for (let n = 0; n < e.width; ++n)
                      (t += (r[s[0]++] << 8) | r[s[1]++]), (a[o] = t), o++;
                    break;
                  case 2:
                    (s[0] = i),
                      (s[1] = s[0] + e.width),
                      (s[2] = s[1] + e.width),
                      (i = s[2] + e.width);
                    for (let n = 0; n < e.width; ++n)
                      (t +=
                        (r[s[0]++] << 24) |
                        (r[s[1]++] << 16) |
                        (r[s[2]++] << 8)),
                        (a[o] = t),
                        o++;
                }
              }
            return new DataView(a.buffer);
          }
          function _(e) {
            var t = e.viewer,
              r = { value: e.offset.value },
              n = new Uint8Array(e.width * e.lines * (e.channels * e.type * 2)),
              a = {
                version: U(t, r),
                unknownUncompressedSize: U(t, r),
                unknownCompressedSize: U(t, r),
                acCompressedSize: U(t, r),
                dcCompressedSize: U(t, r),
                rleCompressedSize: U(t, r),
                rleUncompressedSize: U(t, r),
                rleRawSize: U(t, r),
                totalAcUncompressedCount: U(t, r),
                totalDcUncompressedCount: U(t, r),
                acCompression: U(t, r),
              };
            if (a.version < 2)
              throw (
                "EXRLoader.parse: " +
                N.compression +
                " version " +
                a.version +
                " is unsupported"
              );
            for (var o = [], s = L(t, r) - 2; s > 0; ) {
              var u = T(t.buffer, r),
                c = k(t, r),
                f = (c >> 2) & 3,
                d = new Int8Array([(c >> 4) - 1])[0],
                h = k(t, r);
              o.push({ name: u, index: d, type: h, compression: f }),
                (s -= u.length + 3);
            }
            for (
              var p = N.channels, g = Array(e.channels), m = 0;
              m < e.channels;
              ++m
            ) {
              var w = (g[m] = {}),
                b = p[m];
              (w.name = b.name),
                (w.compression = 0),
                (w.decoded = !1),
                (w.type = b.pixelType),
                (w.pLinear = b.pLinear),
                (w.width = e.width),
                (w.height = e.lines);
            }
            for (var M = { idx: [, , ,] }, E = 0; E < e.channels; ++E)
              for (var w = g[E], m = 0; m < o.length; ++m) {
                var _ = o[m];
                w.name == _.name &&
                  ((w.compression = _.compression),
                  _.index >= 0 && (M.idx[_.index] = E),
                  (w.offset = E));
              }
            if (a.acCompressedSize > 0)
              switch (a.acCompression) {
                case 0:
                  var S = new Uint16Array(a.totalAcUncompressedCount);
                  v(
                    e.array,
                    t,
                    r,
                    a.acCompressedSize,
                    S,
                    a.totalAcUncompressedCount
                  );
                  break;
                case 1:
                  var R = e.array.slice(
                      r.value,
                      r.value + a.totalAcUncompressedCount
                    ),
                    A = (0, l.HT)(R),
                    S = new Uint16Array(A.buffer);
                  r.value += a.totalAcUncompressedCount;
              }
            if (a.dcCompressedSize > 0) {
              var I = new Uint16Array(
                x({
                  array: e.array,
                  offset: r,
                  size: a.dcCompressedSize,
                }).buffer
              );
              r.value += a.dcCompressedSize;
            }
            if (a.rleRawSize > 0) {
              var R = e.array.slice(r.value, r.value + a.rleCompressedSize),
                A = (0, l.HT)(R),
                F = y(A.buffer);
              r.value += a.rleCompressedSize;
            }
            for (var D = 0, P = Array(g.length), m = 0; m < P.length; ++m)
              P[m] = [];
            for (var O = 0; O < e.lines; ++O)
              for (var B = 0; B < g.length; ++B)
                P[B].push(D), (D += g[B].width * e.type * 2);
            !(function (e, t, r, n, a, o) {
              var l = new DataView(o.buffer),
                s = r[e.idx[0]].width,
                u = r[e.idx[0]].height,
                c = Math.floor(s / 8),
                f = Math.ceil(s / 8),
                d = Math.ceil(u / 8),
                h = s - (f - 1) * 8,
                p = u - (d - 1) * 8,
                v = { value: 0 },
                g = [, , ,],
                m = [, , ,],
                y = [, , ,],
                w = [, , ,],
                b = [, , ,];
              for (let r = 0; r < 3; ++r)
                (b[r] = t[e.idx[r]]),
                  (g[r] = r < 1 ? 0 : g[r - 1] + f * d),
                  (m[r] = new Float32Array(64)),
                  (y[r] = new Uint16Array(64)),
                  (w[r] = new Uint16Array(64 * f));
              for (let t = 0; t < d; ++t) {
                var x,
                  M,
                  E = 8;
                t == d - 1 && (E = p);
                var _ = 8;
                for (let e = 0; e < f; ++e) {
                  e == f - 1 && (_ = h);
                  for (let e = 0; e < 3; ++e)
                    y[e].fill(0),
                      (y[e][0] = a[g[e]++]),
                      (function (e, t, r) {
                        for (var n, a = 1; a < 64; )
                          65280 == (n = t[e.value])
                            ? (a = 64)
                            : n >> 8 == 255
                            ? (a += 255 & n)
                            : ((r[a] = n), a++),
                            e.value++;
                      })(v, n, y[e]),
                      (x = y[e]),
                      ((M = m[e])[0] = C(x[0])),
                      (M[1] = C(x[1])),
                      (M[2] = C(x[5])),
                      (M[3] = C(x[6])),
                      (M[4] = C(x[14])),
                      (M[5] = C(x[15])),
                      (M[6] = C(x[27])),
                      (M[7] = C(x[28])),
                      (M[8] = C(x[2])),
                      (M[9] = C(x[4])),
                      (M[10] = C(x[7])),
                      (M[11] = C(x[13])),
                      (M[12] = C(x[16])),
                      (M[13] = C(x[26])),
                      (M[14] = C(x[29])),
                      (M[15] = C(x[42])),
                      (M[16] = C(x[3])),
                      (M[17] = C(x[8])),
                      (M[18] = C(x[12])),
                      (M[19] = C(x[17])),
                      (M[20] = C(x[25])),
                      (M[21] = C(x[30])),
                      (M[22] = C(x[41])),
                      (M[23] = C(x[43])),
                      (M[24] = C(x[9])),
                      (M[25] = C(x[11])),
                      (M[26] = C(x[18])),
                      (M[27] = C(x[24])),
                      (M[28] = C(x[31])),
                      (M[29] = C(x[40])),
                      (M[30] = C(x[44])),
                      (M[31] = C(x[53])),
                      (M[32] = C(x[10])),
                      (M[33] = C(x[19])),
                      (M[34] = C(x[23])),
                      (M[35] = C(x[32])),
                      (M[36] = C(x[39])),
                      (M[37] = C(x[45])),
                      (M[38] = C(x[52])),
                      (M[39] = C(x[54])),
                      (M[40] = C(x[20])),
                      (M[41] = C(x[22])),
                      (M[42] = C(x[33])),
                      (M[43] = C(x[38])),
                      (M[44] = C(x[46])),
                      (M[45] = C(x[51])),
                      (M[46] = C(x[55])),
                      (M[47] = C(x[60])),
                      (M[48] = C(x[21])),
                      (M[49] = C(x[34])),
                      (M[50] = C(x[37])),
                      (M[51] = C(x[47])),
                      (M[52] = C(x[50])),
                      (M[53] = C(x[56])),
                      (M[54] = C(x[59])),
                      (M[55] = C(x[61])),
                      (M[56] = C(x[35])),
                      (M[57] = C(x[36])),
                      (M[58] = C(x[48])),
                      (M[59] = C(x[49])),
                      (M[60] = C(x[57])),
                      (M[61] = C(x[58])),
                      (M[62] = C(x[62])),
                      (M[63] = C(x[63])),
                      (function (e) {
                        let t = 0.5 * Math.cos(3.14159 / 16),
                          r = 0.5 * Math.cos(3.14159 / 8),
                          n = 0.5 * Math.cos((3 * 3.14159) / 16),
                          a = 0.5 * Math.cos((3 * 3.14159) / 8);
                        for (
                          var i = [, , , ,],
                            o = [, , , ,],
                            l = [, , , ,],
                            s = [, , , ,],
                            u = 0;
                          u < 8;
                          ++u
                        ) {
                          var c = 8 * u;
                          (i[0] = r * e[c + 2]),
                            (i[1] = a * e[c + 2]),
                            (i[2] = r * e[c + 6]),
                            (i[3] = a * e[c + 6]),
                            (o[0] =
                              t * e[c + 1] +
                              n * e[c + 3] +
                              0.2777854612564676 * e[c + 5] +
                              0.09754573032714427 * e[c + 7]),
                            (o[1] =
                              n * e[c + 1] -
                              0.09754573032714427 * e[c + 3] -
                              t * e[c + 5] -
                              0.2777854612564676 * e[c + 7]),
                            (o[2] =
                              0.2777854612564676 * e[c + 1] -
                              t * e[c + 3] +
                              0.09754573032714427 * e[c + 5] +
                              n * e[c + 7]),
                            (o[3] =
                              0.09754573032714427 * e[c + 1] -
                              0.2777854612564676 * e[c + 3] +
                              n * e[c + 5] -
                              t * e[c + 7]),
                            (l[0] =
                              0.35355362513961314 * (e[c + 0] + e[c + 4])),
                            (l[3] =
                              0.35355362513961314 * (e[c + 0] - e[c + 4])),
                            (l[1] = i[0] + i[3]),
                            (l[2] = i[1] - i[2]),
                            (s[0] = l[0] + l[1]),
                            (s[1] = l[3] + l[2]),
                            (s[2] = l[3] - l[2]),
                            (s[3] = l[0] - l[1]),
                            (e[c + 0] = s[0] + o[0]),
                            (e[c + 1] = s[1] + o[1]),
                            (e[c + 2] = s[2] + o[2]),
                            (e[c + 3] = s[3] + o[3]),
                            (e[c + 4] = s[3] - o[3]),
                            (e[c + 5] = s[2] - o[2]),
                            (e[c + 6] = s[1] - o[1]),
                            (e[c + 7] = s[0] - o[0]);
                        }
                        for (var f = 0; f < 8; ++f)
                          (i[0] = r * e[16 + f]),
                            (i[1] = a * e[16 + f]),
                            (i[2] = r * e[48 + f]),
                            (i[3] = a * e[48 + f]),
                            (o[0] =
                              t * e[8 + f] +
                              n * e[24 + f] +
                              0.2777854612564676 * e[40 + f] +
                              0.09754573032714427 * e[56 + f]),
                            (o[1] =
                              n * e[8 + f] -
                              0.09754573032714427 * e[24 + f] -
                              t * e[40 + f] -
                              0.2777854612564676 * e[56 + f]),
                            (o[2] =
                              0.2777854612564676 * e[8 + f] -
                              t * e[24 + f] +
                              0.09754573032714427 * e[40 + f] +
                              n * e[56 + f]),
                            (o[3] =
                              0.09754573032714427 * e[8 + f] -
                              0.2777854612564676 * e[24 + f] +
                              n * e[40 + f] -
                              t * e[56 + f]),
                            (l[0] = 0.35355362513961314 * (e[f] + e[32 + f])),
                            (l[3] = 0.35355362513961314 * (e[f] - e[32 + f])),
                            (l[1] = i[0] + i[3]),
                            (l[2] = i[1] - i[2]),
                            (s[0] = l[0] + l[1]),
                            (s[1] = l[3] + l[2]),
                            (s[2] = l[3] - l[2]),
                            (s[3] = l[0] - l[1]),
                            (e[0 + f] = s[0] + o[0]),
                            (e[8 + f] = s[1] + o[1]),
                            (e[16 + f] = s[2] + o[2]),
                            (e[24 + f] = s[3] + o[3]),
                            (e[32 + f] = s[3] - o[3]),
                            (e[40 + f] = s[2] - o[2]),
                            (e[48 + f] = s[1] - o[1]),
                            (e[56 + f] = s[0] - o[0]);
                      })(m[e]);
                  !(function (e) {
                    for (var t = 0; t < 64; ++t) {
                      var r = e[0][t],
                        n = e[1][t],
                        a = e[2][t];
                      (e[0][t] = r + 1.5747 * a),
                        (e[1][t] = r - 0.1873 * n - 0.4682 * a),
                        (e[2][t] = r + 1.8556 * n);
                    }
                  })(m);
                  for (let t = 0; t < 3; ++t)
                    !(function (e, t, r) {
                      for (var n, a = 0; a < 64; ++a)
                        t[r + a] = i.DataUtils.toHalfFloat(
                          (n = e[a]) <= 1
                            ? Math.sign(n) * Math.pow(Math.abs(n), 2.2)
                            : Math.sign(n) *
                                Math.pow(9.025013291561939, Math.abs(n) - 1)
                        );
                    })(m[t], w[t], 64 * e);
                }
                let o = 0;
                for (let n = 0; n < 3; ++n) {
                  let a = r[e.idx[n]].type;
                  for (let e = 8 * t; e < 8 * t + E; ++e) {
                    o = b[n][e];
                    for (let t = 0; t < c; ++t) {
                      let r = 64 * t + (7 & e) * 8;
                      l.setUint16(o + 0 * a, w[n][r + 0], !0),
                        l.setUint16(o + 2 * a, w[n][r + 1], !0),
                        l.setUint16(o + 4 * a, w[n][r + 2], !0),
                        l.setUint16(o + 6 * a, w[n][r + 3], !0),
                        l.setUint16(o + 8 * a, w[n][r + 4], !0),
                        l.setUint16(o + 10 * a, w[n][r + 5], !0),
                        l.setUint16(o + 12 * a, w[n][r + 6], !0),
                        l.setUint16(o + 14 * a, w[n][r + 7], !0),
                        (o += 16 * a);
                    }
                  }
                  if (c != f)
                    for (let e = 8 * t; e < 8 * t + E; ++e) {
                      let t = b[n][e] + 8 * c * 2 * a,
                        r = 64 * c + (7 & e) * 8;
                      for (let e = 0; e < _; ++e)
                        l.setUint16(t + 2 * e * a, w[n][r + e], !0);
                    }
                }
              }
              for (
                var T = new Uint16Array(s), l = new DataView(o.buffer), S = 0;
                S < 3;
                ++S
              ) {
                r[e.idx[S]].decoded = !0;
                var R = r[e.idx[S]].type;
                if (2 == r[S].type)
                  for (var A = 0; A < u; ++A) {
                    let e = b[S][A];
                    for (var k = 0; k < s; ++k)
                      T[k] = l.getUint16(e + 2 * k * R, !0);
                    for (var k = 0; k < s; ++k)
                      l.setFloat32(e + 2 * k * R, C(T[k]), !0);
                  }
              }
            })(M, P, g, S, I, n);
            for (var m = 0; m < g.length; ++m) {
              var w = g[m];
              if (!w.decoded) {
                if (2 === w.compression)
                  for (var W = 0, j = 0, O = 0; O < e.lines; ++O) {
                    for (var z = P[m][W], H = 0; H < w.width; ++H) {
                      for (var G = 0; G < 2 * w.type; ++G)
                        n[z++] = F[j + G * w.width * w.height];
                      j++;
                    }
                    W++;
                  }
                else throw "EXRLoader.parse: unsupported channel compression";
              }
            }
            return new DataView(n.buffer);
          }
          function T(e, t) {
            for (var r = new Uint8Array(e), n = 0; 0 != r[t.value + n]; )
              n += 1;
            var a = new TextDecoder().decode(r.slice(t.value, t.value + n));
            return (t.value = t.value + n + 1), a;
          }
          function S(e, t) {
            var r = e.getInt32(t.value, !0);
            return (t.value = t.value + 4), r;
          }
          function R(e, t) {
            var r = e.getUint32(t.value, !0);
            return (t.value = t.value + 4), r;
          }
          function A(e, t) {
            var r = e[t.value];
            return (t.value = t.value + 1), r;
          }
          function k(e, t) {
            var r = e.getUint8(t.value);
            return (t.value = t.value + 1), r;
          }
          let U = function (e, t) {
            let r;
            return (
              "getBigInt64" in DataView.prototype
                ? (r = Number(e.getBigInt64(t.value, !0)))
                : (r =
                    e.getUint32(t.value + 4, !0) +
                    Number(e.getUint32(t.value, !0) << 32)),
              (t.value += 8),
              r
            );
          };
          function I(e, t) {
            var r = e.getFloat32(t.value, !0);
            return (t.value += 4), r;
          }
          function F(e, t) {
            return i.DataUtils.toHalfFloat(I(e, t));
          }
          function C(e) {
            var t = (31744 & e) >> 10,
              r = 1023 & e;
            return (
              (e >> 15 ? -1 : 1) *
              (t
                ? 31 === t
                  ? r
                    ? NaN
                    : 1 / 0
                  : Math.pow(2, t - 15) * (1 + r / 1024)
                : (r / 1024) * 6103515625e-14)
            );
          }
          function L(e, t) {
            var r = e.getUint16(t.value, !0);
            return (t.value += 2), r;
          }
          function D(e, t) {
            return C(L(e, t));
          }
          let P = new DataView(e),
            O = new Uint8Array(e),
            B = { value: 0 },
            N = (function (e, t, r) {
              let n = {};
              if (20000630 != e.getUint32(0, !0))
                throw "THREE.EXRLoader: provided file doesn't appear to be in OpenEXR format.";
              n.version = e.getUint8(4);
              let a = e.getUint8(5);
              (n.spec = {
                singleTile: !!(2 & a),
                longName: !!(4 & a),
                deepFormat: !!(8 & a),
                multiPart: !!(16 & a),
              }),
                (r.value = 8);
              for (var i = !0; i; ) {
                var o = T(t, r);
                if (0 == o) i = !1;
                else {
                  var l = T(t, r),
                    s = R(e, r),
                    u = (function (e, t, r, n, a) {
                      var i, o, l, s, u;
                      if (
                        "string" === n ||
                        "stringvector" === n ||
                        "iccProfile" === n
                      )
                        return (
                          (i = new TextDecoder().decode(
                            new Uint8Array(t).slice(r.value, r.value + a)
                          )),
                          (r.value = r.value + a),
                          i
                        );
                      if ("chlist" === n)
                        return (function (e, t, r, n) {
                          for (var a = r.value, i = []; r.value < a + n - 1; ) {
                            var o = T(t, r),
                              l = S(e, r),
                              s = k(e, r);
                            r.value += 3;
                            var u = S(e, r),
                              c = S(e, r);
                            i.push({
                              name: o,
                              pixelType: l,
                              pLinear: s,
                              xSampling: u,
                              ySampling: c,
                            });
                          }
                          return (r.value += 1), i;
                        })(e, t, r, a);
                      if ("chromaticities" === n)
                        return (
                          (o = I(e, r)),
                          (l = I(e, r)),
                          (s = I(e, r)),
                          (u = I(e, r)),
                          {
                            redX: o,
                            redY: l,
                            greenX: s,
                            greenY: u,
                            blueX: I(e, r),
                            blueY: I(e, r),
                            whiteX: I(e, r),
                            whiteY: I(e, r),
                          }
                        );
                      if ("compression" === n)
                        return [
                          "NO_COMPRESSION",
                          "RLE_COMPRESSION",
                          "ZIPS_COMPRESSION",
                          "ZIP_COMPRESSION",
                          "PIZ_COMPRESSION",
                          "PXR24_COMPRESSION",
                          "B44_COMPRESSION",
                          "B44A_COMPRESSION",
                          "DWAA_COMPRESSION",
                          "DWAB_COMPRESSION",
                        ][k(e, r)];
                      if ("box2i" === n)
                        return {
                          xMin: R(e, r),
                          yMin: R(e, r),
                          xMax: R(e, r),
                          yMax: R(e, r),
                        };
                      if ("lineOrder" === n) return ["INCREASING_Y"][k(e, r)];
                      if ("float" === n) return I(e, r);
                      else if ("v2f" === n) return [I(e, r), I(e, r)];
                      else if ("v3f" === n) return [I(e, r), I(e, r), I(e, r)];
                      else if ("int" === n) return S(e, r);
                      else if ("rational" === n) return [S(e, r), R(e, r)];
                      else if ("timecode" === n) return [R(e, r), R(e, r)];
                      else
                        return "preview" === n
                          ? ((r.value += a), "skipped")
                          : void (r.value += a);
                    })(e, t, r, l, s);
                  void 0 === u
                    ? console.warn(
                        `EXRLoader.parse: skipped unknown header attribute type '${l}'.`
                      )
                    : (n[o] = u);
                }
              }
              if ((-5 & a) != 0)
                throw (
                  (console.error("EXRHeader:", n),
                  "THREE.EXRLoader: provided file is currently unsupported.")
                );
              return n;
            })(P, e, B),
            W = (function (e, t, r, n, a) {
              let o = {
                size: 0,
                viewer: t,
                array: r,
                offset: n,
                width: e.dataWindow.xMax - e.dataWindow.xMin + 1,
                height: e.dataWindow.yMax - e.dataWindow.yMin + 1,
                channels: e.channels.length,
                bytesPerLine: null,
                lines: null,
                inputSize: null,
                type: e.channels[0].pixelType,
                uncompress: null,
                getter: null,
                format: null,
                [s ? "colorSpace" : "encoding"]: null,
              };
              switch (e.compression) {
                case "NO_COMPRESSION":
                  (o.lines = 1), (o.uncompress = w);
                  break;
                case "RLE_COMPRESSION":
                  (o.lines = 1), (o.uncompress = b);
                  break;
                case "ZIPS_COMPRESSION":
                  (o.lines = 1), (o.uncompress = x);
                  break;
                case "ZIP_COMPRESSION":
                  (o.lines = 16), (o.uncompress = x);
                  break;
                case "PIZ_COMPRESSION":
                  (o.lines = 32), (o.uncompress = M);
                  break;
                case "PXR24_COMPRESSION":
                  (o.lines = 16), (o.uncompress = E);
                  break;
                case "DWAA_COMPRESSION":
                  (o.lines = 32), (o.uncompress = _);
                  break;
                case "DWAB_COMPRESSION":
                  (o.lines = 256), (o.uncompress = _);
                  break;
                default:
                  throw "EXRLoader.parse: " + e.compression + " is unsupported";
              }
              if (((o.scanlineBlockSize = o.lines), 1 == o.type))
                switch (a) {
                  case i.FloatType:
                    (o.getter = D), (o.inputSize = 2);
                    break;
                  case i.HalfFloatType:
                    (o.getter = L), (o.inputSize = 2);
                }
              else if (2 == o.type)
                switch (a) {
                  case i.FloatType:
                    (o.getter = I), (o.inputSize = 4);
                    break;
                  case i.HalfFloatType:
                    (o.getter = F), (o.inputSize = 4);
                }
              else
                throw (
                  "EXRLoader.parse: unsupported pixelType " +
                  o.type +
                  " for " +
                  e.compression +
                  "."
                );
              o.blockCount = (e.dataWindow.yMax + 1) / o.scanlineBlockSize;
              for (var l = 0; l < o.blockCount; l++) U(t, n);
              o.outputChannels = 3 == o.channels ? 4 : o.channels;
              let u = o.width * o.height * o.outputChannels;
              switch (a) {
                case i.FloatType:
                  (o.byteArray = new Float32Array(u)),
                    o.channels < o.outputChannels && o.byteArray.fill(1, 0, u);
                  break;
                case i.HalfFloatType:
                  (o.byteArray = new Uint16Array(u)),
                    o.channels < o.outputChannels &&
                      o.byteArray.fill(15360, 0, u);
                  break;
                default:
                  console.error("THREE.EXRLoader: unsupported type: ", a);
              }
              return (
                (o.bytesPerLine = o.width * o.inputSize * o.channels),
                4 == o.outputChannels
                  ? (o.format = i.RGBAFormat)
                  : (o.format = i.RedFormat),
                s ? (o.colorSpace = "srgb-linear") : (o.encoding = 3e3),
                o
              );
            })(N, P, O, B, this.type),
            j = { value: 0 },
            z = { R: 0, G: 1, B: 2, A: 3, Y: 0 };
          for (let e = 0; e < W.height / W.scanlineBlockSize; e++) {
            let t = R(P, B);
            (W.size = R(P, B)),
              (W.lines =
                t + W.scanlineBlockSize > W.height
                  ? W.height - t
                  : W.scanlineBlockSize);
            let r = W.size < W.lines * W.bytesPerLine ? W.uncompress(W) : w(W);
            B.value += W.size;
            for (let t = 0; t < W.scanlineBlockSize; t++) {
              let n = t + e * W.scanlineBlockSize;
              if (n >= W.height) break;
              for (let e = 0; e < W.channels; e++) {
                let a = z[N.channels[e].name];
                for (let i = 0; i < W.width; i++) {
                  j.value =
                    (W.channels * W.width * t + e * W.width + i) * W.inputSize;
                  let o =
                    (W.height - 1 - n) * (W.width * W.outputChannels) +
                    i * W.outputChannels +
                    a;
                  W.byteArray[o] = W.getter(r, j);
                }
              }
            }
          }
          return {
            header: N,
            width: W.width,
            height: W.height,
            data: W.byteArray,
            format: W.format,
            [s ? "colorSpace" : "encoding"]: W[s ? "colorSpace" : "encoding"],
            type: this.type,
          };
        }
        setDataType(e) {
          return (this.type = e), this;
        }
        load(e, t, r, n) {
          return super.load(
            e,
            function (e, r) {
              s ? (e.colorSpace = r.colorSpace) : (e.encoding = r.encoding),
                (e.minFilter = i.LinearFilter),
                (e.magFilter = i.LinearFilter),
                (e.generateMipmaps = !1),
                (e.flipY = !1),
                t && t(e, r);
            },
            r,
            n
          );
        }
      }
      let c = (e, t, r) => {
          let n;
          switch (e) {
            case i.UnsignedByteType:
              n = new Uint8ClampedArray(t * r * 4);
              break;
            case i.HalfFloatType:
              n = new Uint16Array(t * r * 4);
              break;
            case i.UnsignedIntType:
              n = new Uint32Array(t * r * 4);
              break;
            case i.ByteType:
              n = new Int8Array(t * r * 4);
              break;
            case i.ShortType:
              n = new Int16Array(t * r * 4);
              break;
            case i.IntType:
              n = new Int32Array(t * r * 4);
              break;
            case i.FloatType:
              n = new Float32Array(t * r * 4);
              break;
            default:
              throw Error("Unsupported data type");
          }
          return n;
        },
        f = (e, t, r, a) => {
          if (void 0 !== n) return n;
          let o = new i.WebGLRenderTarget(1, 1, a);
          t.setRenderTarget(o);
          let l = new i.Mesh(
            new i.PlaneGeometry(),
            new i.MeshBasicMaterial({ color: 16777215 })
          );
          t.render(l, r), t.setRenderTarget(null);
          let s = c(e, o.width, o.height);
          return (
            t.readRenderTargetPixels(o, 0, 0, o.width, o.height, s),
            o.dispose(),
            l.geometry.dispose(),
            l.material.dispose(),
            (n = 0 !== s[0])
          );
        };
      class d {
        constructor(e) {
          var t, r, n, a, o, l, s, u, c, h, p, v, g, m, y, w;
          (this._rendererIsDisposable = !1),
            (this._supportsReadPixels = !0),
            (this.render = () => {
              this._renderer.setRenderTarget(this._renderTarget);
              try {
                this._renderer.render(this._scene, this._camera);
              } catch (e) {
                throw (this._renderer.setRenderTarget(null), e);
              }
              this._renderer.setRenderTarget(null);
            }),
            (this._width = e.width),
            (this._height = e.height),
            (this._type = e.type),
            (this._colorSpace = e.colorSpace);
          let b = {
            format: i.RGBAFormat,
            depthBuffer: !1,
            stencilBuffer: !1,
            type: this._type,
            colorSpace: this._colorSpace,
            anisotropy:
              (null === (t = e.renderTargetOptions) || void 0 === t
                ? void 0
                : t.anisotropy) !== void 0
                ? null === (r = e.renderTargetOptions) || void 0 === r
                  ? void 0
                  : r.anisotropy
                : 1,
            generateMipmaps:
              (null === (n = e.renderTargetOptions) || void 0 === n
                ? void 0
                : n.generateMipmaps) !== void 0 &&
              (null === (a = e.renderTargetOptions) || void 0 === a
                ? void 0
                : a.generateMipmaps),
            magFilter:
              (null === (o = e.renderTargetOptions) || void 0 === o
                ? void 0
                : o.magFilter) !== void 0
                ? null === (l = e.renderTargetOptions) || void 0 === l
                  ? void 0
                  : l.magFilter
                : i.LinearFilter,
            minFilter:
              (null === (s = e.renderTargetOptions) || void 0 === s
                ? void 0
                : s.minFilter) !== void 0
                ? null === (u = e.renderTargetOptions) || void 0 === u
                  ? void 0
                  : u.minFilter
                : i.LinearFilter,
            samples:
              (null === (c = e.renderTargetOptions) || void 0 === c
                ? void 0
                : c.samples) !== void 0
                ? null === (h = e.renderTargetOptions) || void 0 === h
                  ? void 0
                  : h.samples
                : void 0,
            wrapS:
              (null === (p = e.renderTargetOptions) || void 0 === p
                ? void 0
                : p.wrapS) !== void 0
                ? null === (v = e.renderTargetOptions) || void 0 === v
                  ? void 0
                  : v.wrapS
                : i.ClampToEdgeWrapping,
            wrapT:
              (null === (g = e.renderTargetOptions) || void 0 === g
                ? void 0
                : g.wrapT) !== void 0
                ? null === (m = e.renderTargetOptions) || void 0 === m
                  ? void 0
                  : m.wrapT
                : i.ClampToEdgeWrapping,
          };
          if (
            ((this._material = e.material),
            e.renderer
              ? (this._renderer = e.renderer)
              : ((this._renderer = d.instantiateRenderer()),
                (this._rendererIsDisposable = !0)),
            (this._scene = new i.Scene()),
            (this._camera = new i.OrthographicCamera()),
            this._camera.position.set(0, 0, 10),
            (this._camera.left = -0.5),
            (this._camera.right = 0.5),
            (this._camera.top = 0.5),
            (this._camera.bottom = -0.5),
            this._camera.updateProjectionMatrix(),
            !f(this._type, this._renderer, this._camera, b))
          ) {
            let e;
            this._type === i.HalfFloatType &&
              (e = this._renderer.extensions.has("EXT_color_buffer_float")
                ? i.FloatType
                : void 0),
              void 0 !== e
                ? (console.warn(
                    `This browser does not support reading pixels from ${this._type} RenderTargets, switching to ${i.FloatType}`
                  ),
                  (this._type = e))
                : ((this._supportsReadPixels = !1),
                  console.warn(
                    "This browser dos not support toArray or toDataTexture, calls to those methods will result in an error thrown"
                  ));
          }
          (this._quad = new i.Mesh(new i.PlaneGeometry(), this._material)),
            this._quad.geometry.computeBoundingBox(),
            this._scene.add(this._quad),
            (this._renderTarget = new i.WebGLRenderTarget(
              this.width,
              this.height,
              b
            )),
            (this._renderTarget.texture.mapping =
              (null === (y = e.renderTargetOptions) || void 0 === y
                ? void 0
                : y.mapping) !== void 0
                ? null === (w = e.renderTargetOptions) || void 0 === w
                  ? void 0
                  : w.mapping
                : i.UVMapping);
        }
        static instantiateRenderer() {
          let e = new i.WebGLRenderer();
          return e.setSize(128, 128), e;
        }
        toArray() {
          if (!this._supportsReadPixels)
            throw Error("Can't read pixels in this browser");
          let e = c(this._type, this._width, this._height);
          return (
            this._renderer.readRenderTargetPixels(
              this._renderTarget,
              0,
              0,
              this._width,
              this._height,
              e
            ),
            e
          );
        }
        toDataTexture(e) {
          let t = new i.DataTexture(
            this.toArray(),
            this.width,
            this.height,
            i.RGBAFormat,
            this._type,
            (null == e ? void 0 : e.mapping) || i.UVMapping,
            (null == e ? void 0 : e.wrapS) || i.ClampToEdgeWrapping,
            (null == e ? void 0 : e.wrapT) || i.ClampToEdgeWrapping,
            (null == e ? void 0 : e.magFilter) || i.LinearFilter,
            (null == e ? void 0 : e.minFilter) || i.LinearFilter,
            (null == e ? void 0 : e.anisotropy) || 1,
            i.LinearSRGBColorSpace
          );
          return (
            (t.generateMipmaps =
              (null == e ? void 0 : e.generateMipmaps) !== void 0 &&
              (null == e ? void 0 : e.generateMipmaps)),
            t
          );
        }
        disposeOnDemandRenderer() {
          this._renderer.setRenderTarget(null),
            this._rendererIsDisposable &&
              (this._renderer.dispose(), this._renderer.forceContextLoss());
        }
        dispose(e) {
          this.disposeOnDemandRenderer(),
            e && this.renderTarget.dispose(),
            this.material instanceof i.ShaderMaterial &&
              Object.values(this.material.uniforms).forEach((e) => {
                e.value instanceof i.Texture && e.value.dispose();
              }),
            Object.values(this.material).forEach((e) => {
              e instanceof i.Texture && e.dispose();
            }),
            this.material.dispose(),
            this._quad.geometry.dispose();
        }
        get width() {
          return this._width;
        }
        set width(e) {
          (this._width = e),
            this._renderTarget.setSize(this._width, this._height);
        }
        get height() {
          return this._height;
        }
        set height(e) {
          (this._height = e),
            this._renderTarget.setSize(this._width, this._height);
        }
        get renderer() {
          return this._renderer;
        }
        get renderTarget() {
          return this._renderTarget;
        }
        set renderTarget(e) {
          (this._renderTarget = e),
            (this._width = e.width),
            (this._height = e.height);
        }
        get material() {
          return this._material;
        }
        get type() {
          return this._type;
        }
        get colorSpace() {
          return this._colorSpace;
        }
      }
      let h = `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,
        p = `
// min half float value
#define HALF_FLOAT_MIN vec3( -65504, -65504, -65504 )
// max half float value
#define HALF_FLOAT_MAX vec3( 65504, 65504, 65504 )

uniform sampler2D sdr;
uniform sampler2D gainMap;
uniform vec3 gamma;
uniform vec3 offsetHdr;
uniform vec3 offsetSdr;
uniform vec3 gainMapMin;
uniform vec3 gainMapMax;
uniform float weightFactor;

varying vec2 vUv;

void main() {
  vec3 rgb = texture2D( sdr, vUv ).rgb;
  vec3 recovery = texture2D( gainMap, vUv ).rgb;
  vec3 logRecovery = pow( recovery, gamma );
  vec3 logBoost = gainMapMin * ( 1.0 - logRecovery ) + gainMapMax * logRecovery;
  vec3 hdrColor = (rgb + offsetSdr) * exp2( logBoost * weightFactor ) - offsetHdr;
  vec3 clampedHdrColor = max( HALF_FLOAT_MIN, min( HALF_FLOAT_MAX, hdrColor ));
  gl_FragColor = vec4( clampedHdrColor , 1.0 );
}
`;
      class v extends i.ShaderMaterial {
        constructor({
          gamma: e,
          offsetHdr: t,
          offsetSdr: r,
          gainMapMin: n,
          gainMapMax: a,
          maxDisplayBoost: o,
          hdrCapacityMin: l,
          hdrCapacityMax: s,
          sdr: u,
          gainMap: c,
        }) {
          super({
            name: "GainMapDecoderMaterial",
            vertexShader: h,
            fragmentShader: p,
            uniforms: {
              sdr: { value: u },
              gainMap: { value: c },
              gamma: { value: new i.Vector3(1 / e[0], 1 / e[1], 1 / e[2]) },
              offsetHdr: { value: new i.Vector3().fromArray(t) },
              offsetSdr: { value: new i.Vector3().fromArray(r) },
              gainMapMin: { value: new i.Vector3().fromArray(n) },
              gainMapMax: { value: new i.Vector3().fromArray(a) },
              weightFactor: { value: (Math.log2(o) - l) / (s - l) },
            },
            blending: i.NoBlending,
            depthTest: !1,
            depthWrite: !1,
          }),
            (this._maxDisplayBoost = o),
            (this._hdrCapacityMin = l),
            (this._hdrCapacityMax = s),
            (this.needsUpdate = !0),
            (this.uniformsNeedUpdate = !0);
        }
        get sdr() {
          return this.uniforms.sdr.value;
        }
        set sdr(e) {
          this.uniforms.sdr.value = e;
        }
        get gainMap() {
          return this.uniforms.gainMap.value;
        }
        set gainMap(e) {
          this.uniforms.gainMap.value = e;
        }
        get offsetHdr() {
          return this.uniforms.offsetHdr.value.toArray();
        }
        set offsetHdr(e) {
          this.uniforms.offsetHdr.value.fromArray(e);
        }
        get offsetSdr() {
          return this.uniforms.offsetSdr.value.toArray();
        }
        set offsetSdr(e) {
          this.uniforms.offsetSdr.value.fromArray(e);
        }
        get gainMapMin() {
          return this.uniforms.gainMapMin.value.toArray();
        }
        set gainMapMin(e) {
          this.uniforms.gainMapMin.value.fromArray(e);
        }
        get gainMapMax() {
          return this.uniforms.gainMapMax.value.toArray();
        }
        set gainMapMax(e) {
          this.uniforms.gainMapMax.value.fromArray(e);
        }
        get gamma() {
          let e = this.uniforms.gamma.value;
          return [1 / e.x, 1 / e.y, 1 / e.z];
        }
        set gamma(e) {
          let t = this.uniforms.gamma.value;
          (t.x = 1 / e[0]), (t.y = 1 / e[1]), (t.z = 1 / e[2]);
        }
        get hdrCapacityMin() {
          return this._hdrCapacityMin;
        }
        set hdrCapacityMin(e) {
          (this._hdrCapacityMin = e), this.calculateWeight();
        }
        get hdrCapacityMax() {
          return this._hdrCapacityMax;
        }
        set hdrCapacityMax(e) {
          (this._hdrCapacityMax = e), this.calculateWeight();
        }
        get maxDisplayBoost() {
          return this._maxDisplayBoost;
        }
        set maxDisplayBoost(e) {
          (this._maxDisplayBoost = Math.max(1, Math.min(65504, e))),
            this.calculateWeight();
        }
        calculateWeight() {
          let e =
            (Math.log2(this._maxDisplayBoost) - this._hdrCapacityMin) /
            (this._hdrCapacityMax - this._hdrCapacityMin);
          this.uniforms.weightFactor.value = Math.max(0, Math.min(1, e));
        }
      }
      class g extends Error {}
      class m extends Error {}
      let y = (e, t, r) => {
          var n;
          let a;
          let i =
            null === (n = e.attributes.getNamedItem(t)) || void 0 === n
              ? void 0
              : n.nodeValue;
          if (i) a = i;
          else {
            let n = e.getElementsByTagName(t)[0];
            if (n) {
              let e = n.getElementsByTagName("rdf:li");
              if (3 === e.length) a = Array.from(e).map((e) => e.innerHTML);
              else
                throw Error(
                  `Gainmap metadata contains an array of items for ${t} but its length is not 3`
                );
            } else {
              if (r) return r;
              throw Error(`Can't find ${t} in gainmap metadata`);
            }
          }
          return a;
        },
        w = (e) => {
          var t, r;
          let n;
          "undefined" != typeof TextDecoder
            ? (n = new TextDecoder().decode(e))
            : (n = e.toString());
          let a = n.indexOf("<x:xmpmeta"),
            i = new DOMParser();
          for (; -1 !== a; ) {
            let e = n.indexOf("x:xmpmeta>", a);
            n.slice(a, e + 10);
            let o = n.slice(a, e + 10);
            try {
              let e = i
                  .parseFromString(o, "text/xml")
                  .getElementsByTagName("rdf:Description")[0],
                n = y(e, "hdrgm:GainMapMin", "0"),
                a = y(e, "hdrgm:GainMapMax"),
                l = y(e, "hdrgm:Gamma", "1"),
                s = y(e, "hdrgm:OffsetSDR", "0.015625"),
                u = y(e, "hdrgm:OffsetHDR", "0.015625"),
                c =
                  null ===
                    (t = e.attributes.getNamedItem("hdrgm:HDRCapacityMin")) ||
                  void 0 === t
                    ? void 0
                    : t.nodeValue;
              c || (c = "0");
              let f =
                null ===
                  (r = e.attributes.getNamedItem("hdrgm:HDRCapacityMax")) ||
                void 0 === r
                  ? void 0
                  : r.nodeValue;
              if (!f) throw Error("Incomplete gainmap metadata");
              return {
                gainMapMin: Array.isArray(n)
                  ? n.map((e) => parseFloat(e))
                  : [parseFloat(n), parseFloat(n), parseFloat(n)],
                gainMapMax: Array.isArray(a)
                  ? a.map((e) => parseFloat(e))
                  : [parseFloat(a), parseFloat(a), parseFloat(a)],
                gamma: Array.isArray(l)
                  ? l.map((e) => parseFloat(e))
                  : [parseFloat(l), parseFloat(l), parseFloat(l)],
                offsetSdr: Array.isArray(s)
                  ? s.map((e) => parseFloat(e))
                  : [parseFloat(s), parseFloat(s), parseFloat(s)],
                offsetHdr: Array.isArray(u)
                  ? u.map((e) => parseFloat(e))
                  : [parseFloat(u), parseFloat(u), parseFloat(u)],
                hdrCapacityMin: parseFloat(c),
                hdrCapacityMax: parseFloat(f),
              };
            } catch (e) {}
            a = n.indexOf("<x:xmpmeta", e);
          }
        };
      class b {
        constructor(e) {
          this.options = {
            debug: !!e && void 0 !== e.debug && e.debug,
            extractFII: !e || void 0 === e.extractFII || e.extractFII,
            extractNonFII: !e || void 0 === e.extractNonFII || e.extractNonFII,
          };
        }
        extract(e) {
          return new Promise((t, r) => {
            let n;
            let a = this.options.debug,
              i = new DataView(e.buffer);
            if (65496 !== i.getUint16(0)) {
              r(Error("Not a valid jpeg"));
              return;
            }
            let o = i.byteLength,
              l = 2,
              s = 0;
            for (; l < o; ) {
              if (++s > 250) {
                r(Error(`Found no marker after ${s} loops 😵`));
                return;
              }
              if (255 !== i.getUint8(l)) {
                r(
                  Error(
                    `Not a valid marker at offset 0x${l.toString(
                      16
                    )}, found: 0x${i.getUint8(l).toString(16)}`
                  )
                );
                return;
              }
              if (
                ((n = i.getUint8(l + 1)),
                a && console.log(`Marker: ${n.toString(16)}`),
                226 === n)
              ) {
                a && console.log("Found APP2 marker (0xffe2)");
                let e = l + 4;
                if (1297106432 === i.getUint32(e)) {
                  let n;
                  let a = e + 4;
                  if (18761 === i.getUint16(a)) n = !1;
                  else if (19789 === i.getUint16(a)) n = !0;
                  else {
                    r(Error("No valid endianness marker found in TIFF header"));
                    return;
                  }
                  if (42 !== i.getUint16(a + 2, !n)) {
                    r(Error("Not valid TIFF data! (no 0x002A marker)"));
                    return;
                  }
                  let o = i.getUint32(a + 4, !n);
                  if (o < 8) {
                    r(Error("Not valid TIFF data! (First offset less than 8)"));
                    return;
                  }
                  let l = a + o,
                    s = i.getUint16(l, !n),
                    u = l + 2,
                    c = 0;
                  for (let e = u; e < u + 12 * s; e += 12)
                    45057 === i.getUint16(e, !n) &&
                      (c = i.getUint32(e + 8, !n));
                  let f = l + 2 + 12 * s + 4,
                    d = [];
                  for (let e = f; e < f + 16 * c; e += 16) {
                    let t = {
                      MPType: i.getUint32(e, !n),
                      size: i.getUint32(e + 4, !n),
                      dataOffset: i.getUint32(e + 8, !n),
                      dependantImages: i.getUint32(e + 12, !n),
                      start: -1,
                      end: -1,
                      isFII: !1,
                    };
                    t.dataOffset
                      ? ((t.start = a + t.dataOffset), (t.isFII = !1))
                      : ((t.start = 0), (t.isFII = !0)),
                      (t.end = t.start + t.size),
                      d.push(t);
                  }
                  if (this.options.extractNonFII && d.length) {
                    let e = new Blob([i]),
                      r = [];
                    for (let t of d) {
                      if (t.isFII && !this.options.extractFII) continue;
                      let n = e.slice(t.start, t.end + 1, "image/jpeg");
                      r.push(n);
                    }
                    t(r);
                  }
                }
              }
              l += 2 + i.getUint16(l + 2);
            }
          });
        }
      }
      let x = async (e) => {
          let t = w(e);
          if (!t) throw new m("Gain map XMP metadata not found");
          let r = new b({ extractFII: !0, extractNonFII: !0 }),
            n = await r.extract(e);
          if (2 !== n.length) throw new g("Gain map recovery image not found");
          return {
            sdr: new Uint8Array(await n[0].arrayBuffer()),
            gainMap: new Uint8Array(await n[1].arrayBuffer()),
            metadata: t,
          };
        },
        M = (e) =>
          new Promise((t, r) => {
            let n = document.createElement("img");
            (n.onload = () => {
              t(n);
            }),
              (n.onerror = (e) => {
                r(e);
              }),
              (n.src = URL.createObjectURL(e));
          });
      class E extends i.Loader {
        constructor(e, t) {
          super(t),
            e && (this._renderer = e),
            (this._internalLoadingManager = new i.LoadingManager());
        }
        setRenderer(e) {
          return (this._renderer = e), this;
        }
        setRenderTargetOptions(e) {
          return (this._renderTargetOptions = e), this;
        }
        prepareQuadRenderer() {
          this._renderer ||
            console.warn(
              "WARNING: An existing WebGL Renderer was not passed to this Loader constructor or in setRenderer, the result of this Loader will need to be converted to a Data Texture with toDataTexture() before you can use it in your renderer."
            );
          let e = new v({
            gainMapMax: [1, 1, 1],
            gainMapMin: [0, 0, 0],
            gamma: [1, 1, 1],
            offsetHdr: [1, 1, 1],
            offsetSdr: [1, 1, 1],
            hdrCapacityMax: 1,
            hdrCapacityMin: 0,
            maxDisplayBoost: 1,
            gainMap: new i.Texture(),
            sdr: new i.Texture(),
          });
          return new d({
            width: 16,
            height: 16,
            type: i.HalfFloatType,
            colorSpace: i.LinearSRGBColorSpace,
            material: e,
            renderer: this._renderer,
            renderTargetOptions: this._renderTargetOptions,
          });
        }
        async render(e, t, r, n) {
          let a, o;
          let l = n ? new Blob([n], { type: "image/jpeg" }) : void 0,
            s = new Blob([r], { type: "image/jpeg" }),
            u = !1;
          if ("undefined" == typeof createImageBitmap) {
            let e = await Promise.all([
              l ? M(l) : Promise.resolve(void 0),
              M(s),
            ]);
            (o = e[0]), (a = e[1]), (u = !0);
          } else {
            let e = await Promise.all([
              l
                ? createImageBitmap(l, { imageOrientation: "flipY" })
                : Promise.resolve(void 0),
              createImageBitmap(s, { imageOrientation: "flipY" }),
            ]);
            (o = e[0]), (a = e[1]);
          }
          let c = new i.Texture(
            o || new ImageData(2, 2),
            i.UVMapping,
            i.ClampToEdgeWrapping,
            i.ClampToEdgeWrapping,
            i.LinearFilter,
            i.LinearMipMapLinearFilter,
            i.RGBAFormat,
            i.UnsignedByteType,
            1,
            i.LinearSRGBColorSpace
          );
          (c.flipY = u), (c.needsUpdate = !0);
          let f = new i.Texture(
            a,
            i.UVMapping,
            i.ClampToEdgeWrapping,
            i.ClampToEdgeWrapping,
            i.LinearFilter,
            i.LinearMipMapLinearFilter,
            i.RGBAFormat,
            i.UnsignedByteType,
            1,
            i.SRGBColorSpace
          );
          (f.flipY = u),
            (f.needsUpdate = !0),
            (e.width = a.width),
            (e.height = a.height),
            (e.material.gainMap = c),
            (e.material.sdr = f),
            (e.material.gainMapMin = t.gainMapMin),
            (e.material.gainMapMax = t.gainMapMax),
            (e.material.offsetHdr = t.offsetHdr),
            (e.material.offsetSdr = t.offsetSdr),
            (e.material.gamma = t.gamma),
            (e.material.hdrCapacityMin = t.hdrCapacityMin),
            (e.material.hdrCapacityMax = t.hdrCapacityMax),
            (e.material.maxDisplayBoost = Math.pow(2, t.hdrCapacityMax)),
            (e.material.needsUpdate = !0),
            e.render();
        }
      }
      class _ extends E {
        load([e, t, r], n, a, o) {
          let l, s, u;
          let c = this.prepareQuadRenderer(),
            f = async () => {
              if (l && s && u) {
                try {
                  await this.render(c, u, l, s);
                } catch (n) {
                  this.manager.itemError(e),
                    this.manager.itemError(t),
                    this.manager.itemError(r),
                    "function" == typeof o && o(n),
                    c.disposeOnDemandRenderer();
                  return;
                }
                "function" == typeof n && n(c),
                  this.manager.itemEnd(e),
                  this.manager.itemEnd(t),
                  this.manager.itemEnd(r),
                  c.disposeOnDemandRenderer();
              }
            },
            d = !0,
            h = 0,
            p = 0,
            v = !0,
            g = 0,
            m = 0,
            y = !0,
            w = 0,
            b = 0,
            x = () => {
              "function" == typeof a &&
                a(
                  new ProgressEvent("progress", {
                    lengthComputable: d && v && y,
                    loaded: p + m + b,
                    total: h + g + w,
                  })
                );
            };
          this.manager.itemStart(e),
            this.manager.itemStart(t),
            this.manager.itemStart(r);
          let M = new i.FileLoader(this._internalLoadingManager);
          M.setResponseType("arraybuffer"),
            M.setRequestHeader(this.requestHeader),
            M.setPath(this.path),
            M.setWithCredentials(this.withCredentials),
            M.load(
              e,
              async (e) => {
                if ("string" == typeof e) throw Error("Invalid sdr buffer");
                (l = e), await f();
              },
              (e) => {
                (d = e.lengthComputable), (p = e.loaded), (h = e.total), x();
              },
              (t) => {
                this.manager.itemError(e), "function" == typeof o && o(t);
              }
            );
          let E = new i.FileLoader(this._internalLoadingManager);
          E.setResponseType("arraybuffer"),
            E.setRequestHeader(this.requestHeader),
            E.setPath(this.path),
            E.setWithCredentials(this.withCredentials),
            E.load(
              t,
              async (e) => {
                if ("string" == typeof e) throw Error("Invalid gainmap buffer");
                (s = e), await f();
              },
              (e) => {
                (v = e.lengthComputable), (m = e.loaded), (g = e.total), x();
              },
              (e) => {
                this.manager.itemError(t), "function" == typeof o && o(e);
              }
            );
          let _ = new i.FileLoader(this._internalLoadingManager);
          return (
            _.setRequestHeader(this.requestHeader),
            _.setPath(this.path),
            _.setWithCredentials(this.withCredentials),
            _.load(
              r,
              async (e) => {
                if ("string" != typeof e)
                  throw Error("Invalid metadata string");
                (u = JSON.parse(e)), await f();
              },
              (e) => {
                (y = e.lengthComputable), (b = e.loaded), (w = e.total), x();
              },
              (e) => {
                this.manager.itemError(r), "function" == typeof o && o(e);
              }
            ),
            c
          );
        }
      }
      class T extends E {
        load(e, t, r, n) {
          let a = this.prepareQuadRenderer(),
            o = new i.FileLoader(this._internalLoadingManager);
          return (
            o.setResponseType("arraybuffer"),
            o.setRequestHeader(this.requestHeader),
            o.setPath(this.path),
            o.setWithCredentials(this.withCredentials),
            this.manager.itemStart(e),
            o.load(
              e,
              async (r) => {
                let i, o, l;
                if ("string" == typeof r)
                  throw Error(
                    "Invalid buffer, received [string], was expecting [ArrayBuffer]"
                  );
                let s = new Uint8Array(r);
                try {
                  let e = await x(s);
                  (i = e.sdr), (o = e.gainMap), (l = e.metadata);
                } catch (t) {
                  if (t instanceof m || t instanceof g)
                    console.warn(
                      `Failure to reconstruct an HDR image from ${e}: Gain map metadata not found in the file, HDRJPGLoader will render the SDR jpeg`
                    ),
                      (l = {
                        gainMapMin: [0, 0, 0],
                        gainMapMax: [1, 1, 1],
                        gamma: [1, 1, 1],
                        hdrCapacityMin: 0,
                        hdrCapacityMax: 1,
                        offsetHdr: [0, 0, 0],
                        offsetSdr: [0, 0, 0],
                      }),
                      (i = s);
                  else throw t;
                }
                try {
                  await this.render(a, l, i, o);
                } catch (t) {
                  this.manager.itemError(e),
                    "function" == typeof n && n(t),
                    a.disposeOnDemandRenderer();
                  return;
                }
                "function" == typeof t && t(a),
                  this.manager.itemEnd(e),
                  a.disposeOnDemandRenderer();
              },
              r,
              (t) => {
                this.manager.itemError(e), "function" == typeof n && n(t);
              }
            ),
            a
          );
        }
      }
      let S = {
        apartment: "lebombo_1k.hdr",
        city: "potsdamer_platz_1k.hdr",
        dawn: "kiara_1_dawn_1k.hdr",
        forest: "forest_slope_1k.hdr",
        lobby: "st_fagans_interior_1k.hdr",
        night: "dikhololo_night_1k.hdr",
        park: "rooitou_park_1k.hdr",
        studio: "studio_small_03_1k.hdr",
        sunset: "venice_sunset_1k.hdr",
        warehouse: "empty_warehouse_01_1k.hdr",
      };
      var R = r(6078),
        A = r(2265);
      let k =
          "https://raw.githack.com/pmndrs/drei-assets/456060a26bbeb8fdf79326f224b6d99b8bcce736/hdri/",
        U = (e) => Array.isArray(e),
        I = ["/px.png", "/nx.png", "/py.png", "/ny.png", "/pz.png", "/nz.png"];
      function F({
        files: e = I,
        path: t = "",
        preset: r,
        encoding: n,
        extensions: o,
      } = {}) {
        let l = null,
          s = !1;
        r && (D(r), (e = S[r]), (t = k)), (s = U(e));
        let { extension: u, isCubemap: c } = P(e);
        if (!(l = O(u)))
          throw Error("useEnvironment: Unrecognized file extension: " + e);
        let f = (0, a.D)((e) => e.gl);
        (0, A.useLayoutEffect)(() => {
          ("webp" === u || "jpg" === u || "jpeg" === u) &&
            f.domElement.addEventListener(
              "webglcontextlost",
              function () {
                a.H.clear(l, s ? [e] : e);
              },
              { once: !0 }
            );
        }, [e, f.domElement]);
        let d = (0, a.H)(l, s ? [e] : e, (e) => {
            ("webp" === u || "jpg" === u || "jpeg" === u) && e.setRenderer(f),
              null == e.setPath || e.setPath(t),
              o && o(e);
          }),
          h = s ? d[0] : d;
        if ("jpg" === u || "jpeg" === u || "webp" === u) {
          var p;
          h = null == (p = h.renderTarget) ? void 0 : p.texture;
        }
        return (
          (h.mapping = c
            ? i.CubeReflectionMapping
            : i.EquirectangularReflectionMapping),
          "colorSpace" in h
            ? (h.colorSpace = (null != n ? n : c) ? "srgb" : "srgb-linear")
            : (h.encoding = (null != n ? n : c) ? R.kn : R.rn),
          h
        );
      }
      let C = { files: I, path: "", preset: void 0, extensions: void 0 };
      F.preload = (e) => {
        let t = { ...C, ...e },
          { files: r, path: n = "" } = t,
          { preset: i, extensions: o } = t;
        i && (D(i), (r = S[i]), (n = k));
        let { extension: l } = P(r);
        if ("webp" === l || "jpg" === l || "jpeg" === l)
          throw Error("useEnvironment: Preloading gainmaps is not supported");
        let s = O(l);
        if (!s)
          throw Error("useEnvironment: Unrecognized file extension: " + r);
        a.H.preload(s, U(r) ? [r] : r, (e) => {
          null == e.setPath || e.setPath(n), o && o(e);
        });
      };
      let L = { files: I, preset: void 0 };
      function D(e) {
        if (!(e in S))
          throw Error("Preset must be one of: " + Object.keys(S).join(", "));
      }
      function P(e) {
        var t;
        let r = U(e) && 6 === e.length,
          n = U(e) && 3 === e.length && e.some((e) => e.endsWith("json")),
          a = U(e) ? e[0] : e;
        return {
          extension: r
            ? "cube"
            : n
            ? "webp"
            : a.startsWith("data:application/exr")
            ? "exr"
            : a.startsWith("data:application/hdr")
            ? "hdr"
            : a.startsWith("data:image/jpeg")
            ? "jpg"
            : null == (t = a.split(".").pop()) ||
              null == (t = t.split("?")) ||
              null == (t = t.shift())
            ? void 0
            : t.toLowerCase(),
          isCubemap: r,
          isGainmap: n,
        };
      }
      function O(e) {
        return "cube" === e
          ? i.CubeTextureLoader
          : "hdr" === e
          ? o
          : "exr" === e
          ? u
          : "jpg" === e || "jpeg" === e
          ? T
          : "webp" === e
          ? _
          : null;
      }
      F.clear = (e) => {
        let t = { ...L, ...e },
          { files: r } = t,
          { preset: n } = t;
        n && (D(n), (r = S[n]));
        let { extension: i } = P(r),
          o = O(i);
        if (!o)
          throw Error("useEnvironment: Unrecognized file extension: " + r);
        a.H.clear(o, U(r) ? [r] : r);
      };
    },
    6078: function (e, t, r) {
      r.d(t, {
        Jj: function () {
          return n;
        },
        kn: function () {
          return i;
        },
        rn: function () {
          return a;
        },
      });
      let n = (e, t) => {
          "updateRanges" in e ? (e.updateRanges[0] = t) : (e.updateRange = t);
        },
        a = 3e3,
        i = 3001;
    },
    2325: function (e, t, r) {
      let n, a;
      r.d(t, {
        V: function () {
          return w;
        },
      });
      var i = r(2988),
        o = r(2265),
        l = r(4040),
        s = r(7776),
        u = r(8914);
      let c = new s.Vector3(),
        f = new s.Vector3(),
        d = new s.Vector3(),
        h = new s.Vector2();
      function p(e, t, r) {
        let n = c.setFromMatrixPosition(e.matrixWorld);
        n.project(t);
        let a = r.width / 2,
          i = r.height / 2;
        return [n.x * a + a, -(n.y * i) + i];
      }
      let v = (e) => (1e-10 > Math.abs(e) ? 0 : e);
      function g(e, t, r = "") {
        let n = "matrix3d(";
        for (let r = 0; 16 !== r; r++)
          n += v(t[r] * e.elements[r]) + (15 !== r ? "," : ")");
        return r + n;
      }
      let m =
          ((n = [1, -1, 1, 1, 1, -1, 1, 1, 1, -1, 1, 1, 1, -1, 1, 1]),
          (e) => g(e, n)),
        y =
          ((a = (e) => [
            1 / e,
            1 / e,
            1 / e,
            1,
            -1 / e,
            -1 / e,
            -1 / e,
            -1,
            1 / e,
            1 / e,
            1 / e,
            1,
            1,
            1,
            1,
            1,
          ]),
          (e, t) => g(e, a(t), "translate(-50%,-50%)")),
        w = o.forwardRef(
          (
            {
              children: e,
              eps: t = 0.001,
              style: r,
              className: n,
              prepend: a,
              center: g,
              fullscreen: w,
              portal: b,
              distanceFactor: x,
              sprite: M = !1,
              transform: E = !1,
              occlude: _,
              onOcclude: T,
              castShadow: S,
              receiveShadow: R,
              material: A,
              geometry: k,
              zIndexRange: U = [16777271, 0],
              calculatePosition: I = p,
              as: F = "div",
              wrapperClass: C,
              pointerEvents: L = "auto",
              ...D
            },
            P
          ) => {
            let {
                gl: O,
                camera: B,
                scene: N,
                size: W,
                raycaster: j,
                events: z,
                viewport: H,
              } = (0, u.D)(),
              [G] = o.useState(() => document.createElement(F)),
              V = o.useRef(),
              $ = o.useRef(null),
              q = o.useRef(0),
              X = o.useRef([0, 0]),
              Y = o.useRef(null),
              Z = o.useRef(null),
              Q =
                (null == b ? void 0 : b.current) ||
                z.connected ||
                O.domElement.parentNode,
              J = o.useRef(null),
              K = o.useRef(!1),
              ee = o.useMemo(() => {
                var e;
                return (
                  (_ && "blending" !== _) ||
                  (Array.isArray(_) &&
                    _.length &&
                    (e = _[0]) &&
                    "object" == typeof e &&
                    "current" in e)
                );
              }, [_]);
            o.useLayoutEffect(() => {
              let e = O.domElement;
              _ && "blending" === _
                ? ((e.style.zIndex = `${Math.floor(U[0] / 2)}`),
                  (e.style.position = "absolute"),
                  (e.style.pointerEvents = "none"))
                : ((e.style.zIndex = null),
                  (e.style.position = null),
                  (e.style.pointerEvents = null));
            }, [_]),
              o.useLayoutEffect(() => {
                if ($.current) {
                  let e = (V.current = l.createRoot(G));
                  if ((N.updateMatrixWorld(), E))
                    G.style.cssText =
                      "position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";
                  else {
                    let e = I($.current, B, W);
                    G.style.cssText = `position:absolute;top:0;left:0;transform:translate3d(${e[0]}px,${e[1]}px,0);transform-origin:0 0;`;
                  }
                  return (
                    Q && (a ? Q.prepend(G) : Q.appendChild(G)),
                    () => {
                      Q && Q.removeChild(G), e.unmount();
                    }
                  );
                }
              }, [Q, E]),
              o.useLayoutEffect(() => {
                C && (G.className = C);
              }, [C]);
            let et = o.useMemo(
                () =>
                  E
                    ? {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: W.width,
                        height: W.height,
                        transformStyle: "preserve-3d",
                        pointerEvents: "none",
                      }
                    : {
                        position: "absolute",
                        transform: g ? "translate3d(-50%,-50%,0)" : "none",
                        ...(w && {
                          top: -W.height / 2,
                          left: -W.width / 2,
                          width: W.width,
                          height: W.height,
                        }),
                        ...r,
                      },
                [r, g, w, W, E]
              ),
              er = o.useMemo(
                () => ({ position: "absolute", pointerEvents: L }),
                [L]
              );
            o.useLayoutEffect(() => {
              var t, a;
              (K.current = !1),
                E
                  ? null == (t = V.current) ||
                    t.render(
                      o.createElement(
                        "div",
                        { ref: Y, style: et },
                        o.createElement(
                          "div",
                          { ref: Z, style: er },
                          o.createElement("div", {
                            ref: P,
                            className: n,
                            style: r,
                            children: e,
                          })
                        )
                      )
                    )
                  : null == (a = V.current) ||
                    a.render(
                      o.createElement("div", {
                        ref: P,
                        style: et,
                        className: n,
                        children: e,
                      })
                    );
            });
            let en = o.useRef(!0);
            (0, u.F)((e) => {
              if ($.current) {
                B.updateMatrixWorld(), $.current.updateWorldMatrix(!0, !1);
                let e = E ? X.current : I($.current, B, W);
                if (
                  E ||
                  Math.abs(q.current - B.zoom) > t ||
                  Math.abs(X.current[0] - e[0]) > t ||
                  Math.abs(X.current[1] - e[1]) > t
                ) {
                  let t = (function (e, t) {
                      let r = c.setFromMatrixPosition(e.matrixWorld),
                        n = f.setFromMatrixPosition(t.matrixWorld),
                        a = r.sub(n),
                        i = t.getWorldDirection(d);
                      return a.angleTo(i) > Math.PI / 2;
                    })($.current, B),
                    r = !1;
                  ee &&
                    (Array.isArray(_)
                      ? (r = _.map((e) => e.current))
                      : "blending" !== _ && (r = [N]));
                  let n = en.current;
                  if (r) {
                    let e = (function (e, t, r, n) {
                      let a = c.setFromMatrixPosition(e.matrixWorld),
                        i = a.clone();
                      i.project(t), h.set(i.x, i.y), r.setFromCamera(h, t);
                      let o = r.intersectObjects(n, !0);
                      if (o.length) {
                        let e = o[0].distance;
                        return a.distanceTo(r.ray.origin) < e;
                      }
                      return !0;
                    })($.current, B, j, r);
                    en.current = e && !t;
                  } else en.current = !t;
                  n !== en.current &&
                    (T
                      ? T(!en.current)
                      : (G.style.display = en.current ? "block" : "none"));
                  let a = Math.floor(U[0] / 2),
                    i = _ ? (ee ? [U[0], a] : [a - 1, 0]) : U;
                  if (
                    ((G.style.zIndex = `${(function (e, t, r) {
                      if (
                        t instanceof s.PerspectiveCamera ||
                        t instanceof s.OrthographicCamera
                      ) {
                        let n = c.setFromMatrixPosition(e.matrixWorld),
                          a = f.setFromMatrixPosition(t.matrixWorld),
                          i = n.distanceTo(a),
                          o = (r[1] - r[0]) / (t.far - t.near),
                          l = r[1] - o * t.far;
                        return Math.round(o * i + l);
                      }
                    })($.current, B, i)}`),
                    E)
                  ) {
                    let [e, t] = [W.width / 2, W.height / 2],
                      r = B.projectionMatrix.elements[5] * t,
                      {
                        isOrthographicCamera: n,
                        top: a,
                        left: i,
                        bottom: o,
                        right: l,
                      } = B,
                      s = m(B.matrixWorldInverse),
                      u = n
                        ? `scale(${r})translate(${v(-(l + i) / 2)}px,${v(
                            (a + o) / 2
                          )}px)`
                        : `translateZ(${r}px)`,
                      c = $.current.matrixWorld;
                    M &&
                      (((c = B.matrixWorldInverse
                        .clone()
                        .transpose()
                        .copyPosition(c)
                        .scale($.current.scale)).elements[3] =
                        c.elements[7] =
                        c.elements[11] =
                          0),
                      (c.elements[15] = 1)),
                      (G.style.width = W.width + "px"),
                      (G.style.height = W.height + "px"),
                      (G.style.perspective = n ? "" : `${r}px`),
                      Y.current &&
                        Z.current &&
                        ((Y.current.style.transform = `${u}${s}translate(${e}px,${t}px)`),
                        (Z.current.style.transform = y(
                          c,
                          1 / ((x || 10) / 400)
                        )));
                  } else {
                    let t =
                      void 0 === x
                        ? 1
                        : (function (e, t) {
                            if (t instanceof s.OrthographicCamera)
                              return t.zoom;
                            if (!(t instanceof s.PerspectiveCamera)) return 1;
                            {
                              let r = c.setFromMatrixPosition(e.matrixWorld),
                                n = f.setFromMatrixPosition(t.matrixWorld);
                              return (
                                1 /
                                (2 *
                                  Math.tan((t.fov * Math.PI) / 180 / 2) *
                                  r.distanceTo(n))
                              );
                            }
                          })($.current, B) * x;
                    G.style.transform = `translate3d(${e[0]}px,${e[1]}px,0) scale(${t})`;
                  }
                  (X.current = e), (q.current = B.zoom);
                }
              }
              if (!ee && J.current && !K.current) {
                if (E) {
                  if (Y.current) {
                    let e = Y.current.children[0];
                    if (
                      null != e &&
                      e.clientWidth &&
                      null != e &&
                      e.clientHeight
                    ) {
                      let { isOrthographicCamera: t } = B;
                      if (t || k)
                        D.scale &&
                          (Array.isArray(D.scale)
                            ? D.scale instanceof s.Vector3
                              ? J.current.scale.copy(
                                  D.scale.clone().divideScalar(1)
                                )
                              : J.current.scale.set(
                                  1 / D.scale[0],
                                  1 / D.scale[1],
                                  1 / D.scale[2]
                                )
                            : J.current.scale.setScalar(1 / D.scale));
                      else {
                        let t = (x || 10) / 400,
                          r = e.clientWidth * t,
                          n = e.clientHeight * t;
                        J.current.scale.set(r, n, 1);
                      }
                      K.current = !0;
                    }
                  }
                } else {
                  let t = G.children[0];
                  if (
                    null != t &&
                    t.clientWidth &&
                    null != t &&
                    t.clientHeight
                  ) {
                    let e = 1 / H.factor,
                      r = t.clientWidth * e,
                      n = t.clientHeight * e;
                    J.current.scale.set(r, n, 1), (K.current = !0);
                  }
                  J.current.lookAt(e.camera.position);
                }
              }
            });
            let ea = o.useMemo(
              () => ({
                vertexShader: E
                  ? void 0
                  : `
          /*
            This shader is from the THREE's SpriteMaterial.
            We need to turn the backing plane into a Sprite
            (make it always face the camera) if "transfrom"
            is false.
          */
          #include <common>

          void main() {
            vec2 center = vec2(0., 1.);
            float rotation = 0.0;

            // This is somewhat arbitrary, but it seems to work well
            // Need to figure out how to derive this dynamically if it even matters
            float size = 0.03;

            vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
            vec2 scale;
            scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
            scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

            bool isPerspective = isPerspectiveMatrix( projectionMatrix );
            if ( isPerspective ) scale *= - mvPosition.z;

            vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale * size;
            vec2 rotatedPosition;
            rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
            rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
            mvPosition.xy += rotatedPosition;

            gl_Position = projectionMatrix * mvPosition;
          }
      `,
                fragmentShader: `
        void main() {
          gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
      `,
              }),
              [E]
            );
            return o.createElement(
              "group",
              (0, i.Z)({}, D, { ref: $ }),
              _ &&
                !ee &&
                o.createElement(
                  "mesh",
                  { castShadow: S, receiveShadow: R, ref: J },
                  k || o.createElement("planeGeometry", null),
                  A ||
                    o.createElement("shaderMaterial", {
                      side: s.DoubleSide,
                      vertexShader: ea.vertexShader,
                      fragmentShader: ea.fragmentShader,
                    })
                )
            );
          }
        );
    },
    557: function (e, t, r) {
      r.d(t, {
        HT: function () {
          return z;
        },
      });
      var n = {},
        a = Uint8Array,
        i = Uint16Array,
        o = Uint32Array,
        l = new a([
          0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4,
          4, 5, 5, 5, 5, 0, 0, 0, 0,
        ]),
        s = new a([
          0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10,
          10, 11, 11, 12, 12, 13, 13, 0, 0,
        ]),
        u = new a([
          16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
        ]),
        c = function (e, t) {
          for (var r = new i(31), n = 0; n < 31; ++n) r[n] = t += 1 << e[n - 1];
          for (var a = new o(r[30]), n = 1; n < 30; ++n)
            for (var l = r[n]; l < r[n + 1]; ++l) a[l] = ((l - r[n]) << 5) | n;
          return [r, a];
        },
        f = c(l, 2),
        d = f[0],
        h = f[1];
      (d[28] = 258), (h[258] = 28);
      for (
        var p = c(s, 0), v = p[0], g = p[1], m = new i(32768), y = 0;
        y < 32768;
        ++y
      ) {
        var w = ((43690 & y) >>> 1) | ((21845 & y) << 1);
        (w =
          ((61680 & (w = ((52428 & w) >>> 2) | ((13107 & w) << 2))) >>> 4) |
          ((3855 & w) << 4)),
          (m[y] = (((65280 & w) >>> 8) | ((255 & w) << 8)) >>> 1);
      }
      for (
        var b = function (e, t, r) {
            for (var n, a = e.length, o = 0, l = new i(t); o < a; ++o)
              ++l[e[o] - 1];
            var s = new i(t);
            for (o = 0; o < t; ++o) s[o] = (s[o - 1] + l[o - 1]) << 1;
            if (r) {
              n = new i(1 << t);
              var u = 15 - t;
              for (o = 0; o < a; ++o)
                if (e[o])
                  for (
                    var c = (o << 4) | e[o],
                      f = t - e[o],
                      d = s[e[o] - 1]++ << f,
                      h = d | ((1 << f) - 1);
                    d <= h;
                    ++d
                  )
                    n[m[d] >>> u] = c;
            } else
              for (o = 0, n = new i(a); o < a; ++o)
                e[o] && (n[o] = m[s[e[o] - 1]++] >>> (15 - e[o]));
            return n;
          },
          x = new a(288),
          y = 0;
        y < 144;
        ++y
      )
        x[y] = 8;
      for (var y = 144; y < 256; ++y) x[y] = 9;
      for (var y = 256; y < 280; ++y) x[y] = 7;
      for (var y = 280; y < 288; ++y) x[y] = 8;
      for (var M = new a(32), y = 0; y < 32; ++y) M[y] = 5;
      var E = b(x, 9, 1),
        _ = b(M, 5, 1),
        T = function (e) {
          for (var t = e[0], r = 1; r < e.length; ++r) e[r] > t && (t = e[r]);
          return t;
        },
        S = function (e, t, r) {
          var n = (t / 8) | 0;
          return ((e[n] | (e[n + 1] << 8)) >> (7 & t)) & r;
        },
        R = function (e, t) {
          var r = (t / 8) | 0;
          return (e[r] | (e[r + 1] << 8) | (e[r + 2] << 16)) >> (7 & t);
        },
        A = function (e) {
          return ((e / 8) | 0) + (7 & e && 1);
        },
        k = function (e, t, r) {
          (null == t || t < 0) && (t = 0),
            (null == r || r > e.length) && (r = e.length);
          var n = new (e instanceof i ? i : e instanceof o ? o : a)(r - t);
          return n.set(e.subarray(t, r)), n;
        },
        U = function (e, t, r) {
          var n = e.length;
          if (!n || (r && !r.l && n < 5)) return t || new a(0);
          var i = !t || r,
            o = !r || r.i;
          r || (r = {}), t || (t = new a(3 * n));
          var c = function (e) {
              var r = t.length;
              if (e > r) {
                var n = new a(Math.max(2 * r, e));
                n.set(t), (t = n);
              }
            },
            f = r.f || 0,
            h = r.p || 0,
            p = r.b || 0,
            g = r.l,
            m = r.d,
            y = r.m,
            w = r.n,
            x = 8 * n;
          do {
            if (!g) {
              r.f = f = S(e, h, 1);
              var M = S(e, h + 1, 3);
              if (((h += 3), M)) {
                if (1 == M) (g = E), (m = _), (y = 9), (w = 5);
                else if (2 == M) {
                  var U = S(e, h, 31) + 257,
                    I = S(e, h + 10, 15) + 4,
                    F = U + S(e, h + 5, 31) + 1;
                  h += 14;
                  for (var C = new a(F), L = new a(19), D = 0; D < I; ++D)
                    L[u[D]] = S(e, h + 3 * D, 7);
                  h += 3 * I;
                  for (
                    var P = T(L), O = (1 << P) - 1, B = b(L, P, 1), D = 0;
                    D < F;

                  ) {
                    var N = B[S(e, h, O)];
                    h += 15 & N;
                    var W = N >>> 4;
                    if (W < 16) C[D++] = W;
                    else {
                      var j = 0,
                        z = 0;
                      for (
                        16 == W
                          ? ((z = 3 + S(e, h, 3)), (h += 2), (j = C[D - 1]))
                          : 17 == W
                          ? ((z = 3 + S(e, h, 7)), (h += 3))
                          : 18 == W && ((z = 11 + S(e, h, 127)), (h += 7));
                        z--;

                      )
                        C[D++] = j;
                    }
                  }
                  var H = C.subarray(0, U),
                    G = C.subarray(U);
                  (y = T(H)), (w = T(G)), (g = b(H, y, 1)), (m = b(G, w, 1));
                } else throw "invalid block type";
              } else {
                var W = A(h) + 4,
                  V = e[W - 4] | (e[W - 3] << 8),
                  $ = W + V;
                if ($ > n) {
                  if (o) throw "unexpected EOF";
                  break;
                }
                i && c(p + V),
                  t.set(e.subarray(W, $), p),
                  (r.b = p += V),
                  (r.p = h = 8 * $);
                continue;
              }
              if (h > x) {
                if (o) throw "unexpected EOF";
                break;
              }
            }
            i && c(p + 131072);
            for (var q = (1 << y) - 1, X = (1 << w) - 1, Y = h; ; Y = h) {
              var j = g[R(e, h) & q],
                Z = j >>> 4;
              if ((h += 15 & j) > x) {
                if (o) throw "unexpected EOF";
                break;
              }
              if (!j) throw "invalid length/literal";
              if (Z < 256) t[p++] = Z;
              else if (256 == Z) {
                (Y = h), (g = null);
                break;
              } else {
                var Q = Z - 254;
                if (Z > 264) {
                  var D = Z - 257,
                    J = l[D];
                  (Q = S(e, h, (1 << J) - 1) + d[D]), (h += J);
                }
                var K = m[R(e, h) & X],
                  ee = K >>> 4;
                if (!K) throw "invalid distance";
                h += 15 & K;
                var G = v[ee];
                if (ee > 3) {
                  var J = s[ee];
                  (G += R(e, h) & ((1 << J) - 1)), (h += J);
                }
                if (h > x) {
                  if (o) throw "unexpected EOF";
                  break;
                }
                i && c(p + 131072);
                for (var et = p + Q; p < et; p += 4)
                  (t[p] = t[p - G]),
                    (t[p + 1] = t[p + 1 - G]),
                    (t[p + 2] = t[p + 2 - G]),
                    (t[p + 3] = t[p + 3 - G]);
                p = et;
              }
            }
            (r.l = g),
              (r.p = Y),
              (r.b = p),
              g && ((f = 1), (r.m = y), (r.d = m), (r.n = w));
          } while (!f);
          return p == t.length ? t : k(t, 0, p);
        },
        I = function (e, t, r) {
          r <<= 7 & t;
          var n = (t / 8) | 0;
          (e[n] |= r), (e[n + 1] |= r >>> 8);
        },
        F = function (e, t, r) {
          r <<= 7 & t;
          var n = (t / 8) | 0;
          (e[n] |= r), (e[n + 1] |= r >>> 8), (e[n + 2] |= r >>> 16);
        },
        C = function (e, t) {
          for (var r = [], n = 0; n < e.length; ++n)
            e[n] && r.push({ s: n, f: e[n] });
          var o = r.length,
            l = r.slice();
          if (!o) return [W, 0];
          if (1 == o) {
            var s = new a(r[0].s + 1);
            return (s[r[0].s] = 1), [s, 1];
          }
          r.sort(function (e, t) {
            return e.f - t.f;
          }),
            r.push({ s: -1, f: 25001 });
          var u = r[0],
            c = r[1],
            f = 0,
            d = 1,
            h = 2;
          for (r[0] = { s: -1, f: u.f + c.f, l: u, r: c }; d != o - 1; )
            (u = r[r[f].f < r[h].f ? f++ : h++]),
              (c = r[f != d && r[f].f < r[h].f ? f++ : h++]),
              (r[d++] = { s: -1, f: u.f + c.f, l: u, r: c });
          for (var p = l[0].s, n = 1; n < o; ++n) l[n].s > p && (p = l[n].s);
          var v = new i(p + 1),
            g = L(r[d - 1], v, 0);
          if (g > t) {
            var n = 0,
              m = 0,
              y = g - t,
              w = 1 << y;
            for (
              l.sort(function (e, t) {
                return v[t.s] - v[e.s] || e.f - t.f;
              });
              n < o;
              ++n
            ) {
              var b = l[n].s;
              if (v[b] > t) (m += w - (1 << (g - v[b]))), (v[b] = t);
              else break;
            }
            for (m >>>= y; m > 0; ) {
              var x = l[n].s;
              v[x] < t ? (m -= 1 << (t - v[x]++ - 1)) : ++n;
            }
            for (; n >= 0 && m; --n) {
              var M = l[n].s;
              v[M] == t && (--v[M], ++m);
            }
            g = t;
          }
          return [new a(v), g];
        },
        L = function (e, t, r) {
          return -1 == e.s
            ? Math.max(L(e.l, t, r + 1), L(e.r, t, r + 1))
            : (t[e.s] = r);
        },
        D = function (e) {
          for (var t = e.length; t && !e[--t]; );
          for (
            var r = new i(++t),
              n = 0,
              a = e[0],
              o = 1,
              l = function (e) {
                r[n++] = e;
              },
              s = 1;
            s <= t;
            ++s
          )
            if (e[s] == a && s != t) ++o;
            else {
              if (!a && o > 2) {
                for (; o > 138; o -= 138) l(32754);
                o > 2 &&
                  (l(o > 10 ? ((o - 11) << 5) | 28690 : ((o - 3) << 5) | 12305),
                  (o = 0));
              } else if (o > 3) {
                for (l(a), --o; o > 6; o -= 6) l(8304);
                o > 2 && (l(((o - 3) << 5) | 8208), (o = 0));
              }
              for (; o--; ) l(a);
              (o = 1), (a = e[s]);
            }
          return [r.subarray(0, n), t];
        },
        P = function (e, t) {
          for (var r = 0, n = 0; n < t.length; ++n) r += e[n] * t[n];
          return r;
        },
        O = function (e, t, r) {
          var n = r.length,
            a = A(t + 2);
          (e[a] = 255 & n),
            (e[a + 1] = n >>> 8),
            (e[a + 2] = 255 ^ e[a]),
            (e[a + 3] = 255 ^ e[a + 1]);
          for (var i = 0; i < n; ++i) e[a + i + 4] = r[i];
          return (a + 4 + n) * 8;
        },
        B = function (e, t, r, n, a, o, c, f, d, h, p) {
          I(t, p++, r), ++a[256];
          for (
            var v,
              g,
              m,
              y,
              w = C(a, 15),
              E = w[0],
              _ = w[1],
              T = C(o, 15),
              S = T[0],
              R = T[1],
              A = D(E),
              k = A[0],
              U = A[1],
              L = D(S),
              B = L[0],
              N = L[1],
              W = new i(19),
              j = 0;
            j < k.length;
            ++j
          )
            W[31 & k[j]]++;
          for (var j = 0; j < B.length; ++j) W[31 & B[j]]++;
          for (
            var z = C(W, 7), H = z[0], G = z[1], V = 19;
            V > 4 && !H[u[V - 1]];
            --V
          );
          var $ = (h + 5) << 3,
            q = P(a, x) + P(o, M) + c,
            X =
              P(a, E) +
              P(o, S) +
              c +
              14 +
              3 * V +
              P(W, H) +
              (2 * W[16] + 3 * W[17] + 7 * W[18]);
          if ($ <= q && $ <= X) return O(t, p, e.subarray(d, d + h));
          if ((I(t, p, 1 + (X < q)), (p += 2), X < q)) {
            (v = b(E, _, 0)), (g = E), (m = b(S, R, 0)), (y = S);
            var Y = b(H, G, 0);
            I(t, p, U - 257),
              I(t, p + 5, N - 1),
              I(t, p + 10, V - 4),
              (p += 14);
            for (var j = 0; j < V; ++j) I(t, p + 3 * j, H[u[j]]);
            p += 3 * V;
            for (var Z = [k, B], Q = 0; Q < 2; ++Q)
              for (var J = Z[Q], j = 0; j < J.length; ++j) {
                var K = 31 & J[j];
                I(t, p, Y[K]),
                  (p += H[K]),
                  K > 15 && (I(t, p, (J[j] >>> 5) & 127), (p += J[j] >>> 12));
              }
          } else (v = null), (g = x), (m = null), (y = M);
          for (var j = 0; j < f; ++j)
            if (n[j] > 255) {
              var K = (n[j] >>> 18) & 31;
              F(t, p, v[K + 257]),
                (p += g[K + 257]),
                K > 7 && (I(t, p, (n[j] >>> 23) & 31), (p += l[K]));
              var ee = 31 & n[j];
              F(t, p, m[ee]),
                (p += y[ee]),
                ee > 3 && (F(t, p, (n[j] >>> 5) & 8191), (p += s[ee]));
            } else F(t, p, v[n[j]]), (p += g[n[j]]);
          return F(t, p, v[256]), p + g[256];
        },
        N = new o([
          65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560,
          2117632,
        ]),
        W = new a(0),
        j = function (e) {
          if ((15 & e[0]) != 8 || e[0] >>> 4 > 7 || ((e[0] << 8) | e[1]) % 31)
            throw "invalid zlib data";
          if (32 & e[1])
            throw "invalid zlib data: preset dictionaries not supported";
        };
      function z(e, t) {
        return U((j(e), e.subarray(2, -4)), t);
      }
      var H = "undefined" != typeof TextDecoder && new TextDecoder();
      try {
        H.decode(W, { stream: !0 });
      } catch (e) {}
    },
    7502: function (e, t, r) {
      r.d(t, {
        B$: function () {
          return function e(t, r) {
            let a = (function (e) {
                let t = JSON.stringify(e, h),
                  r = v.get(t);
                return null == r && v.set(t, (r = ++p)), r;
              })(r),
              g = u.get(t);
            if ((g || u.set(t, (g = Object.create(null))), g[a]))
              return new g[a]();
            let m = `_onBeforeCompile${a}`,
              y = function (e, n) {
                t.onBeforeCompile.call(this, e, n);
                let o =
                    this.customProgramCacheKey() +
                    "|" +
                    e.vertexShader +
                    "|" +
                    e.fragmentShader,
                  u = c[o];
                if (!u) {
                  let t = (function (
                    e,
                    { vertexShader: t, fragmentShader: r },
                    n,
                    a
                  ) {
                    let {
                      vertexDefs: o,
                      vertexMainIntro: l,
                      vertexMainOutro: s,
                      vertexTransform: u,
                      fragmentDefs: c,
                      fragmentMainIntro: f,
                      fragmentMainOutro: h,
                      fragmentColorTransform: p,
                      customRewriter: v,
                      timeUniform: g,
                    } = n;
                    if (
                      ((o = o || ""),
                      (l = l || ""),
                      (s = s || ""),
                      (c = c || ""),
                      (f = f || ""),
                      (h = h || ""),
                      (u || v) && (t = i(t)),
                      (p || v) &&
                        (r = i(
                          (r = r.replace(
                            /^[ \t]*#include <((?:tonemapping|encodings|fog|premultiplied_alpha|dithering)_fragment)>/gm,
                            "\n//!BEGIN_POST_CHUNK $1\n$&\n//!END_POST_CHUNK\n"
                          ))
                        )),
                      v)
                    ) {
                      let e = v({ vertexShader: t, fragmentShader: r });
                      (t = e.vertexShader), (r = e.fragmentShader);
                    }
                    if (p) {
                      let e = [];
                      (r = r.replace(
                        /^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,
                        (t) => (e.push(t), "")
                      )),
                        (h = `${p}
${e.join("\n")}
${h}`);
                    }
                    if (g) {
                      let e = `
uniform float ${g};
`;
                      (o = e + o), (c = e + c);
                    }
                    return (
                      u &&
                        ((t = `vec3 troika_position_${a};
vec3 troika_normal_${a};
vec2 troika_uv_${a};
${t}
`),
                        (o = `${o}
void troikaVertexTransform${a}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${u}
}
`),
                        (l = `
troika_position_${a} = vec3(position);
troika_normal_${a} = vec3(normal);
troika_uv_${a} = vec2(uv);
troikaVertexTransform${a}(troika_position_${a}, troika_normal_${a}, troika_uv_${a});
${l}
`),
                        (t = t.replace(
                          /\b(position|normal|uv)\b/g,
                          (e, t, r, n) =>
                            /\battribute\s+vec[23]\s+$/.test(n.substr(0, r))
                              ? t
                              : `troika_${t}_${a}`
                        )),
                        (e.map && e.map.channel > 0) ||
                          (t = t.replace(/\bMAP_UV\b/g, `troika_uv_${a}`))),
                      {
                        vertexShader: (t = d(t, a, o, l, s)),
                        fragmentShader: (r = d(r, a, c, f, h)),
                      }
                    );
                  })(this, e, r, a);
                  u = c[o] = t;
                }
                (e.vertexShader = u.vertexShader),
                  (e.fragmentShader = u.fragmentShader),
                  l(e.uniforms, this.uniforms),
                  r.timeUniform &&
                    (e.uniforms[r.timeUniform] = {
                      get value() {
                        return Date.now() - s;
                      },
                    }),
                  this[m] && this[m](e);
              },
              w = function () {
                return b(r.chained ? t : t.clone());
              },
              b = function (e) {
                let n = Object.create(e, x);
                return (
                  Object.defineProperty(n, "baseMaterial", { value: t }),
                  Object.defineProperty(n, "id", { value: f++ }),
                  (n.uuid = (function () {
                    let e = (4294967295 * Math.random()) | 0,
                      t = (4294967295 * Math.random()) | 0,
                      r = (4294967295 * Math.random()) | 0,
                      n = (4294967295 * Math.random()) | 0;
                    return (
                      o[255 & e] +
                      o[(e >> 8) & 255] +
                      o[(e >> 16) & 255] +
                      o[(e >> 24) & 255] +
                      "-" +
                      o[255 & t] +
                      o[(t >> 8) & 255] +
                      "-" +
                      o[((t >> 16) & 15) | 64] +
                      o[(t >> 24) & 255] +
                      "-" +
                      o[(63 & r) | 128] +
                      o[(r >> 8) & 255] +
                      "-" +
                      o[(r >> 16) & 255] +
                      o[(r >> 24) & 255] +
                      o[255 & n] +
                      o[(n >> 8) & 255] +
                      o[(n >> 16) & 255] +
                      o[(n >> 24) & 255]
                    ).toUpperCase();
                  })()),
                  (n.uniforms = l({}, e.uniforms, r.uniforms)),
                  (n.defines = l({}, e.defines, r.defines)),
                  (n.defines[`TROIKA_DERIVED_MATERIAL_${a}`] = ""),
                  (n.extensions = l({}, e.extensions, r.extensions)),
                  (n._listeners = void 0),
                  n
                );
              },
              x = {
                constructor: { value: w },
                isDerivedMaterial: { value: !0 },
                customProgramCacheKey: {
                  writable: !0,
                  configurable: !0,
                  value: function () {
                    return t.customProgramCacheKey() + "|" + a;
                  },
                },
                onBeforeCompile: {
                  get: () => y,
                  set(e) {
                    this[m] = e;
                  },
                },
                copy: {
                  writable: !0,
                  configurable: !0,
                  value: function (e) {
                    return (
                      t.copy.call(this, e),
                      t.isShaderMaterial ||
                        t.isDerivedMaterial ||
                        (l(this.extensions, e.extensions),
                        l(this.defines, e.defines),
                        l(this.uniforms, n.UniformsUtils.clone(e.uniforms))),
                      this
                    );
                  },
                },
                clone: {
                  writable: !0,
                  configurable: !0,
                  value: function () {
                    return b(new t.constructor()).copy(this);
                  },
                },
                getDepthMaterial: {
                  writable: !0,
                  configurable: !0,
                  value: function () {
                    let a = this._depthMaterial;
                    return (
                      a ||
                        (((a = this._depthMaterial =
                          e(
                            t.isDerivedMaterial
                              ? t.getDepthMaterial()
                              : new n.MeshDepthMaterial({
                                  depthPacking: n.RGBADepthPacking,
                                }),
                            r
                          )).defines.IS_DEPTH_MATERIAL = ""),
                        (a.uniforms = this.uniforms)),
                      a
                    );
                  },
                },
                getDistanceMaterial: {
                  writable: !0,
                  configurable: !0,
                  value: function () {
                    let a = this._distanceMaterial;
                    return (
                      a ||
                        (((a = this._distanceMaterial =
                          e(
                            t.isDerivedMaterial
                              ? t.getDistanceMaterial()
                              : new n.MeshDistanceMaterial(),
                            r
                          )).defines.IS_DISTANCE_MATERIAL = ""),
                        (a.uniforms = this.uniforms)),
                      a
                    );
                  },
                },
                dispose: {
                  writable: !0,
                  configurable: !0,
                  value() {
                    let { _depthMaterial: e, _distanceMaterial: r } = this;
                    e && e.dispose(), r && r.dispose(), t.dispose.call(this);
                  },
                },
              };
            return (g[a] = w), new w();
          };
        },
        MW: function () {
          return a;
        },
      });
      var n = r(7776);
      let a = /\bvoid\s+main\s*\(\s*\)\s*{/g;
      function i(e) {
        return e.replace(/^[ \t]*#include +<([\w\d./]+)>/gm, function (e, t) {
          let r = n.ShaderChunk[t];
          return r ? i(r) : e;
        });
      }
      let o = [];
      for (let e = 0; e < 256; e++) o[e] = (e < 16 ? "0" : "") + e.toString(16);
      let l =
          Object.assign ||
          function () {
            let e = arguments[0];
            for (let t = 1, r = arguments.length; t < r; t++) {
              let r = arguments[t];
              if (r)
                for (let t in r)
                  Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t]);
            }
            return e;
          },
        s = Date.now(),
        u = new WeakMap(),
        c = new Map(),
        f = 1e10;
      function d(e, t, r, n, i) {
        return (
          (n || i || r) &&
            (e =
              e.replace(
                a,
                `
${r}
void troikaOrigMain${t}() {`
              ) +
              `
void main() {
  ${n}
  troikaOrigMain${t}();
  ${i}
}`),
          e
        );
      }
      function h(e, t) {
        return "uniforms" === e
          ? void 0
          : "function" == typeof t
          ? t.toString()
          : t;
      }
      let p = 0,
        v = new Map();
      n.DoubleSide;
    },
    1640: function (e, t, r) {
      function n() {
        var e = Object.create(null);
        function t(e, t) {
          var r = void 0;
          self.troikaDefine = function (e) {
            return (r = e);
          };
          var n = URL.createObjectURL(
            new Blob(
              [
                "/** " +
                  e.replace(/\*/g, "") +
                  " **/\n\ntroikaDefine(\n" +
                  t +
                  "\n)",
              ],
              { type: "application/javascript" }
            )
          );
          try {
            importScripts(n);
          } catch (e) {
            console.error(e);
          }
          return URL.revokeObjectURL(n), delete self.troikaDefine, r;
        }
        self.addEventListener("message", function (r) {
          var n = r.data,
            a = n.messageId,
            i = n.action,
            o = n.data;
          try {
            "registerModule" === i &&
              (function r(n, a) {
                var i = n.id,
                  o = n.name,
                  l = n.dependencies;
                void 0 === l && (l = []);
                var s = n.init;
                void 0 === s && (s = function () {});
                var u = n.getTransferables;
                if ((void 0 === u && (u = null), !e[i]))
                  try {
                    (l = l.map(function (t) {
                      return (
                        t &&
                          t.isWorkerModule &&
                          (r(t, function (e) {
                            if (e instanceof Error) throw e;
                          }),
                          (t = e[t.id].value)),
                        t
                      );
                    })),
                      (s = t("<" + o + ">.init", s)),
                      u && (u = t("<" + o + ">.getTransferables", u));
                    var c = null;
                    "function" == typeof s
                      ? (c = s.apply(void 0, l))
                      : console.error(
                          "worker module init function failed to rehydrate"
                        ),
                      (e[i] = { id: i, value: c, getTransferables: u }),
                      a(c);
                  } catch (e) {
                    (e && e.noLog) || console.error(e), a(e);
                  }
              })(o, function (e) {
                e instanceof Error
                  ? postMessage({ messageId: a, success: !1, error: e.message })
                  : postMessage({
                      messageId: a,
                      success: !0,
                      result: { isCallable: "function" == typeof e },
                    });
              }),
              "callModule" === i &&
                (function (t, r) {
                  var n,
                    a = t.id,
                    i = t.args;
                  (e[a] && "function" == typeof e[a].value) ||
                    r(
                      Error(
                        "Worker module " +
                          a +
                          ": not found or its 'init' did not return a function"
                      )
                    );
                  try {
                    var o = (n = e[a]).value.apply(n, i);
                    o && "function" == typeof o.then
                      ? o.then(l, function (e) {
                          return r(e instanceof Error ? e : Error("" + e));
                        })
                      : l(o);
                  } catch (e) {
                    r(e);
                  }
                  function l(t) {
                    try {
                      var n = e[a].getTransferables && e[a].getTransferables(t);
                      (n && Array.isArray(n) && n.length) || (n = void 0),
                        r(t, n);
                    } catch (e) {
                      console.error(e), r(e);
                    }
                  }
                })(o, function (e, t) {
                  e instanceof Error
                    ? postMessage({
                        messageId: a,
                        success: !1,
                        error: e.message,
                      })
                    : postMessage(
                        { messageId: a, success: !0, result: e },
                        t || void 0
                      );
                });
          } catch (e) {
            postMessage({ messageId: a, success: !1, error: e.stack });
          }
        });
      }
      r.d(t, {
        Ae: function () {
          return f;
        },
        Ch: function () {
          return function e(t) {
            if ((!t || "function" != typeof t.init) && !l)
              throw Error("requires `options.init` function");
            var r,
              n = t.dependencies,
              o = t.init,
              s = t.getTransferables,
              c = t.workerId;
            if (!a())
              return (
                ((r = function () {
                  for (var e = [], t = arguments.length; t--; )
                    e[t] = arguments[t];
                  return r._getInitResult().then(function (t) {
                    if ("function" == typeof t) return t.apply(void 0, e);
                    throw Error(
                      "Worker module function was called but `init` did not return a callable function"
                    );
                  });
                })._getInitResult = function () {
                  var e = t.dependencies,
                    n = t.init,
                    a = Promise.all(
                      (e = Array.isArray(e)
                        ? e.map(function (e) {
                            return e && e._getInitResult
                              ? e._getInitResult()
                              : e;
                          })
                        : [])
                    ).then(function (e) {
                      return n.apply(null, e);
                    });
                  return (
                    (r._getInitResult = function () {
                      return a;
                    }),
                    a
                  );
                }),
                r
              );
            null == c && (c = "#default");
            var f = "workerModule" + ++i,
              p = t.name || f,
              v = null;
            function g() {
              for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
              if (!v) {
                v = h(c, "registerModule", g.workerModuleData);
                var r = function () {
                  (v = null), u[c].delete(r);
                };
                (u[c] || (u[c] = new Set())).add(r);
              }
              return v.then(function (t) {
                if (t.isCallable) return h(c, "callModule", { id: f, args: e });
                throw Error(
                  "Worker module function was called but `init` did not return a callable function"
                );
              });
            }
            return (
              (n =
                n &&
                n.map(function (t) {
                  return (
                    "function" != typeof t ||
                      t.workerModuleData ||
                      ((l = !0),
                      (t = e({
                        workerId: c,
                        name: "<" + p + "> function dependency: " + t.name,
                        init: "function(){return (\n" + d(t) + "\n)}",
                      })),
                      (l = !1)),
                    t && t.workerModuleData && (t = t.workerModuleData),
                    t
                  );
                })),
              (g.workerModuleData = {
                isWorkerModule: !0,
                id: f,
                name: p,
                dependencies: n,
                init: d(o),
                getTransferables: s && d(s),
              }),
              g
            );
          };
        },
      }),
        r(357);
      var a = function () {
          var e = !1;
          if ("undefined" != typeof window && void 0 !== window.document)
            try {
              new Worker(
                URL.createObjectURL(
                  new Blob([""], { type: "application/javascript" })
                )
              ).terminate(),
                (e = !0);
            } catch (e) {
              console.log(
                "Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: [" +
                  e.message +
                  "]"
              );
            }
          return (
            (a = function () {
              return e;
            }),
            e
          );
        },
        i = 0,
        o = 0,
        l = !1,
        s = Object.create(null),
        u = Object.create(null),
        c = Object.create(null);
      function f(e) {
        u[e] &&
          u[e].forEach(function (e) {
            e();
          }),
          s[e] && (s[e].terminate(), delete s[e]);
      }
      function d(e) {
        var t = e.toString();
        return (
          !/^function/.test(t) && /^\w+\s*\(/.test(t) && (t = "function " + t),
          t
        );
      }
      function h(e, t, r) {
        return new Promise(function (a, i) {
          var l = ++o;
          (c[l] = function (e) {
            e.success
              ? a(e.result)
              : i(Error("Error in worker " + t + " call: " + e.error));
          }),
            (function (e) {
              var t = s[e];
              if (!t) {
                var r = d(n);
                (t = s[e] =
                  new Worker(
                    URL.createObjectURL(
                      new Blob(
                        [
                          "/** Worker Module Bootstrap: " +
                            e.replace(/\*/g, "") +
                            " **/\n\n;(" +
                            r +
                            ")()",
                        ],
                        { type: "application/javascript" }
                      )
                    )
                  )).onmessage = function (e) {
                  var t = e.data,
                    r = t.messageId,
                    n = c[r];
                  if (!n)
                    throw Error(
                      "WorkerModule response with empty or unknown messageId"
                    );
                  delete c[r], n(t);
                };
              }
              return t;
            })(e).postMessage({ messageId: l, action: t, data: r });
        });
      }
    },
    5097: function (e, t) {
      t.Z = function () {
        return (function (e) {
          var t,
            r,
            n,
            a,
            i = {
              R: "13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",
              EN: "1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",
              ES: "17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",
              ET: "z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",
              AN: "16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",
              CS: "18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",
              B: "a,3,f+2,2v,690",
              S: "9,2,k",
              WS: "c,k,4f4,1vk+a,u,1j,335",
              ON: "x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",
              BN: "0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",
              NSM: "lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",
              AL: "16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",
              LRO: "6ct",
              RLO: "6cu",
              LRE: "6cq",
              RLE: "6cr",
              PDF: "6cs",
              LRI: "6ee",
              RLI: "6ef",
              FSI: "6eg",
              PDI: "6eh",
            },
            o = {},
            l = {};
          (o.L = 1),
            (l[1] = "L"),
            Object.keys(i).forEach(function (e, t) {
              (o[e] = 1 << (t + 1)), (l[o[e]] = e);
            }),
            Object.freeze(o);
          var s = o.LRI | o.RLI | o.FSI,
            u = o.L | o.R | o.AL,
            c = o.B | o.S | o.WS | o.ON | o.FSI | o.LRI | o.RLI | o.PDI,
            f = o.BN | o.RLE | o.LRE | o.RLO | o.LRO | o.PDF,
            d = o.S | o.WS | o.B | s | o.PDI | f,
            h = null;
          function p(e) {
            return (
              !(function () {
                if (!h) {
                  h = new Map();
                  var e = function (e) {
                    if (i.hasOwnProperty(e)) {
                      var t = 0;
                      i[e].split(",").forEach(function (r) {
                        var n = r.split("+"),
                          a = n[0],
                          i = n[1];
                        (a = parseInt(a, 36)),
                          (i = i ? parseInt(i, 36) : 0),
                          h.set((t += a), o[e]);
                        for (var l = 0; l < i; l++) h.set(++t, o[e]);
                      });
                    }
                  };
                  for (var t in i) e(t);
                }
              })(),
              h.get(e.codePointAt(0)) || o.L
            );
          }
          var v = {
            pairs:
              "14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",
            canonical:
              "6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye",
          };
          function g(e, t) {
            var r,
              n = 0,
              a = new Map(),
              i = t && new Map();
            return (
              e.split(",").forEach(function e(o) {
                if (-1 !== o.indexOf("+")) for (var l = +o; l--; ) e(r);
                else {
                  r = o;
                  var s = o.split(">"),
                    u = s[0],
                    c = s[1];
                  (u = String.fromCodePoint((n += parseInt(u, 36)))),
                    (c = String.fromCodePoint((n += parseInt(c, 36)))),
                    a.set(u, c),
                    t && i.set(c, u);
                }
              }),
              { map: a, reverseMap: i }
            );
          }
          function m() {
            if (!t) {
              var e = g(v.pairs, !0),
                a = e.map,
                i = e.reverseMap;
              (t = a), (r = i), (n = g(v.canonical, !1).map);
            }
          }
          function y(e) {
            return m(), t.get(e) || null;
          }
          function w(e) {
            return m(), r.get(e) || null;
          }
          function b(e) {
            return m(), n.get(e) || null;
          }
          var x = o.L,
            M = o.R,
            E = o.EN,
            _ = o.ES,
            T = o.ET,
            S = o.AN,
            R = o.CS,
            A = o.B,
            k = o.S,
            U = o.ON,
            I = o.BN,
            F = o.NSM,
            C = o.AL,
            L = o.LRO,
            D = o.RLO,
            P = o.LRE,
            O = o.RLE,
            B = o.PDF,
            N = o.LRI,
            W = o.RLI,
            j = o.FSI,
            z = o.PDI;
          function H(e) {
            return (
              !(function () {
                if (!a) {
                  var e = g(
                      "14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",
                      !0
                    ),
                    t = e.map;
                  e.reverseMap.forEach(function (e, r) {
                    t.set(r, e);
                  }),
                    (a = t);
                }
              })(),
              a.get(e) || null
            );
          }
          function G(e, t, r, n) {
            var a = e.length;
            (r = Math.max(0, null == r ? 0 : +r)),
              (n = Math.min(a - 1, null == n ? a - 1 : +n));
            var i = [];
            return (
              t.paragraphs.forEach(function (a) {
                var o = Math.max(r, a.start),
                  l = Math.min(n, a.end);
                if (o < l) {
                  for (
                    var s = t.levels.slice(o, l + 1), u = l;
                    u >= o && p(e[u]) & d;
                    u--
                  )
                    s[u] = a.level;
                  for (var c = a.level, f = 1 / 0, h = 0; h < s.length; h++) {
                    var v = s[h];
                    v > c && (c = v), v < f && (f = 1 | v);
                  }
                  for (var g = c; g >= f; g--)
                    for (var m = 0; m < s.length; m++)
                      if (s[m] >= g) {
                        for (var y = m; m + 1 < s.length && s[m + 1] >= g; )
                          m++;
                        m > y && i.push([y + o, m + o]);
                      }
                }
              }),
              i
            );
          }
          function V(e, t, r, n) {
            for (var a = G(e, t, r, n), i = [], o = 0; o < e.length; o++)
              i[o] = o;
            return (
              a.forEach(function (e) {
                for (
                  var t = e[0], r = e[1], n = i.slice(t, r + 1), a = n.length;
                  a--;

                )
                  i[r - a] = n[a];
              }),
              i
            );
          }
          return (
            (e.closingToOpeningBracket = w),
            (e.getBidiCharType = p),
            (e.getBidiCharTypeName = function (e) {
              return l[p(e)];
            }),
            (e.getCanonicalBracket = b),
            (e.getEmbeddingLevels = function (e, t) {
              for (var r = new Uint32Array(e.length), n = 0; n < e.length; n++)
                r[n] = p(e[n]);
              var a = new Map();
              function i(e, t) {
                var n = r[e];
                (r[e] = t),
                  a.set(n, a.get(n) - 1),
                  n & c && a.set(c, a.get(c) - 1),
                  a.set(t, (a.get(t) || 0) + 1),
                  t & c && a.set(c, (a.get(c) || 0) + 1);
              }
              for (
                var o = new Uint8Array(e.length),
                  l = new Map(),
                  h = [],
                  v = null,
                  g = 0;
                g < e.length;
                g++
              )
                v ||
                  h.push(
                    (v = {
                      start: g,
                      end: e.length - 1,
                      level: "rtl" === t ? 1 : "ltr" === t ? 0 : tU(g, !1),
                    })
                  ),
                  r[g] & A && ((v.end = g), (v = null));
              for (
                var m = O | P | D | L | s | z | B | A,
                  H = function (e) {
                    return e + (1 & e ? 1 : 2);
                  },
                  G = function (e) {
                    return e + (1 & e ? 2 : 1);
                  },
                  V = 0;
                V < h.length;
                V++
              ) {
                var $ = [
                    { _level: (v = h[V]).level, _override: 0, _isolate: 0 },
                  ],
                  q = void 0,
                  X = 0,
                  Y = 0,
                  Z = 0;
                a.clear();
                for (var Q = v.start; Q <= v.end; Q++) {
                  var J = r[Q];
                  if (
                    ((q = $[$.length - 1]),
                    a.set(J, (a.get(J) || 0) + 1),
                    J & c && a.set(c, (a.get(c) || 0) + 1),
                    J & m)
                  ) {
                    if (J & (O | P)) {
                      o[Q] = q._level;
                      var K = (J === O ? G : H)(q._level);
                      !(K <= 125) || X || Y
                        ? !X && Y++
                        : $.push({ _level: K, _override: 0, _isolate: 0 });
                    } else if (J & (D | L)) {
                      o[Q] = q._level;
                      var ee = (J === D ? G : H)(q._level);
                      !(ee <= 125) || X || Y
                        ? !X && Y++
                        : $.push({
                            _level: ee,
                            _override: J & D ? M : x,
                            _isolate: 0,
                          });
                    } else if (J & s) {
                      J & j && (J = 1 === tU(Q + 1, !0) ? W : N),
                        (o[Q] = q._level),
                        q._override && i(Q, q._override);
                      var et = (J === W ? G : H)(q._level);
                      et <= 125 && 0 === X && 0 === Y
                        ? (Z++,
                          $.push({
                            _level: et,
                            _override: 0,
                            _isolate: 1,
                            _isolInitIndex: Q,
                          }))
                        : X++;
                    } else if (J & z) {
                      if (X > 0) X--;
                      else if (Z > 0) {
                        for (Y = 0; !$[$.length - 1]._isolate; ) $.pop();
                        var er = $[$.length - 1]._isolInitIndex;
                        null != er && (l.set(er, Q), l.set(Q, er)),
                          $.pop(),
                          Z--;
                      }
                      (q = $[$.length - 1]),
                        (o[Q] = q._level),
                        q._override && i(Q, q._override);
                    } else
                      J & B
                        ? (0 === X &&
                            (Y > 0
                              ? Y--
                              : !q._isolate &&
                                $.length > 1 &&
                                ($.pop(), (q = $[$.length - 1]))),
                          (o[Q] = q._level))
                        : J & A && (o[Q] = v.level);
                  } else
                    (o[Q] = q._level),
                      q._override && J !== I && i(Q, q._override);
                }
                for (var en = [], ea = null, ei = v.start; ei <= v.end; ei++) {
                  var eo = r[ei];
                  if (!(eo & f)) {
                    var el = o[ei],
                      es = eo & s,
                      eu = eo === z;
                    ea && el === ea._level
                      ? ((ea._end = ei), (ea._endsWithIsolInit = es))
                      : en.push(
                          (ea = {
                            _start: ei,
                            _end: ei,
                            _level: el,
                            _startsWithPDI: eu,
                            _endsWithIsolInit: es,
                          })
                        );
                  }
                }
                for (var ec = [], ef = 0; ef < en.length; ef++) {
                  var ed = en[ef];
                  if (
                    !ed._startsWithPDI ||
                    (ed._startsWithPDI && !l.has(ed._start))
                  ) {
                    for (
                      var eh = [(ea = ed)], ep = void 0;
                      ea &&
                      ea._endsWithIsolInit &&
                      null != (ep = l.get(ea._end));

                    )
                      for (var ev = ef + 1; ev < en.length; ev++)
                        if (en[ev]._start === ep) {
                          eh.push((ea = en[ev]));
                          break;
                        }
                    for (var eg = [], em = 0; em < eh.length; em++)
                      for (var ey = eh[em], ew = ey._start; ew <= ey._end; ew++)
                        eg.push(ew);
                    for (
                      var eb = o[eg[0]], ex = v.level, eM = eg[0] - 1;
                      eM >= 0;
                      eM--
                    )
                      if (!(r[eM] & f)) {
                        ex = o[eM];
                        break;
                      }
                    var eE = eg[eg.length - 1],
                      e_ = o[eE],
                      eT = v.level;
                    if (!(r[eE] & s)) {
                      for (var eS = eE + 1; eS <= v.end; eS++)
                        if (!(r[eS] & f)) {
                          eT = o[eS];
                          break;
                        }
                    }
                    ec.push({
                      _seqIndices: eg,
                      _sosType: Math.max(ex, eb) % 2 ? M : x,
                      _eosType: Math.max(eT, e_) % 2 ? M : x,
                    });
                  }
                }
                for (var eR = 0; eR < ec.length; eR++) {
                  var eA = ec[eR],
                    ek = eA._seqIndices,
                    eU = eA._sosType,
                    eI = eA._eosType,
                    eF = 1 & o[ek[0]] ? M : x;
                  if (a.get(F))
                    for (var eC = 0; eC < ek.length; eC++) {
                      var eL = ek[eC];
                      if (r[eL] & F) {
                        for (var eD = eU, eP = eC - 1; eP >= 0; eP--)
                          if (!(r[ek[eP]] & f)) {
                            eD = r[ek[eP]];
                            break;
                          }
                        i(eL, eD & (s | z) ? U : eD);
                      }
                    }
                  if (a.get(E))
                    for (var eO = 0; eO < ek.length; eO++) {
                      var eB = ek[eO];
                      if (r[eB] & E)
                        for (var eN = eO - 1; eN >= -1; eN--) {
                          var eW = -1 === eN ? eU : r[ek[eN]];
                          if (eW & u) {
                            eW === C && i(eB, S);
                            break;
                          }
                        }
                    }
                  if (a.get(C))
                    for (var ej = 0; ej < ek.length; ej++) {
                      var ez = ek[ej];
                      r[ez] & C && i(ez, M);
                    }
                  if (a.get(_) || a.get(R))
                    for (var eH = 1; eH < ek.length - 1; eH++) {
                      var eG = ek[eH];
                      if (r[eG] & (_ | R)) {
                        for (
                          var eV = 0, e$ = 0, eq = eH - 1;
                          eq >= 0 && (eV = r[ek[eq]]) & f;
                          eq--
                        );
                        for (
                          var eX = eH + 1;
                          eX < ek.length && (e$ = r[ek[eX]]) & f;
                          eX++
                        );
                        eV === e$ &&
                          (r[eG] === _ ? eV === E : eV & (E | S)) &&
                          i(eG, eV);
                      }
                    }
                  if (a.get(E)) {
                    for (var eY = 0; eY < ek.length; eY++)
                      if (r[ek[eY]] & E) {
                        for (
                          var eZ = eY - 1;
                          eZ >= 0 && r[ek[eZ]] & (T | f);
                          eZ--
                        )
                          i(ek[eZ], E);
                        for (
                          eY++;
                          eY < ek.length && r[ek[eY]] & (T | f | E);
                          eY++
                        )
                          r[ek[eY]] !== E && i(ek[eY], E);
                      }
                  }
                  if (a.get(T) || a.get(_) || a.get(R))
                    for (var eQ = 0; eQ < ek.length; eQ++) {
                      var eJ = ek[eQ];
                      if (r[eJ] & (T | _ | R)) {
                        i(eJ, U);
                        for (var eK = eQ - 1; eK >= 0 && r[ek[eK]] & f; eK--)
                          i(ek[eK], U);
                        for (
                          var e1 = eQ + 1;
                          e1 < ek.length && r[ek[e1]] & f;
                          e1++
                        )
                          i(ek[e1], U);
                      }
                    }
                  if (a.get(E))
                    for (var e0 = 0, e2 = eU; e0 < ek.length; e0++) {
                      var e3 = ek[e0],
                        e5 = r[e3];
                      e5 & E ? e2 === x && i(e3, x) : e5 & u && (e2 = e5);
                    }
                  if (a.get(c)) {
                    for (
                      var e4 = M | E | S, e6 = e4 | x, e8 = [], e7 = [], e9 = 0;
                      e9 < ek.length;
                      e9++
                    )
                      if (r[ek[e9]] & c) {
                        var te = e[ek[e9]],
                          tt = void 0;
                        if (null !== y(te)) {
                          if (e7.length < 63)
                            e7.push({ char: te, seqIndex: e9 });
                          else break;
                        } else if (null !== (tt = w(te)))
                          for (var tr = e7.length - 1; tr >= 0; tr--) {
                            var tn = e7[tr].char;
                            if (
                              tn === tt ||
                              tn === w(b(te)) ||
                              y(b(tn)) === te
                            ) {
                              e8.push([e7[tr].seqIndex, e9]), (e7.length = tr);
                              break;
                            }
                          }
                      }
                    e8.sort(function (e, t) {
                      return e[0] - t[0];
                    });
                    for (var ta = 0; ta < e8.length; ta++) {
                      for (
                        var ti = e8[ta],
                          to = ti[0],
                          tl = ti[1],
                          ts = !1,
                          tu = 0,
                          tc = to + 1;
                        tc < tl;
                        tc++
                      ) {
                        var tf = ek[tc];
                        if (r[tf] & e6) {
                          ts = !0;
                          var td = r[tf] & e4 ? M : x;
                          if (td === eF) {
                            tu = td;
                            break;
                          }
                        }
                      }
                      if (ts && !tu) {
                        tu = eU;
                        for (var th = to - 1; th >= 0; th--) {
                          var tp = ek[th];
                          if (r[tp] & e6) {
                            var tv = r[tp] & e4 ? M : x;
                            tu = tv !== eF ? tv : eF;
                            break;
                          }
                        }
                      }
                      if (tu) {
                        if (((r[ek[to]] = r[ek[tl]] = tu), tu !== eF)) {
                          for (var tg = to + 1; tg < ek.length; tg++)
                            if (!(r[ek[tg]] & f)) {
                              p(e[ek[tg]]) & F && (r[ek[tg]] = tu);
                              break;
                            }
                        }
                        if (tu !== eF) {
                          for (var tm = tl + 1; tm < ek.length; tm++)
                            if (!(r[ek[tm]] & f)) {
                              p(e[ek[tm]]) & F && (r[ek[tm]] = tu);
                              break;
                            }
                        }
                      }
                    }
                    for (var ty = 0; ty < ek.length; ty++)
                      if (r[ek[ty]] & c) {
                        for (
                          var tw = ty, tb = ty, tx = eU, tM = ty - 1;
                          tM >= 0;
                          tM--
                        )
                          if (r[ek[tM]] & f) tw = tM;
                          else {
                            tx = r[ek[tM]] & e4 ? M : x;
                            break;
                          }
                        for (var tE = eI, t_ = ty + 1; t_ < ek.length; t_++)
                          if (r[ek[t_]] & (c | f)) tb = t_;
                          else {
                            tE = r[ek[t_]] & e4 ? M : x;
                            break;
                          }
                        for (var tT = tw; tT <= tb; tT++)
                          r[ek[tT]] = tx === tE ? tx : eF;
                        ty = tb;
                      }
                  }
                }
                for (var tS = v.start; tS <= v.end; tS++) {
                  var tR = o[tS],
                    tA = r[tS];
                  if (
                    (1 & tR
                      ? tA & (x | E | S) && o[tS]++
                      : tA & M
                      ? o[tS]++
                      : tA & (S | E) && (o[tS] += 2),
                    tA & f && (o[tS] = 0 === tS ? v.level : o[tS - 1]),
                    tS === v.end || p(e[tS]) & (k | A))
                  )
                    for (var tk = tS; tk >= 0 && p(e[tk]) & d; tk--)
                      o[tk] = v.level;
                }
              }
              return { levels: o, paragraphs: h };
              function tU(t, n) {
                for (var a = t; a < e.length; a++) {
                  var i = r[a];
                  if (i & (M | C)) return 1;
                  if (i & (A | x) || (n && i === z)) break;
                  if (i & s) {
                    var o = (function (t) {
                      for (var n = 1, a = t + 1; a < e.length; a++) {
                        var i = r[a];
                        if (i & A) break;
                        if (i & z) {
                          if (0 == --n) return a;
                        } else i & s && n++;
                      }
                      return -1;
                    })(a);
                    a = -1 === o ? e.length : o;
                  }
                }
                return 0;
              }
            }),
            (e.getMirroredCharacter = H),
            (e.getMirroredCharactersMap = function (e, t, r, n) {
              var a = e.length;
              (r = Math.max(0, null == r ? 0 : +r)),
                (n = Math.min(a - 1, null == n ? a - 1 : +n));
              for (var i = new Map(), o = r; o <= n; o++)
                if (1 & t[o]) {
                  var l = H(e[o]);
                  null !== l && i.set(o, l);
                }
              return i;
            }),
            (e.getReorderSegments = G),
            (e.getReorderedIndices = V),
            (e.getReorderedString = function (e, t, r, n) {
              var a = V(e, t, r, n),
                i = [].concat(e);
              return (
                a.forEach(function (r, n) {
                  i[n] = (1 & t.levels[r] ? H(e[r]) : null) || e[r];
                }),
                i.join("")
              );
            }),
            (e.openingToClosingBracket = y),
            Object.defineProperty(e, "__esModule", { value: !0 }),
            e
          );
        })({});
      };
    },
    3502: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      function n() {
        return (function (e) {
          function t(e, t) {
            for (
              var r, n, a, i, o, l = /([MLQCZ])([^MLQCZ]*)/g;
              (r = l.exec(e));

            ) {
              var s = r[2]
                .replace(/^\s*|\s*$/g, "")
                .split(/[,\s]+/)
                .map(function (e) {
                  return parseFloat(e);
                });
              switch (r[1]) {
                case "M":
                  (i = n = s[0]), (o = a = s[1]);
                  break;
                case "L":
                  (s[0] !== i || s[1] !== o) &&
                    t("L", i, o, (i = s[0]), (o = s[1]));
                  break;
                case "Q":
                  t("Q", i, o, (i = s[2]), (o = s[3]), s[0], s[1]);
                  break;
                case "C":
                  t("C", i, o, (i = s[4]), (o = s[5]), s[0], s[1], s[2], s[3]);
                  break;
                case "Z":
                  (i !== n || o !== a) && t("L", i, o, n, a);
              }
            }
          }
          function r(e, r, n) {
            void 0 === n && (n = 16);
            var a = { x: 0, y: 0 };
            t(e, function (e, t, i, o, l, s, u, c, f) {
              switch (e) {
                case "L":
                  r(t, i, o, l);
                  break;
                case "Q":
                  for (var d = t, h = i, p = 1; p < n; p++)
                    !(function (e, t, r, n, a, i, o, l) {
                      var s = 1 - o;
                      (l.x = s * s * e + 2 * s * o * r + o * o * a),
                        (l.y = s * s * t + 2 * s * o * n + o * o * i);
                    })(t, i, s, u, o, l, p / (n - 1), a),
                      r(d, h, a.x, a.y),
                      (d = a.x),
                      (h = a.y);
                  break;
                case "C":
                  for (var v = t, g = i, m = 1; m < n; m++)
                    !(function (e, t, r, n, a, i, o, l, s, u) {
                      var c = 1 - s;
                      (u.x =
                        c * c * c * e +
                        3 * c * c * s * r +
                        3 * c * s * s * a +
                        s * s * s * o),
                        (u.y =
                          c * c * c * t +
                          3 * c * c * s * n +
                          3 * c * s * s * i +
                          s * s * s * l);
                    })(t, i, s, u, c, f, o, l, m / (n - 1), a),
                      r(v, g, a.x, a.y),
                      (v = a.x),
                      (g = a.y);
              }
            });
          }
          var n =
              "precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",
            a = new WeakMap(),
            i = {
              premultipliedAlpha: !1,
              preserveDrawingBuffer: !0,
              antialias: !1,
              depth: !1,
            };
          function o(e, t) {
            var r = e.getContext ? e.getContext("webgl", i) : e,
              n = a.get(r);
            if (!n) {
              var o =
                  "undefined" != typeof WebGL2RenderingContext &&
                  r instanceof WebGL2RenderingContext,
                l = {},
                s = {},
                u = {},
                c = -1,
                f = [];
              function d(e) {
                var t = l[e];
                if (!t && !(t = l[e] = r.getExtension(e)))
                  throw Error(e + " not supported");
                return t;
              }
              function h(e, t) {
                var n = r.createShader(t);
                return r.shaderSource(n, e), r.compileShader(n), n;
              }
              function p() {
                (l = {}), (s = {}), (u = {}), (c = -1), (f.length = 0);
              }
              r.canvas.addEventListener(
                "webglcontextlost",
                function (e) {
                  p(), e.preventDefault();
                },
                !1
              ),
                a.set(
                  r,
                  (n = {
                    gl: r,
                    isWebGL2: o,
                    getExtension: d,
                    withProgram: function (e, t, n, a) {
                      if (!s[e]) {
                        var i = {},
                          l = {},
                          u = r.createProgram();
                        r.attachShader(u, h(t, r.VERTEX_SHADER)),
                          r.attachShader(u, h(n, r.FRAGMENT_SHADER)),
                          r.linkProgram(u),
                          (s[e] = {
                            program: u,
                            transaction: function (e) {
                              r.useProgram(u),
                                e({
                                  setUniform: function (e, t) {
                                    for (
                                      var n = [], a = arguments.length - 2;
                                      a-- > 0;

                                    )
                                      n[a] = arguments[a + 2];
                                    var i =
                                      l[t] ||
                                      (l[t] = r.getUniformLocation(u, t));
                                    r["uniform" + e].apply(r, [i].concat(n));
                                  },
                                  setAttribute: function (e, t, n, a, l) {
                                    var s = i[e];
                                    s ||
                                      (s = i[e] =
                                        {
                                          buf: r.createBuffer(),
                                          loc: r.getAttribLocation(u, e),
                                          data: null,
                                        }),
                                      r.bindBuffer(r.ARRAY_BUFFER, s.buf),
                                      r.vertexAttribPointer(
                                        s.loc,
                                        t,
                                        r.FLOAT,
                                        !1,
                                        0,
                                        0
                                      ),
                                      r.enableVertexAttribArray(s.loc),
                                      o
                                        ? r.vertexAttribDivisor(s.loc, a)
                                        : d(
                                            "ANGLE_instanced_arrays"
                                          ).vertexAttribDivisorANGLE(s.loc, a),
                                      l !== s.data &&
                                        (r.bufferData(r.ARRAY_BUFFER, l, n),
                                        (s.data = l));
                                  },
                                });
                            },
                          });
                      }
                      s[e].transaction(a);
                    },
                    withTexture: function (e, t) {
                      c++;
                      try {
                        r.activeTexture(r.TEXTURE0 + c);
                        var n = u[e];
                        n ||
                          ((n = u[e] = r.createTexture()),
                          r.bindTexture(r.TEXTURE_2D, n),
                          r.texParameteri(
                            r.TEXTURE_2D,
                            r.TEXTURE_MIN_FILTER,
                            r.NEAREST
                          ),
                          r.texParameteri(
                            r.TEXTURE_2D,
                            r.TEXTURE_MAG_FILTER,
                            r.NEAREST
                          )),
                          r.bindTexture(r.TEXTURE_2D, n),
                          t(n, c);
                      } finally {
                        c--;
                      }
                    },
                    withTextureFramebuffer: function (e, t, n) {
                      var a = r.createFramebuffer();
                      f.push(a),
                        r.bindFramebuffer(r.FRAMEBUFFER, a),
                        r.activeTexture(r.TEXTURE0 + t),
                        r.bindTexture(r.TEXTURE_2D, e),
                        r.framebufferTexture2D(
                          r.FRAMEBUFFER,
                          r.COLOR_ATTACHMENT0,
                          r.TEXTURE_2D,
                          e,
                          0
                        );
                      try {
                        n(a);
                      } finally {
                        r.deleteFramebuffer(a),
                          r.bindFramebuffer(
                            r.FRAMEBUFFER,
                            f[--f.length - 1] || null
                          );
                      }
                    },
                    handleContextLoss: p,
                  })
                );
            }
            t(n);
          }
          function l(e, t, r, a, i, l, s, u) {
            void 0 === s && (s = 15),
              void 0 === u && (u = null),
              o(e, function (e) {
                var o = e.gl,
                  c = e.withProgram;
                (0, e.withTexture)("copy", function (e, f) {
                  o.texImage2D(
                    o.TEXTURE_2D,
                    0,
                    o.RGBA,
                    i,
                    l,
                    0,
                    o.RGBA,
                    o.UNSIGNED_BYTE,
                    t
                  ),
                    c(
                      "copy",
                      n,
                      "precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",
                      function (e) {
                        var t = e.setUniform;
                        (0, e.setAttribute)(
                          "aUV",
                          2,
                          o.STATIC_DRAW,
                          0,
                          new Float32Array([0, 0, 2, 0, 0, 2])
                        ),
                          t("1i", "image", f),
                          o.bindFramebuffer(o.FRAMEBUFFER, u || null),
                          o.disable(o.BLEND),
                          o.colorMask(8 & s, 4 & s, 2 & s, 1 & s),
                          o.viewport(r, a, i, l),
                          o.scissor(r, a, i, l),
                          o.drawArrays(o.TRIANGLES, 0, 3);
                      }
                    );
                });
              });
          }
          var s = Object.freeze({
            __proto__: null,
            withWebGLContext: o,
            renderImageData: l,
            resizeWebGLCanvasWithoutClearing: function (e, t, r) {
              var n = e.width,
                a = e.height;
              o(e, function (i) {
                var o = i.gl,
                  s = new Uint8Array(n * a * 4);
                o.readPixels(0, 0, n, a, o.RGBA, o.UNSIGNED_BYTE, s),
                  (e.width = t),
                  (e.height = r),
                  l(o, s, 0, 0, n, a);
              });
            },
          });
          function u(e, t, n, a, i, o) {
            void 0 === o && (o = 1);
            var l = new Uint8Array(e * t),
              s = a[2] - a[0],
              u = a[3] - a[1],
              c = [];
            r(n, function (e, t, r, n) {
              c.push({
                x1: e,
                y1: t,
                x2: r,
                y2: n,
                minX: Math.min(e, r),
                minY: Math.min(t, n),
                maxX: Math.max(e, r),
                maxY: Math.max(t, n),
              });
            }),
              c.sort(function (e, t) {
                return e.maxX - t.maxX;
              });
            for (var f = 0; f < e; f++)
              for (var d = 0; d < t; d++) {
                var h = (function (e, t) {
                    for (var r = 1 / 0, n = 1 / 0, a = c.length; a--; ) {
                      var i = c[a];
                      if (i.maxX + n <= e) break;
                      if (e + n > i.minX && t - n < i.maxY && t + n > i.minY) {
                        var o = (function (e, t, r, n, a, i) {
                          var o = a - r,
                            l = i - n,
                            s = o * o + l * l,
                            u = s
                              ? Math.max(
                                  0,
                                  Math.min(1, ((e - r) * o + (t - n) * l) / s)
                                )
                              : 0,
                            c = e - (r + u * o),
                            f = t - (n + u * l);
                          return c * c + f * f;
                        })(e, t, i.x1, i.y1, i.x2, i.y2);
                        o < r && (n = Math.sqrt((r = o)));
                      }
                    }
                    return (
                      (function (e, t) {
                        for (var r = 0, n = c.length; n--; ) {
                          var a = c[n];
                          if (a.maxX <= e) break;
                          a.y1 > t != a.y2 > t &&
                            e <
                              ((a.x2 - a.x1) * (t - a.y1)) / (a.y2 - a.y1) +
                                a.x1 &&
                            (r += a.y1 < a.y2 ? 1 : -1);
                        }
                        return 0 !== r;
                      })(e, t) && (n = -n),
                      n
                    );
                  })(a[0] + (s * (f + 0.5)) / e, a[1] + (u * (d + 0.5)) / t),
                  p = Math.pow(1 - Math.abs(h) / i, o) / 2;
                h < 0 && (p = 1 - p),
                  (p = Math.max(0, Math.min(255, Math.round(255 * p)))),
                  (l[d * e + f] = p);
              }
            return l;
          }
          function c(e, t, r, n, a, i, o, l, s, u) {
            void 0 === i && (i = 1),
              void 0 === l && (l = 0),
              void 0 === s && (s = 0),
              void 0 === u && (u = 0),
              f(e, t, r, n, a, i, o, null, l, s, u);
          }
          function f(e, t, r, n, a, i, o, s, c, f, d) {
            void 0 === i && (i = 1),
              void 0 === c && (c = 0),
              void 0 === f && (f = 0),
              void 0 === d && (d = 0);
            for (
              var h = u(e, t, r, n, a, i),
                p = new Uint8Array(4 * h.length),
                v = 0;
              v < h.length;
              v++
            )
              p[4 * v + d] = h[v];
            l(o, p, c, f, e, t, 1 << (3 - d), s);
          }
          var d = Object.freeze({
              __proto__: null,
              generate: u,
              generateIntoCanvas: c,
              generateIntoFramebuffer: f,
            }),
            h = new Float32Array([0, 0, 2, 0, 0, 2]),
            p = null,
            v = !1,
            g = {},
            m = new WeakMap();
          function y(e) {
            if (!v && !M(e)) throw Error("WebGL generation not supported");
          }
          function w(e, t, r, n, a, i, l) {
            if (
              (void 0 === i && (i = 1),
              void 0 === l && (l = null),
              !l && !(l = p))
            ) {
              var s =
                "function" == typeof OffscreenCanvas
                  ? new OffscreenCanvas(1, 1)
                  : "undefined" != typeof document
                  ? document.createElement("canvas")
                  : null;
              if (!s)
                throw Error("OffscreenCanvas or DOM canvas not supported");
              l = p = s.getContext("webgl", { depth: !1 });
            }
            y(l);
            var u = new Uint8Array(e * t * 4);
            o(l, function (o) {
              var l = o.gl,
                s = o.withTexture,
                c = o.withTextureFramebuffer;
              s("readable", function (o, s) {
                l.texImage2D(
                  l.TEXTURE_2D,
                  0,
                  l.RGBA,
                  e,
                  t,
                  0,
                  l.RGBA,
                  l.UNSIGNED_BYTE,
                  null
                ),
                  c(o, s, function (o) {
                    x(e, t, r, n, a, i, l, o, 0, 0, 0),
                      l.readPixels(0, 0, e, t, l.RGBA, l.UNSIGNED_BYTE, u);
                  });
              });
            });
            for (
              var c = new Uint8Array(e * t), f = 0, d = 0;
              f < u.length;
              f += 4
            )
              c[d++] = u[f];
            return c;
          }
          function b(e, t, r, n, a, i, o, l, s, u) {
            void 0 === i && (i = 1),
              void 0 === l && (l = 0),
              void 0 === s && (s = 0),
              void 0 === u && (u = 0),
              x(e, t, r, n, a, i, o, null, l, s, u);
          }
          function x(e, t, a, i, l, s, u, c, f, d, p) {
            void 0 === s && (s = 1),
              void 0 === f && (f = 0),
              void 0 === d && (d = 0),
              void 0 === p && (p = 0),
              y(u);
            var v = [];
            r(a, function (e, t, r, n) {
              v.push(e, t, r, n);
            }),
              (v = new Float32Array(v)),
              o(u, function (r) {
                var a = r.gl,
                  o = r.isWebGL2,
                  u = r.getExtension,
                  g = r.withProgram,
                  m = r.withTexture,
                  y = r.withTextureFramebuffer,
                  w = r.handleContextLoss;
                if (
                  (m("rawDistances", function (r, m) {
                    (e !== r._lastWidth || t !== r._lastHeight) &&
                      a.texImage2D(
                        a.TEXTURE_2D,
                        0,
                        a.RGBA,
                        (r._lastWidth = e),
                        (r._lastHeight = t),
                        0,
                        a.RGBA,
                        a.UNSIGNED_BYTE,
                        null
                      ),
                      g(
                        "main",
                        "precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",
                        "precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",
                        function (n) {
                          var c = n.setAttribute,
                            f = n.setUniform,
                            d = !o && u("ANGLE_instanced_arrays"),
                            p = !o && u("EXT_blend_minmax");
                          c("aUV", 2, a.STATIC_DRAW, 0, h),
                            c("aLineSegment", 4, a.DYNAMIC_DRAW, 1, v),
                            f.apply(void 0, ["4f", "uGlyphBounds"].concat(i)),
                            f("1f", "uMaxDistance", l),
                            f("1f", "uExponent", s),
                            y(r, m, function (r) {
                              a.enable(a.BLEND),
                                a.colorMask(!0, !0, !0, !0),
                                a.viewport(0, 0, e, t),
                                a.scissor(0, 0, e, t),
                                a.blendFunc(a.ONE, a.ONE),
                                a.blendEquationSeparate(
                                  a.FUNC_ADD,
                                  o ? a.MAX : p.MAX_EXT
                                ),
                                a.clear(a.COLOR_BUFFER_BIT),
                                o
                                  ? a.drawArraysInstanced(
                                      a.TRIANGLES,
                                      0,
                                      3,
                                      v.length / 4
                                    )
                                  : d.drawArraysInstancedANGLE(
                                      a.TRIANGLES,
                                      0,
                                      3,
                                      v.length / 4
                                    );
                            });
                        }
                      ),
                      g(
                        "post",
                        n,
                        "precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",
                        function (r) {
                          r.setAttribute("aUV", 2, a.STATIC_DRAW, 0, h),
                            r.setUniform("1i", "tex", m),
                            a.bindFramebuffer(a.FRAMEBUFFER, c),
                            a.disable(a.BLEND),
                            a.colorMask(0 === p, 1 === p, 2 === p, 3 === p),
                            a.viewport(f, d, e, t),
                            a.scissor(f, d, e, t),
                            a.drawArrays(a.TRIANGLES, 0, 3);
                        }
                      );
                  }),
                  a.isContextLost())
                )
                  throw (w(), Error("webgl context lost"));
              });
          }
          function M(e) {
            var t = e && e !== p ? e.canvas || e : g,
              r = m.get(t);
            if (void 0 === r) {
              v = !0;
              var n = null;
              try {
                var a = [
                    97, 106, 97, 61, 99, 137, 118, 80, 80, 118, 137, 99, 61, 97,
                    106, 97,
                  ],
                  i = w(
                    4,
                    4,
                    "M8,8L16,8L24,24L16,24Z",
                    [0, 0, 32, 32],
                    24,
                    1,
                    e
                  );
                (r =
                  i &&
                  a.length === i.length &&
                  i.every(function (e, t) {
                    return e === a[t];
                  })) || ((n = "bad trial run results"), console.info(a, i));
              } catch (e) {
                (r = !1), (n = e.message);
              }
              n && console.warn("WebGL SDF generation not supported:", n),
                (v = !1),
                m.set(t, r);
            }
            return r;
          }
          var E = Object.freeze({
            __proto__: null,
            generate: w,
            generateIntoCanvas: b,
            generateIntoFramebuffer: x,
            isSupported: M,
          });
          return (
            (e.forEachPathCommand = t),
            (e.generate = function (e, t, r, n, a, i) {
              void 0 === a && (a = Math.max(n[2] - n[0], n[3] - n[1]) / 2),
                void 0 === i && (i = 1);
              try {
                return w.apply(E, arguments);
              } catch (e) {
                return (
                  console.info(
                    "WebGL SDF generation failed, falling back to JS",
                    e
                  ),
                  u.apply(d, arguments)
                );
              }
            }),
            (e.generateIntoCanvas = function (e, t, r, n, a, i, o, l, s, u) {
              void 0 === a && (a = Math.max(n[2] - n[0], n[3] - n[1]) / 2),
                void 0 === i && (i = 1),
                void 0 === l && (l = 0),
                void 0 === s && (s = 0),
                void 0 === u && (u = 0);
              try {
                return b.apply(E, arguments);
              } catch (e) {
                return (
                  console.info(
                    "WebGL SDF generation failed, falling back to JS",
                    e
                  ),
                  c.apply(d, arguments)
                );
              }
            }),
            (e.javascript = d),
            (e.pathToLineSegments = r),
            (e.webgl = E),
            (e.webglUtils = s),
            Object.defineProperty(e, "__esModule", { value: !0 }),
            e
          );
        })({});
      }
    },
  },
]);
