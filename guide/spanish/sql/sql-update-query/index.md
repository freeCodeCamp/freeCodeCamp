---
title: SQL Update Query
localeTitle: Consulta de actualización de SQL
---
## Consulta de actualización de SQL

### Lo que puede hacer una consulta de actualización

Una consulta de actualización le da al programador que usa DBA o SQL la capacidad de actualizar muchos registros con un solo comando.

¡Importante consejo de seguridad! ¡Siempre tenga una copia de respaldo de lo que está a punto de cambiar ANTES de cambiarlo!

Esta guía:

*   agregar un nuevo campo a la mesa de estudiantes
*   prueba la lógica para actualizar ese campo con una dirección de correo electrónico asignada por la escuela
*   actualizar el nuevo campo

Aquí está la tabla de estudiantes al comenzar este proceso.

```sql
SELECT * FROM student; 
```

```text
+-----------+------------------------+-----------+------------------+---------------------+---------------------+ 
 | studentID | FullName               | sat_score | programOfStudy   | rcd_Created         | rcd_Updated         | 
 +-----------+------------------------+-----------+------------------+---------------------+---------------------+ 
 |         1 | Monique Davis          |       400 | Literature       | 2017-08-16 15:34:50 | 2017-08-16 15:34:50 | 
 |         2 | Teri Gutierrez         |       800 | Programming      | 2017-08-16 15:34:50 | 2017-08-16 15:34:50 | 
 |         3 | Spencer Pautier        |      1000 | Programming      | 2017-08-16 15:34:50 | 2017-08-16 15:34:50 | 
 |         4 | Louis Ramsey           |      1200 | Programming      | 2017-08-16 15:34:50 | 2017-08-16 15:34:50 | 
 |         5 | Alvin Greene           |      1200 | Programming      | 2017-08-16 15:34:50 | 2017-08-16 15:34:50 | 
 |         6 | Sophie Freeman         |      1200 | Programming      | 2017-08-16 15:34:50 | 2017-08-16 15:34:50 | 
 |         7 | Edgar Frank "Ted" Codd |      2400 | Computer Science | 2017-08-16 15:35:33 | 2017-08-16 15:35:33 | 
 |         8 | Donald D. Chamberlin   |      2400 | Computer Science | 2017-08-16 15:35:33 | 2017-08-16 15:35:33 | 
 |         9 | Raymond F. Boyce       |      2400 | Computer Science | 2017-08-16 15:35:33 | 2017-08-16 15:35:33 | 
 +-----------+------------------------+-----------+------------------+---------------------+---------------------+ 
 9 rows in set (0.00 sec) 
```

### Alterar la tabla y agregar un nuevo campo.

```sql
    ALTER TABLE `fcc_sql_guides_database`.`student` 
    ADD COLUMN `schoolEmailAdr` VARCHAR(125) NULL AFTER `programOfStudy`; 
```

La tabla de alumnos después de la alteración se ejecuta.

```text
mysql> SELECT FullName, sat_score, programOfStudy, schoolEmailAdr FROM student; 
 +------------------------+-----------+------------------+----------------+ 
 | FullName               | sat_score | programOfStudy   | schoolEmailAdr | 
 +------------------------+-----------+------------------+----------------+ 
 | Monique Davis          |       400 | Literature       | NULL           | 
 | Teri Gutierrez         |       800 | Programming      | NULL           | 
 | Spencer Pautier        |      1000 | Programming      | NULL           | 
 | Louis Ramsey           |      1200 | Programming      | NULL           | 
 | Alvin Greene           |      1200 | Programming      | NULL           | 
 | Sophie Freeman         |      1200 | Programming      | NULL           | 
 | Edgar Frank "Ted" Codd |      2400 | Computer Science | NULL           | 
 | Donald D. Chamberlin   |      2400 | Computer Science | NULL           | 
 | Raymond F. Boyce       |      2400 | Computer Science | NULL           | 
 +------------------------+-----------+------------------+----------------+ 
 9 rows in set (0.00 sec) 
```

### PRUEBA de la lógica (paso MUY importante!)

```sql
SELECT FullName, instr(FullName," ") AS firstSpacePosition, 
 concat(substring(FullName,1,instr(FullName," ")-1),"@someSchool.edu") AS schoolEmail 
 FROM student; 
```

```text
+------------------------+--------------------+------------------------+ 
 | FullName               | firstSpacePosition | schoolEmail            | 
 +------------------------+--------------------+------------------------+ 
 | Monique Davis          |                  8 | Monique@someSchool.edu | 
 | Teri Gutierrez         |                  5 | Teri@someSchool.edu    | 
 | Spencer Pautier        |                  8 | Spencer@someSchool.edu | 
 | Louis Ramsey           |                  6 | Louis@someSchool.edu   | 
 | Alvin Greene           |                  6 | Alvin@someSchool.edu   | 
 | Sophie Freeman         |                  7 | Sophie@someSchool.edu  | 
 | Edgar Frank "Ted" Codd |                  6 | Edgar@someSchool.edu   | 
 | Donald D. Chamberlin   |                  7 | Donald@someSchool.edu  | 
 | Raymond F. Boyce       |                  8 | Raymond@someSchool.edu | 
 +------------------------+--------------------+------------------------+ 
 9 rows in set (0.00 sec) 
```

_Una nota sobre concat (): en MySQL, este comando se usa para combinar cadenas, no así en otras versiones de SQL (consulte su manual). En este uso funciona así: la subcadena del campo FullName hasta el primer espacio, pero sin incluirlo, se combina con "@ someSchool.edu". En el mundo real, esto DEBERÍA ser mucho más complejo y debería asegurarse de que la dirección de correo electrónico sea única._

### Haciendo la actualizacion

Pretenderemos que esto es lo que queremos y actualizaremos la tabla con esta información:

```sql
UPDATE student SET schoolEmailAdr = concat(substring(FullName,1,instr(FullName," ")-1),"@someSchool.edu") 
 WHERE schoolEmailAdr is NULL; 
```

¡Éxito!

```text
mysql> SELECT FullName, sat_score, programOfStudy, schoolEmailAdr FROM student; 
 +------------------------+-----------+------------------+------------------------+ 
 | FullName               | sat_score | programOfStudy   | schoolEmailAdr         | 
 +------------------------+-----------+------------------+------------------------+ 
 | Monique Davis          |       400 | Literature       | Monique@someSchool.edu | 
 | Teri Gutierrez         |       800 | Programming      | Teri@someSchool.edu    | 
 | Spencer Pautier        |      1000 | Programming      | Spencer@someSchool.edu | 
 | Louis Ramsey           |      1200 | Programming      | Louis@someSchool.edu   | 
 | Alvin Greene           |      1200 | Programming      | Alvin@someSchool.edu   | 
 | Sophie Freeman         |      1200 | Programming      | Sophie@someSchool.edu  | 
 | Edgar Frank "Ted" Codd |      2400 | Computer Science | Edgar@someSchool.edu   | 
 | Donald D. Chamberlin   |      2400 | Computer Science | Donald@someSchool.edu  | 
 | Raymond F. Boyce       |      2400 | Computer Science | Raymond@someSchool.edu | 
 +------------------------+-----------+------------------+------------------------+ 
 9 rows in set (0.00 sec) 
```

Al igual que con todas estas cosas de SQL, hay MUCHO MÁS que lo que está en esta guía introductoria.

Espero que al menos esto te dé suficiente para empezar.

Consulte el manual de su administrador de base de datos y diviértase probando diferentes opciones usted mismo.