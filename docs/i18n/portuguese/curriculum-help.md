# Usar os auxiliares do currículo

O executor dos testes tem acesso a alguns auxiliares que podem ajudar com o código dos campers.

## Auxiliar do CSS

Para instanciar o auxiliar dentro de um bloco de teste, use isto:

```js
const helper = new __helpers.CSSHelp(document);
```

Nesse exemplo, a variável `document` refere-se ao objeto do documento do iframe do executor do teste.

### Métodos

Existem alguns métodos disponíveis para analisar e testar o CSS.

#### `.getStyle()`

O método `.getStyle()` recebe um seletor do CSS e retorna um objeto de declaração de estilo do CSS.

Por exemplo, se o camper escreveu o seguinte CSS:

```css
body {
  background: linear-gradient(45deg, rgb(118, 201, 255), rgb(247, 255, 222));
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
```

Você receberá um objeto que se parece com isto:

```js
{
    0: "background-image",
    1: "background-position-x",
    2: "background-position-y",
    3: "background-size",
    4: "background-repeat-x",
    5: "background-repeat-y",
    6: "background-attachment",
    7: "background-origin",
    8: "background-clip",
    9: "background-color",
    10: "margin-top",
    11: "margin-right",
    12: "margin-bottom",
    13: "margin-left",
    14: "padding-top",
    15: "padding-right",
    16: "padding-bottom",
    17: "padding-left",
    18: "width",
    19: "height",
    20: "overflow-x",
    21: "overflow-y",
    "accentColor": "",
    "additiveSymbols": "",
    "alignContent": "",
    "alignItems": "",
    ...
}
```

Esse método permite testar se as propriedades específicas foram definidas:

```js
assert.strictEqual(helper.getStyle('body')?.width, '100%');
```

O auxiliar atribui um método `.getPropVal()` ao objeto de declaração de estilo que permite que você obtenha o valor de uma propriedade específica:

```js
assert.strictEqual(helper.getStyle('body').getPropVal('width'), '100%');
```

#### `.getCSSRules()`

O método `.getCSSRules()` recebe um tipo de regra da união entre `media | fontface | import | keyframes` e retorna um array de regras do CSS correspondentes a essa regra.

Por exemplo, se o camper escreveu o seguinte código:

```css
@media (max-width: 100px) {
  body {
    background-color: green;
  }
}
```

O valor retornado por `helper.getCSSRules('media')` seria este array:

```js
[
    {
        conditionText: "(max-width: 100px)",
        cssRules: [
            selectorText: 'body',
            style: CSSStyleDeclaration,
            styleMap: StylePropertyMap,
            cssRules: CSSRuleList,
            type: 1,
            ...
        ],
        cssText: "@media (max-width: 100px) {\n  body { background-color: green; }\n}",
        ...
    }
]
```

Você, então, pode testar se o camper escreveu a media query correta:

```js
const hasCorrectHeight = helper.getCSSRules('media').some(x => x.style.height === '3px');;
assert.isTrue(hasCorrectHeight);
```

#### `.getRuleListsWithinMedia()`

O método `.getRuleListsWithinMedia()` recebe um texto de mídia (por exemplo, `("max-width: 200")`) e retorna as regras de CSS dentro dessa media query.

O resultado retornado é o equivalente da propriedade da regra de mídia `cssRules` a partir do valor de retorno de `.getCSSRules("media")`.

### Métodos menos frequentes

Estes métodos não são tão comumente utilizados, mas estão disponíveis, se forem necessários.

#### `.getStyleDeclarations()`

O método `.getStyleDeclarations()` recebe um seletor de CSS e retorna um array de objetos de declaração de estilo do CSS (vindos do método `.getStyle()`).

#### `.isPropertyUsed()`

O método `.isPropertyUsed()` recebe uma **propriedade** do CSS e confere se ela foi definida/usada em algum lugar do CSS do camper.

#### `.getStyleRule()`

O método `.getStyleRule()` recebe um seletor do CSS e retorna a declaração do estilo em CSS, de modo semelhante a `.getStyle()`. No entanto, a declaração retornada desse método inclui um método `.isDeclaredAfter()` adicional, que recebe um seletor e retorna se essa regra é declarada após o seletor ter sido passado.

#### `.getStyleSheet()`

O método `.getStyleSheet()` retorna o CSS do camper analisado em uma folha de estilo do CSS.

## Remover conteúdo

Existem alguns métodos no objeto `__helpers` para remover conteúdo do código do camper.

Eles NÃO precisam ser instanciados. Eles são métodos estáticos.

### Removendo comentários

Usar `__helpers.removeCssComments()`, `__helpers.removeHTMLComments()` ou `__helpers.removeJSComments()` permite a você passar o código do camper (por meio da variável `code`) para remover comentários correspondentes à sintaxe de comentário da linguagem.

### Removendo os espaços em branco

Usar `__helpers.removeWhitespace()` permite que você passe o código do camper (através da variável `código`) para remover todos os espaços em branco.
