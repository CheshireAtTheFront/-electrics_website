(()=>{"use strict";const e=({timing:e,draw:t,duration:o})=>{const n=performance.now();requestAnimationFrame((function l(r){let c=(r-n)/o;c>=1&&(c=1);const s=e(c);t(s),c<1&&requestAnimationFrame(l)}))};(()=>{const t=document.querySelector(".modal-overlay"),o=t.querySelector(".modal-callback");document.addEventListener("click",(n=>{n.target.closest(".fancyboxModal")&&(t.style.display="block",e({duration:500,timing:e=>e,draw(e){t.style.opacity=e,o.style.left=50*e+"%",o.style.right=""}}))})),t.addEventListener("click",(n=>{(n.target.closest(".modal-close")||n.target.classList.contains("modal-overlay"))&&e({duration:500,timing:e=>e,draw(e){t.style.opacity=1-e,o.style.right=-50*e+"%",o.style.left="",t.style.opacity<=0&&(t.style.display="none")}})}))})(),(()=>{const e=document.querySelector(".top-menu").querySelectorAll("a[href^='#']");for(let t of e)t.addEventListener("click",(e=>{e.preventDefault();const o=t.getAttribute("href");document.querySelector(o).scrollIntoView({behavior:"smooth",block:"start"})}))})(),(()=>{const e=document.querySelector(".top-slider").querySelectorAll(".item");let t=0;setInterval((()=>{e[t].style.display="none",t++,t>=e.length&&(t=0),e[t].style.display="block"}),3e3)})(),(()=>{const e=document.querySelector(".up"),t=()=>{e.style.display="none"};window.addEventListener("scroll",(()=>{(window.scrollY||document.documentElement.scrollTop)>120?e.style.display="block":t()})),document.querySelector(".up").addEventListener("click",(()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})})),t()})(),(()=>{const e=document.querySelector(".accordeon"),t=e.querySelectorAll(".element");e.addEventListener("click",(e=>{t.forEach((t=>{e.target===t.querySelector(".title")?(t.classList.toggle("active"),t.matches(".active")?t.querySelector(".element-content").style.display="block":t.querySelector(".element-content").style.display="none"):(t.classList.remove("active"),t.querySelector(".element-content").style.display="none")}))}))})(),(()=>{const e=document.querySelectorAll(".service"),t=document.querySelector(".arrow-right"),o=document.querySelector(".arrow-left");let n,l=0;n=window.outerWidth<570?1:window.outerWidth<870&&window.outerWidth>570?2:3,e.forEach((e=>{l<n?l++:e.classList.add("d-none")})),l=0,o.addEventListener("click",(()=>{l>0&&(l-=1,n-=1,e[l].classList.remove("d-none"),e[n].classList.add("d-none"))})),t.addEventListener("click",(()=>{n<e.length&&(e[l++].classList.add("d-none"),e[n++].classList.remove("d-none"))}))})(),(()=>{const e=document.querySelector("form"),t=document.createElement("div");e.addEventListener("submit",(o=>{o.preventDefault(),(()=>{const o=e.querySelectorAll(".form-control"),n=new FormData(e),l={};var r;t.textContent="Загрузка...",e.append(t),n.forEach(((e,t)=>{l[t]=e})),(e=>{let t=!0;return e.forEach((e=>{switch(e.name){case"fio":/[а-яА-Я\s]/g.test(e.value)?e.style.border="none":(e.style.border="1.5px solid red",t=!1);break;case"tel":/[^+()-\d]/g.test(e.value)?(e.style.border="1.5px solid red",t=!1):e.style.border="none"}})),t})(o)?(r=l,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((e=>{t.textContent="Спасибо! Наш менеджер с Вами свяжется",setTimeout((()=>{t.textContent=""}),3e3),o.forEach((e=>{e.value=""}))})).catch((e=>{t.textContent="Ошибка..."})):t.textContent="Данные не валидны!!!"})()}))})()})();