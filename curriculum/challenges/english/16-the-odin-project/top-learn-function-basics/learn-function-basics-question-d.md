---
id: 6617aee95b87c334e7ae8015
title: Learn Function Basics Question D
challengeType: 15
dashedName: learn-function-basics-question-d
---

# --description--

If a function is called, but an argument is not provided, then the parameter will be assigned the value of `undefined`. This can lead to unexpected results if the function is not designed to handle this case.

```js
function favoriteAnimal(animal) {
  return animal + " is my favorite animal!"
}

console.log(favoriteAnimal()); // Output: undefined is my favorite animal!
```

In the example above, the function `favoriteAnimal` is called without an argument. The parameter `animal` is assigned the value of `undefined`, which is then concatenated with the string `" is my favorite animal!"`.

If a value is not provided you can make use of default parameters. Default parameters allow you to assign a default value to a parameter if no value is provided when the function is called.

```js
function favoriteAnimal(animal = 'Giant Panda') {
  return animal + " is my favorite animal!"
}
```

In the example above, the default value of the parameter `animal` is set to `'Giant Panda'`. If the function `favoriteAnimal` is called without an argument, the parameter `animal` will be assigned the value `'Giant Panda'`.

# --question--

## --text--

How do default parameters in JavaScript functions enhance the behavior of functions like `favoriteAnimal` when called without any arguments?

## --answers--

They cause the function to throw an error if no argument is provided.

---

They prevent the function from being called without the required number of arguments.

---

They ensure the function returns `null` to indicate that no argument was passed.

---

They allow the function to execute with a predefined value, avoiding `undefined` related issues.

## --video-solution--

4
