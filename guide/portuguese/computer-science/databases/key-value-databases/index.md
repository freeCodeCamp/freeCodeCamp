---
title: Key Value Databases
localeTitle: Bancos de dados de valor-chave
---
## Bancos de dados de valor-chave

Um banco de dados de valor-chave ou armazenamento de valor-chave é um tipo de [banco de](https://en.wikipedia.org/wiki/NoSQL) dados [NoSQL](https://en.wikipedia.org/wiki/NoSQL) que usa um armazenamento de chave / valor. Isso significa que os dados armazenados no banco de dados são uma coleção de pares de valores-chave.

Esse tipo de estrutura de dados é usado em muitas linguagens de programação. Os pares de valores-chave são comumente conhecidos como matrizes associativas, dicionários ou hash. Por exemplo, considere um dicionário de números de telefone:

| chave | valor | | ------------ | ------------- | | Rick | 1234555 | | Morty | 7754321 | | Verão | 5512377 |

### A chave

A `key` em um par de valores-chave deve ser exclusiva. Ter um identificador único permitirá que você acesse o valor associado a uma determinada chave.

Em teoria, a chave pode ser o que você quiser. Uma chave pode ser uma string, uma seqüência binária, uma imagem, entre outras. No entanto, alguns bancos de dados podem impor limitações ao tipo de chaves que podem ser usadas.

Aqui estão algumas recomendações:

*   As chaves devem seguir uma convenção para ter consistência. As chaves em um dicionário de números de telefone devem sempre ser nomes e não uma combinação de nomes, endereços de e-mail e números.
*   As chaves não devem ser muito longas ou você pode ter problemas de desempenho.
*   As chaves não devem ser muito curtas ou você pode ter problemas de legibilidade.

### O valor que

O `value` em um armazenamento de valor-chave pode ser o que você quiser. Isso inclui strings, números, código, uma imagem, uma lista ou até mesmo outro par de valores-chave. Alguns bancos de dados permitem restringir o tipo de dados que pode ser armazenado.

### Casos de Uso

Bancos de dados de valor-chave podem ser usados ​​em vários cenários. Aqui está uma lista dos aplicativos mais comuns:

*   Diretórios de telecomunicações.
*   Perfis de usuários e informações da sessão.
*   Conteúdo do carrinho de compras.
*   Detalhes do produto ou comentários.
*   Tabelas de encaminhamento do protocolo Internet (IP).
*   Serviços de status de saúde ou configuração.

### Exemplos

Aqui estão alguns exemplos de bancos de dados que usam a abordagem de valor-chave:

*   [Redis](https://redis.io)
*   [Banco de dados Oracle NoSQL](https://www.oracle.com/database/nosql/index.html)
*   [Cassandra](http://cassandra.apache.org) (híbrido entre bancos de dados orientados a valores-chave e coluna)
*   [Voldemort](http://www.project-voldemort.com/voldemort/)
*   [Loja Consul KV](https://www.consul.io/intro/getting-started/kv.html) (uma ferramenta com seu próprio armazenamento de valor-chave)

#### Mais Informações:

*   Bases de dados de valor-chave na [Wikipedia](https://en.wikipedia.org/wiki/Key-value_database)

O banco de dados Key-Value é um banco de dados simples que usa um mapa ou um dicionário como o modelo de dados fundamental em que cada chave é associada a um e apenas um valor em uma coleção e é o tipo mais flexível de banco de dados NoSQL.