---
title: Structures
localeTitle: Estructuras
---
## Estructuras en C

### ¿Qué son las estructuras?

*   Una **estructura** es un tipo definido por el usuario en C. Se basa en la idea de que, en ciertas ocasiones, el programador desea administrar no solo los tipos de datos primitivos, sino también los tipos de datos definidos por el programador.
*   **La estructura** , como su nombre indica, consta de varios tipos de datos primitivos, como caracteres, enteros, variables de punto flotante, matrices, etc.
*   **La estructura** también puede contener otros tipos de datos definidos por el usuario. Aprenderías sobre estructuras anidadas a continuación.
*   **Las estructuras** forman la base de **_la programación orientada a objetos,_** ya que el concepto de _clase se_ origina a partir de estructuras.

### palabra clave de estructura

*   `struct` palabra clave `struct` puede ayudarnos a definir un tipo de datos definido por el usuario.

```C
struct StudentRecord 
 { 
  char Name[20]; 
  int Class; 
  char Address[30]; 
  char Phone[10]; 
 }; 
```

*   También podemos definir una **estructura** usando **typedef** que facilita la inicialización de una estructura más adelante en nuestro programa.

```C
typedef struct StudentRecord 
 { 
  char Name[20]; 
  int Class; 
  char Address[30]; 
  char Phone[10]; 
 }Record; 
```

En `main()` , el tipo de datos definido por el usuario **StudentRecord** se define como:

```C
int main(void) 
 { 
  struct StudentRecord student1; 
 } 
```

Y usando **typedef** , el tipo de datos definido por el usuario se ve así:

```C
int main(void) 
 { 
  Record student1; 
 } 
```

Para acceder a los datos almacenados en **student1** , usamos el operador de punto ( **.** ) Para acceder a los contenidos de la variable de tipo de estructura.

```C
int main(void) 
 { 
  struct StudentRecord student1; 
  student1.Class = 10; 
  printf("Enter Name of Student\n"); 
  scanf("%s",&student1.Name); 
  printf("Enter Address of Student\n"); 
  scanf("%s",&student1.Address); 
  printf("Enter Phone Number of Student\n"); 
  scanf("%s",&student1.Phone); 
  // Printing the Data 
  printf("Name: %s \n, Class: %d \n, Address: %s \n, Phone: %s \n",student1.Name, student1.Class, student1.Address, student1.Phone); 
 } 
```

### Más información

https://www.tutorialspoint.com/cprogramming/c\_structures.htm