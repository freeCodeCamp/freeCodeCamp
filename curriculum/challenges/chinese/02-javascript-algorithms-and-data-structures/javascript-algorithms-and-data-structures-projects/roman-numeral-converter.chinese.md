---
id: a7f4d8f2483413a6ce226cac
title: Roman Numeral Converter
challengeType: 5
isRequired: true
videoUrl: ''
localeTitle: Roman Numeral Converter
---

## Description
<section id='description'>
如果给定的一个字符串是回文，那么返回<code>true</code>，否则返回<code>false</code>。
<dfn>palindrome（回文）</dfn>，指在忽略标点符号、大小写和空格的前提下，正着读和反着读一模一样。
<strong>注意：</strong><br>检查回文时，你需要先除去<strong>所有非字母数字的字符</strong>（标点、空格和符号）并且将所有字符转换成字母大写或字母小写。
我们将会传入不同格式的字符串，例如：<code>"racecar"</code>、<code>"RaceCar"</code>、<code>"race CAR"</code>等等。
我们也会传入一些包含特殊符号的字符串，例如<code>"2A3*3a2"</code>，<code>"2A3  3a2"</code>和<code>"2_A3*3#A2"</code>。
如果你遇到了问题，请点击<a href='https://forum.freecodecamp.one/t/topic/157' target='_blank'>帮助</a>。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "<code>convertToRoman(2)</code>应该返回 'II'。"
    testString: assert.deepEqual(convertToRoman(2), "II", '<code>convertToRoman(2)</code>应该返回 "II"。');
  - text: "<code>convertToRoman(3)</code>应该返回 'III'。"
    testString: assert.deepEqual(convertToRoman(3), "III", '<code>convertToRoman(3)</code>应该返回 "III"。');
  - text: "<code>convertToRoman(4)</code>应该返回 'IV'。"
    testString: assert.deepEqual(convertToRoman(4), "IV", '<code>convertToRoman(4)</code>应该返回 "IV"。');
  - text: "<code>convertToRoman(5)</code>应该返回 'V'。"
    testString: assert.deepEqual(convertToRoman(5), "V", '<code>convertToRoman(5)</code>应该返回 "V"。');
  - text: "<code>convertToRoman(9)</code>应该返回 'IX'。"
    testString: assert.deepEqual(convertToRoman(9), "IX", '<code>convertToRoman(9)</code>应该返回 "IX"。');
  - text: "<code>convertToRoman(12)</code>应该返回 'XII'。"
    testString: assert.deepEqual(convertToRoman(12), "XII", '<code>convertToRoman(12)</code>应该返回 "XII"。');
  - text: "<code>convertToRoman(16)</code>应该返回 'XVI'。"
    testString: assert.deepEqual(convertToRoman(16), "XVI", '<code>convertToRoman(16)</code>应该返回 "XVI"。');
  - text: "<code>convertToRoman(29)</code>应该返回 'XXIX'。"
    testString: assert.deepEqual(convertToRoman(29), "XXIX", '<code>convertToRoman(29)</code>应该返回 "XXIX"。');
  - text: "<code>convertToRoman(44)</code>应该返回 'XLIV'。"
    testString: assert.deepEqual(convertToRoman(44), "XLIV", '<code>convertToRoman(44)</code>应该返回 "XLIV"。');
  - text: "<code>convertToRoman(45)</code>应该返回 'XLV'。"
    testString: assert.deepEqual(convertToRoman(45), "XLV", '<code>convertToRoman(45)</code>应该返回 "XLV"。');
  - text: "<code>convertToRoman(68)</code>应该返回 'LXVIII'。"
    testString: assert.deepEqual(convertToRoman(68), "LXVIII", '<code>convertToRoman(68)</code>应该返回 "LXVIII"。');
  - text: "<code>convertToRoman(83)</code>应该返回 'LXXXIII'。"
    testString: assert.deepEqual(convertToRoman(83), "LXXXIII", '<code>convertToRoman(83)</code>应该返回 "LXXXIII"。');
  - text: "<code>convertToRoman(97)</code>应该返回 'XCVII'。"
    testString: assert.deepEqual(convertToRoman(97), "XCVII", '<code>convertToRoman(97)</code>应该返回 "XCVII"。');
  - text: "<code>convertToRoman(99)</code>应该返回 'XCIX'。"
    testString: assert.deepEqual(convertToRoman(99), "XCIX", '<code>convertToRoman(99)</code>应该返回 "XCIX"。');
  - text: "<code>convertToRoman(400)</code>应该返回 'CD'。"
    testString: assert.deepEqual(convertToRoman(400), "CD", '<code>convertToRoman(400)</code>应该返回 "CD"。');
  - text: "<code>convertToRoman(500)</code>应该返回 'D'。"
    testString: assert.deepEqual(convertToRoman(500), "D", '<code>convertToRoman(500)</code>应该返回 "D"。');
  - text: "<code>convertToRoman(501)</code>应该返回 'DI'。"
    testString: assert.deepEqual(convertToRoman(501), "DI", '<code>convertToRoman(501)</code>应该返回 "DI"。');
  - text: "<code>convertToRoman(649)</code>应该返回 'DCXLIX'。"
    testString: assert.deepEqual(convertToRoman(649), "DCXLIX", '<code>convertToRoman(649)</code>应该返回 "DCXLIX"。');
  - text: "<code>convertToRoman(798)</code>应该返回 'DCCXCVIII'。"
    testString: assert.deepEqual(convertToRoman(798), "DCCXCVIII", '<code>convertToRoman(798)</code>应该返回 "DCCXCVIII"。');
  - text: "<code>convertToRoman(891)</code>应该返回 'DCCCXCI'。"
    testString: assert.deepEqual(convertToRoman(891), "DCCCXCI", '<code>convertToRoman(891)</code>应该返回 "DCCCXCI"。');
  - text: "<code>convertToRoman(1000)</code>应该返回 'M'。"
    testString: assert.deepEqual(convertToRoman(1000), "M", '<code>convertToRoman(1000)</code>应该返回 "M"。');
  - text: "<code>convertToRoman(1004)</code>应该返回 'MIV'。"
    testString: assert.deepEqual(convertToRoman(1004), "MIV", '<code>convertToRoman(1004)</code>应该返回 "MIV"。');
  - text: "<code>convertToRoman(1006)</code>应该返回 'MVI'。"
    testString: assert.deepEqual(convertToRoman(1006), "MVI", '<code>convertToRoman(1006)</code>应该返回 "MVI"。');
  - text: "<code>convertToRoman(1023)</code>应该返回 'MXXIII'。"
    testString: assert.deepEqual(convertToRoman(1023), "MXXIII", '<code>convertToRoman(1023)</code>应该返回 "MXXIII"。');
  - text: "<code>convertToRoman(2014)</code>应该返回 'MMXIV'。"
    testString: assert.deepEqual(convertToRoman(2014), "MMXIV", '<code>convertToRoman(2014)</code>应该返回 "MMXIV"。');
  - text: "<code>convertToRoman(3999)</code>应该返回 'MMMCMXCIX'。"
    testString: assert.deepEqual(convertToRoman(3999), "MMMCMXCIX", '<code>convertToRoman(3999)</code>应该返回 "MMMCMXCIX"。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















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
              