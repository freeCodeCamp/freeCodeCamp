---
title: Pointers
localeTitle: Ponteiros
---
# Ponteiros em C

Até agora você deve estar ciente de que C é uma linguagem de baixo nível, e nada mostra isso melhor que os ponteiros. Ponteiros são variáveis ​​que obtêm o valor da variável "apontando" para um local de memória, em vez de armazenar o valor da própria variável. Isso permite alguns truques úteis e é também o que nos dá acesso a matrizes e manipulação de arquivos, entre outras coisas.

#
```
tipo *nomeVariavel; 
```
Declaramos o tipo da variável como o exemplo acima, usamos asterisco (*) antes do nome do ponteiro.

## Fazendo e usando um ponteiro

```c
#include <stdio.h> 
 
 int main(void){ 
    double variavelDouble = 10.1; 
    double *meuPonteiro; 
 
    meuPonteiro = &variavelDouble; 
 
    printf("O valor da variavel double é: %f\n", variavelDouble); 
 
    ++variavelDouble; 
 
    printf("O valor do ponteiro é: %f\n", *meuPonteiro); 
 
    return 0; 
 } 
```

Saída:
```
O valor da variável double é: 10.100000 
O valor do ponteiro é: 11.100000 
```

Neste código, existem duas declarações. A primeira é uma inicialização típica de variável que cria um `double` e a define como 10.1. Novo em nossas declarações é o uso de `*` . O asterisco ( `*` ) é normalmente usado para multiplicação, mas quando o usamos colocando-o na frente de uma variável, ele diz a C que esta é uma variável de ponteiro.

A próxima linha diz ao compilador onde isso está em outro lugar. Ao usar `&` desta forma, ele se torna o "operador de desreferenciamento" e retorna a localização da memória da variável que está olhando.

Com isso em mente, vamos dar uma olhada neste pedaço de código:

```c
double *meuPonteiro; 
 // meuPonteiro agora armazena o endereço da variavelDouble
 meuPonteiro = &variavelDouble; 
```

`meuPonteiro` foi declarado e foi declarado como um ponteiro. O compilador C agora sabe que `meuPonteiro` vai apontar para um local de memória. A próxima linha atribui `meuPonteiro` um valor de localização de memória usando o `&` .

Agora vamos dar uma olhada no que se refere a um meio de localização de memória para o seu código:

```c
    printf("O valor da variavelDouble é: %f\n", variavelDouble); 
    
    // O mesmo que variavelDouble = variavelDouble + 1
    // Em português, adiciona uma unidade em variavelDouble
    ++variavelDouble
 
    printf("O valor do ponteiro é: %f\n", *meuPonteiro); 
```

Observe que, para obter o valor dos dados em `*meuPonteiro` , você precisará informar ao C que deseja obter o valor para o qual a variável está apontando. Tente executar este código sem o asterisco e você poderá imprimir a localização da memória, porque é isso que a variável `variavelDouble` está mantendo.

Você pode declarar múltiplos apontadores em uma única instrução como com variáveis ​​padrão, assim:

```c
int *x, *y; 
```

Observe que o `*` é necessário antes de cada variável. Isso ocorre porque ser um ponteiro é considerado parte da variável e não parte do tipo de dados.

## Usos práticos de ponteiros

### Matrizes

A aplicação mais comum de um ponteiro está em uma matriz. Matrizes, sobre as quais você lerá mais adiante, permitem um grupo de variáveis. Você realmente não tem que lidar com `*` e `&` usar matrizes, mas isso é o que eles estão fazendo nos bastidores.

### Funções

Às vezes você quer ajustar o valor de uma variável dentro de uma função, mas se você simplesmente passar sua variável por valor, a função funcionará com uma cópia de sua variável ao invés da própria variável. Se, em vez disso, você passar o ponteiro apontando para o local da memória da variável, poderá acessá-lo e modificá-lo fora de seu escopo normal. Isso ocorre porque você está tocando a própria localização da memória original, permitindo que você ajuste algo em uma função e faça alterações em outro lugar. Em contraste com "call by value", isso é chamado de "chamada por referência".

O programa a seguir troca os valores de duas variáveis ​​dentro da função de `swap` dedicada. Para conseguir isso, as variáveis ​​são passadas por referência.

