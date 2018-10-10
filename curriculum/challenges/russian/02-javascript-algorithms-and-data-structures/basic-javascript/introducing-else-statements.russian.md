---
id: 56533eb9ac21ba0edf2244da
title: Introducing Else Statements
challengeType: 1
videoUrl: ''
localeTitle: Введение в новые заявления
---

## Description
<section id="description"> Когда условие для оператора <code>if</code> истинно, выполняется блок кода после него. Как насчет того, когда это условие ложно? Обычно ничего не происходило. С помощью инструкции <code>else</code> может выполняться альтернативный блок кода. <blockquote> если (num&gt; 10) { <br> возвращение «Больше, чем 10»; <br> } else { <br> вернуть «10 или меньше»; <br> } </blockquote></section>

## Instructions
<section id="instructions"> Объедините операторы <code>if</code> в один оператор <code>if/else</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Вы должны иметь только один оператор <code>if</code> в редакторе
    testString: 'assert(code.match(/if/g).length === 1, "You should only have one <code>if</code> statement in the editor");'
  - text: Вы должны использовать инструкцию <code>else</code>
    testString: 'assert(/else/g.test(code), "You should use an <code>else</code> statement");'
  - text: <code>testElse(4)</code> должен возвращать «5 или меньше»
    testString: 'assert(testElse(4) === "5 or Smaller", "<code>testElse(4)</code> should return "5 or Smaller"");'
  - text: <code>testElse(5)</code> должен возвращать «5 или меньше»
    testString: 'assert(testElse(5) === "5 or Smaller", "<code>testElse(5)</code> should return "5 or Smaller"");'
  - text: '<code>testElse(6)</code> должен возвращать «Больше, чем 5»,'
    testString: 'assert(testElse(6) === "Bigger than 5", "<code>testElse(6)</code> should return "Bigger than 5"");'
  - text: <code>testElse(10)</code> должен возвращать «Больше 5»
    testString: 'assert(testElse(10) === "Bigger than 5", "<code>testElse(10)</code> should return "Bigger than 5"");'
  - text: Не меняйте код выше или ниже строк.
    testString: 'assert(/var result = "";/.test(code) && /return result;/.test(code), "Do not change the code above or below the lines.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function testElse(val) {
  var result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  }

  if (val <= 5) {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

// Change this value to test
testElse(4);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
