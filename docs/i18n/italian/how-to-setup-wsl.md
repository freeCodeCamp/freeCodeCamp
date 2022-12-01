# Impostare freeCodeCamp sul sottosistema Windows per Linux (WSL)

> [!NOTE] Prima di seguire queste istruzioni assicurati che il sistema soddisfi i requisiti
> 
> **WSL 2**: Windows 10 a 64 bit (Versione 2004, Build 19041 o superiore) - disponibile per tutte le distribuzioni tra cui Windows 10 Home.
> 
> **Docker Desktop per Windows**: Vedi i rispettivi requisiti per [Windows 10 Pro](https://docs.docker.com/docker-for-windows/install/#system-requirements) e [Windows 10 Home](https://docs.docker.com/docker-for-windows/install-windows-home/#system-requirements)

Questa guida copre alcuni passi comuni con la configurazione di WSL2. Una volta che i problemi più comuni con WSL2 sono stati considerati, dovresti essere in grado di seguire [questa guida per settare freeCodeCamp in locale](how-to-setup-freecodecamp-locally.md) per lavorare su Windows usando una distribuzione WSL come Ubuntu.

## Abilita WSL

Segui le istruzioni sulla [documentazione ufficiale](https://docs.microsoft.com/en-us/windows/wsl/install-win10) per installare WSL1 seguito dall'aggiornamento a WSL2.

## Installare Ubuntu

1. Si consiglia l'uso di Ubuntu-18.04 o superiore con WSL2.

   > [!NOTE]
   > 
   > Anche se si possono utilizzare altre distribuzioni non basate su debian, hanno tutte i loro trabocchetti e sono al di là della portata di questa guida.

2. Aggiorna le dipendenze per il sistema operativo

   ```console
   sudo apt update
   sudo apt upgrade -y

   # cleanup
   sudo apt autoremove -y
   ```

## Imposta Git

Git è preinstallato in Ubuntu 18.04, verifica la versione di git con `git --version`.

```output
~
❯ git --version
git version 2.25.1
```

(Facoltativo ma consigliato) Ora puoi procedere alla [impostazione delle tue chiavi ssh](https://help.github.com/articles/generating-an-ssh-key) con GitHub.

## Installazione di un editor di codice

Consigliamo vivamente di installare [Visual Studio Code](https://code.visualstudio.com) su Windows 10. Ha un grande supporto per WSL e installa automaticamente tutte le estensioni necessarie sulla tua distribuzione WSL.

Essenzialmente, modificherai e memorizzerai il tuo codice su Ubuntu-18.04 con Visual Studio Code installato su Windows.

Se usi [IntelliJ Idea](https://www.jetbrains.com/idea/), potresti aver bisogno di aggiornare il tuo interprete Node e il gestore di pacchetti Npm a quello installato nella tua distribuzione WSL.

Puoi controllare queste impostazioni andando su Settings > Languages & Frameworks > Node.js and NPM.

## Installazione di Docker Desktop

**Docker Desktop per Windows** ti permette di installare e eseguire database come MongoDB e altri servizi come NGINX. Questo è utile per evitare problemi comuni con l'installazione di MongoDB o altri servizi direttamente su Windows o WSL2.

Segui le istruzioni nella [documentazione ufficiale](https://docs.docker.com/docker-for-windows/install) e installa Docker Desktop per la tua distribuzione Windows.

Ci sono dei requisiti hardware minimi per un'esperienza migliore.

## Configura Docker Desktop per WSL

Una volta che Docker Desktop sarà installato, [segui queste istruzioni](https://docs.docker.com/docker-for-windows/wsl) e configuralo per usare l'installazione di Ubuntu 18.04 come Backend.

Questo fa si che i container siano eseguiti su WSL invece che su Windows. Sarai in grado di accere ai servizi da `http://localhost` sia su Windows che su Ubuntu.

## Installa MongoDB da Docker Hub

Una volta che hai configurato Docker Desktop per lavorare con WSL2, segui questi step per avviare un servizio MongoDB:

1. Avvia un nuovo terminale Ubuntu-18.04

2. Scarica `MongoDB 4.0.x` da dockerhub

   ```console
   docker pull mongo:4.0
   ```

3. Avvia il servizio MongoDB sulla porta `27017` e configuralo perché sia eseguito automaticamente al riavvio del sistema

   ```console
   docker run -it \
     -v mongodata:/data/db \
     -p 27017:27017 \
     --name mongodb \
     --restart unless-stopped \
     -d mongo:4.0
   ```

4. Ora puoi accedere al servizio sia da Windows che da Ubuntu da `mongodb://localhost:27017`.

## Installazione di Node.js e npm

Raccomandiamo di installare la release LTS di Node.js con un gestore di versioni di node (node version manager): [nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

Una volta installato usa questi comandi per installare e usare la versione di Node.js che ti serve

```console
nvm install --lts

# O
# nvm install <version>

nvm install 14

# Usage
# nvm use <version>

nvm use 12
```

Node.js è impacchetato con `npm`, puoi aggiornare all'ultima versione di `npm` con:

```console
npm install -g npm@latest
```

## Imposta freeCodeCamp localmente

Ora che hai installato i pre-requisiti, segui [la nostra guida per settare freeCodeCamp localmente](how-to-setup-freecodecamp-locally.md) per clonare, installare e settare freeCodeCamp sul tuo computer.

> [!WARNING]
> 
> Si prega di notare che, in questo momento, la configurazione per i test Cypress (e le relative esigenze GUI) sono un lavoro in corso. Dovresti essere comunque in grado di lavorare sulla maggior parte del codebase.

## Link Utili

- [Un setup di WSL2 per lo sviluppo con Ubuntu 20.04, Node.js, MongoDB, VS Code e Docker](https://hn.mrugesh.dev/wsl2-dev-setup-with-ubuntu-nodejs-mongodb-and-docker) - un articolo di Mrugesh Mohapatra (Staff Developer at freeCodeCamp.org)
- Domande frequenti su:
  - [Sottosistema Windows per Linux](https://docs.microsoft.com/en-us/windows/wsl/faq)
  - [Docker Desktop per Windows](https://docs.docker.com/docker-for-windows/faqs)
