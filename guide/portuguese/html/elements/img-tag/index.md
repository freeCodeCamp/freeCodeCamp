---
title: Img Tag
localeTitle: Tag Img
---
## Tag Img

Um simples elemento HTML Image pode ser incluído em um documento HTML como este:

```html

<img src="path/to/image/file" alt="this is a cool picture"> 
```

Tags `alt` fornecem texto alternativo para uma imagem. Um uso da tag `alt` é para pessoas com deficiência visual usando um leitor de tela; eles podem ser lidos na tag `alt` da imagem para entender o significado da imagem.

Observe que o caminho para o arquivo de imagem pode ser relativo ou absoluto. Além disso, lembre-se de que o elemento `img` é de fechamento automático, o que significa que ele não fecha com a tag `<img />` e, em vez disso, fecha com apenas um único `>` .

Exemplo:

```html

<img src="https://example.com/image.png" alt="my picture"> 
```

(Isto está assumindo que o arquivo html está em https://example.com/index.html, então está na mesma pasta que o arquivo de imagem)

é o mesmo que:

```html

<img src="image.png" alt="my picture"> 
```

#### Mais Informações:

[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img) [W3Schools](https://www.w3schools.com/TAGs/tag_img.asp)