---
id: 5900f52e1000cf542c510041
challengeType: 5
title: 'Problem 450: Hypocycloid and Lattice points'
videoUrl: ''
localeTitle: 'المشكلة 450: نقاط هيبوسايويد وشبكة شعرية'
---

## Description
<section id="description"> و hypocycloid هو المنحنى المرسومة بنقطة على دائرة صغيرة تدور داخل دائرة أكبر. المعادلات البارامترية ل hypocycloid تتمحور في الأصل ، وتبدأ عند أقصى نقطة اليمين تعطى بواسطة: $ x (t) = (R - r) \ cos (t) + r \ cos (\ frac {R - r} rt) $ $ y (t) = (R - r) \ sin (t) - r \ sin (\ frac {R - r} rt) $ حيث R هو نصف قطر الدائرة الكبيرة و r نصف قطرها الصغير دائرة. <p style=";text-align:right;direction:rtl"> دع $ C (R، r) $ يكون مجموعة نقاط مميزة مع إحداثيات صحيحة على hypocycloid مع نصف قطر R و r وحيث توجد قيمة مشابهة لـ t مثل $ \ sin (t) $ و $ \ cos ( t) $ هي أرقام منطقية. </p><p style=";text-align:right;direction:rtl"> دع $ S (R، r) = \ sum _ {(x، y) \ in C (R، r)} | x | + | y ​​| $ هو مجموع القيم المطلقة للإحداثيات x و y للنقاط في $ C (R، r) $. </p><p style=";text-align:right;direction:rtl"> دع $ T (N) = \ sum <em>{R = 3} ^ N \ sum</em> {r = 1} ^ {\ lfloor \ frac {R - 1} 2 \ rfloor} S (R، r) $ يكون مجموع $ S (R، r) $ للأعداد الصحيحة الموجبة R و r و $ R \ leq N $ و $ 2r &lt;R $. </p><p style=";text-align:right;direction:rtl"> يتم منحك: C (3، 1) = {(3، 0)، (-1، 2)، (-1،0)، (-1، -2)} C (2500، 1000) = {(2500 ، 0) ، (772 ، 2376) ، (772 ، -2376) ، (516 ، 1792) ، (516 ، -1792) ، (500 ، 0) ، (68 ، 504) ، (68 ، -504) ، ( -1356 ، 1088) ، (-1356 ، -1088) ، (-1500 ، 1000) ، (-1500 ، -1000)} </p><p style=";text-align:right;direction:rtl"> ملاحظة: (-625 ، 0) ليس عنصرًا من C (2500 ، 1000) لأن $ \ sin (t) $ ليس رقمًا منطقيًا للقيم المقابلة لـ t. </p><p style=";text-align:right;direction:rtl"> S (3، 1) = (| 3 | + | 0 |) + (| -1 | + | 2 |) + (| -1 | + | 0 |) + (| -1 | + | -2 |) = 10 </p><p style=";text-align:right;direction:rtl"> تي (3) = 10 ؛ T (10) = 524؛ T (100) = 580442؛ T (103) = 583108600. </p><p style=";text-align:right;direction:rtl"> تجد تي (106). </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يقوم <code>euler450()</code> بإعادة 583333163984220900.
    testString: 'assert.strictEqual(euler450(), 583333163984220900, "<code>euler450()</code> should return 583333163984220900.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler450() {
  // Good luck!
  return true;
}

euler450();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
