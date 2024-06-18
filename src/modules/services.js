const services = () => {
  const cards = document.querySelectorAll(".service");
  const arrowRight = document.querySelector(".arrow-right");
  const arrowLeft = document.querySelector(".arrow-left");

  let position;
  let start = 0;

  if (window.innerWidth < 760) {
    position = 1;
  } else if (window.innerWidth < 960 && window.innerWidth > 570) {
    position = 2;
  } else {
    position = 3;
  }

  cards.forEach((item) => {
    if (start < position) {
      start++;
    } else {
      item.classList.add("d-none");
    }
  });

  start = 0;

  arrowLeft.addEventListener("click", () => {
    if (start > 0) {
      start = start - 1;
      position = position - 1;
      cards[start].classList.remove("d-none");
      cards[position].classList.add("d-none");
    }
  });

  arrowRight.addEventListener("click", () => {
    if (position < cards.length) {
      cards[start++].classList.add("d-none");
      cards[position++].classList.remove("d-none");
    }
  });
};

export default services;
