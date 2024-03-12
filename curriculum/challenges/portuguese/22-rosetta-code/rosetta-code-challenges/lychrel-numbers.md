---
id: 5ea2815a8640bcc6cb7dab3c
title: Números de Lychrel
challengeType: 1
forumTopicId: 385287
dashedName: lychrel-numbers
---

# --description--

<ol>
  <li>Receba um número inteiro <code>n₀</code>, maior que zero.</li>
  <li>Forme o próximo número <code>n</code> da série invertendo <code>n₀</code> e adicionando-a a <code>n₀</code></li>
  <li>Pare quando <code>n</code> se tornar palindrômico - ou seja, os dígitos de <code>n</code> na ordem inversa == <code>n</code>.</li>
</ol>

A relação de recorrência acima, quando aplicada à maioria dos números iniciais `n` = 1, 2, ... termina rapidamente em um palíndromo.

Por exemplo, se `n₀` = 12, temos we get:

```bash
12
12 + 21 = 33,  a palindrome!
```

E se `n₀` = 55, temos:

```bash
55
55 + 55 = 110
110 + 011 = 121,  a palindrome!
```

Observe que a verificação de um palíndromo acontece *após* uma adição.

Alguns números iniciais parecem demorar para sempre. A relação de recorrência para 196 foi calculada por milhões e milhões de repetições formando números com milhões de dígitos, sem formar um palíndromo. Esses números que não terminam em um palíndromo são chamados de **números de Lychrel**.

Para fins desta tarefa, um número de Lychrel é qualquer número inicial que não forme um palíndromo em 500 (ou mais) iterações.

**Seed e os números de Lychrel relacionados:**

Qualquer inteiro produzido na sequência de um número de Lychrel também é um número de Lychrel.

Em geral, qualquer sequência a partir de um número de Lychrel *pode* convergir para se juntar à sequência de um candidato a número de Lychrel anterior. Por exemplo, as sequências para os números 196 e depois 689 começam:

```bash
    196
    196 + 691 = 887
    887 + 788 = 1675
    1675 + 5761 = 7436
    7436 + 6347 = 13783
    13783 + 38731 = 52514
    52514 + 41525 = 94039
    ...
    689
    689 + 986 = 1675
    1675 + 5761 = 7436
    ...
```

Vemos, portanto, que a sequência que começa com 689 converge e continua com os mesmos números que para 196.

Por isso, podemos dividir ainda mais os números de Lychrel em verdadeiros **seeds** candidatas a números de Lychrel, e números **relacionados** que não produzem palíndromos, mas têm números inteiros em sua sequência que são vistos como parte da sequência gerada de um número de Lychrel inferior.

# --instructions--

Escreva uma função que recebe um número como parâmetro. Retorne true se o número for um número de Lynchrel. Caso contrário, retorne false. Lembre-se de que o limite de iterações é de 500.

# --hints--

`isLychrel` deve ser uma função.

```js
assert(typeof isLychrel === 'function');
```

`isLychrel(12)` deve retornar um booleano.

```js
assert(typeof isLychrel(12) === 'boolean');
```

`isLychrel(12)` deve retornar `false`.

```js
assert.equal(isLychrel(12), false);
```

`isLychrel(55)` deve retornar `false`.

```js
assert.equal(isLychrel(55), false);
```

`isLychrel(196)` deve retornar `true`.

```js
assert.equal(isLychrel(196), true);
```

`isLychrel(879)` deve retornar `true`.

```js
assert.equal(isLychrel(879), true);
```

`isLychrel(44987)` deve retornar `false`.

```js
assert.equal(isLychrel(44987), false);
```

`isLychrel(7059)` deve retornar `true`.

```js
assert.equal(isLychrel(7059), true);
```

# --seed--

## --seed-contents--

```js
function isLychrel(n) {

}
```

# --solutions--

```js
function isLychrel(n) {
  function reverse(num) {
    return parseInt(
      num
        .toString()
        .split('')
        .reverse()
        .join('')
    );
  }

  var i;
  for (i = 0; i < 500; i++) {
    n = n + reverse(n);
    if (n == reverse(n)) break;
  }

  return i == 500;
}
```
