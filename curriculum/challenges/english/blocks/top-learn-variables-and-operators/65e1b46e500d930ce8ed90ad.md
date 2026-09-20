---
id: 65e1b46e500d930ce8ed90ad
title: Learn Variables and Operators Lesson I
challengeType: 15
dashedName: learn-variables-and-operators-lesson-i
---
# --description--

Increasing or decreasing a number by one is among the most common numerical operations.

So, there are special operators for it:

- Increment `++` increases a variable by 1:

```js
let counter = 2;

// works the same as counter = counter + 1, but is shorter
counter++;      

console.log(counter); // 3
```

- Decrement `--` decreases a variable by 1:

```js
let counter = 2;

// works the same as counter = counter - 1, but is shorter
counter--;

console.log(counter); // 1
```

The operators `++` and `--` can be placed either before or after a variable.

- When the operator goes after the variable, it is in "postfix form": `counter++`.

- The "prefix form" is when the operator goes before the variable: `++counter`.

Both of these statements do the same thing: increase `counter` by `1`.

Is there any difference? Yes, but you can only see it if you use the returned value of `++/--`  .

Let’s clarify. As you know, all operators return a value. Increment/decrement is no exception. The prefix form returns the new value while the postfix form returns the old value (prior to increment/decrement).

To see the difference, here’s an example:

```js
let counter = 1;
let a = ++counter; // (*)

console.log(a); // 2
```

To summarize:

- If the result of increment/decrement is not used, there is no difference in which form to use:

```js
let counter = 0;
counter++;
++counter;

console.log( counter ); // 2, the lines above did the same
```

- If you’d like to increase a value and immediately use the result of the operator, you need the prefix form:

```js
let counter = 0;
console.log( ++counter ); // 1
```

- If you’d like to increment a value but use its previous value, you need the postfix form:

```js 
let counter = 0;
console.log( counter++ ); // 0
```

# --questions--

## --text--

What are the outputs of the two `console.log` statements in the JavaScript code below?

```js
let counter = 1;
console.log(2 * ++counter); // Statement A
```

```js
let counter = 1;
console.log(2 * counter++); // Statement B
```

## --answers--

There is no difference; both `console.log` statements will show the same result.

---

Statement A will log `4` because `++counter` increments the value before the multiplication. Statement B will log `2` because `counter++` increments the value after the multiplication.

---

Statement A will log `2` because `++counter` is a syntax error. Statement B will log `4` because `counter++` is the correct way to increment a counter.

---

Both statements will log `3` because the counter is incremented in both cases before the `console.log`.


## --video-solution--

2
