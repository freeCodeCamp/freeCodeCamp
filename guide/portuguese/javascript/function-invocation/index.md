---
title: Function Invocation
localeTitle: Função Invocação
---
## Função Invocação

O código dentro de uma função é executado quando a função é invocada. É comum usar o termo "chamar uma função" em vez de "invocar uma função".

As funções devem estar no escopo quando são chamadas. O escopo de uma função é a função na qual ela é declarada ou o programa inteiro, se for declarado no nível superior.

```javascript
function myFunction(a, b) { 
  return a * b; 
 } 
 myFunction(10, 2);           // Function invocation, will return 20 
 
 //optional parameters (es6 only) 
 //allow to set optional parameters 
 
 function myFunction(a, b = 10) { 
  return a * b; 
 } 
 myFunction(1);           // Function invocation, will return 10 
 myFunction(1,5);           // Function invocation, will return 5 
```

No código de exemplo, aeb são os parâmetros da função que contêm os valores 10 e 2, que são os argumentos usados ​​na chamada de função.

### Invocando uma função como um método

Em JavaScript, você pode definir funções como métodos de objeto.

O exemplo a seguir cria um objeto ( `myObject` ), com duas propriedades ( `firstName` e `lastName` ) e um método ( `fullName` ):

```javascript
var myObject = { 
  firstName:"John", 
  lastName: "Doe", 
  fullName: function () { 
    return this.firstName + " " + this.lastName; 
  } 
 } 
 myObject.fullName();         // Function invoked as a method, will return "John Doe" 
```

### Funções de seta

Na versão mais recente do Javascript, você também pode reduzir a sintaxe usando as Funções de seta. A seguir demonstra duas funções. Um é escrito na forma padrão, um é escrito como uma função de seta. Lembre-se de que as funções de seta não têm isso, argumentos, super ou new.target.

```javascript
//regular function 
 
 function addStuff(args) { 
   return args + 2; 
 } 
 
 addStuff(2); 
 //returns 4 
 
 //arrow function 
 
 var addStuff = (args) => args + 2; 
 addStuff(2); 
 //returns 4 
```

Essa versão abreviada da função de seta tem um retorno implícito, portanto você não especifica uma instrução de retorno.

### Mais Informações:

*   Documentação de função: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)