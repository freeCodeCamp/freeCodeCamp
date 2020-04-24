# Work on API Instances

## Installing pre-requisites

Perform updates to packages

```console
sudo apt update
sudo apt upgrade -y
sudo apt autoremove -y
```

Install tools for binaries (`node-gyp`) etc.

```console
sudo apt install build-essential
```

## First Install

### Provisioning VMs with the Code

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
   ```

4. Create the `.env` from the secure credentials storage.

5. Install dependencies

   ```console
   npm ci
   ```

6. Build the server

   ```console
   npm run ensure-env && npm run build:server
   ```

7. Start Instances

   ```console
   cd api-server
   pm2 start production-start.js -i max --max-memory-restart 600M --name org
   ```

## Logging and Monitoring

```console
pm2 logs
```

```console
pm2 monitor
```

## Updating Instances (Maintenance)

### Rolling updates for logical changes to code

> [!NOTE]
> We are handling rolling updates to code, logic, via pipelines. You do not need to run these commands. These are here for documentation.

```console
pm2 reload all --update-env && pm2 logs
```

### Stop and start updates for changes in dependencies

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
