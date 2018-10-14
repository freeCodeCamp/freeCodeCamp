---
title: Apply Functional Programming to Convert Strings to URL Slugs
localeTitle: Применить функциональное программирование для преобразования строк в URL-адреса
---
## Применить функциональное программирование для преобразования строк в URL-адреса

### Решение

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

### Альтернативное решение

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