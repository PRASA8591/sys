const users = {
  user1: { password: "pass123", location: "WarehouseA" },
  user2: { password: "secret456", location: "WarehouseB" },
  user3: { password: "admin789", location: "WarehouseC" }
};

document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  const location = document.getElementById("location").value;
  const errorDiv = document.getElementById("error");

  if (users[username] &&
      users[username].password === password &&
      users[username].location === location) {

    localStorage.setItem("username", username);
    localStorage.setItem("location", location);

    window.location.href = "system.html";
  } else {
    errorDiv.textContent = "Invalid credentials or location.";
  }
});
