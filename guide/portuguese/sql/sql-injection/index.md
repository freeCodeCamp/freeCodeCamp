---
title: SQL Injection
localeTitle: Injeção SQL
---
## Injeção SQL

A injeção de SQL é uma técnica mal-intencionada destinada a comprometer ou destruir bancos de dados. É uma das técnicas mais comuns de web-hacking.

A injeção de SQL é executada colocando códigos maliciosos nas instruções SQL por meio de uma entrada.

O exemplo a seguir é um snippet de código que recuperará um usuário de um banco de dados com base em um `AccountId` .
```
passedInAccountId = getRequestString("AccountId"); 
 sql = "select * from Accounts where AccountId = " + passedInAccountId; 
```

A injeção de SQL pode ser usada para comprometer esse código, injetando um `1=1;` declaração para `AccountId` .

`https://www.foo.com/get-user?AccountId="105 OR 1=1;"`

`1=1` será sempre avaliado como `TRUE` . Isso fará com que o código executado produza toda a tabela Contas.