---
id: 587d7db6367417b2b2512b98
title: Match Single Characters Not Specified
challengeType: 1
videoUrl: ''
localeTitle: مطابقة أحرف مفردة غير محددة
---

## Description
<section id="description"> حتى الآن ، قمت بإنشاء مجموعة من الأحرف التي تريد مطابقتها ، ولكن يمكنك أيضًا إنشاء مجموعة من الأحرف التي لا تريد مطابقتها. تسمى هذه الأنواع من مجموعات <code>negated character sets</code> . لإنشاء مجموعة <code>negated character set</code> ، تضع <code>caret</code> ( <code>^</code> ) بعد قوس الفتح وقبل الأحرف التي لا تريد مطابقتها. على سبيل المثال ، يطابق <code>/[^aeiou]/gi</code> كافة الأحرف التي ليست حرف علة. لاحظ أن أحرف مثل <code>.</code> <code>!</code> تتم مطابقة ، <code>[</code> ، <code>@</code> ، <code>/</code> وفضاء أبيض] - تستبعد مجموعة أحرف العلة المنسوخة أحرف الأحرف المتحركة فقط. </section>

## Instructions
<section id="instructions"> قم بإنشاء تعبير عادي واحد يتطابق مع كل الحروف التي ليست رقمًا أو حرفًا متحركًا. تذكر تضمين الأعلام المناسبة في التعابير المنطقية. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يتطابق <code>myRegex</code> مع 9 عناصر.
    testString: 'assert(result.length == 9, "Your regex <code>myRegex</code> should match 9 items.");'
  - text: يجب أن يستخدم <code>myRegex</code> regex العلامة العامة.
    testString: 'assert(myRegex.flags.match(/g/).length == 1, "Your regex <code>myRegex</code> should use the global flag.");'
  - text: يجب أن يستخدم <code>myRegex</code> regex <code>myRegex</code> حالة الأحرف.
    testString: 'assert(myRegex.flags.match(/i/).length == 1, "Your regex <code>myRegex</code> should use the case insensitive flag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let quoteSample = "3 blind mice.";
let myRegex = /change/; // Change this line
let result = myRegex; // Change this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
