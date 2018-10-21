---
title: C++ Arrays
localeTitle: صفائف C ++
---
## ما هي صفائف؟

المصفوفة هي سلسلة من العناصر من نفس نوع البيانات التي يتم تخزينها في مواقع الذاكرة المتجاورة ويمكن الرجوع إليها بشكل فردي.

على سبيل المثال ، يتم تعريف مصفوفة تحتوي على 5 قيم عدد صحيح تسمى الأرقام كما يلي:

 `int numbers [5]; 
` 

Initializiation:

 `//Initialization with entries: 
 int numbers [5] = {1, 2, 3, 4, 5}; 
 
 //Initialization with no values: 
 int numbers [5] = {}; 
 
 //Initialization with declaration: 
 int numbers [] = {1, 2, 3, 4, 5}; 
 //Note that here the number of values defines the size of the array. 
 //In the examples above, the size was fixed beforehand 
` 

**لاحظ** أن المصفوفات في C ++ ليست قابلة للتحويل من حيث الحجم ، مما يعني أنه بمجرد أن تقوم بإعلان مصفوفة بحجم 5 ، فلا يمكن تكبيرها أو تصغيرها. في حال كنت بحاجة إلى مصفوفة أكبر بنفس الإدخالات ، فسيتعين عليك نسخ كل الإدخالات إلى مجموعة جديدة من الحجم الأكبر.

### التمكن من:

يمكن الوصول إلى عناصر من مصفوفة من خلال الإشارة إلى موقعها في الصفيف. (ابدأ العد من 0).  
مثال:

 `x = numbers[0]; // = 1. [0] == first position 
 numbers[2] = 55; // Sets the third position (3) to the new number 55 
 //numbers[] is now: {1, 2, 55, 4, 5} 
`