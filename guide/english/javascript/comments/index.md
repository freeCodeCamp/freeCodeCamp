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

You can also prevent execution of Javascript code just commenting the code lines like this:
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
  <li>Mac: Push Command(Apple Key) & "/"</li>
  <li>Windows: Push Control & "/"</li>
  <li>You can also uncomment code by doing the same steps</li>
</ol>
A shortcut to comment out a section of javascript in many code editors is to highlight the lines of code you want to comment out, then press `Cmd/Ctrl + /`.

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
