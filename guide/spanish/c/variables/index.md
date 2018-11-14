---
title: Variables in C
localeTitle: Variables en C
---
# Usando Variables en C

Ahora sabes cuáles son tus opciones con tipos de datos. Apliquémoslo con un ejemplo simple aquí:

```C
#include <stdio.h> 
 
 int main(void) { 
    int my_first_variable = 12; 
    double my_second_variable = 983.9; 
 
    printf("My int is %i\n", my_first_variable); 
    printf("My double is %f\n", my_second_variable); 
 
    return 0; 
 } 
```

¡Hay muchas cosas nuevas para echar un vistazo aquí! Ya has visto `#include` e `int main(void)` , por lo que no vale la pena detenerse. Lo que es nuevo es `int my_first_variable = 12;` .

Desde antes, debe recordar que `int` nos permite almacenar valores enteros. Después de la palabra `int` viene `my_first_variable` . Esta es una variable: puede almacenar valores y puede cambiar qué valores se almacenan en ella. Comenzamos con una declaración, donde le decimos a la computadora que el valor inicial de esta variable es 12. Es importante decirle a la computadora que queremos que exista una variable antes de intentar usarla. De lo contrario, la variable no existirá y el compilador no sabrá qué hacer cuando intente decirle que use una variable que no existe.

La siguiente línea es `double my_second_variable = 983.9` . La estructura similar de antes debería dejar claro que le está diciendo a la computadora que cree una variable llamada 'mi _segunda_ variable' que puede contener valores `double` y que desea que se establezca en 983.9.

El nombre real de la variable no es importante. Puede ser lo que desee, siempre que no sea ninguna de las palabras que C ha reservado para el idioma real, y solo puede incluir números y letras, nunca espacios. El nombre de la variable no puede comenzar con un número. Por convención, C usa nombres claros de variables que sustituyen los guiones bajos por espacios. La variable también podría ser camelCase, como esta:

```C
double myFirstVariable = 983.9 
```

De hecho, sería así en otros idiomas. Sin embargo, en C esto no se hace típicamente.

Una vez creadas las variables, comenzamos a utilizarlas:

```C
    printf("My int is %i\n", my_first_variable); 
    printf("My double is %f\n", my_second_variable); 
```

Este es el mismo printf () que usaste anteriormente, pero ahora tiene algunas características diferentes. Primero, observe que ahora hay dos cosas entre paréntesis: el texto que se imprimirá en la pantalla y la variable. Note también el `%i` y el `%f` . Esto se denomina _especificador de formato_ y se usa para especificar en qué formato se debe imprimir algo. Cuando printf () se encuentra con uno de estos, intentará insertar la variable dada en ese punto.

Debido a que los tipos de datos de nuestras variables se representan en una computadora de varias maneras diferentes, hay varias formas diferentes para que C las muestre:

Tipo de datos | Especificador de formato ---------------- | ------------------ char | % c, o% hhi para imprimir como un número cuando está firmado,% hhu para imprimir como un número cuando no está firmado corto | % hi, o% hu cuando no esté firmado int | % i,% d también se puede usar largo | % li, o% lu cuando no está firmado largo largo % lli, o% llu cuando no está firmado flotar %F doble | %F largo doble | % Lf unsigned int | % lu

Para imprimir una variable, debe tener un especificador de formato y luego una variable para formatear. Varios especificadores de formato pueden estar juntos en el mismo printf (), también:

```C
    printf("%i and %f", my_first_variable, my_second_variable); 
```

Para escanear una variable, debe tener un especificador de formato, y luego la dirección de la variable (indicada mediante la adición del signo '&' antes del nombre de la variable) para que se tome como entrada. Varios especificadores de formato pueden estar juntos en el mismo scanf (), también:

```C
    scanf("%i and %f", &my_first_variable, &my_second_variable); 
```

Ahora vamos a empezar a cambiar los valores dentro de nuestras variables. Aquí están los mismos ejemplos de antes, pero con algunas líneas más:

```C
#include <stdio.h> 
 
 int main(void) { 
    int my_first_variable = 12; 
    double my_second_variable = 983.9; 
 
    printf("My int is %i\n", my_first_variable); 
    printf("My double is %f\n", my_second_variable); 
 
    my_second_variable = -18.2 + my_first_variable; 
 
    printf("Now my double is %f\n", my_second_variable); 
 
    return 0; 
 } 
```

Ahora hay una línea que lee `my_second_variable = -18.2 + my_first_variable;` . Esta ecuación asigna un nuevo valor a la variable de la izquierda. Cuando se asigna un nuevo valor, la variable a la que se asigna debe estar siempre a la izquierda y siempre debe estar allí sola. Su programa encontrará el resultado del lado derecho y lo asignará a la variable de la izquierda. En este caso, hemos agregado mi _primera_ variable a -18.2. Mi _primera_ variable es 12, y -18.2 + 12 es -6.2, por lo que mi _segunda_ variable se convierte en -6.2 después de este paso. ¡Nos meteremos más en matemáticas en un momento!

## Un poco más en flotadores y dobles.

Cuando se imprimen flotantes y dobles, muchas veces necesitamos precisión después del punto decimal. Si tenemos

```C
float var1 = 15.3; 
 printf("%f"); 
```

Obtenemos `15.300000` . Entonces, digamos que solo queremos dos lugares después del decimal para darnos las `15.30` . Usaríamos% .2f. Tenga en cuenta que usamos un punto decimal delante de la cantidad de lugares decimales que queremos, seguido de la f, lo que significa que queremos imprimir un flotante o un doble.

# Nombres para variables

*   Los únicos caracteres que puede usar en los nombres son caracteres alfabéticos, dígitos numéricos y el carácter de subrayado (\_)
*   El primer carácter de un nombre no puede ser un dígito numérico.
*   Los caracteres en mayúsculas se consideran distintos de los caracteres en minúsculas.
*   No puedes usar una palabra clave C para un nombre.

# Antes de continuar ...

## Una revisión

*   Las variables deben crearse antes de ser utilizadas.
*   Las variables se crean en el siguiente formato: `datatype variable_name = number` .
*   Los especificadores de formato permiten la impresión de variables.
*   El signo igual `=` permite asignar valores a las variables.