---
title: local-lamp-server-on-ubuntu
localeTitle: local-lamp-server-on-ubuntu
---## Servidor local de LAMP en Ubuntu

El propósito de esta breve guía es guiarlo a través del proceso de configuración de un servidor LAMP (Linux, Apache, MySQL, PHP) en una máquina local o máquina virtual de Ubuntu Linux. Esto permitirá a un desarrollador desarrollar utilizando PHP y MySQL (con phpMyAdmin). Esta es una pila común que es necesaria para el desarrollo de Wordpress.

### Instala los paquetes necesarios.

Deberá instalar los siguientes paquetes para el servidor LAMP. Puede instalarlos todos a la vez separando cada paquete por un espacio, o uno a la vez, como se muestra. Prefiero descargar uno a la vez porque es más fácil ver si hubo algún error. Ingrese al terminal y escriba lo siguiente:

*   `sudo apt-get install apache2`
*   `sudo apt-get install php`
*   `sudo apt-get install php-mysql`
*   `sudo apt-get install mysql-server`

Luego se le solicitará que establezca una contraseña para el usuario root de MySQL. Después de configurar la contraseña, continúe con la instalación:

*   `sudo apt-get install libapache2-mod-php`
*   `sudo apt-get install php-mcrypt`
*   `sudo apt-get install phpmyadmin`

A continuación, se le preguntará qué servidor debe usar Select Apache presionando Intro. Seleccione no para la configuración avanzada del servidor.

### Cambie los permisos a / var / www / html

Para que los scripts y archivos php sean ejecutados por el servidor LAMP, deben guardarse en el directorio / var / www / html. Puede considerar esta ubicación como su servidor local. Para realizar cambios en este directorio necesitamos cambiar los permisos en él. En el terminal ingrese el comando:

*   `sudo chown {your ubuntu username} /var/www/html`

### Crear un enlace simbólico a phpMyAdmin

De forma predeterminada, phpMyAdmin se instala en el directorio / usr / share /. Necesitamos moverlo a nuestro directorio de servidor local. Navegamos al directorio del servidor en el que queremos el enlace por:

*   `cd /var/www/html`

Luego crea el enlace ingresando el comando:

*   `ln -s /usr/share/phpmyadmin phpmyadmin`

### Reinicie Apache y pruebe

Ejecute el siguiente comando para reiniciar Apache configurando los cambios realizados:

*   `sudo systemctl restart apache2`

Entonces deberías poder crear un archivo info.php en el directorio / var / www / html.

*   `touch /var/www/html/info.php`

En el archivo escribe el siguiente código php:

*   `<?php phpinfo(); ?>`

Luego, abra un navegador y escriba localhost / info.php Debería ver una página del archivo php que acaba de escribir que le proporciona información sobre php.

Finalmente, para acceder a phpMyAdmin vaya a localhost / phpmyadmin en su navegador. El nombre de usuario de la raíz predeterminada es 'root' y la contraseña es la contraseña que eligió anteriormente para la base de datos MySQL.

### Más información