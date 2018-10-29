---
title: SQL Primary Key Constraint
localeTitle: Restricción de clave primaria de SQL
---
## Restricción de clave primaria

### Introducción

Una clave principal es una columna o un conjunto de columnas que identifica de forma única cada fila de una tabla.

Se llama "restricción" porque hace que el sistema restrinja los datos permitidos en estas columnas. En este caso….

*   para contener datos (NO NULL)
*   ser ÚNICO de todas las demás filas de la tabla.
*   Cada tabla puede tener una sola clave primaria

Las claves primarias se utilizan principalmente para mantener la integridad de los datos de cada fila.

También permite que el sistema y las aplicaciones se aseguren de que estén leyendo, actualizando y uniendo los datos correctamente.

### Ejemplo con crear tabla

Aquí hay un comando de creación de tabla que también creará una clave principal utilizando dos campos.

```sql
CREATE TABLE priKeyExample( 
 rcdKey_id_a INT NOT NULL, 
 rcdKeySeq_id INT NOT NULL, 
 someData varchar(256) NOT NULL, 
 PRIMARY KEY(rcdKey_id_a,rcdKeySeq_id)); 
```

### Ejemplo con alterar tabla

El existente debe ser eliminado primero

```sql
DROP INDEX `primary` ON priKeyExample; 
```

Ahora añadiremos la nueva.

```sql
ALTER TABLE priKeyExample 
 ADD CONSTRAINT myPriKey PRIMARY KEY(rcdKey_id_a,rcdKeySeq_id); 
```

Al igual que con todas estas cosas de SQL, hay MUCHO MÁS que lo que está en esta guía introductoria.

Espero que al menos esto te dé suficiente para empezar.

Consulte el manual de su administrador de base de datos y diviértase probando diferentes opciones usted mismo.