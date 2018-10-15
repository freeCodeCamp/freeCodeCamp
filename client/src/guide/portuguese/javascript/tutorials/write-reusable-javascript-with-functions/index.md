---
title: Write Reusable JavaScript with Functions
localeTitle: Escreva JavaScript reutilizável com funções
---
Em JavaScript, podemos dividir nosso código em partes reutilizáveis ​​chamadas funções.

Aqui está um exemplo de uma função:
```
function functionName() { 
  console.log("Hello World"); 
 } 
```

Você pode `call` ou `invoke` esta função usando seu nome seguido por parênteses, assim:
```
functionName(); 
```

Cada vez que a função é chamada, ela imprimirá a mensagem "Hello World" no console de desenvolvimento. Todo o código entre as chaves será executado toda vez que a função for chamada.

Aqui está outro exemplo:
```
function otherFunctionName (a, b) { 
    return(a + b); 
 } 
```

Podemos `call` ou `invoke` nossa função assim:
```
otherFunctionName(1,2); 
```

e ele será executado e retornará seu valor de retorno para nós.