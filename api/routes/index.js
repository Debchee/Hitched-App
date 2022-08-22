import homeRoute from './home/home.routes.js'
import authRoute from './auth/auth.routes.js';



const routers = (app) => {
  app.use('/home', homeRoute);
  app.use('/api/v1/auth', authRoute);

}

export default routers;