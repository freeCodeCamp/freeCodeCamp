---
id: 5900f43e1000cf542c50ff4f
title: 'Завдання 209: кругова логіка'
challengeType: 1
forumTopicId: 301850
dashedName: problem-209-circular-logic
---

# --description--

Бінарна таблиця істинності з введенням $k$ — це порядок присвоєння $k$ введених бітів (бінарних цифр: 0 [false] або 1 [true]) до вихідного біта 1. Наприклад, ось таблиця істинності з введенням $2$ для логічних функцій $AND$ та $XOR$:

| x | y | x AND y |
| - | - | ------- |
| 0 | 0 | 0       |
| 0 | 1 | 0       |
| 1 | 0 | 0       |
| 1 | 1 | 1       |

| x | y | x XOR y |
| - | - | ------- |
| 0 | 0 | 0       |
| 0 | 1 | 1       |
| 1 | 0 | 1       |
| 1 | 1 | 0       |

Скільки бінарних таблиць істинності з введенням $6$ ($τ$) задовільняють формулу

$$τ(a, b, c, d, e, f) \\; AND \\; τ(b, c, d, e, f, a \\; XOR \\; (b \\; AND \\; c)) = 0$$

для всіх $6$-бітних входів ($a$, $b$, $c$, $d$, $e$, $f$)?

# --hints--

`circularLogic()` має повернути `15964587728784`.

```js
assert.strictEqual(circularLogic(), 15964587728784);
```

# --seed--

## --seed-contents--

```js
function circularLogic() {

  return true;
}

circularLogic();
```

# --solutions--

```js
// solution required
```
