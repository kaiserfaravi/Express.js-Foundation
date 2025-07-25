import express, { Request, Response } from "express"
import fs from 'fs';
import path from "path";
import { client } from "../../config/mongodb";
import { ObjectId } from "mongodb";



// const filepath = path.join(__dirname,'../../../DB/todo.json')
// console.log(filepath,"it is filepath");

export const todosRouter = express.Router()

todosRouter.get("/", async (req: Request, res: Response) => {

  const db = await client.db("todosDB")
  const collection = await db.collection('todos')

  const cursor = await collection.find({});
  const todos = await cursor.toArray()

  res.json(todos)

})

todosRouter.post('/create-todo', async (req: Request, res: Response) => {

  const { title, description, priority } = req.body;


  const db = await client.db("todosDB")
  const collection = await db.collection('todos')

  await collection.insertOne({
    title: title,
    description: description,
    priority: priority,
    isComplete: false
  })

  const cursor = await collection.find({});
  const todos = await cursor.toArray()
  res.json(todos)
})


todosRouter.get('/:id', async (req: Request, res: Response) => {

  const id = req.params.id;
  const db = await client.db("todosDB")
  const collection = await db.collection('todos')

  const todo = await collection.findOne({_id: new ObjectId(id)})

  res.json(todo)
})

todosRouter.put('/update-todo/:id', (req: Request, res: Response) => {
  const { title, body } = req.body;
  console.log(title, body);
  console.log(req.body);
  res.end('uppdate todo')
})
todosRouter.post('/delete-todo/:id', (req: Request, res: Response) => {
  const { title, body } = req.body;
  console.log(title, body);
  console.log(req.body);
  res.end('delete toodo')
})