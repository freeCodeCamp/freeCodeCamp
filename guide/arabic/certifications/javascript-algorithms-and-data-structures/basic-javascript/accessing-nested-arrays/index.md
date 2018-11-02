---
title: Accessing Nested Arrays
localeTitle: الوصول إلى صفائف متداخلة
---
## الوصول إلى صفائف متداخلة

### الوصول إلى عناصر داخل صفيف باستخدام تدرج قوس `[]`

 `var fruitBasket = ['apple', 'banana' 'orange', 'melon']; 
 var favoriteFruit = fruitBasket[2]; 
 
 console.log(favoriteFruit) // 'orange' 
` 

في هذا المثال ، `fruitBasket` المفضلة هي "برتقالي" وهي في الفهرس `2` في مجموعة `fruitBasket` . باستخدام تدوين braket ، نقوم بتعيين مؤشر `2` من مجموعة `fruitBasket` إلى `favoriteFruit` . هذا يجعل `favoriteFruit` يساوي "برتقالي".

### الوصول إلى الكائنات داخل المصفوفات باستخدام braket `[]` ونقطة `.` الرموز

 `var garage = [ 
  { 
    type: 'car', 
    color: 'red', 
    make: 'Ford' 
  }, 
  { 
    type: 'motorbike', 
    color: 'black', 
    make: 'Yamaha' 
  }, 
  { 
    type: 'bus', 
    color: 'yellow', 
    make: 'Blue Bird' 
  } 
 ]; 
 
 var busColor = garage[2].color; // 'yellow' 
` 

## حل:

 `// Setup 
 var myPlants = [ 
  { 
    type: "flowers", 
    list: [ 
      "rose", 
      "tulip", 
      "dandelion" 
    ] 
  }, 
  { 
    type: "trees", 
    list: [ 
      "fir", 
      "pine", 
      "birch" 
    ] 
  } 
 ]; 
 
 // Only change code below this line 
 
 var secondTree = myPlants[1].list[1]; 
`