---
title: Give Your JavaScript Slot Machine Some Stylish Images
localeTitle: قم بتزويد جهاز Slot بجهاز JavaScript بعض الصور الأنيقة
---
لقد قمنا بالفعل بإعداد الصور لك في صف يسمى الصور. يمكننا استخدام فهارس مختلفة للاستيلاء على كل منها.

في ما يلي كيفية تعيين الشريحة الأولى لعرض صورة مختلفة استنادًا إلى العدد الذي ينشئه رقمها العشوائي:

 `$($('.slot')[0]).html('<img src = "' + images[slotOne-1] + '">'); 
`