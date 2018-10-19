---
title: Switch
localeTitle: Switch
---
## Switch

En PHP, la sentencia `Switch` es muy similar a la sentencia Javascript `Switch` (consulte la [Guía de Javascript Switch](/javascript/switch-statements) para comparar y contrastar). Permite la prueba rápida de casos con muchas condiciones diferentes posibles, el código también es más legible.

### Sintaxis

```php
<?php 
    // Ejemplo de Switch 
    switch ($i) { 
        case "free": 
            echo "i es free"; 
            break; 
        case "code": 
            echo "i es code"; 
            break; 
        case "camp": 
            echo "i es camp"; 
            break; 
        default: 
            echo "i es freecodecamp"; 
    } 
```

### Break

El `break;` sale del Switch y ejecuta el resto del código de la aplicación. Si no utilizas el `break;` puede terminar ejecutando múltiples casos y declaraciones, a veces esto puede ser deseable, en cuyo caso no debe incluir el `break;`.

#### Más información:

*   [php.net docs Switch](https://secure.php.net/manual/en/control-structures.switch.php)
