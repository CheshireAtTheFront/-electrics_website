const accordeon = () => {
  const accordeon = document.querySelector(".accordeon");
  const elements = accordeon.querySelectorAll(".element");

  accordeon.addEventListener("click", (e) => {
    elements.forEach((elem) => {
      if (e.target === elem.querySelector(".title")) {
        elem.classList.toggle("active");
        if (elem.matches(".active")) {
          elem.querySelector(".element-content").style.display = "block";
        } else {
          elem.querySelector(".element-content").style.display = "none";
        }
      } else {
        elem.classList.remove("active");
        elem.querySelector(".element-content").style.display = "none";
      }

      // if (e.target === elem.querySelector(".title")) {
      //   // elem.className = "element active";
      //   elem.querySelector(".element-content").style.display = "block";
      // } else {
      //   // elem.className = "element";
      //   elem.querySelector(".element-content").style.display = "none";
      // }
    });
  });
};

export default accordeon;
