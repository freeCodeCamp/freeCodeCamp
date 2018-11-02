---
title: Ssh
----
El cliente SSH es un programa de la interfaz de linea de comando para iniciar sesión en una máquina remota y ejecutar comandos en ella. 
Está destinado a proporcionar seguridad en las comunicaciones cifradas entre dos hosts no confiables sobre una red insegura (Internet).

Por ejemplo, ssh 192.168.100.20 intentará establecer una conexión con el host 192.169.100.20. La dirección de la computadora remota se puede proporcionar utilizando una dirección IP o un identificador como su nombre como se encuentre registrada en un DNS.

Si la computadora remota requiere que el usuario inicie sesión, puede usar la forma ssh username@direccion_remota, y luego se le pedirá la contraseña del usuario para una conexión exitosa.

También tiene opciones de línea de comandos que se pueden encontrar en el sitio web de SSH o invocando el comando "man ssh" desde la interfaz de linea de comando de su distribución GNU/Linux.

Una cosa a tener en cuenta, si el servidor está configurado para escuchar cualquier puerto que no sea 22, entonces tiene que usar la opción -p para especificar el puerto de conexión. Por ejemplo, suponhamos que nos deseamos conectar a un servidor remoto con IPv4 192.168.100.90 y este servidor tiene configurado el servicio ssh escucando por el puerto 2222, entonces para poder conectarnos a el debemos ejecutar el cliente ssh de la siguiente forma:

```
ssh -p 2222 192.168.100.90
```     

Luego se solicitará la contraseña del usuario para establecer una conexión exitosa.

**Mas informacion**

[SSH](https://man.openbsd.org/ssh)
