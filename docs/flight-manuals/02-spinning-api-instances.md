### Provisioning VMs with API Code and starting up services
1. Install Node LTS.
2. Update `npm` and install PM2 and setup logrotate and startup on boot
   ```
   npm i -g npm
   npm i -g pm2
   pm2 install pm2-logrotate
   pm2 startup
   ```
3. Clone freeCodeCamp, setup env and keys, install dependencies, and make first build.
   ```
   git clone https://github.com/freeCodeCamp/freeCodeCamp.git
   cd freeCodeCamp
   ```

   Create the `.env` from the secure credentials storage.

   ```
   npm ci
   ```

   ```
   npm run ensure-env && npm run build:server
   ```
4. Start Instances
   ```
   cd api-server
   pm2 start production-start.js -i max --max-memory-restart 600M --name org
   ```
5. Logging, Monitoring and Reloading on updates to code changes
   ```
   pm2 logs
   ```
   ```
   pm2 monitor
   ```
   ```
   pm2 reload all --update-env && pm2 logs
   ```