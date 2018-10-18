---
title: PHP Sessions
localeTitle: Sessões PHP
---
# Sessões PHP

Uma sessão é uma maneira de armazenar informações (em variáveis) a serem usadas em várias páginas.  
Ao contrário de um cookie, as informações não são armazenadas no computador do usuário.

## O que é uma sessão PHP?

Quando você trabalha com um aplicativo, você o abre, faz algumas alterações e depois o fecha. Isso é muito parecido com uma sessão.  
O computador sabe quem você é. Sabe quando você inicia o aplicativo e quando você termina.  
Mas na internet há um problema: o servidor web não sabe quem você é ou o que você faz, porque o endereço HTTP _não mantém o estado_ .

As variáveis ​​de sessão resolvem esse problema armazenando informações do usuário a serem usadas em várias páginas (por exemplo, nome de usuário, cor favorita, etc).  
Por padrão, as variáveis ​​de sessão duram até que o usuário feche o navegador.

**As variáveis ​​de sessão armazenam informações sobre um único usuário e estão disponíveis para todas as páginas em um aplicativo.**

**Nota:** Se você precisar de um armazenamento permanente, poderá armazenar os dados em um banco de dados.

## Inicie uma sessão do PHP

Uma sessão é iniciada com a função _session_ start () \_.  
As variáveis ​​de sessão são configuradas com a variável global PHP: $ \_SESSION.

**Exemplo:**
```
<?php 
 // Start the session 
 session_start(); 
 ?> 
 <!DOCTYPE html> 
 <html> 
 <body> 
 
 <?php 
 // Set session variables 
 $_SESSION["favcolor"] = "blue"; 
 $_SESSION["favanimal"] = "dog"; 
 echo "Session variables are set."; 
 ?> 
 
 </body> 
 </html> 
```

**Nota:** A função session\_start () deve ser a **primeira coisa** no seu documento. **Antes de** qualquer tag HTML.

Saída:  
Variáveis ​​de sessão são definidas.

## Obter valores de variável de sessão PHP

Observe que as variáveis ​​de sessão não são passadas individualmente para cada nova página, em vez disso, elas são recuperadas da sessão que abrimos no início de cada página (session\_start ()).

Observe também que todos os valores de variáveis ​​de sessão são armazenados na variável global $ \_SESSION:

**Exemplo:**
```
<?php 
 session_start(); 
 ?> 
 <!DOCTYPE html> 
 <html> 
 <body> 
 
 <?php 
 // Echo session variables that were set on previous page 
 echo "Favorite color is " . $_SESSION["favcolor"] . ".<br>"; 
 echo "Favorite animal is " . $_SESSION["favanimal"] . "."; 
 ?> 
 
 </body> 
 </html> 
```

Saída:  
A cor favorita é azul.  
Animal favorito é cachorro.

Outra maneira de mostrar todos os valores de variáveis ​​de sessão para uma sessão de usuário é executar o seguinte código:
```
<?php 
 print_r($_SESSION); 
 ?> 
```

### Como funciona?

A maioria das sessões define uma chave de usuário no computador do usuário que se parece com algo assim: 765487cf34ert8dede5a562e4f3a7e12.  
Então, quando uma sessão é aberta em outra página, ela verifica a chave do usuário no computador.  
Se houver uma correspondência, ela acessará essa sessão; caso contrário, iniciará uma nova sessão.

## Modificar uma variável de sessão

Para alterar uma variável de sessão, basta sobrescrevê-la:

**Exemplo:**
```
<?php 
 session_start(); 
 ?> 
 <!DOCTYPE html> 
 <html> 
 <body> 
 
 <?php 
 // to change a session variable, just overwrite it 
 $_SESSION["favcolor"] = "pink"; 
 print_r($_SESSION); 
 ?> 
 
 </body> 
 </html> 
```

## Destrua uma sessão do PHP

Para remover todas as variáveis ​​de sessão globais e destruir a sessão, use _session_ unset () \_ e _session_ destroy () \_:

**Exemplo:**
```
<?php 
 session_start(); 
 ?> 
 <!DOCTYPE html> 
 <html> 
 <body> 
 
 <?php 
 // remove all session variables 
 session_unset(); 
 
 // destroy the session 
 session_destroy(); 
 ?> 
 
 </body> 
 </html> 

```