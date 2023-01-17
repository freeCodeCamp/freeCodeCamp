---
id: 587d7b84367417b2b2512b37
title: إدراك الاستخدام المختلط لعلامات التنصيص الفردية والزوجية
challengeType: 1
forumTopicId: 301188
dashedName: catch-mixed-usage-of-single-and-double-quotes
---

# --description--

يسمح JavaScript باستخدام كلا علامات التنصيص، الفردية (`'`) والزوجية (`"`) لإعلان المقطع النصي (string). انتقاء أحد الخيارين هو تفضيل شخصي، مع بعض الاستثناءات.

وجدود الخيارين مجدٍ عندما يحوي المقطع النصي اختصارات أو نص آخر داخل علامات تنصيص. فقط كن حذراً من إغلاق المقطع مبكراً، مما يسبب خطأ في تركيب الجملة.

فيما يلي بعض الأمثلة على خلط علامات التنصيص:

```js
const grouchoContraction = "I've had a perfectly wonderful evening, but this wasn't it.";
const quoteInString = "Groucho Marx once said 'Quote me as saying I was mis-quoted.'";
const uhOhGroucho = 'I've had a perfectly wonderful evening, but this wasn't it.';
```

أما الاثنان الأولان فهما صحيحان، ولكن الثالث غير صحيح.

وبطبيعة الحال، لا بأس من الاستمرار على نوع واحد من علامات التنصيص. يمكنك التعامل مع علامات التنصيص داخل المقطع النصي باستخدام رمز التخريج (`\`):

```js
const allSameQuotes = 'I\'ve had a perfectly wonderful evening, but this wasn\'t it.';
```

# --instructions--

أصلح المقطع النصي بحيث يستخدم علامات تنصيص مختلفة لقيمة `href` أو أخرج علامات التنصيص الموجودة. حافظ على علامات التنصيص المزدوجة حول المقطع كُلََّه.

# --hints--

يجب أن يصلح الكود الخاص بك علامات التنصيص حول قيمة `href` وهي `#Home` إما بتغييرها أو معالجتها برمز التخريج (\).

```js
assert(code.match(/<a href=\s*?('|\\")#Home\1\s*?>/g));
```

يجب أن يحافظ الكود الخاص بك على علامات التنصيص المزدوجة حول المقطع كُلََّه.

```js
assert(code.match(/"<p>.*?<\/p>";/g));
```

# --seed--

## --seed-contents--

```js
let innerHtml = "<p>Click here to <a href="#Home">return home</a></p>";
console.log(innerHtml);
```

# --solutions--

```js
let innerHtml = "<p>Click here to <a href=\"#Home\">return home</a></p>";
console.log(innerHtml);
```
