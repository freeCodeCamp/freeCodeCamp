---
title: SQL Drop View Statement
localeTitle: SQL Drop View Statement
---
## SQL Drop View Statement

### Introdução

Este guia abrange a instrução SQL para descartar (excluir) um ou mais objetos de visualização.

Uma vista é um objeto que apresenta dados de uma ou mais tabelas.

Nota: antes de excluir ou alterar dados ou objetos, lembre-se de ter um backup novo.

Nós cobriremos:

*   Usando o SQL para descartar uma tabela
*   Usando o ambiente de trabalho para descartar uma visão

Nós estaremos usando o MySQL para a demontration. Verifique o manual para esta função em outros gerenciadores de banco de dados.

Vamos descartar a visualização chamada `students_dropMe_v` , que foi criada apenas para essa finalidade.

### Sintaxe Básica

```sql
DROP VIEW [IF EXISTS] 
    view_name [, view_name] ... 
```

### Drop SQL

A parte se existir irá "interceptar" erros, caso a visualização não exista.

```sql
drop view if exists students_dropMe_v; 
```

A visão após a criação:

![image-1](https://github.com/SteveChevalier/guide-images/blob/master/drop-view01.JPG)

Acima comando executado e exibições mostradas:

![image-2](https://github.com/SteveChevalier/guide-images/blob/master/drop-view02.JPG)

### Usando o Workbench

Da bancada de trabalho: 1) Clique com o botão direito na vista para soltar 2) selecione drop view no menu 3) Selecione ou a) execute o SQL para revisar a instrução SQL a ser executada ou b) descarte novas

![image-3](https://github.com/SteveChevalier/guide-images/blob/master/drop-view03.JPG)

\* Como acontece com todas essas coisas SQL, MUITO MAIS para elas é o que está neste guia introdutório. Espero que pelo menos isso lhe dê o suficiente para começar.

Por favor, consulte o manual do seu gerenciador de banco de dados e divirta-se tentando opções diferentes. \*

### Extra

Aqui está o SQL que usei para criar a tabela que acabamos de eliminar:

```sql
create view `students_dropMe_v` as 
 select FullName, programOfStudy 
 from student 
 where programOfStudy = 'Programming'; 

```