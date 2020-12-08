function map(array, callback) {
  const result = []

  for (let i = 0; i < array.length; i++) {
		const el = array[i]
    result.push(callback(el))
  }

  return result
}

module.exports = { map } 