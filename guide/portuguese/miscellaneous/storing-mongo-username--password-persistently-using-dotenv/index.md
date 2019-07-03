---
title: Storing Mongo Username  Password Persistently Using Dotenv
localeTitle: Armazenando Mongo Username Password persistentemente usando Dotenv
---
## Armazenando informações seguras para aplicativos com dotenv

Este artigo é sobre como salvar informações de credenciais de nome de usuário e senha para acesso seguro a bancos de dados em sites de terceiros como o mLab em seu ambiente de teste local para protegê-los de qualquer pessoa que olhe seu repositório público em um site como o github.

Informações confidenciais ou seguras nunca devem ser armazenadas em seu código e enviadas para um repositório, porque elas seriam expostas publicamente, o que colocaria suas informações em risco, e o colocaria em risco de perder acesso à API ou ao banco de dados se alguém usar suas credenciais de forma fraudulenta.

[Este artigo da wiki](//forum.freecodecamp.com/t/guide-for-using-mongodb-and-deploying-to-heroku/19347/3) discute como proteger suas credenciais usando o comando de exportação, mas para tornar essas variáveis ​​persistentes, você tem duas opções. No entanto, as variáveis ​​de configuração definidas dessa maneira são apagadas sempre que o shell é reiniciado, como quando você encerra o computador e reinicia para uma nova sessão de codificação.

Você teria que percorrer todas as etapas novamente para definir suas variáveis ​​de ambiente cada vez que você iniciasse um novo shell de terminal. Isso significa que você precisa armazenar suas credenciais em um arquivo de texto em algum lugar ou continuar procurando-as em sua conta de terceiros (como o mLab).

Fazer isso toda vez que você iniciar uma nova sessão é tedioso e, em vez de armazená-los no código em si, onde é fácil encontrá-los, mostrarei uma maneira de usar o arquivo de texto e importar suas credenciais.

A primeira opção é usar o perfil do shell e exportar essas variáveis ​​toda vez que você inicializar um novo terminal. No entanto, ao longo de algumas semanas de desenvolvimento de novos aplicativos e projetos, seu perfil de shell ficaria entupido com uma lista enorme de variáveis ​​das quais você não precisará de todas as sessões. Você só precisa das credenciais para o aplicativo em que está trabalhando atualmente.

## Limpar um repositório do git contendo credenciais seguras

Se você já empurrou seu repositório para o github com suas credenciais armazenadas na base de código, simplesmente excluí-las e empurrá-las novamente não ajudará, porque suas credenciais são armazenadas em seu histórico, o que também é visível para o público. Se este for o caso, use estes comandos para redefinir seu repositório git e eliminar seu histórico.

**Primeiro,** exclua seu repositório do github. Você criará um novo quando estiver pronto.

**Segundo,** exclua seu repositório git local de seu diretório de trabalho.  
\-Alterar diretórios para o seu diretório de trabalho. Seu arquivo de repositório .git deve estar aqui.  
CUIDADO: usar o sinalizador -rf pode excluir todo o seu disco rígido se não for usado corretamente. Eu uso o sinalizador -i, que significa interativo para ter certeza de que estou no diretório correto. Depois de selecionar alguns arquivos e tenho 100% de certeza de que estou no lugar certo, vou matar o comando e executá-lo novamente sem o sinalizador -i. Faça o que você se sentir mais confortável, mas é aconselhável ter um backup completo do seu computador (em mais de um lugar) antes de executar o comando -rm.
```
cd <project-name> 
 rm -i -rf .git 
```

**Terceiro,** certifique-se de atualizar seu arquivo .gitignore para incluir o arquivo .env, além de outras pastas que deseja manter privadas. Arquivos IDE locais, como .idea / se estiver usando jetbrains, por exemplo, podem estar neste arquivo. Meu arquivo .gitignore se parece com isso. Observe que você pode adicionar uma pasta ou arquivo aqui antes de ser criado sem causar erros.

`.gitignore`  
node\_modules  
.env  
dados/  
.idéia/

**Finalmente** crie um novo repositório. Agora você está pronto para continuar criando seu arquivo .env e empurrando seu repositório com segurança para o github e manter suas credenciais seguras.

`git init`

## Como usar o dotenv em sua aplicação local

É aqui que o módulo dotenv do nó pode ajudar. Para usar o dotenv, você precisa requerê-lo no código do aplicativo, chame a função config () nele que extrai suas credenciais de um arquivo armazenado localmente em seu computador. Este arquivo é chamado `.env`

**Etapa 1:** Crie um arquivo .env e armazene suas variáveis ​​nele  
`MONGOLAB_URI="mongodb://username:password@ds01316.mlab.com:1316/food"`

**Passo 2:** Requerer o dotenv na sua aplicação principal  
em seu `app.js` principal (ou qualquer nome que você tenha nomeado)  
`var dotenv = require('dotenv');`

**Etapa 3:** chame a função config em sua variável. (note que tudo isso pode ser feito em uma linha por encadeamento, mas eu gosto de ver isso ocorrer como uma atividade separada).  
`dotenv.config();`

**Etapa 4:** defina sua URL do mongodb chamando suas variáveis ​​de processo:  
`var url = process.env.MONGOLAB_URI;`

Essa solução mantém seu código limpo das credenciais seguras que você não deseja enviar para um repositório público, mantendo cada aplicativo organizado e economizando tempo durante o desenvolvimento.

**Referências:**

[osxdaily.com](http://osxdaily.com/2015/07/28/set-enviornment-variables-mac-os-x/)

! \[\] (http://cdn.osxdaily.com/wp-content/uploads/2014/08/terminal-icon-osx.png) ### [Onde definir variáveis ​​de ambiente no Mac OS X](http://osxdaily.com/2015/07/28/set-enviornment-variables-mac-os-x/) Na linha de comando, as variáveis ​​ambientais são definidas para o shell atual e são herdadas por qualquer comando ou processo em execução. Eles podem determinar qualquer coisa do shell padrão, o PATH,…

[stackoverflow.com](http://stackoverflow.com/questions/35356692/best-practice-when-using-an-api-key-in-node-js)

[! \[Drake Main](https://cdn-media-1.freecodecamp.org/imgr/jRaTj.jpg) \] (http://stackoverflow.com/users/4956243/drake-main) #### [Prática recomendada ao usar uma chave de API no Node.js](http://stackoverflow.com/questions/35356692/best-practice-when-using-an-api-key-in-node-js)

\*\* node.js, api-key \*\*

perguntou por [Drake Main](http://stackoverflow.com/users/4956243/drake-main) em [07:05 - 12 de fevereiro 16](http://stackoverflow.com/questions/35356692/best-practice-when-using-an-api-key-in-node-js)

[stackoverflow.com](http://stackoverflow.com/questions/1213430/how-to-fully-delete-a-git-repository-created-with-init)

[! \[Peiniau](https://www.gravatar.com/avatar/9db1745a666cface1731c12d54e189e6?s=128&d=identicon&r=PG) \] (http://stackoverflow.com/users/105813/peiniau) #### [Como deletar completamente um repositório git criado com o init?](http://stackoverflow.com/questions/1213430/how-to-fully-delete-a-git-repository-created-with-init)

\*\* git, git-init \*\*

perguntado por [Peiniau](http://stackoverflow.com/users/105813/peiniau) em [04:06 PM - 31 jul 09](http://stackoverflow.com/questions/1213430/how-to-fully-delete-a-git-repository-created-with-init)