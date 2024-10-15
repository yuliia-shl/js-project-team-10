import{S as D,N as M,P as T,K as C,a as P,i as N,A as q}from"./assets/vendor-BFlcYqFY.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function a(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=a(s);fetch(s.href,r)}})();const j=document.getElementById("contactForm"),w=document.getElementById("email"),y=document.querySelector(".error-message");j.addEventListener("submit",function(e){e.preventDefault();const t={email:document.getElementById("email").value,comment:document.getElementById("message").value};fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(a=>{if(!a.ok)throw new Error(`HTTP error! Status: ${a.status}`);return a.json()}).then(a=>{a.title&&a.message?(document.querySelector("#successPopup h3").textContent=a.title,document.querySelector("#successPopup p").textContent=a.message,document.getElementById("successPopup").style.display="flex",j.reset()):document.getElementById("errorPopup").style.display="flex"}).catch(a=>{console.error("Error:",a),document.getElementById("errorPopup").style.display="flex",document.getElementById("email").value=t.email,document.getElementById("message").value=t.comment})});document.querySelectorAll(".close-btn").forEach(e=>{e.addEventListener("click",function(){e.closest(".popup").style.display="none"})});document.querySelectorAll(".popup").forEach(e=>{e.addEventListener("click",function(t){t.target===e&&(e.style.display="none")})});document.addEventListener("keydown",function(e){e.key==="Escape"&&document.querySelectorAll(".popup").forEach(t=>{t.style.display="none"})});w.addEventListener("input",function(){w.validity.valid?y.style.display="none":y.style.display="block"});document.addEventListener("DOMContentLoaded",A);const n={swiper:document.querySelector(".reviews-container"),swiperNext:document.querySelector(".review-button-next"),swiperPrev:document.querySelector(".review-button-prev"),reviewsList:document.querySelector(".reviews-list")};new D(n.swiper,{grabCursor:!0,direction:"horizontal",autoplay:{delay:1e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},slidesPerView:1,spaceBetween:16,breakpoints:{768:{slidesPerView:1},1280:{slidesPerView:2,spaceBetween:32}},modules:[M,T,C],navigation:{nextEl:n.swiperNext,prevEl:n.swiperPrev},keyboard:{enabled:!0,onlyInViewport:!0}});async function O(){const e=await P.get("https://portfolio-js.b.goit.study/api/reviews");if(e.status!==200)throw new Error(`Request failed with status ${e.status}`);return e.data}let L=!1;async function A(){try{const t=(await O()).map(({author:a,avatar_url:o,review:s})=>`<li class="reviews-list-item swiper-slide">
                    <p class="reviews-text">${s}</p>
                    <div class="reviewer-info">
                        <img class="reviewers-avatar" src="${o}" alt=" ${a}'s photo" loading="lazy" />
                        <h3 class="reviewers-name">${a}</h3>
                    </div>
                </li>`).join("");n.reviewsList.insertAdjacentHTML("beforeend",t)}catch(e){L=!0,n.reviewsList.insertAdjacentHTML("beforeend",'<li class="error-mock swiper-slide"><p>Not found</p></li>'),console.error("Error fetching or rendering reviews:",e)}}function R(){L&&N.error({message:"No reviews were found! Please try again later.",position:"bottomRight"})}const V=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&R()})});V.observe(n.swiper);const J=()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),a=document.querySelector(".js-close-menu"),o=()=>{const r=e.querySelectorAll('a[href*="#"]'),c=t.getAttribute("aria-expanded")==="true"||!1;if(t.setAttribute("aria-expanded",!c),e.classList.toggle("is-open"),r.length!==0){if(!c){r.forEach(p=>{p.addEventListener("click",o)});return}r.forEach(p=>{p.removeEventListener("click",o)})}};t.addEventListener("click",o),a.addEventListener("click",o),window.matchMedia("(min-width: 375px)").addEventListener("change",r=>{r.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1))});const s=document.getElementById("switch");s.addEventListener("change",()=>{document.body.classList.toggle("dark-theme"),document.body.classList.contains("dark-theme")?localStorage.setItem("theme","dark"):localStorage.setItem("theme","light")}),window.addEventListener("load",()=>{localStorage.getItem("theme")==="dark"&&(document.body.classList.add("dark-theme"),s.checked=!0)})};document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".js-open-menu"),t=document.querySelector(".js-close-menu"),a=document.getElementById("mobile-menu"),o=document.querySelectorAll(".header-mobile-link");e.addEventListener("click",function(){a.classList.add("active"),e.setAttribute("aria-expanded","true")}),t.addEventListener("click",function(){a.classList.remove("active"),e.setAttribute("aria-expanded","false")}),o.forEach(s=>{s.addEventListener("click",function(){a.classList.remove("active"),e.setAttribute("aria-expanded","false")})}),document.addEventListener("click",function(s){!a.contains(s.target)&&!e.contains(s.target)&&(a.classList.remove("active"),e.setAttribute("aria-expanded","false"))})});new q(".faq-ac-container",{openOnInit:[0],collapse:!0,elementClass:"faq-ac",triggerClass:"faq-ac-trigger",panelClass:"faq-ac-panel"});const i="/js-project-team-10/assets/icons-B8RZkLtE.svg",m="/js-project-team-10/assets/my-project-4-mob_1x-CaZrrZ4L.webp",f="/js-project-team-10/assets/my-project-4-mob_2x-Dsi_fBJN.webp",G="/js-project-team-10/assets/my-project-4-tab_1x-Bm4HUelK.webp",z="/js-project-team-10/assets/my-project-4-tab_2x-C_rSt4TV.webp",H="/js-project-team-10/assets/my-project-4-desk_1x-B_EbEvoG.webp",W="/js-project-team-10/assets/my-project-4-desk_2x-CT56BrZF.webp",l="/js-project-team-10/assets/my-project-5-mob_1x-C-FqkT_n.webp",v="/js-project-team-10/assets/my-project-5-mob_2x-D_lBFHrP.webp",K="/js-project-team-10/assets/my-project-5-tab_1x-DY1MIwHu.webp",Z="/js-project-team-10/assets/my-project-5-tab_2x-CA6TLo5f.webp",F="/js-project-team-10/assets/my-project-5-desk_1x-D8ZaSk76.webp",U="/js-project-team-10/assets/my-project-5-desk_2x-Byw1lDZs.webp",d="/js-project-team-10/assets/my-project-6-mob_1x-BKMi80tp.webp",I="/js-project-team-10/assets/my-project-6-mob_2x-BZr_msEn.webp",Y="/js-project-team-10/assets/my-project-6-tab_1x-GgBQYr0M.webp",X="/js-project-team-10/assets/my-project-6-tab_2x-BXnbLvWP.webp",Q="/js-project-team-10/assets/my-project-6-desk_1x-DCmBPE18.webp",ee="/js-project-team-10/assets/my-project-6-desk_2x--X3-j-ey.webp",u="/js-project-team-10/assets/my-project-7-mob_1x-0-0e4ZQT.webp",_="/js-project-team-10/assets/my-project-7-mob_2x-DwkD79fv.webp",te="/js-project-team-10/assets/my-project-7-tab_1x-C84u-3nB.webp",se="/js-project-team-10/assets/my-project-7-tab_2x-DeSCEq0d.webp",ae="/js-project-team-10/assets/my-project-7-desk_1x-C8xhJxg1.webp",re="/js-project-team-10/assets/my-project-7-desk_2x-CC_ezROz.webp",h="/js-project-team-10/assets/my-project-8-mob_1x-ByoW_oVT.webp",E="/js-project-team-10/assets/my-project-8-mob_2x-CaI7-QGM.webp",oe="/js-project-team-10/assets/my-project-8-tab_1x-DgB_lU8O.webp",ce="/js-project-team-10/assets/my-project-8-tab_2x-DeV4Xxri.webp",ie="/js-project-team-10/assets/my-project-8-desk_1x-BBvz8kpI.webp",ne="/js-project-team-10/assets/my-project-8-desk_2x-CPkKKTsW.webp",g="/js-project-team-10/assets/my-project-9-mob_1x-D-cVnVu7.webp",$="/js-project-team-10/assets/my-project-9-mob_2x-Dgq8Yv0C.webp",pe="/js-project-team-10/assets/my-project-9-tab_1x-Vrq7X7tk.webp",me="/js-project-team-10/assets/my-project-9-tab_2x-bNxU0I4l.webp",le="/js-project-team-10/assets/my-project-9-desk_1x-B6OWfVZ3.webp",de="/js-project-team-10/assets/my-project-9-desk_2x-D8rB3lnd.webp",x="/js-project-team-10/assets/my-project-10-mob_1x-BdpK2UYi.webp",k="/js-project-team-10/assets/my-project-10-mob_2x-CjX_wIUa.webp",ue="/js-project-team-10/assets/my-project-10-tab_1x-BafFCe4R.webp",he="/js-project-team-10/assets/my-project-10-tab_2x-DJ587m_0.webp",ge="/js-project-team-10/assets/my-project-10-desk_1x-Dh7zn3mI.webp",xe="/js-project-team-10/assets/my-project-10-desk_2x-CkzGHwxJ.webp";document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".load-more"),t=document.querySelector(".project-list");let a=[`<li class="project-item">
  <picture>
    <source media="(min-width:1280px)" srcset="${H} 1x, ${W} 2x" type="image/webp" />
    <source media="(min-width:768px)" srcset="${G} 1x, ${z} 2x" type="image/webp" />
    <source media="(min-width:320px)" srcset="${m} 1x, ${f} 2x" type="image/webp" />
    <img width: 1008px;
