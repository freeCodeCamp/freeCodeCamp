---
title: Links
localeTitle: الروابط
---
## الروابط

هذا هو كعب. [ساعد مجتمعنا على توسيعه](https://github.com/freecodecamp/guides/tree/master/src/pages/html/attributes/links/index.md) .

[سيساعدك دليل النمط السريع هذا على ضمان قبول طلب السحب](https://github.com/freecodecamp/guides/blob/master/README.md) .

يتم استخدام الروابط في كل مكان على الويب ، وذلك بغرض توجيه المستخدمين إلى عناصر المحتوى المختلفة. عادةً ما يشار إليها بواسطة المؤشر وتحولها إلى رمز اليد. يمكن أن تكون الروابط نصوصًا أو صورًا أو عناصر أخرى موجودة في HTML أو صفحة الويب الخاصة بك.

يمكنك استخدام `code <a>` العلامة أو عنصر الارتساء لتعريف الرابط الخاص بك ، والذي يحتاج أيضًا إلى عنوان وجهة يمكنك الوصول إليه باستخدام سمة `code href` . في ما يلي مقتطف يجعل عبارة "الدليل freeCodeCamp" عبارة:

 `
<a href="https://guide.freecodecamp.org">the freeCodeCamp Guide</a> 
` 

إذا كنت تريد فتح الرابط في علامة تبويب جديدة ، `code target` السمة `code target` مع قيمة `code "_blank"` داخل `code <a>` tag الخاص بك. يبدو هذا مثل:

 `
<a href="https://guide.freecodecamp.org" target="_blank">the freeCodeCamp Guide</a> 
` 

عندما تحتاج إلى توجيه المستخدمين إلى جزء معين من صفحة الويب الخاصة بك ، دعنا نفترض القاع ، تحتاج أولاً إلى تعيين `code #` التجزئة إلى سمة `code href` ، مثل هذا

 `
<a href="#footer>More about us<a/> 
` 

ستحتاج بعد ذلك إلى استخدام السمة `code id` في العنصر الذي تريد توجيه المستخدم إليه - وفي هذه الحالة `code <footer>` في أسفل صفحة الويب.

 `
<footer id="footer">Powered by freeCodeCamp</footer> 
` 

#### معلومات اكثر:

[w3sschools - وصلات HTML](https://www.w3schools.com/html/html_links.asp)