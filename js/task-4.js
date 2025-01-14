const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElem = event.currentTarget.elements;
  const email = formElem.email.value.trim();
  const pswd = formElem.password.value.trim();

  if (!email || !pswd) {
    alert("All form fields must be filled in");
    return;
  }

  const taskData = {
    email,
    pswd,
  };
  console.log(taskData);
  loginForm.reset();
});
