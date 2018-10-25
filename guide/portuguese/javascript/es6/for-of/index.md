---
title: for-of loop
localeTitle: loop for-of
---## for-of Loop

for-of loop pode ser usado para iterar sobre as coisas que não são arrays, mas são iteráveis ​​como uma coleção DOM, string, set, argumentos ou mapa.

```javascript
const fruits = ['Orange','Apple','Grapes','Banana']; 
 for (const fruit of fruits) 
 { 
    console.log(fruit); 
 } 
```

O snippet acima vai nos devolver os itens na matriz acima.

## for-of loop em saber índice

E se quisermos saber o índice de cada item também. Nesse caso, podemos iterar sobre fruits.entries (), que nos fornece o ArrayIterator.

```javascript
for (const fruit of fruits.entries()) 
 { 
    console.log(fruit); 
 } 
```

No trecho acima, a fruta será uma matriz com dois itens. O item 0 vai conter o índice e o primeiro item conterá o nome real da fruta. A saída seria como:
```
[0, "Orange"] 
 
 [1, "Apple"] 
 
 [2, "Grapes"] 
 
 [3, "Banana"] 
```

Podemos ainda desestruturar frutas como abaixo:

```javascript
for (const [index,fruit] of fruits.entries()) 
 { 
    console.log(index,fruit); 
 } 
```

## for-of loop em iterar sobre número desconhecido de argumentos

for-of loop é muito útil para iterar sobre o número desconhecido de argumentos para uma função.

Suponha que queremos adicionar os números que são passados ​​para uma função e o número de argumentos não é fixo.

'arguments' é uma palavra-chave especial em javascript que nos fornece o tipo Array-ish (não array) e nos fornece todos os argumentos.

```javascript
function addNumbers() 
 { 
    let sum = 0; 
    for (const num of arguments) 
       sum+=num; 
    return sum; 
 } 
 addNumbers(1, 2, 3, 4, 5); // 15 
```

Aqui argumentos não é um array verdadeiro ainda podemos iterar sobre ele usando for-of loop.

## for-of loop to iterate over string

Podemos usar loop for-to iterate over string para nos dar caractere por caractere da string.

```javascript
const name = 'John Doe'; 
 for (const char of name) 
    console.log(char); 
```

que resulta na seguinte saída: caracteres 'J', 'o', 'h', 'n', '', 'D', 'o', 'e'

## loop for-to iterate sobre a coleção DOM

Coleções do DOM não são o tipo de array verdadeiro. Eles são geralmente NodeList para a maioria dos navegadores. Se criarmos um número de parágrafos e quisermos iterar sobre eles para designar algum evento em cada parágrafo, podemos fazer uso de loop for-of.

```javascript
const paragraphs = document.querySelectorAll('p'); 
```

Aqui, os parágrafos são um NodeList que pode ser iterado usando o loop for-of.

```javascript
for (const para of paragraphs) 
 { 
    console.log(para); 
    // We can add event listeners to each para here 
 } 

```