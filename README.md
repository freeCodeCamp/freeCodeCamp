this is a fork of free code camp repo that is running cypress tests

changes done:
- copied the client artifact built to a public s3 bucket instead of re-running build every time since it took ~10 mins.
- created a cypress_testing customer in frontegg staging env
- edited e2e-web.yml to include an installation of redefine.
- changed cypress config file from ts to js
- use install redefine in dry run mode and then in non dry run mode to check both modes.
- use a hard coded version of redefine which is included in this repo since we want to use staging and can't download from our pip registry in staging
- cypress.config.js includes a specPattern
