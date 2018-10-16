---
title: Images in HTML
localeTitle: Imágenes en HTML
---
## Introducción

Puedes definir imágenes usando la etiqueta `<img>` . No tiene una etiqueta de cierre ya que solo puede contener atributos. Para insertar una imagen, defina la fuente y un texto alternativo que se muestra cuando la imagen no se puede representar.

`src` : este atributo proporciona la url para la imagen presente en su PC / portátil o para ser incluido en otro sitio web. Recuerde que el enlace proporcionado no debe romperse, de lo contrario la imagen no se producirá en su página web.

`alt` : este atributo se utiliza para superar el problema de la imagen rota o la incapacidad de su navegador para no poder producir una imagen en la página web. Este atributo como nombre sugiere proporciona "Alternativa" a la imagen que es un 'TEXTO' que describe la imagen

## Ejemplo

```html

<img src="URL of the Image" alt="Descriptive Title" /> 
```

### Para definir la altura y el ancho de una imagen, puede utilizar el atributo de altura y anchura:

```html

<img src="URL of the Image" alt="Descriptive Title" height="100" width="150"/> 
```

### También puede definir el grosor del borde (0 significa que no hay borde):

```html

<img src="URL of the Image" alt="Descriptive Title" border="2"/> 
```

### Alinear una imagen:

```html

<img src="URL of the Image" alt="Descriptive Title" align="left"/> 
```

### También puede utilizar estilos dentro de un atributo de estilo:

```html

<img src="URL of the Image" alt="Descriptive Title" style="width: 100px; height: 150px;"/> 
```

#### Más información

*   Vea la página de freeCodeCamp en la etiqueta `<img>` [aquí](https://guide.freecodecamp.org/html/elements/img-tag) .
*   Para obtener más detalles sobre las imágenes en HTML, consulte los [documentos de MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Img)