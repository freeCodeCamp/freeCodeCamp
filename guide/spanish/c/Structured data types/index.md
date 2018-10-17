---
title: Structured data types
localeTitle: Tipos de datos estructurados
---
# Tipos de datos estructurados en C

Durante su experiencia de programación, puede sentir la necesidad de definir su propio tipo de datos. En C esto se hace usando dos palabras clave: `struct` y `typedef` . Estructuras y uniones le darán la oportunidad de almacenar tipos de datos no homogéneos en una sola colección.

## Declarar un nuevo tipo de datos

```C
typedef struct student_structure{ 
    char* name; 
    char* surname; 
    int year_of_birth; 
 }student; 
```

Después de este pequeño código, el `student` será una nueva palabra clave reservada y podrá crear variables de tipo `student` . Tenga en cuenta que este nuevo tipo de variable se va a estructurar, lo que significa que define una lista agrupada físicamente de variables que se colocarán bajo un nombre en un bloque de memoria.

## Nuevo uso de tipo de datos

Ahora vamos a crear una nueva variable de `student` e inicializar sus atributos:

```C
   student stu; 
 
   strcpy( stu.name, "John"); 
   strcpy( stu.surname, "Snow"); 
   stu.year_of_birth = 1990; 
 
   printf( "Student name : %s\n", stu.name); 
   printf( "Student surname : %s\n", stu.surname); 
   printf( "Student year of birth : %d\n", stu.year_of_birth); 
```

Como puede ver en este ejemplo, debe asignar un valor a todas las variables contenidas en su nuevo tipo de datos. Para acceder a una variable de estructura puede usar el punto como en `stu.name` . También hay una forma más corta de asignar valores a una estructura:

```C
typedef struct{ 
   int    x; 
   int    y; 
 }point; 
 
 point image_dimension = {640,480}; 
```

O si prefieres establecer sus valores siguiendo un orden diferente:

```C
point img_dim = { .y = 480, .x = 640 }; 
```

## Sindicatos vs Estructuras

Los sindicatos se declaran de la misma forma que las estructuras, pero son diferentes porque solo se puede usar un elemento dentro de la unión en cualquier momento.

```C
typedef union{ 
      int circle; 
      int triangle; 
      int ovel; 
 }shape; 
```

Debe usar la `union` en el caso de que solo se aplique una condición y solo se use una variable. No olvide que también podemos utilizar nuestro nuevo tipo de datos:

```C
typedef struct{ 
      char* model; 
      int year; 
 }car_type; 
 
 typedef struct{ 
      char* owner; 
      int weight; 
 }truck_type; 
 
 typedef union{ 
  car_type car; 
  truck_type truck; 
 }vehicle; 
```

## Algunos trucos mas

*   Cuando crea un puntero a una estructura usando el operador `&` puede usar el operador especial `->` infijo para deferencia. Esto es muy utilizado, por ejemplo, cuando se trabaja con listas vinculadas en C
*   El nuevo tipo definido se puede usar como otros tipos básicos para casi todo. Intente, por ejemplo, crear una matriz de tipo de `student` y ver cómo funciona.
*   Las estructuras se pueden copiar o asignar, pero no se pueden comparar.