---
title: SQL Create View Statement
localeTitle: SQL Crear vista de declaración
---
## SQL Crear vista de declaración

### ¿Qué es una vista?

Una vista es un objeto de base de datos que presenta datos existentes en una o más tablas. Las vistas se utilizan de forma similar a las tablas, pero no contienen ningún dato. Simplemente "apuntan" a los datos que existen en otros lugares (tablas o vistas, por ejemplo).

### ¿Por qué nos gustan?

*   Las vistas son una forma de limitar los datos presentados. Por ejemplo, los datos del departamento de recursos humanos se filtran para presentar solo información no confidencial. La información confidencial en este caso puede ser números de seguro social, sexo del empleado, tasa de pago, domicilio, etc.
*   Los datos complejos en más de una tabla se pueden combinar en una sola "vista". Esto puede hacer la vida más fácil para sus analistas de negocios y programadores.

### Consejos importantes de seguridad

*   Las vistas son gestionadas por el sistema. Cuando los datos en las tablas relacionadas se modifican, agregan o actualizan, el sistema actualiza la vista. Queremos usarlos solo cuando sea necesario para administrar el uso de los recursos del sistema.
*   En MySQL, los cambios en el diseño de la tabla (es decir, columnas nuevas o eliminadas) realizadas DESPUÉS de crear una vista no se actualizan en la vista en sí. La vista tendría que ser actualizada o recreada.
*   Las vistas son uno de los cuatro tipos de objetos de base de datos estándar. Los otros son tablas, procedimientos almacenados y funciones.
*   Las vistas generalmente se pueden tratar como lo haría con una tabla, pero las actualizaciones son limitadas o no están disponibles cuando la vista contiene más de una tabla.
*   Hay muchos otros detalles sobre las vistas que están más allá del alcance de esta guía introductoria. Pase tiempo con el manual de su administrador de base de datos y diviértase con este poderoso objeto SQL.

### Sintaxis de la declaración de crear vista (MySQL)

```sql
CREATE 
    [OR REPLACE] 
    [ALGORITHM = {UNDEFINED | MERGE | TEMPTABLE}] 
    [DEFINER = { user | CURRENT_USER }] 
    [SQL SECURITY { DEFINER | INVOKER }] 
    VIEW view_name [(column_list)] 
    AS select_statement 
    [WITH [CASCADED | LOCAL] CHECK OPTION] 
```

_Esta guía cubrirá esta parte de la declaración ..._

```sql
CREATE 
    VIEW view_name [(column_list)] 
    AS select_statement 
```

### Ejemplo de creación de vista desde las tablas de alumnos.

Notas:

*   El nombre de la vista tiene una "v" al final. Se recomienda que el nombre de la vista indique que es una vista que, de alguna manera, facilita la vida a los programadores y administradores de bases de datos. Tu tienda de TI debe tener sus propias reglas para nombrar objetos.
    
*   Las columnas en la vista están limitadas por SELECT y las filas de datos por la cláusula WHERE.
    
*   se requiere el carácter "\` "alrededor de los nombres de vista debido a la" - "en los nombres. MySQL informa de un error sin ellos.
    

```sql
create view `programming-students-v` as 
 select FullName, programOfStudy 
 from student 
 where programOfStudy = 'Programming'; 
 
 select * from `programming-students-v`; 
```

![imagen-1](https://github.com/SteveChevalier/guide-images/blob/master/create-view-statement01.JPG?raw=true)

### Ejemplo de uso de una vista para combinar datos de más de una tabla

Se agregó una tabla de datos demográficos de los estudiantes a la base de datos para demostrar este uso. Esta vista combinará estas tablas.

Notas:

*   Para "unir" las tablas, las tablas deben tener campos en común (generalmente claves primarias) que identifican de forma única cada fila. En este caso es la identificación del estudiante. (Más sobre esto en la guía de [uniones SQL](../sql-joins/index.md) .)
*   Observe el "alias" dado a cada tabla ("s" para el estudiante y "sc" para el contacto del estudiante). Esta es una herramienta para acortar los nombres de las tablas y facilitar la identificación de qué tabla se está utilizando. Es más fácil que escribir nombres largos de tablas repetidamente. En este ejemplo, fue obligatorio porque studentID es el mismo nombre de columna en ambas tablas, y el sistema presentaría un "error de nombre de columna ambiguo" sin especificar qué tabla usar.

![imagen-1](https://github.com/SteveChevalier/guide-images/blob/master/create-view-statement02.JPG?raw=true)

_Como con todas estas cosas, hay MUCHO MÁS para las Vistas. Consulte el manual de su administrador de base de datos y diviértase probando diferentes opciones usted mismo._