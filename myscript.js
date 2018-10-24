/* Carousel */

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}


/* Carousel Menu */
var slideIndexM = 1;
showSlidesM(slideIndexM);

function plusSlides(n) {
  showSlidesM(slideIndexM += n);
}

function currentSlide(n) {
  showSlidesM(slideIndexM = n);
}

function showSlidesM(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides1");
  var dots = document.getElementsByClassName("dot1");
  if (n > slides.length) {slideIndexM = 1}
  if (n < 1) {slideIndexM = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active1", "");
  }
  slides[slideIndexM-1].style.display = "block";
  dots[slideIndexM-1].className += " active1";
}



/* Google Map */



// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("vNav").style.display = "block";
    } else {
        document.getElementById("vNav").style.display = "none";
    }
  }

// vertical dot Nav

$(document).ready(function($){
        var parPosition = [];
      $('.par').each(function() {
          parPosition.push($(this).offset().top);
      });
// Scroll animation

  $('#vNav a').click(function(){
    $('html, body').animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
  });
//Display color on  click
        $('#vNav ul li a').click(function () {
    $('#vNav ul li a').removeClass('active');
      $(this).addClass('active');
  });

// Display of text on hover

     $('#vNav a').hover(function() {
         $(this).find('.label').show();
         }, function() {
         $(this).find('.label').hide();
     });
// Scroll function active
         $(document).scroll(function(){
      var position = $(document).scrollTop(),
              index;
              for (var i=0; i<parPosition.length; i++) {
              if (position <= parPosition[i]) {
                  index = i;
                  break;
              }
          }
    $('#vNav ul li a').removeClass('active');
          $('#vNav ul li a:eq('+index+')').addClass('active');
      });

        $('#vNav ul li a').click(function () {
    $('#vNav ul li a').removeClass('active');
      $(this).addClass('active');
  });
});
