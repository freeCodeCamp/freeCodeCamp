---
title: Convert HTML Entities
localeTitle: تحويل كيانات HTML
---
![كيانات HTML & "<>"](//discourse-user-assets.s3.amazonaws.com/original/2X/f/fc44d1dfbd3910e574cdedb0f05162f65b4cb7c4.jpg)

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") تذكر استخدام **`Read-Search-Ask`** إذا واجهتك مشكلة. حاول إقران البرنامج ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") واكتب الكود الخاص بك ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":قلم:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":العلم متقلب:") شرح المشكلة:

*   يجب عليك إنشاء برنامج يقوم بتحويل كيانات HTML من السلسلة إلى كيانات HTML الخاصة بها. لا يوجد سوى عدد قليل حتى تتمكن من استخدام أساليب مختلفة.

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 1

*   يمكنك استخدام تعبيرات عادية ومع ذلك لم أكن في هذه الحالة.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 2

*   ستستفيد من مخطط يحتوي على جميع كيانات html حتى تعرف أيها الكيانات المناسبة لوضعها.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 3

*   يجب فصل السلسلة والعمل مع كل حرف لتحويل الأحرف الصحيحة ثم الانضمام إلى كل شيء احتياطيًا.

> _حاول أن تحل المشكلة الآن_

## تنبيه المفسد!

![علامة تحذير](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**الحل في المستقبل!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":مبتدئ:") الحل الأساسي للكود:

 `    function convertHTML(str) { 
      // Split by character to avoid problems. 
 
      var temp = str.split(''); 
 
      // Since we are only checking for a few HTML elements I used a switch 
 
      for (var i = 0; i < temp.length; i++) { 
        switch (temp[i]) { 
          case '<': 
            temp[i] = '&lt;'; 
            break; 
          case '&': 
            temp[i] = '&amp;'; 
            break; 
          case '>': 
            temp[i] = '&gt;'; 
            break; 
          case '"': 
            temp[i] = '&quot;'; 
            break; 
          case "'": 
            temp[i] = "&apos;"; 
            break; 
        } 
      } 
 
      temp = temp.join(''); 
      return temp; 
    } 
 
    //test here 
    convertHTML("Dolce & Gabbana"); 
` 

### شرح الشفرة:

اشرح الحل هنا وأضف أي روابط ذات صلة

#### روابط ذات صلة

*   [str.split ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
*   [arr.join ()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
*   [بيان التبديل](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/switch)

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLnP/0)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":دوار الشمس:") حل الشفرة المتوسطة:

 `function convertHTML(str) { 
 //Chaining of replace method with different arguments 
  str = str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,"&apos;"); 
 return str; 
 } 
 
 // test here 
 convertHTML("Dolce & Gabbana"); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLnQ/0)

### شرح الشفرة:

اشرح الحل هنا وأضف أي روابط ذات صلة

#### روابط ذات صلة

*   [str.replace ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
*   [التعبيرات العادية](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") الحل المتقدم للكود:

 `    function convertHTML(str) { 
      // Use Object Lookup to declare as many HTML entities as needed. 
      const htmlEntities={ 
        '&':'&amp;', 
        '<':'&lt;', 
        '>':'&gt;', 
        '"':'&quot;', 
        '\'':"&apos;" 
      }; 
      //Use map function to return a filtered str with all entities changed automatically. 
      return str.split('').map(entity => htmlEntities[entity] || entity).join(''); 
    } 
 
    // test here 
    convertHTML("Dolce & Gabbana"); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLnR/0)

### شرح الشفرة:

*   قم بإنشاء كائن لاستخدام وظيفة البحث للعثور على الأحرف بسهولة.
*   تقسيم السلسلة الأصلية حسب الأحرف واستخدام الخريطة للتحقق من كيان html الذي تم تغييره أو استخدام نفس الوحدة. بدلا من ذلك يمكنك استخدام Regex `str.replace(/&|<|>|"|'/gi` .
*   تتم إضافة الوظيفة التي تقوم بإرجاع الكيان المحول أو الأصل إذا لم يكن هناك تحويل. إذا قمت بالانتقال إلى مسار regex ، فعليك فقط إرجاع النتائج المتطابقة. `return html[entity];`
*   وأخيرًا نشارك جميع الشخصيات مرة أخرى.

**لاحظ** أنه إذا قمت بالانتقال إلى مسار regex فإنك لن تحتاج إلى الانضمام إلى أي شيء ، فقط تأكد من إرجاع العملية بأكملها أو حفظها إلى متغير ثم إعادتها.

#### روابط ذات صلة

*   [str.split ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
*   [arr.map ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
*   [arr.join ()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": الحافظة:") ملاحظات للمساهمات:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **لا تقم** بإضافة حلول مشابهة لأي حلول موجودة. إذا كنت تعتقد أنها **_مشابهة ولكن أفضل_** ، فحاول دمج (أو استبدال) الحل المشابه الموجود.
*   أضف شرحًا لحلك.
*   تصنيف الحل في واحدة من الفئات التالية - **الأساسي** **والمتوسط** **والمتقدم** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ": traffic_light:")
*   الرجاء إضافة اسم المستخدم الخاص بك فقط إذا قمت بإضافة أي **محتويات رئيسية ذات صلة** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **_لا_** _تزيل أي أسماء مستخدمين حالية_ )

> نرى ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) كمرجع.