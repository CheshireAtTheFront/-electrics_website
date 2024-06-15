import { animate } from "./helpers";

const modal = () => {
  const headerMenu = document.querySelector(".header");
  const btnMenu = headerMenu.querySelector(".callback-btn");
  const modalOverlay = document.querySelector(".modal-overlay");
  const modal = modalOverlay.querySelector(".modal-callback");

  btnMenu.addEventListener("click", () => {
    modalOverlay.style.display = "block";
    animate({
      duration: 500,
      timing(timeFraction) {
        return timeFraction;
      },
      // возвращает определенный отрезок от 0 до 1
      draw(progress) {
        modalOverlay.style.opacity = progress;
        modal.style.left = progress * 50 + "%";
        modal.style.right = "";
      },
    });
  });

  modalOverlay.addEventListener("click", (e) => {
    if (
      e.target.closest(".modal-close") ||
      e.target.classList.contains("modal-overlay")
    ) {
      animate({
        duration: 500,
        timing(timeFraction) {
          return timeFraction;
        },
        // возвращает определенный отрезок от 1 до 0
        draw(progress) {
          modalOverlay.style.opacity = 1 - progress;
          modal.style.right = progress * -50 + "%";
          modal.style.left = "";
          if (modalOverlay.style.opacity <= 0) {
            modalOverlay.style.display = "none";
          }
        },
      });
    }
  });
};

export default modal;
