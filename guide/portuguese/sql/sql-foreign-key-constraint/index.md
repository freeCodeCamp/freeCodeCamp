---
title: SQL Foreign Key Constraint
localeTitle: Restrição de chave estrangeira do SQL
---
## Restrição de chave estrangeira do SQL

Uma chave estrangeira é uma chave usada para vincular duas tabelas. A tabela com a restrição de chave estrangeira (também conhecida como "tabela filho") está conectada a outra tabela (também conhecida como "tabela pai"). A conexão é entre a restrição de chave externa da tabela filha e a chave primária da tabela pai.

Restrições de chave estrangeira são usadas para ajudar a manter a consistência entre as tabelas. Por exemplo, se um registro de tabela pai for excluído e a tabela filha tiver registros, o sistema também poderá excluir os registros filhos.

Eles também ajudam a evitar a inserção de dados imprecisos na tabela filha, exigindo que exista um registro de tabela pai para cada registro inserido na tabela filha.

### Exemplo de uso

Para este guia, vamos dar uma olhada mais de perto nas tabelas de alunos (pais) e de alunos (child).

### A chave primária da tabela pai

Observe que a tabela do aluno tem uma chave primária de uma coluna de studentID.

```sql
SHOW index FROM student; 
```

```text
+---------+------------+----------+--------------+-------------+ 
 | Table   | Non_unique | Key_name | Seq_in_index | Column_name | 
 +---------+------------+----------+--------------+-------------+ 
 | student |          0 | PRIMARY  |            1 | studentID   | 
 +---------+------------+----------+--------------+-------------+ 
 1 row in set (0.00 sec) (some columns removed on the right for clarity) 
```

### Chaves primárias e externas da tabela filho

A tabela de informações de contato do aluno possui uma chave primária que também é o studentID. Isso ocorre porque há um relacionamento um-para-um entre as duas tabelas. Em outras palavras, esperamos apenas um registro de contato de aluno e um aluno por aluno.

```sql
SHOW index FROM `student-contact-info`; 
```

```text
+----------------------+------------+----------+--------------+-------------+ 
 | Table                | Non_unique | Key_name | Seq_in_index | Column_name | 
 +----------------------+------------+----------+--------------+-------------+ 
 | student-contact-info |          0 | PRIMARY  |            1 | studentID   | 
 +----------------------+------------+----------+--------------+-------------+ 
 1 row in set (0.00 sec) (some columns removed on the right for clarity) 
```

```sql
SELECT concat(table_name, '.', column_name) AS 'foreign key', 
 concat(referenced_table_name, '.', referenced_column_name) AS 'references' 
 FROM information_schema.key_column_usage 
 WHERE referenced_table_name IS NOT NULL 
 AND table_schema = 'fcc_sql_guides_database' 
 AND table_name = 'student-contact-info'; 
```

```text
+--------------------------------+-------------------+ 
 | foreign key                    | references        | 
 +--------------------------------+-------------------+ 
 | student-contact-info.studentID | student.studentID | 
 +--------------------------------+-------------------+ 
 1 row in set (0.00 sec) 
```

### Exemplo de relatório usando a tabela pai do aluno e a tabela filha de contato

```sql
SELECT a.studentID, a.FullName, a.programOfStudy, 
 b.`student-phone-cell`, b.`student-US-zipcode` 
 FROM student AS a 
 JOIN `student-contact-info` AS b ON a.studentID = b.studentID; 
```

```text
+-----------+------------------------+------------------+--------------------+--------------------+ 
 | studentID | FullName               | programOfStudy   | student-phone-cell | student-US-zipcode | 
 +-----------+------------------------+------------------+--------------------+--------------------+ 
 |         1 | Monique Davis          | Literature       | 555-555-5551       |              97111 | 
 |         2 | Teri Gutierrez         | Programming      | 555-555-5552       |              97112 | 
 |         3 | Spencer Pautier        | Programming      | 555-555-5553       |              97113 | 
 |         4 | Louis Ramsey           | Programming      | 555-555-5554       |              97114 | 
 |         5 | Alvin Greene           | Programming      | 555-555-5555       |              97115 | 
 |         6 | Sophie Freeman         | Programming      | 555-555-5556       |              97116 | 
 |         7 | Edgar Frank "Ted" Codd | Computer Science | 555-555-5557       |              97117 | 
 |         8 | Donald D. Chamberlin   | Computer Science | 555-555-5558       |              97118 | 
 +-----------+------------------------+------------------+--------------------+--------------------+ 
```

### Conclusão

Restrições de chave estrangeira são uma ótima ferramenta de integridade de dados. Aproveite o tempo para aprendê-las bem.

Como acontece com todas essas coisas SQL, MUITO MAIS para elas é o que está neste guia introdutório.

Espero que pelo menos isso lhe dê o suficiente para começar.

Por favor, consulte o manual do seu gerenciador de banco de dados e divirta-se tentando opções diferentes.