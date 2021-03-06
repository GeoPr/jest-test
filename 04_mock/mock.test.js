const { map } = require('./mock')

describe('my map function', () => {
  let array
  let fn

  beforeEach(() => {
    array = [1, 2, 3, 5, 8]
    fn = jest.fn(x => x ** 2)
    map(array, fn)
  })

  it('should call callback', () => {
    expect(fn).toBeCalled()
  })

  it('should call seven times', () => {
    expect(fn).toBeCalledTimes(5)
    expect(fn.mock.calls.length).toBe(5)
  })

  it('should pow each element', () => {
    expect(fn.mock.results[0].value).toBe(1)
    expect(fn.mock.results[1].value).toBe(4)
    expect(fn.mock.results[2].value).toBe(9)
    expect(fn.mock.results[3].value).toBe(25)
    expect(fn.mock.results[4].value).toBe(64)
  })

  it('the fn should work', () => {
		fn
			.mockReturnValueOnce(100)
			.mockReturnValueOnce(200)
			.mockReturnValue(21)

		expect(fn()).toBe(100)
		expect(fn()).toBe(200)
		expect(fn()).toEqual(21)
  })
})
