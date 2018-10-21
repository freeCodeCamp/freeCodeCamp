---
title: How to Run Google App Engine in Fedora Using Python
localeTitle: Como executar o Google App Engine no Fedora usando Python
---
Este artigo aborda o guia passo a passo para instalar o Google App Engine no seu sistema operacional Fedora usando python.

*   Siga as etapas nesta documentação do [Google.](https://cloud.google.com/appengine/docs/python/#uploading_the_application)

Testar o aplicativo como indicado no documento acima pode não funcionar para muitos.

Então, tente [isso](http://stackoverflow.com/a/16970921) como dado por Brice Lin.

Além disso, siga a estratégia de implementação fornecida por Brice Lin. Para isso, abra outro terminal (se desejar).

*   Antes de implantar, você precisa criar o projeto no Google Cloud Platform. Siga as etapas de [Fazendo o upload do aplicativo](https://cloud.google.com/appengine/docs/python/#uploading_the_application)
    
*   Mas ainda seguindo a estratégia de implantação acima pode não funcionar para muitos. E um erro como este pode seguir:
    
    `ERROR appcfg.py:2396 An error occurred processing file '': HTTP Error 400: Bad Request Unexpected HTTP status 400\. Aborting. Error 400: --- begin server output --- A version or backend parameter is required. --- end server output ---`
    

Este erro ocorre devido à instrução de versão ausente no arquivo **app.yaml** . Portanto, inclua a `version: 1` no arquivo **app.yaml** no repositório do aplicativo. Aqui, `helloworld` é o repositório. Agora vai funcionar. Codificação feliz e fazer a aplicação.

Não se esqueça de verificar este link: [desenvolvendo e implantando um aplicativo no Google App Engine no YouTube.](https://www.youtube.com/watch?v=bfgO-LXGpTM)