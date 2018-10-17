---
title: The Programmers Oath
localeTitle: Juramento dos programadores
---
## Juramento dos programadores

O juramento de programadores é um juramento criado por Robert C. Martin, destacando as diretrizes para uma web melhor. O juramento é o seguinte:

> A fim de defender e preservar a honra da profissão de programadores de computador, Eu prometo que, com o melhor de minha capacidade e julgamento:
> 
> 1.  Eu não vou produzir código prejudicial.
> 2.  O código que eu produzo sempre será meu melhor trabalho. Eu não permitirei conscientemente código que seja defeituoso em comportamento ou estrutura para se acumular.
> 3.  Produzirei, a cada lançamento, uma prova rápida, segura e repetível de que todos os elementos do código funcionam como deveriam.
> 4.  Farei lançamentos freqüentes e pequenos para não impedir o progresso dos outros.
> 5.  Eu vou sem medo e implacavelmente melhorar minhas criações em todas as oportunidades. Eu nunca vou degradá-los.
> 6.  Farei tudo o que puder para manter a produtividade de mim mesmo e dos outros o mais alto possível. Não farei nada que diminua essa produtividade.
> 7.  Eu vou garantir continuamente que os outros possam me cobrir e que eu possa cobri-los.
> 8.  Vou produzir estimativas que sejam honestas tanto em magnitude quanto em precisão. Eu não farei promessas sem certeza.
> 9.  Eu nunca vou parar de aprender e melhorar meu ofício.

