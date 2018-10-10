---
id: a7f4d8f2483413a6ce226cac
title: Roman Numeral Converter
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: 罗马数字转换器
---

## Description
<section id="description">将给定数字转换为罗马数字。所有<a href="http://www.mathsisfun.com/roman-numerals.html" target="_blank">罗马数字</a>答案都应以大写字母提供。如果卡住，请记得使用<a href="http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514" target="_blank">Read-Search-Ask</a> 。尝试配对程序。编写自己的代码。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>convertToRoman(2)</code>应该返回“II”。
    testString: 'assert.deepEqual(convertToRoman(2), "II", "<code>convertToRoman(2)</code> should return "II".");'
  - text: <code>convertToRoman(3)</code>应该返回“III”。
    testString: 'assert.deepEqual(convertToRoman(3), "III", "<code>convertToRoman(3)</code> should return "III".");'
  - text: <code>convertToRoman(4)</code>应该返回“IV”。
    testString: 'assert.deepEqual(convertToRoman(4), "IV", "<code>convertToRoman(4)</code> should return "IV".");'
  - text: <code>convertToRoman(5)</code>应该返回“V”。
    testString: 'assert.deepEqual(convertToRoman(5), "V", "<code>convertToRoman(5)</code> should return "V".");'
  - text: <code>convertToRoman(9)</code>应该返回“IX”。
    testString: 'assert.deepEqual(convertToRoman(9), "IX", "<code>convertToRoman(9)</code> should return "IX".");'
  - text: <code>convertToRoman(12)</code>应返回“XII”。
    testString: 'assert.deepEqual(convertToRoman(12), "XII", "<code>convertToRoman(12)</code> should return "XII".");'
  - text: <code>convertToRoman(16)</code>应返回“XVI”。
    testString: 'assert.deepEqual(convertToRoman(16), "XVI", "<code>convertToRoman(16)</code> should return "XVI".");'
  - text: <code>convertToRoman(29)</code>应该返回“XXIX”。
    testString: 'assert.deepEqual(convertToRoman(29), "XXIX", "<code>convertToRoman(29)</code> should return "XXIX".");'
  - text: <code>convertToRoman(44)</code>应该返回“XLIV”。
    testString: 'assert.deepEqual(convertToRoman(44), "XLIV", "<code>convertToRoman(44)</code> should return "XLIV".");'
  - text: <code>convertToRoman(45)</code>应该返回“XLV”
    testString: 'assert.deepEqual(convertToRoman(45), "XLV", "<code>convertToRoman(45)</code> should return "XLV"");'
  - text: <code>convertToRoman(68)</code>应返回“LXVIII”
    testString: 'assert.deepEqual(convertToRoman(68), "LXVIII", "<code>convertToRoman(68)</code> should return "LXVIII"");'
  - text: <code>convertToRoman(83)</code>应返回“LXXXIII”
    testString: 'assert.deepEqual(convertToRoman(83), "LXXXIII", "<code>convertToRoman(83)</code> should return "LXXXIII"");'
  - text: <code>convertToRoman(97)</code>应该返回“XCVII”
    testString: 'assert.deepEqual(convertToRoman(97), "XCVII", "<code>convertToRoman(97)</code> should return "XCVII"");'
  - text: <code>convertToRoman(99)</code>应返回“XCIX”
    testString: 'assert.deepEqual(convertToRoman(99), "XCIX", "<code>convertToRoman(99)</code> should return "XCIX"");'
  - text: <code>convertToRoman(400)</code>应返回“CD”
    testString: 'assert.deepEqual(convertToRoman(400), "CD", "<code>convertToRoman(400)</code> should return "CD"");'
  - text: <code>convertToRoman(500)</code>应返回“D”
    testString: 'assert.deepEqual(convertToRoman(500), "D", "<code>convertToRoman(500)</code> should return "D"");'
  - text: <code>convertToRoman(501)</code>应返回“DI”
    testString: 'assert.deepEqual(convertToRoman(501), "DI", "<code>convertToRoman(501)</code> should return "DI"");'
  - text: <code>convertToRoman(649)</code>应返回“DCXLIX”
    testString: 'assert.deepEqual(convertToRoman(649), "DCXLIX", "<code>convertToRoman(649)</code> should return "DCXLIX"");'
  - text: <code>convertToRoman(798)</code>应返回“DCCXCVIII”
    testString: 'assert.deepEqual(convertToRoman(798), "DCCXCVIII", "<code>convertToRoman(798)</code> should return "DCCXCVIII"");'
  - text: <code>convertToRoman(891)</code>应返回“DCCCXCI”
    testString: 'assert.deepEqual(convertToRoman(891), "DCCCXCI", "<code>convertToRoman(891)</code> should return "DCCCXCI"");'
  - text: <code>convertToRoman(1000)</code>应该返回“M”
    testString: 'assert.deepEqual(convertToRoman(1000), "M", "<code>convertToRoman(1000)</code> should return "M"");'
  - text: <code>convertToRoman(1004)</code>应返回“MIV”
    testString: 'assert.deepEqual(convertToRoman(1004), "MIV", "<code>convertToRoman(1004)</code> should return "MIV"");'
  - text: <code>convertToRoman(1006)</code>应返回“MVI”
    testString: 'assert.deepEqual(convertToRoman(1006), "MVI", "<code>convertToRoman(1006)</code> should return "MVI"");'
  - text: <code>convertToRoman(1023)</code>应返回“MXXIII”
    testString: 'assert.deepEqual(convertToRoman(1023), "MXXIII", "<code>convertToRoman(1023)</code> should return "MXXIII"");'
  - text: <code>convertToRoman(2014)</code>应返回“MMXIV”
    testString: 'assert.deepEqual(convertToRoman(2014), "MMXIV", "<code>convertToRoman(2014)</code> should return "MMXIV"");'
  - text: <code>convertToRoman(3999)</code>应返回“MMMCMXCIX”
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
