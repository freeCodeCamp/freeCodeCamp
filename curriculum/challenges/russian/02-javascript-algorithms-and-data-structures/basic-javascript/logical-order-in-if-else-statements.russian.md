---
id: 5690307fddb111c6084545d7
title: Logical Order in If Else Statements
challengeType: 1
videoUrl: https://scrimba.com/c/cwNvMUV
forumTopicId: 18228
localeTitle: Логический порядок в остальных случаях
---

## Description
<section id='description'>
Порядок важен в <code>if</code> , <code>else if</code> . Функция выполняется сверху вниз, поэтому вы хотите быть осторожным с тем, что должно быть сделано первым. Возьмем эти две функции в качестве примера. Вот первый: <blockquote> функция foo (x) { <br> если (x &lt;1) { <br> return «Меньше одного»; <br> } else if (x &lt;2) { <br> return «Меньше двух»; <br> } else { <br> return «Больше или равно двум»; <br> } <br> } </blockquote> А второй просто переключает порядок утверждений: <blockquote> функциональная панель (x) { <br> если (x &lt;2) { <br> return «Меньше двух»; <br> } else if (x &lt;1) { <br> return «Меньше одного»; <br> } else { <br> return «Больше или равно двум»; <br> } <br> } </blockquote> Хотя эти две функции выглядят почти одинаковыми, если мы передаем число для обоих, мы получаем разные выходы. <blockquote> foo (0) // «Меньше одного» <br> bar (0) // «Менее двух» </blockquote>
</section>

## Instructions
<section id='instructions'>
Измените порядок логики в функции так, чтобы она вернула правильные утверждения во всех случаях.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>orderMyLogic(4)</code> should return "Less than 5"
    testString: assert(orderMyLogic(4) === "Less than 5");
  - text: <code>orderMyLogic(6)</code> should return "Less than 10"
    testString: assert(orderMyLogic(6) === "Less than 10");
  - text: <code>orderMyLogic(11)</code> should return "Greater than or equal to 10"
    testString: assert(orderMyLogic(11) === "Greater than or equal to 10");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function orderMyLogic(val) {
  if (val < 10) {
    return "Less than 10";
  } else if (val < 5) {
    return "Less than 5";
  } else {
    return "Greater than or equal to 10";
  }
}

// Change this value to test
orderMyLogic(7);

```

</div>

</section>

## Solution
<section id='solution'>

```js
function orderMyLogic(val) {
  if(val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}
```

</section>
