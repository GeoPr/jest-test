const { sum, nativeNull } = require('./intro')

describe('functions', () => {
  describe('the sum function', () => {
    it('should return sum of two values', () => {
      expect(21).toEqual(sum(20, 1))
      expect(3).toEqual(sum(2, 1))
    })
    it('should return value wich greater than 21', () => {
      expect(sum(20, 2)).toBeGreaterThan(21)
    })
    it('should return value wich greater than 22 or equal to 22', () => {
      expect(sum(20, 2)).toBeGreaterThanOrEqual(22)
    })
    // toBeLessThan, toBeLessThanOrEqual
    it('', () => {
      expect(0.3).toBeCloseTo(sum(0.1, 0.2))
      // Expected: 0.30000000000000004
      expect(0.7).toBe(sum(0.3, 0.4))
    })
  })
  describe('the nativeNull function', () => {
    it('should return null', () => {
      expect(nativeNull()).toBe(null)
		})
		it('should not equal to 1', () => {
			expect(nativeNull()).not.toEqual(1)
		})
		it('should not equal to null', () => {
			expect(nativeNull()).toBeNull()
		})
		it('should not equal to NaN', () => {
			expect(nativeNull()).not.toBeNaN()
		})
		it('should be like falsy value', () => {
			expect(nativeNull()).toBeFalsy()
		})
		it('should be defined', () => {
			expect(nativeNull()).toBeDefined()
		})
  })
})
