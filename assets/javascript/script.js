var swiper = new Swiper(".service-slider", {
    slidesPerView: 3.5,
    spaceBetween: 30,
    navigation: {
      nextEl: "#nextButton",
      prevEl: "#prevButton",
    },
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