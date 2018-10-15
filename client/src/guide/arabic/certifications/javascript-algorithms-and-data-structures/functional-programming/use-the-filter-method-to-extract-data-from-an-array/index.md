---
title: Use the filter method to extract data from an array
localeTitle: استخدم طريقة التصفية لاستخراج البيانات من مصفوفة
---
## استخدم طريقة التصفية لاستخراج البيانات من مصفوفة

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 1

يتم حل هذه الحلقتة في خطوتين. أولاً ، يتم استخدام Array.prototype.filter لتصفية الصفيف بحيث يتم تركه مع عناصر تحتوي على imdbRating> 8.0. بعد ذلك ، يمكن استخدام Array.prototype.map لتشكيل الإخراج إلى التنسيق المطلوب.

### حل

 `// Add your code below this line 
 
 var filteredList = watchList.map(function(e) { 
  return {title: e["Title"], rating: e["imdbRating"]} 
 }).filter((e) => e.rating >= 8); 
 
 console.log(filteredList); 
`