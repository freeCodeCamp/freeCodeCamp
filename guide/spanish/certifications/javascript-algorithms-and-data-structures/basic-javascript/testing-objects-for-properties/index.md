---
title: Testing Objects for Properties
localeTitle: Prueba de objetos para propiedades
---
## Prueba de objetos para propiedades

Aquí está el ejemplo:

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

Aquí hay una solución:

Aquí no cambiamos nada:

```javascript
// Setup 
 var myObj = { 
  gift: "pony", 
  pet: "kitten", 
  bed: "sleigh" 
 }; 
```

Además, en el cuerpo de la función usamos el método de objetos `.hasOwnProperty(propname)` para determinar si ese objeto tiene el nombre de propiedad dado. `if/else` declaración `if/else` con valores booleanos nos ayudará en esto:

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

javascript volver "No encontrado" } }
```
Now, you can change `checkObj` values: 
```

javascript // Prueba tu código modificando estos valores checkObj ("regalo");
```
Here's a full solution: 
```

javascript función checkObj (checkProp) { // Tu Código Aquí if (myObj.hasOwnProperty (checkProp) == true) { return myObj \[checkProp\]; } else { volver "No encontrado" } } // Prueba tu código modificando estos valores checkObj ("regalo"); \`\` \`