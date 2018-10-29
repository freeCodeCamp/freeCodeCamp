---
title: Local File Inclusion
localeTitle: Inclusión de archivos locales
---
## Inclusión de archivos locales

Una vulnerabilidad en la aplicación causada por el programador que requiere una entrada de archivo provista por el usuario y no la desinfecta antes de acceder al archivo solicitado. Esto resulta en un archivo que se incluye donde no debería haber sido.

### Ejemplo de ataques de inclusión de archivos locales

Un sitio web le permite ver los archivos PDF como `download.php?file=myfile.php` , debido a la falta de verificación adecuada, un usuario malintencionado puede solicitar / etc / passwd y obtener información de configuración confidencial del servidor web.

### Defendiendo su sitio web de ataques de inclusión de archivos locales en PHP

```PHP
<?php 
 if(basename($_GET['file]) !== $_GET['file']) { 
  die('INVALID FILE REQUESTED'); 
 } 
```

#### Más información:

*   [Wiki de OWASP - Pruebas para la inclusión de archivos locales](https://www.owasp.org/index.php/Testing_for_Local_File_Inclusion)