---
title: SQL CREATE INDEX Statement
localeTitle: Sentencia SQL CREATE INDEX
---
La sentencia CREATE INDEX se utiliza para crear índices en tablas.

Los índices se utilizan para recuperar datos de la base de datos muy rápidamente. Los usuarios no pueden ver los índices, solo se utilizan para acelerar las búsquedas / consultas.

> **Nota: la** actualización de una tabla con índices lleva más tiempo que la actualización de una tabla (porque los índices también necesitan una actualización). Por lo tanto, solo cree índices en columnas en las que se buscará con frecuencia.

#### Sintaxis de CREATE INDEX

Crea un índice en una tabla. Se permiten valores duplicados:

```sql
CREATE INDEX index_name 
 ON table_name (column1, column2, ...); 
```

#### Sintaxis de CREATE UNIQUE INDEX

Crea un índice único en una tabla. No se permiten valores duplicados:

```sql
CREATE UNIQUE INDEX index_name 
 ON table_name (column1, column2, ...); 
```

> **Nota:** la sintaxis para crear índices varía entre las diferentes bases de datos. Por lo tanto: compruebe la sintaxis para crear índices en su base de datos.

#### Ejemplo de CREAR ÍNDICE

La siguiente declaración SQL crea un índice llamado "idx\_lastname" en la columna "Apellido" en la tabla "Personas":

```sql
CREATE INDEX idx_lastname 
 ON Persons (LastName); 
```

Si desea crear un índice en una combinación de columnas, puede enumerar los nombres de las columnas entre paréntesis, separados por comas: CREAR ÍNDICE idx\_pname

```sql
ON Persons (LastName, FirstName); 
```

#### Declaración de DROP INDEX

La instrucción DROP INDEX se utiliza para eliminar un índice en una tabla.

**MS Access:**

```sql
DROP INDEX index_name ON table_name; 
```

**Servidor SQL:**

```sql
DROP INDEX table_name.index_name; 
```

**DB2 / Oracle:**

```sql
DROP INDEX index_name; 
```

**MySQL:**

```sql
ALTER TABLE table_name 
 DROP INDEX index_name; 

```