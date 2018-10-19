---
title: SQL Alter Table Statement
localeTitle: Instrução SQL Alter Table
---
## Guia SQL - ALTER TABLE

## Introdução

Este guia apresentará a você e tentará explicar algumas das noções básicas das funções de alteração da tabela SQL em um banco de dados relacional. **IMPORTANTE Dica de segurança: SEMPRE faça backup de seus dados antes de fazer alterações!**

Nós estaremos usando o MySQL para todos os exemplos ao longo deste guia freeCodeCamp SQL. As razões para selecionar o MySQL são 1) é muito comumente usado em sites para o banco de dados back-end, 2) é grátis e é divertido e fácil de usar.

## Coberto neste guia

Vamos usar as tabelas criadas no guia “CREATE TABLE”. Sinta-se à vontade para revisar este guia se você não estiver familiarizado com a criação de uma tabela.

*   Alterar a tabela criada irá alterá-la de várias maneiras diferentes.
*   Vamos mudar seu nome e modificar colunas
*   Adicione colunas (ao adicionar colunas, também analisaremos vários dos tipos de coluna mais importantes e seu uso).
*   Solte colunas (ou seja, remova a coluna).
*   Criando uma tabela importando um arquivo CSV e alterando essa tabela.
*   Criando e modificando tabelas com ferramentas de workbench do MySQL.

A maior parte disso será feita usando instruções SQL na ferramenta de script do MySQL workbench, mas também revisaremos como alterar uma tabela usando a interface do ambiente de trabalho em vez de com instruções SQL.

## A mesa antes de alterações:

![image-1](https://github.com/SteveChevalier/guide-images/blob/master/alter_table01a.JPG?raw=true)

Adicione colunas de data e endereço de e-mail (uma data e uma coluna de caracteres): ![image-1](https://github.com/SteveChevalier/guide-images/blob/master/alter_table01.JPG?raw=true)

Adicione uma coluna numérica (observe que ela foi adicionada em um local específico na tabela): ![image-1](https://github.com/SteveChevalier/guide-images/blob/master/alter_table02.JPG?raw=true)

Renomeie algumas colunas: ![image-1](https://github.com/SteveChevalier/guide-images/blob/master/alter_table03.JPG?raw=true)

Remova uma coluna: ![image-1](https://github.com/SteveChevalier/guide-images/blob/master/alter_table04.JPG?raw=true)

Você também pode usar a ferramenta workbench alter table. Basta clicar com o botão direito na tabela que você deseja alterar e alterar como desejar. ![image-1](https://github.com/SteveChevalier/guide-images/blob/master/alter_table05.JPG?raw=true)

Há muito mais que pode ser feito, verifique o manual do seu software de gerenciamento de banco de dados para saber mais.