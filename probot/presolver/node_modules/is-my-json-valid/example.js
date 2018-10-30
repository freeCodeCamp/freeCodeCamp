var validator = require('./')

var validate = validator({
  type: 'object',
  properties: {
    hello: {
      required: true,
      type: 'string'
    }
  }
})

console.log('should be valid', validate({hello: 'world'}))
console.log('should not be valid', validate({}))

// get the last error message by checking validate.error
// the following will print "data.hello is required"
console.log('the errors were:', validate.errors)
