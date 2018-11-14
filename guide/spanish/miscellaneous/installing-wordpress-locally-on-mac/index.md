---
title: Installing Wordpress Locally on Mac
localeTitle: Instalación de Wordpress localmente en Mac
---
La instalación local de WordPress le permitirá crear temas de manera segura y le permitirá probar WordPress de forma gratuita sin tener que pagar por el alojamiento.

## Descargas requeridas:

*   [MAMP](https://www.mamp.info/en/)
*   [WordPress](https://wordpress.org/about/)

El primer paso para instalar WordPress localmente es descargar MAMP. MAMP significa Macintosh, Apache, MySQL y PHP. Este es el servidor local que ejecutará la nueva instalación de WordPress. Instalar MAMP debería ser fácil porque es como instalar cualquier otra aplicación.

Después de instalar MAMP, deseará desinstalar MAMP pro. Para hacer esto, simplemente navegue a la carpeta de aplicaciones y busque la carpeta MAMP pro. Habrá un desinstalador dentro de esta carpeta. Elegí hacer clic en todas las casillas de verificación, ya que es una instalación nueva de MAMP.

## Configurando MAMP

Abra la aplicación MAMP y será recibido con esta pantalla:

Tenemos que establecer algunas preferencias, así que haga clic en el icono de preferencias. En la pantalla de preferencias haga clic en `Ports` .

Aquí puede dejar los puertos tal como están, lo que requerirá que incluya el número de puerto en la URL `localhost:8888` .

Si no desea incluir el número de puerto en la URL, puede cambiar los puertos de Apache y MySQL a 80. La razón por la que elegí no hacer esto es porque siempre se le pedirá su contraseña

A continuación, hará clic en la pestaña Apache y establecerá una raíz de documento. Elegí crear una nueva carpeta llamada "Sitios" en mi carpeta de usuario.

Ahora que hemos terminado de editar todas las configuraciones, presione OK para guardar.

## Iniciando MAMP

Para iniciar MAMP haga clic en "Iniciar servidores".

Esto debería abrir una nueva ventana con la dirección `http://localhost:8888/MAMP/?language=English` en su navegador web.

Si su navegador no se abrió, debería poder hacer clic en la `Open WebStart page` .

Creando una base de datos

El siguiente paso es hacer clic en el enlace `phpMyAdmin` en MySQL que lo llevará a esta página:

Haga clic en nuevo en el menú de navegación izquierdo.

Ingrese un nombre para la base de datos y luego haga clic en crear. Elegí "WordPress".

## Instalando WordPress

Descomprima el archivo de WordPress que descargó y arrastre su contenido a la carpeta que creó anteriormente como la raíz de su documento.

Una vez que se copian los archivos, vaya a `localhost:8888` .

Elija su idioma y en la siguiente pantalla haga clic en `Let's Go` .

Ingrese el nombre de la base de datos que creó, y "root" para el nombre de usuario y la contraseña, y haga clic en enviar.

Haga clic en `Run the install` y, en la siguiente pantalla, ingrese los detalles para iniciar sesión.

Haga clic en `Submit` , y se lo llevará al inicio de sesión para su WordPress alojado local.

¡Éxito! Inicia sesión con el nombre de usuario y la contraseña que creaste.