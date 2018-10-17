---
title: Use class Syntax to Define a Constructor Function
localeTitle: استخدم بناء جملة class لتعريف دالة منشئ
---
## استخدم بناء جملة class لتعريف دالة منشئ

في هذا الدرس ، تقوم بتعريف كائن Vegetable باستخدام بناء جملة class.

## تلميح 1:

إنشاء فئة تسمى `Vegetable` . وسوف تحتوي على التفاصيل اللازمة حول كائن `Vegetable` .

## تلميح 2:

ضع `this.name` تسمى `name` ، `this.name` على `this.name` .

## تنبيه المفسد - الحل إلى الأمام!

## حل:

 `function makeClass() { 
  "use strict"; 
  /* Alter code below this line */ 
  class Vegetable { 
    constructor(name){ 
      this.name = name; 
    } 
  } 
  /* Alter code above this line */ 
  return Vegetable; 
 } 
` 

\=======

تحذير المفسد: هنا هو الحل الأساسي لهذا التحدي في حال تمسكك.

 `function makeClass() { 
  "use strict"; 
  /* Alter code below this line */ 
 
   class Vegetable { 
     constructor(Vegetable){ 
       this.Vegetable = Vegetable; 
 
     } 
   } 
 
  /* Alter code above this line */ 
  return Vegetable; 
 } 
 const Vegetable = makeClass(); 
 const carrot = new Vegetable('carrot'); 
 console.log(carrot.name); // => should be 'carrot' 
`