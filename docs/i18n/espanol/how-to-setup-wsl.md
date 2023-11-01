# Configurar freeCodeCamp en el subsistema de Windows para Linux (WSL)

> [!NOTE] Before you follow these instructions make sure your system meets the requirements.
> 
> **WSL 2**: Windows 10 64-bit (Versión 2004, Build 19041 o superior) - disponible para todas las distribuciones incluyendo Windows 10 Home.
> 
> **Docker Desktop para Windows**: Vea los requisitos correspondientes para [Windows 10 Pro](https://docs.docker.com/docker-for-windows/install/#system-requirements) y [Windows 10 Home](https://docs.docker.com/docker-for-windows/install-windows-home/#system-requirements)

Esta guía cubre algunos pasos comunes con la configuración de WSL2. Una vez que algunos de los problemas habituales con WSL2 son solucionados, deberías de ser capaz de seguir [esta guía de configuración local](how-to-setup-freecodecamp-locally.md)para trabajar con freeCodeCamp en Windows corriendo una distribución WSL como Ubuntu.

## Habilitar WSL

Sigue las instrucciones de la [documentación oficial](https://docs.microsoft.com/en-us/windows/wsl/install-win10) para instalar WSL1 y luego actualice a WSL2.

## Instalar Ubuntu

1. Recomendamos usar Ubuntu-18.04 o superior con WSL2.

   > [!NOTE]
   > 
   > While you may use other non-Debian-based distributions, they all come with their own 'gotchas' that are beyond the scope of this guide.

2. Actualizar las dependencias del sistema operativo

   ```console
   sudo apt update
   sudo apt upgrade -y

   # cleanup
   sudo apt autoremove -y
   ```

## Configurar Git

Git viene pre-instalado con Ubuntu 18.04, verifica tu versión de Git con `git --version`.

```output
~
❯ git --version
git version 2.25.1
```

(Opcional, pero recomendado) Ahora puedes proceder a [configurar tus claves ssh](https://help.github.com/articles/generating-an-ssh-key) con GitHub.

## Instalar un editor de código

Recomendamos encarecidamente instalar [Visual Studio Code](https://code.visualstudio.com) en Windows 10. It has great support for WSL and automatically installs all the necessary extensions on your WSL distribution.

Esencialmente, editaras y almacenaras tu código en Ubuntu-18.04 con el VS Code instalado en Windows.

If you use [IntelliJ Idea](https://www.jetbrains.com/idea/), you may need to update your Node interpreter and npm package manager to what is installed on your WSL distro.

You can check these settings by going to Settings > Languages & Frameworks > Node.js and npm.

## Instalando Docker Desktop

**Docker Desktop para Windows** te permite instalar y ejecutar bases de datos como MongoDB y otros servicios como NGNIX y más. Esto sirve para evitar trampas cuando se instala Mongo DB u otros servicios directamente desde Windows o WSL2.

Follow the instructions on the [official documentation](https://docs.docker.com/docker-for-windows/install) and install Docker Desktop for your Windows distribution.

Hay unos requrimientos mínimos de hardware para una mejor experiencia.

## Configurar Docker Desktop para WSL

Una vez instalado Docker Desktop, [sigue estas instrucciones](https://docs.docker.com/docker-for-windows/wsl) y configúralo para usar la instalación de Ubuntu-18.04 como un backend.

Esto hace que los contenedores se ejecuten del lado de WSL en vez de Windows. Serás capaz de acceder a servicios de `http://localhost` tanto en Windows como en Ubuntu.

## Instalar MongoDB desde Docker Hub

Una vez que hayas configurado Docker Desktop para trabajar con WSL2, sigue estos pasos para iniciar un servicio MongoDB:

1. Inicia una nueva terminal Ubuntu-18.04

2. Pull `MongoDB 4.0.x` from Docker Hub

   ```console
   docker pull mongo:4.0
   ```

3. Inicia el servicio MongoDB en el puerto `27017`, y configúralo para que se ejecute automáticamente al reiniciar el sistema

   ```console
   docker run -it \
     -v mongodata:/data/db \
     -p 27017:27017 \
     --name mongodb \
     --restart unless-stopped \
     -d mongo:4.0
   ```

4. Ahora puedes acceder al servicio desde Windows o Ubuntu en `mongodb://localhost:27017`.

## Installing Node.js and pnpm

Recomendamos que instales la versión LTS de Node.js con un gestor de versiones de node - [nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

Una vez instalado, usa estos comandos para instalar y usar la versión de Node.js según sea necesario

```console
nvm install --lts

# O también
# nvm install <version>

nvm install 14

# Uso
# nvm use <version>

nvm use 12
```

Node.js comes bundled with `npm`, which you can use to install `pnpm`:

```console
npm install -g pnpm
```

## Set up freeCodeCamp Locally

Now that you have installed the pre-requisites, follow [our local setup guide](how-to-setup-freecodecamp-locally.md) to clone, install and set up freeCodeCamp locally on your machine.

> [!WARNING]
> 
> Please note, at this time the setup for Cypress tests (and related GUI needs) is a work in progress. Aún así deberías poder trabajar en la mayor parte del código base.

## Enlaces útiles

- [A WSL2 Dev Setup with Ubuntu 20.04, Node.js, MongoDB, VS Code, and Docker](https://hn.mrugesh.dev/wsl2-dev-setup-with-ubuntu-nodejs-mongodb-and-docker) - an article by Mrugesh Mohapatra (Staff Developer at freeCodeCamp.org)
- Preguntas frecuentes sobre:
  - [Subsistema de Windows para Linux](https://docs.microsoft.com/en-us/windows/wsl/faq)
  - [Docker Desktop para Windows](https://docs.docker.com/docker-for-windows/faqs)
