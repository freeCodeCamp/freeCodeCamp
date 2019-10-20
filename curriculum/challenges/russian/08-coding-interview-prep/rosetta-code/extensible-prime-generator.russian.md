---
title: Extensible prime generator
id: 598ee8b91b410510ae82efef
challengeType: 5
forumTopicId: 302262
localeTitle: Расширяемый первичный генератор
---

## Description
<section id='description'>
<p> Напишите генератор простых чисел, чтобы он автоматически регулировался для генерации любого разумно высокого премьер. </p> Генератор должен иметь возможность: Показывать первые <b>n</b> простых чисел. Показывать простые числа в диапазоне. Показывать количество простых чисел в диапазоне. Показывать <b>n- <sup>е</sup></b> простое число. <p> Функция должна иметь два параметра. Первый получит <b>n</b> или диапазон в виде массива. Вторая будет получать логическое значение, которое указывает, возвращает ли функция числа простых чисел в виде массива или одного числа (числа простых чисел в диапазоне или <b>n- <sup>го</sup></b> числа). В соответствии с параметрами функция должна возвращать массив. </p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>primeGenerator</code> is a function.
    testString: assert(typeof primeGenerator === 'function');
  - text: <code>primeGenerator</code> is a function.
    testString: assert.deepEqual(primeGenerator(20, true), [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71]);
  - text: <code>primeGenerator</code> is a function.
    testString: assert.deepEqual(primeGenerator([100, 150], true), [101, 103, 107, 109, 113, 127, 131, 137, 139, 149]);
  - text: <code>primeGenerator</code> is a function.
    testString: assert.equal(primeGenerator([7700, 8000], false), 30);
  - text: <code>primeGenerator</code> is a function.
    testString: assert.equal(primeGenerator(10000, false), 104729);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function primeGenerator(num, showPrimes) {
  // Good luck!
}

```

</div>

</section>

## Solution
<section id='solution'>

```js
// noprotect
function primeGenerator(num, showPrimes) {
  let i,
    arr = [];

  function isPrime(num) {
    // try primes <= 16
    if (num <= 16) { return (
      num == 2 || num == 3 || num == 5 || num == 7 || num == 11 || num == 13
    ); }
    // cull multiples of 2, 3, 5 or 7
    if (num % 2 == 0 || num % 3 == 0 || num % 5 == 0 || num % 7 == 0)
      { return false; }
    // cull square numbers ending in 1, 3, 7 or 9
    for (let i = 10; i * i <= num; i += 10) {
      if (num % (i + 1) == 0) return false;
      if (num % (i + 3) == 0) return false;
      if (num % (i + 7) == 0) return false;
      if (num % (i + 9) == 0) return false;
    }
    return true;
  }

  if (typeof num === 'number') {
    for (i = 0; arr.length < num; i++) if (isPrime(i)) arr.push(i);
    // first x primes
    if (showPrimes) return arr;
    // xth prime
    return arr.pop();
  }

  if (Array.isArray(num)) {
    for (i = num[0]; i <= num[1]; i++) if (isPrime(i)) arr.push(i);
    // primes between x .. y
    if (showPrimes) return arr;
    // number of primes between x .. y
    return arr.length;
  }
}
```

</section>
