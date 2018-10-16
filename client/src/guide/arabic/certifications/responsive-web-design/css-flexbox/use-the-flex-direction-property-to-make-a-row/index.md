---
title: Use the flex-direction Property to Make a Row
localeTitle: استخدم خاصية الاتجاه المرن لإجراء صف
---
## استخدم خاصية الاتجاه المرن لإجراء صف

بمجرد أن يكون لديك حاوية مرنة عن طريق إضافة _الشاشة: flex؛_ إلى الحاوية الرئيسية ، يمكنك تحديد ما إذا كنت تريد تكديس الأطفال في صف عن طريق إضافة ما يلي:

 `#box-container { 
    display: flex; /* This makes the flex container */ 
    height: 500px; 
    flex-direction: row-reverse; /* This makes the direction be a row with reversed elements */ 
  } 
` 

ستلاحظ كيف أن ألوان تبديل المواضع مثل الاتجاه الافتراضي للحاويات المرنة هي صفوف كما قد تكون لاحظت من [مثال tweet](https://github.com/freecodecamp/guides/tree/master/src/pages/responsive-web-design/css-flexbox/add-flex-superpowers-to-the-tweet-embed/index.md) .