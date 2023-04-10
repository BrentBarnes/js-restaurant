
import { makePage } from "./pageMaker";

export let contactPageObj = {
  imageClass: 'contact',
  imageSrc: '/src/contact.gif',
  headlineText: "Contact Us Here",

  makeContactPage() {
    return makePage(this.imageClass, this.imageSrc, this.headlineText);
  }
}
