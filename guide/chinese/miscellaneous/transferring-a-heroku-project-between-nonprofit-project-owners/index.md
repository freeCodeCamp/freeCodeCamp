---
title: Transferring a Heroku Project Between Nonprofit Project Owners
localeTitle: 在非营利项目业主之间转移Heroku项目
---
## Heroku的：

一旦收到Heroku应用程序的人创建了一个Heroku帐户，请按照此处的步骤将其转移给他们： [https](https://devcenter.heroku.com/articles/transferring-apps) ： [//devcenter.heroku.com/articles/transferring-apps](https://devcenter.heroku.com/articles/transferring-apps)

## MLAB：

为您要传输MLAB数据库的人创建一个MLAB“用户”帐户： [http](http://docs.mlab.com/accounts/#account-users) ： [//docs.mlab.com/accounts/#account-users](http://docs.mlab.com/accounts/#account-users)

然后，他们需要将您的管理员权限重新分配给您刚刚创建的帐户： [http](http://docs.mlab.com/accounts/#re-assign-admin-privileges-admin-only) ： [//docs.mlab.com/accounts/#re-assign-admin-privileges-admin-only](http://docs.mlab.com/accounts/#re-assign-admin-privileges-admin-only)

## GitHub或BitBucket

新项目所有者可以分叉您现有的仓库，也可以在GitHub中将其所有权转让给他们： [https](https://help.github.com/articles/about-repository-transfers/) ： [//help.github.com/articles/about-repository-transfers/](https://help.github.com/articles/about-repository-transfers/)

要在BitBucket中传输它： [https](https://confluence.atlassian.com/bitbucket/change-or-transfer-repository-ownership-289964397.html) ：//confluence.atlassian.com/bitbucket/change-or-transfer-repository-ownership-289964397.html

## 确保您的Git历史记录中没有任何密钥

如果您的项目是开源的，请小心删除任何密钥（它们应该从未在第一时间提交，但最好迟到而不是删除它们）。以下是搜索代码历史记录的方法：

如果您在存储库中的某个位置找到密钥，或者发现某个敏感文件（例如.env）在某个时刻以某种方式提交，则可以使用BFG从git历史记录中清除它： [https](https://help.github.com/articles/remove-sensitive-data/) ：//help.github.com/articles [/删除敏感数据/](https://help.github.com/articles/remove-sensitive-data/)