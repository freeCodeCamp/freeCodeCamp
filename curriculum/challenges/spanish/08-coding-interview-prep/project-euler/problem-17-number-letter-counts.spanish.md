---
id: 5
localeTitle: 5900f37d1000cf542c50fe90
challengeType: 5
title: 'Problem 17: Number letter counts'
---

## Description
<section id='description'> 
Si los números del 1 al 5 están escritos en palabras: uno, dos, tres, cuatro, cinco, entonces hay 3 + 3 + 5 + 4 + 4 = 19 letras usadas en total. 
Si todos los números desde 1 hasta el <code>limit</code> especificado se escribieran en palabras, ¿cuántas letras se usarían? 
<b>NOTA:</b> No cuente espacios o guiones. Por ejemplo, 342 (trescientos cuarenta y dos) contiene 23 letras y 115 (ciento quince) contiene 20 letras. El uso de &quot;y&quot; al escribir números cumple con el uso británico. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>numberLetterCounts(5)</code> debe devolver 19.
    testString: 'assert.strictEqual(numberLetterCounts(5), 19, "<code>numberLetterCounts(5)</code> should return 19.");'
  - text: <code>numberLetterCounts(150)</code> debe devolver 1903.
    testString: 'assert.strictEqual(numberLetterCounts(150), 1903, "<code>numberLetterCounts(150)</code> should return 1903.");'
  - text: <code>numberLetterCounts(1000)</code> debe devolver 21124.
    testString: 'assert.strictEqual(numberLetterCounts(1000), 21124, "<code>numberLetterCounts(1000)</code> should return 21124.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function numberLetterCounts(limit) {
  // Good luck!
  return true;
}

numberLetterCounts(5);
```

</div>



</section>

## Solution
<section id='solution'>


```js
function numberLetterCounts(limit) {
  const dictionary = {
    0: ",
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

  let numString = ";

  function convertToString(num) {
    // check dictionary for number
    if (dictionary[num]) {
      return dictionary[num];
    } else {
      const hundreds = Math.floor(num / 100);
      const tens =  Math.floor((num / 10) % 10) * 10;
      const remainder = num % 10;

      let tempStr = ";

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
      // console.log(num, hundreds, tens, remainder);
      return tempStr;
    }
  }

  for (let i = 1; i <= limit; i++) {
    numString += convertToString(i);
  }
  return numString.length;
}
```

</section>
