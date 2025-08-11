---
id: 66581a7cb1eb2281159492fe
title: Learn to Solve Problems and Understand Errors Lesson E
challengeType: 15
dashedName: learn-to-solve-problems-and-understand-errors-lesson-e
---

# --description--

Let’s assume you have written the following code:

```javascript
const a = "Hello";
const b = "World";

console.log(c);
```

This code will run, but it will generate an error. In technical terms, this is called <dfn>throwing</dfn> an error. The first part of an error displays the type of error. This provides the first clue as to what you're dealing with. You'll learn more about the different error types later in the lesson. In this example, you have a `ReferenceError`.

<img src="https://cdn.statically.io/gh/TheOdinProject/curriculum/175b5ef2a1b4758a7b75f4ef43d7e27203e5707b/foundations/javascript_basics/understanding_errors/imgs/00.png" width="100%" alt="An error being displayed in the developer console"/>

A `ReferenceError` is thrown when one refers to a variable that is not declared and/or initialized within the current scope. In our case, the error message explains that the error has occurred because `c is not defined`.

Different errors of this type have different messages based on what is causing the `ReferenceError`. For example, another message you may run into is `ReferenceError: can't access lexical declaration 'X' before initialization`.

The next part of an error gives us the name of the file in which you can find the error (in this case, our `script.js`), and also the line number.

This allows you to easily navigate to the problematic line in your code. Here, the error originates from the fourth line of `script.js`, which is displayed as a link under the error message with the text at `script.js:4`. If you click this link, most browsers will navigate to the exact line of code and the rest of your script in the Sources tab of the Developer Tools.

Sometimes your browser’s console will also display the column (or character) in the line at which the error is occurring. In our example, this would be at `script.js:4:13`.

# --questions--

## --text--

What does the `ReferenceError` in the provided JavaScript code indicate?

## --answers--

The variable used has been declared but used incorrectly in its type.

---

The variable called in the code has not been declared within the current scope.

---

The code has an issue with its syntax that prevents it from being parsed correctly.

---

The variable used has been declared but not initialized within the current scope.


## --video-solution--

2
