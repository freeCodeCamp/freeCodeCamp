---
title: Responsive Web Design
localeTitle: تصميم الويب سريع الاستجابة
---
## تصميم الويب سريع الاستجابة

تصميم الويب السريع الاستجابة هو مفهوم تصميم صفحات الويب التي تتكيف مع أحجام الشاشة المختلفة. عادة ما يتضمن استخدام تخطيطات مختلفة وأحجام الخطوط وموضع قوائم التنقل.

لإنشاء صفحة ويب متجاوبة ، يستخدم CSS عادةً في تصميم عناصر HTML الخاصة بك. بعض الطرق الشائعة في CSS المستخدمة لإنشاء تصميمات ويب متجاوبة هي:

1.  كتابة [استعلامات الوسائط](https://guide.freecodecamp.org/css/media-queries)
2.  استخدام [أطر CSS](https://guide.freecodecamp.org/css/css-frameworks) الموجودة مسبقًا
3.  باستخدام [نموذج Flexbox](https://guide.freecodecamp.org/css/layout/flexbox)
4.  باستخدام [CSS الشبكة](https://guide.freecodecamp.org/css/layout/grid-layout)

### 1\. استعلامات الوسائط

تخبر استعلامات الوسائط متصفح الويب بتجاهل أو استبدال خصائص صفحة الويب استنادًا إلى سمات معينة مثل عرض الشاشة أو ما إذا كان المستخدم يطبع.

 `@media (query) { 
  /* The browser will use the CSS rules within the curly braces when the query is true */ 
 } 
` 

يقوم المثال التالي بتعيين `padding-left` و `padding-right` داخل الطبقة الداخلية `more-padding` عندما يكون عرض الشاشة أقل من أو يساوي 768 بكسل.

 `@media screen and (max-width: 768px) { 
    .more-padding { 
        padding-left: 10px; 
        padding-right: 10px; 
    } 
 } 
` 

### 2\. أطر CSS

تشتمل أطر CSS مثل [Bootstrap](https://www.getbootstrap.com/) و [Material Design Lite](https://getmdl.io/) و [Foundation](https://foundation.zurb.com/) على طبقات CSS مضمنة مسبقًا تجعل ترميز التصميم سريع الاستجابة أكثر بساطة. تعمل هذه الفئات مثل فئات HTML القياسية.

في هذا المثال ، يحدد `col-md-9` و `col-sm-6` عرض علامة `<div>` استنادًا إلى ما إذا كانت الشاشة صغيرة أم متوسطة.

 `
<div class="col-12 col-md-6"></div> 
` 

يقسم إطار Bootstrap الصف إلى اثني عشر عمودًا. في المثال أعلاه ، سوف ينتشر `<div>` عبر تسعة أو ستة منهم. يعد نظام الشبكة ، الموضح أدناه ، أمرًا أساسيًا في كيفية تسهيل Bootstrap للتصميم سريع الاستجابة.

![Grid Example](https://www.javatpoint.com/bootstrappages/images/bootstrapgrid.jpg "مثال الشبكة الأساسية")

### معلومات اكثر:

1.  [CSS Flexbox أكمل البرنامج التعليمي في 8 دقائق](https://medium.freecodecamp.org/css-flexbox-interactive-tutorial-in-8-minutes-including-cheat-sheet-6214e00de3d2)
2.  [قسم CSS من Freecodecamp](https://guide.freecodecamp.org/css) .
3.  [البرنامج التعليمي CSS Flexbox بواسطة CodingTutorials360](https://www.youtube.com/watch?v=zBjUEDzK-ow)