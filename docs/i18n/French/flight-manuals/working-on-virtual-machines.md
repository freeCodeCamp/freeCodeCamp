# Manuel de vol pour le travail sur les machines virtuelles

En tant que membre du personnel ou de l'équipe de développement vous avez peut-être eu accès à nos fournisseurs de services cloud comme Azure, Océan numérique, etc.

Voici quelques commandes pratiques que vous pouvez utiliser pour travailler sur les Machines Virtuelles (VM), par exemple en effectuant des mises à jour de maintenance ou en effectuant des opérations de maintenance générales.

# Obtenir une liste des VMs

> [!NOTE] Bien que vous ayez peut-être déjà un accès SSH aux VMs, qui à lui seul ne vous laissera pas lister les machines virtuelles à moins que vous ne soyez également autorisé à accéder aux portails du cloud.

## Azure

Installez Azure CLI `az`: https://docs.microsoft.com/en-us/cli/azure/install-azure-cli

> **(One-fois) Installer sur macOS avec [`homebrew`](https://brew.sh):**

```
installer azure-cli
```

> **(Unique) Connexion :**

```
az login
```

> **Récupère la liste des noms de VM et des adresses P :**

```
az vm list-ip-Adresses --table de sortie
```

## Océan numérique

Installez Digital Ocean CLI `doctl`: https://github.com/digitalocean/doctl#installing-doctl

> **(One-fois) Installer sur macOS avec [`homebrew`](https://brew.sh):**

```
installer doctl
```

> **(Unique) Connexion :**

Changement d'authentification et de contexte : https://github.com/digitalocean/doctl#authenticating-with-digitalocean

```
Init d'authentification doctl
```

> **Récupère la liste des noms de VM et des adresses IP :**

```
doctl compute droplet list --format "ID,Name,PublicIPv4"
```

# Faire tourner une VM (ou un set d'échelle de VM)

> Todo: Ajouter des instructions pour faire tourner des VM(s)


<!--

The below instructions are stale.

### 0. Prerequisites (workspace Setup) for Staff

Get a login session on `azure cli`, and clone the
[`infra`](https://github.com/freeCodeCamp/infra) for setting up template
workspace.

```console
az login
git clone https://github.com/freeCodeCamp/infra
cd infra
```

Use the Scratchpad subdirectory for temporary files, and making one-off edits.
The contents in this subdirectory are intentionally ignored from source control.

### 1. Provision VMs on Azure.

List all Resource Groups

```console
az group list --output table
```

```console
Name                               Location       Status
---------------------------------  -------------  ---------
tools-rg                           eastus         Succeeded
```

Create a Resource Group

```
az group create --location eastus --name stg-rg
```

```console
az group list --output table
```

```console
Name                               Location       Status
---------------------------------  -------------  ---------
tools-rg                           eastus         Succeeded
stg-rg                             eastus         Succeeded
```

Next per the need, provision a single VM or a scaleset.

#### A. provision single instances

```console
az vm create \
  --resource-group stg-rg-eastus \
  --name <VIRTUAL_MACHINE_NAME> \
  --image UbuntuLTS \
  --size <VIRTUAL_MACHINE_SKU>
  --custom-data cloud-init/nginx-cloud-init.yaml \
  --admin-username <USERNAME> \
  --ssh-key-values <SSH_KEYS>.pub
```

#### B. provision scaleset instance

```console
az vmss create \
  --resource-group stg-rg-eastus \
  --name <VIRTUAL_MACHINE_SCALESET_NAME> \
  --image UbuntuLTS \
  --size <VIRTUAL_MACHINE_SKU>
  --upgrade-policy-mode automatic \
  --custom-data cloud-init/nginx-cloud-init.yaml \
  --admin-username <USERNAME> \
  --ssh-key-values <SSH_KEYS>.pub
```

> [!NOTE]
>
> - The custom-data config should allow you to configure and add SSH keys,
>   install packages etc. via the `cloud-init` templates in your local
>   workspace. Tweak the files in your local workspace as needed. The cloud-init
>   config is optional and you can omit it completely to do setups manually as
>   well.
>
> - The virtual machine SKU is something like: **Standard_B2s** which can be
>   retrived by executing something like
>   `az vm list-sizes -l eastus --output table` or checking the Azure portal
>   pricing.

-->

# Garder les VM à jour

Vous devriez tenir les MVV à jour en effectuant des mises à jour et des mises à jour. Ceci assurera que la machine virtuelle est corrigée avec les dernières corrections de sécurité.

> [!WARNING] Avant d'exécuter ces commandes:
> 
> - Assurez-vous que la VM a été entièrement fournie et qu'il n'y a pas d'étapes de post-installation en cours d'exécution.
> - Si vous mettez à jour des paquets sur une machine virtuelle qui sert déjà une application, assurez-vous que l'application a été arrêtée / sauvegardée. Les mises à jour de paquets provoqueront des pics d'utilisation de la bande passante du réseau, de la mémoire et/ou du CPU qui provoqueront des pannes sur applications en cours d'exécution.

Mettre à jour les informations du paquet

```console
mise à jour de sudo apt
```

Mettre à jour les paquets installés

```console
mise à jour de sudo apt -y
```

Nettoyer les paquets inutilisés

```console
sudo apt suppression automatique -y
```

# Travailler sur les serveurs Web (Proxy)

Nous exécutons des instances équilibrées de charge (Azure Load Balancer) pour nos serveurs Web. Ces serveurs exécutent NGINX qui inverse la totalité du trafic vers freeCodeCamp.org à partir de diverses applications exécutées sur leurs propres infrastructures .

La configuration NGINX est disponible sur [ce dépôt](https://github.com/freeCodeCamp/nginx-config).

## Première installation

Fournir des VM avec le Code

### 1. (Facultatif) Installez NGINX et configurez depuis le référentiel.

La configuration de base devrait être prête à OOTB, via la configuration de cloud-init. SSH et apporter les modifications nécessaires pour les instances particulières.

Si vous n'avez pas utilisé la configuration cloud-init précédemment utilisez la configuration manuelle de NGINX et des pages d'erreur:

```console
sudo su

cd /var/www/html
git clone https://github.com/freeCodeCamp/error-pages

cd /etc/
rm -rf nginx
git clone https://github.com/freeCodeCamp/nginx-config nginx

cd /etc/nginx
```

### 2. Installez les certificats d'origine Cloudflare et la configuration de l'application amont.

Obtenez les certificats d'origine Cloudflare à partir du stockage sécurisé et installez à emplacements requis.

**OU**

Déplacez les certificats existants :

```console
# Local
scp -r username@source-server-public-ip:/etc/nginx/ssl ./
scp -pr ./ssl username@target-server-public-ip:/tmp/

# Remote
rm -rf ./ssl
mv /tmp/ssl ./
```

Mettre à jour les configurations amont :

```console
vi configs/upstreams.conf
```

Ajouter/mettre à jour les adresses IP de l'application source/originale.

### 3. Configurer les réseaux et les pare-feu.

Configurez les pare-feu Azure et `ufw` comme requis pour les adresses d'origine d'entrée.

### 4. Ajouter la machine virtuelle au pool de gestion de l'équilibreur de charge.

Configurer et ajouter des règles à l'équilibrage de charge si nécessaire. Vous pouvez également avoir besoin d'ajouter les machines virtuelles pour charger le pool d'arrières d'équilibrage si nécessaire.

## Journalisation et surveillance

1. Vérifier l'état du service NGINX en utilisant la commande ci-dessous :

```console
sudo systemctl status nginx
```

2. La journalisation et la surveillance des serveurs sont disponibles à:

> <h3 align="center"><a href='https://amplify.nginx.com' _target='blank'>https://amplify.nginx.com</a></h3>
## Mise à jour des instances (maintenance)

Les changements de configuration de nos instances NGINX sont maintenus sur GitHub, ils devraient être déployés sur chaque instance comme ceci :

1. SSH dans l'instance et entrez sudo

```console
sudo su
```

2. Récupère le dernier code de configuration.

```console
cd /etc/nginx
git fetch --all --prune
git reset --hard origin/master
```

3. Testez et rechargez la configuration [avec Signaux](https://docs.nginx.com/nginx/admin-guide/basic-functionality/runtime-control/#controlling-nginx).

```console
nginx -t
nginx -s reload
```

# Travail sur les instances API

1. Installer des outils de compilation pour les binaires de noeuds (`node-gyp`) etc.

```console
sudo apt install build-essential
```

## Première installation

Fournir des VM avec le Code

1. Installer Node LTS.

2. Mettez à jour `npm` et installez PM2 et configurez logrotate et startup au démarrage

   ```console
   npm i -g npm
   npm i -g pm2
   pm2 install pm2-logrotate
   pm2 startup
   ```

3. Cloner freeCodeCamp, configurer l'env et les clés.

   ```console
   git clone https://github.com/freeCodeCamp/freeCodeCamp.git
   cd freeCodeCamp
   git checkout production-current # ou toute autre branche à déployer
   ```

4. Créez le fichier `.env` à partir du stockage sécurisé des identifiants.

5. Créez le `google-credentials.json` à partir du stockage sécurisé des identifiants.

6. Installer les dépendances

   ```console
   npm ci
   ```

7. Construire le serveur

   ```console
   npm exécute ensure-env && npm exécuter build:server
   ```

8. Instances de démarrage

   ```console
   cd api-server
   pm2 start production-start.js -i max --max-memory-restart 600M --name org
   ```

## Journalisation et surveillance

```console
logs pm2
```

```console
pm2 monit
```

## Mise à jour des instances (maintenance)

Les changements de code doivent être déployés de temps à autre dans les instances de l'API. Il peut s'agir d'une mise à jour roulante ou d'une mise à jour manuelle. Ce dernier est essentiel lors de la modification des dépendances ou de l'ajout de variables d'environnement.

> [!DANGER] Les pipelines automatisés ne gèrent pas les mises à jour des dépendances à la minute . Nous devons faire une mise à jour manuelle avant tout déploiement de pipeline.

### 1. Mises à jour manuelles - Utilisées pour la mise à jour des dépendances, des variables env.

1. Arrêter toutes les instances

```console
pm2 stopper tout
```

2. Installer les dépendances

```console
npm ci
```

3. Construire le serveur

```console
npm exécute ensure-env && npm exécuter build:server
```

4. Instances de démarrage

```console
pm2 démarre tous les logs --update-env && pm2
```

### 2. Mises à jour de roulage - Utilisé pour les modifications logiques du code.

```console
pm2 rechargement de tous les logs --update-env && pm2
```

> [!NOTE] Nous gérons des mises à jour en rouleau de code, logique, via des pipelines. Vous ne devriez pas avoir besoin d'exécuter ces commandes. Celles-ci sont ici pour la documentation.

# Travail sur les instances du client

1. Installer des outils de compilation pour les binaires de noeuds (`node-gyp`) etc.

```console
sudo apt install build-essential
```

## Première installation

Fournir des VM avec le Code

1. Installer Node LTS.

2. Mettez à jour `npm` et installez PM2 et configurez logrotate et startup au démarrage

   ```console
   npm i -g npm
   npm i -g pm2
   npm install -g serve
   pm2 install pm2-logrotate
   pm2 startup
   ```

3. Cloner la configuration du client, l'env de configuration et les clés.

   ```console
   git clone https://github.com/freeCodeCamp/client-config.git client
   cd client
   ```

   ```console
   git clone https://github.com/freeCodeCamp/client-config.git client
   cd client
   ```

   Instances placeholder de démarrage pour le client web, celles-ci seront mises à jour avec artefacts de la pipline Azure.

   > Todo: Cette configuration doit être déplacée vers le stockage S3 ou Azure Blob 
   > 
   > ```console
   echo "serve -c ../../serve.json www -p 50505" >> client-start-primary.sh
   chmod +x client-start-primary. h
   pm2 supprimer client-primary
   pm2 start . client-start-primary.sh --name client-primary
   echo "serve -c . /../serve.json www -p 52525" >> client-start-secondary.sh
   chmod +x client-start-secondary. h
   pm2 supprimer client-secondaire
   pm2 start ./client-start-secondy.sh --name client-secondaire
```

## Journalisation et surveillance

```console
logs pm2
```

```console
pm2 monit
```

## Mise à jour des instances (maintenance)

Les changements de code doivent être déployés de temps à autre dans les instances de l'API. Il peut s'agir d'une mise à jour roulante ou d'une mise à jour manuelle. Ce dernier est essentiel lors de la modification des dépendances ou de l'ajout de variables d'environnement.

> [!DANGER] Les pipelines automatisés ne gèrent pas les mises à jour des dépendances à la minute . Nous devons faire une mise à jour manuelle avant tout déploiement de pipeline.

### 1. Mises à jour manuelles - Utilisées pour la mise à jour des dépendances, des variables env.

1. Arrêter toutes les instances

   ```console
   pm2 stopper tout
   ```

2. Installer ou mettre à jour les dépendances

3. Instances de démarrage

   ```console
   pm2 démarre tous les logs --update-env && pm2
   ```

### 2. Mises à jour de roulage - Utilisé pour les modifications logiques du code.

```console
pm2 rechargement de tous les logs --update-env && pm2
```

> [!NOTE] Nous gérons des mises à jour en rouleau de code, logique, via des pipelines. Vous ne devriez pas avoir besoin d'exécuter ces commandes. Celles-ci sont ici pour la documentation.
