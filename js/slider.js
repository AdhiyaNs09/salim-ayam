// carousel
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("myslide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}


// modal image
var modal = document.getElementById("myModal");

var images = document.getElementsByClassName("img");
for (var i = 0; i < images.length; i++) {
  images[i].onclick = function () {
    modal.style.display = "block";
    document.getElementById("img01").src = this.src;
  };
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}