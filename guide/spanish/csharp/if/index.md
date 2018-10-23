---
title: If
localeTitle: If
---
# If

La instrucción if ejecuta diferentes bloques de código según las condiciones.
```
if (condicion) 
 { 
    // Hace algo cuando la `condicion` es verdadera (true)
 } 
 else 
 { 
    // Hace algo cuando `condicion` es falsa (false)
 } 
```

Cuando la `condicion` es verdadera (true), el código dentro de la sección `if` se ejecuta, de lo contrario `else` lo hará. A veces necesitarías agregar una segunda condición. Para facilitar la lectura, debes usar `else if` en lugar de anidar enunciados `if`. En vez de escribir:
```
if (condicion) 
 { 
    // Hace algo cuando `condicion` es verdadera (true)
 } 
 else 
 { 
    if (otraCondicion) 
    { 
        // Hace algo si `otraCondicion` es verdadera (true) Y `condicion` es falsa (false)
    } 
    else 
    { 
        // Hace algo si `condicion` Y `otraCondicion` son falsas (false)
    } 
 } 
```

Podrías escribir algo más conciso como:
```
if (condicion) 
 { 
    // Hace algo si `condicion` es verdadera (true)
 } 
 else if (otraCondicion) 
 { 
    // Hace algo si `otraCondicion` es verdadera (true)
 } 
 else 
 { 
    // Hace algo si `condicion` Y `otraCondicion` es falsa (false) 
 } 
```

También es posible verificar si la condición es falsa y actuar sobre ella sin que tenga que tener una declaración else.
```
if(!condicion) 
 { 
 // Hace algo si `condicion` es falsa (false)
 } 
```

```
int numero = 3; 
 //!= implies that you wish to check if the object's value is not equal to the value next to it 
 // != implica que deseas verificar si el valor del objeto no es igual al valor junto a él
 if(numero !=2) 
 { 
     Console.WriteLine("El numero no es 2"); 
 } 
```

Ten en cuenta que las `else` y `else if` no son necesarias, mientras que `if` si es obligatorio.

## Ejemplo
```
    Console.WriteLine("Quien eres? "); 
    string nombre = Console.ReadLine(); 
 
    if (nombre == "John") 
    { 
        Console.WriteLine("Hola John!"); 
    } 
    else if (nombre == "Fabio") 
    { 
        Console.WriteLine("Oh, eres tú Fabio :)"); 
    } 
    else 
    { 
        Console.WriteLine("Oh! pensé que eras John o Fabio. Bueno, es un placer conocerte {0}!", nombre); 
    } 
 
    /* Corre y escribe algunos nombres:
        -> Si nombre es "John", entonces el output es "Hi John!" 
        -> Si nombre es "Fabio", entonces el output es "Oh, it's you Fabio :)" 
        -> Si nombre no es "John" noi "Fabio", el output es "Oh! pensé que eras John o Fabio. Bueno, es un placer conocerte {0}!" donde {0} contiene nombre. 
    */ 
```

La oración `if` necesita un resultado booleano, es decir, verdadero o falso. En algunos lenguajes de programación, varios tipos de datos se pueden convertir automáticamente en booleanos, pero en C#, tienes que hacer que el resultado sea específicamente booleano. Por ejemplo, no puede usar if (número), pero puede comparar número con algo, para generar un verdadero (true) o falso (false).
