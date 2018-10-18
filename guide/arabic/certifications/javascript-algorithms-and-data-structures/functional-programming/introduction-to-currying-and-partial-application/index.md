---
title: Introduction to Currying and Partial Application
localeTitle: مقدمة في التجلي والتطبيق الجزئي
---
## مقدمة في التجلي والتطبيق الجزئي

### حل

 `function add(x) { 
  // Add your code below this line 
  return function(y) { 
    return function(z) { 
      return x + y + z; 
    } 
  } 
  // Add your code above this line 
 } 
 add(10)(20)(30); 
`