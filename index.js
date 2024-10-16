import{S as P,N as C,P as q,K as N,a as O,i as A,A as R}from"./assets/vendor-BFlcYqFY.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function a(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=a(s);fetch(s.href,o)}})();const f=document.getElementById("contactForm"),v=document.getElementById("email"),I=document.querySelector(".error-message");f.addEventListener("submit",function(e){e.preventDefault();const t={email:document.getElementById("email").value,comment:document.getElementById("message").value};fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(a=>{if(!a.ok)throw new Error(`HTTP error! Status: ${a.status}`);return a.json()}).then(a=>{a.title&&a.message?(document.querySelector("#successPopup h3").textContent=a.title,document.querySelector("#successPopup p").textContent=a.message,document.getElementById("successPopup").style.display="flex",f.reset()):document.getElementById("errorPopup").style.display="flex"}).catch(a=>{console.error("Error:",a),document.getElementById("errorPopup").style.display="flex",document.getElementById("email").value=t.email,document.getElementById("message").value=t.comment})});document.querySelectorAll(".close-btn").forEach(e=>{e.addEventListener("click",function(){e.closest(".popup").style.display="none"})});document.querySelectorAll(".popup").forEach(e=>{e.addEventListener("click",function(t){t.target===e&&(e.style.display="none")})});document.addEventListener("keydown",function(e){e.key==="Escape"&&document.querySelectorAll(".popup").forEach(t=>{t.style.display="none"})});v.addEventListener("input",function(){v.validity.valid?I.style.display="none":I.style.display="block"});document.addEventListener("DOMContentLoaded",J);const n={swiper:document.querySelector(".reviews-container"),swiperNext:document.querySelector(".review-button-next"),swiperPrev:document.querySelector(".review-button-prev"),reviewsList:document.querySelector(".reviews-list")},l=new P(n.swiper,{grabCursor:!0,direction:"horizontal",autoplay:{delay:1e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},slidesPerView:1,spaceBetween:16,breakpoints:{768:{slidesPerView:1},1280:{slidesPerView:2,spaceBetween:32}},modules:[C,q,N],navigation:{nextEl:n.swiperNext,prevEl:n.swiperPrev},keyboard:{enabled:!0,onlyInViewport:!0}});async function V(){const e=await O.get("https://portfolio-js.b.goit.study/api/reviews");if(e.status!==200)throw new Error(`Request failed with status ${e.status}`);return e.data}let T=!1;async function J(){try{const t=(await V()).map(({author:a,avatar_url:r,review:s})=>`<li class="reviews-list-item swiper-slide" id="style-15">
                    <p class="reviews-text">${s}</p>
                    <div class="reviewer-info">
                        <img class="reviewers-avatar" src="${r}" alt=" ${a}'s photo" loading="lazy" />
                        <h3 class="reviewers-name">${a}</h3>
                    </div>
                </li>`).join("");console.dir(l.params.breakpoints),n.reviewsList.insertAdjacentHTML("beforeend",t)}catch(e){T=!0,l.params.breakpoints[1280].slidesPerView=1,l.params.breakpoints[1280].spaceBetween=16,l.update(),console.dir(l.params.breakpoints),n.reviewsList.insertAdjacentHTML("beforeend",'<li class="error-mock"><p>We could not find what you are looking for.</p></li>'),console.error("Error fetching or rendering reviews:",e)}}function G(){T&&A.error({message:"No reviews were found! Please try again later.",position:"bottomRight"})}const z=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&G()})});z.observe(n.swiper);const H=()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),a=document.querySelector(".js-close-menu"),r=()=>{const c=e.querySelectorAll('a[href*="#"]'),p=t.getAttribute("aria-expanded")==="true"||!1;if(t.setAttribute("aria-expanded",!p),e.classList.toggle("is-open"),c.length!==0){if(!p){c.forEach(m=>{m.addEventListener("click",r)});return}c.forEach(m=>{m.removeEventListener("click",r)})}};t.addEventListener("click",r),a.addEventListener("click",r),window.matchMedia("(min-width: 375px)").addEventListener("change",c=>{c.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1))});const s=document.getElementById("switch"),o=document.getElementById("favicon");s.addEventListener("change",()=>{document.body.classList.toggle("dark-theme"),document.body.classList.contains("dark-theme")?(localStorage.setItem("theme","dark"),o.href="/js-project-team-10/favicon-dark.ico"):(localStorage.setItem("theme","light"),o.href="/js-project-team-10/favicon.ico")}),localStorage.getItem("theme")==="dark"?(document.body.classList.add("dark-theme"),s.checked=!0,o.href="/js-project-team-10/favicon-dark.ico"):o.href="/js-project-team-10/favicon.ico"};document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".js-open-menu"),t=document.querySelector(".js-close-menu"),a=document.getElementById("mobile-menu"),r=document.querySelectorAll(".header-mobile-link");e.addEventListener("click",function(){a.classList.add("active"),e.setAttribute("aria-expanded","true")}),t.addEventListener("click",function(){a.classList.remove("active"),e.setAttribute("aria-expanded","false")}),r.forEach(s=>{s.addEventListener("click",function(){a.classList.remove("active"),e.setAttribute("aria-expanded","false")})}),document.addEventListener("click",function(s){!a.contains(s.target)&&!e.contains(s.target)&&(a.classList.remove("active"),e.setAttribute("aria-expanded","false"))})});new R(".faq-ac-container",{openOnInit:[0],collapse:!0,elementClass:"faq-ac",triggerClass:"faq-ac-trigger",panelClass:"faq-ac-panel"});const i="/js-project-team-10/assets/icons-B8RZkLtE.svg",d="/js-project-team-10/assets/my-project-4-mob_1x-CaZrrZ4L.webp",_="/js-project-team-10/assets/my-project-4-mob_2x-Dsi_fBJN.webp",W="/js-project-team-10/assets/my-project-4-tab_1x-Bm4HUelK.webp",F="/js-project-team-10/assets/my-project-4-tab_2x-C_rSt4TV.webp",Y="/js-project-team-10/assets/my-project-4-desk_1x-B_EbEvoG.webp",K="/js-project-team-10/assets/my-project-4-desk_2x-CT56BrZF.webp",u="/js-project-team-10/assets/my-project-5-mob_1x-C-FqkT_n.webp",k="/js-project-team-10/assets/my-project-5-mob_2x-D_lBFHrP.webp",Z="/js-project-team-10/assets/my-project-5-tab_1x-DY1MIwHu.webp",U="/js-project-team-10/assets/my-project-5-tab_2x-CA6TLo5f.webp",X="/js-project-team-10/assets/my-project-5-desk_1x-D8ZaSk76.webp",Q="/js-project-team-10/assets/my-project-5-desk_2x-Byw1lDZs.webp",h="/js-project-team-10/assets/my-project-6-mob_1x-BKMi80tp.webp",E="/js-project-team-10/assets/my-project-6-mob_2x-BZr_msEn.webp",ee="/js-project-team-10/assets/my-project-6-tab_1x-GgBQYr0M.webp",te="/js-project-team-10/assets/my-project-6-tab_2x-BXnbLvWP.webp",se="/js-project-team-10/assets/my-project-6-desk_1x-DCmBPE18.webp",ae="/js-project-team-10/assets/my-project-6-desk_2x--X3-j-ey.webp",g="/js-project-team-10/assets/my-project-7-mob_1x-0-0e4ZQT.webp",$="/js-project-team-10/assets/my-project-7-mob_2x-DwkD79fv.webp",oe="/js-project-team-10/assets/my-project-7-tab_1x-C84u-3nB.webp",re="/js-project-team-10/assets/my-project-7-tab_2x-DeSCEq0d.webp",ce="/js-project-team-10/assets/my-project-7-desk_1x-C8xhJxg1.webp",ie="/js-project-team-10/assets/my-project-7-desk_2x-CC_ezROz.webp",x="/js-project-team-10/assets/my-project-8-mob_1x-ByoW_oVT.webp",S="/js-project-team-10/assets/my-project-8-mob_2x-CaI7-QGM.webp",ne="/js-project-team-10/assets/my-project-8-tab_1x-DgB_lU8O.webp",pe="/js-project-team-10/assets/my-project-8-tab_2x-DeV4Xxri.webp",me="/js-project-team-10/assets/my-project-8-desk_1x-BBvz8kpI.webp",le="/js-project-team-10/assets/my-project-8-desk_2x-CPkKKTsW.webp",j="/js-project-team-10/assets/my-project-9-mob_1x-D-cVnVu7.webp",L="/js-project-team-10/assets/my-project-9-mob_2x-Dgq8Yv0C.webp",de="/js-project-team-10/assets/my-project-9-tab_1x-Vrq7X7tk.webp",ue="/js-project-team-10/assets/my-project-9-tab_2x-bNxU0I4l.webp",he="/js-project-team-10/assets/my-project-9-desk_1x-B6OWfVZ3.webp",ge="/js-project-team-10/assets/my-project-9-desk_2x-D8rB3lnd.webp",b="/js-project-team-10/assets/my-project-10-mob_1x-BdpK2UYi.webp",B="/js-project-team-10/assets/my-project-10-mob_2x-CjX_wIUa.webp",xe="/js-project-team-10/assets/my-project-10-tab_1x-BafFCe4R.webp",je="/js-project-team-10/assets/my-project-10-tab_2x-DJ587m_0.webp",be="/js-project-team-10/assets/my-project-10-desk_1x-Dh7zn3mI.webp",we="/js-project-team-10/assets/my-project-10-desk_2x-CkzGHwxJ.webp";document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".load-more"),t=document.querySelector(".project-list");let a=[`<li class="project-item">
  <picture>
    <source media="(min-width:1280px)" srcset="${Y} 1x, ${K} 2x" type="image/webp" />
    <source media="(min-width:768px)" srcset="${W} 1x, ${F} 2x" type="image/webp" />
    <source media="(min-width:320px)" srcset="${d} 1x, ${_} 2x" type="image/webp" />
    <img width: 1008px;
