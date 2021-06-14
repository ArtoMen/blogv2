import * as express from 'express';
import {errorValidation} from "../servises/functions";
import * as passport from "passport";
import {User} from "../servises/interfases";
import * as db from '../servises/users';

export class users {
  static async register(req: express.Request, res: express.Response): Promise<any> {
    if(errorValidation(req,res)) return false;
    res.json({status: 'ok'});
  }

  static async login(req: express.Request, res: express.Response): Promise<any> {
    if(errorValidation(req,res)) return false;
    const user: User = await db.user.findUserEmail(req.body.email);
    if(!user) {

    }
    // await passport.authenticate()
    res.json({status: 'ok'});
  }


}
