# Lentokäsikirja Virtuaalikoneiden työstämiseen

Henkilöstön jäsenenä tai dev-ryhmän jäsenenä Sinulle on ehkä annettu pääsy pilvipalvelujen tarjoajiin, kuten Azure, Digital Ocean, jne.

Tässä muutamia käteviä komentoja, joita voit käyttää virtuaalikoneisiin (VM), esimerkiksi suorittamalla huoltopäivityksiä tai tekemällä yleinen hoeskeeping.

# Hanki luettelo VM:istä

> [!HUOM] Vaikka sinulla saattaa jo olla SSH pääsy VM:iin, että yksin ei voit luetella VM:t, ellei sinulle ole myönnetty pääsy pilvipalveluportaaleihin.

## Azure

Asenna Azure CLI `az`: https://docs.microsoft.com/en-us/cli/azure/install-azure-cli

> **(Kertaluonteinen) Asenna macOS:iin [`homebrew`](https://brew.sh):**

```
brew install azure-cli
```

> **(Kertainen) Kirjaudu:**

```
az login
```

> **Hanki lista VM nimet ja P-osoitteet:**

```
az vm list-ip-osoitteet --output taulukko
```

## Digitaalinen Meri

Asenna Digital Ocean CLI `doctl`: https://github.com/digitalocean/doctl#installing-doctl

> **(Kertaluonteinen) Asenna macOS:iin [`homebrew`](https://brew.sh):**

```
brew install doctl
```

> **(Kertainen) Kirjaudu:**

Autentikointi ja kontekstinvaihto: https://github.com/digitalocean/doctl#authenticating-with-digitalocean

```
doctl auth init
```

> **Hanki lista VM nimet ja IP-osoitteet:**

```
doctl laskettava droplet-lista --format "ID,Nimi,PublicIPv4"
```

# Spin VM (tai VM Scale Set)

> Todo: Lisää ohjeita pyörivälle VM(t)


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

# Pidä VM:t ajan tasalla

Sinun pitäisi pitää VM:t ajan tasalla tekemällä päivityksiä ja päivityksiä. Tämä varmistaa, että virtuaalinen kone on laitettu uusimpia turvakorjauksia.

> [!VAROITUS] Ennen kuin johdat näitä käskyjä:
> 
> - Varmista, että VM on tarjonnut täysin ja ei ole asennuksen jälkeen vaiheet käynnissä.
> - Jos päivität paketteja VM:ssä, joka jo palvelee sovellusta, varmista, että sovellus on pysäytetty / tallennettu. Paketin päivitykset aiheuttavat verkon kaistanleveyttä, muistia ja/tai suorittimen käyttöpiikkejä, jotka johtavat keskeytyksiin käynnissä olevissa sovelluksissa.

Päivitä pakettitiedot

```console
sudo apt päivitys
```

Päivitä asennetut paketit

```console
sudo apt upgrade -y
```

Siivoa käyttämättömät paketit

```console
sudo apt autoremove -y
```

# Työ web-palvelimia (välitys)

Olemme käynnissä kuormitus tasapainoinen (Azure Load Balancer) instansseja web- palvelimille. Nämä palvelimet käyttävät NGINX:ää, joka kääntää kaiken liikenteen freeCodeCamp.orgiin erilaisista sovelluksista, jotka toimivat omilla infrastruktuureillaan.

NGINX config on saatavilla [tässä repossa](https://github.com/freeCodeCamp/nginx-config).

## Ensimmäinen Asennus

Varaukset koodia käyttäen

### 1. (Vapaaehtoinen) Asenna NGINX ja konfiguroi arkistosta.

Perusasennuksen tulisi olla valmis OOTB pilvi-sisäänvirtauskokoonpanon kautta. SSH ja tekevät tarvittaessa muutoksia kyseisessä oikeusasteessa.

Jos et käyttänyt konfiguraatiota pilvipalvelussa, käytä sitä aiemmin NGINX- ja virhesivujen manuaaliseen asetukseen:

```console
sudo su

cd /var/www/html
git clone https://github.com/freeCodeCamp/error-pages

cd /etc/
rm -rf nginx
git clone https://github.com/freeCodeCamp/nginx-config nginx

cd /etc/nginx
```

### 2. Asenna Cloudflare alkuperätodistukset ja sovelluksen konfigurointi.

Hanki Cloudflare alkuperätodistukset turvallisesta varastosta ja asenna vaadittuihin paikkoihin.

**TAI**

Siirrä olemassa olevien varmenteiden yli:

```console
# Local
scp -r username@source-server-public-ip:/etc/nginx/ssl ./
scp -pr ./ssl username@target-server-public-ip:/tmp/

# Remote
rm -rf ./ssl
mv /tmp/ssl ./
```

Päivitä Ylävirran Asetukset:

```console
vi confiks/upstreams.conf
```

Lisää/päivitä lähde/alkuperä-sovelluksen IP-osoitteet.

### 3. Aseta verkottuminen ja palomuurit.

Määritä Azuren palomuurit ja `ufw` tarpeen mukaan ingress alkuperäosoitteisiin.

### 4. Lisää VM kuorman tasaaja backend pool.

Määritä ja lisää sääntöjä ladattavaksi tarvittaessa tasapainotilassa. Saatat myös joutua lisäämään VM:t, jotta voit tarvittaessa ladata tasapainotusreservin.

## Kirjaaminen ja seuranta

1. Tarkista NGINX-palvelun tila käyttäen alla olevaa komentoa:

```console
sudo systemctl status nginx
```

2. Palvelimien kirjaaminen ja seuranta on saatavilla osoitteessa:

> <h3 align="center"><a href='https://amplify.nginx.com' _target='blank'>https://amplify.nginx.com</a></h3>
## Päivitetään Instansseja (Maintenance)

Config muutokset meidän NGINX instansseja ylläpidetään GitHub, nämä pitäisi ottaa käyttöön jokaisessa instanssissa, kuten näin:

1. SSH instanssiin ja kirjoita sudo

```console
sudo su
```

2. Hanki uusin asetuskoodi.

```console
cd /etc/nginx
git fetch --all --prune
git reset --hard origin/master
```

3. Testaa ja lataa asetukset [Signaaleilla](https://docs.nginx.com/nginx/admin-guide/basic-functionality/runtime-control/#controlling-nginx).

```console
nginx -t
nginx -s reload
```

# API:n esiintymiä koskeva työ

1. Asenna työkaluja solmun binääreille (`node-gyp`) jne.

```console
sudo apt asentaa build-essential
```

## Ensimmäinen Asennus

Varaukset koodia käyttäen

1. Asenna Node LTS.

2. Päivitä `npm` ja asenna PM2 ja määritä lokero ja käynnistys käynnistyksen yhteydessä

   ```console
   npm i -g npm
   npm i -g pm2
   pm2 install pm2-logrotate
   pm2 startup
   ```

3. Kloonaa freeCodeCamp, asetukset env ja avaimet.

   ```console
   git clone https://github.com/freeCodeCamp/freeCodeCamp.git
   cd freeCodeCamp
   git checkout production-current # tai mikä tahansa muu käyttöön otettava sivukonttori
   ```

4. Luo `.env` turvallisen käyttäjätunnuksen tallennustilasta.

5. Luo `google-credentials.json` suojatun käyttöoikeustietojen tallennustilasta.

6. Asenna riippuvuudet

   ```console
   npm ci
   ```

7. Rakenna palvelin

   ```console
   npm run ensure-env && npm run build:server
   ```

8. Käynnistä Instances

   ```console
   cd api-server
   pm2 start production-start.js -i max --max-memory-restart 600M --name org
   ```

## Kirjaaminen ja seuranta

```console
pm2 lokit
```

```console
pm2 monit
```

## Päivitetään Instansseja (Maintenance)

Koodin muutokset on otettava käyttöön ajoittain API-tapausten yhteydessä. Se voi olla jatkuva päivitys tai manuaalinen päivitys. Myöhemmin on tärkeää muuttaa riippuvuuksia tai lisätä ympäristömuuttujia.

> [!DANGER] Automatisoidut putkistot eivät käsittele riippuvuuksien päivityksiä minuutissa. Meidän on tehtävä manuaalinen päivitys ennen minkään rakennusputken käyttöä.

### 1. Manuaalinen päivitykset - Käytetään päivitykseen riippuvuuksia, env muuttujat.

1. Pysäytä kaikki instanssit

```console
pm2 pysäytä kaikki
```

2. Asenna riippuvuudet

```console
npm ci
```

3. Rakenna palvelin

```console
npm run ensure-env && npm run build:server
```

4. Käynnistä Instances

```console
pm2 aloita kaikki --update-env && pm2 lokit
```

### 2. Rolling päivitykset - Käytetään loogisia muutoksia koodin.

```console
pm2 reload all --update-env && pm2 lokit
```

> [!HUOM] Käsittelemme säännöllisesti päivityksiä koodaukseen, logiikkaan putkijohtojen kautta. Sinun ei pitäisi ajaa näitä komentoja. Nämä ovat täällä dokumentointia varten.

# Asiakkaan kannanottojen käsittely

1. Asenna työkaluja solmun binääreille (`node-gyp`) jne.

```console
sudo apt asentaa build-essential
```

## Ensimmäinen Asennus

Varaukset koodia käyttäen

1. Asenna Node LTS.

2. Päivitä `npm` ja asenna PM2 ja määritä lokero ja käynnistys käynnistyksen yhteydessä

   ```console
   npm i -g npm
   npm i -g pm2
   npm install -g serve
   pm2 install pm2-logrotate
   pm2 startup
   ```

3. Kloonaa asiakkaan asetukset, asetukset env ja avaimet.

   ```console
   git clone https://github.com/freeCodeCamp/client-config.git client
   cd asiakas
   ```

   ```console
   git clone https://github.com/freeCodeCamp/client-config.git client
   cd asiakas
   ```

   Käynnistä verkkoasiakkaan paikkamerkit, ne päivitetään Azuren pipetin esineiden avulla.

   > Todo: Tämän asetuksen täytyy siirtyä S3- tai Azure Blob -tallennustilaan 
   > 
   > ```console
   echo "serve -c ../../serve.json www -p 50505" >> client-start-primary.sh
   chmod +x client-start-primary. h
   pm2 poista client-primary
   pm2 alkaa . client-start-primary.sh --name client-primary
   echo "serve -c . /../serve.json www -p 52525" >> client-start-secondary.sh
   chmod +x client-start-secondary. h
   pm2 poista client-secondary
   pm2 start ./client-start-secondary.sh --name client-secondary
```

## Kirjaaminen ja seuranta

```console
pm2 lokit
```

```console
pm2 monit
```

## Päivitetään Instansseja (Maintenance)

Koodin muutokset on otettava käyttöön ajoittain API-tapausten yhteydessä. Se voi olla jatkuva päivitys tai manuaalinen päivitys. Myöhemmin on tärkeää muuttaa riippuvuuksia tai lisätä ympäristömuuttujia.

> [!DANGER] Automatisoidut putkistot eivät käsittele riippuvuuksien päivityksiä minuutissa. Meidän on tehtävä manuaalinen päivitys ennen minkään rakennusputken käyttöä.

### 1. Manuaalinen päivitykset - Käytetään päivitykseen riippuvuuksia, env muuttujat.

1. Pysäytä kaikki instanssit

   ```console
   pm2 pysäytä kaikki
   ```

2. Asenna tai päivitä riippuvuuksia

3. Käynnistä Instances

   ```console
   pm2 aloita kaikki --update-env && pm2 lokit
   ```

### 2. Rolling päivitykset - Käytetään loogisia muutoksia koodin.

```console
pm2 reload all --update-env && pm2 lokit
```

> [!HUOM] Käsittelemme säännöllisesti päivityksiä koodaukseen, logiikkaan putkijohtojen kautta. Sinun ei pitäisi ajaa näitä komentoja. Nämä ovat täällä dokumentointia varten.
