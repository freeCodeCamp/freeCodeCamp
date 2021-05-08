> **Nota:** Este es un **paso opcional** y es necesario solo cuando se trabaja con flujos de trabajo de correo electrónico

## Introducción

Algunos flujos de trabajo de correo electrónico, como actualizar el correo electrónico de un usuario, requiere del servidor API en back-end para enviar correos salientes. Una alternativa al uso de un proveedor de correo electrónico para enviar mensajes de correo reales, es Mailhog, una herramienta de desarrollo para pruebas por correo electrónico que captará los mensajes de correo electrónico enviados por tu instancia de freeCodeCamp.

## Instalando MailHog

MailHog puede instalarse en macOS, Windows y Linux.

- [Introducción](#introduction)
- [Instalando MailHog](#installing-mailhog)
  - [Installing MailHog with Docker](#installing-mailhog-with-docker)
  - [Installing MailHog on macOS](#installing-mailhog-on-macos)
  - [Installing MailHog on Windows](#installing-mailhog-on-windows)
  - [Installing MailHog on Linux](#installing-mailhog-on-linux)
- [Usando MailHog](#using-mailhog)
- [Enlaces útiles](#useful-links)

### Installing MailHog with Docker

If you have Docker installed then you can use

```bash
docker run -d --name mailhog --rm mailhog/mailhog
```

to start MailHog in the background and

```bash
docker stop mailhog
```

to stop it.

When the installation completes, you can start [using MailHog](#using-mailhog).

### Installing MailHog on macOS

Install MailHog on macOS with [Homebrew](https://brew.sh/):

```bash
brew install mailhog
brew services start mailhog
```

The above commands will start a mailhog service in the background.

When the installation completes, you can start [using MailHog](#using-mailhog).

### Installing MailHog on Windows

Download the latest version of MailHog from [MailHog's official repository](https://github.com/mailhog/MailHog/releases). Locate and click on the link for your Windows version (32 or 64 bit) and a .exe file will be downloaded to your computer.

When the download completes, click to open the file. A Windows firewall notification may appear, requesting access permission for MailHog. A standard Windows command line prompt will open where MailHog will be running once firewall access is granted.

Close MailHog by closing the command prompt window. To start MailHog again, click on the MailHog executable (.exe) file that was downloaded initially - it is not necessary to download a new MailHog installation file.

Start [using MailHog](#using-mailhog).

### Installing MailHog on Linux

First, install [Go](https://golang.org).

Run the following commands to install GO on Debian-based systems like Ubuntu and Linux Mint.

```bash
sudo apt-get install golang
```

Run the following commands to install GO on RPM-based systems like CentOS, Fedora, Red Hat Linux, etc.

```bash
sudo dnf install golang
```

Alternatively, run the following commands to install GO.

```bash
sudo yum install golang
```

Now set the path for Go with the following commands.

```bash
echo "export GOPATH=$HOME/go" >> ~/.profile
echo 'export PATH=$PATH:/usr/local/go/bin:$GOPATH/bin' >> ~/.profile
source ~/.profile
```

Finally, enter the commands below to install and run MailHog.

```bash
go get github.com/mailhog/MailHog
sudo cp /home/$(whoami)/go/bin/MailHog /usr/local/bin/mailhog
mailhog
```

Start [using MailHog](#using-mailhog).

## Usando MailHog

Open a new browser tab or window and navigate to [http://localhost:8025](http://localhost:8025) to open your MailHog inbox when the MailHog installation has completed and MailHog is running. The inbox will appear similar to the screenshot below.

![MailHog Screenshot 1](https://contribute.freecodecamp.org/images/mailhog/1.jpg)

Emails sent by your freeCodeCamp installation will appear as below

![MailHog Screenshot 2](https://contribute.freecodecamp.org/images/mailhog/2.jpg)

Two tabs that allow you to view either plain text or source content will be available when you open a given email. Ensure that the plain text tab is selected as below.

![MailHog Screenshot 3](https://contribute.freecodecamp.org/images/mailhog/3.jpg)

All links in the email should be clickable and resolve to their URL.

## Enlaces útiles

- Revisa el repositorio de [MailHog](https://github.com/mailhog/MailHog) para más información relacionada con MailHog. También está disponible información adicional sobre configuraciones personalizadas de MailHog.
