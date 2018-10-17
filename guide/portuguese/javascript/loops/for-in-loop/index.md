---
title: For...In Loop
localeTitle: Para ... Em Loop
---
A instrução `for...in` itera sobre as propriedades enumeráveis ​​de um objeto, em ordem arbitrária. Para cada propriedade distinta, instruções podem ser executadas.
```
for (variable in object) { 
 ... 
 } 
```

| Obrigatório / Opcional | Parâmetro | Descrição | | ------------------- | ----------- | ----------------- -------------------------------------------------- --- | | Obrigatório | Variável | Um nome de propriedade diferente é atribuído à variável em cada iteração. | | Opcional | Objeto | Objeto cujas propriedades enumeráveis ​​são iteradas. |

## Exemplos
```
// Initialize object. 
 a = { "a": "Athens", "b": "Belgrade", "c": "Cairo" } 
 
 // Iterate over the properties. 
 var s = "" 
 for (var key in a) { 
    s += key + ": " + a[key]; 
    s += "<br />"; 
    } 
 document.write (s); 
 
 // Output: 
 // a: Athens 
 // b: Belgrade 
 // c: Cairo 
 
 // Initialize the array. 
 var arr = new Array("zero", "one", "two"); 
 
 // Add a few expando properties to the array. 
 arr["orange"] = "fruit"; 
 arr["carrot"] = "vegetable"; 
 
 // Iterate over the properties and elements. 
 var s = ""; 
 for (var key in arr) { 
    s += key + ": " + arr[key]; 
    s += "<br />"; 
 } 
 
 document.write (s); 
 
 // Output: 
 //   0: zero 
 //   1: one 
 //   2: two 
 //   orange: fruit 
 //   carrot: vegetable 
 
 // Efficient way of getting an object's keys using an expression within the for-in loop's conditions 
 var myObj = {a: 1, b: 2, c:3}, myKeys = [], i=0; 
 for (myKeys[i++] in myObj); 
 
 document.write(myKeys); 
 
 //Output: 
 //   a 
 //   b 
 //   c 
```

# Recursos Ohter:

*   [Ligação MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for…in)
*   [Link do MSDN](https://msdn.microsoft.com/library/55wb2d34.aspx)