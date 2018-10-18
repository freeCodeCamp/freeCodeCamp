---
title: SQL Inner Join Keyword
localeTitle: Palavra-chave de associação interna do SQL
---
## Palavra-chave de associação interna do SQL

### Exemplo de uso

Para este guia, discutiremos as junções SQL (INNER)

### Junte-se (mesmo que a junção interna)

A tabela do aluno estará na cláusula FROM, portanto, será uma tabela inicial ou ESQUERDA.

Vamos nos juntar à tabela de contatos dos alunos ou à tabela DIREITA. Você verá que todos os alunos aparecem que também estão na tabela de contatos. Conforme mostrado nas tabelas abaixo, o studentID 9 está na tabela do aluno, mas NÃO na tabela de contatos, portanto, não aparecerá em uma junção.

Instrução SQL

```sql
SELECT a.studentID, a.FullName, a.programOfStudy, 
 b.`student-phone-cell`, b.`student-US-zipcode` 
 FROM student AS a 
 INNER JOIN `student-contact-info` AS b ON a.studentID = b.studentID; 
```

Dados "cadastrados" 
```text 
+ ----------- + ------------------------ + --------------------- + -------------------- + ------------------- + 
|   studentID | FullName                 | programOfStudy        | student-phone-cell   | student-US-zipcode  | 
+ ----------- + ------------------------ + --------------------- + -------------------- + ------------------- + 
|           1 | Monique Davis            | Literatura            | 555-555-5551         |               97111 | 
|           2 | Teri Gutierrez           | Programação           | 555-555-5552         |               97112 | 
|           3 | Spencer Pautier          | Programação           | 555-555-5553         |               97113 | 
|           4 | Louis Ramsey             | Programação           | 555-555-5554         |               97114 | 
|           5 | Alvin Greene             | Programação           | 555-555-5555         |               97115 | 
|           6 | Sophie Freeman           | Programação           | 555-555-5556         |               97116 | 
|           7 | Edgar Frank "Ted" Codd   | Ciência da Computação | 555-555-5557         |               97117 | 
|           8 | Donald D. Chamberlin     | Ciência da Computação | 555-555-5558         |               97118 | 
+ ----------- + ------------------------ + --------------------- + -------------------- + ------------------- +
8 linhas no set (0,00 seg)
```
### Complete table listings for reference 
 
 SQL da mesa student
 
```sql 
SELECT a.studentID, a.FullName, sat_score, a.programOfStudy, schoolEmailAdr FROM student AS a;
```
student or mesa ESQUERDA

```text
+ ----------- + ------------------------ + ----------- + --------------------- + ------------------------ + 
| studentID   | FullName                 | sat_score   | programOfStudy        | schoolEmailAdr           | 
+ ----------- + ------------------------ + ----------- + --------------------- + ------------------------ + 
|           1 | Monique Davis            |         400 | Literatura            | Monique@someSchool.edu   | 
|           2 | Teri Gutierrez           |         800 | Programação           | Teri@someSchool.edu      | 
|           3 | Spencer Pautier          |        1000 | Programação           | Spencer@someSchool.edu   | 
|           4 | Louis Ramsey             |        1200 | Programação           | Louis@someSchool.edu     | 
|           5 | Alvin Greene             |        1200 | Programação           | Alvin@someSchool.edu     | 
|           6 | Sophie Freeman           |        1200 | Programação           | Sophie@someSchool.edu    | 
|           7 | Edgar Frank "Ted" Codd   |        2400 | Ciência da Computação | Edgar@someSchool.edu     | 
|           8 | Donald D. Chamberlin     |        2400 | Ciência da Computação | Donald@someSchool.edu    | 
|           9 | Raymond F. Boyce         |        2400 | Ciência da Computação | Raymond@someSchool.edu   | 
+ ----------- + ------------------------ + ----------- + --------------------- + ------------------------ + 
9 linhas no set (0,00 seg)
```

SQL da mesa student-contact-info

```sql
SELECT * FROM `student-contact-info` AS b;
```

mesa de contato do estudante ou mesa DIREITA 

```text 
+-----------+----------------------------------+--------------------+--------------------+ 
| studentID | studentEmailAddr                 | student-phone-cell | student-US-zipcode | 
+-----------+----------------------------------+--------------------+--------------------+ 
|         1 | Monique.Davis@freeCodeCamp.org   | 555-555-5551       |              97111 | 
|         2 | Teri.Gutierrez@freeCodeCamp.org  | 555-555-5552       |              97112 | 
|         3 | Spencer.Pautier@freeCodeCamp.org | 555-555-5553       |              97113 | 
|         4 | Louis.Ramsey@freeCodeCamp.org    | 555-555-5554       |              97114 | 
|         5 | Alvin.Green@freeCodeCamp.org     | 555-555-5555       |              97115 | 
|         6 | Sophie.Freeman@freeCodeCamp.org  | 555-555-5556       |              97116 | 
|         7 | Maximo.Smith@freeCodeCamp.org    | 555-555-5557       |              97117 | 
|         8 | Michael.Roach@freeCodeCamp.org   | 555-555-5558       |              97118 | 
+-----------+----------------------------------+--------------------+--------------------+ 
8 linhas no set (0,00 seg)
```

### Conclusão

Como acontece com todas essas coisas SQL, MUITO MAIS para elas é o que está neste guia introdutório.

Espero que pelo menos isso lhe dê o suficiente para começar.

Por favor, consulte o manual do seu gerenciador de banco de dados e divirta-se tentando opções diferentes.
