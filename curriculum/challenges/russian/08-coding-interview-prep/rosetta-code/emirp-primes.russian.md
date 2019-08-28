---
title: Emirp primes
id: 599d0ba974141b0f508b37d5
challengeType: 5
forumTopicId: 302253
localeTitle: Бонусы Эмирпа
---

## Description
<section id='description'>
<p> Эмирп (первичный, записанный в обратном порядке) - это простые числа, которые при обратном (в их десятичном представлении) являются разными штрихами. </p><p> Напишите функцию, которая должна быть способна: Показывать первые числа <b>n</b> номеров. Покажите числа eprimes в диапазоне. Покажите количество eprimes в диапазоне. Покажите номер <b>n <sup>th</sup></b> eprimes. </p><p> Функция должна иметь два параметра. Первый получит <b>n</b> или диапазон в виде массива. Вторая будет получать логическое значение, которое указывает, возвращает ли функция eprimes в виде массива или одного числа (количество простых чисел в диапазоне или <b>n- <sup>го</sup></b> числа). В соответствии с параметрами функция должна возвращать массив или число. </p>
</section>

## Instructions
<section id='instructions'>
Write a function that: 
<ul>
  <li>Shows the first <code>n</code> emirp numbers.</li>
  <li>Shows the emirp numbers in a range.</li>
  <li>Shows the number of emirps in a range.</li>
  <li>Shows the <code>n<sup>th</sup></code> emirp number.</li>
</ul>
The function should accept two parameters. The first will receive <code>n</code> or the range as an array. The second will receive a boolean, that specifies if the function returns the emirps as an array or a single number (the number of primes in the range or the <code>n<sup>th</sup></code> prime). According to the parameters the function should return an array or a number.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>emirps</code> is a function.
    testString: assert(typeof emirps === 'function');
  - text: <code>emirps(20,true)</code> should return <code>[13,17,31,37,71,73,79,97,107,113,149,157,167,179,199,311,337,347,359,389]</code>
    testString: assert.deepEqual(emirps(20, true), [13, 17, 31, 37, 71, 73, 79, 97, 107, 113, 149, 157, 167, 179, 199, 311, 337, 347, 359, 389]);
  - text: <code>emirps(10000)</code> should return <code>948349</code>
    testString: assert.deepEqual(emirps(10000), 948349);
  - text: <code>emirps([7700,8000],true)</code> should return <code>[7717,7757,7817,7841,7867,7879,7901,7927,7949,7951,7963]</code>
    testString: assert.deepEqual(emirps([7700, 8000], true), [7717, 7757, 7817, 7841, 7867, 7879, 7901, 7927, 7949, 7951, 7963]);
  - text: <code>emirps([7700,8000],true)</code> should return <code>11</code>
    testString: assert.deepEqual(emirps([7700, 8000], false), 11);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function emirps(n) {
  // Good luck!
}

```

</div>

</section>

## Solution
<section id='solution'>

```js
// noprotect
function emirps(num, showEmirps)
{
  const is_prime = function(n)
    {
    if (!(n % 2) || !(n % 3)) return false;
    let p = 1;
    while (p * p < n)
                    { if (n % (p += 4) == 0 || n % (p += 2) == 0)
                            { return false; } }
    return true;
  };
  const is_emirp = function(n) {
    const r = parseInt(n.toString().split('').reverse().join(''));
    return r != n && is_prime(n) && is_prime(r);
  };

  let i,
    arr = [];
  if (typeof num === 'number') {
    for (i = 0; arr.length < num; i++) if (is_emirp(i)) arr.push(i);
    // first x emirps
    if (showEmirps) return arr;
    // xth emirp
    return arr.pop();
  }

  if (Array.isArray(num)) {
    for (i = num[0]; i <= num[1]; i++) if (is_emirp(i)) arr.push(i);
    // emirps between x .. y
    if (showEmirps) return arr;
    // number of emirps between x .. y
    return arr.length;
  }
}
```

</section>
