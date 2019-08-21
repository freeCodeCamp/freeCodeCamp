---
title: C
localeTitle: C
---
# Olá Mundo! - Seu primeiro programa em C

## Tirando o máximo proveito deste curso

Certifique-se de que você está confortável com todos os conceitos nesta parte do guia antes de prosseguir. Obtendo seu primeiro programa em execução é importante porque permitirá que você siga junto com os exemplos, o que é outra coisa boa para fazer prática faz perfeito! Conceitos que podem ser confusos terão uma anotação vinculada a um apêndice. Se você não entende um conceito, consulte o apêndice para mais informações.

## Objetivo do curso

Os objetivos deste curso são ensinar a linguagem C para iniciantes. Idealmente, alguém que nunca tocou uma linguagem de computador antes poderá conhecer C seguindo estes guias. No entanto, eles ainda serão úteis para programadores mais experientes, incluindo um resumo no final de cada artigo. Embora o conteúdo ensinado aqui seja transferível para microcontroladores como o Arduino, não é o foco deste guia.

## O que é C?

C é uma linguagem de programação de uso geral inventada por Dennis Ritchie entre 1969 e 1973 no Bell Labs. Desde então, ele tem sido usado para criar coisas como o Linux Kernel, que permite que o software interaja com o hardware em sistemas operacionais baseados em Linux. Ele pode fazer isso e outras operações de baixo nível, porque ele foi projetado para ficar muito próximo do código da máquina e, ao mesmo tempo, ser legível por humanos. Por isso, fornece acesso direto à memória e ao hardware do computador. Isso o torna muito útil em aplicativos de hardware e robótica, onde é importante ter acesso a esses recursos rapidamente. C, como outras linguagens de baixo nível, requer compilação. O processo de compilação pega o código C que pode ser lido por uma pessoa e transforma-o em código que pode ser lido e executado por um computador. A compilação requer um compilador, que pode ser usado a partir da linha de comando ou pode ser usado em um IDE.

Se você preferir usar a linha de comando, considere o `gcc` . Ele pode ser encontrado por padrão nos sistemas operacionais GNU + Linux e no Mac, e é fácil de obter no Windows. Para iniciantes, no entanto, ter um IDE pode ser mais confortável. Considere CodeBlocks ou Xcode se você estiver interessado em poder escrever e executar código a partir de uma GUI (*Graphical User Interface* ou, Interface Gráfica do Usuário).

Agora que você tem esse histórico, vamos começar com nosso programa 'Hello, World'. "Hello, World" é uma forma tradicional de começar com uma linguagem: mostra que podemos escrever código e executá-lo, por isso é um bom começo!

## Olá mundo em C

```C
#include <stdio.h> 
 
 int main(void) 
 { 
    printf("hello, world\n"); 
    return 0; 
 } 
```

Vamos quebrar este programa passo a passo.

Primeiro é o `#include` :

```C
#include <stdio.h> // This is called preprocessor directives 
```

Esta é uma instrução para o compilador para localizar e incluir um conjunto de arquivos de cabeçalho. Os arquivos de cabeçalho contêm código adicional que podemos usar. Nesse caso, o compilador foi instruído a incluir `<stdio.h>` , que contém todos os tipos de funções úteis, como `printf()` . Também podemos escrever como `#include"stdio.h"` . Vamos entrar em detalhes sobre quais funções são posteriores, mas por enquanto lembre-se que uma função é uma coleção de código que podemos usar.

```C
int main(void) 
 { 
 } 
```

Este código declara a função principal. A função principal é especial - sempre será chamada e é sempre a parte 'principal' do seu programa. Se isso não estiver no seu programa, seu programa não poderá ser executado e não será compilado.

Iniciar a declaração de função com `int` significa que essa função fornecerá um valor `int` quando for executada através de seu código - é a saída desta função. `int` é o tipo de dados 'inteiro' e inteiros são números inteiros como -3, 0 ou 18. Então sabemos que esse código será executado e, quando estiver pronto, nos retornará um número inteiro. Por convenção, esse inteiro é 0.

Em seguida é o `main` . `main` é o nome dessa função e, como você aprendeu anteriormente, é importante ter uma função `main` , pois o programa não funcionará sem ela. `main` é seguido por `(void)` . Isso diz ao compilador que essa função não recebe nenhum parâmetro, o que significa que não possui entrada.

Isso pode não fazer muito sentido agora, mas você aprenderá mais sobre isso quando começar a ler sobre funções em C mais tarde. Por enquanto, lembre-se que o `main` é necessário para o seu programa C, ele não está recebendo nenhuma entrada e está dando um número como sua saída.

