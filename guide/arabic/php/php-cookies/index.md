---
title: PHP Cookies
localeTitle: الكوكيز بي اتش بي
---
# فب كيك

## ما هو ملف تعريف الارتباط؟

وكثيرا ما يستخدم ملف تعريف الارتباط لتحديد هوية المستخدم. إنه ملف صغير يقوم الخادم بتضمينه على كمبيوتر المستخدم. في كل مرة يطلب فيها نفس الكمبيوتر صفحة باستخدام متصفح ، فإنه سيرسل ملف تعريف الارتباط أيضًا.  
تم تصميم ملفات تعريف الارتباط لتكون آلية موثوق بها لتذكر المعلومات الحزينة أو لتسجيل نشاط تصفح المستخدم.  
كما يمكن استخدامها لتذكر القطع التعسفي من المعلومات التي قام المستخدم بإدخالها مسبقًا في حقول النماذج مثل الأسماء والعناوين وكلمات المرور وما إلى ذلك.

## خلق ملفات تعريف الارتباط مع PHP

باستخدام PHP ، يمكنك إنشاء واسترجاع قيم ملفات تعريف الارتباط. يتم إنشاء ملف تعريف الارتباط مع الدالة setcookie ().

`setcookie(name, value, expire, path, domain, secure, httponly);`

معلمة _الاسم_ فقط هي معلمة مطلوبة. جميع المعلمات الأخرى اختيارية.

## PHP إنشاء / استرداد ملف تعريف الارتباط

المثال التالي يقوم بإنشاء ملف تعريف ارتباط يسمى "المستخدم" بقيمة "John Doe".  
تنتهي صلاحية ملف تعريف الارتباط بعد 30 يومًا (86400 \* 30).  
يعني "/" أن ملف تعريف الارتباط متاح في موقع ويب كامل (آخر ، يمكنك تحديد الدليل الذي تفضله).  
ثم نقوم باسترداد قيمة "مستخدم" ملف تعريف الارتباط (باستخدام المتغير الشامل $ \_COOKIE).  
نستخدم أيضًا الدالة isset () لمعرفة ما إذا تم تعيين ملف تعريف الارتباط أم لا:

**مثال:**

 `<?php 
 $cookie_name = "user"; 
 $cookie_value = "John Doe"; 
 setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/");  // 86400 = 1 day 
 ?> 
 <html> 
 <body> 
 
 <?php 
 if(!isset($_COOKIE[$cookie_name])) { 
    echo "Cookie named '" . $cookie_name . "' is not set!"; 
 } else { 
    echo "Cookie '" . $cookie_name . "' is set!<br>"; 
    echo "Value is: " . $_COOKIE[$cookie_name]; 
 } 
 ?> 
 </body> 
 </html> 
` 

**ملاحظة:** يجب أن تظهر الدالة setcookie () **قبل** العلامة.

انتاج:  
تم تعيين Cookie 'user'!  
القيمة هي: John Doe

## PHP تعديل قيمة ملف تعريف الارتباط

لتعديل ملف تعريف الارتباط ، ما عليك سوى تعيين القيمة مرة أخرى باستخدام الدالة setcookie ():

**مثال:**

 `<?php 
 $cookie_name = "user"; 
 $cookie_value = "Jane Porter"; 
 setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/"); 
 ?> 
 <html> 
 <body> 
 
 <?php 
 if(!isset($_COOKIE[$cookie_name])) { 
    echo "Cookie named '" . $cookie_name . "' is not set!"; 
 } else { 
    echo "Cookie '" . $cookie_name . "' is set!<br>"; 
    echo "Value is: " . $_COOKIE[$cookie_name]; 
 } 
 ?> 
 
 </body> 
 </html> 
` 

انتاج:  
تم تعيين Cookie 'user'!  
القيمة هي: أليكس بورتر

## PHP حذف ملف تعريف الارتباط

لحذف ملف تعريف ارتباط ، استخدم الدالة setcookie () ذات تاريخ انتهاء الصلاحية في الماضي:

**مثال:**

 `<?php 
 // set the expiration date to one hour ago 
 setcookie("user", "", time() - 3600); 
 ?> 
 <html> 
 <body> 
 
 <?php 
 echo "Cookie 'user' is deleted."; 
 ?> 
 
 </body> 
 </html> 
` 

انتاج:  
يتم حذف Cookie 'user'.