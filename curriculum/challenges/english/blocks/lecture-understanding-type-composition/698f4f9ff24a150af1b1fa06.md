---
id: 698f4f9ff24a150af1b1fa06
title: How Do The any, never, unknown and void Types Work?
challengeType: 19
dashedName: how-do-the-any-never-unknown-and-void-types-work
---

# --description--

In prior lessons, you have learned how to work with primitive types as well as union types, and interfaces. 

But TypeScript has some special types that you should be aware of. Let's start by looking at the `any` type. 

The `any` type is used to represent any type of value. 

```ts
let randomValue: any;

randomValue = 42;           

randomValue = "Hello";     
 
randomValue = true;        

randomValue = { name: "Alice" }; 
```

With this type, you have to be careful because it can be easily overused and misused. You don't want to type everything with the `any` type just to silence TypeScript error messages. That defeats the purpose of using TypeScript and adding type safety in the first place. 

A safer counterpart to the `any` type would be the `unknown` type. `unknown` is similar to `any` but with the `unknown` type, you have to do a type check for the variable before using it.

Here is an example:

```ts
function doubleValue(value: unknown) {
  if (typeof value === "number") {
    console.log(value * 2);
  } else if (typeof value === "string") {
    console.log(value + value);
  }
}

doubleValue(10);    
doubleValue("Hi "); 
doubleValue(true);   
```

In this example, the type checks ensure that operations are only performed on values of the correct type. Values that don't match the expected types are ignored.

The next type we will look at is the `never` type. This type represents something that will never happen.

In most situations, you will not be writing out type annotations using `never`. Instead, you will most likely see the `never` type show up in error messages like this:

```ts
function processValue(value: string | number) {
  if (typeof value === "string") {
    console.log("String value:", value.toUpperCase());
  } else if (typeof value === "number") {
    console.log("Number value:", value * 2);
  } else {
    console.log(value); 
  }
}
```

Inside the `else` clause of the example above, the `value` has a `never` type. This is because the `else` branch is now impossible to reach and there's no remaining type left. If you tried to call the function with a value other than `string` or `number` it would show an error like this:

```ts
function processValue(value: string | number) {
  if (typeof value === "string") {
    console.log("String value:", value.toUpperCase());
  } else if (typeof value === "number") {
    console.log("Number value:", value * 2);
  } else {
    console.log(value); 
  }
}

// Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
processValue(true); 
```

The last type we will look at is the `void` type. When you have a function that doesn't return a value, that would be a `void` type. 

Here is an example:

```ts
type Status = "loading" | "success" | "error";

type Handler = {
  status: Status;
  onChange: (newStatus: Status) => void; 
};
```

In this example, the `onChange` property for the `Handler` type doesn't return anything which is why `void` is being used.

# --questions--

## --text--

Which TypeScript type allows you to store any kind of value but should be used carefully to avoid losing type safety?

## --answers--

`void`

### --feedback--

Refer back to the beginning of the lesson.

---

`any`

---

`unknown`

### --feedback--

Refer back to the beginning of the lesson.

---

`null`

### --feedback--

Refer back to the beginning of the lesson.

## --video-solution--

2

## --text--

What is the purpose of the `never` type in TypeScript?

## --answers--

It represents a value that can be any type.

### --feedback--

Refer back to the middle of the lesson where the `never` type was taught.

---

It represents a function return type that is optional.

### --feedback--

Refer back to the middle of the lesson where the `never` type was taught.

---

It represents something that will never happen.

---

It represents a variable that can hold any type.

### --feedback--

Refer back to the middle of the lesson where the `never` type was taught.

## --video-solution--

3

## --text--

Which type would you use for a function that doesn't return a value?

## --answers--

`null`

### --feedback--

Refer back to the end of the lesson.

---

`void`

---

`any`

### --feedback--

Refer back to the end of the lesson.

---

`unknown`

### --feedback--

Refer back to the end of the lesson.

## --video-solution--

2
