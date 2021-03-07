> **Nota:** Este es un **paso opcional** y es necesario solo cuando se trabaja con flujos de trabajo de correo electrónico

## Introducción

Algunos flujos de trabajo de correo electrónico, como actualizar el correo electrónico de un usuario, requiere del servidor API en back-end para enviar correos salientes. Una alternativa al uso de un proveedor de correo electrónico para enviar mensajes de correo reales, es Mailhog, una herramienta de desarrollo para pruebas por correo electrónico que captará los mensajes de correo electrónico enviados por tu instancia de freeCodeCamp.

## Instalando MailHog

MailHog puede instalarse en macOS, Windows y Linux.

- [Introducción](#introduction)
- [Instalando MailHog](#installing-mailhog)
  - [Instalando MailHog en macOS](#installing-mailhog-on-macos)
  - [Instalando MailHog en Windows](#installing-mailhog-on-windows)
  - [Instalando MailHog en Linux](#installing-mailhog-on-linux)
- [Usando MailHog](#using-mailhog)
- [Enlaces útiles](#useful-links)

### Instalando MailHog en macOS

Instala MailHog en macOS con [Homebrew](https://brew.sh/):

```bash
brew install mailhog
brew services start mailhog
```

Los comandos anteriores iniciarán un servicio de mailhog en segundo plano.

Cuando termine la instalación, puedes empezar [a usar MailHog](#using-mailhog).

### Instalando MailHog en Windows

Descargue la última versión de MailHog desde el [repositorio oficial de MailHog](https://github.com/mailhog/MailHog/releases). Localice y haga clic en el enlace para su versión de Windows (32 o 64 bits) y se descargará un archivo .exe a su equipo.

Cuando termine la descarga, haga clic para abrir el archivo. Puede aparecer una notificación de cortafuegos de Windows, solicitando permiso de acceso para MailHog. Una línea de comandos estándar de Windows se abrirá donde MailHog se ejecutará una vez que se conceda acceso al cortafuegos.

Finalice MailHog cerrando la ventana del intérprete de comandos. Para iniciar MailHog de nuevo, haga clic en el archivo ejecutable de MailHog (.exe) que se descargó inicialmente - no es necesario descargar de nuevo el archivo de instalación de MailHog.

Empieza [a usar MailHog](#using-mailhog).

### Instalando MailHog en Linux

Primero, instala [Go](https://golang.org).

Ejecute los siguientes comandos para instalar GO en sistemas basados en Debian como Ubuntu y Linux Mint.

```bash
sudo apt-get install golang
```

Ejecute los siguientes comandos para instalar GO en sistemas basados en RPM como CentOS, Fedora, Red Hat Linux, etc.

```bash
sudo dnf install golang
```

Alternativamente, ejecute los siguientes comandos para instalar GO.

```bash
sudo yum install golang
```

Ahora establezca la ruta para Go con los siguientes comandos.

```bash
echo "export GOPATH=$HOME/go" >> ~/.profile
echo 'export PATH=$PATH:/usr/local/go/bin:$GOPATH/bin' >> ~/.profile
source ~/.profile
```

Finalmente, introduzca los siguientes comandos para instalar y ejecutar MailHog.

```bash
go get github.com/mailhog/MailHog
sudo cp /home/$(whoami)/go/bin/MailHog /usr/local/bin/mailhog
mailhog
```

Empieza [a usar MailHog](#using-mailhog).

## Usando MailHog

Abra una nueva pestaña o ventana del navegador y vaya a [http://localhost:8025](http://localhost:8025) para abrir su bandeja de entrada de MailHog cuando se haya completado la instalación y éste se encuentre funcionando. La bandeja de entrada aparecerá similar a la captura de pantalla de abajo.

![Captura de pantalla de MailHog 1](https://contribute.freecodecamp.org/images/mailhog/1.jpg)

Los correos enviados por tu instalación de freeCodeCamp aparecerán como se presenta a continuación

![Captura de pantalla de MailHog 2](https://contribute.freecodecamp.org/images/mailhog/2.jpg)

Dos pestañas que le permiten ver texto plano o contenido fuente estarán disponibles cuando abra un determinado correo electrónico. Asegúrese de que la pestaña de texto plano está seleccionada como abajo.

![Captura de pantalla de MailHog 3](https://contribute.freecodecamp.org/images/mailhog/3.jpg)

Todos los enlaces en el correo electrónico deben poder ser pulsados y resueltos a su URL.

## Enlaces útiles

- Revisa el repositorio de [MailHog](https://github.com/mailhog/MailHog) para más información relacionada con MailHog. También está disponible información adicional sobre configuraciones personalizadas de MailHog.
