---
title: If-else Statement
localeTitle: Declaración if-else
---
## Introducción

If / Else es una declaración condicional donde, según la veracidad de una condición, se realizarán acciones diferentes. Esto quiere decir que cuando la condición que recibe el `if` se evalúa a `true`, se ejecutará el bloque de código que contenga entre llaves; y en caso de que se evalue a `false` se ejecutará el bloque asociado a `else` o `else if` si evalúa su condición a verdadera.

> **Nota: los** paréntesis `{}` solo son necesarios si la condición tiene más de una declaración de acción.

## Si declaración
```
  if (condition){ 
    statement1; 
    statement2; 
  } 
```

> **Nota:** la sentencia `else` es opcional.
> 
> ## Declaración If / Else
```
  if (condition){ 
    statement1; 
    statement2; 
  } 
  else{ 
    statement3; 
    statement4; 
  } 
```

## Declaración If / Elseif / Else
```
  if (condition){        // Se ejecuta cuando condition se evalua a true
    statement1; 
    statement2; 
  } 
  elseif (condition2){  // Se ejecuta cuando condition se evalua a false y condition2 se evalua a true
    statement3; 
    statement4; 
  } 
  else                  // Se ejecuta cuando condition y condition2 se evaluan a false
    statement5; 
```

## Ejemplo
```
  $a = 5;
  $b = 4;
  
  if ($a > $b){ 
    echo "$a es mayor que $b"; 
  } 
  else if ($b > $a){ 
    echo "$b es mayor que $a";
  } 
  else 
    echo "$a es igual que $b"; 
```

Para más información revisa el siguiente enlace: [PHP más](http://php.net/manual/en/control-structures.elseif.php)
