---
title: Switch
localeTitle: Cambiar
---
## Cambiar

En PHP, la sentencia `Switch` es muy similar a la sentencia Javascript `Switch` (consulte la [Guía de Javascript Switch](/javascript/switch-statements) para comparar y contrastar). Permite la prueba rápida de casos con muchas condiciones diferentes posibles, el código también es más legible.

### Sintaxis

```php
<?php 
    // Switch Statement Example 
    switch ($i) { 
        case "free": 
            echo "i is free"; 
            break; 
        case "code": 
            echo "i is code"; 
            break; 
        case "camp": 
            echo "i is camp"; 
            break; 
        default: 
            echo "i is freecodecamp"; 
    } 
```

### Descanso

El `break;` sentencia sale del conmutador y ejecuta el resto del código de la aplicación. Si no utilizas el `break;` declaración que puede terminar ejecutando múltiples casos y declaraciones, a veces esto puede ser deseable, en cuyo caso no debe incluir la `break;` declaración.

#### Más información:

*   [php.net docs Switch](https://secure.php.net/manual/en/control-structures.switch.php)