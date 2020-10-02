# Flight Manual for working on Virtual Machines

Som medlem av staben eller dev-gruppen, du har kanskje fått tilgang til våre skytjenesteleverandører som Azure, Digital Ocean, osv.

Her er noen praktiske kommandoer du kan bruke til å arbeide med de virtuelle maskinene (VM), for eksempel å utføre vedlikeholdsoppdateringer eller gjennomføre generelle boliger.

# Get a list of the VMs

> [!MERK] Mens du allerede har SSH tilgang til VM-ene, det alene vil ikke la deg liste VMs med mindre du har fått tilgang til skyportalene også.

## Azure

Installer Azure CLI `az`: https://docs.microsoft.com/en-us/cli/azure/install-azure-cli

> **(One-time) Install on macOS with [`homebrew`](https://brew.sh):**

```
brew install azure-cli
```

> **(One-time) Login:**

```
az login
```

> **Get the list of VM names and P addresses:**

```
az vm list-ip-addresses --output table
```

## Digital Ocean

Installer Digital Ocean CLI `doctl`: https://github.com/digitalocean/doctl#installing-doctl

> **(One-time) Install on macOS with [`homebrew`](https://brew.sh):**

```
brew install doctl
```

> **(One-time) Login:**

Autentisering og kontekst bryter: https://github.com/digitalocean/doctl#authenticating-with-digitalocean

```
doctl auth init
```

> **Get the list of VM names and IP addresses:**

```
doctl compute droplet list --format "ID,Name,PublicIPv4"
```

# Spin a VM (or VM Scale Set)

> Todo: Add instructions for spinning VM(s)


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

# Keep VMs updated

You should keep the VMs up to date by performing updates and upgrades. This will ensure that the virtual machine is patched with latest security fixes.

> [!WARNING] Before you run these commands:
> 
> - Kontroller at VM er fullstendig bestemt, og at det ikke er etter installasjon trinn er kjørt.
> - If you are updating packages on a VM that is already serving an application, make sure the app has been stopped / saved. Package updates will cause network bandwidth, memory and/or CPU usage spikes leading to outages on running applications.

Update package information

```console
sudo apt update
```

Upgrade installed packages

```console
sudo apt upgrade -y
```

Cleanup unused packages

```console
sudo apt autoremove -y
```

# Work on Web Servers (Proxy)

We are running load balanced (Azure Load Balancer) instances for our web servers. These servers are running NGINX which reverse proxy all of the traffic to freeCodeCamp.org from various applications running on their own infrastructures.

NGINX konfigurasjonen er tilgjengelig på [dette kodelageret](https://github.com/freeCodeCamp/nginx-config).

## First Install

Provisioning VMs with the Code

### 1. (Optional) Install NGINX and configure from repository.

The basic setup should be ready OOTB, via the cloud-init configuration. SSH and make changes as necessary for the particular instance(s).

If you not use the cloud-init config previously use the below for manual setup of NGINX and error pages:

```console
sudo su

cd /var/www/html
git clone https://github.com/freeCodeCamp/error-pages

cd /etc/
rm -rf nginx
git clone https://github.com/freeCodeCamp/nginx-config nginx

cd /etc/nginx
```

### 2. Install Cloudflare origin certificates and upstream application config.

Få Skyflare-opprinnelsessertifikatene fra sikker lagring og installer på nødvendige steder.

**OR**

Move over existing certificates:

```console
# Local
scp -r username@source-server-public-ip:/etc/nginx/ssl ./
scp -pr ./ssl username@target-server-public-ip:/tmp/

# Remote
rm -rf ./ssl
mv /tmp/ssl ./
```

Update Upstream Configurations:

```console
vi configs/upstreams.conf
```

Add/update the source/origin application IP addresses.

### 3. Setup networking and firewalls.

Configure Azure firewalls and `ufw` as needed for ingress origin addresses.

### 4. Add the VM to the load balancer backend pool.

Configure and add rules to load balancer if needed. You may also need to add the VMs to load balancer backend pool if needed.

## Oppdaterer Instanser (vedlikehold)

1. Check status for NGINX service using the below command:

```console
sudo systemctl status nginx
```

2. Logging and monitoring for the servers are available at:

> <h3 align="center"><a href='https://amplify.nginx.com' _target='blank'>https://amplify.nginx.com</a></h3>
## Updating Instances (Maintenance)

Konfigurasjonsendringer i våre NGINX-instanser opprettholdes på GitHub, disse bør distribueres i hver enkelt forekomst slik:

1. SSH into the instance and enter sudo

```console
sudo su
```

2. Get the latest config code.

```console
cd /etc/nginx
git fetch --all --prune
git reset --hard origin/master
```

3. Test og last konfigurasjonen på nytt [med signaler](https://docs.nginx.com/nginx/admin-guide/basic-functionality/runtime-control/#controlling-nginx).

```console
nginx -t
nginx -s reload
```

# Work on API Instances

1. Install build tools for node binaries (`node-gyp`) etc.

```console
sudo apt install build-essential
```

## First Install

Provisioning VMs with the Code

1. Install Node LTS.

2. Update `npm` and install PM2 and setup logrotate and startup on boot

   ```console
   npm i -g npm
   npm i -g pm2
   pm2 install pm2-logrotate
   pm2 startup
   ```

3. Clone freeCodeCamp, setup env and keys.

   ```console
   git clone https://github.com/freeCodeCamp/freeCodeCamp.git
   cd freeCodeCamp
   git checkout production-current # or any other branch to be deployed
   ```

4. Create the `.env` from the secure credentials storage.

5. Create the `google-credentials.json` from the secure credentials storage.

6. Install dependencies

   ```console
   npm ci
   ```

7. Build the server

   ```console
   npm run ensure-env && npm run build:server
   ```

8. Start Instances

   ```console
   cd api-server
   pm2 start production-start.js -i max --max-memory-restart 600M --name org
   ```

## Oppdaterer Instanser (vedlikehold)

```console
## Logging og overvåking

```console
pm2 logger
```

```console
pm2 monit
```

## Updating Instances (Maintenance)

Code changes need to be deployed to the API instances from time to time. It can be a rolling update or a manual update. The later is essential when changing dependencies or adding enviroment variables.

> [!DANGER] The automated pipelines are not handling dependencies updates at the minute. We need to do a manual update before any deployment pipeline runs.

### 1. Manual Updates - Used for updating dependencies, env variables.

1. Stop all instances

```console
pm2 stop all
```

2. Install dependencies

```console
npm ci
```

3. Build the server

```console
npm run ensure-env && npm run build:server
```

4. Start Instances

```console
pm2 start all --update-env && pm2 logs
```

### 2. Rolling updates - Used for logical changes to code.

```console
pm2 reload all --update-env && pm2 logs
```

> [!NOTE] We are handling rolling updates to code, logic, via pipelines. You should not need to run these commands. These are here for documentation.

# Work on Client Instances

1. Install build tools for node binaries (`node-gyp`) etc.

```console
sudo apt install build-essential
```

## First Install

Provisioning VMs with the Code

1. Install Node LTS.

2. Update `npm` and install PM2 and setup logrotate and startup on boot

   ```console
   npm i -g npm
   npm i -g pm2
   npm install -g serve
   pm2 install pm2-logrotate
   pm2 startup
   ```

3. Clone client config, setup env and keys.

   ```console
   git clone https://github.com/freeCodeCamp/client-config.git client
   cd client
   ```

   ```console
   git clone https://github.com/freeCodeCamp/client-config.git client
   cd client
   ```

   Start plassholderinstanser for den nettklienten, disse vil bli oppdatert med artifakter fra Azurepipleten.

   > Todo: This setup needs to move to S3 or Azure Blob storage 
   > 
   > ```console
   echo "serve -c ../../serve.json www -p 50505" >> client-start-primary.sh
   chmod +x client-start-primary.sh
   pm2 delete client-primary
   pm2 start  ./client-start-primary.sh --name client-primary
   echo "serve -c ../../serve.json www -p 52525" >> client-start-secondary.sh
   chmod +x client-start-secondary.sh
   pm2 delete client-secondary
   pm2 start  ./client-start-secondary.sh --name client-secondary
```

## Oppdaterer Instanser (vedlikehold)

```console
## Logging og overvåking

```console
pm2 logger
```

```console
pm2 monit
```

## Updating Instances (Maintenance)

Code changes need to be deployed to the API instances from time to time. It can be a rolling update or a manual update. The later is essential when changing dependencies or adding enviroment variables.

> [!DANGER] The automated pipelines are not handling dependencies updates at the minute. We need to do a manual update before any deployment pipeline runs.

### 1. Manual Updates - Used for updating dependencies, env variables.

1. Stop all instances

   ```console
   pm2 stop all
   ```

2. Install or update dependencies

3. Start Instances

   ```console
   pm2 start all --update-env && pm2 logs
   ```

### 2. Rolling updates - Used for logical changes to code.

```console
pm2 reload all --update-env && pm2 logs
```

> [!NOTE] We are handling rolling updates to code, logic, via pipelines. You should not need to run these commands. These are here for documentation.
