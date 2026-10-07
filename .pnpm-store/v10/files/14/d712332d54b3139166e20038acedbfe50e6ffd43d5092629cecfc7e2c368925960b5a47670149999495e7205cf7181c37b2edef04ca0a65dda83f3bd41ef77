# expo/devcert

A fork of `devcert` with bundle size optimizations.

# devcert - Development SSL made easy

So, running a local HTTPS server usually sucks. There's a range of
approaches, each with their own tradeoff. The common one, using self-signed
certificates, means having to ignore scary browser warnings for each project.

devcert makes the process easy. Want a private key and certificate file to
use with your server? Just ask:

```js
let ssl = await devcert.certificateFor("my-app.test");
https.createServer(ssl, app).listen(3000);
```

Now open https://my-app.test:3000 and voila - your page loads with no scary
warnings or hoops to jump through.

> Certificates are cached by name, so two calls for
> `certificateFor('foo')` will return the same key and certificate.

## Options

When it installs or upgrades, devcert creates a self-signed certificate
authority (CA) which it uses to sign all certificates it creates. It will try
to register this CA with OS keychains in OSX, Linux, and Windows. However,
some HTTP clients (such as Firefox and NodeJS itself) use their own trusted
certificate list instead of the operating system's keychain. The `getCaPath`
and `getCaBuffer` options make the CA available in the `certificateFor()`
return object itself, so that these programs can choose whether to trust it.

### getCaPath

Set this option to `true` and the returned object will include a `caPath`
property, set to the file path of the certificate authority file. Use this
path to add the certificate to local trust stores which accept paths as
arguments, such as NodeJS's built-in environment variable
`NODE_EXTRA_CA_CERTS`..

### getCaBuffer

Set this option to `true` and the returned object will include a `ca`
property, set to the UTF-8-encoded contents of the certificate authority
file. Use this path to add the certificate to local trust stores which don't
use OS settings, lke the examples mentioned above.

### skipHostsFile

If you supply a custom domain name (i.e. any domain other than `localhost`)
when requesting a certificate from devcert, it will attempt to modify your
system to redirect requests for that domain to your local machine (rather
than to the real domain). It does this by modifying your `/etc/hosts` file.

If you pass in the `skipHostsFile` option, devcert will skip this step. This
means that if you ask for certificates for `my-app.test` (for example), and
don't have some other DNS redirect method in place, that you won't be able to
access your app at `https://my-app.test` because your computer wouldn't know
that `my-app.test` should resolve your local machine.

Keep in mind that SSL certificates are issued for _domains_, so if you ask
for a certificate for `my-app.test`, and don't have any kind of DNS redirect
in place (`/etc/hosts` or otherwise), trying to hit `localhost` won't work,
even if the app you intended to serve via `my-app.test` is running on your
local machine (since the SSL certificate won't say `localhost`).

### skipCertutil

This option will tell devcert to avoid installing `certutil` tooling.

`certutil` is a tooling package used to automate the installation of SSL
certificates in certain circumstances; specifically, Firefox (for every OS)
and Chrome (on Linux only).

Normally, devcert will attempt to install `certutil` if it's needed and not
already present on your system. If you don't want devcert to install this
package, pass `skipCertutil: true`.

If you decide to `skipCertutil`, the initial setup process for devcert
changes in these two scenarios:

- **Firefox on all platforms**: Thankully, Firefox makes this easy. There's a
  point-and-click wizard for importing and trusting a certificate, so if you
  specify `skipCertutil: true`, devcert will instead automatically open Firefox
  and kick off this wizard for you. Simply follow the prompts to trust the
  certificate. **Reminder: you'll only need to do this once per machine**

- **Chrome on Linux**: Unfortunately, it appears that the **only** way to get
  Chrome to trust an SSL certificate on Linux is via the `certutil` tooling -
  there is no manual process for it. Thus, if you are using Chrome on Linux, do
  **not** supply `skipCertuil: true`. If you do, devcert certificates will not
  be trusted by Chrome.

The `certutil` tooling is installed in OS-specific ways:

- Mac: `brew install nss`
- Linux: `apt install libnss3-tools`
- Windows: N/A (there is no easy, hands-off way to install certutil on Windows,
  so devcert will simply fallback to the wizard approach for Firefox outlined
  above)

## How it works

When you ask for a development certificate, devcert will first check to see
if it has run on this machine before. If not, it will create a root
certificate authority and add it to your OS and various browser trust stores.
You'll likely see password prompts from your OS at this point to authorize
the new root CA.

Since your machine now trusts this root CA, it will trust any certificates
signed by it. So when you ask for a certificate for a new domain, devcert
will use the root CA credentials to generate a certificate specific to the
domain you requested, and return the new certificate to you.

If you request a domain that has already had certificates generated for it,
devcert will simply return the cached certificates.

This setup ensures that browsers won't show scary warnings about untrusted
certificates, since your OS and browsers will now trust devcert's
certificates.

## Security Concerns

There's a reason that your OS prompts you for your root password when devcert
attempts to install its root certificate authority. By adding it to your
machine's trust stores, your browsers will automatically trust _any_ certificate
generated with it.

This exposes a potential attack vector on your local machine: if someone else
could use the devcert certificate authority to generate certificates, and if
they could intercept / manipulate your network traffic, they could theoretically
impersonate some websites, and your browser would not show any warnings (because
it trusts the devcert authority).

To prevent this, devcert takes steps to ensure that no one can access the
devcert certificate authority credentials to generate malicious certificates
without you knowing. The exact approach varies by platform:

- **macOS and Linux**: the certificate authority's credentials are written to files that are only readable by the root user (i.e. `chown 0 ca-cert.crt` and
  `chmod 600 ca-cert.crt`). When devcert itself needs these, it shells out to
  `sudo` invocations to read / write the credentials.
