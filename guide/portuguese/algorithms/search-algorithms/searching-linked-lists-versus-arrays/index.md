---
title: Searching Linked Lists Versus Arrays
localeTitle: Pesquisando Listas Vinculadas Versus Arrays
---
## Pesquisando Listas Vinculadas Versus Arrays

Suponha que você precise procurar um elemento em uma lista e array vinculados _não classificados_ . Nesse caso, você precisa fazer uma pesquisa linear (lembre-se, não classificada). Fazer uma pesquisa linear por um elemento em qualquer estrutura de dados será uma operação O (n).

Agora, se você tiver uma lista e uma matriz vinculadas _ordenadas_ , ainda poderá pesquisar em ambas as estruturas de dados no tempo O (log n) usando a Pesquisa binária. Embora, seja um pouco entediante codificar enquanto estiver usando listas vinculadas.

Listas vinculadas geralmente são preferidas em arrays, onde a inserção é uma operação freqüente. É mais fácil inserir em listas vinculadas, pois apenas um ponteiro é alterado. Mas, para inserir em uma matriz (o meio ou o começo), você precisa mover todos os elementos após o que você insere. Outro lugar onde você deve usar listas vinculadas é onde o tamanho é incerto (você não sabe o tamanho quando está começando), porque as matrizes têm tamanho fixo.

Os arrays fornecem algumas vantagens sobre as listas vinculadas:

1.  Acesso aleatório
2.  Menos memória em comparação com listas vinculadas
3.  Matrizes têm melhor localidade de cache, proporcionando melhor desempenho

Depende completamente do caso de uso para saber se matrizes ou listas vinculadas são melhores.

### Mais Informações:

*   A abordagem de um programador de olhar para a lista interligada versus matriz: [Geeks para Geeks](http://www.geeksforgeeks.org/programmers-approach-looking-array-vs-linked-list/)