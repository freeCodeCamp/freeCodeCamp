---
title: Continue statement
localeTitle: Continuar declaración
---
# Continuar declaración

La instrucción `continue` pasa el control a la siguiente iteración dentro de un bucle.

En este ejemplo, cuando el valor de i es 2, se omite la siguiente declaración dentro del bucle.

## Ejemplo
```
int[] array = { 1, 2, 3, 4, 5 }; 
 for (int i = 0; i < array.Length; i++) 
 { 
  if( i == 2) 
  { 
    continue; 
  } 
    Console.WriteLine("Item on index {0} is {1}", i, array[i]); 
 } 
```

## Salida:
```
> Item on index 0 is 1 
 > Item on index 1 is 2 
 > Item on index 3 is 4 
 > Item on index 4 is 5 

```