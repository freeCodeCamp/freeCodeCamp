---
id: 5900f3a31000cf542c50feb6
title: 'Problema 55: Números de Lychrel'
challengeType: 1
forumTopicId: 302166
dashedName: problem-55-lychrel-numbers
---

# --description--

Se pegarmos o número 47, invertemos e somarmos, 47 + 74 = 121, temos um número palíndromo.

Nem todos os números, no entanto, produzem palíndromos tão facilmente. Por exemplo:

<div style="margin-left: 4em;">
  349 + 943 = 1292,<br>
  1292 + 2921 = 4213<br>
  4213 + 3124 = 7337<br>
</div>

Ou seja, 349 precisou de três iterações para chegar a um palíndromo.

Embora ninguém tenha provado ainda, pensa-se que alguns números, como 196, nunca produzem um palíndromo. Um número que nunca produz um palíndromo através do processo de inversão e adição é conhecido como um número de Lychrel. Devido à natureza teórica destes números e para fins de aprendizado, partiremos do princípio de que todo número é um número de Lychrel até que se prove o contrário. Além disso, você irá assumir que para cada número abaixo de dez mil, ou (i) ele se torna um palíndromo em menos de cinquenta iterações, ou, (ii) ninguém, com todo o poder de computação que existe, conseguiu mapeá-lo para um palíndromo. Na verdade, 10677 é o primeiro número que exige mais de cinquenta iterações antes de produzir um palíndromo: 4668731596684224866951378664 (53 iterações, gerando um número com 28 algarismos).

Surpreendentemente, há números palíndromos que são, ao mesmo tempo, um número de Lychrel. O primeiro exemplo é o 4994.

Quantos números de Lychrel existem abaixo de `num`?

**Observação:** o texto foi ligeiramente modificado em 24 de abril de 2007 para enfatizar a natureza teórica dos números de Lychrel.

# --hints--

`countLychrelNumbers(1000)` deve retornar um número.

```js
assert(typeof countLychrelNumbers(1000) === 'number');
```

`countLychrelNumbers(1000)` deve retornar 13.

```js
assert.strictEqual(countLychrelNumbers(1000), 13);
```

`countLychrelNumbers(3243)` deve retornar 39.

```js
assert.strictEqual(countLychrelNumbers(3243), 39);
```

`countLychrelNumbers(5000)` deve retornar 76.

```js
assert.strictEqual(countLychrelNumbers(5000), 76);
```

`countLychrelNumbers(7654)` deve retornar 140.

```js
assert.strictEqual(countLychrelNumbers(7654), 140);
```

`countLychrelNumbers(10000)` deve retornar 249.

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
