---
title: Variables and Basic Data Types 
localeTitle: Variáveis ​​e Tipos Básicos de Dados
---
# Variáveis ​​e Tipos Básicos de Dados

## O que é uma variável?

Variáveis ​​armazenam valores. Basicamente você dá um nome a um valor armazenado, que você quer usar depois. É importante observar que uma variável pode armazenar apenas um valor de uma só vez. No entanto, mais tarde, você pode alterar os valores armazenados mais tarde no código e também pode atribuir o valor de uma variável a outra.

> Quando você cria uma variável, ela é chamada de `declaring` e, quando você atribui a ela um valor para armazenar, ela é chamada de `assignment` . Se você atribuir à variável um valor ao mesmo tempo que declará-la, ela será chamada de `initializing` . C é muito exigente sobre como você cria variáveis ​​e o que você armazena nelas. C é uma `strongly typed` , o que significa que você precisa definir o tipo e o nome de cada variável quando a declarar. O nome de uma variável pode ser composto de letras, dígitos e o caractere de sublinhado.

## Tipos básicos

No Standard C existem quatro tipos básicos de dados importantes: `int` , `float` , `double` , `char` .

### Inteiros

Para valores numéricos inteiros, a palavra-chave `int` é usada (abreviação de integer). Vamos olhar para um programa simples:

```C
#include <stdio.h> 
 int main(void){ 
 
 int a; // Declaring a variable which stores integer values and is called 'a' 
 int b = 5; //Initializing an int called 'b' with the value 5 
 a = 6; // Assigning the value 6 to the variable 'a' 
 int c; 
 c = a + b; // Assign the sum of 'a' and 'b' to the variable c 
 int d = a + c; //But we could also initialize it right away. 
 
 //Some shiny things 
 printf("%d \n", c); 
 printf("%d %d \n", a, b); 
 
 return 0; 
 } 
```

Vamos quebrar o que fizemos sob `Some shingy things` :

```C
printf("%d \n", c); 
```

Para imprimir o valor da variável `c` , você pode usar a `printf()` . Observe o `%d` entre aspas duplas. Isso informa ao computador que esperar um valor ecimal **d,** e que é depois da vírgula.

```C
printf("%d %d \n", a, b); 
```

Você pode imprimir vários inteiros na ordem dada após a vírgula.

Observe que quando você tenta armazenar um valor decimal em um `int` , você só terá toda a parte dele, porque eles serão truncados.

Também podemos escrever o programa da maneira abaixo:
```
#include <stdio.h> 
 int main(void){ 
 
 int a=3,b=4,c; // we can also assign and declare the values in 1 line 
 c = a + b; // Assign the sum of 'a' and 'b' to the variable c 
 
 printf("%d %d \n", a, b); 
 printf("%d \n", c); 
 
 return 0; 
 } 
```

### Flutuadores e duplas

Para armazenar valores decimais, você pode usar as palavras-chave `float` e `double` . A diferença entre eles é a precisão, o `double` tem cerca de 13 dígitos, enquanto o `float` tem cerca de 7, mas isso difere de CPU para CPU. \`\` \`C #incluir int main (void) { dobrar a = 3,23; printf ("A variável a tem o valor:% f \\ n", a); // Valores duplos podem ser impressos com% f return 0; }
```
### Characters 
 You can store a single character with the `char` keyword. You will learn about storing multiple characters later, when we introduce `arrays`. Let's look at some code: 
```

C

# incluir

int main (void) { char a = 'A'; // Inicializando um char com o valor 'A', observe as aspas simples! printf ("O caractere era:% c", a) // Os caracteres podem ser impressos com% c return 0; }
```
## The Boolean type 
 Later in C a new type was added, called `bool`. Bool stores true/false values, which comes in handy when you have to make decisions in the code. To use it though, you have to inlcude another header next to `<stdio.h>` called `<stdbool.h>`. 
```

C

# incluir

# incluir

int main (void) { bool a = verdadeiro; bool b = falso;

return 0; } \`\` \`

## Comentários

O tipo de uma variável informa ao compilador quanto espaço deve ser criado (alocado) para a variável. Agora você viu os tipos básicos de dados, mas há modificadores para eles modificarem a quantidade de espaço alocado para uma variável. Modificadores podem aumentar ou diminuir os valores padrão. C tem 5 modificadores: `short` , `long` , `signed` , `unsigned` , `long long` . Eles são prefixados aos tipos básicos.