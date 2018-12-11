---
title: Develop Back End Projects Locally and Run on C9
localeTitle: Desarrolle proyectos de back-end localmente y ejecute en C9
---
Si, como yo, desarrolla Back End Project localmente y quiere que se ejecute en c9, esto puede ayudarlo.

1.  Empuje su proyecto a github
2.  Cree un nuevo espacio de trabajo en c9 y configure 'Clonar desde Git o URL de Mercurial (opcional)' con su URL de repositorio de github. Después de enviar su página de creación, c9 clonará su proyecto por usted.
3.  Ejecutar en su ventana de terminal c9

`bash echo "export NODE_PATH=$NODE_PATH:/home/ubuntu/.nvm/v0.10.35/lib/node_modules" >> ~/.bashrc && source ~/.bashrc`

1.  Ejecutar `bower install && sudo npm install`
2.  Ejecute `mkdir data && echo 'mongod --bind_ip=$IP --dbpath=data --nojournal --rest "$@"' > mongod && chmod a+x mongod && ./mongod`
3.  Ejecutar el `grunt serve` en otra ventana de terminal