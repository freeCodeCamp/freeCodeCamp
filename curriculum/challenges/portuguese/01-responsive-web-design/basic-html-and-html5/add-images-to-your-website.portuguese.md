---
id: bad87fee1348bd9aedf08812
title: Add Images to Your Website
challengeType: 0
guideUrl: 'https://portuguese.freecodecamp.org/guide/certificates/add-images-to-your-website'
videoUrl: ''
localeTitle: Adicionar imagens ao seu site
---

## Descrição
<section id="description"> Você pode adicionar imagens ao seu site usando o elemento <code>img</code> e apontar para o URL de uma imagem específica usando o atributo <code>src</code> . Um exemplo disso seria: <code>&lt;img src=&quot;https://www.your-image-source.com/your-image.jpg&quot;&gt;</code> Note que os elementos <code>img</code> são de fechamento automático. Todos os elementos <code>img</code> <strong>devem</strong> ter um atributo <code>alt</code> . O texto dentro de um atributo <code>alt</code> é usado para leitores de tela para melhorar a acessibilidade e é exibido se a imagem não for carregada. Nota: Se a imagem é puramente decorativa, usar um atributo <code>alt</code> vazio é uma prática recomendada. Idealmente, o atributo <code>alt</code> não deve conter caracteres especiais, a menos que seja necessário. Vamos adicionar um atributo <code>alt</code> ao nosso exemplo de <code>img</code> acima: <code>&lt;img src=&quot;https://www.your-image-source.com/your-image.jpg&quot; alt=&quot;Author standing on a beach with two thumbs up.&quot;&gt;</code> </section>

## Instruções
<section id="instructions"> Vamos tentar adicionar uma imagem ao nosso site: Insira uma tag <code>img</code> antes do elemento <code>h2</code> . Agora defina o atributo <code>src</code> para que aponte para este URL: <code>https://bit.ly/fcc-relaxing-cat</code> Por fim, não se esqueça de dar à sua imagem um texto <code>alt</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Sua página deve ter um elemento de imagem.
    testString: 'assert($("img").length > 0, "Your page should have an image element.");'
  - text: Sua imagem deve ter um atributo <code>src</code> que aponte para a imagem do gatinho.
    testString: 'assert(new RegExp("\/\/bit.ly\/fcc-relaxing-cat|\/\/s3.amazonaws.com\/freecodecamp\/relaxing-cat.jpg", "gi").test($("img").attr("src")), "Your image should have a <code>src</code> attribute that points to the kitten image.");'
  - text: Seu elemento de imagem <strong>deve</strong> ter um atributo <code>alt</code> .
    testString: 'assert(code.match(/alt\s*?=\s*?(\"|\").*(\"|\")/), "Your image element <strong>must</strong> have an <code>alt</code> attribute.");'

```

</section>

## Desafio semente 
<section id='challengeSeed'>

<div id='html-seed'>

```html
<img src="https://bit.ly/fcc-relaxing-cat" alt="Gatinho">
<h2>CatPhotoApp</h2>
<main>


  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>

```

</div>



</section>

## Solução
<section id='solution'>

```html
<h2>CatPhotoApp</h2>
<main>


  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```
</section>
