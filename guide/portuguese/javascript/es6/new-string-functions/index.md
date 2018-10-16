---
title: New String Functions
localeTitle: Novas funções de string
---## Novas funções de string

Após quatro funções são adicionadas novas para seqüências de caracteres no ES6.

*   começa com
*   termina com
*   inclui
*   repetir

## começa com:

Esta é uma função que diferencia maiúsculas de minúsculas que nos ajuda a descobrir se uma string específica começa com alguma substring.

startsWith leva no segundo argumento opcional chamado posição que podemos usar no caso quando queremos pular um determinado número de caracteres do início da string antes de pesquisar.

```javascript
const str ='Rachna'; 
 str.startsWith('Rad') //false 
 str.startsWith('ra') //false as it is case sensitive 
 str.startsWith('Ra') //true 
 str.startsWith('ch',2) //true as we are searching from the second position 
 str.startsWith('ch',3) //false 
```

## termina com

Esta é uma função que diferencia maiúsculas de minúsculas, o que nos ajuda a descobrir se uma determinada string termina com alguma substring.

endsWith leva em um segundo argumento opcional chamado endPosition que podemos usar para incluir o número de caracteres antes de pesquisar.

```javascript
const city= 'Delhi'; 
 city.endsWith('Hi'); //false as it is case sensitive 
 city.endsWith('hi');//true 
 city.endsWith('l',3);//true - include only first three characters before searching 
 city.endsWith('l',4);//false 
```

## inclui

includes function é também uma função que diferencia maiúsculas de minúsculas que verifica se o searchString está presente em qualquer lugar da string.

```javascript
const name='John Doe'; 
 name.includes('do'); //false 
 name.includes('D'); //true 
 name.includes('Do'); //true 
```

## repetir

repeat nos permite pegar uma string e repeti-la várias vezes.

```javascript
const str = 'This is repeated'; 
 str.repeat(3); //"This is repeatedThis is repeatedThis is repeated" 
```

A função repeat pode ser usada para preencher uma string da esquerda com um número de espaços.