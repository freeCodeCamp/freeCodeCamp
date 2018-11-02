---
title: SQL Union Operator
localeTitle: Operador da União SQL
---
## Operador da União SQL

### Descrição

Para este guia, discutiremos a seção Operador UNION da instrução SQL.

O operador UNION é usado para combinar os resultados de várias instruções select em um conjunto de resultados.

As instruções SQL devem ter o mesmo número de colunas na instrução Select.

### Exemplo Básico

Instrução SQL

```sql
SELECT 'aaaaa' 
 UNION 
 SELECT 'bbbbbbbbb'; 
```

Saída

```text
+-----------+ 
 | aaaaa     | 
 +-----------+ 
 | aaaaa     | 
 | bbbbbbbbb | 
 +-----------+ 
 2 rows in set (0.00 sec) 
```

### Exemplo usando as tabelas dos alunos

Instrução SQL

```sql
SELECT StudentID, FullName FROM student WHERE studentID BETWEEN 1 AND 5 
 UNION 
 SELECT studentID, studentEmailAddr FROM `student-contact-info` WHERE studentID BETWEEN 7 AND 8; 
```

Saída

\`\` \`text + ----------- + -------------------------------- + | StudentID | FullName | + ----------- + -------------------------------- + | 1 | Monique Davis | | 2 | Teri Gutierrez | | 3 | Spencer Pautier | | 4 | Louis Ramsey | | 5 | Alvin Greene | | 7 | Maximo.Smith@freeCodeCamp.org | | 8 | Michael.Roach@freeCodeCamp.ort | + ----------- + -------------------------------- + 7 linhas no set (0,00 seg)
```
## SQL UNION ALL Operator 
 
 The UNION ALL operator is an extension to UNION operator where it should result you a A+B of rows in the ouptput assuming A and B is your input, in simple terms UNION ALL doesn't deduplicate. 
 
 
 ### Basic Syntax 
 
 SQL Statement 
```

sql SELECT expressão1, expressão2,… expressão _n FROM tabelas \[WHERE condições\] UNION ALL SELECT expressão1, expressão2,… expressão_ n FROM tabelas \[WHERE condições\]; \`\` \`

Como acontece com todas essas coisas SQL, MUITO MAIS para elas é o que está neste guia introdutório.

Espero que pelo menos isso lhe dê o suficiente para começar.

Por favor, consulte o manual do seu gerenciador de banco de dados e divirta-se tentando opções diferentes.