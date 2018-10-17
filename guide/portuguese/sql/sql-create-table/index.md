---
title: SQL Create Table
localeTitle: SQL Create Table
---
# SQL CREATE TABLE

## Introdução

Este guia é uma visão geral dos fundamentos das funções SQL `CREATE TABLE` .

Nós estaremos usando o MySQL para todos os exemplos através destes guias freeCodeCamp SQL. O MySQL é usado frequentemente em sites para o banco de dados de backend, 2) é grátis e é divertido e fácil de usar.

## Coberto neste guia

*   Criando um esquema, o contêiner para todos os nossos objetos de banco de dados.
*   Crie uma tabela para termos algo a alterar.
*   Criando uma tabela importando um arquivo CSV e alterando essa tabela
*   Criando uma tabela usando a ferramenta de bancada do MySQL

Fazemos a maior parte deste trabalho com instruções SQL na ferramenta de script do MySQL workbench. Também veremos como criar uma tabela usando a interface do ambiente de trabalho em vez de usar instruções SQL.

## Estrutura de alto nível de um banco de dados relacional

1.  Mais alto nível; O banco de dados; a instalação do sistema de banco de dados. Neste caso, é o MySQL. Chamado de “Local MySQL Router” nas capturas de tela acima.
2.  Em seguida é um esquema; um contêiner para os objetos necessários para gerenciar dados em um sistema de banco de dados relacional.
3.  Objetos que criamos (tabelas, índices, procedimentos armazenados, funções) para gerenciar o sistema e seus dados

![image-1](https://github.com/SteveChevalier/guide-images/blob/master/create_table01.JPG?raw=true)

## Criando um esquema MySQL

O esquema é um contêiner para os objetos necessários para gerenciar os dados de um determinado assunto ou processo. Mostramos exemplos à medida que avançamos neste guia.

Vamos criar o esquema para nosso aprendizado e teste usando o comando SQL;
```
create database fCC_alterTableGuide; 
```

Esta estrutura de esquema de instâncias antes de executar este comando

![image-2](https://github.com/SteveChevalier/guide-images/blob/master/create_table02.JPG?raw=true)

Esta estrutura de esquema de instâncias depois de executar a instrução SQL

![image-3](https://github.com/SteveChevalier/guide-images/blob/master/create_table03.JPG?raw=true)

## Criando uma tabela, adicione dados de teste com "insert", renomeie a tabela (alter)

Nós vamos criar uma tabela de alunos.

Os passos serão:

1.  certifique-se de que não temos a mesa já
    
2.  crie a mesa
    
3.  insira os dados de teste.
    

*   Tipos de dados: o nome do aluno é um campo de caractere limitado a 90 caracteres
*   O ID do aluno é um número (inteiro) (intervalo de -2147483648 a 2147483647). Essa será a chave primária da tabela e será incrementada automaticamente quando um registro for adicionado.
*   Haverá também dois campos de "carimbo de tempo" para jogar também

Criar declaração e exibição de resultados da execução;

![image-4](https://github.com/SteveChevalier/guide-images/blob/master/create_table04.JPG?raw=true)

Usando uma instrução Select, veremos que a tabela está lá, mas agora os registros foram adicionados.

![image-5](https://github.com/SteveChevalier/guide-images/blob/master/create_table05.JPG?raw=true)

Agora, para inserir alguns dados e ver como é nossa nova tabela com registros nela (e entender criar e atualizar registros de data e hora);

![image-6](https://github.com/SteveChevalier/guide-images/blob/master/create_table06.JPG?raw=true)

O primeiro registro de data e hora é o horário e os dados de criação e o segundo é a data e hora de atualização. Alterar um registro deve atualizar ts2, mas não ts1. Vamos dar uma olhada.

![image-7](https://github.com/SteveChevalier/guide-images/blob/master/create_table07.JPG?raw=true)

## Crie uma tabela com o MySql Workbench

Clique com o botão direito do mouse em "Tabelas" no esquema no qual você deseja colocar o novo arquivo. Selecione Criar Tabela.

![image-8](https://github.com/SteveChevalier/guide-images/blob/master/create_table08.JPG?raw=true)

Preencha o formulário conforme desejado e clique em Aplicar

![image-9](https://github.com/SteveChevalier/guide-images/blob/master/create_table09.JPG?raw=true)

## Criar tabela como selecionar (CTAS)

Uma maneira rápida de criar uma cópia de uma tabela, incluindo dados, é criar uma tabela como selecionar.

CREATE TABLE minha _tabela como (SELECT \* FROM orig_ tbl);

## Crie e preencha uma tabela importando um arquivo CSV

Clique com o botão direito do mouse em "Tabelas" no esquema no qual deseja que o novo arquivo seja colocado. Selecione Importação de dados da tabela.

![image-10](https://github.com/SteveChevalier/guide-images/blob/master/create_table10.JPG?raw=true)

Selecione o arquivo CSV para importar e clique em PRÓXIMO Normalmente você cria uma nova tabela a partir dos dados, seleciona as opções desejadas e clica em NEXT

![image-11](https://github.com/SteveChevalier/guide-images/blob/master/create_table11.JPG?raw=true)

Ajuste os tipos de dados conforme necessário e clique em PRÓXIMO

![image-12](https://github.com/SteveChevalier/guide-images/blob/master/create_table12.JPG?raw=true)

Clique em PRÓXIMO (nesta tela e no próximo que é exibido) para importar os dados para a tabela. Você verá o status de conclusão, revisar e clicar em FINISH

![image-13](https://github.com/SteveChevalier/guide-images/blob/master/create_table13.JPG?raw=true)

![image-14](https://github.com/SteveChevalier/guide-images/blob/master/create_table14.JPG?raw=true)

## Outro material

Há muito mais detalhes para cobrir este tópico, então instale o MySQL e divirta-se!

### Onde obter o MySQL

Tente \[este download para usuários do Windows \[(https://dev.mysql.com/downloads/windows/)

### Documentação do MySQL

*   [página de manual](https://dev.mysql.com/doc/refman/5.7/en/alter-table.html)
*   [exemplos do manual](https://dev.mysql.com/doc/refman/5.7/en/alter-table-examples.html)

### Documentação do SQL Server

*   [Microsoft Docs](https://docs.microsoft.com/en-us/sql/t-sql/statements/create-table-transact-sql)