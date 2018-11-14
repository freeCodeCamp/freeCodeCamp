---
title: RegExp prototype exec
localeTitle: Protótipo do RegExp
---
## Protótipo do RegExp

O método **`exec()`** executa uma pesquisa por uma correspondência em uma string especificada. Retorna uma matriz de resultado ou [`null`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "O valor null representa a ausência intencional de qualquer valor de objeto. É um dos valores primitivos do JavaScript.") .

Se você estiver executando uma correspondência simplesmente para encontrar true ou false, use o método [`RegExp.prototype.test()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test "O método test () executa uma busca por uma correspondência entre uma expressão regular e uma string especificada. Retorna verdadeiro ou falso.") ou o método [`String.prototype.search()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search "O método search () executa uma pesquisa por uma correspondência entre uma expressão regular e esse objeto String.") .

### Sintaxe
```
regexObj.exec(str) 
```

### Parâmetros

`str`

A string na qual corresponder à expressão regular.

### Valor de retorno

Se a correspondência for bem-sucedida, o método `exec()` retornará uma matriz e atualizará as propriedades do objeto de expressão regular. A matriz retornada tem o texto correspondente como o primeiro item e, em seguida, um item para cada parêntese de captura que corresponde ao texto que foi capturado.

Se a correspondência falhar, o método `exec()` retornará [`null`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "O valor null representa a ausência intencional de qualquer valor de objeto. É um dos valores primitivos do JavaScript.") .

### Descrição

Considere o seguinte exemplo:
```
// Match "quick brown" followed by "jumps", ignoring characters in between 
 // Remember "brown" and "jumps" 
 // Ignore case 
 var re = /quick\s(brown).+?(jumps)/ig; 
 var result = re.exec('The Quick Brown Fox Jumps Over The Lazy Dog'); 
```

A tabela a seguir mostra os resultados deste script:

### Exemplos

#### Encontrando partidas sucessivas

Se sua expressão regular usar o sinalizador " `g` ", você poderá usar o método `exec()` várias vezes para localizar correspondências sucessivas na mesma cadeia. Quando você faz isso, a pesquisa começa na substring de `str` especificada pela propriedade [`lastIndex`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex "O lastIndex é uma propriedade inteira de leitura / gravação de instâncias de expressão regular que especifica o índice no qual iniciar a próxima correspondência.") da expressão regular ( [`test()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test "O método test () executa uma busca por uma correspondência entre uma expressão regular e uma string especificada. Retorna verdadeiro ou falso.") também avançará a propriedade [`lastIndex`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex "O lastIndex é uma propriedade inteira de leitura / gravação de instâncias de expressão regular que especifica o índice no qual iniciar a próxima correspondência.") ). Por exemplo, suponha que você tenha este script:
```
var myRe = /ab*/g; 
 var str = 'abbcdefabh'; 
 var myArray; 
 while ((myArray = myRe.exec(str)) !== null) { 
  var msg = 'Found ' + myArray[0] + '. '; 
  msg += 'Next match starts at ' + myRe.lastIndex; 
  console.log(msg); 
 } 
```

Este script exibe o seguinte texto:
```
Found abb. Next match starts at 3 
 Found ab. Next match starts at 9 
```

Nota: Não coloque a expressão regular literal (ou [`RegExp`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "O construtor RegExp cria um objeto de expressão regular para correspondência de texto com um padrão.") construtor) dentro da `while` condição ou ele irá criar um ciclo infinito se houver uma correspondência devido ao [`lastIndex`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex "O lastIndex é uma propriedade inteira de leitura / gravação de instâncias de expressão regular que especifica o índice no qual iniciar a próxima correspondência.") propriedade a ser reposto a cada iteração. Também certifique-se de que o sinalizador global esteja configurado ou que um loop também ocorra aqui.

#### Usando `exec()` com literais `RegExp`

Você também pode usar `exec()` sem criar um objeto [`RegExp`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "O construtor RegExp cria um objeto de expressão regular para correspondência de texto com um padrão.") :
```
var matches = /(hello \S+)/.exec('This is a hello world!'); 
 console.log(matches[1]); 
```

Isto irá registrar uma mensagem contendo 'olá mundo!'.