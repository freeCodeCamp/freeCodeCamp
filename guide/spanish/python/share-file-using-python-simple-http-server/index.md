---
title: Share File Using Python SimpleHTTPserver
localeTitle: Compartir archivo usando Python SimpleHTTPserver
---
## Los pasos deben seguir para enviar el archivo.

1.  Asegúrese de que ambas computadoras estén conectadas a través de la misma red a través de LAN o WIFI.
2.  Abra el terminal en Ubuntu y asegúrese de tener Python instalado en su PC.
3.  Si no está instalado, instálelo escribiendo en el terminal "sudo apt-get install python" sin comillas.
4.  Vaya al directorio cuyo archivo desea compartir con el comando cd (cambiar directorio).
5.  Escriba este comando "python -m simpleHTTPserver" sin las comillas.
6.  Abre una nueva terminal, escribe ifconfig y encuentra tu dirección IP.

## Ahora en segunda computadora

1.  Abra el navegador y escriba la dirección IP de la primera.
2.  No olvide agregar el número de puerto al final de la dirección IP ... que de forma predeterminada es: 8000

Se abrirá una página que muestra la estructura de tipos de directorio y mostrará todos los archivos de la PC de origen.  
Ahora puedes acceder a todos los archivos.