---
title: Working With JSON APIs
localeTitle: العمل مع واجهات برمجة التطبيقات JSON
---
## العمل مع واجهات برمجة التطبيقات JSON

من الاستخدامات الشائعة لـ JSON قراءة البيانات من خادم الويب وعرض البيانات في صفحة الويب.

سيعلمك هذا الفصل كيفية تبادل بيانات JSON بين العميل وخادم PHP.

### ملف PHP

يحتوي PHP على بعض الوظائف المضمنة للتعامل مع JSON.

يمكن تحويل الكائنات في PHP إلى JSON باستخدام وظيفة PHP `json_encode()` :

 `<?php 
 $myObj->name = "John"; 
 $myObj->age = 30; 
 $myObj->city = "New York"; 
 
 $myJSON = json_encode($myObj); 
 
 echo $myJSON; 
 ?> 
` 

[جربها](https://www.w3schools.com/js/showphp.asp?filename=demo_file)

### عميل جافا سكريبت

إليك جافا سكريبت على العميل ، باستخدام اتصال AJAX لطلب ملف PHP من المثال أعلاه:

#### مثال

استخدم JSON.parse () لتحويل النتيجة إلى كائن JavaScript:

 `var xmlhttp = new XMLHttpRequest(); 
 xmlhttp.onreadystatechange = function() { 
    if (this.readyState == 4 && this.status == 200) { 
        var myObj = JSON.parse(this.responseText); 
        document.getElementById("demo").innerHTML = myObj.name; 
    } 
 }; 
 xmlhttp.open("GET", "demo_file.php", true); 
 xmlhttp.send(); 
` 

[جربها](https://www.w3schools.com/js/tryit.asp?filename=tryjson_php_simple)

### معلومات اكثر:

*   لمزيد من [التحقق من هذا الرابط](https://www.w3schools.com/js/js_json_php.asp)