height: 580px src="${m}" srcset="${m} 1x, ${f} 2x" alt="Project 4" loading="lazy" class="project-img" />
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
    <source media="(min-width:1280px)" srcset="${F} 1x, ${U} 2x" type="image/webp" />
    <source media="(min-width:768px)" srcset="${K} 1x, ${Z} 2x" type="image/webp" />
    <source media="(min-width:320px)" srcset="${l} 1x, ${v} 2x" type="image/webp" />
    <img width: 1008px;
height: 580px; src="${l}" srcset="${l} 1x, ${v} 2x" alt="Project 5" loading="lazy"  class="project-img" />
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
    <source media="(min-width:1280px)" srcset="${Q} 1x, ${ee} 2x" type="image/webp" />
    <source media="(min-width:768px)" srcset="${Y} 1x, ${X} 2x" type="image/webp" />
    <source media="(min-width:320px)" srcset="${d} 1x, ${I} 2x" type="image/webp" />
    <img width: 1008px;
height: 580px; src="${d}" srcset="${d} 1x, ${I} 2x" alt="Project 6" loading="lazy" class="project-img" />
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
    <source media="(min-width:1280px)" srcset="${ae} 1x, ${re} 2x" type="image/webp" />
    <source media="(min-width:768px)" srcset="${te} 1x, ${se} 2x" type="image/webp" />
    <source media="(min-width:320px)" srcset="${u} 1x, ${_} 2x" type="image/webp" />
    <img width: 1008px;
