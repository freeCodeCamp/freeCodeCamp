---
title: Use the map Method to Extract Data from an Array
localeTitle: استخدم الخريطة أسلوب استخراج البيانات من صفيف
---
## استخدم الخريطة أسلوب استخراج البيانات من صفيف

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 1

يأخذ array.prototype.map وظيفة كما في المدخلات ويعيد مصفوفة. يتضمن الصفيف الذي تم إرجاعه العناصر التي تتم معالجتها بواسطة الدالة. هذه الوظيفة تأخذ العناصر الفردية كمدخل.

## تنبيه المفسد!

![علامة تحذير](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**الحل في المستقبل!**

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") حل الشفرة المتوسطة:

 `  rating = watchList.map( (item) => ({"title":item["Title"], "rating":item["imdbRating"]}) ); 
` 

\### رمز التوضيح: باستخدام تدوين ES6 ، تتم معالجة كل عنصر في الصفيف لاستخراج العنوان والتقييم. هناك حاجة إلى Parantheses لإرجاع كائن.

#### روابط ذات صلة

*   [وظائف السهم](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)