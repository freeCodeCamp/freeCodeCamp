# Manualul de zbor pentru lucru pe Mașinile Virtuale

As a member of the staff or the dev-team, you may have been given access to our cloud service providers like Azure, Digital Ocean, etc.

Aici sunt câteva comenzi utile pe care le poți folosi pentru a lucra la Mașinile Virtuale (VM), de exemplu, efectuarea de actualizări de întreținere sau efectuarea de activități de întreținere generală.

# Obțineți o listă cu MV

> [!NOTĂ] Cât timp puteți avea deja acces SSH la MV, doar că doar nu vă va permite să listați VMM-urile decât dacă vi s-a acordat acces și la portalurile cloud.

## Azure

Instalează Azure CLI `az`: https://docs.microsoft.com/en-us/cli/azure/install-azure-cli

> **(O singură dată) Instalați pe macOS cu [`homebrew`](https://brew.sh):**

```
brew instalare azure-cli
```

> **(O dată) Autentificare:**

```
az login
```

> **Obțineți lista de nume VM și adrese P:**

```
az list-ip-adresele vm --tabel ieşire
```

## Oceanul Digital

Instalează Digital Ocean CLI `doctl`: https://github.com/digitalocean/doctl#installing-doctl

> **(O singură dată) Instalați pe macOS cu [`homebrew`](https://brew.sh):**

```
brew instalare doctl
```

> **(O dată) Autentificare:**

Autentificare și schimbarea contextului: https://github.com/digitalocean/doctl#authenticating-with-digitalocean

```
Medicl auto init
```

> **Obțineți lista de nume VM și adrese IP:**

```
Listă droplet doctl - format "ID,Nume,PublicIPv4"
```

# Învârtiți un VM (sau un set de scară VM)

> Todo: Adaugă instrucțiuni pentru rotirea MV(s)


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

# Păstrați VM-urile actualizate

Ar trebui să actualizați VM-urile prin efectuarea de actualizări și actualizări. Acest lucru se va asigura că mașina virtuală este modificată cu cele mai recente soluții de securitate.

> [!ATENTIE] Inainte de a rula aceste comenzi:
> 
> - Asigurați-vă că VM a fost alimentat complet și că nu sunt pașii post-instalare care rulează.
> - Dacă actualizați pachete pe un VM care deja servește o aplicație, asigurați-vă că aplicația a fost oprită / salvată. Actualizările pachetului vor cauza lățimea rețelei, memorie și/sau vârfurile de utilizare a CPU care duc la ieșirea de aplicații.

Actualizați informațiile pachetului

```console
actualizare sudo apt
```

Actualizați pachetele instalate

```console
actualizare potrivire apt -y
```

Curățarea pachetelor neutilizate

```console
sudo apt autoremutare -y
```

# Lucrați pe Serverele Web (Proxy)

Jucăm instanțe echilibrate (Balancer-ul încărcării în zură) pentru serverele noastre web Aceste servere rulează NGINX care inversează traficul în mod proxy către freeCodeCamp.org de la diferite aplicații care rulează pe propriile lor infrastructuri.

Configurarea NGINX este disponibilă pe [acest repo](https://github.com/freeCodeCamp/nginx-config).

## Instalează mai întâi

Furnizarea de MPV la acest cod

### 1. (Opțional) Instalați NGINX și configurați din repo.

Instalarea de bază trebuie să fie gata OOTB, prin intermediul configuraţiei cloud-init. SSH și efectuează modificările necesare pentru cazurile specifice(e).

Dacă nu ați utilizat configurația cloud-init utilizată anterior pentru configurarea manuală NGINX și paginile de erori:

```console
sudo su

cd /var/www/html
git clone https://github.com/freeCodeCamp/error-pages

cd /etc/
rm -rf nginx
git clone https://github.com/freeCodeCamp/nginx-config nginx

cd /etc/nginx
```

### 2. Instalaţi certificatele de origine Cloudflare şi configurarea aplicaţiei în amonte.

Obțineți certificatele de origine Cloudflare din spațiul de stocare securizat și instalați la locațiile necesare.

**SAU**

Mutați peste certificatele existente:

```console
# local
scp -r username@source-server-public-ip:/etc/nginx/ssl ./
scp -pr ./ssl username@target-server-public-ip:/tmp/

# Remote
rm -rf ./sl
mv /tmp/sl ./ ./
```

Actualizare Configurări Upstream:

```console
vi configurări/upstreams.conf
```

Adaugă/actualizează adresele IP ale aplicaţiei sursă/origine.

### 3. Configurați rețele și firewall-uri.

Configurați firewall-urile Azure și `ufw` pentru adresele de origine ingress.

### 4. Adăugați VM la încărcarea backend-ului balansatorului.

Configurați și adăugați reguli pentru a încărca balanța, dacă este necesar. S-ar putea să fie nevoie să adăugați și VMM-urile pentru a încărca backend-ul echilibratorului dacă este necesar.

## Logare și monitorizare

1. Verificați starea serviciului NGINX folosind comanda de mai jos:

```console
sudo systemctl status nginx
```

2. Logarea și monitorizarea serverelor sunt disponibile la:

> <h3 align="center"><a href='https://amplify.nginx.com' _target='blank'>https://amplify.nginx.com</a></h3>
## Actualizarea instanțelor (Depozite)

Modificările de configurare la instanțele noastre NGINX sunt menținute pe GitHub, acestea ar trebui să fie implementate în fiecare instanță de exemplu:

1. SSH în instanță și intră în sudo

```console
sudo su
```

2. Obține ultimul cod de configurare.

```console
cd /etc/nginx
git fetch --all --prune
git reset --hard origin/master
```

3. Testați și reîncărcați configurația [cu semnale](https://docs.nginx.com/nginx/admin-guide/basic-functionality/runtime-control/#controlling-nginx).

```console
nginx -t
nginx -s reload
```

# Lucrați la instanțele API

1. Instalează uneltele de construcție pentru node binare (`node-gyp`) etc.

```console
sudo apt install build-essential (Automatic Copy)
```

## Instalează mai întâi

Furnizarea de MPV la acest cod

1. Instalează Nodul LTS.

2. Actualizați `npm` și instalați PM2 și configurați logrotate și porniți la pornire

   ```console
   npm i -g npm
   npm i -g pm2
   pm2 install pm2-logrotate
   pm2 startup
   ```

3. Clone freeCodeCamp, setup env și chei.

   ```console
   git clone https://github.com/freeCodeCamp/freeCodeCamp.git
   cd freeCodeCamp
   git checkout production-current # sau orice altă sucursală care va fi implementată
   ```

4. Creați `.env` din memoria securizată de acreditare.

5. Creați `google-acredentials.json` din stocarea securizată a credențialelor.

6. Instalează dependențe

   ```console
   npm ci
   ```

7. Construiește serverul

   ```console
   npm run ensure-env && npm run build:server
   ```

8. Începe instanțe

   ```console
   cd api-server
   pm2 începe producția-start.js -i max --max-memory-restart 600M --name org
   ```

## Logare și monitorizare

```console
pm2 buşteni
```

```console
pm2 monit
```

## Actualizarea instanțelor (Depozite)

Modificările codului trebuie să fie trimise la instanțele API din când în când. Poate fi o actualizare de rulare sau o actualizare manuală. Cel mai nou este esențial la schimbarea dependențelor sau la adăugarea variabilelor de virus.

> [!DANGER] Conductele automate nu se ocupă de actualizările dependențelor la minut. Trebuie să facem o actualizare manuală înainte de a rula orice conductă de implementare.

### 1. Actualizări manuale - utilizate pentru actualizarea dependențelor, env variables.

1. Oprește toate instanțele

```console
pm2 oprire totală
```

2. Instalează dependențe

```console
npm ci
```

3. Construiește serverul

```console
npm run ensure-env && npm run build:server
```

4. Începe instanțe

```console
pornește pm2 toate --update-env && jurnale pm2
```

### 2. Actualizări de rulare - utilizate pentru modificări logice ale codului.

```console
pm2 reîncărcare toate --update-env && jurnale pm2
```

> [!NOTĂ] Ne ocupăm de actualizări ale rulării pentru a programa, logică, prin conducte. Nu trebuie să executați aceste comenzi Acestea sunt aici pentru documentaţie.

# Lucrați la instanțele clientului

1. Instalează uneltele de construcție pentru node binare (`node-gyp`) etc.

```console
sudo apt install build-essential (Automatic Copy)
```

## Instalează mai întâi

Furnizarea de MPV la acest cod

1. Instalează Nodul LTS.

2. Actualizați `npm` și instalați PM2 și configurați logrotate și porniți la pornire

   ```console
   npm i -g npm
   npm i -g pm2
   npm instalare -g serve
   pm2 instalați pm2-logrotate
   pm2 pornire
   ```

3. Clone client config, setup env şi keys. (Automatic Translation)

   ```console
   git clone https://github.com/freeCodeCamp/client-config.git client
   cd client
   ```

   ```console
   git clone https://github.com/freeCodeCamp/client-config.git client
   cd client
   ```

   Începe instanțele substituentului pentru clientul web, acestea vor fi actualizate cu artefacte din piplinul Azore.

   > Todo: Această configurare trebuie să se mute la stocarea S3 sau Azure Blob 
   > 
   > ```console
   echo "serve -c ../../serve.json www -p 50505" >> client-start-primary.sh
   chmod +x client-start-primary.
   pm2 clientul principal de ștergere
   pm2 începe. client-start-primary.sh --name client-primary
   eco "serve -c . /../serve.json www -p 52525" >> client-start-secondary.sh
   chmod +x client-start-secondary. h
   pm2 șterge client-secundar
   pm2 începe./client-start-secondary.sh --name client-secondary
```

## Logare și monitorizare

```console
pm2 buşteni
```

```console
pm2 monit
```

## Actualizarea instanțelor (Depozite)

Modificările codului trebuie să fie trimise la instanțele API din când în când. Poate fi o actualizare de rulare sau o actualizare manuală. Cel mai nou este esențial la schimbarea dependențelor sau la adăugarea variabilelor de virus.

> [!DANGER] Conductele automate nu se ocupă de actualizările dependențelor la minut. Trebuie să facem o actualizare manuală înainte de a rula orice conductă de implementare.

### 1. Actualizări manuale - utilizate pentru actualizarea dependențelor, env variables.

1. Oprește toate instanțele

   ```console
   pm2 oprire totală
   ```

2. Instalează sau actualizează dependențele

3. Începe instanțe

   ```console
   pornește pm2 toate --update-env && jurnale pm2
   ```

### 2. Actualizări de rulare - utilizate pentru modificări logice ale codului.

```console
pm2 reîncărcare toate --update-env && jurnale pm2
```

> [!NOTĂ] Ne ocupăm de actualizări ale rulării pentru a programa, logică, prin conducte. Nu trebuie să executați aceste comenzi Acestea sunt aici pentru documentaţie.
