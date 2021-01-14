import express from "express";
import route from "./routes";

const app = express();
const port = 3000;
const listen = () => console.log(`Listening at http://localhost:${port}`);

app.use("/", route).listen(port, listen);
