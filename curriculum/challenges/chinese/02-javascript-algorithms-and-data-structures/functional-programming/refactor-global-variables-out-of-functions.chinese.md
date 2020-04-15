---
id: 587d7b8f367417b2b2512b60
title: Refactor Global Variables Out of Functions
challengeType: 1
videoUrl: ''
localeTitle: 重构函数的全局变量
---

## Description
<section id="description">到目前为止，我们已经看到了函数式编程的两个不同原则：1）不要改变变量或对象 - 创建新的变量和对象，并在需要时从函数返回它们。 2）声明函数参数 - 函数内的任何计算仅依赖于参数，而不依赖于任何全局对象或变量。在数字中添加一个并不是很令人兴奋，但我们可以在处理数组或更复杂的对象时应用这些原则。 </section>

## Instructions
<section id="instructions">重构（重写）代码，以便在任一函数内部不更改全局数组<code>bookList</code> 。 <code>add</code>函数应该将给定的<code>bookName</code>添加到数组的末尾。 <code>remove</code>函数应该从数组中删除给定的<code>bookName</code> 。这两个函数都应该返回一个数组，并且应该在<code>bookName</code>之前添加任何新参数。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>bookList</code>不应该改变并且仍然相等<code>[&quot;The Hound of the Baskervilles&quot;, &quot;On The Electrodynamics of Moving Bodies&quot;, &quot;Philosophiæ Naturalis Principia Mathematica&quot;, &quot;Disquisitiones Arithmeticae&quot;]</code> 。'
    testString: assert(JSON.stringify(bookList) === JSON.stringify(["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]));
  - text: '<code>newBookList</code>应该等于<code>[&quot;The Hound of the Baskervilles&quot;, &quot;On The Electrodynamics of Moving Bodies&quot;, &quot;Philosophiæ Naturalis Principia Mathematica&quot;, &quot;Disquisitiones Arithmeticae&quot;, &quot;A Brief History of Time&quot;]</code> 。'
    testString: assert(JSON.stringify(newBookList) === JSON.stringify(['The Hound of the Baskervilles', 'On The Electrodynamics of Moving Bodies', 'Philosophiæ Naturalis Principia Mathematica', 'Disquisitiones Arithmeticae', 'A Brief History of Time']));
  - text: '<code>newerBookList</code>应该等于<code>[&quot;The Hound of the Baskervilles&quot;, &quot;Philosophiæ Naturalis Principia Mathematica&quot;, &quot;Disquisitiones Arithmeticae&quot;]</code> 。'
    testString: assert(JSON.stringify(newerBookList) === JSON.stringify(['The Hound of the Baskervilles', 'Philosophiæ Naturalis Principia Mathematica', 'Disquisitiones Arithmeticae']));
  - text: '<code>newestBookList</code>应该等于<code>[&quot;The Hound of the Baskervilles&quot;, &quot;Philosophiæ Naturalis Principia Mathematica&quot;, &quot;Disquisitiones Arithmeticae&quot;, &quot;A Brief History of Time&quot;]</code> 。'
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
// New parameters should come before the bookName one

// Add your code below this line
function add (bookName) {

  return bookList.push(bookName);

  // Add your code above this line
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function remove (bookName) {
  if (bookList.indexOf(bookName) >= 0) {

    return bookList.splice(0, 1, bookName);

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
// solution required
```
</section>
