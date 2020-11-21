"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_timezone_1 = __importDefault(require("moment-timezone"));
const _serializeSingleTask = (task) => {
    return {
        id: task.id,
        title: task.title,
        description: task.description,
        createdAt: moment_timezone_1.default(task.createdAt)
            .tz("Asia/Tokyo")
            .format(),
        updatedAt: moment_timezone_1.default(task.updateAt)
            .tz("Asia/Tokyo")
            .format()
    };
};
class TaskSerializer {
    serialize(data) {
        if (!data) {
            throw new Error('expect data to be not undefined nor null');
        }
        if (Array.isArray(data)) {
            return data.map(_serializeSingleTask);
        }
        return _serializeSingleTask(data);
    }
}
exports.TaskSerializer = TaskSerializer;
//# sourceMappingURL=TaskSerializer.js.map