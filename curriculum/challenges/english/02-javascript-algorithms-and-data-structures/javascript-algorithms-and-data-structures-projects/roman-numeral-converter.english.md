---
id: a7f4d8f2483413a6ce226cac
title: Roman Numeral Converter
challengeType: 5
forumTopicId: 16044
---

## Description
<section id='description'>
Convert the given number into a roman numeral.
All <a href="http://www.mathsisfun.com/roman-numerals.html" target="_blank">roman numerals</a> answers should be provided in upper-case.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>convertToRoman(2)</code> should return "II".
    testString: assert.deepEqual(convertToRoman(2), "II");
  - text: <code>convertToRoman(3)</code> should return "III".
    testString: assert.deepEqual(convertToRoman(3), "III");
  - text: <code>convertToRoman(4)</code> should return "IV".
    testString: assert.deepEqual(convertToRoman(4), "IV");
  - text: <code>convertToRoman(5)</code> should return "V".
    testString: assert.deepEqual(convertToRoman(5), "V");
  - text: <code>convertToRoman(9)</code> should return "IX".
    testString: assert.deepEqual(convertToRoman(9), "IX");
  - text: <code>convertToRoman(12)</code> should return "XII".
    testString: assert.deepEqual(convertToRoman(12), "XII");
  - text: <code>convertToRoman(16)</code> should return "XVI".
    testString: assert.deepEqual(convertToRoman(16), "XVI");
  - text: <code>convertToRoman(29)</code> should return "XXIX".
    testString: assert.deepEqual(convertToRoman(29), "XXIX");
  - text: <code>convertToRoman(44)</code> should return "XLIV".
    testString: assert.deepEqual(convertToRoman(44), "XLIV");
  - text: <code>convertToRoman(45)</code> should return "XLV"
    testString: assert.deepEqual(convertToRoman(45), "XLV");
  - text: <code>convertToRoman(68)</code> should return "LXVIII"
    testString: assert.deepEqual(convertToRoman(68), "LXVIII");
  - text: <code>convertToRoman(83)</code> should return "LXXXIII"
    testString: assert.deepEqual(convertToRoman(83), "LXXXIII");
  - text: <code>convertToRoman(97)</code> should return "XCVII"
    testString: assert.deepEqual(convertToRoman(97), "XCVII");
  - text: <code>convertToRoman(99)</code> should return "XCIX"
    testString: assert.deepEqual(convertToRoman(99), "XCIX");
  - text: <code>convertToRoman(400)</code> should return "CD"
    testString: assert.deepEqual(convertToRoman(400), "CD");
  - text: <code>convertToRoman(500)</code> should return "D"
    testString: assert.deepEqual(convertToRoman(500), "D");
  - text: <code>convertToRoman(501)</code> should return "DI"
    testString: assert.deepEqual(convertToRoman(501), "DI");
  - text: <code>convertToRoman(649)</code> should return "DCXLIX"
    testString: assert.deepEqual(convertToRoman(649), "DCXLIX");
  - text: <code>convertToRoman(798)</code> should return "DCCXCVIII"
    testString: assert.deepEqual(convertToRoman(798), "DCCXCVIII");
  - text: <code>convertToRoman(891)</code> should return "DCCCXCI"
    testString: assert.deepEqual(convertToRoman(891), "DCCCXCI");
  - text: <code>convertToRoman(1000)</code> should return "M"
    testString: assert.deepEqual(convertToRoman(1000), "M");
  - text: <code>convertToRoman(1004)</code> should return "MIV"
    testString: assert.deepEqual(convertToRoman(1004), "MIV");
  - text: <code>convertToRoman(1006)</code> should return "MVI"
    testString: assert.deepEqual(convertToRoman(1006), "MVI");
  - text: <code>convertToRoman(1023)</code> should return "MXXIII"
    testString: assert.deepEqual(convertToRoman(1023), "MXXIII");
  - text: <code>convertToRoman(2014)</code> should return "MMXIV"
    testString: assert.deepEqual(convertToRoman(2014), "MMXIV");
  - text: <code>convertToRoman(3999)</code> should return "MMMCMXCIX"
    testString: assert.deepEqual(convertToRoman(3999), "MMMCMXCIX");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function convertToRoman(num) {
 return num;
}

convertToRoman(36);
```

</div>



</section>

## Solution
<section id='solution'>


```js
function convertToRoman(num) {
  var ref = [['M', 1000], ['CM', 900], ['D', 500], ['CD', 400], ['C', 100], ['XC', 90], ['L', 50], ['XL', 40], ['X', 10], ['IX', 9], ['V', 5], ['IV', 4], ['I', 1]];
  var res = [];
  ref.forEach(function(p) {
    while (num >= p[1]) {
      res.push(p[0]);
      num -= p[1];
    }
  });
  return res.join('');
}
```

</section>
