import mongoose from "mongoose";

const connectString = "mongodb://localhost:27017/showDev";

class Database {
  private static instance: Database;

  constructor() {
    this.connect();
  }
  connect(type = " mongodb") {
    if (true) {
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }

    mongoose
      .connect(connectString)
      .then(() => {
        console.log("Connected to MongoDB successfully.");
      })
      .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
      });
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}
const instanceMongodb = Database.getInstance();

export default instanceMongodb;
