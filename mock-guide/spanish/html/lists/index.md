---
title: Lists
localeTitle: Liza
---
# Liza

Las listas se utilizan para mostrar elementos. Hay 3 tipos de listas.

## Listas ordenadas

Una _lista ordenada_ se utiliza para describir una colección ordenada de datos. Los navegadores suelen mostrar una lista ordenada como una lista numerada. Crea una lista ordenada usando la etiqueta `<ol>` .

## Listas desordenadas

Una _lista desordenada_ se utiliza para describir una colección de datos desordenada. Los navegadores suelen mostrar una lista desordenada como una lista con viñetas. Cree una lista desordenada usando la etiqueta `<ul>` .

## Listar artículos

Los hijos directos de listas ordenadas y desordenadas deben ser elementos de lista. Cada elemento de la lista está envuelto en una etiqueta `<li>` . Una etiqueta de elemento de lista puede contener [contenido de flujo](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Flow_content) .

## Ejemplos

Una lista ordenada se escribe como

```HTML
<ol> 
  <li>January</li> 
  <li>February</li> 
  <li>March</li> 
 </ol> 
```

y se muestra como:

1.  enero
2.  febrero
3.  marzo

Una lista desordenada se escribe como

```HTML
<ul> 
  <li>Macintosh</li> 
  <li>Fuji</li> 
  <li>Gala</li> 
 </ul> 
```

y se muestra como:

*   Macintosh
*   Fuji
*   Gala

## Styling Bulletpoints

Una lista ordenada se puede utilizar para una variedad de funciones y en varios estilos. Dado que cambiar los colores de la etiqueta de conjunto no cambia el color de las viñetas en sí, puede aplicarles un estilo eliminando las viñetas negras tradicionales e insertando las suyas propias:

Eliminar balas:

```CSS
ul { 
  list-style: none; 
  } 
```

Inserte su propio:

```CSS
ul li::before { 
  content: "\2022"; 
  color: orange; 
  display: inline-block; 
  width: 1em; 
  } 
```

El estilo de contenido agrega un nuevo punto de bala mientras que el estilo de visualización y ancho crea un espacio entre la bala y la palabra. Los estilos de fuente regulares pueden aplicarse aquí si desea que la bala sea más grande o más audaz.

## Listas de descripciones

Una lista de descripción es una lista de términos, con una descripción de cada término. Una lista de descripción se hace usando la etiqueta `<dl>` . Cada elemento de la lista consta de dos etiquetas: un término `<dt>` y una descripción de ese término `<dd>` . Se llaman listas de definiciones en HTML 4.

Aquí hay un ejemplo de una lista de descripción:

```HTML
<dl> 
  <dt>Programming</dt> 
  <dd>The process of writing computer programs.</dd> 
  <dt>freeCodeCamp</dt> 
  <dd>An awesome non-profit organization teaching people how to code.</dd> 
 </dl> 
```

que terminaría pareciéndose a:

Programación

El proceso de escritura de programas informáticos.

freeCodeCamp

Una increíble organización sin fines de lucro que enseña a las personas a codificar.

## Más información:

*   [Listas de HTML en w3schools](https://www.w3schools.com/html/html_lists.asp)