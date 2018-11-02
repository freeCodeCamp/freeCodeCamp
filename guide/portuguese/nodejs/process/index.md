---
title: Process Object
localeTitle: Objeto do processo
---
## Objeto do processo

O objeto de `process` no Node.js é um objeto global que pode ser acessado dentro de qualquer módulo sem precisar dele. Existem muito poucos objetos ou propriedades globais fornecidos no Node.js e o `process` é um deles. É um componente essencial no ecossistema Node.js, pois fornece vários conjuntos de informações sobre o tempo de execução de um programa. Para explorar, usaremos uma de suas propriedades, chamada `process.versions` . Esta propriedade nos informa as informações sobre a versão do Node.js que instalamos. Tem que ser usado com o sinalizador `-p` .

```shell
$ node  -p "process.versions" 
 
 # output 
 { http_parser: '2.8.0', 
  node: '8.11.2', 
  v8: '6.2.414.54', 
  uv: '1.19.1', 
  zlib: '1.2.11', 
  ares: '1.10.1-DEV', 
  modules: '57', 
  nghttp2: '1.29.0', 
  napi: '3', 
  openssl: '1.0.2o', 
  icu: '60.1', 
  unicode: '10.0', 
  cldr: '32.0', 
  tz: '2017c' } 
```

Outra propriedade que você pode verificar é a `process.release` que é igual ao comando `$ node --version` que usamos quando instalamos o Node.js, mas a saída desta vez será mais detalhada.

```shell
node -p "process.release" 
 
 # output 
 { name: 'node', 
  lts: 'Carbon', 
  sourceUrl: 'https://nodejs.org/download/release/v8.11.2/node-v8.11.2.tar.gz', 
  headersUrl: 'https://nodejs.org/download/release/v8.11.2/node-v8.11.2-headers.tar.gz' } 
```

Estes são alguns dos diferentes comandos que podemos usar em uma linha de comando para acessar informações, caso contrário, nenhum módulo pode fornecer. Esse objeto de `process` é uma instância da classe EventEmitter e contém seus próprios eventos pré-definidos, como `exit` que podem ser usados ​​para saber quando um programa em Node.js concluiu sua execução. Execute o programa abaixo e você pode observar que o resultado surge com o código de status `0` . No Node.js este código de status significa que um programa foi executado com sucesso.

```js
process.on('exit', code => { 
    setTimeout(() => { 
        console.log('Will not get displayed'); 
    }, 0); 
 
    console.log('Exited with status code:', code); 
 }); 
 console.log('Execution Completed'); 
```

Saída do programa acima:

```shell
Execution Completed 
 Exited with status code: 0 
```

`Process` também fornece várias propriedades para interagir. Alguns deles podem ser usados ​​em um aplicativo Node para fornecer um gateway para comunicação entre o aplicativo Node e qualquer interface de linha de comando. Isso é muito útil se você estiver construindo um aplicativo ou utilitário de linha de comando usando o Node.js

*   process.stdin: um fluxo legível
*   process.stdout: um fluxo gravável
*   process.stderr: um fluxo útil para reconhecer erros

Usando `argv` você sempre pode acessar argumentos que são passados ​​em uma linha de comando. `argv` é uma matriz que possui o próprio Node como o primeiro elemento e o caminho absoluto do arquivo como o segundo elemento. A partir do terceiro elemento, pode ter tantos argumentos.

Experimente o programa abaixo para obter mais informações sobre como você pode usar essas várias propriedades e funções.

```js
process.stdout.write('Hello World!' + '\n'); 
 
 process.argv.forEach(function(val, index, array) { 
    console.log(index + ': ' + val); 
 }); 
```

Se você executar o código acima com o seguinte comando, você obterá a saída e os dois primeiros elementos serão `argv` .

```shell
$ node test.js 
 
 # output 
 Hello World! 
 0: /usr/local/bin/node 
 1: /Users/amanhimself/Desktop/articles/nodejs-text-tuts/test.js 

```