Finalmente, há os colchetes: `{` e `}` . Estes marcam o começo e o fim da função. A chave aberta ( `{` ) marca o início e a chave fechada ( `}` ) marca o fim. Tudo entre os dois está dentro da função.

Agora vamos ver o miolo do programa:

```C
    printf("Hello, World!\n"); 
```

`printf` é uma função que pega texto e imprime na tela. O parêntese indica quais informações queremos que a função `printf` tire e imprima na tela. Mostramos que esta é uma string que queremos imprimir, colocando-a entre aspas "assim".

Observe o \\ n encontrado dentro das aspas - isso diz à função `printf` para imprimir uma nova linha. Uma nova linha é impressa quando você aperta enter no seu teclado. Sem explicitamente dizer ao C para imprimir uma nova linha, tudo será impresso na mesma linha.

Finalmente, a instrução printf () é concluída com um ponto e vírgula ( `;` ). Isso mostra que esta linha de código acabou. Sem ele, o compilador não sabe onde uma linha termina e outra começa, por isso é importante incluir.

O programa termina com uma declaração de retorno:

```C
return 0; 
```

Isso mostra que a função acabou e que deve terminar dando um valor de 0 para qualquer coisa que tenha sido executada. Quando você está executando código no seu computador, isso é bom porque permite que outros programas interajam com o seu de uma maneira melhor.

Como antes, esta linha termina com um ponto e vírgula para indicar que a linha foi concluída.

## Compilação e Corrida

Você pode salvar o seu arquivo hello world como o que você quiser, mas ele precisa terminar com a extensão de arquivo .c. Neste exemplo, o arquivo foi nomeado "helloworld.c", porque esse é um nome claro com uma extensão de arquivo .c.

Existem muitas maneiras de compilar e obter o código C em execução no seu computador. Aqui estão alguns:

#### Compilação e execução a partir da linha de comando com o GCC

Se você estiver usando Mac ou GNU + Linux, você já tem o GCC instalado.

Para executar seu programa em C, ele precisa ser compilado. Para compilar a partir da linha de comando usando o gcc, execute o seguinte comando no seu terminal:

```shell
gcc -o helloworld ./helloworld.c 
```

`gcc` é o compilador Gnu C, e ele irá compilar o arquivo C que fornecemos em um programa que pode ser executado pelo seu computador.

`-o helloworld` diz ao GCC que você quer que o arquivo compilado (a saída do gcc) seja um arquivo chamado "helloworld". A parte final do comando diz ao GCC onde o arquivo C a ser compilado pode ser encontrado. Se você não estiver confortável com a navegação na linha de comando, essa etapa será difícil, mas tudo bem. É fácil aprender e voltar ou você pode tentar em uma IDE.

Depois de compilá-lo, execute o seguinte comando:

```shell
./helloworld 
```

Se tudo correu bem, você deve ver `Hello, World!` impresso na tela.

#### Compilação e execução de C com CodeBlocks

[Codeblocks pode ser baixado aqui.](http://www.codeblocks.org/downloads/26) Crie um novo programa com `file` -> `new` -> `file` , selecione C / C ++ source, selecione C como seu idioma e copie o texto helloworld.c que você leu anteriormente. Compile e execute o código com `Build` -> `Build and Run` .

#### Compilação e execução de C com o Xcode

[O Xcode pode ser baixado aqui.](https://developer.apple.com/xcode/)

#### Compilação e executando C com Dev-C ++

[Dev-C ++ pode ser baixado aqui.](https://sourceforge.net/projects/orwelldevcpp/) Crie um novo programa com `file` -> `new` -> `Source File` , então copie o texto helloworld.c que você leu anteriormente e salve o arquivo com `file` -> `save As` como hello.c, e Compile e execute o código com `Execute` -> `Compile & Run` .

# Antes de você ir ...

## Uma revisão

*   C é lingua franca de linguagens de programação.
*   C foi usado para reimplementar o sistema operacional Unix.
*   C é útil porque é pequeno, rápido e tem acesso a operações de baixo nível. Por causa disso, ele é muito usado em robótica, sistemas operacionais e eletrônicos de consumo, mas não em coisas como páginas da web.
*   O programa de AC tem algumas partes críticas:
*   A instrução include, que informa ao compilador C onde encontrar código adicional que será usado no programa.
*   A função principal, que é onde o código será executado primeiro e é necessário para compilar.
*   Coisas dentro dessa função principal que serão executadas, incluindo uma declaração de retorno que fecha o programa e dá um valor ao programa que o chamou.
*   C precisa ser compilado para ser executado.
*   C pode ser usado para acessar endereços de hardware específicos e para executar o puncionamento de tipos para corresponder aos requisitos de interface impostos externamente, com uma demanda de tempo de execução baixa nos recursos do sistema.
