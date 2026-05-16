const nameInput = document.querySelector(".name-input");
const passwordInput = document.querySelector(".password-input");
const btnInput = document.querySelector(".btn-input");

btnInput.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const password = passwordInput.value.trim();

  if (name === "" || password === "") {
    console.log("Тут пусто");
    return;
  }

  if (password.length < 8) {
    console.log("Меньше 8");

    return;
  }

  const isSuccess = register(name, password);

  if (isSuccess) {
    nameInput.value = "";
    passwordInput.value = "";
  }
});

function register(name, password) {
  let user = JSON.parse(localStorage.getItem("user") || "[]");

  const userExists = user.some((user) => user.name === name);

  if (userExists) {
    console.log("пользователь уже есть ");
    return;
  }

  user.push({ name: name, password: password });

  localStorage.setItem("user", JSON.stringify(user));

  console.log("все супер");
}
