## Local Setup
- Follow the steps below to get this running on your local machine

### 1. Copy .env
- Copy the `sample.env` file into `.env`. The command below will do that in the terminal if your CWD(current working directory) is the `contribute` folder.
```bash
cp probot/sample.env probot/.env
```
- If you do not want to populate the database with the freeCodeCamp PR's you can [skip to step 6](#6-start-the-program)

### 2. Update .env
- Put your GitHub username in the `GITHUB_USERNAME` field of the `.env` file

### 3. Obtain GitHub Personal access token
- While on Github, click your profile icon > `Settings`
- Then click `Developer settings` > `Personal access tokens`
- Click `Generate new token`
- On the next page, give the token a name so you know what it’s for
- Scroll down to the bottom and click `Generate token`
- Copy the token string and paste it into the `GITHUB_ACCESS_TOKEN` field in the `.env` file. Note that you will not be able to see this token string on GitHub again

### 4. Create your own GitHub app
- While on GitHub, click your profile icon > `Settings`
- Then click `developer settings` > `New GitHub app`
- Fill in the `name` field with a name of your choice
- Fill in the `Homepage URL` field with the URL to the GitHub repository for your app. e.g. `https://github.com/username/contribute`
- In a new tab, go to https://smee.io/
- Click `Start a new channel` and copy the URL they give you. You can ignore the rest of the instructions on the `smee.io` page
- Paste the URL you copied into the `WEBHOOK_PROXY_URL` field of the `.env` file and the `Webhook URL` field of your new GitHub app 
- Fill in the `Webhook secret` field on the GitHub app with a secret of your choice
- Put the same secret you just used in the `WEBHOOK_SECRET` field of the `.env` file
- Scroll to the bottom of your GitHub app page and click `Create GitHub App`
- On the next page, copy the `App ID` and paste it into the `APP_ID` field of the `.env` file
- Scroll to the bottom of this page and click `Generate Private Key`
- A popup menu will allow you to download the key file. Download it and put it in the `probot` folder

### 5. Run mongoDB
- Make sure a mongoDB instance is running by running the command below in the terminal.
```bash
mongod —dbpath=./database_folder
```

### 6. Start the program
- In a new terminal window or tab, run these three commands to start the program. Wait for one command to finish running before starting the next.
```bash
npm install
npm run build
npm run develop
```
- If you skipped steps 2-5, you can ignore the rest

### 7. Update the Database
- Run the command below to populate your local database with PR’s from the freeCodeCamp repo. Note that you must have the program running and mongoDB running.
```bash
node probot/server/tools/update-db.js
```
- This will take a while. If it stops running partway through, it's probably a timeout error. Run the command again and it should finish

## Caveats & Notes

### Local Ports when developing locally
Using `npm run develop` will start both the api server and the Create React App(Dashboard) in development mode. The api server runs on port 3001 and the React app runs on port 3000.

### The one-off scripts will error out on actions performed by repository admins
For example, if an admin removes a label from a Pull Request, the script can not add that label back. This is usually because the script is acting on behalf of a non-admin user with write access.
This is usually the case with the use of access tokens for scripts.

### Setting up Cron jobs for Sweeper Scripts
For updating dashboard data we use PM2 like so:
```bash
pm2 start --no-autorestart probot/server/tools/update-db.js --cron "*/10 * * * *"
```
This will start the script in the "no restart" mode and re-run it every 10 minutes.
A useful link to calculate a Cron expression: <https://crontab.guru/every-10-minutes>

### Starting the express server (via probot)
```bash
pm2 start "npm start" --name "contribute-app"
```
**Note:** Start only one instance of this app, you can't have multiple probot apps running. Starting multiple instances will crash the app.

