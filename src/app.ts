import express, { Application, Request, Response } from 'express'
const app:Application = express()


app.get('/',(req:Request,res:Response)=>{
    
    console.log("hello world");
    res.end("hello server")
})

export default app;