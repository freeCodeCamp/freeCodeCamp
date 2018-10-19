---
title: Heroku Deployment Guide
localeTitle: Guia de implantação do Heroku
---
1.  Crie uma conta Heroku.
    
2.  Depois de criar uma conta, você pode acessar seu [painel](https://dashboard.heroku.com/apps)
    
3.  Clique no sinal + no canto superior direito e clique em Criar novo aplicativo (assim como você está fazendo um novo repo no github). Dê um nome e clique em Criar.
    
4.  Depois de criar o aplicativo, você verá o nome dele no seu painel. Clique nisso.
    
5.  Você será levado a um painel para esse aplicativo. Clique na guia Implantar.
    
6.  Lá você ficará satisfeito em saber que pode se conectar a um repositório do github. Na seção Método de Implantação, escolha Github e autentique-se entrando no Github.
    
7.  Logo abaixo, preencha o nome do repositório do github. (Isso obviamente exige que você tenha enviado um repo para o github da cloud9 ou da sua máquina local ... e que você o configurou corretamente. Mais sobre isso abaixo.)
    
8.  Role para baixo novamente e clique em Implantar Automaticamente ou role para baixo ainda mais e clique em Implementação Manual. Depois de alguns momentos, você verá seu aplicativo em execução em seu-repo-name.herokuapp.com. Doce.
    

## Criando seu aplicativo localmente ou no Cloud9

1.  Crie uma nova pasta chamada timestamp-microservice (ou qualquer que seja o nome do seu projeto).

`$ mkdir timestamp-microservice && cd timestamp-microservice`

1.  Crie os arquivos que você vai precisar:

`$ touch .env .gitignore README.md index.html server.js`

1.  Instale os pacotes que você precisa ao longo do caminho

Exemplos:

`$ npm install --save express`

`$ npm install --save moment`

Estes serão adicionados a uma pasta chamada node\_modules na sua pasta raiz.

1.  Inicialize o projeto com um `$ npm init` fazendo `$ npm init`

Ele fará uma série de perguntas e criará um arquivo package.json em sua pasta raiz com base em suas respostas e seus padrões. Se você já criou um arquivo chamado server.js como mencionado acima, esta linha _essencial_ será adicionada ao seu arquivo package.json:
```
  "scripts": { 
 
  "start": "node server.js" 
 
  } 
```

Se você nomear qualquer outra coisa, como 'index.js', essa linha não será adicionada e você terá que adicioná-la manualmente. Esse é o comportamento padrão, como mencionado [aqui](https://docs.npmjs.com/files/package.json#default-values) . Você pode instalar módulos de nó antes ou depois dessa etapa e eles serão adicionados ao package.json automaticamente.

1.  Quando estiver pronto, crie um novo repositório no github, copie o URL remoto e inicialize o projeto localmente fazendo:

`$ git init`

`$ git add .`

`$ git commit -m "initial commit"`

`$ git remote add origin <your github url>`

`$ git push -u origin master`

Dica: Em seu arquivo server.js, certifique-se de usar `app.listen(process.env.PORT || <default port>)` para que o aplicativo funcione no heroku.

Volte ao passo 7 acima.