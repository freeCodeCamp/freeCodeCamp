---
title: Links
localeTitle: Campo de golf
---
## Campo de golf

Esto es un talón. [Ayuda a nuestra comunidad a expandirla](https://github.com/freecodecamp/guides/tree/master/src/pages/html/attributes/links/index.md) .

[Esta guía rápida de estilo ayudará a asegurar que su solicitud de extracción sea aceptada](https://github.com/freecodecamp/guides/blob/master/README.md) .

Los enlaces se utilizan en cualquier lugar de la web, con el fin de dirigir a los usuarios a diversos elementos de contenido. Por lo general, se indican mediante el cursor que se convierte en un icono de mano. Los enlaces pueden ser texto, imágenes u otros elementos contenidos en su HTML o página web.

Utiliza una etiqueta de `code <a>` o un elemento de ancla para definir su enlace, que también necesita una dirección de destino a la que accederá con el atributo `code href` . Aquí hay un fragmento de código que hace que la frase 'the freeCodeCamp Guide' sea un enlace:

```html

<a href="https://guide.freecodecamp.org">the freeCodeCamp Guide</a> 
```

Si desea que su enlace se abra en una nueva pestaña, usará el atributo de `code target` junto con el valor del `code "_blank"` dentro de su etiqueta de `code <a>` apertura `code <a>` . Eso se parece a esto:

```html

<a href="https://guide.freecodecamp.org" target="_blank">the freeCodeCamp Guide</a> 
```

Cuando necesite guiar a los usuarios a una parte específica de su página web, asumamos la parte inferior, primero debe asignar el símbolo `code #` hash al atributo `code href` del `code href` , como este

```html

<a href="#footer>More about us<a/> 
```

luego deberá usar un atributo de `code id` en el elemento al que desea dirigir a su usuario, en este caso, el `code <footer>` en la parte inferior de la página web.

```html

<footer id="footer">Powered by freeCodeCamp</footer> 
```

#### Más información:

[w3sschools - Enlaces HTML](https://www.w3schools.com/html/html_links.asp)