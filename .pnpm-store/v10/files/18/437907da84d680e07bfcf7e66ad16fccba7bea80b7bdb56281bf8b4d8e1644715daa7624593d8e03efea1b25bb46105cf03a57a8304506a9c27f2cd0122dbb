# Nodemailer

[![Nodemailer](https://raw.githubusercontent.com/nodemailer/nodemailer/master/assets/nm_logo_200x136.png)](https://nodemailer.com/about/)

Send emails from Node.js – easy as cake! 🍰✉️

[![NPM](https://nodei.co/npm/nodemailer.png?downloads=true&downloadRank=true&stars=true)](https://nodemailer.com/about/)

See [nodemailer.com](https://nodemailer.com/) for documentation and terms.

> [!TIP]
> Check out **[EmailEngine](https://emailengine.app/?utm_source=github-nodemailer&utm_campaign=nodemailer&utm_medium=readme-link)** – a self-hosted email gateway that allows making **REST requests against IMAP and SMTP servers**. EmailEngine also sends webhooks whenever something changes on the registered accounts.\
> \
> Using the email accounts registered with EmailEngine, you can receive and [send emails](https://emailengine.app/sending-emails?utm_source=github-nodemailer&utm_campaign=nodemailer&utm_medium=readme-link). EmailEngine supports OAuth2, delayed sends, opens and clicks tracking, bounce detection, etc. All on top of regular email accounts without an external MTA service.

## Having an issue?

#### First review the docs

Documentation for Nodemailer can be found at [nodemailer.com](https://nodemailer.com/about/).

#### Nodemailer throws a SyntaxError for "..."

You are using an older Node.js version than v6.0. Upgrade Node.js to get support for the spread operator. Nodemailer supports all Node.js versions starting from Node.js@v6.0.0.

#### I'm having issues with Gmail

Gmail either works well, or it does not work at all. It is probably easier to switch to an alternative service instead of fixing issues with Gmail. If Gmail does not work for you, then don't use it. Read more about it [here](https://nodemailer.com/usage/using-gmail/).

#### I get ETIMEDOUT errors

Check your firewall settings. Timeout usually occurs when you try to open a connection to a firewalled port either on the server or on your machine. Some ISPs also block email ports to prevent spamming.

#### Nodemailer works on one machine but not in another

It's either a firewall issue, or your SMTP server blocks authentication attempts from some servers.

#### I get TLS errors

-   If you are running the code on your machine, check your antivirus settings. Antiviruses often mess around with email ports usage. Node.js might not recognize the MITM cert your antivirus is using.
-   Latest Node versions allow only TLS versions 1.2 and higher. Some servers might still use TLS 1.1 or lower. Check Node.js docs on how to get correct TLS support for your app. You can change this with [tls.minVersion](https://nodejs.org/dist/latest-v16.x/docs/api/tls.html#tls_tls_createsecurecontext_options) option
-   You might have the wrong value for the `secure` option. This should be set to `true` only for port 465. For every other port, it should be `false`. Setting it to `false` does not mean that Nodemailer would not use TLS. Nodemailer would still try to upgrade the connection to use TLS if the server supports it.
-   Older Node versions do not fully support the certificate chain of the newest Let's Encrypt certificates. Either set [tls.rejectUnauthorized](https://nodejs.org/dist/latest-v16.x/docs/api/tls.html#tlsconnectoptions-callback) to `false` to skip chain verification or upgrade your Node version

```
let configOptions = {
    host: "smtp.example.com",
    port: 587,
    tls: {
        rejectUnauthorized: true,
        minVersion: "TLSv1.2"
    }
}
```

#### I have issues with DNS / hosts file

Node.js uses [c-ares](https://nodejs.org/en/docs/meta/topics/dependencies/#c-ares) to resolve domain names, not the DNS library provided by the system, so if you have some custom DNS routing set up, it might be ignored. Nodemailer runs [dns.resolve4()](https://nodejs.org/dist/latest-v16.x/docs/api/dns.html#dnsresolve4hostname-options-callback) and [dns.resolve6()](https://nodejs.org/dist/latest-v16.x/docs/api/dns.html#dnsresolve6hostname-options-callback) to resolve hostname into an IP address. If both calls fail, then Nodemailer will fall back to [dns.lookup()](https://nodejs.org/dist/latest-v16.x/docs/api/dns.html#dnslookuphostname-options-callback). If this does not work for you, you can hard code the IP address into the configuration like shown below. In that case, Nodemailer would not perform any DNS lookups.

```
let configOptions = {
    host: "1.2.3.4",
    port: 465,
    secure: true,
    tls: {
        // must provide server name, otherwise TLS certificate check will fail
        servername: "example.com"
    }
}
```

#### I have an issue with TypeScript types

Nodemailer has official support for Node.js only. For anything related to TypeScript, you need to directly contact the authors of the [type definitions](https://www.npmjs.com/package/@types/nodemailer).

#### I have a different problem

If you are having issues with Nodemailer, then the best way to find help would be [Stack Overflow](https://stackoverflow.com/search?q=nodemailer) or revisit the [docs](https://nodemailer.com/about/).

### License

Nodemailer is licensed under the **MIT No Attribution license**

---

The Nodemailer logo was designed by [Sven Kristjansen](https://www.behance.net/kristjansen).