height: 580px src="${d}" srcset="${d} 1x, ${_} 2x" alt="Project 4" loading="lazy" class="project-img" />
  </picture>
          <p class="project-tech">React, JavaScript, Node JS, Git</p>
          <div class="tab-link-container">
            <h3 class="project-subtitle">ENERGY FLOW WEBSERVICE</h3>
            <a href="#" target="blank"
 class="project-btn">Visit 
              <span class="arrow">
              <svg class="highlight" width="24" height="24">
                  <use href="${i}#icon-arrow-up">
                  </use>
              </svg>
          </span></a>
          </div>
        </li>`,`<li class="project-item">
  <picture>
    <source media="(min-width:1280px)" srcset="${X} 1x, ${Q} 2x" type="image/webp" />
    <source media="(min-width:768px)" srcset="${Z} 1x, ${U} 2x" type="image/webp" />
    <source media="(min-width:320px)" srcset="${u} 1x, ${k} 2x" type="image/webp" />
    <img width: 1008px;
height: 580px; src="${u}" srcset="${u} 1x, ${k} 2x" alt="Project 5" loading="lazy"  class="project-img" />
  </picture>
<p class="project-tech">React, JavaScript, Node JS, Git</p>
          <div class="tab-link-container">
            <h3 class="project-subtitle">STARLIGHT STUDIO LANDING PAGE</h3>
            <a href="#" target="blank" class="project-btn">Visit 
              <span class="arrow">
              <svg width="24" height="24">
                  <use href="${i}#icon-arrow-up">
                  </use>
              </svg>
          </span></a>
          </div>
        </li>`,`<li class="project-item">
  <picture>
    <source media="(min-width:1280px)" srcset="${se} 1x, ${ae} 2x" type="image/webp" />
    <source media="(min-width:768px)" srcset="${ee} 1x, ${te} 2x" type="image/webp" />
    <source media="(min-width:320px)" srcset="${h} 1x, ${E} 2x" type="image/webp" />
    <img width: 1008px;
