---
title: Immediately Invoked Functions Expressions(IIFEs)
localeTitle: Expressões de Funções Imediatamente Invocadas (IIFEs)
---
## Declaração de Função

Uma função criada com uma declaração de função é um objeto Function e possui todas as propriedades, métodos e comportamento dos objetos Function. Exemplo:

```javascript
  function statement(item){ 
    console.log('Function statement example '+ item); 
  } 
```

## Expressão de Função

Uma expressão de função é semelhante à instrução de função, exceto que o nome da função pode ser omitido para criar funções anônimas. Exemplo:

```javascript
  var expression = function (item){ 
    console.log('Function expression example '+ item); 
  } 
```

## Expressões de Funções Imediatamente Invocadas

Logo que a função é criada, ela não precisa invocar explicitamente. Na variável de exemplo abaixo, iife armazenará uma string retornada pela execução da função.

```javascript
  var iife = function (){ 
    return 'Immediately Invoked Function Expressions(IIFEs) example '; 
  }(); 
  console.log(iife); // 'Immediately Invoked Function Expressions(IIFEs) example ' 
```

A declaração antes do IIFE deve sempre terminar com a; ou isso causará um erro.

**Exemplo ruim** :

```javascript
var x = 2 //no semicolon, will throw error 
 (function(y){ 
  return x; 
 })(x); //Uncaught TypeError: 2 is not a function 
```

## Por que usar expressões de funções invocadas imediatamente?

```javascript
  (function(value){ 
    var greet = 'Hello'; 
    console.log(greet+ ' ' + value); 
  })('IIFEs'); 
```

No exemplo acima, quando o mecanismo de javascript executa o código acima, ele cria um contexto de execução global quando vê um código e cria um objeto de função na memória para o IIFE. E quando chega na linha `46` devido a qual função é Invocada, um novo contexto de execução é criado em tempo real e assim que a variável greet entra nesse contexto de execução da função, não no global, isto é o que o torna único. `This ensures that code inside IIFE does not interfere with other code or be interfered by another code` e, portanto, o código é seguro.

#### Mais Informações

[Expressão de função invocada imediatamente na Wikipedia](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression) [O que o ponto-e-vírgula líder nas bibliotecas JavaScript faz?](https://stackoverflow.com/questions/1873983/what-does-the-leading-semicolon-in-javascript-libraries-do)