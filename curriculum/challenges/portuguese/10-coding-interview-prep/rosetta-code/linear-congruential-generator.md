---
id: 5e4ce2f5ac708cc68c1df261
title: Gerador congruente linear
challengeType: 5
forumTopicId: 385266
dashedName: linear-congruential-generator
---

# --description--

O [gerador congruente linear](https://en.wikipedia.org/wiki/linear congruential generator) é um exemplo muito simples de um [gerador de números aleatórios](http://rosettacode.org/wiki/random number generator). Todos os geradores congruentes lineares usam esta fórmula:

$$r_{n + 1} = (a \times r_n + c) \bmod m$$

Onde:

<ul>
<li>$ r_0 $ é uma seed.</li>
<li>$r_1$, $r_2$, $r_3$, ..., são os números aleatórios.</li>
<li>$a$, $c$, $m$ são constantes.</li>
</ul>

Se a escolha de $a$, $c$ e $m$ for feita com cuidado, o gerador produzirá uma distribuição uniforme de números inteiros de $0$ a $m - 1$.

Os números LCG são de má qualidade. $r_n$ e $r\_{n + 1}$ não são independentes como os números verdadeiramente aleatórios seriam. Qualquer um que conheça $r_n$ pode prever $r\_{n + 1}$. Assim, o LCG não é criptograficamente seguro. O LCG, ainda assim, é bom o suficiente para tarefas simples como [o teste de primalidade de Miller-Rabin ](http://rosettacode.org/wiki/Miller-Rabin primality test) ou [dar as cartas no FreeCell](http://rosettacode.org/wiki/deal cards for FreeCell). Entre os benefícios do LCG, pode-se facilmente reproduzir uma sequência de números, a partir da mesma $r_0$. Também é possível reproduzir essa sequência com uma linguagem de programação diferente, porque a fórmula é muito simples.

# --instructions--

Escreva uma função que receba $r_0,a,c,m,n$ como parâmetros e retorne $r_n$.

# --hints--

`linearCongGenerator` deve ser uma função.

```js
assert(typeof linearCongGenerator == 'function');
```

`linearCongGenerator(324, 1145, 177, 2148, 3)` deve retornar um número.

```js
assert(typeof linearCongGenerator(324, 1145, 177, 2148, 3) == 'number');
```

`linearCongGenerator(324, 1145, 177, 2148, 3)` deve retornar `855`.

```js
assert.equal(linearCongGenerator(324, 1145, 177, 2148, 3), 855);
```

`linearCongGenerator(234, 11245, 145, 83648, 4)` deve retornar `1110`.

```js
assert.equal(linearCongGenerator(234, 11245, 145, 83648, 4), 1110);
```

`linearCongGenerator(85, 11, 1234, 214748, 5)` deve retornar `62217`.

```js
assert.equal(linearCongGenerator(85, 11, 1234, 214748, 5), 62217);
```

`linearCongGenerator(0, 1103515245, 12345, 2147483648, 1)` deve retornar `12345`.

```js
assert.equal(linearCongGenerator(0, 1103515245, 12345, 2147483648, 1), 12345);
```

`linearCongGenerator(0, 1103515245, 12345, 2147483648, 2)` deve retornar `1406932606`.

```js
assert.equal(
  linearCongGenerator(0, 1103515245, 12345, 2147483648, 2),
  1406932606
);
```

# --seed--

## --seed-contents--

```js
function linearCongGenerator(r0, a, c, m, n) {

}
```

# --solutions--

```js
function linearCongGenerator(r0, a, c, m, n) {
    for (let i = 0; i < n; i++) {
        r0 = (a * r0 + c) % m;
    }
    return r0;
}
```
