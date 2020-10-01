# Usando Modelos de Resposta

Estes são alguns dos modelos de resposta padrão que você pode usar durante a revisão de pull requests e problemas de triagem.

> Você pode criar seu próprio com o recurso embutido do GitHub [**As respostas salvas**](https://github.com/settings/replies/) ou usar as abaixo.

### Muito obrigado

```markdown
Obrigado por sua contribuição para a página! 👍
Estamos felizes em aceitar essas alterações e aguardamos futuras contribuições. 🎉
```

### Obrigado e parabéns

> Por agradecer e incentivar os primeiros colaboradores.

```markdown
Olá, @username. Parabéns pelo seu primeiro pull request (PR)! 🎉

Obrigado pela sua contribuição para a página! 👍
Estamos felizes em aceitar essas alterações e aguardamos futuras contribuições. 📝
```

### Erro na compilação

```markdown
Olá @username

Nós adoraríamos ser capazes de mesclar suas mudanças, mas parece que há um erro com a compilação do Travis CI. ⚠️

Depois de resolver esses problemas, poderemos revisar seu PR e mesclá-lo. 😊

---

> Sinta-se à vontade para fazer referência ao [Guia de estilo para escrever artigos](https://github. om/freeCodeCamp/freeCodeCamp#article-title) para este repositório ao formatar um artigo corretamente para que o seu Travis CI possa ser aprovado. ✅
>
> Além disso, é uma boa prática no GitHub escrever uma breve descrição de suas alterações ao criar um PR. 📝
```

### Sincronizando o Fork

> Quando o PR não está atualizado com o branch `master`.

``````markdown
Olá @username

Nós adoraríamos ser capazes de mesclar suas mudanças, mas parece que há um erro com a compilação do Travis CI. ⚠️

```bash
Error: ENOTDIR: not a directory, abra 'src/pages/java/data-abstraction/index.md'
``````

Esse erro em particular não foi causado pelo seu arquivo, mas foi um erro antigo causado por mesclar o código defeituoso no branch `master`. Desde então, a questão está resolvida.

Para passar a compilação, você precisará sincronizar as últimas alterações do repositório `master` do repositório `freeCodeCamp/freeCodeCamp`.

Usando a linha de comando, você pode fazer isso em três etapas simples:

```bash
git remote add upstream git://github.com/freeCodeCamp/freeCodeCamp.git

git fetch upstream

git pull upstream master
```

Se você estiver usando uma interface gráfica, basta `adicionar um novo controle remoto...` e usar o link `git://github.com/freeCodeCamp/freeCodeCamp.git` de cima.

Depois de sincronizar seu fork e passar a compilação, poderemos rever seu PR e mesclá-lo. 😊

---

> Sinta-se à vontade para fazer referência ao artigo [Sincronizando um Fork](https://help.github.com/articles/syncing-a-fork/) no GitHub para saber mais sobre como manter o seu fork atualizado com o repositório a montante. 🔄
> 
> Além disso, é uma boa prática escrever uma breve descrição de suas alterações ao criar um PR. 📝
``````

### Conflitos de Mesclagem

> Quando PR tem conflitos de mesclagem que precisam ser resolvidos.1

```markdown
Olá @username

Adoraríamos fazer merge de suas alterações, mas parece que você tem alguns conflitos de mesclagem. ⚠️

Quando você resolver esses conflitos, poderemos rever seu PR e fazer o merge. 😊

---

> Se você não estiver familiarizado com o processo de conflito de merge, sinta-se à vontade para analisar o guia do GitHub sobre ["Resolvendo um conflito de mesclagem"](https://help. ithub.com/articles/resolving-a-merge-conflict-on-github/). 🔍
>
> Além disso, é uma boa prática no GitHub escrever uma breve descrição das alterações ao criar um PR. 📝
``````
1 Se um primeiro contribuidor do tempo tiver um conflito de fusão, os mantenedores resolverão o conflito para eles.

### Duplicate

> Quando o PR é repetitivo ou duplicado.

```markdown
Olá @username

Parece que mudanças semelhantes já foram aceitas anteriormente por esse artigo que você está editando, desculpe por isso. 😓

Se você acha que tem mais para adicionar, por favor, sinta-se à vontade para abrir um novo PR.

Obrigado novamente! 😊

---

> Se tiver alguma dúvida, fique à vontade para entrar em contato através de [Gitter](https://gitter.im/FreeCodeCamp/Contributors) ou comentando abaixo. 💬
```

### Fechando pull requests inválidos

> Quando o PR é inválido.

```markdown
Olá, @username

Você não adicionou nenhum conteúdo, vamos fechar este PR e marcá-lo como `inválido`. 😓

Sinta-se à vontade para abrir outro PR! 👍
```