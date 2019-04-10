---
title: Installing CLI Tools Developers Should not Live Without on Linux and Mac
localeTitle: Instalando Ferramentas CLI Os desenvolvedores não devem viver sem no Linux e Mac
---
Este artigo é uma breve descrição de como instalar os principais utilitários de linha de comando que os desenvolvedores usam todos os dias em ambientes Macintosh e Linux. As principais ferramentas do CLI que serão mostradas são: Homebrew (Mac), Node e NPM, Bower, Gulp, Grunt e Tmux.

## Instalando o Homebrew (sistemas Macintosh)

Homebrew é 'O gerenciador de pacotes ausente para o OS X'. É uma ótima ferramenta para baixar e instalar pacotes diretamente de sua linha de comando. Isso não é necessário nas distribuições Linux porque elas já possuem gerenciadores de pacotes instalados por padrão, como o `apt-get` ou o `pacman` . Para instalar o Homebrew, basta colar o seguinte comando no seu terminal:

*   `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

Caso você encontre o "Xcode Command Line Tools Missing", use o seguinte para instalá-lo:

*   `xcode-select --install`

## Instalando o NPM

`NPM` , ou Node Package Manager, é outro gerenciador de pacotes útil para baixar principalmente ferramentas da web. O download do `NPM` também instalará o framework Node.js.

### Mac:

*   Usando o `Homebrew` type: `brew install node` e o `NPM` deveria ter sido instalado.

### Linux:

*   Usando o `apt-get` primeiro tipo: `curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -` , em seguida, `sudo apt-get install nodejs`
*   Usando o tipo `pacman` : `pacman -S nodejs npm`
*   Usando o tipo `yum` : `sudo yum install nodejs npm`
*   Usando o tipo `dnf` : `sudo dnf install nodejs`
*   Usando o tipo `zypper` : `sudo zypper install nodejs6`

## Instalando o Bower

O Bower é um gerenciador de pacotes popular que permite instalar bibliotecas front-end. Você pode instalá-lo em sistemas Linux e Macintosh usando `npm` com o seguinte comando:

*   `npm install -g bower` (O mesmo comando para Linux e OS X)

## Instalando Gulp

`Gulp` é uma ferramenta de framework e CLI que torna o desenvolvimento mais rápido e mais agradável automatizando as tarefas que os desenvolvedores estão fazendo repetidamente. Além disso, você pode instalar o `Gulp` através do `npm` :

*   `npm install -g gulp-cli`

E em pastas de projetos individuais:

*   `npm install --save-dev gulp`

## Instalando o Grunt

`Grunt` é outra ferramenta de automação popular semelhante ao `Gulp` . Para instalá-lo, use `npm` novamente:

*   `npm install -g grunt-cli`

## Instalando o Tmux

`Tmux` é um multiplexador de terminais para Linux e Mac. Ele permite que você tenha várias sessões e janelas na mesma janela de Bash e também permite "desanexar" sessões às quais você pode se conectar por meio do SSH, deixando todos os programas em execução no momento, em execução.

Para instalar no Linux:

*   `sudo apt install tmux`

E é isso! Com essas ferramentas, seu processo de desenvolvimento e conteúdo serão agradáveis ​​e eficientes. Como você pode ver, a principal ferramenta para instalar é o `npm` e permite que você instale muitas outras ótimas ferramentas CLI orientadas para a web.