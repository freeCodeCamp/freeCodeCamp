---
title: Render HTML Elements to the DOM
localeTitle: تقديم عناصر HTML إلى DOM
---
# تقديم عناصر HTML إلى DOM

لتقديم عنصر إلى DOM ، نستخدم بناء الجملة التالي

 `ReactDOM.render(<item to be rendered>, <where to be rendered>); 
` 

## حل

بعد بناء الجملة ، نضيف هذا السطر من التعليمة البرمجية لتحويل عنصر JSX إلى div بمعرف عقدة التحدي.

 `ReactDOM.render(JSX,document.getElementById('challenge-node')); 
`