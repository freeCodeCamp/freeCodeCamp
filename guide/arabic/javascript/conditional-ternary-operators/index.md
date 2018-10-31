---
title: Conditional Ternary Operators
localeTitle: مشغلون شرطيون شرطيون
---
## مشغلون شرطيون شرطيون

### الاستخدام الأساسي

المشغل الثلاثي هو طريقة مدمجة لكتابة if-else داخل تعبير.

 `const thing = (condition) ? <if true> : <if false>; 
` 

على سبيل المثال

 `const cappedInput = input > 50 ? 50 : input // this will cap the input at 50 
` 

### آخر إذا

يمكنك أيضًا تشغيل مشغلات ثلاثية ، وبهذه الطريقة سيكون لديك سلوك آخر في حالة ما عدا ذلك

 `<first condition> ? <value if first true> 
 : <second condition> ? <value if second is true> 
 : <fallback value> 
` 

> **نصيحة للمحترفين** : كما ترى ، يمكنك تقسيم المشغل الثلاثي على عدة أسطر على سبيل المثال

 `const wealth = housesOwned > 3 ? "rich" 
             : housesOwned > 1 ? "nothing to complain" 
             : "poor" 
`