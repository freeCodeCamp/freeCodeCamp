---
title: Promise Resolve
---
## Promise Resolve

### Description

A ```Promise.resolve``` function indicates the successful completion of a Promise. This function allows you to return a Promise to the calling function.

```Promise.resolve``` takes a single parameter to return to the calling function. This parameter can either be a value, a thenable, or another Promise. 

A "value" for a resolve function can be basic JavaScript types, arrays, or objects. 

```javascript
Promise.resolve('success'); // string
Promise.resolve([2, 3, 5]); // array
Promise.resolve({name: 'John', age: '43'}); // object
```

A "thenable" is a function that takes two callback functions as parameters. You can use the first parameter to trigger a successful completion, and the second to return an error on the Promise.

```javascript
thenableFunction = {then: function(onSuccesss, onFailure) {
    if (condition === 'success') {
      onSuccess(paramList); // success condition
    } else {
      onFailure(paramList); // error condition
    }
  }
}

Promise.resolve(thenableFunction);
```

Chaining a then function to a promise caller will give you access to the result of ```Promise.resolve```.

```javascript
promiseCallingFunction(paramList)
  .then(function(value) {
    /* 
     * this is where you get access to the value 
     * returned by a promise on successful completion 
     */
  });
```
