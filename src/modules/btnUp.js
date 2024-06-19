const btnUp = () => {
  const up = document.querySelector(".up");

  const show = () => {
    up.style.display = "block";
  };

  const hide = () => {
    up.style.display = "none";
  };
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    scrollY > 120 ? show() : hide();
  });
  document.querySelector(".up").addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
  hide();
};

export default btnUp;
