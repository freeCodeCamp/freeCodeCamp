---
id: 5900f40c1000cf542c50ff1e
challengeType: 5
title: 'Problem 159: Digital root sums of factorisations'
forumTopicId: 301790
localeTitle: 'Задача 159: Цифровые корневые суммы факторизации'
---

## Description
<section id='description'>
Составной номер можно разделить на множество разных способов. Например, не включая умножение на единицу, 24 можно разделить на 7 различных способов: <p> 24 = 2x2x2x3 24 = 2x3x4 24 = 2x2x6 24 = 4x6 24 = 3x8 24 = 2x12 24 = 24 </p><p> Напомним, что цифровой корень числа в базе 10 найден путем суммирования цифр этого числа и повторения этого процесса до тех пор, пока число не будет достигнуто, что меньше 10. Таким образом, цифровой корень из 467 равен 8. Мы будет называть цифровую корневую сумму (DRS) суммой цифровых корней отдельных факторов нашего числа. В приведенной ниже таблице показаны все значения DRS для 24. FactorisationDigital Root Sum2x2x2x3 92x3x4 92x2x6 104x6 103x8 112x12 524 6 Максимальный размер цифрового корня 24 равен 11. Функция mdrs (n) дает максимальную цифровую корневую сумму n. Итак, mdrs (24) = 11. Найти Σmdrs (n) при 1 &lt;n &lt;1,000,000. </p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler159()</code> should return 14489159.
    testString: assert.strictEqual(euler159(), 14489159);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler159() {
  // Good luck!
  return true;
}

euler159();

```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
