---
id: 587d7b8f367417b2b2512b60
title: Refactor Global Variables Out of Functions
challengeType: 1
forumTopicId: 301235
localeTitle: 在函数中重构全局变量
---

## Description
<section id='description'>
目前为止，我们已经看到了函数式编程的两个原则：
1) 不要更改变量或对象——创建新变量和对象，并在需要时从函数返回它们。
2) 声明函数参数——函数内的任何计算仅取决于参数，而不取决于任何全局对象或变量。
给数字增加 1 不够刺激，我们可以在处理数组或更复杂的对象时应用这些原则。
</section>

## Instructions
<section id='instructions'>
重构代码，使全局数组<code>bookList</code>在函数内部不会被改变。<code>add</code>函数可以将指定的<code>bookName</code>增加到数组末尾。<code>remove</code>函数可以从数组中移除指定<code>bookName</code>。两个函数都返回数组，并且任何参数都应该添加到<code>bookName</code>前面。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "<code>bookList</code>不应该改变，应等于<code>['The Hound of the Baskervilles', 'On The Electrodynamics of Moving Bodies', 'Philosophiæ Naturalis Principia Mathematica', 'Disquisitiones Arithmeticae']</code>."
    testString: assert(JSON.stringify(bookList) === JSON.stringify(["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]));
  - text: "<code>newBookList</code>应等于<code>['The Hound of the Baskervilles', 'On The Electrodynamics of Moving Bodies', 'Philosophiæ Naturalis Principia Mathematica', 'Disquisitiones Arithmeticae', 'A Brief History of Time']</code>."
    testString: assert(JSON.stringify(newBookList) === JSON.stringify(['The Hound of the Baskervilles', 'On The Electrodynamics of Moving Bodies', 'Philosophiæ Naturalis Principia Mathematica', 'Disquisitiones Arithmeticae', 'A Brief History of Time']));
  - text: "<code>newerBookList</code>应等于<code>['The Hound of the Baskervilles', 'Philosophiæ Naturalis Principia Mathematica', 'Disquisitiones Arithmeticae']</code>."
    testString: assert(JSON.stringify(newerBookList) === JSON.stringify(['The Hound of the Baskervilles', 'Philosophiæ Naturalis Principia Mathematica', 'Disquisitiones Arithmeticae']));
  - text: "<code>newestBookList</code>应等于<code>['The Hound of the Baskervilles', 'Philosophiæ Naturalis Principia Mathematica', 'Disquisitiones Arithmeticae', 'A Brief History of Time']</code>."
    testString: assert(JSON.stringify(newestBookList) === JSON.stringify(['The Hound of the Baskervilles', 'Philosophiæ Naturalis Principia Mathematica', 'Disquisitiones Arithmeticae', 'A Brief History of Time']));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

/* This function should add a book to the list and return the list */
// New parameters should come before bookName

// Add your code below this line
function add (bookName) {

  bookList.push(bookName);
  return bookList;
  
  // Add your code above this line
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function remove (bookName) {
  var book_index = bookList.indexOf(bookName);
  if (book_index >= 0) {

    bookList.splice(book_index, 1);
    return bookList;

    // Add your code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);
```

</div>



</section>

## Solution
<section id='solution'>

```js
// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

/* This function should add a book to the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function add (bookList, bookName) {
  return [...bookList, bookName];
  // Add your code above this line
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function remove (bookList, bookName) {
  const bookListCopy = [...bookList];
  const bookNameIndex = bookList.indexOf(bookName);
  if (bookNameIndex >= 0) {
    bookListCopy.splice(bookNameIndex, 1);
  }
  return bookListCopy;
  // Add your code above this line
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');
```

</section>
