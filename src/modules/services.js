const services = () => {
  const servicesCarousel = document.querySelector(".services-carousel");
  const cards = servicesCarousel.querySelectorAll(".service");
  //   вешать делегирование
  const servicesArrow = document.querySelector(".services-arrow");
  //   arrow-left
  // arrow-right
  let current = 2;

  servicesArrow.addEventListener("click", (e) => {
    let target = e.target;
    console.log(cards.length);
    cards.forEach((card, index) => {
      console.log(card);
      console.log(index);
      if (target.classList.contains("arrow-left")) {
        card.style.display = "none";
        current--;
      }
      if (target.classList.contains("arrow-right")) {
        current++;
      }
    });
  });
};

export default services;
