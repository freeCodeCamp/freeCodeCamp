---
title: Background Color Property
localeTitle: خاصية لون الخلفية
---
## خاصية لون الخلفية

يمكنك استخدام `background-color` خاصية لتعيين لون الخلفية عنصر. يمكنك إما استخدام قيمة اللون (اسم اللون ، القيمة السداسية العشرية ، قيمة RGB / RGBA ، قيمة HSL / HSLA) أو الكلمة الرئيسية `transparent` .

**مثال:**

 `body { 
    background-color: crimson; 
 } 
 
 div { 
    background-color: #ffffff; 
 } 
 
 .myClass { 
    background-color: rgba(0, 0, 0, 0.5); 
 } 
` 

#### قيم الملكية:

`background-color: color | transparent | initial | inherit;`

`color` - يحدد لون الخلفية (اسم اللون ، القيمة السداسية العشرية ، قيمة RGB / RGBA ، قيمة HSL / HSLA).

`transparent` - القيمة الافتراضية. لتعيين لون الخلفية على أنه شفاف.

`initial` - تعيين هذه الخاصية إلى قيمتها الأولية (القيمة الافتراضية).

`inherit` - يتوارث هذه الخاصية من العنصر الرئيسي.

#### معلومات اكثر:

[MDN web docs](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color?v=b)