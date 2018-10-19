---
title: Random Functions
localeTitle: Funciones aleatorias
---
*   Los números aleatorios son una forma conveniente de introducir la asignación al azar en su programa. Por ejemplo, si desea ejecutar cualquier simulación, o jugar juegos, eliminar índices aleatorios de una matriz, etc., entonces los números aleatorios son el camino a seguir.
*   El archivo de encabezado que se debe incluir para usar números aleatorios en c ++ es `cstdlib` .
*   `cpp #include<bits/stdc++.h>` _profesional:_ puede usar `cpp #include<bits/stdc++.h>` para incluir todas las funciones de todos los archivos de encabezado.

Función: - rand ()  
\- Devuelve un número pseudoaleatorio (entero) de 0 a RAND _MAX. No toma ningún argumento. - RAND_ MAX es el número entero máximo permitido. Es un compilador dependiente y generalmente es 2147483647.

A continuación se muestra un ejemplo:

```cpp
#include <cstdlib> 
 #include <iostream> 
 using namespace std; 
 
 int main() { 
  cout << rand() << endl; 
  cout << rand() << endl; 
  cout << rand() << endl; 
  return 0; 
 } 
 
 /* 
 Output:- (Note that the output is random and will differ from what is mentioned here) 
 1804289383 
 846930886 
 1681692777 
 */ 
```

Ahora, ejecute el programa una vez más. Y otra vez. Y otra vez. ¿Que ves? La misma salida se imprime una y otra vez.

Regresemos a la definición de la función rand ():

rand (): _devuelve un número **pseudoaleatorio** (entero) de 0 a RAND\_MAX. No toma ningún argumento._

Entonces, ¿qué es un número pseudoaleatorio?

*   Como su nombre indica, un número que no es verdaderamente aleatorio es pseudoaleatorio.
*   Los números psicoaleatorios no están criptográficamente seguros y son vulnerables a los ataques.
*   En el contexto de C ++, el número aparece aleatorio, pero no verdaderamente aleatorio. La función asume que cada número de 0 a RAND\_MAX es igualmente probable y escupe un número. (En realidad, Este no es el caso, pero está cerca). Por ejemplo, el número 5 se utiliza en casi todas partes. Si un número aleatorio escupe 5, podría no pensar que el número es de hecho, aleatorio.
*   La función aleatoria rand () toma un número muy grande, aplica módulo por un número primo grande y realiza todo tipo de operaciones en un número y devuelve un valor. Por muy complicado que sea, todavía es posible romperlo.

¿Cómo obtenemos un conjunto único de números aleatorios durante la ejecución de cada programa?

Utilizamos `void srand(int seed)` ;

*   "Semilla" es el nombre dado a un número que hace que el generador de secuencia aleatoria comience en un punto de partida diferente cada vez. Esto asegura que la función aleatoria no arroje los mismos valores durante la ejecución del programa.
*   **Es importante invocar solo la llamada srand ONCE al comienzo del programa.**
*   No es necesario repetir las llamadas para generar el generador de números aleatorios (de hecho, hará que su número sea menos equitativo). repartido).
*   Una técnica comúnmente utilizada es colocar el generador de números aleatorios usando el reloj, ya que el reloj te da una salida diferente cada vez que lo miras. Entonces, para la semilla, puedes tomar la salida del tiempo y conectarlo al generador de números aleatorios.
*   La función time () devolverá el tiempo de la computadora. Esto se expresa en términos del número de segundos que han transcurrido desde el 1 de enero de 1970 (la época).
*   El tiempo de la función (NULL) devolverá el número de segundos transcurridos en el tiempo de la computadora.
*   El archivo de encabezado que debe incluirse para las funciones de tiempo: \`ctime '.

Fragmento de código:

```cpp
#include <ctime> 
 
 srand(time(NULL)); 
 cout << rand(); 
 
 /* 
 Output: (Will differ from computer to computer, and because of the seed, will also differ from time to time, literally. :D) 
 1696269016 
 */ 
```

Esto produce valores diferentes cada vez que se ejecuta el programa.

Bono: Ajustar el rand () para su conveniencia.

*   Dado que rand () devuelve un número aleatorio de 0 a RAND\_MAX, si quieres un número entre 0 y 8 por ejemplo, entonces haz -rand ()% 9. Cualquier número módulo 9 devolverá un valor de 0 a 8.
    
*   Más formalmente, si desea un número entre L (incluido) y U (incluido), debe hacer `int num = L + rand()%(U-L+1).` Explicación: - rand ()% (UL + 1) devuelve un número aleatorio (pseudoaleatorio, no olvide) entre 0 y (UL). Por lo tanto, agregar L asegura que obtengamos un valor entre L y U.
    
    Resumen:-
    

1.  int rand (): devuelve un número aleatorio entre 0 y RAND\_MAX.
    
2.  void srand (int seed): se utiliza para inicializar el generador de números aleatorios. Basta con llamar a esta función _una_ sola _vez_ .
    
    ### Fuentes: - [Generación de números aleatorios](http://www.math.uaa.alaska.edu/~afkjm/csce211/handouts/RandomFunctions)