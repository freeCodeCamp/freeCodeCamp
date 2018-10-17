---
title: Default Parameters
localeTitle: Parámetros predeterminados
---
## Parámetros predeterminados

Si está familiarizado con otros lenguajes de programación como Ruby, Python, los parámetros predeterminados no son nuevos para usted.

Los parámetros predeterminados son parámetros que se dan de forma predeterminada al declarar una función. Pero su valor se puede cambiar al llamar a la función.

Ejemplo
```
let Func = (a, b = 10) => { 
 return a + b; 
 } 
 Func(20); // 20 + 10 = 30 
```

En el ejemplo anterior, estamos pasando solo un parámetro. La función hace uso del parámetro predeterminado y ejecuta la función.

Considere otro ejemplo:
```
Func(20, 50); // 20 + 50 = 70 
```

En el ejemplo anterior, la función toma dos parámetros y el segundo parámetro reemplaza el parámetro predeterminado.

Considere otro ejemplo:
```
let NotWorkingFunction = (a = 10, b) => { 
 return a + b; 
 } 
 NotWorkingFunction(20); // NAN. Not gonna work. 
```

Cuando se llama a la función con parámetros, se asignan en el orden. (es decir) el primer valor se asigna al primer parámetro y el segundo se asigna al segundo parámetro y así sucesivamente ..

En el ejemplo anterior, el valor 20 se asigna al parámetro 'a' y 'b' no tiene ningún valor. Así que no estamos obteniendo ninguna salida.

Pero,
```
NotWorkingFunction(20, 30); // 50; 
```

Funciona bien.