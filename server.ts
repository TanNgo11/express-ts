import app from "./src/app";

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}`);
});

process.on("SIGINT", () => {
  server.close(() => {
    console.log("Server closed.");
  });
});
