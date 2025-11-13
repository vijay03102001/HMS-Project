const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const connectDB = require("./db/connection");

// Routers
const admin_router = require("./router/admin");
const auth_router = require("./router/auth");
const public_router = require("./router/public");
const doctor_router = require("./router/doctor");
const patient_router = require("./router/patient");

// Initialize express app
const app = express();

// Middlewares
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/public", public_router);
app.use(auth_router);
app.use(admin_router);
app.use(patient_router);
app.use(doctor_router);

// Default route
app.get("/", (req, res) => {
  res.send("HMS Backend Server is Running...");
});

// Start Server after DB connection
const PORT = process.env.PORT || 8080;

connectDB()
  .then(() => {
    app.listen(PORT, "0.0.0.0", () => {
      console.log(` Server is running on http://127.0.0.1:${PORT}`);
    });
  })
  .catch((err) => {
    console.error(" Failed to connect to the database:", err.message);
  });
