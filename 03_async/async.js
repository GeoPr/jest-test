const axios = require('axios')

class Ajax {
  static echo(data, delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data) {
        	resolve(data)
        } else {
        	reject(new Error('some error'))
        }
      }, delay)
    })
  }

  static async get() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=2')
      return response.data
    } catch (e) {
      console.log(e)
    }
  }
}

module.exports = Ajax