---
title: A Guide to Class and Id Selectors
localeTitle: Um Guia para Seletores de Classe e Id
---
## Um Guia para Seletores de Classe e Id

Este é um artigo baseado em seletores CSS. O CSS é usado para estilizar elementos HTML e a página da Web em geral. Para CSS para estilizar um elemento na página, ele precisa selecionar esse elemento primeiro.

Como você precisa selecionar um arquivo no seu computador antes de excluí-lo. Você precisa dizer à sua máquina exatamente qual arquivo deseja modificar ou excluir. Da mesma forma, você precisa dizer ao CSS qual elemento deve ser direcionado ao aplicar diferentes estilos e cores nele.

Embora CSS possa selecionar elementos muito bem, você pode instruí-lo para selecionar elementos muito específicos. No final deste artigo, você sairá com o conhecimento para selecionar e estilizar elementos específicos.

### O que é classe e ID?

Digamos que você tenha 5 elementos de parágrafo no seu código HTML.

```html

<p> First paragraph </p> 
 <p> Second paragraph </p> 
 <p> Third paragraph </p> 
 <p> Fourth paragraph </p> 
 <p> Fifth paragraph </p> 
```

Você pode dar a cada um deles uma cor de fonte vermelha usando CSS.

```css
p { 
    color: red; 
 } 
```

Isso é bem fácil! Mas e se você quiser apenas dar ao segundo parágrafo uma cor de fonte? Isso é um pouco difícil agora. Como não temos como identificar cada elemento de parágrafo individualmente, não podemos selecioná-los separadamente.

_Classe e ID para o resgate_

Classe e ID agem como cartões de identidade para elementos HTML. Ambos ajudam a separar um elemento do outro, mas são ligeiramente diferentes.

* * *

Vamos dizer que você conhece um cara de algum clube. Quando você pede essa pessoa para o cartão de identidade do seu clube, ela mostra um com o nome do clube. Agora todos os membros do mesmo clube terão o mesmo cartão de identidade, certo?

Se houver 3 clubes - A, B e C. Então todos os membros do clube A terão os mesmos cartões de identidade. Todos os membros do clube B também terão os mesmos, embora sejam diferentes dos cartões de identidade do clube A e do clube C. É assim que você sabe quem é de qual clube.

É assim que funciona a `class` . Você pode dar um monte de elementos a uma classe e eles estarão em um único clube. Assim como uma nova regra no clube deve ser seguida por todos os sócios do clube, da mesma forma, todas as novas regras de estilo são aplicadas aos elementos do mesmo clube.

```html

<p class="bike"> Hayabusa </p> 
 <p class="car"> Chevrolet </p> 
 <p class="bike"> Hayley-Davidson </p> 
 <p class="car"> Lamborghini </p> 
```

Aqui nós temos 4 parágrafos. Se você olhar os nomes das classes, existem 2 "clubes". Agora podemos selecionar o clube (ou grupo) que queremos e aplicar os estilos que queremos neles.

```css
.bike { 
    color: blue; 
 } 
```

Você pode selecionar um grupo em vez de um elemento específico, prefixando o nome do grupo com um período `.` e aplique os estilos desejados ao grupo. Neste exemplo, a cor da fonte do azul é aplicada somente aos parágrafos que têm a classe da `bike` .

* * *

Se você entendeu o que é `class` , a ID será fácil de entender.

Do nosso exemplo anterior, um cartão de identidade do clube representa o clube e todos os membros o possuem. No entanto, se você pedir sua prova de identidade individual, uma pessoa mostrará um cartão de identidade diferente que só eles têm. Todo mundo tem um diferente e pode ser usado para identificá-los individualmente.

Isto é o que é o ID. Assim como os cartões de identidade pessoais, apenas um elemento HTML pode ter um `id` específico. Não há dois elementos com o mesmo `id` .

```html

<p id="car"> Ferrari </p> 
 <p id="car"> Ford </p> 
 <!-- This is incorrect--> 
 
 <p id="harley"> Harley-Davidson </p> 
 <p id="hayabusa"> Hayabusa </p> 
 <!--This is correct since an id is only used once.--> 
```

Um `id` também pode ser semelhante a uma chave privada para o seu armário no clube. Todos no clube têm o mesmo cartão de identidade do clube, mas a chave do armário de todos é diferente e única.

Semelhante ao exemplo de `class` , você pode selecionar um elemento específico e aplicar estilos a ele, prefixando o nome do id com `#` .

```css
#hayabusa { 
    font-style: bold; 
 } 
```

* * *

É fácil lembrar - use `.` antes do nome da _classe_ e um `#` antes do nome do _id_ .

Ambos têm seus próprios usos.

> class é usada quando estilos devem ser aplicados em vários elementos e id é usado quando estilos devem ser aplicados em um elemento em particular.

Tenha isso em mente quando você usa class e id para selecionar e estilizar elementos específicos.

Com isso, você adicionou mais ferramentas à sua caixa de ferramentas para estilizar elementos em uma página da Web.