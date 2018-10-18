---
title: SQL Insert into Statement
localeTitle: Inserção de SQL no Statement
---
## Inserção de SQL no Statement

Para inserir um registro em uma tabela, use a `INSERT INTO` .

Você pode fazer isso de duas maneiras, se quiser inserir valores apenas em algumas colunas, é necessário listar seus nomes, incluindo todas as colunas obrigatórias. A sintaxe é:

```sql
INSERT INTO table_name (column1, column2, column3, ...) 
 VALUES (value1, value2, value3, ...); 
```

A outra maneira é inserir valores em todas as colunas da tabela, não é necessário especificar os nomes das colunas. A sintaxe é:

```sql
INSERT INTO table_name 
 VALUES (value1, value2, value3, ...); 
```

Aqui está um exemplo inserindo um registro na tabela Person nos dois sentidos:

```sql
INSERT INTO Person 
 VALUES (1, 'John Lennon', '1940-10-09', 'M'); 
```

E

```sql
INSERT INTO Person(Id, Name, DateOfBirth, Gender) 
 VALUES (1, 'John Lennon', '1940-10-09', 'M'); 
```

Algumas versões SQL (por exemplo, MySQL) suportam a inserção de várias linhas de uma só vez. Por exemplo:

```sql
INSERT INTO Person(Id, Name, DateOfBirth, Gender) 
 VALUES (1, 'John Lennon', '1940-10-09', 'M'), (2, 'Paul McCartney', '1942-06-18', 'M'), 
 (3, 'George Harrison', '1943-02-25', 'M'), (4, 'Ringo Starr', '1940-07-07', 'M') 
```

Observe que toda a consulta original permanece intacta. Simplesmente adicionamos linhas de dados codificadas por parantesias e separadas por vírgulas.