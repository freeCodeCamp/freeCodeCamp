---
id: 5900f54c1000cf542c51005f
challengeType: 5
title: 'Problem 480: The Last Question'
forumTopicId: 302158
localeTitle: 'Проблема 480: последний вопрос'
---

## Description
<section id='description'>
Рассмотрим все слова, которые могут быть сформированы путем выбора букв в любом порядке из фразы: thereisasyetinsluddadforameanfulfulanswer. Предположим, что те, у которых 15 букв или меньше, перечислены в алфавитном порядке и пронумерованы последовательно начиная с 1. Список будет включать: 1: a 2: aa 3: aaa 4: aaaa 5: aaaaa 6: aaaaaa 7: aaaaaac 8: aaaaaacd 9: aaaaaacde 10: aaaaaacdee 11: aaaaaacdeee 12: aaaaaacdeeeee 13: aaaaaacdeeeee 14: aaaaaacdeeeeee 15: aaaaaacdeeeeeee 16: aaaaaacdeeeeeeg 17: aaaaaacdeeeeeeh ... 28 : aaaaaacdeeeeeey 29: aaaaaacdeeeeef 30: aaaaaacdeeeeefe ... 115246685191495242: euleoywuttttsss 115246685191495243: euler 115246685191495244: eulera ... 525069350231428029: ywuuttttsssrrrDefine P (w) в качестве положения слова w. Определите W (p) как слово в позиции p. Мы видим, что P (w) и W (p) обращаются: P (W (p)) = p и W (P (w)) = w. Примеры: W (10) = aaaaaacdee P (aaaaaacdee) = 10 Вт (115246685191495243) = эйлер P (эйлер) = 115246685191495243Find W (P (легионный) + P (калориметры) - P (аннигилировать) + P (оркестрованный) - P ( трепетание)). Дайте свой ответ, используя строчные символы (без пунктуации или пробела).
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler480()</code> should return turnthestarson.
    testString: assert.strictEqual(euler480(), turnthestarson);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler480() {
  // Good luck!
  return true;
}

euler480();

```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
