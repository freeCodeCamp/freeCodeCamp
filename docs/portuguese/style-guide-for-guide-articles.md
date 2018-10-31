# Guia de estilo para criar e editar artigos Guia

Recomendamos as seguintes diretrizes para escrever artigos Guia para ajudar você a começar a contribuir e criar artigos úteis.

## Título

Os títulos dos artigos devem ser tão curtos, concisos e objetivos quanto possível.

Queremos que os campistas encontrem rapidamente as informações que estão procurando, e o título deve refletir o tema principal do artigo.

O nome da pasta é usado na URL, portanto, use apenas traços (-), números (0-9) e letras minúsculas (a-z) para ele.

No entanto, você pode incluir caracteres especiais no título do artigo.

Aqui estão alguns exemplos de títulos com nomes apropriados:

> [`src/pages/html/tabelas/index.md`](https://github.com/freeCodeCamp/freeCodeCamp/blob/master/src/pages/html/tabelas/index.md)

```markdown
---
título: Tabelas
---
```

> [`src/pages/css/borders/index.md`](https://github.com/freeCodeCamp/freeCodeCamp/blob/master/src/pages/css/borders/index.md)

```markdown
---
título: Borders
---
```

> [`src/pages/javascript/loops/for-loop/index.md`](https://github.com/freeCodeCamp/freeCodeCamp/blob/master/src/pages/javascript/loops/loop-for/index.md)

```markdown
---
título: Loop For
---
```

## Modularidade

Cada artigo deve explicar exatamente um conceito, e esse conceito deve ser aparente a partir do título do artigo.

Podemos referenciar outros artigos vinculando-os a eles em linha ou em uma seção "Outros recursos" no final do artigo.

Nosso objetivo é ter milhares de artigos que abrangem uma ampla gama de tópicos técnicos.

## Blocos de Código

Os campistas provavelmente usarão artigos Guia como uma referência rápida para pesquisar a sintaxe. Os artigos devem ter exemplos simples do mundo real que mostrem casos de uso comum dessa sintaxe.

O markdown GitHub-flavored suporta [destaque de sintaxe em blocos de código](https://help.github.com/articles/creating-and-highlighting-code-blocks/#syntax-highlighting) para muitas linguagens de programação.

Para usa-ló, indique a linguagem depois de ```.

Por exemplo, o Markdown a seguir

```markdown
    ```html
    <div class='awesome' id='more-awesome'>
      <p>Este texto esta em html</p>
    </div>
    ```
```

irá imprimir o seguinte bloco de código com sintaxe `HTML` em destaque já que indicamos a linguagem `html` depois de ```.

```html
<div class='awesome' id='more-awesome'>
  <p>This is text in html</p>
</div>
```

A seguir temos dois outros exemplos usando a sintaxe JavaScript e CSS em destaque.

```markdown
    ```javascript
    function logTheThings(stuff) {
      console.log(stuff);
    }
    ```

    ```css
    .awesome {
      background-color: #FCCFCC;
    }
    ```
```

Por favor, mantenha as seguintes recomendações em mente:

- Para garantir a renderização correta, cada bloco de código deve ter um rótulo de linguagem. Você pode encontrar uma lista de linguagem suportadas [aqui] (http://prismjs.com/#languages-list).
- Para bloco de códigos sem linguagem apropriada, use rótulos genéricos como `` `text`, ou `` `code`.
- No markdown existe a sintaxe de identação de 4 espaços para escrever códigos de bloco. No entanto, isso é atualmente __não é__ suportado pelo nosso sistema de renderização.

Finalmente, seguem algumas sugeritões de diretrizes de formatação ao escrever blocos de código:

- As instruções JavaScript devem terminar com um ponto e vírgula  `;` 
- Comentários feitos devem ter um espaço entre os caracteres de comentário e o próprio comentário
     ```javascript
     // Como isso
     ```

## Links

Use os links de estilo Markdown em seus artigos para criar links com outros sites.

```markdown
[freeCodeCamp](https://www.freecodecamp.org/)
```

> ** Importante **
> Certifique-se de estar usando links HTTPS. Isso é muito importante para evitar avisos de conteúdo inseguro.
>
> Além disso, não use links curtos como links `bit.ly` ou `amzn.to`. Este é um risco de segurança. Links curtos são [vulneráveis a ataques baseados em redirecionamento] (https://security.stackexchange.com/questions/59517/are-url-shorteners-vulnerable-due-to-open-redirects).
>
> Em vez disso, basta usar a versão longa dos links, removendo todos os parâmetros de consulta.
> Ex:
> `https://example.com/a-long/url/to-a-webpage/?queryParam=something&queryParam=somethingelse`
> torna-se
> `https://example.com/a-long/url/to-a-webpage/`

## Lista

Você pode criar uma lista não ordenada precedendo uma ou mais linhas de texto com - ou *
Para pedir sua lista, preceda cada linha com um número.

```markdown
     - Olá usuário!
     * Olá!

`` `

## Imagens

Para incluir imagens, se elas não estiverem hospedadas em algum outro lugar na Web, você precisará colocá-las on-line usando uma plataforma como [Imgur] (https://imgur.com/) ou [Flickr] (https://www.flickr.com). Você também pode hospedar imagens, enviando-as para um repositório git e dando um push para o GitHub. Então você pode clicar com o botão direito do mouse na imagem e copiar seu URL.

Não permitimos a hospedagem de imagens diretamente no repositório git porque isso o tornaria muito grande (as pessoas que executassem o pull para o sistema local para fazer alterações acabariam fazendo o download de todas as imagens) e porque é mais fácil alterar uma imagem apenas alterando o URL em um artigo do que colocando a nova imagem no repositório.

Para incluir a imagem em seu artigo, use a sintaxe de marcação apropriada:

```markdown
![Título da imagem](https://url-para-imagem)
```

Então as imagens devem aparecer quando você clicar na aba <kcd> Visualizar </kcd>.

Você também pode adicionar diagramas, gráficos ou visualizações conforme necessário.

Você pode até incorporar vídeos relevantes do YouTube e editores de código interativos [REPL.it] (https://repl.it/).

Não use emoticons ou emoticons no Guia. O freeCodeCamp tem uma comunidade global e o significado cultural de um emoji ou emoticon pode ser diferente em todo o mundo. Além disso, os emojis podem renderizar diferentemente em sistemas diferentes.

## Atribuições

Para minimizar o potencial de plágio e manter a integridade neste guia, é importante dar crédito quando necessário.

Qualquer menção ou texto, usado direto e sem mudança, de outras fontes deve ser colocado entre aspas e ser adequadamente citado. Material que não é uma citação direta, mas que ainda é parafraseado de um recurso diferente, também deve ser citado.

Você pode criar numerais sobrescritos para marcar o conteúdo que é citado usando as tags `<sup> </sup>`.

Assim: <sup>1</sup>

1. freeCodeCamp - Atribuições

Então, na parte inferior do seu artigo, coloque um

```markdown
### Fontes
```

encabeçando e inclua todas as suas citações numeradas para corresponder com suas fontes.

Um exemplo é destacado abaixo.

```markdown
Aqui estão alguns conteúdos que devem ser citados. <Sup>1</ sup>

E aqui está ainda mais que deveria ser citado de outra fonte. <Sup>2</sup>

### Fontes

1. [Doe, John. "Authoring Words." *WikiCoder*. January 1, 1970. Accessed: October 20, 2017](#)
2. [Purdue OWL Staff. "MLA Works Cited: Electronic Sources." *Purdue Online Writing Lab.* October 12, 2017. Accessed: October 20, 2017.](https://owl.english.purdue.edu/owl/resource/747/08/)
```

Você pode conferir o link [Purdue link referenced above] (https://owl.english.purdue.edu/owl/resource/747/08/) para ver como citar corretamente fontes da Web (elas até mostram como citar tweets!).

Normalmente, uma atribuição tem uma estrutura como a seguinte:

> Sobrenome do Autor, Nome do Autor. "Título do artigo." *Publicação.* Editor. Data de publicação. Data acessada.

Se você não encontrar um autor ou uma data publicada, o que é comum, simplesmente omita-as.

O uso de citações apropriadas não apenas manterá o guia confiável, mas essas citações e links também fornecerão recursos valiosos, caso o leitor queira aprender mais sobre o assunto.

Observe também que os casos de plágio flagrante serão removidos ou terão seus Pull Requests recusadas e o usuário receberá um aviso.

Consulte e revise a [Política de Honestidade Acadêmica] do freeCodeCamp (https://www.freecodecamp.org/academic-honesty) antes de contribuir.

## Recursos

Se houver outros recursos do Guia dos quais os participantes se beneficiariam, adicione-os na parte inferior da seção "Recursos" com uma lista com marcadores.

```markdown
### Recursos

- [Um novo recurso] (#link)
```

## Formatação

Use aspas duplas, quando aplicável.

Formate as palavras-chave da linguagem como código - isso é feito com a tecla backtick (localizada à esquerda da tecla "1" em um teclado dos EUA) no markdown GitHub-flavored. Por exemplo, use backticks em torno de tags HTML ou nomes de propriedades CSS.

Use a Oxford Comma quando possível (é uma vírgula usada após o penúltimo item em uma lista de três ou mais itens, antes de ‘e’ ou ‘ou’, por exemplo, um pintor, escultor, e arquiteto italiano). Isso torna as coisas mais fáceis, mais claras e mais bonitas de ler.

## Escrita técnica

A redação técnica, ou a literatura de ciência e tecnologia, é difícil.

Você precisará ter um tópico técnico (geralmente abstrato) e explicá-lo de maneira clara, precisa e objetiva.

Você provavelmente passará por várias rodadas de revisão e edição antes de ficar satisfeito com o resultado.

## Esboço

Antes de começar a escrever, crie um esboço do tópico e pense em qualquer exemplo de codificação que você usará (se aplicável).

Isso ajuda a organizar seus pensamentos e facilitar o processo de escrita.

## Introdução

O parágrafo de introdução deve ter apenas 1-2 frases e ser uma explicação simples do tópico principal. Deve limitar o uso de links para outros artigos Guia, pois eles podem causar distrações.

## Conteúdo

Mantenha os parágrafos curtos (cerca de 1-4 frases). É mais provável que as pessoas leiam vários parágrafos curtos do que um enorme.

## Clareza

Os artigos devem ser escritos com frases curtas e claras e usar o mínimo de jargão necessário.

Todo jargão deve ser definido imediatamente e o mais claro possível.

## Voz

Use voz ativa em vez de voz passiva. Geralmente, é uma maneira mais forte e direta de comunicar um assunto. Por exemplo:

### Passivo

O laço `for` em JavaScript é usado por programadores para ...

### Ativo

Programadores usam o laço `for` em JavaScript para ...

## Ponto de vista

O texto deve usar a segunda pessoa ("você") para ajudar a dar um tom de conversa.

Desta forma, o texto e as instruções parecem falar diretamente com o campista lendo-o.

Tente evitar usar a primeira pessoa ("eu", "nós", "vamos" e "nos").

## Abreviações

Se você quiser abreviar um termo em seu artigo, escreva-o totalmente primeiro e coloque a abreviação entre parênteses.

Por exemplo, `"Na ciência da computação, uma árvore de sintaxe abstrata (AST) é ... "`

## Nomes próprios

Os nomes próprios devem usar letras maiúsculas corretas quando possível. Abaixo está uma lista de palavras como elas devem aparecer nos artigos Guia.

- JavaScript (letras maiúsculas em "J" e "S" e sem abreviações)
- Node.js

O desenvolvimento de front-end (forma de adjetivo com traço) é quando você trabalha no front end (forma de substantivo sem traço). O mesmo acontece com o back end, full stack e muitos outros termos compostos.

## Ferramentas de terceiros

Para verificar gramática e ortografia, recomendamos usar um aplicativo como [Grammarly] (https://grammarly.com) ou uma extensão / plug-in interno que verifique isso no editor de texto.

- [VS Code](https://code.visualstudio.com/) - [Verificador ortográfico de código] (https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
- [Sublime Text 3](https://www.sublimetext.com/docs/3/spell_checking.html)

Para verificar o seu estilo de escrita, recomendamos o [Hemingway App](http://www.hemingwayapp.com/).

Não há nada de mágico nessa ferramenta simples, mas ela detecta automaticamente problemas de estilo amplamente aceitos:

- voz passiva
- advérbios desnecessários
- palavras que têm equivalentes mais comuns

O Hemingway App irá atribuir um "grau de escolaridade" para a sua escrita.

Você deve apontar para um nível de 6.

Outra ferramenta disponível é o [De-Jargonizer](http://scienceandpublic.com/), originalmente projetado para comunicação científica, mas que pode ajudar a evitar redação excessivamente especializada.
