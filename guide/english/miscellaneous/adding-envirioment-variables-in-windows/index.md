---
title: Adding Envirioment Variables in Windows
---
### Via GUI

1.  Download <a href='http://implbits.com/products/varpanel/' target='_blank' rel='nofollow'>Varpanel</a>.
2.  Open Varpanel.
3.  In PATH variable, add the relevant path (for example).

![](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2ba273241acdbf4164bae20216c975d0e2ceff08.gif)

### Via Command Line

Refer to <a href='http://superuser.com/a/284351/275797' target='_blank' rel='nofollow'>this answer</a> on Super User.

### If Using Node

Add the [dotenv](https://www.npmjs.com/package/dotenv) package to your application. You can then store your environment variables in a `.env` file. Be sure to remember to add `*.env` to your `.gitignore` file.