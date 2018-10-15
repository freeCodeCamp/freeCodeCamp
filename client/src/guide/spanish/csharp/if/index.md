---
title: If
localeTitle: Si
---
# Si

La instrucción if ejecuta diferentes bloques de código según las condiciones.
```
if (condition) 
 { 
    // Do something when `condition` is true 
 } 
 else 
 { 
    // Do something when `condition` is false 
 } 
```

Cuando la `condition` es verdadera, el código dentro de la sección `if` se ejecuta, de lo `else` ejecuta. A veces necesitarías agregar una segunda condición. Para facilitar la lectura, debe usar `else if` lugar de anidar `if` enunciados. en lugar de escribir:
```
if (condition) 
 { 
    // Do something if `condition` is true 
 } 
 else 
 { 
    if (anotherCondition) 
    { 
        // Do something if `anotherCondition` is true 
    } 
    else 
    { 
        // Do something if `condition` AND `anotherCondition` is false 
    } 
 } 
```

Podrías usar la escritura mucho más concisa:
```
if (condition) 
 { 
    // Do something if `condition` is true 
 } 
 else if (anotherCondition) 
 { 
    // Do something if `anotherCondition` is ture 
 } 
 else 
 { 
    // Do something if `condition` AND `anotherCondition` is false 
 } 
```

También es posible verificar si la condición es falsa y actuar sobre ella sin que tenga que tener una declaración else.
```
if(!condition) 
 { 
 //do something if the condition is false 
 } 
```

```
int number = 3; 
 //!= implies that you wish to check if the object's value is not equal to the value next to it 
 if(number !=2) 
 { 
     Console.WriteLine("Number is not 2"); 
 } 
```

Tenga en cuenta que las `else` y " `else if` no son necesarias, mientras que `if` es obligatorio.

## Ejemplo
```
    Console.WriteLine("Who are you? "); 
    string name = Console.ReadLine(); 
 
    if (name == "John") 
    { 
        Console.WriteLine("Hi John!"); 
    } 
    else if (name == "Fabio") 
    { 
        Console.WriteLine("Oh, it's you Fabio :)"); 
    } 
    else 
    { 
        Console.WriteLine("Oh! I thought you were John or Fabio. Anyway, nice to meet you {0}!", name); 
    } 
 
    /* Run and type some names: 
        -> If name is "John", then output is "Hi John!" 
        -> If name is "Fabio", then output is "Oh, it's you Fabio :)" 
        -> If name is neither "John" nor "Fabio", output is "Oh! I thought you were John or Fabio. Anyway, nice to meet you {0}!" where {0} contains the name. 
    */ 
```

La sentencia if necesita un resultado booleano, es decir, verdadero o falso. En algunos lenguajes de programación, varios tipos de datos se pueden convertir automáticamente en booleanos, pero en C #, tiene que hacer que el resultado sea específicamente booleano. Por ejemplo, no puede usar if (número), pero puede comparar número con algo, para generar un verdadero o falso.