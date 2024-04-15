---
id: 6617a1fce90de1b3fd10bd4e
title: Learn Function Basics Question B
challengeType: 15
dashedName: learn-function-basics-question-b
---

# --description--

```js
function favoriteAnimal(animal) {
  return animal + " is my favorite animal!"
}

console.log(favoriteAnimal('Goat'));
```

By putting `animal` inside the parentheses of the `favoriteAnimal()` function, you are telling JavaScript that you will send some value to your `favoriteAnimal` function. This means that animal is just a placeholder for some future value. But what value are you sending?

The last line, `favoriteAnimal('Goat')`, is where you are calling your `favoriteAnimal` function and passing the value `'Goat'` inside that function. Here, `'Goat'` is your argument. You are telling the `favoriteAnimal` function, "Please send `'Goat'` to the `favoriteAnimal` function and use `'Goat'` wherever the `'animal'` placeholder is." Because of the flexibility that using a parameter provides, you can declare any animal to be your favorite.

Here is a diagram to help you visualize how parameters are passed to a function, and how values get returned from it.

<img src="https://cdn.statically.io/gh/TheOdinProject/curriculum/c53dd9a12f0c9afde0d9229f82a176170f12e120/foundations/javascript_basics/function_basics/imgs/00.png" alt="A description of a function with arrows explaining that the values between the parentheses of the function itself are called parameters, and the values which are issued when the function is used are called arguments" style="width:95%;height:auto;">

Make note of the fact that by calling `favoriteAnimal()` inside of `console.log()` with the argument `'Goat'`, you get the return value of the function, string of `"Goat is my favorite animal!"`, printed to the console. You're passing in a function call `favoriteAnimal('Goat')` as an argument in a different function call - `log()`.

# --question--

## --text--

If you change the argument from `'Goat'` to `'Elephant'` in the `favoriteAnimal('Goat')` function call, what would `console.log(favoriteAnimal('Elephant'))` print to the console?

## --answers--

`"Goat is my favorite animal!"`

---

The function will return an error because `"Elephant"` is not a recognized argument.  

---

`"Elephant is my favorite animal!"`

---

`"Kangaroo is my favorite animal!"`

## --video-solution--

3
