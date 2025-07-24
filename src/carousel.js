export const createCarousel = (images) => {
  if (!images || !images.length) {
    throw new Error("Carousel requires an array of images");
  }

  let currentIndex = 0;
  let intervalId;
  let carouselElement = null;
  let callbacks = {};

  const goToSlide = (index) => {
    currentIndex = index;
    trigger("slideChange", currentIndex);
  };

  const nextSlide = () => {
    currentIndex = (currentIndex + 1) % images.length;
    goToSlide(currentIndex);
  };

  const prevSlide = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    goToSlide(currentIndex);
  };

  const startCarousel = (interval = 5000) => {
    stopCarousel();
    intervalId = setInterval(nextSlide, interval);
  };

  const stopCarousel = () => {
    clearInterval(intervalId);
  };

  const on = (event, callback) => {
    callbacks[event] = callbacks[event] || [];
    callbacks[event].push(callback);
  };

  const trigger = (event, ...args) => {
    if (callbacks[event]) {
      callbacks[event].forEach((cb) => cb(...args));
    }
  };

  return {
    get currentIndex() {
      return currentIndex;
    },
    get images() {
      return [...images];
    },
    goToSlide,
    nextSlide,
    prevSlide,
    startCarousel,
    stopCarousel,
    on,
  };
};

/*

export carousel

CAROUSEL BEHAVIOUR:

- The carousel should automatically cycle through images every 5 seconds.
- Users should be able to pause the automatic cycling by hovering over the carousel.
- Users should be able to manually navigate through the images using next and previous buttons.
- It should contain arrows on each side to advance the image forward or backward. 
-  It should contain the little navigation circles at the bottom that indicate which slide you are on (and they should be clickable to advance to that particular slide).
- The carousel should display a set of images that can be defined in the JavaScript file.
- The carousel should be responsive and adapt to different screen sizes.

*/
