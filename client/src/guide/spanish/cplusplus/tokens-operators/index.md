---
title: Operators
localeTitle: Los operadores
---# Operadores:

*   Los operadores le permiten realizar operaciones en sus datos.
*   Los datos que se están operando se denominan _operandos_ .
*   Los diferentes tipos de operadores en C ++ son:
*   _Los OPERANDOS_ son los datos sobre los cuales el operador realiza ciertos comandos.
*   Los operadores son de 3 tipos: unario (funciona en 1 operando), binario (funciona en 2 operandos), ternario (trabaja en 3 operandos).

### 1 Los operadores de E / S -

*   Estos operadores le permiten dirigir la entrada y la salida.
    
    ## El oerador de entrada ">>" ##
    
    se utiliza para leer datos de entrada estándar (la declaración "cin").
    
    ## El operador de salida "<<"
    
    se utiliza para enviar la salida en la declaración `cout` .
    

### 2 Los operadores aritméticos -

*   Estos operadores le permiten realizar operaciones aritméticas básicas.

1.  El operador `+` _agrega_ los dos operandos.
    
2.  El operador `-` _resta_ los dos operandos.
    
3.  El operador `*` _multiplica_ los dos operandos.
    
4.  El operador `/` _divide_ y da el _cociente_ de los dos operandos.
    
5.  El operador `%` _divide_ y da el _resto_ de los dos operandos. (O, para el lector más inclinado matemáticamente, `a % b` es esencialmente el resultado de "a mod b"
    
    ### Ejemplo de uso de operadores aritméticos:
    
    \`\` \`cpp
    

# incluir

utilizando namespace std;

int main () { int a = 5; // 1er operando int b = 10; // 2do operando
```
    cout << "+ operator " << a+b << "\n"; //Add 
    cout << "- operator " << ab << "\n"; //Subtract 
    cout << "* operator " << a*b << "\n"; //Multiply 
    cout << "/ operator " << b/a << "\n"; //Find Quotient 
    cout << "modulus operator " << b%a << "\n"; //Find remainder 
 
    return 0; 
```

} \`\` \`

SALIDA:
```
+ operator 15 
 - operator -5 
 * operator 50 
 / operator 2 
 modulus operator 0 
```

[Pruebe el código usted mismo! :)](https://repl.it/Mge9)

### El operador de incremento:

*   `++` se conoce como el operador de incremento. Aumenta el valor de una variable entera en 1.

Los 2 tipos de incremento:

*   Pre incrementa primero incrementa el valor y luego lo usa. Ejemplo: `int a ; ++a;`
*   El incremento posterior primero usa la variable y luego la incrementa. Ejemplo: `int b; b++;`

### El operador decremento:

*   `--` Es conocido como el operador decremento. Disminuye el valor de una variable entera en 1.

Los 2 tipos de decremento:

*   La disminución previa disminuye primero el valor y luego lo utiliza. Ejemplo: `int a ; --a;`
*   El decremento posterior primero usa la variable y luego la decrementa. Ejemplo: `int b; b--;`

Ejemplo de operadores de incremento y decremento:

```cpp
#include <iostream> 
 using namespace std; 
 
 int main() 
 { 
        int a = 3 ,b = 4; 
 
         // INCREMENT 
        cout<< "Value of int a PRE INCREMENTED : " << ++a << "\n"; 
        cout<< "Value of int b POST INCREMENTED : " << b++ << "\n"; 
        cout<< "Value of b is changed after using once : " << b << "\n"; 
 
         // DECREMENT 
        cout << "\n"; //go to next line 
        a = 10; //Assigning a new value to a 
        b = 10; //Assigning a new value to b 
        cout << "Value of int a PRE DECREMENTED : " << --a << "\n"; 
        cout << "Value of int b POST DECREMENTED : " << b-- << "\n"; 
        cout << "Value of b is changed after using once : " << b << "\n"; 
 
        return 0; 
 } 
```

SALIDA:
```
Value of int a PRE INCREMENTED : 4 
 Value of int b POST INCREMENTED : 4 
 Value of b is changed after using once : 5 
 
 Value of int a PRE DECREMENTED : 9 
 Value of int b POST DECREMENTED : 10 
 Value of b is changed after using once : 9 
```

[Pruebe el código usted mismo! :)](https://repl.it/Mgg4/2)

### 3: Operadores relacionales:

*   Estos operadores nos dicen la relación entre 2 operandos y devuelven un valor booleano (0 o 1). Si la relación es `true` entonces resulta en 1. Si la realidad es falsa, entonces se convierte en 0.
    
*   Los 6 operadores relacionales son:
    
    1.  Menos que `<`
    2.  Mayor que `>`
    3.  Menor o igual que `<=`
    4.  Mayor o igual a `>=`
    5.  Igual a `==`
    6.  No es igual a `!=`

### 4: Operadores lógicos:

*   Estos operadores combinan expresiones para operaciones lógicas. Son :

1.  AND `&&` lógico: se evalúa como verdadero si ambos valores son verdaderos.
    
2.  OR lógico `||` : Se evalúa como verdadero si cualquier valor es verdadero.
    
3.  ¡Lógica NO `!` : Si la _expresión_ es verdadera, entonces _! Expresión_ es falsa. Este operador invierte el valor de verdad y es un operador unario.
    
    ### 5\. Operadores ternarios:
    
    El operador `?:` Es el operador ternario, o el _operador condicional_ , porque se puede utilizar para sustituir una instrucción `if else` , o incluso una instrucción `if else if` . La sintaxis:
    

`condition ? ValueIfTrue : ValueIfFalse` . Esto se expande a:

```cpp
if(condition) 
 ValueIfTrue; 
 else ValueIfFalse; 
```

Llamar a `ValueIfTrue` un valor es un poco incorrecto, ya que no es necesario que sea un número. Algo como esto:

`condition ? FirstLevelTrueValue : ConditionIfFalse ? SecondLevelTrueValue : SecondLevelFalseValue` también funciona, y se interpreta como la siguiente instrucción `if else if` :

```cpp
if(condition) 
 FirstLevelTrueValue; 
 else if(ConditionIfFalse) 
 SecondLevelTrueValue; 
 else SecondLevelFalseValue; 
```

Del mismo modo, anidado `if` declaraciones también se pueden hacer utilizando operadores ternarios.

_Camper, ahora sabes lo que son los tokens. El próximo artículo será sobre_ _FELICIDADES_

**Buena suerte a todos ustedes**

**¡Feliz codificación! :)**

**No dude en preguntar cualquier duda en la página de GitHub de [FreeCodeCamp](https://forum.freecodecamp.org/) o en [el foro de FreeCodeCamp.](https://forum.freecodecamp.org/)**