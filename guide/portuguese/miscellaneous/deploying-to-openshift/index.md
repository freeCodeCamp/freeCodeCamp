---
title: Deploying to Openshift
localeTitle: Implantando no Openshift
---
Se você implantar seus aplicativos no Heroku, só poderá fazer o upload de cinco aplicativos; se desejar implantar um novo, será necessário verificar sua conta com seu cartão de crédito.

![Heroku Error](//discourse-user-assets.s3.amazonaws.com/original/2X/2/27219029fea50142009b1521d5268c06ded15b57.jpg)

Estas são as etapas que você precisa seguir para implantar no [OpenShift](https://www.openshift.com/app/account/new) .

## Requisitos

*   Uma conta no [OpenShift](https://www.openshift.com/app/account/new)
*   Nosso aplicativo em um repositório [Git](//forum.freecodecamp.com/t/wiki-git-resources/13136)

## Mudanças no seu código

*   `app.listen` com `process.env.OPENSHIFT_NODEJS_PORT` e `process.env.OPENSHIFT_NODEJS_IP` , ambos exigem.
*   Em seu **pacote.json,** configure seu `"main": 'yourMainFile.js` e `"script": { "start": "node yourMainFile.js" }`

## Implantando nosso aplicativo

*   [Adicione um novo aplicativo](https://openshift.redhat.com/app/console/application_types)

![Escolha um cartucho de programação da web](//discourse-user-assets.s3.amazonaws.com/original/2X/e/e07c056ab351ee6bd728b8d5f648b3fac9c6bf86.jpg)

*   Escolha um nome (a segunda entrada será a mesma para todos os seus aplicativos)

\[ ![Preencha nosso nome e nosso domínio](//discourse-user-assets.s3.amazonaws.com/original/2X/9/9e929388f653ca9725e4dc2ca823f06cee493bc2.jpg)

*   Preencha o nosso URL do Git e o nome da nossa agência

![Onde você pode encontrar o seu URL Git e o nome da sua filial no Github](//discourse-user-assets.s3.amazonaws.com/original/2X/1/1a720934d9c2fd79a4aaa14b4ca07e6c1df7f2ce.jpg)

![Preencha o seu URL do Git e o nome da sua agência](//discourse-user-assets.s3.amazonaws.com/original/2X/9/989e44c1af80c9b8f26883a3d897f377b3a27ca4.jpg)

*   "Criar aplicativo". Vai levar algum tempo

![Você será redirecionado aqui quando concluir a implantação](//discourse-user-assets.s3.amazonaws.com/original/2X/f/f0de3f67ec78b75df6786301560a903f76aec022.jpg)

*   Entre em "Aplicativo", depois no seu aplicativo e verifique se ele foi iniciado.

![Sua lista de aplicativos](//discourse-user-assets.s3.amazonaws.com/original/2X/d/d71ea954dd23eb341243bf568a3d67b682590274.jpg)

![Detalhes da sua aplicação](//discourse-user-assets.s3.amazonaws.com/original/2X/4/497bacfd85fd2c8e815413df1e942a1a42f045f0.jpg)

## Variáveis ​​Ambientais

No meu caso eu tenho meu banco de dados no mLab, então eu preciso criar algumas variáveis ​​de ambiente.

*   [Instale o Ruby e o rhc.](https://developers.openshift.com/getting-started/windows.html#client-tools)

**O rhc** funciona apenas com as versões 1.9.3 e 2.0.0 do Ruby.

*   [Configurando sua máquina](https://developers.openshift.com/getting-started/windows.html#rhc-setup)

Se você está tendo problemas com a configuração do `rhc` , tente [esta](http://stackoverflow.com/questions/28896733/rhc-setup-gives-error-no-such-file-dl-import) resposta no StackOverflow.

*   [Variáveis ​​de ambiente personalizadas](https://developers.openshift.com/managing-your-applications/environment-variables.html#custom-variables)

`rhc env set VARIABLE=value VARIABLE2=value2 -a App_Name` .

Você precisa reiniciar seu aplicativo para carregar as variáveis.

Se você encontrar uma maneira melhor de resolver essa limitação. Sinta-se à vontade para contribuir com o nosso Wiki e compartilhá-lo conosco.

Você pode verificar o aplicativo trabalhando em [http://voting-pitazo.rhcloud.com/#/polls](http://voting-pitazo.rhcloud.com/#/polls)