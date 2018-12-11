---
title: Using Objects for Lookups
localeTitle: Использование объектов для поиска
---
## Использование объектов для поиска

Вот пример:

```javascript
// Setup 
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
```

Вот решение: Мы ничего здесь не меняем:

```javascript
function phoneticLookup(val) { 
  var result = ""; 
```

Нам нужно преобразовать оператор switch в объект. Перенесите все значения `case` в свойства объекта:

```javascript
function phoneticLookup(val) { 
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
```

Javascript result = lookup \[val\]; \`\` \`

· Запустить код в [repl.it.](https://repl.it/@AdrianSkar/Using-objects-for-lookups)

### Ресурсы

*   [«Основы JavaScript-основы» - _ссылка на MDN JavaScript_](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)