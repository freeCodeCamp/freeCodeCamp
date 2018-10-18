---
title: Using Objects for Lookups
localeTitle: Uso de objetos para búsquedas
---
## Uso de objetos para búsquedas

Aquí está el ejemplo:

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

Aquí hay una solución: Aquí no cambiamos nada:

```javascript
function phoneticLookup(val) { 
  var result = ""; 
```

Necesitamos convertir la instrucción switch en un objeto. Transfiere todos los valores de `case` a las propiedades del objeto:

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

javascript resultado = búsqueda \[val\]; \`\` \`

· Ejecutar código en [repl.it.](https://repl.it/@AdrianSkar/Using-objects-for-lookups)

### Recursos

*   ["Fundamentos de objetos JavaScript" - _Referencia de JavaScript MDN_](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)