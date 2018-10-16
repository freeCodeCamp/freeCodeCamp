---
title: Basic Usage
localeTitle: الاستخدام الأساسي
---
## الاستخدام الأساسي من قماش

عند استخدام لوحة الرسم القماشية ، ضع لوحة قماشية أولاً في المستند كعنصر.

 `
<canvas width="400" height="400" id="canvas"></canvas> 
` 

تتحكم خصائص `width` `height` في حجم اللوحة. تتحكم هذه السمات في حجم الرسم القماشي ، وليس الحجم المعروض الفعلي. راجع صفحة "أبعاد Canvas" لمزيد من المعلومات.

لاستخدام `canvas` رسم ، يجب أولاً أن نأخذ العنصر من الصفحة كعنصر DOM ، ثم نحصل على سياق رسم منه.

 `var canvas = document.getElementById("canvas"); 
 var ctx = canvas.getContext('2d'); 
` 

سيتم إجراء جميع مكالمات الرسم بعد ذلك من كائن `ctx` . يمثل `ctx` سياق الرسم للكائن ، ويحتوي على معلومات حول مساحة الرسم ثنائية الأبعاد. كائن `canvas` هو عنصر DOM الفعلي. يسمح لنا التفاعل معها بالوصول إلى سمات مثل `width` `height` .

هناك عدد قليل من سياقات الرسم المتاحة ، بما في ذلك `webgl` . تعد تقنية WebGL تقنية مختلفة تمامًا ، لذلك سنركز فقط على الرسم ثنائي الأبعاد.

مسارات هي لبنة بناء في رسم `canvas` . راجع صفحة " [المسارات](/articles/canvas/paths) " لمعرفة المزيد.

#### معلومات اكثر:

*   [MDN Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
*   [HTMLCanvasElement.getContext () (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext)