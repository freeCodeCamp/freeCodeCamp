---
title: SQL Injection
localeTitle: حقن SQL
---
## حقن SQL

ثغرة أمنية في التطبيق بسبب مبرمج لا يعقم المدخلات قبل تضمينها في استعلام في قاعدة البيانات. هذا يؤدي إلى مهاجم قراءة كاملة وكثير من الأحيان كتابة الوصول إلى قاعدة البيانات. مع هذا النوع من الوصول يمكن للمهاجم القيام بأشياء سيئة للغاية.

### مثال على حقن SQL الهجوم

يقوم البرنامج النصي PHP أدناه بتشغيل عبارة SQL للحصول على البريد الإلكتروني الخاص بالمستخدم بواسطة المعرّف. ومع ذلك ، لا يتم تعقيم الإدخال مما يجعله عرضة لحقن SQL

 `<?php 
 $input = $_GET['id']; 
 $dbserver = "localhost"; 
 $dbuser = "camper"; 
 $dbpass = "supersecretcampsitepassword"; 
 $dbname = "freecodecamp"; 
 
 $conn = new mysqli($dbserver, $dbuser, $dbpass, $dbname); 
 
 if ($conn->connect_error) { 
    die("Connection failed: " . $conn->connect_error); 
 } 
 
 $sql = "SELECT email FROM users WHERE id =" . $input; 
 
 $result = $conn->query($sql); 
 
 if ($result->num_rows > 0) { 
    while($row = $result->fetch_assoc()) { 
        echo $row["email"]; 
    } 
 } else { 
    echo "no results"; 
 } 
 
 $conn->close(); 
` 

 ``SELECT email FROM users WHERE id = `$input`; 
`` 

إذاً ، مع ما ذكر أعلاه ، فإن المدخلات ليست من النوع المدبب (بمعنى أن يتم إدخال الإدخال مع (int) بحيث لا يُسمح إلا بعدد واحد فقط) كما لا يمكن الهروب مما يسمح لشخص ما بتنفيذ هجوم حقن SQL - على سبيل المثال عنوان URL `getemailbyuserid.php?id=1'; My Query Here-- -` سيتيح لك تشغيل استعلامات SQL التعسفية دون بذل مجهود كبير.

### الدفاع عن موقع الويب الخاص بك من هجمات حقن SQL في PHP

هناك عدة طرق للدفاع عن موقعك الإلكتروني من هجمات حقن SQL. هذه الطرق هي القائمة البيضاء ، نوع الصب ، وهروب الأحرف

**هيتليستينغ:** يتم استخدام نهج القائمة البيضاء في الحالات التي يتوقع فيها بعض المدخلات. يمكنك سرد كل إدخال متوقع في أحد مفاتيح تبديل PHP ومن ثم إعداد افتراضي للإدخال غير الصحيح. لا داعي للقلق بشأن مشكلة في كتابة النوع أو تجاوز مسار الهروب ولكن الإدخال المسموح به محدود بشكل غير محدود. يبقى خيارًا ، راجع المثال أدناه.

 `<?php 
 switch ($input) { 
  case "1": 
    //db query 1 
    break; 
  case "2": 
    //db query 2 
    break; 
  default: 
    // invalid input return error 
 } 
` 

**نوع الصب:** يشيع استخدام أسلوب صب النمط لتطبيق يستخدم مدخلات رقمية. قم ببساطة بإدخال الإدخال باستخدام `(int) $input` وسيتم السماح فقط بقيمة رقمية.

**حرف الهروب:** سوف يفلت أسلوب الهروب من الأحرف من أحرف مثل علامات الاقتباس والشرطة المائلة التي يوفرها المستخدم لمنع حدوث هجوم. إذا كنت تستخدم MySQL Server ومكتبة MySQLi للوصول إلى قاعدة البيانات الخاصة بك ، فسوف تأخذ الدالة `mysqli_real_escape_string($conn, $string)` الوسيطتين ، اتصال MySQLi ، والسلسلة وستفلتا بشكل صحيح من إدخال المستخدم لمنع هجوم حقن SQL . تعتمد الوظيفة الدقيقة التي تستخدمها على نوع قاعدة البيانات ومكتبة php التي تستخدمها في التحقق من وثائق مكتبة php للحصول على مزيد من المعلومات حول الهروب من مدخلات المستخدم.

#### معلومات اكثر:

*   [OWASP Wiki - SQL Injection](https://www.owasp.org/index.php/SQL_Injection)
*   [php.net SQL حقنه دليل](https://secure.php.net/manual/en/security.database.sql-injection.php)
*   [php.net MySQLi ريال الهروب سلسلة دليل](https://secure.php.net/manual/en/mysqli.real-escape-string.php)