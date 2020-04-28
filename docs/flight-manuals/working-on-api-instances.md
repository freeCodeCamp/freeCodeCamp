# Work on API Instances

## Installing pre-requisites

1. Perform updates to the OS packages by following [this guide](flight-manuals/working-on-virtual-machines).

2. Install build tools for node binaries (`node-gyp`) etc.

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

Code changes need to be deployed to the API instances from time to time. It can be a rolling update or a manual update. The later is essential when changing dependencies or adding enviroment variables. 

> [!DANGER]
> The automated pipelines are not handling dependencies updates at the minute. We need to do a manual update before any deployment pipeline runs.

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

> [!NOTE]
> We are handling rolling updates to code, logic, via pipelines. You do not need to run these commands. These are here for documentation.

