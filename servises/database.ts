export class os {
  public knex: any;
  constructor() {
    this.knex = require('knex')({
      client: 'pg',
      version: '7.2',
      connection: {
        host : 'batyr.db.elephantsql.com',
        user : 'esnxokzt',
        password : 'EMfkwYYI1il1_4Jf27jJSGzYKHiCNEJ6',
        database : 'esnxokzt'
      }
    });
  }
}