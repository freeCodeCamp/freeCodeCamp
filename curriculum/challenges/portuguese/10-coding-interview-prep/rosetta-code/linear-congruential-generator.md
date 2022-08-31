---
id: 5e4ce2f5ac708cc68c1df261
title: Gerador congruente linear
challengeType: 1
forumTopicId: 385266
dashedName: linear-congruential-generator
---

# --description--

Um gerador linear de congruência (LCG) é um <em>algoritmo</em> que gera uma sequência de números pseudoaleatórios calculados com uma equação linear descontínua. Todos os geradores congruentes lineares usam esta fórmula:

$$r_{n + 1} = (a \times r_n + c) \bmod m$$

Onde:

<ul>
<li>$ r_0 $ é uma seed.</li>
<li>$r_1$, $r_2$, $r_3$, ..., são os números aleatórios.</li>
<li>$a$, $c$, $m$ são constantes.</li>
</ul>

Se a escolha de $a$, $c$ e $m$ for feita com cuidado, o gerador produzirá uma distribuição uniforme de números inteiros de $0$ a $m - 1$.

Os números da <abbr title="linear congruential generator">LCG</abbr> são de baixa qualidade. $r_n$ e $r\_{n + 1}$ não são independentes como os números verdadeiramente aleatórios seriam. Alguém que conheça $r_n$ pode prever $r\_{n + 1}$, portanto <abbr title="linear congruential generator">LCG</abbr> não é criptograficamente segura. O <abbr title="linear congruential generator">LCG</abbr> ainda é bom o suficiente para tarefas simples como teste de Miller-Rabin de primalidade ou mãos do FreeCell. Entre os benefícios do <abbr title="linear congruential generator">LCG</abbr>, pode-se facilmente reproduzir uma sequência de números, a partir do mesmo $r_0$. Também é possível reproduzir essa sequência com uma linguagem de programação diferente, porque a fórmula é muito simples.

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
