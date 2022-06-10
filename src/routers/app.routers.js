const Router = require('koa-router');
const ApiRouter = require('./api/api.routes');
const { warnLog, infoLog } = require('../middlewares/logger');
// const graphql = require('./graphql/graphql.routes');

const router = new Router({
  prefix: '/'
});
//Routes
class Routes {
  constructor() {
    this.apiRoutes = new ApiRouter()
  }

  start(){
    router.use(infoLog);
    router.use(this.apiRoutes.start());
    // router.use('/graphql', graphql)
    // router.use('/*', warnLog);
    return router.routes();
  }
}
const instance = new Routes()
module.exports = instance;