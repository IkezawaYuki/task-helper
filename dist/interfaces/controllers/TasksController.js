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
const CreateTask_1 = require("../../application/usecases/CreateTask");
const UpdateTask_1 = require("../../application/usecases/UpdateTask");
const DeleteTask_1 = require("../../application/usecases/DeleteTask");
const GetTask_1 = require("../../application/usecases/GetTask");
const ListTasks_1 = require("../../application/usecases/ListTasks");
const TaskRepository_1 = require("../database/TaskRepository");
const TaskSerializer_1 = require("../serializers/TaskSerializer");
class TasksController {
    constructor(dbConnection) {
        this.taskSerializer = new TaskSerializer_1.TaskSerializer();
        this.taskRepository = new TaskRepository_1.TaskRepository(dbConnection);
    }
    findTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const useCase = new GetTask_1.GetTask(this.taskRepository);
            let result = yield useCase.execute(id);
            return this.taskSerializer.serialize(result);
        });
    }
    findAllTasks(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const useCase = new ListTasks_1.ListTasks(this.taskRepository);
            let results = yield useCase.execute();
            return this.taskSerializer.serialize(results);
        });
    }
    createTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, description } = req.body;
            const useCase = new CreateTask_1.CreateTask(this.taskRepository);
            let result = yield useCase.execute(title, description);
            return this.taskSerializer.serialize(result);
        });
    }
    updateTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const { title, description } = req.body;
            const useCase = new UpdateTask_1.UpdateTask(this.taskRepository);
            let result = yield useCase.execute(id, title, description);
            return this.taskSerializer.serialize(result);
        });
    }
    deleteTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const useCase = new DeleteTask_1.DeleteTask(this.taskRepository);
            let result = yield useCase.execute(id);
            return this.taskSerializer.serialize(result);
        });
    }
}
exports.TasksController = TasksController;
//# sourceMappingURL=TasksController.js.map