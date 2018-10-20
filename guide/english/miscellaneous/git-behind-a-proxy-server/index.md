---
title: Git Behind a Proxy Server
---
**Use-cases**

You might need to modify `git` commands that access (to update and read from) remote repositories if your internet access is through a <a href='https://en.wikipedia.org/wiki/Proxy_server' target='_blank' rel='nofollow'>proxy server</a>.

Proxy servers are common in college and business type environments.

You can <a href='http://www.wikihow.com/Change-Proxy-Settings' target='_blank' rel='nofollow'>locate your proxy settings</a> from your browser's settings panel.

## Using Proxy with Git

Once you have obtained the proxy settings (server URL, port, username and password); you need to configure your git as follows:

    $ git config --global http.proxy http://<username>:<password>@<proxy-server-url>:<port>

You would need to replace `<username>`, `<password>`, `<proxy-server-url>`, `<port>` with the values specific to your proxy server credentials. These fields are optional. For instance, your proxy server might not even require `<username>` and `<password>`, or that it might be running on port 80 (in which case `<port>` is not required).

Once you have set these, your `git pull`, `git push` or even `git fetch` would work properly.

## When Not to Use

You should not have to use `git` commands with proxy settings, if either of the following happens

*   Your system administrator or corporate policy does not allow you to access remote `git` repositories from GitHub, BitBucket etc.
*   The remote repository in question is not in your machine, but it's within the internal network. An instance of GitLab deployed internally at your company is a good example.

## Unset Proxy Settings

Use <a href='http://stackoverflow.com/questions/11499805/git-http-proxy-setting' target='_blank' rel='nofollow'>this</a> Stack Overflow discussion to unset your proxy settings.

## Resources

You may use the following for further reading on this:

*   <a href='https://help.github.com/desktop/faq/articles/can-i-log-in-behind-a-proxy-server/#platform-windows' target='_blank' rel='nofollow'>Can I Log In Behind A Proxy Server</a>
*   <a href='https://git-scm.com/docs/git-config' target='_blank' rel='nofollow'>Git Config</a>