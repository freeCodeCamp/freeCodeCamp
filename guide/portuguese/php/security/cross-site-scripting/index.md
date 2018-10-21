---
title: Cross Site Scripting
localeTitle: Cross Site Scripting
---
## Cross Site Scripting

Cross Site Scripting é um tipo de vulnerabilidade em um aplicativo da web causado pelo programador não sanear a entrada antes de enviar a entrada para o navegador da web (por exemplo, um comentário em um blog). É comumente usado para executar JavaScript mal-intencionado no navegador da Web para fazer ataques, como roubar cookies de sessão entre outras ações maliciosas, para obter privilégios de nível superior no aplicativo da Web.

### Exemplo de ataque de script entre sites

Um blog permite que os usuários estilizem seus comentários com tags HTML, no entanto, o script que alimenta o blog não elimina as tags `<script>` permitindo que qualquer usuário execute o javascript na página. Um invasor pode usar isso como vantagem para executar JavaScript mal-intencionado no navegador. Eles podem infectar usuários com malware, roubar cookies de sessão e muito mais.

```HTML
<script> 
  alert('Cross Site Scripting!'); 
 </script> 
```

### Defendendo seu site contra ataques de script entre sites em PHP

No PHP, existem duas funções principais, `htmlspecialchars()` e `strip_tags()` , embutidas para se proteger contra ataques de script entre sites.

A função `htmlspecialchars($string)` impedirá que uma string HTML seja processada como HTML e a exiba como texto simples no navegador da web. **exemplo de código htmlspecialchars ()**

```PHP
<?php 
 $usercomment = "<string>alert('Cross Site Scripting!');</script>"; 
 echo htmlspecialchars($usercomment); 
```

A outra abordagem é a `strip_tags($string, $allowedtags)` que remove todas as tags HTML, exceto as tags HTML que você `strip_tags($string, $allowedtags)` lista de permissões. É importante notar que com a `strip_tags()` você tem que ter mais cuidado, esta função não impede o usuário de incluir o javascript como um link, você terá que higienizar isso por conta própria.

**exemplo de código strip\_tags ()**

```php
<?php 
 $usercomment = "<string>alert('Cross Site Scripting!');</script>"; 
 $allowedtags = "<p><a><h1><h2><h3>"; 
 echo strip_tags($usercomment, $allowedtags); 
```

**Definindo o cabeçalho de proteção X-XSS:**

No PHP você pode enviar o `X-XSS-Protection` Header, que dirá aos navegadores para verificar se há um ataque Cross Site Scripting refletido e bloquear o carregamento da página. Isso não impede que todos os ataques de script entre sites sejam apenas refletidos e devem ser usados ​​em combinação com outros métodos.

```PHP
<?php 
 header("X-XSS-Protection: 1; mode=block"); 
```

**Escrevendo sua própria função de higienização** Outra opção, se você quiser mais controle sobre como a sanitização funciona, é escrever sua própria função de Sanitização de HTML, isso não é recomendado para iniciantes em PHP, pois um erro tornaria seu site vulnerável.

### Defendendo seu site contra ataques de script entre sites com uma política de segurança de conteúdo

Uma abordagem eficaz para impedir ataques de script entre sites, que podem exigir muitos ajustes no design e na base de código de seu aplicativo da Web, é usar uma política de segurança de conteúdo.

#### Definir uma política de segurança de conteúdo como um cabeçalho HTTP

A maneira mais comum de definir uma política de segurança de conteúdo é configurando-a diretamente no cabeçalho HTTP. Isso pode ser feito pelo servidor da Web editando sua configuração ou enviando-o pelo PHP.

**Exemplo de uma política de segurança de conteúdo definida em um cabeçalho HTTP**

```php
<?php 
 header("content-security-policy: default-src 'self'; img-src https://*; child-src 'none';"); 
```

#### Definir uma política de segurança de conteúdo como metatags

Você pode incluir sua Política de segurança de conteúdo no HTML da página e defini-la página por página. Este método requer que você defina em cada página ou você perde o benefício da política.

**Exemplo de uma política de segurança de conteúdo definida em uma meta tag HTML**

```HTML
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src https://*; child-src 'none';"> 
```

#### Mais Informações:

*   [OWASP Wiki - Cross Site Scripting](https://www.owasp.org/index.php/Cross-site_Scripting_(XSS))
*   [php.net strip\_tags () manual](https://secure.php.net/manual/en/function.strip-tags.php)
*   [php.net htmlspecialchars () manual](https://secure.php.net/manual/en/function.htmlspecialchars.php)
*   [MDN - Política de segurança de conteúdo (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)