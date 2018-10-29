---
title: Markdown Code Formatting
localeTitle: Formatação de código Markdown
---
# Formatação de código Markdown

Existem duas maneiras de formatar o código no Markdown. Você pode usar código in-line, colocando backticks em partes de uma linha ou usar um bloco de código, ao qual alguns renderizadores aplicarão a sintaxe.

## Código Inline

Você pode usar formatação de código embutido para enfatizar um pequeno comando ou uma parte da sintaxe dentro de uma linha que você está escrevendo.

Por exemplo, você pode querer mencionar a função `Array.protoype.map()` do Javascript. Usando a formatação de código embutido, é claro que isso é um trecho de código. Você também pode usá-lo para ilustrar um comando do terminal, como a `yarn install` .

Para usar formatação de código embutido, simplesmente coloque o código que você deseja formatar nos backticks. Em um teclado QWERTY de layout padrão dos EUA, isso pode ser encontrado à esquerda de '1' e acima de Tab. Mais informações sobre a localização do backtick em teclados internacionais são fornecidas abaixo.

Por exemplo, escrever \`Array.prototype.map ()\` no markdown será renderizado como `Array.prototype.map()` .

## Blocos de Código

Para escrever trechos de código mais longos ou mais detalhados, geralmente é melhor colocá-los dentro de um bloco de código. Blocos de código permitem que você use várias linhas, e o markdown irá renderizá-lo dentro de sua própria caixa e com a fonte do tipo de código.

Para conseguir isso, inicie o seu bloco com uma linha de três backticks. Isso sinaliza para marcar que você está criando um bloco de código. Você precisará terminar com outra linha de três backticks. Por exemplo:

\`\` \`

var add2 = função (número) {

número de retorno + 2;

}

\`\` \`

irá processar na marcação como:
```
var add2 = function(number) { 
    return number + 2; 
 } 
```

Embora não seja suportado nativamente pelo markdown, muitos mecanismos de markdown, incluindo o utilizado pelo GitHub, suportarão o realce de sintaxe. Isso significa que, ao informar sobre a linguagem que estamos usando em nosso bloco, ela adicionará cores como um IDE faria. Você pode fazer isso adicionando o nome do idioma na mesma linha que os três carrapatos de abertura. No exemplo acima, se em vez da primeira linha ser \`\` \`usarmos\` \`\` js, então o destaque será aplicado ao nosso bloco.

```js
var add2 = function(number) { 
    return number + 2; 
 } 
```

Isso pode ser aplicado a mais do que apenas javascript embora. Eu posso usar o \`\` \`html:

```html

<div class="row"> 
    <div class="col-md-6 col-md-offset-3"> 
        <h1>Hello World</h1> 
    </div> 
 </div> 
```

\`\` \`ruby:

```ruby
"Hello World".split('').each do |letter| 
    puts letter 
 end 
```

ou \`\` \`python:

```python
a, b = 0, 1 
 while b < 10: 
    print(b) 
    a, b = a, a + b 
```

além de muitos outros. Mas lembre-se, nem todos os mecanismos de markdown aplicarão realce de sintaxe.

## Typing Backticks

A localização da chave de backtick pode ser diferente em teclados diferentes, e se você não estiver usando um teclado QWERTY de layout americano, pode ser difícil encontrá-lo. [Este](http://superuser.com/a/254077/122424) guia útil lista algumas das maneiras de encontrar sua chave de backtick, que coletamos aqui abaixo.

#### QWERTY e QWERTZ (Chave que foi marcada com borda vermelha)

![QWERTY](//discourse-user-assets.s3.amazonaws.com/optimized/2X/a/a7daf1d707e12e207d47f0eb70ba01d97ffd1924_1_690x327.png)

#### AZERTY France ( Alt Gr + Key que foi marcado com borda vermelha)

![AZERTY](//discourse-user-assets.s3.amazonaws.com/original/2X/8/8f65c339ce4eefd9d79841f3dc54f4c37cab2e77.png)

#### AZERTY Bélgica ( Alt Gr + Key que foi marcada com borda vermelha)

![insira a descrição da imagem aqui](//discourse-user-assets.s3.amazonaws.com/original/2X/d/de291f0895b0fed992726a62d654f4e1f0e421f3.png)

#### QWERTY Estoniano (Chave que foi marcada com borda vermelha)

![Layout de teclado estoniano](//discourse-user-assets.s3.amazonaws.com/optimized/2X/0/089b26510b1dcc7553625ba162582cf55837b6cd_1_690x230.png)

### Código Alt

Finalmente, a chave backtick possui um código alt, que deve funcionar em qualquer keybord. Se você não conseguir encontrar uma tecla de backtick no teclado, poderá segurar a tecla Alt e pressionar 9 e 6 (Alt + 9, 6). Isto irá inserir um backtick.