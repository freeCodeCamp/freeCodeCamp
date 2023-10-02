---
id: 5900f3831000cf542c50fe96
title: 'Problema 23: Somme non abbondanti'
challengeType: 1
forumTopicId: 301873
dashedName: problem-23-non-abundant-sums
---

# --description--

Un numero perfetto è un numerp per cui la somma dei suoi divisori propri è uguale al numero stesso. Per esempio, la somma dei divisori propri di 28 sarebbe 1 + 2 + 4 + 7 + 14 = 28, il che significa che 28 è un numero perfetto.

Un numero `n` è chiamato deficiente se la somma dei suoi divisori è minore di `n` ed è chiamato abbondante se la somma eccede `n`.

Visto che 12 è il numero abbondante più piccolo, 1 + 2 + 3 + 4 + 6 = 16, il numero più piccolo che può essere scritto come somma di due numeri abbondanti è 24. Tramite l'analisi matematica, si può mostrare che tutti gli interi più grandi di 28123 possono essere scritti come somma di due numeri abbondanti. Eppure, questo limite superiore non può essere ridotto ulteriormente tramite analisi, anche se è noto che il numero più grande che non può essere espresso come somma di due numeri abbondanti è più piccolo di questo limite.

Trova la somma di tutti i numeri interi positivi &lt;= `n` che non possono essere scritti come somma di due numeri abbondanti.

# --hints--

`sumOfNonAbundantNumbers(10000)` dovrebbe restituire un numero.

```js
assert(typeof sumOfNonAbundantNumbers(10000) === 'number');
```

`sumOfNonAbundantNumbers(10000)` dovrebbe restituire 3731004.

```js
assert(sumOfNonAbundantNumbers(10000) === 3731004);
```

`sumOfNonAbundantNumbers(15000)` dovrebbe restituire 4039939.

```js
assert(sumOfNonAbundantNumbers(15000) === 4039939);
```

`sumOfNonAbundantNumbers(20000)` dovrebbe restituire 4159710.

```js
assert(sumOfNonAbundantNumbers(20000) === 4159710);
```

`sumOfNonAbundantNumbers(28123)` dovrebbe restituire 4179871.

```js
assert(sumOfNonAbundantNumbers(28123) === 4179871);
```

# --seed--

## --seed-contents--

```js
function sumOfNonAbundantNumbers(n) {

  return n;
}

sumOfNonAbundantNumbers(28123);
```

# --solutions--

```js
function abundantCheck(number) {
  let sum = 1;

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if(number % i === 0) {
      sum += i + +(i !== Math.sqrt(number) && number / i);
    }
  }
  return sum > number;
}

function sumOfNonAbundantNumbers(n) {
  let sum = 0;
  const memo = {};
  let abundantList = [];

  // Function checkSum checks if num can be represented as a sum of numbers in the stack (array)
  const checkSum = (num, stack, memo) => {
    for (let i = 0; i < stack.length; i += 1) {
      if ((num - stack[i]) in memo) return true;
    }
    return false;
  };

  for (let i = 1; i <= n; i += 1) {
    if (abundantCheck(i)) {
      abundantList.push(i);
      memo[i] = 1;
    }
    if (checkSum(i, abundantList, memo)) continue;
    sum += i;
  }
  return sum;
}
```
