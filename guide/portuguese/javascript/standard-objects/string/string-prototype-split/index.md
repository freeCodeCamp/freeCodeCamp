---
title: String.prototype.split
localeTitle: String.prototype.split
---
## String.prototype.split

A função `split()` separa uma string original em substrings, com base em uma _string separadora_ que você passa como entrada.

A saída da função `split()` é uma `Array` de strings, que representam as substrings separadas da string original.

A string original não é alterada pela função `split()` .

Exemplos:

```js
// We have a regular string 
 "Hello. I am a string. You can separate me." 
 
 // Let's use the split function to separate the string by the period character: 
 "Hello. I am a string. You can separate me.".split("."); 
 // output is [ "Hello", " I am a string", " You can separate me", "" ] 
```

Como usamos o ponto ( `.` ) Como a _string separadora_ , as strings na matriz de saída não contêm o período nelas; as strings separadas de saída _não incluem a própria cadeia do separador de entrada_ .

O _separador de string_ não precisa ser um único caractere, pode ser qualquer outra string:

```js
"Hello... I am another string... keep on learning!".split("..."); 
 // output is [ "Hello", " I am another string", " keep on learning!" ] 
 
 const names = "Kratos- Atreus- Freya- Hela- Thor- Odin"; 
 // notice separator is a dash and a space 
 names.split("- "); 
 // output is [ "Kratos", "Atreus", "Freya", "Hela", "Thor", "Odin" ] 
```

#### Mais Informações:

*   [String.prototype.split no MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)