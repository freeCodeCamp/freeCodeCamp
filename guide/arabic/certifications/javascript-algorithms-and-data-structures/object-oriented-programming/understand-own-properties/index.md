---
title: Understand Own Properties
localeTitle: فهم خصائص خاصة
---
## فهم خصائص خاصة

### طريقة:

في مثال الكود المعطى سترى مصفوفة جديدة `ownProps[]` intialised متبوعة بعلامة `for...in` العبارة للتكرار من خلال خصائص `duck` ثم استخدم عبارة `push()` لملء الصفيف الجديد. يجب اتباع نفس الطريقة لكائن `canary` .

ببساطة `duck` كائن `duck` في العبارة "for… in" مع كائن `canary` لتمرير جميع حالات الاختبار.

### حل:

 `let canary = new Bird("Tweety"); 
 let ownProps = []; 
 // Add your code below this line 
 for(let property in canary) { 
  if(canary.hasOwnProperty(property)) { 
    ownProps.push(property); 
  } 
 } 
`