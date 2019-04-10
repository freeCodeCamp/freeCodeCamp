---
title: Form Inputs
localeTitle: مدخلات النموذج
---
## مدخلات النموذج

يدعم Bootstrap عناصر تحكم النموذج التالية:

1.  إدخال
2.  تيكستاريا
3.  مربع
4.  راديو
5.  تحديد

## مثال على قصاصات الشفرات

#### 1\. الإدخال

يدعم Bootstrap جميع أنواع مدخلات HTML5: نص ، وكلمة مرور ، و datetime ، و datetime-local ، و date ، و month ، و time ، و week ، و number ، و email ، و url ، و search ، و tel ، و color.

**ملاحظة: لن يتم تصميم المدخلات بالكامل إذا لم يتم الإعلان عن نوعها بشكل صحيح!**

يحتوي المثال التالي على عنصرين إدخال ؛ واحد من نوع النص وواحد من نوع كلمة المرور:

 `
<div class="form-group"> 
  <label for="usr">Name:</label> 
  <input type="text" class="form-control" id="usr"> 
 </div> 
 <div class="form-group"> 
  <label for="pwd">Password:</label> 
  <input type="password" class="form-control" id="pwd"> 
 </div> 
` 

#### 2\. Textarea

يحتوي المثال التالي على نص:

 `
<div class="form-group"> 
  <label for="comment">Comment:</label> 
  <textarea class="form-control" rows="5" id="comment"></textarea> 
 </div> 
` 

#### 3\. مربعات الاختيار

يتم استخدام مربعات الاختيار إذا كنت تريد أن يحدد المستخدم أي عدد من الخيارات من قائمة خيارات الإعداد المسبق.

يحتوي المثال التالي على ثلاثة مربعات اختيار. الخيار الأخير معطل:

 `
<div class="checkbox"> 
  <label> 
  <input type="checkbox" value="">Option 1</label> 
 </div> 
 <div class="checkbox"> 
  <label> 
  <input type="checkbox" value="">Option 2</label> 
 </div> 
 <div class="checkbox disabled"> 
  <label> 
  <input type="checkbox" value="" disabled>Option 3</label> 
 </div> 
` 

استخدم فئة **.checkbox-inline** إذا كنت تريد ظهور مربعات الاختيار على نفس السطر:

 `
<label class="checkbox-inline"><input type="checkbox" value="">Option 1</label> 
 <label class="checkbox-inline"><input type="checkbox" value="">Option 2</label> 
 <label class="checkbox-inline"><input type="checkbox" value="">Option 3</label> 
` 

#### 4\. أزرار الراديو

يتم استخدام أزرار الراديو إذا كنت ترغب في تحديد المستخدم إلى تحديد واحد فقط من قائمة خيارات الإعداد المسبق.

يحتوي المثال التالي على ثلاثة أزرار للراديو. الخيار الأخير معطل:

 `
<div class="radio"> 
  <label><input type="radio" name="optradio">Option 1</label> 
 </div> 
 <div class="radio"> 
  <label><input type="radio" name="optradio">Option 2</label> 
 </div> 
 <div class="radio disabled"> 
  <label><input type="radio" name="optradio" disabled>Option 3</label> 
 </div> 
` 

استخدم فئة **.radio-inline** إذا كنت تريد أن تظهر مربعات الاختيار على نفس السطر:

 `
<label class="radio-inline"><input type="radio" name="optradio">Option 1</label> 
 <label class="radio-inline"><input type="radio" name="optradio">Option 2</label> 
 <label class="radio-inline"><input type="radio" name="optradio">Option 3</label> 
` 

#### 5\. حدد (قائمة)

يتم استخدام القوائم المحددة إذا كنت تريد السماح للمستخدم بالاختيار من بين خيارات متعددة.

يحتوي المثال التالي على قائمة منسدلة (حدد القائمة):

 `
<div class="form-group"> 
  <label for="sel1">Select list:</label> 
  <select class="form-control" id="sel1"> 
    <option>1</option> 
    <option>2</option> 
    <option>3</option> 
    <option>4</option> 
  </select> 
 </div> 
` 

## كيفية جعل Bootstrap Inputs Accessible

يجب أن تحتوي حقول الإدخال على تصنيفات أو أي شكل آخر من المعرفات مثل علامات WAI-ARIA للوفاء بالويب إرشادات الوصول إلى المحتوى أو [WCAG](https://www.w3.org/WAI/tutorials/forms/) باختصار. مرتب بالنسبة لقارئي الشاشة لنقل المستخدم إلى ما هي التصنيفات المرتبطة بالمدخلات التي تسجلها بدقة يجب أن تشير إلى المدخلات المقابلة.

ويمكن أن يتم ذلك عن طريق utlizing و `for` معلمة في HTML:

 `
<label for="email-input">Enter Email</label> 
 <input type="email" class="form-control" id="email-input" placeholder="Enter Email"> 
` 

التسمية `for` سمة يحيل **دائما** حقل الإدخال عن طريق **المعرف** الخاص به. هذا يخبر قارئ الشاشة أن هذا التصنيف هو بالتأكيد حقل الإدخال هذا الذي سيقلل من الارتباك لأي مستخدم يستخدم قارئ الشاشة لزيارة موقع على شبكة الإنترنت.

### معلومات اكثر:

الأمثلة رمز من [W3Schools - إدخالات نموذج Bootstrap](https://www.w3schools.com/bootstrap/bootstrap_forms_inputs.asp) .