// @ts-ignore
import express from 'express';
// @ts-ignore
import passport from 'passport';

const app = express();

import {config} from './config/config';

export { app };




// Other
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());
// require('./middleware/passport')(passport);
app.use(`/${config.pathToUploads}`, express.static(config.pathToUploads));

// Routes
// app.use('/api/posts', postRoutes);
// app.use('/api/account', accountRoutes);
// app.use('/api/comments', commentRoutes);

// OS
app.get('/', (req: express.Request, res: express.Response) => {
  res.send('ok!');
});



