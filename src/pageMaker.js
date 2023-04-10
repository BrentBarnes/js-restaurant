
import { contentContainer, pageContainerExists } from './index.js';
import { lorem } from './loremGenerator.js';

contentContainer = document.getElementById('content')

function addPageContainerDiv() {
  const pageContainer = document.createElement('div');
  pageContainer.classList.add('page-container');

  // contentContainer.appendChild(pageContainer)

  return pageContainer;
};

function addImageToPage(className, src, parentDiv) {
  const image = document.createElement('img');
  image.classList.add(className);
  image.src = src;

  parentDiv.appendChild(image);
};

function addHeadlineToPage(headlineText, parentDiv) {
  const headline = document.createElement('div');
  headline.classList.add('headline');
  headline.textContent = headlineText;

  parentDiv.appendChild(headline);
};

function addPageTextToPage(pageText, parentDiv) {
  const pageTextContainer = document.createElement('div');
  pageTextContainer.classList.add('page-text');
  pageTextContainer.textContent = pageText

  parentDiv.appendChild(pageTextContainer);
};

function clearPage() {
  const pageContainer = document.querySelector('.page-container')
  pageContainer.remove()
};

export function makePage(imageClass, imageSrc, headlineText) {
  if (pageContainerExists) {
    clearPage();
  }
  
  const pageContainer = addPageContainerDiv();
  addImageToPage(imageClass, imageSrc, pageContainer);
  addHeadlineToPage(headlineText, pageContainer);
  addPageTextToPage(lorem.generateParagraphs(1), pageContainer);
  
  return pageContainer;
};

