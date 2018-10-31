---
title: Installing Wordpress Locally on Mac
---
Installing WordPress locally will allow you to build themes safely and will allow you to try out WordPress for free without paying for hosting.

## Required Downloads:

*   <a href='https://www.mamp.info/en/' target='_blank' rel='nofollow'>MAMP</a>
*   <a href='https://wordpress.org/about/' target='_blank' rel='nofollow'>WordPress</a>

The first step to installing WordPress locally is to download MAMP. MAMP stands for Macintosh, Apache, MySQL, and PHP. This is the local server that will run the new install of WordPress. Installing MAMP should be easy because it is like installing any other app.

After MAMP is installed you will want to uninstall MAMP pro. To do this, just navigate to your applications folder and find the MAMP pro folder. There will be an uninstaller inside of this folder. I chose to click all of the check boxes, since it is a fresh install of MAMP.

## Why MAMP

MAMP allows you to:

* Develop and design your site locally—no need to worry about “breaking” the live site by testing out a few changes
* Build sites you don’t want the world to see (since search engines can’t index your local site)
* Work in a faster development environment (because it doesn’t rely on an internet connection and communicating with a web   server)
* Work offline (great for trips on airplanes)
* Use the local install as a partial backup of your existing site
* Develop sites in a secure environment (again, because MAMP sites are not online, it makes it basically impossible to be  hacked or have some other kind of security breach)

## Configuring MAMP

Open the MAMP application and you should be greeted with this screen:

We have to set some preferences so click the preferences icon. On the preferences screen click `Ports`.

Here you can leave the ports as is which will require you to include the port number in the URL `localhost:8888`.

If you don't want to include the port number in the URL, you can change the Apache and MySQL ports to 80\. The reason I chose not to do this is because you will always be asked for your password

Next you will click the Apache tab and set a document root. I chose to create a new folder called "Sites" in my user folder.

Now that we are done editing all of the settings, hit OK to save.

## Starting MAMP

To start MAMP click "Start Servers."

This should open a new window with the address `http://localhost:8888/MAMP/?language=English` in your web browser.

If your browser didn't open, you should be able to click `Open WebStart page`.

Creating a Database

The next step is to click the `phpMyAdmin` link under MySQL which will take you to this page:

Click new in the left navigation menu.

Enter a name for the Database and then click create. I chose "WordPress."

## Installing WordPress

Unzip the WordPress file that you downloaded and drag it's contents into the folder you created earlier as your document root.

Once the files are copied, go to `localhost:8888`.

Choose you language and at the next screen click `Let's Go`.

Enter the name of the Database you created, and "root" for the username and password, and click submit.

Click `Run the install`, and on the next screen enter the details for your log in.

Click `Submit`, and you will be taken to the log in for your local hosted WordPress.

Success! Log in with the username and password you created.
