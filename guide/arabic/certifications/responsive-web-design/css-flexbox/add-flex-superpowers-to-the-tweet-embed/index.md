---
title: Add Flex Superpowers to the Tweet Embed
localeTitle: أضف Flex Flexpowers إلى Tweet تضمين
---
## أضف Flex Flexpowers إلى Tweet تضمين

بناء على [التحدي السابق](https://github.com/freecodecamp/guides/tree/master/src/pages/responsive-web-design/css-flexbox/use-display-flex-to-position-two-boxes/index.md) ، سوف تحتاج إلى إضافة الخاصية إلى المحددات الصحيحة. هنا الحيلة هي تحديد محدد الحق ثم كل ما تحتاجه لإضافة _العرض: فليكس._ خاصية.

سيضمن الرأس أن الصورة والاسم والمقبض ومتابعة الأزرار ستتم إعادة ترتيبها بشكل أفقي.

 `header { 
    display: flex; 
 } 
` 

يحاذي الاسم والمقبض ليبدو كجملة واحدة.

 `header .profile-name { 
    display:flex; 
    margin-left: 10px; 
  } 
` 

ستؤدي إضافة الخاصية إلى زر المتابعة مع الهامش إلى توسيط الزر إلى الحجم الصحيح.

 `header .follow-btn { 
    display:flex; 
    margin: 0 0 0 auto; 
  } 
` 

يتم استخدام نفس الفكرة على عناصر التذييل.