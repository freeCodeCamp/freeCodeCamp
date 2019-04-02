---
title: Fault Tolerance
localeTitle: Tolerância ao erro
---
## Tolerância ao erro

Tolerância a falhas é a propriedade que permite que um sistema continue sua operação pretendida, possivelmente em um nível reduzido, em vez de falhar completamente, quando alguma parte do sistema falhar.

Um **banco de dados** é tolerante a falhas quando pode acessar um fragmento secundário quando o principal não está disponível.

Isto é conseguido através de:

*   Replicação de Banco de Dados
*   Detecção de falhas e failover

Um banco de dados que mantém várias cópias de todos os dados em diferentes nós físicos localizados em sub-sistemas físicos independentes, como racks de servidores e roteadores de rede, tem maior probabilidade de continuar operando quando a cópia primária dos dados está indisponível devido à sua capacidade de ler dados de várias replicações.

Em sistemas de distribuição em grande escala, torna-se cada vez mais importante ter sistemas confiáveis ​​de detecção de falhas que possam identificar unidades de armazenamento com falha e fornecer unidades de failover para maximizar o tempo de atividade do serviço.