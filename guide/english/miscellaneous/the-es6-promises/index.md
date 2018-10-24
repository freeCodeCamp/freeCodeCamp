---
title: ES6 Promises
---
Promises are a feature of ES6 to help with async programming, such as calls to a database or API.

An ES6 Promise is quite similar to a normal everyday promise - an agreement to do something in future, which can be kept or broken. When you are working with async code, you generally want to wait until that async process has finished before you continue. You also want to know the outcome of that process - whether it worked (promise kept) or not (promise broken). Promises help to keep async code easy to understand.

## syntax
    new Promise(function(resolve, reject) { ... }); 
  
The argument to the Promise is called the executor function. The `resolve` and `reject` paramaters are also functions. If the async process is successful, the `resolve` function returns the result. If not, the `reject` function passes on what went wrong.

Read more at <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise' target='_blank' rel='nofollow'>MDN</a>
