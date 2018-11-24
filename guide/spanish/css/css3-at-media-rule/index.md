---
title: CSS3 at Media Rule
localeTitle: CSS3 en Media Rule
---
## CSS3 en Media Rule

La regla de medios CSS3 es una regla que permite el uso de consultas de medios. Las consultas de medios pueden permitirle aplicar un estilo a su página web (ya sea una parte o todo) de manera diferente según los diferentes tipos de medios o dispositivos.

Una consulta de medios se crea mediante el uso de la etiqueta `@media` y luego proporciona una regla para verificar cosas tales como:

*   Ancho y alto de la ventana actual
*   Orientación del dispositivo (esto se aplica a tabletas o teléfonos)
*   Resolución actual
*   Y más

Actualmente hay cuatro tipos de medios posibles:

*   Todos (predeterminado: esto apuntará a todos los dispositivos)
*   impresión (se utiliza para impresoras; por ejemplo, proporciona estilos de impresión separados)
*   pantalla (usada para computadoras, teléfonos, tabletas, etc.)
*   voz (se usa para dispositivos de accesibilidad, como el lector de pantalla que narran el contenido de una página web)

Las consultas de medios se utilizan para todo tipo de propósitos, ya que permiten muchas funciones de medios diferentes. Uno de los usos más comunes de una consulta de medios es hacer que una página web sea receptiva; lo que significa que se comportará de manera diferente en función del tamaño de la pantalla.

Una consulta de medios de ejemplo es la siguiente:

```CSS
@media screen and (max-width: 1000px) { 
  body { 
    background: #000; 
  } 
 } 
```

El CSS en la regla de consulta de medios solo se aplica cuando la regla es verdadera. Por ejemplo, mirando el fragmento de código anterior, el fondo del cuerpo cambiará a `#000` solo cuando el usuario visite la página con un dispositivo que tenga 1000px de ancho o menos. Si está por encima de 1000px, esa regla no se aplicará.

#### Más información:

*   [Regla de CSS @media](https://www.w3schools.com/cssref/css3_pr_mediaquery.asp)
*   [Usando consultas de medios](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)