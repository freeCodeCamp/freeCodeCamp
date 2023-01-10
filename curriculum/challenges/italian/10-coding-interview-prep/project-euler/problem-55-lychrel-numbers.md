---
id: 5900f3a31000cf542c50feb6
title: 'Problema 55: numeri di Lychrel'
challengeType: 1
forumTopicId: 302166
dashedName: problem-55-lychrel-numbers
---

# --description--

Se prendiamo 47, e gli sommiamo lo speculare, 47 + 74 = 121, che è palindromo.

Non tutti i numeri producono palindromi così rapidamente. Ad esempio,

<div style="margin-left: 4em;">
  349 + 943 = 1292,<br>
  1292 + 2921 = 4213<br>
  4213 + 3124 = 7337<br>
</div>

Cioè 349 richiede tre iterazioni per arrivare a un palindromo.

Anche se nessuno lo ha ancora dimostrato, si pensa che alcuni numeri, come il 196, non producano mai un palindromo. Un numero che non forma mai un palindromo attraverso un processo di inversione e addizione è chiamato numero di Lychrel. Data la teoretica natura di questi numeri, e per il proposito di questo problema, assumiamo che un numero è un numeri di Lychrel fino a prova contraria. In aggiunta ti è dato che per ogni numero al di sotto di diecimila, questo (i) diventerà un palindromo in meno di cinquanta iterazioni, oppure, (ii), nessuno, con tutto il potere computazionale che esiste, è riuscito fin ora a mapparlo ad un palindromo. Infatti, 10677 è il primo numero trovato per cui sono necessarie più di cinquanta iterazioni prima di produrre un palindromo: 4668731596684224866951378664 (53 iterazioni, 28-cifre).

Sorprendentemente, ci sono numeri palindromi che sono a loro volta numeri di Lychrel; il primo esempio è 4994.

Quanti numeri di Lychrel ci sono sotto `num`?

**Nota:** La descrizione è stata modificata leggermente il giorno 24 Aprile 2007 per enfatizzare la natura teoretica dei numeri di Lychrel.

# --hints--

`countLychrelNumbers(1000)` dovrebbe restituire un numero.

```js
assert(typeof countLychrelNumbers(1000) === 'number');
```

`countLychrelNumbers(1000)` dovrebbe restituire 13.

```js
assert.strictEqual(countLychrelNumbers(1000), 13);
```

`countLychrelNumbers(3243)` dovrebbe restituire 39.

```js
assert.strictEqual(countLychrelNumbers(3243), 39);
```

`countLychrelNumbers(5000)` dovrebbe restituire 76.

```js
assert.strictEqual(countLychrelNumbers(5000), 76);
```

`countLychrelNumbers(7654)` dovrebbe restituire 140.

```js
assert.strictEqual(countLychrelNumbers(7654), 140);
```

`countLychrelNumbers(10000)` dovrebbe restituire 249.

```js
assert.strictEqual(countLychrelNumbers(10000), 249);
```

# --seed--

## --seed-contents--

```js
function countLychrelNumbers(num) {

  return true;
}

countLychrelNumbers(10000);
```

# --solutions--

```js
const countLychrelNumbers = (size) => {
  const numReverse = (num) => {
    return Number(num.toString().split('').reverse().join(''));
  };
  const isPalin = (num) => {
    if (numReverse(num) === num) {
      return true;
    }
    return false;
  };
  let total = 0;
  for (let i = 1; i < size; i++) {
    let loopCount = 1;
    let sum = i;
    while (loopCount < 50) {
      sum = sum + numReverse(sum);
      if (isPalin(sum)) {
        break;
      } else {
        loopCount++;
      }
    }
    if (loopCount === 50) {
      total++;
    }
  }
  return total;
}
```
