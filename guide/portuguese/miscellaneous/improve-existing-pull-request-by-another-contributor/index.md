---
title: Improve Existing Pull Request by Another Contributor
localeTitle: Melhorar a solicitação de retirada existente por outro contribuinte
---
Como pegar o PR de alguém e fazer o seu próprio baseado nele enquanto mantém o commit:

1.  Faça um novo ramo, de preferência com o PR # do original.

`git checkout -b pr/xyz`

1.  Puxe as alterações para ele.

`git pull git://github.com/rafase282/wiki.git update/pr-guide`

Isso basicamente significa extrair do repositório **Rafase282 / wiki** , branch **update / pr / guide** para sua ramificação atual **pr / xyz** .

1.  Faça suas alterações, adicione, confirme, envie. Se você precisar de squash, mantenha o commit do contribuidor original intocado.

**Nota** : Pode ser necessário forçar push `git push -f origin pr/xyz`

1.  Crie seu PR e na descrição faça para fechar o PR original com `closes #xyz`

Isso deve fazer uma nova solicitação pull com as alterações originais, além da sua própria, em uma nova solicitação pull que fará referência e fechará automaticamente a original quando for mesclada.