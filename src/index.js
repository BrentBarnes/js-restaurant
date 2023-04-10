import './style.css';
// import { makePage } from "./pageMaker";
import { homePageObj } from './home.js'
import { specialPageObj } from './specialPage.js'
import { contactPageObj } from './contactPage.js'

const contentContainer = document.getElementById('content')
const homeTab = document.querySelector('.homeTab');
const specialTab = document.querySelector('.specialTab');
const contactTab = document.querySelector('.contactTab');

homeTab.addEventListener('click', () => {
  contentContainer.appendChild(homePageObj.makeHomePage());
});

specialTab.addEventListener('click', () => {
  contentContainer.appendChild(specialPageObj.makeSpecialPage());
});

contactTab.addEventListener('click', () => {
  contentContainer.appendChild(contactPageObj.makeContactPage());
});


export let pageContainerExists = (document.querySelector('.page-container') ? true : false);

if (!pageContainerExists) {
  contentContainer.appendChild(homePageObj.makeHomePage());
  pageContainerExists = true;
};