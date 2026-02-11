---
id: 67fe8599c83979345ff9a91a
title: How Does the Print Function Work?
challengeType: 19
dashedName: how-does-the-print-function-work
---

# --description--

Every programming language has some way to output data to the terminal with a built-in method, function, property, or keyword. In Python, you can use the `print` function to print data to the terminal. Let's take a closer look at the `print` function so you can start using it with confidence.

One of the first things you do when you're learning any programming language is to write a simple `Hello world!` program. You can do that really easily in Python with just the `print` function.

To do that, you just need to put the string `Hello world!` in between the opening and closing parentheses you use to call the `print` function:

```python
print('Hello world!') # Hello world!
```

You will learn more about strings and functions in Python in future lessons. For now, just consider strings as a sequence of characters surrounded by either single (`'`) or double (`"`) quotation marks.

In the `print('Hello world!')` example, the string `'Hello world!'` is an **argument** passed to the `print` function. You can also use the `print` function to show multiple values, or arguments, at once by separating them with commas. For example:

```python
print('My favorite colors are', 'blue', 'green', 'red')

# Output: My favorite colors are blue green red
```

Python automatically adds a space between each item when you separate them with commas. This is helpful when you want to print several pieces of information together.

# --questions--

## --text--

Why does the following code print all the values on the same line with spaces?

```python
print('My favorite colors are', 'blue', 'green', 'red')
```

## --answers--

Because separating values with commas in `print()` adds spaces between them.

---

Because strings are automatically joined together with no separator.

### --feedback--

Review how Python formats output when multiple values are passed to `print()`.

---

Because each call to `print()` adds a space by default.

### --feedback--

Review how Python formats output when multiple values are passed to `print()`.

---

Because Python automatically converts all strings to uppercase in output.

### --feedback--

Review how Python formats output when multiple values are passed to `print()`.

## --video-solution--

1

## --text--

What would the output of the following code be?

```python
print('Hello', 'world!')
```

## --answers--

`Hello world!`

---

`Helloworld!`

### --feedback--

Think about how multiple arguments are handled in the `print()` function.

---

`Hello, world!`

### --feedback--

Think about how multiple arguments are handled in the `print()` function.

---

`Hello\nworld!`

### --feedback--

Think about how multiple arguments are handled in the `print()` function.

## --video-solution--

1

## --text--

What is the purpose of the quotation marks around `Hello world!` in the following code?

```python
print('Hello world!')
```

## --answers--

They define a string to be printed by the `print()` function.

---

They are used to call a function named `Hello world!`.

### --feedback--

Consider how Python identifies string values in code.

---

They are required only if the string contains spaces.

### --feedback--

Consider how Python identifies string values in code.

---

They let Python know to print a variable named `Hello world!`.

### --feedback--

Consider how Python identifies string values in code.

## --video-solution--

1
