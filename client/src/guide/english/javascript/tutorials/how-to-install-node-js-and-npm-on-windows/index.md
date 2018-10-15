---
title: How to Install Node Js and Npm on Windows
---
## How to Install Node Js and Npm on Windows

Installing Node.js and Npm on Windows is very straightforward.

First, download the Windows installer from the <a href='https://nodejs.org/' target='_blank' rel='nofollow'>Node.js website</a>. You will have the choice between the **LTS** (Long Term Support) or **Current** version. 

  - The **Current** version receives the latest features and updates more rapidly
  - The **LTS** version foregos feature changes to improve stability, but receives patches such as bug fixes and security updates
    
Once you have selected a version meets your needs, run the installer. Follow the prompts to select an install path and ensure the **npm package manager** feature is included along with the **Node.js runtime**. This should be the default configuration.

Restart your computer after the installation is complete.

If you installed under the default configuration, Node.js should now be added to your PATH. Run command prompt or powershell and input the following to test it out:

    > node -v

The console should respond with a version string. Repeat the process for Npm:

    > npm -v
    
If both commands work, your installation was a success, and you can start using Node.js!

#### More Information:
For more information and guides, please visit the <a href='https://nodejs.org/en/docs/' target='_blank' rel='nofollow'>Node.js docs page</a>.
