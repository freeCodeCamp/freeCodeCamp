---
title: Testing Objects for Properties
localeTitle: Testando Objetos para Propriedades
---
## Testando Objetos para Propriedades

Aqui está o exemplo:

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

Aqui está uma solução:

Nós não mudamos nada aqui:

```javascript
// Setup 
 var myObj = { 
  gift: "pony", 
  pet: "kitten", 
  bed: "sleigh" 
 }; 
```

além disso, no corpo da função, usamos o `.hasOwnProperty(propname)` dos objetos para determinar se esse objeto tem o nome da propriedade fornecido. `if/else` declaração com valores booleanos nos ajudará nisso:

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

javascript return "Não encontrado" } }
```
Now, you can change `checkObj` values: 
```

javascript // Teste seu código modificando esses valores checkObj ("presente");
```
Here's a full solution: 
```

javascript function checkObj (checkProp) { // seu código aqui if (myObj.hasOwnProperty (checkProp) == true) { return myObj \[checkProp\]; } outro { return "Não encontrado" } } // Teste seu código modificando esses valores checkObj ("presente"); \`\` \`