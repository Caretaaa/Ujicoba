import{_ as B}from"./preload-helper.BlTxHScW.js";import{j as C}from"./jsx-runtime.D_zvdyIk.js";import{r as w}from"./index.u1LLWZlj.js";function j(){const i=w.useRef(null);return w.useEffect(()=>{const t=i.current;if(!t)return;const x=window.matchMedia("(prefers-reduced-motion: reduce)").matches,y=window.matchMedia("(pointer: coarse)").matches;if(x||y)return;const c=navigator,_=c.deviceMemory??4,b=c.hardwareConcurrency??4;if(_<2||b<4)return;let l=!1,v;return B(()=>import("./three.module.DnTDVAL-.js"),[]).then(e=>{if(l||!t)return;let o=null;try{o=new e.WebGLRenderer({canvas:t,alpha:!0,antialias:!0})}catch{return}if(!o)return;const R=`
          varying vec2 vUv;
          void main() {
            vUv = position.xy * 0.5 + 0.5;
            gl_Position = vec4(position.xy, 0.0, 1.0);
          }
        `,A=`
          uniform float uTime;
          uniform vec2 uRes;
          varying vec2 vUv;
          void main() {
            vec2 asp = vec2(uRes.x / uRes.y, 1.0);
            vec2 p = vUv * asp;
            vec3 teal = vec3(0.07, 0.42, 0.38);
            vec3 tealBright = vec3(0.06, 0.72, 0.62);
            vec3 mint = vec3(0.56, 0.84, 0.75);
            float t = uTime * 0.12;
            vec2 b1 = vec2(0.72, 0.30) + vec2(sin(t), cos(t * 1.3)) * 0.04;
            vec2 b2 = vec2(0.15, 0.82) + vec2(cos(t * 0.8), sin(t * 1.1)) * 0.05;
            float d1 = length((p - b1 * asp) * vec2(1.0, 1.5));
            float d2 = length((p - b2 * asp) * vec2(1.5, 1.0));
            float g1 = 1.0 - smoothstep(0.0, 1.35, d1);
            float g2 = 1.0 - smoothstep(0.0, 1.05, d2);
            vec3 col = vec3(0.965, 0.984, 0.98);
            col = mix(col, teal, 0.30 * g1);
            col = mix(col, tealBright, 0.22 * g2);
            col = mix(col, mint, 0.20 * (g1 * g2) * 2.0);
            gl_FragColor = vec4(col, 0.85);
          }
        `,u=new e.Scene,m=new e.OrthographicCamera(-1,1,1,-1,0,1),n=new e.BufferGeometry;n.setAttribute("position",new e.BufferAttribute(new Float32Array([-1,-1,3,-1,-1,3]),2));const d=new e.ShaderMaterial({vertexShader:R,fragmentShader:A,uniforms:{uTime:{value:0},uRes:{value:[1,1]}},transparent:!0,depthWrite:!1}),M=new e.Mesh(n,d);u.add(M),m.position.z=1;const r=o,a=d,z=n,P=performance.now();let f=0;const s=()=>{const{clientWidth:h,clientHeight:g}=t,S=Math.min(window.devicePixelRatio||1,2);r.setSize(h,g,!1),r.setPixelRatio(S),a.uniforms.uRes.value=[h,g]},p=()=>{f=requestAnimationFrame(p),a.uniforms.uTime.value=(performance.now()-P)/1e3,r.render(u,m)};s(),window.addEventListener("resize",s),p(),v=()=>{cancelAnimationFrame(f),window.removeEventListener("resize",s),a.dispose(),z.dispose(),r.dispose()}}).catch(()=>{}),()=>{l=!0,v?.()}},[]),C.jsx("canvas",{ref:i,"aria-hidden":"true",className:"pointer-events-none absolute inset-0 h-full w-full opacity-80"})}export{j as default};
