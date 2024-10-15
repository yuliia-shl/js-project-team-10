import{S as b,N as g,P as h,K as y,a as x,A as v}from"./assets/vendor-Cn2Mxqco.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();const m=document.getElementById("contactForm"),l=document.getElementById("email"),d=document.querySelector(".error-message");m.addEventListener("submit",function(e){e.preventDefault();const s={email:document.getElementById("email").value,comment:document.getElementById("message").value};fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}).then(i=>{if(!i.ok)throw new Error(`HTTP error! Status: ${i.status}`);return i.json()}).then(i=>{i.title&&i.message?(document.querySelector("#successPopup h3").textContent=i.title,document.querySelector("#successPopup p").textContent=i.message,document.getElementById("successPopup").style.display="flex",m.reset()):document.getElementById("errorPopup").style.display="flex"}).catch(i=>{console.error("Error:",i),document.getElementById("errorPopup").style.display="flex",document.getElementById("email").value=s.email,document.getElementById("message").value=s.comment})});document.querySelectorAll(".close-btn").forEach(e=>{e.addEventListener("click",function(){e.closest(".popup").style.display="none"})});document.querySelectorAll(".popup").forEach(e=>{e.addEventListener("click",function(s){s.target===e&&(e.style.display="none")})});document.addEventListener("keydown",function(e){e.key==="Escape"&&document.querySelectorAll(".popup").forEach(s=>{s.style.display="none"})});l.addEventListener("input",function(){l.validity.valid?d.style.display="none":d.style.display="block"});document.addEventListener("DOMContentLoaded",j);const n={swiper:document.querySelector(".reviews-container"),swiperNext:document.querySelector(".review-button-next"),swiperPrev:document.querySelector(".review-button-prev"),reviewsList:document.querySelector(".reviews-list")};new b(n.swiper,{grabCursor:!0,direction:"horizontal",autoplay:{delay:1e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},slidesPerView:1,spaceBetween:16,autoHeight:!0,breakpoints:{768:{slidesPerView:1,autoHeight:!1},1280:{slidesPerView:2,spaceBetween:32}},modules:[g,h,y],navigation:{nextEl:n.swiperNext,prevEl:n.swiperPrev},keyboard:{enabled:!0,onlyInViewport:!0}});async function f(){return(await x.get("https://portfolio-js.b.goit.study/api/reviews")).data}async function j(){try{const s=(await f()).map(({author:i,avatar_url:c,review:t})=>`<li class="reviews-list-item swiper-slide">
                    <p class="reviews-text">${t}</p>
                    <div class="reviewer-info">
                        <img class="reviewers-avatar" src="${c}" alt=" ${i} photo" loading="lazy" />
                        <h3 class="reviewers-name">${i}</h3>
                    </div>
                </li>`).join("");n.reviewsList.insertAdjacentHTML("beforeend",s)}catch{n.reviewsList.insertAdjacentHTML("beforeend",'<li class="error-mock"><p>SORRY, NOTHING TO SHOW HERE</p></li>')}}const E=()=>{const e=document.querySelector(".js-menu-container"),s=document.querySelector(".js-open-menu"),i=document.querySelector(".js-close-menu"),c=()=>{const r=e.querySelectorAll('a[href*="#"]'),o=s.getAttribute("aria-expanded")==="true"||!1;if(s.setAttribute("aria-expanded",!o),e.classList.toggle("is-open"),r.length!==0){if(!o){r.forEach(a=>{a.addEventListener("click",c)});return}r.forEach(a=>{a.removeEventListener("click",c)})}};s.addEventListener("click",c),i.addEventListener("click",c),window.matchMedia("(min-width: 375px)").addEventListener("change",r=>{r.matches&&(e.classList.remove("is-open"),s.setAttribute("aria-expanded",!1))});const t=document.getElementById("switch");t.addEventListener("change",()=>{document.body.classList.toggle("dark-theme"),document.body.classList.contains("dark-theme")?localStorage.setItem("theme","dark"):localStorage.setItem("theme","light")}),window.addEventListener("load",()=>{localStorage.getItem("theme")==="dark"&&(document.body.classList.add("dark-theme"),t.checked=!0)})};document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),i=document.getElementById("mobile-menu"),c=document.querySelectorAll(".header-mobile-link");e.addEventListener("click",function(){i.classList.add("active"),e.setAttribute("aria-expanded","true")}),s.addEventListener("click",function(){i.classList.remove("active"),e.setAttribute("aria-expanded","false")}),c.forEach(t=>{t.addEventListener("click",function(){i.classList.remove("active"),e.setAttribute("aria-expanded","false")})}),document.addEventListener("click",function(t){!i.contains(t.target)&&!e.contains(t.target)&&(i.classList.remove("active"),e.setAttribute("aria-expanded","false"))})});new v(".faq-ac-container",{openOnInit:[0],collapse:!0,elementClass:"faq-ac",triggerClass:"faq-ac-trigger",panelClass:"faq-ac-panel"});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".load-more-container"),s=document.querySelector(".project-list");let i=[`<li class="project-item">
      <picture>
          <source
          media="(min-width: 1280px)"
          srcset="/img/webp/my-project-4-desk_1x.webp 1x,
          /img/webp/my-project-4-desk_2x.webp 2x"
          type="image/webp"
          /> 
          <source
          media="(min-width: 768px)"
          srcset="/img/webp/my-project-4-tab_1x.webp 1x,
          /img/webp/my-project-4-tab_2x.webp 2x"
          type="image/webp"
          />
          <source
          media="(min-width: 360px)"
          srcset="/img/webp/my-project-4-mob_1x.webp 1x,
          /img/webp/my-project-4-mob_2x.webp 2x"
          type="image/webp"
          />
        <img
            src="/img/webp/my-project-4-mob_1x.webp"
            alt="Energy Flow Webservice "
            loading="lazy"
            class="project-img"
            width="1008" height="580"
          />
      </picture>
          <p class="project-tech">React, JavaScript, Node JS, Git</p>
          <div class="tab-link-container">
            <h3 class="project-subtitle">ENERGY FLOW WEBSERVICE</h3>
            <a href="#" class="project-btn">Visit 
              <span class="arrow">
              <svg width="24" height="24">
                  <use href="./img/icons.svg#icon-arrow-up">
                  </use>
              </svg>
          </span></a>
          </div>
        </li>`,`<li class="project-item">
          <picture>
          <source
          media="(min-width: 1280px)"
          srcset="/img/webp/my-project-5-desk_1x.webp 1x,
          /img/webp/my-project-5-desk_2x.webp 2x"
          type="image/webp"
          />
          <source
          media="(min-width: 768px)"
          srcset="/img/webp/my-project-5-tab_1x.webp 1x,
          /img/webp/my-project-5-tab_2x.webp 2x"
          type="image/webp"
          />
          <source
          media="(min-width: 360px)"
          srcset="/img/webp/my-project-5-mob_1x.webp 1x,
          /img/webp/my-project-5-mob_2x.webp 2x"
          type="image/webp"
          />
          <img
            src="/img/webp/my-project-5-mob_1x.webp"
            alt="Starlight Studio Landing Page"
            loading="lazy"
            class="project-img"
            width="1008" height="580"
          />
          </picture>
