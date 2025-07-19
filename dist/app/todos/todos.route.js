"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todosRouter = void 0;
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const filepath = path_1.default.join(__dirname, '../../../DB/todo.json');
console.log(filepath, "it is filepath");
exports.todosRouter = express_1.default.Router();
exports.todosRouter.get("/", (req, res) => {
    const data = fs_1.default.readFileSync(filepath, { encoding: "utf-8" });
    console.log("from todo router file");
    res.json({
        message: "from todos router",
        data
    });
});
exports.todosRouter.post('/create-todo', (req, res) => {
    const { title, body } = req.body;
    console.log(title, body);
    console.log(req.body);
    res.end('Post todo new');
});
exports.todosRouter.get('/:title', (req, res) => {
    const { title, body } = req.body;
    console.log(title, body);
    console.log(req.body);
    res.end('get single todo');
});
exports.todosRouter.put('/update-todo/:title', (req, res) => {
    const { title, body } = req.body;
    console.log(title, body);
    console.log(req.body);
    res.end('uppdate todo');
});
exports.todosRouter.post('/delete-todo/:title', (req, res) => {
    const { title, body } = req.body;
    console.log(title, body);
    console.log(req.body);
    res.end('delete toodo');
});
