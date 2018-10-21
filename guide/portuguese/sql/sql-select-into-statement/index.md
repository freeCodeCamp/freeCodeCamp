---
title: SQL Select into Statement
localeTitle: Seleção de SQL no Statement
---
## Seleção de SQL no Statement

A `SELECT INTO` é uma consulta que permite criar uma _nova_ tabela e preenchê-la com o conjunto de resultados de uma `SELECT statement` . Para adicionar dados a uma tabela existente, consulte a [instrução INSERT INTO](guides/src/pages/sql/sql-insert-into-select-statement/index.md) .

`SELECT INTO` pode ser usado quando você está combinando dados de várias tabelas ou exibições em uma nova tabela. 1 A tabela original não é afetada.

A sintaxe geral é:

```sql
SELECT column-names 
  INTO new-table-name 
  FROM table-name 
 WHERE EXISTS 
      (SELECT column-name 
         FROM table-name 
        WHERE condition) 
```

Este exemplo mostra um conjunto de uma tabela que foi "copiada" da tabela "Fornecedor" para uma nova tabela chamada SupplierUSA que contém o conjunto relacionado ao país da coluna de valor "EUA".

`sql SELECT * INTO SupplierUSA FROM Supplier WHERE Country = 'USA';` **Resultados** : 4 linhas afetadas 2

| ID | CompanyName | ContactName | Cidade | País | Telefone | | ---- | ----------------------------- |: ------------- -: | ------------- |: --------: |: --------------: | | 2 | Nova Orleans Cajun Delights | Shelley Burke | Nova Orleans | EUA | (100) 555-4822 | | 3 | Homestead da avó Kelly | Regina Murphy | Ann Arbor | EUA | (313) 555-5735 | | 16 | Cervejas Bigfoot | Cheryl Saylor | Curva | EUA | NULL | | 19 | Nova Inglaterra Seafood Cannery | Robb Merchant | Boston | EUA | (617) 555-3267 |

Por favor, consulte o manual do seu gerenciador de banco de dados e divirta-se tentando opções diferentes.

## Fontes

1.  (Microsoft - Inserindo linhas usando SELECT INTO) \[https://technet.microsoft.com/en-us/library/ms190750 (v = sql.105) .aspx\]
2.  (dofactory - Instrução SQL SELECT INTO) \[http://www.dofactory.com/sql/select-into\]