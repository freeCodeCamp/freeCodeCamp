---
title: Assembly Language
localeTitle: Linguagem Assembly
---
## Linguagem Assembly

Linguagem Assembly é a interface entre as linguagens de alto nível (C++, Java, etc) e o código de máquina (binário). Para uma linguagem compilada, o compilador transforma código de alto nível em código de linguagem assembly.

Cada família de CPUs define seu próprio ISA (Instruction Set Architecture), um conjunto de instruções básicas que a CPU pode executar sem precisar de mais tradução ou transformação. O compilador decompõe instruções compostas de alto nível em operações disponíveis no ISA. Alguns dos ISAS mais comuns atualmente em uso incluem MIPS, ARM, Intel x86, RISC-V.

Os montadores decompõem as instruções Assembly em suas respectivas representações binárias e substituem os endereços genéricos do código assembly por endereços explícitos de registradores e de memória do seu computador.

Código onde o tempo de execução e controle é crucial pode ser escrito diretamente em assembly. No entanto, isso tem o custo de prolongar o tempo de desenvolvimento e dificultar o desenvolvimento. Também deve ser notado que já houve uma grande quantidade de pesquisas para fazer os compiladores otimizarem o código que é gerado automaticamente.

A linguagem assembly é usada principalmente nas seguintes situações:

*   É necessário usar instruções de CPU não disponíveis em linguagens de alto nível.
*   Não há linguagem de alto nível para programar um certo tipo de processador.
*   Implementar um compilador para uma linguagem de alto nível em um novo ISA.

![Imagem dos níveis de código](https://raw.githubusercontent.com/colbybanbury/assemblyPicture/master/Screenshot%20from%202017-10-14%2014-03-06.png)

#### Mais Informações:
