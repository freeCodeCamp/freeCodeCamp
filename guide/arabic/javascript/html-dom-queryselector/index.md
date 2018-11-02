---
title: HTML DOM querySelector()
localeTitle: HTML DOM querySelector ()
---
إرجاع `querySelector()` أسلوب المستند `first` العنصر ضمن المستند الذي يطابق المحدد المحدد أو مجموعة من المحددات. إذا لم يتم العثور على تطابقات ، يتم إرجاع null.

**محتوى HTML:**

 `
<div id="id-example"></div> 
 <div class="class-example"></div> 
 <a>element-example</a> 
` 

**محتوى جافا سكريبت:**

 `document.querySelector("#id-example"); // Returns the element with id "id-example" 
 document.querySelector(".class-example"); // Returns the element with class "class-example" 
 document.querySelector("a"); // Returns the "a" element 
` 

ملاحظة `querySelector()` إرجاع عنصر المطابقة الأول ، لإرجاع كافة التطابقات ، استخدم أسلوب querySelectorAll () بدلاً من ذلك.

 `
<div id="example">First</div> 
 <div id="example">Second</div> 
` 

 `document.querySelector("#example"); // Returns only the element containing 'First' 
` 

#### معلومات اكثر:

[MDN - document.querySelector ()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)