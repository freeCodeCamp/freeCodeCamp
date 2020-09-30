# Manuale di volo per lavorare su macchine virtuali

Come membro del personale o del dev-team, potresti aver avuto accesso ai nostri fornitori di servizi cloud come Azure, Digital Ocean, ecc.

Ecco alcuni comandi utili che puoi usare per lavorare sulle macchine virtuali (VM), per esempio eseguire aggiornamenti di manutenzione o fare houeskeeping generale.

# Ottieni una lista dei VM

> [!NOTA] Mentre si può già avere accesso SSH ai VM, che da solo non ti permetterà di elencare i VM a meno che non sia stato concesso l'accesso ai portali cloud.

## Azure

Installa Azure CLI `az`: https://docs.microsoft.com/en-us/cli/azure/install-azure-cli

> **(Una volta) Installare su macOS con [`homebrew`](https://brew.sh):**

```
brew install azure-cli
```

> **(Una Volta) Login:**

```
az login
```

> **Ottiene l'elenco dei nomi delle VM e degli indirizzi P:**

```
az vm list-ip-address --output table
```

## Oceano Digitale

Installa Digital Ocean CLI `doctl`: https://github.com/digitalocean/doctl#installing-doctl

> **(Una volta) Installare su macOS con [`homebrew`](https://brew.sh):**

```
brew install doctl
```

> **(Una Volta) Login:**

Autenticazione e cambio contesto: https://github.com/digitalocean/doctl#authenticating-with-digitalocean

```
medico auth init
```

> **Ottiene l'elenco dei nomi delle VM e degli indirizzi IP:**

```
doctl compute droplet list --format "ID,Name,PublicIPv4"
```

# Gira una VM (o una scala VM Set)

> Todo: Aggiungi le istruzioni per la filatura


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

# Mantieni i VM aggiornati

Dovresti tenere aggiornati i VM eseguendo aggiornamenti e aggiornamenti. Questo assicurerà che la macchina virtuale sia patchata con le ultime correzioni di sicurezza.

> [!ATTENZIONE] Prima di eseguire questi comandi:
> 
> - Assicurarsi che la VM sia stata fornita completamente e che non ci siano passi post-installazione in esecuzione.
> - Se stai aggiornando i pacchetti su una VM che sta già servendo un'applicazione, assicurati che l'applicazione sia stata arrestata / salvata. Gli aggiornamenti dei pacchetti causeranno picchi di utilizzo della banda di rete, della memoria e/o della CPU che causeranno interruzioni su applicazioni in esecuzione.

Aggiorna informazioni sul pacchetto

```console
sudo apt update
```

Aggiorna i pacchetti installati

```console
sudo apt upgrade -y
```

Pulisci i pacchetti inutilizzati

```console
sudo apt autoremove -y
```

# Lavora sui server Web (Proxy)

Stiamo eseguendo le istanze di carico bilanciate (Azure Load Balancer) per i nostri server web . Questi server stanno eseguendo NGINX che inverte il proxy di tutto il traffico a freeCodeCamp.org da varie applicazioni in esecuzione sulle proprie infrastrutture.

La configurazione di NGINX è disponibile su [questo repository](https://github.com/freeCodeCamp/nginx-config).

## Prima Installazione

Meccanismi provvisori con il codice

### 1. (Opzionale) Installare NGINX e configurare dal repository.

La configurazione di base dovrebbe essere pronta OOTB, tramite la configurazione cloud-init. SSH e apportano le modifiche necessarie per i casi particolari.

Se non hai usato la configurazione cloud-init precedentemente usa la seguente per la configurazione manuale di NGINX e le pagine di errore:

```console
sudo su

cd /var/www/html
git clone https://github.com/freeCodeCamp/error-pages

cd /etc/
rm -rf nginx
git clone https://github.com/freeCodeCamp/nginx-config nginx

cd /etc/nginx
```

### 2. Installa certificati di origine Cloudflare e configurazione dell'applicazione a monte.

Ottieni i certificati di origine Cloudflare dallo storage sicuro e installa in posizioni richieste.

**O**

Sposta sopra i certificati esistenti:

```console
# Local
scp -r username@source-server-public-ip:/etc/nginx/ssl ./
scp -pr ./ssl username@target-server-public-ip:/tmp/

# Remote
rm -rf ./ssl
mv /tmp/ssl ./
```

Aggiornare Le Configurazioni Sustream:

```console
vi configs/upstreams.conf
```

Aggiungere/aggiornare gli indirizzi IP dell'applicazione sorgente/origine.

### 3. Impostare la rete e firewall.

Configura firewall Azure e `ufw` come necessario per gli indirizzi di origine dell'ingresso.

### 4. Aggiungere la VM al pool di backend del bilanciatore di carico.

Configura e aggiungi regole per caricare il bilanciatore, se necessario. Potrebbe essere necessario aggiungere i VM per caricare il pool di backend del bilanciatore, se necessario.

## Registrazione e monitoraggio

1. Controlla lo stato del servizio NGINX usando il comando seguente:

```console
sudo systemctl status nginx
```

2. La registrazione e il monitoraggio dei server sono disponibili all'indirizzo:

> <h3 align="center"><a href='https://amplify.nginx.com' _target='blank'>https://amplify.nginx.com</a></h3>
## Aggiornamento Istanze (Manutenzione)

Le modifiche di configurazione alle nostre istanze NGINX sono mantenute su GitHub, queste dovrebbero essere distribuite su ogni istanza in questo modo:

1. SSH nell'istanza e inserisci sudo

```console
sudo su
```

2. Ottieni l'ultimo codice di configurazione.

```console
cd /etc/nginx
git fetch --all --prune
git reset --hard origin/master
```

3. Prova e ricarica la configurazione [con i segnali](https://docs.nginx.com/nginx/admin-guide/basic-functionality/runtime-control/#controlling-nginx).

```console
nginx -t
nginx -s reload
```

# Lavora sulle istanze API

1. Installa strumenti di generazione per i binari dei nodi (`node-gyp`) ecc.

```console
sudo apt install build-essential
```

## Prima Installazione

Meccanismi provvisori con il codice

1. Installare Node LTS.

2. Aggiorna `npm` e installa PM2 e setup logrotate e avvio all'avvio

   ```console
   npm i -g npm
   npm i -g pm2
   pm2 install pm2-logrotate
   pm2 startup
   ```

3. Clona freeCodeCamp, setup env e chiavi.

   ```console
   git clone https://github.com/freeCodeCamp/freeCodeCamp.git
   cd freeCodeCamp
   git checkout production-current # o qualsiasi altro ramo da distribuire
   ```

4. Crea il `.env` dalla memorizzazione sicura delle credenziali.

5. Crea `google-credentials.json` dall'archivio sicuro delle credenziali.

6. Installa dipendenze

   ```console
   npm ci
   ```

7. Costruisci il server

   ```console
   npm run ensure-env && npm run build:server
   ```

8. Avvia Istanze

   ```console
   cd api-server
   pm2 start production-start.js -i max --max-memory-restart 600M --name org
   ```

## Registrazione e monitoraggio

```console
log pm2
```

```console
pm2 monit
```

## Aggiornamento Istanze (Manutenzione)

Le modifiche del codice devono essere distribuite alle istanze API di tanto in tanto. Può essere un aggiornamento o un aggiornamento manuale. Il più tardi è essenziale quando si cambiano le dipendenze o si aggiungono variabili di invidio.

> [!PERICOLO] Le pipeline automatiche non gestiscono gli aggiornamenti delle dipendenze al minuto. Dobbiamo fare un aggiornamento manuale prima di eseguire qualsiasi pipeline di distribuzione.

### 1. Aggiornamenti manuali - Usato per aggiornare le dipendenze, variabili env.

1. Ferma tutte le istanze

```console
pm2 fermare tutto
```

2. Installa dipendenze

```console
npm ci
```

3. Costruisci il server

```console
npm run ensure-env && npm run build:server
```

4. Avvia Istanze

```console
pm2 avvia tutti i log --update-env && pm2
```

### 2. Aggiornamenti rotolamento - Usato per modifiche logiche al codice.

```console
pm2 ricarica tutti i --update-env && pm2 log
```

> [!NOTA] Stiamo gestendo gli aggiornamenti rolling per codificare, logica, tramite pipeline. You should not need to run these commands. Questi sono qui per la documentazione.

# Lavora sulle istanze del cliente

1. Installa strumenti di generazione per i binari dei nodi (`node-gyp`) ecc.

```console
sudo apt install build-essential
```

## Prima Installazione

Meccanismi provvisori con il codice

1. Installare Node LTS.

2. Aggiorna `npm` e installa PM2 e setup logrotate e avvio all'avvio

   ```console
   npm i -g npm
   npm i -g pm2
   npm install -g serve
   pm2 install pm2-logrotate
   pm2 startup
   ```

3. Clona la configurazione del client, l'env di configurazione e le chiavi.

   ```console
   git clone https://github.com/freeCodeCamp/client-config.git client
   client cd
   ```

   ```console
   git clone https://github.com/freeCodeCamp/client-config.git client
   client cd
   ```

   Avvia le istanze del segnaposto per il web client, queste verranno aggiornate con artefatti dalla piplina Azure.

   > Todo: Questa configurazione deve passare allo storage S3 o Azure Blob 
   > 
   > ```console
   echo "serve -c ../../serve.json www -p 50505" >> client-start-primary.sh
   chmod +x client-start-primary. h
   pm2 delete client-primary
   pm2 start . client-start-primary.sh --name client-primary
   echo "serve -c . /../serve.json www -p 52525" >> client-start-secondary.sh
   chmod +x client-start-secondary. h
   pm2 cancella client-secondario
   pm2 start ./client-start-secondary.sh --name client-secondario
```

## Registrazione e monitoraggio

```console
log pm2
```

```console
pm2 monit
```

## Aggiornamento Istanze (Manutenzione)

Le modifiche del codice devono essere distribuite alle istanze API di tanto in tanto. Può essere un aggiornamento o un aggiornamento manuale. Il più tardi è essenziale quando si cambiano le dipendenze o si aggiungono variabili di invidio.

> [!PERICOLO] Le pipeline automatiche non gestiscono gli aggiornamenti delle dipendenze al minuto. Dobbiamo fare un aggiornamento manuale prima di eseguire qualsiasi pipeline di distribuzione.

### 1. Aggiornamenti manuali - Usato per aggiornare le dipendenze, variabili env.

1. Ferma tutte le istanze

   ```console
   pm2 fermare tutto
   ```

2. Installare o aggiornare le dipendenze

3. Avvia Istanze

   ```console
   pm2 avvia tutti i log --update-env && pm2
   ```

### 2. Aggiornamenti rotolamento - Usato per modifiche logiche al codice.

```console
pm2 ricarica tutti i --update-env && pm2 log
```

> [!NOTA] Stiamo gestendo gli aggiornamenti rolling per codificare, logica, tramite pipeline. You should not need to run these commands. Questi sono qui per la documentazione.
