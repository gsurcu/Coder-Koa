const Koa = require('koa');
const koaBody = require('koa-body');

const app = new Koa();

app.use(koaBody());

let books = require('./books')
let router = require('./src/routers/app.routers');

app.use(router.start());
// app.use(books.routes());

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
  console.log(`Servidor Koa escuchando en el puerto ${server.address().port}`)
})

server.on('error', error => {
  console.log('Error en el servidor Koa :', error);
})