---
title: Comments
---

## Comments

Programmers use comments to add hints, notes, suggestions, or warnings to their source code; they have no effect on the actual output of the code. Comments can be very helpful in explaining the intent of what your code is or should be doing. It is always best practice when starting out to comment more often than not, as it can help those reading your code to understand what exactly your code is intending to do.

JavaScript has two main ways of assigning comments in its code.

The first way is the `//` comment; all text following `//` on the same line is considered as a comment. For example:

```javascript
function hello() {
  // This is a one line JavaScript comment
  console.log("Hello world!");
}
hello();
```

The second way is the `/* */` comment, which can be used for both single-line and multi-line comments. For example:

```javascript
function hello() {
  /* This is a one line JavaScript comment */
  console.log("Hello world!");
}
hello();
```

```javascript
function hello() {
  /* This comment spans multiple lines. Notice
     that we don't need to end the comment until we're done. */
  console.log("Hello world!");
}
hello();
```

A third way is the `/** */` comment, a format popularly known as JSDoc is a technique similar to the previous style but adds an asterisk on each line commented. They are not necessary for the code to be ignored but can be helpful for readability. For example: 

```javascript
/**
 * Adds two numbers together
 * 
 * num1 - first parameter
 * num2 - second parameter
 * returns num1 + num2
 */
function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
console.log(addTwoNumbers(10,20)) // will print 30 in the console.
```

Comments can be very useful for debugging as they can prevent the execution of Javascript code like this:
```javascript
function hello() {
  /*console.log("Hello world!");*/
}
hello(); //does not log anything
```

<h3>Many IDEs come with a keyboard shortcut to comment out lines. </h3>
<ol>
  <li>Highlight text to be commented</li>
  <li>Mac: Push Command(Apple Key) & "/"</li>
  <li>Windows: Push Control & "/"</li>
  <li>You can also uncomment code by doing the same steps</li>
</ol>
A shortcut to comment out a section of javascript in many code editors is to highlight the lines of code you want to comment out, then press `Cmd/Ctrl + /`.

#### More Information:
* [How To Write Comments in JavaScript](https://www.digitalocean.com/community/tutorials/how-to-write-comments-in-javascript)
