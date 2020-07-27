---
id: ab6137d4e35944e21037b769
title: Title Case a Sentence
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: العنوان حالة الجملة
---

## Description
<section id="description"> قم بإرجاع السلسلة المتوفرة بالحرف الأول من كل كلمة بالأحرف الكبيرة. تأكد من أن بقية الكلمة في حالة الأحرف الصغيرة. لأغراض هذا التمرين ، يجب أيضًا تكبير الحروف الموصولة مثل &quot;the&quot; و &quot;of&quot;. تذكر استخدام <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> إذا واجهتك مشكلة. اكتب الكود الخاص بك. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>titleCase(&quot;I&#39;m a little tea pot&quot;)</code> سلسلة.'
    testString: 'assert(typeof titleCase("I"m a little tea pot") === "string", "<code>titleCase("I&#39;m a little tea pot")</code> should return a string.");'
  - text: '<code>titleCase(&quot;I&#39;m a little tea pot&quot;)</code> يجب أن أعود <code>I&#39;m A Little Tea Pot</code> .'
    testString: 'assert(titleCase("I"m a little tea pot") === "I"m A Little Tea Pot", "<code>titleCase("I&#39;m a little tea pot")</code> should return <code>I&#39;m A Little Tea Pot</code>.");'
  - text: يجب أن ترجع <code>titleCase(&quot;sHoRt AnD sToUt&quot;)</code> <code>Short And Stout</code> .
    testString: 'assert(titleCase("sHoRt AnD sToUt") === "Short And Stout", "<code>titleCase("sHoRt AnD sToUt")</code> should return <code>Short And Stout</code>.");'
  - text: <code>titleCase(&quot;HERE IS MY HANDLE HERE IS MY SPOUT&quot;)</code> <code>Here Is My Handle Here Is My Spout</code> <code>titleCase(&quot;HERE IS MY HANDLE HERE IS MY SPOUT&quot;)</code> يجب أن يعود <code>Here Is My Handle Here Is My Spout</code> .
    testString: 'assert(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") === "Here Is My Handle Here Is My Spout", "<code>titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")</code> should return <code>Here Is My Handle Here Is My Spout</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function titleCase(str) {
  return str;
}

titleCase("I'm a little tea pot");

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
