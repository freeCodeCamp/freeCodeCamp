---
title: Use getters and setters to Control Access to an Object
localeTitle: استخدام getters والمستقرون على التحكم في الوصول إلى كائن
---
## استخدام getters والمستقرون على التحكم في الوصول إلى كائن

تمثل الحروف والأجسام أجزاء مهمة من فئة / كائن. تسمح لك بالتحكم في سماتها من الخارج. سوف تصبح أكثر بروزًا عند بدء استخدام وحدة البرمجة الشيئية (القادمة!). في الوقت الحالي ، يوضح لك هذا التمرين كيفية التلاعب بها مع ES6.

## تلميح 1:

خلق الطبقة ، ترموستات. أنت ذاهب لوضع المنشئ الخاص بك ، الثرى ، واضعة هنا.

## تلميح 2:

إعطاء المعلمة معلمة (والتي يمكنك تسمية أي شيء تريده). قم بتعيين المعلمة إلى سمة بنفس الاسم. تذكر ، أنت في البداية وضع الأشياء في درجة حرارة فهرنهايت.

## تلميح 3:

إنشاء طريقة get يحول سمة Farenheit إلى مئوية. استخدم الصيغة المقدمة لك.

## تلميح 4:

قم بإنشاء طريقة تعيين بنفس الاسم مثل طريقة get. يجب أن تحتوي على معلمة تقبل درجة حرارة مئوية. تحويله إلى farenheit ، وتعيينه إلى السمة.

## تنبيه المفسد - الحل إلى الأمام!

## حل

 `function makeClass() { 
  "use strict"; 
  /* Alter code below this line */ 
 
  class Thermostat{ 
    constructor(farenheit){ 
      this.farenheit = farenheit; 
    } 
    get temperature(){ 
      return 5 / 9 * (this.farenheit - 32); 
    } 
    set temperature(celsius){ 
      this.farenheit = celsius * 9.0 / 5 + 32; 
    } 
  } 
 
  /* Alter code above this line */ 
  return Thermostat; 
 } 
`