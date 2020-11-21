"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListTasks {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    execute() {
        return this.taskRepository.findAll();
    }
}
exports.ListTasks = ListTasks;
//# sourceMappingURL=ListTasks.js.map