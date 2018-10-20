---
title: PHP tags
localeTitle: Tags PHP
---
Quando o PHP analisa um arquivo, ele procura por tags de abertura e fechamento, que são `<?php` e `?>` Que dizem ao PHP para iniciar e parar de interpretar o código entre elas. A análise dessa maneira permite que o PHP seja incorporado em todos os tipos de documentos diferentes, já que tudo fora de um par de tags de abertura e fechamento é ignorado pelo analisador PHP.

O PHP também permite uma tag aberta curta `<?` (o que é desencorajado, uma vez que está disponível somente se ativado usando a diretiva do arquivo de configuração `short_open_tag php.ini` , ou se o PHP foi configurado com a opção `--enable-short-tags` ).

Se um arquivo é puro código PHP, é preferível omitir a tag de fechamento do PHP no final do arquivo. Isso evita espaços em branco acidentais ou novas linhas sendo adicionadas após a tag de fechamento do PHP, o que pode causar efeitos indesejados porque o PHP iniciará o buffer de saída quando não houver intenção do programador de enviar qualquer saída naquele ponto no script.

```php
<?php 
 echo "Hello world"; 
 
 // ... more code 
 
 echo "Last statement"; 
 
 // the script ends here with no PHP closing tag 

```