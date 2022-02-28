---
id: 5e4ce2f5ac708cc68c1df261
title: Generatore lineare congruenziale
challengeType: 5
forumTopicId: 385266
dashedName: linear-congruential-generator
---

# --description--

Il generatore [lineare congruenziale](https://en.wikipedia.org/wiki/linear congruential generator) è un esempio molto semplice di un [generatore di numeri casuali](http://rosettacode.org/wiki/random number generator). Tutti i generatori congruenziali lineari utilizzano questa formula:

$$r_{n + 1} = (a \times r_n + c) \bmod m$$

Dove:

<ul>
<li>$ r_0 $ è un seme.</li>
<li>$r_1$, $r_2$, $r_3$, ..., sono i numeri casuali.</li>
<li>$a$, $c$, $m$ sono costanti.</li>
</ul>

Se si scelgono i valori di $a$, $c$ e $m$ con cura, il generatore produce una distribuzione uniforme di interi da $0$ a $m - 1$.

I numeri LCG hanno una scarsa qualità. $r_n$ e $r\_{n + 1}$ non sono indipendenti, come i veri numeri casuali. Chiunque sappia $r_n$ può prevedere $r\_{n + 1}$, quindi LCG non è crittograficamente sicuro. L'LCG è ancora abbastanza buono per semplici attività come [test di primalità Miller-Rabin](http://rosettacode.org/wiki/Miller-Rabin primality test), o [mani di FreeCell](http://rosettacode.org/wiki/deal cards for FreeCell). Uno dei benefici del GCL è che si può facilmente riprodurre una sequenza di numeri dallo stesso $r_0$. Si può anche riprodurre tale sequenza con un linguaggio di programmazione diverso, perché la formula è molto semplice.

# --instructions--

Scrivi una funzione che richiede $r_0,a,c,m,n$ come parametri e restituisce $r_n$.

# --hints--

`linearCongGenerator` dovrebbe essere una funzione.

```js
assert(typeof linearCongGenerator == 'function');
```

`linearCongGenerator(324, 1145, 177, 2148, 3)` dovrebbe restituire un numero.

```js
assert(typeof linearCongGenerator(324, 1145, 177, 2148, 3) == 'number');
```

`linearCongGenerator(324, 1145, 177, 2148, 3)` dovrebbe restituire `855`.

```js
assert.equal(linearCongGenerator(324, 1145, 177, 2148, 3), 855);
```

`linearCongGenerator(234, 11245, 145, 83648, 4)` dovrebbe tornare `1110`.

```js
assert.equal(linearCongGenerator(234, 11245, 145, 83648, 4), 1110);
```

`linearCongGenerator(85, 11, 1234, 214748, 5)` dovrebbe tornare `62217`.

```js
assert.equal(linearCongGenerator(85, 11, 1234, 214748, 5), 62217);
```

`linearCongGenerator(0, 1103515245, 12345, 2147483648, 1)` dovrebbe restituire `12345`.

```js
assert.equal(linearCongGenerator(0, 1103515245, 12345, 2147483648, 1), 12345);
```

`linearCongGenerator(0, 1103515245, 12345, 2147483648, 2)` dovrebbe restituire `1406932606`.

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
