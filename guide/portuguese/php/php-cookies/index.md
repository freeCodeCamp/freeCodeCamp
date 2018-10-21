---
title: PHP Cookies
localeTitle: Cookies PHP
---
# COOKIES PHP

## O que é um cookie?

Um cookie é frequentemente usado para identificar um usuário. É um pequeno arquivo que o servidor incorpora no computador do usuário. Cada vez que o mesmo computador solicita uma página com um navegador, ele também enviará o cookie.  
Os cookies foram projetados para serem um mecanismo confiável para lembrar informações com informações de estado ou para registrar a atividade de navegação do usuário.  
Eles também podem ser usados ​​para lembrar partes arbitrárias de informações que o usuário inseriu anteriormente em campos de formulário, como nomes, endereços, senhas, etc.

## Criando Cookies com PHP

Com o PHP, você pode criar e recuperar valores de cookie. Um cookie é criado com a função setcookie ().

`setcookie(name, value, expire, path, domain, secure, httponly);`

Apenas o parâmetro _name_ é um parâmetro obrigatório. Todos os outros parâmetros são opcionais.

## PHP criar / recuperar um cookie

O exemplo a seguir cria um cookie chamado "user" com o valor "John Doe".  
O cookie expirará após 30 dias (86400 \* 30).  
O "/" significa que o cookie está disponível em todo o site (senão, você pode selecionar o diretório que preferir).  
Em seguida, recuperamos o valor do cookie "user" (usando a variável global $ \_COOKIE).  
Também usamos a função isset () para descobrir se o cookie está definido:

**Exemplo:**
```
<?php 
 $cookie_name = "user"; 
 $cookie_value = "John Doe"; 
 setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/");  // 86400 = 1 day 
 ?> 
 <html> 
 <body> 
 
 <?php 
 if(!isset($_COOKIE[$cookie_name])) { 
    echo "Cookie named '" . $cookie_name . "' is not set!"; 
 } else { 
    echo "Cookie '" . $cookie_name . "' is set!<br>"; 
    echo "Value is: " . $_COOKIE[$cookie_name]; 
 } 
 ?> 
 </body> 
 </html> 
```

**Nota:** A função setcookie () deve aparecer **ANTES** da tag.

Saída:  
Cookie 'user' está definido!  
O valor é: John Doe

## PHP modificar um valor de cookie

Para modificar um cookie, basta definir o valor novamente usando a função setcookie ():

**Exemplo:**
```
<?php 
 $cookie_name = "user"; 
 $cookie_value = "Jane Porter"; 
 setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/"); 
 ?> 
 <html> 
 <body> 
 
 <?php 
 if(!isset($_COOKIE[$cookie_name])) { 
    echo "Cookie named '" . $cookie_name . "' is not set!"; 
 } else { 
    echo "Cookie '" . $cookie_name . "' is set!<br>"; 
    echo "Value is: " . $_COOKIE[$cookie_name]; 
 } 
 ?> 
 
 </body> 
 </html> 
```

Saída:  
Cookie 'user' está definido!  
O valor é: Alex Porter

## Excluir um cookie do PHP

Para excluir um cookie, use a função setcookie () com uma data de expiração no passado:

**Exemplo:**
```
<?php 
 // set the expiration date to one hour ago 
 setcookie("user", "", time() - 3600); 
 ?> 
 <html> 
 <body> 
 
 <?php 
 echo "Cookie 'user' is deleted."; 
 ?> 
 
 </body> 
 </html> 
```

Saída:  
Cookie 'user' é deletado.