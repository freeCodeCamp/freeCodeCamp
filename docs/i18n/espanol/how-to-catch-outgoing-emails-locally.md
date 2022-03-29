> **Nota:** Este es un **paso opcional** y es necesario solo cuando se trabaja con flujos de trabajo de correo electrónico

- [Introducción](#introduction)
- [Instalando MailHog](#installing-mailhog)
- [Usando MailHog](#using-mailhog)
- [Enlaces útiles](#useful-links)

## Introducción

Algunos flujos de trabajo de correo electrónico, como actualizar el correo electrónico de un usuario, requiere del servidor API en back-end para enviar correos salientes. MailHog es una alternativa al uso de un proveedor de servicios de correo electrónico para enviar correos electrónicos reales. Es una theyrramienta de desarrollo para pruebas de correo electrónico que capturará los mensajes de correo electrónico enviados por tu instancia de freeCodeCamp.

## Instalando MailHog

MailHog puede ser instalado en macOS, Windows y Linux o usado via Docker

<details><summary>Instalando MailHog con Docker</summary>

Si ya tienes Docker instalado puedes usar

```bash
docker run -d --name mailhog --network host --rm mailhog/mailhog
```

Para iniciar MailHog en segundo plano y

```bash
docker stop mailhog
```

Para frenarlo.

Cuando la instalación finalice, puedes comenzar a [usar MailHog](#using-mailhog).

</details>

<details><summary>Instalando MailHog en macOS</summary>

Instalando MailHog en macOS con [Homebrew](https://brew.sh/):

```bash
brew install mailhog
brew services start mailhog
```

Los comandos anteriores iniciarán una instancia de mailhog en segundo plano.

Cuando la instalación finalice, puedes comenzar a [usar MailHog](#using-mailhog).

</details>

<details><summary>Instalando MailHog en Windows</summary>

Descarga la última versión de MailHog del [repositorio oficial de MailHog](https://github.com/mailhog/MailHog/releases). Ubica y haz clic en el enlace para tu versión de Windows (32 o 64 bits) y se descargará un archivo .exe en tu computadora.

Cuando la descarga finalice, haz clic en el archivo para abrirlo. Puede aparecer una notificación del cortafuegos de Windows solicitando permiso de acceso para MailHog. Se abrirá una línea de comandos estándar de Windows donde se ejecutará MailHog una vez que se le otorgue el permiso del cortafuegos.

Detén MailHog cerrando la ventana de comandos. Para iniciar MailHog nuevamente, haz clic en el archivo ejecutable de MailHog (.exe) que se descargó inicialmente; no es necesario descargar un nuevo archivo de instalación de MailHog.

Comienza a [usar MailHog](#using-mailhog).

</details>

<details><summary>Instalando MailHog en Linux</summary>

Primero, instala [Go](https://golang.org).

Ejecuta los siguientes comandos para instalar GO en sistemas basados en Debian como Ubuntu y Linux Mint.

```bash
sudo apt-get install golang
```

Ejecuta los siguientes comandos para instalar GO en sistemas basados en RPM como CentOS, Fedora, Red Hat Linux, etc.

```bash
sudo dnf install golang
```

Alternativamente, ejecuta los siguientes comandos para instalar GO.

```bash
sudo yum install golang
```

Ahora establece la ruta para Go con los siguientes comandos.

```bash
echo "export GOPATH=$HOME/go" >> ~/.profile
echo 'export PATH=$PATH:/usr/local/go/bin:$GOPATH/bin' >> ~/.profile
source ~/.profile
```

Finalmente, ingresa los siguientes comandos para instalar y ejecutar MailHog.

```bash
go get github.com/mailhog/MailHog
sudo cp /home/$(whoami)/go/bin/MailHog /usr/local/bin/mailhog
mailhog
```

Comienza a [usar MailHog](#using-mailhog).

</details>

## Usando MailHog

Abre una nueva pestaña o ventana del navegador y dirígete a [http://localhost:8025](http://localhost:8025) para abrir tu bandeja de entrada de MailHog una vez este instalado y en funcionamiento. La bandeja de entrada aparecerá similar a la captura de pantalla de abajo.

![Captura de pantalla de MailHog 1](https://contribute.freecodecamp.org/images/mailhog/1.jpg)

Los correos enviados por tu instalación de freeCodeCamp aparecerán como se presenta a continuación

![Captura de pantalla de MailHog 2](https://contribute.freecodecamp.org/images/mailhog/2.jpg)

Dos pestañas que te permiten ver texto plano o contenido fuente estarán disponibles cuando abras un correo electrónico dado. Asegúrate de que la pestaña de texto plano está seleccionada de la siguiente personera.

![Captura de pantalla de MailHog 3](https://contribute.freecodecamp.org/images/mailhog/3.jpg)

Todos los enlaces en el correo electrónico deben poder ser cliqueables y resolver a sus respectivos URL.

## Enlaces útiles

- Revisa el repositorio de [MailHog](https://github.com/mailhog/MailHog) para más información relacionada con MailHog. También está disponible información adicional sobre configuraciones personalizadas de MailHog.
