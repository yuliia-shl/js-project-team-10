import Accordion from 'accordion-js';

new Accordion('.faq-ac-container', {
  openOnInit: [0],
  collapse: true,
  elementClass: 'faq-ac',
  triggerClass: 'faq-ac-trigger',
  panelClass: 'faq-ac-panel',
});