<!-- do not translate this -->
| [Read these guidelines in other languages](/docs/i18n-languages) |
|-|
<!-- do not translate this -->

# Como trabajar con correos salientes localmente (para flujos de trabajo de correo electrónico)

> **Nota:** Este es un paso **Opcional** - Solo es requerido cuando trabajamos con flujos de trabajo de correo electrónico

## Introducción

Algunos flujos de trabajo de correo electrónico, como actualizar el correo electrónico de un usuario, requieren que la API del servidor back-end  envíe correos electrónicos. Durante el proceso de desarrollo podemos usar una herramienta para obtenerlos localmente, en lugar de tener que usar un proveedor de correo electrónico y enviar un correo electrónico real. **MailHog** es una de las muchas herramientas de prueba de correo electrónico para desarrolladores, que detectará los correos electrónicos que envíe tu instancia local de freeCodeCamp.


## Instalando MailHog

El proceso para instalar y usar MailHog depende de tu sistema operativo

- [Instalando MailHog en macOS](#instalando-mailhog-en-macos)
- [Instalando MailHog en Windows](#instalando-mailhog-en-windows)
- [Instalando MailHog en Linux](#instalando-mailhog-en-linux)

### Instalando MailHog en MacOS

Aquí podemos ver cómo instalar MailHog en macOS con [Homebrew](https://brew.sh/):


```bash
brew install mailhog
brew services start mailhog
```

Esto iniciará un servicio de MailHog en segundo plano.

Siguiente, puedes ir a [usando MailHog](#usando-mailhog).

### Instalando MailHog en Windows

Descarga la versión más reciente de MailHog en [el repositorio oficial](https://github.com/mailhog/MailHog/releases). Clic en el link dependiendo de tu versión de Windows (32 ó 64 bit) y el archivo .exe será descargado a tu computadora.

Una vez que termine la descarga, haz clic en el archivo. Probablemente recibirás una notificación del firewall de Windows donde tendrás que permitir el acceso a MailHog. Una vez que lo hagas, se abrirá una línea de comando estándar de Windows con MailHog ya en ejecución.

Para cerrar MailHog, cierra el símbolo del sistema. Para volver a ejecutarlo, haz clic en el mismo archivo .exe. No necesitas descargar uno nuevo.

Siguiente, puedes ir a [usando MailHog](#usando-mailhog).

### Instalando MailHog en Linux

Primero debes instalar [Go](https://golang.org).

Para sistemas basados en Debian como Ubuntu y Linux Mint, ejecuta en la terminal:

```
bash
sudo apt-get install golang
```

Para CentOS, Fedora, Red Hat Linux y otros sistemas basados en RPM, ejecuta en la terminal:

```bash
sudo dnf install golang
```

O:

```bash
sudo yum install golang
```

Establece la ruta de directorio para Go:

```bash
echo "export GOPATH=$HOME/go" >> ~/.profile
echo 'export PATH=$PATH:/usr/local/go/bin:$GOPATH/bin' >> ~/.profile
source ~/.profile
```

Finalmente, instala y corre MailHog:

```bash
go get github.com/mailhog/MailHog
sudo cp /home/$(whoami)/go/bin/MailHog /usr/local/bin/mailhog
mailhog
```

Siguiente, puedes ir a [usando MailHog](#usando-mailhog).

## Usando MailHog

Una vez que hayas instalado MailHog y lo hayas iniciado, debes abrir tu bandeja de entrada de MailHog en tu navegador, abriendo una nueva pestaña o ventana y navegar a [http://localhost:8025] (http://localhost:8025). Ahora deberías ver una pantalla como la siguiente:

![Captura de pantalla MailHog 1](../../images/mailhog/1.jpg)

Cuando la instalación de freeCodeCamp envíe un correo electrónico, verás que aparece aquí. Como se muestra en la siguiente imagen:

![Captura de pantalla MailHog 2](../../images/mailhog/2.jpg)

Abre el correo y verás dos pestañas donde puedes ver el contenido: **plain text** (texto sin formato) y **source** (fuente). Asegúrate de que estás en la pestaña de texto sin formato.

![Captura de pantalla MailHog 3](../../images/mailhog/3.jpg)

Cualquier enlace en el correo electrónico debe redireccionar.

## Enlaces útiles

- Para cualquier otra pregunta relacionada con MailHog o para obtener instrucciones sobre configuraciones personalizadas, consulte el repositorio de [MailHog](https://github.com/mailhog/MailHog).
