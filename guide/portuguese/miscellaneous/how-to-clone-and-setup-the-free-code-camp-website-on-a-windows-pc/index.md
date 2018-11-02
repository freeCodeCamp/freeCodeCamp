---
title: How to Clone and Setup the Free Code Camp Website on a Windows Pc
localeTitle: Como clonar e configurar o site do Free Code Camp em um computador com Windows
---
Esta lista funciona com o site freeCodeCamp e também foi testada neste [tutorial Angular](https://docs.angularjs.org/tutorial) . Configurar o ambiente de desenvolvimento em um PC com Windows é fácil, embora ele provavelmente cause muitos erros primeiro no processo. A parte importante é corrigir esses erros.

## Pré-requisitos

1.  [Git bash](https://msysgit.github.io/)
2.  [Node.js](https://nodejs.org/)
3.  [MongoDB](https://www.mongodb.org/downloads)
4.  [Python 2.7.10](https://www.python.org/downloads/release/python-2710/)

Baixe e instale os 4 pré-requisitos. Ao instalar o Python e o Node, é importante verificar a opção add to the path variable. O instalador do Node faz isso por padrão. É opcional adicionar o Mongo ao caminho. O Python deve ser instalado em uma subpasta em% programfiles%

1.  Abra um prompt de comando com direitos de administrador.
    
2.  Verifique se o nó está no caminho executando o `node -v`
    
3.  Verifique se o npm está no caminho executando `npm -v`
    
4.  Execute os seguintes comandos:
    
    ```
    npm install gulp -g 
     npm install node-gyp -g 
    
    ```
    
5.  Se você quiser poupar tempo no Explorer para encontrar o Mongo quando tiver que ser iniciado, crie um arquivo `.cmd` em sua área de trabalho e escreva o caminho para o Mongo. Provavelmente `%programfiles%\MongoDB\Server\3.0\bin\mongod.exe` .
    
6.  Crie a pasta padrão do Mongo para armazenar bancos de dados: `C:\data\db`
    

**Os seguintes comandos _devem_ ser executados no Git Bash**

1.  Siga as instruções aqui [**freeCodeCamp no Github**](https://github.com/FreeCodeCamp/freecodecamp) e clone o projeto.
2.  Certifique-se de estar no diretório que você clonou com o GitHub (por padrão, isso é freecodecamp).
3.  Execute `cp sample.env .env`
4.  Execute a `npm install`
5.  Inicie o Mongo a partir do atalho da área de trabalho e execute `npm run only-once` . Agora você deve ver muita atividade na janela em que iniciou o Mongo.
6.  Execute `gulp` . Depois de algum tempo, sua versão local do freeCodeCamp deve estar em execução. Você pode visitá-lo em seu navegador em `http://localhost:3000`

Parabéns, está feito! Se você encontrar algum problema ao configurar sua versão local do freeCodeCamp, sinta-se à vontade para entrar em contato com a [sala de chat de nossos Colaboradores](https://gitter.im/FreeCodeCamp/Contributors) .