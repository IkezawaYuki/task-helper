import moment from 'moment-timezone'

export class Task{

    private _id: number
    private _title: string
    private _description: string
    private _createdAt: moment.Moment
    private _updatedAt: moment.Moment

    get id(): number{
        return this._id
    }

    set id(id: number){
        this._id = id
    }

    get title(): string{
        return this._title
    }

    set title(title: string){
        this._title = title
    }

    get description(): string {
        return this._description;
    }

    set description(description: string){
        this._description = description
    }

    get createdAt(): moment.Moment {
        return this._createdAt;
    }

    set createdAt(value: moment.Moment) {
        this._createdAt = value;
    }

    getUTCCreatedAt(): string{
        if (this._createdAt){
            return this._createdAt.utc().format("YYYY-MM-DD HH:mm:ss")
        }
        return null
    }

    get updateAt(): moment.Moment {
        return this._updatedAt;
    }

    set updateAt(value: moment.Moment) {
        this._updatedAt = value;
    }

    getUTCUpdatedAt(): string{
        if (this._updatedAt){
            return this._updatedAt.utc().format("YYYY-MM-DD HH:mm:ss")
        }
        return null
    }

    constructor(title: string = null, description: string = null) {
        this._title = title
        this._description = description
    }
}