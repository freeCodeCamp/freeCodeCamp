---
title: Iterate with JavaScript Do...While Loops
localeTitle: Итерация с помощью JavaScript Do ... While Loops
---
## Итерация с помощью JavaScript Do ... While Loops

*   `Do...While` циклы убеждаются, что код выполняется хотя бы один раз, и после выполнения, если условие внутри `while()` равно **true** , оно продолжается с циклом, в противном случае оно останавливается.

## Решение

```javascript
var myArray = []; 
 var i = 10; 
 
 do { 
  myArray.push(i); 
  i++; 
 } while(i <= 10); 

```