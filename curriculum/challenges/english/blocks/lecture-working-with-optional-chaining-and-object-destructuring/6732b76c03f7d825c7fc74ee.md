---
id: 6732b76c03f7d825c7fc74ee
title: What Is the Optional Chaining Operator, and How Does It Work?
challengeType: 19
dashedName: what-is-the-optional-chaining-operator-and-how-does-it-work
---

# --interactive--

The optional chaining operator (`?.`) is a useful tool in JavaScript that lets you safely access object properties or call methods without worrying whether they exist. It's like a safety net for working with objects that might have missing parts.

:::interactive_editor

```js
const person = {
  name: "Alice",
  age: 30
};

console.log(person.name); // "Alice"
console.log(person.job); // undefined
```

:::

In this example, `person.name` exists, so it logs `Alice`. But `person.job` doesn't exist, so it gives us `undefined`.

Now, let's say we want to access a property of an object that might not exist:

```js
const person = {
  name: "Alice",
  age: 30
};

console.log(person.address.street); // This will throw an error!
```

This example will throw an `Uncaught TypeError`. Since `person.address` is `undefined`, we are not able to access the `street` property. This is where the optional chaining operator comes in handy. Here is an example of using the optional chaining operator:

:::interactive_editor

```ts
const user = {
  name: "John",
  profile: {
    email: "john@example.com",
    address: {
      street: "123 Main St",
      city: "Somewhere"
    }
  }
};

console.log(user?.profile?.address?.street); // "123 Main St"
console.log(user?.profile?.phone?.number);   // undefined
```

:::

By using the optional chaining operator, we are telling JavaScript to only continue with the operation if the object (or the value before the `?.`) exists and is not `null` or `undefined`. 

If the value before the `?.` is `null` or `undefined`, JavaScript returns `undefined` rather than attempting to proceed with the operation and throwing an error.

Remember, the optional chaining operator is most useful when you're not sure if a property or method exists. It helps prevent errors and makes your code more robust.

# --questions--

## --text--

What does the optional chaining operator (`?.`) do in JavaScript?

## --answers--

It assigns a default value when a property is missing.

### --feedback--

The optional chaining operator only prevents errors when a value is `null` or `undefined`.

---

It prevents `undefined` values from appearing in objects.

### --feedback--

The optional chaining operator only prevents errors when a value is `null` or `undefined`.

---

It safely accesses nested properties and returns `undefined` instead of throwing an error if a value is missing.

---

It forces JavaScript to evaluate missing properties even if they don't exist.

### --feedback--

The optional chaining operator only prevents errors when a value is `null` or `undefined`.

## --video-solution--

3

## --text--

What will be the output of the following code?

```js
const person = {
  name: "Alice",
  age: 30
};

console.log(person.address.street);
```

## --answers--

`undefined`

### --feedback--

Accessing a missing nested property without optional chaining stops code execution.

---

`street`

### --feedback--

Accessing a missing nested property without optional chaining stops code execution.

---

`{}`

### --feedback--

Accessing a missing nested property without optional chaining stops code execution.

---

A `TypeError` is thrown because `person.address` is undefined.

## --video-solution--

4

## --text--

What will be the output of the following code?

```js
const user = {
  name: "John",
  profile: {
    email: "john@example.com",
    "home address": {
      street: "123 Main St",
      city: "Somewhere"
    }
  }
};

console.log(user?.profile?.address?.street);
```

## --answers--

`undefined`

---

`"123 Main St"`

### --feedback--

Think about what represents a value that hasn't been assigned.

---

`null`

### --feedback--

Think about what represents a value that hasn't been assigned.

---

A `TypeError` is thrown.

### --feedback--

Think about what represents a value that hasn't been assigned.

## --video-solution--

1
