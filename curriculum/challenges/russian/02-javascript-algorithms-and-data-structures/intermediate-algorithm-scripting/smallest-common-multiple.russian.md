---
id: ae9defd7acaf69703ab432ea
title: Smallest Common Multiple
isRequired: true
challengeType: 5
forumTopicId: 16075
localeTitle: Самый маленький общий множественный
---

## Description
<section id='description'>
Найдите наименьшее общее кратность предоставленных параметров, которые могут быть равномерно разделены обоими, а также всеми последовательными номерами в диапазоне между этими параметрами. Диапазон будет массивом из двух чисел, которые не обязательно будут в численном порядке. Например, если заданы 1 и 3, найдите наименьший общий кратный как 1, так и 3, который также равномерно делится на все числа <em>между</em> 1 и 3. Ответ здесь будет 6. Не забудьте использовать <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask,</a> если вы получите застрял. Попробуйте подключить программу. Напишите свой собственный код.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>smallestCommons([1, 5])</code> should return a number.
    testString: assert.deepEqual(typeof smallestCommons([1, 5]), 'number');
  - text: <code>smallestCommons([1, 5])</code> should return 60.
    testString: assert.deepEqual(smallestCommons([1, 5]), 60);
  - text: <code>smallestCommons([5, 1])</code> should return 60.
    testString: assert.deepEqual(smallestCommons([5, 1]), 60);
  - text: <code>smallestCommons([2, 10])</code> should return 2520.
    testString: assert.deepEqual(smallestCommons([2, 10]), 2520);
  - text: <code>smallestCommons([1, 13])</code> should return 360360.
    testString: assert.deepEqual(smallestCommons([1, 13]), 360360);
  - text: <code>smallestCommons([23, 18])</code> should return 6056820.
    testString: assert.deepEqual(smallestCommons([23, 18]), 6056820);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function smallestCommons(arr) {
  return arr;
}


smallestCommons([1,5]);

```

</div>

</section>

## Solution
<section id='solution'>

```js
function gcd(a, b) {
    while (b !== 0) {
        a = [b, b = a % b][0];
    }
    return a;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function smallestCommons(arr) {
  arr.sort(function(a,b) {return a-b;});
  var rng = [];
  for (var i = arr[0]; i <= arr[1]; i++) {
    rng.push(i);
  }
  return rng.reduce(lcm);
}
```

</section>
