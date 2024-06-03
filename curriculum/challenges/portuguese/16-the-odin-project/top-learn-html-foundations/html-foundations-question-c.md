---
id: 637f4e1c72c65bc8e73dfe20
title: Questão C sobre Fundamentos de HTML
challengeType: 15
dashedName: html-foundations-question-c
---

# --description--

Para demonstrar um boilerplate de HTML, você primeiro precisa de um arquivo HTML como o qual vamos trabalhar.

Crie uma pasta em seu computador e dê a ela o nome de `html-boilerplate`. Dentro dessa pasta, crie um arquivo e dê a ele o nome de `index.html`.

Você, provavelmente, já está familiarizado com muitos tipos diferentes de arquivos, como, por exemplo, arquivos .doc, .pdf e arquivos de imagem.

Para que o computador saiba que você deseja criar um arquivo HTML, é preciso anexar ao nome do arquivo a extensão `.html`, como você fez ao criar o arquivo `index.html`.

Vale a pena observar que você nomeou o seu arquivo HTML como index. Você sempre deve dar ao arquivo HTML que conterá a página inicial do seu site o nome de `index.html`. This is because web servers will by default look for an `index.html` page when users land on your websites - and not having one will cause big problems.

## O DOCTYPE

Toda página HTML começa com uma declaração de doctype. O propósito do doctype é informar ao navegador qual versão de HTML ele deve usar para renderizar o documento. A versão mais recente do HTML é o HTML5. O tipo doctype para essa versão é simplesmente `<!DOCTYPE html>`.

Os doctypes para versões mais antigas do HTML eram um pouco mais complicados. Por exemplo, esta era a declaração de doctype para o HTML4:

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
```

No entanto, você provavelmente não vai mais querer usar uma versão mais antiga do HTML. Então, use sempre `<!DOCTYPE html>`.

Abra o arquivo `index.html` criado anteriormente no seu editor de texto e adicione `<!DOCTYPE html>` à primeira linha.

# --question--
## --text--

Qual é a finalidade da declaração de `DOCTYPE`?

## --answers--

Informar ao navegador qual versão de HTML usar para renderizar o documento.

---

Informar ao navegador que este documento usa JavaScript.

---

Informar ao navegador o título do documento.


## --video-solution--

1
