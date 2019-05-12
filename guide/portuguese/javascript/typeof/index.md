---
title: Typeof
localeTitle: Tipo de
---
## Tipo de

`typeof` é uma palavra-chave JavaScript que retornará o tipo de uma variável quando você a chamar. Você pode usar isso para validar parâmetros de função ou verificar se variáveis ​​estão definidas. Existem outros usos também.

O operador `typeof` é útil porque é uma maneira fácil de verificar o tipo de uma variável em seu código. Isso é importante porque o JavaScript é uma [linguagem dinamicamente tipada](https://stackoverflow.com/questions/2690544/what-is-the-difference-between-a-strongly-typed-language-and-a-statically-typed) . Isso significa que você não é obrigado a atribuir tipos a variáveis ​​ao criá-los. Como uma variável não é restrita dessa maneira, seu tipo pode mudar durante o tempo de execução de um programa.

Por exemplo:

```js
var x = 12345; // number 
x = 'string'; // string 
x = { key: 'value' }; // object 
```

Como você pode ver no exemplo acima, uma variável em JavaScript pode ter outro tipo durante a execução de um programa. Isso pode ser difícil de controlar como um programador, e é aí que o operador `typeof` é útil.

O operador `typeof` retorna uma string que representa o tipo atual de uma variável. Você pode usá-lo digitando `typeof(variable)` ou `typeof variable` . Voltando ao exemplo anterior, você pode usá-lo para verificar o tipo da variável `x` em cada estágio:

```javascript
var x = 12345; 
 console.log(typeof x) // number 
 x = 'string'; 
 console.log(typeof x) // string 
 x = { key: 'value' }; 
 console.log(typeof x) // object 
```

Isso pode ser útil para verificar o tipo de uma variável em uma função e continuar conforme apropriado.

Aqui está um exemplo de uma função que pode pegar uma variável que é uma string ou um número:

```javascript
function doSomething(x) { 
  if(typeof(x) === 'string') { 
    alert('x is a string') 
  } else if(typeof(x) === 'number') { 
    alert('x is a number') 
  } 
 } 
```

Outra maneira que o operador `typeof` pode ser útil é garantir que uma variável seja definida antes de tentar acessá-la em seu código. Isso pode ajudar a evitar erros em um programa que podem ocorrer se você tentar acessar uma variável que não esteja definida.

```javascript
function(x){ 
  if (typeof(x) === 'undefined') { 
    console.log('variable x is not defined'); 
    return; 
  } 
  // continue with function here... 
 } 
```

A saída do operador `typeof` pode nem sempre ser o que você espera quando você verifica um número.  
Os números podem se transformar no valor [NaN (não é um número)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN) por vários motivos.

```javascript
console.log(typeof NaN); //"number" 
```

Talvez você tenha tentado multiplicar um número por um objeto porque esqueceu de acessar o número dentro do objeto.

```javascript
var x = 1; 
 var y = { number: 2 }; 
 console.log(x * y); // NaN 
 console.log(typeof (x * y)); // number 
```

Ao verificar um número, não é suficiente verificar a saída do `typeof` de um número, pois o `NaN` também  
passa este teste.  
Esta função verifica números, e também não permite que o valor `NaN` passe.

```javascript
function isNumber(data) { 
  return (typeof data === 'number' && !isNan(data)); 
 } 
```

Mesmo pensando que este é um método de validação útil, temos que ter cuidado, porque o JavaScript tem algumas partes estranhas e uma delas é o resultado do `typeof` em instruções específicas. Por exemplo, em JavaScript muitas coisas são apenas `objects` assim você encontrará.

```javascript
var x = [1,2,3,4]; 
 console.log(typeof x)  // object 
 
 console.log(typeof null)  // object 
```

### Mais Informações:

[Documentação MDN para typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
