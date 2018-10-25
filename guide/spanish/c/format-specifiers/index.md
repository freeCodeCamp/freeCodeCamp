---
title: Format Specifiers
localeTitle: Especificadores de formato
---
# Especificadores de formato

Los especificadores de formato definen el tipo de datos que se imprimirán en la salida estándar. Ya sea para imprimir una salida formateada o para tomar una entrada formateada, necesitamos especificadores de formato. Los especificadores de formato también se llaman como cadena de formato. El especificador de formato se utiliza durante la entrada y la salida. Es una forma de decirle al compilador qué tipo de datos hay en una variable durante la toma de entrada con scanf () o la impresión con printf (). Algunos ejemplos son% c,% d,% f, etc.

Especificador de formato de caracteres:% c

# incluir

int main () { char ch = 'A'; printf ("% c \\ n", ch); devuelve 0; }

Salida: UN

Especificador de formato entero:% d,% i

# incluir

int main () { int x = 45, y = 90; printf ("% d \\ n", x); printf ("% i \\ n", x); devuelve 0; }

Salida: 45 45

Especificador de formato doble:% f,% e o% E

# incluir

int main () { flotar a = 12.67; printf ("% f \\ n", a); printf ("% e \\ n", a); devuelve 0; }

Salida: 12.670000 1.267000e + 01

Número octal sin signo para entero:% o

# incluir

int main () { int a = 67; printf ("% o \\ n", a); devuelve 0; }

Salida: 103

Hexadecimal sin signo para entero:% x,% X

# incluir

int main () { int a = 15; printf ("% x \\ n", a); devuelve 0; }

Salida: F

Impresión de cuerdas:% s

# incluir

int main () { char a \[\] = "nitesh"; printf ("% s \\ n", a); devuelve 0; }

Salida: Nitesh

* * *

scanf (formato char \*, arg1, arg2,…)

entero decimal:% d

# incluir

int main () { int a = 0; scanf ("% d", & a); // la entrada es 45 printf ("% d \\ n", a); devuelve 0; }

salida: 45

El entero puede ser octal o en hexadecimal:% i

# incluir

int main () { int a = 0; scanf ("% i", & a); // la entrada es 017 (octal de 15) printf ("% d \\ n", a); scanf ("% i", & a); // la entrada es 0xf (hexadecimal de 15) printf ("% d \\ n", a); devuelve 0; }

salida: 15 15

Tipo de datos flotante:% f,% e (doble),% lf (doble largo)

# incluir

int main () { flotar a = 0.0; scanf ("% f", & a); // la entrada es 45.65 printf ("% f \\ n", a); devuelve 0; }

Salida: 0.000000

Entrada de cadena:% s

# incluir

int main () { char str \[20\]; scanf ("% s", str); // la entrada es nitesh printf ("% s \\ n", str); devuelve 0; }

Salida: Nitesh

Entrada de caracteres:% c

# incluir

int main () { char ch; scanf ("% c", & ch); // la entrada es A printf ("% c \\ n", ch); devuelve 0; }

salida: UN

Los% especificadores que puede usar en ANSI C son:

| Especificador Utilizado para | |: -------------: |: -------------: | | % c | un solo personaje | | % s | una cuerda | | % hi | corto (firmado) | | % hu | corto (sin firmar) | | % Lf | largo doble | | % n | imprime nada | | % d | un entero decimal | | % o | un octal (base 8) entero | | % x | un entero hexadecimal (base 16) | | % p | una dirección (o puntero) | | % f | un número de punto flotante para flotadores | | % u | int decimal sin signo | | % e | Un número de punto flotante en notación científica | | % E | Un número de punto flotante en notación científica | | %% | ¡El símbolo! |