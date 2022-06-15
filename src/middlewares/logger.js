const { infoLogger, warnLogger, errorLogger} = require('../logger/index')

const infoLog = async (ctx, next) => {
  try {
    infoLogger.log('info','',{metodo: ctx.request.method, ruta: ctx.request.originalUrl})
  } catch (err) {
  }
  next()
}
const warnLog = async (ctx) => {
  try {
  } catch (err) {
    warnLogger.log('warn','',{metodo: ctx.request.method, ruta: ctx.request.originalUrl})
    ctx.response.status = 404;
    ctx.body = {
      error: -2,
      descripcion: `La ruta ${ctx.request.url} con el metodo ${ctx.request.method} no esta implementado`,
    };
  }
}
const errorLog = async (err) => {
  errorLogger.log('error', err)
}

module.exports = {
  infoLog,
  warnLog,
  errorLog,
}