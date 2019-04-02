---
title: Arrays and Strings
localeTitle: Arreglos y cuerdas
---
# Arreglos en C

Las matrices permiten que un conjunto de variables se agrupen como una sola variable. Esto es útil por derecho propio, pero también porque las cadenas entran en esta categoría. Las cadenas, que son la forma en que representamos palabras y oraciones en lenguajes de computadora, son solo colecciones de variables de caracteres. Por lo tanto, representamos cadenas utilizando matrices en C.

## Haciendo una matriz

Una variable entera normal se declararía así:

```C
int my_variable; 
```

Para declarar esto como una matriz, y convertirla en una matriz de 5 enteros, se puede declarar así:

```C
int my_array[5]; 
```

Esto producirá una matriz llamada `my_array` que puede contener 5 enteros. Sin embargo, ninguna de las posiciones en la matriz ha sido establecida (aún). Podría declarar la matriz y establecer los valores al principio:

```C
int my_array[] = {1, 5, 3, 6, 2}; 
```

Observe que en este ejemplo, no nos molestamos en especificar un número entre los corchetes. Esto se debe a que los paréntesis tienen valores en ellos que se asignarán a cada posición en la matriz. De todos modos, podría poner un número entre corchetes, siempre que se asegure de crear suficientes ubicaciones de memoria para almacenar los valores que está pasando.

Al inicializar una matriz, puede proporcionar menos valores que los elementos de la matriz. Por ejemplo, el La siguiente declaración inicializa solo los dos primeros elementos de my\_array:

float my\_array \[5\] = {5.0, 2.5};

Si inicializa parcialmente una matriz, el compilador establece los elementos restantes en cero.

Ahora que la matriz se ha declarado con 5 valores, tiene 5 ubicaciones de memoria. Considere esta tabla para un ejemplo visual de eso:

| Posición | 0 | 1 | 2 | 3 | 4 | | ---------- | --- | --- | --- | --- | --- | | Valor | 1 | 5 | 3 | 6 | 2 |

Tenga en cuenta que aunque hay 5 ubicaciones de memoria, las posiciones de la matriz solo suben a 4. Esto se debe a que las matrices en C (y la mayoría de los otros idiomas) comienzan en 0, porque las matrices se implementan utilizando punteros. Cuando llamas a una posición en una matriz, realmente estás llamando a esa ubicación de memoria más un número determinado. Para obtener el comienzo de la matriz, mueva 0 lugares en la memoria, para obtener la posición después de eso, mueva un lugar en la memoria, y así sucesivamente.

Aquí hay un ejemplo de cómo configurar la matriz en 9 en la posición 1:

```C
my_array[1] = 9; 
```

Entonces es como cualquier otra variable, excepto que tiene múltiples valores para acceder usando el número entre los corchetes. Los valores también se pueden devolver de esa manera:

```C
int variable = my_array[4]; 
```

Esto declarará que la `variable` es un número entero igual al valor en la posición 4 de `my_array` . Sin embargo, dado que la `variable` es un solo `int` , y no una matriz, este **no** es el código que tendrá el resultado correcto:

```C
// This code will NOT work properly! 
 int variable = my_array; 
```

Cualquier entero se puede colocar entre corchetes para obtener una posición en la matriz. Esos enteros también pueden ser variables. Eche un vistazo a este ejemplo, que imprime el contenido de una matriz:

```C
#include <stdio.h> 
 
 int main(void) { 
    int my_array[] = {1, 1, 2, 3, 5, 7, 12}; 
 
    for(int count = 0; count < 7; count++) { 
        printf("%i, \n", my_array[count]); 
    } 
 
    return 0; 
 } 
```

## Instrumentos de cuerda

Las matrices son conjuntos de variables, y las cadenas son conjuntos de caracteres. Como resultado, podemos representar cadenas con una matriz. Se _puede_ declarar algo en la misma forma que antes, pero tendrá que colocar '\\ 0' como uno de sus valores (más sobre esto en un minuto!):

```C
char hello_world[] = {'H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd', '!', '\0'}; 
```

Yikes Esa no es realmente una gran solución. Afortunadamente, C proporciona una mejor manera con las cuerdas en mente:

```C
char hello_world[] = "Hello world!"; 
```

Eso es mucho mejor Ni siquiera requiere que coloques el '\\ 0' al final, tampoco. Entonces, ¿qué fue eso?

