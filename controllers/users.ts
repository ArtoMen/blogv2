// import {registerUser, loginUser} from "../servises/interfases";
import * as express from 'express';
import {errorValidation} from "../servises/functions";

export class users {
  static async register(req: express.Request, res: express.Response): Promise<any> {
    if(errorValidation(req,res)) return false;
    res.json({status: 'ok'});
  }


}
