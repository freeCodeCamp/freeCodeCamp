---
title: Comments
---

## Comments

Programmers use comments to add hints, notes, suggestions, or warnings to their source code; they have no effect on the actual output of the code. Comments can be very helpful in explaining the intent of what your code is or should be doing.

It is always best practice when starting out to comment more often than not, as it can help those reading your code to understand what exactly your code is intending to do.

JavaScript has two ways of assigning comments in its code.

The first way is the `//` comment; all text following `//` on the same line is  considered as a comment. For example:

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
The third way is the `/** */` comment, a format popularly known as JSDoc, can be used to clearly describe functions, classes, methods, and variables in your codebase in a detailed way. For example: 

```javascript
/**
 * Adds two numbers together
 * 
 * @param {number} num1 - first parameter
 * @param {number} num2 - second parameter
 * @returns {number}
 */
function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
console.log(addTwoNumbers(10,20)) // will print 30 in the console.

In some cases you may want to prevent code from running for debugging purposes. For example:
```javascript
function hello() {
  /*console.log("Hello world!");*/
}
hello();
```
#### More Information:
<a href='https://www.digitalocean.com/community/tutorials/how-to-write-comments-in-javascript' target='_blank' rel='nofollow'>How To Write Comments in JavaScript</a>
<h3>Many IDEs come with a keyboard shortcut to comment out lines. </h3>
<ol>
  <li>Highlight text to be commented</li>
  <li> Use hotkeys to comment out highlighted block
  <ul>
    <li>Mac: Push <kbd>Command</kbd> + <kbd>/</kbd></li>
    <li>Windows: Push <kbd>Control</kbd> + <kbd>/</kbd></li>
    <li>Most Linux Distros: Push <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>A</kbd></li>
  </ul>
  </li>
  <li>You can also uncomment code by doing the same steps</li>
</ol>

Comments are also very helpful for code testing as you can prevent a certain code-line/block from running

```javascript
function hello() {
  // The statement below is not going to get executed
  // console.log('hi')
  }
hello();
```

```
function hello() {
  // The statements below are not going to get executed
  /*
  console.log('hi');
  console.log('code-test');
  */
}
hello();
```

#### More Information:
* <a href='https://www.digitalocean.com/community/tutorials/how-to-write-comments-in-javascript' target='_blank' rel='nofollow'>How To Write Comments in JavaScript</a>
