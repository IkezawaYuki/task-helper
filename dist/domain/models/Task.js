"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Task {
    constructor(title = null, description = null) {
        this._title = title;
        this._description = description;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
    get description() {
        return this._description;
    }
    set description(description) {
        this._description = description;
    }
    get createdAt() {
        return this._createdAt;
    }
    set createdAt(value) {
        this._createdAt = value;
    }
    getUTCCreatedAt() {
        if (this._createdAt) {
            return this._createdAt.utc().format("YYYY-MM-DD HH:mm:ss");
        }
        return null;
    }
    get updateAt() {
        return this._updatedAt;
    }
    set updateAt(value) {
        this._updatedAt = value;
    }
    getUTCUpdatedAt() {
        if (this._updatedAt) {
            return this._updatedAt.utc().format("YYYY-MM-DD HH:mm:ss");
        }
        return null;
    }
}
exports.Task = Task;
//# sourceMappingURL=Task.js.map