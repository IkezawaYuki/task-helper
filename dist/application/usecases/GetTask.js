"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetTask {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    execute(id) {
        return this.taskRepository.find(id);
    }
}
exports.GetTask = GetTask;
//# sourceMappingURL=GetTask.js.map