---
title: Remember to Set the Constructor Property when Changing the Prototype
localeTitle: تذكر تعيين الخاصية منشئ عند تغيير "النموذج الأولي"
---
## تذكر تعيين الخاصية منشئ عند تغيير "النموذج الأولي"

*   تذكر تعريف الخاصية منشئ عند تعيين نموذج أولي لكائن جديد.

# حل

 `Dog.prototype = { 
 
  constructor: Dog, // Solution 
 
  numLegs: 2, 
  eat: function() { 
    console.log("nom nom nom"); 
  }, 
  describe: function() { 
    console.log("My name is " + this.name); 
  } 
 }; 
`