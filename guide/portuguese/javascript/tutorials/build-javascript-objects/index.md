---
title: Build JavaScript Objects
localeTitle: Construa objetos JavaScript
---
Os objetos são úteis para armazenar dados de maneira estruturada e podem ser usados ​​para representar objetos do mundo real, como carros ou hotéis, em um computador.

Os objetos são semelhantes aos arrays, exceto que, em vez de usar índices para acessar e modificar seus dados, você acessa os dados em objetos por meio do que são chamados de propriedades. Existem duas maneiras principais de criar objetos: o Literal do Objeto e o modo do Construtor.

Usando o modo Literal do Objeto, veja como criaremos um objeto de amostra:
```
var cat = { 
    name: "Whiskers", 
    legs: 4, 
    tails: 1, 
    enemies: ["Water", "Dogs"] 
 }; 
```

Usando o construtor, veja como criaremos um objeto de amostra:
```
var cat = new Object(); 
 cat.name = "Whiskers"; 
 cat.legs = 4; 
 cat.tails = 1; 
 cat.enemies = ["Water", "Dogs"]; 
```

No modo Construtor, usamos a `new` palavra-chave junto com `Object` (com capital 'O') para criar uma nova instância de objeto. Depois, usamos a notação de ponto para atribuir os nomes e valores da propriedade do objeto.