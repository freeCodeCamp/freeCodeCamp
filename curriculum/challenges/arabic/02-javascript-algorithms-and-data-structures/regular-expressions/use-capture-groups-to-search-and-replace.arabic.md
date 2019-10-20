---
id: 587d7dbb367417b2b2512bab
title: Use Capture Groups to Search and Replace
challengeType: 1
videoUrl: ''
localeTitle: استخدم مجموعات الالتقاط للبحث واستبدال
---

## Description
<section id="description"> البحث مفيد. ومع ذلك ، يمكنك جعل البحث أكثر قوة عندما يتغير (أو يحل محل) النص الذي تطابقه. يمكنك البحث واستبدال النص في سلسلة باستخدام <code>.replace()</code> في سلسلة. تعتبر مدخلات <code>.replace()</code> هي أولاً نمط regex الذي تريد البحث عنه. المعلمة الثانية هي السلسلة التي ستحل محل المطابقة أو الوظيفة لفعل شيء ما. <blockquote style=";text-align:right;direction:rtl"> let wrongText = &quot;إن السماء فضية.&quot;؛ <br> let silverRegex = / silver /؛ <br> wrongText.replace (silverRegex، &quot;blue&quot;)؛ <br> // Returns &quot;السماء زرقاء.&quot; </blockquote> يمكنك أيضًا الوصول إلى مجموعات الالتقاط في سلسلة الاستبدال باستخدام علامة الدولار ( <code>$</code> ). <blockquote style=";text-align:right;direction:rtl"> &quot;Code Code&quot; .replace (/ (\ w +) \ s (\ w +) /، &#39;$ 2 $ 1&#39;)؛ <br> // إرجاع &quot;رمز المعسكر&quot; </blockquote></section>

## Instructions
<section id="instructions"> اكتب تعبيرًا منطقيًا حتى يبحث عن السلسلة <code>&quot;good&quot;</code> . ثم قم بتحديث متغير <code>replaceText</code> لاستبدال <code>&quot;good&quot;</code> بـ <code>&quot;okey-dokey&quot;</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب عليك استخدام <code>.replace()</code> للبحث <code>.replace()</code> .
    testString: 'assert(code.match(/\.replace\(.*\)/), "You should use <code>.replace()</code> to search and replace.");'
  - text: يجب أن يتغير تعبيرك المعتاد <code>&quot;This sandwich is good.&quot;</code> إلى <code>&quot;This sandwich is okey-dokey.&quot;</code>
    testString: 'assert(result == "This sandwich is okey-dokey." && replaceText === "okey-dokey", "Your regex should change <code>"This sandwich is good."</code> to <code>"This sandwich is okey-dokey."</code>");'
  - text: يجب عدم تغيير السطر الأخير.
    testString: 'assert(code.match(/result\s*=\s*huhText\.replace\(.*?\)/), "You should not change the last line.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let huhText = "This sandwich is good.";
let fixRegex = /change/; // Change this line
let replaceText = ""; // Change this line
let result = huhText.replace(fixRegex, replaceText);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
