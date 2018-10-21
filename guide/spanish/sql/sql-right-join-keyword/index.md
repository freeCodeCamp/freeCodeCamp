---
title: SQL Right Join
localeTitle: SQL Right Join
---
## SQL Right Join

### Ejemplo de uso

Para esta guía discutiremos el SQL RIGHT JOIN.

### Unirse a la derecha

La palabra clave RIGHT JOIN devuelve todos los registros de la tabla derecha (tabla 2) y los registros coincidentes de la tabla izquierda (tabla 1). El resultado es NULL desde el lado izquierdo, cuando no hay coincidencia.

```sql
SELECT * 
 FROM table1 
 RIGHT JOIN table2 
 ON table1.column_name = table2.column_name; 
```

### Lista completa de tablas para referencia

Alimentos o datos de la mesa IZQUIERDA

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

texto + ------------ + --------------- + -------------- + | IDENTIFICACIÓN DE LA EMPRESA _|_ NOMBRE _DE_ LA _EMPRESA_ | COMPANY\_CITY | + ------------ + --------------- + -------------- + | 18 | Ordenar todo | Boston | | 15 | Jack Hill Ltd | Londres | | 16 | Akas Foods | Delhi | | 17 | Los sibaritas | Londres | | 19 | Sip-n-Bite. | Nueva york | + ------------ + --------------- + -------------- +
```
To get company name from company table and company ID, item name columns from foods table, the following SQL statement can be used: 
```

sql SELECCIONE la _identificación de company.company_ , nombre de _company.company_ , company.company _city, foods.company_ id, foods.item _name De la compañia JUSTE DERECHO comidas ON company.company_ id = foods.company\_id;
```
OUTPUT 
```

texto _ID DE_ LA _EMPRESA_ NOMBRE _DE_ LA COMPAÑÍA _CIUDAD IDENTIFICACIÓN DE LA COMPAÑÍA_ ITEM\_NAME

* * *

18 Pide todos los Boston 18 tortas de Jaffa 15 Jack Hill Ltd London 15 Pot Rice 15 Jack Hill Ltd London 15 BN Biscuit 15 Jack Hill Ltd Londres 15 Cheez-It 16 Akas Foods Delhi 16 Chex Mix 17 sibaritas. Londres 17 Mighty Munch NULL NULL NULL NULL Salt n Shake

\`\` \`