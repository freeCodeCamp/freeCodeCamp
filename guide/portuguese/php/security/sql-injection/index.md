---
title: SQL Injection
localeTitle: Injeção SQL
---
## Injeção SQL

Uma vulnerabilidade no aplicativo causada pelo programador que não limpa a entrada antes de incluí-la em uma consulta no banco de dados. Isso faz com que o invasor tenha leitura completa e, com mais frequência, não tenha acesso de gravação ao banco de dados. Com esse tipo de acesso, um invasor pode fazer coisas muito ruins.

### Exemplo de ataque de injeção de SQL

O script PHP abaixo executa uma instrução SQL para obter o e-mail de um usuário por ID. No entanto, a entrada não é higienizada, tornando-a vulnerável à injeção de SQL

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

Assim, com o acima, a entrada não é do tipo convertida (ou seja, lançando a entrada com (int) para que somente um número seja permitido) nem escapando permitindo que alguém execute um ataque SQL Injection - por exemplo, a URL `getemailbyuserid.php?id=1'; My Query Here-- -` permite que você execute consultas SQL arbitrárias com pouco esforço.

### Defendendo seu site de ataques de injeção de SQL em PHP

Existem algumas abordagens para defender seu site dos ataques de injeção SQL. Essas abordagens são lista branca, conversão de tipo e escape de caractere

**Lista de permissões:** A abordagem de lista de desbloqueio é usada nos casos em que apenas algumas entradas são esperadas. Você pode listar cada entrada esperada em um Comutador PHP e, em seguida, ter um padrão para entrada inválida. Você não precisa se preocupar com um problema de transmissão de tipo ou um bypass de escape de caractere, mas a entrada permitida é extremamente limitada. Continua uma opção, veja o exemplo abaixo.

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

**Tipo de fundição:** A abordagem de conversão de tipos é comumente usada para um aplicativo usando entrada numérica. Basta converter a entrada com `(int) $input` e somente um valor numérico será permitido.

**Escapando personagem:** A abordagem de escape de caracteres irá escapar de caracteres como aspas e barras fornecidas pelo usuário para evitar um ataque. Se você estiver usando o MySQL Server e a biblioteca MySQLi para acessar seu banco de dados, a função `mysqli_real_escape_string($conn, $string)` receberá dois argumentos, a conexão MySQLi e a string e irá escapar da entrada do usuário para bloquear um ataque de injeção SQL . A função exata que você usa depende do tipo de banco de dados e da biblioteca php que você está usando, verifique a documentação da biblioteca php para obter mais informações sobre como escapar da entrada do usuário.

#### Mais Informações:

*   [OWASP Wiki - Injeção de SQL](https://www.owasp.org/index.php/SQL_Injection)
*   [manual da injeção do PHP php.net](https://secure.php.net/manual/en/security.database.sql-injection.php)
*   [php.net MySQLi Real Escape String manual](https://secure.php.net/manual/en/mysqli.real-escape-string.php)