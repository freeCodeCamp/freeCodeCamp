---
title: Give Sibling Elements a Unique Key Attribute
localeTitle: اعطِ Sibling Elements سمة فريدة من نوعها
---
## اعطِ Sibling Elements سمة فريدة من نوعها

## ملحوظة

انها مجرد نفس [التحدي](https://learn.freecodecamp.org/front-end-libraries/react/use-array-map-to-dynamically-render-elements) السابق. فقط تحتاج إلى إضافة سمة `key` .

## حل

ما عليك سوى إضافة سمة `key` إلى العلامة `<li>` لجعلها فريدة

 `const renderFrameworks = frontEndFrameworks.map((item) => 
  <li key={item+1}>{item}</li> 
 ); 
`