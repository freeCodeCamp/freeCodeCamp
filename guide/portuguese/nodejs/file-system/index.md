---
title: File System
localeTitle: Sistema de arquivo
---
## Sistema de arquivo

O módulo do sistema de arquivos Node.js permite que você trabalhe com o sistema de arquivos em seu computador.

O Node.js tem um conjunto de módulos integrados que você pode usar sem qualquer instalação adicional. Da mesma forma, o **módulo File System** contém um conjunto de funções que são necessárias para executar diferentes operações em arquivos, como a operação de leitura e gravação.

Para incluir um módulo, use a função `require()` com o nome do módulo.

```javascript
const fs = require('fs');
```

Uso comum para o módulo do sistema de arquivos:

*   Ler arquivos
*   Crie arquivos
*   Atualizar arquivos
*   Deletar arquivos
*   Renomear arquivos

## Lendo um arquivo

O método `fs.readFile()` é usado para ler arquivos no seu computador. São necessários três argumentos - nome do arquivo, codificação e uma função de retorno de chamada.

Node.js código para ler o arquivo do seu computador e retornar o conteúdo para o console.

```javascript
const fs = require('fs');
 fs.readFile('input.txt', 'utf-8', (err, data) => {
  if(err){
  console.log(err);
  }
  else{
  console.log("Content present in input.txt file : " + data.toString());
  }
 });
```

O código acima lê um arquivo _input.txt_ do seu computador e retorna o conteúdo para o console.

### Etapas para execução:

*   Você deve ter o Node.js instalado em seu computador.
*   Crie um arquivo _app.js_ e cole o código acima.
*   Crie um arquivo _input.txt_ e escreva algum conteúdo nele.
*   Agora abra seu console no diretório de trabalho e execute o `node app.js` comando `node app.js`

_Nota_ : O arquivo input.txt deve estar presente no mesmo diretório em que seu arquivo de código Node.js está presente, caso contrário, ele lançará um erro.

## Escrevendo em um arquivo

O método `fs.writeFile()` aceita três argumentos - nome do arquivo, conteúdo e uma função de retorno de chamada.

Código Node.js para gravar conteúdo em arquivo.

```javascript
const fs = require('fs');
 fs.writeFile('output.txt', "New content added", (err, data) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("The file is saved");
    }
 });
```

O código acima cria um arquivo _output.txt_ e adiciona conteúdo _Novo conteúdo adicionado_ a ele.

### Etapas para execução:

*   Você deve ter o Node.js instalado em seu computador.
*   Crie um arquivo _app.js_ e cole o código acima.
*   Agora abra seu console no diretório de trabalho e execute o `node app.js` comando `node app.js`

_Nota_ : Se o arquivo não existir, o método `fs.writeFile()` criará um arquivo e gravará o conteúdo nele. Pelo contrário, se o arquivo existir, ele substituirá o conteúdo do arquivo.

## Recursos

*   [API do Node.js](https://nodejs.org/api/fs.html#fs_file_system)
*   [Escolas W3](https://www.w3schools.com/nodejs/nodejs_filesystem.asp)