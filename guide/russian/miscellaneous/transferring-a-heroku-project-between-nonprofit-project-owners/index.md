---
title: Transferring a Heroku Project Between Nonprofit Project Owners
localeTitle: Передача проекта Heroku между некоммерческими владельцами проектов
---
## Heroku:

Как только человек, который получит приложение Heroku, создал учетную запись Heroku, следуйте инструкциям, расположенным здесь, чтобы передать их им: [https://devcenter.heroku.com/articles/transferring-apps](https://devcenter.heroku.com/articles/transferring-apps)

## MLAB:

Создайте учетную запись пользователя «MLAB» для лица, которому вы хотите перенести вашу базу данных MLAB: [http://docs.mlab.com/accounts/#account-users](http://docs.mlab.com/accounts/#account-users)

Затем им нужно будет переназначить свои привилегии администратора только что созданной учетной записи: [http://docs.mlab.com/accounts/#re-assign-admin-privileges-admin-only](http://docs.mlab.com/accounts/#re-assign-admin-privileges-admin-only)

## GitHub или BitBucket

Новые владельцы проектов могут либо разблокировать существующее репо, либо передать их им в GitHub: [https://help.github.com/articles/about-repository-transfers/](https://help.github.com/articles/about-repository-transfers/)

Чтобы передать его в BitBucket: [https://confluence.atlassian.com/bitbucket/change-or-transfer-repository-ownership-289964397.html](https://confluence.atlassian.com/bitbucket/change-or-transfer-repository-ownership-289964397.html)

## Убедитесь, что в вашей истории Git не осталось ключей

Если ваш проект будет открытым исходным кодом, будьте осторожны, чтобы удалить любые ключи (они никогда не должны были быть зафиксированы в первую очередь, но лучше поздно, чем никогда их не удалять). Вот как искать в них историю кодов:

Если вы найдете ключ где-то в своем репозитории или обнаружите, что чувствительный файл, такой как ваш .ENV, каким-то образом был зафиксирован в какой-то момент, вы можете очистить его от вашей истории git с помощью BFG: [https://help.github.com/articles / удалить-чувствительные-данные /](https://help.github.com/articles/remove-sensitive-data/)