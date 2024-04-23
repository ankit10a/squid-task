import bodyParser from "body-parser";
import express from "express";
import path from "path"
import router from "./routes";
import { PrismaClient } from "@prisma/client";

const app = express();

// database
export const prismaClient = new PrismaClient()


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use("/api",router)
app.use(
    express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
);


export default app;