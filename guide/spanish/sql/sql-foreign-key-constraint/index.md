---
title: SQL Foreign Key Constraint
localeTitle: Restricción de clave externa de SQL
---
## Restricción de clave externa de SQL

Una clave externa es una clave utilizada para vincular dos tablas. La tabla con la restricción de clave externa (también conocida como "tabla secundaria") está conectada a otra tabla (también conocida como "tabla principal"). La conexión es entre la restricción de clave externa de la tabla secundaria y la clave principal de la tabla primaria.

Las restricciones de clave externa se utilizan para ayudar a mantener la coherencia entre las tablas. Por ejemplo, si se elimina un registro de la tabla principal y la tabla secundaria tiene registros, el sistema también podría eliminar los registros secundarios.

También ayudan a evitar el ingreso de datos inexactos en la tabla secundaria al requerir que exista un registro de la tabla principal para cada registro que se ingrese en la tabla secundaria.

### Ejemplo de uso

Para esta guía, analizaremos más de cerca las tablas de estudiantes (padres) y de contacto de estudiantes (niños).

### La clave primaria de la tabla padre

Tenga en cuenta que la tabla de alumnos tiene una clave principal de una columna de ID de alumno.

```sql
SHOW index FROM student; 
```

```text
+---------+------------+----------+--------------+-------------+ 
 | Table   | Non_unique | Key_name | Seq_in_index | Column_name | 
 +---------+------------+----------+--------------+-------------+ 
 | student |          0 | PRIMARY  |            1 | studentID   | 
 +---------+------------+----------+--------------+-------------+ 
 1 row in set (0.00 sec) (some columns removed on the right for clarity) 
```

### Las claves primarias y externas de la mesa infantil.

La tabla de información de contacto del alumno tiene una clave principal que también es el ID de alumno. Esto se debe a que existe una relación de uno a uno entre las dos tablas. En otras palabras, esperamos solo un registro de contacto de un estudiante y un estudiante por estudiante.

```sql
SHOW index FROM `student-contact-info`; 
```

```text
+----------------------+------------+----------+--------------+-------------+ 
 | Table                | Non_unique | Key_name | Seq_in_index | Column_name | 
 +----------------------+------------+----------+--------------+-------------+ 
 | student-contact-info |          0 | PRIMARY  |            1 | studentID   | 
 +----------------------+------------+----------+--------------+-------------+ 
 1 row in set (0.00 sec) (some columns removed on the right for clarity) 
```

```sql
SELECT concat(table_name, '.', column_name) AS 'foreign key', 
 concat(referenced_table_name, '.', referenced_column_name) AS 'references' 
 FROM information_schema.key_column_usage 
 WHERE referenced_table_name IS NOT NULL 
 AND table_schema = 'fcc_sql_guides_database' 
 AND table_name = 'student-contact-info'; 
```

```text
+--------------------------------+-------------------+ 
 | foreign key                    | references        | 
 +--------------------------------+-------------------+ 
 | student-contact-info.studentID | student.studentID | 
 +--------------------------------+-------------------+ 
 1 row in set (0.00 sec) 
```

### Ejemplo de informe utilizando la tabla de padres de alumnos y la tabla de niños de contacto

```sql
SELECT a.studentID, a.FullName, a.programOfStudy, 
 b.`student-phone-cell`, b.`student-US-zipcode` 
 FROM student AS a 
 JOIN `student-contact-info` AS b ON a.studentID = b.studentID; 
```

```text
+-----------+------------------------+------------------+--------------------+--------------------+ 
 | studentID | FullName               | programOfStudy   | student-phone-cell | student-US-zipcode | 
 +-----------+------------------------+------------------+--------------------+--------------------+ 
 |         1 | Monique Davis          | Literature       | 555-555-5551       |              97111 | 
 |         2 | Teri Gutierrez         | Programming      | 555-555-5552       |              97112 | 
 |         3 | Spencer Pautier        | Programming      | 555-555-5553       |              97113 | 
 |         4 | Louis Ramsey           | Programming      | 555-555-5554       |              97114 | 
 |         5 | Alvin Greene           | Programming      | 555-555-5555       |              97115 | 
 |         6 | Sophie Freeman         | Programming      | 555-555-5556       |              97116 | 
 |         7 | Edgar Frank "Ted" Codd | Computer Science | 555-555-5557       |              97117 | 
 |         8 | Donald D. Chamberlin   | Computer Science | 555-555-5558       |              97118 | 
 +-----------+------------------------+------------------+--------------------+--------------------+ 
```

### Conclusión

Las restricciones de clave externa son una excelente herramienta de integridad de datos. Tómese el tiempo para aprenderlos bien.

Al igual que con todas estas cosas de SQL, hay MUCHO MÁS que lo que está en esta guía introductoria.

Espero que al menos esto te dé suficiente para empezar.

Consulte el manual de su administrador de base de datos y diviértase probando diferentes opciones usted mismo.