### Terminación nula

Las cadenas en C terminan en nulo, lo que significa que terminan con el carácter nulo. De esta manera, el código del compilador (y el suyo y el de todos) sabrán dónde termina la cadena: una vez que el carácter es nulo, la cadena termina.

Por supuesto, no hay un botón 'nulo' en su teclado, pero aún necesita escribirlo de alguna manera. Eso es lo que hace \\ 0. Cuando el compilador de C vea \\ 0, insertará un carácter nulo. Es como cómo \\ n imprime una nueva línea.

### Cadenas de impresión

Otra cosa que C nos facilita es la impresión de cuerdas. En lugar de forzarlo a imprimir todos los caracteres de la matriz, puede usar el especificador de formato% s y tratar la cadena como si fuera cualquier valor `int` o `double` . Aquí hay un ejemplo del programa hola, mundo desde el principio, un poco más complicado con cadenas:

```C
#include <stdio.h> 
 
 int main(void) { 
    char hello_world[] = "Hello, World!\n"; 
    printf("%s", hello_world); 
 
    return 0; 
 } 
```

### Jugando con cuerdas

Imprimir cadenas es fácil, pero otras operaciones son un poco más complejas. Afortunadamente, la biblioteca `string.h` tiene algunas funciones útiles para usar en una serie de situaciones.

#### Copiando: `strcpy`

`strcpy` (de 'copia de cadena') copia una cadena. Por ejemplo, este fragmento de código va a copiar el contenido de la cadena de `second` en la cadena de `first` :

```C
strpy(first, second); 
```

Este es un ejemplo de cómo se ve la implementación manual de la función strcpy:

_Cadena de_ copia vacía _(char \[\] primera_ cadena, char \[\] second\_string) { int i;
```
for(i = 0; first_string[i] != '\0'; i++) 
 { 
    first_string[i] = second_string[i]; 
 } 
```

}

#### Concatenar: `strcat`

`strcat` (de 'string concatenate') concatenará una cadena, lo que significa que tomará el contenido de una cadena y la colocará al final de otra cadena. En este ejemplo, los contenidos del `second` se concatenarán en el `first` :

```C
strcat(first, second); 
```

Aquí hay un ejemplo de implementación manual de fuction strcat:

void string\_concatenate (char \[\] s1, char \[\] s2) { int i = strlen (s1), j; para (int j = 0; s2 \[j\]; j ++, i + = 1) { s1 \[i\] = s2 \[j\]; } }

#### Obtener longitud: `strlen`

`strlen` (de 'longitud de cadena') devolverá un valor entero correspondiente a la longitud de la cadena. En este ejemplo, a un entero llamado `string_length` se le asignará la longitud de `my_string` :

```C
string_length = strlen(my_string); 
```

Aquí hay una implementación manual de struction fuction:

int string\_length (char \[\] string) { int i;
```
for(int i = 0; string[i]; i++); 
 
 return i; 
```

}

#### Comparar: `strcmp`

`strcmp` (de 'string compare') compara dos cadenas. El valor entero que devuelve es 0 si son iguales, pero también devolverá negativo si el valor del primero (sumando caracteres) es menor que el valor del segundo, y positivo si el primero es mayor que el segundo . Eche un vistazo a un ejemplo de cómo se puede usar esto:

```C
if(!strcmp(first, second)){ 
    printf("These strings are the same!\n"); 
 } else { 
    printf("These strings are not the same!\n"); 
 } 
```

Note el `!` , lo cual es necesario porque esta función devuelve 0 si son iguales. Colocar el signo de exclamación aquí hará que la comparación se vuelva verdadera.

#### Dividir una cadena: `strtok`

`strtok` (desde 'token de cadena') rompe una cadena en una serie de tokens usando un delimitador. En este ejemplo, strtok rompe la cadena str en una serie de tokens utilizando el delimitador delim:

```C
char *strtok(char *str, const char *delim); 
```

# Antes de continuar ...

## Una revisión

*   Las matrices son colecciones de variables.
*   Las matrices tienen posiciones separadas que se pueden declarar entre paréntesis y se puede acceder a ellas entre corchetes.
*   Las cadenas también son matrices, pero podemos tratarlas de manera un poco diferente: se pueden declarar con comillas dobles y se pueden imprimir con% s.
*   Las cadenas tienen su propia biblioteca, `string.h` , que tiene algunas funciones útiles para usar.