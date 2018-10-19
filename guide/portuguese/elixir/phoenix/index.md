---
title: Phoenix
localeTitle: Fénix
---
## O que é Phoenix

Phoenix é um framework de desenvolvimento web escrito em Elixir e criado por Chris McCord. Essa estrutura de software livre implementa o padrão MVC do lado do servidor e tem muitas semelhanças com outras estruturas da Web, como Ruby on Rails ou Django para Python. Phoenix foi escrito com ênfase em ser desenvolvedor amigável, enquanto também ostenta uma produtividade fantástica e alto desempenho de aplicativos. O framework Phoenix inclui alguns recursos muito poderosos, como 'canais' para lidar com comunicação em tempo real e Ecto, que é uma ferramenta fantástica para ORM (Object Relational Mapping).

## Instalando Phoenix

A instalação do Phoenix é relativamente simples, mas antes que possamos fazer isso, precisamos garantir que o Elixir, o gerenciador de pacotes Hex, e o Erlang já estejam trabalhando em nosso sistema. O site Elixir tem um [guia de instalação](https://elixir-lang.org/install.html) fantástico para Elixir e Erlang. Uma vez que estes tenham sido configurados com sucesso, basta executar:

```shell
$ mix local.hex 
```

Para instalar o gerenciador de pacotes Hex e, em seguida, instalar o arquivo morto do Phoenix:

```shell
$ mix archive.install https://github.com/phoenixframework/archives/raw/master/phx_new.ez 
```

## Criando um aplicativo Phoenix:

1.  Depois de instalar o Phoenix, criar um aplicativo é simples:

```shell
$ mix phx.new <application_name> 
```

2.  Executando este comando com gerar uma estrutura de diretório e todos os arquivos básicos necessários com o _application\_name que_ você usou no comando anterior. Você será solicitado a instalar dependências básicas para o aplicativo, então diremos sim a isso.
    
3.  Em seguida, será solicitado que você mude para o diretório do nosso projeto:
    

```shell
$ cd <application_name> 
```

4.  Por padrão, a Phoenix assume que usaremos o PostgreSQL para nosso aplicativo com um nome de usuário e senha de 'postgres'. Se não for esse o caso, você precisará alterar sua configuração - caso contrário, tudo o que precisamos fazer é criar nosso banco de dados:

```shell
$ mix ecto.create 
```

5.  Finalmente, vamos iniciar o nosso servidor:

```shell
$ mix phx.server 
```

6.  Agora, pegue seu navegador e navegue até localhost: 4000 e veja a página de boas vindas! Parabéns, você tem um aplicativo Phoenix em funcionamento.