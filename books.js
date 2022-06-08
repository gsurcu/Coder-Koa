const Router = require('koa-router');

const router = new Router({
  prefix: '/books'
});

let books = [
  { id: 100, name: 'Una vida, una muerte', author: 'Anabel'},
  { id: 101, name: 'Jugando con dos dados', author: 'Bernardo'},
  { id: 102, name: 'Cuentos fantasticos', author: 'Camilo'},
]

router.get('/', ctx => {
  ctx.body = {
    success : true,
    message: books,
  }
})

router.get('/:id', ctx => {
  const getCurrentBook = books.filter( book => {
    if (book.id == ctx.params.id) {
      return true
    }
  })

  if (getCurrentBook.length) {
    ctx.body = getCurrentBook[0]
  } else {
    ctx.response.status = 404
    ctx.body = {
      success: 'error',
      message: 'Book Not Found with that id',
    }
  }
})

module.exports = router;