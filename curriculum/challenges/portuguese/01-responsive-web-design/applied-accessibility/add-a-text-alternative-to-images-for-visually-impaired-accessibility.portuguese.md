---
id: 587d774c367417b2b2512a9c
title: Add a Text Alternative to Images for Visually Impaired Accessibility
challengeType: 0
videoUrl: ''
guideUrl: 'https://portuguese.freecodecamp.org/guide/certificates/add-alt-text-to-an-image-for-accessibility'
localeTitle: Adicionar um texto alternativo a imagens para acessibilidade a deficientes visuais
---

## Descrição
<section id="description"> É provável que você tenha visto um atributo <code>alt</code> em uma etiqueta <code>img</code> em outros desafios. O atributo <code>alt</code> descreve o conteúdo da imagem e fornece uma alternativa de texto. Isso ajuda no caso de a imagem não carregar ou não ser vista por um usuário. Esse texto alternativo também é usado pelos mecanismos de pesquisa para determinar o que uma imagem contém para inclui-la nos resultados da pesquisa. Veja um exemplo: <code>&lt;img src=&quot;importantLogo.jpeg&quot; alt=&quot;Log&oacute;tipo da Empresa&quot;&gt;</code> As pessoas com deficiência visual dependem dos leitores de tela para converter o conteúdo da Web numa interface de áudio. Eles não receberão as informações se estas forem apresentadas apenas visualmente. Para imagens, os leitores de tela podem acessar o atributo <code>alt</code> e ler o seu conteúdo para fornecer informações importantes. Um bom texto <code>alt</code> é curto, mas descritivo, e destina-se a transmitir rapidamente o significado da imagem. Você deve sempre incluir um atributo <code>alt</code> na sua imagem. Segundo a especificação HTML5, isso agora é considerado obrigatório. </section>

## Instruções
<section id="instructions"> O Camper Cat é um ninja codificador, e está construindo um site para compartilhar seu conhecimento. A foto do perfil que ele quer usar mostra suas habilidades e deve ser apreciada por todos os visitantes do site. Adicione um atributo <code>alt</code> na tag <code>img</code>, que explica que o Camper Cat está praticando karatê. (O atributo <code>src</code> da imagem não tem um link para um arquivo real, então você deve ver o texto <code>alt</code> na tela.) </section>

## Testes
<section id='tests'>

```yml
tests:
  - text: A sua etiqueta <code>img</code> deve ter um atributo <code>alt</code> e não deve estar vazia.
    testString: 'assert($("img").attr("alt"), "A sua etiqueta <code>img</code> deve ter um atributo <code>alt</code> e não deve estar vazia.");'

```

</section>

## Semente do Desafio
<section id='challengeSeed'>

<div id='html-seed'>

```html
<img src="doingKarateWow.jpeg">
```

</div>



</section>

## Solução
<section id='solution'>

```html
<img src="doingKarateWow.jpeg" alt="Someone doing karate">
```
</section>
