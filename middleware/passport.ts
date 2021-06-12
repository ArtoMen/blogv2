// const jwtStrategy = require('passport-jwt').Strategy;
// const ExtractJwt = require('passport-jwt').ExtractJwt;
// const user = require('../db/accounts');
// const key = require('../config/config');

import {Strategy} from 'passport-jwt';
import {ExtractJwt} from 'passport-jwt';
import * as stra from 'passport-jwt';
import {user} from '../servises/users';
import {config} from '../config/config';


const options: stra.StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.secretKey
}

module.exports = (passport: any) => {
  passport.use(
    new Strategy(options, async(payload: any, done: any) => {
      let user: any;
      user = await user.findUserId(payload.id);
      if (user === null) done(null, false);
      else if (user) done(null, user);
    })
  )
}