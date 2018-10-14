---
title: Store Data in Web Browsers Storage
localeTitle: تخزين البيانات في تخزين متصفحات الويب
---
لإدارة البيانات التي تتم معالجتها بواسطة تطبيق الويب الخاص بك ، لا تحتاج بالضرورة إلى قاعدة بيانات. يتم دعم ميزات "تخزين المستعرض" المعنية من قبل Chrome (الإصدار 4 وما يليه) ، و Mozilla Firefox (الإصدار 3.5 والإصدارات الأحدث) و Internet Explorer (الإصدار 8 والإصدارات الأحدث) ، ومجموعة من المتصفحات الأخرى بما في ذلك iOS و Android.

هناك احتمالان رئيسيان لتخزين المتصفح:

## 1\. localStorage

أي محتوى / بيانات محفوظة على كائن `localStorage` سيكون متاحًا بعد إعادة تشغيل المتصفح (يتم إغلاقه وفتحه مرة أخرى). **_لحفظ عنصر_** إلى `localStorage` ، يمكنك استخدام الطريقة `setItem()` . يجب تسليم هذه الطريقة مفتاح وقيمة.

 `Example: localStorage.setItem("mykey","myvalue"); 
` 

**_لاسترجاع العنصر من localStorage_** ، يجب استخدام `getItem` للأسلوب. يجب أن تسلم طريقة `getItem` مفتاح البيانات التي ترغب في استردادها:

 `  Example: localStorage.getItem("mykey"); 
` 

يمكنك إزالة عنصر من `localStorage` باستخدام الأسلوب `removeItem()` . يجب تسليم هذه الطريقة مفتاح العنصر المطلوب إزالته:

 `  Example: localStorage.removeItem("mykey"); 
` 

لمسح `localStorage` بأكمله ، يجب عليك استخدام الأسلوب `clear()` على كائن `localStorage` :

 `  Example: localStorage.clear(); 
` 

## 2\. sessionStorage

ستظل العناصر المحفوظة في كائن `sessionStorage` العمل حتى يتم إغلاق المتصفح من قبل المستخدم. ثم ، سيتم مسح التخزين.

يمكنك حفظ عنصر إلى `sessionStorage` ، يرجى استخدام الأسلوب `setItem()` على `sessionStorage` الكائن:

 `Example: sessionStorage.setItem("mykey","myvalue"); 
` 

**_لاسترداد العنصر من sessionStorage_** ، يجب استخدام `getItem` للأسلوب. يجب أن تسلم طريقة `getItem` مفتاح البيانات التي ترغب في استردادها:

 `  Example: sessionStorage.getItem("mykey"); 
` 

يمكنك إزالة عنصر من `sessionStorage` باستخدام طريقة `removeItem()` . يجب تسليم هذه الطريقة مفتاح العنصر المطلوب إزالته:

 `  Example: sessionStorage.removeItem("mykey"); 
` 

لمسح الجلسة بأكملها `sessionStorage` ، يجب عليك استخدام الأسلوب `clear()` على كائن `sessionStorage` :

 `  Example: sessionStorage.clear(); 
` 

## حفظ المصفوفات إلى التخزين المحلي والذاكرة التخزين المؤقت

لا يمكنك فقط حفظ قيم مفردة في `localStorage` و `sessionStorage` ، ولكن يمكنك أيضًا حفظ محتوى الصفيف.

في هذا المثال ، لدينا صفيف يحتوي على أرقام:

 `var ourArray =[1,2,3,4,5]; 
` 

يمكننا الآن حفظه إلى `localStorage` أو `sessionStorage` باستخدام `setItem()` الأسلوب:

 `localStorage.setItem("ourarraykey",JSON.stringify(ourArray)); 
` 

أو بالنسبة إلى `sessionStorage` :

 `sessionStorage.setItem("ourarraykey",JSON.stringify(ourArray)); 
` 

لكي يتم حفظه ، يجب أولاً تحويل الصفيف إلى سلسلة. في المثال الموضح أعلاه ، نستخدم طريقة `JSON.stringify` لإنجاز ذلك.

عند استرداد بياناتنا من `localStorage` أو `sessionStorage` ، قم بتحويلها إلى مصفوفة:

 `var storedArray = localStorage.getItem("ourarraykey"); 
 ourArray = JSON.parse(storedArray); 
` 

أو بالنسبة إلى `sessionStorage` :

 `var storedArray = sessionStorage.getItem("ourarraykey"); 
 ourArray = JSON.parse(storedArray); 
`