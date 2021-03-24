
/* SWIPER INIT */ 

var headerSwiper = new Swiper('.header-slider', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
  });

  var partnerSwiper = new Swiper('.partner-swiper', {
    slidesPerView: 5,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });


  /*  ANIMATION  */

  const animItems = document.querySelectorAll('._anim-item');

  if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params) {
      for (let index = 0; index < animItems.length; index ++){
        const animItem = animItems[index];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        animStart = 4;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;


        if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
          animItem.classList.add('_active');
        } else {
          if (!animItem.classList.contains('_anim-no-hide')){
            animItem.classList.remove('_active');
          }
          
        }

        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animItemPoint;
        }
        console.log(animItemHeight);
      }
    }


    function offset(el) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    
    setTimeout(() => {
      animOnScroll()
    }, 300);
  }

