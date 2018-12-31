---
title: Profile Lookup
localeTitle: بحث الملف الشخصي
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") تذكر استخدام **`Read-Search-Ask`** إذا واجهتك مشكلة. حاول إقران البرنامج ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") واكتب الكود الخاص بك ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":قلم:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":العلم متقلب:") شرح المشكلة:

لدينا مجموعة من الكائنات التي تمثل أشخاصًا مختلفين في قوائم جهات الاتصال الخاصة بنا.

`lookUpProfile()` التي تأخذ **الاسم الأول** و خاصية ( **prop** ) **كوسائط** قد تمت كتابتها مسبقًا نيابة عنك.

يجب التحقق من الوظيفة إذا كان **الاسم الأول** هو **الاسم الأول** جهة اتصال الفعلي وممتلكات معينة **(دعم)** هو خاصية من هذا الاسم.

إذا كان كلاهما صحيحًا ، فأعد _قيمة_ هذه الخاصية.

إذا كان **الاسم الأول** لا يتوافق مع أي جهات اتصال ، فعندئذ `No such contact` ترجع `No such contact` .

إذا كان **البروب** لا يتوافق مع أي خصائص صالحة ، فعندئذ `No such property` ترجع `No such property` .

*   تغيير الرمز أدناه `// Only change code below this line` وحتى `// Only change code above this line` .
*   تأكد من أنك تقوم بتحرير داخل وظيفة `lookUpProfile()` .
    *   تتضمن هذه الوظيفة معلمتين ، **firstName** و **prop** .
*   يجب أن تبحث الدالة من خلال قائمة **جهات الاتصال** لمعلمة **firstName** المحددة.
    *   في حالة وجود تطابق موجود ، يجب أن تبحث الدالة عن معلمة **prop** المقدمة.
    *   إذا تم **العثور على** كل من **firstName** و **prop** المقترن ، يجب عليك إرجاع قيمة **prop** .
    *   إذا تم العثور على **firstName ولم** يتم العثور على **دعم** مقترن ، يجب عليك إرجاع `No such property` .
*   إذا لم يتم العثور على **الاسم الأول** في أي مكان، يجب أن تعيد `No such contact` .

#### روابط ذات صلة

*   [التحدي: الوصول إلى خصائص الكائنات مع تدرج قوس](http://www.freecodecamp.com/challenges/accessing-objects-properties-with-bracket-notation)
*   [التحدي: تكرار مع JavaScript For Loops](http://www.freecodecamp.com/challenges/iterate-with-javascript-for-loops)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 1

استخدم حلقة `for` للتنقل بين قائمة **جهات الاتصال** .

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 2

استخدام متداخلة `if` تصريح لالاختيار أولا إذا يطابق **الاسم الأول،** ومن ثم يتحقق `if` المباريات **دعامة.**

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 3

ترك لكم `return "No such contact"` من `for` حلقة كما التقاط كل النهائي.

> _حاول أن تحل المشكلة الآن_

## تنبيه المفسد!

![علامة تحذير](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**الحل في المستقبل!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":مبتدئ:") الحل الأساسي للكود:

 `for (var x = 0; x < contacts.length; x++){ 
    if (contacts[x].firstName === name) { 
        if (contacts[x].hasOwnProperty(prop)) { 
            return contacts[x][prop]; 
        } else { 
            return "No such property"; 
        } 
    } 
 } 
 return "No such contact"; 
` 

### شرح الشفرة:

*   و `for` حلقة يدير، ابتداء من الساعة الكائن الأول في قائمة **الأسماء.**
*   إذا **تطابق** المعلمة **firstName** تمريرها في الدالة قيمة المفتاح `"firstName"` في الكائن الأول ، تمرير عبارة `if` .
*   ثم ، نستخدم `.hasOwnProperty()` طريقة (يتحقق إذا كان هناك خاصية معينة وترجع قيمة منطقية) **بالدعم** كوسيطة. إذا كان صحيحًا ، يتم إرجاع قيمة **الداعم** .
    *   في `if` فشل العبارة الثانية في `if` عدم إرجاع `No such property` .
*   في `if` فشل العبارة الأولى في `if` استمرار حلقة `for` إلى الكائن التالي في قائمة **جهات الاتصال** .
*   إذا لم تطابق المعلمة **الاسم الأول** من قبل **الاتصالات** النهائية الاعتراض، و `for` مخارج حلقة و `No such contact` يتم إرجاعها.

**مثال تشغيل**

*   `lookUpProfile("Akira","likes");` أشواط.
*   تتم مطابقة `"Akira"` مع المفتاح `"firstName"` في الكائن الأول ، لذا فإن العبارة `if` ترجع true.
*   تم العثور على `"likes"` داخل الكائن الأول ، لذا فإن العبارة الثانية `if` صحيحة.
*   يتم إرجاع قيمة `"likes"` - `"Pizza", "Coding", "Brownie Points"` .

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": الحافظة:") ملاحظات للمساهمات:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **لا تقم** بإضافة حلول مشابهة لأي حلول موجودة. إذا كنت تعتقد أنها **_مشابهة ولكن أفضل_** ، فحاول دمج (أو استبدال) الحل المشابه الموجود.
*   أضف شرحًا لحلك.
*   تصنيف الحل في واحدة من الفئات التالية - **الأساسي** **والمتوسط** **والمتقدم** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ": traffic_light:")
*   الرجاء إضافة اسم المستخدم الخاص بك فقط إذا قمت بإضافة أي **محتويات رئيسية ذات صلة** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **_لا_** _تزيل أي أسماء مستخدمين حالية_ )

> نرى ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") **`Wiki Challenge Solution Template`** كمرجع.