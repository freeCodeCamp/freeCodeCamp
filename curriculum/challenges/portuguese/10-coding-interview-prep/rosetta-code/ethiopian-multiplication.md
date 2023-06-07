---
id: 599d1566a02b571412643b84
title: Multiplicação etíope
challengeType: 1
forumTopicId: 302257
dashedName: ethiopian-multiplication
---

# --description--

A multiplicação etíope é um método de multiplicação de inteiros usando apenas adição, duplicação e divisão pela metade.

**Método:**

<ol>
  <li>Pegue dois números para serem multiplicados e anote-os no topo de duas colunas</li>
  <li>Na coluna da esquerda, reduza repetidamente pela metade o último número, descartando quaisquer restos, e escreva o resultado abaixo do último na mesma coluna, até você escrever o valor de <code>1</code></li>
  <li>Na coluna da direita, duplique repetidamente o último número e escreva o resultado abaixo. Pare quando adicionar um resultado na mesma linha onde a coluna da esquerda mostre <code>1</code></li>
  <li>Examinar a tabela produzida e descarte qualquer linha onde o valor na coluna da esquerda seja par</li>
  <li>Soma os valores na coluna da direita que permanecem para produzir o resultado da multiplicação dos dois números originais juntos</li>
</ol>

**Por exemplo:** `17 × 34`

<pre>17   34
</pre>

Dividindo o valor da primeira coluna pela metade:

<pre>17   34
8
4
2
1
</pre>

Duplicando o valor da segunda coluna:

<pre>17   34
8    68
4   136
2   272
1   544
</pre>

Removendo as linhas em que a primeira célula é par:

<pre>17   34
8    <strike>68</strike>
4   <strike>136</strike>
2   <strike>272</strike>
1   544
</pre>

Somando os números restantes na coluna da direita:

<!-- markdownlint-disable MD003 -->

<pre>17   34
8    --
4   ---
2   ---
1   544
   ====
    578
</pre>

<!-- markdownlint-enable MD003 -->

Temos, então, que `17` multiplicado por `34`, pelo método etíope, é `578`.

# --instructions--

A tarefa é definir três funções/métodos/procedimentos/sub-rotinas nomeadas:

<ol>
  <li>um para dividir pela metade um número inteiro,</li>
  <li>um para dobrar um número inteiro, e</li>
  <li>uma para declarar se um inteiro é par</li>
</ol>

Use essas funções para criar uma função que faça uma multiplicação etíope.

<!-- markdownlint-disable MD046-->

# --hints--

`eth_mult` deve ser uma função.

```js
assert(typeof eth_mult === 'function');
```

`eth_mult(17,34)` deve retornar `578`.

```js
assert.equal(eth_mult(17, 34), 578);
```

`eth_mult(23,46)` deve retornar `1058`.

```js
assert.equal(eth_mult(23, 46), 1058);
```

`eth_mult(12,27)` deve retornar `324`.

```js
assert.equal(eth_mult(12, 27), 324);
```

`eth_mult(56,98)` deve retornar `5488`.

```js
assert.equal(eth_mult(56, 98), 5488);
```

`eth_mult(63,74)` deve retornar `4662`.

```js
assert.equal(eth_mult(63, 74), 4662);
```

# --seed--

## --seed-contents--

```js
function eth_mult(a, b) {

}
```

# --solutions--

```js
function eth_mult(a, b) {
  let sum = 0; a = [a]; b = [b];

  let half = a => a / 2,
    double = a => a * 2,
    is_even = a => a % 2 == 0;

  while (a[0] !== 1) {
    a.unshift(Math.floor(half(a[0])));
    b.unshift(double(b[0]));
  }

  for (let i = a.length - 1; i > 0; i -= 1) {
    if (!is_even(a[i])) {
      sum += b[i];
    }
  }
  return sum + b[0];
}
```
