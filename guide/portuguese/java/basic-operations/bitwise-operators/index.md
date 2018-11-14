---
title: bitwise operator example
localeTitle: exemplo de operador bit a bit
---
# Operadores bit a bit

## Tabela verdade

![truth table](https://4.bp.blogspot.com/-0KPDI41veH0/V-OtObm_UWI/AAAAAAAAAso/CkTS0zUMGKIjlE3gUD0fMhmp-B0zcfBmACLcB/s1600/Bitwise-truthtable-Javaform.jpg "tabela de verdade")

Os operadores bit a bit são semelhantes aos operadores lógicos, exceto pelo fato de trabalharem em uma escala menor - representações binárias de dados. Qualquer dado pode ser convertido em seu equivalente binário. Embora os operadores binários trabalhem em nível binário, mas eles são operados apenas entre valores decimais normais.

## Tipos de operadores bit a bit

### Bit a bit OU

OR bit a bit é um operador binário (opera em dois operandos). É denotado por |. O | operador compara bits correspondentes de dois operandos. Se um dos bits é 1, dá 1. Se não, dá 0.

### Bit a bit E

Bitwise AND é um operador binário (opera em dois operandos). É denotado por &. O operador & compara os bits correspondentes de dois operandos. Se ambos os bits são 1, ele dá 1. Se um dos bits não for 1, ele dará 0.

### Complemento Bitwise

O complemento bit a bit é um operador unário (funciona em apenas um operando). É denotado por ~. O operador ~ inverte o padrão de bits. Faz a cada 0 a 1 e a cada 1 a 0.

### Bit a bit XOR

Bitwise XOR é um operador binário (opera em dois operandos). É denotado por ^. O operador ^ compara os bits correspondentes de dois operandos. Se os bits correspondentes são diferentes, dá 1. Se os bits correspondentes são os mesmos, dá 0.

### Desvio à esquerda

O operador de deslocamento à esquerda << desloca um padrão de bits para a esquerda por certo número de bits especificados, e os bits de zero são deslocados para as posições de baixa ordem.

### Deslocamento para a direita

O operador de deslocamento à direita >> desloca um padrão de bits para a direita por certo número de bits especificados. Se o número for um número com sinal de complemento de 2, o bit de sinal é deslocado para as posições de ordem superior.

### Deslocamento à direita não assinado

O operador de deslocamento à direita sem sinal >>> muda o zero para a posição mais à esquerda.

### Exemplo de operadores bit a bit:

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

**PARA MAIS INFORMAÇÕES:** [Clique Aqui](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/op3.html)