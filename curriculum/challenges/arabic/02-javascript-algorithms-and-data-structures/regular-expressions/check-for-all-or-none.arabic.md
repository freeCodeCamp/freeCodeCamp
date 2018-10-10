---
id: 587d7dba367417b2b2512ba8
title: Check for All or None
challengeType: 1
videoUrl: ''
localeTitle: تحقق من الكل أو لا شيء
---

## Description
<section id="description"> في بعض الأحيان قد تحتوي الأنماط التي تريد البحث عنها على أجزاء منها قد تكون موجودة أو غير موجودة. ومع ذلك ، قد يكون من المهم التحقق منهم على الرغم من ذلك. يمكنك تحديد الوجود المحتمل لعنصر مع علامة استفهام ، <code>?</code> . هذا يتحقق لصفر أو واحد من العنصر السابق. يمكنك التفكير في هذا الرمز كقول أن العنصر السابق اختياري. على سبيل المثال ، هناك اختلافات طفيفة في اللغة الإنجليزية الأمريكية والبريطانية ويمكنك استخدام علامة الاستفهام لمطابقة كل من التهجئة. <blockquote style=";text-align:right;direction:rtl"> دع أمريكا = &quot;لون&quot; ؛ <br> دعونا البريطانية = &quot;لون&quot;. <br> اترك rainbowRegex = / colou؟ r /؛ <br> rainbowRegex.test (أمريكا)؛ // يعود صحيح <br> rainbowRegex.test (البريطانية)؛ // يعود صحيح </blockquote></section>

## Instructions
<section id="instructions"> قم بتغيير <code>favRegex</code> regex لمطابقة كل من الإنجليزية الأمريكية (المفضلة) وإصدار اللغة الإنجليزية البريطانية (المفضلة) للكلمة. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يستخدم تعبيرك العادي الرمز الاختياري ، <code>?</code> .
    testString: 'assert(favRegex.source.match(/\?/).length > 0, "Your regex should use the optional symbol, <code>?</code>.");'
  - text: يجب أن يتطابق التعبير العادي مع <code>&quot;favorite&quot;</code>
    testString: 'assert(favRegex.test("favorite"), "Your regex should match <code>"favorite"</code>");'
  - text: يجب أن يتطابق التعبير العادي مع <code>&quot;favourite&quot;</code>
    testString: 'assert(favRegex.test("favourite"), "Your regex should match <code>"favourite"</code>");'
  - text: يجب ألا يتطابق تعبيرك العادي مع <code>&quot;fav&quot;</code>
    testString: 'assert(!favRegex.test("fav"), "Your regex should not match <code>"fav"</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let favWord = "favorite";
let favRegex = /change/; // Change this line
let result = favRegex.test(favWord);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
