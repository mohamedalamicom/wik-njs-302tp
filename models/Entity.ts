export class Entity {
    private _className : string
    private _proprieties : Array<number|string|null>
    private static _repository : Array<Entity>
    
    public get className() { return this._className}
    public set className(className:string) { this._className = className }

    public get proprieties() { return this._proprieties}
    public set proprieties(proprieties:Array<number|string|null>) { this._proprieties = proprieties }

    public static get repository() { return this._repository}
    public static set repository(repository:Array<Entity>) { this._repository = repository }

    public static find() {

    }

    public static findById() {
        
    }

    public static create() {
        
    }

    public static update() {
        
    }

    public static delete() {
        
    }

    public static save() {
        
    }
}
export default Entity