height: 580px; src="${h}" srcset="${h} 1x, ${E} 2x" alt="Project 6" loading="lazy" class="project-img" />
  </picture>
          <p class="project-tech">React, JavaScript, Node JS, Git</p>
          <div class="tab-link-container">
            <h3 class="project-subtitle">FRUITBOX ONLINE STORE</h3>
            <a href="#" target="blank" class="project-btn">Visit 
              <span class="arrow">
              <svg width="24" height="24">
                  <use href="${i}#icon-arrow-up">
                  </use>
              </svg>
          </span></a>
          </div>
        </li>`,`<li class="project-item">
  <picture>
    <source media="(min-width:1280px)" srcset="${ce} 1x, ${ie} 2x" type="image/webp" />
    <source media="(min-width:768px)" srcset="${oe} 1x, ${re} 2x" type="image/webp" />
    <source media="(min-width:320px)" srcset="${g} 1x, ${$} 2x" type="image/webp" />
    <img width: 1008px;
height: 580px; src="${g}" srcset="${g} 1x, ${$} 2x" alt="Project 7" loading="lazy" class="project-img" />
  </picture>
          <p class="project-tech">React, JavaScript, Node JS, Git</p>
          <div class="tab-link-container">
            <h3 class="project-subtitle">CHEGO JEWELRY WEBSITE</h3>
            <a href="#" target="blank" class="project-btn">Visit 
              <span class="arrow">
              <svg width="24" height="24">
                  <use href="${i}#icon-arrow-up">
                  </use>
              </svg>
          </span></a>
          </div>
        </li>`,`<li class="project-item">
  <picture>
    <source media="(min-width:1280px)" srcset="${me} 1x, ${le} 2x" type="image/webp" />
    <source media="(min-width:768px)" srcset="${ne} 1x, ${pe} 2x" type="image/webp" />
    <source media="(min-width:320px)" srcset="${x} 1x, ${S} 2x" type="image/webp" />
    <img width: 1008px;
