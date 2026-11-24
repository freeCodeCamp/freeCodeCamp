---
id: 6732b29b8b7d4f15b94d12ca
title: What Is a Shallow Copy of an Array, and What Are Some Ways to Create These Copies?
challengeType: 19
dashedName: what-is-a-shallow-copy-of-an-array-and-what-are-some-ways-to-create-these-copies
---

# --interactive--

A shallow copy of an array is a new array that has the same items as the original. If the array only contains primitive values like numbers or strings, the new array is completely separate. But if the array contains other arrays inside it, both the original and the copy have references to the same inner arrays. This means that if you change something inside a shared inner array, you will see that change in both arrays.

Shallow copies are helpful when you need to modify the top-level structure, such as adding, removing, or reordering elements, without modifying the original array or the inner array.

There are several methods for creating shallow copies of arrays, and we'll explore some of the most common ones: `concat()`, `slice()`, and the spread operator.

Let's start with the `concat()` method. This method creates a new array by merging two or more arrays. When used with a single array, it effectively creates a shallow copy. Here's an example:

:::interactive_editor

```js
const originalArray = [1, 2, 3];
const copyArray = [].concat(originalArray);

console.log(copyArray); // [1, 2, 3]
console.log(copyArray === originalArray); // false
```

:::

In this example, we are using the `concat()` method to concatenate an empty array to the `originalArray`. This will create a new array that is a shallow copy of `originalArray`. 

The `copyArray` contains the same elements as `originalArray`, but it is a different array object, which is why the strict equality check (`===`) returns `false`.

Another method to create a shallow copy is the `slice()` method. When called without arguments, `slice()` returns a shallow copy of the entire array. Here's how it works:

:::interactive_editor

```js
const originalArray = [1, 2, 3];
const copyArray = originalArray.slice();

console.log(copyArray); // [1, 2, 3]
console.log(copyArray === originalArray); // false
```

:::

In this case, `originalArray.slice()` creates a new array that is a shallow copy of `originalArray`. Again, the `copyArray` contains the same elements but is a different array object.

The spread operator (`...`), introduced in ES6, provides another concise way to create shallow copies of arrays. Here's an example:

:::interactive_editor

```js
const originalArray = [1, 2, 3];
const copyArray = [...originalArray];

console.log(copyArray); // [1, 2, 3]
console.log(copyArray === originalArray); // false
```

:::

The spread operator (`...`) spreads the elements of `originalArray` into a new array, effectively creating a shallow copy. It's important to note that all these methods create new array objects, which means you can modify the copy without affecting the original array. For example:

:::interactive_editor

```js
const originalArray = [1, 2, 3];
const copyArray = [...originalArray];

copyArray.push(4);
console.log(originalArray); // [1, 2, 3]
console.log(copyArray);     // [1, 2, 3, 4]
```

:::

In this example, adding an element to `copyArray` doesn't affect `originalArray`.

In summary, shallow copies of arrays can be easily created using methods like `concat()`, `slice()`, or the spread operator. These methods are useful for creating new arrays that can be manipulated independently of the original array.

# --questions--

## --text--

What will be the output of the following code?

```js
const arr1 = [1, 2, 3];
const arr2 = arr1.slice();
arr2.push(4);
console.log(arr1, arr2);
```

## --answers--

`[1, 2, 3] [1, 2, 3, 4]`

---

`[1, 2, 3, 4] [1, 2, 3, 4]`

### --feedback--

The `slice()` method creates a shallow copy of the array.

---

`[1, 2, 3] [1, 2, 3]`

### --feedback--

The `slice()` method creates a shallow copy of the array.

---

This will throw an error.

### --feedback--

The `slice()` method creates a shallow copy of the array.

## --video-solution--

1

## --text--

What will be the output of the following code?

```js
const fruits = ["apple", "banana", "orange"];
const fruitsCopy = [...fruits];
console.log(fruitsCopy.length);
```

## --answers--

`0`

### --feedback--

The spread operator (`...`) creates a shallow copy of the entire array.

---

`2`

### --feedback--

The spread operator (`...`) creates a shallow copy of the entire array.

---

`3`

---

`undefined`

### --feedback--

The spread operator (`...`) creates a shallow copy of the entire array.

## --video-solution--

3

## --text--

What will be the output of the following code?

```js
const arr1 = [1, 2, 3];
const arr2 = [].concat(arr1);
console.log(arr1 === arr2);
```

## --answers--

`true`

### --feedback--

The `concat()` method creates a new array, even if it's concatenating with an empty array.

---

`false`

---

`undefined`

### --feedback--

The `concat()` method creates a new array, even if it's concatenating with an empty array.

---

This will throw an error.

### --feedback--

The `concat()` method creates a new array, even if it's concatenating with an empty array.

## --video-solution--

2
