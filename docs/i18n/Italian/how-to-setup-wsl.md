# Impostare freeCodeCamp sul sottosistema Windows per Linux (WSL)

> [!NOTA] Prima di seguire queste istruzioni assicurarsi che il sistema soddisfi i requisiti
> 
> **WSL 2**: Windows 10 a 64 bit (Versione 2004, Costruisci 19041 o superiore) - disponibile per tutte le distribuzioni tra cui Windows 10 Home.
> 
> **Docker Desktop for Windows**: Vedi i rispettivi requisiti per [Windows 10 Pro](https://docs.docker.com/docker-for-windows/install/#system-requirements) e [Windows 10 Home](https://docs.docker.com/docker-for-windows/install-windows-home/#system-requirements)

Questa guida copre alcuni passi comuni con la configurazione di WSL2. Una volta affrontati alcuni dei problemi comuni con il WSL2, si dovrebbe essere in grado di seguire la nostra guida di configurazione locale per lavorare con freeCodeCamp su Windows in esecuzione una distro WSL come Ubuntu.

## Abilita WSL

Segui le istruzioni sulla [documentazione ufficiale](https://docs.microsoft.com/en-us/windows/wsl/install-win10) per installare WSL1 e seguiti dall'aggiornamento a WSL2.

## Install Ubuntu

1. Si consiglia l'uso di Ubuntu-18.04 o superiore con WSL2.

   > [!NOTA]
   > 
   > Mentre si può utilizzare altre distanze non debiane basate, tutti vengono con i loro gotcha e sono al di là della portata di questa guida.

2. Aggiorna le dipendenze per il sistema operativo

   ```console
   sudo apt update
   sudo apt upgrade -y

   # cleanup
   sudo apt autoremove -y
   ```

## Imposta Git

Git viene preinstallato con Ubuntu 18.04, verifica che la tua versione Git con `git --version`.

```output
~
<unk> git --version
git versione 2.25.1
```

(Facoltativo ma consigliato) Ora puoi procedere alla [impostazione dei tuoi tasti ssh](https://help.github.com/articles/generating-an-ssh-key) con GitHub.

## Installazione di un editor di codice

Consigliamo vivamente di installare [Visual Studio Code](https://code.visualstudio.com) su Windows 10. Ha un grande supporto per WSL e installa automaticamente tutte le estensioni necessarie sul vostro distro WSL.

Essenzialmente, modificherai e memorizzerai il tuo codice su Ubuntu-18.04 con il codice VS installato su Windows.

## Installazione Del Docker Desktop

**Docker Desktop for Windows** consente di installare ed eseguire database e servizi come MongoDB, NGINX, ecc. Questo è utile per evitare insidie comuni con l'installazione di MongoDB o altri servizi direttamente su Windows o WSL2. Questo è utile per evitare insidie comuni con l'installazione di MongoDB o altri servizi direttamente su Windows o WSL2.

Segui le istruzioni sulla [documentazione ufficiale](https://docs.docker.com/docker-for-windows/install) e installa Docker Desktop per la tua distribuzione di Windows.

Ci sono alcuni requisiti hardware minimi per la migliore esperienza.

## Configura Docker Desktop per WSL

Una volta installato Docker Desktop, [segui queste istruzioni](https://docs.docker.com/docker-for-windows/wsl) e configuralo per utilizzare l'installazione Ubuntu-18.04 come backend.

Questo lo rende in modo che i contenitori funzionino sul lato WSL invece di funzionare su Windows. Potrai accedere ai servizi su `http://localhost` sia su Windows che su Ubuntu.

## Installa MongoDB da Docker Hub

Una volta configurato Docker Desktop per lavorare con WSL2, seguire questi passaggi per avviare un servizio MongoDB:

1. Avvia un nuovo terminale Ubuntu-18.04

2. Tirare `MongoDB 3.6` dal dockerhub

   ```console
   docker pull mongo:3
   ```

3. Avvia il servizio MongoDB alla porta `27017`e configuralo per essere eseguito automaticamente sul riavvio del sistema

   ```console
   docker run -it \
     -v mongodata:/data/db \
     -p 27017:27017 \
     --name mongodb \
     --restart unless-stopped \
     -d mongo:3
   ```

4. Ora puoi accedere al servizio sia da Windows che da Ubuntu a `mongodb://localhost:27017`.

## Installazione di Node.js e npm

Si consiglia di installare la versione LTS per Node.js con un gestore di versioni dei nodi - [nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

Una volta installato utilizzare questi comandi per installare e utilizzare la versione Node.js come necessario

```console
nvm install --lts

# O
# nvm install <version>

nvm install 14

# Usage
# nvm use <version>

nvm use 12
```

Node.js viene fornito in bundle con `npm`, è possibile aggiornare alle ultime versioni di `npm` con:

```console
npm install -g npm@latest
```

## Imposta freeCodeCamp localmente

Ora che hai installato i pre-requisiti, segui [la nostra guida di configurazione locale](https://contribute.freecodecamp.org/#/how-to-setup-freecodecamp-locally) per clonare, installare e configurare freeCodeCamp localmente sulla tua macchina.

> [!ATTENZIONE]
> 
> Si prega di notare che, in questo momento, la configurazione per i test Cypress (e le relative esigenze GUI) sono un lavoro in corso. Si dovrebbe ancora essere in grado di lavorare sulla maggior parte del codebase.

## Link Utili

- [Un WSL2 Dev Setup con Ubuntu 20.04, Node.js, MongoDB, VS Code and Docker](https://devlog.sh/wsl2-dev-setup-with-ubuntu-nodejs-mongodb-and-docker) - un articolo di Mrugesh Mohapatra (Staff Developer at freeCodeCamp.org)
- Domande frequenti su:
  - [Sottosistema Windows per Linux](https://docs.microsoft.com/en-us/windows/wsl/faq)
  - [Docker Desktop per Windows](https://docs.docker.com/docker-for-windows/faqs)
