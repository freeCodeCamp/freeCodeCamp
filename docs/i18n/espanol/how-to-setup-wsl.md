# Configurar freeCodeCamp en el subsistema de Windows para Linux (WSL)

> [!NOTE] Antes de seguir estas instrucciones asegúrate de que tu sistema cumple con los requisitos
> 
> **WSL 2**: Windows 10 64-bit (Versión 2004, Build 19041 o superior) - disponible para todas las distribuciones incluyendo Windows 10 Home.
> 
> **Docker Desktop para Windows**: Vea los requisitos correspondientes para [Windows 10 Pro](https://docs.docker.com/docker-for-windows/install/#system-requirements) y [Windows 10 Home](https://docs.docker.com/docker-for-windows/install-windows-home/#system-requirements)

Esta guía cubre algunos pasos comunes con la configuración de WSL2. Una vez resueltos algunos de los problemas comunes con WSL2, debería ser capaz de seguir nuestra guía de configuración local para trabajar con freeCodeCamp en Windows ejecutando una distribución WSL como Ubuntu.

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

Git viene preinstalado con Ubuntu 18.04, verifique su versión de Git con `git --version`.

```output
~
❯ git --version
git version 2.25.1
```

(Opcional, pero recomendado) Ahora puedes proceder a [configurar tus claves ssh](https://help.github.com/articles/generating-an-ssh-key) con GitHub.

## Instalar un editor de código

Recomendamos encarecidamente instalar [Visual Studio Code](https://code.visualstudio.com) en Windows 10. Posee un gran soporte para WSL e instala automáticamente todas las extensiones necesarias en tu distribución de WSL.

Esencialmente, editará y almacenará su código en Ubuntu-18.04 con el VS Code instalado en Windows.

## Instalando Docker Desktop

**Docker Desktop para Windows** le permite instalar y ejecutar bases de datos y servicios como MongoDB, NGINX, etc. Esto es útil para evitar problemas comunes con la instalación de MongoDB u otros servicios directamente en Windows o WSL2.

Siga las instrucciones de la [documentación oficial](https://docs.docker.com/docker-for-windows/install) e instale Docker Desktop para su distribución de Windows.

Hay algunos requisitos mínimos de hardware para una mejor experiencia.

## Configurar Docker Desktop para WSL

Una vez que Docker Desktop está instalado, [sigue estas instrucciones](https://docs.docker.com/docker-for-windows/wsl) y configúralo para usar la instalación de Ubuntu-18.04 como un backend.

Esto hace que los contenedores se ejecuten en WSL en lugar de ejecutarse en Windows. Podrás acceder a los servicios a través de `http://localhost` tanto en Windows como en Ubuntu.

## Instalar MongoDB desde Docker Hub

Una vez que haya configurado Docker Desktop para trabajar con WSL2, siga estos pasos para iniciar un servicio de MongoDB:

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

Le recomendamos que instale la versión LTS para Node.js con un gestor de versiones de node - [nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

Una vez instalado, use estos comandos para instalar y usar la versión de Node.js según sea necesario

```console
nvm install --lts

# O también
# nvm install <version>

nvm install 14

# Uso
# nvm use <version>

nvm use 12
```

Node.js viene empaquetado con `npm`, puedes actualizar a las últimas versiones de `npm` con:

```console
npm install -g npm@latest
```

## Configurar freeCodeCamp localmente

Ahora que ha instalado los requisitos previos, siga [nuestra guía de configuración local](https://contribute.freecodecamp.org/#/how-to-setup-freecodecamp-locally) para clonar, instalar y configurar freeCodeCamp localmente en su máquina.

> [!WARNING]
> 
> Tenga en cuenta que en este momento la configuración para las pruebas de Cypress (y las necesidades relacionadas con la interfaz de usuario) es un trabajo en curso. Aún así deberías poder trabajar en la mayor parte del código base.

## Enlaces útiles

- [Configuración de desarrollador de WSL2 con Ubuntu 20.04, Node.js, MongoDB, VS Code y Docker](https://devlog.sh/wsl2-dev-setup-with-ubuntu-nodejs-mongodb-and-docker) - un artículo de Mrugesh Mohapatra (desarrollador de Staff en freeCodeCamp.org)
- Preguntas frecuentes sobre:
  - [Subsistema de Windows para Linux](https://docs.microsoft.com/en-us/windows/wsl/faq)
  - [Docker Desktop para Windows](https://docs.docker.com/docker-for-windows/faqs)
