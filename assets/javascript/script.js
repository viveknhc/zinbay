// Loader
setTimeout(function () {
  $('.loader-box').fadeToggle();
}, 2000);


var swiper = new Swiper(".service-slider", {
  loop: true,
  navigation: {
    nextEl: "#nextButton",
    prevEl: "#prevButton",
  },

  breakpoints: {
    640: {
      slidesPerView: 1.5,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 3.5,
      spaceBetween: 40
    }
  }

});


// TAKING LAST IMAGE OF USER

function updateImages() {
  const container = document.getElementById('userImgBox');
  const allImages = container.getElementsByTagName('img');
  const imageArray = Array.from(allImages);
  container.innerHTML = '';
  const startIndex = Math.max(0, imageArray.length - 3);
  for (let i = startIndex; i < imageArray.length; i++) {
    container.appendChild(imageArray[i].cloneNode(true));
  }
}
updateImages();


// lazy load
$("img.lazy").lazyload({
  effect: "fadeIn"
});


// aos

AOS.init();