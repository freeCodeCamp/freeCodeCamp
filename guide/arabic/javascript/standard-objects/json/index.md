---
title: JSON
localeTitle: JSON
---
يستخدم JavaScript Object Notation أو `JSON` تنسيق كائنات JavaScript لتخزين البيانات. يتميز JSON بالمرونة لأنه يسمح `Data Structures` عشوائية من `strings` `numbers` `booleans` `arrays` `objects` .

في ما يلي مثال على كائن JSON:

 `var ourMusic = [ 
  { 
    "artist": "Daft Punk", 
    "title": "Homework", 
    "release_year": 1997, 
    "formats": [ 
      "CD", 
      "Cassette", 
      "LP" ], 
    "gold": true 
  } 
 ]; 
` 

هذه صفيف من الكائنات ويحتوي الكائن على أجزاء مختلفة من `metadata` حول أحد الألبومات. كما أن لديها مجموعة `formats` متداخلة. يمكن إضافة سجلات ألبوم إضافية إلى مصفوفة المستوى الأعلى.