const productsDto = (product, _id, timeStamp) => {
  return {
    ...product,
    _id,
    timeStamp
  }
}

module.exports = productsDto;