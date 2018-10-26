---
title: SQL Primary Key Constraint
localeTitle: Restrição de chave primária de SQL
---
## Restrição de chave primária

### Introdução

Uma chave primária é uma coluna ou um conjunto de colunas que identifica exclusivamente cada linha de uma tabela.

É chamado de "restrição" porque faz com que o sistema restrinja os dados permitidos nessas colunas. Nesse caso….

*   para conter dados (NOT NULL)
*   seja ÚNICO de todas as outras linhas na tabela.
*   Cada tabela pode ter apenas uma chave primária

As chaves primárias são usadas principalmente para manter a integridade dos dados de cada linha.

Ele também permite que o sistema e os aplicativos tenham certeza de que estão lendo, atualizando e unindo os dados corretamente.

### Exemplo com tabela de criação

Aqui está um comando create table que também criará uma chave primária usando dois campos.

```sql
CREATE TABLE priKeyExample( 
 rcdKey_id_a INT NOT NULL, 
 rcdKeySeq_id INT NOT NULL, 
 someData varchar(256) NOT NULL, 
 PRIMARY KEY(rcdKey_id_a,rcdKeySeq_id)); 
```

### Exemplo com alter table

O existente deve ser excluído primeiro

```sql
DROP INDEX `primary` ON priKeyExample; 
```

Agora vamos adicionar o novo.

```sql
ALTER TABLE priKeyExample 
 ADD CONSTRAINT myPriKey PRIMARY KEY(rcdKey_id_a,rcdKeySeq_id); 
```

Como acontece com todas essas coisas SQL, MUITO MAIS para elas é o que está neste guia introdutório.

Espero que pelo menos isso lhe dê o suficiente para começar.

Por favor, consulte o manual do seu gerenciador de banco de dados e divirta-se tentando opções diferentes.