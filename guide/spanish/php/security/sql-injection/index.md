---
title: SQL Injection
localeTitle: Inyección SQL
---
## Inyección SQL

Una vulnerabilidad en la aplicación causada por que el programador no sanea la entrada antes de incluirla en una consulta en la base de datos. Esto lleva a que el atacante tenga lectura completa y, con frecuencia, acceso de escritura a la base de datos. Con este tipo de acceso un atacante puede hacer cosas muy malas.

### Ejemplo de ataque de inyección SQL

El siguiente script PHP ejecuta una declaración SQL para obtener el correo electrónico de un usuario por ID. Sin embargo, la entrada no está saneada, por lo que es vulnerable a la inyección SQL.

```PHP
<?php 
 $input = $_GET['id']; 
 $dbserver = "localhost"; 
 $dbuser = "camper"; 
 $dbpass = "supersecretcampsitepassword"; 
 $dbname = "freecodecamp"; 
 
 $conn = new mysqli($dbserver, $dbuser, $dbpass, $dbname); 
 
 if ($conn->connect_error) { 
    die("Connection failed: " . $conn->connect_error); 
 } 
 
 $sql = "SELECT email FROM users WHERE id =" . $input; 
 
 $result = $conn->query($sql); 
 
 if ($result->num_rows > 0) { 
    while($row = $result->fetch_assoc()) { 
        echo $row["email"]; 
    } 
 } else { 
    echo "no results"; 
 } 
 
 $conn->close(); 
```

```SQL
SELECT email FROM users WHERE id = `$input`; 
```

Por lo tanto, con lo anterior, la entrada no se procesa (es decir, se envía la entrada con (int), por lo que solo se permite un número) ni se escapa, lo que permite que alguien realice un ataque de inyección SQL, por ejemplo, la URL `getemailbyuserid.php?id=1'; My Query Here-- -` le permitiría ejecutar consultas SQL arbitrarias con poco esfuerzo.

### Defendiendo su sitio web de los ataques de inyección de SQL en PHP

Existen algunos enfoques para defender su sitio web de los ataques de inyección de SQL. Estos enfoques son listas blancas, conversión de tipos y escape de caracteres.

**Lista blanca:** El enfoque de la lista blanca se utiliza en los casos en que solo se esperan unos pocos insumos. Puede listar cada entrada esperada en un conmutador PHP y luego tener un valor predeterminado para la entrada no válida. No tiene que preocuparse por un problema de conversión de tipos o por una derivación de escape de caracteres, pero la entrada permitida está extremadamente limitada. Sigue siendo una opción, ver el siguiente ejemplo.

```PHP
<?php 
 switch ($input) { 
  case "1": 
    //db query 1 
    break; 
  case "2": 
    //db query 2 
    break; 
  default: 
    // invalid input return error 
 } 
```

**Tipo de fundición:** El método de conversión de tipo se usa comúnmente para una aplicación que usa entrada numérica. Simplemente emita la entrada con `(int) $input` y solo se permitirá un valor numérico.

**Escape de personajes:** El enfoque de escape de caracteres escapará a caracteres como las comillas y barras proporcionadas por el usuario para evitar un ataque. Si está utilizando el servidor MySQL y la biblioteca MySQLi para acceder a su base de datos, la función `mysqli_real_escape_string($conn, $string)` tomará dos argumentos, la conexión MySQLi y la cadena y escapará adecuadamente de la entrada del usuario para bloquear un ataque de inyección sql . La función exacta que utiliza depende del tipo de base de datos y de la biblioteca php que está utilizando. Consulte la documentación de la biblioteca php para obtener más información sobre cómo escapar de las entradas de los usuarios.

#### Más información:

*   [Wiki OWASP - Inyección SQL](https://www.owasp.org/index.php/SQL_Injection)
*   [php.net SQL Injection manual](https://secure.php.net/manual/en/security.database.sql-injection.php)
*   [php.net MySQLi Real Escape String manual](https://secure.php.net/manual/en/mysqli.real-escape-string.php)