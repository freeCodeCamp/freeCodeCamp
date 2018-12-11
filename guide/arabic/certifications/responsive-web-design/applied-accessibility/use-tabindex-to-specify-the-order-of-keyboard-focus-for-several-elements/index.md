---
title: Use tabindex to Specify the Order of Keyboard Focus for Several Elements
localeTitle: استخدم tabindex لتحديد ترتيب التركيز على لوحة المفاتيح للعديد من العناصر
---
## استخدم tabindex لتحديد ترتيب التركيز على لوحة المفاتيح للعديد من العناصر

اتباع التعليمات:

إضافة سمة tabindex مضبوطة على "1" إلى إدخال البحث ، وعلامة tabindex مضبوطة على "2" إلى إدخال الإدخال.

السطور 16 و 17 \`\` \`المغلق  

 `become: 
 
 ```css 
    <input type="search" name="search" id="search"> 
    <input type="submit" name="submit" value="Submit" id="submit"> 
` 

وبهذه الطريقة ، يكون إدخال البحث وإرسال عناصر التحكم في نموذج الإدخال أول عنصرين في ترتيب الجدولة.