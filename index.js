(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const c=document.getElementById("contactForm"),d=document.getElementById("email"),i=document.querySelector(".error-message");c.addEventListener("submit",function(t){t.preventDefault();const n={email:document.getElementById("email").value,comment:document.getElementById("message").value};fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(o=>{if(!o.ok)throw new Error(`HTTP error! Status: ${o.status}`);return o.json()}).then(o=>{o.title&&o.message?(document.querySelector("#successPopup h3").textContent=o.title,document.querySelector("#successPopup p").textContent=o.message,document.getElementById("successPopup").style.display="flex",c.reset()):document.getElementById("errorPopup").style.display="flex"}).catch(o=>{console.error("Error:",o),document.getElementById("errorPopup").style.display="flex",document.getElementById("email").value=n.email,document.getElementById("message").value=n.comment})});document.querySelectorAll(".close-btn").forEach(t=>{t.addEventListener("click",function(){t.closest(".popup").style.display="none"})});document.querySelectorAll(".popup").forEach(t=>{t.addEventListener("click",function(n){n.target===t&&(t.style.display="none")})});document.addEventListener("keydown",function(t){t.key==="Escape"&&document.querySelectorAll(".popup").forEach(n=>{n.style.display="none"})});d.addEventListener("input",function(){d.validity.valid?i.style.display="none":i.style.display="block"});const a=document.getElementById("theme-toggle");a.addEventListener("change",()=>{document.body.classList.toggle("dark-theme"),document.body.classList.contains("dark-theme")?localStorage.setItem("theme","dark"):localStorage.setItem("theme","light")});window.addEventListener("load",()=>{localStorage.getItem("theme")==="dark"&&(document.body.classList.add("dark-theme"),a.checked=!0)});
//# sourceMappingURL=index.js.map
