---
title: Apply Functional Programming to Convert Strings to URL Slugs
localeTitle: Aplicar programação funcional para converter seqüências de caracteres em URL Slugs
---
## Aplicar programação funcional para converter seqüências de caracteres em URL Slugs

### Solução

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

### Solução alternativa

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