```c
 /* Programa em C para trocar 2 números usando ponteiros e função. */ 
 #include <stdio.h> 
 void troca(int *n1, int *n2); 
 
 int main() 
 { 
    int num1 = 5, num2 = 10; 
    // Endereço de num1 e num2 é passado para a função troca
    troca( &num1, &num2); 
    printf("Número 1 = %d\n", num1); 
    printf("Número 2 = %d", num2); 
    return 0; 
 } 
 
 void troca(int * n1, int * n2) 
 { 
    // Os ponteiros n1 e n2 apontam para o endereço de num1 e num2 respectivamente
    int temp; 
    temp = *n1; 
    *n1 = *n2; 
    *n2 = temp; 
 } 
```

Saída
```
Número 1 = 10 
Número 2 = 5 
```

Os endereços, ou localizações de memória, de `num1` e `num2` são passados ​​para a função `troca` e são representados pelos ponteiros `*n1` e `*n2` dentro da função. Então, agora os ponteiros `n1` e `n2` apontam para os endereços de `num1` e `num2` respectivamente.

Quando, o valor dos ponteiros é alterado, o valor na localização da memória apontada também muda de forma correspondente.

Portanto, as alterações feitas em \* n1 e \* n2 são refletidas em num1 e num2 na função principal.

### PONTEIROS COMO PARÂMETROS DE FUNÇÃO

quando passamos qualquer parâmetro para função, estamos fazendo uma cópia do parâmetro. vamos ver com o exemplo

```C
#include <stdio.h> 
 
 void func(int); 
 
 int main(void) { 
    int a = 11; 
    func(a); 
    printf("%d",a); //print 11 
 
 
    return 0; 
 } 
 void func(int a){ 
    a=5 
    printf("%d",a); //print 5 
 } 
```

No exemplo acima, estamos alterando o valor do inteiro a na função func, mas ainda obtemos 11 na função principal. Isso acontece porque na cópia da função do inteiro a passou como parâmetro, portanto, nessa função não temos acesso ao 'a' que está na função principal.

Então, como você poderia alterar o valor do inteiro definido no main, usando outra função? Aqui POINTERS entra em função. Quando nós fornecemos o ponteiro como um parâmetro, temos acesso ao endereço desse parâmetro e podemos fazer qualquer alteração com este parâmetro e o resultado será mostrado em todo lugar. Abaixo está um exemplo que faz exatamente a mesma coisa que queremos…

Ao desreferenciar `n1` e `n2` , agora podemos modificar a memória para a qual `n1` e `n2` apontam. Isso nos permite alterar o valor das duas variáveis `num1` e `num2` declaradas na função `main` fora de seu escopo normal. Após a conclusão da função, as duas variáveis ​​agora trocaram seus valores, como pode ser visto na saída.

### Truques com Localizações de Memória

Sempre que puder ser evitado, é uma boa ideia manter seu código fácil de ler e entender. Na melhor das hipóteses, seu código contará uma história - terá fácil leitura de nomes de variáveis ​​e fará sentido se você ler em voz alta, e usará o comentário ocasional para esclarecer o que uma linha de código faz.

Por causa disso, você deve ter cuidado ao usar ponteiros. É fácil fazer algo confuso para você depurar ou para alguém ler. No entanto, é possível fazer algumas coisas bem legais com eles.

Dê uma olhada neste código, que transforma algo de maiúsculas em minúsculas:

```c
#include <stdio.h> 
 #include <ctype.h> 
 
 char *lowerCase (char *string) { 
    char *p = string; 
    while (*p) { 
        if (isupper(*p)) *p = tolower(*p); 
        p++; 
    } 
    return string; 
 } 
```

Isso começa pegando uma string (algo que você aprenderá quando entrar em arrays) e percorrer cada local. Observe o p ++. Isso incrementa o ponteiro, o que significa que ele está olhando para o próximo local de memória. Cada letra é um local de memória, assim, o ponteiro está olhando para cada letra e decidindo o que fazer para cada uma.

### Constante Qualific

O qualificador const pode ser aplicado à declaração de qualquer variável para especificar que seu valor não será alterado (o que depende de onde as variáveis ​​const são armazenadas, podemos alterar o valor da variável const usando o pointer).

