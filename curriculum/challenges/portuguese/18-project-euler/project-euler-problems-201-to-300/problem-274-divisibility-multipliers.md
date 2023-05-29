---
id: 5900f47f1000cf542c50ff91
title: 'Problema 274: Multiplicadores de divisibilidade'
challengeType: 1
forumTopicId: 301924
dashedName: problem-274-divisibility-multipliers
---

# --description--

Para cada número inteiro $p > 1$ coprimo de 10, há um multiplicador positivo de divisibilidade $m &lt; p$ que preserva a divisibilidade por $p$ para a seguinte função em qualquer número inteiro positivo, $n$:

$f(n) = (\text{todos exceto o último algarismo de} \\; n) + (\text{o último algarismo de} \\; n) \times m$

Ou seja, se $m$ for o multiplicador de divisibilidade para $p$, então $f(n)$ é divisível por $p$ se e somente se $n$ for divisível por $p$.

Quando $n$ for muito maior que $p$, $f(n)$ será menor que $n$ e a aplicação repetida de $f$ fornecerá um teste de multiplicador de divisibilidade para $p$.

Por exemplo, o multiplicador de divisibilidade para 113 é 34.

$f(76275) = 7627 + 5 \times 34 = 7797$: 76275 e 7797 são divisíveis por 113

$f(12345) = 1234 + 5 \times 34 = 1404$: 12345 e 1404 não são divisíveis por 113

A soma dos multiplicadores de divisibilidade dos números primos que são coprimos de 10 e menores que 1000 é 39517. Qual é a soma dos multiplicadores de divisibilidade dos números primos que são coprimos de 10 e menores que ${10}^7$?

# --hints--

`divisibilityMultipliers()` deve retornar `1601912348822`.

```js
assert.strictEqual(divisibilityMultipliers(), 1601912348822);
```

# --seed--

## --seed-contents--

```js
function divisibilityMultipliers() {

  return true;
}

divisibilityMultipliers();
```

# --solutions--

```js
// solution required
```
