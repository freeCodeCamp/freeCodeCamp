---
title: Use Github Static Pages to Host Your Front End Projects
localeTitle: Use páginas estáticas do Github para hospedar seus projetos front-end
---
**Benefícios**

Eu amo o Codepen.io, é uma ferramenta maravilhosa e fácil de usar para experimentos simples de front-end. Mas à medida que os projetos da FCC se tornaram mais complexos, percebi que codificar localmente iria me salvar um monte de dores de cabeça. Meu editor de texto e combo de [código de código](https://incident57.com/codekit/) são apenas mais rápidos.

*   autocompletar
*   Compile tudo (codepen foi realmente arrastando tentando compilar Jade)
*   Melhor atualização automática
*   Construído em caramanchão
*   Versão do Git
*   Experiência aprimorada de imóveis na tela

## Git para o Github

Como eu já estou salvando localmente e usando o git para controle de versão, imaginei que poderia fazer o upload para o Github. Além disso, o Github tem um fantástico serviço gratuito para projetos front-end chamados [Github Pages](https://pages.github.com/) . Basta atualizar seu repositório e suas alterações estão ativas.

Como isso funciona é simples. O Github verifica se o seu repositório tem uma ramificação chamada `gh-pages` e serve qualquer código que esteja naquela ramificação. Não há coisas de back-end aqui, mas HTML, CSS e JS funcionam como um encanto.

## Primeiras coisas primeiro

Vamos criar uma nova pasta para o seu projeto. Vou usar o projeto [Camper News](http://www.freecodecamp.com/challenges/stylize-stories-on-camper-news) como meu exemplo.

Chegue ao seu diretório de trabalho e faça um novo. Você pode fazer isso no terminal (ou não).

![Diretório de projetos](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2e3faaa2752657c592a9991ceed29a0200f332e6.png)

Agora, entre no diretório do projeto e (com certeza no terminal desta vez) use o comando `git init` . Note que este tutorial pressupõe que [você tenha o git instalado](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) .

Tudo bem, incrível. Agora estamos prontos para trabalhar.

## Próximos passos

Crie alguns arquivos no seu diretório campNews. Eu não sei, talvez um index.html e provavelmente app.css e app.js, ou qualquer convenção de nomenclatura que você preferir. Coloque seu código nesses arquivos. Tudo bem, agora estamos prontos para nosso primeiro commit. Leva **dois passos** .

1.  `git add -A` irá preparar todos esses novos arquivos e o novo código dentro deles
2.  `git commit -m 'relevant message'` cometerá todo o trabalho que você fez para o ramo em que você está atualmente ('master' por padrão)

## A chave para essa coisa toda

Ok, até agora ainda somos locais. Há algumas coisas que temos que fazer para levar o nosso trabalho e movê-lo para o github. É neste momento que gosto de trocar de ramo. Lembre-se - o github só serve de páginas gh, e se você seguiu até aqui, seu ramo é chamado de 'mestre'. Vamos criar um novo branch de páginas gh (local).

`git checkout -b gh-pages` irá criá-lo, copiar todo o trabalho do mestre para o gh-pages e passar para o branch. Ufa

`git branch -d master` irá se livrar do branch master. Parece loucura, eu sei, mas para que precisamos disso? Apenas pense em gh-pages como seu novo branch master.

Agora, `git add -A` e `git commit -m 'relevant message'` novamente, apenas no caso. E esteja preparado para deixar seu editor e terminal e entrar on-line pela primeira vez.

Vá para o seu perfil do github e crie um novo repo. Nomeie algo relevante, como campNews.

![Novo Repo](//discourse-user-assets.s3.amazonaws.com/original/2X/3/3f113af87b94fcd649c78d5f6d36463795671e7b.png)

Uma vez criado, entre e pegue o URL clone HTTPS. (Ignore os arquivos na minha captura de tela, o seu repo estará vazio neste momento).

![url clone](//discourse-user-assets.s3.amazonaws.com/original/2X/a/a0f3da26ba0802342d7d6f7890763a2bca32b62a.png)

## Colocando tudo junto

E você pode deixar o mundo online. De volta ao terminal! Vamos conectar nosso projeto local a este repositório do github. Tudo o que é necessário é um comando.

`git remote add origin <server>` Apenas substitua o servidor pelo url HTTPS que você acabou de copiar. Então meu comando é assim:

`git remote add origin https://github.com/gkobilansky/campNews.git` .

Ok, até agora nós temos:

1.  Criou nosso projeto
2.  Versioned no git
3.  Comprometido algumas mudanças
4.  Mudou para o ramo 'gh-pages'
5.  Conectou ao github

## Último passo!

Empurre seu projeto para o github. Mais uma vez, simples:

`git push origin gh-pages`

Esse comando garantirá que seus commits mais recentes sejam enviados para o github. Uma vez que você tenha feito isso pelo menos uma vez, seu projeto deve estar disponível http: // _username_ .github.io / _repository_ , então para mim é [http://gkobilansky.github.io/campNews](http://gkobilansky.github.io/campNews) .

Quando tudo isso for feito, o processo simplesmente se repete:

1.  `git add -A`
2.  `git commit -m 'relevant message'`
3.  `git push origin gh-pages`

Concedida, curva de aprendizado mais íngreme do que codepen.io, mas mais rápido e mais flexível, uma vez que você pegar o jeito dele.

Codificação feliz!

PS. Graças a [este guia](http://rogerdudler.github.io/git-guide/) por Roger Dudler para manter as coisas simples.