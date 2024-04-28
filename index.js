const formule = document.querySelectorAll(".pricing-plan");
const formulePromo = document.querySelector(".centre");

formule.forEach((el) => {
  el.addEventListener("mouseover", function () {
    formulePromo.classList.remove("centre");
    el.classList.add("centre1");
  });
  el.addEventListener("mouseout", function () {
    el.classList.remove("centre1");
    formulePromo.classList.add("centre");
  });
});



// menu burger
document
  .querySelector(".burger-menu-button")
  .addEventListener("click", function () {
    this.classList.toggle("active");
    document.querySelector(".menuhaut").classList.toggle("active");
  });

// slide pour blog
document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".clients-section div");

  function showSlide(index) {
    slides.forEach((slide, idx) => {
      slide.style.display = idx === index ? "block" : "none";
    });
  }

  document.querySelector(".prev").addEventListener("click", function () {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });

  document.querySelector(".next").addEventListener("click", function () {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });
});

// slide pour le zoom sur les prix

function toggleFullscreen(elementId) {
  let elem = document.getElementById(elementId);

  if (!document.fullscreenElement) {
    if (elem.requestFullscreen) {
      elem.classList.add("full");

      elem.requestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      elem.classList.remove("full");
      document.exitFullscreen();
    }
  }
}

function closeFullscreen(event) {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  }
  event.stopPropagation();
}

// bouton pour aller en haut
document.getElementById("salut").addEventListener("click", function (e) {
  e.preventDefault();

  window.scrollTo({
    top: 50,
    behavior: "smooth",
  });
});

// bouton pour les theme

document
  .querySelector(".burger-menu-theme")
  .addEventListener("click", function () {
    this.classList.toggle("active1");
    document.querySelector(".theme").classList.toggle("active1");
  });

document.getElementById("theme-black").addEventListener("click", function () {
  document.body.classList.remove("theme-green");
  document.body.classList.add("theme-black");
});

document.getElementById("theme-green").addEventListener("click", function () {
  document.body.classList.remove("theme-black");
  document.body.classList.add("theme-green");
});

document.getElementById("theme-white").addEventListener("click", function () {
  document.body.classList.remove("theme-green");
  document.body.classList.remove("theme-black");
});
