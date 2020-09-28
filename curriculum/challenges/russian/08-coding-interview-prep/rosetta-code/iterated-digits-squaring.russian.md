---
title: Iterated digits squaring
id: 5a23c84252665b21eecc7ec1
challengeType: 5
forumTopicId: 302291
localeTitle: Итерированные цифры в квадрате
---

## Description
<section id='description'>
Если вы добавите квадрат цифр натурального числа (целое число больше нуля), вы всегда заканчиваете либо 1, либо 89: <pre> 15 -&gt; 26 -&gt; 40 -&gt; 16 -&gt; 37 -&gt; 58 -&gt; 89
7 -&gt; 49 -&gt; 97 -&gt; 130 -&gt; 10 -&gt; 1 </pre> Напишите функцию, которая принимает число как параметр и возвращает 1 или 89 после выполнения указанного процесса.
</section>

## Instructions
<section id='instructions'>
Write a function that takes a number as a parameter and returns 1 or 89 after performing the mentioned process.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>iteratedSquare</code> should be a function.
    testString: assert(typeof iteratedSquare=='function');
  - text: <code>iteratedSquare(4)</code> should return a number.
    testString: assert(typeof iteratedSquare(4)=='number');
  - text: <code>iteratedSquare(4)</code> should return <code>89</code>.
    testString: assert.equal(iteratedSquare(4),89);
  - text: <code>iteratedSquare(7)</code> should return <code>1</code>.
    testString: assert.equal(iteratedSquare(7),1);
  - text: <code>iteratedSquare(15)</code> should return <code>89</code>.
    testString: assert.equal(iteratedSquare(15),89);
  - text: <code>iteratedSquare(20)</code> should return <code>89</code>.
    testString: assert.equal(iteratedSquare(20),89);
  - text: <code>iteratedSquare(70)</code> should return <code>1</code>.
    testString: assert.equal(iteratedSquare(70),1);
  - text: <code>iteratedSquare(100)</code> should return <code>1</code>.
    testString: assert.equal(iteratedSquare(100),1);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function iteratedSquare(n) {
  // Good luck!
}

```

</div>

</section>

## Solution
<section id='solution'>

```js
function iteratedSquare(n) {
    var total;
    while (n != 89 && n != 1) {
        total = 0;
        while (n > 0) {
            total += Math.pow(n % 10, 2);
            n = Math.floor(n/10);
        }
        n = total;
    }
    return n;
}
```

</section>
