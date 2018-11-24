---
title: Local File Inclusion
localeTitle: Inclusão de arquivos locais
---
## Inclusão de arquivos locais

Uma vulnerabilidade no aplicativo causada pelo programador exigindo uma entrada de arquivo fornecida pelo usuário e não sanitizando a entrada antes de acessar o arquivo solicitado. Isso resulta em um arquivo sendo incluído onde não deveria estar.

### Exemplo de ataques de inclusão de arquivos locais

Um site permite que você visualize PDFs como `download.php?file=myfile.php` , devido à falta de verificação adequada, um usuário mal-intencionado pode solicitar / etc / passwd e obter informações confidenciais de configuração do servidor web.

### Defendendo seu site de ataques de inclusão de arquivos locais em PHP

```PHP
<?php 
 if(basename($_GET['file]) !== $_GET['file']) { 
  die('INVALID FILE REQUESTED'); 
 } 
```

#### Mais Informações:

*   [OWASP Wiki - Teste de inclusão de arquivos locais](https://www.owasp.org/index.php/Testing_for_Local_File_Inclusion)