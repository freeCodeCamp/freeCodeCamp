# Configurar freeCodeCamp en el subsistema de Windows para Linux (WSL)

> [!NOTE] Antes de seguir estas instrucciones asegúrate de que tu sistema cumple con los requisitos
> 
> **WSL 2**: Windows 10 64-bit (Versión 2004, Build 19041 o superior) - disponible para todas las distribuciones incluyendo Windows 10 Home.
> 
> **Docker Desktop para Windows**: Vea los requisitos correspondientes para [Windows 10 Pro](https://docs.docker.com/docker-for-windows/install/#system-requirements) y [Windows 10 Home](https://docs.docker.com/docker-for-windows/install-windows-home/#system-requirements)

Esta guía cubre algunos pasos comunes con la configuración de WSL2. Once some of the common issues with WSL2 are addressed, you should be able to follow [this local setup guide](https://contribute.freecodecamp.org/#/how-to-setup-freecodecamp-locally) to work with freeCodeCamp on Windows running a WSL distro like Ubuntu.

## Habilitar WSL

Siga las instrucciones de la [documentación oficial](https://docs.microsoft.com/en-us/windows/wsl/install-win10) para instalar WSL1 y luego actualice a WSL2.

## Instalar Ubuntu

1. Recomendamos usar Ubuntu-18.04 o superior con WSL2.

   > [!NOTE]
   > 
   > Aunque usted puede utilizar otras distribuciones no basadas en debian, todas vienen con sus propios complicaciones y están más allá del alcance de esta guía.

2. Actualizar las dependencias del sistema operativo

   ```console
   sudo apt update
   sudo apt upgrade -y

   # cleanup
   sudo apt autoremove -y
   ```

## Configurar Git

Git comes pre-installed with Ubuntu 18.04, verify your Git version with `git --version`.

```output
~
❯ git --version
git version 2.25.1
```

(Opcional, pero recomendado) Ahora puedes proceder a [configurar tus claves ssh](https://help.github.com/articles/generating-an-ssh-key) con GitHub.

## Instalar un editor de código

Recomendamos encarecidamente instalar [Visual Studio Code](https://code.visualstudio.com) en Windows 10. Posee un gran soporte para WSL e instala automáticamente todas las extensiones necesarias en tu distribución de WSL.

Esencialmente, editará y almacenará su código en Ubuntu-18.04 con el VS Code instalado en Windows.

If you use [IntelliJ Idea](https://www.jetbrains.com/idea/), you may need to update your Node interpreter and Npm package manager to what is installed on your WSL distro.

You can check these settings by going to Settings > Languages & Frameworks > Node.js and NPM.

## Instalando Docker Desktop

**Docker Desktop for Windows** allows you to install and run databases like MongoDB and other services like NGINX and more. This is useful to avoid common pitfalls with installing MongoDB or other services directly on Windows or WSL2.

Follow the instructuction on the [official documentation](https://docs.docker.com/docker-for-windows/install) and install Docker Desktop for your Windows distribution.

There are some minimum hardware requirements for the best experience.

## Configurar Docker Desktop para WSL

Once Docker Desktop is installed, [follow these instructions](https://docs.docker.com/docker-for-windows/wsl) and configure it to use the Ubuntu-18.04 installation as a backend.

This makes it so that the containers run on the WSL side instead of running on Windows. You will be able to access the services over `http://localhost` on both Windows and Ubuntu.

## Instalar MongoDB desde Docker Hub

Once you have configured Docker Desktop to work with WSL2, follow these steps to start a MongoDB service:

1. Iniciar una nueva terminal Ubuntu-18.04

2. Pull `MongoDB 4.0.x` from dockerhub

   ```console
   docker pull mongo:4.0
   ```

3. Iniciar el servicio MongoDB en el puerto `27017`y configurarlo para que se ejecute automáticamente al reiniciar el sistema

   ```console
   docker run -it \
     -v mongodata:/data/db \
     -p 27017:27017 \
     --name mongodb \
     --restart unless-stopped \
     -d mongo:4.0
   ```

4. Ahora puede acceder al servicio desde Windows o Ubuntu en `mongodb://localhost:27017`.

## Instalando Node.js y npm

We recommend you install the LTS release for Node.js with a node version manager - [nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

Once installed use these commands to install and use the Node.js version as needed

```console
nvm install --lts

# O también
# nvm install <version>

nvm install 14

# Uso
# nvm use <version>

nvm use 12
```

Node.js comes bundled with `npm`, you can update to the latest versions of `npm` with:

```console
npm install -g npm@latest
```

## Configurar freeCodeCamp localmente

Now that you have installed the pre-requisites, follow [our local setup guide](https://contribute.freecodecamp.org/#/how-to-setup-freecodecamp-locally) to clone, install and setup freeCodeCamp locally on your machine.

> [!WARNING]
> 
> Tenga en cuenta que en este momento la configuración para las pruebas de Cypress (y las necesidades relacionadas con la interfaz de usuario) es un trabajo en curso. Aún así deberías poder trabajar en la mayor parte del código base.

## Enlaces útiles

- [Configuración de desarrollador de WSL2 con Ubuntu 20.04, Node.js, MongoDB, VS Code y Docker](https://devlog.sh/wsl2-dev-setup-with-ubuntu-nodejs-mongodb-and-docker) - un artículo de Mrugesh Mohapatra (desarrollador de Staff en freeCodeCamp.org)
- Preguntas frecuentes sobre:
  - [Subsistema de Windows para Linux](https://docs.microsoft.com/en-us/windows/wsl/faq)
  - [Docker Desktop para Windows](https://docs.docker.com/docker-for-windows/faqs)
