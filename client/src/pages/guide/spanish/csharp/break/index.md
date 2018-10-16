---
title: Break statement
localeTitle: Declaración de ruptura
---
# Declaración de ruptura

La `break` comunicado termina la sentencia de bucle envolvente o el interruptor en la que aparece. El control se pasa a la instrucción que sigue al bucle o al bloque de conmutación.

En el primer ejemplo, cuando el valor de i es 3, se ejecuta la instrucción break, lo que hace que la ejecución del bucle finalice.

## Ejemplo
```
int[] array = { 1, 2, 3, 4, 5 }; 
 for (int i = 0; i < array.Length; i++) 
 { 
  if(i == 3) 
  { 
    break; 
  } 
    Console.WriteLine("Item on index {0} is {1}", i, array[i]); 
 } 
```

## Salida:
```
> Item on index 0 is 1 
 > Item on index 1 is 2 
 > Item on index 2 is 3 
```

En el segundo ejemplo, se incluye una declaración de ruptura al final de cada caso. Esto ejecuta las declaraciones en el caso sin continuar con el siguiente caso. Sin la declaración de interrupción, el programa continuaría ejecutando el siguiente caso y no funcionaría como se esperaba.

## Ejemplo
```
switch (exampleVariable) 
 { 
    case 1: 
        Console.WriteLine("case 1"); 
        Console.WriteLine("This only shows in example 1"); 
        break; 
    case 2: 
        Console.WriteLine("case 2"); 
        Console.WriteLine("This only shows in example 2"); 
    Console.WriteLine("This also only shows in example 2"); 
        break; 
    Console.WriteLine("This would not show anywhere, as it is after the break line and before the next case"); 
    default: 
        Console.WriteLine("default"); 
        Console.WriteLine("This only shows in the Default Example"); 
        break; 
 } 
```

## Salida:
```
> case 1 
 > This only shows in example 1 
 > 
 > case  2 
 > This only shows in example 2 
 > This also only shows in example 2 
 > 
 > default 
 > This only shows in the Default Example 
 > 

```