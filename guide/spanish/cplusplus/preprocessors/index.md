---
title: Preprocessors
localeTitle: Preprocesadores
---
## Preprocesadores en C / CPP

Como su nombre lo indica, los preprocesadores son programas que procesan nuestro código fuente antes de compilar. Hay una serie de pasos involucrados entre escribir un programa y ejecutar un programa en C / C ++. Echemos un vistazo a estos pasos antes de que realmente comencemos a aprender acerca de los preprocesadores.

![Img](https://cdn-media-1.freecodecamp.org/imgr/Pb0aTkV.png)

Puedes ver los pasos intermedios en el diagrama de arriba. El código fuente escrito por los programadores se almacena en el archivo program.c. Este archivo luego es procesado por preprocesadores y se genera un archivo de código fuente expandido denominado programa. El compilador compila este archivo expandido y se genera un archivo de código de objeto denominado program.obj. Finalmente, el enlazador vincula este archivo de código de objeto con el código de objeto de las funciones de la biblioteca para generar el archivo ejecutable program.exe.

Los programas de preprocesador proporcionan directivas de preprocesadores que le indican al compilador que preprocese el código fuente antes de compilar. Todas estas directivas de preprocesador comienzan con un símbolo `#` (hash). Este símbolo ('#') al comienzo de una declaración en un programa C / C ++ indica que es una directiva de preprocesador. Podemos colocar estas directivas de preprocesador en cualquier lugar de nuestro programa. Algunos ejemplos de directivas de preprocesador son: `#include` , `#define` , `#ifndef` etc.

### Tipos de directivas de preprocesador:

1.  Macros
2.  Inclusión de archivos
3.  Compilación condicional
4.  Otras directivas

### Macros

Las macros son parte de código en un programa que recibe un nombre. Cuando el compilador encuentra este nombre, el compilador reemplaza el nombre con el fragmento de código real. La directiva `#define` se usa para definir una macro.

```cpp
  #include<iostream> 
  #define LIMIT 3 
  int main() 
  { 
    for(int i=0; i < LIMIT; i++) 
    { 
      std::cout<<i<<" " ; 
    } 
      return 0; 
  } 
```

Salida:

`0 1 2`

En el programa anterior, cuando el compilador ejecuta la palabra `LIMIT` , la reemplaza por 3. La palabra `LIMIT` en definición de macro se llama plantilla de macro y '3' es expansión de macro.

No debe haber un punto y coma (';') al final de la definición de la macro. Las definiciones de macros no necesitan un punto y coma para terminar.

### Inclusión de archivos:

Este tipo de directiva de preprocesador le dice al compilador que incluya un archivo en el programa de código fuente. Hay dos tipos de archivos que pueden ser incluidos por el usuario en el programa:

*   \#### Archivos de encabezado o archivos estándar: Estos archivos contienen una definición de funciones predefinidas como printf (), ... scanf (), etc. Estos archivos deben incluirse para trabajar con estas funciones. ... Diferentes funciones se declaran en diferentes archivos de cabecera. Por ejemplo ... las funciones de E / S estándar están en el archivo 'iostream', mientras que las funciones que ... realizan operaciones de cadena están en el archivo 'cadena'.

#### Sintaxis:

`#include< file_name >` donde nombre\_archivo es el nombre del archivo que se incluirá. Los corchetes `<` y `>` le indican al compilador que busque el archivo en el directorio estándar.

*   \#### Archivos definidos por el usuario: Cuando un programa se vuelve muy grande, es una buena práctica dividirlo en archivos más pequeños e incluirlos cuando sea necesario. Estos tipos de archivos son archivos definidos por el usuario. Estos archivos pueden ser incluidos como: ... `#include"filename"`

### Compilación condicional:

Las directivas de compilación condicional son tipos de directivas que ayudan a compilar una parte específica del programa o a saltarse la compilación de una parte específica del programa en función de algunas condiciones. Esto se puede hacer con la ayuda de dos comandos de preprocesamiento `ifdef` y `endif` .

#### Sintaxis:

```cpp
  ifdef macro_name 
    statement1; 
    statement2; 
    statement3; 
    . 
    . 
    . 
    statementN; 
  endif 
```

Si se define la macro con el nombre como 'macroname', entonces el bloque de instrucciones se ejecutará normalmente, pero si no está definido, el compilador simplemente saltará este bloque de instrucciones.

### Otras directivas:

Aparte de las directivas anteriores, hay dos directivas más que no se utilizan comúnmente. Estos son:

1.  \##### `#undef` Directiva: La directiva `#undef` se usa para no definir una macro existente. Esta directiva funciona como:

##### Sintaxis:

`#undef LIMIT` El uso de esta declaración anulará la definición de la macro existente. Después de esta declaración, cada declaración `#ifdef LIMIT` se evaluará como falsa.

2.  \##### `#pragma` Directiva: Esta directiva es una directiva de propósito especial y se usa para activar o desactivar algunas funciones. Este tipo de directivas son específicas del compilador, es decir, varían de compilador a compilador. Algunas de las directivas `#pragma` se discuten a continuación:

##### `#pragma startup` y `#pragma exit` :

Estas directivas nos ayudan a especificar las funciones que se necesitan para ejecutar antes del inicio del programa (antes de que el control pase a main ()) y justo antes de la salida del programa (justo antes de que el control regrese de main ()).

```cpp
#include<stdio.h> 
 void func1(); 
 void func2(); 
 #pragma startup func1 
 #pragma exit func2 
 void func1() 
 { 
    printf("Inside func1() "); 
 } 
 void func2() 
 { 
    printf("Inside func2() "); 
 } 
 int main() 
 { 
    printf("Inside main() "); 
 
    return 0; 
 } 
```

Salida:  
`Inside func1() Inside main() Inside func2()`  
El código anterior producirá la salida como se indica a continuación cuando se ejecute en compiladores GCC:  
Salida:  
`Inside main()`  
Esto sucede porque GCC no admite #pragma startup o exit. Sin embargo, puede utilizar el siguiente código para obtener un resultado similar en los compiladores GCC.

```cpp
#include<stdio.h> 
 void func1(); 
 void func2(); 
 void __attribute__((constructor)) func1(); 
 void __attribute__((destructor)) func2(); 
 void func1() 
 { 
    printf("Inside func1()\n"); 
 } 
 void func2() 
 { 
    printf("Inside func2()\n"); 
 } 
 int main() 
 { 
    printf("Inside main()\n"); 
 
    return 0; 
 } 
```

##### `#pragma warn` directiva:

Esta directiva se utiliza para ocultar el mensaje de advertencia que se muestra durante la compilación. Podemos ocultar las advertencias como se muestra a continuación:

##### `#pragma warn -rvl` :

Esta directiva oculta las advertencias que aparecen cuando una función que se supone que devuelve un valor no devuelve un valor.

##### `#pragma warn -par` :

Esta directiva oculta las advertencias que aparecen cuando una función no utiliza los parámetros que se le pasan.

##### `#pragma warn -rch`

Esta directiva oculta las advertencias que se generan cuando no se puede acceder a un código. Por ejemplo: cualquier código escrito después de la declaración de retorno en una función es inalcanzable.