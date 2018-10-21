---
title: Li Tag
localeTitle: Etiqueta Li
---
## Etiqueta Li

La etiqueta `<li>` define un elemento de lista en una lista. La etiqueta `<li>` se puede usar con listas desordenadas ( `<ul>` ), listas ordenadas ( `<ol>` ) y menús ( `<menu>` ).

Para definir un elemento de la lista, envuelva los elementos deseados en una etiqueta `<li>` . `<li>` elementos deben estar contenidos dentro de un elemento padre que es una lista.

### Ejemplo

```html

<body> 
  <ul> 
    <li> 
      <p>I'm a list item</p> 
    </li> 
    <li> 
      <p>I'm a list item too</p> 
    </li> 
    <li> 
      <p>Me three/p> 
    </li> 
  </ul> 
 </body> 
```

En una lista ordenada, `<li>` aparece como un elemento con un punto de viñeta.

*   Primer elemento
*   Segundo artículo
*   Tercer artículo

En una lista no ordenada, `<li>` aparece como un elemento numerado.

1.  Primer elemento
2.  Segundo artículo
3.  Tercer artículo

Este contador de visualización numérica se puede personalizar utilizando la propiedad CSS de _tipo de estilo de lista_ .

Ejemplos:

```html

<!-- In a simple unordered list --> 
 <ul> 
  <li>First item</li> 
  <li>Second item</li> 
  <li>Third item</li> 
 </ul> 
 
 <!-- In a simple ordered list --> 
 <ol> 
  <li>First item</li> 
  <li>Second item</li> 
  <li>Third item</li> 
 </ol> 
 
 <!-- In a menu list --> 
 <menu> 
  <li>Menu item one</li> 
  <li>Menu item two</li> 
  <li>Menu item three</li> 
 </menu> 
```

### Atributos

El elemento `<li>` tiene los siguientes elementos:

#### Tipo

El atributo de `type` define el tipo de numeración que se utilizará en la lista. Los siguientes valores se utilizan para determinar qué estilo de numeración se utilizará:

*   `1` : números
*   `a` : letras minúsculas
*   `A` : letras mayúsculas
*   `i` : números en minúscula
*   `I` : numerales en mayúsculas

#### Ejemplo

```html

<body> 
  <ol type="I"> 
    <li>list item</li> 
    <li>list item</li> 
    <li>list item</li> 
  </ol> 
 </body> 
```

El anterior HTMl dará salida:

1.  elemento de lista
2.  elemento de lista
3.  elemento de lista

#### Valor

El atributo de `value` especifica el orden numérico de la `<li>` actual. Este atributo solo acepta un valor numérico y solo se puede utilizar con una lista ordenada. Todos los elementos de la lista que siguen se ordenarán numéricamente en función de la entrada numérica del atributo de `value` .

#### Ejemplo

```html

<body> 
  <ol> 
    <li value="4">list item</li> 
    <li>list item</li> 
    <li>list item</li> 
  </ol> 
 </body> 
```

El HTML anterior dará salida:

4.  elemento de lista
5.  elemento de lista
6.  elemento de lista

### Anidar otra lista como un elemento

Además de crear elementos individuales, también puede usar etiquetas `<li>` para crear una lista anidada, ordenada o desordenada. Para hacer esto, anida un `<ol>` o `<ul>` _dentro de_ una etiqueta `<li>` .

Aquí hay una lista desordenada con una lista ordenada y anidada.

*   Primer elemento
*   Segundo artículo

1.  Primer subelemento
2.  Segundo subelemento

*   Tercer artículo

Y aquí hay una lista ordenada con una lista anidada, desordenada.

1.  Primer elemento
2.  Segundo artículo

*   Primer subelemento
*   Segundo subelemento

1.  Tercer artículo

```html

<!-- An unordered list with a nested, ordered list. --> 
 <ul> 
  <li>First item</li> 
  <li>Second item  <!-- No closing </li> tag before the nested list --> 
    <ol> 
      <li>First sub-item</li> 
      <li>Second sub-item</li> 
    </ol> 
  </li>            <!-- The closing </li> tag comes after the nested list --> 
  <li>Third item</li> 
 </ul> 
 
 <!-- An ordered list with a nested, unordered list. --> 
 <ol> 
  <li>First item</li> 
  <li>Second item  <!-- No closing </li> tag before the nested list --> 
    <ul> 
      <li>First sub-item</li> 
      <li>Second sub-item</li> 
    </ul> 
  </li>            <!-- The closing </li> tag comes after the nested list --> 
  <li>Third item</li> 
 </ol> 
```

#### Más información:

*   [El elemento HTML <li>: MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li)
*   [Etiqueta HTML <li>: w3schools](https://www.w3schools.com/cssref/pr_list-style-type.asp)
*   [Propiedad de estilo de lista CSS: CSS-Tricks](https://css-tricks.com/almanac/properties/l/list-style/)