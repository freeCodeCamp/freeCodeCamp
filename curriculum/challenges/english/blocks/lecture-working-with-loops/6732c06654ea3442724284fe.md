---
id: 6732c06654ea3442724284fe
title: What Is a While Loop, and How Does It Differ from the Do...while Loop?
challengeType: 19
dashedName: what-is-a-while-loop-and-how-does-it-differ-from-the-do-while-loop
---

# --interactive--

In previous lessons, you learned how to work with `for` loops, `for...in` loops and `for...of` loops. In this lesson, you will learn about the `while` loop and the `do...while` loop.

A `while` loop will run a block of code as long as the condition is true. Here is the basic syntax for a `while` loop:

```js
while (condition) {
  // code block to be executed
}
```

The condition is checked before the block of code is executed. If the condition is false, the block of code will not be executed.

`while` loops are useful when you do not know how many times you need to run the block of code. Here is an example of using a `while` loop:

:::interactive_editor

```js
let counter = 0;
while(counter < 5) {
  console.log(counter);
  counter++;
}
```

:::

In this example, we have a variable called `counter` that is initialized to `0`. The `while` loop will continue to run as long as the value of `counter` is less than `5`. Inside the loop, we log the value of `counter` to the console and then increment `counter` by `1`.

Another loop similar to the `while` loop would be the `do...while` loop. Here is the basic syntax:

```js
do {
  // code block to be executed
} while (condition);
```

One key difference between a `do...while` loop and a `while` loop is that the `do...while` loop will execute the block of code at least once before checking the condition.

If the condition is true, the block of code will continue to execute. If the condition is false, the block of code will stop executing.

Here is an example of using a `do...while` loop:

:::interactive_editor

```js
let counter = 0;
do {
  console.log(counter);
  counter++;
} while (counter < 5);  
```

:::

In this example, we have a variable called `counter` that is initialized to `0`. The `do...while` loop will log the value of `counter` to the console and then increment `counter` by `1`. After executing the block of code, it checks if the value of `counter` is less than `5`. If it is, the loop will continue to run. If not, the loop will stop.

In most cases, you will probably use the `while` loop more often than the `do...while` loop. However, it is good to know both types of loops and when to use them.

# --questions--

## --text--

What is the main difference between a `while` loop and a `do...while` loop?

## --answers--

A `while` loop executes the code block at least once, whereas a `do...while` loop does not.

### --feedback--

Consider which loop executes its code block before checking the condition.

---

A `do...while` loop executes the code block at least once, whereas a `while` loop does not.

---

A `while` loop and a `do...while` loop are exactly the same and have no differences.

### --feedback--

Consider which loop executes its code block before checking the condition.

---

A `while` loop checks the condition after executing the code block, whereas a `do...while` loop checks the condition before.

### --feedback--

Consider which loop executes its code block before checking the condition.

## --video-solution--

2

## --text--

In which situation would you prefer to use a `do...while` loop over a `while` loop?

## --answers--

When you need to execute a block of code zero or more times.

### --feedback--

Think about which loop guarantees at least one execution of its code block.

---

When you need to execute a block of code at least once before checking the condition.

---

When the number of iterations is known beforehand.

### --feedback--

Think about which loop guarantees at least one execution of its code block.

---

When you want to ensure the loop never executes.

### --feedback--

Think about which loop guarantees at least one execution of its code block.

## --video-solution--

2

## --text--

What happens if the condition in a `while` loop is initially `false`?

## --answers--

The code block inside the loop will execute once and then stop.

### --feedback--

Review what occurs if the condition is not met at the start of a `while` loop.

---

The code block inside the loop will not execute at all.

---

The code block inside the loop will execute indefinitely.

### --feedback--

Review what occurs if the condition is not met at the start of a `while` loop.

---

The loop will terminate immediately and produce an error.

### --feedback--

Review what occurs if the condition is not met at the start of a `while` loop.

## --video-solution--

2
