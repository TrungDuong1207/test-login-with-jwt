import multer from 'multer';
const upload = multer();
import express from "express";
import bodyParser from 'body-parser';
import { AppDataSource } from "./src/data-source";
import { User } from "./src/entity/User";
import { routerUser } from "./src/routers/auth.router";
import cookieParser from 'cookie-parser';
const PORT = 3000;
const app = express();
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());
AppDataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!")
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err)
  })
export let userRepo = AppDataSource.getRepository(User);
app.use("/", routerUser);
app.listen(PORT, () => {
  console.log("App running with port: " + PORT)
})



