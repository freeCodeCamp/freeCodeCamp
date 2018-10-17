---
title: Title Case a Sentence
localeTitle: العنوان حالة الجملة
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") تذكر استخدام **`Read-Search-Ask`** إذا واجهتك مشكلة. حاول إقران البرنامج ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") واكتب الكود الخاص بك ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":قلم:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":العلم متقلب:") شرح المشكلة:

علينا أن نعيد الجملة مع حالة اللقب. وهذا يعني أن الحرف الأول سيكون دائمًا بالحروف الكبيرة وأن يكون الباقي بأحرف صغيرة.

#### روابط ذات صلة

*   [كائن السلسلة العالمية](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
*   [JS String Prototype ToLowerCase](http://forum.freecodecamp.com/t/javascript-string-prototype-tolowercase/15948)
*   [JS String Prototype ToUpperCase](http://forum.freecodecamp.com/t/javascript-string-prototype-touppercase/15950)
*   [JS String Prototype Replace](http://forum.freecodecamp.com/t/javascript-string-prototype-replace/15942)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 1

*   يجب أن تبدأ بتجزئة السلسلة إلى مجموعة من الكلمات.
*   انقسام الجملة.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 2

*   يجب أن تجعل الكلمة صغيرة قبل إنشاء الحرف الأول بأحرف كبيرة.
*   استخدم طريقة الاستبدال في كل كلمة لتكبير الحرف الأول من كل كلمة.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 3

*   ستحتاج إلى إنشاء سلسلة جديدة بقطع من السلسلة السابقة ، وفي النهاية دمج كل شيء في سلسلة واحدة مرة أخرى.
*   في أسلوب الاستبدال ، قم بإعطاء الوسيطة الأولى كموضع الحرف الأول باستخدام charAt. بالنسبة إلى الوسيطة الثانية ، اكتب دالة لإرجاع الحرف المكتوب عليه كبديل.

> _حاول أن تحل المشكلة الآن_

## تنبيه المفسد!

![علامة تحذير](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**الحل في المستقبل!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":مبتدئ:") الحل الأساسي للكود:

 `String.prototype.replaceAt = function(index, character) { 
    return this.substr(0, index) + character + this.substr(index+character.length); 
 }; 
 
 function titleCase(str) { 
    var newTitle = str.split(' '); 
    var updatedTitle = []; 
    for (var st in newTitle) { 
        updatedTitle[st] = newTitle[st].toLowerCase().replaceAt(0, newTitle[st].charAt(0).toUpperCase()); 
    } 
    return updatedTitle.join(' '); 
 } 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLjU/8)

### شرح الشفرة:

نقوم بتعديل وظيفة `replaceAt` باستخدام النموذج لتسهيل استخدام البرنامج.

تقسيم السلسلة بمسافات بيضاء ، وإنشاء متغير لتعقب العنوان الذي تم تحديثه. ثم نستخدم حلقة لتحويل تحويل الحرف الأول من الكلمة إلى أحرف كبيرة والباقي إلى أحرف صغيرة. من خلال إنشاء سلسلة متسلسلة تتألف من الكلمة بأكملها بأحرف صغيرة مع استبدال الحرف الأول بحرف كبير.

#### روابط ذات صلة

*   [شبيبة لشرح الحلقات](http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained)
*   [JS String Prototype Split](http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944)
*   [JS String Prototype Substr](http://forum.freecodecamp.com/t/javascript-string-prototype-substr/15945)
*   [شبيبة صفيف النموذج](http://forum.freecodecamp.com/t/javascript-array-prototype-join/14292)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":دوار الشمس:") حل الشفرة المتوسطة:

 `function titleCase(str) { 
  var convertToArray = str.toLowerCase().split(" "); 
  var result = convertToArray.map(function(val){ 
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase()); 
  }); 
  return result.join(" "); 
 } 
 
 titleCase("I'm a little tea pot"); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLjU/9)

### شرح الشفرة:

نحن نبذل سلسلة صغيرة بأكملها ومن ثم تحويلها إلى مجموعة. ثم نستخدم وظيفة الخريطة لاستبدال الحرف الصغير بالحروف الكبيرة. وأخيرًا ، نعيد السلسلة باستخدام طريقة `join` .

#### روابط ذات صلة

*   [JS Array Prototype Map](http://forum.freecodecamp.com/t/javascript-array-prototype-map/14294)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") الحل المتقدم للكود:

 `function titleCase(str) { 
  return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase()); 
 } 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLjU/14)

### شرح الشفرة:

يعمل الحل أولاً بتخفيض جميع الأحرف في السلسلة ، ثم يؤدي إلى حرف أول حرف فقط لكل كلمة.

*   أحرف صغيرة السلسلة بأكملها باستخدام `str.toLowerCase()` .
    
*   استبدل كل كلمة "أول حرف بأحرف كبيرة باستخدام `.replace` .
    
*   ابحث عن الحرف في بداية كل كلمة ، أي مطابقة أي حرف بعد `space` أو مطابقة الحرف الأول من السلسلة بأكملها ، باستخدام النمط التالي.
    
*   شرح regex:
    
*   البحث عن كل أحرف غير بيضاء `(\S` )
    
*   في بداية السلسلة `(^)`
    
*   أو بعد أي حرف مسافة بيضاء `(\s)`
    
    *   يبحث معدّل `g` لنمط كلمة آخر من هذا القبيل في السلسلة بأكملها ويستبدلها.
        
    *   يعمل هذا الحل مع الرموز الوطنية والأحرف البارزة كما هو موضح في الأمثلة التالية  
        `international characters:` 'бабушка курит трубку' // -> 'Бабушка Курит Трубку'  
        `accented characters:` 'località àtilacol' // -> 'Località Àtilacol'
        

#### روابط ذات صلة

*   [شبيبة ريجكس الموارد](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": الحافظة:") ملاحظات للمساهمات:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **لا تقم** بإضافة حلول مشابهة لأي حلول موجودة. إذا كنت تعتقد أنها **_مشابهة ولكن أفضل_** ، فحاول دمج (أو استبدال) الحل المشابه الموجود.
*   أضف شرحًا لحلك.
*   تصنيف الحل في واحدة من الفئات التالية - **الأساسي** **والمتوسط** **والمتقدم** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ": traffic_light:")
*   الرجاء إضافة اسم المستخدم الخاص بك فقط إذا قمت بإضافة أي **محتويات رئيسية ذات صلة** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **_لا_** _تزيل أي أسماء مستخدمين حالية_ )

> نرى ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) كمرجع.