height: 580px; src="${u}" srcset="${u} 1x, ${_} 2x" alt="Project 7" loading="lazy" class="project-img" />
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
    <source media="(min-width:1280px)" srcset="${ie} 1x, ${ne} 2x" type="image/webp" />
    <source media="(min-width:768px)" srcset="${oe} 1x, ${ce} 2x" type="image/webp" />
    <source media="(min-width:320px)" srcset="${h} 1x, ${E} 2x" type="image/webp" />
    <img width: 1008px;
height: 580px; src="${h}" srcset="${h} 1x, ${E} 2x" alt="Project 8" loading="lazy" class="project-img" />
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
    <source media="(min-width:1280px)" srcset="${le} 1x, ${de} 2x" type="image/webp" />
    <source media="(min-width:768px)" srcset="${pe} 1x, ${me} 2x" type="image/webp" />
    <source media="(min-width:320px)" srcset="${g} 1x, ${$} 2x" type="image/webp" />
    <img width: 1008px;
height: 580px src="${g}" srcset="${g} 1x, ${$} 2x" alt="Project 9" loading="lazy" class="project-img" />
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
    <source media="(min-width:1280px)" srcset="${ge} 1x, ${xe} 2x" type="image/webp" />
    <source media="(min-width:768px)" srcset="${ue} 1x, ${he} 2x" type="image/webp" />
    <source media="(min-width:320px)" srcset="${x} 1x, ${k} 2x" type="image/webp" />
    <img width: 1008px;
height: 580px; src="${x}" srcset="${x} 1x, ${k} 2x" alt="Project 10" loading="lazy" class="project-img" />
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
</li>`],o=0;e.addEventListener("click",s=>{s.preventDefault();const r=a.slice(o,o+3);if(r.length>0){t.children[t.children.length-1],r.forEach(S=>{const b=document.createElement("template");b.innerHTML=S.trim();const B=b.content.firstChild;t.appendChild(B)});const p=t.children[o].getBoundingClientRect().height;window.scrollBy({top:p,behavior:"smooth"}),o+=r.length}o>=a.length&&(e.style.display="none")})});J();
//# sourceMappingURL=index.js.map
