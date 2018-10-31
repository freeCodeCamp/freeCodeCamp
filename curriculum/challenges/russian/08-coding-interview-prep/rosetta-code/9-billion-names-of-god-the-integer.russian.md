---
title: 9 billion names of God the integer
id: 5949b579404977fbaefcd736
challengeType: 5
videoUrl: ''
localeTitle: 9 миллиардов имен Бога - целое число
---

## Description
<section id="description"><p> Эта задача - вариация <a href="https://en.wikipedia.org/wiki/The Nine Billion Names of God#Plot_summary" title="wp: Девять миллиардов имен Бога # Plot_summary">рассказа Артура Кларка</a> . </p><p> (Решители должны знать о последствиях выполнения этой задачи.) </p><p> Подробно, чтобы указать, что подразумевается под «именем»: </p><p> Целое число 1 имеет 1 имя «1». </p><p> Целое число 2 имеет 2 имени «1 + 1» и «2». </p><p> Целое число 3 имеет 3 имени «1 + 1 + 1», «2 + 1» и «3». </p><p> Целое число 4 имеет 5 имен «1 + 1 + 1 + 1», «2 + 1 + 1», «2 + 2», «3 + 1», «4». </p><p> Целое число 5 имеет 7 имен «1 + 1 + 1 + 1 + 1», «2 + 1 + 1 + 1», «2 + 2 + 1», «3 + 1 + 1», «3 + 2», «4 + 1», «5». </p><p> Это можно визуализировать в следующем виде: </p><pre> 1
        1 1
      1 1 1
    1 2 1 1
  1 2 2 1 1
1 3 3 2 1 1
</pre><p> Где строка $ n $ соответствует целому числу $ n $, а каждый столбец $ C $ в строке $ m $ слева направо соответствует числу имен, начинающихся с $ C $. </p><p> Необязательно заметим, что сумма $ n $ -ой строки $ P (n) $ является <a href="http://mathworld.wolfram.com/PartitionFunctionP.html" title="ссылка: http://mathworld.wolfram.com/PartitionFunctionP.html">целочисленной статистикой</a> . </p> задача <p> Реализуйте функцию, которая возвращает сумму $ n $ -ой строки. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>numberOfNames</code> - это функция.
    testString: 'assert(typeof numberOfNames === "function", "<code>numberOfNames</code> is a function.");'
  - text: <code>numberOfNames(5)</code> должно равняться 7.
    testString: 'assert.equal(numberOfNames(5), 7, "<code>numberOfNames(5)</code> should equal 7.");'
  - text: <code>numberOfNames(12)</code> должно равняться 77.
    testString: 'assert.equal(numberOfNames(12), 77, "<code>numberOfNames(12)</code> should equal 77.");'
  - text: <code>numberOfNames(18)</code> должно равняться 385.
    testString: 'assert.equal(numberOfNames(18), 385, "<code>numberOfNames(18)</code> should equal 385.");'
  - text: <code>numberOfNames(23)</code> должно равняться 1255.
    testString: 'assert.equal(numberOfNames(23), 1255, "<code>numberOfNames(23)</code> should equal 1255.");'
  - text: <code>numberOfNames(42)</code> должен равняться 53174.
    testString: 'assert.equal(numberOfNames(42), 53174, "<code>numberOfNames(42)</code> should equal 53174.");'
  - text: <code>numberOfNames(123)</code> должно равняться 2552338241.
    testString: 'assert.equal(numberOfNames(123), 2552338241, "<code>numberOfNames(123)</code> should equal 2552338241.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function numberOfNames (num) {
  // Good luck!
  return true;
}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
