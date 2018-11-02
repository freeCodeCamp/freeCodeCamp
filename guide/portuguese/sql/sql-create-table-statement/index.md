---
title: SQL Create Table Statement
localeTitle: Instrução Criar Tabela SQL
---
## Instrução Criar Tabela SQL

Uma tabela é um grupo de dados armazenados em um banco de dados.

Para criar uma tabela em um banco de dados, use a instrução `CREATE TABLE` . Você dá um nome à tabela e uma lista de colunas com seus tipos de dados.
```
CREATE TABLE TABLENAME(Attribute1 Datatype, Attribute2 Datatype,........); 
```

Aqui está um exemplo criando uma tabela chamada Person:

```sql
CREATE TABLE Person( 
  Id int not null, 
  Name varchar not null, 
  DateOfBirth date not null, 
  Gender bit not null, 
  PRIMARY KEY( Id ) 
 ); 
```

No exemplo acima, cada pessoa tem um nome, uma data de nascimento e um sexo. A coluna Id é a chave que identifica uma pessoa na tabela. Você usa a palavra-chave `PRIMARY KEY` para configurar uma ou mais colunas como uma chave primária.

Uma coluna pode `not null` ser `not null` ou `null` indicando se é obrigatória ou não.

#### Mais Informações: