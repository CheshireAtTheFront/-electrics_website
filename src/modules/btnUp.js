const btnUp = () => {
  const up = document.querySelector(".up");

  const show = () => {
    up.style.display = "block";
  };

  const hide = () => {
    up.style.display = "none";
  };
  // при прокрутке содержимого страницы
  window.addEventListener("scroll", () => {
    // определяем величину прокрутки
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
    scrollY > 120 ? show() : hide();
  });
  // при нажатии на кнопку .up
  document.querySelector(".up").addEventListener("click", () => {
    // переместим в начало страницы
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
  // сделаем кнопку не видимой сразу
  hide();
};

export default btnUp;
