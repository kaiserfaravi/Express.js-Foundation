import express, { Application, Request, Response } from 'express'
import fs from 'fs';
import path from 'path';
import { todosRouter } from './app/todos/todos.route';
const app:Application = express()

app.use(express.json())

app.use("/todos",todosRouter)



app.get('/',(req:Request,res:Response)=>{
    res.end("hello server ")
})



export default app;