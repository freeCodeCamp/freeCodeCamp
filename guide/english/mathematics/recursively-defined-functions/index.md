---
title: Recursively Defined Functions
---
## Recursively Defined Functions

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/mathematics/functions/recursively-defined-functions/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

### A Quick Intro

Put simply, recursion if a form of defining something using itself within the definition

This is a common example used to teach recursion, a function to generate the fibonacci numbers:
``` 
f(0) := 0  Base case 0
f(1) := 1  Base case 1
f(x) := f(x - 1) + f(x - 2) | x > 1
```

Now, defining a function with itself will leave you with a few problems. The biggest is that if you define a function with itself, how are you supposed to know/determine when the function stops? 

Here's a simple example:
```js
function foo(x){
  y = x + 1;
  console.log(y);
  foo(y);
}
```

This function takes some number, and adds 1 to it infinitely. 
In order to determine a stopping point, you need to add a base case.

A base case is a point at which the function does not call the recursive step. 

```js
function foo(x){
  if(x > 5){
    return x
  }
  y = x + 1;
  console.log(y);
  foo(y);
}
```
This is now equivalent to:

```js
function foo(x){
  while(y < 5){
    y = x + 1;
    console.log(y);
  }
}
```

Almost everything that can be defined recursively can also be created with a loop. In fact, most compilers turn your code into a loop anyway, at some point, prior to it being executed.

It should also be noted that recursion may look cool and allow you to shrink a long loop down into just a few lines of code but there are a few drawbacks. Mainly, performance of a recursive definition is generally slower than that of an iterative one, not to mention, it can be harder to read for people unfamiliar or new to the concept.

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
- https://en.wikipedia.org/wiki/Recursion
- https://introcs.cs.princeton.edu/java/23recursion/
