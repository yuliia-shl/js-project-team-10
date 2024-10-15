import pathIcons from "/img/icons.svg";
import pathImagesMob1x from "/img/webp/my-project-4-mob_1x.webp";
import pathImagesMob2x from "/img/webp/my-project-4-mob_2x.webp";
import pathImagesTab1x from "/img/webp/my-project-4-tab_1x.webp";
import pathImagesTab2x from "/img/webp/my-project-4-tab_2x.webp";
import pathImagesDesk1x from "/img/webp/my-project-4-desk_1x.webp";
import pathImagesDesk2x from "/img/webp/my-project-4-desk_2x.webp";

import pathImagesMob1x_2 from "/img/webp/my-project-5-mob_1x.webp";
import pathImagesMob2x_2 from "/img/webp/my-project-5-mob_2x.webp";
import pathImagesTab1x_2 from "/img/webp/my-project-5-tab_1x.webp";
import pathImagesTab2x_2 from "/img/webp/my-project-5-tab_2x.webp";
import pathImagesDesk1x_2 from "/img/webp/my-project-5-desk_1x.webp";
import pathImagesDesk2x_2 from "/img/webp/my-project-5-desk_2x.webp";

import pathImagesMob1x_3 from "/img/webp/my-project-6-mob_1x.webp";
import pathImagesMob2x_3 from "/img/webp/my-project-6-mob_2x.webp";
import pathImagesTab1x_3 from "/img/webp/my-project-6-tab_1x.webp";
import pathImagesTab2x_3 from "/img/webp/my-project-6-tab_2x.webp";
import pathImagesDesk1x_3 from "/img/webp/my-project-6-desk_1x.webp";
import pathImagesDesk2x_3 from "/img/webp/my-project-6-desk_2x.webp";

import pathImagesMob1x_4 from "/img/webp/my-project-7-mob_1x.webp";
import pathImagesMob2x_4 from "/img/webp/my-project-7-mob_2x.webp";
import pathImagesTab1x_4 from "/img/webp/my-project-7-tab_1x.webp";
import pathImagesTab2x_4 from "/img/webp/my-project-7-tab_2x.webp";
import pathImagesDesk1x_4 from "/img/webp/my-project-7-desk_1x.webp";
import pathImagesDesk2x_4 from "/img/webp/my-project-7-desk_2x.webp"

import pathImagesMob1x_5 from "/img/webp/my-project-8-mob_1x.webp";
import pathImagesMob2x_5 from "/img/webp/my-project-8-mob_2x.webp";
import pathImagesTab1x_5 from "/img/webp/my-project-8-tab_1x.webp";
import pathImagesTab2x_5 from "/img/webp/my-project-8-tab_2x.webp";
import pathImagesDesk1x_5 from "/img/webp/my-project-8-desk_1x.webp";
import pathImagesDesk2x_5 from "/img/webp/my-project-8-desk_2x.webp"

import pathImagesMob1x_6 from "/img/webp/my-project-9-mob_1x.webp";
import pathImagesMob2x_6 from "/img/webp/my-project-9-mob_2x.webp";
import pathImagesTab1x_6 from "/img/webp/my-project-9-tab_1x.webp";
import pathImagesTab2x_6 from "/img/webp/my-project-9-tab_2x.webp";
import pathImagesDesk1x_6 from "/img/webp/my-project-9-desk_1x.webp";
import pathImagesDesk2x_6 from "/img/webp/my-project-9-desk_2x.webp"

import pathImagesMob1x_7 from "/img/webp/my-project-10-mob_1x.webp";
import pathImagesMob2x_7 from "/img/webp/my-project-10-mob_2x.webp";
import pathImagesTab1x_7 from "/img/webp/my-project-10-tab_1x.webp";
import pathImagesTab2x_7 from "/img/webp/my-project-10-tab_2x.webp";
import pathImagesDesk1x_7 from "/img/webp/my-project-10-desk_1x.webp";
import pathImagesDesk2x_7 from "/img/webp/my-project-10-desk_2x.webp"


