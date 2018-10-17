---
title: Certbot
---
## Certbot

Certbot is a client for [Let's Encrypt](https://guide.freecodecamp.org/developer-tools/lets-encrypt), created by the EFF (Electronic Frontier Foundation). It allows users to create and automatically renew SSL certificates from Let's Encrypt. A Let's Encrypt certificate can last 90 days so Certbot will automatically fetch a new cert before the old ones expires.

#### System Requirments

- Unix-based OS
- Terminal Root Access
- Python 2.7 or 3.4^

#### Implementation

Depending on your server environment, CertBot is should be reletively easy to setup. [This](https://certbot.eff.org/) website is a great place to go to get a step-by-step guide for most hosting environments. In order to setup it is crucial that you have root terminal access to the hosting enviornment. If you don't or aren't familiar with the terminal check to see if host has direct integration with Let's Encrypt.

#### More Information:
- https://certbot.eff.org/ \
Automatically enable HTTPS on your website with EFF's Certbot, deploying Let's Encrypt certificates.
- https://guide.freecodecamp.org/developer-tools/lets-encrypt \
Learn more about what Let's Encrypt is.
