---
id: 5900f4701000cf542c50ff82
title: 'Problema 259: Números alcançáveis'
challengeType: 1
forumTopicId: 301907
dashedName: problem-259-reachable-numbers
---

# --description--

Um número inteiro positivo será chamado de acessível se puder resultar de uma expressão aritmética obedecendo às seguintes regras:

- Usa os algarismos de 1 a 9, nessa ordem e exatamente uma vez cada.
- Quaisquer algarismos sucessivos podem ser concatenados (por exemplo, usando os algarismos 2, 3 e 4 obtemos o número 234).
- Apenas as quatro operações aritméticas binárias habituais (adição, subtração, multiplicação e divisão) são permitidas.
- Cada operação pode ser usada qualquer número de vezes, ou mesmo não usada.
- Não é permitido o menos unário.
- Qualquer número de parênteses (possivelmente aninhados) podem ser usados para definir a ordem das operações.

Por exemplo, 42 é acessível, já que $\frac{1}{23} \times ((4 \times 5) - 6) \times (78 - 9) = 42$.

Qual é a soma de todos os números inteiros positivos acessíveis?

# --hints--

`reachableNumbers()` deve retornar `20101196798`.

```js
assert.strictEqual(reachableNumbers(), 20101196798);
```

# --seed--

## --seed-contents--

```js
function reachableNumbers() {

  return true;
}

reachableNumbers();
```

# --solutions--

```js
// solution required
```
