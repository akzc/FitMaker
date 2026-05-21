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
    window.location.href = "login.html";
  }
});

function register(name, password) {
  let users = JSON.parse(localStorage.getItem("users") || "[]");

  const userExists = users.some((user) => user.name === name);

  if (userExists) {
    console.log("пользователь уже есть ");
    return false;
  }

  users.push({ name, password });

  localStorage.setItem("users", JSON.stringify(users));

  console.log("все супер");
  return true;
}
