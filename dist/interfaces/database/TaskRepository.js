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
const Task_1 = require("../../domain/models/Task");
const ITaskRepository_1 = require("../../application/repositories/ITaskRepository");
const moment_timezone_1 = __importDefault(require("moment-timezone"));
class TaskRepository extends ITaskRepository_1.ITaskRepository {
    constructor(connection) {
        super();
        this.connection = connection;
    }
    convertModel(r) {
        let task = new Task_1.Task();
        task.id = r.id;
        task.title = r.title;
        task.description = r.description;
        task.updateAt = moment_timezone_1.default.tz(r.updateAt, 'utc');
        task.createdAt = moment_timezone_1.default.tz(r.createdAt, 'utc');
        return task;
    }
    delete(task) {
        return __awaiter(this, void 0, void 0, function* () {
            let queryResult = yield this.connection.execute("delete from tasks where id = ?", task.id);
            return this.convertModel(task);
        });
    }
    find(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let queryResults = yield this.connection.execute("select * from tasks where id = ?", id);
            return this.convertModel(queryResults[0]);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            let queryResults = yield this.connection.execute("select * from tasks");
            return queryResults.map((data) => {
                return this.convertModel(data);
            });
        });
    }
    merge(task) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield this.connection.execute('update tasks set title=?, description=?, updated_at=?, created_at=? where id = ?', [task.title, task.description, task.updateAt, task.createdAt, task.id]);
            return task;
        });
    }
    persist(task) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield this.connection.execute('insert into tasks (title, description, created_at, updated_at) (?, ?, ?, ?)', [
                task.title,
                task.description,
                task.getUTCCreatedAt(),
                task.getUTCUpdatedAt()
            ]);
            task.id = result.id;
            return task;
        });
    }
}
exports.TaskRepository = TaskRepository;
//# sourceMappingURL=TaskRepository.js.map