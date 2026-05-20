const nameInput = document.querySelector(".name-input");
const passwordInput = document.querySelector(".password-input");
const btnInput = document.querySelector(".btn-input");

// Элементы шапки (есть только на главной странице)
const userBloc = document.getElementById("userBloc");
const loginBtn = document.getElementById("headerLogin-btn");
const userName = document.getElementById("userName");
const btnLogout = document.querySelector(".btn-logout");

function login(name, password) {
  let users = JSON.parse(localStorage.getItem("users") || "[]");

  const foundUser = users.find((user) => user.name === name);

  if (!foundUser) {
    alert("Пользователь не найден");
    return false;
  }
  if (foundUser.password !== password) {
    alert("Неверный пароль");
    return false;
  }

  localStorage.setItem("currentUser", name);
  return true;
}

function showUserProfile(name) {
  if (loginBtn) loginBtn.style.display = "none";
  if (userBloc) userBloc.style.display = "block";
  if (userName) userName.textContent = name;
}

function checkAuth() {
  const currentUser = localStorage.getItem("currentUser");

  if (currentUser) {
    showUserProfile(currentUser);

    if (btnInput) {
      window.location.href = "index.html";
    }
  } else {
    if (loginBtn) loginBtn.style.display = "flex";
    if (userBloc) userBloc.style.display = "none";
  }
}

if (btnInput && nameInput && passwordInput) {
  btnInput.addEventListener("click", () => {
    const name = nameInput.value.trim();
    const password = passwordInput.value.trim();

    if (name === "" || password === "") {
      alert("Заполните все поля");
      return;
    }

    const isSuccess = login(name, password);

    if (isSuccess) {
      nameInput.value = "";
      passwordInput.value = "";
      window.location.href = "index.html";
    }
  });
}
if (btnLogout) {
  btnLogout.addEventListener("click", () => {
    localStorage.removeItem("currentUser");
    window.location.reload();
  });
}

if (btnInput && nameInput && passwordInput) {
  passwordInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      const name = nameInput.value.trim();
      const password = passwordInput.value.trim();

      if (name === "" || password === "") {
        alert("Заполните все поля");
        return;
      }

      const isSuccess = login(name, password);

      if (isSuccess) {
        nameInput.value = "";
        passwordInput.value = "";
        window.location.href = "index.html";
      }
    }
  });
}

checkAuth();
