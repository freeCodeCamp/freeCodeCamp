---
id: 5900f5141000cf542c510026
challengeType: 5
title: 'Problem 424: Kakuro'
videoUrl: ''
localeTitle: 'Problema 424: Kakuro'
---

## Description
<section id="description"> O exemplo acima é um quebra-cabeça enigmático de kakuro (também conhecido como soma cruzada, ou até mesmo soma cruzada), com sua solução final à direita. (As regras comuns dos quebra-cabeças do kakuro podem ser encontradas facilmente em vários sites da internet. Outras informações relacionadas também podem ser encontradas em krazydad.com, cujo autor forneceu os dados do quebra-cabeça para esse desafio.) <p> O arquivo de texto para download (kakuro200.txt) contém a descrição de 200 quebra-cabeças, uma mistura de tipos 5x5 e 6x6. O primeiro quebra-cabeça no arquivo é o exemplo acima, codificado da seguinte maneira: </p><p> 6, X, X, (vCC), (vI), X, X, X, (hH), B, O, (vCA), (vJE), X, (hFE, vD), O, O, O, O, (hA), O, I, (hJC, vB), O, O, (hJC), H, O, O, O, X, X, X, (hJE), O, O, X </p><p> O primeiro caractere é um dígito numérico que indica o tamanho da grade de informações. Seria um 6 (para um quebra-cabeça 5x5 kakuro) ou um 7 (para um quebra-cabeça 6x6) seguido por uma vírgula (,). A linha superior extra e a coluna esquerda são necessárias para inserir informações. </p><p> O conteúdo de cada célula é então descrito e seguido por uma vírgula, indo da esquerda para a direita e começando com a linha superior. X = Célula cinza, não precisa ser preenchida por um dígito. O (letra maiúscula) = Célula vazia branca a ser preenchida por um dígito. A = Ou qualquer uma das letras maiúsculas de A a J para ser substituída por seu dígito equivalente no quebra-cabeça resolvido. () = Localização das somas criptografadas. As somas horizontais são precedidas por um minúsculo &quot;h&quot; e as somas verticais são precedidas por um minúsculo &quot;v&quot;. Estes são seguidos por uma ou duas letras maiúsculas, dependendo se a soma for um único dígito ou um dígito duplo. Para somas de dois dígitos, a primeira letra seria para as &quot;dezenas&quot; e a segunda para as &quot;unidades&quot;. Quando a célula deve conter informações para uma soma horizontal e vertical, a primeira é sempre para a soma horizontal e as duas são separadas por uma vírgula dentro do mesmo conjunto de colchetes, ex .: (hFE, vD). Cada conjunto de colchetes também é imediatamente seguido por uma vírgula. </p><p> A descrição da última célula é seguida por uma Carriage Return / Line Feed (CRLF) em vez de uma vírgula. </p><p> A resposta necessária para cada quebra-cabeça é baseada no valor de cada letra necessária para chegar à solução e de acordo com a ordem alfabética. Como indicado no exemplo de quebra-cabeça, sua resposta seria 8426039571. Pelo menos 9 das 10 letras criptografadas sempre fazem parte da descrição do problema. Quando somente 9 são dados, o ausente deve ser atribuído o dígito restante. </p><p> Você está informado de que a soma das respostas dos primeiros 10 quebra-cabeças no arquivo é 64414157580. </p><p> Encontre a soma das respostas para os 200 quebra-cabeças. </p></section>

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler424()</code> deve retornar 1059760019628.
    testString: 'assert.strictEqual(euler424(), 1059760019628, "<code>euler424()</code> should return 1059760019628.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler424() {
  // Good luck!
  return true;
}

euler424();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
