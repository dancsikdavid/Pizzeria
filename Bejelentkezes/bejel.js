const signinForm = document.getElementById("signin-form");
const signinError = document.getElementById("signin-error");
const signupForm = document.getElementById("signup-form");
const signupError = document.getElementById("signup-error");

// Retrieve the valid credentials from local storage, or use a default value
let validCredentials = JSON.parse(localStorage.getItem("validCredentials")) || [
  { username: "asda", password: "asda22" },
  { username: "user2", password: "password2" },
  { username: "user3", password: "password3" }
];

signinForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = signinForm.elements["username"].value;
  const password = signinForm.elements["password"].value;
  // Check if username and password are correct
  if (validCredentials.some(cred => cred.username === username && cred.password === password)) {
    window.location.href = "pizza2.html";
  } else {
    signinError.innerHTML = "Incorrect username or password.";
  }
});

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = signupForm.elements["username"].value;
  const password = signupForm.elements["password"].value;
  const confirmPassword = signupForm.elements["confirm-password"].value;
  // Check if username and password meet requirements
  if (username.length < 4) {
    signupError.innerHTML = "Username must be at least 4 characters.";
  } else if (password.length < 8) {
    signupError.innerHTML = "Password must be at least 8 characters.";
  } else if (password !== confirmPassword) {
    signupError.innerHTML = "Passwords do not match.";
  } else {
    // Add the new username and password to the list of valid credentials
    validCredentials.push({ username, password });
    // Store the updated valid credentials in local storage
    localStorage.setItem("validCredentials", JSON.stringify(validCredentials));
    alert("Sign up successful!");
  }
});