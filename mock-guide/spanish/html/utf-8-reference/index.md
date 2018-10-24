---
title: UTF 8 Reference
localeTitle: Referencia UTF 8
---
## Referencia UTF 8

UTF 8 es un esquema de codificación utilizado para traducir los caracteres que vemos en las pantallas en números que las computadoras pueden almacenar. Especificar una codificación de caracteres como UTF8 permitirá que el navegador muestre correctamente los caracteres avanzados como letras acentuadas y emoji.

En documentos HTML, puede especificar la codificación de caracteres en la página colocando esta meta etiqueta en la etiqueta de `head` de su página HTML: `<meta charset="UTF-8">` . UTF 8 es la codificación estándar.

El estándar [Unicode](https://www.unicode.org/) fue desarrollado para acomodar los caracteres utilizados en los idiomas de todo el mundo.

¡Pero espera! ¿Qué tiene que ver Unicode con UTF 8? UTF 8 es el esquema de codificación, pero es importante entender que Unicode es la definición del conjunto de caracteres. En términos sencillos, lo que esto significa es que Unicode define un número único, denominado punto de código, para muchos de los personajes principales utilizados en idiomas de todo el mundo y UTF 8 traducirá (también conocido como codificación) al carácter en formato binario fácil de usar para computadora. 1 Aquí hay un ejemplo:

1.  Quieres mencionar freeCodeCamp en algún lugar de tu página web (porque, ya sabes, freeCodeCamp es 🔥 🔥 🔥).
    
2.  Los puntos del código de caracteres para deletrear freeCodeCamp como se define en Unicode son:
    
    | f | r | e | e | C | o | d | e | C | un | m | p | | : ---: | : ---: | : ---: | : ---: | : ---: | : ---: | : ---: | : ---: | : ---: | : ---: | : ---: | : ---: | | 102 | 114 | 101 | 101 | 67 | 111 | 100 | 101 | 67 | 97 | 109 | 112 |
    
3.  UTF 8 traduce los puntos de código a binario: 1100110 1110010 1100101 1100101 1000011 1101111 1100100 1100101 1000011 1100001 1101101 1110000
    

### Cómo usar UTF-8 en tu página web

Especifique una metaetiqueta con un conjunto de caracteres de UTF 8 en su etiqueta de cabecera.

```html

<head> 
  <meta charset="utf-8"> 
 </head> 
```

#### Más información:

*   [Gráficos de códigos de caracteres de Unicode](https://www.unicode.org/charts/index.html)
*   [Referencia HTML Unicode](https://www.w3schools.com/charsets/ref_html_utf8.asp)