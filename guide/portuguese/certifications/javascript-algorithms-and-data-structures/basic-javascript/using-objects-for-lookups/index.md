---
title: Using Objects for Lookups
localeTitle: Usando objetos para pesquisas
---
## Usando objetos para pesquisas

Aqui está o exemplo:

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

Aqui está uma solução: Nós não mudamos nada aqui:

```javascript
function phoneticLookup(val) { 
  var result = ""; 
```

Precisamos converter a instrução switch em um objeto. Transfira todos os valores de `case` para propriedades de objeto:

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

javascript resultado = pesquisa \[val\]; \`\` \`

· Executar código no [repl.it.](https://repl.it/@AdrianSkar/Using-objects-for-lookups)

### Recursos

*   ["Princípios básicos do objeto JavaScript" - _referência do MDN JavaScript_](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)