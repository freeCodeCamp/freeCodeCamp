---
title: Do...While Loop
localeTitle: هل ... في حين حلقة
---
و `do...while` يرتبط ارتباطا وثيقا حلقة [`while`](http://forum.freecodecamp.com/t/javascript-while-loop/14668) حلقة. في حلقة "القيام أثناء" ، يتم التحقق من الشرط في نهاية الحلقة.

إليك **بناء الجملة** لـ `do...while` التكرار:

## بناء الجملة:

 ` do { 
 
   *Statement(s);* 
 
 } while (*condition*); 
` 

**statement (s):** بيان يتم تنفيذه **مرة واحدة على الأقل** قبل الشرط أو يتم تقييم Boolean expression ويتم إعادة تنفيذه في كل مرة يتم فيها تقييم الشرط إلى true.

**الشرط:** هنا ، الشرط هو تعبير منطقي . إذا تم تقييم التعبير المنطقي إلى true ، فسيتم تنفيذ العبارة مرة أخرى. عندما يتم تقييم التعبير المنطقي إلى false ، تنتهي الحلقات.

## مثال:

 `var i = 0; 
 do { 
  i = i + 1; 
  console.log(i); 
 } while (i < 5); 
 
 Output: 
 1 
 2 
 3 
 4 
 5 
` 

المصدر: [**فعل ... بينما**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do…while)