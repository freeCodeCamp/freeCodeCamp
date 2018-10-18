---
title: TCO Tail Call Optimization
---
## Tail Call Optimization (TCO)

Tail Call Optimization (**TCO**) is a solution to the problem of stack overflows when doing recursion.

### The Problem
Every call to a function is pushed to a stack in computer memory. When the function finishes, it is popped from the stack. In recursion, the function calls itself so it keeps on adding to the stack until all those functions finishes. There is, of course, a limit to this stack. When there are too many functions called, too many calls are added to the stack. When the stack is full and a function is called, this results in a **stack overflow** because the stack is already full. The recursive function will not finish and will result in an error.

#### Example
Here is an example of a JavaScript factorial function using recursion **without** TCO:

```javascript
  function fact(x) {
    if (x <= 1) {
      return 1;
    } else {
      return x * fact(x-1);
    }
  }

  console.log(fact(10)); // 3628800
  console.log(fact(10000)); // RangeError: Maximum call stack size exceeded
```

Notice that running `fact` with an argument of 10000 will result in a **stack overflow**.

### Using TCO to solve the problem
To solve this using Tail Call Optimization, the statement where the function calls itself should be in a tail position. The tail position is the last statement to be executed in a function. Therefore, the function's call to itself should be the last thing called before the function ends.

In the previous example, the multiplication operation is executed last in the `return x * fact(x-1)` statement, so it was not the final operation of the function. Therefore, it is not tail call optimized. In order for it to be tail call optimized, you need to make the call to itself the last operation of the function.

#### Example
Here is an example of a JavaScript (ES5) factorial function using recursion **with** TCO.

```javascript
  function fact(n) {
      return factTCO(n, 1);
  }

  function factTCO(x, acc) {
      if (x <= 1) {
          return acc;
      } else {
          return factTCO(x-1, x*acc);
      }
  }

  console.log(fact(10)); // 3628800
  console.log(fact(10000)); // Infinity - Number too large, but unlike the unoptimized factorial, this does not result in stack overflow.
```

Notice that running `fact` on 10000 this time will **not result in a stack overflow** when *run in a browser that supports ES6* because the call to `factTCO` is the last operation of the function.

### Why this works
When the compiler or interpreter notices that the self-call is the last operation of the function, it pops the current function and pushes the self-call to the stack. This way the size of the stack isn't changed. Therefore, the stack doesn't overflow because of the function.

### Notes

#### More Information:
- <a href='https://stackoverflow.com/questions/310974/what-is-tail-call-optimization' target='_blank' rel='nofollow'>What is tail call optmization?</a> (StackOverflow)
- <a href='http://2ality.com/2015/06/tail-call-optimization.html' target='_blank' rel='nofollow'>Tail call optimization in ECMAScript 6</a> (2ality - Dr. Axel Rauschmayer's blog)
