const Lodash = require('./sync')

describe('Lodash', () => {
  const _ = new Lodash()

  let array = [
    1,
    2,
    0,
    '',
    'something',
    false,
    null,
    undefined,
    true,
    NaN,
    Infinity,
  ]
  resultArray = [1, 2, 'something', true, Infinity]

  beforeEach(() => {
    array = [
      1,
      2,
      '',
      'something',
      false,
      null,
      undefined,
      0,
      true,
      NaN,
      Infinity,
    ]
    resultArray = [1, 2, 'something', true, Infinity]
  })
  // beforeAll, afterEach, afterAll
  // before or after every call && before or after everything

  describe('compact', () => {
    test('should be defined', () => {
      expect(_.compact).toBeDefined()
      expect(_.compact).not.toBeUndefined()
    })
    test('should be remove falsy values from an array', () => {
      expect(_.compact(array)).toEqual(resultArray)
      // toBe is only for primitives
    })
    test('should not contain falsy values', () => {
      expect(_.compact(array)).not.toContain(false)
      expect(_.compact(array)).not.toContain(null)
      expect(_.compact(array)).not.toContain('')
      expect(_.compact(array)).not.toContain(0)
      expect(_.compact(array)).not.toContain(NaN)
      expect(_.compact(array)).not.toContain(undefined)
    })
  })

  describe('groupBy', () => {
    test('should be defined', () => {
      expect(_.groupBy).toBeDefined()
    })
    test('should group array items by Math.floor', () => {
      const array = [6.1, 4.2, 6.3]
      const result = {
        4: [4.2],
        6: [6.1, 6.3],
			}
			
      expect(_.groupBy(array, Math.floor)).toEqual(result)
    })

    test('should group array items by length', () => {
      const array = ['one', 'two', '12345']
      const result = {
        3: ['one', 'two'],
        5: ['12345'],
			}
			
      expect(_.groupBy(array, 'length')).toEqual(result)
    })

    test('should not return array', () => {
      expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array)
    })
  })
})
