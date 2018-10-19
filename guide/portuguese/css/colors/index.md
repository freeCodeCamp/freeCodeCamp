---
title:  CSS3 Colors
localeTitle:  CSS3 Colors
---
## Cores

CSS Colors é um módulo CSS que lida com cores, tipos de cores, mistura de cores e opacidade. Nem todas as propriedades CSS que levam um como um valor fazem parte deste módulo, mas dependem dele. Em CSS, você pode alterar a cor de quase todos os elementos da sua página HTML. Propriedades como `background-color` , `color` e `border-color` definem a cor desses elementos.

CSS suporta nomes de cores, hexadecimais e cores RGB. Além da introdução da declaração de `opacity` , as cores em CSS3 agora podem ser especificadas usando nomes de cores, ou valores RGB, HEX, HSL, RGBA, HSLA.

O HTML suporta 140 [nomes de cores](https://www.w3schools.com/colors/colors_names.asp) padrão.

### RGB (A)

RGB significa "Vermelho, Verde, Azul". Um valor RGB é uma combinação de valores de intensidade para vermelho, verde e azul. Cada um está entre 0 (preto) e 255 (intensidade total). Os valores de cores RGBA são uma extensão dos valores de cores RGB com um canal alfa - que especifica a opacidade de uma cor. O parâmetro alfa é um número entre 0,0 (totalmente transparente) e 1,0 (totalmente opaco).

Um valor de cor RGB é especificado com: rgb (vermelho, verde, azul) Um valor de cor RGBA é semelhante, com o valor alfa na última posição: rgba (vermelho, verde, azul, alfa)

### HSL (A)

HSL significa "matiz, saturação e leveza". Matiz é um grau na roda de cores (de 0 a 360): 0 (ou 360) é vermelho 120 é verde 240 é azul Saturação é um valor percentual: 100% é a cor total. Leveza também é uma porcentagem; 0% é escuro (preto) e 100% é branco. Os valores de cores do HSLA são uma extensão dos valores de cores do HSL com um canal alfa - que especifica a opacidade de uma cor.

Um valor de cor HSL é especificado com: hsl (matiz, saturação, luminosidade). Um valor de cor HSLA é semelhante, com o valor alfa na última posição: hsla (matiz, saturação, luminosidade, alfa)

### CMYK

As cores CMYK são uma combinação de CIANO, MAGENTA, AMARELO e PRETO. Telas de computador exibem cores usando valores de cores RGB. Impressoras geralmente apresentam cores usando valores de cores CMYK. O CMYK não é suportado em HTML, mas é sugerido como um novo padrão no CSS4.

Exemplo de cores: Vermelho CMYK: cmyk (0%, 100%, 100%, 0%) CMYK Verde: cmyk (100%, 0%, 100%, 0%) Azul CMYK: cmyk (100%, 100%, 0%, 0%)

### Hexcodes

Hexcode, abreviação de código hexadecimal, é uma maneira de expressar um valor de cor para o seu computador. É assim chamado porque 16 símbolos únicos podem ser usados ​​como valores. Nesse caso, os números de 0 a 9 e as letras de a f são usados.

Os códigos hexadecimais são expressos neste formato: # 000000, que seria a cor preta nesta instância. Seis caracteres são usados ​​em cada hexcode, usando qualquer um dos 16 caracteres mencionados anteriormente. Esses seis personagens são divididos em três pares de dois.

Esses três pares expressam um valor para a quantidade de vermelho, verde e azul em uma determinada cor. Tomando a cor do hexcode # AA11BB, AA é a quantidade de vermelho, 11 a quantidade de verde e BB a quantidade de azul. 0 é o valor mais baixo de uma cor, enquanto f é o valor mais alto.

Os códigos hexadecimais são insensíveis a maiúsculas e minúsculas, significando que #FFFFFF e #ffffff seriam da mesma cor: branco.

Além disso, existem 16.777.216 possíveis combinações de cores usando o hexcode.

### Opacidade

A propriedade de opacidade CSS3 define a opacidade do elemento inteiro (tanto a cor do segundo plano quanto o texto serão opacos / transparentes). Ao contrário dos valores alfa especificados com rgba e hsla, a opacidade é herdada pelos elementos filhos.

O valor da propriedade de opacidade deve ser um número entre 0.0 (totalmente transparente) e 1.0 (totalmente opaco).

#### Exemplos

```html

<html> 
  <body> 
    <p>Hello Moto</p> 
  </body> 
 </html> 
```

```css
body { 
  background-color: green; 
  color: white; 
 } 
```

No exemplo acima, a `background-color: green` adiciona o elemento de cor verde em `<body>` . Isso transforma toda a página da web em verde. Os elementos `<p>` são todos brancos depois da `color: white` também. Você pode usar cores nomeadas, como `green` , `blue` , `yellow` , `red` , `purple` e muitas outras. Mas para cores personalizadas, você pode usar códigos hexadecimais ( `#147ACC` ), valores RGB ( `rgb(20, 122, 204)` ) e até mesmo valores HSL ( `hsl(145, 59%, 30%)` ).

```css
p { 
  color: rgba(244, 145, 14, 0.80); // bright orange 
 } 
 
 h2 { 
 color: #FA8072; //salmon 
 } 
```

Você também pode adicionar um valor alfa ou transparência às cores. A transparência permite que o texto seja sobreposto em uma imagem e ainda tenha a imagem parcialmente visível através do texto, ou pode ser usado para alterar a tonalidade da cor se nenhum outro elemento estiver na frente ou atrás do texto. Use `rgba()` ou `hsla()` e preencha seus valores de cor. O valor alfa é o último e é um percentual convertido em um decimal. (Por exemplo, 20% é 0,2, 75% é 0,75 etc.)

```css
body { 
  background-color: hsl(184, 87%, 94%); // bright blue 
 } 
```

Acima mostra parágrafos laranja brilhante e 20% transparente, h2 elementos um rosa salmão eo fundo do corpo azul brilhante.

Para obter cores personalizadas para usar em CSS, você pode achar útil um seletor de cores. Alguns editores de texto têm selecionadores de cores internos, como o Visual Studio Code. Se você pesquisar "selecionador de cores" no Google ou no DuckDuckGo, receberá um seletor de cores que poderá usar. O Google Chrome e o Firefox também têm complementos de selecionador de cores que você pode instalar. O Adobe Color CC não apenas ajuda você a escolher uma cor, mas também ajuda a escolher um esquema de cores para sua página da web! É uma boa ideia verificar se há contraste suficiente entre as cores de texto e de plano de fundo usando uma ferramenta como o Color Contrast Checker do WebAIM.

#### Mais Informações:

[Adobe Color CC](https://color.adobe.com/) [ColorPick Eyedropper na Chrome Web Store](https://chrome.google.com/webstore/detail/colorpick-eyedropper/ohcpnigalekghcmgcdcenkpelffpdolg?hl=en) [Complemento do ColorZilla para o Firefox](https://addons.mozilla.org/en-US/firefox/addon/colorzilla/) [Explore diferentes cores hexadecimais](http://www.colorhexa.com/) [Verificador de contraste de cor WebAIM](https://webaim.org/resources/contrastchecker/)
