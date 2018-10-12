---
title: SQL Right Join
localeTitle: Junção direta do SQL
---
## Junção direta do SQL

### Exemplo de uso

Para este guia, discutiremos o SQL RIGHT JOIN.

### Junte-se direito

A palavra-chave RIGHT JOIN retorna todos os registros da tabela à direita (tabela 2) e os registros correspondentes da tabela à esquerda (tabela 1). O resultado é NULL do lado esquerdo, quando não há correspondência.

```sql
SELECT * 
 FROM table1 
 RIGHT JOIN table2 
 ON table1.column_name = table2.column_name; 
```

### Lista completa de tabelas para referência

comida ou dados da tabela LEFT

```text
+---------+--------------+-----------+------------+ 
 | ITEM_ID | ITEM_NAME    | ITEM_UNIT | COMPANY_ID | 
 +---------+--------------+-----------+------------+ 
 | 1       | Chex Mix     | Pcs       | 16         | 
 | 6       | Cheez-It     | Pcs       | 15         | 
 | 2       | BN Biscuit   | Pcs       | 15         | 
 | 3       | Mighty Munch | Pcs       | 17         | 
 | 4       | Pot Rice     | Pcs       | 15         | 
 | 5       | Jaffa Cakes  | Pcs       | 18         | 
 | 7       | Salt n Shake | Pcs       |            | 
 +---------+--------------+-----------+------------+ 
 
 
 
 company or RIGHT table data 
```

texto + ------------ + --------------- + -------------- + | _ID_ DA EMPRESA _|_ NOME _DA EMPRESA_ | COMPANY\_CITY | + ------------ + --------------- + -------------- + | 18 | Encomendar tudo | Boston | | 15 | Jack Hill Ltd | Londres | | 16 | Akas Foods | Deli | | 17 | Gastrônomos. | Londres | | 19 | sip-n-mordida. | Nova York | + ------------ + --------------- + -------------- +
```
To get company name from company table and company ID, item name columns from foods table, the following SQL statement can be used: 
```

sql SELECT company.company _id, company.company_ name, company.company _city, foods.company_ id, foods.item _name DA empresa DIREITO JOIN alimentos ON company.company_ id = foods.company\_id;
```
OUTPUT 
```

texto NOME DA _EMPRESA_ NOME DA EMPRESA _CIDADE DA_ EMPRESA _EMPRESA_ ID ITEM\_NAME

* * *

18 Peça Todos Boston 18 Jaffa Cakes 15 Jack Hill Ltd London 15 Arroz de Panela 15 Jack Hill Ltd Londres 15 BN Biscoito 15 Jack Hill Ltd Londres 15 Cheez-It 16 Akas Foods Delhi 16 Chex Mix 17 Foodies. Londres 17 poderoso Munch NULL NULL NULL NULL Salt n Agitar

\`\` \`