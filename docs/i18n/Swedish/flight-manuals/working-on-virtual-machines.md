# Flyghandbok för arbete på virtuella maskiner

Som medlem i personalen eller dev-teamet, du kan ha fått tillgång till våra molntjänstleverantörer som Azure, Digital Ocean, etc.

Här är några praktiska kommandon som du kan använda för att arbeta på de virtuella maskinerna (VM), till exempel utföra underhåll uppdateringar eller göra allmänna hushållning.

# Få en lista över virtuella maskiner

> [!NOTE] Även om du kanske redan har SSH-åtkomst till virtuella maskiner, att ensam inte låta dig lista virtuella maskiner om du inte beviljats tillgång till molnportaler också.

## Azure

Installera Azure CLI `az`: https://docs.microsoft.com/en-us/cli/azure/install-azure-cli

> **(Entid) Installera på macOS med [`homebrew`](https://brew.sh):**

```
brygga installera azure-cli
```

> **(Entid) Inloggning:**

```
az login
```

> **Få listan över VM-namn och P-adresser:**

```
az vm list-ip-adresser --utdatatabell
```

## Digitalt hav

Installera Digital Ocean CLI `doctl`: https://github.com/digitalocean/doctl#installing-doctl

> **(Entid) Installera på macOS med [`homebrew`](https://brew.sh):**

```
brew install doctl
```

> **(Entid) Inloggning:**

Autentisering och byte av sammanhang: https://github.com/digitalocean/doctl#authenticating-with-digitalocean

```
doctl auth init
```

> **Få listan över VM-namn och IP-adresser:**

```
doctl beräkna dropplista --format "ID,Namn,PublicIPv4"
```

# Snurra en VM (eller VM-skala)

> Todo: Lägg till instruktioner för spinning VM(s)


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

# Håll virtuella maskiner uppdaterade

Du bör hålla virtuella maskiner uppdaterade genom att utföra uppdateringar och uppgraderingar. Detta kommer att se till att den virtuella maskinen är patchad med senaste säkerhetsrättelser.

> [!VARNING] Innan du kör dessa kommandon:
> 
> - Se till att den virtuella maskinen har provisionerats helt och att det inte finns några steg efter installationen igång.
> - Om du uppdaterar paket på en VM som redan betjänar en applikation, se till att appen har stoppats/sparats. Paketuppdateringar kommer att orsaka nätverksbandbredd, minne och/eller CPU-användning spikar som leder till avbrott på körande program.

Uppdatera paketinformation

```console
sudo apt uppdatering
```

Uppgradera installerade paket

```console
sudo apt uppgradering -y
```

Rensa oanvända paket

```console
sudo apt autoremove -y
```

# Arbeta på webbservrar (Proxy)

Vi kör lastbalanserade instanser (Azure Load Balancer) för våra webb- servrar. Dessa servrar kör NGINX som vänder proxy all trafik till freeCodeCamp.org från olika program som körs på egen hand infrastrukturer.

NGINX-konfigurationen finns tillgänglig på [detta utvecklingskatalog](https://github.com/freeCodeCamp/nginx-config).

## Första installationen

Tillhandahållande av virtuella maskiner med koden

### 1. (Valfritt) Installera NGINX och konfigurera från utvecklingskatalogen.

Grundinställningen bör vara klar för OOTB, via moln-init-konfigurationen. SSH och gör ändringar som krävs för den specifika instans(er).

Om du inte använde konfigurationen för cloud-init tidigare använd nedanstående för manuell inställning av NGINX och felsidor:

```console
sudo su

cd /var/www/html
git clone https://github.com/freeCodeCamp/error-pages

cd /etc/
rm -rf nginx
git clone https://github.com/freeCodeCamp/nginx-config nginx

cd /etc/nginx
```

### 2. Installera Cloudflare ursprungscertifikat och uppströms applikationskonfigurering.

Få Cloudflare ursprungscertifikat från säker lagring och installera på nödvändiga platser.

**ELLER**

Flytta över befintliga certifikat:

```console
# Lokal
scp -r username@source-server-public-ip:/etc/nginx/ssl ./
scp -pr ./ssl username@target-server-public-ip:/tmp/

# Remote
rm -rf ./ssl
mv /tmp/ssl ./
```

Uppdatera Uppströmskonfigurationer:

```console
vi configs/upstreams.conf
```

Lägg till/uppdatera applikationens IP-adresser för källa/ursprung.

### 3. Konfigurera nätverk och brandväggar.

Konfigurera Azure brandväggar och `ufw` efter behov för inresser ursprung.

### 4. Lägg till den virtuella maskinen till lastbalansens backend-pool.

Konfigurera och lägg till regler för lastbalansering om det behövs. Du kan också behöva lägga till virtuella maskiner för att ladda balancer backend pool om det behövs.

## Loggning och övervakning

1. Kontrollera status för NGINX-tjänsten med kommandot nedan:

```console
sudo systemctl status nginx
```

2. Loggning och övervakning för servrarna finns tillgänglig på:

> <h3 align="center"><a href='https://amplify.nginx.com' _target='blank'>https://amplify.nginx.com</a></h3>
## Uppdatera instanser (underhåll)

Konfigurationsändringar för våra NGINX-instanser upprätthålls på GitHub, dessa bör distribueras på varje instans som så:

1. SSH in i instansen och ange sudo

```console
sudo su
```

2. Hämta den senaste konfigurationskoden.

```console
cd /etc/nginx
git fetch --all --prune
git reset --hard origin/master
```

3. Testa och ladda om konfigurationen [med signaler](https://docs.nginx.com/nginx/admin-guide/basic-functionality/runtime-control/#controlling-nginx).

```console
nginx -t
nginx -s reload
```

# Arbeta på API-instanser

1. Installera byggverktyg för nodbinärer (`node-gyp`) etc.

```console
sudo apt install build-essential
```

## Första installationen

Tillhandahållande av virtuella maskiner med koden

1. Installera nod LTS.

2. Uppdatera `npm` och installera PM2 och setup logrotera och starta vid uppstart

   ```console
   npm i -g npm
   npm i -g pm2
   pm2 install pm2-logrotate
   pm2 startup
   ```

3. Klona freeCodeCamp, konfigurera env och nycklar.

   ```console
   git clone https://github.com/freeCodeCamp/freeCodeCamp.git
   cd freeCodeCamp
   git checkout produktionsström # eller någon annan gren som ska distribueras
   ```

4. Skapa `.env` från säker autentiseringslagring.

5. Skapa `google-credentials.json` från säker autentiseringslagring.

6. Installera beroenden

   ```console
   npm ci
   ```

7. Bygg servern

   ```console
   npm kör ensure-env && npm kör build:server
   ```

8. Starta instanser

   ```console
   cd api-server
   pm2 start production-start.js -i max --max-memory-restart 600M --name org
   ```

## Loggning och övervakning

```console
pm2 loggar
```

```console
pm2 monit
```

## Uppdatera instanser (underhåll)

Kodens ändringar måste distribueras till API-instanserna då och då. Det kan vara en rullande uppdatering eller en manuell uppdatering. Det senare är viktigt när du ändrar beroenden eller lägger till miljövariabler.

> [!DANGER] De automatiserade rörledningarna hanterar inte beroendensuppdateringar på minuten. Vi måste göra en manuell uppdatering innan någon distribution pipeline körs.

### 1. Manuella uppdateringar - Används för att uppdatera beroenden, env variabler.

1. Stoppa alla instanser

```console
Pm2 stoppa alla
```

2. Installera beroenden

```console
npm ci
```

3. Bygg servern

```console
npm kör ensure-env && npm kör build:server
```

4. Starta instanser

```console
pm2 starta alla --update-env && pm2 loggar
```

### 2. Rullande uppdateringar - Används för logiska ändringar i koden.

```console
pm2 ladda om alla --update-env && pm2 loggar
```

> [!NOTE] Vi hanterar rullande uppdateringar till kod, logik, via rörledningar. Du behöver inte köra dessa kommandon. Dessa finns här för dokumentation.

# Arbeta på klientinstanser

1. Installera byggverktyg för nodbinärer (`node-gyp`) etc.

```console
sudo apt install build-essential
```

## Första installationen

Tillhandahållande av virtuella maskiner med koden

1. Installera nod LTS.

2. Uppdatera `npm` och installera PM2 och setup logrotera och starta vid uppstart

   ```console
   npm i -g npm
   npm i -g pm2
   npm install -g serve
   pm2 install pm2-logrotate
   pm2 start
   ```

3. Klona klient konfigurera, konfigurera env och nycklar.

   ```console
   git clone https://github.com/freeCodeCamp/client-config.git client
   cd-klient
   ```

   ```console
   git clone https://github.com/freeCodeCamp/client-config.git client
   cd-klient
   ```

   Börja platshållare instanser för webbklienten, dessa kommer att uppdateras med artefakter från Azure pipline.

   > Todo: Denna inställning måste flyttas till S3 eller Azure Blob lagring 
   > 
   > ```console
   echo "serve -c ../../serve.json www -p 50505" >> client-start-primary.sh
   chmod +x client-start-primary. h
   pm2 ta bort klient-primary
   pm2 start . client-start-primary.sh --name client-primary
   echo "serve -c . /../serve.json www -p 52525" >> client-start-secondary.sh
   chmod +x client-start-secondary. h
   pm2 ta bort klient-secondary
   pm2 starta ./client-start-secondary.sh --name client-secondary
```

## Loggning och övervakning

```console
pm2 loggar
```

```console
pm2 monit
```

## Uppdatera instanser (underhåll)

Kodens ändringar måste distribueras till API-instanserna då och då. Det kan vara en rullande uppdatering eller en manuell uppdatering. Det senare är viktigt när du ändrar beroenden eller lägger till miljövariabler.

> [!DANGER] De automatiserade rörledningarna hanterar inte beroendensuppdateringar på minuten. Vi måste göra en manuell uppdatering innan någon distribution pipeline körs.

### 1. Manuella uppdateringar - Används för att uppdatera beroenden, env variabler.

1. Stoppa alla instanser

   ```console
   Pm2 stoppa alla
   ```

2. Installera eller uppdatera beroenden

3. Starta instanser

   ```console
   pm2 starta alla --update-env && pm2 loggar
   ```

### 2. Rullande uppdateringar - Används för logiska ändringar i koden.

```console
pm2 ladda om alla --update-env && pm2 loggar
```

> [!NOTE] Vi hanterar rullande uppdateringar till kod, logik, via rörledningar. Du behöver inte köra dessa kommandon. Dessa finns här för dokumentation.
