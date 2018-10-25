---
title: Class Selector
localeTitle: اختيار الطبقة
---
## اختيار الطبقة

يُستخدم Class Selector في ملف CSS لتطبيق النمط على عناصر HTML مع اسم الفئة المطابق. في HTML ، يمكنك تعيين اسم الفئة لأي عنصر عن طريق إضافة سمة "class".

لتحديد عناصر بفئة محددة ، نستخدم الحرف (.) المسمى كحرف فترة ، مع اسم الفئة.

فمثلا .مركز { محاذاة النص: مركز؛ لون احمر؛ }

هنا ، ستكون جميع عناصر HTML ذات `class="center"` باللون الأحمر ومحاذاة إلى الوسط.

أمثلة:

 `
<h1 class="test">This is a heading 1</h1> 
 <p class="test">This is a paragraph 1</p> 
 <h2 class="test">This is a heading 2</h2> 
 <p class="test">This is a paragraph 2</p> 
 <div class="test2 test3">This is a div 1</div> 
` 

نظرًا لأن اسم الفئة ليس فريدًا ، فإن سمة فئة HTML تجعل من الممكن تعريف أنماط متساوية للعناصر التي تحمل نفس اسم الفئة. **فيما يلي كيفية تحديد الطبقة في ملف CSS لعناصر النمط (لاحظ تدوين.):**

**سيتم تطبيق جميع عناصر `test` الصف باستخدام هذا النمط:**

 `.test { 
  color: green; 
 } 
` 

**سيتم تطبيق جميع عناصر `<p>` `test` الصف باستخدام هذا النمط:**

 `p.test { 
  border: 1px solid black; 
  color: red; 
 } 
` 

**سيتم تطبيق جميع عناصر `<h1>` و `<h2>` `test` الصف باستخدام هذا النمط:**

 `h1.test, h2.test { 
  color: blue; 
 } 
` 

**سيتم تطبيق جميع العناصر التي تشتمل على كلا النوعين `test2` و `test3` مع هذا النمط:**

 `.test2.test3 { 
  color: green; 
 } 
` 

**نصائح: لا توجد مساحة بين فئات متعددة.**

#### معلومات اكثر:

CSS Syntax و Selectors: [w3schools](https://www.w3schools.com/css/css_syntax.asp)