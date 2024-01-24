const { ErrorHandler } = require("../utils/errorHandler");

module.exports=(err,req,res,next)=>{
    err.statusCode=err.statusCode || 500
    err.message=err.message || "Internal ServeR Error";

    //Duplicate Key error
    if(err.code ===11000){
        const msg=`Duplicate key ${Object.keys(err.keyValue)} entered`
        err=new ErrorHandler(msg,400)

    }

    //wrong JWT
    if(err.name==="JsonWebTokenError"){
        const msg="Your URL is invalid";
        err=new ErrorHandler(msg,400)
    }

    //JWT token expired
    if(err.name==="TokenExpiredError"){
        const msg="your url is expired"
        err=new ErrorHandler(msg,400)
    }
    
    res.status(err.statusCode).json({success:false,message:err.message})


}