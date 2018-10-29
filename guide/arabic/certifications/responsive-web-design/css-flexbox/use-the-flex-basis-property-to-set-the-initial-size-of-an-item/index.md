---
title: Use the flex-basis Property to Set the Initial Size of an Item
localeTitle: استخدم الخاصية الأساسية المرنة لتعيين الحجم الأولي لعنصر
---
## استخدم الخاصية الأساسية المرنة لتعيين الحجم الأولي لعنصر

يمكنك تحقيق نفس تأثير التحديتين السابقتين مع `flax-basis` . بعد تحديد قيم approati ، سترى `#box-2` أكبر من `#box-1` قبل تطبيق أي تقلص أو نمو.

 `#box-1 { 
  background-color: dodgerblue; 
  height: 200px; 
  flex-basis: 10em; 
 } 
 
 #box-2 { 
  background-color: orangered; 
  height: 200px; 
  flex-basis: 20em; 
 } 
`