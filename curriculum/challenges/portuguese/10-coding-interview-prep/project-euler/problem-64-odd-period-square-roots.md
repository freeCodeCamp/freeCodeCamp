---
id: 5900f3ac1000cf542c50febf
title: 'Problema 64: Repetições ímpar da raiz quadrada'
challengeType: 1
forumTopicId: 302176
dashedName: problem-64-odd-period-square-roots
---

# --description--

Todas as raízes quadradas são periódicas quando escritas como frações contínuas e podem ser escritas na forma:

$\\displaystyle \\quad \\quad \\sqrt{N}=a_0+\\frac 1 {a_1+\\frac 1 {a_2+ \\frac 1 {a3+ \\dots}}}$

Por exemplo, consideremos $\\sqrt{23}$:

$\\quad \\quad \\sqrt{23}=4+\\sqrt{23}-4=4+\\frac 1 {\\frac 1 {\\sqrt{23}-4}}=4+\\frac 1 {1+\\frac{\\sqrt{23}-3}7}$

Se continuarmos, teremos a seguinte expansão:

$\\displaystyle \\quad \\quad \\sqrt{23}=4+\\frac 1 {1+\\frac 1 {3+ \\frac 1 {1+\\frac 1 {8+ \\dots}}}}$

O processo pode ser resumido da seguinte forma:

$\\quad \\quad a_0=4, \\frac 1 {\\sqrt{23}-4}=\\frac {\\sqrt{23}+4} 7=1+\\frac {\\sqrt{23}-3} 7$

$\\quad \\quad a_1=1, \\frac 7 {\\sqrt{23}-3}=\\frac {7(\\sqrt{23}+3)} {14}=3+\\frac {\\sqrt{23}-3} 2$

$\\quad \\quad a_2=3, \\frac 2 {\\sqrt{23}-3}=\\frac {2(\\sqrt{23}+3)} {14}=1+\\frac {\\sqrt{23}-4} 7$

$\\quad \\quad a_3=1, \\frac 7 {\\sqrt{23}-4}=\\frac {7(\\sqrt{23}+4)} 7=8+\\sqrt{23}-4$

$\\quad \\quad a_4=8, \\frac 1 {\\sqrt{23}-4}=\\frac {\\sqrt{23}+4} 7=1+\\frac {\\sqrt{23}-3} 7$

$\\quad \\quad a_5=1, \\frac 7 {\\sqrt{23}-3}=\\frac {7 (\\sqrt{23}+3)} {14}=3+\\frac {\\sqrt{23}-3} 2$

$\\quad \\quad a_6=3, \\frac 2 {\\sqrt{23}-3}=\\frac {2(\\sqrt{23}+3)} {14}=1+\\frac {\\sqrt{23}-4} 7$

$\\quad \\quad a_7=1, \\frac 7 {\\sqrt{23}-4}=\\frac {7(\\sqrt{23}+4)} {7}=8+\\sqrt{23}-4$

Podemos ver que a sequência está se repetindo. Para sermos concisos, podemos usar a notação $\\sqrt{23}=\[4;(1,3,1,8)]$ para indicar que o bloco (1, 3, 1, 8) se repete indefinidamente.

As primeiras dez representações de raízes (irracionais) contínuas são:

$\\quad \\quad \\sqrt{2}=\[1;(2)]$, repetições = 1

$\\quad \\quad \\sqrt{3}=\[1;(1,2)]$, repetições = 2

$\\quad \\quad \\sqrt{5}=\[2;(4)]$, repetições = 1

$\\quad \\quad \\sqrt{6}=\[2;(2,4)]$, repetições = 2

$\\quad \\quad \\sqrt{7}=\[2;(1,1,1,4)]$, repetições = 4

$\\quad \\quad \\sqrt{8}=\[2;(1,4)]$, repetições = 2

$\\quad \\quad \\sqrt{10}=\[3;(6)]$, repetições = 1

$\\quad \\quad \\sqrt{11}=\[3;(3,6)]$, repetições = 2

$\\quad \\quad \\sqrt{12}=\[3;(2,6)]$, repetições = 2

$\\quad \\quad \\sqrt{13}=\[3;(1,1,1,1,6)]$, repetições = 5

Exatamente quatro frações contínuas, onde $N \\le 13$, têm um total de repetições ímpar.

Quantas frações contínuas onde $N \\le n$ têm repetições ímpar?

# --hints--

`oddPeriodSqrts(13)` deve retornar um número.

```js
assert(typeof oddPeriodSqrts(13) === 'number');
```

`oddPeriodSqrts(500)` deve retornar `83`.

```js
assert.strictEqual(oddPeriodSqrts(500), 83);
```

`oddPeriodSqrts(1000)` deve retornar `152`.

```js
assert.strictEqual(oddPeriodSqrts(1000), 152);
```

`oddPeriodSqrts(5000)` deve retornar `690`.

```js
assert.strictEqual(oddPeriodSqrts(5000), 690);
```

`oddPeriodSqrts(10000)` deve retornar `1322`.

```js
assert.strictEqual(oddPeriodSqrts(10000), 1322);
```

# --seed--

## --seed-contents--

```js
function oddPeriodSqrts(n) {

  return true;
}

oddPeriodSqrts(13);
```

# --solutions--

```js
function oddPeriodSqrts(n) {
  // Based on https://www.mathblog.dk/project-euler-continued-fractions-odd-period/
  function getPeriod(num) {
    let period = 0;
    let m = 0;
    let d = 1;
    let a = Math.floor(Math.sqrt(num));
    const a0 = a;
    while (2 * a0 !== a) {
      m = d * a - m;
      d = Math.floor((num - m ** 2) / d);
      a = Math.floor((Math.sqrt(num) + m) / d);
      period++;
    }
    return period;
  }

  function isPerfectSquare(num) {
    return Number.isInteger(Math.sqrt(num));
  }

  let counter = 0;
  for (let i = 2; i <= n; i++) {
    if (!isPerfectSquare(i)) {
      if (getPeriod(i) % 2 !== 0) {
        counter++;
      }
    }
  }
  return counter;
}
```
