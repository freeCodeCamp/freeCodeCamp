---
title: Structures
localeTitle: Estruturas
---
## Estruturas em C

### O que são estruturas?

*   Uma **estrutura** é um tipo definido pelo usuário em C. Ela é baseada na ideia de que, algumas vezes, o programador deseja gerenciar não apenas tipos de dados primitivos, mas também tipos de dados definidos pelo programador.
*   **A estrutura** , como o nome sugere, consiste em vários tipos de dados primitivos, como caractere, inteiros, variáveis ​​de ponto flutuante, matrizes etc.
*   **A estrutura** também pode conter vários outros tipos de dados definidos pelo usuário. Você aprenderia sobre as estruturas aninhadas a seguir.
*   **As estruturas** formam a base da **_programação orientada a objetos,_** já que o conceito de _classe se_ origina de estruturas.

### palavra-chave struct

*   `struct` palavra-chave `struct` pode nos ajudar a definir um tipo de dados definido pelo usuário.

```C
struct StudentRecord 
 { 
  char Name[20]; 
  int Class; 
  char Address[30]; 
  char Phone[10]; 
 }; 
```

*   Também podemos definir uma **estrutura** usando **typedef, o** que facilita a inicialização de uma estrutura mais tarde em nosso programa.

```C
typedef struct StudentRecord 
 { 
  char Name[20]; 
  int Class; 
  char Address[30]; 
  char Phone[10]; 
 }Record; 
```

Em `main()` , o tipo de dados **StudentRecord** definido pelo usuário é definido como:

```C
int main(void) 
 { 
  struct StudentRecord student1; 
 } 
```

E usando **typedef** , o tipo de dados definido pelo usuário se parece com:

```C
int main(void) 
 { 
  Record student1; 
 } 
```

Para acessar os dados armazenados no **student1** , usamos o operador dot ( **.** ) Para acessar o conteúdo da variável do tipo de estrutura.

```C
int main(void) 
 { 
  struct StudentRecord student1; 
  student1.Class = 10; 
  printf("Enter Name of Student\n"); 
  scanf("%s",&student1.Name); 
  printf("Enter Address of Student\n"); 
  scanf("%s",&student1.Address); 
  printf("Enter Phone Number of Student\n"); 
  scanf("%s",&student1.Phone); 
  // Printing the Data 
  printf("Name: %s \n, Class: %d \n, Address: %s \n, Phone: %s \n",student1.Name, student1.Class, student1.Address, student1.Phone); 
 } 
```

### Mais Informações

https://www.tutorialspoint.com/cprogramming/c\_structures.htm