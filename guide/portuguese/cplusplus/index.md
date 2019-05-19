---
title: C++
localeTitle: C ++
---
# Olá Mundo! - Seu primeiro programa C ++

## O que é o C ++?

*   C ++ é uma linguagem de programação de uso geral que tem sido usada desde a década de 1990
    
*   Foi projetado por Bjarne Stroustrup sob o nome "C com classes".
    
*   É uma versão do C que inclui elementos orientados a objetos, incluindo classes e funções.
    
*   É considerada uma das maiores linguagens de programação, como você pode ver na imagem a seguir: ![Img](http://static1.businessinsider.com/image/59deb30392406c21008b6148-1200/for-bonus-points-heres-the-chart-showing-these-languages-relative-popularity.jpg) _fonte: Github_
    

### Seu primeiro programa em C ++

```cpp
#include <iostream> 
 using namespace std; 
 int main() 
 { 
    cout << "Hello World" << endl; 
    return 0; 
 } 
```

#### A saída deste programa será simplesmente:
```
Hello World! 
```

Agora, vamos detalhar o código:

#### Linhas 1 e 2

```cpp
#include <iostream> 
 using namespace std; 
```

*   A primeira linha informa ao computador para usar o arquivo de cabeçalho "iostream" para este programa específico. Um arquivo de cabeçalho é um arquivo separado com código C ++ pré-escrito. Existem muitos outros arquivos de cabeçalho que são necessários para que um programa específico seja executado corretamente. Alguns deles são: matemática, vetor e string. Arquivos de cabeçalho geralmente são representados por uma extensão ".h" (você não precisa adicionar .h ao incluir arquivos de biblioteca padrão C ++)
*   `iostream` significa fluxo de entrada-saída. O arquivo "iostream" contém código para permitir que o computador receba entrada e gere uma saída, usando a linguagem C ++.
*   A segunda linha diz ao computador para usar o namespace padrão que inclui recursos do C ++ padrão. Você poderia escrever este programa sem esta linha, mas você teria que usar `std::cout` vez de `cout` e `std::endl` vez de `endl` na linha 4. Isso torna o código mais legível e nossa vida como programadores mais fácil.

#### Linha 3 e 4

```cpp
int main() 
 { 
```

*   C ++ inicia a execução de um programa a partir da função -main- `int main()` . Durante a execução, o computador começa a executar o código de cada linha de `{` (colchete de abertura) até `}` (colchete de fechamento) **NOTA: Cada função começa com uma chave de abertura "{" e termina com uma chave de fechamento "}".**
*   A linha 4 indica o início da função main ().

#### Linhas 5, 6 e 7

```cpp
    cout << "Hello World" << endl; 
    return 0; 
 } 
```

*   A palavra `cout` em C ++ é usada para saída.
*   É seguido por `<<` , o _operador de inserção_ .
*   O que quer que esteja entre as aspas duplas `""` é impresso. Certos caracteres especiais têm uma sintaxe diferente para instruções de impressão
*   Agora, para imprimir qualquer outro tipo de dados, você precisa adicionar `<<` .

**_Desafio: Tente mudar o Hello World para qualquer outra frase ou palavra (s). Qual será o resultado?_**

*   `endl` é uma palavra reservada ao usar a linguagem C ++ para **finalizar esta linha e ir para a próxima linha durante a saída** . - _cout significa "saída do console"_
*   Finalmente, termine o comando com um ponto `;` vírgula `;` .

**OBSERVAÇÃO: Todos os comandos, exceto a definição da função principal e a diretiva #include, precisam ser finalizados pelo ponto-e-vírgula. Sem um ";" , você pode encontrar um erro.**

*   `return 0;` com segurança termina a função atual ou seja, 'main ()' neste caso e desde que nenhuma função segue após 'main ()' o programa é encerrado.
*   Não se esqueça de informar ao computador que este é o fim da função main (). Para fazer isso, você adiciona a chave de fechamento "}". Você encontrará um erro antes da execução do programa se você não incluir o **}** .

### O código deve ser algo como isto:

![Img](https://cdn-media-1.freecodecamp.org/imgr/d1liGwI.png)

Os programadores usam um programa Hello World (como este) como um ritual no uso de uma nova linguagem de programação. É um símbolo de boa sorte.  
_Você terminou de codificar seu primeiro programa C ++ e entendeu a maior parte do código que você escreveu / digitou. PARABÉNS!_

**Boa sorte para todos vocês e feliz codificação! :)**

**Codificação Feliz! :)**

**Sinta-se à vontade para fazer qualquer pergunta na página do GitHub do [FreeCodeCamp](https://forum.freecodecamp.org/) ou [no Fórum do FreeCodeCamp.](https://forum.freecodecamp.org/)**

[Tente você mesmo ! :)](https://repl.it/L4k3)

**Você pode precisar de algum software para escrever e executar o código C ++. Eu recomendo usar CodeBlocks. Há um link de download abaixo:**

Download Link: [Download Aqui](http://www.codeblocks.org/downloads/26)

*   Clique no link com o compilador GNU / GCC para windows. Isso não exigirá uma instalação adicional

Outras alternativas podem ser o visual studio, usando um compilador ou um IDE on-line como o Cloud9 ou o repl.it

Link # 2 para Mac: [Faça o download para o Mac # 2 aqui](https://developer.apple.com/xcode/)
