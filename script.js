function checkPassword() {
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (password === "Clavicle") {
    window.location.href = "valentine.html";
  } else {
    error.textContent = "Fuck off Fuck off Fuck off Fuck off";
  }
}
