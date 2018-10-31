---
id: 56533eb9ac21ba0edf2244dc
title: Chaining If Else Statements
challengeType: 1
videoUrl: ''
localeTitle: Связывание с другими сообщениями
---

## Description
<section id="description"> <code>if/else</code> утверждения могут быть объединены вместе для сложной логики. Вот <dfn>псевдокод</dfn> операторов с несколькими цепями <code>if</code> / <code>else if</code> : <blockquote> если ( <em>условие 1</em> ) { <br> <em>statement1</em> <br> } else if ( <em>условие2</em> ) { <br> <em>оператор2</em> <br> } else if ( <em>условие 3</em> ) { <br> <em>оператор3</em> <br> , , , <br> } else { <br> <em>statementN</em> <br> } </blockquote></section>

## Instructions
<section id="instructions"> Напишите прикованные <code>if</code> / <code>else if</code> выражения для выполнения следующих условий: <code>num &lt; 5</code> - return &quot;Tiny&quot; <br> <code>num &lt; 10</code> - возврат &quot;Small&quot; <br> <code>num &lt; 15</code> - возврат &quot;Средний&quot; <br> <code>num &lt; 20</code> - возврат &quot;Большой&quot; <br> <code>num &gt;= 20</code> - возврат &quot;Огромный&quot; </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: У вас должно быть как минимум четыре оператора <code>else</code>
    testString: 'assert(code.match(/else/g).length > 3, "You should have at least four <code>else</code> statements");'
  - text: У вас должно быть как минимум четыре оператора <code>if</code>
    testString: 'assert(code.match(/if/g).length > 3, "You should have at least four <code>if</code> statements");'
  - text: У вас должно быть хотя бы одно заявление о <code>return</code>
    testString: 'assert(code.match(/return/g).length >= 1, "You should have at least one <code>return</code> statement");'
  - text: <code>testSize(0)</code> должен возвращать &quot;Tiny&quot;
    testString: 'assert(testSize(0) === "Tiny", "<code>testSize(0)</code> should return "Tiny"");'
  - text: <code>testSize(4)</code> должен вернуть «Tiny»
    testString: 'assert(testSize(4) === "Tiny", "<code>testSize(4)</code> should return "Tiny"");'
  - text: <code>testSize(5)</code> должен возвращать &quot;Small&quot;
    testString: 'assert(testSize(5) === "Small", "<code>testSize(5)</code> should return "Small"");'
  - text: <code>testSize(8)</code> должен вернуть «Small»
    testString: 'assert(testSize(8) === "Small", "<code>testSize(8)</code> should return "Small"");'
  - text: '<code>testSize(10)</code> должен возвращать «Средний»,'
    testString: 'assert(testSize(10) === "Medium", "<code>testSize(10)</code> should return "Medium"");'
  - text: <code>testSize(14)</code> должен возвращать «Средний»
    testString: 'assert(testSize(14) === "Medium", "<code>testSize(14)</code> should return "Medium"");'
  - text: <code>testSize(15)</code> должен возвращать &quot;Large&quot;
    testString: 'assert(testSize(15) === "Large", "<code>testSize(15)</code> should return "Large"");'
  - text: <code>testSize(17)</code> должен вернуть &quot;Large&quot;
    testString: 'assert(testSize(17) === "Large", "<code>testSize(17)</code> should return "Large"");'
  - text: <code>testSize(20)</code> должен вернуть «Огромный»
    testString: 'assert(testSize(20) === "Huge", "<code>testSize(20)</code> should return "Huge"");'
  - text: <code>testSize(25)</code> должен вернуть «Огромный»
    testString: 'assert(testSize(25) === "Huge", "<code>testSize(25)</code> should return "Huge"");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function testSize(num) {
  // Only change code below this line


  return "Change Me";
  // Only change code above this line
}

// Change this value to test
testSize(7);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
