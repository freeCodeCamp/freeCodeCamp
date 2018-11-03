---
title: JSON Syntax
localeTitle: Sintaxe JSON
---
## Sintaxe JSON

A sintaxe JSON é um subconjunto da sintaxe JavaScript.

### Regras de sintaxe JSON

*   Objeto JSON é um conjunto não ordenado de pares nome / valor.
*   Os nomes dos objetos são seguidos por dois pontos (:).
*   Chaves {} são usadas para guardar objetos. O objeto começa com {(chaveta esquerda) e termina com} (chaveta direita).
*   Os dados do objeto JSON são representados como uma coleção de pares nome / valor.
*   Cada nome / valor pares são separados por vírgula (,)
*   Chaves quadradas \[\] são usadas para armazenar matrizes.

### Dados JSON - Um nome e um valor

Dados JSON são gravados como pares nome / valor.

Um par de nome / valor consiste em um nome de campo (entre aspas duplas), seguido por dois-pontos, seguido por um valor:
```
"handle":"moghya" 
```

*   Nomes JSON exigem aspas duplas.

### JSON - avalia objetos JavaScript

O formato JSON é quase idêntico aos objetos JavaScript.

Em JSON, as chaves devem ser cadeias de caracteres, escritas com aspas duplas:

*   JSON
```
"handle":"moghya" 
```

*   JavaScript
```
handle:"moghya" 
```

### Valores JSON

Em JSON, os valores devem ser um dos seguintes tipos de dados:

*   uma linha
*   um número
*   um objeto (objeto JSON)
*   uma matriz
*   um booleano
*   nulo

Em valores JavaScript, pode haver todos os itens acima, além de qualquer outra expressão JavaScript válida, incluindo:

*   uma função
*   um encontro
*   Indefinido

### JSON usa sintaxe JavaScript

Como a sintaxe JSON é derivada da notação de objeto JavaScript, é necessário muito pouco software extra para trabalhar com JSON dentro do JavaScript.

Com JavaScript você pode criar um objeto e atribuir dados a ele, assim:
```
var person = { 
  "name":"Shubham", 
  "age":21, 
  "handle":"moghya", 
  "website":"http://moghya.me/" 
  }; 
```

Você pode acessar um objeto JavaScript como este:
```
//returns moghya 
 person.handle; 
```

Também pode ser acessado assim:
```
//returns http://moghya.me/ 
 person["website"]; 
```

### Matrizes em JSON
```
var team = { 
  "name":"novatoscript", 
  "members" : 
  [ 
    { 
      "name":"Shubham Sawant", 
      "age":21, 
      "handle":"moghya", 
      "website":"http://moghya.me", 
    }, 
    { 
      "name":"Saurabh Banore", 
      "age":21, 
      "handle":"banoresaurabh", 
      "website":"http://banoresaurabh.me/", 
    } 
  ] 
 } 
```

### Exemplo

Um exemplo muito grande de JSON está [aqui!](http://moghya.me/js/profile.json) .