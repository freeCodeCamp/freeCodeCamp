---
title: PHP 5 Forms - Validate E-mail and URL
localeTitle: نماذج PHP 5 - التحقق من البريد الإلكتروني وعنوان URL
---
يوضح هذا الفصل كيفية التحقق من صحة الأسماء ورسائل البريد الإلكتروني وعناوين URL.

### PHP - التحقق من صحة الاسم

يعرض الرمز أدناه طريقة بسيطة للتحقق مما إذا كان حقل الاسم يحتوي فقط على أحرف ومسافة بيضاء. إذا كانت قيمة حقل الاسم غير صالحة ، فقم بتخزين رسالة خطأ:

 `$name = test_input($_POST["name"]); 
 if (!preg_match("/^[a-zA-Z ]*$/",$name)) { 
  $nameErr = "Only letters and white space allowed"; 
 } 
` 

> **تقوم الدالة preg\_match () بالبحث عن سلسلة للنمط ، وإرجاع true إذا كان النمط موجودًا ، والخطأ بخلاف ذلك.**

### PHP - التحقق من صحة البريد الإلكتروني

الطريقة الأسهل والأكثر أمانا للتحقق من صحة عنوان البريد الإلكتروني هي استخدام وظيفة filter\_var () في PHP.

في الرمز أدناه ، إذا لم يكن عنوان البريد الإلكتروني جيدًا ، فقم بتخزين رسالة خطأ:

 `$email = test_input($_POST["email"]); 
 if (!filter_var($email, FILTER_VALIDATE_EMAIL)) { 
  $emailErr = "Invalid email format"; 
 } 
` 

### PHP - التحقق من صحة URL

يعرض الرمز أدناه طريقة للتحقق مما إذا كان بناء جملة عنوان URL صحيحًا (يسمح هذا التعبير العادي أيضًا بشروط في عنوان URL). إذا كان بناء جملة عنوان URL غير صالح ، فقم بتخزين رسالة خطأ:

 `$website = test_input($_POST["website"]); 
 if (!preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i",$website)) { 
  $websiteErr = "Invalid URL"; 
 } 
` 

### PHP - التحقق من صحة الاسم والبريد الإلكتروني وعنوان URL

الآن ، يبدو النص كالتالي:

#### مثال

 `<?php 
 // define variables and set to empty values 
 $nameErr = $emailErr = $genderErr = $websiteErr = ""; 
 $name = $email = $gender = $comment = $website = ""; 
 
 if ($_SERVER["REQUEST_METHOD"] == "POST") { 
  if (empty($_POST["name"])) { 
    $nameErr = "Name is required"; 
  } else { 
    $name = test_input($_POST["name"]); 
    // check if name only contains letters and whitespace 
    if (!preg_match("/^[a-zA-Z ]*$/",$name)) { 
      $nameErr = "Only letters and white space allowed"; 
    } 
  } 
 
  if (empty($_POST["email"])) { 
    $emailErr = "Email is required"; 
  } else { 
    $email = test_input($_POST["email"]); 
    // check if e-mail address is well-formed 
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) { 
      $emailErr = "Invalid email format"; 
    } 
  } 
 
  if (empty($_POST["website"])) { 
    $website = ""; 
  } else { 
    $website = test_input($_POST["website"]); 
    // check if URL address syntax is valid (this regular expression also allows dashes in the URL) 
    if (!preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i",$website)) { 
      $websiteErr = "Invalid URL"; 
    } 
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