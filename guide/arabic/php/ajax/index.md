---
title: AJAX
localeTitle: AJAX
---
## AJAX

**AJAX** لتقف على **جافا سكريبت غير متزامن و XML** . إنها ليست لغة برمجة. إنها تقنية لتطوير تطبيقات ويب أفضل وأسرع وتفاعلية باستخدام HTML و CSS و JavaScript و XML.

1.  HTML: يتم استخدام لغة توصيف النص التشعبي (HTML) لتعريف بنية تطبيق ويب.
2.  CSS: تستخدم ورقة الأنماط المتتالية (CSS) لتوفير مظهر ونمط لتطبيق ويب.
3.  JavaScript: يتم استخدام JavaScript لجعل تطبيق الويب تفاعليًا ومثيرًا للاهتمام وسهل الاستخدام.
4.  XML: لغة التوصيف الموسعة (XML) هي تنسيق لتخزين ونقل البيانات من خادم الويب.

#### ما هو معنى غير متزامن في أجاكس؟

غير متزامن يعني أن تطبيق الويب يمكنه إرسال واستقبال البيانات من خادم الويب دون تحديث الصفحة. هذه العملية في الخلفية لإرسال واستقبال البيانات من الخادم مع تحديث أقسام مختلفة من صفحة الويب تعرف خاصية / خاصية Asynchronous لـ AJAX.

#### كيف تعمل **AJAX** ؟

تستخدم AJAX **كائن XMLHttpRequest مضمنًا** في المستعرض لطلب بيانات من خادم الويب و **DOM HTML** لعرض البيانات أو استخدامها.

**XMLHttpRequest Object** : هو واجهة برمجة تطبيقات في شكل كائن تساعد طرقه في نقل البيانات بين مستعرض الويب وخادم الويب.

**HTML DOM** : عند تحميل صفحة الويب ، يقوم المتصفح بإنشاء نموذج كائن المستند للصفحة.

![](https://cdn-media-1.freecodecamp.org/imgr/pfC7QFH.png "كيف تعمل AJAX")

**إنشاء كائن XMLHttpRequest:**

 `var xhttp = new XMLHttpRequest(); 
` 

**خصائص كائن XMLHttpRequest:**

`readystate` خاصية من XMLHttpRequest Object الذي يحتفظ بحالة XMLHttpRequest.

*   0: لم يتم تهيئة الطلب
*   1: إنشاء اتصال الخادم
*   2: تم استلام الطلب
*   3: طلب معالجة
*   4: طلب الانتهاء والرد جاهز

`onreadystatechange` خاصية من XMLHttpRequest Object الذي يعرّف دالة يتم استدعاؤها عند تغيير خاصية readyState.  

`status` هي خاصية XMLHttpRequest Object والتي تقوم بارجاع رقم حالة الطلب

*   200: "حسنا"
*   403 ممنوع"
*   404 غير موجود"

**أساليب كائن XMLHttpRequest:** لإرسال طلب إلى خادم ويب ، نستخدم الأساليب open () و send () للكائن XMLHttpRequest.

 `xhttp.open("GET", "content.txt", true); 
 xhttp.send(); 
` 

**إنشاء تغيير وظيفةContent () باستخدام JavaScript:**

 `function changeContent() { 
  var xhttp = new XMLHttpRequest(); 
  xhttp.onreadystatechange = function() { 
    if (this.readyState == 4 && this.status == 200) { 
     document.getElementById("foo").innerHTML = this.responseText; 
    } 
  }; 
  xhttp.open("GET", "content.txt", true); 
  xhttp.send(); 
 } 
` 

**مثال AJAX لتغيير محتوى صفحة الويب:**

 `<!DOCTYPE html> 
 <html> 
 <body> 
 
 <div id="foo"> 
 <h2>The XMLHttpRequest Object</h2> 
 <button type="button" onclick="changeContent()">Change Content</button> 
 </div> 
 
 <script> 
 function changeContent() { 
  var xhttp = new XMLHttpRequest(); 
  xhttp.onreadystatechange = function() { 
    if (this.readyState == 4 && this.status == 200) { 
      document.getElementById("foo").innerHTML = 
      this.responseText; 
    } 
  }; 
  xhttp.open("GET", "content.txt", true); 
  xhttp.send(); 
 } 
 </script> 
 
 </body> 
 </html> 
` 

يجب أن يكون الملف `content.txt` موجودًا في الدليل الجذر لتطبيق الويب.

### مصادر

*   [W3Schools](https://www.w3schools.com/js/js_ajax_intro.asp)
*   [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started)

### موارد آخرى

*   [W3Schools](https://www.w3schools.com/js/js_ajax_intro.asp)
*   [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started)