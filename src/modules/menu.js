const menu = () => {
  const topMenu = document.querySelector(".top-menu");
  const links = topMenu.querySelectorAll("a[href^='#']");

  for (let link of links) {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const id = link.getAttribute("href");

      document.querySelector(id).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
};

export default menu;
