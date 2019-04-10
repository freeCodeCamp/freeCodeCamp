---
title: Non-Relational-Databases
localeTitle: Bancos de dados não relacionais
---
## Quando usar

Se você está lidando com uma quantidade fenomenalmente enorme de dados, pode ser muito tedioso, e a probabilidade de erro (na forma de um problema de Incompatibilidade de Impedância de ORM) aumenta. Nessa situação, você pode precisar considerar ir com um banco de dados não relacional. Um banco de dados não relacional armazena dados sem mecanismos explícitos e estruturados para vincular dados de diferentes tabelas (ou buckets) entre si. Se o seu modelo de dados for muito complexo, ou se você tiver que desnormalizar seu esquema de banco de dados, os bancos de dados não relacionais podem ser o melhor caminho a percorrer.

Outras razões para escolher um banco de dados não relacional incluem:

*   A necessidade de armazenar matrizes serializadas em objetos JSON
*   Armazenando registros na mesma coleção que possuem diferentes campos ou atributos
*   Descobrir-se desnormalizando seu esquema de banco de dados ou codificando problemas de desempenho e escalabilidade horizontal
*   Problemas facilmente pré-definindo seu esquema por causa da natureza do seu modelo de dados

## Desvantagens

Em bancos de dados não relacionais, não há associações como haveria em bancos de dados relacionais. Isso significa que você precisa realizar várias consultas e unir os dados manualmente em seu código - e isso pode ficar muito feio, muito rápido.

## Bancos de Dados de Exemplo

*   MongoDB
*   NoSQL

## Referências

*   (https://www.pluralsight.com/blog/software-development/relational-non-relational-databases)
*   (https://en.wikipedia.org/wiki/NoSQL)