---
title: PHP 5 Form Handling
localeTitle: Manipulação de Formulários PHP 5
---
Os superglobais PHP $ _GET e $_ POST são usados ​​para coletar dados de formulário.

### PHP - Um formulário HTML simples

O exemplo abaixo exibe um formulário HTML simples com dois campos de entrada e um botão de envio:

#### Exemplo

```php
<html> 
 <body> 
 
 <form action="welcome.php" method="post"> 
 Name: <input type="text" name="name"><br> 
 E-mail: <input type="text" name="email"><br> 
 <input type="submit"> 
 </form> 
 
 </body> 
 </html> 
```

Quando o usuário preenche o formulário acima e clica no botão de envio, os dados do formulário são enviados para processamento em um arquivo PHP chamado "welcome.php". Os dados do formulário são enviados com o método HTTP POST.

Para exibir os dados enviados, você poderia simplesmente fazer eco de todas as variáveis. O "welcome.php" é assim:

```php
<html> 
 <body> 
 
 Welcome <?php echo $_POST["name"]; ?><br> 
 Your email address is: <?php echo $_POST["email"]; ?> 
 
 </body> 
 </html> 
```

A saída poderia ser algo assim:
```
Welcome John 
 Your email address is john.doe@example.com 
```

O mesmo resultado também pode ser obtido usando o método HTTP GET:

#### Exemplo

```php
<html> 
 <body> 
 
 <form action="welcome_get.php" method="get"> 
 Name: <input type="text" name="name"><br> 
 E-mail: <input type="text" name="email"><br> 
 <input type="submit"> 
 </form> 
 
 </body> 
 </html> 
```

e "welcome\_get.php" é assim:

```php
<html> 
 <body> 
 
 Welcome <?php echo $_GET["name"]; ?><br> 
 Your email address is: <?php echo $_GET["email"]; ?> 
 
 </body> 
 </html> 
```

O código acima é bem simples. No entanto, o mais importante está faltando. Você precisa validar os dados do formulário para proteger seu script contra códigos maliciosos.

> **Pense em SEGURANÇA ao processar formulários PHP!**
> 
> Esta página não contém nenhuma validação de formulário, apenas mostra como você pode enviar e recuperar dados de formulário.
> 
> No entanto, as próximas páginas mostrarão como processar formulários PHP com a segurança em mente! A validação adequada dos dados do formulário é importante para proteger seu formulário contra hackers e spammers!

### GET vs. POST

Tanto o GET quanto o POST criam uma matriz (por exemplo, matriz (chave => valor, chave2 => valor2, chave3 => valor3,…)). Essa matriz contém pares de chave / valor, em que as chaves são os nomes dos controles de formulário e os valores são os dados de entrada do usuário.

Tanto o GET quanto o POST são tratados como $ _GET e $_ POST. São superglobais, o que significa que estão sempre acessíveis, independentemente do escopo - e você pode acessá-los de qualquer função, classe ou arquivo sem precisar fazer nada especial.

$ \_GET é uma matriz de variáveis ​​passadas para o script atual por meio dos parâmetros de URL.

$ \_POST é uma matriz de variáveis ​​passadas para o script atual através do método HTTP POST.

### Quando usar o GET?

As informações enviadas de um formulário com o método GET ficam visíveis para todos (todos os nomes e valores de variáveis ​​são exibidos no URL). O GET também tem limites na quantidade de informação a ser enviada. A limitação é de cerca de 2000 caracteres. No entanto, como as variáveis ​​são exibidas na URL, é possível marcar a página como favorito. Isso pode ser útil em alguns casos.

GET pode ser usado para enviar dados não confidenciais.

**Nota:** GET nunca deve ser usado para enviar senhas ou outras informações confidenciais!

### Quando usar o POST?

As informações enviadas de um formulário com o método POST são **invisíveis para os outros** (todos os nomes / valores são incorporados ao corpo da solicitação HTTP) e **não** têm **limites** quanto à quantidade de informações a serem enviadas.

Além disso, o POST suporta funcionalidades avançadas, como suporte para entrada binária multi-parte, ao carregar arquivos para o servidor.

No entanto, como as variáveis ​​não são exibidas na URL, não é possível marcar a página como favorito.

> **Os desenvolvedores preferem o POST para enviar dados de formulário.**