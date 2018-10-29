---
title: Clean Code Guidelines
localeTitle: Pautas de código limpio
---
# Pautas de código limpio

Al codificar, el estilo de codificación que sigues puede ser realmente importante. Especialmente cuando está trabajando con un equipo o planea compartir su código. La mayoría de estas pautas son estándar y se pueden aplicar a la mayoría de los lenguajes de programación, sin embargo, aquí tiene aplicaciones y Fragmentos con código c ++, para que pueda familiarizarse con él más fácilmente. Recuerde que estas son solo recomendaciones para lograr claridad, lo que puede ser una preferencia personal, así que tome estos consejos en cuenta pero no los lleves a la carta. A veces, romper algunas de estas reglas puede llevar a un código más limpio.

## Use buenos nombres de variables y haga comentarios

Asegúrese de crear buenos nombres de variables, por ejemplo, si está creando un juego, evite usar la variable "a" use algo como "p1" en referencia al jugador 1. La [notación húngara](https://en.wikipedia.org/wiki/Hungarian_notation) se suele difundir y puede darle algunas pautas para declarar variables

Además, POR FAVOR, use comentarios, ni siquiera estoy bromeando, solo trate de leer algunos proyectos antiguos que hizo sin comentarios ... ahora imagine que es otra persona que ni siquiera lo codificó.

## Variables globales

Las variables globales pueden ser fáciles de usar, y con poco código puede parecer una gran solución. Pero, cuando el código se hace más y más grande, se vuelve más difícil saber cuándo se están utilizando.

En lugar de usar variables globales, puede usar variables declaradas en funciones que pueden ayudarlo a saber qué valores se están pasando. y la identificación de errores más rápido.

```cpp
#include <iostream> 
 using namespace std; 
 
 // Global variables are declared outside functions 
 int cucumber; // global variable "cucumber" 
```

## Usando goto, continuar, etc.

Esta es una discusión habitual entre los programadores, al igual que las variables globales, estos tipos de declaraciones generalmente se consideran una mala práctica. Son considerados malos porque llevan al ["código spaguetti"](https://en.wikipedia.org/wiki/Spaghetti_code) . Cuando programamos queremos un Flujo lineal: cuando se usan esas declaraciones, el flujo se modifica y conduce a un flujo "retorcido y enredado".

Goto se utilizó en el pasado, mientras que mientras, para las funciones, sin embargo, con la introducción de la programación estructurada se creó. En general, evite usar goto a menos que esté seguro de que hará que su código sea más limpio y fácil de leer. Un ejemplo podría estar usándolo en bucles anidados.

El uso de break y continue es prácticamente el mismo. Utilícelos en los conmutadores e intente realizar funciones con un único propósito para que solo tenga un punto de salida.

![img](https://imgs.xkcd.com/comics/goto.png)

## Evite cambiar la variable de control dentro de un bucle for

Por lo general, hay trabajos alrededor de esto que parecen más claros y menos confusos, por ejemplo. mientras bucles. Hacer:

```cpp
int i=1; 
 while (i <= 5) 
 { 
    if (i == 2) 
        i = 4; 
 
    ++i; 
 } 
```

En lugar de:

```cpp
for (int i = 1; i <= 5; i++) 
 { 
    if (i == 2) 
    { 
       i = 4; 
    } 
    // Do work 
 } 
```

## Declarar constantes y tipos en la parte superior.

Por lo general, se declaran después de las bibliotecas, lo que las hace estar más juntas y más fáciles de leer. Para las variables locales sucede lo mismo, declararlas en la parte superior (Otras personas prefieren que las declaren lo más tarde posible para ahorrar memoria, consulte: [cplusplus.com](http://www.cplusplus.com/forum/general/33612/)

## Usa solo una función de retorno al final.

Como dijimos antes, tendemos a hacer solo una entrada y salida para que el flujo sea más claro.

## Usa llaves cuando escribas una sola línea

Hacerlo sistemáticamente lo ayudará a hacerlo más rápido y, en caso de que desee cambiar el código en el futuro, podrá hacerlo sin preocupaciones.

En lugar de:

```cpp
for (int i = 1; i <= 5; i++) 
    //CODE 
```

Hacer:

```cpp
for (int i = 1; i <= 5; i++) 
 { 
    //CODE 
 } 
```

## Otras recomendaciones

*   #### Úselo para cuando sepa la cantidad de iteraciones, mientras que haga y cuando no lo haga.
    
*   #### Use const, pase por valor / referencia cuando sea apropiado. Esto ayudará a salvar la memoria.
    
*   \#### Escriba const en mayúsculas, tipos de datos que comienzan con T y variables en minúsculas.
    

```cpp
const int MAX= 100;             //Constant 
 typedef int TVector[MAX];       //Data type 
 TVector vector;                 //Vector 

```