# Security Policy

This document outlines our security policy for the codebases, platforms that we operate, and how to report vulnerabilities.

## Reporting a Vulnerability

If you think you have found a vulnerability, _please report responsibly_. Don't create GitHub issues for security issues. Instead, please send an email to `security@freecodecamp.org` and we'll look into it immediately.

Ensure that you are using the **latest**, **stable** and **updated** version of the Operating System and Web Browser available to you on your machine.

We appreciate any responsible disclosure of vulnerabilities that might impact the integrity of our platforms and users.

Once you report a vulnerability, we will look into it and make sure that it is not a false positive. We will get back to you if we need to clarify any details. You can submit separate reports for each issue you find.

While we do not offer any bounties or swags at the moment, we'll be happy to list your name in our [Hall of Fame](https://contribute.freecodecamp.org/#/security-hall-of-fame) list, provided the reports are not low-effort.

We consider using tools & online utilities to report issues with SPF & DKIM configs, or SSL Server tests, etc. in the category of ["beg bounties"](https://www.troyhunt.com/beg-bounties/) and are unable to respond to these reports.

## Platforms & Codebases

Here is a list of the platforms and codebases we are accepting reports for:

### Learn Platform

| Version     | Branch         | Supported | Website active           |
| ----------- | -------------- | --------- | ------------------------ |
| production  | `prod-current` | Yes       | `freecodecamp.org/learn` |
| staging     | `prod-staging` | Yes       | `freecodecamp.dev/learn` |
| development | `main`         | No        |                          |

### Publication Platform

| Version    | Supported | Website active                           |
| ---------- | --------- | ---------------------------------------- |
| production | Yes       | `freecodecamp.org/news`                  |
| localized  | Yes       | `freecodecamp.org/<language>/news` |

### Mobile app

| Version    | Supported | Website active                                                   |
| ---------- | --------- | ---------------------------------------------------------------- |
| production | Yes       | `https://play.google.com/store/apps/details?id=org.freecodecamp` |

Apart from the above, we are also accepting reports for repositories hosted on GitHub, under the freeCodeCamp organization.

We self-host some of our platforms using open-source software like Ghost & Discourse. If you are reporting a vulnerability please ensure that it is not a bug in the upstream software.
