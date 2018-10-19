---
title: SQL Syntax
localeTitle: Sintaxe SQL
---
## Sintaxe SQL

### Introdução

Este guia fornece uma descrição básica e de alto nível da sintaxe para instruções SQL.

O SQL é um padrão internacional (ISO), mas você encontrará muitas diferenças entre as implementações. Este guia usa o MySQL como um exemplo. Se você usar um dos muitos outros gerenciadores de banco de dados relacional (DBMS), será necessário verificar o manual para esse DBMS, se necessário.

### O que vamos cobrir

*   Use (define qual banco de dados a instrução usará)
*   Cláusulas Select e From
*   Cláusula Where (and / or, IN, Between, LIKE)
*   Order By (ASC, DESC)
*   Group By e Having

### Como usar Use

Use é usado para selecionar o banco de dados que contém as tabelas para suas instruções SQL:

```sql
use fcc_sql_guides_database; -- select the guide sample database
```

### Cláusulas Select e From

A parte Select é normalmente usada para determinar quais colunas dos dados você deseja mostrar nos resultados. Há também opções que você pode usar para mostrar dados que não são uma coluna da tabela.

Este exemplo mostra duas colunas selecionadas da tabela "student" e duas colunas calculadas. A primeira das colunas calculadas é um número sem sentido e a outra é a data do sistema.

```sql
    select studentID, FullName, 3+2 as five, now() as currentDate 
    from student; 
```

![image-1](https://github.com/SteveChevalier/guide-images/blob/master/syntax01.JPG)

### Cláusula Where (and / or, IN, Between e LIKE)

A cláusula WHERE é usada para limitar o número de linhas retornadas.

Neste caso, todos os cinco destes será utilizada uma tanto ridícula cláusula Where.

Compare esse resultado com a instrução SQL acima para seguir essa lógica.

Serão apresentadas linhas que:

*   Ter IDs de alunos entre 1 e 5 (inclusive)
*   ou studentID = 8
*   ou ter "Maxmimo" no nome

O exemplo a seguir é semelhante, mas especifica ainda que, se algum aluno tiver determinadas pontuações do SAT (1000, 1400), ele não será apresentado:

```sql
    select studentID, FullName, sat_score, recordUpdated 
    from student 
    where ( 
        studentID between 1 and 5 
        or studentID = 8 
        or FullName like '%Maximo%' 
        ) 
        and sat_score NOT in (1000, 1400); 
```

![image-1](https://github.com/SteveChevalier/guide-images/blob/master/syntax02.JPG)

### Order By (ASC, DESC)

Order By nos dá uma maneira de classificar o conjunto de resultados por um ou mais dos itens na seção SELECT. Aqui está a mesma lista acima, mas classificada pelo nome completo dos alunos. A ordem de classificação padrão é ascendente (ASC), mas para classificar na ordem oposta (descendente) você usa DESC, como no exemplo abaixo:

```sql
    select studentID, FullName, sat_score 
    from student 
    where (studentID between 1 and 5 -- inclusive 
        or studentID = 8 
        or FullName like '%Maximo%') 
        and sat_score NOT in (1000, 1400) 
    order by FullName DESC; 
```

![image-1](https://github.com/SteveChevalier/guide-images/blob/master/syntax03.JPG)

### Group By e Having

O Group By nos dá uma maneira de combinar linhas e agregar dados. A cláusula Having é como a cláusula Where acima, exceto que ela age nos dados agrupados.

Esses dados são dos dados das contribuições da campanha que estamos usando em alguns desses guias.

Esta instrução SQL responde à pergunta: "quais candidatos receberam o maior número de contribuições (não $ quantidade, mas conta (\*)) em 2016, mas apenas aqueles que tiveram mais de 80 contribuições?"

A ordenação desse conjunto de dados em uma ordem descendente (DESC) coloca os candidatos com o maior número de contribuições no topo da lista.

```sql
    select Candidate, Election_year, sum(Total_$), count(*) 
    from combined_party_data 
    where Election_year = 2016 
    group by Candidate, Election_year 
    having count(*) > 80 
    order by count(*) DESC; 
```

![image-1](https://github.com/SteveChevalier/guide-images/blob/master/syntax04.JPG)

_Como acontece com todas essas coisas SQL, MUITO MAIS para elas é o que está neste guia introdutório. Espero que pelo menos isso lhe dê o suficiente para começar. Por favor, consulte o manual do seu gerenciador de banco de dados e divirta-se tentando opções diferentes._
