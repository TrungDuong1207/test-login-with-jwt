const jwt = require('jsonwebtoken');
let checkLogin = async (req, res, next) => {
    try{
        let tokenUser = req.cookies.token;
        console.log(tokenUser);
        
        let resultVerify = jwt.verify(tokenUser, "mk");
        console.log(resultVerify);
        if(resultVerify){
            res.send("welcome home");
        } 
    } catch(err){
        console.log(err.stack);
        next();
    }
}

export default checkLogin;