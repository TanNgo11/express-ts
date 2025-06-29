import mongoose from "mongoose";
import os from "os";

export const countConnect = () => {
  const numConnections = mongoose.connections.length;
  console.log("🚀 ~ countConnect ~ numConnections:", numConnections);
};

export const checkOverLoad = () => {
  setInterval(() => {
    const numConnections = mongoose.connections.length;
    const numCores = os.cpus().length;
    const memoryUsage = process.memoryUsage().rss;

    const maxConnections = numCores * 5;

    console.log(`memoryUsage: ${memoryUsage / 1024 / 1024} MB`);
    console.log(`numConnections: ${numConnections}`);

    if (numConnections > maxConnections) {
      console.error(
        `Error: Too many connections to MongoDB! Current: ${numConnections}, Max: ${maxConnections}`
      );
    }

    if (numConnections > 10) {
      console.warn("Warning: Too many connections to MongoDB!");
    }
  }, 5000);
};
