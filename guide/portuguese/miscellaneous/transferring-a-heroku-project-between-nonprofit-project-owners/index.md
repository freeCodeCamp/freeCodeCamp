---
title: Transferring a Heroku Project Between Nonprofit Project Owners
localeTitle: Transferindo um projeto Heroku entre proprietários de projetos sem fins lucrativos
---
## Heroku:

Assim que a pessoa que receberá o aplicativo Heroku tiver criado uma conta Heroku, siga as etapas localizadas aqui para transferi-la: [https://devcenter.heroku.com/articles/transferring-apps](https://devcenter.heroku.com/articles/transferring-apps)

## MLAB:

Crie uma conta de "usuário" MLAB para a pessoa para quem você deseja transferir seu banco de dados MLAB: [http://docs.mlab.com/accounts/#account-users](http://docs.mlab.com/accounts/#account-users)

Em seguida, eles precisariam reatribuir seus privilégios de administrador à conta que você acabou de criar: [http://docs.mlab.com/accounts/#re-assign-admin-privileges-admin-only](http://docs.mlab.com/accounts/#re-assign-admin-privileges-admin-only)

## GitHub ou BitBucket

Os novos proprietários do projeto podem bifurcar seu repositório existente ou você pode transferir a propriedade para eles no GitHub: [https://help.github.com/articles/about-repository-transfers/](https://help.github.com/articles/about-repository-transfers/)

Para transferi-lo em BitBucket: [https://confluence.atlassian.com/bitbucket/change-or-transfer-repository-ownership-289964397.html](https://confluence.atlassian.com/bitbucket/change-or-transfer-repository-ownership-289964397.html)

## Certifique-se de que nenhuma chave permaneça na sua história do Git

Se o seu projeto for open source, tenha cuidado para remover todas as chaves (elas nunca deveriam ter sido comprometidas, mas é melhor tarde do que nunca removê-las). Veja como pesquisar em seu histórico de código por eles:

Se você encontrar uma chave em algum lugar do seu repositório, ou descobrir que um arquivo confidencial como o .env foi de alguma forma comprometido em algum momento, você pode limpá-lo do seu histórico de git com o BFG: [https://help.github.com/articles / remove-sensitive-data /](https://help.github.com/articles/remove-sensitive-data/)