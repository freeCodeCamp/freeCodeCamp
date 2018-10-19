---
title: Navigation Bars
localeTitle: أشرطة الملاحة
---
## أشرطة الملاحة

تعد أشرطة التنقل عنصرًا مهمًا جدًا لأي موقع ويب. أنها توفر الطريقة الرئيسية للملاحة من خلال توفير قائمة رئيسية من الروابط إلى مستخدم. هناك العديد من الطرق لإنشاء شريط التنقل. أسهل طريقة لإنشاء شريط تنقل هي استخدام قائمة غير مرتبة ونمطها باستخدام CSS.

تتكون قوائم التنقل في الغالب من قوائم `<ul>` التي يتم ترتيبها وترتيبها أفقيًا.

أثناء تصميم أشرطة التنقل ، من الشائع إزالة التباعد الإضافي الذي تم إنشاؤه بواسطة العلامات `<ul>` و `<li>` بالإضافة إلى النقاط التي يتم إدراجها تلقائيًا:

 `   list-style-type: none; 
   margin: 0px; 
   padding: 0px; 
` 

**مثال:**

هناك جزءان لأي التنقل: HTML و CSS. هذا مجرد مثال سريع.

 `
<nav class="myNav">                                 <!-- Any element can be used here --> 
    <ul> 
        <li><a href="index.html">Home</a></li> 
        <li><a href="about.html">About</a></li> 
        <li><a href="contact.html">Contact</a></li> 
    </ul> 
 </nav> 
` 

 `/* Define the main Navigation block */ 
 .myNav { 
    display: block; 
    height: 50px; 
    line-height: 50px; 
    background-color: #333; 
 } 
 /* Remove bullets, margin and padding */ 
 .myNav ul { 
    list-style: none; 
    padding: 0; 
    margin: 0; 
 } 
 .myNav li { 
    float: left; 
    /* Or you can use display: inline; */ 
 } 
 /* Define the block styling for the links */ 
 .myNav li a { 
    display: inline-block; 
    text-align: center; 
    padding: 14px 16px; 
 } 
 /* This is optional, however if you want to display the active link differently apply a background to it */ 
 .myNav li a.active { 
    background-color: #3786E1; 
 } 
` 

#### معلومات اكثر:

المزيد من أمثلة التنقل: [W3Schools](https://www.w3schools.com/css/css_navbar.asp)