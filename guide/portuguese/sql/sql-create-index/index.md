---
title: SQL CREATE INDEX Statement
localeTitle: Instrução SQL CREATE INDEX
---
A instrução CREATE INDEX é usada para criar índices em tabelas.

Os índices são usados ​​para recuperar dados do banco de dados muito rapidamente. Os usuários não podem ver os índices, eles são usados ​​apenas para acelerar pesquisas / consultas.

> **Nota:** Atualizar uma tabela com índices leva mais tempo do que atualizar uma tabela sem (porque os índices também precisam de uma atualização). Portanto, crie apenas índices em colunas que serão pesquisadas com frequência.

#### Sintaxe CREATE INDEX

Cria um índice em uma tabela. Valores duplicados são permitidos:

```sql
CREATE INDEX index_name 
 ON table_name (column1, column2, ...); 
```

#### CRIAR SINTAXA DE ÍNDICE ÚNICO

Cria um índice exclusivo em uma tabela. Valores duplicados não são permitidos:

```sql
CREATE UNIQUE INDEX index_name 
 ON table_name (column1, column2, ...); 
```

> **Nota:** A sintaxe para criação de índices varia entre diferentes bancos de dados. Portanto: Verifique a sintaxe para criar índices em seu banco de dados.

#### Exemplo de CREATE INDEX

A instrução SQL abaixo cria um índice chamado "idx\_lastname" na coluna "LastName" na tabela "Persons":

```sql
CREATE INDEX idx_lastname 
 ON Persons (LastName); 
```

Se você quiser criar um índice em uma combinação de colunas, poderá listar os nomes das colunas entre parênteses, separados por vírgulas: CREATE INDEX idx\_pname

```sql
ON Persons (LastName, FirstName); 
```

#### Declaração DROP INDEX

A instrução DROP INDEX é usada para excluir um índice em uma tabela.

**MS Access:**

```sql
DROP INDEX index_name ON table_name; 
```

**Servidor SQL:**

```sql
DROP INDEX table_name.index_name; 
```

**DB2 / Oracle:**

```sql
DROP INDEX index_name; 
```

**MySQL:**

```sql
ALTER TABLE table_name 
 DROP INDEX index_name; 

```