---
title: Required
localeTitle: مطلوب
---
## مطلوب

يتم استخدام السمة HTML المطلوبة في عنصر إدخال لجعل حقل الإدخال في نموذج مطلوب لإرسال النموذج. إذا لم يقم المستخدم بملء حقل الإدخال ، فلن يرسل النموذج وسيعطي رسالة تطلب من المستخدم ملء هذا الحقل. السمة `< Required>` قابلة للتطبيق على `<input>` ، `<select>` ، `<textarea>` .

فمثلا:

 `
<!DOCTYPE html> 
 <html> 
  <head> 
    <title>HTML Required Attribute</title> 
  </head> 
  <body> 
    <form action="/"> 
      Text Field: <input type="text" name="textfield" required> 
      <input type="submit" value="Submit"> 
    </form> 
  </body> 
 </html> 
` 

اختر مثال:

 `
<form action="/action.php"> 
 <select required> 
  <option value="">None</option> 
  <option value="volvo">Volvo</option> 
  <option value="saab">Saab</option> 
  <option value="mercedes">Mercedes</option> 
  <option value="audi">Audi</option> 
 </select> 
 </form> 
` 

مثال على منطقة النص:

 `
<form action="/action.php"> 
  <textarea name="comment" required></textarea> 
  <input type="submit"> 
 </form> 
` 

ببساطة إضافة `required` إلى عنصر إدخال

#### معلومات اكثر:

[مقالة MDN على عنصر الإدخال](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)