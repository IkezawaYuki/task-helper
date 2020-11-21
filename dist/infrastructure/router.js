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
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const TasksController_1 = require("../interfaces/controllers/TasksController");
const MysqlConnection_1 = require("./MysqlConnection");
const mysqlConnection = new MysqlConnection_1.MysqlConnection();
const tasksController = new TasksController_1.TasksController(mysqlConnection);
let router = express.Router();
router.get('/tasks', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let results = yield tasksController.findAllTasks(req, res);
    res.send(results);
}));
router.get('/tasks/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let result = yield tasksController.findTask(req, res);
    res.send(result);
}));
router.post('/tasks', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let result = yield tasksController.createTask(req, res);
    res.send(result);
}));
router.patch('/tasks', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let result = yield tasksController.updateTask(req, res);
    res.send(result);
}));
router.delete('/task', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let result = yield tasksController.deleteTask(req, res);
    res.send(result);
}));
exports.default = router;
//# sourceMappingURL=router.js.map