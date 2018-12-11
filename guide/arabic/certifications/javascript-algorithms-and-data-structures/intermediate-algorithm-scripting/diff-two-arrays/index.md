---
title: Diff Two Arrays
localeTitle: الفرق صفيفتين
---
![](//discourse-user-assets.s3.amazonaws.com/original/2X/2/24043ff6eaf64c58ca15936ec29bd7c22809c9de.gif)

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") تذكر استخدام **`Read-Search-Ask`** إذا واجهتك مشكلة. حاول إقران البرنامج ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") واكتب الكود الخاص بك ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":قلم:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":العلم متقلب:") شرح المشكلة:

تحقق من صفيفين ثم قم بإرجاع صفيف جديد يحتوي فقط على العناصر غير الموجودة في أي من الصفائف الأصلية.

#### روابط ذات صلة

*   [للحلقة (Devdocs)](https://devdocs.io/javascript/statements/for)
*   [Array.prototype.includes (Devdocs)](https://devdocs.io/javascript/global_objects/array/includes)
*   [Array.prototype.filter (Devdocs)](https://devdocs.io/javascript/global_objects/array/filter)
*   [Array.prototype.concat (Devdocs)](https://devdocs.io/javascript/global_objects/array/concat)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 1

دمج القائمة لتسهيل مقارنة الوظائف.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 2

استخدم الفلتر للحصول على المصفوفة الجديدة ، ستحتاج إلى إنشاء وظيفة رد اتصال.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 3

أفضل طريقة للانتقال إلى وظيفة رد الاتصال هي التحقق مما إذا كان الرقم من الصفيف المضمن الجديد ليس في **كلا** المصفوفين الأصليين وإعادته.

> _حاول أن تحل المشكلة الآن_

## تنبيه المفسد!

![علامة تحذير](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**الحل في المستقبل!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":مبتدئ:") الحل الأساسي للكود (الحل الأمني):

 `    function diffArray(arr1, arr2) { 
      var newArr = []; 
 
      function onlyInFirst(first, second) { 
      // Looping through an array to find elements that don't exist in another array 
        for (var i=0;i<first.length;i++) { 
          if (second.indexOf(first[i]) === -1) { 
            // Pushing the elements unique to first to newArr 
            newArr.push(first[i]); 
          } 
        } 
      } 
 
      onlyInFirst(arr1, arr2); 
      onlyInFirst(arr2, arr1); 
 
      return newArr; 
    } 
 
    diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLme/0)

### شرح الشفرة:

قراءة التعليقات في الكود.

#### روابط ذات صلة

*   [للحلقة (Devdocs)](https://devdocs.io/javascript/statements/for)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":دوار الشمس:") حل الشفرة الوسيطة (الحل التعريفي):

 `    function diffArray(arr1, arr2) { 
      return arr1 
        .concat(arr2) 
        .filter( 
            item => !arr1.includes(item) || !arr2.includes(item) 
        ) 
    } 
 
    diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CNYb/0)

### شرح الشفرة:

اشرح الحل هنا وأضف أي روابط ذات صلة

#### روابط ذات صلة

*   [Array.prototype.concat (Devdocs)](https://devdocs.io/javascript/global_objects/array/concat)
*   [Array.prototype.filter (Devdocs)](https://devdocs.io/javascript/global_objects/array/filter)
*   [Array.prototype.includes (Devdocs)](https://devdocs.io/javascript/global_objects/array/includes)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") الحل المتقدم للكود (الحل التعريفي):

 `function diffArray(arr1, arr2) { 
    return arr1 
      .filter(el => !arr2.includes(el)) 
      .concat( 
        arr2.filter(el => !arr1.includes(el)) 
      ) 
 } 
 
 diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CNYU/0)

### شرح الشفرة:

اشرح الحل هنا وأضف أي روابط ذات صلة

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") البديل المتقدم للحلول البرمجية (الحل التعريفي):

 `function diffArray(arr1, arr2) { 
  return [ 
    ...diff(arr1, arr2), 
    ...diff(arr2, arr1) 
  ] 
 
  function diff(a, b) { 
    return a.filter(item => b.indexOf(item) === -1); 
  } 
 } 
` 

#### روابط ذات صلة

*   [Array.prototype.includes (Devdocs)](https://devdocs.io/javascript/global_objects/array/includes)
*   [Array.prototype.filter (Devdocs)](https://devdocs.io/javascript/global_objects/array/filter)
*   [Array.prototype.concat (Devdocs)](https://devdocs.io/javascript/global_objects/array/concat)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": الحافظة:") ملاحظات للمساهمات:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **لا تقم** بإضافة حلول مشابهة لأي حلول موجودة. إذا كنت تعتقد أنها **_مشابهة ولكن أفضل_** ، فحاول دمج (أو استبدال) الحل المشابه الموجود.
*   أضف شرحًا لحلك.
*   تصنيف الحل في واحدة من الفئات التالية - **الأساسي** **والمتوسط** **والمتقدم** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ": traffic_light:")
*   الرجاء إضافة اسم المستخدم الخاص بك فقط إذا قمت بإضافة أي **محتويات رئيسية ذات صلة** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **_لا_** _تزيل أي أسماء مستخدمين حالية_ )

> نرى ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) كمرجع.