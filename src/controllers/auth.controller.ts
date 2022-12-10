import { userRepo } from "../../index";
const jwt = require('jsonwebtoken');

export class AuthController {

    static async showLoginForm(req, res) {
        res.render("login");
    }

    static async login(req, res) {
        let user = {
            email: req.body.email,
            password: req.body.password
        }

        let userDb = await userRepo.findOneBy({email: user.email, passWord: user.password});
        console.log(userDb);
        
        if(userDb){
            let token = jwt.sign({ data: req.body.id }, "mk", { expiresIn: Date.now() + 60 * 60 * 1000 });
            console.log(token);
            let options = {
                maxAge: 1000 * 60 * 30, // would expire after 30 minutes
                httpOnly: true, // The cookie only accessible by the web server
            }
            res.cookie('token', token, options);
            res.send("welcome home");
        } else {
            res.redirect("/login");
        } 
    }

}