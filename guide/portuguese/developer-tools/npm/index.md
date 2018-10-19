---
title: npm
localeTitle: asl
---
## npm

O npm é um gerenciador de pacotes e é usado para instalar e gerenciar dependências.

O npm é fundamental para a comunidade vibrante do JavaScript (e especificamente do Node.js), tornando a reutilização de código e módulo em projetos muito simples. Atualmente, o npm tem mais de 500.000 pacotes disponíveis.

O npm é útil não apenas para projetos do lado do servidor. As bibliotecas front-end mais populares, como o Bootstrap e o Font Awesome, também estão disponíveis.

**Nota:**

*   O npm sai da caixa com o Node.js, por isso é necessário instalar o Node.js primeiro
*   O npm não tem formulário completo devido ao seu uso além dos projetos específicos do Node.js. Anteriormente, era chamado de Gerenciador de Pacotes Node.

### npm uso

O npm é comumente usado na linha de comando. Os comandos abaixo são indiscutivelmente os mais importantes para você começar:
```
npm init 
```

Executar este comando no diretório-raiz do seu projeto inicializa-o para uso com o npm, criando um arquivo `package.json` . Você será solicitado para o nome do projeto, descrição, nome do autor e mais. Esta informação é então usada para preencher o arquivo `package.json` , que também conterá informações sobre as dependências e requisitos do projeto. Você pode alterar essas informações manualmente mais tarde.
```
npm install [name-of-package] 
```

Isso instala um pacote e todas as suas dependências automaticamente e o salva no arquivo `package.json` . Se você estiver instalando uma dependência de desenvolvimento, talvez você queira usar o `--save-dev` ou `-D` . O npm salvará o pacote como uma dependência de desenvolvimento.

Pacotes são instalados localmente no diretório `node_modules` no diretório-raiz do seu projeto. Às vezes você pode querer ter um pacote disponível projetos diferentes. Isso é feito com a opção `--global` ou `-g` . Isso geralmente é útil para ferramentas de desenvolvimento e utilitários de linha de comando.
```
npm install 
```

A execução da instalação do npm no diretório raiz de um projeto sem um nome de pacote específico instala todas as dependências necessárias para esse projeto. Esses são calculado de acordo com o arquivo `package.json` do projeto. Isso demonstra o poder do npm, onde um único comando pode buscar dezenas ou centenas de dependências automaticamente para você, e é útil quando você `git clone` um repositório, por exemplo.

#### Mais Informações:

*   Site do Node.js: [nodejs](https://nodejs.org)
*   O site oficial do npm, você pode ler sobre o npm, bem como procurar os diferentes pacotes disponíveis: [npmjs](https://www.npmjs.com)
*   Leia mais sobre npm: [Wikipedia](https://en.wikipedia.org/wiki/Npm_(software))
*   Um guia para iniciantes do npm: [sitepoint](https://www.sitepoint.com/beginners-guide-node-package-manager/)
*   Se você quiser uma série de vídeos abrangente, confira: [youtube](https://youtu.be/6fj0cpmMiVg)
*   E aqui está a série oficial do npm: [youtube](https://youtu.be/pa4dc480Apo)
Minhas mudanças.
