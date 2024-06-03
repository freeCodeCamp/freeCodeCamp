---
id: 5a23c84252665b21eecc8028
title: Sequência de Stern-Brocot
challengeType: 1
forumTopicId: 302324
dashedName: stern-brocot-sequence
---

# --description--

Para esta tarefa, a sequência Stern-Brocot deve ser gerada por um algoritmo semelhante ao empregado na geração da <a href="https://rosettacode.org/wiki/Fibonacci_sequence" target="_blank" rel="noopener noreferrer nofollow">sequência de Fibonacci</a>.

<ol>
  <li>O primeiro e o segundo membros da sequência são ambos 1:</li>
    <ul><li>1, 1</li></ul>
  <li>Comece considerando o segundo membro da sequência</li>
  <li>Some o membro considerado da sequência e seu precedente, (1 + 1) = 2, e acrescente-o ao final da sequência:</li>
    <ul><li>1, 1, 2</li></ul>
  <li>Acrescente o membro considerado da sequência ao final da sequência:</li>
    <ul><li>1, 1, 2, 1</li></ul>
  <li>Considere o próximo membro da série (o terceiro membro, ou seja, 2)</li>
  <li>IR PARA 3 </li>
    <ul>
      <li></li>
      <li> ─── Expandindo outro laço, obtemos agora: ───</li>
      <li></li>
    </ul>
  <li>Some o membro considerado da sequência e seu precedente, (2 + 1) = 3, e acrescente-o ao final da sequência:</li>
    <ul><li>1, 1, 2, 1, 3</li></ul>
  <li>Acrescente o membro considerado da sequência ao final da sequência:</li>
    <ul><li>1, 1, 2, 1, 3, 2</li></ul>
  <li>Considere o próximo membro da série (o quarto membro, ou seja, 1)</li>
</ol>

# --instructions--

Crie uma função que retorne a posição na sequência Stern-Brocot em que $ n $ é encontrado pela primeira vez, onde a sequência é gerada com o método descrito acima. Observe que essa sequência usa uma indexação baseada em 1.

# --hints--

`sternBrocot` deve ser uma função.

```js
assert(typeof sternBrocot == 'function');
```

`sternBrocot(2)` deve retornar um número.

```js
assert(typeof sternBrocot(2) == 'number');
```

`sternBrocot(2)` deve retornar `3`.

```js
assert.equal(sternBrocot(2), 3);
```

`sternBrocot(3)` deve retornar `5`.

```js
assert.equal(sternBrocot(3), 5);
```

`sternBrocot(5)` deve retornar `11`.

```js
assert.equal(sternBrocot(5), 11);
```

`sternBrocot(7)` deve retornar `19`.

```js
assert.equal(sternBrocot(7), 19);
```

`sternBrocot(10)` deve retornar `39`.

```js
assert.equal(sternBrocot(10), 39);
```

# --seed--

## --seed-contents--

```js
function sternBrocot(num) {

}
```

# --solutions--

```js
function sternBrocot(num) {
  function f(n) {
    return n < 2
      ? n
      : n & 1
      ? f(Math.floor(n / 2)) + f(Math.floor(n / 2 + 1))
      : f(Math.floor(n / 2));
  }

  function gcd(a, b) {
    return a ? (a < b ? gcd(b % a, a) : gcd(a % b, b)) : b;
  }
  var n;
  for (n = 1; f(n) != num; n++);
  return n;
}
```
