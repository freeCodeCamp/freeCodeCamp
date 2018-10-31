---
id: 56533eb9ac21ba0edf2244db
title: Introducing Else If Statements
challengeType: 1
videoUrl: ''
localeTitle: Представляем Else If Statementments
---

## Description
<section id="description"> Если у вас есть несколько условий, которые необходимо устранить, вы можете связать, <code>if</code> инструкции вместе с инструкциями <code>else if</code> . <blockquote> если (num&gt; 15) { <br> возвращение «Больше 15»; <br> } else if (num &lt;5) { <br> return «Меньше 5»; <br> } else { <br> возвращение «от 5 до 15»; <br> } </blockquote></section>

## Instructions
<section id="instructions"> Преобразуйте логику, чтобы использовать инструкции <code>else if</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Вы должны иметь по крайней мере два <code>else</code> заявления
    testString: 'assert(code.match(/else/g).length > 1, "You should have at least two <code>else</code> statements");'
  - text: У вас должно быть как минимум два оператора <code>if</code>
    testString: 'assert(code.match(/if/g).length > 1, "You should have at least two <code>if</code> statements");'
  - text: У вас должно быть закрытие и открытие фигурных скобок для каждого условия
    testString: 'assert(code.match(/if\s*\((.+)\)\s*\{[\s\S]+\}\s*else if\s*\((.+)\)\s*\{[\s\S]+\}\s*else\s*\{[\s\S]+\s*\}/), "You should have closing and opening curly braces for each condition in your if else statement");'
  - text: <code>testElseIf(0)</code> должен возвращать значение &quot;Меньше 5&quot;
    testString: 'assert(testElseIf(0) === "Smaller than 5", "<code>testElseIf(0)</code> should return "Smaller than 5"");'
  - text: '<code>testElseIf(5)</code> должен возвращать «Между 5 и 10»,'
    testString: 'assert(testElseIf(5) === "Between 5 and 10", "<code>testElseIf(5)</code> should return "Between 5 and 10"");'
  - text: '<code>testElseIf(7)</code> должен возвращать «от 5 до 10»,'
    testString: 'assert(testElseIf(7) === "Between 5 and 10", "<code>testElseIf(7)</code> should return "Between 5 and 10"");'
  - text: '<code>testElseIf(10)</code> должен возвращать «Между 5 и 10»,'
    testString: 'assert(testElseIf(10) === "Between 5 and 10", "<code>testElseIf(10)</code> should return "Between 5 and 10"");'
  - text: '<code>testElseIf(12)</code> должен возвращать «Больше 10»,'
    testString: 'assert(testElseIf(12) === "Greater than 10", "<code>testElseIf(12)</code> should return "Greater than 10"");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  if (val < 5) {
    return "Smaller than 5";
  }

  return "Between 5 and 10";
}

// Change this value to test
testElseIf(7);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
