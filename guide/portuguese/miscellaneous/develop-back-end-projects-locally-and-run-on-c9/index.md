---
title: Develop Back End Projects Locally and Run on C9
localeTitle: Desenvolva projetos de back-end localmente e execute em C9
---
Se, como eu, você desenvolver o Back End Project localmente e quiser que ele seja executado no c9, isso pode ajudá-lo.

1.  Empurre seu projeto para o github
2.  Crie uma nova área de trabalho em c9 e defina "Clonar da URL do Git ou Mercurial (opcional)" com o URL do repositório do github. Depois de enviar sua página de criação, o c9 irá clonar seu projeto para você.
3.  Executar na sua janela do terminal c9

`bash echo "export NODE_PATH=$NODE_PATH:/home/ubuntu/.nvm/v0.10.35/lib/node_modules" >> ~/.bashrc && source ~/.bashrc`

1.  Executar `bower install && sudo npm install`
2.  Executar `mkdir data && echo 'mongod --bind_ip=$IP --dbpath=data --nojournal --rest "$@"' > mongod && chmod a+x mongod && ./mongod`
3.  Execute o `grunt serve` em outra janela de terminal