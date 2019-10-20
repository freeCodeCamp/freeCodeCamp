---
id: 587d7db6367417b2b2512b9a
title: Match Characters that Occur Zero or More Times
challengeType: 1
videoUrl: ''
localeTitle: مطابقة الأحرف التي تحدث Zero أو أوقات إضافية
---

## Description
<section id="description"> استخدم التحدي الأخير علامة زائد <code>+</code> للبحث عن الأحرف التي تحدث مرة واحدة أو أكثر. هناك أيضًا خيار يطابق الأحرف التي تحدث صفرًا أو أكثر. الحرف للقيام بذلك هو <code>asterisk</code> أو <code>star</code> : <code>*</code> . <blockquote style=";text-align:right;direction:rtl"> let soccerWord = &quot;gooooooooal!&quot;؛ <br> دعونا gPhrase = &quot;الشعور الغريزي&quot; ؛ <br> دع oPhrase = &quot;فوق القمر&quot; ؛ <br> اترك goRegex = / go * /؛ <br> soccerWord.match (goRegex)؛ // Returns [&quot;goooooooo&quot;] <br> gPhrase.match (goRegex)؛ // Returns [&quot;g&quot;] <br> oPhrase.match (goRegex)؛ // يعود لاغيا </blockquote></section>

## Instructions
<section id="instructions"> إنشاء regex <code>chewieRegex</code> يستخدم الحرف <code>*</code> لتطابق كافة الأحرف <code>&quot;a&quot;</code> العلوي والسفلي في <code>chewieQuote</code> . لا يحتاج تعبيرك العادي إلى علامات ، ولا ينبغي أن يتطابق مع أي من علامات الاقتباس الأخرى. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يستخدم regex <code>chewieRegex</code> <code>*</code> لمطابقة صفر أو أكثر <code>a</code> الأحرف.
    testString: 'assert(/\*/.test(chewieRegex.source), "Your regex <code>chewieRegex</code> should use the <code>*</code> character to match zero or more <code>a</code> characters.");'
  - text: يجب أن يتطابق التعبير العادي regex <code>chewieRegex</code> مع 16 حرفًا.
    testString: 'assert(result[0].length === 16, "Your regex <code>chewieRegex</code> should match 16 characters.");'
  - text: يجب أن يتطابق <code>&quot;Aaaaaaaaaaaaaaaa&quot;</code> العادي مع <code>&quot;Aaaaaaaaaaaaaaaa&quot;</code> .
    testString: 'assert(result[0] === "Aaaaaaaaaaaaaaaa", "Your regex should match <code>"Aaaaaaaaaaaaaaaa"</code>.");'
  - text: 'يجب ألا يتطابق تعبيرك المعتاد مع أي أحرف في <code>&quot;He made a fair move. Screaming about it can&#39;t help you.&quot;</code>'
    testString: 'assert(!"He made a fair move. Screaming about it can\"t help you.".match(chewieRegex), "Your regex should not match any characters in <code>"He made a fair move. Screaming about it can&#39t help you."</code>");'
  - text: 'يجب ألا يتطابق <code>&quot;Let him have it. It&#39;s not wise to upset a Wookiee.&quot;</code> المعتاد مع أي أحرف في <code>&quot;Let him have it. It&#39;s not wise to upset a Wookiee.&quot;</code>'
    testString: 'assert(!"Let him have it. It\"s not wise to upset a Wookiee.".match(chewieRegex), "Your regex should not match any characters in <code>"Let him have it. It&#39s not wise to upset a Wookiee."</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /change/; // Change this line
let result = chewieQuote.match(chewieRegex);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
