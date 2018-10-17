---
title: Operators
localeTitle: Los operadores
---
# Operadores en C

## 1\. Operadores aritméticos

*   `+` Agrega a los operandos (valores) `C int a = 6; int c = a + 1; // c = 7`
*   `-` Resta el segundo operando del primero. `C int a = 8; int b = 9; int c = a - b; // c = -1`
*   `*` Multiplica dos operandos. `C int a = 8; int b = 9; int c = a * b; // c = 72`
*   `/` Divide el primer operando por el segundo `C int a = 8; int b = 4; int c = a / b; // c = 2`
*   `%` Da el resto después de una división entera `C int a = 8; int b = 9; int c = b % a; // c = 1 because b = 1*a + 1 = 8 + 1`
*   `++` Incrementa el valor int en uno `C int a = 8; a++; // a = 9 int b = a++; // postfix operator; a = 10, b = 9 int c = ++a; // prefix operator; a = 11, c = 11`
*   `--` Disminuye el valor int en uno `C int a = 8; a--; // a = 7 int b = a--; // postfix operator; a = 6, b = 7 int c = --a; // prefix operator; a = 5, c = 5` // Programa C para demostrar el funcionamiento de los operadores aritméticos.

# incluir

int main () { int a = 9, b = 4, c;
```
c = a+b; 
 printf("a+b = %d \n",c); 
 
 c = ab; 
 printf("ab = %d \n",c); 
 
 c = a*b; 
 printf("a*b = %d \n",c); 
 
 c=a/b; 
 printf("a/b = %d \n",c); 
 
 c=a%b; 
 printf("Remainder when a divided by b = %d \n",c); 
 
 return 0; 
```

}

## 2\. Operadores relacionales

*   `==` Igual - verdadero cuando los dos operandos son iguales `C int a = 5, b = 5; bool c = (a == b); // c = true`
*   `!=` No es igual - verdadero cuando los dos operandos NO son iguales `C int a = 5, b = 6; bool c = (a != b); // c = true`
*   `>` Mayor que - Verdadero cuando el primer operando es más grande que el segundo. `C int a = 8, b = 5; bool c = (a > b); // c = true`
*   `<` Menos que - Verdadero cuando el primer operando es más pequeño que el segundo. `C int a = 5, b = 8; bool c = (a < b); // c = true`
*   `>=` Mayor o igual: verdadero cuando el primer operando es más grande o igual que el segundo. `C int a = 8, b = 5; bool c = (a >= b); // c = true bool d = (a >= 8); // d = true`
*   `<=` Menor o igual: verdadero cuando el primer operando es más pequeño o igual que el segundo. `C int a = 5, b = 8; bool c = (a <= b); // c = true`

## 3\. Operadores lógicos

*   Operador `&&` Y: verdadero cuando **ambos** operandos son verdaderos. `C bool c = (5 < 6) && (8!=7); // both operands true, therefore c = true`
*   `||` Operador OR: verdadero cuando el primer o el segundo operando son verdaderos (o ambos) `C bool c = (5 < 6) || (8 == 7) // first operand is true, therefore c = true`
*   `!` Operador NO: verdadero cuando el operando es falso. `C bool c = !(8 == 7) // translate: NOT (false), therefore c = true`

## 4\. Operadores bitwise

*   Operador `&` AND - Si en un lugar hay un poco en ambos operandos, se copia al resultado `C A = 11001 B = 01000 RESULT = 01000`
*   `|` Operador OR - Si en un lugar hay un bit en cualquiera de los operandos, entonces se copia al resultado `C A = 11001 B = 01000 RESULT = 11001`
*   `^` Operador XOR (OR exclusivo): si en un lugar hay un bit en uno de los operandos (no ambos), se copia al resultado `C A = 11001 B = 01000 RESULT = 10001`
*   `~` Operador de negación - Invierte los bits. 1 -> 0, 0 -> 1 `C C = 01000 RESULT = 10111`
*   `<<` Operador de desplazamiento a la izquierda: el operando izquierdo se mueve hacia la izquierda tantos bits como el operando derecho `C A = 11001 A << 2 RESULT = 00100`
*   `>>` Operador de cambio a la derecha - El operando izquierdo se mueve hacia la derecha tantos bits como el operando derecho `C A = 11001 A >> 2 RESULT = 00110`

## 5\. Operadores de asignación

*   `=` `C int a = 7; // 'a' is going to be equal to 7`
*   `+=` `C int a = 7; a += 5; // equivalent to a = a + 5 = 7 + 5 = 12`
*   `-=` `C int a = 7; a -= 2; // equivalent to a = a - 2 = 7 - 2 = 5`
*   `*=` `C int a = 7; a *= 3; // equivalent to a = a * 3 = 7 * 3 = 21`
*   `/=` `C int a = 21; a /= 3; // equivalent to a = a / 3 = 21 / 3 = 7`
*   `%=`  
    `C int a = 21; a %= 5; // equivalent to a = a % 5 = 21 % 5 = 1`

Operadores misceláneos ↦ sizeof & ternary Además de los operadores mencionados anteriormente, hay algunos otros operadores importantes que incluyen sizeof y? : soportado por el lenguaje C.

Operador Descripción Ejemplo sizeof () Devuelve el tamaño de una variable. sizeof (a), donde a es entero, devolverá 4. & Devuelve la dirección de una variable. &una; Devuelve la dirección real de la variable.

*   Puntero a una variable. \*una; ? : Expresión condicional. Si la condición es verdadera? entonces valor X: de lo contrario valor Y

## 6\. Prioridad del operador en C

Los operadores con mayor prioridad aparecen en la parte superior de la lista. Dentro de una expresión, los operadores. con mayor precedencia serán evaluados primero.

*   Postfix `() [] -> . ++ --`
*   Unario `+ - ! ~ ++ -- (type)* & sizeof`
*   Multiplicativo `* / %`
*   Aditivo `+ -`
*   Shift `<< >>`
*   Relacional `< <= > >=`
*   Igualdad `== !=`
*   Bitwise Y `&`
*   Bitwise XOR `^`
*   Bitwise o `|`
*   Lógica Y `&&`
*   OR lógico `||`
*   Condicional `?:`
*   Asignación `= += -= *= /= %= >>= <<= &= ^= |=`
*   coma `,`