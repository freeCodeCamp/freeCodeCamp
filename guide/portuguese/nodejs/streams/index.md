---
title: Streams
localeTitle: Córregos
---
## Córregos

Os fluxos estão disponíveis na API principal do Node.js como objetos que permitem que os dados leiam ou escrevam de maneira contínua. Basicamente, um fluxo faz isso em partes, em comparação com o buffer, que faz o seu bit a bit, tornando-o um processo lento.

Existem quatro tipos de fluxos disponíveis:

*   Legível (fluxos dos quais os dados são lidos)
*   Gravável (fluxos nos quais os dados são gravados)
*   Duplex (fluxos que são legíveis e graváveis)
*   Transform (fluxos duplex que podem modificar dados à medida que são lidos e gravados)

Cada tipo disponível tem vários métodos associados. Alguns dos mais comuns são:

*   dados (isso é executado quando os dados estão disponíveis)
*   end (isso é acionado quando não há dados para ler)
*   erro (isso é executado quando há um erro ao receber ou gravar dados)

### Tubo

Na programação, o conceito de `pipe` não é novo. Sistemas baseados em Unix têm usado pragmaticamente desde os anos 70. O que faz um tubo? Um `pipe` geralmente conecta a origem e o destino. Ele passa a saída de uma função como a entrada de outra função.

No Node.js, o `pipe` é usado da mesma maneira, para emparelhar entradas e saídas de diferentes operações. `pipe()` está disponível como uma função que recebe um fluxo de origem legível e anexa a saída a um fluxo de destino. A sintaxe geral pode ser representada como:

```javascript
src.pipe(dest); 
```

Várias funções de `pipe()` também podem ser encadeadas.

```javascript
a.pipe(b).pipe(c); 
 
 // which is equivalent to 
 
 a.pipe(b); 
 b.pipe(c); 
```

### Correntes legíveis

Fluxos que produzem dados que podem ser anexados como entrada a um fluxo gravável são conhecidos como fluxo legível. Para criar um fluxo legível:

```javascript
const { Readable } = require('stream'); 
 
 const readable = new Readable(); 
 
 readable.on('data', chunk => { 
  console.log(`Received ${chunk.length} bytes of data.`); 
 }); 
 readable.on('end', () => { 
  console.log('There will be no more data.'); 
 }); 
```

### Stream gravável

Esse é o tipo de fluxo que você pode `pipe()` os dados para uma fonte legível. Para criar um fluxo gravável, temos uma abordagem de construtor. Criamos um objeto a partir dele e passamos várias opções. O método leva três argumentos:

*   pedaço: um buffer
*   codificação: para converter dados para formato legível por humanos
*   retorno de chamada: uma função que é chamada quando os dados são processados ​​a partir do bloco

```javascript
const { Writable } = require('stream'); 
 const writable = new Writable({ 
  write(chunk, encoding, callback) { 
    console.log(chunk.toString()); 
    callback(); 
  } 
 }); 
 
 process.stdin.pipe(writable); 
```

### Fluxos Duplex

Fluxos Duplex nos ajudam a implementar fluxos legíveis e graváveis ​​ao mesmo tempo.

```javascript
const { Duplex } = require('stream'); 
 
 const inoutStream = new Duplex({ 
  write(chunk, encoding, callback) { 
    console.log(chunk.toString()); 
    callback(); 
  }, 
 
  read(size) { 
    this.push(String.fromCharCode(this.currentCharCode++)); 
    if (this.currentCharCode > 90) { 
      this.push(null); 
    } 
  } 
 }); 
 
 inoutStream.currentCharCode = 65; 
 process.stdin.pipe(inoutStream).pipe(process.stdout); 
```

O fluxo `stdin` canaliza os dados legíveis para o fluxo duplex. O `stdout` nos ajuda a ver os dados. As partes legíveis e graváveis ​​de um fluxo duplex operam completamente independentes umas das outras.

### Transform Stream

Esse tipo de fluxo é mais uma versão avançada do fluxo duplex.

```javascript
const { Transform } = require('stream'); 
 
 const upperCaseTr = new Transform({ 
  transform(chunk, encoding, callback) { 
    this.push(chunk.toString().toUpperCase()); 
    callback(); 
  } 
 }); 
 
 process.stdin.pipe(upperCaseTr).pipe(process.stdout); 
```

Os dados que estamos consumindo são os mesmos do exemplo anterior do fluxo duplex. A coisa a notar aqui é que `transform()` não requer a implementação de métodos de `read` ou `write` . Ele combina os dois métodos.

### Por que usar o Streams?

Como o Node.js é assíncrono, ele interage passando retornos de chamada para funções com disco e rede. Um exemplo dado abaixo lê os dados de um arquivo no disco e responde à solicitação de rede do cliente.

```javascript
const http = require('http'); 
 const fs = require('fs'); 
 
 const server = http.createServer((req, res) => { 
  fs.readFile('data.txt', (err, data) => { 
    res.end(data); 
  }); 
 }); 
 server.listen(8000); 
```

O trecho de código acima funcionará, mas os dados inteiros do arquivo irão primeiro para a memória para cada solicitação antes de gravar o resultado de volta para a solicitação do cliente. Se o arquivo que estamos lendo for muito grande, isso pode se tornar uma chamada de servidor muito pesada e cara, pois consumirá muita memória para que o processo avance. A experiência do usuário no lado do cliente também sofrerá de atraso.

Nesse caso, se usarmos fluxos, os dados serão enviados para a solicitação do cliente como um bloco de cada vez, assim que eles forem recebidos do disco.

```javascript
const http = require('http'); 
 const fs = require('fs'); 
 
 const server = http.createServer((req, res) => { 
  const stream = fs.createReadStream('data.txt'); 
  stream.pipe(res); 
 }); 
 server.listen(8000); 
```

O `pipe()` aqui se encarrega de escrever ou, no nosso caso, enviar os dados com o objeto de resposta e assim que todos os dados forem lidos do arquivo, fechar a conexão.

Nota: `process.stdin` e `process.stdout` são construídos em fluxos no objeto de `process` global fornecido pela API Node.js.