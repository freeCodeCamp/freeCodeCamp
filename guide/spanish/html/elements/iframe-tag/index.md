---
title: Iframe Tag
localeTitle: Etiqueta Iframe
---
## Etiqueta Iframe

Las etiquetas iframe se utilizan para agregar una página web o aplicación existente a su sitio web dentro de un espacio establecido.

Cuando se usan las etiquetas iframe, el atributo src se debe usar para indicar la ubicación de la página web o la aplicación para usar dentro del marco.

```html

<iframe src="framesite/index.html"></iframe> 
```

Puede configurar los atributos de ancho y alto para limitar el tamaño del marco.

```html

<iframe src="framesite/index.html" height="500" width="200"></iframe> 
```

Los iframes tienen un borde por defecto, si desea eliminar esto, puede hacerlo usando el atributo de estilo y configurando las propiedades de borde de CSS en ninguno.

```html

<iframe src="framesite/index.html" height="500" width="200" style="border:none;"></iframe> 
```

#### Más información:

*   [MDN - etiqueta iframe HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe)
*   [W3 - especificación iframe HTML 5.2](https://www.w3.org/TR/html5/semantics-embedded-content.html#the-iframe-element)