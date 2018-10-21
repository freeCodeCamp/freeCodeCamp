---
title: Transferring a Heroku Project Between Nonprofit Project Owners
---
## Heroku:

Once the person who will receive the Heroku app has created a Heroku account, follow the steps located here to transfer it to them: <a href='https://devcenter.heroku.com/articles/transferring-apps' target='_blank' rel='nofollow'>https://devcenter.heroku.com/articles/transferring-apps</a>

## MLAB:

Create an MLAB "user" account for the person whom you want to transfer your MLAB database: <a href='http://docs.mlab.com/accounts/#account-users' target='_blank' rel='nofollow'>http://docs.mlab.com/accounts/#account-users</a>

Then they would need to reassign your admin privileges to the account you've just created: <a href='http://docs.mlab.com/accounts/#re-assign-admin-privileges-admin-only' target='_blank' rel='nofollow'>http://docs.mlab.com/accounts/#re-assign-admin-privileges-admin-only</a>

## GitHub or BitBucket

The new project owners can either fork your existing repo or you can transfer ownership of it to them in GitHub: <a href='https://help.github.com/articles/about-repository-transfers/' target='_blank' rel='nofollow'>https://help.github.com/articles/about-repository-transfers/</a>

To transfer it in BitBucket: <a href='https://confluence.atlassian.com/bitbucket/change-or-transfer-repository-ownership-289964397.html' target='_blank' rel='nofollow'>https://confluence.atlassian.com/bitbucket/change-or-transfer-repository-ownership-289964397.html</a>

## Ensure no keys remain in your Git history

If your project will be open source, be careful to remove any keys (they should never have been committed in the first place, but it's better late than never to remove them). Here's how to search through your code history for them:

If you find a key somewhere in your repository, or discover that a sensitive file such as your .env was somehow committed at one point, you can purge it from your git history with BFG: <a href='https://help.github.com/articles/remove-sensitive-data/' target='_blank' rel='nofollow'>https://help.github.com/articles/remove-sensitive-data/</a>