---
id: a7f4d8f2483413a6ce226cac
title: Roman Numeral Converter
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: Конвертер римской цифры
---

## Description
<section id="description"> Преобразуйте заданное число в римскую цифру. Все <a href="http://www.mathsisfun.com/roman-numerals.html" target="_blank">римские цифры</a> должны быть указаны в верхнем регистре. Не забудьте использовать <a href="http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514" target="_blank">Read-Search-Ask,</a> если вы застряли. Попробуйте подключить программу. Напишите свой собственный код. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>convertToRoman(2)</code> должен вернуть «II».
    testString: 'assert.deepEqual(convertToRoman(2), "II", "<code>convertToRoman(2)</code> should return "II".");'
  - text: <code>convertToRoman(3)</code> должен вернуть «III».
    testString: 'assert.deepEqual(convertToRoman(3), "III", "<code>convertToRoman(3)</code> should return "III".");'
  - text: <code>convertToRoman(4)</code> должен вернуть «IV».
    testString: 'assert.deepEqual(convertToRoman(4), "IV", "<code>convertToRoman(4)</code> should return "IV".");'
  - text: <code>convertToRoman(5)</code> должен возвращать «V».
    testString: 'assert.deepEqual(convertToRoman(5), "V", "<code>convertToRoman(5)</code> should return "V".");'
  - text: <code>convertToRoman(9)</code> должен вернуть «IX».
    testString: 'assert.deepEqual(convertToRoman(9), "IX", "<code>convertToRoman(9)</code> should return "IX".");'
  - text: <code>convertToRoman(12)</code> должен вернуть «XII».
    testString: 'assert.deepEqual(convertToRoman(12), "XII", "<code>convertToRoman(12)</code> should return "XII".");'
  - text: <code>convertToRoman(16)</code> должен вернуть «XVI».
    testString: 'assert.deepEqual(convertToRoman(16), "XVI", "<code>convertToRoman(16)</code> should return "XVI".");'
  - text: <code>convertToRoman(29)</code> должен вернуть «XXIX».
    testString: 'assert.deepEqual(convertToRoman(29), "XXIX", "<code>convertToRoman(29)</code> should return "XXIX".");'
  - text: <code>convertToRoman(44)</code> должен возвращать «XLIV».
    testString: 'assert.deepEqual(convertToRoman(44), "XLIV", "<code>convertToRoman(44)</code> should return "XLIV".");'
  - text: <code>convertToRoman(45)</code> должен вернуть &quot;XLV&quot;
    testString: 'assert.deepEqual(convertToRoman(45), "XLV", "<code>convertToRoman(45)</code> should return "XLV"");'
  - text: <code>convertToRoman(68)</code> должен вернуть &quot;LXVIII&quot;
    testString: 'assert.deepEqual(convertToRoman(68), "LXVIII", "<code>convertToRoman(68)</code> should return "LXVIII"");'
  - text: <code>convertToRoman(83)</code> должен возвращать &quot;LXXXIII&quot;
    testString: 'assert.deepEqual(convertToRoman(83), "LXXXIII", "<code>convertToRoman(83)</code> should return "LXXXIII"");'
  - text: <code>convertToRoman(97)</code> должен вернуть &quot;XCVII&quot;
    testString: 'assert.deepEqual(convertToRoman(97), "XCVII", "<code>convertToRoman(97)</code> should return "XCVII"");'
  - text: <code>convertToRoman(99)</code> должен вернуть &quot;XCIX&quot;
    testString: 'assert.deepEqual(convertToRoman(99), "XCIX", "<code>convertToRoman(99)</code> should return "XCIX"");'
  - text: <code>convertToRoman(400)</code> должен возвращать &quot;CD&quot;
    testString: 'assert.deepEqual(convertToRoman(400), "CD", "<code>convertToRoman(400)</code> should return "CD"");'
  - text: <code>convertToRoman(500)</code> должен возвращать «D»
    testString: 'assert.deepEqual(convertToRoman(500), "D", "<code>convertToRoman(500)</code> should return "D"");'
  - text: <code>convertToRoman(501)</code> должен возвращать &quot;DI&quot;
    testString: 'assert.deepEqual(convertToRoman(501), "DI", "<code>convertToRoman(501)</code> should return "DI"");'
  - text: <code>convertToRoman(649)</code> должен возвращать &quot;DCXLIX&quot;
    testString: 'assert.deepEqual(convertToRoman(649), "DCXLIX", "<code>convertToRoman(649)</code> should return "DCXLIX"");'
  - text: <code>convertToRoman(798)</code> должен вернуть &quot;DCCXCVIII&quot;
    testString: 'assert.deepEqual(convertToRoman(798), "DCCXCVIII", "<code>convertToRoman(798)</code> should return "DCCXCVIII"");'
  - text: <code>convertToRoman(891)</code> должен возвращать &quot;DCCCXCI&quot;
    testString: 'assert.deepEqual(convertToRoman(891), "DCCCXCI", "<code>convertToRoman(891)</code> should return "DCCCXCI"");'
  - text: <code>convertToRoman(1000)</code> должен возвращать «M»
    testString: 'assert.deepEqual(convertToRoman(1000), "M", "<code>convertToRoman(1000)</code> should return "M"");'
  - text: <code>convertToRoman(1004)</code> должен вернуть «MIV»
    testString: 'assert.deepEqual(convertToRoman(1004), "MIV", "<code>convertToRoman(1004)</code> should return "MIV"");'
  - text: <code>convertToRoman(1006)</code> должен вернуть &quot;MVI&quot;
    testString: 'assert.deepEqual(convertToRoman(1006), "MVI", "<code>convertToRoman(1006)</code> should return "MVI"");'
  - text: <code>convertToRoman(1023)</code> должен возвращать &quot;MXXIII&quot;
    testString: 'assert.deepEqual(convertToRoman(1023), "MXXIII", "<code>convertToRoman(1023)</code> should return "MXXIII"");'
  - text: <code>convertToRoman(2014)</code> должен вернуть «MMXIV»
    testString: 'assert.deepEqual(convertToRoman(2014), "MMXIV", "<code>convertToRoman(2014)</code> should return "MMXIV"");'
  - text: <code>convertToRoman(3999)</code> должен возвращать «MMMCMXCIX»
    testString: 'assert.deepEqual(convertToRoman(3999), "MMMCMXCIX", "<code>convertToRoman(3999)</code> should return "MMMCMXCIX"");'

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
// solution required
```
</section>
