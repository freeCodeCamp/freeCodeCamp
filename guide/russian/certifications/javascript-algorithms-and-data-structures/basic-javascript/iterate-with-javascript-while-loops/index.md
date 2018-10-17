---
title: Iterate with JavaScript While Loops
localeTitle: Итерации с помощью JavaScript, в то время как циклы
---
## Итерации с помощью JavaScript, в то время как циклы

Хотя циклы будут работать, пока условие внутри () истинно. Пример:

```javascript
while(condition){ 
 code... 
 } 
```

## Подсказка 1:

Используйте переменную итератора, такую ​​как i в вашем состоянии

```javascript
var i = 0; 
 while(i <= 4){ 
 } 
```

## Spoiler Alert Solution Ahead!

## Решение:

```javascript
// Setup 
 var myArray = []; 
 
 // Only change code below this line. 
 var i = 0; 
 while (i <= 4){ 
    myArray.push(i); 
    i++; 
 } 

```