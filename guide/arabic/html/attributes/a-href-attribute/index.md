---
title: A Href Attribute
localeTitle: سمة Href
---
## سمة Href

تشير السمة `<a href>` إلى وجهة مقدمة من خلال رابط. `a` (الارتساء) ميتة بدون السمة `<href>` . في بعض الأحيان في سير عملك ، لا تريد رابطًا مباشرًا أو لن تعرف وجهة الارتباط بعد. في هذه الحالة ، من المفيد تعيين سمة `href` إلى `"#"` لإنشاء رابط ميت. يمكن استخدام `href` للربط بالملفات أو الملفات المحلية على الإنترنت.

على سبيل المثال:

 `
<html> 
  <head> 
    <title>Href Attribute Example</title> 
  </head> 
  <body> 
    <h1>Href Attribute Example</h1> 
      <p> 
        <a href="https://www.freecodecamp.org/contribute/">The freeCodeCamp Contribution Page</a> shows you how and where you can contribute to freeCodeCamp's community and growth. 
      </p> 
    </h1> 
  </body> 
 </html> 
` 

يتم دعم سمة `<a href>` بواسطة جميع المتصفحات.

#### المزيد من السمات:

`hreflang` : يحدد لغة المصدر المرتبط. `target` : لتحديد السياق الذي سيتم فتح المورد المرتبط فيه. `title` : لتحديد عنوان رابط ، يظهر للمستخدم باعتباره تلميح أداة.

### أمثلة

 `
<a href="#">This is a dead link</a> 
 <a href="https://www.freecodecamp.org">This is a live link to freeCodeCamp</a> 
 <a href="https://html.com/attributes/a-href/">more with a href attribute</a> 
` 

### المراسي في الصفحة

من الممكن أيضًا تعيين مرساة لمكان معين من الصفحة. لإجراء ذلك ، يجب عليك أولاً وضع علامة تبويب في الموقع على الصفحة التي تحتوي على العلامة والسمة "الاسم" الضرورية مع أي وصف للكلمة الرئيسية ، مثل:

 `
<a name="top"></a> 
` 

أي وصف بين العلامات غير مطلوب. بعد ذلك يمكنك وضع رابط يؤدي إلى هذا الارتساء في أي مكان في نفس الصفحة. للقيام بذلك ، يجب عليك استخدام العلامة ذات السمة الضرورية "href" مع الرمز # (حاد) ووصف الكلمة الرئيسية للربط ، مثل هذا:

 `
<a href="#top">Go to Top</a> 
` 

### روابط الصور

يمكن أيضًا تطبيق `<a href="#">` على الصور وعناصر HTML الأخرى.

### مثال

 `
<a href="#"><img itemprop="image" style="height: 90px;" src="http://www.chatbot.chat/assets/images/header-bg_y.jpg" alt="picture">  </a> 
` 

### مثال

[![صورة](http://www.chatbot.chat/assets/images/header-bg_y.jpg)](#)

### بعض الأمثلة أكثر من href

 `
<base href="https://www.freecodecamp.org/a-href/">This gives a base url for all further urls on the page</a> 
 <link href="style.css">This is a live link to an external stylesheet</a> 
`