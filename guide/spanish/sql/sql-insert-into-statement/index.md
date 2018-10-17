---
title: SQL Insert into Statement
localeTitle: Insertar SQL en la declaración
---
## Insertar SQL en la declaración

Para insertar un registro en una tabla, utilice la `INSERT INTO` .

Puede hacerlo de dos maneras, si desea insertar valores solo en algunas columnas, debe enumerar sus nombres, incluidas todas las columnas obligatorias. La sintaxis es:

```sql
INSERT INTO table_name (column1, column2, column3, ...) 
 VALUES (value1, value2, value3, ...); 
```

La otra forma es insertar valores en todas las columnas de la tabla, no es necesario especificar los nombres de las columnas. La sintaxis es:

```sql
INSERT INTO table_name 
 VALUES (value1, value2, value3, ...); 
```

Aquí hay un ejemplo que inserta un registro en la tabla Persona de dos maneras:

```sql
INSERT INTO Person 
 VALUES (1, 'John Lennon', '1940-10-09', 'M'); 
```

Y

```sql
INSERT INTO Person(Id, Name, DateOfBirth, Gender) 
 VALUES (1, 'John Lennon', '1940-10-09', 'M'); 
```

Algunas versiones de SQL (por ejemplo, MySQL) admiten la inserción de varias filas a la vez. Por ejemplo:

```sql
INSERT INTO Person(Id, Name, DateOfBirth, Gender) 
 VALUES (1, 'John Lennon', '1940-10-09', 'M'), (2, 'Paul McCartney', '1942-06-18', 'M'), 
 (3, 'George Harrison', '1943-02-25', 'M'), (4, 'Ringo Starr', '1940-07-07', 'M') 
```

Tenga en cuenta que toda la consulta original permanece intacta; simplemente agregamos filas de datos codificadas por paréntesis y separadas por comas.