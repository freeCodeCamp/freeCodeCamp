---
id: 698f515e99f9a25a3462f97f
title: How do Function Types Work?
challengeType: 19
dashedName: how-do-function-types-work
---

# --description--

In this lesson, you will learn how to work with function types. Let's start with parameter type annotations.

Here is an example of a basic function:

```ts
function circleArea(radius) {
  return Math.PI * radius * radius;
}
```

Right now, TypeScript would display a message of `Parameter 'radius' implicitly has an 'any' type`. The `any` type indicates that a value can have any type. You will learn more about this type in a future lesson.

To get rid of the error and explicitly type the parameter, you can type it like this:

```ts
function circleArea(radius: number) {
  return Math.PI * radius * radius;
}
```

If you try to call the `circleArea` function with a different type that is not a number, TypeScript will display an error like this:

```ts
function circleArea(radius: number) {
  return Math.PI * radius * radius;
}

// Argument of type 'string' is not assignable to parameter of type 'number'
circleArea("3");
```

If you try to provide more arguments then the function expects, TypeScript will display an error:

```ts
function circleArea(radius: number) {
  return Math.PI * radius * radius;
}

// Expected 1 arguments, but got 2.
circleArea(3, 4);
```

If you provide too few arguments, then TypeScript will also display an error:

```ts
function circleArea(radius: number) {
  return Math.PI * radius * radius;
}

// Expected 1 arguments, but got 0.
// An argument for 'radius' was not provided.
circleArea();
```

You can make parameters optional by the using the `?` symbol near the parameter like this:

```ts
function area(radius: number, height?: number): number {
  const baseArea = Math.PI * radius * radius;

  if (height !== undefined) {
    const sideArea = 2 * Math.PI * radius * height;
    return baseArea + sideArea;
  }

  return baseArea;
}
```

The conditional check inside of the function is there in case the `height` argument is not provided. 

If you want to type your return values, you can add return type annotations like this:

```ts
function circleArea(radius: number): number {
  return Math.PI * radius * radius;
}
```

The return type annotation goes after the parameter list. Similar to variable type annotations, most of the time TypeScript will be smart enough to infer the return type. So use an explicit return type annotation when you want to make the function's intent clearer or prevent unintended changes to the return value.

The next example we will look at will deal with asynchronous functions and promises. If your function is going to return a promise, you can use the `Promise` type like this:

```ts
async function getCityTemperature(city: string): Promise<number> {
  const response = await fetch(`https://api.example.com/weather?city=${city}`);
  const data = await response.json(); 
  return data.temperature;
}
```

In this situation, if you try to remove the return type, TypeScript might infer the return as `Promise<any>`. So this would be a good situation to explicitly type the return value.

Up till this point, we have only looked at named function examples. But how do types work with anonymous functions?

Here is an example using an anonymous function in the callback passed to a `forEach`:

```ts
const languages = ["JavaScript", "Python", "TypeScript"];

languages.forEach((lang) => {
  console.log(`${lang.toUpperCase()} has ${lang.length} characters`);
});
```

The `lang` parameter does not have a type annotation. Instead, TypeScript uses contextual typing which means it infers the type from the context in which it appears.

# --questions--

## --text--

Which of the following TypeScript types indicates that a value can have any type?

## --answers--

`any`

---

`unknown`

### --feedback--

Refer back to the beginning of the lesson.

---

`optional`

### --feedback--

Refer back to the beginning of the lesson.

---

`generic`

### --feedback--

Refer back to the beginning of the lesson.

## --video-solution--

1

## --text--

What happens if you provide too many arguments in a function call?

## --answers--

TypeScript will ignore the extra arguments.

### --feedback--

Refer back to the middle of the lesson where this was discussed.

---

Nothing will happen.

### --feedback--

Refer back to the middle of the lesson where this was discussed.

---

TypeScript will display an error message.

---

TypeScript will use all of the arguments. 

### --feedback--

Refer back to the middle of the lesson where this was discussed.

## --video-solution--

3

## --text--

What is contextual typing?

## --answers--

It infers the type from the context in which it appears.

---

It always defaults variables to the type `any`.

### --feedback--

Refer to the end of the lesson.

---

It forces you to declare the type explicitly every time.

### --feedback--

Refer to the end of the lesson.

---

It automatically changes a variable's type to match the first value assigned.

### --feedback--

Refer to the end of the lesson.

## --video-solution--

1
