import { Router } from 'express';
import verifyJwt from '../middleware/verifyJwt';
import * as organization from '../controller/organization';
import * as user from '../controller/user';
import * as auth from '../controller/auth';
import { pong } from '../controller/ping';

let routes = Router();

/**
 * Health check route.
 * Always returns 200 OK
 */
routes.get('/ping', pong);

// login route
routes.post('/auth/login', auth.login);

// Auth middleware
// routes.use(verifyJwt);

// organization Routes
routes.get('/organization/:id', organization.findOrgById);
routes.post('/organization', organization.createOrg);

//user routes
routes.post('/user', user.createUser);
routes.get('/user', user.getMe);
routes.get('/user/:userId', user.getOne);
routes.delete('/user/:userId', user.deleteOne);

export default routes;
