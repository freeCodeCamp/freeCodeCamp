---
title: Buttons
localeTitle: Botones
---
## Botones

El framework de Bootstrap le proporciona varias opciones de estilo para los botones. Estos estilos le ayudan a proporcionar una representación visual al usuario de lo que puede hacer el botón.

#### Cómo utilizar:

Para usar los botones de Bootstrap, siga los mismos pasos que haría para crear un botón en HTML, excepto que también aplica la clase de CSS correspondiente al botón. A continuación se proporciona un ejemplo de código.

**Ejemplo de código:**

`<button type="button" class="btn btn-primary">Primario</button>`

Primario

También puede usar los botones de Bootstrap con los elementos `<a>` e `<input>` como se muestra en los ejemplos a continuación.

`<a class="btn btn-primary" href="#" role="button">Este botón es un enlace.</a>`

[Este botón es un enlace.](#)

`<input class="btn btn-primary" type="submit" value="Submit">`

#### Lista de clases de botones de Bootstrap:

Esta es una lista de las clases CSS que Bootstrap proporciona para los botones.

`.btn` Este es el botón básico de Bootstrap.

Básico

`.btn-default` Este es el botón predeterminado de Bootstrap.

Predeterminado

`.btn-primary` Este es el botón primario de Bootstrap.

Primario

`.btn-success` Este es el botón de éxito de Bootstrap.

Éxito

`.btn-info` Este es el botón de información de Bootstrap.

Información

`.btn-warning` Este es el botón de advertencia de Bootstrap.

Advertencia

`.btn-danger` Este es el botón de peligro de Bootstrap.

Peligro

`.btn-link` Este es el botón de enlace de Bootstrap.

Enlace

`.btn-light` Este es el botón claro de Bootstrap.

Claro

#### Tamaños de botones de Bootstrap:

Esta es una lista de las clases de CSS para diferentes tamaños de botones.

`.btn-lg` Este es el botón grande de Bootstrap.

Grande

`.btn-sm` Este es el botón pequeño de Bootstrap.

Pequeño

`.btn-xs` Este es el botón extra pequeño de Bootstrap.

Extra Pequeño

#### Botones delineados de Bootstrap:

También es posible tener botones delineados en lugar de totalmente coloreados. Esto se logra colocando la palabra `outline` entre la clase de botón que desea. Un ejemplo de uso sería el siguiente:

`<button type="button" class="btn btn-outline-primary">Primario</button>`

Los botones descritos son una parte de Bootstrap desde la versión 4, asegúrese de estar usando la versión correcta si no puede hacer que funcionen.

_Nota: No incluya el punto en el atributo de clase HTML, ya que las clases con un punto solo se usan al ajustar las clases en CSS._

#### Más información:

*   [Documentación de Bootstrap Buttons](https://getbootstrap.com/docs/4.0/components/buttons/)
*   [Documentación de Bootstrap Button Group](http://getbootstrap.com/docs/4.0/components/button-group/)
*   [Bootstrap Empezar](/articles/bootstrap/bootstrap-get-started)
