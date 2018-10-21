---
title: SQL Joins
localeTitle: Junções SQL
---
## Junções SQL

### Exemplo de uso

Para este guia, discutiremos a seção JOIN da instrução SQL.

### Sintaxe SQL com foco em Join

```sql
SELECT col1, col2, col3, etc.... 
 FROM  tableNameOne AS a 
 JOIN tableNameTwo AS b ON a.primeKey = b.primeKey 
 etc... 
```

A instrução JOIN poderia ser apenas JOIN ou INNER JOIN, que são os mesmos, ou LEFT JOIN (descrito abaixo).

### Tipos diferentes de JOIN

*   (JUNÇÃO INTERNA
*   Retorna registros que possuem valores correspondentes nas duas tabelas
*   À ESQUERDA (EXTERIOR)
*   Retorna todos os registros da tabela da esquerda e os registros correspondentes da tabela da direita
*   À DIREITA (EXTERIOR)
*   Retorna todos os registros da tabela da direita e os registros correspondentes da tabela da esquerda
*   FULL (EXTERIOR) JUNTAR
*   Retorna todos os registros quando há uma correspondência na tabela esquerda ou direita

### Junte-se

A tabela do aluno estará na cláusula FROM, portanto, será uma tabela inicial ou LEFT.

Vamos nos juntar à tabela de contatos dos alunos ou à tabela DIREITA.

Você verá que todos os alunos aparecem que também estão na tabela de contatos.

Conforme mostrado nas tabelas abaixo, o studentID 9 está na tabela do aluno, mas NÃO na tabela de contatos, portanto, não aparecerá em uma junção.

Instrução SQL

```sql
SELECT a.studentID, a.FullName, a.programOfStudy, 
 b.`student-phone-cell`, b.`student-US-zipcode` 
 FROM student AS a 
 JOIN `student-contact-info` AS b ON a.studentID = b.studentID; 
```

Dados "cadastrados": \`\` \`text + ----------- + ------------------------ + ------------ ------ + -------------------- + -------------------- + | studentID | FullName | programOfStudy | estudante-telefone-celular | student-US-zipcode | + ----------- + ------------------------ + ------------ ------ + -------------------- + -------------------- + | 1 | Monique Davis | Literatura 555-555-5551 | 97111 | | 2 | Teri Gutierrez | Programação | 555-555-5552 | 97112 | | 3 | Spencer Pautier | Programação | 555-555-5553 | 97113 | | 4 | Louis Ramsey | Programação | 555-555-5554 | 97114 | | 5 | Alvin Greene | Programação | 555-555-5555 | 97115 | | 6 | Sophie Freeman | Programação | 555-555-5556 | 97116 | | 7 | Edgar Frank "Ted" Codd | Ciência da Computação | 555-555-5557 | 97117 | | 8 | Donald D. Chamberlin | Ciência da Computação | 555-555-5558 | 97118 | + ----------- + ------------------------ + ------------ ------ + -------------------- + -------------------- +
```
### Left Join 
 Using the keyword LEFT before JOIN causes the system to start with the student (LEFT) table but will return NULL from the RIGHT table if there are no rows for the LEFT table student. 
 
 Note that studentID 9 appears here but the data from the contact table is just shown as NULL. 
```

sql SELECT a.studentID, a.FullName, a.programOfStudy, b. `student-phone-cell` , b. `student-US-zipcode` DO aluno como um LEFT JOIN `student-contact-info` AS b ON a.studentID = b.studentID;
```
``` text 
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
 |         9 | Raymond F. Boyce       | Computer Science | NULL               |               NULL | 
 +-----------+------------------------+------------------+--------------------+--------------------+ 
 9 rows in set (0.00 sec) 
```

### Lista completa de tabelas para referência

Listagens da tabela de alunos

```sql
SELECT a.studentID, a.FullName, sat_score, a.programOfStudy, schoolEmailAdr 
 FROM student AS a; 
```

estudante ou mesa LEFT

```text
+-----------+------------------------+-----------+------------------+------------------------+ 
 | studentID | FullName               | sat_score | programOfStudy   | schoolEmailAdr         | 
 +-----------+------------------------+-----------+------------------+------------------------+ 
 |         1 | Monique Davis          |       400 | Literature       | Monique@someSchool.edu | 
 |         2 | Teri Gutierrez         |       800 | Programming      | Teri@someSchool.edu    | 
 |         3 | Spencer Pautier        |      1000 | Programming      | Spencer@someSchool.edu | 
 |         4 | Louis Ramsey           |      1200 | Programming      | Louis@someSchool.edu   | 
 |         5 | Alvin Greene           |      1200 | Programming      | Alvin@someSchool.edu   | 
 |         6 | Sophie Freeman         |      1200 | Programming      | Sophie@someSchool.edu  | 
 |         7 | Edgar Frank "Ted" Codd |      2400 | Computer Science | Edgar@someSchool.edu   | 
 |         8 | Donald D. Chamberlin   |      2400 | Computer Science | Donald@someSchool.edu  | 
 |         9 | Raymond F. Boyce       |      2400 | Computer Science | Raymond@someSchool.edu | 
 +-----------+------------------------+-----------+------------------+------------------------+ 
 9 rows in set (0.00 sec) 
```

sql SELECT \* de `student-contact-info` AS b;
```
student contact or RIGHT table 
```

texto + ----------- + ---------------------------------- + - ------------------ + -------------------- + | studentID | studentEmailAddr | estudante-telefone-celular | student-US-zipcode | + ----------- + ---------------------------------- + - ------------------ + -------------------- + | 1 | Monique.Davis@freeCodeCamp.org | 555-555-5551 | 97111 | | 2 | Teri.Gutierrez@freeCodeCamp.org | 555-555-5552 | 97112 | | 3 | Spencer.Pautier@freeCodeCamp.org | 555-555-5553 | 97113 | | 4 | Louis.Ramsey@freeCodeCamp.org | 555-555-5554 | 97114 | | 5 | Alvin.Green@freeCodeCamp.org | 555-555-5555 | 97115 | | 6 | Sophie.Freeman@freeCodeCamp.org | 555-555-5556 | 97116 | | 7 | Maximo.Smith@freeCodeCamp.org | 555-555-5557 | 97117 | | 8 | Michael.Roach@freeCodeCamp.ort | 555-555-5558 | 97118 | + ----------- + ---------------------------------- + - ------------------ + -------------------- + 8 linhas no set (0,00 seg) \`\` \`

Como acontece com todas essas coisas SQL, MUITO MAIS para elas é o que está neste guia introdutório.

Espero que pelo menos isso lhe dê o suficiente para começar.

Por favor, consulte o manual do seu gerenciador de banco de dados e divirta-se tentando opções diferentes.