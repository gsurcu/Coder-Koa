const Koa = require('koa');
const koaBody = require('koa-body');
const { TIPO_PERSISTENCIA } = require('./src/config');

const app = new Koa();

app.use(koaBody());

let ApiRouter = require('./src/routers/api/api.routes');
let router = new ApiRouter()
app.use(router.start());

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
  console.log(`Servidor Koa escuchando en el puerto ${server.address().port} - ${TIPO_PERSISTENCIA}`)
})

server.on('error', error => {
  console.log('Error en el servidor Koa :', error);
})