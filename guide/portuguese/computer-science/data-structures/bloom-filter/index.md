---
title: Bloom Filter
localeTitle: Filtro Bloom
---
## Descrição

Um filtro Bloom é uma estrutura de dados semelhante a um conjunto. O filtro Bloom permite a pergunta _. Este item é um membro do conjunto?_ para ser respondido rapidamente. O filtro nunca retornará _Não_ se o item estiver no conjunto; mas, pode retornar _Sim_ se o item não estiver no conjunto. Esta é uma desvantagem de usar um filtro Bloom, há uma chance de resultados positivos falsos ao verificar se um item está no conjunto. Uma vantagem em usar um filtro Bloom é que adicionar um item ao conjunto e verificar se o item está no conjunto é uma operação [O (n) de](https://guide.freecodecamp.org/algorithms/algorithm-performance) tempo constante.

## Exemplo

O exemplo a seguir usa um filtro Bloom para criar uma lista de amigos. A implementação de exemplo usa três [funções de hashing](https://guide.freecodecamp.org/miscellaneous/hash-tables-and-hashing-functions) . As funções de hashing ingerem uma string (um nome de amigo) e calculam um valor único para a string com base no número de pontos no filtro Bloom.

Crie o filtro como uma matriz de 10 índices. Um `0` indica que nenhum item está nesse índice.

`[0,0,0,0,0,0,0,0,0,0]`

Um usuário adiciona David à lista de amigos. A string ( `'David'` ) é colocada através de várias funções de hashing que retornam `0` , `4` e `8` , respectivamente. Os valores das funções de hashing são usados ​​para atualizar a matriz de filtros nesses índices.

Os índices de filtro são atualizados usando esses valores em hash. Um `1` indica que um item foi adicionado nesse índice.

`[1,0,0,0,1,0,0,0,1,0]`

Um usuário adiciona Rosie à lista de amigos. As funções hash retornam `3` , `4` e `6` para `'Rosie'` . Os índices de filtro são atualizados usando os valores de hash.

`[1,0,0,1,1,0,1,0,1,0]`

Há um cheque se Chuck for um membro da lista de amigos. A string `'Chuck'` é colocada através das funções de hashing retornando `1` , `3` e `6` . Quando a matriz de filtros é marcada nesses índices, ela retorna `0` , `1` e `1` . Como um índice tem um valor `0` , Chuck _definitivamente_ não é um membro da lista.

Há uma verificação se Maja é um membro da lista de amigos. A string `'Maja'` é colocada através das funções de hashing, retornando `0` , `6` e `8` . Quando a matriz de filtros é verificada nesses índices, ela retorna `1` , `1` e `1` . Como todos os três índices têm um valor de `1` , Maja já _pode_ ser um membro da lista. Este é um resultado falso positivo.

## Considerações

Os filtros Bloom permitem uma rápida pesquisa para determinar se um valor é _possivelmente_ um membro do conjunto ou _definitivamente_ não é um membro do conjunto. Quanto mais itens adicionados ao filtro Bloom, a taxa de resultados positivos falsos ao verificar se um item é um membro do conjunto aumentará. Uma maneira de diminuir a taxa de resultados falso-positivos é aumentar o tamanho da matriz. Embora isso seja um compromisso, quanto maior o array, maior será a memória. É necessário determinar uma taxa aceitável de resultados falsos positivos para um determinado tamanho de matriz.

## Leitura Adicional

[Algoritmo de pós-recomendação do Medium](https://blog.medium.com/what-are-bloom-filters-1ec2a50c68ff)

[Wikipedia nos filtros Bloom](https://en.wikipedia.org/wiki/Bloom_filter)