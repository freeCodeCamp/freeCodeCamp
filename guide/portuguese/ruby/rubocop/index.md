---
title: Rubocop
localeTitle: Rubocop
---
[Rubocop](https://github.com/bbatsov/rubocop) é uma ferramenta de análise estática para [Ruby](https://www.ruby-lang.org/en/) O que isto significa? Significa Rubocop vontade de 'ler' o seu código (ao invés de executá-lo, daí a parte 'estática' do nome), e analisá-lo. As regras de análise usadas pelo Rubocop são do [Guia de estilo da comunidade Ruby](https://github.com/bbatsov/ruby-style-guide) .

O guia de estilo é um conjunto de sugestões específicas sobre como escrever código que é mais legível, mais expressivo e mais convencional. Como uma comunidade, seria ótimo se pudéssemos ler o código de qualquer outra pessoa facilmente, e eles poderiam leia o nosso facilmente. É isso que o Rubocop nos ajuda a fazer. Esse tipo de ferramenta é sempre valioso, mas é particularmente útil quando você está aprendendo Ruby, e você pode codificar o que é _correto_ , mas que não se ater às convenções Ruby, ou não aproveita alguns dos recursos mais poderosos do Ruby.

Mais útil, o Rubocop pode corrigir automaticamente muitos dos menores avisos - como espaçamento incorreto. Isso é muito útil antes da revisão do código, já que significa colegas desenvolvedores podem se concentrar em preocupações de nível mais alto, e não ter que desperdiçar tempo em problemas de sintaxe.

## Usando Rubocop

### Instalação

Rubocop é entregue como uma Gem, então em um projeto típico que usa Bundler você gostaria de adicioná-lo à seção de desenvolvimento do seu `Gemfile` :
```
group :development do 
  gem rubocop 
 end 
```

Isso significa que qualquer um usando seu projeto terá a mesma versão do Rubocop, e todos concordarão sobre qual é a melhor prática atual.

### Uso

Antes de cada confirmação, gostaria de verificar se meu código recém-modificado está em conformidade o padrão comunitário, simplesmente executando:
```
rubocop 
```

Isto irá mostrar uma lista de avisos sobre o seu código.

Pode ser útil pedir mais ajuda a Rubocop:
```
rubocop --extra-details --display-cop-names 
```

(Você pode adicioná-los a um arquivo `.rubocop` para torná-los padrão.)

Muitos editores permitirão que você integre o Rubocop, o que pode dar feedback quando você está escrevendo código.

### Corrigindo problemas

Digamos que eu tenha escrito algum novo código; antes de comê-lo, eu poderia decidir verifique se segue as diretrizes:

```shell
rubocop <my new file> 
```

Eu posso editar fazer as alterações sugeridas manualmente, ou posso pedir ao Rubocop para corrigir pequenos problemas automaticamente:
```
rubocop --auto-correct 
```

### Correndo apenas certos policiais

Cada diretriz da comunidade é implementada em um 'policial' do Rubocop. Ao trabalhar em um codebase legado você pode ser inundado com avisos ao introduzir o Rubocop. Neste caso, pode ser útil executar apenas um único policial ao longo do codebase, e verificar essas mudanças antes de passar para a próxima diretriz, para exemplo:
```
rubocop --auto-correct --only 'Layout/EmptyLineAfterMagicComment' 
```

### Integração do Editor de Texto

O Rubocop pode ser integrado ao Vim, ao Visual Studio Code, ao Atom e a outros editores de texto. Uma lista completa pode ser encontrada [aqui](https://rubocop.readthedocs.io/en/latest/integration_with_other_tools/) .