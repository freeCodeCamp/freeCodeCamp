---
title: Constants
localeTitle: Constantes
---
## Constantes

Las constantes son un tipo de variable en PHP. La función `define()` para establecer una constante toma tres argumentos: el nombre de la clave, el valor de la clave y un booleano (verdadero o falso) que determina si el nombre de la clave no distingue entre mayúsculas y minúsculas (falso por defecto). El valor de una constante no se puede modificar una vez que se establece. Se utiliza para valores que rara vez cambian (por ejemplo, una contraseña de la base de datos O una clave api).

### Alcance

Es importante saber que, a diferencia de las variables, las constantes SIEMPRE tienen un alcance global y se puede acceder a ellas desde cualquier función del script.

### Ejemplo

```PHP
<?php 
 define("freeCodeCamp", "Learn to code and help nonprofits", false); 
 echo freeCodeCamp; 
```

**Salida:**

```text
Learn to code and help nonprofits 
```

#### Más información:

*   [manual de constantes de php.net](https://secure.php.net/manual/en/language.constants.php)
*   [php.net define () manual](https://secure.php.net/manual/en/function.define.php)