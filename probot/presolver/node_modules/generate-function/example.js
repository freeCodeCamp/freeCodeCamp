const genfun = require('./')
const { d } = genfun.formats

function multiply (a, b) {
  return a * b
}

function addAndMultiplyNumber (val) {
  const fn = genfun(`
    function (n) {
      if (typeof n !== 'number') {
        throw new Error('argument should be a number')
      }
      const result = multiply(${d(val)}, n + ${d(val)})
      return result
    }
  `)

  // use fn.toString() if you want to see the generated source

  return fn.toFunction({multiply})
}

const addAndMultiply2 = addAndMultiplyNumber(2)

console.log(addAndMultiply2.toString())
console.log('(3 + 2) * 2 =', addAndMultiply2(3))
