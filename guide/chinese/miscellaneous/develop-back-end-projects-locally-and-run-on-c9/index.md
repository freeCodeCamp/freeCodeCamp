---
title: Develop Back End Projects Locally and Run on C9
localeTitle: 在本地开发后端项目并在C9上运行
---
如果像我一样，你在本地开发Back End Project并希望它在c9上运行，这可能对你有帮助。

1.  将您的项目推送到github
2.  在c9中创建一个新工作区，并使用您的github存储库URL设置“从Git或Mercurial URL克隆（可选）”。提交创建页面后，c9将为您克隆项目。
3.  在c9终端窗口中运行

`bash echo "export NODE_PATH=$NODE_PATH:/home/ubuntu/.nvm/v0.10.35/lib/node_modules" >> ~/.bashrc && source ~/.bashrc`

1.  运行`bower install && sudo npm install`
2.  运行`mkdir data && echo 'mongod --bind_ip=$IP --dbpath=data --nojournal --rest "$@"' > mongod && chmod a+x mongod && ./mongod`
3.  在另一个终端窗口中运行`grunt serve`