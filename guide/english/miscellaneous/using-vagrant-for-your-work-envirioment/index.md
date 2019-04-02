---
title: Using Vagrant for Your Work Envirioment
---
The following instruction will help you install the necessary software and also how to set up your first Vagrant and Virtual Box.

## Installation

This will create a working environment so you can test your web site on your local machine. The **Vagrantfile** can be configured to your specific environment so that anyone working with you can make and see changes no matter if they use Linux, Mac OS X, or Windows. Using this virtual environment, you will be able to see your PHP scripts run, build and work with your databases, and so much more. So, without further or do, let's get down to business.

Check out the following links and install each program. Be sure that it matches your OS (Operating System).

*   <a href='https://www.virtualbox.org/' target='_blank' rel='nofollow'>Virtual Box</a>
*   <a href='https://www.vagrantup.com/downloads.html' target='_blank' rel='nofollow'>Vagrant</a>
*   <a href='https://git-scm.com/downloads' target='_blank' rel='nofollow'>Git Bash, Gui, and Command</a>

Now that we have the necessary programs installed, let's get down to business.

**Git** has several different programs we can use here. Let's open the **Git GUI**. We also can start up **Virtual Box** so that we can see the box running.

Once you run the **Git GUI**, you'll see several options. Let's select the top option, **"Create New Repository"**.

Select the **"Browse"** button and select the drive you want to install and run your virtual machine / server from. You can right click in the folder area and create a new folder. Let's name it **FreeCodeCampMachine**.

Now, you'll see the **Git Gui** and beside Directory, you should see **C:/FreeCodeCampMachine**.

At the bottom, select the button that says **"Create"**.

Now the interface looks different. Don't worry about any of the buttons at the bottom or freak out about all the options at the top. We want to work on one thing. Select the option at the top left that says **"Repository"**, then under that option, you'll find **"Git Bash"**. Select **Git Bash**.

Now we see we are in a terminal / console window. You should see the name of your computer followed by **MINGW64 /d/FreeCodeCampMachine (master)**. That simply says we are operating in the folder you created and you are on the **master** repository. Later we will create a branch but let's worry about that later.

Now, let's throw some commands down and get the ball rolling. First type the following and hit Enter:

    $ git clone https://github.com/scotch-io/scotch-box myProject

This will create a folder inside your directory named **"myProject"**. Next, let's drill into that folder, so enter the following commands and hit enter:

    $ cd myProject

Now we're in the folder we want to be in. Now type the following on the command line and hit enter:

    vagrant up

Now, let's open a browser window and enter the following IP address:

    http://192.168.33.10/

You should see a landing page for **Scotch Box** telling you everything that is there and installed. Now, when you dig through the file you created earlier, you'll find one that says **"public"**. Inside that folder you'll see a file named **"index.php"** and that's what you see for the landing page. You can edit that file with a text editor, save it, and refresh your browser to see your changes.