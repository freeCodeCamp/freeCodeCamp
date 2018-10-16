---
title: ol Tag
localeTitle: etiqueta ol
---
## etiqueta ol

La etiqueta `<ol>` crea un elemento de lista ordenada en HTML. Una lista ordenada es una de las dos estructuras de lista en HTML, la otra es la lista desordenada, creada por la etiqueta `<ul>` . Las listas ordenadas se utilizan para mostrar listas con orden significativo. De forma predeterminada, los elementos de la lista en una lista ordenada se muestran como una lista numerada, comenzando con 1. Este comportamiento se puede cambiar con el atributo "tipo" o usando estilos CSS. Los elementos de la lista se pueden anidar.

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

### Listas ordenadas y desordenadas

En HTML, las listas ordenadas y desordenadas son similares en uso y estilo. Use listas ordenadas en lugares donde cambiar el orden de los elementos cambiaría el significado de la lista. Por ejemplo, una lista ordenada podría usarse para una receta, donde cambiar el orden de los pasos sería importante. Utilice listas desordenadas para grupos de artículos sin orden significativo. Una lista de animales en una granja podría ir en una lista desordenada.

#### Más información:

## Otros recursos

*   [La lista desordenada `<ul>`](https://github.com/freeCodeCamp/guides/blob/master/src/pages/html/elements/ul-tag/index.md)
*   [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol)