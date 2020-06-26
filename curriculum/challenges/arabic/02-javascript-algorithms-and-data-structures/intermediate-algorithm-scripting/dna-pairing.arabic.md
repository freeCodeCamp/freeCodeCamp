---
id: afd15382cdfb22c9efe8b7de
title: DNA Pairing
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: الحمض النووي الاقتران
---

## Description
<section id="description"> يفتقد حبل الحمض النووي عنصر الإقران. تأخذ كل حرف ، والحصول على زوجها ، وإرجاع النتائج كصفيف 2D. <a href="http://en.wikipedia.org/wiki/Base_pair" target="_blank">أزواج القاعدة</a> هي زوج من AT و CG. تطابق العنصر المفقود مع الحرف المتوفر. قم بإرجاع الحرف المتوفر كعنصر الأول في كل صفيف. على سبيل المثال ، بالنسبة إلى مدخل GCG ، أرجع [[&quot;&quot; G &quot;،&quot; C &quot;] ، [&quot; C &quot;،&quot; G &quot;] ، [&quot; G &quot;،&quot; C &quot;]] يتم إقران الحرف وزوجه في صفيف ، ويتم تجميع جميع المصفوفات في صفيف تغليف واحد. تذكر استخدام <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> إذا واجهتك مشكلة. حاول إقران البرنامج. اكتب الكود الخاص بك. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'يجب أن يعيد <code>pairElement(&quot;ATCGA&quot;)</code> <code>[[&quot;A&quot;,&quot;T&quot;],[&quot;T&quot;,&quot;A&quot;],[&quot;C&quot;,&quot;G&quot;],[&quot;G&quot;,&quot;C&quot;],[&quot;A&quot;,&quot;T&quot;]]</code> .'
    testString: 'assert.deepEqual(pairElement("ATCGA"),[["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]], "<code>pairElement("ATCGA")</code> should return <code>[["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]</code>.");'
  - text: 'يجب أن يعيد <code>pairElement(&quot;TTGAG&quot;)</code> <code>[[&quot;T&quot;,&quot;A&quot;],[&quot;T&quot;,&quot;A&quot;],[&quot;G&quot;,&quot;C&quot;],[&quot;A&quot;,&quot;T&quot;],[&quot;G&quot;,&quot;C&quot;]]</code> .'
    testString: 'assert.deepEqual(pairElement("TTGAG"),[["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]], "<code>pairElement("TTGAG")</code> should return <code>[["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]</code>.");'
  - text: 'يجب أن تعيد <code>pairElement(&quot;CTCTA&quot;)</code> <code>[[&quot;C&quot;,&quot;G&quot;],[&quot;T&quot;,&quot;A&quot;],[&quot;C&quot;,&quot;G&quot;],[&quot;T&quot;,&quot;A&quot;],[&quot;A&quot;,&quot;T&quot;]]</code> .'
    testString: 'assert.deepEqual(pairElement("CTCTA"),[["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]], "<code>pairElement("CTCTA")</code> should return <code>[["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function pairElement(str) {
  return str;
}

pairElement("GCG");

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
