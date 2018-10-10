---
id: 587d7b7b367417b2b2512b17
title: Combine Arrays with the Spread Operator
challengeType: 1
videoUrl: ''
localeTitle: الجمع بين المصفوفات مع المشغل انتشار
---

## Description
<section id="description"> ميزة أخرى ضخمة لمشغل <dfn>الانتشار</dfn> ، هي القدرة على الجمع بين المصفوفات ، أو لإدراج جميع عناصر صفيف في آخر ، في أي مؤشر. باستخدام صيغ تركيبية أكثر تقليدية ، يمكننا تجميع صفائف ، لكن هذا يسمح لنا فقط بدمج المصفوفات في نهاية واحد ، وفي بداية أخرى. بناء الجملة Spread يجعل العملية التالية بسيطة للغاية: <blockquote style=";text-align:right;direction:rtl"> دع هذا aarray = [&#39;sage&#39;، &#39;rosemary&#39;، &#39;parsley&#39;، &#39;thyme&#39;]؛ <br><br> اترك ذلكالرائحة = [&#39;basil&#39; ، &#39;cilantro&#39; ، ... thisArray ، &#39;الكزبرة&#39;] ؛ <br> / / أن الآن يساوي [basil] ، &#39;cilantro&#39; ، &#39;sage&#39; ، &#39;rosemary&#39; ، &#39;parsley&#39; ، &#39;thyme&#39; ، &#39;coriander&#39;] </blockquote> باستخدام صيغة الانتشار ، حققنا للتو عملية من شأنها أن تكون أكثر تعقيدا وأكثر استعراضا لو استخدمنا الطرق التقليدية. </section>

## Instructions
<section id="instructions"> لقد قمنا بتعريف دالة <code>spreadOut</code> التي تقوم بارجاع <code>sentence</code> المتغيرة ، قم بتعديل الوظيفة باستخدام معامل <dfn>الانتشار</dfn> بحيث يقوم بإرجاع الصفيف <code>[&#39;learning&#39;, &#39;to&#39;, &#39;code&#39;, &#39;is&#39;, &#39;fun&#39;]</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>spreadOut</code> يجب أن تعود <code>[&quot;learning&quot;, &quot;to&quot;, &quot;code&quot;, &quot;is&quot;, &quot;fun&quot;]</code>'
    testString: 'assert.deepEqual(spreadOut(), ["learning", "to", "code", "is", "fun"], "<code>spreadOut</code> should return <code>["learning", "to", "code", "is", "fun"]</code>");'
  - text: يجب أن تستخدم دالة <code>spreadOut</code> بنية الانتشار
    testString: 'assert.notStrictEqual(spreadOut.toString().search(/[...]/), -1, "The <code>spreadOut</code> function should utilize spread syntax");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence; // change this line
  return sentence;
}

// do not change code below this line
console.log(spreadOut());

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
