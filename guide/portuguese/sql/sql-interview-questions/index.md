---
title: SQL Interview Questions
localeTitle: Perguntas da entrevista do SQL
---
## Perguntas da entrevista do SQL

### O que é uma junção interna no SQL?

Este é o tipo padrão de junção se nenhuma junção for especificada. Ele retorna todas as linhas nas quais há pelo menos uma correspondência nas duas tabelas.

```sql
SELECT * FROM A x JOIN B y ON y.aId = x.Id 
```

### O que é uma junção esquerda no SQL?

Uma junção esquerda retorna todas as linhas da tabela à esquerda e as linhas correspondentes da tabela da direita. Linhas na tabela da esquerda serão retornadas mesmo se não houver correspondência na tabela à direita. As linhas da tabela à esquerda sem correspondência na tabela à direita terão `null` para os valores da tabela à direita.

```sql
SELECT * FROM A x LEFT JOIN B y ON y.aId = x.Id 
```

### O que é uma junção certa no SQL?

Uma junção direita retorna todas as linhas da tabela da direita e as linhas correspondentes da tabela da esquerda. Oposto a uma junção esquerda, isso retornará todas as linhas da tabela da direita, mesmo quando não houver correspondência na tabela à esquerda. As linhas na tabela da direita que não tiverem correspondência na tabela à esquerda terão valores `null` para as colunas da tabela à esquerda.

```sql
SELECT * FROM A x RIGHT JOIN B y ON y.aId = x.Id 
```

### O que é uma junção completa no SQL?

Uma junção completa retorna todas as linhas para as quais há correspondência em qualquer uma das tabelas. Portanto, se houver linhas na tabela à esquerda que não tenham correspondências na tabela à direita, elas serão incluídas. Assim como se houver linhas na tabela da direita que não tenham correspondências na tabela à esquerda, elas serão incluídas.

```sql
SELECT Customers.CustomerName, Orders.OrderID 
 FROM Customers 
 FULL OUTER JOIN Orders 
 ON Customers.CustomerID=Orders.CustomerID 
 ORDER BY Customers.CustomerName 
```

### Qual é o resultado do seguinte comando?

\`\` \` DROP VIEW view\_name
```
Here it'll be an error because we can't perform a DML operation on a view. 
 
 ### Can we perform a rollback after using ALTER command? 
 No, because ALTER is a DDL command and Oracle server performs an automatic COMMIT when the DDL statements are executed. 
 
 
 ### Which is the only constraint that enforces rules at column level? 
 NOT NULL is the only constraint that works at the column level. 
 
 
 ### What are the pseudocolumns in SQL? Give some examples? 
 A pseudocolumn is a function which returns a system generated value. The reason it is known as so because a pseudocolumn is an Oracle assigned value used in the same context as an Oracle database column but not stored on disk. 
```

Alguns exemplos são: ROWNUM, ROWID, USER, CURRVAL, NEXTVAL etc. \`\` \`

### Crie um usuário my723acct com a senha kmd26pt. Use os _espaços de tabela de dados_ do usuário _e de dados temporários fornecidos pelo PO8 e forneça a esse usuário 10M de espaço de armazenamento em_ dados do _usuário_ e 5M de espaço de armazenamento em temporary\_data.

`sql CREATE USER my723acct IDENTIFIED BY kmd26pt DEFAULT TABLESPACE user_data TEMPORARY TABLESPACE temporary_data QUOTA 10M on user_data QUOTA 5M on temporary_data`

### Crie as _tabelas de_ função de função e\_views.

`sql CREATE ROLE role_tables_and_views`

### Conceda à função da pergunta anterior os privilégios para se conectar ao banco de dados e os privilégios para criar tabelas e visualizações.

O privilégio de se conectar ao banco de dados é CREATE SESSION O privilégio de criar tabela é CREATE TABLE O privilégio de criar uma visão é CREATE VIEW `sql GRANT Create session, create table, create view TO role_tables_and_views`

### Conceda o papel anterior na questão para os usuários anny e rita

`sql GRANT role_tables_and_views TO anny, rita`

### Crie um usuário my723acct com a senha kmd26pt. Use os _espaços de tabela de dados_ do usuário _e de dados temporários fornecidos pelo PO8 e forneça a esse usuário 10M de espaço de armazenamento em_ dados do _usuário_ e 5M de espaço de armazenamento em temporary\_data.

`sql CREATE USER my723acct IDENTIFIED BY kmd26pt DEFAULT TABLESPACE user_data TEMPORARY TABLESPACE temporary_data QUOTA 10M on user_data QUOTA 5M on temporary_data`

### Crie as _tabelas de_ função de função e\_views.

`sql CREATE ROLE role_tables_and_views`

### Conceda à função da pergunta anterior os privilégios para se conectar ao banco de dados e os privilégios para criar tabelas e visualizações.

O privilégio de se conectar ao banco de dados é CREATE SESSION O privilégio de criar tabela é CREATE TABLE O privilégio de criar uma visão é CREATE VIEW `sql GRANT Create session, create table, create view TO role_tables_and_views`

### Conceda o papel anterior na questão para os usuários anny e rita

`sql GRANT role_tables_and_views TO anny, rita`

### Escreva um comando para mudar a senha do usuário rita de abcd para dfgh

`sql ALTER USER rita IDENTIFIED BY dfgh`

### Os usuários rita e anny não possuem privilégios SELECT na tabela INVENTORY que foi criada pela SCOTT. Escreva um comando para permitir que o SCOTT conceda aos usuários os privilégios SELECT nessas tabelas.

`sql GRANT select ON inventory TO rita, anny`

### A rita do usuário foi transferida e não precisa mais do privilégio que lhe foi concedido por meio das _tabelas de_ função de função e\_views. Escreva um comando para removê-la de seus privilégios anteriores, exceto que ela ainda poderia se conectar ao banco de dados.

`sql REVOKE select ON scott.inventory FROM rita REVOKE create table, create view FROM rita`

### O usuário rita que foi transferido está agora se mudando para outra empresa. Como os objetos que ela criou não são mais usados, escreva um comando para remover esse usuário e todos os seus objetos.

Aqui a opção CASCADE é necessária para remover todos os objetos do usuário no banco de dados. \`\` \`sql  
DROP USER rita CASCADE

### A rita do usuário foi transferida e não precisa mais do privilégio que lhe foi concedido por meio das _tabelas de_ função de função e\_views. Escreva um comando para removê-la de seus privilégios anteriores, exceto que ela ainda poderia se conectar ao banco de dados.

`sql REVOKE select ON scott.inventory FROM rita REVOKE create table, create view FROM rita`

### O usuário rita que foi transferido está agora se mudando para outra empresa. Como os objetos que ela criou não são mais usados, escreva um comando para remover esse usuário e todos os seus objetos.

Aqui a opção CASCADE é necessária para remover todos os objetos do usuário no banco de dados. \`\` \`sql  
DROP USER rita CASCADE
```
### Write SQL query to find the nth highest salary from table. 
```

sql  
SELECIONAR TOP 1 Salário DE ( SELECT DISTINCT TOP N Salary FROM Employee ORDER BY Salário DESC ) ORDER BY Salário ASC \`\` \`