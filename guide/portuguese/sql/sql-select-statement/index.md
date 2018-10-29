---
title: SQL Select Statement
localeTitle: Instrução SQL Select
---
## Instrução SQL Select

## Selecionar e cláusulas

A parte SELECT de uma consulta é normalmente determinar quais colunas dos dados serão exibidos nos resultados. Há também opções que você pode aplicar para mostrar dados que não são uma coluna da tabela.

Este exemplo mostra três colunas selecionadas da tabela "estudante" e uma coluna calculada. O banco de dados armazena o studentID, FirstName e LastName do aluno. Podemos combinar as colunas Primeiro e Sobrenome para criar a coluna calculada FullName.

```sql
select studentID, FirstName, LastName, FirstName + ' ' + LastName as FullName 
 from student; 
```

```text
+-----------+-------------------+------------+------------------------+ 
 | studentID | FirstName         | LastName   | FullName               | 
 +-----------+-------------------+------------+------------------------+ 
 |         1 | Monique           | Davis      | Monique Davis          | 
 |         2 | Teri              | Gutierrez  | Teri Gutierrez         | 
 |         3 | Spencer           | Pautier    | Spencer Pautier        | 
 |         4 | Louis             | Ramsey     | Louis Ramsey           | 
 |         5 | Alvin             | Greene     | Alvin Greene           | 
 |         6 | Sophie            | Freeman    | Sophie Freeman         | 
 |         7 | Edgar Frank "Ted" | Codd       | Edgar Frank "Ted" Codd | 
 |         8 | Donald D.         | Chamberlin | Donald D. Chamberlin   | 
 |         9 | Raymond F.        | Boyce      | Raymond F. Boyce       | 
 +-----------+-------------------+------------+------------------------+ 
 9 rows in set (0.00 sec) 
```

\* Como acontece com todas essas coisas SQL, MUITO MAIS para elas é o que está neste guia introdutório.

Espero que pelo menos isso lhe dê o suficiente para começar.

Por favor, consulte o manual do seu gerenciador de banco de dados e divirta-se tentando opções diferentes.