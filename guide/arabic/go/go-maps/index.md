---
title: Go Maps
localeTitle: الذهاب خرائط
---
## الذهاب خرائط

خريطة تسمى " _قاموس"_ بلغات أخرى ، ومفاتيح "خرائط" للقيم. يتم الإعلان عن خريطة مثل هذا:

 `var m map[Key]Value 
` 

لا تحتوي هذه الخريطة على مفاتيح ولا يمكن إضافة مفاتيح إليها. لإنشاء خريطة ، استخدم وظيفة `make` :

 `m = make(map[Key]Value) 
` 

يمكن استخدام أي شيء كمفتاح أو كقيمة.

### تعديل الخرائط

في ما يلي بعض الإجراءات الشائعة في الخرائط.

#### إدخال / تغيير العناصر

إنشاء أو تغيير عنصر `foo` في الخريطة `m` :

 `m["foo"] = bar 
` 

#### الحصول على العناصر

احصل على عنصر مع مفتاح `foo` في الخريطة `m` :

 `element = m["foo"] 
` 

#### حذف العناصر

حذف عنصر مع مفتاح `foo` في الخريطة `m` :

 `delete(m, "foo") 
` 

#### تحقق مما إذا كان المفتاح قد تم استخدامه

تحقق من استخدام مفتاح `foo` في الخريطة `m` :

 `element, ok = m["foo"] 
` 

إذا كان `ok` `true` ، فقد تم استخدام المفتاح ويحمل `element` القيمة عند `m["foo"]` . إذا كان `ok` `false` ، فهذا يعني أن المفتاح لم يتم استخدامه وأن `element` يحتفظ بقيمه الصفرية.

### الخريطة حرفية

يمكنك إنشاء حرفيات الخرائط مباشرة:

 `var m = map[string]bool{ 
    "Go": true, 
    "JavaScript":false, 
 } 
 
 m["Go"] // true 
 m["JavaScript"] = true // Set Javascript to true 
 delete(m, "JavaScript") // Delete "JavaScript" key and value 
 language, ok = m["C++"] // ok is false, language is bool's zero-value (false) 
` 

#### معلومات اكثر:

*   [جولة في الذهاب](https://tour.golang.org/moretypes/19)
*   [الذهاب عن طريق المثال](https://gobyexample.com/maps)
*   [Golang كتاب](https://www.golang-book.com/books/intro/6#section3)
*   [مواصفات لغة برمجة Go](https://golang.org/ref/spec#Making_slices_maps_and_channels)