"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Task_1 = require("../../domain/models/Task");
const moment_timezone_1 = __importDefault(require("moment-timezone"));
class CreateTask {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    execute(title, description) {
        let task = new Task_1.Task(title, description);
        task.createdAt = moment_timezone_1.default();
        task.updateAt = moment_timezone_1.default();
        return this.taskRepository.persist(task);
    }
}
exports.CreateTask = CreateTask;
//# sourceMappingURL=CreateTask.js.map