---
title: Go
localeTitle: Ir
---
## Ir

![Vai para-choque](https://golang.org/doc/gopher/bumper320x180.png)

**Go** (ou **golang** ) é uma linguagem de programação criada no Google em 2007 por Robert Griesemer, Rob Pike e Ken Thompson. É uma linguagem compilada e estaticamente tipada na tradição de Algol e C. Ela possui coleta de lixo, tipagem estrutural limitada, segurança de memória e recursos de programação simultânea no estilo CSP adicionados. O compilador e outras ferramentas de linguagem originalmente desenvolvidas pelo Google são todas gratuitas e de código aberto. Sua popularidade está aumentando rapidamente. É uma ótima opção para a criação de aplicativos da web.

Para mais informações, [acesse a página da Go](https://golang.org/)

Quer um rápido [Tour de Go?](https://tour.golang.org/welcome/1)

## \## Pré-instalações:

#### Instale Golang com o Homebrew:

```bash
$ brew update 
 $ brew install golang 
```

#### Quando instalado, tente executar a versão go para ver a versão instalada do Go.

## \### Configure o espaço de trabalho:

##### Adicionar variáveis ​​de ambiente:

Primeiro, você precisará informar ao Go o local do seu espaço de trabalho.

Vamos adicionar algumas variáveis ​​de ambiente na configuração do shell. Um dos arquivos localizados em seu diretório home bash\_profile, bashrc ou .zshrc (para Oh My Zsh Army)

```bash
$ vi .bashrc 
```

\`

em seguida, adicione essas linhas para exportar as variáveis ​​necessárias

#### Este é realmente o seu arquivo .bashrc

```bash
export GOPATH=$HOME/go-workspace # don't forget to change your path correctly! 
 export GOROOT=/usr/local/opt/go/libexec 
 export PATH=$PATH:$GOPATH/bin 
 export PATH=$PATH:$GOROOT/bin 
```

## \#### Crie seu espaço de trabalho:

##### Crie a árvore de diretórios do espaço de trabalho:

```bash
$ mkdir -p $GOPATH $GOPATH/src $GOPATH/pkg $GOPATH/bin 
 $GOPATH/src : Where your Go projects / programs are located 
 $GOPATH/pkg : contains every package objects 
 $GOPATH/bin : The compiled binaries home 
```

### Começo rápido

Para um início rápido e clichê Ir projeto, tente [liga](https://www.growthmetrics.io/open-source/alloy)

1.  Repositório Clone Alloy
```
git clone https://github.com/olliecoleman/alloy 
 cd alloy 
```

2.  Instale as dependências
```
glide install 
 npm install 
```

3.  Inicie o servidor de desenvolvimento
```
go install 
 alloy dev 
```

4.  Visite o site em `http://localhost:1212`

_Alloy usa Node, NPM e Webpack_

### Vá ao Playground

[Vá ao Playground](https://play.golang.org/)

Aprender a instalar na sua máquina local é importante, mas se quiser começar a jogar, vá direto ao seu navegador, então o Go Playground é a sandbox perfeita para começar imediatamente! Para saber mais sobre o Go Playground, consulte o artigo intitulado [Inside the Go Playground](https://blog.golang.org/playground)