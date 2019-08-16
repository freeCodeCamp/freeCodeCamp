---
title: Truth Table
localeTitle: Tabela Verdade
---
![Uma tabela mostrando quais argumentos JavaScript são verdadeiros e falsos.](//http://algassert.com/assets/2014-03-27-Better-JS-Equality-Table/grouped-table.png)

A tabela acima tem por objetivo mostrar a importância de usar o comparador "===" toda vez que for interessante evitar a coerção nativa da linguagem javascript. Ela foi organizada de maneira a deixar claras as relações de comparação e seu resultado. Toda vez que o quadrado estiver colorido esse resultado é "True". Assim, a comparação "false == false" retornaria um valor "true", por exemplo.


É por isso que você deve sempre usar `===` e `!==` .

Fonte: http://algassert.com/visualization/2014/03/27/Better-JS-Equality-Table.html
