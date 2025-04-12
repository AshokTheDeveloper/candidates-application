const mongoose = require("mongoose");

const initializeDBAndServer = async (app) => {
  try {
    const MONGO_URI = process.env.MONGO_URI;
    await mongoose.connect(MONGO_URI);
    console.log("database connected successfully");

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`server started and running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log("Error initializing database and server: ", error);
  }
};

module.exports = initializeDBAndServer;
