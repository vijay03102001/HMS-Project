const mongoose = require("mongoose");

const mongoose_connection = async () => {
  try {
    await mongoose.connect(process.env.DB_URL || "mongodb://127.0.0.1:27017/healthcare");
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1); // Stop the app if DB connection fails
  }
};

module.exports = mongoose_connection;
