---
title: Ruby on Rails
localeTitle: Ruby on Rails
---
# Ruby on Rails

[Ruby on Rails](http://rubyonrails.org/) é uma estrutura do lado do servidor (gem) construída na linguagem Ruby para criar websites. O Rails torna o desenvolvimento da web mais rápido, fácil e divertido. Inclui tudo o que você precisa para criar aplicativos fantásticos e tem uma grande comunidade. O Rails foi criado por David Heinemeir Hansson e atualmente está na sua quinta versão. O Rails enfatiza o uso de outros padrões e paradigmas bem conhecidos de engenharia de software, incluindo [convenção sobre configuração (CoC)](https://en.wikipedia.org/wiki/Convention_over_configuration) , [não repetir a si mesmo (DRY)](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) e o padrão de registro ativo. O Rails é uma estrutura de [modelo-exibição-controlador (MVC)](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) , fornecendo estruturas padrão para um banco de dados, um serviço da Web e páginas da web. Ultimamente, o Rails integrou um módulo de API para tornar a criação de serviços da Web mais rápida e fácil.

## Instalando Rails

O Rails é baixado da mesma forma que qualquer outra gem do Ruby: com o comando `gem install` . Antes de fazer o download, precisaremos fazer o [download do Ruby](https://www.ruby-lang.org) . Depois, estamos a apenas 3 palavras de começar com Ruby on Rails:

```shell
$ gem install rails 
```

## Configurando o banco de dados

O Rails é fornecido com o sqlite3 como o banco de dados padrão, que é um arquivo simples no disco. Você precisa instalar o MySQL ou PostgreSQL se você quiser usar algo mais robusto.

## Criando um aplicativo Rails

1.  Depois de instalar o Ruby on Rails, é muito simples criar uma nova aplicação, só precisamos de mais 3 palavras:

```shell
$ rails new your_application_name 
```

*   Se você quiser usar o MySQL `shell $ rails new <application_name> -d mysql`
*   Se você quiser usar o Postgres `shell $ rails new <application_name> -d postgresql`

1.  Este comando criará uma pasta com o _nome_ do _seu _aplicativo__ informado no último comando. O próximo passo é ir para o novo diretório que você acabou de criar:

```shell
$ cd your_application_name 
```

3.  Obtenha as gemas e os pacotes de software necessários antes de executar seu aplicativo:

```shell
$ bundle install 
```

4.  Para executar o servidor rails e ver se tudo correu de acordo, também é rápido:

```shell
$ rails server 
```

Não poderia ser mais simples! Bem, isso não é realmente 100% verdadeiro, nós poderíamos torná-lo ainda menor, reduzindo o comando do `rails server` para:

```shell
$ rails s 
```

5.  Agora, com o seu navegador preferido, vá para `http://localhost:3000` e você verá: "Yay! Você está no Rails!"

### Método alternativo para criar um aplicativo Rails

1.  Crie um novo diretório:
    
    ```shell
    $ mkdir <application_name> 
    
    ```
    
2.  Vá para o novo diretório:
    
    ```shell
    $ cd <application_name> 
    
    ```
    
3.  Crie o aplicativo Rails usando a notação de ponto do Unix. Isso resulta na atribuição do nome do diretório ao novo aplicativo.
    
    ```shell
    $ rails new . 
    
    ```
    
4.  Comece a explorar o framework do aplicativo que você acabou de criar. A estrutura da pasta é organizada de acordo com a tabela abaixo:
    

| Arquivo / Pasta | Objetivo |  
| ----------- | ------- |  
| app / | Contém os controladores, modelos, visualizações, ajudantes, malas diretas, canais, trabalhos e ativos para seu aplicativo. Você se concentrará nessa pasta pelo restante deste guia. |  
| bin / | Contém o script rails que inicia seu aplicativo e pode conter outros scripts usados ​​para configurar, atualizar, implantar ou executar seu aplicativo. |  
| config / | Configure as rotas, banco de dados e mais do aplicativo. Isso é abordado com mais detalhes em Configurando Aplicativos Rails. |  
| config.ru | Configuração de rack para servidores baseados em rack usados ​​para iniciar o aplicativo. |  
| db / | Contém seu esquema de banco de dados atual, bem como as migrações de banco de dados. |  
| Gemfile, Gemfile.lock | Esses arquivos permitem que você especifique quais dependências gem são necessárias para o seu aplicativo Rails. Esses arquivos são usados ​​pela gem do Bundler. Para obter mais informações sobre o Bundler, consulte o site do Bundler. |  
| lib / | Módulos estendidos para sua aplicação. |  
| log / | Arquivos de log do aplicativo. |  
| público / | A única pasta vista pelo mundo como é. Contém arquivos estáticos e ativos compilados. |  
| Rakefile | Este arquivo localiza e carrega tarefas que podem ser executadas a partir da linha de comando. As definições da tarefa são definidas em todos os componentes do Rails. Em vez de alterar o Rakefile, você deve adicionar suas próprias tarefas adicionando arquivos ao diretório lib / tasks do seu aplicativo. |  
| README.md | Este é um breve manual de instruções para sua aplicação. Você deve editar esse arquivo para informar aos outros o que seu aplicativo faz, como configurá-lo e assim por diante. |  
| teste / | Testes unitários, acessórios e outros aparelhos de teste. Eles são abordados nos aplicativos Testing Rails. |  
| tmp / | Arquivos temporários (como arquivos cache e pid). |  
| vendedor / | Um local para todos os códigos de terceiros. Em uma aplicação típica do Rails, isso inclui gems vendidas. |  
| .gitignore | Este arquivo informa ao git quais arquivos (ou padrões) ele deve ignorar. Veja Github - Ignorando arquivos para mais informações sobre como ignorar arquivos. |

Um ótimo lugar para começar a usar esse framework incrível é ler a [página de Primeiros passos](http://guides.rubyonrails.org/getting_started.html) .

## Convenção sobre Configuração

_Convenção sobre Configuração_ significa que um desenvolvedor só precisa especificar aspectos não convencionais do aplicativo. Por exemplo, se houver uma classe `Sale` no modelo, a tabela correspondente no banco de dados será chamada de `sales` por padrão. É somente se alguém se desvia dessa convenção, como chamar a tabela "produtos vendidos", que o desenvolvedor precisa escrever código em relação a esses nomes. Geralmente, as convenções do Ruby on Rails levam a menos código e menos repetição.

## O que é MVC?

Modelo (registro ativo) contém a lógica de negócios e interage com o banco de dados. Exibições (exibições de ação) todos os arquivos HTML e estrutura. O controlador (controlador de ação) interage com as visualizações e o modelo para direcionar as ações do aplicativo.

## DRY - não se repita

_Não se repita_ significa que a informação está localizada em um lugar único e sem ambigüidade. Por exemplo, usando o módulo ActiveRecord do Rails, o desenvolvedor não precisa especificar os nomes das colunas do banco de dados nas definições de classe. Em vez disso, o Ruby on Rails pode recuperar essas informações do banco de dados com base no nome da classe.

## Ruby on Rails é open source

Não é apenas gratuito para usar, você também pode ajudar a torná-lo melhor. Mais de 4.500 pessoas já contribuíram com código para o [Rails](https://github.com/rails/rails) . É mais fácil do que você pensa se tornar um deles.