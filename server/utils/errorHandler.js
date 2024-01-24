class ErrorHandler extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode=statusCode;
        Error.captureStackTrace(this,this.constructor)
    }
}


//this : the error object to which the stack trace should be capture

//this.constructor : the constructor function t omit from the stack trace

module.exports={ErrorHandler}