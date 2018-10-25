---
title: Develop Back End Projects Locally and Run on C9
localeTitle: Разработка проектов Back End локально и запуск на C9
---
Если, как и я, вы разрабатываете проект Back End локально и хотите, чтобы он работал на c9, это может вам помочь.

1.  Направьте свой проект на github
2.  Создайте новое рабочее пространство в c9 и установите «Клон из Git или URL-адреса Mercurial (необязательно)» с вашим URL-адресом репозитория github. После отправки вашей страницы создания c9 будет клонировать ваш проект для вас.
3.  Запуск в окне терминала c9

`bash echo "export NODE_PATH=$NODE_PATH:/home/ubuntu/.nvm/v0.10.35/lib/node_modules" >> ~/.bashrc && source ~/.bashrc`

1.  Запустить `bower install && sudo npm install`
2.  Выполнить `mkdir data && echo 'mongod --bind_ip=$IP --dbpath=data --nojournal --rest "$@"' > mongod && chmod a+x mongod && ./mongod`
3.  Запустите `grunt serve` в другом окне терминала