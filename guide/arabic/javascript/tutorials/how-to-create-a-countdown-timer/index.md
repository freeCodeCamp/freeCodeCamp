---
title: How to Create a Countdown Timer
localeTitle: كيفية إنشاء مؤقت للعد التنازلي
---
## كيفية إنشاء مؤقت للعد التنازلي

### خلق

ابدأ ببناء وظيفة countdownTimer.

 `function startCountdown(seconds){ 
  var counter = seconds; 
 
  var interval = setInterval(() => { 
    console.log(counter); 
    counter--; 
 
 
    if(counter < 0 ){ 
 
      // The code here will run when 
      // the timer has reached zero. 
 
      clearInterval(interval); 
      console.log('Ding!'); 
    }; 
  }, 1000); 
 }; 
` 

### إعدام

الآن لبدء تشغيل جهاز ضبط الوقت ، نوفر `startCountdown()` مع قيمة عدد كوسيطة تمثل الثواني للعد التنازلي.

 `  startCountdown(10); 
  // Console Output // 
  // 10 
  // 9 
  // 8 
  // 7 
  // 6 
  // 5 
  // 4 
  // 3 
  // 2 
  // 1 
  // 0 
  // Ding! 
` 

### مثال حي

[Codepen - العد التنازلي](https://codepen.io/rdev-rocks/pen/jLogxY?editors=0012)

### المزيد من الموارد

الطرق المستخدمة:

*   [setInterval ()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)
*   [clearInterval ()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval)