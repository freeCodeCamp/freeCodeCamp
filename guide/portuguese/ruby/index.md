---
title: Ruby
localeTitle: Rubi
---
## O que é Ruby?

Ruby foi criado por Yukihiro "Matz" Matsumoto e é uma linguagem de script [open source](https://github.com/ruby/ruby) , dinâmica e interpretada para programação rápida e fácil orientada a objetos. Que significa:

Também é conhecido por ter uma das [maiores e amigáveis ​​comunidades](https://www.ruby-lang.org/en/community/) entre linguagens de programação.

*   Capacidade de fazer chamadas do sistema operacional diretamente
*   Feedback imediato durante o desenvolvimento
*   Declarações variáveis ​​são desnecessárias
*   O gerenciamento de memória é automático
*   Tudo é um objeto
*   Tem a funcionalidade "mixin" por módulo
*   Iteradores e fechamentos

Se você não estiver familiarizado com alguns dos conceitos acima, continue lendo e não se preocupe. Ruby se concentra na simplicidade e produtividade com uma sintaxe elegante que é natural de ler e fácil de escrever, como:

```ruby
# Quick example of Ruby with Object Oriented Programming 
 class Greeter 
  def initialize(name) 
    @name = name.capitalize 
  end 
 
  def salute 
    puts "Hello #{@name}!" 
  end 
 end 
 
 # Create a new object 
 g = Greeter.new("world") 
 
 # Output "Hello World!" 
 g.salute 
```

## Versão

A versão estável atual é [2.5.1](https://www.ruby-lang.org/en/news/2018/03/28/ruby-2-5-1-released/) .

## Instalação

O Mac OS X e muitas distribuições Linux vêm pré-instaladas com o Ruby. Para verificar se o ruby ​​está pré-instalado no seu sistema, basta executar o `ruby -v` no seu shell. Existem várias maneiras de instalar o Ruby:

*   Quando você está em um sistema operacional semelhante ao UNIX, usar o gerenciador de pacotes do seu sistema é a maneira mais fácil de começar. No entanto, a versão empacotada do Ruby geralmente não é a mais nova.
*   Os instaladores podem ser usados ​​para instalar uma versão específica ou várias versões do Ruby. Existe também um instalador para o Windows.
*   Os gerentes ajudam você a alternar entre várias instalações do Ruby em seu sistema.
*   E finalmente, você também pode construir Ruby a partir do código-fonte.

Para saber como instalar o Ruby através dos gerenciadores de pacotes, instaladores e fonte, clique [aqui](https://www.ruby-lang.org/en/documentation/installation/) . RVM (Ruby Version Manager) e rbenv são os gerenciadores Ruby mais populares para gerenciar múltiplos Rubis. Se você ficar preso em algum lugar, não se preocupe, apenas vá até a nossa [sala de bate-papo Gitter](https://gitter.im/FreeCodeCamp/ruby) e pergunte-nos qualquer coisa.

## IRB

IRB significa Interactive Ruby Shell. A abreviação irb vem do fato de que a extensão de nome de arquivo para Ruby é ".rb", embora os arquivos Ruby interativos não tenham uma extensão ".irb". O programa é iniciado a partir de uma linha de comando e permite a execução de comandos Ruby com uma resposta imediata, experimentando em tempo real. Ele possui histórico de comandos, recursos de edição de linha e controle de tarefas, e é capaz de se comunicar diretamente como um script de shell pela Internet e interagir com um servidor ativo. Foi desenvolvido por Keiju Ishitsuka.

```shell
    irb 
    2.3.0 :001 > print "Hello World" 
    Hello World! => nil 
```

## Intérprete Rubi

O interpretador Ruby é o que é usado para executar scripts Ruby. Se estiver disponível e no caminho de busca do shell Unix tornar possível iniciá-lo digitando o comando `ruby` seguido do nome do script, ele chamará o interpretador e executará o script.

`hello_campers.rb`

```ruby
    if 'welcome' == 'welcome' 
        print('Hello campers!') 
    end 
```

Da linha de comando:

```shell
    $ ruby hello_campers.rb 
    Hello campers! 
```

## Documentação

Ruby está bem [documentado](https://www.ruby-lang.org/en/documentation/) . Esses documentos incluem tutoriais, guias, referências e informações meta para o idioma.  
Outro recurso importante para documentação é o [Ruby Doc](http://ruby-doc.org/core-2.3.0/) . Você deve visitar este [link](https://github.com/airbnb/ruby) para saber mais sobre o guia de estilo Ruby, escrito por desenvolvedores do AirBnB.

Uma leitura recomendada para iniciantes em Ruby é [o guia do Why's (Poignant) para Ruby](https://poignant.guide/) Este livro é incomum entre os livros de programação. Com um monte de humor estranho e faixas laterais narrativas que às vezes são completamente alheios ao tema, este consegue manter os leitores entretidos enquanto aprendem o básico de Ruby.

## Depuração

Instruções de `print` embutidas podem ser usadas para depuração simples:

```ruby
    print some_variable # prints to console 
```

> **… Muitas vezes a maneira mais rápida de depurar um programa é adicionar algumas instruções de impressão à fonte: o ciclo rápido de edição-teste-depuração torna essa abordagem simples muito eficaz.**

O Ruby também inclui ferramentas mais poderosas para depuração, como:

*   [_debugger de alavanca_](https://github.com/nixme/pry-debugger)

## Olá Mundo!

Voltando aos documentos, podemos ler sobre o método de [`print`](http://ruby-doc.org/core-2.3.0/Kernel.html#method-i-print) , um dos métodos [internos do módulo Kernel](http://ruby-doc.org/core-2.3.0/Kernel.html) .

```ruby
    print(obj, ...) → nil 
```

Imprime cada objeto para $ stdout. Objetos que não são strings serão convertidos chamando seu método `to_s` . O valor de retorno da impressão é `nil` . Então, quando você executar `print "Hello World!` No seu IRB. A saída é:

```shell
    2.3.0 :001 > print "Hello World!" 
    Hello World! 
     => nil 
```

## Frameworks (gemas)

O Ruby possui vários frameworks (gems) para aplicações de scaffolding rapidamente. O mais popular, de longe, é [Rails,](http://rubyonrails.org/) que foi lançado inicialmente em 2004. Outras estruturas (gemas) para Ruby incluem [Sinatra](http://www.sinatrarb.com/) , [Lotus](http://lotusrb.org/) e [Volt](http://voltframework.com/) . Cada uma dessas opções tem seus prós e contras para o desenvolvimento e atende a uma variedade de necessidades.

## Ruby Framework para desenvolvimento móvel

Para escrever aplicativos nativos de plataforma cruzada em Ruby, o RUBY MOTION é usado para desenvolver aplicativos nativos de plataforma cruzada para iOS, Android e OS X usando o idioma de programação Ruby. Mais recursos aqui: http://www.rubymotion.com/

## O que depois de aprender Ruby?

Toda linguagem de programação desempenha um papel importante. Você pode contribuir com muitos projetos de código aberto ou pode candidatar-se a algumas grandes empresas depois de ter uma boa compreensão do Ruby. Como muitos sites da internet como Basecamp, Airbnb, Bleacher Report, Fab.com, Scribd, Groupon, Gumroad, Hulu, Kickstarter, Pitchfork, Sendgrid, Soundcloud, Square, Yammer, Crunchbase, Slideshare, Funny or Die, Zendesk, Github, O Shopify é construído em Ruby, então há muitas opções para você por aí. Além disso, muitas startups estão contratando pessoas com habilidades em RUby on Rails, já que muitos programadores não tentam aprender Ruby. Então, você pode ter uma boa chance de trabalhar em uma empresa iniciante. Então, Ruby é amigável para iniciantes e é bastante difícil definir que você tem um bom número de vagas para trabalhar como desenvolvedor.