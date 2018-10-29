---
title: Canvas Dimensions
localeTitle: أبعاد قماش
---
## أبعاد قماش

تتحكم خصائص `width` `height` في حجم اللوحة. تتحكم هذه السمات في حجم الرسم القماشي ، وليس الحجم المعروض الفعلي.

شاهد [الأبعاد التجريبية](https://codepen.io/alanluo/pen/jLWMmM/) لـ Pen [Canvas](https://codepen.io/alanluo/pen/jLWMmM/) بواسطة Alan Luo ( [alanluo](https://codepen.io/alanluo) ) على [CodePen](https://codepen.io) .

في القلم أعلاه ، تحتوي كل من عناصر `canvas` على نفس الأبعاد المحددة من خلال CSS. ومع ذلك ، يوجد لدى المرتين ضعف الارتفاع الذي تم ضبطه من خلال سمة `height` ، مما يؤدي إلى جعل نفس المستطيل نفسه يصبح نصف الطول.

يمكن أن يسبب ذلك مشاكل عند الرغبة في إنشاء لوحة بحجم ديناميكي. بالنسبة إلى instnace ، قد تحتاج إلى إنشاء لوحة ملء الشاشة ، أو استخدام لوحة رسومات كصورة مصغرة.

لجعل حجم سياق الرسم يتطابق مع الحجم المعروض لعنصر `canvas` ، يتعين علينا فرض هذا في الوقت الفعلي. إحدى الممارسات الشائعة هي وضع المعالج التالي في `onResize` إصغاء `onResize` .

 `// somewhere early in the script 
 var canvas = document.getElementById("canvas"); 
 ... 
 
 window.addEventListener("resize", function() { 
    canvas.setAttribute("width", canvas.scrollWidth); 
    canvas.setAttribute("height", canvas.scrollHeight); 
    console.log(canvas.offsetWidth); 
 }); 
` 

#### معلومات اكثر:

*   [MDN Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)