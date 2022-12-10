import express from "express";
import { AuthController } from "../controllers/auth.controller";
import checkLogin from "../middlewares/authUser";
export const routerUser = express.Router();

routerUser.get("/login",checkLogin, async (req, res) => {
    AuthController.showLoginForm(req, res);
});

routerUser.post("/login",async (req, res, next) => {
    AuthController.login(req, res);
});








