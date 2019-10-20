---
id: 5900f5381000cf542c51004b
challengeType: 5
title: 'Problem 460: An ant on the move'
videoUrl: ''
localeTitle: 'مشكلة 460: نملة على هذه الخطوة'
---

## Description
<section id="description"> على الطائرة الإقليدية ، تنتقل النمل من النقطة A (0 ، 1) إلى النقطة B (d ، 1) لعدد صحيح d. <p style=";text-align:right;direction:rtl"> في كل خطوة ، يختار النمل عند النقطة (x0، y0) إحدى نقاط الشبكة (x1، y1) التي تستوفي x1 ≥ 0 و y1 ≥ 1 وتذهب مباشرة إلى (x1، y1) عند سرعة ثابتة v. يعتمد v على y0 و y1 كما يلي: إذا y0 = y1 ، فإن قيمة v تساوي y0. إذا كانت y0 ≠ y1 ، تساوي قيمة v (y1 - y0) / (ln (y1) - ln (y0)). </p><p style=";text-align:right;direction:rtl"> الصورة اليسرى هي واحدة من المسارات الممكنة ل d = 4. أولا ينتقل النمل من A (0، 1) إلى P1 (1، 3) بسرعة (3 - 1) / (ln (3) - ln (1) ) ≈ 1.8205. ثم الوقت المطلوب هو sqrt (5) / 1.8205 ≈ 1.2283. من P1 (1 ، 3) إلى P2 (3 ، 3) تنتقل النملة بسرعة 3 ، بحيث يكون الوقت المطلوب هو 2/3 ≈ 0.6667. من P2 (3 ، 3) إلى B (4 ، 1) تنتقل النمل بسرعة (1 - 3) / (ln (1) - ln (3)) ≈ 1.8205 بحيث يكون الوقت المطلوب هو sqrt (5) / 1.8205 ≈ 1.2283. وبالتالي فإن إجمالي الوقت المطلوب هو 1.2283 + 0.6667 + 1.2283 = 3.1233. </p><p style=";text-align:right;direction:rtl"> الصورة الصحيحة هي مسار آخر. يتم احتساب إجمالي الوقت المطلوب كـ 0.98026 + 1 + 0.98026 = 2.96052. يمكن أن يثبت أن هذا هو أسرع مسار لـ d = 4. </p><p style=";text-align:right;direction:rtl"> اترك F (d) يكون إجمالي الوقت المطلوب إذا اختار النمل المسار الأسرع. على سبيل المثال ، F (4) ≈ 2.960516287. يمكننا التحقق من F (10) ≈ 4.668187834 و F (100) ≈ 9.217221972. </p><p style=";text-align:right;direction:rtl"> البحث F (10000). إعطاء إجابتك تقريبه إلى تسعة منازل عشرية. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يقوم <code>euler460()</code> بارجاع 18.420738199.
    testString: 'assert.strictEqual(euler460(), 18.420738199, "<code>euler460()</code> should return 18.420738199.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler460() {
  // Good luck!
  return true;
}

euler460();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
