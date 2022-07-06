# freeCodeCamp.org's Security Policy

This document outlines our security policy for the codebases, platforms that we operate, and how to report vulnerabilities.

## Reporting a Vulnerability

> [!NOTE] If you think you have found a vulnerability, **please report it responsibly**. Do not create GitHub issues for security issues. Instead, follow this guide.

### Guidelines

We appreciate responsible disclosure of vulnerabilities that might impact the integrity of our platforms and users. In the interest of saving everyone time, we encourage you to report vulnerabilities with these in mind:

1. Ensure that you are using the **latest**, **stable**, and **updated** versions of the Operating System and Web Browser(s) available to you on your machine.
2. We consider using tools & online utilities to report issues with SPF & DKIM configs, SSL Server tests, etc., in the category of ["beg bounties"](https://www.troyhunt.com/beg-bounties) and are unable to respond to these reports.
3. While we do not offer any bounties or swags at the moment, we'll be happy to list your name in our [Hall of Fame](security-hall-of-fame.md) list, provided the reports are not low-effort.

### Reporting

After confirming the above guidelines, please feel free to send an email to `possible-security-issue [at] freecodecamp.org`. You can also send us a PGP encrypted message at `flowcrypt.com/me/freecodecamp`.

Once you report a vulnerability, we will look into it and ensure that it is not a false positive. If we need to clarify any details, we will get back to you. You can submit separate reports for each issue you find. Please note that we will not be able to respond to any issues that we think are outside the guidelines.

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

### Mobile App

| Version    | Supported | Website active                                                   |
| ---------- | --------- | ---------------------------------------------------------------- |
| production | Yes       | `https://play.google.com/store/apps/details?id=org.freecodecamp` |

### Other Platforms

Apart from the above, we are also accepting reports for repositories hosted on GitHub under the freeCodeCamp organization.

### Other Self-hosted Applications

We self-host some of our platforms using open-source software like Ghost & Discourse. If you are reporting a vulnerability, please ensure that it is not a bug in the upstream software.
