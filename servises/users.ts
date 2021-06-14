import {os} from './database';
import {User} from './interfases';

class users extends os {
  async registerUser(user:User):Promise<any> {
    const result: any = await this.knex('users').insert(user, ['*']);
    return result[0];
  }

  async findUserEmail(email):Promise<any> {
    let result: any = await this.knex('users').select('*').where({'email': email});
    if(result.length == 0) return null;
    return result[0];
  }

  async findUserId(id):Promise<any> {
    let result: any = await this.knex('users').select('*').where({id});
    if(result.length == 0) return null;
    return result[0];
  }

  async changePass(user:User):Promise<any> {
    let result: any = await this.knex('users').update({'password': user.password}).where({'id': user.id});
    return true;
  }

  async deleteUser(user:User):Promise<any> {
    let result: any = await this.knex('users').delete().where({'id': user.id});
    return true;
  }
}

export const user: any = new users();