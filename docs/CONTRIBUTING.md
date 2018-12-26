# Contributing

Todo

## Usage

Todo

## Caveats & Notes

### The one-off scripts will error out on actions performed by repository admins, for example:

If an admin removes a label from a Pull request, the script can not add that label back. This is usually because the script is acting on behalf of a non-admin user with write access.

This is usually the case with the use of access tokens for scripts.

### Setting up Cron jobs for Sweeper Scripts

For updating the pr correlation dataset we use PM2 like so:

```
pm2 start --no-autorestart sweeper/one-off-scripts/get-pr-relations-data.js --cron "*/10 * * * *"
```

This will start the script in the "no restart" mode and re-run it every 15 minutes. 
Some useful links to calcuate a Cron expression: <https://crontab.guru/every-10-minutes>
