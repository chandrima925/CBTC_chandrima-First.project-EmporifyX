
// mode changing

var mode;
var lightMode = document.querySelector(".light-mode");
var darkMode = document.querySelector(".dark-mode");
var mode = lightMode;

var lightButton = document.querySelector(".light");
var darkButton = document.querySelector(".dark");
lightButton.addEventListener("click", () => {
    if (mode === lightMode) {
        document.body.classList.add("dark-mode");
        document.body.classList.remove("light-mode");
        lightButton.style.opacity = "0";
        darkButton.style.opacity = "100";
        mode = darkMode;
    } else {
        document.body.classList.add("light-mode");
        document.body.classList.remove("dark-mode");
        darkButton.style.opacity = " 0";
        lightButton.style.opacity = " 100";
        mode = lightMode;
    }
});

// ---------------------------------------------------- //

function blogGalleryInit(){
  // Filterizer init
  $('.filter-container').filterizr({
      animationDuration: 0.5,
      easing: 'ease-in-out',
      layout: 'sameSize',
  });
  $('.popup').magnificPopup({
      type: 'image',
      gallery:{
          enabled:true
        }
    });
}

$(document).ready(function(){
  blogGalleryInit();
});

// -----------------------------------------------------


$(document).ready(function() {
    var $slider = $('.slider');
    
    $slider.slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 400,
      autoplay: false,
      autoplaySpeed: 1000,
      dots: true,
    });  
  });


  $('.slider').slick({
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 200,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  });
  

  // -----------Accordian-------------------------------

  
const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));


// --------------filterizr------------------------------------


