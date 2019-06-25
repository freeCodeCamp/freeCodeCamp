---
title: For Loop
localeTitle: En bucle
---
## En bucle

El PHP `for` declaración consta de tres expresiones y una declaración:

`for ((initialization); (condition); (final-expression)) statement`

### Descripción

*   inicialización
    *   Ejecutar antes de la primera ejecución en el bucle.
    *   Esta expresión se usa comúnmente para crear contadores.
    *   Las variables creadas aquí están sujetas al bucle. Una vez que el bucle ha terminado, se ejecuta, se destruyen.
*   condición
    *   Expresión que se comprueba antes de la ejecución de cada iteración.
    *   Si se omite, esta expresión se evalúa como `true` .
*   expresión final
    *   Expresión que se ejecuta después de cada iteración.
    *   Generalmente se usa para incrementar un contador.
    *   Pero se puede utilizar para ejecutar cualquier expresión.
*   declaración
    *   Código que se repetirá en cada iteración de bucle.

Cualquiera de estas tres expresiones o la declaración puede ser omitida.

Las expresiones pueden contener múltiples expresiones separadas por comas.

En la expresión (condición), todas las expresiones separadas por comas serán evaluadas.

El resultado se obtiene a partir del último.

Para los bucles se utilizan comúnmente para contar un cierto número de iteraciones para repetir una declaración.

### Errores comunes

#### Superando los límites de una matriz

Cuando se indexa una matriz muchas veces, es fácil superar los límites de la matriz (por ejemplo, intente hacer referencia al cuarto elemento de una matriz de 3 elementos).

```php
// This will cause an error. 
 // The bounds of the array will be exceeded. 
 $arr = array(1,2,3); 
 
 for ($i = 0; $i <= count($arr); $i++) { 
    var_dump($arr[$i]); 
 } 
```

Esto dará como resultado:

```shell
int(1) int(2) int(3) NULL 
```

Hay maneras de arreglar este código.

Establezca la condición en `$i < count($arr)` o `$i <= count($arr) - 1` .

#### Problemas de desempeño

El código anterior puede volverse lento, porque el tamaño de la matriz se recupera en cada iteración.

Para solucionar este problema, es posible colocar el tamaño de la matriz en una variable.

```php
//create the $size variable with a second expression comma separated 
 for ($i = 0, $size = count($arr); $i < $size; ++$i) { 
```

### Más información

*   [PHP.net - Estructuras de control](https://secure.php.net/manual/en/control-structures.for.php)