---
title: C++ Compilers
localeTitle: Compiladores C ++
---
# Introdução aos Compiladores C ++

Para começar com C ++, você precisará aprender um pouco sobre compiladores e como o C ++ é executado em seu computador.

Quando tudo estiver dito e feito, os computadores só entendem uma linguagem, linguagem de máquina. Linguagem de máquina é inteiramente composta de bits binários, ou 0s e 1s. Embora seja possível programar em binário, seria extremamente tedioso e demorado. Então, nós humanos desenvolvemos linguagens de programação para facilitar o desenvolvimento de software. Linguagem de montagem é um direto de 1 para 1 com a máquina língua. Idiomas como C, C ++ e COBOL são um pouco mais altos e precisam ser compilados. Vai ainda mais alto. línguas como JavaScript e Python tem componentes que são traduzidos para C ++ ou outras linguagens de baixo nível antes de serem compiladas, efetivamente tornando-os linguagens "superiores" que C ou C ++. Como a arquitetura de computadores é composta de switches e cabos eletrônicos que só podem funcionar com 1s e 0s binários, você precisa de um compilador para traduzir seu código de alto nível C ++ para linguagem de máquina que a CPU possa entender.

Compiladores são programas utilitários que pegam seu código e o transformam em arquivos executáveis ​​de código de máquina. Quando você executa um compilador no seu código, primeiro, o pré-processador lê o código-fonte (o arquivo C ++ que você acabou de escrever). O pré-processador procura por qualquer diretivas de pré-processador (linhas de código iniciando com #). As diretivas de pré-processador causam pré-processador para alterar seu código de alguma forma (geralmente adicionando alguma biblioteca ou outro arquivo C ++). Em seguida, o compilador trabalha através do código pré-processado linha por tradução de linha cada linha na instrução de linguagem de máquina apropriada. Isso também revelará os erros de sintaxe que estão presentes no seu código-fonte e lançará um erro na linha de comando. Finalmente, se nenhum erro estiver presente, o compilador cria um objeto arquivo com o binário de linguagem de máquina necessário para executar em sua máquina. Enquanto o arquivo objeto que o compilador acabou de criar é provável o suficiente para fazer algo no seu computador, ainda não é um executável de trabalho do seu programa C ++. Existe uma final passo importante para chegar a um programa executável.

C ++ contém uma vasta biblioteca para auxiliar na execução de tarefas difíceis, como E / S e manipulação de hardware. Você pode incluir esses bibliotecas com diretivas de pré-processador, mas o pré-processador não as adiciona automaticamente ao seu código. Para você ter um programa executável final, outro utilitário conhecido como o vinculador deve combinar seus arquivos de objeto com as funções de biblioteca necessário para executar o código. Pense nisso como tendo todos os blocos necessários para construir uma casa. O compilador fez todos os blocos, mas o linker é o que os une para finalmente criar uma casa. Feito isso, agora você tem um arquivo executável em funcionamento!

## Como compilar um arquivo

Digamos que você tenha um arquivo C ++ chamado `helloWorld.cpp` …

### Se você está no Windows -

#### Usando e IDE como CodeBlocks

É tão simples quanto clicar nos botões build e run, eles irão criar um arquivo na pasta do projeto. ![img](https://cdn-media-1.freecodecamp.org/imgr/FwZuFGy.png)

#### Usando o prompt de comando

1.  Abrir um Prompt de Comando do Desenvolvedor - Para esta etapa, você precisará ter o Microsoft Visual Studio ou algum outro IDE permite que você compile seu programa a partir da linha de comando. Você também pode pesquisar online por compiladores C ++.
    
2.  Navegue até o código-fonte diretamente
    
3.  Execute o compilador no seu código-fonte (supondo que você esteja usando o compilador do Microsoft Visual Studio) `cl /EHsc helloWorld.cpp`
    

Isso agora criará um arquivo de objeto e o vinculará automaticamente para você. Se você olhar na mesma pasta, verá um O arquivo executável hellWorld.exe (observe a extensão exe) agora está presente.

4.  Digite `helloWorld` no prompt para executar o executável

Alternativamente, muitos IDEs permitem a criação e visualização rápida de seu programa. Isso pode ser mais fácil, já que sua versão do O Windows pode não vir pré-empacotado com um utilitário de compilação.

### Se você está no Linux ou OSX -

1.  Abra uma janela de terminal e navegue até o diretório do código-fonte
2.  Execute o compilador no seu código-fonte `g++ helloWorld.cpp -o helloWorld`

Isso criará um arquivo de objeto e o vinculará automaticamente para você. Olhe na pasta e você verá um helloWorld.exe arquivo executável (observe a extensão exe).

3.  Digite `./helloWorld` na janela do terminal para executar o arquivo executável

g ++ é o compilador padrão do Linux e é um ótimo utilitário. Vem embalado com o sistema operacional.

NOTA: para compilar e executar seu código diretamente, execute `g++ -o helloWorld helloWorld.cpp; ./helloWorld` então quando você precisar compilar e executar seu código várias vezes, seta para cima

* * *

Existem vários tipos diferentes de compiladores. Os dois listados são os dois que geralmente são empacotados com o Windows ou Linux / OSX.