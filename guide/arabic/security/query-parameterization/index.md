---
title: Query Parameterization
localeTitle: Parameterization الاستعلام
---
## Parameterization الاستعلام

من الأخطاء الشائعة عند ربط البرنامج بقاعدة البيانات قبول إدخال المستخدم وتطبيقه مباشرة على قاعدة البيانات دون التحقق منه أولاً. هذه عادة خطيرة يمكن الدخول فيها ، وقد تسمع مطورين أكثر خبرة يحذرون الآخرين من "تطهير المدخلات" أو "توجيه الاستعلامات".

لنبدأ بمثال قصير يوضح المشكلة:

_(يتم كتابة القصاصات التالية في C # لـ MySQL ، لكن المفهوم ينطبق على أي لغة وقاعدة بيانات)_

### المشكلة

 `public void RetrieveEmployeeInfo(string username) 
 { 
    using (var connection = new MySqlConnection("valid_connection_string")) 
    { 
        var query = "SELECT * FROM EMPLOYEES WHERE USERNAME = '" + username + "'"; 
 
        using (var command = new MySqlCommand(query, connection)) 
        { 
            var reader = command.ExecuteReader(); 
            while (reader.Read()) 
            { 
                // do something with the results of your query, like display the employee 
            } 
        } 
    } 
 } 
` 

للوهلة الأولى ، قد يبدو ذلك غير مؤذٍ. إذا قام المستخدم بكتابة "JDOE" في برنامجك ، وتم تمريره إلى هذه الوظيفة ، فسوف ينتهي بك الأمر تنفيذ استعلام كالتالي:

 `SELECT * FROM EMPLOYEES WHERE USERNAME = 'JDOE'; 
` 

تصبح المشكلة أكثر وضوحًا عندما تفكر في ما يحدث إذا _لم يقم_ المستخدم بكتابة ما تتوقعه. ماذا لو `JDOE'; DROP TABLE EMPLOYEES; --` شيئًا مثل `JDOE'; DROP TABLE EMPLOYEES; --` ؟ تبدو سلسلة "طلب البحث" الآن مثل هذه ، والتي ستحدد معلومات الموظف ، ثم تحذف جدول EMPLOYEES بأكمله!

 `SELECT * FROM EMPLOYEES WHERE USERNAME = 'JDOE'; DROP TABLE EMPLOYEES; --' 
` 

### الحل

لمنع حدوث مثل هذه المشكلات ، يمكننا تحديد طلبات البحث. دعونا ننظر في مثال آخر:

 `public void RetrieveEmployeeInfo(string username) 
 { 
    using (var connection = new MySqlConnection("valid_connection_string")) 
    { 
        var query = "SELECT * FROM EMPLOYEES WHERE USERNAME = @username"; 
 
        using (var command = new MySqlCommand(query, connection)) 
        { 
            command.Parameters.AddWithValue("username", username); 
 
            var reader = command.ExecuteReader(); 
            while (reader.Read()) 
            { 
                // do something with the results of your query, like display the employee 
            } 
        } 
    } 
 } 
` 

الآن ما يحدث إذا كان المستخدم `JDOE'; DROP TABLE EMPLOYEES; --` في `JDOE'; DROP TABLE EMPLOYEES; --` ؟ وينتهي برنامجنا بتنفيذ استعلام مثل هذا ، والعثور على أي موظف اسمه الحقيقي يطابق هذا الإدخال ، ببساطة إرجاع أية سجلات.

 `SELECT * FROM EMPLOYEES WHERE USERNAME = 'JDOE\'; DROP TABLE EMPLOYEES; --' 
` 

بغض النظر عن اللغة أو قاعدة البيانات التي تستخدمها ، إذا كنت تفكر في الاستعلام عن قاعدة البيانات باستخدام مدخلات المستخدم ، فتحقق من الوثائق لمعرفة الطريقة المناسبة لإضفاء طابع المعلمة على الاستعلامات.