![Alt](https://lh4.googleusercontent.com/-PVw-ZUM9vV8/UuWeH51os0I/AAAAAAAAD6M/0Ikg7viJftQ/w1286-h566-no/hackathon-starter-logo.jpg)
Hackathon Starter
=================
A kickstarter for **Node.js** web applications. 

When I started this project, my primary focus was on **simplicity** and **ease of use**. Anyone who knows a little bit of JavaScript should be able to get started without too much pain. I tried to make it as **generic** and **reusable** as possible to cover most use cases of hackathon web apps, without being too specific.

Chances are, you will not need all 4 types of OAuth2 authentication methods, or all 9 API Browser examples. Sadly, there is no step-by-step wizzard to configure the boilerplate code just for your use case. So, use what you need, simply delete what you don't need.

![](https://lh6.googleusercontent.com/-NikjFtdyOq8/UsCv7URplAI/AAAAAAAADrE/a417u0cZU7Y/w1278-h958-no/Screenshot+2013-12-29+18.27.10.png)

Features
--------
- Local authentication using Email and Password
- OAuth2 authentication via Twitter, Facebook, Google or GitHub
- MVC Code Structure
- Bootstrap 3 + Flat UI + iOS7 Themes
- LESS stylesheets (auto-compiled)
- Contact Form (powered by Sendgrid)
- Account Management page
- 9 API Examples

Prerequisites
-------------
> - MongoDB
> - Node.js
> - **Xcode** (Mac OS X) or **Visual Studio** (Windows)


Quick Start
-----------
[Download the latest release](https://github.com/sahat/hackathon-starter/releases).

Then follow these commands to install third-party library dependencies and start the server.
```
cd hackathon-starter-1.0
npm install
node app.js
```

Recommended node.js libraries
----------------

- geoip-lite - get location name from IP address.
- [node-validator](https://github.com/chriso/node-validator) - input validation and sanitization.


Recommended client-side libraries
---------------------------------
- [Hover](https://github.com/IanLunn/Hover) - awesome css3 animations on mouse hover.
- [platform.js](https://github.com/bestiejs/platform.js) - get client's operating system name, version, and other useful information.
- [iCheck](https://github.com/fronteed/iCheck) - custom nice looking radio and check boxes.

Contributing
------------
If something is unclear, confusing, or needs to be refactored, please let me know. Pull requests are always welcome, but due to the opinionated nature of this project, I cannot accept every pull request. Please open an issue before submitting a pull request.
