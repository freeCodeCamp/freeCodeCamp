---
title: How to Log in to Your Local Instance of Free Code Camp
localeTitle: Como efetuar login na sua instância local do campo de código livre
---
Este guia ajudará você a acessar seu site local da FCC usando sua conta do GitHub. Esse processo deve ser semelhante para fazer login com outras contas de mídia social. Este guia pressupõe que você já tenha uma cópia local do FCC em funcionamento.

## TL; DR

1.  [Registre um novo aplicativo OAuth](https://github.com/settings/developers)
2.  Campo da `http://localhost:3000/` page: `http://localhost:3000/`
3.  Campo de retorno de `http://localhost:3000/auth/github/callback` : `http://localhost:3000/auth/github/callback`
4.  Copie / cole o ID do cliente e o segredo do cliente em seu arquivo `.env`
5.  Use a porta 3000 ao visualizar seu site local da FCC

O Free Code Camp Issue Mods e a equipe estão à disposição para ajudar com os problemas relacionados à Solicitação de Pull em nossa [sala de bate-papo de Colaboradores de Ajuda.](https://gitter.im/FreeCodeCamp/HelpContributors)

## aviso Legal

A saída da execução `$ gulp` menciona a **porta de acesso** é 3001. Eu só loguei com sucesso com o GitHub na porta 3000 - a porta do **proxy** . Se você entender como fazer o login usando outras portas, por favor considere o envio de uma solicitação pull neste wiki.

## Login usando sua conta do GitHub

1.  [Registre um novo aplicativo OAuth](https://github.com/settings/developers) e clique em **Registrar novo aplicativo**

_Como alternativa_ , clique na **imagem do perfil** => **Configurações** => **Aplicativos** => **Aplicativos do** **desenvolvedor** => **Registrar novo aplicativo**

![Registrar GitHub OAuth App](//discourse-user-assets.s3.amazonaws.com/original/2X/5/55f4645c3498ceb8098afe8e8353da8f7c262548.png)

1.  Preencha os campos do aplicativo OAuth
    
    *   **Nome do aplicativo** - escolha qualquer nome, como `fcc-local`
        
    *   **URL da página inicial** - definido como `http://localhost:3000/`
        
    *   **Descrição da aplicação** - opcional
        
    *   **URL de retorno de chamada de autorização** - definido como `http://localhost:3000/auth/github/callback`
        
2.  Clique em **Registrar aplicativo** para ver a página do aplicativo recém-registrado com seu ID do cliente e Segredo do cliente.
    

![ID do cliente e segredo do cliente](//discourse-user-assets.s3.amazonaws.com/original/2X/c/c43ee37a9f0f228d3663bb28accedc14cca3ff56.png)

1.  Copie e cole seu ID de cliente e Segredo de cliente em seu arquivo `.env` .

_Nota: seu ID do cliente e Segredo do cliente serão valores alfanuméricos longos._

![Atualizar arquivo .env](//discourse-user-assets.s3.amazonaws.com/original/2X/5/549aeaa6ea85e119ba5e978c708dc55c39b134b3.png)

## Dicas

1.  Remover / não configurado com comentário bloqueia o provedor indesejado no provedor de [passaporte](https://github.com/FreeCodeCamp/FreeCodeCamp/blob/staging/server/passport-providers.js) .
    
2.  Adicione SESSION _SECRET e COOKIE_ SECRET em `.env` se você receber um erro em express-session e cookieParser.
    
    `COOKIE_SECRET='secret' SESSION_SECRET='secret'`
    
3.  Execute a `node seed` comando antes de executar o `gulp` se você não conseguir os desafios.
    

## Acabado

Parabéns! Agora você pode fazer login no seu site local da FCC usando sua conta do GitHub.