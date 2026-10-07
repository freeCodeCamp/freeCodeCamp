if (typeof Promise.withResolvers === 'undefined') {
  Promise.withResolvers = function () {
    let promiseResolve, promiseReject
    const promise = new Promise((resolve, reject) => {
      promiseResolve = resolve
      promiseReject = reject
    })
    return { promise, resolve: promiseResolve, reject: promiseReject }
  }
}
