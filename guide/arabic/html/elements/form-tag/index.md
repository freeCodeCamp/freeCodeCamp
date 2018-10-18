---
title: Form Tag
localeTitle: علامة النموذج
---
## علامة النموذج

يتم استخدام العلامة `<form>` لإنشاء نماذج في HTML لإدخال المستخدم. بمجرد قيام المستخدم بإدخال البيانات وإرسالها ، يتم إرسال البيانات إلى الخادم لتتم معالجتها.

فيما يلي مثال أساسي لكيفية استخدام علامة `<form>` :

 `
<form action="/example.php" method="get"> 
 Name: <input type="text"><br> 
 Email Address: <input type="text"><br> 
 <input type="submit" value="Submit"> 
 </form> 
` 

### سمة العمل

يحتاج كل عنصر `<form>` إلى سمة إجراء. قيمة سمة الإجراء هي عنوان URL على الخادم الذي سيتلقى البيانات في النموذج عند إرسالها.

في ما يلي مثال على استخدام سمة الإجراء:

 `
<form action="http://www.google.com/form.php" method="get"> 
 <p>Controls will appear inside here.</p> 
 </form> 
` 

كما ترى ، يرسل النموذج بياناته إلى عنوان URL [http://www.google.com/from.php](http://www.google.com/from.php) .

### طريقة

يمكن تقديم النماذج باستخدام طريقة GET أو POST.

*   تعتبر طريقة GET مثالية للنماذج الأقصر حيث تقوم بتوصيل البيانات إلى نهاية عنوان URL المحدد داخل سمة الإجراء.
    
*   يعتبر أسلوب POST مثاليًا للنماذج الأطول أو عند إضافة أو حذف المعلومات من قاعدة البيانات. باستخدام طريقة POST ، يتم إرسال قيم النموذج برؤوس HTTP.
    

### عناصر

سيحتوي عنصر `<form>` على الأقل على أحد العناصر التالية المتداخلة داخله:

*   [`<input>`](https://guide.freecodecamp.org/html/elements/input "إدخال")
*   [`<button>`](https://guide.freecodecamp.org/html/elements/button-tag "زر")
*   [`<label>`](https://guide.freecodecamp.org/html/elements/label-tag "ضع الكلمة المناسبة")
*   [`<select>`](https://guide.freecodecamp.org/html/elements/select-tag "تحديد")
*   [`<textarea>`](https://guide.freecodecamp.org/html/elements/textarea-tag "ناحية النص")
*   [`<fieldset>`](https://guide.freecodecamp.org/html/elements/fieldsets-and-legends "مجموعة حقول")

### مصادر

*   [W3 مدارس شكل الموارد](https://www.w3schools.com/tags/tag_form.asp "مدارس W3")
*   [موزيلا شكل الموارد](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "نموذج موزيلا")