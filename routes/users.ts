// @ts-ignore
import * as express from 'express'
import {body} from "express-validator";
import {users} from '../controllers/users';

export let router: any = express.Router();

router.get(
  '/register',
  body('email'),
  body('name'),
  body('password'),
  users.register
);