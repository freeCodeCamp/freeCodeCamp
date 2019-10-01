---
title: 9 billion names of God the integer
id: 5949b579404977fbaefcd736
challengeType: 5
forumTopicId: 302219
localeTitle: 9 миллиардов имен Бога - целое число
---

## Description
<section id='description'>
<p> Эта задача - вариация <a href="https://en.wikipedia.org/wiki/The Nine Billion Names of God#Plot_summary" title="wp: Девять миллиардов имен Бога # Plot_summary">рассказа Артура Кларка</a> . </p><p> (Решители должны знать о последствиях выполнения этой задачи.) </p><p> Подробно, чтобы указать, что подразумевается под «именем»: </p><p> Целое число 1 имеет 1 имя «1». </p><p> Целое число 2 имеет 2 имени «1 + 1» и «2». </p><p> Целое число 3 имеет 3 имени «1 + 1 + 1», «2 + 1» и «3». </p><p> Целое число 4 имеет 5 имен «1 + 1 + 1 + 1», «2 + 1 + 1», «2 + 2», «3 + 1», «4». </p><p> Целое число 5 имеет 7 имен «1 + 1 + 1 + 1 + 1», «2 + 1 + 1 + 1», «2 + 2 + 1», «3 + 1 + 1», «3 + 2», «4 + 1», «5». </p><p> Это можно визуализировать в следующем виде: </p><pre> 1
        1 1
      1 1 1
    1 2 1 1
  1 2 2 1 1
1 3 3 2 1 1
</pre><p> Где строка $ n $ соответствует целому числу $ n $, а каждый столбец $ C $ в строке $ m $ слева направо соответствует числу имен, начинающихся с $ C $. </p><p> Необязательно заметим, что сумма $ n $ -ой строки $ P (n) $ является <a href="http://mathworld.wolfram.com/PartitionFunctionP.html" title="ссылка: http://mathworld.wolfram.com/PartitionFunctionP.html">целочисленной статистикой</a> . </p> задача <p> Реализуйте функцию, которая возвращает сумму $ n $ -ой строки. </p>
</section>

## Instructions
<section id='instructions'>
Implement a function that returns the sum of the  $n$-th  row.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>numberOfNames</code> is a function.
    testString: assert(typeof numberOfNames === 'function');
  - text: <code>numberOfNames(5)</code> should equal 7.
    testString: assert.equal(numberOfNames(5), 7);
  - text: <code>numberOfNames(12)</code> should equal 77.
    testString: assert.equal(numberOfNames(12), 77);
  - text: <code>numberOfNames(18)</code> should equal 385.
    testString: assert.equal(numberOfNames(18), 385);
  - text: <code>numberOfNames(23)</code> should equal 1255.
    testString: assert.equal(numberOfNames(23), 1255);
  - text: <code>numberOfNames(42)</code> should equal 53174.
    testString: assert.equal(numberOfNames(42), 53174);
  - text: <code>numberOfNames(123)</code> should equal 2552338241.
    testString: assert.equal(numberOfNames(123), 2552338241);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function numberOfNames(num) {
  // Good luck!
  return true;
}

```

</div>

</section>

## Solution
<section id='solution'>

```js
function numberOfNames(num) {
  const cache = [
    [1]
  ];
  for (let l = cache.length; l < num + 1; l++) {
    let Aa;
    let Mi;
    const r = [0];
    for (let x = 1; x < l + 1; x++) {
      r.push(r[r.length - 1] + (Aa = cache[l - x < 0 ? cache.length - (l - x) : l - x])[(Mi = Math.min(x, l - x)) < 0 ? Aa.length - Mi : Mi]);
    }
    cache.push(r);
  }
  return cache[num][cache[num].length - 1];
}
```

</section>
