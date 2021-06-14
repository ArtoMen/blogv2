import * as express from 'express';
import {error, errorValidation} from "../servises/functions";
import * as passport from "passport";
import {User} from "../servises/interfases";
import * as db from '../servises/users';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

export class users {
  static async register(req: express.Request, res: express.Response): Promise<any> {
    if(errorValidation(req,res)) return false;

    res.json({status: 'ok'});
  }

  static async login(req: express.Request, res: express.Response): Promise<any> {
    if(errorValidation(req,res)) return false;
    const user: User = await db.user.findUserEmail(req.body.email);
    if(!user) {
      error(res, 'user not found!');
      return;
    }
    bcrypt.compare(user.password!, req.body.password, result => {
      if(!result) error(res, 'invalid password');
      else {
        passport.authenticate('local', (err, user) => {
          if(user == false) {
            error(res, 'login failed');
          } else {
            const payload: object = {
              id: user.id
            };
            const token: any = jwt.sign({id: user.id}, 'BLOG');
            res.status(200).json({success: true, token: token});
          }
        });
      }
    });
  }


}