document.addEventListener('DOMContentLoaded', () => {
  const loadMoreBtn = document.querySelector('.load-more');
  const projectList = document.querySelector('.project-list');
  let hiddenItems = [
    `<li class="project-item">
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
            <a href="#" class="project-btn" target="_blank">Visit 
              <span class="arrow">
              <svg width="24" height="24">
                  <use href="./img/icons.svg#icon-arrow-up">
                  </use>
              </svg>
          </span></a>
          </div>
        </li>`,
    `<li class="project-item">
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
            <a href="#" class="project-btn" target="_blank">Visit 
              <span class="arrow">
              <svg width="24" height="24">
                  <use href="./img/icons.svg#icon-arrow-up">
                  </use>
              </svg>
          </span></a>
          </div>
        </li>`,
    `<li class="project-item">
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
            <a href="#" class="project-btn" target="_blank">Visit 
              <span class="arrow">
              <svg width="24" height="24">
                  <use href="./img/icons.svg#icon-arrow-up">
                  </use>
              </svg>
          </span></a>
          </div>
        </li>`,
    `<li class="project-item">
  <picture>
    <source media="(min-width:1280px)" srcset="${pathImagesDesk1x_4} 1x, ${pathImagesDesk2x_4} 2x" type="image/webp" />
    <source media="(min-width:768px)" srcset="${pathImagesTab1x_4} 1x, ${pathImagesTab2x_4} 2x" type="image/webp" />
    <source media="(min-width:320px)" srcset="${pathImagesMob1x_4} 1x, ${pathImagesMob2x_4} 2x" type="image/webp" />
    <img src="${pathImagesMob1x_4}" srcset="${pathImagesMob1x_4} 1x, ${pathImagesMob2x_4} 2x" alt="Project 7" loading="lazy" class="project-img" />
  </picture>
          <p class="project-tech">React, JavaScript, Node JS, Git</p>
          <div class="tab-link-container">
            <h3 class="project-subtitle">CHEGO JEWELRY WEBSITE</h3>
            <a href="#" class="project-btn" target="_blank">Visit 
              <span class="arrow">
              <svg width="24" height="24">
                  <use href="./img/icons.svg#icon-arrow-up">
                  </use>
              </svg>
          </span></a>
          </div>
        </li>`,
    `<li class="project-item">
  <picture>
    <source media="(min-width:1280px)" srcset="${pathImagesDesk1x_5} 1x, ${pathImagesDesk2x_5} 2x" type="image/webp" />
    <source media="(min-width:768px)" srcset="${pathImagesTab1x_5} 1x, ${pathImagesTab2x_5} 2x" type="image/webp" />
    <source media="(min-width:320px)" srcset="${pathImagesMob1x_5} 1x, ${pathImagesMob2x_5} 2x" type="image/webp" />
    <img src="${pathImagesMob1x_5}" srcset="${pathImagesMob1x_5} 1x, ${pathImagesMob2x_5} 2x" alt="Project 8" loading="lazy" class="project-img" />
  </picture>
          <p class="project-tech">React, JavaScript, Node JS, Git</p>
          <div class="tab-link-container">
            <h3 class="project-subtitle">MIMINO WEBSITE</h3>
            <a href="#" class="project-btn" target="_blank">Visit 
              <span class="arrow">
              <svg width="24" height="24">
                  <use href="./img/icons.svg#icon-arrow-up">
                  </use>
              </svg>
          </span></a>
          </div>
        </li>`,
    `<li class="project-item">
  <picture>
    <source media="(min-width:1280px)" srcset="${pathImagesDesk1x_6} 1x, ${pathImagesDesk2x_6} 2x" type="image/webp" />
    <source media="(min-width:768px)" srcset="${pathImagesTab1x_6} 1x, ${pathImagesTab2x_6} 2x" type="image/webp" />
    <source media="(min-width:320px)" srcset="${pathImagesMob1x_6} 1x, ${pathImagesMob2x_6} 2x" type="image/webp" />
    <img src="${pathImagesMob1x_6}" srcset="${pathImagesMob1x_6} 1x, ${pathImagesMob2x_6} 2x" alt="Project 9" loading="lazy" class="project-img" />
  </picture>
          <p class="project-tech">React, JavaScript, Node JS, Git</p>
          <div class="tab-link-container">
            <h3 class="project-subtitle">VYSHYVANKA VIBES LANDING PAGE</h3>
            <a href="#" class="project-btn" target="_blank">Visit 
              <span class="arrow">
              <svg width="24" height="24">
                  <use href="./img/icons.svg#icon-arrow-up">
                  </use>
              </svg>
          </span></a>
          </div>
        </li>`,
    `<li class="project-item">
  <picture>
    <source media="(min-width:1280px)" srcset="${pathImagesDesk1x_7} 1x, ${pathImagesDesk2x_7} 2x" type="image/webp" />
    <source media="(min-width:768px)" srcset="${pathImagesTab1x_7} 1x, ${pathImagesTab2x_7} 2x" type="image/webp" />
    <source media="(min-width:320px)" srcset="${pathImagesMob1x_7} 1x, ${pathImagesMob2x_7} 2x" type="image/webp" />
    <img src="${pathImagesMob1x_7}" srcset="${pathImagesMob1x_7} 1x, ${pathImagesMob2x_7} 2x" alt="Project 10" loading="lazy" class="project-img" />
  </picture>
          <p class="project-tech">React, JavaScript, Node JS, Git</p>
          <div class="tab-link-container">
            <h3 class="project-subtitle">POWER PULSE WEBSERVICE</h3>
            <a href="#" class="project-btn" target="_blank">Visit 
              <span class="arrow">
              <svg width="24" height="24">
                  <use href="./img/icons.svg#icon-arrow-up">
                  </use>
              </svg>
          </span></a>
          </div>
</li>`,
  ];

  let loadedItems = 0;

  loadMoreBtn.addEventListener('click', event => {
    event.preventDefault();
    const nextItems = hiddenItems.slice(loadedItems, loadedItems + 3);

    if (nextItems.length > 0) {
      const lastVisibleItem =
        projectList.children[projectList.children.length - 1];

      nextItems.forEach(itemHTML => {
        const template = document.createElement('template');
        template.innerHTML = itemHTML.trim();
        const newItem = template.content.firstChild;
        projectList.appendChild(newItem);
      });

      const firstNewItem = projectList.children[loadedItems];
      const firstNewItemHeight = firstNewItem.getBoundingClientRect().height;

      window.scrollBy({
        top: firstNewItemHeight,
        behavior: 'smooth',
      });

      loadedItems += nextItems.length;
    }

    if (loadedItems >= hiddenItems.length) {
      loadMoreBtn.style.display = 'none';
    }
  });
});
