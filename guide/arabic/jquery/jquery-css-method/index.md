---
title: CSS Method
localeTitle: طريقة CSS
---
## طريقة CSS

يحصل الأسلوب jQuery `.css()` على قيمة خاصية نمط محسوب للعنصر الأول في مجموعة العناصر المتطابقة أو قم بتعيين واحد أو أكثر من خصائص CSS لكل عنصر متطابق.

### الحصول على

لإرجاع قيمة خاصية CSS محددة ، استخدم بناء الجملة التالي:

 `    $(selector).css(propertyName); 
` 

على سبيل المثال:

 `    $('#element').css('background'); 
` 

ملاحظة: هنا يمكننا استخدام أي css selector على سبيل المثال: element (HTML Tag selector) و .element (Class Selector) و #element (ID selector).

### ضبط

لتعيين خاصية CSS محددة ، استخدم بناء الجملة التالي:

 `    $(selector).css(propertyName,value); 
` 

على سبيل المثال:

 `    $('#element').css('background','red'); 
` 

لتعيين خصائص CSS متعددة ، سيكون عليك استخدام بناء الجملة الحرفية للكائن مثل هذا:

 `    $('#element').css({ 
        'background': 'gray', 
        'color': 'white' 
    }); 
` 

إذا كنت ترغب في تغيير خاصية تحمل أكثر من كلمة واحدة ، فارجع إلى هذا المثال:

لتغيير `background-color` عنصر ما

 `    $('#element').css('background-color', 'gray'); 
` 

#### معلومات اكثر:

التوثيق: [api.jquery](http://api.jquery.com/css/)