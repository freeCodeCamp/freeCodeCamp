---
title: Add Images to Your Website
localeTitle: Adicionar imagens ao seu site
---
## Adicionar imagens ao seu site

Atributos são pares de valores-chave inseridos na tag. A sintaxe é `<tag key1="value1" key2="value2"> </tag>` ou, no caso de tags de fechamento automático, `<tag key1="value1" key2="value2" />` - observe que os pares são separados por um caractere de espaço, não por uma vírgula.

### Recursos

*   [Atributos HTML](https://guide.freecodecamp.org/html/attributes)

Pode adicionar novas imagens ao seu website usando o elemento `img` e especificar o URL the imagem usando o atributo `src`.

Um exemplo funcionaria assim:

`<img src="https://www.local-da-imagem.pt/a-imagem.jpg">`

Note que os elementos img fecham se com a própria atribuição.

Todos os elementos img devem ter um atributo `alt`. O texto inserido no atributo alt é usado por leitores de ecrã para aumentar a acessibilidade e é mostrado caso a imagem falhe em carregar.

Nota: Se uma imagem for puramente decorativa, usar um atributo alt vazio é a melhor prática.

Idealmente o atributo alt não deve conter nenhuns caractéres especiais a não ser que seja explicitamente necessário.

Vamos adicionar um atributo alt ao nosso exemplo img acima:

`<img src="https://www.local-da-imagem.pt/a-imagem.jpg" alt="Autor está sentado num banco com os polegares para cima.">`

Vamos tentar adicionar uma imagem ao nosso website:

Inserir o atributo img, antes do elemento h2.

Agora definir o atributo src a apontar para este url:

https://bit.ly/fcc-relaxing-cat

Finalmente não se esqueça de adicionar á imagem um texto de atributo alt.
