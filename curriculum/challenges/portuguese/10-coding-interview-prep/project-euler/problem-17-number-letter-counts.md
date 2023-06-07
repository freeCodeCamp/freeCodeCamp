---
id: 5900f37d1000cf542c50fe90
title: 'Problema 17: Contador de letras'
challengeType: 1
forumTopicId: 301804
dashedName: problem-17-number-letter-counts
---

# --description--

Considere os números de 1 a 5 escritos em palavras: um, dois, três, quatro, cinco. Se você somar a quantidade de letras, terá 2 + 4 + 4 + 6 + 5 = 21.

Se todos os números entre 1 e o parâmetro `limit` (inclusivo) fossem escritos em palavras, quantas letras existiriam?

**Observação:** não conte espaços ou hífens. Por exemplo, 342 (trezentos e quarenta e dois) contém 23 letras e 115 (cento e quinze) contém 12 letras. O uso de "e" ao escrever números está em conformidade com a utilização britânica. Lembre-se que o teste considera apenas números escritos em Inglês.

# --hints--

`numberLetterCounts(5)` deve retornar um número.

```js
assert(typeof numberLetterCounts(5) === 'number');
```

`numberLetterCounts(5)` deve retornar 19.

```js
assert.strictEqual(numberLetterCounts(5), 19);
```

`numberLetterCounts(150)` deve retornar 1903.

```js
assert.strictEqual(numberLetterCounts(150), 1903);
```

`numberLetterCounts(1000)` deve retornar 21124.

```js
assert.strictEqual(numberLetterCounts(1000), 21124);
```

# --seed--

## --seed-contents--

```js
function numberLetterCounts(limit) {

  return true;
}

numberLetterCounts(5);
```

# --solutions--

```js
function numberLetterCounts(limit) {
  const dictionary = {
    0: '',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    1000: 'onethousand'
  };

  let numString = '';

  function convertToString(num) {
    // check dictionary for number
    if (dictionary[num]) {
      return dictionary[num];
    } else {
      const hundreds = Math.floor(num / 100);
      const tens =  Math.floor((num / 10) % 10) * 10;
      const remainder = num % 10;

      let tempStr = '';

      if (hundreds === 0) {
        tempStr += dictionary[tens] + dictionary[remainder];
      } else {
        tempStr += dictionary[hundreds] + 'hundred';

        if (tens !== 0 || remainder !== 0) {
          tempStr += 'and';
        }

        if (tens < 20) {
          const lessThanTwenty = tens + remainder;
          tempStr += dictionary[lessThanTwenty];
        } else {
          tempStr += dictionary[tens] + dictionary[remainder];
        }
      }
      return tempStr;
    }
  }

  for (let i = 1; i <= limit; i++) {
    numString += convertToString(i);
  }
  return numString.length;
}
```
