---
title: How to Use SFTP to Securely Transfer Files with a Remote Server
localeTitle: Cómo usar SFTP para transferir archivos de forma segura con un servidor remoto
---
## Cómo usar SFTP para transferir archivos de forma segura con un servidor remoto

Este artículo es un tutorial rápido sobre cómo utilizar el Protocolo seguro de transferencia de archivos (SFTP) para intercambiar archivos con un servidor. Esto es útil para la programación, ya que le permite codificar y probar localmente, y luego enviar su trabajo al servidor cuando haya terminado.

### Pruebas de SSH

Si aún no lo has hecho, prueba que puedes SSH en el servidor. SFTP usa el protocolo Secure Shell (SSH), por lo que si no puede SSH, probablemente tampoco podrá SFTP.

```shell
ssh your_username@hostname_or_ip_address 
```

### Iniciar sesión SFTP

Esto usa la misma sintaxis que SSH y abre una sesión en la que puede transferir archivos.

```shell
sftp your_username@hostname_or_ip_address 
```

Para listar comandos útiles:

```shell
help 
```

### Transferir archivos y carpetas

Para descargar un archivo:

```shell
get <filename> 
```

Para descargar una carpeta y su contenido, use la bandera "-r" (también funciona para cargar):

```shell
get -r <foldername> 
```

Para subir un archivo:

```shell
put <filename> 
```

### Cambiar carpetas

Para cambiar la carpeta local:

```shell
lcd <path/to/folder> 
```

Para cambiar la carpeta remota:

```shell
cd <path/to/folder> 

```