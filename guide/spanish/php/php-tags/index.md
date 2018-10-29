---
title: PHP tags
localeTitle: Etiquetas PHP
---
Cuando PHP analiza un archivo, busca etiquetas de apertura y cierre, que son `<?php` y `?>` Que le indican a PHP que comience y deje de interpretar el código entre ellos. El análisis de esta manera permite que PHP se incruste en todo tipo de documentos diferentes, ya que el analizador PHP ignora todo lo que está fuera de un par de etiquetas de apertura y cierre.

PHP también permite la etiqueta abierta corta `<?` (no se `short_open_tag php.ini` ya que solo está disponible si se habilita con la directiva del archivo de configuración `short_open_tag php.ini` , o si PHP se configuró con la opción `--enable-short-tags` ).

Si un archivo es código PHP puro, es preferible omitir la etiqueta de cierre de PHP al final del archivo. Esto evita que se agreguen espacios en blanco o nuevas líneas después de la etiqueta de cierre de PHP, lo que puede causar efectos no deseados porque PHP iniciará el búfer de salida cuando el programador no tenga intención de enviar ningún resultado en ese punto del script.

```php
<?php 
 echo "Hello world"; 
 
 // ... more code 
 
 echo "Last statement"; 
 
 // the script ends here with no PHP closing tag 

```