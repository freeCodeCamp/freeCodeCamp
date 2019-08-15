---
title: New String Functions
localeTitle: Novas funções de string
---

## Novas funções de string

Segue abaixo quatro novas funções que foram adicionadas para seqüências de caracteres no ES6.

*   `startsWith`
*   `endsWith`
*   `includes`
*   `repeat`

## startsWith

Esta função é _case sensitive_ (diferencia maiúsculas de minúsculas), ela nos ajuda a descobrir se uma _string_ específica começa com alguma _substring_.

`startsWith` tem um segundo argumento opcional chamado "posição" que podemos usar quando queremos pular um determinado número de caracteres do início da string antes de pesquisar.

```javascript
const str ='Rachna'; 
 str.startsWith('Rad') //false 
 str.startsWith('ra') //false como é case sensitive 
 str.startsWith('Ra') //true 
 str.startsWith('ch',2) //true enquanto procuramos na segunda posição 
 str.startsWith('ch',3) //false 
```

## endsWith

Esta função é _case sensitive_, ela nos ajuda a descobrir se uma determinada _string_ termina com alguma _substring_.

`endsWith` leva em um segundo argumento opcional chamado "posição final" que podemos usar para incluir o número de caracteres antes de pesquisar.

```javascript
const city= 'Delhi'; 
 city.endsWith('Hi'); //false como é case sensitive 
 city.endsWith('hi');//true 
 city.endsWith('l',3);//true - incluir apenas os três primeiros caracteres antes de pesquisar
 city.endsWith('l',4);//false 
```

## includes

A função `includes` é também uma função _case sensitive_, que verifica se o _substring_ pesquisada está presente em qualquer lugar da string.

```javascript
const name='John Doe'; 
 name.includes('do'); //false 
 name.includes('D'); //true 
 name.includes('Do'); //true 
```

## repeat

A função `repeat` nos permite pegar uma string e repeti-la várias vezes.

```javascript
const str = 'This is repeated'; 
 str.repeat(3); //"This is repeatedThis is repeatedThis is repeated" 
```

A função `repeat` pode ser usada para preencher uma string da esquerda com um número de espaços.
