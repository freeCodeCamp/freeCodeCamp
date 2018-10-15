---
title: Child
localeTitle: طفل
---
## طفل

يتم تمثيل محدد الطفل بـ `>` ويتم وضعه بين اثنين من المحددات: `parent > child` . يتطابق مع أي محدد الثاني هم أبناء المحدد الأول (الأصل). يجب أن يكون المختار الثاني أطفالًا فوريين للأول.

في ما يلي مثال على البنية:

 `first selector (parent) > second selector (child) { 
    css declarations; 
 } 
` 

في ما يلي مثال الكود الذي يطابق كل عنصر `span` الفوري مع أصل `div` :

 `div > span { 
    background-color: red; 
 } 
` 

### معلومات اكثر:

*   [W3C الطفل محدد العمل مسودة](https://www.w3.org/TR/CSS22/selector.html#child-selectors)