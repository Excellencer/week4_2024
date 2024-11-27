"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const body_parser_1 = __importDefault(require("body-parser"));
const path_1 = __importDefault(require("path"));
const router = (0, express_1.Router)();
const jsonParser = body_parser_1.default.json();
let UserList = [];
router.get('/', (req, res) => {
    res.sendFile(path_1.default.join('public', '../index.html'));
    res.sendFile(path_1.default.join('public', '../js/main.js'));
});
router.post("/add", jsonParser, function (req, res) {
    let index = 0;
    index = UserList.findIndex(x => x.name === req.body.name);
    console.log(index);
    if (index === -1) {
        UserList.push({ name: req.body.name, todos: [req.body.todo] });
        res.send(`Todo added successfully for user ${req.body.name}.`);
    }
    else {
        UserList[index].todos.push(req.body.todo);
        res.send(`Todo added successfully for user ${req.body.name}.`);
    }
    //console.log(UserList)
    //console.log(UserList[0].todos)
    //console.log(UserList[0].todos[0])
});
router.get("/todos/:id", jsonParser, function (req, res) {
    let index = 0;
    let username = req.params.id;
    index = UserList.findIndex(x => x.name === username);
    if (index === -1) {
        res.status(201).send("User not found");
    }
    else {
        console.log(UserList[index].todos);
        res.json(UserList[index].todos);
    }
});
/*
router.delete("/user/:username", function (req, res) {
    console.log("Toimii")
    let index = 0;
    let username = req.params.username;
    index = list.findIndex(x => x.name === username);
    if (index === -1) {
      console.log("Hello 2")
      res.send("User not found")
    } else {
      list.splice(index, 1)
      console.log("Hello 1")
      res.send("User deleted");
    }
  });
*/
exports.default = router;
