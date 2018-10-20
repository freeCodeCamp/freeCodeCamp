---
title: Macros in C
localeTitle: Macros en c
---
## Macros en c

Una macro es una pieza de código con un nombre dado. Cuando se usa el nombre, se reemplaza por el contenido de la macro.

#### Definiendo macros

La palabra clave `#define` se utiliza para definir nuevas macros. Le sigue un nombre y un contenido. Por convención, los nombres de las macros se escriben en mayúsculas.

```C
#define PI 3.14 
```

Si usas la macro de esta manera:

```C
printf("Value of PI: %d", PI); 
```

Es lo mismo que escribir esto:

```C
printf("Value of PI: %d", 3.14); 
```

#### Tipos de macros

Hay dos tipos de macros. Las macros `Object-like` , mostradas arriba, y las macros `Function-like` .

#### Macros similares a funciones

Función-como utiliza la misma palabra clave `#define` . La diferencia es que utiliza un par o paréntesis después del nombre de la función.

```C
#define hello_world() printf("Hello World!") 
```

Así que llamando:

```C
hello_world() 
```

Usted obtiene:

```C
printf("Hello World!"); 
```

También puede establecer parámetros:

```C
#define hello(X) printf("Hello " X "!") 
```

Ahora llamando:

```C
hello("World"); 
```

Usted obtiene el equivalente de:

```C
printf("Hello World!"); 
```

#### Más información:

[Documentación en línea de GCC: Macros](https://gcc.gnu.org/onlinedocs/cpp/Macros.html)

[Documentación en línea de GCC: macros similares a objetos](https://gcc.gnu.org/onlinedocs/cpp/Object-like-Macros.html#Object-like-Macros)

[Documentación en línea de GCC: macros similares a funciones](https://gcc.gnu.org/onlinedocs/cpp/Function-like-Macros.html#Function-like-Macros)