---
title: bitwise operator example
localeTitle: ejemplo de operador bit a bit
---
# Operadores bitwise

## Mesa de la verdad

![truth table](https://4.bp.blogspot.com/-0KPDI41veH0/V-OtObm_UWI/AAAAAAAAAso/CkTS0zUMGKIjlE3gUD0fMhmp-B0zcfBmACLcB/s1600/Bitwise-truthtable-Javaform.jpg "mesa de la verdad")

Los operadores bitwise son similares a los operadores lógicos, excepto que funcionan en una escala más pequeña: representaciones binarias de datos. Cualquier dato puede ser convertido a su equivalente binario. Aunque los operadores binarios trabajan a nivel binario, se operan solo entre valores decimales normales.

## Tipos de operadores de Bitwise

### Bitwise o

Bitwise OR es un operador binario (opera en dos operandos). Se denota por |. El | El operador compara los bits correspondientes de dos operandos. Si cualquiera de los bits es 1, da 1. Si no, da 0.

### Y a nivel de bit

Bitwise Y es un operador binario (opera en dos operandos). Se denota por &. El operador & compara los bits correspondientes de dos operandos. Si ambos bits son 1, da 1. Si alguno de los bits no es 1, da 0.

### Complemento Bitwise

El complemento bitwise es un operador unario (funciona en un solo operando). Se denota por ~. El operador ~ invierte el patrón de bits. Hace cada 0 a 1, y cada 1 a 0.

### Bitwise XOR

Bitwise XOR es un operador binario (opera en dos operandos). Se denota por ^. El operador ^ compara los bits correspondientes de dos operandos. Si los bits correspondientes son diferentes, da 1. Si los bits correspondientes son iguales, da 0.

### Shift izquierdo

El operador de desplazamiento a la izquierda << desplaza un patrón de bits hacia la izquierda un cierto número de bits especificados, y los bits cero se desplazan a las posiciones de orden inferior.

### Giro a la derecha

El operador de desplazamiento a la derecha >> desplaza un patrón de bits a la derecha un cierto número de bits especificados. Si el número es un número con signo del complemento a 2, el bit de signo se desplaza a las posiciones de orden superior.

### Cambio a la derecha sin firmar

El operador de cambio a la derecha sin signo >>> cambia de cero a la posición más a la izquierda.

### Ejemplo de operadores bitwise:

```java
    int a = 60;          /* 60 = 0011 1100 represents 60 in binary*/ 
    int b = 13;          /* 13 = 0000 1101 */ 
    int c = 0; 
 
    c = a & b;        /* 12 = 0000 1100 */ 
    c = a | b;        /* 61 = 0011 1101 */ 
    c = a ^ b;        /* 49 = 0011 0001 */ 
    c = ~a;           /*-61 = 1100 0011  :Invert all bits */ 
 
    // shift operators : zeros are shifted in to replace the discarded bits 
    c = a << 2;       /* 240 = 1111 0000 : Shift left 2 bits*/ 
    c = a >> 2;       /* 15 = 1111 */ 
    c = a >>> 2;      /* 15 = 0000 1111 : Zero fill right shift*/ 
```

**PARA MÁS INFORMACIÓN:** [Haga clic aquí](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/op3.html)