---
title: Elements
localeTitle: Elementos
---
# Elementos HTML

Los elementos son los componentes básicos de HTML que describen la estructura y el contenido de una página web. Son la parte de "marcado" del lenguaje de marcado de hipertexto (HTML).

La sintaxis HTML utiliza los corchetes angulares ("<" y ">") para mantener el nombre de un elemento HTML. Los elementos suelen tener una etiqueta de apertura y una etiqueta de cierre, y proporcionan información sobre el contenido que contienen. La diferencia entre los dos es que la etiqueta de cierre tiene una barra diagonal.

Aquí hay un ejemplo que usa el [elemento p](#) ( `<p>` ) para decirle al navegador que un grupo de texto es un párrafo:

```html

<p>This is a paragraph.</p> 
```

Las etiquetas de apertura y cierre deben coincidir; de lo contrario, el navegador puede mostrar el contenido de forma inesperada.

![XKCD comic mostrando el texto "P: ¿Cómo molestas a un desarrollador?" Rodeado por una etiqueta div de apertura y una etiqueta span de cierre](http://imgs.xkcd.com/comics/tags.png)

## Elementos de cierre automático

Algunos elementos HTML se cierran automáticamente, lo que significa que no tienen una etiqueta de cierre separada. Los elementos de cierre automático normalmente insertan algo en su documento.

Un ejemplo es el [elemento br](#) ( `<br>` ), que inserta un salto de línea en el texto. Anteriormente, las etiquetas de cierre automático tenían la barra diagonal hacia adelante ( `<br />` ), sin embargo, la especificación de HTML5 ya no lo requiere.

## Funcionalidad Elemento HTML

Hay muchos elementos HTML disponibles. Aquí hay una lista de algunas de las funciones que realizan:

*   dar información sobre la propia página web (los metadatos)
*   Estructurar el contenido de la página en secciones.
*   incrustar imágenes, videos, clips de audio u otros archivos multimedia
*   Crea listas, tablas y formularios.
*   Dar más información sobre cierto contenido de texto.
*   enlace a las hojas de estilo que tienen reglas sobre cómo debe mostrar la página el navegador
*   Agrega scripts para hacer una página más interactiva y dinámica.

## Elementos HTML de anidamiento

Puede anidar elementos dentro de otros elementos en un documento HTML. Esto ayuda a definir la estructura de la página. Solo asegúrese de que las etiquetas se cierren primero desde el elemento más interior.

Correcto: `<p>This is a paragraph that contains a <span>span element.</span></p>`

Incorrecto: `<p>This is a paragraph that contains a <span>span element.</p></span>`

## Elementos de nivel de bloque y en línea

Los elementos vienen en dos categorías generales, conocidas como nivel de bloque y en línea. Los elementos de nivel de bloque se inician automáticamente en una nueva línea, mientras que los elementos en línea se ubican dentro del contenido circundante.

Los elementos que ayudan a estructurar la página en secciones, como una barra de navegación, encabezados y párrafos, suelen ser elementos a nivel de bloque. Los elementos que insertan o dan más información sobre el contenido generalmente están en línea, como [enlaces](#) o [imágenes](#) .

## El elemento HTML

Hay un elemento `<html>` que se usa para contener la otra marca de un documento HTML. También se conoce como el elemento "raíz" porque es el elemento primario de los otros elementos HTML y el contenido de una página.

Aquí hay un ejemplo de una página con un [elemento de encabezado](#the-head-element) , un [elemento de cuerpo](#the-body-element) y un [párrafo](#the-p-element) :

```html

<!DOCTYPE html> 
 <html> 
  <head> 
  </head> 
  <body> 
    <p>I'm a paragraph</p> 
  </body> 
 </html> 
```

## El elemento HEAD

Este es el contenedor para procesar información y metadatos de un documento HTML.

```html

<head> 
  <meta charset="utf-8"> 
 </head> 
```

## El elemento del cuerpo

Este es un contenedor para el contenido visualizable de un documento HTML.

```html

<body>...</body> 
```

## El elemento p

Crea un párrafo, quizás el elemento de nivel de bloque más común.

```html

<p>...</p> 
```

## El elemento A (enlace)

Crea un hipervínculo para dirigir a los visitantes a otra página o recurso.

```html

<a href="#">...</a> 
```

## Otros recursos

*   [Párrafos HTML](#)
*   [HTML br](#)
*   [Enlaces HTML](#)
*   [Imágenes HTML](#)
*   [HTML Head](#)
*   [Cuerpo de HTML](#)
*   [HTML DOCTYPE](#)