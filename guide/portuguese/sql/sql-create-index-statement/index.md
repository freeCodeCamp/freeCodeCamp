---
title: SQL CREATE INDEX Statement
localeTitle: Instrução SQL CREATE INDEX
---
## Instrução SQL CREATE INDEX

Essa instrução é usada para criar um "índice" em uma coluna em uma tabela existente.

Pontos-chave nos índices:

*   Eles são usados ​​para melhorar a eficiência das pesquisas de dados, apresentando os dados em uma ordem específica, ao unir tabelas (consulte os Guias "JOIN") e muito mais.
*   Um índice é um objeto "sistema", o que significa que é usado pelo gerenciador do banco de dados.
*   Parte desse uso é para o gerenciador do banco de dados atualizar o índice quando os dados usados ​​pelo índice forem alterados na tabela relacionada. Tenha isso em mente, pois à medida que o número de índices aumenta em um banco de dados, o desempenho geral do sistema pode ser afetado.
*   Se você achar que seus SQLs estão sendo lentos em uma determinada tabela ou tabelas, criar um índice é a primeira coisa a considerar para corrigir o problema.

Aqui está um exemplo da sintaxe da declaração Create Index. Observe que a sintaxe permite que um índice seja mais de uma coluna.

```sql
CREATE INDEX index_name 
 ON table_name (column1, column2, ...); 
```

Criando um novo índice no campo da tabela do aluno, programOfStudy. Para referência, aqui está a definição atual da tabela de alunos.

![image-1](https://github.com/SteveChevalier/guide-images/blob/master/create-index-statement01.JPG?raw=true)

Aqui está uma instrução para criar o índice e uma captura de tela da definição atualizada da tabela:

```sql
create index pStudyIndex 
 on student (programOfStudy); 
```

![image-1](https://github.com/SteveChevalier/guide-images/blob/master/create-index-statement02.JPG?raw=true)

No MySQL, você usa o comando ALTER TABLE para alterar e descartar índices. O MySQL Workbench também fornece ferramentas GUI para gerenciar índices.

Como acontece com todas essas coisas, há muito mais do que isso, por isso, consulte o manual do gerenciador de banco de dados e divirta-se experimentando opções diferentes.