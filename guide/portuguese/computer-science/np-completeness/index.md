---
title: Np Completeness
localeTitle: Np Completeness
---
## Np Completeness

NP-Complete é uma propriedade de certos tipos de problemas. Se um problema for NP-Complete, significa que não há algoritmo eficiente (polinomial) para encontrar uma solução para ele rapidamente. No entanto, se uma solução nos for dada, podemos rapidamente (em tempo polinomial) verificar se está correta.

Para ser mais concreto, vamos examinar um problema conhecido do NP-Complete - o problema da soma do subconjunto. Digamos que temos um conjunto de inteiros {−7, −3, −2, 5, 8}. Queremos encontrar um subconjunto desses números inteiros cujos elementos somam 0. Como podemos fazer isso?

Uma maneira seria simplesmente enumerar todos os subconjuntos possíveis e verificar se seus elementos somam 0. Isso seria exponencialmente complexo.

E, de fato, não há algoritmo melhor conhecido, o que melhora o limite de tempo exponencial. É por isso que é classificado como um problema NP-Complete.

Existem muitos desses problemas conhecidos, além do problema de soma de subconjuntos que são conhecidos como NP-Complete. Se um algoritmo eficiente para um é encontrado, isso implica que podemos projetar um algoritmo eficiente para todos os problemas que são NP-Complete.

Se você tem um problema que pode ser provado ser NP-completo, você deve parar de tentar encontrar algoritmos mais eficientes para ele e, em vez disso, usar heurísticas para resolver o problema para a maioria dos casos de teste, ou resolver uma versão aproximada do problema. Ou talvez examine o problema que você está resolvendo para ver se não pode ser simplificado para algo que não é NP-Complete.

#### Mais Informações:

https://www.ics.uci.edu/~eppstein/161/960312.html https://stackoverflow.com/questions/210829/what-is-an-np-complete-in-computer-science