---
title: CSS Method
localeTitle: Método CSS
---
## Método CSS

El método jQuery `.css()` obtiene el valor de una propiedad de estilo calculada para el primer elemento en el conjunto de elementos coincidentes o establece una o más propiedades CSS para cada elemento coincidente.

### Consiguiendo

Para devolver el valor de una propiedad CSS especificada, use la siguiente sintaxis:

```js
    $(selector).css(propertyName); 
```

Por ejemplo:

```js
    $('#element').css('background'); 
```

Nota: Aquí podemos usar cualquier selector css, por ejemplo: elemento (selector de etiquetas HTML), .element (selector de clase), #element (selector de ID).

### Ajuste

Para establecer una propiedad CSS especificada, use la siguiente sintaxis:

```js
    $(selector).css(propertyName,value); 
```

Por ejemplo:

```js
    $('#element').css('background','red'); 
```

Para establecer varias propiedades CSS, tendrás que usar la sintaxis literal del objeto de la siguiente manera:

```js
    $('#element').css({ 
        'background': 'gray', 
        'color': 'white' 
    }); 
```

Si desea cambiar una propiedad etiquetada con más de una palabra, consulte este ejemplo:

Para cambiar `background-color` de `background-color` de un elemento.

```js
    $('#element').css('background-color', 'gray'); 
```

#### Más información:

Documentación: [api.jquery](http://api.jquery.com/css/)