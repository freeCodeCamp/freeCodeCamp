---
id: 5900f43e1000cf542c50ff4f
title: 'Problema 209: Logica Circolare'
challengeType: 1
forumTopicId: 301850
dashedName: problem-209-circular-logic
---

# --description--

Una tabella della verità binaria $k$-input è una mappa da un input a $k$ bit (cifre binarie, 0 [false] o 1 [true]) a 1 bit di output. Per esempio, le tabelle binarie della verità a $2$ bit di input per le funzioni logiche $AND$ e $XOR$ sono:

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

Quante tabelle binarie della verità a $6$ bit di input, $τ$, soddisfano la formula

$$τ(a, b, c, d, e, f) \\; AND \\; τ(b, c, d, e, f, a \\; XOR \\; (b \\; AND \\; c)) = 0$$

per tutti gli input a $6$ bit ($a$, $b$, $c$, $d$, $e$, $f$)?

# --hints--

`circularLogic()` dovrebbe restituire `15964587728784`.

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
