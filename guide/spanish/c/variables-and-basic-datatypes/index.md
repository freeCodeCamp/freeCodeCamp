---
title: Variables and Basic Data Types 
localeTitle: Variables y tipos de datos básicos
---
# Variables y tipos de datos básicos

## ¿Qué es una variable?

Las variables almacenan valores. Básicamente, le asigna un nombre a un valor almacenado, que desea utilizar más adelante. Es importante tener en cuenta que una variable puede almacenar solo un valor a la vez. Sin embargo, más adelante, puede cambiar los valores almacenados más adelante en el código y también puede asignar el valor de una variable a otra.

> Cuando creas una variable, se llama `declaring` , y cuando le das un valor para almacenar, se llama `assignment` . Si le da un valor a la variable al mismo tiempo que la declara, se llama `initializing` . C es muy exigente acerca de cómo crear variables y lo que almacenas en ellas. C es un `strongly typed` , lo que significa que debe definir el tipo y el nombre de cada variable cuando lo declare. El nombre de una variable puede estar compuesto por letras, dígitos y el carácter de subrayado.

## Tipos basicos

En el Estándar C hay cuatro tipos de datos básicos importantes: `int` , `float` , `double` , `char` .

### Enteros

Para valores de números enteros, se usa la palabra clave `int` (abreviatura de entero). Veamos un programa simple:

```C
#include <stdio.h> 
 int main(void){ 
 
 int a; // Declaring a variable which stores integer values and is called 'a' 
 int b = 5; //Initializing an int called 'b' with the value 5 
 a = 6; // Assigning the value 6 to the variable 'a' 
 int c; 
 c = a + b; // Assign the sum of 'a' and 'b' to the variable c 
 int d = a + c; //But we could also initialize it right away. 
 
 //Some shiny things 
 printf("%d \n", c); 
 printf("%d %d \n", a, b); 
 
 return 0; 
 } 
```

Vamos a desglosar lo que hicimos bajo `Some shingy things` :

```C
printf("%d \n", c); 
```

Para imprimir el valor de la variable `c` , puede usar la `printf()` . Tenga en cuenta el `%d` encerrado en las comillas dobles. Esto le indica a la computadora a esperar un valor ecimal **d,** y que es después de la coma.

```C
printf("%d %d \n", a, b); 
```

Puede imprimir varios enteros en el orden dado después de la coma.

Tenga en cuenta que cuando intenta almacenar un valor decimal en un `int` , solo obtendrá la parte completa, ya que se truncarán.

También podemos escribir el programa de la siguiente manera:
```
#include <stdio.h> 
 int main(void){ 
 
 int a=3,b=4,c; // we can also assign and declare the values in 1 line 
 c = a + b; // Assign the sum of 'a' and 'b' to the variable c 
 
 printf("%d %d \n", a, b); 
 printf("%d \n", c); 
 
 return 0; 
 } 
```

### Flotadores y dobles.

Para almacenar valores decimales, puede utilizar las palabras clave `float` y `double` . La diferencia entre ellos es la precisión, el `double` tiene aproximadamente 13 dígitos, mientras que el `float` tiene aproximadamente 7, pero esto difiere de CPU a CPU. \`\` \`C #incluir int main (void) { doble a = 3.23; printf ("La variable a tiene el valor:% f \\ n", a); // Los valores dobles se pueden imprimir con% f devuelve 0; }
```
### Characters 
 You can store a single character with the `char` keyword. You will learn about storing multiple characters later, when we introduce `arrays`. Let's look at some code: 
```

do

# incluir

int main (void) { char a = 'A'; // Inicializando un char con el valor 'A', ¡note las comillas simples! printf ("El carácter era:% c", a) // Los caracteres se pueden imprimir con% c devuelve 0; }
```
## The Boolean type 
 Later in C a new type was added, called `bool`. Bool stores true/false values, which comes in handy when you have to make decisions in the code. To use it though, you have to inlcude another header next to `<stdio.h>` called `<stdbool.h>`. 
```

do

# incluir

# incluir

int main (void) { bool a = true; bool b = falso;

devuelve 0; } \`\` \`

## Comentarios

El tipo de una variable le dice al compilador cuánto espacio crear (asignar) para la variable. Ahora ha visto los tipos de datos básicos, pero hay modificadores para que modifiquen la cantidad de espacio asignado para una variable. Los modificadores pueden aumentar o disminuir los valores por defecto. C tiene 5 modificadores: `short` , `long` , `signed` , `unsigned` , `long long` . Están prefijados a los tipos básicos.