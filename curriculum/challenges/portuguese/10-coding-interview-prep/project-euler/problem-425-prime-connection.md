---
id: 5900f5151000cf542c510028
title: 'Problema 425: Conexão de números primos'
challengeType: 1
forumTopicId: 302095
dashedName: problem-425-prime-connection
---

# --description--

Dois números positivos $A$ e $B$ devem ser conectados (denotado por "$A ↔ B$") se uma destas condições se mantiver:

1. $A$ e $B$ têm o mesmo comprimento e diferem em exatamente um algarismo; por exemplo, $123 ↔ 173$.
2. Adicionar um algarismo à esquerda de $A$ (ou $B$) gera $B$ (ou $A$); por exemplo, $23 ↔ 223$ e $123 ↔ 23$.

Chamamos um número primo $P$ um parente de 2 se existir uma cadeia de primos conectados entre 2 e $P$ e se nenhum primo na cadeia exceder $P$.

Por exemplo, 127 é um parente de 2. Uma das cadeias possíveis é mostrada abaixo:

$$2 ↔ 3 ↔ 13 ↔ 113 ↔ 103 ↔ 107 ↔ 127$$

No entanto, 11 e 103 não são parentes de 2.

Considere $F(N)$ como a soma dos primos $≤ N$ que não são parentes de 2. Pode-se verificar que $F({10}^3) = 431$ e que $F({10}^4) = 78.728.$.

Encontre $F({10}^7)$.

# --hints--

`primeConnection()` deve retornar `46479497324`.

```js
assert.strictEqual(primeConnection(), 46479497324);
```

# --seed--

## --seed-contents--

```js
function primeConnection() {

  return true;
}

primeConnection();
```

# --solutions--

```js
// solution required
```
