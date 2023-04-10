
import { makePage } from "./pageMaker";

export let specialPageObj = {
  imageClass: 'carbonara',
  imageSrc: '/src/carbonara.jpg',
  headlineText: "Today's Special is Carbonara!",

  makeSpecialPage() {
    return makePage(this.imageClass, this.imageSrc, this.headlineText);
  }
}
