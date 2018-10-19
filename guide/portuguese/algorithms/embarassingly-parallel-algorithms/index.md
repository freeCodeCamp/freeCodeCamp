---
title: Embarassingly Parallel Algorithms
localeTitle: Algoritmos Paralisados ​​Abarassingly
---
## Algoritmos Paralisados ​​Abarassingly

Na programação paralela, um algoritmo embaraçosamente paralelo é aquele que não requer comunicação ou dependência entre os processos. Ao contrário dos problemas de computação distribuída que precisam de comunicação entre as tarefas - especialmente em resultados intermediários, os algoritmos embaraçosamente paralelos são fáceis de executar em farms de servidores que não possuem a infraestrutura especial usada em um verdadeiro cluster de supercomputador. Devido à natureza de algoritmos embaraçosamente paralelos, eles são adequados para grandes plataformas distribuídas baseadas na Internet e não sofrem de lentidão paralela. O oposto de problemas embaraçosamente paralelos são inerentemente problemas seriais, que não podem ser paralelizados de forma alguma. O caso ideal de algoritmos embaraçosamente paralelos pode ser resumido da seguinte forma:

*   Todos os subproblemas ou tarefas são definidos antes dos cálculos começarem.
*   Todas as sub-soluções são armazenadas em locais de memória independentes (variáveis, elementos da matriz).
*   Assim, o cálculo das sub-soluções é completamente independente.
*   Se as computações requerem alguma comunicação inicial ou final, então a chamamos de quase constrangedoramente paralela.

Muitos podem se perguntar a etimologia do termo “embaraçosamente”. Nesse caso, embaraçosamente não tem nada a ver com constrangimento; na verdade, isso significa uma superabundância - aqui referindo-se a problemas de paralelização que são “embaraçosamente fáceis”.

Um exemplo comum de um problema embaraçosamente paralelo é a renderização de vídeo 3D tratada por uma unidade de processamento gráfico, em que cada quadro ou pixel pode ser manipulado sem interdependência. Alguns outros exemplos seriam softwares de dobragem de proteínas que podem ser executados em qualquer computador, com cada máquina executando um pequeno trabalho, geração de todos os subconjuntos, números aleatórios e simulações de Monte Carlo.