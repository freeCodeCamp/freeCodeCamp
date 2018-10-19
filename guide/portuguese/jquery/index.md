---
title: jQuery
localeTitle: jQuery
---
## jQuery

![logo](https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/JQuery_logo.svg/250px-JQuery_logo.svg.png "logo jQuery")

O jQuery é a biblioteca JavaScript mais usada e é usada em mais da metade dos principais sites.

O jQuery torna o desenvolvimento da web mais fácil de usar, fornecendo diversas funções 'auxiliares'. Eles ajudam os desenvolvedores a escrever rapidamente as interações do DOM (Document Object Model) sem precisar escrever manualmente o próprio JavaScript.

O jQuery adiciona uma variável global com todos os métodos de bibliotecas anexados. A convenção de nomenclatura é ter essa variável global como `$` . digitando `$.` você tem todos os métodos do jQuery à sua disposição.

## Exemplo

Quando um usuário clica em um botão, todos

elementos serão escondidos:

```javascript
$(document).ready(function(){ 
    $("button").click(function(){ 
        $("p").hide(); 
    }); 
 }); 
```

#### Mais Informações

*   [Página inicial do jQuery](https://jquery.com/)