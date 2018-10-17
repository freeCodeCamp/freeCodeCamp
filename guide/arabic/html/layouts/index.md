---
title: Layouts
localeTitle: تخطيطات
---
## تخطيطات

تخطيطات تنظم مناطق مختلفة من صفحة الويب.

يمكن تقسيم كل صفحة الويب التي نراها تقريبًا إلى مربعات ، يمكن ترتيبها بترتيب معين لإنشاء صفحة الويب هذه. الصورة أدناه مثال واحد.

![عينة من تصميم الموقع - www.codementor.io](http://i.imgur.com/Z1DSMYC.png)

> غالبًا ما تعرض مواقع الويب محتوى في عدة أعمدة (مثل مجلة أو صحيفة).

وتساعدنا تقنيات تخطيط HTML على وضع المعلومات المطلوبة في الطلب أو التصميم المطلوب.

### تقنيات لتنفيذ التخطيطات

#### جداول HTML

واحدة من أكثر الأدوات الأساسية لتنفيذ التنسيقات في صفحة الويب ، يتم توفيرها بواسطة HTML. ولكن نظرًا لأن التخطيط يصبح معقدًا ، فإن جداول HTML ستفقد سرعتها بسهولة ، نظرًا لزيادة نصوص الترميز.

#### CSS Float

إذا كنت تريد تصميم صفحة تستند إلى 2 عمود مع جزء التنقل الأيسر ومنطقة عرض المحتوى المركزي ، فمن السهل القيام بذلك باستخدام floats CSS. ما عليك سوى تعيين صفحة الاستكشاف اليمنى في `<div>` مع خاصية `float: left;` . و voila تحصل على هذا التصميم. ولكن ماذا لو كان لديك 4 أعمدة في قسم واحد. بالتأكيد ، يمكن للمرء أن يفعل ذلك بعوامات ، ولكن سيكون من السهل فهم صيغة HTML التي تكتبها.

#### أطر CSS

هذا هو المكان الذي تأتي فيه CSS Frameworks مثل [Bootstrap](http://getbootstrap.com/) و [Materialize](http://materializecss.com/) . توفر أطر العمل هذه وظيفة الشبكة التي تسمح بتقسيم كل قسم من صفحة الويب الخاصة بك إلى 12 عمودًا ، والتي يمكنك طلبها لتصميمها.

![مثال الشبكة](http://blog.gridbox.io/wp-content/uploads/2018/01/download-1-1024x271.png)

> عينة Bootstrap الشبكة

### HTML الدلالي الدلائل

غالبًا ما تعرض مواقع الويب محتوى في عدة أعمدة (مثل مجلة أو صحيفة).

تقدم HTML5 عناصر دلالية دلالية تحدد الأجزاء المختلفة لصفحة الويب:

 `<header> - Defines a header for a document or a section 
 <nav> - Defines a container for navigation links 
 <section> - Defines a section in a document 
 <article> - Defines an independent self-contained article 
 <aside> - Defines content aside from the content (like a sidebar) 
 <footer> - Defines a footer for a document or a section 
 <details> - Defines additional details 
 <summary> - Defines a heading for the <details> element 
` 

#### معلومات اكثر:

*   [مدارس W3 - تخطيط](https://www.w3schools.com/html/html_layout.asp)
*   [CodeMentorTeam](https://www.codementor.io/codementorteam/4-different-html-css-layout-techniques-to-create-a-site-85i9t1x34) - تقنيات تخطيط لإنشاء موقع