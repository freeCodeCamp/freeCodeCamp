---
title: HTML Forms
localeTitle: نماذج HTML
---
## نماذج HTML

في الأساس ، يتم استخدام النماذج لجمع البيانات التي تم إدخالها من قبل المستخدم ، والتي يتم إرسالها بعد ذلك إلى الخادم لمزيد من المعالجة. يمكن استخدامها لأنواع مختلفة من مدخلات المستخدم ، مثل الاسم والبريد الإلكتروني وما إلى ذلك.

يحتوي النموذج على عناصر التحكم التي يتم لفها حول علامات `<form></form>` ، مثل `input` ، والتي يمكن أن تحتوي على أنواع مثل:

*   `text`
*   `email`
*   `password`
*   `checkbox`
*   `radio`
*   `submit`
*   `range`
*   `search`
*   `date`
*   `time`
*   `week`
*   `color`
*   `datalist`

مثال الكود:

 `
<form> 
    <label for="username">Username:</label> 
    <input type="text" name="username" id="username"> 
    <label for="password">Password:</label> 
    <input type="password" name="password" id="password"> 
    <input type="radio" name="gender" value="male">Male<br> 
    <input type="radio" name="gender" value="female">Female<br> 
    <input type="radio" name="gender" value="other">Other 
    <input list="Options"> 
    <datalist id="Options"> 
      <option value="Option1"> 
      <option value="Option2"> 
      <option value="Option3"> 
    </datalist> 
    <input type="submit" value="Submit"> 
    <input type="color"> 
    <input type="checkbox" name="correct" value="correct">Correct 
 </form> 
` 

العناصر الأخرى التي يمكن أن تحتوي على الشكل:

*   `textarea` - هو مربع متعدد الأسطر يستخدم في الغالب لإضافة نص ، على سبيل المثال. تعليق. يتم تعريف حجم النص من خلال عدد الصفوف والأعمدة.
*   `select` - جنبا إلى جنب مع `<option></option>` علامة يختر القائمة المختارة.
*   `button` - يمكن استخدام عنصر الزر لتعريف زر قابل للنقر.

معلومات أخرى حول تنسيقات HTML.

نماذج HTML مطلوبة عندما تريد جمع بعض البيانات من زائر الموقع. على سبيل المثال ، أثناء تسجيل المستخدم ، ترغب في جمع معلومات مثل الاسم وعنوان البريد الإلكتروني وبطاقة الائتمان وما إلى ذلك.

سوف يأخذ النموذج مدخلات من زائر الموقع ثم يقوم بنشره في تطبيق خلفي مثل CGI أو ASP Script أو PHP script الخ. سيقوم التطبيق الخلفي بإجراء المعالجة المطلوبة على البيانات التي تم تمريرها بناءً على منطق عمل محدد داخل تطبيق.

هناك العديد من عناصر النموذج المتاحة مثل الحقول النصية ، حقول النص ، القوائم المنسدلة ، أزرار الاختيار ، مربعات الاختيار ، إلخ.

يتم استخدام علامة HTML `<form>` لإنشاء نموذج HTML وله اتباع بناء الجملة -

`html <form action = "Script URL" method = "GET|POST"> form elements like input, textarea etc. </form>`

إذا لم يتم تحديد طريقة النموذج ، فسيتم افتراض "GET".

يمكن أن تحتوي علامة النموذج أيضًا على سمة باسم "target" تحدد مكان فتح الرابط. يمكن فتحه في علامة تبويب المتصفح أو الإطار أو في النافذة الحالية.

تحدد السمة action الإجراء المراد تنفيذه عند إرسال النموذج. عادةً ، يتم إرسال بيانات النموذج إلى صفحة ويب على URL Script عندما يقوم المستخدم بالنقر فوق الزر إرسال. إذا تم حذف سمة الإجراء ، فسيتم تعيين الإجراء على الصفحة الحالية.