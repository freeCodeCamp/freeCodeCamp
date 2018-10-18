---
title: Loops
localeTitle: Bucles
---
# Bucles

## Introducción

Ahora vamos a discutir algo conocido como bucles. Supongamos que desea imprimir los números pares del 1 al 1000 en la pantalla. De una sola mano Hacer esto es escribir las siguientes líneas.

```
cout << 0 << endl; 
cout << 2 << endl;
cout << 4 << endl;
...
...
... 
cout << 1000 << endl;
```
El problema con este enfoque es que usted tendría que escribir cada una de estas líneas a mano. Si usted tuviese que imprimir los números primos del 1 al 1,000 sería un proceso aún más tedioso.

Es para este tipo de problemas que se han introducido los bucles.

Hay distintos tipos de bucles, los cuales vamos a estudiar en las secciones que siguen a continuación.


 ### Bucles de tipo While y do while 
 
 While and do while loops allow you to make the loop until a condition finishes. 
 The difference between While and Do while is that Do while always executes once. 
 Here you can see an example: 
```

c ++ while (condición) { // Código que se ejecutará mientras la condición sea verdadera. } hacer { // Se ejecutará una vez y hasta que la condición sea falsa. } while (condición);
```
### For loops 
 
 For loops are usually used when you know how many times the code will execute. 
 The flow can be seen in this [graph](https://www.tutorialspoint.com/cplusplus/images/cpp_for_loop.jpg). 
 
 They are declared this way: 
```
for (inicialización de variable de iteración; condición a verificar; incrementar la variable inicializada) { // Código a ejecutar }
```
Lets write a program which will print numbers from 0 to 1000 including 1000 on the screen using a for loop. 
```
for (int i = 0; i <= 1000; i ++) 
{ 
 cout << i << endl;
}
```
When you execute this code in a c++ program numbers from 1 to 1000 will be printed. 
 Now lets discuss how the for loop works. 
 
 * You start a for loop by typing the keyword 'for'. It means you are starting a for loop 
 ` for ` 
 * Next you open and close a round bracket. In this brackets you write some conditions which will be discussed later 
 ` for()` 
 * Inside the brackets first you write the initial condition ie the value from where the loop will start. Like in the 
  above program we write int i = 0 
 ` for(int i = 0)` 
 * Then you write the semicolon and then condition until when the loop will be executed. In the above code you define 
   i < 1000. It means until value of i is less then 1000 execuete the loop. 
   ` for(int i=0;i<=1000) ` 
 * Then you define the incremented value that is how much i has to be incremented in each iteration. In the above code 
   we write i++. It means value of i will be incremented by 1 every time. 
    ` for(int i=0;i<=1000;i++) ` 
 * If there is only one statement inside the loop then the curly bracket is optional but its better to write loop code 
   within brackets so that you don't get confused. 
    ``` 
    for(int i=0;i<=1000;i++) 
        { 
        } 
     ``` 
 * Then inside the loop you write what do you want to do. In the above program we output the value of i. 
 
 So, in this way the for loop works 
 
 If you want to print even numbers from 1 to 1000 then your program will look like this 
```

for (int i = 0; i <= 1000; i = i + 2) 
{ 
cout << i << endl;
}
``` 

*   La diferencia entre el primer programa y el segundo es la parte de incremento. El resto del código es el mismo. Este programa imprimirá 0 y luego agregue 2 e imprima 2 en la consola y así sucesivamente hasta que el valor de i sea igual a 1000.
    
    Nuestro programa final para imprimir números pares de 0 a 1000 se verá así.
    
```
#include <iostream> 
using namespace std; 

int main () 
{ 
 for(int i = 0; i <= 1000; i = i + 2) 
 { 
  cout << i << endl;
 } 
 return 0; 
}
 ```
