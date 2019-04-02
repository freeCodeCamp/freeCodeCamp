---
title: Let's Encrypt
---
## Let's Encrypt
Let's Encrypt is a free to use Certificate Authority. Most all browsers support and trust Let's Encrypt certificates. A CA certificate is a required for serving your site over HTTPS and getting browsers to trust the site.

The easiest way to get started with Let's Encrypt is by using [certbot](https://certbot.eff.org/), a popular Let's Encrypt client that will help you with easily deploying and maintaining your SSL certificate. A Let's Encrypt certificate is set to expire after 90 day's and can be renewed whenever. The 90 days may seem like a short time, but clients like certbot can help you to automate the renewal of the cert. 

There are a plethora of Let's Encrypt [clients](https://letsencrypt.org/docs/client-options/) aside from certbot so you can expect Let's Encrypt to be easy to implement on your server.

If you are hosting off of a VPS/dedicated server you don't have to worry about Let Encrypt support. However, if you are on a shared hosting plan your host will have to have Let's Encrypt [specifically](https://community.letsencrypt.org/t/web-hosting-who-support-lets-encrypt/6920) explicitly provided.

#### More Information:
https://letsencrypt.org/
Let’s Encrypt is a free, automated, and open Certificate Authority.
https://community.letsencrypt.org/t/web-hosting-who-support-lets-encrypt/6920
A list of shared host who support Let's Encrypt.
https://letsencrypt.org/docs/client-options/
A List of of Let's Encrypt clients.
