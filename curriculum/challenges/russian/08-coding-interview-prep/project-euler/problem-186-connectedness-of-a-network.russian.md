---
id: 5900f4281000cf542c50ff39
challengeType: 5
title: 'Problem 186: Connectedness of a network'
forumTopicId: 301822
localeTitle: 'Проблема 186: Связь сети'
---

## Description
<section id='description'>
Вот записи из занятой телефонной системы с миллионом пользователей: <p> RecNrCallerCalled120000710005326001835004393600863701497 ......... Телефонный номер вызывающего абонента и вызываемый номер в записи n являются Caller (n) = S2n-1 и Called (n) = S2n, где S1,2,3, ... приходят из «Отложенного генератора Фибоначчи»: </p><p> Для 1 ≤ k ≤ 55, Sk = [100003 - 200003k + 300007k3] (по модулю 1000000) Для 56 ≤ k Sk = [Sk-24 + Sk-55] (по модулю 1000000) </p><p> Если Caller (n) = Called (n), то предполагается, что пользователь ошибочно принят, и вызов завершается с ошибкой; в противном случае вызов будет успешным. </p><p> С самого начала записей мы говорим, что любая пара пользователей X и Y является друзьями, если X вызывает Y или наоборот. Аналогично, X является другом друга Z, если X является другом Y и Y является другом Z; и т. д. для более длинных цепей. </p><p> Номер телефона премьер-министра - 524287. После того, сколько успешных звонков, не считая ошибок, будет 99% пользователей (включая премьер-министра) быть другом или другом друга и т. Д. Премьер-министра? </p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler186()</code> should return 2325629.
    testString: assert.strictEqual(euler186(), 2325629);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler186() {
  // Good luck!
  return true;
}

euler186();

```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
