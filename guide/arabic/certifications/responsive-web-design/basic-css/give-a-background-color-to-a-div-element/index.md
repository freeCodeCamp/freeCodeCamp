---
title: Give a Background Color to a div Element
localeTitle: إعطاء لون الخلفية لعنصر div
---
## إعطاء لون الخلفية لعنصر div

يمكنك تغيير `color` `background` إلى `div` element (أو section) بواحدة من طريقتين.

**الطريقة الأولى:**

قم بإنشاء `class` في أقواس النمط.

 `
<style> 
 .blue-background { 
    background-color: blue; 
  } 
 </style> 
` 

يمكنك بعد ذلك إضافة `class` إلى `div` :

 `
<div class="blue-background"> 
  <p> Example </p> 
 </div> 
` 

**الطريقة الثانية:**

بدلاً من إنشاء `class` كما في الطريقة الأولى ، يمكنك إنشاء `class` عنصر `div` في أقواس النمط.

سيكون لكل قسم `div` `class` أنشأتها وقمت بتعيينها.

(وهذا يعني أنها `class` متكررة لكل عنصر `div` تقوم بإنشائه.)

 `
<style> 
  div { 
    background-color: blue; 
  } 
 </style> 
`