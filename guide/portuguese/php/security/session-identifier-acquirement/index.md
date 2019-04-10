---
title: Session Identifier Acquirement
localeTitle: Identificação de Identificador de Sessão
---
## Identificação de Identificador de Sessão

Identificador de sessão A aquisição é uma vulnerabilidade causada por um invasor que pode adivinhar o identificador de sessão de um usuário ou explorar vulnerabilidades no próprio aplicativo ou no navegador do usuário para obter um identificador de sessão. Esse ataque é um pré-requisito para executar um ataque de seqüestro de sessão.

### Exemplo

Um invasor tem algumas opções para executar um ataque de aquisição de identificador de sessão.

*   Adivinhando o Identificador: Um identificador de sessão curto e adivinhavel pode permitir que um invasor force brutalmente a ID de uma sessão e entre.
*   Atacando o navegador: no caso de armazenar seu identificador de sessão nos cookies do navegador - se o site estiver vulnerável a scripts entre sites, um invasor poderá usar a vulnerabilidade para coletar cookies de identificadores de sessão e acessar áreas de alto nível de privilégio (por exemplo, um painel de administração) .
*   Alterando o ID para a escolha do invasor: Em versões mais antigas do PHP, você podia definir o ID de uma sessão no URL. Ele está desabilitado por padrão agora, em caso de dúvida, certifique-se de que `session.use_trans_sid` seja false. Este não é mais um problema comum, no entanto, ainda pode acontecer, melhor prevenir do que remediar.

### Defesa contra ataques de aquisição de Identificador de Sessão em PHP

Para se defender contra ataques de Identificador de Sessão, você precisa verificar a tentativa de acesso à sessão em relação a vários fatores para confirmar se é um acesso legítimo e evitar que o usuário seqüestre a sessão do usuário. Abaixo está uma implementação de exemplo que pode ajudar a atenuar os efeitos de um ataque de aquisição de identificador de sessão. Ele verifica o endereço IP, o agente do usuário e se a sessão expirou, removendo uma sessão antes que ela seja adquirida.

```PHP
<?php 
 session_start(); 
 
 // Does IP Address match? 
 if ($_SERVER['REMOTE_ADDR'] != $_SESSION['ipaddress']) 
 { 
 session_unset(); 
 session_destroy(); 
 } 
 
 // Does user agent match? 
 if ($_SERVER['HTTP_USER_AGENT'] != $_SESSION['useragent']) 
 { 
  session_unset(); 
  session_destroy(); 
 } 
 
 // Is the last access over an hour ago? 
 if (time() > ($_SESSION['lastaccess'] + 3600)) 
 { 
  session_unset(); 
  session_destroy(); 
 } 
 else 
 { 
  $_SESSION['lastaccess'] = time(); 
 } 
```

**Dicas:**

*   Armazene muitas informações sobre a sessão atual (String do Agente do Usuário, Endereço IP, Horário do Último Acesso, etc)
*   Verifique cada pedido em relação a informações armazenadas sobre a sessão (Isso corresponde? Se não excluir a sessão e exigir que o usuário faça o login novamente)
*   As sessões não devem durar para sempre - elas devem expirar em determinado momento para manter a segurança da sessão.
*   Taxa limite a quantidade de sessões que um usuário pode tentar acessar (um usuário tentou acessar mais de 1000 sessões inválidas? É provável que elas estejam supondo - evite que o endereço IP tente mais sessões por algumas horas).

#### Mais Informações:

*   [manual de segurança da sessão do php.net](https://secure.php.net/manual/en/session.security.php)