---
title: Format Specifiers
localeTitle: Especificadores de formato
---
# Especificadores de formato

Especificadores de formato definem o tipo de dados a serem impressos na saída padrão. Seja para imprimir uma saída formatada ou para receber uma entrada formatada, precisamos de especificadores de formato. Os especificadores de formato também são chamados de string de formato. O especificador de formato é usado durante a entrada e a saída. É uma maneira de informar ao compilador que tipo de dados está em uma variável durante a entrada usando scanf () ou imprimindo usando printf (). Alguns exemplos são% c,% d,% f, etc.

Especificador de formato de caractere:% c

# incluir

int main () { char ch = 'A'; printf ("% c \\ n", ch); return 0; }

Saída: UMA

Especificador de formato inteiro:% d,% i

# incluir

int main () { int x = 45, y = 90; printf ("% d \\ n", x); printf ("% i \\ n", x); return 0; }

Saída: 45 45

Especificador de formato duplo:% f,% e ou% E

# incluir

int main () { float a = 12,67; printf ("% f \\ n", a); printf ("% e \\ n", a); return 0; }

Saída: 12,670000 1.267000e + 01

Número Octal não assinado por inteiro:% o

# incluir

int main () { int a = 67; printf ("% o \\ n", a); return 0; }

Saída: 103

Hexadecimal não assinado para número inteiro:% x,% X

# incluir

int main () { int a = 15; printf ("% x \\ n", a); return 0; }

Saída: f

Impressão em cadeia:% s

# incluir

int main () { char a \[\] = "nitesh"; printf ("% s \\ n", a); return 0; }

Saída: nitesh

* * *

scanf (formato char \*, arg1, arg2,…)

número inteiro decimal:% d

# incluir

int main () { int a = 0; scanf ("% d", & a); // entrada é 45 printf ("% d \\ n", a); return 0; }

saída: 45

Inteiro pode ser octal ou hexadecimal:% i

# incluir

int main () { int a = 0; scanf ("% i", & a); // input é 017 (octal de 15) printf ("% d \\ n", a); scanf ("% i", & a); // a entrada é 0xf (hexadecimal de 15) printf ("% d \\ n", a); return 0; }

saída: 15 15

Tipo de dados flutuante:% f,% e (double),% lf (long double)

# incluir

int main () { float a = 0,0; scanf ("% f", & a); // a entrada é 45,65 printf ("% f \\ n", a); return 0; }

Saída: 0.000000

Entrada de cadeia:% s

# incluir

int main () { char str \[20\]; scanf ("% s", str); // input is nitesh printf ("% s \\ n", str); return 0; }

Saída: nitesh

Entrada de caracteres:% c

# incluir

int main () { char ch; scanf ("% c", & ch); // input é A printf ("% c \\ n", ch); return 0; }

saída: UMA

Os% especificadores que você pode usar no ANSI C são:

| Especificador | Usado Para | |: -------------: |: -------------: | | % c | um único caractere | | % s | uma corda | | % hi | curto (assinado) | | % hu | curto (sem assinatura) | | % Lf | longa dupla | | % n | imprime nada | | % d | um inteiro decimal | | % o | um inteiro octal (base 8) | | % x | um inteiro hexadecimal (base 16) | | % p | um endereço (ou ponteiro) | | % f | um número de ponto flutuante para flutuadores | | % u | int unsigned decimal | | % e | um número de ponto flutuante em notação científica | | % E | um número de ponto flutuante em notação científica | | %% | O símbolo! |