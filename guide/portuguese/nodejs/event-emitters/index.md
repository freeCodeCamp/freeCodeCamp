---
title: Event Emitters
localeTitle: Emissores de Eventos
---
## Eventos e Transmissões

Tradicionalmente, em um servidor da Web, processar um dado na forma de um arquivo lendo e gravando consome muito mais memória, pois esses métodos de processamento precisam carregar o arquivo toda vez que ele precisar ler ou gravar esse arquivo. Isso é considerado um desperdício de recursos. Pense nisso, em termos de escalabilidade e Big Data, se estamos desperdiçando recursos, vamos nos comprometer muito. A natureza assíncrona do Node.js fornece duas opções adequadas para trabalharmos e fornecer um fluxo de dados que consome menos recursos, pois o Node.js é baseado em um modelo assíncrono sem bloqueio. Eles estão emitindo eventos e fluxos. Nesta seção, vamos dar uma olhada em ambos.

## Classe EventEmitter

EventEmitters são uma das principais idéias por trás da arquitetura de programação orientada a eventos ou programação assíncrona em Node.js. Um EventEmitter é um objeto e, no Node.js, qualquer objeto que emite um evento é uma instância da classe EventEmitter. O que é um evento? Todas as ações executadas pelo programa Node.js, como iniciar o servidor da Web e fechar o encerramento do programa quando não há solicitações a serem atendidas, são consideradas como dois eventos separados.

Para acessar a classe EventEmitter em um programa Node.js, você precisa exigir o módulo de `events` da API Node.js. Para criar o objeto, criamos uma instância da classe EventEmitter chamando sua função construtora.

```js
const events = require('events'); 
 
 const eventEmitter = new events.EventEmitter(); 
```

Ou você pode exigir acesso direto à subclasse EventEmitter da seguinte forma:

```js
const EventEmitter = require('events'); 
 
 const eventEmitter = new EventEmitter(); 
```

Uma classe EventEmitter fornece vários métodos predefinidos para trabalhar com eventos. Estes métodos são `.on` , `.emit` e `.error` . Emitir um evento de uma função pode ser feito acionando uma função de retorno de chamada que pode ser acessada por qualquer outra função JavaScript. Isso é como transmitir.

A capacidade de acionar um evento pode ser feita seguindo a sintaxe:

```js
eventEmitter.emit(eventName, optionalData); 
```

E a capacidade de anexar uma função de ouvinte e definir o nome de um evento específico é feita por `.on` .

```js
eventEmitter.emit(eventName, callback); 
```

Vamos imitar as novas funções que acabamos de aprender com um exemplo. Crie um novo arquivo chamado `eventemitter.js` e cole o seguinte código:

```js
const EventEmitter = require('events'); 
 
 const eventEmitter = new EventEmitter(); 
 
 const callback = () => { 
    console.log('callback runs'); 
 }; 
 
 eventEmitter.on('invoke', callback); 
 
 eventEmitter.emit('invoke'); 
 eventEmitter.emit('invoke'); 
```

Agora execute o exemplo acima usando o comando `node` e você deve obter a seguinte saída.

```shell
callback runs 
 callback runs 
```

Começamos criando uma instância eventEmitter através do qual tenha acesso aos `.on` o método. O `.on` método adiciona o evento, definindo o nome `invoke` que usamos mais tarde na `.emit` chamar acionar a função de retorno de chamada associado a ele.

Há outra função que a classe EventEmitter fornece, chamada `.once` . Esse método invoca apenas a função de retorno de chamada associada a um evento pela primeira vez quando um evento é emitido. Considere o exemplo abaixo.

```js
const EventEmitter = require('events'); 
 
 const eventEmitter = new EventEmitter(); 
 
 const callback = () => { 
    console.log('callback runs'); 
 }; 
 
 eventEmitter.once('invoke', callback); 
 
 eventEmitter.emit('invoke'); 
 eventEmitter.emit('invoke'); 
```

Saída

```shell
callback runs 
```

`.once` manter as faixas de eventos de quando elas são acionadas e quantas vezes elas são acionadas, ao contrário do método `.on` , que não acompanha essa situação. Esta é uma diferença importante entre os dois.

## Compreender fluxos

