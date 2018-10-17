---
title: jQuery Animate
localeTitle: jQuery animate
---
## jQuery animate

El método animado de jQuery facilita la creación de animaciones simples, utilizando solo unas pocas líneas de código. La estructura básica es la siguiente:

```javascript
$(".selector").animate(properties, duration, callbackFunction()); 
```

Para el argumento de `properties` , debe pasar un objeto javascript, con las propiedades CSS que desea animar como claves y los valores que desea animar como valores. Para la `duration` , debe ingresar la cantidad de tiempo en milisegundos que la animación debería tomar. El `callbackFunction()` se ejecuta una vez que la animación ha terminado.

### Ejemplo

Un ejemplo simple se vería así:

```javascript
$(".awesome-animation").animate({ 
    opacity: 1, 
    bottom: += 15 
 }, 1000, function() { 
    $(".different-element").hide(); 
 }); 
```

#### Más información:

Para más información, visite la [página web oficial.](http://api.jquery.com/animate/)