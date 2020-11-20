import {Task} from "../../domain/models/Task"
import {ITaskRepository} from "../repositories/ITaskRepository"
import moment from "moment-timezone"

export class CreateTask{
    private taskRepository: ITaskRepository

    constructor(taskRepository: ITaskRepository) {
        this.taskRepository = taskRepository
    }

    //todo
}