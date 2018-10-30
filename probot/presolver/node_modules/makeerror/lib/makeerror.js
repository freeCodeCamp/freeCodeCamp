var tmpl = require('tmpl')

module.exports = makeError

function BaseError() {}
BaseError.prototype = new Error()
BaseError.prototype.toString = function() {
  return this.message
}


/**
 * Makes an Error function with the signature:
 *
 *   function(message, data)
 *
 * You'll typically do something like:
 *
 *   var UnknownFileTypeError = makeError(
 *     'UnknownFileTypeError',
 *     'The specified type is not known.'
 *   )
 *   var er = UnknownFileTypeError()
 *
 * `er` will have a prototype chain that ensures:
 *
 *   er instanceof Error
 *   er instanceof UnknownFileTypeError
 *
 * You can also do `var er = new UnknownFileTypeError()` if you really like the
 * `new` keyword.
 *
 * @param String  The name of the error.
 * @param String  The default message string.
 * @param Object  The default data object, merged with per instance data.
 */
function makeError(name, defaultMessage, defaultData) {
  defaultMessage = tmpl(defaultMessage || '')
  defaultData = defaultData || {}
  if (defaultData.proto && !(defaultData.proto instanceof BaseError))
    throw new Error('The custom "proto" must be an Error created via makeError')

  var CustomError = function(message, data) {
    if (!(this instanceof CustomError)) return new CustomError(message, data)

    if (typeof message !== 'string' && !data) {
      data = message
      message = null
    }

    this.name = name
    this.data = data || defaultData

    if (typeof message === 'string') {
      this.message = tmpl(message, this.data)
    } else {
      this.message = defaultMessage(this.data)
    }

    var er = new Error()
    this.stack = er.stack
    if (this.stack) {
      // remove TWO stack level:
      if (typeof Components !== 'undefined') {
        // Mozilla:
        this.stack = this.stack.substring(this.stack.indexOf('\n') + 2)
      } else if (typeof chrome !== 'undefined' || typeof process !== 'undefined') {
        // Google Chrome/Node.js:
        this.stack = this.stack.replace(/\n[^\n]*/, '')
        this.stack = this.stack.replace(/\n[^\n]*/, '')
        this.stack = (
          this.name +
          (this.message ? (': ' + this.message) : '') +
          this.stack.substring(5)
        )
      }
    }

    if ('fileName' in er) this.fileName = er.fileName
    if ('lineNumber' in er) this.lineNumber = er.lineNumber
  }

  CustomError.prototype = defaultData.proto || new BaseError()
  delete defaultData.proto

  return CustomError
}
