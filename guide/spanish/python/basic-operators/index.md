---
title: Basic Operators
localeTitle: Operadores básicos
---
## Operadores básicos

Los operadores son símbolos que le indican al intérprete que realice una operación específica (por ejemplo, aritmética, comparación, lógica, etc.)

Los diferentes tipos de operadores en Python se enumeran a continuación:

1.  Operadores aritméticos
2.  Operadores relacionales
3.  Operadores de Bitwise
4.  Operadores de Asignación
5.  Operadores logicos
6.  Operadores de membresía
7.  Operadores de Identidad

#### Operadores aritméticos

Un operador aritmético toma dos operandos como entrada, realiza un cálculo y devuelve el resultado.

Considera la expresión, **“a = 2 + 3”** . Aquí, `2` y `3` son los _operandos_ y `+` es el _operador aritmético_ . El resultado de la operación se almacena en la variable a.

Operador

Descripción

Uso

+

Realiza la adición de los operandos.

12 + 3 = 15

\-

Realiza la resta en los operandos. Resta el operando derecho del operando izquierdo

12 - 3 = 9

\*

Realiza la multiplicación de los operandos.

12 \* 3 = 36

/

Realiza división sobre los operandos. Divide el operando izquierdo por el operando derecho

12/3 = 4

Nota: Cuando se usan dos enteros, el resultado difiere entre Python 2 y Python 3.

5/2 = 2 en Python 2

5/2 = 2.5 en Python 3

%

Realiza un módulo sobre los operandos. Devuelve el resto obtenido dividiendo el operando izquierdo por el operando derecho

16% 3 = 1

\*\*

Realiza una operación de Exposiciónción. El operando izquierdo se eleva a la potencia del operando derecho

12 \*\* 3 = 1728

//

Realiza una operación de división de piso. Devuelve la parte integral del cociente obtenido después de bucear el operando izquierdo por el operando derecho

18 // 5 = 3

Nota: para obtener el resultado en tipo flotante, uno de los operandos también debe ser de tipo flotante.

#### Operadores relacionales

Un operador relacional se utiliza para comparar dos operandos para decidir una relación entre ellos. Devuelve un valor booleano basado en la condición.

Operador

Descripción

Uso

\>

Devuelve True si el operando izquierdo es mayor que el operando derecho Devuelve False de lo contrario

12> 3 devuelve Verdadero

<

Devuelve True si el operando derecho es mayor que el operando izquierdo Devuelve False de lo contrario

12 <3 devuelve Falso

\==

Devuelve True si ambos operandos son iguales Devuelve False de lo contrario

12 == 3 devuelve Falso

\> =

Devuelve True si el operando izquierdo es mayor o igual que el operando derecho Devuelve False de lo contrario

12> = 3 devuelve True

<=

Devuelve True si el operando derecho es mayor o igual que el operando izquierdo Devuelve False de lo contrario

12 <= 3 devuelve False

! =

Devuelve True si ambos operandos no son iguales Devuelve False de lo contrario

12! = 3 devuelve True

#### Operadores de Bitwise

Un operador bit a bit realiza operaciones en los operandos bit a bit

Considere a = 2 (en notación binaria, 10) y b = 3 (en notación binaria, 11) para los siguientes usos

Operador

Descripción

Uso

Y

Realiza operaciones bitwise Y en los operandos.

a & b = 2 Binario: 10 y 11 = 10

|

Realiza la operación OR en modo bit en los operandos.

un | b = 3 Binario: 10 | 11 = 11

^

Realiza la operación XOR en modo bit a los operandos.

a ^ b = 1 Binario: 10 ^ 11 = 01

~

Realiza una operación NO bit a bit en el operando Se voltea cada bit en el operando.

~ a = -3 Binario: ~ (00000010) = (11111101)

\>>

Realiza un desplazamiento a la derecha en modo bit. Desplaza los bits del operando izquierdo, derecho por el número de bits especificados como el operando derecho

a >> b = 0 Binario: 00000010 >> 00000011 = 0

