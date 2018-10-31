---
title: Getting Started with Sass
localeTitle: Começando com o Sass
---
### Introdução

Sass significa "Syntactically Awesome Stylesheets" e é um pré-processador de CSS. Um pré-processador compila código escrito em um idioma específico até o código "produto" que é legível por máquina (legível pelo navegador). Basicamente, o Sass compila código para CSS regular que nossos navegadores podem interpretar! _Por que escrever código no Sass quando o CSS já existe?_ A resposta curta é que o Sass vem com recursos mais poderosos incorporados em sua sintaxe que permitem aos desenvolvedores escrever código front-end DRY-er, escalável e mais sustentável.

Se você estiver familiarizado com CSS, aprender Sass será um pouco mais fácil para você. Se não, pode ser ideal começar a aprender algumas noções básicas de CSS na seção HTML5 e CSS do Free Code Camp em seu curso de Certificação de Desenvolvimento de Front-End, bem como dar uma olhada no [Artigo CSS do MDN](https://developer.mozilla.org/en-US/docs/Web/CSS) .

Na Parte 1 deste artigo, explicarei como instalar o Sass no seu computador e como compilar seu código escrito pelo Sass no CSS.

## Instalação

A maneira mais simples de instalar o Sass em sua máquina é através da linha de comando. O Sass é uma jóia Ruby e requer o seguinte comando:

Para Macs e PCs:

`sudo gem install sass`

Para Linux você precisará instalar a linguagem Ruby primeiro, então:

`sudo su -c "gem install sass"`

Agora você deve conseguir verificar a versão do Sass instalada:

`sass -v`

E deve retornar algo semelhante a:

`Sass 3.4.21 (Selective Steve)`

Se sim, parabéns, você acabou de instalar o Sass! Agora para usar o Sass.

## Uso Básico e Sintaxe

Vamos começar com um exemplo muito simples para ilustrar como o Sass realmente funciona. Você pode acompanhar os passos ou simplesmente ler.

_Uma anotação de importação: Sass pode ser escrito em dois estilos ligeiramente diferentes, cada um com seus próprios benefícios. Um estilo usará a extensão de arquivo_ `.sass` _e o outro usará_ `.scss` . _Breves explicações serão dadas sobre as diferenças dos dois estilos mais tarde. Para uma explicação detalhada, confira o_ [artigo Sass vs. SCSS de](http://thesassway.com/editorial/sass-vs-scss-which-syntax-is-better) _John W. Long_ .

_Por uma questão de consistência, este artigo irá fornecer exemplos de código no formato `.scss` , no entanto ambos os estilos são igualmente populares._

Tudo bem, vamos começar. Vamos criar uma nova pasta para abrigar nossos arquivos de exemplo (você pode fazer isso em qualquer lugar em seu computador e pode usar a linha de comando ou fazer isso manualmente).

Na pasta, criaremos um arquivo chamado `style.scss` e um arquivo HTML para o estilo chamado `index.html` :

_O comando `tree` na imagem acima é de um pacote npm que você pode instalar e não é nativo da linha de comando. O comando `ls` essencialmente faz o mesmo._

Agora que temos nossa configuração de pasta de projeto, podemos usar o comando Sass watch para "vigiar" nosso arquivo Sass e compilar nosso código quando detectar uma alteração no arquivo. Nós digitamos o comando watch no arquivo que queremos assistir:

`sass --watch style.scss`

O próximo passo é abrir a pasta do projeto em seu editor de texto de sua escolha. Quando tivermos nossos arquivos abertos e prontos para edição, podemos adicionar uma página HTML muito básica (para nós, estilo), que se parece com o seguinte:
```
<!DOCTYPE html> 
 <html lang="en"> 
 <head> 
  <meta charset="UTF-8"> 
  <title>Sass!</title> 
  <link rel="stylesheet" href="style.css"> 
 </head> 
 <body> 
  <article> 
    <h1>Hello World</h1> 
    <p class="cat-paragraph-1">Cat ipsum dolor sit amet, stand in front of the computer screen, so chase imaginary bugs has closed eyes but still sees you caticus cuteicus.</p> 
    <p class="cat-paragraph-2">Drink water out of the faucet chew on cable or if it fits, i sits roll on the floor purring your whiskers off.</p> 
  </article> 
 </body> 
 </html> 
```

Depois de configurar o HTML, podemos abrir nosso arquivo `style.scss` e começar a estilizar no Sass. No código de exemplo abaixo, você provavelmente notará como alguns seletores de estilo estão aninhados no seletor de artigos; algo único para o Sass. Não se preocupe, a sintaxe será explicada na Parte 2. Por enquanto, só queremos adquirir uma compreensão de como o Sass funciona na sua forma mais simples.
```
article { 
  h2 { 
    font-family: Arial; 
    color: blue; 
  } 
  .cat-paragraph-1 { 
    color: red; 
  } 
  .cat-paragraph-2 { 
    color: green; 
  } 
 } 
```

Uma vez que o código tenha sido digitado e salvo no arquivo `style.scss` , a tarefa de observação que digitamos na linha de comando detectou uma alteração no arquivo, compilou nosso Sass para CSS e gerou um novo arquivo chamado `style.css` . Você também pode ver um arquivo chamado `style.css.map` na sua pasta de projeto que também apareceu magicamente. Este arquivo é chamado de sourcemap e é de grande utilidade ao depurar o Sass, mas por enquanto vamos deixar.

Abaixo podemos ver os arquivos listados na pasta do projeto.

E agora, se abrirmos `index.html` em um navegador da web, podemos ver nossa página HTML estilizada usando CSS, que foi compilada a partir do código Sass de exemplo. Da mesma forma, podemos abrir o arquivo `style.css` para ver como o Sass gera o código Sass original. Compacto, não é?

## Para onde ir a partir daqui?

_Ótimo! Agora eu sei como compilar o Sass no meu computador. É isso?_

Não por um tiro longo. Este foi um exemplo básico de como o Sass funciona, portanto, os benefícios de escrever no Sass sobre o CSS do vanilla podem não ser aparentes. Nós escrevemos 12 linhas de "Sass" e obtivemos 7 linhas de CSS como resultado. Não é exatamente uma diferença importante por qualquer padrão. Na Parte 2, explicaremos a **mágica** por trás da sintaxe Sass, como variáveis ​​e mixins, e como o uso de tais ferramentas pode nos dar superpoderes ao estilizar.

Se você ainda está preso em como o Sass está magicamente compilando CSS ou talvez você queira mexer com código de amostra um pouco mais, o [Sassmeister](http://www.sassmeister.com/) é uma ótima interface online que permite escrever na sintaxe Sass e ver instantaneamente seu código compilado em CSS sem ter que instalar qualquer coisa ou fazer qualquer configuração no seu computador. É um recurso muito útil para sandbox e testar seu código Sass.