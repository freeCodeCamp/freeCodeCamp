# Revisando Pull Requests

Existem alguns modelos de resposta padrão que você pode usar durante a revisão dos pull requests e a triagem de issues.

> Você pode fazer o seu próprio com a ferramenta interna do GitHub [**Saved replies**](https://github.com/settings/replies/) ou usar uma das opções abaixo.

### Obrigado

```markdown
Obrigado por contribuir com a página! 👍
Nós estamos felizes em aceitar as mudanças e esperamos mais contribuições no futuro. 🎉
```

### Obrigado e parabéns

> Para agradecer e encorajar contribuidores de primeira viagem.

```markdown
Olá, @username. Parabéns pelo seu primeiro pull request (PR)! 🎉

Obrigado por contribuir com a página! 👍
Nós estamos felizes em aceitar as mudanças e esperamos mais contribuições no futuro. 📝
```

### Build Error

```markdown
Olá, @username.

Nós adoraríamos poder incluir as suas alterações, mas parece que há algum erro com a versão do Travis CI. ⚠️

Assim que você resolver esses erros, nós poderemos revisar a sua PR e fazer o merge, incluindo suas alterações. 😊

---

> Sinta-se livre para usar como referência o [Style guide for writing articles](https://github.com/freeCodeCamp/freeCodeCamp#article-title) artigo no GitHub para esse repositório sobre como formatar um artigo corretamente, assim a versão do Travis CI funcionará. ✅
>
> Além disso, é uma boa prática no GitHub escrever uma breve descrição das suas alterações ao criar uma Pull Request. 📝
```

### Sincronizando Forks

> Quando a PR não está atualizada com a branch `master`.

``````markdown
Olá, @username

Nós adoraríamos poder incluir as suas alterações, mas parece que há algum erro com a versão do Travis CI. ⚠️

```bash
Error: ENOTDIR: not a directory, open 'src/pages/java/data-abstraction/index.md'
```

Esse erro em particular não foi causado pelo seu arquivo, mas trata-se de um antigo erro causado por qualquer tentativa de merge de código errado na branch `master`. Ele está atualmente resolvido.

Para passar a sua versão, você terá que sincronizar as últimas mudanças da branch `master` do repositório `freeCodeCamp/freeCodeCamp`.

Você pode fazer isso em três passos simples através da linha de comando do terminal:

```bash
git remote add upstream git://github.com/freeCodeCamp/freeCodeCamp.git

git fetch upstream

git pull upstream master
```

Se você está usando a GUI, você pode simplesmente `Adicionar um novo repositório remoto...` e utilizar o link `git://github.com/freeCodeCamp/freeCodeCamp.git` acima.

Assim que você sincronizar a sua fork e passar a sua versão, nós poderemos revisar a sua PR e fazer o merge, incluindo suas alterações. 😊

---

> Sinta-se livre para usar como referência o  [Syncing a Fork](https://help.github.com/articles/syncing-a-fork/) artigo no GitHub para mais insights sobre como manter a sua fork atualizada com o repositórios acima dela. 🔄
>
> Além disso, é uma boa prática no GitHub escrever uma breve descrição das suas alterações ao criar uma Pull Request. 📝
``````

### Conflitos de Merge

> Quando a PR tem conflitos de merge que precisam ser resolvidos.¹

```markdown
Olá, @username

Nós adoraríamos poder incluir as suas alterações, mas parece que você tem alguns conflitos de merge. ⚠️

Assim que você resolver esses conflitos, nós poderemos revisar a sua PR e fazer o merge, incluindo suas alterações. 😊

---

> Se você não está familiarizado com o processo de conflito de merge, sinta-se livre para dar uma olhada no guia do GitHub para ["Resolving a merge conflict"](https://help.github.com/articles/resolving-a-merge-conflict-on-github/). 🔍️
>
> Além disso, é uma boa prática no GitHub escrever uma breve descrição das suas alterações ao criar uma Pull Request. 📝
```
¹ Se um contribuidor de primeira viagem tem um conflito de merge, os mantenedores do repositório vão resolvê-lo para ele.

### Duplicações

> Quando a PR é repetitiva ou uma duplicata.

```markdown
Olá, @username

Parace que mudanças semelhantes as que você fez já foram aceitas anteriormente para o artigo que você está editando, desculpe-nos por isso. 😓

Se você sente que tem mais a adicionar, por favor sinta-se livre para abrir uma nova Pull Request.

Obrigado novamente! 😊

---

> Se você tem dúvidas ou quaisquer questões, sinta-se livre para encontrar as soluções para elas através do [Gitter](https://gitter.im/FreeCodeCamp/Contributors) ou comentando abaixo. 💬
```

### Fechando pull requests inválidos

> Quando a PR é inválida.

```markdown
Olá, @username

Você não adicionou nenhum conteúdo, nós iremos fechar essa pull request e marcá-la como `inválida`. 😓️

Sinta-se livre para iniciar outra PR! 👍
```
