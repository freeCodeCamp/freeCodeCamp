---
title: Functions in R
localeTitle: Funciones en r
---
Una función le permite definir un bloque de código reutilizable que puede ejecutarse muchas veces dentro de su programa.

Las funciones se pueden nombrar y llamar repetidamente o se pueden ejecutar de forma anónima en su lugar (similar a las funciones lambda en python).

El desarrollo de la comprensión completa de las funciones R requiere la comprensión de los entornos. Los entornos son simplemente una forma de gestionar objetos. Un ejemplo de entornos en acción es que puede usar una variable redundante nombre dentro de una función, que no se verá afectado si el tiempo de ejecución más grande ya tiene la misma variable. Además, si un La función llama a una variable no definida dentro de la función que verificará el entorno de nivel superior para esa variable.

### Sintaxis

En R, una definición de función tiene las siguientes características:

1.  La `function` palabra clave
2.  un nombre de función
3.  parámetros de entrada (opcional)
4.  algun bloque de codigo para ejecutar
5.  una declaración de retorno (opcional)

```{r}
# a function with no parameters or returned values 
 sayHello() = function(){ 
  "Hello!" 
 } 
 
 sayHello()  # calls the function, 'Hello!' is printed to the console 
 
 # a function with a parameter 
 helloWithName = function(name){ 
  paste0("Hello, ", name, "!") 
 } 
 
 helloWithName("Ada")  # calls the function, 'Hello, Ada!' is printed to the console 
 
 # a function with multiple parameters with a return statement 
 multiply = function(val1, val2){ 
  val1 * val2 
 } 
 
 multiply(3, 5)  # prints 15 to the console 
```

Las funciones son bloques de código que se pueden reutilizar simplemente llamando a la función. Esto permite una reutilización de código simple y elegante sin tener que volver a escribir explícitamente secciones de código. Esto hace que el código sea más legible, facilita la depuración y limita los errores de escritura.

Las funciones en R se crean utilizando la palabra clave de `function` , junto con un nombre de función y parámetros de función entre paréntesis.

La función `return()` puede ser utilizada por la función para devolver un valor, y generalmente se usa para forzar la terminación anticipada de una función con un valor devuelto. Alternativamente, la función devolverá el valor impreso final.

```{r}
# return a value explicitly or simply by printing 
 sum = function(a, b){ 
  c = a + b 
  return(c) 
 } 
 
 sum = function(a, b){ 
  a + b 
 } 
 
 
 result = sum(1, 2) 
 # result = 3 
```

También puede definir valores predeterminados para los parámetros, que R utilizará cuando no se especifique una variable durante la llamada a la función.

```{r}
sum = function(a, b = 3){ 
  a + b 
 } 
 
 result = sum(a = 1) 
 # result = 4 
```

También puede pasar los parámetros en el orden que desee, utilizando el nombre del parámetro.

```{r}
result = sum(b=2, a=2) 
 # result = 4 
```

R también puede aceptar parámetros opcionales adicionales con '...'

```{r}
sum = function(a, b, ...){ 
  a + b + ... 
 } 
 
 sum(1, 2, 3) #returns 6 
```

Las funciones también se pueden ejecutar de forma anónima. Estos son muy útiles en combinación con la familia de funciones 'aplicar'.

```{r}
# loop through 1, 2, 3 - add 1 to each 
 sapply(1:3, 
       function(i){ 
         i + 1 
         }) 
```

### Notas

*   Si una definición de función incluye argumentos sin valores predeterminados especificados, los valores para esos valores deben incluirse.
    
    ```{r}
    sum = function(a, b = 3){ 
     a + b 
     } 
     
     sum(b = 2) # Error in sum(b = 2) : argument "a" is missing, with no default 
    
    ```
    
*   Las variables definidas dentro de una función solo existen dentro del alcance de esa función, pero comprobarán un entorno más amplio si la variable no está especificada
    
    ```{r}
    double = function(a){ 
     a * 2 
     } 
     
     double(x)  # Error in double(x) : object 'x' not found 
     
     
     double = function(){ 
     a * 2 
     } 
     
     a = 3 
     double() # 6 
    
    ```
    

## Funciones incorporadas en R

*   R viene con muchas funciones que puede usar para realizar tareas sofisticadas como aleatorias muestreo.
    
*   Por ejemplo, puede redondear un número con la `round()` , o calcular Es factorial con el `factorial()` .
    

```r
> round(4.147) 
 [1] 4 
 > factorial(3) 
 [1] 6 
 > round(mean(1:6)) 
 [1] 4 
```

*   Los datos que usted pasa a la función se llama el argumento de la función.
    
*   Puedes simular una tirada del dado con la función `sample()` R. La función `sample()` toma dos argumentos: un vector llamado x y un número llamado size. Por ejemplo:
    

```r
> sample(x = 1:4, size = 2) 
 [] 4 2 
 > sample(x = die, size = 1) 
 [] 3 
 >dice <- sample(die, size = 2, replace = TRUE) 
 >dice 
 [1] 2 4 
 >sum(dice) 
 [1] 6 
```

*   Si no está seguro de qué nombres usar con una función, puede buscar la función Argumentos con Args.

```r
> args(round) 
 [1] function(x, digits=0) 
```

## Recursos

[Documentos oficiales](https://cran.r-project.org/manuals.html) [Quick-R](https://www.statmethods.net/management/functions.html) [CRAN](https://cran.r-project.org/doc/manuals/r-release/R-lang.html#Functions) [Avanzado R: Funciones](http://adv-r.had.co.nz/Functions.html)