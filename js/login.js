const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#username");
const submit = loginForm.querySelector("button");
const hello = document.querySelector("h1.greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function handleSubmitLogin(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greetings();
}
loginForm.addEventListener("submit", handleSubmitLogin);

function greetings() {
  hello.innerText = `Hello, ${localStorage.getItem(USERNAME_KEY)}`;
  hello.classList.remove(HIDDEN_CLASSNAME);
}

if (localStorage.getItem(USERNAME_KEY) === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
} else {
  greetings();
}
