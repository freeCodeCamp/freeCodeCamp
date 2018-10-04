---
id: a7f4d8f2483413a6ce226cac
title: Roman Numeral Converter
isRequired: true
challengeType: 5
---

## Description
<section id='description'>
Convert the given number into a roman numeral.
All <a href="http://www.mathsisfun.com/roman-numerals.html" target="_blank">roman numerals</a> answers should be provided in upper-case.
Remember to use <a href='http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Read-Search-Ask</a> if you get stuck. Try to pair program. Write your own code.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>convertToRoman(2)</code> should return "II".
    testString: 'assert.deepEqual(convertToRoman(2), "II", ''<code>convertToRoman(2)</code> should return "II".'');'
  - text: <code>convertToRoman(3)</code> should return "III".
    testString: 'assert.deepEqual(convertToRoman(3), "III", ''<code>convertToRoman(3)</code> should return "III".'');'
  - text: <code>convertToRoman(4)</code> should return "IV".
    testString: 'assert.deepEqual(convertToRoman(4), "IV", ''<code>convertToRoman(4)</code> should return "IV".'');'
  - text: <code>convertToRoman(5)</code> should return "V".
    testString: 'assert.deepEqual(convertToRoman(5), "V", ''<code>convertToRoman(5)</code> should return "V".'');'
  - text: <code>convertToRoman(9)</code> should return "IX".
    testString: 'assert.deepEqual(convertToRoman(9), "IX", ''<code>convertToRoman(9)</code> should return "IX".'');'
  - text: <code>convertToRoman(12)</code> should return "XII".
    testString: 'assert.deepEqual(convertToRoman(12), "XII", ''<code>convertToRoman(12)</code> should return "XII".'');'
  - text: <code>convertToRoman(16)</code> should return "XVI".
    testString: 'assert.deepEqual(convertToRoman(16), "XVI", ''<code>convertToRoman(16)</code> should return "XVI".'');'
  - text: <code>convertToRoman(29)</code> should return "XXIX".
    testString: 'assert.deepEqual(convertToRoman(29), "XXIX", ''<code>convertToRoman(29)</code> should return "XXIX".'');'
  - text: <code>convertToRoman(44)</code> should return "XLIV".
    testString: 'assert.deepEqual(convertToRoman(44), "XLIV", ''<code>convertToRoman(44)</code> should return "XLIV".'');'
  - text: <code>convertToRoman(45)</code> should return "XLV"
    testString: 'assert.deepEqual(convertToRoman(45), "XLV", ''<code>convertToRoman(45)</code> should return "XLV"'');'
  - text: <code>convertToRoman(68)</code> should return "LXVIII"
    testString: 'assert.deepEqual(convertToRoman(68), "LXVIII", ''<code>convertToRoman(68)</code> should return "LXVIII"'');'
  - text: <code>convertToRoman(83)</code> should return "LXXXIII"
    testString: 'assert.deepEqual(convertToRoman(83), "LXXXIII", ''<code>convertToRoman(83)</code> should return "LXXXIII"'');'
  - text: <code>convertToRoman(97)</code> should return "XCVII"
    testString: 'assert.deepEqual(convertToRoman(97), "XCVII", ''<code>convertToRoman(97)</code> should return "XCVII"'');'
  - text: <code>convertToRoman(99)</code> should return "XCIX"
    testString: 'assert.deepEqual(convertToRoman(99), "XCIX", ''<code>convertToRoman(99)</code> should return "XCIX"'');'
  - text: <code>convertToRoman(400)</code> should return "CD"
    testString: 'assert.deepEqual(convertToRoman(400), "CD", ''<code>convertToRoman(400)</code> should return "CD"'');'
  - text: <code>convertToRoman(500)</code> should return "D"
    testString: 'assert.deepEqual(convertToRoman(500), "D", ''<code>convertToRoman(500)</code> should return "D"'');'
  - text: <code>convertToRoman(501)</code> should return "DI"
    testString: 'assert.deepEqual(convertToRoman(501), "DI", ''<code>convertToRoman(501)</code> should return "DI"'');'
  - text: <code>convertToRoman(649)</code> should return "DCXLIX"
    testString: 'assert.deepEqual(convertToRoman(649), "DCXLIX", ''<code>convertToRoman(649)</code> should return "DCXLIX"'');'
  - text: <code>convertToRoman(798)</code> should return "DCCXCVIII"
    testString: 'assert.deepEqual(convertToRoman(798), "DCCXCVIII", ''<code>convertToRoman(798)</code> should return "DCCXCVIII"'');'
  - text: <code>convertToRoman(891)</code> should return "DCCCXCI"
    testString: 'assert.deepEqual(convertToRoman(891), "DCCCXCI", ''<code>convertToRoman(891)</code> should return "DCCCXCI"'');'
  - text: <code>convertToRoman(1000)</code> should return "M"
    testString: 'assert.deepEqual(convertToRoman(1000), "M", ''<code>convertToRoman(1000)</code> should return "M"'');'
  - text: <code>convertToRoman(1004)</code> should return "MIV"
    testString: 'assert.deepEqual(convertToRoman(1004), "MIV", ''<code>convertToRoman(1004)</code> should return "MIV"'');'
  - text: <code>convertToRoman(1006)</code> should return "MVI"
    testString: 'assert.deepEqual(convertToRoman(1006), "MVI", ''<code>convertToRoman(1006)</code> should return "MVI"'');'
  - text: <code>convertToRoman(1023)</code> should return "MXXIII"
    testString: 'assert.deepEqual(convertToRoman(1023), "MXXIII", ''<code>convertToRoman(1023)</code> should return "MXXIII"'');'
  - text: <code>convertToRoman(2014)</code> should return "MMXIV"
    testString: 'assert.deepEqual(convertToRoman(2014), "MMXIV", ''<code>convertToRoman(2014)</code> should return "MMXIV"'');'
  - text: <code>convertToRoman(3999)</code> should return "MMMCMXCIX"
    testString: 'assert.deepEqual(convertToRoman(3999), "MMMCMXCIX", ''<code>convertToRoman(3999)</code> should return "MMMCMXCIX"'');'

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
