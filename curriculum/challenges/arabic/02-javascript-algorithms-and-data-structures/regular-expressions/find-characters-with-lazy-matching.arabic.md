---
id: 587d7db6367417b2b2512b9b
title: Find Characters with Lazy Matching
challengeType: 1
videoUrl: ''
localeTitle: العثور على شخصيات مع مطابقة كسول
---

## Description
<section id="description"> في التعبيرات العادية ، تعثر المطابقة <code>greedy</code> على أطول جزء ممكن من السلسلة التي تناسب نمط regex وتعرضها كمطابقة. ويطلق على البديل اسم &quot;مطابقة <code>lazy</code> ، والتي تجد أصغر جزء ممكن من السلسلة التي تفي بنمط regex. يمكنك تطبيق regex <code>/t[az]*i/</code> على السلسلة <code>&quot;titanic&quot;</code> . هذا التعبير المعتاد هو في الأساس نمط يبدأ بـ <code>t</code> ، وينتهي بـ <code>i</code> ، ويحتوي على بعض الأحرف بينهما. تكون التعابير العادية <code>greedy</code> بشكل افتراضي ، لذا فإن المباراة ستعيد <code>[&quot;titani&quot;]</code> . يجد أكبر سلسلة فرعية ممكنة لتناسب النمط. ومع ذلك ، يمكنك استخدام <code>?</code> شخصية لتغييره إلى مطابقة <code>lazy</code> . تطابق <code>&quot;titanic&quot;</code> مع regex المعدلة من <code>/t[az]*?i/</code> returns <code>[&quot;ti&quot;]</code> . </section>

## Instructions
<section id="instructions"> أصلح regex <code>/&lt;.*&gt;/</code> لإرجاع علامة HTML <code>&lt;h1&gt;</code> وليس النص <code>&quot;&lt;h1&gt;Winter is coming&lt;/h1&gt;&quot;</code> . تذكر حرف البدل <code>.</code> في التعبير العادي يطابق أي حرف. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يكون متغير <code>result</code> صفيفًا به <code>&lt;h1&gt;</code> فيه
    testString: 'assert(result[0] == "<h1>", "The <code>result</code> variable should be an array with <code>&lt;h1&gt;</code> in it");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*>/; // Change this line
let result = text.match(myRegex);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
