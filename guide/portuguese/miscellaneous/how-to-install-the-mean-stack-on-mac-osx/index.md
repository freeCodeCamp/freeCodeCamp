---
title: How to Install the Mean Stack on Mac Osx
localeTitle: Como instalar a pilha média no Mac Osx
---
Para instalar o MongoDB, você deve ter o Mac OS X 10.6 (Snow Leopard) ou superior. Para descobrir qual versão do OS X você possui, clique no ícone in no canto superior esquerdo da tela e selecione `About This Mac` .

![:warning:](//forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=2 ":Aviso:") **AVISO:** faça um backup do Time Machine antes de executar qualquer uma das etapas a seguir!

## Etapa 1: instalando o MongoDB

A maneira mais fácil de instalar o MongoDB no OS X é usando o [HomeBrew](http://brew.sh/) . Se você não usou o HomeBrew antes, simplesmente execute o seguinte comando em uma janela do Terminal:
```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)" 
```

Depois que o HomeBrew for instalado com sucesso, siga com este comando:
```
brew update && brew install mongodb 
```

A HomeBrew instalará automaticamente todas as dependências para você.

## Etapa 2: instalando o Node.js

Mais uma vez, vamos deixar o HomeBrew fazer o trabalho pesado:
```
brew install node 
```

O executável do npm já está incluído no pacote Node.js.

Antes de continuar, vamos ter certeza de que os módulos do Node.js podem ser encontrados por outras pessoas ( ![:warning:](//forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=2 ":Aviso:") **CUIDADO** : é melhor copiar e colar esses comandos, pois você perderia o conteúdo original do seu arquivo `.bashrc` se você digitasse `>` no lugar de `>>` ):
```
echo 'export NODE_PATH="./node_modules:/usr/local/lib/node_modules"' >> ~/.bashrc && source ~/.bashrc 
```

Para verificar se a configuração está em vigor, execute:
```
echo $NODE_PATH 
```

Você deve ver `./node_modules:/usr/local/lib/node_modules` impresso abaixo do seu comando.

Se você usa um shell diferente do Bash, simplesmente substitua `~/.bashrc` pelo seu arquivo de configuração do shell.

## Etapa 3: instalando ferramentas fullstack
```
npm install -g express yo grunt grunt-cli generator-angular-fullstack bower 
```

## Etapa 4: gerar um aplicativo fullstack

Crie um diretório para seus projetos de projeto de back-end. Assumindo que sua área de trabalho é seu espaço de trabalho de fato:
```
mkdir ~/Desktop/Back End Projects && cd ~/Desktop/Back End Projects 
```

Agora que todos os preparativos estão prontos, é hora do evento principal:
```
yo angular-fullstack 
```

Responda as perguntas de acordo com os itens 13 a 23 do [Desafio](http://www.freecodecamp.com/challenges/get-set-for-our-back-end-development-projects) da Lista de Verificação [: Prepare-se para projetos de back-end](http://www.freecodecamp.com/challenges/get-set-for-our-back-end-development-projects) . Consulte \# 24-27 se você encontrar erros. Isso fará o download de ~ 350 MB de arquivos em seu diretório atual.

Antes de prosseguir, precisamos consertar um [problema conhecido](https://github.com/clnhll/guidetobasejumps#fixing-exportsupdate) em alguns arquivos gerados:
```
echo "sed -i '' -e 's/_.merge/_.extend/' server/api/*/*.controller.js" > \ 
 fix-exports-update.sh && chmod +x fix-exports-update.sh && \ 
 ./fix-exports-update.sh 
```

Você precisa executar `./fix-exports-update.sh` toda vez que gerar um novo endpoint da API (até que eles corrijam esse upstream, isto é).

## Etapa 5: inicializando o repositório Git local

Diga ao Git para não rastrear seu banco de dados:
```
echo "data" >> .gitignore 
```

Transforme o diretório em que seu aplicativo está localizado em um repositório Git executando os seguintes comandos:
```
git init && git add . && git commit -am 'initial commit' 
```

## Etapa 6: iniciando o MongoDB

Para iniciar o MongoDB pela primeira vez no diretório do seu aplicativo, execute os seguintes comandos no seu terminal:
```
mkdir data && echo 'mongod --config /usr/local/etc/mongod.conf --dbpath=data --rest "$@" --httpinterface' > mongod.sh && chmod a+x mongod.sh && ./mongod.sh 
```

A partir deste ponto, você pode simplesmente iniciar o MongoDB executando `./mongod.sh` . Algumas coisas a notar:

*   O arquivo `.conf` direciona o `mongod` para gravar mensagens em um arquivo de log em vez de stdout. Para visualizar o log, execute o seguinte em uma guia Terminal separada: `less /usr/local/var/log/mongodb/mongo.log` .
*   Como não estamos no Cloud9, não precisamos da opção `--nojournal` . O `mongod` diário permite recuperar o banco de dados em caso de falha de um `mongod` .
*   Você tem que fazer um banco de dados limpo para cada projeto. Se você copiou o diretório de `data` de um projeto anterior, o `mongod` não será iniciado. Se esse for o caso, apenas `rm -rf data && mkdir data && ./mongod.sh` .

## Passo 7: começando o Grunt

Abra uma nova guia Terminal pressionando `⌘T` e execute o seguinte comando:
```
grunt serve 
```

O Grunt deve abrir automaticamente a nova página de índice do site Angular assim que terminar de iniciar.

Agora você deve seguir as instruções do Desafio para avançar até o GitHub e o Heroku. Apenas ignore a parte sobre a chave SSH (# 33-36) e substitua `~/workspace` pelo caminho do seu diretório de aplicativos.

## Nota de rodapé

Os passos acima foram testados sob a seguinte configuração:

*   OS X 10.10.5
*   zsh 5.0.8 (x86\_64-apple-darwin14.3.0)
*   nó v0.12.7
*   npm 2.11.3