height: 580px; src="${x}" srcset="${x} 1x, ${S} 2x" alt="Project 8" loading="lazy" class="project-img" />
  </picture>
          <p class="project-tech">React, JavaScript, Node JS, Git</p>
          <div class="tab-link-container">
            <h3 class="project-subtitle">MIMINO WEBSITE</h3>
            <a href="#" target="blank" class="project-btn">Visit 
              <span class="arrow">
              <svg width="24" height="24">
                  <use href="${i}#icon-arrow-up">
                  </use>
              </svg>
          </span></a>
          </div>
        </li>`,`<li class="project-item">
  <picture>
    <source media="(min-width:1280px)" srcset="${he} 1x, ${ge} 2x" type="image/webp" />
    <source media="(min-width:768px)" srcset="${de} 1x, ${ue} 2x" type="image/webp" />
    <source media="(min-width:320px)" srcset="${j} 1x, ${L} 2x" type="image/webp" />
    <img width: 1008px;
height: 580px src="${j}" srcset="${j} 1x, ${L} 2x" alt="Project 9" loading="lazy" class="project-img" />
  </picture>
          <p class="project-tech">React, JavaScript, Node JS, Git</p>
          <div class="tab-link-container">
            <h3 class="project-subtitle">VYSHYVANKA VIBES LANDING PAGE</h3>
            <a href="#" target="blank" class="project-btn">Visit 
              <span class="arrow">
              <svg width="24" height="24">
                  <use href="${i}#icon-arrow-up">
                  </use>
              </svg>
          </span></a>
          </div>
        </li>`,`<li class="project-item">
  <picture>
    <source media="(min-width:1280px)" srcset="${be} 1x, ${we} 2x" type="image/webp" />
    <source media="(min-width:768px)" srcset="${xe} 1x, ${je} 2x" type="image/webp" />
    <source media="(min-width:320px)" srcset="${b} 1x, ${B} 2x" type="image/webp" />
    <img width: 1008px;
height: 580px; src="${b}" srcset="${b} 1x, ${B} 2x" alt="Project 10" loading="lazy" class="project-img" />
  </picture>
          <p class="project-tech">React, JavaScript, Node JS, Git</p>
          <div class="tab-link-container">
            <h3 class="project-subtitle">POWER PULSE WEBSERVICE</h3>
            <a href="#" target="blank" class="project-btn">Visit 
              <span class="arrow">
              <svg width="24" height="24">
                  <use href="${i}#icon-arrow-up">
                  </use>
              </svg>
          </span></a>
          </div>
</li>`],r=0;e.addEventListener("click",s=>{s.preventDefault();const o=a.slice(r,r+3);if(o.length>0){t.children[t.children.length-1],o.forEach(m=>{const y=document.createElement("template");y.innerHTML=m.trim();const M=y.content.firstChild;t.appendChild(M)});const p=t.children[r].getBoundingClientRect().height;window.scrollBy(window.scrollBy(0,p*.5),{top:p,behavior:"smooth"}),r+=o.length}r>=a.length&&(e.style.display="none")})});const w=document.getElementById("backToTop");window.addEventListener("scroll",()=>{window.scrollY>window.innerHeight*.75?w.style.display="flex":w.style.display="none"});function D(){const t=window.scrollY;t>0&&(window.scrollTo(0,t-t*1),requestAnimationFrame(D))}w.addEventListener("click",D);H();
//# sourceMappingURL=index.js.map
