---
title: Falsy Values
localeTitle: Valores de Falsas
---
## Descrição

Um valor falso é algo que é avaliado como FALSE, por exemplo, ao verificar uma variável. Existem apenas seis valores de falsey em JavaScript: `undefined` , `null` , `NaN` , `0` , `""` (string vazia) e `false` claro.

## Verificando valores falsos em variáveis

É possível verificar um valor falso em uma variável com uma condição simples:

```javascript
if (!variable) { 
  // When the variable has a falsy value the condition is true. 
 } 
```

## Exemplos gerais

```javascript
const string = ""; // <-- falsy

const filledString = "some string in here"; // <-- truthy

const zero = 0; // <-- falsy

const numberGreaterThanZero; // <-- falsy

const emptyArray = []; // <-- truthy, we'll explore more about this next

const emptyObject = {}; // <-- truthy
```

## Diversão com Arrays

```javascript
if ([] == false) // <-- truthy, will run code in if-block 
 
 if ([]) // <-- truthy, will also run code in if-block 
 
 if ([] == true) // <-- falsy, will NOT run code in if-block 
 
 if (![]) // <-- falsy, will also NOT run code in if-block 
```

## Embargo

Esteja ciente do tipo de dados ao avaliar um valor em um contexto booleano. Se o tipo de dados do valor for um _número_ , a avaliação geral / falsa pode resultar em um resultado inesperado:

```javascript
const match = { teamA: 0, teamB: 1 } 
 if (match.teamA) 
  // The following won't run due to the falsy evaluation 
  console.log('Team A: ' + match.teamA); 
 } 
```

Uma alternativa ao caso de uso acima é avaliar o valor usando `typeof` :

```javascript
const match = { teamA: 0, teamB: 1 } 
 if (typeof match.teamA === 'number') 
  console.log('Team A: ' + match.teamA); 
 } 
```

## Mais Informações

*   **truthy** | [Post do blog - Truthy & Falsey](http://james.padolsey.com/javascript/truthy-falsey/)
    
*   [Falsy | Glossário | MDN](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
    
*   [Truthy and Falsy: Quando tudo não é igual em JavaScript](https://www.sitepoint.com/javascript-truthy-falsy/)
