const slider = () => {
  const topSlider = document.querySelector(".top-slider");
  const slides = topSlider.querySelectorAll(".item");

  let current = 0;

  const autoSlide = () => {
    slides[current].style.display = "none";
    current++;

    if (current >= slides.length) {
      current = 0;
    }
    slides[current].style.display = "block";
  };

  const startSLide = () => {
    setInterval(autoSlide, 3000);
  };

  startSLide();
};

export default slider;
