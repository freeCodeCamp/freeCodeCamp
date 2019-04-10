---
title: Using Objects for Lookups
localeTitle: استخدام كائنات لعمليات البحث
---
## استخدام كائنات لعمليات البحث

هنا هو المثال:

 `// Setup 
 function phoneticLookup(val) { 
  var result = ""; 
 
  // Only change code below this line 
  switch(val) { 
    case "alpha": 
      result = "Adams"; 
      break; 
    case "bravo": 
      result = "Boston"; 
      break; 
    case "charlie": 
      result = "Chicago"; 
      break; 
    case "delta": 
      result = "Denver"; 
      break; 
    case "echo": 
      result = "Easy"; 
      break; 
    case "foxtrot": 
      result = "Frank"; 
  } 
 
  // Only change code above this line 
  return result; 
 } 
 
 // Change this value to test 
 phoneticLookup("charlie"); 
` 

وإليك الحل: نحن لا نغير أي شيء هنا:

 `function phoneticLookup(val) { 
  var result = ""; 
` 

نحن بحاجة إلى تحويل بيان التبديل إلى كائن. نقل كل قيم `case` إلى خصائص الكائن:

 ``function phoneticLookup(val) { 
  var result = ""; 
  var lookup = { 
    "alpha": "Adams", 
    "bravo": "Boston", 
    "charlie": "Chicago", 
    "delta": "Denver", 
    "echo": "Easy", 
    "foxtrot": "Frank" 
  }; 
  ``` 
 After converting our case statements into object properties you can make use of the variable `result` to let the function return the correct value. 
`` 

جافا سكريبت result = lookup \[val\]؛ \`\` \`

تشغيل الكود في [repl.it.](https://repl.it/@AdrianSkar/Using-objects-for-lookups)

### مصادر

*   ["أساسيات كائن جافا سكريبت" - _مرجع جافا سكريبت MDN_](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)