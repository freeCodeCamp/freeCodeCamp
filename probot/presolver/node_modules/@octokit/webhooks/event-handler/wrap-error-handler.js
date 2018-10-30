'use strict'

module.exports = wrapErrorHandler

// Errors thrown or rejected Promises in "error" event handlers are not handled
// as they are in the webhook event handlers. If errors occur, we log a
// "Fatal: Error occured" message to stdout
function wrapErrorHandler (handler, error) {
  let returnValue

  try {
    returnValue = handler(error)
  } catch (error) {
    console.log(`FATAL: Error occured in "error" event handler`)
    console.log(error)
  }

  if (returnValue && returnValue.catch) {
    returnValue.catch(error => {
      console.log(`FATAL: Error occured in "error" event handler`)
      console.log(error)
    })
  }
}
