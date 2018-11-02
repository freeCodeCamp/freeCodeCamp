---
title: ol Tag
localeTitle: ol Tag
---
## ol Tag

A tag `<ol>` cria um elemento de lista ordenada em HTML. Uma lista ordenada é uma das duas estruturas de lista em HTML, a outra é a lista não ordenada, criada pela tag `<ul>` . Listas ordenadas são usadas para exibir listas com ordem significativa. Por padrão, os itens de lista em uma lista ordenada são exibidos como uma lista numerada, começando com 1. Esse comportamento pode ser alterado com o atributo "type" ou usando estilos CSS. Elementos de lista podem ser aninhados.

```html

<ol> 
  <li>First Item</li> 
  <li>Second Item  <!-- No closing </li> tag before the nested list --> 
    <ol> 
      <li>First Subitem</li> 
      <li>Second Subitem</li> 
    </ol> 
  </li>            <!-- The closing </li> tag comes after the nested list --> 
  <li>Third Item</li> 
 </ol> 
```

### Listas Ordenadas vs. Desordenadas

Em HTML, as listas ordenadas e não ordenadas são semelhantes tanto no uso quanto no estilo. Use listas ordenadas em locais onde a alteração da ordem dos itens alteraria o significado da lista. Por exemplo, uma lista ordenada poderia ser usada para uma receita, em que a alteração da ordem das etapas seria importante. Use listas não ordenadas para grupos de itens sem ordem significativa. Uma lista de animais em uma fazenda poderia ir em uma lista não ordenada.

#### Mais Informações:

## Outros recursos

*   [A lista não ordenada `<ul>`](https://github.com/freeCodeCamp/guides/blob/master/src/pages/html/elements/ul-tag/index.md)
*   [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol)