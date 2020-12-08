class Lodash {
  compact(array) {
    return array.filter(value => !!value)
  }

  groupBy(array, prop) {
    return array.reduce((acc, el) => {
      const key = typeof prop === 'function' ? prop(el) : el[prop]

      if (!acc[key]) {
        acc[key] = []
      }
      acc[key].push(el)

      return acc
    }, {})
  }
}

module.exports = Lodash
