---
title: Testing Objects for Properties
localeTitle: Тестирование объектов для свойств
---
## Тестирование объектов для свойств

Вот пример:

```javascript
// Setup 
 var myObj = { 
  gift: "pony", 
  pet: "kitten", 
  bed: "sleigh" 
 }; 
 
 function checkObj(checkProp) { 
  // Your Code Here 
 
  return "Change Me!"; 
 } 
 
 // Test your code by modifying these values 
 checkObj("gift"); 
```

Вот решение:

Мы ничего здесь не меняем:

```javascript
// Setup 
 var myObj = { 
  gift: "pony", 
  pet: "kitten", 
  bed: "sleigh" 
 }; 
```

далее, в теле функции мы используем `.hasOwnProperty(propname)` объектов, чтобы определить, имеет ли этот объект указанное имя свойства. `if/else` с булевыми значениями поможет нам в этом:

```javascript
function checkObj(checkProp) { 
  // Your Code Here 
  if (myObj.hasOwnProperty(checkProp) == true) { 
    return myObj[checkProp]; 
  } 
  else { 
 ``` 
 
 and change the value of `return` in `else` statement: 
```

Javascript return "Not Found" } }
```
Now, you can change `checkObj` values: 
```

Javascript // Проверяем ваш код, изменяя эти значения checkObj ( "подарок");
```
Here's a full solution: 
```

Javascript функция checkObj (checkProp) { // Ваш код здесь if (myObj.hasOwnProperty (checkProp) == true) { return myObj \[checkProp\]; } else { return "Not Found" } } // Проверяем ваш код, изменяя эти значения checkObj ( "подарок"); \`\` \`