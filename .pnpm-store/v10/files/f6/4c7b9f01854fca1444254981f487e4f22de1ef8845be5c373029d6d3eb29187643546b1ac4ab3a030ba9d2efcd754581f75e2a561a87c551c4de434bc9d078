function last(array) {
  return array[array.length - 1]
}

let brackets = {
  /**
   * Parse string to nodes tree
   */
  parse(str) {
    let current = ['']
    let stack = [current]

    for (let sym of str) {
      if (sym === '(') {
        current = ['']
        last(stack).push(current)
        stack.push(current)
        continue
      }

      if (sym === ')') {
        stack.pop()
        current = last(stack)
        current.push('')
        continue
      }

      current[current.length - 1] += sym
    }

    return stack[0]
  },

  /**
   * Generate output string by nodes tree
   */
  stringify(ast) {
    let result = ''
    for (let i of ast) {
      if (typeof i === 'object') {
        result += `(${brackets.stringify(i)})`
        continue
      }

      result += i
    }
    return result
  }
}

module.exports = brackets
