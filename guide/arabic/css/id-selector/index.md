---
title: ID Selector
localeTitle: محدد الهوية
---
## محدد الهوية

يطبق محدد معرف CSS الأنماط على عنصر html محدد. يجب أن يطابق محدد معرّف CSS سمة معرف عنصر HTML. على عكس الفصول الدراسية ، والتي يمكن تطبيقها على عناصر متعددة في جميع أنحاء الموقع ، لا يمكن تطبيق معرف معين إلا على عنصر واحد فقط على الموقع. سيحل معرّف CSS محل خصائص CSS Class. لتحديد عنصر بمعرف محدد ، اكتب رمز الهاش (#) ، متبوعًا بمعرّف العنصر.

### بناء الجملة

 `#specified_id { /* styles */ } 
` 

يمكنك دمج محدد المعرّف مع أنواع أخرى من المحددات لتمييز عنصر محدد جدًا.

 `section#about:hover { color: blue; } 
 
 div.classname#specified_id { color: green; } 
` 

### ملاحظة حول المعرفات

يجب تجنب معرف عند التصميم إن أمكن. نظرًا لأنه يتمتع بدقة عالية ويمكن تجاوزه فقط في حالة تضمين أنماط ، أو إضافة أنماط إلى `<style>` . يتجاوز وزن محددات تحديد الفئة ومحددات النوع.

تذكر ، يجب أن يتطابق محدد ID مع سمة معرف عنصر HTML.

 `
<div id="specified_id"><!-- content --></div> 
` 

### النوعية

تتميز محددات الهوية بدقة عالية مما يجعل من الصعب تجاوزها. تتسم الصفات بخصوصية أقل بشكلٍ كبير وهي عمومًا الطريقة المفضلة لعناصر النمط لتجنب مشكلات الخصوصية. [خصوصية على MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)

#### معلومات اكثر:

[تحدي freeCodeCamp - تعيين معرف عنصر](https://www.freecodecamp.org/challenges/set-the-id-of-an-element)

[تحدي freeCodeCamp - استخدام سمة المعرف إلى نمط عنصر](https://www.freecodecamp.org/challenges/use-an-id-attribute-to-style-an-element)

[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/ID_selectors)