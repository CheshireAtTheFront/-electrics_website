(()=>{"use strict";const t=({timing:t,draw:e,duration:a})=>{const l=performance.now();requestAnimationFrame((function o(n){let s=(n-l)/a;s>=1&&(s=1);const i=t(s);e(i),s<1&&requestAnimationFrame(o)}))};(()=>{const e=document.querySelector(".modal-overlay"),a=e.querySelector(".modal-callback");document.addEventListener("click",(l=>{l.preventDefault(),l.target.closest(".fancyboxModal")&&(e.style.display="block",t({duration:500,timing:t=>t,draw(t){e.style.opacity=t,a.style.left=50*t+"%",a.style.right=""}}))})),e.addEventListener("click",(l=>{(l.target.closest(".modal-close")||l.target.classList.contains("modal-overlay"))&&t({duration:500,timing:t=>t,draw(t){e.style.opacity=1-t,a.style.right=-50*t+"%",a.style.left="",e.style.opacity<=0&&(e.style.display="none")}})}))})()})();
