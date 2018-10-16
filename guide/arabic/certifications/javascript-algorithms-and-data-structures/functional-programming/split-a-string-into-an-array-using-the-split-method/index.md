---
title: Split a String into an Array Using the split Method
localeTitle: تقسيم سلسلة في صفيف باستخدام طريقة الانقسام
---
## تقسيم سلسلة في صفيف باستخدام طريقة الانقسام

### طريقة

ما عليك سوى تقسيم السلسلة لإنشاء مجموعة جديدة من الكلمات.

يمكن استخدام تعبير عادي بسيط لتحقيق هذه النتيجة.

### حل

 `function splitify(str) { 
  // Add your code below this line 
  return str.split(/\W/); 
  // Add your code above this line 
 } 
 splitify("Hello World,I-am code"); 
`