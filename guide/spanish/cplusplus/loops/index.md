---
title: Loops
localeTitle: Bucles
---
# Bucles

## Introducción

Ahora vamos a discutir algo conocido como bucle. Supongamos que desea imprimir los números pares del 1 al 1000 en la pantalla. De una sola mano Hacer esto es escribir las siguientes líneas.

\`\` \`c ++ cout << 0 << endl; cout << 2 << endl; cout << 4 << endl; ... ... ... cout << 1000 << endl;
```
But the problem with this approach is that you have to write the same line again and again. And if suppose you have to print 
 prime numbers from 1 to 1000 then this will be more hectic. 
 Therefore, in order to solve such problems loops are introduced. 
 
 There are different types of loop functions: 
 ### While and do while loops 
 
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

c ++ para (inicializar una variable; verificar una condición; incrementar la variable inicializada) { // Código a ejecutar }
```
Lets write a program which will print numbers from 0 to 1000 including 1000 on the screen using a for loop. 
```

c ++ para (int i = 0; i <= 1000; i ++) { cout << i << endl; }
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
    ``` c++ 
    for(int i=0;i<=1000;i++) 
        { 
        } 
     ``` 
 * Then inside the loop you write what do you want to do. In the above program we output the value of i. 
 
 So, in this way the for loop works 
 
 If you want to print even numbers from 1 to 1000 then your program will look like this 
```

c ++ para (int i = 0; i <= 1000; i = i + 2) { cout << i << endl; }

\`\` \`

*   La diferencia entre el primer programa y el segundo es la parte de incremento. El resto del código es el mismo. Este programa imprimirá 0 y luego agregue 2 e imprima 2 en la consola y así sucesivamente hasta que el valor de i sea igual a 1000.
    
    Nuestro programa final para imprimir números pares de 0 a 1000 se verá así.
    
    \`\` \`c ++
    
    # incluir
    
    utilizando namespace std; int main () { para (int i = 0; i <= 1000; i = i + 2) { cout << i << endl; } devuelve 0; } \`\` \`