---
title: Dropdowns
localeTitle: Dropdowns
---
## Dropdowns

O Bootstrap fornece Dropdowns como um plugin para exibir listas de links. O menu suspenso é um botão que alterna a exibição de uma lista de links.

Os menus suspensos do Bootstrap são projetados para serem genéricos e aplicáveis ​​a uma variedade de situações. Por exemplo, é possível criar menus suspensos que contenham campos de pesquisa ou formulários de login.

## Exemplo

```html

<div class="dropdown"> 
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
    Dropdown example 
  </button> 
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton"> 
    <a class="dropdown-item" href="#">Action</a> 
    <a class="dropdown-item" href="#">Another action</a> 
    <a class="dropdown-item" href="#">Something else here</a> 
  </div> 
 </div> 
```

## Exemplo explicado

A classe _.dropdown_ indica um menu suspenso.

Para abrir o menu suspenso, use um botão ou um link com uma classe de _.dropdown-toggle_ e o atributo _data-toggle = "dropdown_ .

A classe _.caret_ cria um ícone de seta de cursor (▼), que indica que o botão é um menu suspenso.

Adicione a classe _.dropdown-menu_ a um elemento de lista não ordenada para realmente criar o menu suspenso.

#### Mais Informações:

https://getbootstrap.com/docs/4.0/components/dropdowns/