---
title: SQL Left Join
localeTitle: SQL Left Join
---
## SQL Left Join

### Exemplo de uso

Para este guia, discutiremos o SQL LEFT JOIN.

### Associação à esquerda

Usar a palavra-chave LEFT antes de JOIN faz com que o sistema comece com a tabela do aluno (LEFT), mas retornará NULL da tabela RIGHT se não houver linhas para o aluno da tabela LEFT.

Observe que o studentID 9 aparece aqui, mas os dados da tabela de contatos são mostrados apenas como NULL.

```sql
SELECT a.studentID, a.FullName, a.programOfStudy, 
 b.`student-phone-cell`, b.`student-US-zipcode` 
 FROM student AS a 
 LEFT JOIN `student-contact-info` AS b ON a.studentID = b.studentID; 
```

\`\` \`text + ----------- + ------------------------ + ------------ ------ + -------------------- + -------------------- + | studentID | FullName | programOfStudy | estudante-telefone-celular | student-US-zipcode | + ----------- + ------------------------ + ------------ ------ + -------------------- + -------------------- + | 1 | Monique Davis | Literatura 555-555-5551 | 97111 | | 2 | Teri Gutierrez | Programação | 555-555-5552 | 97112 | | 3 | Spencer Pautier | Programação | 555-555-5553 | 97113 | | 4 | Louis Ramsey | Programação | 555-555-5554 | 97114 | | 5 | Alvin Greene | Programação | 555-555-5555 | 97115 | | 6 | Sophie Freeman | Programação | 555-555-5556 | 97116 | | 7 | Edgar Frank "Ted" Codd | Ciência da Computação | 555-555-5557 | 97117 | | 8 | Donald D. Chamberlin | Ciência da Computação | 555-555-5558 | 97118 | | 9 | Raymond F. Boyce | Ciência da Computação | NULL | NULL | + ----------- + ------------------------ + ------------ ------ + -------------------- + -------------------- + 9 linhas no set (0,00 seg)
```
### Complete table listings for reference 
 student or LEFT table SQL 
```

sql SELECT a.studentID, a.FullName, sat\_score, a.programOfStudy, schoolEmailAdr DE estudante COMO;
```
student or LEFT table data 
```

texto + ----------- + ------------------------ + ----------- + ------------------ + ------------------------ + | studentID | FullName | sat\_score | programOfStudy | schoolEmailAdr | + ----------- + ------------------------ + ----------- + ------------------ + ------------------------ + | 1 | Monique Davis | 400 | Literatura Monique@someSchool.edu | | 2 | Teri Gutierrez | 800 | Programação | Teri@someSchool.edu | | 3 | Spencer Pautier | 1000 | Programação | Spencer@someSchool.edu | | 4 | Louis Ramsey | 1200 | Programação | Louis@someSchool.edu | | 5 | Alvin Greene | 1200 | Programação | Alvin@someSchool.edu | | 6 | Sophie Freeman | 1200 | Programação | Sophie@someSchool.edu | | 7 | Edgar Frank "Ted" Codd | 2400 | Ciência da Computação | Edgar@someSchool.edu | | 8 | Donald D. Chamberlin | 2400 | Ciência da Computação | Donald@someSchool.edu | | 9 | Raymond F. Boyce | 2400 | Ciência da Computação | Raymond@someSchool.edu | + ----------- + ------------------------ + ----------- + ------------------ + ------------------------ + 9 linhas no set (0,00 seg)

contato do aluno ou SQL da tabela RIGHT

```sql
select * from `student-contact-info` as b; 
```

contato com o aluno ou dados da tabela RIGHT `text +-----------+----------------------------------+--------------------+--------------------+ | studentID | studentEmailAddr | student-phone-cell | student-US-zipcode | +-----------+----------------------------------+--------------------+--------------------+ | 1 | Monique.Davis@freeCodeCamp.org | 555-555-5551 | 97111 | | 2 | Teri.Gutierrez@freeCodeCamp.org | 555-555-5552 | 97112 | | 3 | Spencer.Pautier@freeCodeCamp.org | 555-555-5553 | 97113 | | 4 | Louis.Ramsey@freeCodeCamp.org | 555-555-5554 | 97114 | | 5 | Alvin.Green@freeCodeCamp.org | 555-555-5555 | 97115 | | 6 | Sophie.Freeman@freeCodeCamp.org | 555-555-5556 | 97116 | | 7 | Maximo.Smith@freeCodeCamp.org | 555-555-5557 | 97117 | | 8 | Michael.Roach@freeCodeCamp.ort | 555-555-5558 | 97118 | +-----------+----------------------------------+--------------------+--------------------+ 8 rows in set (0.00 sec)`

Como acontece com todas essas coisas SQL, MUITO MAIS para elas é o que está neste guia introdutório.

Espero que pelo menos isso lhe dê o suficiente para começar.

Por favor, consulte o manual do seu gerenciador de banco de dados e divirta-se tentando opções diferentes.