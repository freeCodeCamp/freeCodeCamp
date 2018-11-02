---
title: PHP 5 Forms - Required Fields
localeTitle: نماذج PHP 5 - الحقول المطلوبة
---
يوضح هذا الفصل كيفية جعل حقول الإدخال مطلوبة وإنشاء رسائل خطأ إذا لزم الأمر.

### PHP - الحقول المطلوبة

من جدول قواعد التحقق من الصحة الموجود في الصفحة السابقة ، نرى أن حقول "الاسم" و "البريد الإلكتروني" و "الجنس" مطلوبة. لا يمكن أن تكون هذه الحقول فارغة ويجب تعبئتها في نموذج HTML.

| المجال | قواعد التحقق من الصحة | | --- | --- | اسم | مطلوب | + يجب أن يحتوي فقط على الحروف والمسافات البيضاء البريد الإلكتروني | مطلوب. + يجب أن يحتوي على عنوان بريد إلكتروني صالح (مع @ و.) | الموقع الإلكتروني | إذا كان موجودًا ، يجب أن يحتوي على عنوان URL صالح تعليق | اختياري. حقل الإدخال متعدد الخطوط (textarea) | الجنس: مطلوب. يجب اختيار واحد

في الفصل السابق ، كانت جميع حقول الإدخال اختيارية.

في الشفرة التالية ، أضفنا بعض المتغيرات الجديدة: $ nameErr و $ emailErr و genderErr و $ websiteErr. سوف تحتوي متغيرات الخطأ هذه على رسائل خطأ للحقول المطلوبة. لقد أضفنا أيضًا جملة if else لكل _متغير POST_ $ _. يتحقق هذا إذا كان_ متغير POST _$_ فارغًا (مع وظيفة PHP فارغة ()). إذا كانت فارغة ، يتم تخزين رسالة خطأ في متغيرات الخطأ المختلفة ، وإذا لم تكن فارغة ، فإنها ترسل بيانات إدخال المستخدم من خلال الدالة test\_input ():

 `<?php 
 // define variables and set to empty values 
 $nameErr = $emailErr = $genderErr = $websiteErr = ""; 
 $name = $email = $gender = $comment = $website = ""; 
 
 if ($_SERVER["REQUEST_METHOD"] == "POST") { 
  if (empty($_POST["name"])) { 
    $nameErr = "Name is required"; 
  } else { 
    $name = test_input($_POST["name"]); 
  } 
 
  if (empty($_POST["email"])) { 
    $emailErr = "Email is required"; 
  } else { 
    $email = test_input($_POST["email"]); 
  } 
 
  if (empty($_POST["website"])) { 
    $website = ""; 
  } else { 
    $website = test_input($_POST["website"]); 
  } 
 
  if (empty($_POST["comment"])) { 
    $comment = ""; 
  } else { 
    $comment = test_input($_POST["comment"]); 
  } 
 
  if (empty($_POST["gender"])) { 
    $genderErr = "Gender is required"; 
  } else { 
    $gender = test_input($_POST["gender"]); 
  } 
 } 
 ?> 
` 

### PHP - عرض رسائل الخطأ

ثم في نموذج HTML ، نضيف نصًا صغيرًا بعد كل حقل مطلوب ، مما ينشئ رسالة الخطأ الصحيحة إذا لزم الأمر (وهذا إذا حاول المستخدم إرسال النموذج دون ملء الحقول المطلوبة):

#### مثال

 `<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>"> 
 
 Name: <input type="text" name="name"> 
 <span class="error">* <?php echo $nameErr;?></span> 
 <br><br> 
 E-mail: 
 <input type="text" name="email"> 
 <span class="error">* <?php echo $emailErr;?></span> 
 <br><br> 
 Website: 
 <input type="text" name="website"> 
 <span class="error"><?php echo $websiteErr;?></span> 
 <br><br> 
 Comment: <textarea name="comment" rows="5" cols="40"></textarea> 
 <br><br> 
 Gender: 
 <input type="radio" name="gender" value="female">Female 
 <input type="radio" name="gender" value="male">Male 
 <span class="error">* <?php echo $genderErr;?></span> 
 <br><br> 
 <input type="submit" name="submit" value="Submit"> 
 
 </form> 
` 

الخطوة التالية هي التحقق من صحة بيانات الإدخال ، أي "هل يحتوي حقل الاسم على أحرف و مسافة بيضاء فقط؟" ، و "هل يحتوي حقل البريد الإلكتروني على بناء عنوان بريد إلكتروني صالح؟" ، وإذا تم تعبئته ، " هل يحتوي حقل موقع الويب على عنوان URL صالح؟ ".