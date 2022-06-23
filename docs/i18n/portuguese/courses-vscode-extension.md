# Extensão do VSCode Courses

Aqui detalharemos as diretrizes de manutenção para o [freeCodeCamp/courses-vscode-extension](https://github.com/freeCodeCamp/courses-vscode-extension) repositório que contém o código-fonte para a extensão [freeCodeCamp - Courses](https://marketplace.visualstudio.com/items?itemName=freeCodeCamp.freecodecamp-courses).

## Publicando a extensão

Uma GitHub Action publica automaticamente a extensão no Visual Studio Marketplace, no lançamento de uma nova GitHub Release.

1. Pacote de uma nova versão da extensão:

```bash
npm run pack -- <tag_type>
```

Onde `<tag_type>` é: `major`, `minor` ou `patch`.

2. Faça o push da nova versão para `main`:

```bash
git commit -am "<tag_type>(<version>): <description>"
git push
```

Como opção, você pode fazer o push diretamente para `upstream/main`, mas abrir um novo PR é recomendado para fins de verificação de sanidade.

3. Crie uma GitHub Release usando a UI do GitHub:

- Incremente corretamente o número da versão ao criar uma nova tag.
- Faça o upload do arquivo `.vsix` com a release.
- Publique a release e confirme que a action foi um sucesso.

> [!NOTE] Criar uma release exige acesso de escrita ao repositório `freeCodeCamp/courses-vscode-extension`.

## Publicando a extensão manualmente

Um upload manual para o Visual Studio Marketplace pode ser feito seguindo estes passos:

1. Visite https://marketplace.visualstudio.com/ e faça login
2. Navegue até a [página do editor do freeCodeCamp](https://marketplace.visualstudio.com/manage/publishers/freecodecamp)
3. Selecione a extensão relevante e selecione `Update`
4. Faça o upload do arquivo a partir de seus arquivos locais
