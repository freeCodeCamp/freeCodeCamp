---
id: 5949b579404977fbaefcd736
title: 9 bilhões de nomes de Deus, o inteiro
challengeType: 1
forumTopicId: 302219
dashedName: 9-billion-names-of-god-the-integer
---

# --description--

Esta tarefa é uma variação de um conto de Arthur C. Clarke.

(Quem chegar à solução deve estar ciente das consequências de concluir esta tarefa.)

Em detalhes, para especificar o que significa um "nome":

<ul>
  <li>O inteiro 1 tem 1 nome: "1".</li>
  <li>O inteiro 2 tem 2 nomes: "1+1" e "2".</li>
  <li>O inteiro 3 tem 3 nomes: "1+1+1", "2+1" e "3".</li>
  <li>O inteiro 4 tem 5 nomes: "1+1+1+1", "2+1+1", "2+2", "3+1", "4".</li>
  <li>O inteiro 5 tem 7 nomes: "1+1+1+1+1", "2+1+1+1", "2+2+1", "3+1+1", "3+2", "4+1", "5".</li>
</ul>

Isto pode ser visualizado do seguinte modo:

<pre>          1
        1   1
      1   1   1
    1   2   1   1
  1   2   2   1   1
1   3   3   2   1   1
</pre>

Onde a linha $n$ corresponde ao inteiro $n$ e cada coluna $C$ na linha $m$ da esquerda para a direita corresponde ao número de nomes que começam com $C$.

Como opção, note que a soma da $n$-ésima linha $P(n)$ é a função de partição de inteiros.

# --instructions--

Implemente uma função que retorna a soma da $n$-ésima linha.

# --hints--

`numberOfNames` deve ser uma função.

```js
assert(typeof numberOfNames === 'function');
```

`numberOfNames(5)` deve ser igual a 7.

```js
assert.equal(numberOfNames(5), 7);
```

`numberOfNames(12)` deve ser igual a 77.

```js
assert.equal(numberOfNames(12), 77);
```

`numberOfNames(18)` deve ser igual a 385.

```js
assert.equal(numberOfNames(18), 385);
```

`numberOfNames(23)` deve ser igual a 1255.

```js
assert.equal(numberOfNames(23), 1255);
```

`numberOfNames(42)` deve ser igual a 53174.

```js
assert.equal(numberOfNames(42), 53174);
```

`numberOfNames(123)` deve ser igual a 2552338241.

```js
assert.equal(numberOfNames(123), 2552338241);
```

# --seed--

## --seed-contents--

```js
function numberOfNames(num) {

  return true;
}
```

# --solutions--

```js
function numberOfNames(num) {
  const cache = [
    [1]
  ];
  for (let l = cache.length; l < num + 1; l++) {
    let Aa;
    let Mi;
    const r = [0];
    for (let x = 1; x < l + 1; x++) {
      r.push(r[r.length - 1] + (Aa = cache[l - x < 0 ? cache.length - (l - x) : l - x])[(Mi = Math.min(x, l - x)) < 0 ? Aa.length - Mi : Mi]);
    }
    cache.push(r);
  }
  return cache[num][cache[num].length - 1];
}
```
