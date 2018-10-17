---
title: HTML and CSS Cheat Sheet
localeTitle: HTML و CSS Cheat Sheet
---
ستنمو هذه الصفحة (المأمولة) في الوقت المناسب لتغطية حلول HTML و CSS الأساسية والبسيطة.

الرجاء إضافة إلى الحلول البديلة الخاصة بك إذا كنت تعرف طريقة مختلفة.

## جعل `<hr>` القاعدة الأفقية أصغر

 `    hr { 
      width: 75%; 
      margin-left: auto; 
      margin-right: auto; 
    } 
` 

## إعطاء `<div>` خلفية غير قابلة للتمرير

 `    #divName { 
      padding-top: 50px; 
      height: 500px; 
      color: #fff; 
      background-image: url("your_url.jpg"); 
      background-repeat: no-repeat; 
      background-attachment: fixed; 
      background-size: 100%; 
    } 
` 

جرب قيمًا مختلفة لمعرفة كيفية تأثيرها على div وأكثر في html

 `
<div id="divName" class="container-fluid"> 
` 

## محاذاة عمودية (لسطر واحد من النص)

يمكن أن يكون هذا مفيدًا في قائمة التنقل في CSS. المفتاح هو جعل ارتفاع القائمة وارتفاع سطر النص نفسه. `css .nav li{ line-height:50px; height:50px; }` [يمكن العثور على](https://www.webdesignerdepot.com/2016/10/20-essential-css-tricks-every-designer-should-know/) المزيد من الحيل الأنيقة [هنا](https://www.webdesignerdepot.com/2016/10/20-essential-css-tricks-every-designer-should-know/)

## مركز قائمة أفقي

[http://csswizardry.com/2011/01/create-a-centred-horizontal-navigation/](http://csswizardry.com/2011/01/create-a-centred-horizontal-navigation/)

## أقسام ومخططات مستند HTML

[https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Sections _and_ Outlines _of_ an _HTML5_ document](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Sections_and_Outlines_of_an_HTML5_document)