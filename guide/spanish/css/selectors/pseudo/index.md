---
title: Pseudo
localeTitle: Seudo
---
# Pseudo selectores

Los pseudo selectores proporcionan una forma de apuntar a los elementos utilizando pseudo clases o pseudo elementos.

## Pseudo Clases Estructurales

Las clases de pseudoestructuras estructurales ofrecen una forma de orientar los elementos en función de su posición.

Clase | Descripción --------- | ------------ `:root` | Raíz del documento. En el contexto de los documentos HTML, esta sería una etiqueta `html` en la parte superior. Podría significar diferentes elementos en otros documentos como XML o SVG. `:only-child` | Un elemento que es el único hijo de su elemento padre. `:first-child` | Primer hijo de un padre. `:last-child` | Último hijo de un elemento padre. `:nth-child(n)` | n-th hijo de su padre. `:nth-last-child(n)` | n-th niño del último niño. El reverso de `:nth-child` . `:only-of-type` | El único elemento del tipo dentro de sus hermanos con otros tipos. `:first-of-type` | El primer elemento del tipo entre sus hermanos. `:last-of-type` | El último elemento del tipo entre sus hermanos. `:nth-of-type(n)` | N-th hermano del mismo tipo. `:nth-last-of-type(n)` | N-th hermano del mismo tipo del último. El reverso de `:nth-of-type` . `:empty` | Un elemento sin elementos hijos.

## Use State Pseudo Classes

Las pseudo clases del estado de la interfaz de usuario ofrecen una forma de orientar los elementos según su estado actual.

Clase | Descripción --------- | ------------ `:link` | Elementos de enlace no visitados. `:visited` | Un enlace visitado ya. `:hover` | Un elemento sobre el que el puntero del ratón está flotando. `:active` | Un elemento en el que se ha hecho clic en el puntero del mouse, pero aún no se ha liberado. `:focus` | Un elemento que tiene foco. Importante para la accesibilidad, por ejemplo, al usar la tecla de `tab` para la navegación. `:enabled` | Un elemento que está en estado habilitado. `:disabled` | Un elemento que ha sido deshabilitado. `:checked` | Una casilla seleccionada o botón de radio.

## Pseudo elementos

Los pseudo elementos, por otro lado, son elementos generados dinámicamente o elementos en un lugar especial.

Selector Descripción --------- | ------------ `::first-line` | Primera línea de un elemento, generalmente un contenedor o párrafo. `::first-letter` | Una letra de un elemento. Ampliamente utilizado para el diseño de gorras. `::before` | Un elemento dinámico creado con contenido propio antes del elemento real. `::after` | Un elemento dinámico creado con contenido propio después del elemento real.

## Más información:

Se puede encontrar información adicional en las siguientes referencias.

*   [Especificación oficial del selector CSS3](https://www.w3.org/TR/css3-selectors/#structural-pseudos)
*   [Página de la red de desarrolladores de Mozilla sobre los selectores.](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)