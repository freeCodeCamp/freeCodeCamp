---
id: 587d78ad367417b2b2512af8
title: Align Elements Using the align-items Property
challengeType: 0
videoUrl: ''
localeTitle: محاذاة العناصر باستخدام خاصية عناصر المحاذاة
---

## Description
<section id="description"> يشبه الخاصية <code>align-items</code> <code>justify-content</code> . تذكر أن الخاصية <code>justify-content</code> بمحاذاة عناصر مرنة على طول المحور الرئيسي. بالنسبة للصفوف ، فإن المحور الرئيسي هو خط أفقي ، وبالنسبة للأعمدة فهو خط عمودي. تحتوي الحاويات المرنة أيضًا على <strong>محور متقاطع</strong> وهو عكس المحور الرئيسي. ﺑﺎﻟﻧﺳﺑﺔ ﻟﻟﺻﻔوف ، ﯾﮐون اﻟﻣﺣور اﻟﻣﺗﻘﺎطﻊ رأﺳﯾًﺎ وﻟﻸﻋﻣدة ، ﯾﮐون اﻟﻣﺣور اﻟﻣﺗﻘﺎطﻊ أﻓﻘﻲ. تقدم CSS على <code>align-items</code> الملكية لمحاذاة العناصر المرنة على طول المحور العرضي. بالنسبة إلى الصف ، تُعلم CSS كيفية دفع العناصر في الصف بأكمله لأعلى أو لأسفل داخل الحاوية. وللعمود ، كيفية دفع جميع العناصر إلى اليسار أو اليمين داخل الحاوية. تتضمن القيم المختلفة المتاحة <code>align-items</code> ما يلي: <ul style=";text-align:right;direction:rtl"><li style=";text-align:right;direction:rtl"> <code>flex-start</code> : محاذاة العناصر إلى بداية الحاوية المرنة. للصفوف ، يقوم هذا بمحاذاة العناصر إلى أعلى الحاوية. للأعمدة ، يقوم هذا بمحاذاة العناصر إلى يسار الحاوية. </li><li style=";text-align:right;direction:rtl"> <code>flex-end</code> : محاذاة العناصر إلى نهاية الحاوية المرنة. للصفوف ، يقوم هذا بمحاذاة العناصر إلى أسفل الحاوية. للأعمدة ، يقوم هذا بمحاذاة العناصر إلى يمين الحاوية. </li><li style=";text-align:right;direction:rtl"> <code>center</code> : محاذاة العناصر إلى المركز. بالنسبة للصفوف ، تتم محاذاة العناصر رأسياً (المساحة المتساوية فوق العناصر وأسفلها). بالنسبة إلى الأعمدة ، تتم محاذاة هذه العناصر أفقياً (تساوي المسافة بين يمين ويسار العناصر). </li><li style=";text-align:right;direction:rtl"> <code>stretch</code> : تمتد العناصر لملء الحاوية المرن. على سبيل المثال ، يتم توسيع عناصر الصفوف لملء الحاوية المرنة من أعلى لأسفل. </li><li style=";text-align:right;direction:rtl"> <code>baseline</code> : محاذاة العناصر إلى خطوط الأساس الخاصة بهم. الأساس هو مفهوم نصي ، فكر فيه على أنه الخط الذي تجلس عليه الحروف. </li></ul></section>

## Instructions
<section id="instructions"> مثال يساعد على إظهار هذه الخاصية في العمل. أضف <code>align-items</code> الخاصية CSS إلى عنصر <code>#box-container</code> ، وأعطها قيمة المركز. <strong>علاوة</strong> <br> جرّب الخيارات الأخرى <code>align-items</code> في محرر الشفرات لمعرفة اختلافاتهم. لكن لاحظ أن قيمة المركز هي الوحيدة التي ستجتاز هذا التحدي. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'يجب أن <code>#box-container</code> عنصر <code>#box-container</code> خاصية <code>align-items</code> ضبطها على قيمة المركز.'
    testString: 'assert($("#box-container").css("align-items") == "center", "The <code>#box-container</code> element should have an <code>align-items</code> property set to a value of center.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 500px;

  }
  #box-1 {
    background-color: dodgerblue;
    width: 200px;
    font-size: 24px;
  }

  #box-2 {
    background-color: orangered;
    width: 200px;
    font-size: 18px;
  }
</style>

<div id="box-container">
  <div id="box-1"><p>Hello</p></div>
  <div id="box-2"><p>Goodbye</p></div>
</div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