O Node.js fornece outra maneira de trabalhar com dados, em vez de consumir uma grande quantidade de recursos de memória e torná-lo econômico. Isso que fluxos fazem. Basicamente, os fluxos permitem que você leia dados da única fonte e os coloque no destino. Os fluxos processam os dados em blocos em vez de todos de uma só vez, tornando-os adequados para trabalhar com grandes conjuntos de dados. Muitos módulos Node.js internos usam streams sob o capô. Por exemplo, solicitação e resposta HTTP, sockets TCP, zlib, crypto, fs lêem e gravam fluxos, etc.

### Tipo de fluxos

No Node.js, existem quatro tipos de fluxos:

*   Legível
*   Gravável
*   Duplex
*   Transformar

Os mais comuns são fluxos legíveis e graváveis. Os fluxos legíveis são usados ​​para ler os dados da origem e os fluxos graváveis ​​são usados ​​para executar a operação de gravação desses dados no destino. Fluxos duplex podem ser usados ​​para executar operações de leitura e gravação. Transform é um superconjunto de fluxos Duplex, com a única diferença é que os dados podem ser modificados durante a leitura ou gravação.

### Tipo de eventos de fluxo

Todos esses tipos de fluxo são instâncias da classe EventEmitter, o que significa que eles emitem eventos de leitura e gravação. Cada tipo de fluxo pode emitir os seguintes eventos.

*   data: esse evento é acionado quando os dados estão disponíveis para leitura pelo fluxo legível
*   error: Este evento é acionado quando há um erro ao ler ou gravar os dados
*   end: este evento é acionado quando não há dados para ler

## Correntes legíveis

Um fluxo legível permite ler os dados da fonte. Esta fonte pode ser qualquer coisa, desde um buffer, um arquivo, etc. Primeiro, crie um arquivo de texto simples a partir do qual vamos ler os dados usando o fluxo.

```text
I am Text file that contains data. 
```

Agora, crie um novo arquivo chamado read.js, que implementará a funcionalidade de leitura de dados desse arquivo de texto usando um fluxo legível.

```js
const fs = require('fs'); 
 const readableStream = fs.createReadStream('abc.txt'); 
 let data = ''; 
 
 readableStream.on('data', function(chunk) { 
    data += chunk; 
 }); 
 
 readableStream.on('end', function() { 
    console.log(data); 
 }); 
```

Se você executar o programa acima, você receberá a seguinte saída:

```shell
 $ node test.js 
 I am Text file that contains data. 
```

Qual é o que escrevemos dentro do arquivo de texto. Para ler dados usando o fluxo, usamos uma função chamada `createReadStream()` do módulo do sistema de arquivos `fs` .

Quando não há dados para ler pelo fluxo legível, ele automaticamente termina a função de retorno de chamada. O método `.on` é o que aprendemos na seção anterior da classe EventEmitter. Isso significa que os streams usam a classe EventEmitter nos bastidores.

## Stream gravável

Os fluxos graváveis ​​são usados ​​para gravar ou inserir ou anexar dados a um destino. Como fluxos legíveis, eles também são fornecidos pelo módulo `fs` . Crie um novo arquivo chamado `wrtte.js` no qual usará um fluxo legível para ler dados da origem e gravá-lo em um destino criando um novo arquivo `.txt` .

```js
const fs = require('fs'); 
 const readableStream = fs.createReadStream('./abc.txt'); 
 const writeableStream = fs.createWriteStream('./dest.txt'); 
 let data = ''; 
 
 readableStream.on('data', function(chunk) { 
    writeableStream.write(chunk); 
 }); 
```

Quando você executa este programa, um novo arquivo será criado pelo fluxo gravável desde que tenha acesso ao módulo do sistema de arquivos. O fluxo gravável usa o método `.write()` para produzir os dados no destino. No exemplo acima, estamos criando um novo arquivo chamado `dest.txt` que conterá os mesmos dados de `abc.txt` .

## Tubulação

Piping é um mecanismo pelo qual você pode ler dados a partir da fonte e escrevê-lo para o destino sem escrever muito código como fizemos acima e não usar `.on` ou `.write` métodos.

Se estamos a escrever acima exemplo usando pipe, vamos escrever como abaixo:

```js
const fs = require('fs'); 
 const readableStream = fs.createReadStream('./abc.txt'); 
 const writeableStream = fs.createWriteStream('./dest.txt'); 
 
 readableStream.pipe(writeableStream); 
```

Observe quantas linhas de código foram removidas. Além disso, agora precisamos apenas dos caminhos de arquivos de origem e de destino e, para ler e gravar dados, estamos usando o método `.pipe()` .