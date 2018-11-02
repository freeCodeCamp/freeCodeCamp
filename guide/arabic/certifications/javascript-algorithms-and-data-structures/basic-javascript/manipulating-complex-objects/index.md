---
title: Manipulating Complex Objects
localeTitle: معالجة الكائنات المعقدة
---
## معالجة الكائنات المعقدة

هنا هو المثال:

 `var myMusic = [ 
  { 
    "artist": "Billy Joel", 
    "title": "Piano Man", 
    "release_year": 1973, 
    "formats": [ 
      "CD", 
      "8T", 
      "LP" 
    ], 
    "gold": true 
  } 
  // Add record here 
 ]; 
` 

وإليك الحل: بعد السلسلة `// Add record here` نقوم بإضافة ألبوم جديد إلى `myMusic` . أنت في حاجة للبدء من `,` . ويمكنك فقط نسخ ألبوم تم إنشاؤه بالفعل: `javascript { "artist": "Billy Joel", "title": "Piano Man", "release_year": 1973, "formats": [ "CD", "8T", "LP" ], "gold": true }`

ولصق بعد `,` :

 `  // Add record here 
  , 
  { 
    "artist": "Billy Joel", 
    "title": "Piano Man", 
    "release_year": 1973, 
    "formats": [ 
      "CD", 
      "8T", 
      "LP" 
    ], 
    "gold": true 
  } 
 ]; 
` 

الآن ، يمكنك تغيير قيم ألبومك:

 `  // Add record here 
  , 
  { 
    "artist": "Deep Purple", 
    "title": "Smoke on the water", 
    "release_year": 1976, 
    "formats": [ 
      "CD", 
      "8T", 
      "LP" 
    ], 
    "gold": true 
  } 
 ]; 
` 

وإليك الحل الكامل:

\`\` \`جافا سكريبت var myMusic = \[ { "الفنان": "بيلي جويل" ، "title": "Piano Man" ، " _سنة_ الإصدار _": 1973 ، "التنسيقات": \[ "CD"، "8T" "LP" \]، "الذهب": صحيح }، // أضف سجل هنا { "الفنان": "Deep Purple" ، "العنوان": "دخان على الماء" ، "_ سنة _الإصدار_ ": 1976 ، "التنسيقات": \[ "CD"، "8T" "LP" \]، } \].

\`\` \`