// @ts-ignore
import * as express from 'express'
import {users} from '../controllers/users';

export let router: any = express.Router();

router.get('/register', users.register);