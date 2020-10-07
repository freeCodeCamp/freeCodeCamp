---
id: a7f4d8f2483413a6ce226cac
challengeType: 5
forumTopicId: 16044
title: 罗马数字转换器
---

## Description
<section id='description'>
把传入的数字转变为罗马数字。
转换后的<a href="http://www.mathsisfun.com/roman-numerals.html" target="_blank">罗马数字</a>字母必须都是大写。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "<code>convertToRoman(2)</code>应该返回 'II'。"
    testString: assert.deepEqual(convertToRoman(2), "II");
  - text: "<code>convertToRoman(3)</code>应该返回 'III'。"
    testString: assert.deepEqual(convertToRoman(3), "III");
  - text: "<code>convertToRoman(4)</code>应该返回 'IV'。"
    testString: assert.deepEqual(convertToRoman(4), "IV");
  - text: "<code>convertToRoman(5)</code>应该返回 'V'。"
    testString: assert.deepEqual(convertToRoman(5), "V");
  - text: "<code>convertToRoman(9)</code>应该返回 'IX'。"
    testString: assert.deepEqual(convertToRoman(9), "IX");
  - text: "<code>convertToRoman(12)</code>应该返回 'XII'。"
    testString: assert.deepEqual(convertToRoman(12), "XII");
  - text: "<code>convertToRoman(16)</code>应该返回 'XVI'。"
    testString: assert.deepEqual(convertToRoman(16), "XVI");
  - text: "<code>convertToRoman(29)</code>应该返回 'XXIX'。"
    testString: assert.deepEqual(convertToRoman(29), "XXIX");
  - text: "<code>convertToRoman(44)</code>应该返回 'XLIV'。"
    testString: assert.deepEqual(convertToRoman(44), "XLIV");
  - text: "<code>convertToRoman(45)</code>应该返回 'XLV'。"
    testString: assert.deepEqual(convertToRoman(45), "XLV");
  - text: "<code>convertToRoman(68)</code>应该返回 'LXVIII'。"
    testString: assert.deepEqual(convertToRoman(68), "LXVIII");
  - text: "<code>convertToRoman(83)</code>应该返回 'LXXXIII'。"
    testString: assert.deepEqual(convertToRoman(83), "LXXXIII");
  - text: "<code>convertToRoman(97)</code>应该返回 'XCVII'。"
    testString: assert.deepEqual(convertToRoman(97), "XCVII");
  - text: "<code>convertToRoman(99)</code>应该返回 'XCIX'。"
    testString: assert.deepEqual(convertToRoman(99), "XCIX");
  - text: "<code>convertToRoman(400)</code>应该返回 'CD'。"
    testString: assert.deepEqual(convertToRoman(400), "CD");
  - text: "<code>convertToRoman(500)</code>应该返回 'D'。"
    testString: assert.deepEqual(convertToRoman(500), "D");
  - text: "<code>convertToRoman(501)</code>应该返回 'DI'。"
    testString: assert.deepEqual(convertToRoman(501), "DI");
  - text: "<code>convertToRoman(649)</code>应该返回 'DCXLIX'。"
    testString: assert.deepEqual(convertToRoman(649), "DCXLIX");
  - text: "<code>convertToRoman(798)</code>应该返回 'DCCXCVIII'。"
    testString: assert.deepEqual(convertToRoman(798), "DCCXCVIII");
  - text: "<code>convertToRoman(891)</code>应该返回 'DCCCXCI'。"
    testString: assert.deepEqual(convertToRoman(891), "DCCCXCI");
  - text: "<code>convertToRoman(1000)</code>应该返回 'M'。"
    testString: assert.deepEqual(convertToRoman(1000), "M");
  - text: "<code>convertToRoman(1004)</code>应该返回 'MIV'。"
    testString: assert.deepEqual(convertToRoman(1004), "MIV");
  - text: "<code>convertToRoman(1006)</code>应该返回 'MVI'。"
    testString: assert.deepEqual(convertToRoman(1006), "MVI");
  - text: "<code>convertToRoman(1023)</code>应该返回 'MXXIII'。"
    testString: assert.deepEqual(convertToRoman(1023), "MXXIII");
  - text: "<code>convertToRoman(2014)</code>应该返回 'MMXIV'。"
    testString: assert.deepEqual(convertToRoman(2014), "MMXIV");
  - text: "<code>convertToRoman(3999)</code>应该返回 'MMMCMXCIX'。"
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
