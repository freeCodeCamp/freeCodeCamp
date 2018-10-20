---
title: SQL Union Operator
localeTitle: Operador SQL Union
---
## Operador SQL Union

### Descripción

Para esta guía, analizaremos la sección Operador UNION de la declaración SQL.

El operador UNION se utiliza para combinar los resultados de varias declaraciones de selección en un conjunto de resultados.

Las declaraciones de SQL deben tener el mismo número de columnas en su declaración de selección.

### Ejemplo básico

Declaración SQL

```sql
SELECT 'aaaaa' 
 UNION 
 SELECT 'bbbbbbbbb'; 
```

Salida

```text
+-----------+ 
 | aaaaa     | 
 +-----------+ 
 | aaaaa     | 
 | bbbbbbbbb | 
 +-----------+ 
 2 rows in set (0.00 sec) 
```

### Ejemplo usando las tablas de los estudiantes.

Declaración SQL

```sql
SELECT StudentID, FullName FROM student WHERE studentID BETWEEN 1 AND 5 
 UNION 
 SELECT studentID, studentEmailAddr FROM `student-contact-info` WHERE studentID BETWEEN 7 AND 8; 
```

Salida

\`\` \`texto + ----------- + -------------------------------- + | StudentID | Nombre completo | + ----------- + -------------------------------- + | 1 | Monique Davis | | 2 | Teri Gutierrez | | 3 | Spencer Pautier | | 4 | Louis Ramsey | | 5 | Alvin Greene | | 7 | Maximo.Smith@freeCodeCamp.org | | 8 | Michael.Roach@freeCodeCamp.ort | + ----------- + -------------------------------- + 7 filas en conjunto (0,00 seg)
```
## SQL UNION ALL Operator 
 
 The UNION ALL operator is an extension to UNION operator where it should result you a A+B of rows in the ouptput assuming A and B is your input, in simple terms UNION ALL doesn't deduplicate. 
 
 
 ### Basic Syntax 
 
 SQL Statement 
```
### Union All
Se usa la cláusula UNION ALL cuando se desea que si un registro de SQL A es el mismo del SQL B no se muestre en uno solo:

Si corremos el siguiente Query con union el resultado será:

```
SELECT CustomerName FROM Customers
WHERE City IN ('Paris','London')
AND  customername = 'Around the Horn'
union
SELECT CustomerName FROM Customers
WHERE City IN ('Paris','London')
AND  customername = 'Around the Horn';

Number of Records: 1
CustomerName
Around the Horn
```
Pero si corremos el mismo Query con UNION ALL el resultado no eliminará la columna repetida:
```
SELECT CustomerName FROM Customers
WHERE City IN ('Paris','London')
AND  customername = 'Around the Horn'
union all
SELECT CustomerName FROM Customers
WHERE City IN ('Paris','London')

Number of Records: 2
CustomerName
Around the Horn
Around the Horn
```

sql SELECCIONAR expresión1, expresión2, ... expresión _n DE las tablas \[DÓNDE condiciones\] UNION TODO SELECCIONAR expresión1, expresión2, ... expresión_ n DE las tablas \[DÓNDE condiciones\]; \`\` \`

Al igual que con todas estas cosas de SQL, hay MUCHO MÁS que lo que está en esta guía introductoria.

Espero que al menos esto te dé suficiente para empezar.

Consulte el manual de su administrador de base de datos y diviértase probando diferentes opciones usted mismo.

SQL para el union all se usó desde: https://www.w3schools.com/sql/trysql.asp?filename=trysql_op_in
