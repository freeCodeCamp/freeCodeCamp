---
id: 5900f5431000cf542c510056
challengeType: 5
title: 'Problem 471: Triangle inscribed in ellipse'
videoUrl: ''
localeTitle: 'المشكلة 471: مثلث مدرج في القطع الناقص'
---

## Description
<section id="description"> المثلث ΔABC منقوش في شكل بيضاوي مع المعادلة $ \ frac {x ^ 2} {a ^ 2} + \ frac {y ^ 2} {b ^ 2} = 1 $، 0 &lt;2b &lt;a، a and b integers . دع r (a، b) يكون نصف قطر الـ incircle لـ ΔABC عندما يكون لدى incircle center (2b، 0) و A له تنسيق $ \ left (\ frac a 2، \ frac {\ sqrt 3} 2 b \ right) $. على سبيل المثال ، r (3،1) = ½، r (6،2) = 1، r (12،3) = 2. <p style=";text-align:right;direction:rtl"> دع $ G (n) = \ sum <em>{a = 3} ^ n \ sum</em> {b = 1} ^ {\ lfloor \ frac {a - 1} 2 \ rfloor} r (a، b) $ يتم منحك G ( 10) = 20.59722222، G (100) = 19223.60980 (تقريبًا إلى 10 أرقام مهمة). البحث عن (1011). أعط إجابتك في التدوين العلمي تقريبًا إلى 10 أرقام مهمة. استخدم حرف e صغير لفصل mantissa و exp. بالنسبة لـ G (10) ، كان الجواب 2.059722222e1. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يعيد <code>euler471()</code> 1.895093981e + 31.
    testString: 'assert.strictEqual(euler471(), 1.895093981e+31, "<code>euler471()</code> should return 1.895093981e+31.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler471() {
  // Good luck!
  return true;
}

euler471();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
