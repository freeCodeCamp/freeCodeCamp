---
title: Git Verifying Commits
---
## Git Verifying Commits

When you’re building software with people from around the world, sometimes it’s important to validate that commits and tags are coming from an identified source. Git supports signing commits and tags with GPG. GitHub shows when commits and tags are signed.

![Verified Commits](https://cloud.githubusercontent.com/assets/25792/14253743/87b504be-fa41-11e5-9140-6dc8b7203c31.png)

When you view a signed commit or tag, you will see a badge indicating if the signature could be verified using any of the contributor’s GPG keys uploaded to GitHub. You can upload your GPG keys by visiting the keys settings page.

Many open source projects and companies want to be sure that a commit is from a verified source. GPG signature verification on commits and tags makes it easy to see when a commit or tag is signed by a verified key that GitHub knows about.

![Verified Signature](https://cloud.githubusercontent.com/assets/25792/14290042/5b27dab2-fb12-11e5-9ff9-44116a7780ea.png)

### More Information:
- [Signing Your Work](https://git-scm.com/book/en/v2/Git-Tools-Signing-Your-Work)