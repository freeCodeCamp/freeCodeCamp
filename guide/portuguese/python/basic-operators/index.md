---
title: Basic Operators
localeTitle: Operadores Básicos
---
## Operadores Básicos

Operadores são símbolos que dizem ao interpretador para fazer uma operação específica (viz, aritmética, comparação, lógica, etc.)

Os diferentes tipos de operadores em Python estão listados abaixo:

1.  Operadores aritméticos
2.  Operadores Relacionais
3.  Operadores bit a bit
4.  Operadores de atribuição
5.  Operadores lógicos
6.  Operadores de Associação
7.  Operadores de Identidade

#### Operadores aritméticos

Um operador aritmético usa dois operandos como entrada, executa um cálculo e retorna o resultado.

Considere a expressão **"a = 2 + 3"** . Aqui, `2` e `3` são os _operandos_ e `+` é o _operador aritmético_ . O resultado da operação é armazenado na variável a.

Operador

Descrição

Uso

+

Executa Adição nos operandos

12 + 3 = 15

\-

Executa subtração nos operandos. Subtrai o operando direito do operando esquerdo

12 - 3 = 9

\*

Executa a multiplicação nos operandos

12 \* 3 = 36

/

Executa a divisão nos operandos. Divide o operando esquerdo pelo operando direito

12/3 = 4

Nota: Quando dois inteiros são usados, o resultado difere entre o Python 2 e o Python 3.

5/2 = 2 no Python 2

5/2 = 2,5 no Python 3

%

Executa um Modulo nos operandos. Retorna o restante obtido ao dividir o operando esquerdo pelo operando direito

16% 3 = 1

\*\*

Executa uma operação de exponenciação. O operando da esquerda é elevado à potência do operando da direita

12 \*\* 3 = 1728

//

Executa uma operação de divisão de piso. Retorna a parte integral do quociente obtido após o mergulho do operando esquerdo pelo operando direito

18 // 5 = 3

Nota: Para obter o resultado no tipo flutuante, um dos operandos também deve ser do tipo flutuante.

#### Operadores Relacionais

Um operador relacional é usado para comparar dois operandos para decidir uma relação entre eles. Ele retorna um valor booleano com base na condição.

Operador

Descrição

Uso

\>

Retorna True se o operando da esquerda for maior que o operando da direita Retorna Falso de outra forma

12> 3 devolve Verdadeiro

<

Retorna Verdadeiro se o operando direito for maior que o operando esquerdo Retorna Falso de outra forma

12 <3 retorna falso

\==

Retorna True se ambos os operandos são iguais Retorna Falso de outra forma

12 = = 3 retorna falso

\> =

Retorna Verdadeiro se o operando da esquerda for maior ou igual ao operando da direita Retorna Falso de outra forma

12> = 3 devolve Verdadeiro

<=

Retorna True se o operando da direita for maior ou igual ao operando da esquerda Retorna Falso de outra forma

12 <= 3 retorna falso

! =

Retorna True se ambos os operandos não forem iguais Retorna Falso de outra forma

12! = 3 devolve Verdadeiro

#### Operadores bit a bit

Um operador bit a bit executa operações nos operandos pouco a pouco

Considere a = 2 (em notação binária, 10) eb = 3 (em notação binária, 11) para os usos abaixo

Operador

Descrição

Uso

E

Executa operação bit a bit AND nos operandos

a & b = 2 Binário: 10 e 11 = 10

|

Executa operação OR bit a bit nos operandos

a | b = 3 Binário: 10 | 11 = 11

^

Executa a operação XOR bit a bit nos operandos

a ^ b = 1 Binário: 10 ^ 11 = 01

~

Executa operação NOT bit a bit no operando Vira cada bit no operando

~ a = -3 Binário: ~ (00000010) = (11111101)

\>>

Executa um deslocamento à direita bit a bit. Desloca os bits do operando esquerdo, diretamente pelo número de bits especificado como operando à direita

a >> b = 0 Binário: 00000010 >> 00000011 = 0

<< <<

Executa um deslocamento à esquerda bit a bit. Desloca os bits do operando esquerdo, deixados pelo número de bits especificado como operando à direita

a << b = 16 Binário: 00000010 << 00000011 = 00001000

#### Operadores de atribuição

Um operador de atribuição é usado para atribuir valores a uma variável. Isso geralmente é combinado com outros operadores (como aritmética, bit a bit) onde a operação é executada nos operandos e o resultado é atribuído ao operando esquerdo.

Considere os seguintes exemplos, **a = 18** Aqui `=` é um operador de atribuição e o resultado é armazenado na variável a. **a + = 10** . Aqui `+=` é um operador de atribuição e o resultado é armazenado na variável a. Isso é o mesmo que a = a + 10.

Operador

Uso

\=

a = 5. O valor 5 é atribuído à variável a

\+ =

a + = 5 é equivalente a = a + 5

\- =

a - = 5 é equivalente a = a - 5

\* =

a \* = 3 é equivalente a = a \* 3

/ =

a / = 3 é equivalente a = a / 3

% =

um% = 3 é equivalente a = a% 3

\*\* =

a \*\* = 3 é equivalente a = a \*\* 3

// =

a // = 3 é equivalente a = a // 3

& =

a & = 3 é equivalente a = a & 3

| =

a | = 3 é equivalente a = a | 3

^ =

a ^ = 3 é equivalente a = a ^ 3

\>> =

a >> = 3 é equivalente a = a >> 3

<< =

a << = 3 é equivalente a = a << 3

#### Operadores lógicos

Um operador lógico é usado para tomar uma decisão com base em várias condições. Os operadores lógicos usados ​​no Python são `and` , `or` e `not`

Operador

Descrição

Uso

e

Retorna True se ambos os operandos forem True Retorna Falso de outra forma

aeb

ou

Retorna True se qualquer um dos operandos for True Retorna Falso de outra forma

a ou B

não

Retorna Verdadeiro se o operando for Falso Retorna Falso de outra forma

não é um

#### Operadores de Associação

Um operador de associação é usado para identificar a associação em qualquer sequência (listas, cadeias de caracteres, tuplas). `in` e `not in` são operadores de associação

`in` retorna True se o valor especificado for encontrado na sequência. Retorna False caso contrário. `not in` retornado True se o valor especificado não for encontrado na seqüência. Retorna False caso contrário.

###### Exemplo de uso

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

#### Operadores de Identidade

Um operador de identidade é usado para verificar se duas variáveis ​​compartilham o mesmo local de memória. `is` e `is not` são operadores de identidade

`is` retorna true se o operandos se referir ao mesmo objeto. Retorna False caso contrário. `is not` retorna True se os operandos não se referirem ao mesmo objeto. Retorna False caso contrário.

Por favor note que dois valores, quando iguais, não implicam que sejam idênticos.

###### Exemplo de uso

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