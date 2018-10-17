---
title: How to install phpmyadmin on Linux (Ubuntu).
localeTitle: Cómo instalar phpmyadmin en Linux (Ubuntu).
---
# Cómo instalar phpmyadmin en Linux (Ubuntu)

El servidor de [base de](https://en.wikipedia.org/wiki/MySQL) datos [MySQL](https://en.wikipedia.org/wiki/MySQL) puede administrarse usando la línea de comandos, ejecutando comandos en el terminal. Pero es más conveniente y menos tedioso usar una interfaz gráfica de usuario (GUI), especialmente para aquellos que no se sienten cómodos al ingresar comandos en un terminal.

[phpMyAdmin](https://en.wikipedia.org/wiki/PhpMyAdmin) es una herramienta de software GUI gratuita y de código abierto escrita en PHP, diseñada para manejar la administración de MySQL a través de la Web. phpMyAdmin admite una amplia gama de operaciones en MySQL y su versión compatible con la comunidad: [MariaDB](https://en.wikipedia.org/wiki/MariaDB) .

Las operaciones de base de datos utilizadas con frecuencia (gestión de bases de datos, tablas, columnas, relaciones, índices, usuarios, permisos, etc.) se pueden realizar a través de la GUI, mientras que aún tiene la capacidad de ejecutar directamente cualquier instrucción SQL. Y también realiza la exportación e importación de datos en formatos de archivo populares (CSV, SQL, XML, PDF, Word, Excel, LaTeX y muchos otros). Puede instalar phpMyAdmin Linux, Windows y Mac OS (es multiplataforma). Se ha convertido en una de las herramientas de administración de MySQL más populares.

En esta publicación, verá cómo instalarlo en un sistema operativo Linux. Pero antes de comenzar, asegúrese de que tiene Apache, MySQL y PHP instalados en su sistema. Si no aprendes a hacerlo [aquí](https://fossnaija.com/install-lamp-server-linux-ubuntu/) .

### Instalación de phpMyAdmin.

*   Abra el terminal de Linux y use el administrador de paquetes de software de Ubuntu `apt` para instalar,
    
    sudo apt-get install phpmyadmin
    
*   Entonces comienza la instalación. Cuando se le solicite, seleccione _"Apache2"_ en el cuadro de diálogo **"Configuración de phpMyAdmin".** Cuando se le solicite el nombre de usuario y la contraseña de MySQL, ingrese "root" para el nombre de usuario y elija una contraseña apropiada para la contraseña.
    
*   Una vez completada la instalación, configure phpMyAdmin para que sea reconocido por el servidor web local. Abra el archivo de configuración de apache en su editor de texto favorito;
    
    ```
    sudo gedit /etc/apache2/apache2.conf 
    
    ```
    
    y agregue la siguiente línea en la parte inferior del archivo (puede agregarla en cualquier parte del archivo, simplemente elijo la parte inferior aquí para que pueda acceder fácilmente a ella para modificarla si es necesario):
    
    `Include /etc/phpmyadmin/apache.conf`
    
*   Luego reinicie el servidor web;
    
    ```
    sudo service apache2 restart 
    
    ```
    
*   Ahora ingrese la siguiente url en su navegador;
    
    `https://localhost/phpmyadmin`
    
    Debería ver una página de inicio de sesión para que ingrese su nombre de usuario y contraseña, si no lo ha hecho.
    
    **Nombre de usuario** = _root_
    
    **Contraseña** = _SU CONTRASEÑA _MYSQL__
    

Si tiene éxito, aparece el panel de phpMyAdmin. Entonces puedes comenzar a usar phpMyAdmin.

### Más información:

*   Para ver los pasos de la instalación gráfica, consulte [aquí](https://fossnaija.com/install-phpmyadmin-linux-ubuntu/) .
    
*   [PhpMyAdmin documentación de la instalación](https://docs.phpmyadmin.net/en/latest/setup.html) .