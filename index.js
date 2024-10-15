import{S as g,N as h,P as y,K as x,a as v,i as f,A as j}from"./assets/vendor-BFlcYqFY.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(i){if(i.ep)return;i.ep=!0;const r=s(i);fetch(i.href,r)}})();const m=document.getElementById("contactForm"),l=document.getElementById("email"),d=document.querySelector(".error-message");m.addEventListener("submit",function(e){e.preventDefault();const t={email:document.getElementById("email").value,comment:document.getElementById("message").value};fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(s=>{if(!s.ok)throw new Error(`HTTP error! Status: ${s.status}`);return s.json()}).then(s=>{s.title&&s.message?(document.querySelector("#successPopup h3").textContent=s.title,document.querySelector("#successPopup p").textContent=s.message,document.getElementById("successPopup").style.display="flex",m.reset()):document.getElementById("errorPopup").style.display="flex"}).catch(s=>{console.error("Error:",s),document.getElementById("errorPopup").style.display="flex",document.getElementById("email").value=t.email,document.getElementById("message").value=t.comment})});document.querySelectorAll(".close-btn").forEach(e=>{e.addEventListener("click",function(){e.closest(".popup").style.display="none"})});document.querySelectorAll(".popup").forEach(e=>{e.addEventListener("click",function(t){t.target===e&&(e.style.display="none")})});document.addEventListener("keydown",function(e){e.key==="Escape"&&document.querySelectorAll(".popup").forEach(t=>{t.style.display="none"})});l.addEventListener("input",function(){l.validity.valid?d.style.display="none":d.style.display="block"});document.addEventListener("DOMContentLoaded",S);const a={swiper:document.querySelector(".reviews-container"),swiperNext:document.querySelector(".review-button-next"),swiperPrev:document.querySelector(".review-button-prev"),reviewsList:document.querySelector(".reviews-list")};new g(a.swiper,{grabCursor:!0,direction:"horizontal",autoplay:{delay:1e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},slidesPerView:1,spaceBetween:16,breakpoints:{768:{slidesPerView:1},1280:{slidesPerView:2,spaceBetween:32}},modules:[h,y,x],navigation:{nextEl:a.swiperNext,prevEl:a.swiperPrev},keyboard:{enabled:!0,onlyInViewport:!0}});async function E(){const e=await v.get("https://portfolio-js.b.goit.study/api/reviews");if(e.status!==200)throw new Error(`Request failed with status ${e.status}`);return e.data}let u=!1;async function S(){try{const t=(await E()).map(({author:s,avatar_url:o,review:i})=>`<li class="reviews-list-item swiper-slide">
                    <p class="reviews-text">${i}</p>
                    <div class="reviewer-info">
                        <img class="reviewers-avatar" src="${o}" alt=" ${s}'s photo" loading="lazy" />
                        <h3 class="reviewers-name">${s}</h3>
                    </div>
                </li>`).join("");a.reviewsList.insertAdjacentHTML("beforeend",t)}catch(e){u=!0,a.reviewsList.insertAdjacentHTML("beforeend",'<li class="error-mock swiper-slide"><p>Not found</p></li>'),console.error("Error fetching or rendering reviews:",e)}}function L(){u&&f.error({message:"No reviews were found! Please try again later.",position:"bottomRight"})}const _=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&L()})});_.observe(a.swiper);const k=()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),o=()=>{const r=e.querySelectorAll('a[href*="#"]'),c=t.getAttribute("aria-expanded")==="true"||!1;if(t.setAttribute("aria-expanded",!c),e.classList.toggle("is-open"),r.length!==0){if(!c){r.forEach(n=>{n.addEventListener("click",o)});return}r.forEach(n=>{n.removeEventListener("click",o)})}};t.addEventListener("click",o),s.addEventListener("click",o),window.matchMedia("(min-width: 375px)").addEventListener("change",r=>{r.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1))});const i=document.getElementById("switch");i.addEventListener("change",()=>{document.body.classList.toggle("dark-theme"),document.body.classList.contains("dark-theme")?localStorage.setItem("theme","dark"):localStorage.setItem("theme","light")}),window.addEventListener("load",()=>{localStorage.getItem("theme")==="dark"&&(document.body.classList.add("dark-theme"),i.checked=!0)})};document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".js-open-menu"),t=document.querySelector(".js-close-menu"),s=document.getElementById("mobile-menu"),o=document.querySelectorAll(".header-mobile-link");e.addEventListener("click",function(){s.classList.add("active"),e.setAttribute("aria-expanded","true")}),t.addEventListener("click",function(){s.classList.remove("active"),e.setAttribute("aria-expanded","false")}),o.forEach(i=>{i.addEventListener("click",function(){s.classList.remove("active"),e.setAttribute("aria-expanded","false")})}),document.addEventListener("click",function(i){!s.contains(i.target)&&!e.contains(i.target)&&(s.classList.remove("active"),e.setAttribute("aria-expanded","false"))})});new j(".faq-ac-container",{openOnInit:[0],collapse:!0,elementClass:"faq-ac",triggerClass:"faq-ac-trigger",panelClass:"faq-ac-panel"});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".load-more-container"),t=document.querySelector(".project-list");let s=[`<li class="project-item">
      <picture>
          <source
          media="(min-width: 1280px)"
          srcset="./img/webp/my-project-4-desk_1x.webp 1x,
          ./img/webp/my-project-4-desk_2x.webp 2x"
          type="image/webp"
          /> 
          <source
          media="(min-width: 768px)"
          srcset="./img/webp/my-project-4-tab_1x.webp 1x,
          ./img/webp/my-project-4-tab_2x.webp 2x"
          type="image/webp"
          />
          <source
          media="(min-width: 360px)"
          srcset="./img/webp/my-project-4-mob_1x.webp 1x,
          ./img/webp/my-project-4-mob_2x.webp 2x"
          type="image/webp"
          />
        <img
            src="./img/webp/my-project-4-mob_1x.webp"
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
          srcset="./img/webp/my-project-5-desk_1x.webp 1x,
          ./img/webp/my-project-5-desk_2x.webp 2x"
          type="image/webp"
          />
          <source
          media="(min-width: 768px)"
          srcset="./img/webp/my-project-5-tab_1x.webp 1x,
          ./img/webp/my-project-5-tab_2x.webp 2x"
          type="image/webp"
          />
          <source
          media="(min-width: 360px)"
          srcset="./img/webp/my-project-5-mob_1x.webp 1x,
          ./img/webp/my-project-5-mob_2x.webp 2x"
          type="image/webp"
          />
          <img
            src="./img/webp/my-project-5-mob_1x.webp"
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
          srcset="./img/webp/my-project-6-desk_1x.webp 1x,
          ./img/webp/my-project-6-desk_2x.webp 2x"
          type="image/webp"
          />
          <source
          media="(min-width: 768px)"
          srcset="./img/webp/my-project-6-tab_1x.webp 1x,
          ./img/webp/my-project-6-tab_2x.webp 2x"
          type="image/webp"
          />
          <source
          media="(min-width: 360px)"
          srcset="./img/webp/my-project-6-mob_1x.webp 1x,
          ./img/webp/my-project-6-mob_2x.webp 2x"
          type="image/webp"
          />
          <img
            src="./img/webp/my-project-6-mob_1x.webp"
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
</li>`],o=0;e.addEventListener("click",i=>{i.preventDefault();const r=s.slice(o,o+3);if(r.length>0){t.children[t.children.length-1],r.forEach(w=>{const p=document.createElement("template");p.innerHTML=w.trim();const b=p.content.firstChild;t.appendChild(b)});const n=t.children[o].getBoundingClientRect().height;window.scrollBy({top:n,behavior:"smooth"}),o+=r.length}o>=s.length&&(e.style.display="none")})});k();
//# sourceMappingURL=index.js.map
