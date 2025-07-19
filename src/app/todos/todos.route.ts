import express, { Request, Response } from "express"
import fs from 'fs';
import path from "path";



const filepath = path.join(__dirname,'../../../DB/todo.json')
console.log(filepath,"it is filepath");

export const todosRouter = express.Router()

todosRouter.get("/",(req:Request,res:Response)=>{
    const data = fs.readFileSync(filepath,{encoding:"utf-8"})
    console.log("from todo router file");
    res.json({
        message:"from todos router",
        data
    })
})

todosRouter.post('/create-todo',(req:Request,res:Response)=>{
    const {title,body} = req.body ;
    console.log(title,body);
    console.log(req.body);
    res.end('Post todo new')
})
todosRouter.get('/:title',(req:Request,res:Response)=>{
    const {title,body} = req.body ;
    console.log(title,body);
    console.log(req.body);
    res.end('get single todo')
})

todosRouter.put('/update-todo/:title',(req:Request,res:Response)=>{
    const {title,body} = req.body ;
    console.log(title,body);
    console.log(req.body);
    res.end('uppdate todo')
})
todosRouter.post('/delete-todo/:title',(req:Request,res:Response)=>{
    const {title,body} = req.body ;
    console.log(title,body);
    console.log(req.body);
    res.end('delete toodo')
})