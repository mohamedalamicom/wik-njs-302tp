import axios, { AxiosPromise, AxiosResponse } from "axios";
import api from '../api';

export interface UserSchema {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: { lat: number, lng: number }
  },
  phone: string,
  website: string,
  company: { name: string, catchPhrase: string, bs: string }
}

interface User extends UserSchema{}
class User implements UserSchema{
  constructor(userData:UserSchema){
    Object.assign(this,userData);

  }

  static async find(props:{[key:string]:any}):Promise<User|User[]>{
    const {data} = await api.get<User|User[]>('users/?' + 
    Object.keys(props)
    .map(
      (value)=>value+"="+props[value]
    )
    .join('&'));
    return data ;
  }
  static async findById(id: number): Promise<User>{
    const {data} = await api.get<User>(`users/${id}`);
    return data;
  }
  static async create(props:UserSchema){
    const user =  new User(props);
    api.post('user/',JSON.stringify(user));
  }
  async updateById(id:number,props:User):Promise<User>{
    const {data} =  await api.put<User>(`users/${id}`,props);
    return data ;
  }
  async deleteById(id:number):Promise<void>{
    api.delete(`users/${id}`)
  }
  public async save(){
    api.put('users/',this);
  }
  toString(){
    return `Auteur : ${this.username}`
  }
}

export default User