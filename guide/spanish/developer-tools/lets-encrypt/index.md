---
title: Let's Encrypt
localeTitle: Vamos a cifrar
---
## Vamos a cifrar

Let's Encrypt es una Autoridad de Certificación de uso gratuito. La mayoría de todos los navegadores admiten y confían en los certificados de Let's Encrypt. Se requiere un certificado de CA para servir su sitio a través de HTTPS y hacer que los navegadores confíen en el sitio.

La forma más fácil de comenzar con Let's Encrypt es mediante el uso de [certbot](https://certbot.eff.org/) , un popular cliente de Let's Encrypt que lo ayudará a implementar y mantener fácilmente su certificado SSL. Un certificado de Let's Encrypt está configurado para caducar después de los 90 días y se puede renovar en cualquier momento. Los 90 días pueden parecer poco tiempo, pero los clientes como certbot pueden ayudarlo a automatizar la renovación del certificado.

Hay una gran cantidad de [clientes](https://letsencrypt.org/docs/client-options/) de Let's Encrypt aparte de certbot, por lo que puede esperar que Let's Encrypt sea fácil de implementar en su servidor.

Si está alojando fuera de un servidor dedicado / VPS, no tiene que preocuparse por el soporte de Let Encrypt. Sin embargo, si usted está en un plan de alojamiento compartido su anfitrión tendrá que tener Cifrar Vamos [específicamente](https://community.letsencrypt.org/t/web-hosting-who-support-lets-encrypt/6920) prevista explícitamente.

#### Más información:

https://letsencrypt.org/ Let's Encrypt es una Autoridad de Certificación gratuita, automatizada y abierta. https://community.letsencrypt.org/t/web-hosting-who-support-lets-encrypt/6920 Una lista de hosts compartidos que soportan Let's Encrypt. https://letsencrypt.org/docs/client-options/ Una lista de clientes de Let's Encrypt.