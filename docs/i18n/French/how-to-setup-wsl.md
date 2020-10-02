# Configurer freeCodeCamp sur le sous-système Windows pour Linux (WSL)

> [!NOTE] Avant de suivre ces instructions, assurez-vous que votre système répond aux exigences
> 
> **WSL 2**: Windows 10 64 bits (Version 2004, Build 19041 ou supérieure) - disponible pour toutes les distributions, y compris Windows 10 Home.
> 
> **Docker Desktop pour Windows**: Voir les exigences respectives pour [Windows 10 Pro](https://docs.docker.com/docker-for-windows/install/#system-requirements) et [Windows 10 Home](https://docs.docker.com/docker-for-windows/install-windows-home/#system-requirements)

Ce guide couvre certaines étapes courantes avec la configuration de WSL2. Une fois que certains des problèmes courants avec WSL2 sont résolus, vous devriez être en mesure de suivre notre guide de configuration locale pour travailler avec freeCodeCamp sur Windows en exécutant une distribution WSL comme Ubuntu.

## Activer le WSL

Suivez les instructions sur la [documentation officielle](https://docs.microsoft.com/en-us/windows/wsl/install-win10) pour installer WSL1 et ensuite la mise à niveau vers WSL2.

## Install Ubuntu

1. Nous vous recommandons d'utiliser Ubuntu-18.04 ou plus avec WSL2.

   > [!NOTE]
   > 
   > Bien que vous puissiez utiliser d'autres distributions basées sur non-Debian, elles sont toutes livrées avec leurs propres gotchas et sont hors de portée de ce guide.

2. Mettre à jour les dépendances de l'OS

   ```console
   sudo apt update
   sudo apt upgrade -y

   # cleanup
   sudo apt autoremove -y
   ```

## Configurer Git

Git est livré pré-installé avec Ubuntu 18.04, vérifiez que votre version Git avec `git --version`.

```output
~
<unk> git --version
git version 2.25.1
```

(Optionnel mais recommandé) Vous pouvez maintenant procéder à [la configuration de vos clés ssh](https://help.github.com/articles/generating-an-ssh-key) avec GitHub.

## Installation d'un éditeur de code

Nous vous recommandons fortement d'installer [Visual Studio Code](https://code.visualstudio.com) sur Windows 10. Il a un grand support pour WSL et installe automatiquement toutes les extensions nécessaires sur votre distribution WSL.

Essentiellement, vous allez éditer et stocker votre code sur Ubuntu-18.04 avec VS Code installé sur Windows.

## Installation de Docker Desktop

**Docker Desktop for Windows** vous permet d'installer et d'exécuter une base de données et des services tels que MongoDB, NGINX, etc. Ceci est utile pour éviter les pièges courants avec l'installation de MongoDB ou d'autres services directement sur Windows ou WSL2.

Suivez les instructions sur la [documentation officielle](https://docs.docker.com/docker-for-windows/install) et installez Docker Desktop pour votre distribution Windows.

Il y a quelques exigences minimales pour la meilleure expérience.

## Configurer Docker Desktop pour WSL

Une fois Docker Desktop installé, [suivez ces instructions](https://docs.docker.com/docker-for-windows/wsl) et configurez-le pour utiliser l'installation d'Ubuntu-18.04 comme backend.

Cela fait que les conteneurs fonctionnent sur le côté WSL au lieu de fonctionner sous Windows. Vous pourrez accéder aux services via `http://localhost` sur Windows et Ubuntu.

## Installer MongoDB depuis Docker Hub

Une fois que vous avez configuré Docker Desktop pour qu'il fonctionne avec WSL2, suivez ces étapes pour démarrer un service MongoDB :

1. Lancez un nouveau terminal Ubuntu-18.04

2. Tirez `MongoDB 3.6` de dockerhub

   ```console
   docker pull mongo:3
   ```

3. Démarrez le service MongoDB au port `27017`, et configurez-le automatiquement au redémarrage du système

   ```console
   docker run -it \
     -v mongodata:/data/db \
     -p 27017:27017 \
     --name mongodb \
     --restart unless-stopped \
     -d mongo:3
   ```

4. Vous pouvez maintenant accéder au service depuis Windows ou Ubuntu à `mongodb://localhost:27017`.

## Installation de Node.js et npm

Nous vous recommandons d'installer la version LTS pour Node.js avec un gestionnaire de versions de nœuds - [nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

Une fois installé, utilisez ces commandes pour installer et utiliser la version de Node.js si nécessaire

```console
nvm install --lts

# OU
# nvm install <version>

nvm install 14

# Usage
# nvm use <version>

nvm use 12
```

Node.js est livré avec `npm`, vous pouvez mettre à jour vers les dernières versions de `npm` avec:

```console
npm install -g npm@latest
```

## Configurez freeCodeCamp localement

Maintenant que vous avez installé les pré-requis, suivez [notre guide de configuration local](https://contribute.freecodecamp.org/#/how-to-setup-freecodecamp-locally) pour cloner, installer et installer freeCodeCamp localement sur votre machine.

> [!ATTENTION]
> 
> Veuillez noter qu'en ce moment, la mise en place des tests Cypress (et des besoins liés à l'interface graphique) est en cours. Vous devriez quand même pouvoir travailler sur la plupart des codes.

## Liens utiles

- [A WSL2 Dev Setup with Ubuntu 20.04, Node.js, MongoDB, VS Code and Docker](https://devlog.sh/wsl2-dev-setup-with-ubuntu-nodejs-mongodb-and-docker) - un article de Mrugesh Mohapatra (Staff Developer at freeCodeCamp.org)
- Foire aux questions sur:
  - [Sous-système Windows pour Linux](https://docs.microsoft.com/en-us/windows/wsl/faq)
  - [Docker Desktop pour Windows](https://docs.docker.com/docker-for-windows/faqs)