[Uma série da Web no canal freeCodeCamp detalha](https://www.youtube.com/watch?v=36NgPu9OyRM) o que o juramento significa e como seguir o juramento.

### Promessa 1

> 1.  Eu não vou produzir código prejudicial.

#### O que é código prejudicial?

Código prejudicial é um código que é prejudicial para clientes, colegas programadores ou para a estrutura do sistema. O dano vem de muitas formas diferentes. **Você,** como programador profissional, promete não produzir código prejudicial, seja qual for o dano, em seu julgamento e no julgamento de seus colegas.

### Promessa 2

> 2.  O código que eu produzo sempre será meu melhor trabalho. Eu não permitirei conscientemente código que seja defeituoso em comportamento ou estrutura para se acumular.

Como programador, você quer acreditar em fazer o seu melhor trabalho e nunca quer estar em uma situação em que o código que você libera não seja, conscientemente, seu melhor trabalho.

Você não deseja permitir que códigos com defeito acumulem no seu sistema. Você pode não conseguir impedi-lo de entrar no sistema (ex. Uma emergência de liberação), mas não permitirá que ele se acumule.

Observe que, na promessa, há um aspecto de "comportamento" e "estrutura" no juramento. Algo que é defeituoso no comportamento é **claramente um problema,** mas o código defeituoso na estrutura irá diminuir a produtividade dos membros de sua equipe, até que você mal consiga fazer qualquer coisa.

### Promessa 3

> 3.  Produzirei, a cada lançamento, uma prova rápida, segura e repetível de que todos os elementos do código funcionam como deveriam.

Clientes, usuários e até mesmo empresas esperariam que pudéssemos provar que nosso código funciona como deveria. Observe que, no juramento, há palavras como rápido, seguro e repetitivo. Você quer ser capaz de provar em um momento que o código ainda funciona como deveria.

Se você adicionar um novo recurso, que não quebra nada mais antigo, ou consertar uma nova estrutura que não quebra nada que estava lá, você quer ser capaz de mostrar de forma rápida e fácil que o código ainda faz o que destina-se a fazer.

### Promessa 4

> 4.  Farei lançamentos freqüentes e pequenos para não impedir o progresso dos outros.

A maneira mais simples de dizer isso é não verificar algo e verificar algo por um **mês** . Uma maneira mais perspicaz de dizer isso é dizer que tudo que você faz no código deve ser feito em pequenos passos. Se o que você está fazendo atualmente está bloqueando alguém, não pode bloqueá-lo por muito tempo **porque** você está fazendo isso em pequenos passos.

A vantagem de trabalhar em pequenos passos é enorme. Certifique-se de que quando você faz coisas em commits, você faz commit de hora em hora. Quando você fizer check-ins, faça check-ins com frequência. Quando você faz mesclagens, você mescla com freqüência.

### Promessa 5

> 5.  Eu vou sem medo e implacavelmente melhorar minhas criações em todas as oportunidades. Eu nunca vou degradá-los.

Sempre que você vir um problema no seu código, testes ou estrutura de lançamento, **melhore-o** . Mesmo que você não veja um problema, olhe para o seu código e diga a si mesmo: "Aposto que há uma maneira de melhorar isso. Posso melhorar isso de alguma forma".

Nós somos humanos, nós fazemos as coisas melhor. Isso é o que os humanos fazem, ou pelo menos o que nós queremos que os humanos façam. Estaremos constantemente melhorando nosso código e nunca degradando-o propositalmente. Nunca piorando.

### Promessa 6

> 6.  Farei tudo o que puder para manter a produtividade de mim mesmo e dos outros o mais alto possível. Não farei nada que diminua essa produtividade.

Isso é tudo sobre pensar em seus companheiros de equipe e associados. As pessoas que trabalham com você e as pessoas que dependem do seu código. Por exemplo, não faça nada que atrapalhe mais ninguém. Não escreva uma função com muitos argumentos ou faça uma bagunça no código de outra pessoa. Não faça isso com o código que outras pessoas dependem, porque isso só vai **atrasá-los** .

Não coloque testes de longa duração no test-suite. Mantenha esses testes correndo rápido. Considere seus companheiros de equipe em todos os momentos. Considere o ambiente em todos os momentos. Mantenha tudo rápido. Não impeça a produtividade deles.

### Promessa 7

> 7.  Eu vou garantir continuamente que os outros possam me cobrir e que eu possa cobri-los.

Isso é algo que muitas vezes deixamos de fazer. Somos uma equipe e a forma como as equipes se comportam é que, se outro colega de equipe cair, outro companheiro de equipe o cobre.

Em software, o que isso significa é que você precisa saber como as coisas de seus colegas de equipe funcionam, e onde estão seus scripts, onde estão seus arquivos, como seu código está estruturado, etc.

Se eles caírem, não queremos ter silos de conhecimento de nossas equipes, queremos que o conhecimento se espalhe.

Uma maneira de fazer isso é através da programação de pares. Certifique-se de que você pode cobrir um para o outro.

### Promessa 8

> 8.  Vou produzir estimativas que sejam honestas tanto em magnitude quanto em precisão. Eu não farei promessas sem certeza.

Um dos maiores problemas dos programadores é que eles fazem estimativas que são consideradas promessas. Quando você faz uma estimativa, precisa deixar bem claro que é um palpite, e não um palpite muito bom. Eu me certificaria de que, quando você faz estimativas, você as faça em três números: melhor caso, pior caso e caso nominal. Certifique-se de que todos saibam que o pior caso pode acontecer.

Não faça promessas que você não está certo de que pode concluir. Se você fizer uma promessa, você tem que mantê-la.

Quando alguém lhe disser "Eu preciso que isso seja feito até terça-feira", e você não tem certeza se pode fazê-lo até terça-feira, então você não promete. Você diz " **não** , não tenho certeza se posso fazer isso até terça-feira". Cuidado com muito cuidado, porque alguém pode dizer para você **tentar** , e sua resposta para isso seria: "Eu já estou tentando." Você já está tentando o seu melhor, então nunca deixe ninguém te convencer a se esforçar mais.

### Promessa 9

> 9.  Eu nunca vou parar de aprender e melhorar meu ofício.

Isso não precisa de muita explicação. Você deve sempre tentar aprender novas linguagens, novas estruturas, novas técnicas, novas disciplinas, novos processos. Você precisa aplicar o que aprende então, para aprimorar constantemente seu ofício.

### Promessa 10

> 10.  Eu só vou produzir código que esteja de acordo com a ética.

Os programadores devem trabalhar para desenvolver sistemas de computador que possam reduzir as conseqüências negativas para a sociedade, como ameaças à segurança e à saúde, e que possam tornar as atividades diárias e o trabalho mais fáceis. É “uma obrigação desenvolver-se a altos padrões”.

### **Em conclusão:**

Talvez devesse haver mais promessas que deveríamos fazer, de fato, muitas dessas promessas **podem não ser nem práticas** . No entanto, todas essas promessas parecem ser importantes de alguma forma e razoáveis ​​como um juramento que um programador profissional tomaria.