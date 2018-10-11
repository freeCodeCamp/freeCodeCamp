---
title: Promise.prototype.then
---
## Promise.prototype.then

A ```Promise.prototype.then``` function accepts two arguments and returns a Promise. 

The first argument is a required function that accepts one argument. Successful fulfillment of a Promise will trigger this function.
 
The second argument is an optional function that also accepts one argument of its own. A thrown Error or Rejection of a Promise will trigger this function.

```javascript
   function onResolved (resolvedValue) {
     /*
     * access to resolved values of promise
     */
   }
 
  function onRejected(rejectedReason) {
     /*
     * access to rejection reasons of promise
     */
   }

  promiseReturningFunction(paramList)
     .then( // then function
       onResolved,
       [onRejected]
     );
 ```

```Promise.prototype.then``` allows you to perform many asynchronous activities in sequence. You do this by attaching one ```then``` function to another separated by a dot operator.

```javascript
   promiseReturningFunction(paramList)
   .then( // first then function
     function(arg1) {
       // ...
       return someValue;
     }
   )
   ...
   .then( // nth then function
     function(arg2) {
       // ...
       return otherValue;
     }
   )
```
<!--
  1. add return value handling
 -->

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->