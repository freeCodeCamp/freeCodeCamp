# Extensão do VSCode Courses

Aqui detalharemos as diretrizes de manutenção para o [freeCodeCamp/courses-vscode-extension](https://github.com/freeCodeCamp/courses-vscode-extension) repositório que contém o código-fonte para a extensão [freeCodeCamp - Courses](https://marketplace.visualstudio.com/items?itemName=freeCodeCamp.freecodecamp-courses).

## Publicando a extensão

Uma GitHub Action publica automaticamente a extensão no Visual Studio Marketplace, em pushes para a branch `prod`.

Certifique-se de ter feito o check-out na branch `main`.

```bash
git checkout main
```

Atualize o repositório local com `upstream` e dê um reset em `main`.

```bash
git fetch upstream
git reset --hard upstream/main
```

Faça o check-out na branch `prod`.

```bash
git checkout prod
```

Faça o merge dos commits desejados para implantação em `prod`.

```bash
git merge main
```

Envie a branch local para `upstream`.

```bash
git push upstream
```

> [!NOTE] O envio para `upstream` requer acesso de gravação ao repositório `freeCodeCamp/courses-vscode-extension`.

## Publicando a extensão manualmente

Um upload manual para o Visual Studio Marketplace pode ser feito seguindo estes passos:

1. Visite https://marketplace.visualstudio.com/ e faça login
2. Navegue até a [página do editor do freeCodeCamp](https://marketplace.visualstudio.com/manage/publishers/freecodecamp)
3. Selecione a extensão relevante e selecione `Update`
4. Faça o upload do arquivo a partir de seus arquivos locais
