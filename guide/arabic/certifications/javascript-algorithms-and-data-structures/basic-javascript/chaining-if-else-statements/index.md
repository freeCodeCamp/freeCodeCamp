---
title: Chaining If Else Statements
localeTitle: تسلسل إذا كانت تصريحات أخرى
---
## تسلسل إذا كانت تصريحات أخرى

*   `If` : الشرطي الأول في كل عبارة if / else ، فيكون الشرط _صحيحًا_ ، وتنفيذ التعليمات البرمجية وتجاهل الباقي.
*   `Else if` : لا يمكن أبدا أن تستخدم كأول شرطي. دائمًا ما يكون مشروطًا بعد ، `if` الشرط صحيحًا ، فنفذ الشفرة. على خلاف ذلك يقفز إلى الشرطي المقبل.
*   `Else` : إذا كانت جميع الشروط الشرطية السابقة _خاطئة_ ، **فسيتم** تنفيذ **آخر** .

### شرح المشكلة:

_كتابة مقيد `if` / `else if` العبارات تستوفي الشروط التالية_ :

_`num < 5` - عودة "صغيرة" `num < 10` - عودة "صغير" `num < 15` - عودة "متوسطة" `num < 20` - عودة "كبير" `num >= 20` - return "Huge"_

#### تلميح 1

تذكر أنه يمكنك الجمع بين (سلسلة) عدة `if...else` عبارات أخرى واحدة تلو الأخرى حتى آخر واحد باستخدام `else if (condition) {do this}` .

> _حاول أن تحل المشكلة الآن_
> 
> #### تلميح 2
> 
> في بعض الأحيان ، عندما تكتب رمزًا أكثر مما اعتدت عليه ولا يعمل ، فإن الأشياء الصغيرة هي ما يخوننا. يمكن أن يكون التحقق من الفواصل المنقوطة والأقواس المعقوفة وغير ذلك مفيدًا جدًا. _حاول أن تحل المشكلة الآن_

## تنبيه المفسد!

**الحل في المستقبل!**

## حل:

 `function testSize(num) { 
  // Only change code below this line 
  if (num < 5){ 
    return "Tiny"; 
  } 
  else if (num < 10) { 
    return "Small"; 
  } 
  else if (num < 15){ 
    return "Medium"; 
  } 
  else if (num < 20){ 
    return "Large"; 
  } 
  else { 
    return "Huge"; 
  } 
  // Only change code above this line 
 } 
` 

تشغيل الكود في [repl.it](https://repl.it/@AdrianSkar/Basic-JS-Chaining-ifelse-statements)

### تفسير الشفرة

تتحقق الدالة أولاً من `if` الشرط `(num < 5)` . إذا قيّمت إلى `true` ، فإنها ترجع العبارة بين الأقواس المتعرجة ("Tiny"). إذا لم يحدث ذلك ، فإنه يتحقق الشرط التالي حتى `else` بيان `else` .

### مصادر

*   ["if… else" - _MDN JavaScript reference_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if…else)