---
title: SQL CREATE INDEX Statement
localeTitle: Comando SQL - CREATE INDEX
---
El comando `CREATE INDEX` se utiliza para crear índices en tablas.

Los índices se utilizan para recuperar datos de la base de datos muy rápidamente. Los usuarios no pueden ver los índices, solo se utilizan para acelerar las búsquedas / consultas.

> **Nota:** la actualización de una tabla con índices lleva más tiempo que la actualización de una tabla común debido a que los índices también necesitan actualizarse. Por lo tanto, solo cree índices en columnas en las que se buscará con frecuencia.

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

> **Nota:** la sintaxis para crear índices varía entre las diferentes bases de datos. Por favor compruebe la sintaxis para crear índices en su base de datos.

#### Ejemplos

El siguiente comando SQL crea un índice llamado "idx\_lastname" en la columna "LastName" en la tabla "Persons":

```sql
CREATE INDEX idx_lastname 
 ON Persons (LastName); 
```

Si desea crear un índice en una combinación de columnas, puede enumerar los nombres de las columnas entre paréntesis, separados por comas: 

```sql
CREATE INDEX idx\_pname
ON Persons (LastName, FirstName); 
```

#### Comando DROP INDEX

La instrucción `DROP INDEX` se utiliza para eliminar un índice en una tabla.

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
