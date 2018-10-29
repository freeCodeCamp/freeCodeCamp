---
title: Use the every Method to Check that Every Element in an Array Meets a Criteria
localeTitle: استخدم كل أسلوب للتحقق من أن كل عنصر في صفيف يلبي معايير
---
## استخدم كل أسلوب للتحقق من أن كل عنصر في صفيف يلبي معايير

### شرح المشكلة:

استخدم `every` طريقة داخل وظيفة `checkPositive` للتحقق مما إذا كان كل عنصر في `arr` موجب. يجب أن ترجع الدالة قيمة منطقية.

#### روابط ذات صلة:

*   [Array.prototype.every ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

### ملحوظة

لا تنسى `return`

## حل

 `function checkPositive(arr) { 
  // Add your code below this line 
 
  return arr.every(val => val > 0); 
  // Add your code above this line 
 } 
 checkPositive([1, 2, 3, -4, 5]); 
` 

## حل بديل

 `function checkPositive(arr) { 
  // Add your code below this line 
    return arr.every(function(value) { 
        return value > 0; 
    }); 
  // Add your code above this line 
 } 
 checkPositive([1, 2, 3, -4, 5]); 
`