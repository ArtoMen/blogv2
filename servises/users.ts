import {os} from './database';
// import {user} from './interfases';

export class users extends os {
  async register():Promise<any> {
    let user1: any;
    user1 = await this.knex('users').insert({}, ['*']);
    console.log(user1);
    return user1;
  }
}