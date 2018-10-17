---
title: Create Reusable CSS with Mixins
localeTitle: إنشاء CSS القابل لإعادة الاستخدام مع Mixins
---
## إنشاء CSS القابل لإعادة الاستخدام مع Mixins

`Mixin` هي واحدة من الميزات الرائعة التي تسمح للمطورين باستخدام `SASS` بدلاً من `CSS` عادي ، حيث تتيح لك الحصول على `Function` داخل ورقة الأنماط الخاصة بك!

لإنشاء مزيج يجب اتباع النظام التالي:

 `@mixin custom-mixin-name($param1, $param2, ....) { 
    // CSS Properties Here... 
 } 
` 

ولاستخدامه في العنصر (العناصر) ، يجب عليك استخدام `@include` يليه اسم `Mixin` الخاص بك ، على النحو التالي:

 `element { 
    @include custom-mixin-name(value1, value2, ....); 
 } 
` 

* * *

### \[مثال\] اكتب `Text Shadow` في `SASS`

**الهدف:** تطبيق `Text Shadow` مخصص على عنصر `h4`

#### HTML

 `
<h4>This text needs a Shadow!</h4> 
` 

#### SASS _(مكتوبة في بناء جملة SCSS)_

 `@mixin custom-text-shadow($offsetX, $offsetY, $blurRadius, $color) { 
    -webkit-text-shadow: $offsetX, $offsetY, $blurRadius, $color; 
    -moz-text-shadow: $offsetX, $offsetY, $blurRadius, $color; 
    -ms-text-shadow: $offsetX, $offsetY, $blurRadius, $color; 
    text-shadow: $offsetX, $offsetY, $blurRadius, $color; 
 } 
 h2 { 
    @include custom-text-shadow(1px, 3px, 5px, #999999) 
 } 
`