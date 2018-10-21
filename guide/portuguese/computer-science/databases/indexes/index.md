---
title: Indexes
localeTitle: Índices
---
## Índices

Um **índice de banco de dados** é uma estrutura de dados que melhora a eficiência das recuperações de dados em uma tabela de banco de dados. Uma tabela de banco de dados pode ter mais de um índice e um índice pode ser criado em uma ou mais colunas de uma tabela de banco de dados.

### Como os índices funcionam?

Agora imagine que você está em uma biblioteca onde os livros não estão organizados em uma ordem predeterminada. Se você tivesse a tarefa de encontrar um livro, teria de ir de prateleira em prateleira para localizá-lo. Isso pode ser bom quando há apenas algumas prateleiras de livros, mas o processo é muito demorado se for uma biblioteca de vários andares.

Por outro lado, assuma que os livros agora estão organizados pelo sobrenome do autor. Dado que você sabe o sobrenome do autor para o livro que está procurando, por exemplo "Carnegie", você pode procurar por "C" e depois pesquisar na prateleira específica. Você se salvou de passar por todas as prateleiras.

### O tradeoff

Conforme descrito anteriormente, um **índice** é uma estrutura de dados, portanto, ocupa espaço de armazenamento. Quanto mais índices são definidos, mais espaço de armazenamento é ocupado para manter a estrutura de dados. Outro custo vem na forma de atualizações adicionais (ou gravações) para manter os índices atualizados. Quando novos registros são adicionados a uma tabela que possui um índice, gravações adicionais são necessárias para atualizar a estrutura de dados do índice.

#### Mais Informações:

[Índice do banco de dados](https://en.wikipedia.org/wiki/Database_index)