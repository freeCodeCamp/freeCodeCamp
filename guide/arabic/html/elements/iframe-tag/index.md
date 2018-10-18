---
title: Iframe Tag
localeTitle: علامة Iframe
---
## علامة Iframe

تُستخدم علامات iframe لإضافة صفحة ويب أو تطبيق حالي إلى موقع الويب الخاص بك ضمن مساحة محددة.

عند استخدام علامات iframe ، يجب استخدام السمة src للإشارة إلى موقع صفحة الويب أو التطبيق لاستخدامها داخل الإطار.

 `
<iframe src="framesite/index.html"></iframe> 
` 

يمكنك ضبط خصائص العرض والارتفاع لتقييد حجم الإطار.

 `
<iframe src="framesite/index.html" height="500" width="200"></iframe> 
` 

إذا كانت إطارات iframe تحتوي على حد افتراضي ، إذا كنت ترغب في إزالة هذا ، فيمكنك فعل ذلك باستخدام سمة النمط وتعيين خصائص حدود CSS إلى بلا.

 `
<iframe src="framesite/index.html" height="500" width="200" style="border:none;"></iframe> 
` 

#### معلومات اكثر:

*   [MDN - HTML iframe tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe)
*   [W3 - HTML 5.2 iframe specification](https://www.w3.org/TR/html5/semantics-embedded-content.html#the-iframe-element)