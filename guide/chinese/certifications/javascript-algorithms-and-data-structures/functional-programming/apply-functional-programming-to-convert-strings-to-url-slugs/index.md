---
title: Apply Functional Programming to Convert Strings to URL Slugs
localeTitle: 应用函数式编程将字符串转换为URL Slugs
---
## 应用函数式编程将字符串转换为URL Slugs

### 解

```javascript
// the global variable 
 var globalTitle = "Winter Is Coming"; 
 
 // Add your code below this line 
 function urlSlug(title) { 
 return title.split(/\W/).filter((obj)=>{ 
    return obj !==''; 
  }).join('-').toLowerCase(); 
 
 } 
 // Add your code above this line 
 
 var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming" 
```

### 替代解决方案

```javascript
// the global variable 
 var globalTitle = "Winter Is Coming"; 
 
 // Add your code below this line 
 function urlSlug(title) { 
  return title.toLowerCase().trim().split(/\s+/).join('-'); 
 } 
 // Add your code above this line 
 
 var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming" 

```