---
title: Preprocessors
localeTitle: Pré-processadores
---
## Pré-processadores em C / CPP

Como o nome sugere, os pré-processadores são programas que processam nosso código-fonte antes da compilação. Há vários passos envolvidos entre escrever um programa e executar um programa em C / C ++. Vamos dar uma olhada nestes passos antes de começarmos a aprender sobre os pré-processadores.

![Img](https://cdn-media-1.freecodecamp.org/imgr/Pb0aTkV.png)

Você pode ver as etapas intermediárias no diagrama acima. O código fonte escrito pelos programadores é armazenado no arquivo program.c. Este arquivo é então processado por pré-processadores e um arquivo de código-fonte expandido é gerado programa nomeado. Este arquivo expandido é compilado pelo compilador e um arquivo de código de objeto é gerado chamado program.obj. Finalmente, o vinculador vincula esse arquivo de código de objeto ao código de objeto das funções de biblioteca para gerar o arquivo executável program.exe.

Os programas de pré-processador fornecem diretivas de pré-processadores que informam ao compilador para pré-processar o código-fonte antes de compilá-lo. Todas essas diretivas de pré-processador começam com um símbolo `#` (hash). Esse símbolo ('#') no início de uma instrução em um programa C / C ++ indica que é uma diretiva de pré-processador. Podemos colocar essas diretivas pré-processador em qualquer parte do nosso programa. Exemplos de algumas diretivas de pré-processador são: `#include` , `#define` , `#ifndef` etc.

### Tipos de diretivas de pré-processador:

1.  Macros
2.  Inclusão de arquivos
3.  Compilação Condicional
4.  Outras diretivas

### Macros:

As macros são uma parte do código em um programa que recebe algum nome. Sempre que esse nome é encontrado pelo compilador, o compilador substitui o nome pela parte real do código. A diretiva `#define` é usada para definir uma macro.

```cpp
  #include<iostream> 
  #define LIMIT 3 
  int main() 
  { 
    for(int i=0; i < LIMIT; i++) 
    { 
      std::cout<<i<<" " ; 
    } 
      return 0; 
  } 
```

Saída:

`0 1 2`

No programa acima, quando o compilador executa a palavra `LIMIT` ele o substitui por 3. A palavra `LIMIT` na definição de macro é chamada de modelo de macro e '3' é a expansão de macro.

Não deve haver ponto e vírgula (';') no final da definição macro. As definições de macro não precisam de ponto e vírgula para terminar.

### Inclusão de arquivos:

Esse tipo de diretiva de pré-processador informa ao compilador para incluir um arquivo no programa de código-fonte. Existem dois tipos de arquivos que podem ser incluídos pelo usuário no programa:

*   \#### Arquivos de cabeçalho ou arquivos padrão: Esses arquivos contêm a definição de funções predefinidas como printf (),… scanf () etc. Esses arquivos devem ser incluídos para trabalhar com essas funções. … Funções diferentes são declaradas em diferentes arquivos de cabeçalho. Por exemplo… as funções de E / S padrão estão no arquivo 'iostream', enquanto as funções que… executam operações de string estão no arquivo 'string'.

#### Sintaxe:

`#include< file_name >` onde file\_name é o nome do arquivo a ser incluído. Os colchetes `<` e `>` dizem ao compilador para procurar o arquivo no diretório padrão.

*   \#### Arquivos definidos pelo usuário: Quando um programa se torna muito grande, é recomendável dividi-lo em arquivos menores e incluir sempre que necessário. Esses tipos de arquivos são arquivos definidos pelo usuário. Esses arquivos podem ser incluídos como: … `#include"filename"`

### Compilação Condicional:

As diretivas de compilação condicional são tipos de diretivas que ajudam a compilar uma parte específica do programa ou a pular a compilação de alguma parte específica do programa com base em algumas condições. Isso pode ser feito com a ajuda de dois comandos de pré-processamento `ifdef` e `endif` .

#### Sintaxe:

```cpp
  ifdef macro_name 
    statement1; 
    statement2; 
    statement3; 
    . 
    . 
    . 
    statementN; 
  endif 
```

Se a macro com nome como 'macroname' for definida, o bloco de instruções será executado normalmente, mas se não for definido, o compilador simplesmente ignorará este bloco de instruções.

### Outras diretivas:

Para além das directivas acima, existem mais duas directivas que não são normalmente utilizadas. Esses são:

1.  \##### `#undef` Directiva: A diretiva `#undef` é usada para indefinir uma macro existente. Esta diretiva funciona como:

##### Sintaxe:

`#undef LIMIT` Usando esta declaração irá indefinir a macro LIMIT existente. Após esta declaração, cada declaração `#ifdef LIMIT` será avaliada como falsa.

2.  \##### `#pragma` directiva: Esta diretiva é uma diretiva de propósito especial e é usada para ativar ou desativar alguns recursos. Esse tipo de diretivas é específico do compilador, ou seja, elas variam de compilador para compilador. Algumas das diretivas # `#pragma` são discutidas abaixo:

##### `#pragma startup` e `#pragma exit` :

Essas diretivas nos ajudam a especificar as funções necessárias para executar antes da inicialização do programa (antes que o controle passe para main ()) e logo antes da saída do programa (logo antes que o controle retorne de main ()).

```cpp
#include<stdio.h> 
 void func1(); 
 void func2(); 
 #pragma startup func1 
 #pragma exit func2 
 void func1() 
 { 
    printf("Inside func1() "); 
 } 
 void func2() 
 { 
    printf("Inside func2() "); 
 } 
 int main() 
 { 
    printf("Inside main() "); 
 
    return 0; 
 } 
```

Saída:  
`Inside func1() Inside main() Inside func2()`  
O código acima irá produzir a saída como indicado abaixo quando executado em compiladores GCC:  
Saída:  
`Inside main()`  
Isso acontece porque o GCC não suporta a inicialização ou a saída #pragma. No entanto, você pode usar o código abaixo para uma saída similar em compiladores GCC.

```cpp
#include<stdio.h> 
 void func1(); 
 void func2(); 
 void __attribute__((constructor)) func1(); 
 void __attribute__((destructor)) func2(); 
 void func1() 
 { 
    printf("Inside func1()\n"); 
 } 
 void func2() 
 { 
    printf("Inside func2()\n"); 
 } 
 int main() 
 { 
    printf("Inside main()\n"); 
 
    return 0; 
 } 
```

##### `#pragma warn` directiva:

Esta diretiva é usada para ocultar a mensagem de aviso exibida durante a compilação. Podemos ocultar os avisos conforme mostrado abaixo:

##### `#pragma warn -rvl` :

Essa diretiva oculta os avisos que são gerados quando uma função que deve retornar um valor não retorna um valor.

##### `#pragma warn -par` :

Essa diretiva oculta os avisos que são gerados quando uma função não usa os parâmetros passados ​​para ela.

##### `#pragma warn -rch` :

Essa diretiva oculta os avisos que são gerados quando um código está inacessível. Por exemplo: qualquer código escrito após a declaração de retorno em uma função é inacessível.