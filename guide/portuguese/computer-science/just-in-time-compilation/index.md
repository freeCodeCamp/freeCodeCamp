---
title: Just in Time Compilation
localeTitle: Just in Time Compilation
---
## Just in Time Compilation

A compilação just-in-time é um método para melhorar o desempenho de programas interpretados. Durante a execução, o programa pode ser compilado em código nativo para melhorar seu desempenho. Também é conhecido como compilação dinâmica.

A compilação dinâmica tem algumas vantagens sobre a compilação estática. Ao executar aplicativos Java ou C #, o ambiente de tempo de execução pode criar o perfil do aplicativo enquanto ele está sendo executado. Isso permite que códigos mais otimizados sejam gerados. Se o comportamento do aplicativo for alterado enquanto estiver em execução, o ambiente de tempo de execução poderá recompilar o código.

Algumas das desvantagens incluem atrasos de inicialização e a sobrecarga de compilação durante o tempo de execução. Para limitar a sobrecarga, muitos compiladores JIT compilam apenas os caminhos de código que são usados ​​com freqüência.

### Visão geral

Tradicionalmente, existem dois métodos para converter o código-fonte em um formulário que pode ser executado em uma plataforma. A compilação estática converte o código em uma linguagem para uma plataforma específica. Um intérprete executa diretamente o código fonte.

Compilação JIT tenta usar os benefícios de ambos. Enquanto o programa interpretado está sendo executado, o compilador JIT determina o código usado com mais freqüência e o compila para código de máquina. Dependendo do compilador, isso pode ser feito em um método ou seção menor de código.

A compilação dinâmica foi descrita pela primeira vez em um artigo de J. McCarthy no LISP em 1960.

Just In Time Compilation, JIT ou Dynamic Translation, é uma compilação que está sendo feita durante a execução de um programa. Significado, em tempo de execução, ao contrário de antes da execução. O que acontece é a tradução para o código da máquina. As vantagens de um JIT se devem ao fato de que, como a compilação ocorre em tempo de execução, um compilador JIT tem acesso a informações dinâmicas de tempo de execução, permitindo que ele faça otimizações melhores (como funções inline).

O que é importante entender sobre a compilação JIT é que ela irá compilar o bytecode em instruções de código de máquina da máquina em execução. Isso significa que o código de máquina resultante é otimizado para a arquitetura de CPU da máquina em execução.

Dois exemplos de Compiladores JIT são: JVM (Java Virtual Machine) em Java e CLR (Common Language Runtime), em C #.

## JIT significa Just-in-Time, o que significa que o código é compilado quando necessário, não antes do tempo de execução.

No começo, um compilador era responsável por transformar uma linguagem de alto nível (definida como nível superior a assembler) em código de objeto (instruções de máquina), que seria então vinculada (por um linker) a um executável.

Em um ponto da evolução das linguagens, os compiladores compilariam uma linguagem de alto nível em pseudo-código, que então seria interpretado (por um intérprete) para executar seu programa. Isso eliminou o código-objeto e os executáveis ​​e permitiu que esses idiomas fossem portáveis ​​para vários sistemas operacionais e plataformas de hardware. Pascal (que compilou para o P-Code) foi um dos primeiros; Java e C # são exemplos mais recentes. Eventualmente, o termo P-Code foi substituído por bytecode, uma vez que a maioria das pseudooperações são longas.

Um compilador Just-In-Time (JIT) é um recurso do interpretador de tempo de execução que, em vez de interpretar bytecode toda vez que um método é invocado, compilará o bytecode nas instruções de código de máquina do executável e invocará esse código. código de objeto em vez disso. Idealmente, a eficiência da execução do código objeto superará a ineficiência de recompilar o programa toda vez que ele for executado.

Um compilador JIT é executado depois que o programa é iniciado e compila o código (geralmente bytecode ou algum tipo de instruções de VM) rapidamente (ou just-in-time, como é chamado) em um formulário que normalmente é mais rápido, normalmente conjunto de instruções. Um JIT tem acesso a informações de tempo de execução dinâmicas, enquanto um compilador padrão não faz e pode fazer otimizações melhores, como funções inline que são usadas com freqüência.

Isso está em contraste com um compilador tradicional que compila todo o código para a linguagem de máquina antes que o programa seja executado pela primeira vez.

Parafraseando, os compiladores convencionais constroem o programa inteiro como um arquivo EXE ANTES da primeira vez que você o executa. Para programas de estilo mais recentes, um assembly é gerado com pseudocódigo (p-code). Somente depois de executar o programa no sistema operacional (por exemplo, clicando duas vezes em seu ícone), o compilador (JIT) entrará em ação e gerará o código de máquina (código m) que o processador baseado em Intel ou o que entender.

## Cenário típico:

O código fonte é completamente convertido em código de máquina

## Cenário JIT:

O código fonte será convertido em linguagem assembly como estrutura \[para ex IL (linguagem intermediária) para C #, ByteCode para java\].

O código intermediário é convertido em linguagem de máquina apenas quando os códigos requeridos pelos aplicativos são convertidos somente em código de máquina.

## Comparação JIT vs Non-JIT:

No JIT nem todo o código é convertido em código de máquina primeiro uma parte do código que é necessário será convertida em código de máquina, então se um método ou funcionalidade chamado não estiver na máquina, então isso será transformado em código de máquina… reduz o ônus sobre a CPU. Como o código da máquina será gerado no tempo de execução ... o compilador JIT produzirá código de máquina que é otimizado para executar a arquitetura da CPU da máquina. Exemplos de JIT:

No Java, o JIT está na JVM (Java Virtual Machine) Em C # está no CLR (Common Language Runtime) No Android, ele está em DVM (Dalvik Virtual Machine) ou ART (Android RunTime) em versões mais recentes.

Java Virtual Machine (JVM) (JVM executa bytecode) mantém uma contagem de quantas vezes uma função é executada. Se esta contagem exceder um limite predefinido, o JIT compila o código em linguagem de máquina que pode ser executada diretamente pelo processador (ao contrário do caso normal em que o javac compila o código em bytecode e depois java - o interpretador interpreta esse bytecode linha por linha código de máquina e executa).

Da próxima vez que esta função for calculada, o mesmo código compilado é executado novamente, diferentemente da interpretação normal, na qual o código é interpretado novamente linha por linha. Isso torna a execução mais rápida.

#### Mais Informações

*   [Compilação JIT (Wikipedia)](https://en.wikipedia.org/wiki/Just-in-time_compilation)
*   [Introdução ao JIT](https://eli.thegreenplace.net/2013/11/05/how-to-jit-an-introduction/)