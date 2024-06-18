const sendForm = () => {
  const form = document.querySelector("form");
  const statusBlock = document.createElement("div");
  const loadText = "Загрузка...";
  const errorText = "Ошибка...";
  const successText = "Спасибо! Наш менеджер с Вами свяжется";

  const validate = (list) => {
    let success = true;

    list.forEach((input) => {
      switch (input.name) {
        case "fio":
          if (!/[а-яА-Я\s]/g.test(input.value)) {
            input.style.border = "1.5px solid red";
            success = false;
          } else {
            input.style.border = "none";
          }
          break;
        case "tel":
          if (/[^+()-\d]/g.test(input.value)) {
            input.style.border = "1.5px solid red";
            success = false;
          } else {
            input.style.border = "none";
          }
          break;
      }
    });
    return success;
  };

  const sendData = (data) => {
    // data - объект который будет отправляться
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      // отправка объекта производится в json формате
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());
    // методом JSON разворачиваем ответ от сервера(response)
  };

  const submitForm = () => {
    const formElement = form.querySelectorAll(".form-control");
    // собираем данные из формы
    const formData = new FormData(form);
    const user = {};

    statusBlock.textContent = loadText;
    form.append(statusBlock);

    formData.forEach((val, key) => {
      user[key] = val;
    });

    if (validate(formElement)) {
      // передаем объект
      sendData(user)
        .then((data) => {
          statusBlock.textContent = successText;
          setTimeout(() => {
            statusBlock.textContent = "";
          }, 3000);

          formElement.forEach((input) => {
            input.value = "";
          });
        })
        .catch((error) => {
          statusBlock.textContent = errorText;
        });
    } else {
      statusBlock.textContent = "Данные не валидны!!!";
    }
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    submitForm();
  });
};

export default sendForm;