# Ponteiro para variável

Podemos alterar o valor de ptr e também podemos alterar o valor do objeto ptr apontando para. O seguinte fragmento de código explica o ponteiro para variável

```c
#include <stdio.h> 
 int main(void) 
 { 
    int i = 10; 
    int j = 20; 
    int *ptr = &i;        /* Ponteiro para inteiro */ 
    printf("*ptr: %d\n", *ptr); 
 
    /* Ponteiro está apontando para outra variável */ 
    ptr = &j; 
    printf("*ptr: %d\n", *ptr); 
 
    /* É possível mudar o valor armazenado em um ponteiro */ 
    *ptr = 100; 
    printf("*ptr: %d\n", *ptr); 
 
    return 0; 
 } 
```

# Ponteiro para constante

Podemos mudar o ponteiro para apontar para qualquer outra variável inteira, mas não podemos alterar o valor do objeto (entidade) apontado usando ponteiro ptr.

```c
#include <stdio.h> 
 int main(void) 
 { 
    int i = 10; 
    int j = 20; 
    const int *ptr = &i;    /* ptr está apontando para constant */ 
 
    printf("ptr: %d\n", *ptr); 
    *ptr = 100;        /* error: Objeto apontado não pode ser modificado 
                     usando o ponteiro ptr */ 
 
    ptr = &j;          /* Válido */ 
    printf("ptr: %d\n", *ptr); 
 
    return 0; 
 } 
```

# Ponteiro constante para variável

Neste podemos mudar o valor da variável que o ponteiro está apontando. Mas não podemos mudar o ponteiro para apontar para outra variável.

```c
#include <stdio.h> 
 int main(void) 
 { 
   int i = 10; 
   int j = 20; 
   int *const ptr = &i;    /* Constante aponta para um inteiro */ 
 
   printf("ptr: %d\n", *ptr); 
 
   *ptr = 100;    /* Válido */ 
   printf("ptr: %d\n", *ptr); 
 
   ptr = &j;        /* Error */ 
   return 0; 
 } 
```

# ponteiro constante para constante

A declaração acima é ponteiro constante para variável constante, o que significa que não podemos alterar o valor apontado pelo ponteiro, assim como não podemos apontar o ponteiro para outra variável.

```c
#include <stdio.h> 
 
 int main(void) 
 { 
    int i = 10; 
    int j = 20; 
    const int *const ptr = &i; /* Ponteiro constante apontando para um inteiro constante */ 
 
    printf("ptr: %d\n", *ptr); 
 
    ptr = &j;            /* Error */ 
    *ptr = 100;        /* Error */ 
 
    return 0; 
 } 
```

# Antes de você ir ...

## Uma revisão

*   Ponteiros são variáveis, mas em vez de armazenar um valor, eles armazenam um local de memória.
*   `*` e `&` são usados ​​para acessar valores em locais de memória e acessar locais de memória, respectivamente.
*   Os ponteiros são úteis para alguns dos recursos subjacentes de C.

# Ponteiro vs Array em C

Na maioria das vezes, os acessos de ponteiro e array podem ser tratados como agindo da mesma forma, sendo as principais exceções:

1) o operador sizeof

*   `sizeof(array)` retorna a quantidade de memória usada por todos os elementos da matriz
*   `sizeof(ponteiro)` retorna apenas a quantidade de memória usada pela própria variável de ponteiro

2) o operador &

*   & array é um alias para & array \[0\] e retorna o endereço do primeiro elemento da matriz
*   & ponteiro retorna o endereço do ponteiro

3) uma inicialização literal de string de um array de caracteres

*   `char array[] = “abc”` define os primeiros quatro elementos da matriz como 'a', 'b', 'c' e '\\ 0'
*   `char *pointer = “abc”` define o ponteiro para o endereço da string “abc” (que pode ser armazenada em memória somente leitura e, portanto, imutável)

4) A variável de ponteiro pode receber um valor enquanto a variável de matriz não pode ser.

```c
    int a[10]; 
    int *p; 
    p = a; /*legal*/ 
    a = p; /*illegal*/ 
```

5) A aritmética na variável do ponteiro é permitida.

```c
    p++; /*Legal*/ 
    a++; /*illegal*/ 

```
