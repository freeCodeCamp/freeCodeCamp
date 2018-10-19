---
title: Sessions
localeTitle: Sessões
---
## Sessões

As sessões são um recurso em PHP que permite armazenar, do lado do servidor, dados sobre um usuário. Quando uma sessão é configurada, um cookie do navegador é definido, o qual identifica o usuário no PHP, para que o PHP saiba quais variáveis do lado do servidor devem ser acessadas.

### Iniciando uma sessão

Em cada página que você deseja acessar a sessão, você precisará iniciar (ou carregar) a sessão. Para fazer isso, execute a função `session_start()` que carrega o PHP Session System.

```PHP
<?php 
 session_start(); 
```

Note que ao usar sessões baseadas em cookies, session\_start () deve ser chamado antes de gerar qualquer informação (output) para o navegador. Executando esse método após a geração de informação resultará em um erro.

### Acessando e configurando dados em uma sessão

A variavel `$_SESSION['key']` faz parte de um tipo especial de array (usando um cookie de navegador para determinar qual sessão acessar).

No exemplo abaixo, você vê que a escolha do tema do usuário está definida como o tema (themechoice) número um.

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

Para remover uma sessão do sistema, execute o seguinte código PHP. Ele irá desconfigurar as variáveis da sessão e apagá-la do sistema.

```PHP
<?php 
 session_unset(); 
 session_destroy(); 
```

### Sessões são temporárias

É importante não tratar uma sessão como armazenamento permanente. Elas podem ser limpadas de tempos em tempos pelo desenvolvedor, sempre que o aplicativo é movido para um novo host de servidor, pelo próprio aplicativo (por exemplo, um botão de logout) e até mesmo durante a manutenção do servidor. Para armazenamento dos dados a longo prazo, utilize um banco de dados.

### Segurança

Por último, mas não menos importante, é importante usar sessões php com segurança. Leia nosso artigo sobre [Obtenção de Identificadores de Sessão](/php/security/session-identifier-acquirement) e [Sequestro de Sessão](/php/security/session-hijacking) para obter mais informações.

#### Mais Informações:

*   [manual da sessão do php.net](https://secure.php.net/manual/en/book.session.php)
