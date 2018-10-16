---
title: How to Log in to Your Local Instance of Free Code Camp
---
This guide will help you log in to your local FCC site using your GitHub account. This process should be similar for logging in with other social media accounts. This guide assumes you already have a local copy of FCC up and running.

## TL;DR

1.  <a href='https://github.com/settings/developers' target='_blank' rel='nofollow'>Register a new OAuth application</a>
2.  Homepage field: `http://localhost:3000/`
3.  Callback field: `http://localhost:3000/auth/github/callback`
4.  Copy/paste the Client ID and Client Secret into your `.env` file
5.  Use port 3000 when viewing your local FCC site

Free Code Camp Issue Mods and staff are on hand to assist with Pull Request related issues on our <a href='https://gitter.im/FreeCodeCamp/HelpContributors' target='_blank' rel='nofollow'>Help Contributors Chat Room</a>

## Disclaimer

The output from running `$ gulp` mentions the **Access Port** is 3001\. I have only successfully logged in with GitHub at port 3000 - the **Proxy Port**. If you understand how to log in using other ports, please consider submitting a pull request on this wiki.

## Log In Using Your GitHub Account

1.  <a href='https://github.com/settings/developers' target='_blank' rel='nofollow'>Register a new OAuth application</a> and click **Register new application**

_Alternatively_, click your **Profile Picture** => **Settings** => **Applications** => **Developer applications** => **Register new application**

![Register GitHub OAuth App](//discourse-user-assets.s3.amazonaws.com/original/2X/5/55f4645c3498ceb8098afe8e8353da8f7c262548.png)  

1.  Fill out OAuth application fields
    *   **Application name** - choose any name, like `fcc-local`

    *   **Homepage URL** - set to `http://localhost:3000/`
    *   **Application description** - optional
    *   **Authorization callback URL** - set to `http://localhost:3000/auth/github/callback`
2.  Click **Register application** to see the newly registered application page with your Client ID and Client Secret.

![Client ID and Client Secret](//discourse-user-assets.s3.amazonaws.com/original/2X/c/c43ee37a9f0f228d3663bb28accedc14cca3ff56.png)

1.  Copy and paste your Client ID and Client Secret into your `.env` file.

_Note: your Client ID and Client Secret will be long alphanumeric values._

![Update .env file](//discourse-user-assets.s3.amazonaws.com/original/2X/5/549aeaa6ea85e119ba5e978c708dc55c39b134b3.png)

## Tips

1.  Remove / unset with comment block the unwanted provider in <a href='https://github.com/FreeCodeCamp/FreeCodeCamp/blob/staging/server/passport-providers.js' target='_blank' rel='nofollow'>passport-provider</a>.

2.  Add SESSION_SECRET and COOKIE_SECRET in `.env` if you get error on express-session and cookieParser.

 `COOKIE_SECRET='secret'  
SESSION_SECRET='secret'` 

1.  Run command `node seed` before run `gulp` if you dont get the challenges.

## Finished

Congratulations! You can now successfully log into your local FCC site using your GitHub account.