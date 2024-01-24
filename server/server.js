const app=require("./App");
const { connectDB } = require("./Db/database");

//handling uncaught error
process.on("uncaughtException",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server for ${err.message}`);
})


//configuration
if(process.env.NODE_ENV !== 'PRODUCTION'){
    require("dotenv").config({
        path: "config/.env"
    })
}

//createServer
const server=app.listen(process.env.PORT,()=>{
    console.log(`server is running on http://localhost:${process.env.PORT}`);
})

//unhandled promise rejection
process.on("unhandledRejection",(err)=>{
    console.log(`Rejection: ${err.message}`);
    console.log(`shutting down server for unHandled promise rejection`);

    server.close(()=>{
        process.exit(1);
    })
})

//connectDB
connectDB()