"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todosRouter = void 0;
const express_1 = __importDefault(require("express"));
const mongodb_1 = require("../../config/mongodb");
const mongodb_2 = require("mongodb");
// const filepath = path.join(__dirname,'../../../DB/todo.json')
// console.log(filepath,"it is filepath");
exports.todosRouter = express_1.default.Router();
exports.todosRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const db = yield mongodb_1.client.db("todosDB");
    const collection = yield db.collection('todos');
    const cursor = yield collection.find({});
    const todos = yield cursor.toArray();
    res.json(todos);
}));
exports.todosRouter.post('/create-todo', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, priority } = req.body;
    const db = yield mongodb_1.client.db("todosDB");
    const collection = yield db.collection('todos');
    yield collection.insertOne({
        title: title,
        description: description,
        priority: priority,
        isComplete: false
    });
    const cursor = yield collection.find({});
    const todos = yield cursor.toArray();
    res.json(todos);
}));
exports.todosRouter.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const db = yield mongodb_1.client.db("todosDB");
    const collection = yield db.collection('todos');
    const todo = yield collection.findOne({ _id: new mongodb_2.ObjectId(id) });
    res.json(todo);
}));
exports.todosRouter.put('/update-todo/:id', (req, res) => {
    const { title, body } = req.body;
    console.log(title, body);
    console.log(req.body);
    res.end('uppdate todo');
});
exports.todosRouter.post('/delete-todo/:id', (req, res) => {
    const { title, body } = req.body;
    console.log(title, body);
    console.log(req.body);
    res.end('delete toodo');
});
