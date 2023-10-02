---
id: 5900f43e1000cf542c50ff4f
title: 'Завданя 209: Кругова логіка'
challengeType: 1
forumTopicId: 301850
dashedName: problem-209-circular-logic
---

# --description--

Бінарна таблиця істинності зі входом $k$ — це карта з $k$ вхідних бітів (двійкових цифр, а саме 0 [false] або 1 [true]) у 1 вихідний біт. Наприклад, таблицями істинності зі входом $2$ для логічних функцій $AND$ і $XOR$ є:

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

Скільки бінарних таблиць істинності зі входом $6$, а саме $τ$, задовольняють формулу

$$τ(a, b, c, d, e, f) \\; AND \\; τ(b, c, d, e, f, a \\; XOR \\; (b \\; AND \\; c)) = 0$$

для всіх $6$-бітних входів ($a$, $b$, $c$, $d$, $e$, $f$)?

# --hints--

`circularLogic()` має видати `15964587728784`.

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
