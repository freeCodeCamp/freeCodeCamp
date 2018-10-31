---
title: CSS3 Backgrounds
localeTitle: خلفيات CSS3
---
## خلفيات CSS3

وCSS `background` يستخدم الخاصية المختصرة لتحديد مضاعفات خصائص مثل:

`background-color` ، `background-image` `background-repeat` `background-attachment` ، `background-attachment` `background-position`

### لون الخلفية

على `background-color` تحدد الخاصية لون الخلفية عنصر.

 `   background-color : #F00; 
` 

### الصورة الخلفية

تحدد خاصية `background-image` لاستخدامها كخلفية لأحد العناصر. بشكل افتراضي ، تكرر الصورة نفسها لتغطية كامل سطح العنصر.

 `   background-image: url("GitHub-Mark.png"); 
` 

### صورة الخلفية - التكرار

افتراضيًا ، تتكرر خاصية `background-image` على المحور X و Y. إذا كنت تريد تعيين محور ، مثل X axis ، فاستخدم نوع خاصية `background-repeat` :

 `   background-image: url("GitHub-Mark.png"); 
   background-repeat: repeat-x; 
` 

ولكن في بعض الأحيان لا تريد أن يكون لديك خلفية على جميع الأسطح ، يجب عليك تحديدها بكتابة:

 `   background-image: url("GitHub-Mark.png"); 
   background-repeat: no-repeat; 
` 

### صورة الخلفية - الوظيفة

يمكنك تحديد موضع الخلفية بكتابة:

 `   background-image: url("GitHub-Mark.png"); 
   background-repeat: no-repeat; 
   background-position : left bottom; 
` 

سيعين لك خلفية في الجزء السفلي الأيمن من العنصر.

### صورة الخلفية - موقف ثابت

إذا كنت ترغب في الحصول على صورة خلفية لن يتم تمريرها مع بقية الصفحة ، فيمكنك استخدام خاصية `background-attachement` :

 `   background-image: url("GitHub-Mark.png"); 
   background-repeat: no-repeat; 
   background-position: left bottom; 
   background-attachment: fixed; 
` 

### خاصية الاختزال

يمكنك تمرير جميع الخصائص في `background` خاصية فائقة واحدة:

 `   background: #F00 url("GitHub-Mark.png") no-repeat fixed left bottom; 
` 

عند استخدام خاصية الاختزال ، يجب عليك احترام هذا الطلب:

1.  لون الخلفية
2.  الصورة الخلفية
3.  تكرار الخلفية
4.  مرفق الخلفية
5.  موقف الخلفية

لا يهم ما إذا كان هناك عنصر واحد مفقود ، طالما أنك تحترم الطلب:

 `   background: url("GitHub-Mark.png") no-repeat left bottom; 
` 

سيعمل هذا حتى إذا كان اللون والمرفق مفقود.

#### معلومات اكثر:

[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/background)