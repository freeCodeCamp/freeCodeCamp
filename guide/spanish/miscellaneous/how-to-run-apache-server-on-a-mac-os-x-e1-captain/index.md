---
title: How to Run Apache Server on a Mac Os X E1 Captain
localeTitle: Cómo ejecutar el servidor Apache en un Mac Os X E1 Captain
---
[Apache](http://www.apache.org/) servidor es versión preliminar en Mac OS X, sin necesidad de instalar 3 ª Parte herramientas WAMP, LAMP, MAMP Y XAMPP para ejecutar el servidor Apache en Mac.

Cuando se tiene en cuenta ejecuta [Apache](http://www.apache.org/) servidor en Mac OS X E1 capitán / OS X Yosemite, es bastante diferente de la que es versiones anteriores. Aquí tiene que desde las ventanas de terminal, opciones de interfaz gráfica de usuario anteriores de la garrapata como servidor web desde la ventana de control del sistema se despegó.

Escribir en la ventana de terminal:
```
httpd -v 
```

Es dar la versión del servidor y la fecha de fabricación.

Aquí http significa Hypertext Transfer Protocol Daemon D significa que es un programa de software para el uso de múltiples tareas también se utiliza en Mac OS X. `httpd` es el programa servidor del protocolo de transferencia de hipertexto Apache (HTTP). Está diseñado para ser ejecutado como un proceso daemon independiente. Tipo
```
sudo apachectl start 
```

en la ventana del terminal y vaya a su navegador y escriba `http://localhost` obtendrá, `It works!` en su navegador.