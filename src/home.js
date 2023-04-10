
import { makePage } from "./pageMaker";

export let homePageObj = {
  imageClass: 'restaurant-front',
  imageSrc: '/src/restaurant-front.png',
  headlineText: 'Welcome to Local!',

  makeHomePage() {
    return makePage(this.imageClass, this.imageSrc, this.headlineText);
  }
}
