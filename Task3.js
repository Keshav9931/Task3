const express = require("express");
const app = express();

app.use(express.json());

// Hardcoded user (as per requirement)
const user = {
  username: "admin",
  password: "1234"
};

// POST /login route
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Check credentials
  if (username === user.username && password === user.password) {
    return res.json({
      success: true,
      message: "Login successful!"
    });
  }

  // If incorrect
  res.json({
    success: false,
    message: "Invalid credentials"
  });
});

// Server start
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