- **Windows**: because of my unfamiliarity with Windows file permissions, I
  wasn't confident I would be able to correctly set permissions to mimic the setup
  on macOS and Linux. So instead, devcert will prompt you for a password, and then
  use that to encrypt the credentials with an AES256 cipher. The password is never
  written to disk.

To further protect these credentials, any time they are written to disk, they
are written to temporary files, and are immediately deleted after they are no longer needed.

Additionally, the root CA certificate is unique to your machine only: it's
generated on-the-fly when it is first installed. ensuring there are no
central / shared keys to crack across machines.

### Why install a root certificate authority at all?

The root certificate authority makes it simpler to manage which domains are
configured for SSL by devcert. The alternative is to generate and trust
self-signed certificates for each domain. The problem is that while devcert
is able to add a certificate to your machine's trust stores, the tooling to
remove a certificate doesn't cover every case. So if you ever wanted to
_untrust_ devcert's certificates, you'd have to manually remove each one from
each trust store.

By trusting only a single root CA, devcert is able to guarantee that when you
want to _disable_ SSL for a domain, it can do so with no manual intervention

- we just delete the domain-specific certificate files. Since these
  domain-specific files aren't installed in your trust stores, once they are
  gone, they are gone.

## Integration

devcert has been designed from day one to work as low-level library that other
tools can delegate to. The goal is to make HTTPS development easy for everyone,
regardless of framework or library choice.

With that in mind, if you'd like to use devcert in your library/framework/CLI,
devcert makes that easy.

In addition to the options above, devcert exposes a `ui` option. This option
allows you to control all the points where devcert requires user interaction,
substituting your own prompts and user interface. You can use this to brand
the experience with your own tool's name, localize the messages, or integrate
devcert into a larger existing workflow.

The `ui` option should be an object with the following methods:

```ts
{
  async getWindowsEncryptionPassword(): Promise<string> {
    // Invoked when devcert needs the password used to encrypt the root
    // certificate authority credentials on Windows. May be invoked multiple
    // times if the user's supplied password is incorrect
  },
  async warnChromeOnLinuxWithoutCertutil(): Promise<string> {
    // Invoked when devcert is run on Linux, detects that Chrome is installed,
    // and the `skipCertutil` option is `true`. Used to warn the user that
    // Chrome will not work with `skipCertutil: true` on Linux.
  },
  async closeFirefoxBeforeContinuing() {
    // Invoked when devcert detects that Firefox is running while it is trying
    // to programmatically install its certificate authority in the Firefox
    // trust store. Firefox appears to overwrite changes to the trust store on
    // exit, so Firefox must be closed before devcert can continue. devcert will
    // wait for Firefox to exit - this is just to prompt the user that they
    // need to close the application.
  },
  async startFirefoxWizard(certificateHost: string) {
    // Invoked when devcert detects a Firefox installation and `skipCertutil:
    // true` was specified. This is invoked right before devcert launches the
    // Firefox certificate import wizard GUI. Used to give the user a heads up
    // as to why they are about to see Firefox pop up.
    //
    // The certificateHost provided is the URL for the temporary server that
    // devcert has spun up in order to trigger the wizard(Firefox needs try to
    // "download" the cert to trigger the wizard). This URL will load the page
    // supplied in the `firefoxWizardPromptPage()` method below.
    //
    // Normally, devcert will automatically open this URL, but in case it fails
    // you may want to print it out to the console with an explanatory message
    // so the user isn't left hanging wondering what's happening.
  },
  async firefoxWizardPromptPage(certificateURL: string): Promise<string> {
    // When devcert starts the Firefox certificate installation wizard GUI, it
    // first loads an HTML page in Firefox. The template used for that page is
    // the return value of this method. The supplied certificateURL is the path
    // to the actual certificate. The Firefox tab must attempt to load this URL
    // to trigger the wizard.
    //
    // The default implementation is a simple redirect to that URL. But you could
    // supply your own branded template here, with a button that says "Install
    // certificate" that is linked to the certificateURL, along with a more in
    // depth explanation of what is happening for example.
  }
  async waitForFirefoxWizard() {
    // Invoked _after_ the Firefox certificate import wizard is kicked off. This
    // method should not resolve until the user indicates that the wizard is
    // complete (unfortunately, we have no way of determining that
    // programmatically)
  }
}
```

You can supply any or all of these methods - ones you do not supply will fall
back to the default implementation.

## Testing

Testing a tool like devcert can be a pain. I haven't found a good automated
solution for cross platform GUI testing (the GUI part is necessary to test
each browser's handling of devcert certificates, as well as test the Firefox
wizard flow).

To make things easier, devcert comes with a series of virtual machine images. Each one is a snapshot taken right before running a test - just launch the machine and hit <Enter>.

You can also use the snapshotted state of the VMs to roll them back to a
pristine state for another round of testing.

> **Note**: Be aware that the macOS license terms prohibit running it on
> non-Apple hardware, so you must own a Mac to test that platform. If you don't
> own a Mac - that's okay, just mention in the PR that you were unable to test
> on a Mac and we're happy to test it for you.

### Virtual Machine Snapshots

- [macOS](https://s3-us-west-1.amazonaws.com/devcert-test-snapshots/macOS.pvm.zip)
- [Windows](https://s3-us-west-1.amazonaws.com/devcert-test-snapshots/MSEdge+-+Win10.zip)
- [Ubuntu](https://s3-us-west-1.amazonaws.com/devcert-test-snapshots/Ubuntu+Linux.zip)

## License

MIT © [Dave Wasmer](http://davewasmer.com)
