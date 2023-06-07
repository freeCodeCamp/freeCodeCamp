---
id: 5900f4e51000cf542c50fff6
title: 'Problema 374: Produto da partição inteira máxima'
challengeType: 1
forumTopicId: 302036
dashedName: problem-374-maximum-integer-partition-product
---

# --description--

Uma partição inteira de um número $n$ é uma maneira de escrever $n$ como uma soma dos números inteiros positivos.

Partições que diferem apenas da ordem de seus somandos são consideradas iguais. Uma partição de $n$ em partes distintas é uma partição de $n$ na qual cada parte ocorre no máximo uma vez.

As partições de 5 em partes distintas são:

5, 4 + 1 e 3 + 2.

Considere $f(n)$ como o produto máximo das partes de qualquer partição de $n$ em partes distintas e $m(n)$ o número de elementos de qualquer partição $n$ com esse produto.

Assim, $f(5) = 6$ e $m(5) = 2$.

Para $n = 10$, a partição com o maior produto é $10 = 2 + 3 + 5$, o que dá $f(10) = 30$ e $m(10) = 3$. E seu produto, $f(10) \times m(10) = 30 \times 3 = 90$

Pode-se verificar que $\sum f(n) \times m(n)$ para $1 ≤ n ≤ 100 = 1.683.550.844.462$.

Encontre a $\sum f(n) \times m(n)$ para $1 ≤ n ≤ {10}^{14}$. Dê sua resposta modulo $982.451.653$, o quinquagésimo milionésimo número primo.

# --hints--

`maximumIntegerPartitionProduct()` deve retornar `334420941`.

```js
assert.strictEqual(maximumIntegerPartitionProduct(), 334420941);
```

# --seed--

## --seed-contents--

```js
function maximumIntegerPartitionProduct() {

  return true;
}

maximumIntegerPartitionProduct();
```

# --solutions--

```js
// solution required
```
