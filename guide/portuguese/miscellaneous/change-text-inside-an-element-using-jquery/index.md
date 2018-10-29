---
title: Change Text Inside an Element Using jQuery
localeTitle: Alterar texto dentro de um elemento usando jQuery
---
Usando jQuery, você pode alterar o texto entre as tags de início e fim de um elemento. Você pode até mesmo alterar a marcação HTML.

jQuery tem uma função chamada `.html()` que permite adicionar tags HTML e texto dentro de um elemento. Qualquer conteúdo anteriormente dentro do elemento será completamente substituído pelo conteúdo que você fornecer usando essa função.

Aqui está como você iria reescrever e colocar em itálico o texto do nosso título:
```
$("h3").html("<em>jQuery Funhouse</em>"); 
```

O jQuery também possui uma função similar chamada `.text()` que apenas altera o texto sem adicionar tags. Portanto, ao usar o `.html()` , lembre-se de que você estará editando toda a marcação e não apenas o texto.