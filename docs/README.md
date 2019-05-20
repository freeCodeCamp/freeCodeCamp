## Local Setup

1. In a terminal window:

```bash
cp probot/sample.env probot/.env
```

2. Update `probot/.env` variables with applicable values

3. In a terminal window:

```bash
npm install

npm run build

npm run develop
```

## Caveats & Notes

### Local Ports when developing locally

Using the above `npm run develop` will start both the api server and the Create React App (Dashboard) in development mode.  The api server runs on port 3001 and the React app runs on port 3000.  

### The one-off scripts will error out on actions performed by repository admins, for example:

If an admin removes a label from a Pull request, the script can not add that label back. This is usually because the script is acting on behalf of a non-admin user with write access.

This is usually the case with the use of access tokens for scripts.

### Seeding local MongoDB

You can seed your local database via the Github API running the script below.
Keep in mind, the first time you run it, if there are over 4500 PRs in the
repo, it will take over an hour, due to the rate limiting feature the script
uses to avoid hitting Github's request limits for the API.  When the repo has
less than 4500 PRs, the seeding will take only about 25-35 minutes.

```
node probot/server/tools/update-db.js
```

### Setting up Cron jobs for Sweeper Scripts

For updating dashboard data we use PM2 like so:

```
pm2 start --no-autorestart probot/server/tools/update-db.js --cron "*/10 * * * *"
```

This will start the script in the "no restart" mode and re-run it every 10 minutes.
Some useful links to calculate a Cron expression: <https://crontab.guru/every-10-minutes>

### Starting the express server (via probot)

```
pm2 start "npm start" --name "contribute-app"
```

> **Note:** Start only one instance of this app, you can't have multiple probot apps running. Starting multiple instances will crash the app.

