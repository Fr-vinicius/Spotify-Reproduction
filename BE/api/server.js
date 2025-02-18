import express from "express";
import cors from "cors";
import path from "path";
import { db } from "./connect.js";

const app = express();
const __dirname = path.resolve();
app.use(cors());

const PORT = 3001;

app.get("/api/artists", async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
});
app.get("/api/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});
app.use(express.static(path.join(__dirname, "../FE/dist")));

app.get("*", async (request, response) => {
  response.sendFile(path.join(__dirname, "../FE/dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT} 🚀`);
});
