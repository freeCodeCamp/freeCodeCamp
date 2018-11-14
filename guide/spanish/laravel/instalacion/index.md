# Instalacion de Laravel

El marco de trabajo Laravel tiene ciertos requerimientos de sistema, descritos a continuacion:

* PHP >= 7.1.3
* Extension PHP OpenSSL
* Extension PHP PDO
* Extension PHP Mbstring
* Extension PHP Tokenizer
* Extension PHP XML
* Extension PHP Ctype
* Extension PHP JSON

## Instalando Laravel

Laravel usa [Composer]() para administrar sus dependencias. Para usar Laravel, asegurarse que Composer esta instalado en su sistema.

__Instalacion Global__

Primero se descarga el instalador mediante composer con el siguiente comando:

```bash
composer global require "laravel/installer"
```

Una vez instalado, el comando `laravel new` podra crear un directorio con todos los archivos para tener un proyecto Laravel completo.
