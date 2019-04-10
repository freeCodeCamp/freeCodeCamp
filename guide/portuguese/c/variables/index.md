---
title: Variables in C
localeTitle: Variáveis ​​em C
---
# Usando Variáveis ​​em C

Agora você sabe quais são suas opções com tipos de dados. Vamos aplicá-lo com um exemplo simples aqui:

```C
#include <stdio.h> 
 
 int main(void) { 
    int my_first_variable = 12; 
    double my_second_variable = 983.9; 
 
    printf("My int is %i\n", my_first_variable); 
    printf("My double is %f\n", my_second_variable); 
 
    return 0; 
 } 
```

Há muitas coisas novas para dar uma olhada aqui! Você já viu o `#include` e `int main(void)` , então não vale a pena ficar pensando nisso. O que é novo é `int my_first_variable = 12;` .

De mais cedo, você deve lembrar que `int` nos permite armazenar valores inteiros. Depois que a palavra `int` vem `my_first_variable` . Essa é uma variável - ela pode armazenar valores e você pode alterar quais valores estão sendo armazenados nela. Começamos com uma declaração, em que informamos ao computador que o valor inicial dessa variável é 12. É importante informar ao computador que queremos que exista uma variável antes de tentar usá-la. Caso contrário, a variável não existirá e o compilador não saberá o que fazer quando você tentar dizer para usar uma variável que não existe.

A próxima linha é `double my_second_variable = 983.9` . A estrutura semelhante de antes deve deixar claro que você está dizendo ao computador para criar uma variável chamada 'minha _segunda_ variável' que pode conter valores `double` e que você deseja que ela seja definida como 983.9.

O nome real da variável não é importante. Pode ser o que você quiser, desde que não seja nenhuma das palavras que C reservou para o idioma atual, e só pode incluir números e letras, nunca espaços. O nome da variável não pode começar com um número. Por convenção, C usa nomes de variáveis ​​claras que substituem sublinhados por espaços. A variável também pode ser camelCase, assim:

```C
double myFirstVariable = 983.9 
```

Na verdade, seria assim em outras línguas. No entanto, em C isso não é feito normalmente.

Depois que as variáveis ​​são criadas, nós começamos a usá-las:

```C
    printf("My int is %i\n", my_first_variable); 
    printf("My double is %f\n", my_second_variable); 
```

Este é o mesmo printf () que você usou anteriormente, mas agora ele tem alguns recursos diferentes. Primeiro, observe que agora existem duas coisas dentro dos parênteses: o texto a ser impresso na tela e a variável. Observe também o `%i` e o `%f` . Isso é chamado de _especificador de formato_ e é usado para especificar em qual formato algo deve ser impresso. Sempre que printf () se deparar com um desses, ele tentará inserir a variável fornecida nesse ponto.

Como os tipos de dados de nossas variáveis ​​são representados em um computador de várias maneiras diferentes, existem várias maneiras diferentes para que C os exiba:

Tipo de dados | Especificador de formato ---------------- | ------------------ char | % c, ou% hhi para imprimir como um número quando assinado,% hhu para imprimir como um número quando não assinado curto | % hi ou% hu quando não assinados int | % i,% d também pode ser usado longo | % li ou% lu quando não assinados muito tempo | % lli ou% llu quando não assinados flutuador | % f duplo | % f longa dupla | % Lf int não assinado | %Lu

Para imprimir uma variável, você deve ter um especificador de formato e, em seguida, uma variável para formatar. Vários especificadores de formato podem estar juntos no mesmo printf (), também:

```C
    printf("%i and %f", my_first_variable, my_second_variable); 
```

Para varrer uma variável, você deve ter um especificador de formato e, em seguida, o endereço da variável (denotado adicionando o sinal '&' antes do nome da variável) a ser tomado como entrada. Vários especificadores de formato podem estar juntos no mesmo scanf (), também:

```C
    scanf("%i and %f", &my_first_variable, &my_second_variable); 
```

Agora vamos começar a mudar os valores dentro de nossas variáveis. Aqui estão os mesmos exemplos de antes, mas com mais algumas linhas:

```C
#include <stdio.h> 
 
 int main(void) { 
    int my_first_variable = 12; 
    double my_second_variable = 983.9; 
 
    printf("My int is %i\n", my_first_variable); 
    printf("My double is %f\n", my_second_variable); 
 
    my_second_variable = -18.2 + my_first_variable; 
 
    printf("Now my double is %f\n", my_second_variable); 
 
    return 0; 
 } 
```

Agora há uma linha que lê `my_second_variable = -18.2 + my_first_variable;` . Esta equação atribui um novo valor à variável à esquerda. Sempre que um novo valor é atribuído, a variável à qual ele está sendo atribuído deve estar sempre à esquerda e sempre deve estar lá sozinha. Seu programa encontrará o resultado do lado direito e o atribuirá à variável à esquerda. Neste caso, adicionamos minha _primeira_ variável a -18,2. minha _primeira_ variável é 12 e -18,2 + 12 é -6,2, então minha _segunda_ variável se torna -6,2 após essa etapa. Nós vamos entrar mais em matemática daqui a pouco!

## Um pouco mais sobre carros alegóricos e duplas

Ao imprimir floats e duplas, muitas vezes precisamos de precisão após o ponto decimal. Se tiver-mos

```C
float var1 = 15.3; 
 printf("%f"); 
```

Nós temos `15.300000` . Então, digamos que só queremos dois lugares após o decimal para nos dar `15.30` . Nós usaríamos% .2f. Note, nós usamos um ponto decimal na frente da quantidade de casas decimais que nós queremos, seguidos pelo f, significando que queremos imprimir um float ou double.

# Nomes para Variáveis

*   Os únicos caracteres que você pode usar em nomes são caracteres alfabéticos, dígitos numéricos e o caractere de sublinhado (\_).
*   O primeiro caractere em um nome não pode ser um dígito numérico.
*   Caracteres maiúsculos são considerados distintos dos caracteres minúsculos.
*   Você não pode usar uma palavra-chave C para um nome.

# Antes de você ir ...

## Uma revisão

*   Variáveis ​​precisam ser criadas antes de serem usadas.
*   As variáveis ​​são criadas no seguinte formato: `datatype variable_name = number` .
*   Os especificadores de formato permitem que as variáveis ​​sejam impressas.
*   O sinal de igual `=` permite que valores sejam atribuídos a variáveis.