<p class="project-tech">React, JavaScript, Node JS, Git</p>
          <div class="tab-link-container">
            <h3 class="project-subtitle">STARLIGHT STUDIO LANDING PAGE</h3>
            <a href="#" class="project-btn">Visit 
              <span class="arrow">
              <svg width="24" height="24">
                  <use href="./img/icons.svg#icon-arrow-up">
                  </use>
              </svg>
          </span></a>
          </div>
        </li>`,`<li class="project-item">
          <picture>
          <source
          media="(min-width: 1280px)"
          srcset="/img/webp/my-project-6-desk_1x.webp 1x,
          /img/webp/my-project-6-desk_2x.webp 2x"
          type="image/webp"
          />
          <source
          media="(min-width: 768px)"
          srcset="/img/webp/my-project-6-tab_1x.webp 1x,
          /img/webp/my-project-6-tab_2x.webp 2x"
          type="image/webp"
          />
          <source
          media="(min-width: 360px)"
          srcset="/img/webp/my-project-6-mob_1x.webp 1x,
          /img/webp/my-project-6-mob_2x.webp 2x"
          type="image/webp"
          />
          <img
            src="/img/webp/my-project-6-mob_1x.webp"
            alt="Fruitbox Online Store"
            loading="lazy"
            class="project-img"
            width="1008" height="580"
          />
          </picture>
          <p class="project-tech">React, JavaScript, Node JS, Git</p>
          <div class="tab-link-container">
            <h3 class="project-subtitle">FRUITBOX ONLINE STORE</h3>
            <a href="#" class="project-btn">Visit 
              <span class="arrow">
              <svg width="24" height="24">
                  <use href="./img/icons.svg#icon-arrow-up">
                  </use>
              </svg>
          </span></a>
          </div>
        </li>`,`<li class="project-item">
          <picture>
          <source
          media="(min-width: 1280px)"
          srcset="/img/webp/my-project-7-desk_1x.webp 1x,
          /img/webp/my-project-7-desk_2x.webp 2x"
          type="image/webp"
          />
          <source
          media="(min-width: 768px)"
          srcset="/img/webp/my-project-7-tab_1x.webp 1x,
          /img/webp/my-project-7-tab_2x.webp 2x"
          type="image/webp"
          />
          <source
          media="(min-width: 360px)"
          srcset="/img/webp/my-project-7-mob_1x.webp 1x,
          /img/webp/my-project-7-mob_2x.webp 2x"
          type="image/webp"
          />
          <img
            src="/img/webp/my-project-7-mob_1x.webp"
            alt="Chego Jewelry Website"
            loading="lazy"
            class="project-img"
            width="1008" height="580"
          />
          </picture>
          <p class="project-tech">React, JavaScript, Node JS, Git</p>
          <div class="tab-link-container">
            <h3 class="project-subtitle">CHEGO JEWELRY WEBSITE</h3>
            <a href="#" class="project-btn">Visit 
              <span class="arrow">
              <svg width="24" height="24">
                  <use href="./img/icons.svg#icon-arrow-up">
                  </use>
              </svg>
          </span></a>
          </div>
        </li>`,`<li class="project-item">
          <picture>
          <source
          media="(min-width: 1280px)"
          srcset="/img/webp/my-project-8-desk_1x.webp 1x,
          /img/webp/my-project-8-desk_2x.webp 2x"
          type="image/webp"
          />
          <source
          media="(min-width: 768px)"
          srcset="/img/webp/my-project-8-tab_1x.webp 1x,
          /img/webp/my-project-8-tab_2x.webp 2x"
          type="image/webp"
          />
          <source
         media="(min-width: 360px)"
          srcset="/img/webp/my-project-8-mob_1x.webp 1x,
          /img/webp/my-project-8-mob_2x.webp 2x"
          type="image/webp"
          />
          <img
            src="/img/webp/my-project-8-mob_1x.webp"
            alt="Mimino Website"
            loading="lazy"
            class="project-img"
            width="1008" height="580"
          />
          </picture>
          <p class="project-tech">React, JavaScript, Node JS, Git</p>
          <div class="tab-link-container">
            <h3 class="project-subtitle">MIMINO WEBSITE</h3>
            <a href="#" class="project-btn">Visit 
              <span class="arrow">
              <svg width="24" height="24">
                  <use href="./img/icons.svg#icon-arrow-up">
                  </use>
              </svg>
          </span></a>
          </div>
        </li>`,`<li class="project-item">
          <picture>
          <source
          media="(min-width: 1280px)"
          srcset="/img/webp/my-project-9-desk_1x.webp 1x,
          /img/webp/my-project-9-desk_2x.webp 2x"
          type="image/webp"
          />
          <source
          media="(min-width: 768px)"
          srcset="/img/webp/my-project-9-tab_1x.webp 1x,
          /img/webp/my-project-9-tab_2x.webp 2x"
          type="image/webp"
          />
          <source
          media="(min-width: 360px)"
          srcset="/img/webp/my-project-9-mob_1x.webp 1x,
          /img/webp/my-project-9-mob_2x.webp 2x"
          type="image/webp"
          />
          <img
            src="/img/webp/my-project-9-mob_1x.webp"
            alt="Vyshyvanka Vibes Landing Page"
            loading="lazy"
            class="project-img"
            width="1008" height="580"
          />
          </picture>
          <p class="project-tech">React, JavaScript, Node JS, Git</p>
          <div class="tab-link-container">
            <h3 class="project-subtitle">VYSHYVANKA VIBES LANDING PAGE</h3>
            <a href="#" class="project-btn">Visit 
              <span class="arrow">
              <svg width="24" height="24">
                  <use href="./img/icons.svg#icon-arrow-up">
                  </use>
              </svg>
          </span></a>
          </div>
        </li>`,`<li class="project-item">
          <picture>
          <source
          media="(min-width: 1280px)"
          srcset="/img/webp/my-project-10-desk_1x.webp 1x,
          /img/webp/my-project-10-desk_2x.webp 2x"
          type="image/webp"
          />
          <source
          media="(min-width: 768px)"
          srcset="/img/webp/my-project-10-tab_1x.webp 1x,
          /img/webp/my-project-10-tab_2x.webp 2x"
          type="image/webp"
          />
          <source
          media="(min-width: 360px)"
          srcset="/img/webp/my-project-10-mob_1x.webp 1x,
          /img/webp/my-project-10-mob_2x.webp 2x"
          type="image/webp"
          />
          <img
            src="/img/webp/my-project-10-mob_1x.webp"
            alt="Power Pulse Webservice"
            loading="lazy"
            class="project-img"
            width="1008" height="580"
          />
          </picture>
          <p class="project-tech">React, JavaScript, Node JS, Git</p>
          <div class="tab-link-container">
            <h3 class="project-subtitle">POWER PULSE WEBSERVICE</h3>
            <a href="#" class="project-btn">Visit 
              <span class="arrow">
              <svg width="24" height="24">
                  <use href="./img/icons.svg#icon-arrow-up">
                  </use>
              </svg>
          </span></a>
          </div>
</li>`],c=0;e.addEventListener("click",t=>{t.preventDefault();const r=i.slice(c,c+3);if(r.length>0){s.children[s.children.length-1],r.forEach(u=>{const p=document.createElement("template");p.innerHTML=u.trim();const w=p.content.firstChild;s.appendChild(w)});const a=s.children[c].getBoundingClientRect().height;window.scrollBy({top:a,behavior:"smooth"}),c+=r.length}c>=i.length&&(e.style.display="none")})});E();
//# sourceMappingURL=index.js.map
