---
title: Sessions
localeTitle: Sessões
---
## Sessões

As sessões são um recurso em PHP que permite armazenar o lado do servidor de dados sobre um usuário. Quando uma sessão é configurada, um cookie do navegador é configurado, o qual identifica o usuário para o PHP, para que o PHP saiba quais variáveis ​​do lado do servidor devem ser acessadas.

### Começando uma sessão

Em cada página que você deseja acessar a sessão, você precisará iniciar (ou carregar) a sessão. Para fazer isso, execute a função `session_start()` que carrega o PHP Session System.

```PHP
<?php 
 session_start(); 
```

Por favor, note que ao usar sessões baseadas em cookies, session\_start () deve ser chamado antes de produzir qualquer coisa para o navegador. qualquer outra coisa resultará em um erro.

### Acessando e configurando dados em uma sessão

A `$_SESSION['key']` é um tipo especial de array (usando um cookie de navegador para determinar qual sessão acessar).

No exemplo abaixo, você vê que a escolha do tema do usuário está definida como o tema número um.

```PHP
<?php 
 session_start(); 
 $_SESSION['themechoice'] = 1; 
```

Acessar uma variável de sessão é semelhante a definir uma. Simplesmente inclua a variável onde ela precisa ser acessada. Por exemplo, ecoando como mostrado no exemplo de código abaixo.

```PHP
<?php 
 session_start(); 
 echo $_SESSION['themechoice']; 
```

### Removendo uma Sessão

Para remover uma sessão do sistema, execute o seguinte código PHP. Ele irá desconfigurar as variáveis ​​da sessão e apagá-lo do sistema.

```PHP
<?php 
 session_unset(); 
 session_destroy(); 
```

### Sessões são temporárias

É importante não tratar uma sessão como armazenamento permanente. Eles são limpos de tempos em tempos pelo desenvolvedor, sempre que o aplicativo é movido para um novo servidor host, pelo próprio aplicativo (por exemplo, um botão de logout) e até mesmo durante a manutenção do servidor. Para armazenamento a longo prazo de dados, certifique-se de usar um banco de dados.

### Segurança

Por último, mas não menos importante, é importante usar sessões php com segurança. Leia nosso artigo sobre [aquisição de identificadores de](/php/security/session-identifier-acquirement) [sessão](/php/security/session-hijacking) e [sequestro de sessão](/php/security/session-hijacking) para obter mais informações.

#### Mais Informações:

*   [manual da sessão do php.net](https://secure.php.net/manual/en/book.session.php)