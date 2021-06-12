export interface User {
  id?:number,
  name:string,
  password?:string,
  email:string
}

export interface Post {
  id?:number,
  user_id:number,
  title:string,
  image:string,
  body:string,
  create_time:string,
  update_time:string,
  update:boolean
}

export interface PostUpdate {
  title?:string,
  image?:string,
  body?:string,
  update_time:string,
  update:boolean
}
