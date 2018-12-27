## Local Setup

1. In a terminal window:

```bash
npm install

cd dashboard-api 

cp sample_data.json data.json

npm run develop
```

2. In second terminal window: 

```bash
cd dashboard-client 

REACT_APP_DEV=true npm start
```

3. To update the data.json file

  - Within the [`sweeper`](https://github.com/freeCodeCamp/github-tools/tree/master/sweeper) directory, review the [`sample.env`](https://github.com/freeCodeCamp/github-tools/blob/master/sweeper/sample.env) to update your `.env` appropriately.

  - Run the following:

    ```bash
    NODE_DEV=true node dashboard-api/update.js
    ```

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
