class Diaporama {

    constructor(imgElem, images) {
      this.imgElem = imgElem;
      this.images = images;
      this.position = 0;
      this.start();
    }
    slideLeft() {
      if (this.position <= 0) {
        this.position = this.images.length - 1;
      } else {
        this.position--;
      }
      // this is part of the 'bridge' between "carousel.js" and the DOM
      this.imgElem.src = this.images[this.position];
    }
    slideRight() {
      // there was an error in your original "slideRight" method: a typo and an "off-by-error"
      if (this.position >= this.images.length-1) {
        this.position = 0;
      }
      else {
        this.position++;
      }
      // this is part of the 'bridge' between "carousel.js" and the DOM
      this.imgElem.src = this.images[this.position];
    }
    start() {
      // this is part of the 'bridge' between "carousel.js" and the DOM
      this.imgElem.src = this.images[this.position];
    }
  
  }
  
  // prefer an Array literal rather than call to Array -- less verbose, and slightly faster
  var images = [ 
    'img/pics/CMS-200.jpg', 
    'img/pics/CMS-216.jpg',
    'img/pics/CMS-218.jpg',
    'img/pics/CMS-258.jpg',
    'img/pics/CMS-267.jpg',
    'img/pics/CMS-273.jpg',
    'img/pics/CMS-283.jpg',
    'img/pics/CMS-288.jpg',
    'img/pics/CMS-295.jpg',
    'img/pics/CMS-301.jpg',
    'img/pics/CMS-305.jpg',
    'img/pics/CMS-306.jpg',
    'img/pics/CMS-307.jpg'
];
  
  // This is where 'bridge' between "carousel.js" and the DOM is created: we 'cache' a reference to the carousel 'img' element,
  // which we will then modify from within the 'carousel' instance of class Diaporama
  var imgElem = window.document.getElementById('carousel').querySelector('img');
  
  var carousel = new Diaporama(imgElem, images);
  
  carousel.start();
  
  // create 'delegated' event listener on document, and trigger correct method of 'carousel' in response to user interaction
  window.document.addEventListener('click', ev => {
    const target = ev.target;
    if(target.id === 'back_button') {
      carousel.slideLeft();
    } else if(target.id === 'next_button') {
      carousel.slideRight();
    }
  });