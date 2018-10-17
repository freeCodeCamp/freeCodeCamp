---
title: Go Variables
localeTitle: الذهاب المتغيرات
---
# الإعلانات المتغيرة في Go

## الطريقة 1: تعريفات متغيرة منتظم

يخلق الإعلان المتغير العادي واحد أو أكثر من المتغيرات من خلال معرفات ملزمة مع نوع وقيمة أولية. إذا تم التصريح عن متغير بدون نوع ، فسيتم إعطاء هذا المتغير نوع قيمة التهيئة المقابلة في المهمة. إذا تم تعريف متغير بدون قيمة أولية ، فسيتم تهيئة المتغير إلى قيمته [الصفرية](https://golang.org/ref/spec#The_zero_value) .

الأمثلة التالية هي كافة التعريفات المتغيرة الصالحة في go: اذهب var x int = 1 var y int var z = 0 var a، b float32 = -1، -2

 ``## Method 2: Short Variable Declarations 
 
 Shorthand variable declarations create variables with only an identifier and an initial value. The `var` keyword and types are not needed to declare a variable using shorthand syntax: 
`` 

اذهب س: = 1 نص ، يخطئ: = ioutil.ReadAll (القارئ) \`\` \`

قد تظهر إعلانات متغير قصيرة داخل وظائف فقط. في بعض السياقات مثل المهيآت ل `if` ، `for` ، أو `switch` البيانات، ويمكن استخدامها لإعلان المتغيرات المؤقتة المحلية.

#### معلومات اكثر:

*   [جولة في الذهاب](https://tour.golang.org/basics/8)
*   [الذهاب عن طريق المثال](https://gobyexample.com/variables)
*   [Golang كتاب](https://www.golang-book.com/books/intro/4)
*   [مواصفات لغة برمجة Go](https://golang.org/ref/spec#Variable_declarations)