# Cómo enviar y recibir correos localmente (para flujos de correo)

> **Nota:** Este es un paso **opcional** Sólo se requiere si se trabaja con flujos de correo

## Introducción

Algunas tareas, como actualizar el correo del usuario, requieren que la API del servidor envíe mails. Mientras programas puedes utilizar una herramienta para recoger estos correos localmente, en lugar de tener que utilizar un proveedor extern de correo y enviar mails reales. Mailhog es una herramienta de testeo que permite esta función, capturando los correos enviados por tu versión local de FreeCodeCamp.

## Instalación de MailHog

El proceso de instalacion depende de tu SO

- [Instalar MailHog en macOS](#installing-mailhog-on-macos)
- [Instalar MailHog en Windows](#installing-mailhog-on-windows)
- [Instalar MailHog en Linux](#installing-mailhog-on-linux)

### Instalar MailHog en macOS

Así se configura MailHog en macOS con [Homebrew](https://brew.sh/):

```bash
brew install mailhog
brew services start mailhog
```

Esto iniciará el servicio de mailhog en segundo plano.

Después, puedes visitar [using MailHog](#using-mailhog).

### Instalar MailHog en Windows

Descarga la última versión desde [MailHog's official repository](https://github.com/mailhog/MailHog/releases). Pulsa en el link correspondiente a tu versión Windows (32 o 64 bits) y el erchivo .exe será descargado a tu ordenador.

Una vez descargado, selecciona el archivo. Probablemente recibirás un aviso del Firewall que solicitará permisos para MailHog. Una vez aceptado, un terminal de Windows se abrirá con MailHog iniciado.

Para cerrar MailHog, cierra el terminal. Para volver a activarlo, ejecuta de nueva el archivo .exe. No neceistas decargar uno nuevo.

Después, puedes visitar [using MailHog](#using-mailhog).

### Instalar MailHog en Linux

Primero instala [Go](https://golang.org).

Para sistemas Debian como Ubuntu and Linux Mint, ejecuta:

```bash
sudo apt-get install golang
```

Para CentOS, Fedora, Red Hat Linux, y otros sistemas RPM, ejecuta:

```bash
sudo dnf install golang
```

O:

```bash
sudo yum install golang
```

Establece el directorio de Go:

```bash
echo "export GOPATH=$HOME/go" >> ~/.profile
echo 'export PATH=$PATH:/usr/local/go/bin:$GOPATH/bin' >> ~/.profile
source ~/.profile
```

Instala y ejecuta MailHog:

```bash
go get github.com/mailhog/MailHog
sudo cp /home/$(whoami)/go/bin/MailHog /usr/local/bin/mailhog
mailhog
```

Después, puedes visitar [using MailHog](#using-mailhog).

## Usiar MailHog

Una vez instalado e iniciado MailHog, necesitas abrir tu buzón de correos MailHog en tu navegador abriendo una nueva ventana o  [http://localhost:8025](http://localhost:8025).
Deberías ver una ventana como esta:

![MailHog Screenshot 1](images/mailhog/1.jpg)

Cuando tu versión local de FreeCodeCampo te envíe un correo deberías verlo en la bandeja. Por ejemplo:

![MailHog Screenshot 2](images/mailhog/2.jpg)

Abre el correo y deberías ver dos pestañas donde puedes ver el contenido como texto plano o en formato fuente. Asegura que estás en la pestaña de texto plano.

![MailHog Screenshot 3](images/mailhog/3.jpg)

Cualquier link en el correo debería ser accesible.

## Links útiles

- Para cualquier duda o pregunta relacionada con MailHog o guías de configuración más detalladas, visita el repositorio de [MailHog](https://github.com/mailhog/MailHog).