<<

Realiza un desplazamiento a la izquierda en modo bit. Desplaza los bits del operando izquierdo, a la izquierda por el número de bits especificados como el operando derecho

a << b = 16 Binario: 00000010 << 00000011 = 00001000

#### Operadores de Asignación

Un operador de asignación se utiliza para asignar valores a una variable. Esto generalmente se combina con otros operadores (como aritmética, bitwise) donde la operación se realiza en los operandos y el resultado se asigna al operando de la izquierda.

Considere los siguientes ejemplos, **a = 18** . Aquí `=` es un operador de asignación, y el resultado se almacena en la variable a. **a + = 10** . Aquí `+=` es un operador de asignación, y el resultado se almacena en la variable a. Esto es lo mismo que a = a + 10.

Operador

Uso

\=

a = 5. El valor 5 se asigna a la variable a

\+ =

a + = 5 es equivalente a a = a + 5

\- =

a - = 5 es equivalente a a = a - 5

\* =

a \* = 3 es equivalente a a = a \* 3

/ =

a / = 3 es equivalente a a = a / 3

% =

a% = 3 es equivalente a a = a% 3

\*\* =

a \*\* = 3 es equivalente a a = a \*\* 3

// =

a // = 3 es equivalente a a = a // 3

& =

a & = 3 es equivalente a a = a & 3

| =

a | = 3 es equivalente a a = a | 3

^ =

a ^ = 3 es equivalente a a = a ^ 3

\>> =

a >> = 3 es equivalente a a = a >> 3

<< =

a << = 3 es equivalente a a = a << 3

#### Operadores logicos

Un operador lógico se utiliza para tomar una decisión basada en múltiples condiciones. Los operadores lógicos utilizados en Python son `and` , `or` `not`

Operador

Descripción

Uso

y

Devuelve True si ambos operandos son True Devuelve False de lo contrario

a y B

o

Devuelve True si alguno de los operandos es True Devuelve False de lo contrario

a o B

no

Devuelve True si el operando es False Devuelve False de lo contrario

No un

#### Operadores de membresía

Un operador de membresía se utiliza para identificar la membresía en cualquier secuencia (listas, cadenas, tuplas). `in` y `not in` son operadores de membresía

`in` devuelve True si el valor especificado se encuentra en la secuencia. Devuelve False de lo contrario. `not in` devuelve Verdadero si el valor especificado no se encuentra en la secuencia. Devuelve False de lo contrario.

###### Ejemplo de uso

```py
a = [1,2,3,4,5] 
 
 #Is 3 in the list a? 
 print 3 in a # prints True 
 
 #Is 12 not in list a? 
 print 12 not in a # prints True 
 
 str = "Hello World" 
 
 #Does the string str contain World? 
 print "World" in str # prints True 
 
 #Does the string str contain world? (note: case sensitive) 
 print "world" in str # prints False 
 
 print "code" not in str # prints True 
```

#### Operadores de Identidad

Un operador de identidad se usa para verificar si dos variables comparten la misma ubicación de memoria. `is` y `is not` es operadores de identidad.

`is` Devuelve true si los operandos se refieren al mismo objeto. Devuelve False de lo contrario. `is not` devuelve Verdadero si los operandos no hacen referencia al mismo objeto. Devuelve False de lo contrario.

Tenga en cuenta que dos valores cuando son iguales, no deben implicar que sean idénticos.

###### Ejemplo de uso

```py
a = 3 
 b = 3 
 c = 4 
 print a is b # prints True 
 print a is not b # prints False 
 print a is not c # prints True 
 
 x = 1 
 y = x 
 z = y 
 print z is 1 # prints True 
 print z is x # prints True 
 
 str1 = "FreeCodeCamp" 
 str2 = "FreeCodeCamp" 
 
 print str1 is str2 # prints True 
 print "Code" is str2 # prints False 
 
 a = [10,20,30] 
 b = [10,20,30] 
 
 print a is b # prints False (since lists are mutable in Python) 

```