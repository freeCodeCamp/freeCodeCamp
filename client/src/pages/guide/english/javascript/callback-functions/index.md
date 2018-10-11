---
title: Callback Functions
---
This article gives a brief introduction to the concept and usage of callback functions in the Javascript programming language.

## Functions are Objects

The first thing we need to know is that in Javascript, functions are first-class objects. As such, we can work with them in the same way we work with other objects, like assigning them to variables and passing them as arguments into other functions. This is important, because it's the latter technique that allows us to extend functionality in our applications.

## Callback Functions

A **callback function** is a function that is passed _as an argument_ to another function, to be "called back" at a later time. A function that accepts other functions as arguments is called a **higher-order function**, which contains the logic for _when_ the callback function gets executed. It's the combination of these two that allow us to extend our functionality.

To illustrate callbacks, let's start with a simple example:

```javascript
function createQuote(quote, callback){ 
  var myQuote = "Like I always say, " + quote;
  callback(myQuote); // 2
}

function logQuote(quote){
  console.log(quote);
}

createQuote("eat your vegetables!", logQuote); // 1

// Result in console: 
// Like I always say, eat your vegetables!
```

In the above example, `createQuote` is the higher-order function, which accepts two arguments, the second one being the callback. The `logQuote` function is being used to pass in as our callback function. When we execute the `createQuote` function _(1)_, notice that we are _not appending_ parentheses to `logQuote` when we pass it in as an argument. This is because we do not want to execute our callback function right away, we simply want to pass the function definition along to the higher-order function so that it can be executed later.

Also, we need to ensure that if the callback function we pass in expects arguments, that we supply those arguments when executing the callback _(2)_. In the above example, that would be the `callback(myQuote);` statement, since we know that `logQuote` expects a quote to be passed in.

Additionally, we can pass in anonymous functions as callbacks. The below call to `createQuote` would have the same result as the above example:

```javascript
createQuote("eat your vegetables!", function(quote){ 
  console.log(quote); 
});
```

Incidentally, you don't _have_ to use the word "callback" as the name of your argument, Javascript just needs to know that it's the correct argument name. Based on the above example, the below function will behave in exactly the same manner.

```javascript
function createQuote(quote, functionToCall) { 
  var myQuote = "Like I always say, " + quote;
  functionToCall(myQuote);
}
```

## Why use Callbacks?

Most of the time we are creating programs and applications that operate in a **synchronous** manner. In other words, some of our operations are started only after the preceding ones have completed. Often when we request data from other sources, such as an external API, we don't always know _when_ our data will be served back. In these instances we want to wait for the response, but we don't always want our entire application grinding to a halt while our data is being fetched. These situations are where callback functions come in handy.

Let's take a look at an example that simulates a request to a server:

```javascript
function serverRequest(query, callback){
  setTimeout(function(){
    var response = query + "full!";
    callback(response);
  },5000);
}

function getResults(results){
  console.log("Response from the server: " + results);
}

serverRequest("The glass is half ", getResults);

// Result in console after 5 second delay:
// Response from the server: The glass is half full!
```

In the above example, we make a mock request to a server. After 5 seconds elapse the response is modified and then our callback function `getResults` gets executed. To see this in action, you can copy/paste the above code into your browser's developer tool and execute it.

Also, if you are already familiar with `setTimeout`, then you've been using callback functions all along. The anonymous function argument passed into the above example's `setTimeout` function call is also a callback! So the example's original callback is actually executed by another callback. Be careful not to nest too many callbacks if you can help it, as this can lead to something called "callback hell"! As the name implies, it isn't a joy to deal with.
