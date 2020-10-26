import express from "express";
// import {usersRouter} from "./src/routes/users-router";
import responseTime from "response-time";

import cors from "cors";

export const server = express();

server.use(cors());
server.use(express.json());
server.use(responseTime());

// server.use("/api/users", usersRouter);

server.get("/", async (req, res) => {
    res.send("Welcome!");
});