---
id: 5900f4d51000cf542c50ffe8
challengeType: 5
title: 'Problem 361: Subsequence of Thue-Morse sequence'
forumTopicId: 302022
localeTitle: 'Problem 361: Subsequence of Thue-Morse sequence'
---

## Description
<section id='description'>
Последовательность Thue-Morse {Tn} является бинарной последовательностью, удовлетворяющей: T0 = 0 T2n = Tn T2n + 1 = 1 - Tn <p> Первые несколько терминов {Tn} приведены следующим образом: 01101001100101101001011001101001 .... </p><p> Мы определяем {An} как отсортированную последовательность целых чисел, так что двоичное выражение каждого элемента появляется как подпоследовательность в {Tn}. Например, десятичное число 18 выражается как 10010 в двоичном формате. 10010 появляется в {Tn} (от T8 до T12), поэтому 18 является элементом {An}. Десятичное число 14 выражается как 1110 в двоичном формате. 1110 никогда не появляется в {Tn}, поэтому 14 не является элементом {An}. </p><p> Первые несколько членов An даны следующим образом: n0123456789101112 ... An012345691011121318 ... </p><p> Мы также можем проверить, что A100 = 3251 и A1000 = 80852364498. </p><p> Найдите последние 9 цифр. </p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler361()</code> should return 178476944.
    testString: assert.strictEqual(euler361(), 178476944);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler361() {
  // Good luck!
  return true;
}

euler361();

```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
