---
id: 56533eb9ac21ba0edf2244d7
title: Comparison with the Less Than Or Equal To Operator
challengeType: 1
videoUrl: ''
localeTitle: Сравнение с меньшим или равным оператору
---

## Description
<section id="description"> Чем <code>less than or equal to</code> оператору ( <code>&lt;=</code> ), то сравниваются значения двух чисел. Если число влево меньше или равно числу справа, оно возвращает <code>true</code> . Если число слева больше числа справа, оно возвращает <code>false</code> . Как и оператор равенства, <code>less than or equal to</code> преобразует типы данных. <strong>Примеры</strong> <blockquote> 4 &lt;= 5 // true <br> &#39;7&#39; &lt;= 7 // true <br> 5 &lt;= 5 // true <br> 3 &lt;= 2 // false <br> &#39;8&#39; &lt;= 4 // false </blockquote></section>

## Instructions
<section id="instructions"> Добавьте <code>less than or equal to</code> оператору к указанным линиям, чтобы иметь смысл. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>testLessOrEqual(0)</code> должен возвращать «Меньше, чем или <code>testLessOrEqual(0)</code> 12»,'
    testString: 'assert(testLessOrEqual(0) === "Smaller Than or Equal to 12", "<code>testLessOrEqual(0)</code> should return "Smaller Than or Equal to 12"");'
  - text: '<code>testLessOrEqual(11)</code> должен возвращать «Меньше, чем или <code>testLessOrEqual(11)</code> 12»,'
    testString: 'assert(testLessOrEqual(11) === "Smaller Than or Equal to 12", "<code>testLessOrEqual(11)</code> should return "Smaller Than or Equal to 12"");'
  - text: '<code>testLessOrEqual(12)</code> должен возвращать «Меньше, чем или <code>testLessOrEqual(12)</code> 12»,'
    testString: 'assert(testLessOrEqual(12) === "Smaller Than or Equal to 12", "<code>testLessOrEqual(12)</code> should return "Smaller Than or Equal to 12"");'
  - text: '<code>testLessOrEqual(23)</code> должен возвращать значение «Меньше, чем <code>testLessOrEqual(23)</code> 24»,'
    testString: 'assert(testLessOrEqual(23) === "Smaller Than or Equal to 24", "<code>testLessOrEqual(23)</code> should return "Smaller Than or Equal to 24"");'
  - text: '<code>testLessOrEqual(24)</code> должен возвращать значение «Меньше, чем <code>testLessOrEqual(24)</code> 24»,'
    testString: 'assert(testLessOrEqual(24) === "Smaller Than or Equal to 24", "<code>testLessOrEqual(24)</code> should return "Smaller Than or Equal to 24"");'
  - text: '<code>testLessOrEqual(25)</code> должен вернуть «Больше, чем 24»,'
    testString: 'assert(testLessOrEqual(25) === "More Than 24", "<code>testLessOrEqual(25)</code> should return "More Than 24"");'
  - text: '<code>testLessOrEqual(55)</code> должен вернуть «Больше, чем 24»,'
    testString: 'assert(testLessOrEqual(55) === "More Than 24", "<code>testLessOrEqual(55)</code> should return "More Than 24"");'
  - text: 'Вы должны использовать оператор <code>&lt;=</code> по крайней мере, дважды'
    testString: 'assert(code.match(/val\s*<=\s*("|")*\d+("|")*/g).length > 1, "You should use the <code>&lt;=</code> operator at least twice");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function testLessOrEqual(val) {
  if (val) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

// Change this value to test
testLessOrEqual(10);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
