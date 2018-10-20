---
title: Error Handling and Try Catch Throw
localeTitle: خطأ في التعامل ومحاولة رمي الصيد
---
## خطأ في التعامل ومحاولة رمي الصيد

يمثل `try...catch..finally` statement عبارة عن مجموعة من العبارات للتجربة ، ويحدد استجابة ، في حالة طرح استثناء. في `try` يحتوي على عبارة واحدة أو أكثر من البيانات، واحد على الأقل `catch` بند أو `finally` فقرة، أو كليهما.

#### `try...catch`

 `try { 
   throw new Error('my error'); 
 } 
 catch (e) { 
  console.error(e.message); 
 } 
 
 // Output: 
 // my error 
` 

#### `try...finally` :

 `try { 
   throw new Error('my error'); 
 } 
 finally { 
  console.error('finally'); 
 } 
 
 // Output: 
 // finally 
` 

_ملاحظة:_ عندما لا `catch` الخطأ ، فإنه في الواقع لا "يصطاد" ​​، حتى لو تم تنفيذ الحظر `finally` . وهذا يعني أن الخطأ سيستمر في كتلة `try` العليا (أو الكتلة الرئيسية).

#### `try...catch...finally` :

 `try { 
   throw new Error('my error'); 
 } 
 catch (e) { 
  console.error(e.message); 
 } 
 finally { 
  console.error('finally'); 
 } 
 
 // Output: 
 // my error 
 // finally 
` 

الاستخدام النموذجي:

 `try { 
   openFile(file); 
   readFile(file) 
 } 
 catch (e) { 
  console.error(e.message); 
 } 
 finally { 
  closeFile(file); 
 } 
` 

#### `try...catch` متداخلة `try...catch`

بامكانك ايضا:

*   اعتبر عبارة `try-catch` داخل كتلة `try` .
*   رمي الخطأ صعودا.

 `try { 
  try { 
    throw new Error('my error'); 
  } 
  catch (e) { 
    console.error('inner', e.message); 
    throw e; 
  } 
  finally { 
    console.log('finally'); 
  } 
 } 
 catch (e) { 
  console.error('outer', e.message); 
 } 
 
 // Output: 
 // inner my error 
 // finally 
 // outer my error 
` 

#### أنواع الخطأ

##### خطأ مرجعي

 `var x; 
 try { 
  x = y + 1;   // y cannot be referenced (used) 
 } 
 catch(err) { 
  console.log(err.name, err.message); 
 } 
 // ReferenceError y is not defined 
` 

##### خطأ في بناء الجملة

 `try { 
    eval("alert('Hello)");   // Missing ' will produce an error 
 } 
 catch(err) { 
    console.log(err.name,err.message); 
 } 
 // SyntaxError Invalid or unexpected token 
` 

##### خطأ مطبعي

 `var num = 1; 
 try { 
    num.toUpperCase();   // You cannot convert a number to upper case 
 } 
 catch(err) { 
    console.log(err.name, err.message); 
 } 
 // TypeError num.toUpperCase is not a function 
` 

##### خطأ URI

 `try { 
    decodeURI("%%%");   // You cannot URI decode these percent signs 
 } 
 catch(err) { 
    console.log(err.name, err.message); 
 } 
 // URIError URI malformed 
` 

#### معلومات اكثر:

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try…catch) [W3S](https://www.w3schools.com/js/js_errors.asp)