---
title: Function Composition
---

## Function composition

Function composition is the pointwise application of one function to the result of another. Developers do it in a manual manner every day when the nest functions:

```javascript
compose = (fn1, fn2) => value => fn2(fn1(value))
```

But this is hard to read. There is a better way using function composition. Instead of reading them from inside out:

```javascript
add2AndSquare = (n) => square(add2(n))
``` 

We can use a higher order function to chain them in an ordered way.
```javascript
add2AndSquare = compose( add2, square)
``` 

A simple implementation of compose would be:

```javascript
compose = (f1, f2) => value => f2( f1(value) );
```

To get even more flexibility we can use the reduceRight function:
```javascript
compose = (...fns) => (initialVal) => fns.reduceRight((val, fn) => fn(val), initialVal);

```

Reading compose from left to right allows a clear chaining of higher order functions. Real world examples are adding authentications, logging and context properties. It's a technique that enables reusability on the highest level. Here are some examples how to use it:

```javascript
// example
const add2        = (n) => n + 2;
const times2      = (n) => n * 2;
const times2add2  = compose(add2, times2);
const add6        = compose(add2, add2, add2);

times2add2(2);  // 6
add2tiems2(2);  // 8
add6(2);        // 8
```

You might think this is advanced functional programming and it's not relevant for frontend programming. But it's also useful in Single Page Applications. For example you can add behavior to a React component by using higher order components:

```javascript
function logProps(InputComponent) {
  InputComponent.prototype.componentWillReceiveProps = function(nextProps) {
    console.log('Current props: ', this.props);
    console.log('Next props: ', nextProps);
  };
  return InputComponent;
}

// EnhancedComponent will log whenever props are received
const EnhancedComponent = logProps(InputComponent);
```

In conclusion function composition enables reusability of functionality at a very high level. If the functions are structured well it enables developers to created new behavior based upon existing behavior.

It also increases readability of implementations. Instead of nesting functions you can cleary chain functions and create higher order functions with meaningful names.

The Function() Constructor
JavaScript has an built-in function constructor.
Functions can also be defined with a built-in JavaScript function constructor called Function().
Step 1:
```
<script>
var myFunction = new Function("a", "b", "return a * b");
document.getElementById("demo").innerHTML = myFunction(4, 3);
</script>
```
Step 2:
```
<script>
var myFunction = function (a, b) {return a * b}
document.getElementById("demo").innerHTML = myFunction(4, 3);
</script>
```
