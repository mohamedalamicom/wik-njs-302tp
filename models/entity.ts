import axios from "axios";

class Entiy{
    private _classname:number
    


    static function find<T>(entity:T,props:string[]):Promise<T>{
        const {data} = await axios.get<T>(entity.className+"/"+props.join('&'))
        return data;
    }
    static function findById<T>(entity:T,props:string):Promise<T>{
        const {data} = await axios.get<T>(entity.className+"/"+props);
        return data ;
    }
    static function create<T>:T{

    }
    static function updateById<T>({id}:T,props:Object):T{
        Entity.findById()
    }
    deleteById

    static function save<T>(methode:string, entity:T){
        switch (metode){
            case 'create':
                axios.put(entity.className,entity.proprieties);
                break;
            case 'delete':
                axios.delete(entity.proprieties["id"]);
                break;
            case 'update':
                axios.post(entity);

        }
    }
}