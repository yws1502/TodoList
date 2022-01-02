const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.getElementById("greeting-user");

const HIDDEN_CLASS = "hidden";
const USER_KEY = "username";

const date = new Date();
const currentTime = date.getHours();

function paintGreeting(username) {
  let hi;
  if (currentTime < 5) {
    hi = "night";
  } else if (currentTime < 12) {
    hi = "morning";
  } else if (currentTime < 18) {
    hi = "afternoon";
  } else if (currentTime < 24) {
    hi = "evening";
  }
  greeting.textContent = `Good ${hi}, ${username}.`;
  greeting.classList.remove(HIDDEN_CLASS);
}

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;

  loginForm.classList.add(HIDDEN_CLASS);
  localStorage.setItem(USER_KEY, username);
  paintGreeting(username);
}

const userName = localStorage.getItem(USER_KEY);

if (userName) {
  paintGreeting(userName);
} else {
  loginForm.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener("submit", onLoginSubmit);
}