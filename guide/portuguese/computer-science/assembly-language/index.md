---
title: Assembly Language
localeTitle: Linguagem Assembly
---
## Linguagem Assembly

Assembly Language é a interface entre linguagens de nível superior (C ++, Java, etc) e código de máquina (binário). Para uma linguagem compilada, o compilador transforma código de nível superior em código de linguagem assembly.

Cada família de CPUs define seu próprio ISA (Instruction Set Architeture), um conjunto de instruções básicas que a CPU pode executar sem precisar de mais tradução ou transformação. O compilador decompõe instruções compostas compostas de nível superior em operações disponíveis no ISA. Alguns dos ISAS mais comuns atualmente em uso incluem MIPS, ARM, Intel x86, RISC-V.

Os montadores decompõem as instruções de montagem em suas respectivas representações binárias e substituem os endereços genéricos do código assembly pelo registro explícito e pelos endereços de memória do seu computador.

Código onde o tempo de execução e controle é crucial pode ser escrito diretamente no montador. No entanto, isso custa ao prolongar o tempo de desenvolvimento e dificultar o desenvolvimento. Também deve ser notado que tem havido uma grande quantidade de pesquisas para tornar os compiladores otimizarem o código que é gerado automaticamente.

O idioma de montagem é usado principalmente nas seguintes situações:

*   É necessário usar instruções de CPU não disponíveis em idiomas de nível superior.
*   Não há linguagem de alto nível para programar certos tipos de processadores.
*   Implementando um compilador para uma linguagem de nível superior em um novo ISA. ![Imagem dos níveis de código](https://raw.githubusercontent.com/colbybanbury/assemblyPicture/master/Screenshot%20from%202017-10-14%2014-03-06.png)

#### Mais Informações: