---
title: Constants
localeTitle: الثوابت
---
## الثوابت

الثوابت هي نوع من المتغيرات في PHP. تأخذ الدالة `define()` لتعيين ثابت ثلاث حجج - اسم المفتاح ، وقيمة المفتاح ، و Boolean (true أو false) الذي يحدد ما إذا كان اسم المفتاح غير حساس لحالة الأحرف (false افتراضياً). لا يمكن تغيير قيمة الثابت بمجرد تعيينه. يتم استخدامه للقيم التي نادراً ما تتغير (على سبيل المثال كلمة مرور قاعدة البيانات أو مفتاح api).

### نطاق

من المهم معرفة أنه على عكس المتغيرات ، فإن الثوابت دائمًا لها نطاق عالمي ويمكن الوصول إليها من أي وظيفة في البرنامج النصي.

### مثال

 `<?php 
 define("freeCodeCamp", "Learn to code and help nonprofits", false); 
 echo freeCodeCamp; 
` 

**انتاج:**

 `Learn to code and help nonprofits 
` 

#### معلومات اكثر:

*   [ثوابت php.net دليل](https://secure.php.net/manual/en/language.constants.php)
*   [تعريف php.net ()](https://secure.php.net/manual/en/function.define.php)