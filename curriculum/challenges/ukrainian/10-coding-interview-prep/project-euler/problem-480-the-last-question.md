---
id: 5900f54c1000cf542c51005f
title: 'Завдання 480: Останнє завдання'
challengeType: 1
forumTopicId: 302158
dashedName: problem-480-the-last-question
---

# --description--

Розгляньте усі слова, які можуть бути сформовані з обраних літер у будь-якому порядку з фрази:

$$\mathbf{\text{thereisasyetinsufficientdataforameaningfulanswer}}$$

Припустимо, що слова, що складаються з 15 літер чи менше, записані у алфавітному порядку, та пронумеровані послідовно починаючи з 1.

Список буде включати:

$$\begin{align}   & 1: \text{a} \\\\
  & 2: \text{aa} \\\\   & 3: \text{aaa} \\\\
  & 4: \text{aaaa} \\\\   & 5: \text{aaaaa} \\\\
  & 6: \text{aaaaaa} \\\\   & 7: \text{aaaaaac} \\\\
  & 8: \text{aaaaaacd} \\\\   & 9: \text{aaaaaacde} \\\\
  & 10: \text{aaaaaacdee} \\\\   & 11: \text{aaaaaacdeee} \\\\
  & 12: \text{aaaaaacdeeee} \\\\   & 13: \text{aaaaaacdeeeee} \\\\
  & 14: \text{aaaaaacdeeeeee} \\\\   & 15: \text{aaaaaacdeeeeeef} \\\\
  & 16: \text{aaaaaacdeeeeeeg} \\\\   & 17: \text{aaaaaacdeeeeeeh} \\\\
  & \ldots \\\\   & 28: \text{aaaaaacdeeeeeey} \\\\
  & 29: \text{aaaaaacdeeeeef} \\\\   & 30: \text{aaaaaacdeeeeefe} \\\\
  & \ldots \\\\   & 115246685191495242: \text{euleoywuttttsss} \\\\
  & 115246685191495243: \text{euler} \\\\   & 115246685191495244: \text{eulera} \\\\
  & ... \\\\   & 525069350231428029: \text{ywuuttttssssrrr} \\\\
\end{align}$$

Визначте $P(w)$ як позицію слова $w$.

Визначте $W(p)$ як слово у позиції $p$.

Бачимо, що $P(w)$ та $W(p)$ є оберненими: $P(W(p)) = p$ та $W(P(w)) = w$.

Приклади:

$$\begin{align}   & W(10) = \text{ aaaaaacdee} \\\\
  & P(\text{aaaaaacdee}) = 10 \\\\   & W(115246685191495243) = \text{ euler} \\\\
  & P(\text{euler}) = 115246685191495243 \\\\ \end{align}$$

Знайдіть $$W(P(\text{legionary}) + P(\text{calorimeters}) - P(\text{annihilate}) + P(\text{orchestrated}) - P(\text{fluttering})).$$

Відповідь запишіть малими літерами (без пунктуації та пробілів).

# --hints--

`euler480()` має повернути рядок.

```js
assert(typeof euler480() === 'string');
```

`euler480()` має повернути рядок `turnthestarson`.

```js
assert.strictEqual(euler480(), 'turnthestarson');
```

# --seed--

## --seed-contents--

```js
function euler480() {

  return true;
}

euler480();
```

# --solutions--

```js
// solution required
```
