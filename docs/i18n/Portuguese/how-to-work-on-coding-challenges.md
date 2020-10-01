# Como trabalhar em desafios de codificação

Nosso objetivo é desenvolver uma experiência de aprendizado divertida e interativa.

Projetar desafios interativos de programação é difícil. Seria muito mais fácil escrever uma explicação longa ou criar um tutorial em vídeo, e há um lugar para as pessoas no Médio e YouTube. No entanto, para nosso currículo principal, estamos buscando o que funciona melhor para a maioria das pessoas - uma experiência de jogo totalmente interativa e parecida com vídeo.

Queremos que os camponeses atinjam um estado de fluxo. Queremos que eles promovam e explodam através dos nossos currículos com o menor número possível de obstáculos. Queremos que eles se integrem com confiança nos projectos e que adquiram uma ampla exposição a conceitos de programação.

A criação destes desafios exige imensa criatividade e atenção aos pormenores. Há muita ajuda disponível. Você terá o apoio de toda uma equipe de colaboradores para quem você pode buscar ideias e provar seus desafios. Mantenha-se ativo na sala de [colaboradores](https://gitter.im/freecodecamp/contributors) e faça muitas perguntas.

Com a sua ajuda, podemos criar um currículo interativo de programação que ajudará milhões de pessoas a aprender a programar durante os próximos anos.

O conteúdo de cada desafio é armazenado em seu próprio arquivo de markdown. Este arquivo markdown é posteriormente convertido em HTML usando nossas ferramentas para criar páginas web interativas.

You can find all of freeCodeCamp.org's curricular content in the [`/curriculum/challenges`](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges) directory.

## Configurar as ferramentas para o currículo

Antes de trabalhar no currículo, você precisará configurar algumas ferramentas para ajudá-lo a testar suas alterações. Você pode usar qualquer opção abaixo:

- Você pode [configurar freeCodeCamp localmente](how-to-setup-freecodecamp-locally.md). Isto é **altamente recomendado** para contribuições regulares/repetidas. Esta configuração permite que você trabalhe e teste suas alterações.
- Use o Gitpod, um ambiente gratuito de desenvolvimento online. Clicar no botão abaixo irá iniciar um ambiente de desenvolvimento pronto para código para freeCodeCamp em seu navegador. Leva só alguns minutos.

  [![Abrir no Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/freeCodeCamp/freeCodeCamp)

- Edite os arquivos na interface do GitHub clicando no ícone do lápis para o arquivo correspondente. Embora seja a maneira mais rápida, é **não recomendado**, porque você não pode testar suas alterações no GitHub. Se os mantenedores concluírem que as alterações feitas precisam ser testadas localmente, você precisará seguir os métodos acima novamente.

## Modelo de desafio

Abaixo está um modelo de como os arquivos markdown dos desafios atualmente.  Para ver o modelo simplificado, vamos adotar veja [abaixo](#upcoming-challenge-template).

````md
---
id: Identificador exclusivo (alfanumérico, MongoD_id)
título: Título do desafio
Desafio: 0
videoUrl: 'url da explicação do vídeo'
---

## Descrição

<section id='description'>
Uma descrição do desafio e o que é necessário para passar
</section>

## Instruções

<section id='instructions'>
instruções sobre o que exatamente precisa ser feito.
</section>

## Testes

<section id='tests'>

```yml
testes:
  - texto: Deve retornar "foo"
    testString: 'Uma função stringificada possivelmente usando assertas Chai'
````

</section>

## Semente de Desafio

<section id='challengeSeed'>

<div id='{ext}-seed'>

```{ext}
O código exibido no editor por padrão.

Esta é uma seção necessária para o desafio.
```

</div>

### Antes do teste

<div id='{ext}-setup'>

```{ext}
Código de configuração de teste opcional.
```

</div>

### Após o teste

<div id='{ext}-teardown'>

```{ext}
Código de teste opcional para baixo.
```

</div>

</section>

## Soluções

<section id='solution'>

```{ext}
// a solução exigiu
```

</section>

````

> [!NOTE]
>
> 1. Nas seções acima exemplos do `{ext}` são:
>
>   - `html` - HTML/CSS
>   - `js` - JavaScript
>   - `jsx` - JSX
>
> 2. Para a seção `Tests` acima, as strings `text` e `testString` devem ser válidas para YAML. `testString` pode ser uma função ou expressão stringificada usando que poderia usar afirmações Chai.

## Desafios de Numeração

Todo desafio precisa de um `id`. Se você não especificar um, o MongoDB criará um novo aleatório quando ele guardar os dados; no entanto, não queremos que isso aconteça, já que queremos que os IDs de desafio sejam consistentes em diferentes ambientes (staging, produção, muitos desenvolvedores diferentes, etc.).

Para gerar um novo em um shell (assumindo que o MongoDB está sendo executado separadamente):

1. Execute o comando `mongo`.
2. Execute o comando `ObjectId()`.

Por exemplo:

```bash
$ mongo
MongoDB shell versão v3.6.1
conectando: mongodb://127.0.0.1:27017
versão do servidor do MongoDB: 3.4.10
...
$ ObjectId()
ObjectId("5a474d78df58bafeb3535d34")
````

O resultado é um novo id, por exemplo `5a474d78df58bafeb3535d34` acima.

Depois de ter o id, coloque-o no arquivo markdown como o campo `id` no topo, por exemplo,

```yml
---
id: 5a474d78df58bafeb3535d34
título: Título do Desafio
```

## Desafios de nomes

Nomear as coisas é difícil. Nós facilitamos a imposição de algumas restrições.

Todos os títulos de desafio devem ser explícitos e devem seguir este padrão:

\[verb\]\[cláusula do objeto\]

Aqui estão alguns exemplos de nomes de desafio:

- Usar Notação no sentido horário para especificar a Preenchimento de um Elemento
- Condensar matrizes com .reduce
- Use a Notação do Colchete para encontrar o Primeiro Personagem em uma String

## Descrição do desafio

As frases devem ser claras e concisas com jargão mínimo. Se usado, jargão deve ser definido imediatamente em inglês.

Mantenha parágrafos curtos (cerca de 1-4 sentenças). É mais provável que as pessoas leiam vários parágrafos curtos do que uma parede de texto.

O texto de desafio deve usar a segunda pessoa ("você") para ajudar a dar-lhe um tom conversacional. Desta forma, o texto e as instruções parecem falar diretamente com o camper que trabalha através do desafio. Tente evitar usar a primeira pessoa ("I", "nós", "let'", e "nós").

Não use links de outbound Estas interrompem o fluxo. Os camponeses nunca deveriam ter de procurar nada durante estes desafios. Se houver recursos que você acha que campistas se beneficiariam, adicione-os ao artigo relacionado à Guia de Desafios.

Você pode adicionar diagramas, se absolutamente necessário.

Não use emojis ou emoticons em desafios. freeCodeCamp tem uma comunidade global e o significado cultural de emojis ou emoticons pode ser diferente em todo o mundo. Além disso, os emojis podem renderizar de forma diferente em diferentes sistemas.

Os substantivos adequados devem usar a capitalização correta quando possível. Abaixo está uma lista de palavras como elas devem aparecer nos desafios.

- JavaScript (letras maiúsculas em "J" e "S" e sem abreviações)
- Node.js
- O desenvolvimento de front-end (forma adjetiva com um traço) é quando você está trabalhando no front-end (um formulário sem traço). O mesmo se aplica a "final de volta", "pilha completa" e muitos outros termos compostos.

### A regra de 2 minutos

Cada desafio deve ser solucionável dentro de 120 segundos por um falante nativo da língua inglesa, que concluiu os desafios que levam a ele. Isso inclui o tempo necessário para ler as direções/instruções entender o código mostrado. escreva seu próprio código e faça com que todos os testes passem.

Se demorar mais do que dois minutos para concluir o desafio, você tem duas opções:

- Simplifique o desafio, ou
- Divida o desafio em dois desafios.

A regra de 2 minutos força-o, o designer do desafio, a tornar suas direções concisas, seu código de sementes claro e seus testes diretos.

Acompanhamos o tempo que leva para os campistas resolverem mudanças e usarem essas informações para identificar desafios que precisam ser simplificados ou divididos.

### Modulação

Cada desafio deve ensinar exactamente um conceito, e esse conceito deve ser visível pelo nome do desafio.

Podemos reforçar conceitos anteriormente cobertos através da repetição e variações - por exemplo, introduzindo elementos h1 num desafio, depois h3 elementos alguns desafios mais tarde.

O nosso objectivo é enfrentar milhares de desafios de 2 minutos. Estes podem fluir em conjunto e reiterar conceitos anteriormente cobertos.

### Formatando texto desafio

Aqui estão as diretrizes de formatação específicas para o texto de desafio e exemplos:

- Palavras-chave de idioma está em `<code>` tags. Por exemplo, nomes de tags HTML ou nomes de propriedades CSS
- A primeira instância de uma palavra-chave quando está sendo definida, ou palavras-chave gerais (ou seja, "object" ou "imutável") vá em `<dfn>` tags
- Referências às partes do código (ou seja, função, método ou nomes de variáveis) devem ser agrupadas em tags `de<code>`. Veja o exemplo abaixo:
- Use <code>parseInt</code> para converter a variável <code>realNumber</code> em um inteiro.
- Blocos de código multi-linha **devem ser precedidos por uma linha vazia**. A próxima linha deve começar com três backticks seguidos imediatamente por um dos [idiomas suportados](https://prismjs.com/#supported-languages). Para completar o bloco de código, você deve começar uma nova linha que tem apenas três backticks e **outra linha vazia**. **Nota:** Se você vai usar um código de exemplo na YAML, use `yaml` em vez de `yml` para o idioma à direita dos backticks.

Veja o exemplo abaixo:

````md
A seguir é um exemplo de código:

```{language}

[SEU CÓDIGO AQUI]

````
````

- Informações adicionais no formato de uma nota devem ser formatadas `<strong>Nota:</strong> Restante do texto da nota...
- Se forem necessárias múltiplas notas, em seguida, liste todas as notas em frases separadas usando o formato `<strong>Notas:</strong> Primeira nota de texto. Texto da segunda nota.`.
- Use aspas duplas quando aplicável

## Testes escritos

Desafios devem ter o número mínimo de testes necessários para verificar se um camper entende um conceito.

O nosso objectivo é comunicar o único ponto que o desafio é tentar ensinar, e testar se compreenderam esse ponto.

Testes de desafio podem fazer uso das bibliotecas de asserção Node.js e Chai.js. Além disso, se necessário, o código gerado pelo usuário pode ser acessado na variável `code`.

## Formatando o seed code

Aqui estão diretrizes de formatação específicas para o código da semente de desafio:

- Use dois espaços para o recuo
- Instruções JavaScript terminam com ponto-e-vírgula
- Use aspas duplas quando aplicável
- Comentários feitos devem ter um espaço entre os caracteres de comentário e o próprio comentário

  `// Corrija esta linha`

## Dicas e Soluções

Cada desafio tem um botão `Obter um int`, para que um usuário possa acessar quaisquer dicas/soluções que tenham sido criadas para o desafio. Os tópicos de Hints/soluções de currículo estão localizados no [nosso fórum](https://forum.freecodecamp.org/c/guide) sob a categoria `Guia`.

Se você encontrar um problema com o tópico "Dicas/soluções de desafios", você pode fazer sugestões na [categoria contribuidores](https://forum.freecodecamp.org/c/contributors) no fórum. Moderadores e usuários com nível de confiança 3 revisarão os comentários e decidirão se devem ou não incluir as mudanças no tópico correspondente das dicas/soluções.

### Adicionando novos tópicos de desafios/soluções

Dê os seguintes passos quando adicionar um novo tópico relacionado a dicas/soluções de desafio.

1. Comece seguindo os mesmos passos para criar um novo tópico, mas revise o seguinte para criar o título.
2. O título do tópico deve começar com o `Guia de Desafios LivCodeCampo: ` concatenado com o título real do desafio de currículo. Por exemplo, se o desafio for chamado de "`Macaco Chunky`", o título do tópico seria "`Guia de Desafios gratuito: Macaco Chunky`".
3. O `camperbot` deve ser o proprietário destes tópicos/postagens, então você precisará solicitar um administrador para mudar a propriedade da postagem principal para `camperbot`.
4. Depois que o novo tópico for criado, será criado um id para o tópico do fórum. Está localizado no final da URL do tópico do fórum. Este id deve ser adicionado à frontmatter do arquivo de desafio do currículo através do processo normal de pull request para o botão `Obter uma Dica` para vincular ao tópico.

### Diretrizes para o conteúdo de tópicos de dicas e soluções

ao propor uma solução para um tópico de Guia relacionado a desafios de currículo, o código completo deve ser adicionado. Isto inclui todo o código de Seed original mais quaisquer alterações necessárias para passar todos os testes de desafio. O modelo a seguir deve ser usado ao criar novos tópicos de dicas/soluções:

``md
# Nomes de Desafios Vence Aqui

---

## Explicação de Problema

Este resumo do que precisa ser feito sem apenas relembrar a descrição e/ou instruções do desafio. Esta é uma seção opcional

#### Links de Relevante

- [Texto de Link](link_url_goes_here)
- [Texto de Link](link_url_goes_here)

---

## Dicas

### Tintura 1

Dicas vai aqui

### Tintura 2

dica vai aqui

---

## Soluções

<details><summary>Solução 1 (Clique para Mostrar/Ocultar)</summary>

```js
função myFunc() {
  console. og('Olá Mundo!');
}
````

#### Explicação de Código

- A explicação de código vai aqui
- A explicação de código vai aqui

#### Links relevantes

- [Texto do link](link_url_goes_here)
- [Texto do link](link_url_goes_here)

</details>
````

## Desafios de teste

Antes de você [criar uma pull request](how-to-open-a-pull-request. d) para suas alterações, você precisa validar que as alterações feitas não causam inadvertidamente problemas com o desafio. 

1. Para testar todos os desafios, execute o comando abaixo a partir do diretório raiz

````
npm run teste:curriculum
``` 

2. Você também pode testar um bloco de desafios ou um superbloco de desafios com esses comandos

```
npm run teste:curriculum --block='HTML básico e HTML5'
```

```
npm run teste:curriculum --superblock=responsive-web-design
```

Você também é capaz de testar um desafio individualmente executando as seguintes etapas:

1. Mude para o diretório `curriculum`:

   ```
   currículo de cd
   ```

2. Execute o seguinte para cada arquivo de desafio para o qual você alterou:

   ```
   teste npm run -- -g "o título completo do desafio em inglês"
   ```

Assim que você tiver verificado que cada desafio em que você trabalhou passa pelos testes, [por favor crie uma pull request](https://github.com/freeCodeCamp/freeCodeCamp/blob/master/docs/how-to-open-a-pull-request.md).

> [!TIP]
> Você pode definir a variável de ambiente `LOCALE` no `.env` para o idioma do(s) desafio(s) que você precisa testar.
> 
> Os valores atualmente aceitos são `english` and `chinese`, com `english` sendo definidos por padrão.

## Próximo Modelo de Desafios

O modelo de desafio no processo de ser atualizado para uma estrutura mais limpa e aninhada.  Isso não foi completamente finalizado, mas as seguintes opções devem se aproximar da estrutura final:

````mdx

---
id: Identificador exclusivo (alfanumérico, MongoDB_id)
title: 'Desafio Título'
DesafioTipo: Inteiro, definido em `cliente/utils/challengeTypes. s`
vídeo: 'url da explicação de vídeo'
fórumIId: 12345
---

script de importação de './script. dx';

## --step-description--

Texto de descrição, em markdown

```html
<div> 
  exemplos de código
</div>
```

## Dicas---

![test-id-1]

Haverá um número arbitrário de IDs triplicados, instruções (em blocos de markdown) e de código.

```js
Código para testar um
```

![test-id-2]

Mais instruções na sintaxe markdown

```js
Mais código
```

## --step-seed--

### --before-user-code--

```lang
Código avaliado antes do usuário
```

### --after-code-usuário--

```lang
Código avaliado após os usuários e apenas antes dos testes
```

### --seed-conteúdo--

![index-html]

```html
Algum html
```

```css
Alguma css
```

```js
Alguns js
```

![index-js]

<Script ></p>


<h1 spaces-before="0">
  --solution-marcador--
</h1>



<p spaces-before="0">
  Exatamente o mesmo que a seção Seeds
</p>

<h2 spaces-before="0">
  --next-solution-marcador
</h2>



<p spaces-before="0">
  Igual de novo
</p>

<h1 spaces-before="0">
  --question-marcador--
</h1>

<h2 spaces-before="0">
  --text-marcador--
</h2>



<p spaces-before="0">
  A pergunta viria aqui (usado apenas para desafios de vídeo)
</p>

<h2 spaces-before="0">
  --answers-marker--
</h2>



<p spaces-before="0">
  Resposta 1
</p>

<hr />

<p spaces-before="0">
  Resposta 2
</p>

<hr />

<p spaces-before="0">
  Mais respostas
</p>

<h2 spaces-before="0">
  --solution-marcador--
</h2>



<p spaces-before="0">
  \<number of correct answer\>
</p>



<p spaces-before="0">
  ````
</p>

<h3 spaces-before="0">
  Links Úteis
</h3>



<p spaces-before="0">
  Criação e Edição de Desafios:
</p>



<ol start="1">
  <li>
    <p spaces-before="0">
      <a href="https://github.com/freeCodeCamp/freeCodeCamp/blob/master/client/utils/challengeTypes.js#L1-L13">Tipos de desafio</a> - o que significam os valores numéricos do tipo de desafio (enum).
    </p>
  </li>

  
  <li>
    <p spaces-before="0">
      <a href="https://www.youtube.com/watch?v=iOdD84OSfAE#t=2h49m55s">Contribuindo para o FreeCodeCamp - Escrevendo testes de desafio ES6</a> - um vídeo após <a href="https://twitter.com/ArrowoodTech">Ethan Arrowood</a> enquanto ele contribui para a versão antiga do currículo.
    </p>
  </li>

</ol>
