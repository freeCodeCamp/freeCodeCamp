---
title: Structure of CSS
localeTitle: Estrutura do CSS
---
## Estrutura CSS

Uma regra CSS segue essa estrutura básica:

```CSS
selector { 
  property: value; 
  property: value; 
 } 
```

Tudo dentro dos estilos de chaves é o que for selecionado pelo [seletor](https://guide.freecodecamp.org/css/selectors) . Dentro de uma regra CSS, há um conjunto de pares de [propriedade](https://guide.freecodecamp.org/css/properties) / valor.

Você pode ter diferentes seletores separados com comas:

```CSS
selector1, 
 selector2 { 
  property: value; 
 } 
```

Várias regras CSS podem ser colocadas em um arquivo CSS - aqui está um exemplo:

```CSS
h1 { 
  color: red; 
 } 
 
 div { 
  text-align: center; 
  color: blue; 
 } 
 
 img { 
  margin-left: 2px; 
  margin-top: 100px; 
 } 
```

#### Mais Informações:

*   [Sintaxe CSS no código da Web](https://codetheweb.blog/2017/11/11/css-syntax/)
*   Mais sobre [seletores CSS](https://guide.freecodecamp.org/css/selectors)
*   Mais sobre [propriedades CSS](https://guide.freecodecamp.org/css/properties)