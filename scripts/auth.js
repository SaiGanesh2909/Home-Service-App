document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signupForm");
    const loginForm = document.getElementById("loginForm");
  
    // Load users from localStorage
    const getUsers = () => JSON.parse(localStorage.getItem("users")) || [];
  
    // Save users to localStorage
    const saveUsers = (users) => localStorage.setItem("users", JSON.stringify(users));
  
    // Signup Logic
    if (signupForm) {
      signupForm.addEventListener("submit", (e) => {
        e.preventDefault();
  
        const name = document.getElementById("signupName").value.trim();
        const email = document.getElementById("signupEmail").value.trim();
        const password = document.getElementById("signupPassword").value;
  
        const users = getUsers();
  
        // Check if user already exists
        const userExists = users.find((user) => user.email === email);
        if (userExists) {
          alert("User already registered. Please log in.");
          window.location.href = "login.html";
          return;
        }
  
        const newUser = { name, email, password };
        users.push(newUser);
        saveUsers(users);
        localStorage.setItem("loggedInUser", JSON.stringify(newUser));
        alert("Signup successful!");
        window.location.href = "home.html";
      });
    }
  
    // Login Logic
    if (loginForm) {
      loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
  
        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value;
  
        const users = getUsers();
        const foundUser = users.find((user) => user.email === email && user.password === password);
  
        if (foundUser) {
          localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
          alert("Login successful!");
          window.location.href = "home.html";
        } else {
          alert("Invalid email or password.");
        }
      });
    }
  });
  