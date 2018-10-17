---
title: Input Type Attribute
localeTitle: سمة نوع المدخلات
---
## سمة نوع المدخلات

تحدد السمة type input نوع الإدخال الذي يجب أن يضعه المستخدم في النموذج الخاص بك.

### نص

سطر واحد من النص.

 `
    <form> 
      <label for="login">Login:</label> 
      <input type="text" name="login"> 
    </form> 
` 

### كلمه السر

سطر واحد من النص. يتم عرض النص تلقائيًا كسلسلة من النقاط أو العلامات النجمية (يعتمد على المتصفح ونظام التشغيل).

 `
    <form> 
      <label for="password">Password:</label> 
      <input type="password" name="password"> 
    </form> 
` 

### البريد الإلكتروني

يتحقق HTML إذا كان الإدخال يطابق تنسيق عنوان البريد الإلكتروني (شيء @ شيء).

 `
    <form> 
      <label for="email">E-mail address:</label> 
      <input type="email" name="email"> 
    </form> 
` 

### رقم

السماح فقط بإدخال رقمي. يمكنك أيضًا تحديد الحد الأدنى والحد الأقصى المسموح بهما. يوضح المثال أدناه أن الإدخال هو الرقم بين 1 و 120.

 `
    <form> 
      <label for="age">Age:</label> 
      <input type="number" name="age" min="1" max="120"> 
    </form> 
` 

### راديو

يمكن تحديد خيار واحد فقط من قبل المستخدم. تحتاج مجموعة أزرار الاختيار إلى نفس سمة الاسم. يمكنك تحديد خيار واحد تلقائيًا باستخدام خاصية `checked` (في المثال ، أسفل القيمة الزرقاء محددة).

 `
    <form> 
      <label><input type="radio" name="color" value="red">Red</label> 
      <label><input type="radio" name="color" value="green">Green</label> 
      <label><input type="radio" name="color" value="blue" checked>Blue</label> 
    </form> 
` 

### مربع

يمكن للمستخدم تحديد صفر أو أكثر من الخيارات من مجموعة مربعات الاختيار. يمكنك استخدام خاصية `checked` هنا أيضًا لخيار واحد أو أكثر.

 `
    <form> 
      <label><input type="checkbox" name="lang" value="english">english</label> 
      <label><input type="checkbox" name="lang" value="spanish">spanish</label> 
      <label><input type="checkbox" name="lang" value="french">french</label> 
    </form> 
` 

### زر

يتم عرض الإدخال كزر ، النص الذي يجب عرضه في الزر في سمة القيمة.

 `
    <form> 
      <input type="button" value="click here"> 
    </form> 
` 

### خضع

يعرض زر الإرسال. النص الذي يجب عرضه في الزر في سمة القيمة. بعد النقر على الزر ، يقوم HTML بالتحقق من الصحة ، وفي حالة تمريره ، يتم إرسال النموذج.

 `
    <form> 
      <input type="submit" value="SUBMIT"> 
    </form> 
` 

### إعادة تعيين

يعرض زر إعادة الضبط. النص الذي يجب عرضه في الزر في سمة القيمة. بعد النقر على الزر ، يتم حذف جميع القيم من النموذج.

 `
    <form> 
      <input type="reset" value="CANCEL"> 
    </form> 
` 

هناك المزيد من عناصر الأنواع. لمزيد من المعلومات ، قم بزيارة MSDN أو w3schools .