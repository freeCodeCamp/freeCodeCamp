## Local Setup

1. In a terminal window:

```bash
npm install

cd dashboard-api

npm run seed

npm run develop
```

## Caveats & Notes

### The one-off scripts will error out on actions performed by repository admins, for example:

If an admin removes a label from a Pull request, the script can not add that label back. This is usually because the script is acting on behalf of a non-admin user with write access.

This is usually the case with the use of access tokens for scripts.

### Setting up Cron jobs for Sweeper Scripts

For updating dashboard data we use PM2 like so:

```
pm2 start --no-autorestart dashboard-api/utils/update-db.js --cron "*/10 * * * *"
```

This will start the script in the "no restart" mode and re-run it every 10 minutes.
Some useful links to calculate a Cron expression: <https://crontab.guru/every-10-minutes>
