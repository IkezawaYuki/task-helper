import {Task} from "../../domain/models/Task";
import {CreateTask} from "../../application/usecases/CreateTask";
import {UpdateTask} from "../../application/usecases/UpdateTask";
import {DeleteTask} from "../../application/usecases/DeleteTask";
import {GetTask} from "../../application/usecases/GetTask";
import {ListTasks} from "../../application/usecases/ListTasks";
import {IDBConnection} from "../database/IDBConnection";
import {TaskRepository} from "../database/TaskRepository";
import {TaskSerializer} from "../serializers/TaskSerializer";


export class TasksController{
    private readonly taskRepository: TaskRepository
    private taskSerializer: TaskSerializer

    constructor(dbConnection: IDBConnection) {
        this.taskSerializer = new TaskSerializer()
        this.taskRepository = new TaskRepository(dbConnection)
    }

    async findTask(req: any, res: any){
        const id = req.params.id
        const useCase = new GetTask(this.taskRepository)
        let result = await useCase.execute(id)
        return this.taskSerializer.serialize(result)
    }

    async findAllTasks(req: any, res: any){
        const useCase = new ListTasks(this.taskRepository)
        let results = await useCase.execute()
        return this.taskSerializer.serialize(results)
    }

    async createTask(req: any, res: any){
        const {title, description} = req.body
        const useCase = new CreateTask(this.taskRepository)
        let result = await useCase.execute(title, description)
        return this.taskSerializer.serialize(result)
    }

    async updateTask(req: any, res: any){
        const id = req.params.id
        const {title, description} = req.body
        const useCase = new UpdateTask(this.taskRepository)
        let result = await useCase.execute(id, title, description)
        return this.taskSerializer.serialize(result)
    }

    async deleteTask(req: any, res: any){
        const id = req.params.id
        const useCase = new DeleteTask(this.taskRepository)
        let result = await useCase.execute(id)
        return this.taskSerializer.serialize(result)
    }
}