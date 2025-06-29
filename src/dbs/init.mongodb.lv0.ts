import mongoose from "mongoose";

const connectString = "mongodb://localhost:27017/showDev";

mongoose
  .connect(connectString)
  .then(() => {
    console.log("Connected to MongoDB successfully.");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

if (true) {
  mongoose.set("debug", true);
  mongoose.set("debug", { color: true });
}

export default mongoose;
