---
id: 6617a128e90de1b3fd10bd4d
title: Learn Function Basics Lesson A
challengeType: 15
dashedName: learn-function-basics-lesson-a
---

# --description--

Let’s discuss parameters and arguments in the context of the following example function:

```js
function favoriteAnimal(animal) {
  return animal + " is my favorite animal!"
}

console.log(favoriteAnimal('Goat'));
```

In JavaScript, parameters are the items listed between the parentheses `()` in the function declaration. Function arguments are the actual values you decide to pass to the function.

In the example above, the function definition is written on the first line: `function favoriteAnimal(animal)`. The parameter, `animal`, is found inside the parentheses. You could just as easily replace `animal` with `pet`, `x`, or `blah`. But in this case, naming the parameter `animal` gives someone reading your code a bit of context so that they don't have to guess what `animal` may eventually contain.

# --question--

## --text--

What does the parameter in the function `favoriteAnimal` represent in the context of JavaScript functions?

## --answers--

The actual value that is used when calling the function.

---

A placeholder for the value that will be passed to the function when it is called.

---

The name of the function.

---

The result of the function execution.

## --video-solution--

2
