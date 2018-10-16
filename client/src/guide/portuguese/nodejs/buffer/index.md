---
title: Nodejs- Buffer
localeTitle: Nodejs- Buffer
---
## Amortecedor

Binário é simplesmente um conjunto ou uma coleção de `1` e `0` . Cada número em um binário, cada 1 e 0 em um conjunto são chamados um _pouco_ . O computador converte os dados para este formato binário para armazenar e executar operações. Por exemplo, os seguintes são cinco binários diferentes:

`10, 01, 001, 1110, 00101011`

JavaScript não possui dados de tipo de byte em sua API principal. Para manipular dados binários O Node.js inclui uma implementação de buffer binário com um módulo global chamado `Buffer` .

### Criando um buffer

Existem diferentes maneiras de criar um buffer no Node.js. Você pode criar um buffer vazio com um tamanho de 10 bytes.

```javascript
const buf1 = Buffer.alloc(10); 
```

De strings codificadas em UTF-8, a criação é assim:

```javascript
const buf2 = Buffer.from('Hello World!'); 
```

Existem diferentes codificações aceitas ao criar um Buffer:

*   ascii
*   utf-8
*   base64:
*   latin1
*   binário
*   hexadecimal

Existem três funções separadas alocadas na API do Buffer para usar e criar novos buffers. Nos exemplos acima, vimos `alloc()` e `from()` . O terceiro é `allocUnsafe()` .

```javascript
const buf3 = Buffer.allocUnsafe(10); 
```

Quando retornada, esta função pode conter dados antigos que precisam ser sobrescritos.

### Interações com o buffer

Existem diferentes interações que podem ser feitas com a API do Buffer. Nós vamos cobrir a maioria deles aqui. Vamos começar com a conversão de um buffer para o JSON.

```javascript
let bufferOne = Buffer.from('This is a buffer example.'); 
 console.log(bufferOne); 
 
 // Output: <Buffer 54 68 69 73 20 69 73 20 61 20 62 75 66 66 65 72 20 65 78 61 6d 70 6c 65 2e> 
 
 let json = JSON.stringify(bufferOne); 
 console.log(json); 
 
 // Output: {"type": "Buffer", "data": [84,104,105,115,32,105,115,32,97,32,98,117,102,102,101,114,32,101,120,97,109,112,108,101,46]} 
```

O JSON especifica que o tipo de objeto que está sendo transformado é um Buffer e seus dados. Converter um buffer vazio em JSON nos mostrará que ele não contém nada além de zeros.

```javascript
const emptyBuf = Buffer.alloc(10); 
 
 emptyBuf.toJSON(); 
 
 // Output: { "type": "Buffer", "data": [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] } 
```

Observe que a API Buffer também fornece uma função direta para o `toJSON()` para converter um buffer em um objeto JSON. Para examinar o tamanho de um buffer, podemos usar o método `length` .

```javascript
emptyBuf.length; 
 // Output: 10 
```

Agora vamos converter buffer para uma string legível, no nosso caso, o utf-8 codificado.

```javascript
console.log(bufferOne.toString('utf8')); 
 
 // Output: This is a buffer example. 
```

`.toString()` por padrão converte um buffer em uma string de formato utf-8. É assim que você decodifica um buffer. Se você especificar uma codificação, poderá converter o buffer em outra codificação

```javascript
console.log(bufferOne.toString('base64')); 

```