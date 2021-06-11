import {registerUser, loginUser} from "../servises/interfases";
import * as express from 'express';

export class users {
  static async register(req: express.Request, res: express.Response): Promise<any> {
    console.log(false);
    res.json({status: 'ok'});
  }
}
