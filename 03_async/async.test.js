const Ajax = require('./async')
const axios = require('axios')

jest.mock('axios')

describe('Ajax', () => {
  let response
  let todos

  beforeEach(() => {
    todos = [{ id: 0, title: 'Todo', completed: false }]
    response = {
      data: { todos },
    }
  })

  describe('echo', () => {
    const data = 'some data'

    it('should return async value', async () => {
      const result = await Ajax.echo(data, 150)

      expect(result).toBe(data)
    })

    it('should catch error', async () => {
      try {
      } catch (e) {
        expect(e.message).toBe('some error')
      }
    })

    it('should return async value with promise', () => {
      // return the promise to everything works correctly
      return Ajax.echo(data, 150).then(result => {
        expect(result).toBe(data)
      })
    })

    it('should catch error with promise', () => {
      // return the promise to everything works correctly
      return Ajax.echo(undefined, 150).catch(err => {
        expect(err).toBeDefined()
        expect(err).toBeInstanceOf(Error)
      })
    })
  })

  describe('get', () => {
    it('should return data from backend', async () => {
      axios.get.mockReturnValue(response)

      const data = await Ajax.get()

      expect(data.todos).toEqual(todos)
    })
  })
})
