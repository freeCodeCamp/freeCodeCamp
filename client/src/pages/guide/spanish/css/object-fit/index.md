---
title: Object Fit
localeTitle: Ajuste de objeto
---
# Ajuste de objeto

La propiedad de `object-fit` especifica cómo responde un elemento al ancho / alto de su caja principal.

Esta propiedad se puede utilizar para imágenes, videos o cualquier otro medio. También se puede usar con la propiedad de `object-position` para obtener un mayor control sobre cómo se muestran los medios.

Básicamente, usamos la propiedad de `object-fit` para definir cómo se estira o aplasta un medio en línea.

## Sintaxis

```css
.element { 
    object-fit: fill || contain || cover || none || scale-down; 
 } 
```

## Valores

*   `fill` : **este es el valor predeterminado** . Cambiar el tamaño del contenido para que coincida con su cuadro principal, independientemente de la relación de aspecto.
    
*   `contain` : cambia el tamaño del contenido para llenar su casilla principal utilizando la relación de aspecto correcta.
    
*   `cover` : similar a `contain` pero a menudo recortando el contenido.
    
*   `none` : muestra la imagen en su tamaño original.
    
*   `scale-down` : compare la diferencia entre `none` y `contain` para encontrar el tamaño de objeto concreto más pequeño.
    

## Compatibilidad del navegador

El `object-fit` es compatible con la mayoría de los navegadores modernos. Para obtener la información más actualizada sobre compatibilidad, puede consultar esto en http://caniuse.com/#search=object-fit

También hay un polyfill para el navegador no compatible (en su mayoría IE). https://github.com/anselmh/object-fit

## Más información

https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit https://drafts.csswg.org/css-images-3/#the-object-fit