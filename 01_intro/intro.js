const expect = (value) => ({
	toBe: exp => {
		if (exp === value) {
			console.log('success')
		} else {
			console.error('error')
		}
 	}
})

const sum = (a, b) => a + b
const nativeNull = () => null

// expect(sum(20, 1)).toBe(21)

module.exports = { sum, nativeNull }