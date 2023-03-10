# Configurar freeCodeCamp en el subsistema de Windows para Linux (WSL)

> [!NOTE] Antes de seguir estas instrucciones asegúrate de que tu sistema cumple con los requisitos
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
   > Aunque usted puede utilizar otras distribuciones no basadas en debian, todas vienen con sus propias complicaciones y están más allá del alcance de esta guía.

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

Recomendamos encarecidamente instalar [Visual Studio Code](https://code.visualstudio.com) en Windows 10. Posee un gran soporte para WSL e instala automáticamente todas las extensiones necesarias en tu distribución de WSL.

Esencialmente, editaras y almacenaras tu código en Ubuntu-18.04 con el VS Code instalado en Windows.

Si utilizas [IntelliJ Idea](https://www.jetbrains.com/idea/), quizás necesites actualizar el intérprete de Node y el gestor de paquetes npm que está instalado en tu distribución WSL.

Puedes chequear estas configuraciones yendo a > Idiomas & Librerías > Node.js y NPM.

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

2. Extrae `MongoDB 4.0.x` desde dockerhub

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

## Configurar freeCodeCamp localmente

Ahora que has instalado los requisitos previos, sigue[nuestra guía de configuración local](how-to-setup-freecodecamp-locally.md) para clonar, instalar y configurar freeCodeCamp localmente en tu máquina.

> [!WARNING]
> 
> Tenga en cuenta que en este momento la configuración para las pruebas Cypress (y las necesidades relacionadas con la interfaz de usuario) son un trabajo en curso. Aún así deberías poder trabajar en la mayor parte del código base.

## Enlaces útiles

- [Una configuración de desarrollador de WSL2 con Ubuntu 20.04, Node.js, MongoDB, VS Code y Docker](https://hn.mrugesh.dev/wsl2-dev-setup-with-ubuntu-nodejs-mongodb-and-docker) - un artículo de Mrugesh Mohapatra (Staff Developer en freeCodeCamp.org)
- Preguntas frecuentes sobre:
  - [Subsistema de Windows para Linux](https://docs.microsoft.com/en-us/windows/wsl/faq)
  - [Docker Desktop para Windows](https://docs.docker.com/docker-for-windows/faqs)
