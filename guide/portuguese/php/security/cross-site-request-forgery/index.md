---
title: Cross Site Request Forgery
localeTitle: Falsificação de Solicitação de Site Cruzado
---
## Falsificação de Solicitação de Site Cruzado

O Cross Site Request Forgery é uma vulnerabilidade no aplicativo causada pelo programador que não verifica de onde uma solicitação foi enviada - esse ataque é enviado a um usuário de alto nível de privilégio para obter acesso de nível superior ao aplicativo.

### Exemplo de ataque de falsificação de solicitação de site cruzado

Um blog on-line permite que os usuários enviem comentários e incluam uma imagem no comentário. O painel de administração do blog permite que o autor do blog exclua um comentário carregando o URL `/admin/deletecomment.php?id=123` . Um usuário mal-intencionado poderia criar uma tag de imagem que carregasse o URL de comentário de exclusão, por exemplo `<img src="/admin/deletecomment.php?id=123" />` próxima vez que um administrador visualizar o comentário, o computador do administrador carregará o URL e apague o número do comentário 123.

### Defendendo seu site contra ataques de falsificação de solicitação entre sites em PHP

Para se defender contra um ataque de falsificação de solicitação de site cruzado, você deve verificar um token alterado regularmente. A URL `/admin/deletecomment.php?id=123` mudaria para `/admin/deletecomment.php?id=123&csrf-token=random-per-user-unique-string-here` .

```PHP
<?php 
 // Checking a request's CSRF Token (if true the comment is deleted, if false the comment remains.) 
 session_start(); 
 if ($_GET['csrf-token'] == $_SESSION['csrf-token']){ 
  return true; 
 } else { 
  return false; 
 } 
```

**Dicas:**

*   Mantenha um Token CSRF completamente aleatório e mude por sessão (as funções openssl podem ajudar com isso)
*   Sessões PHP são úteis para armazenar um Token CSRF acessível tanto para o usuário quanto para o servidor, você também pode fazer com que este banco de dados de processo seja conduzido se você estiver inclinado.
*   Altere o token do CSRF em uma sessão a cada 24 horas. Em um aplicativo de alto risco, talvez você deseje alterá-lo a cada solicitação bem-sucedida, mas isso causará problemas para os usuários que usam várias guias.

#### Gerando com segurança um token

Ao definir um Token CSRF, é importante que seja impossível adivinhar a chave. As funções OpenSSL no PHP podem gerar uma chave aleatória para você e armazenar como uma variável de sessão.

```PHP
<?php 
 session_start(); 
 $_SESSION['csrf-token'] = bin2hex(openssl_random_pseudo_bytes(16)); 
```

#### Usando um token CSRF para concluir solicitações legítimas

Você pode incluir a variável de sessão que você salvou anteriormente com o seu token de CSRF no URL. Certifique-se de que um administrador legítimo tenha permissão para excluir comentários. Sem o token correto, a solicitação será bloqueada.

```PHP
<?php 
 session_start(); 
 echo '<a href="/admin/?id=123&csrf-token='.$_SESSION['csrf-token'].'">Delete Comment</a>'; // Only the logged in user has access to the CSRF Token - the token isn't accessible to the attacker preventing their attack from being successful. 
```

#### Mais Informações:

*   [OWASP Wiki - Falsificação de Solicitação de Site Cruzado](https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF))
*   [Manual do php.net bin2hex ()](https://secure.php.net/manual/en/function.bin2hex.php)
*   [php.net openssl\_random\_pseudo\_bytes () manual](https://secure.php.net/manual/en/function.openssl-random-pseudo-bytes.php)