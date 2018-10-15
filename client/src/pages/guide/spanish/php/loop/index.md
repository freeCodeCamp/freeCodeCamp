---
title: Loop
localeTitle: Lazo
---
# PHP Loop

Cuando necesite repetir la misma tarea varias veces, puede usar bucle en lugar de seguir agregando el mismo código una y otra vez. En PHP tenemos las siguientes declaraciones de bucle:

*   for - loop a través de un bloque de código con un número específico de veces.
*   while: pasa por un bloque de código si la condición es verdadera.
*   do ... while: recorre un bloque de código uno y continúa en bucle si la condición es verdadera.
*   foreach - recorre un bloque de código para cada valor dentro de una matriz.

El uso de una `break` dentro del bucle puede detener la ejecución del bucle.

# En bucle

Recorra un bloque de código con un número específico de veces.

## Sintaxis
```
for (init counter; condition; counter increment or decrement) 
 { 
    // Code to be executed 
 } 
```

## Ejemplo

```php
<?php 
 for($index = 0; $index < 5; $index ++) 
 { 
    echo "Current loop counter ".$index.".\n"; 
 } 
 ?> 
```

## Salida
```
> Current loop counter 0. 
 > Current loop counter 1. 
 > Current loop counter 2. 
 > Current loop counter 3. 
 > Current loop counter 4. 
```

# Mientras bucle

Recorra un bloque de código si la condición es verdadera.

## Sintaxis
```
while (condition) 
 { 
    // Code to be executed 
 } 
```

## Ejemplo

```php
<?php 
 $index = 10; 
 while ($index >= 0) 
 { 
    echo "The index is ".$index.".\n"; 
    $index--; 
 } 
 ?> 
```

## Salida
```
> The index is 10. 
 > The index is 9. 
 > The index is 8. 
 > The index is 7. 
 > The index is 6. 
 > The index is 5. 
 > The index is 4. 
 > The index is 3. 
 > The index is 2. 
 > The index is 1. 
 > The index is 0. 
```

# Hacer ... mientras bucle

Recorra un bloque de código uno y continúe si la condición es verdadera.

## Sintaxis
```
do 
 { 
    // Code to be executed 
 } 
 while (condition); 
```

## Ejemplo

```php
<?php 
 $index = 3; 
 do 
 { 
    // execute this at least 1 time 
    echo "Index: ".$index.".\n"; 
    $index --; 
 } 
 while ($index > 0); 
 ?> 
```

## Salida
```
> Index: 3. 
 > Index: 2. 
 > Index: 1. 
```

# Bucle foreach

Recorra un bloque de código para cada valor dentro de una matriz.

## Sintaxis
```
foreach ($array as $value) 
 { 
    // Code to be executed 
 } 
```

## Ejemplo

```php
<?php 
 $array = ["Ali", "Ah Kao", "Muthu", "Gwen", "Lucida", "Cecily", "Arthur", "Flora"]; 
 foreach ($array as $name) 
 { 
    echo "Hi, my name is ".$name.".\n"; 
 
    if ($name == "Cecily") 
    { 
        echo "\"Hello, ".$name."!\""; 
 
        // stop the loop if name is Cecily 
        break; 
    } 
 } 
 ?> 
```

## Salida
```
> Hi, my name is Ali. 
 > Hi, my name is Ah Kao. 
 > Hi, my name is Muthu. 
 > Hi, my name is Gwen. 
 > Hi, my name is Lucida. 
 > Hi, my name is Cecily. 
 > "Hello, Cecily!" 

```