Siga estas orientações para contribuir para o código. Isso é altamente recomendado se você quer contribuir regularmente.

Ignorar essas etapas pode causar problemas à sua cópia, o que dificulta os processos daqueles que contribuem, mantêm e revisam.

## Contribuindo para a base de código

Agora, você pode fazer alterações nos arquivos e fazer o commit das alterações no seu fork, que você pode preparar lendo [Como configurar o freeCodeCamp](how-to-setup-freecodecamp-locally.md).

Siga estes passos:

1. Certifique-se que está no branch `main`:

   ```console
   git status
   ```

   Você deve ver um resultado como este:

   ```console
   Na branch main
   Sua branch está atualizada com 'origin/main'.

   nada para enviar no commit, diretório de trabalho limpo
   ```

   Se você receber uma mensagem diferente, você não está em main ou seu diretório de trabalho não está limpo. Resolva quaisquer arquivos/commits pendentes e saia de `main`:

   ```console
   git checkout main
   ```

2. Sincronize as últimas mudanças da branch `main` upstream do freeCodeCamp para sua branch `main` do fork:

   > [!WARNING] Se você possui qualquer pull request feito a partir da branch `main`, você os perderá ao fim desta etapa.
   > 
   > Certifique-se de que foi feito um merge no seu pull request por um moderador antes de executar este passo. Para evitar essa situação, você **sempre** deve trabalhar em uma brach que não seja a `main`.

   Este passo **irá sincronizar as últimas alterações** do repositório principal do freeCodeCamp.

   Atualize sua cópia do repositório upstream do freeCodeCamp:

   ```console
   git fetch upstream
   ```

   Faça um hard reset na sua branch main com a main do freeCodeCamp:

   ```console
   git reset --hard upstream/main
   ```

   Faça um push da sua branch main para a origin para obter um histórico claro em seu fork do GitHub:

   ```console
   git push origin main --force
   ```

   Você pode validar se sua main atual combina com upstream/main fazendo um diff:

   ```console
   git diff upstream/main
   ```

   O resultado deve mostrar vazio. O processo é importante, pois você fará um rebase em sua branch usando `upstream/main` frequentemente para evitar conflitos depois.

3. Crie uma branch novinha em folha:

   Trabalhar em uma branch separada para cada issue ajuda a manter sua cópia de trabalho limpa. Você nunca deve trabalhar na `main`. Isso vai sujar sua cópia do freeCodeCamp e você pode ter que começar de novo com um clone ou fork.

   Veja se você está na `main` como explicado antes e crie uma branch a partir dela:

   ```console
   git checkout -b fix/update-guide-for-xyz
   ```

   Seu nome de branch deve começar com `fix/`, `feat/`, `docs/`, etc. Evite usar números de issues em branches. Mantenha-os curtos, significativos e únicos.

   Alguns exemplos de bons nomes para branches são:

   ```md
   fix/update-challenges-for-react
   fix/update-guide-for-html-css
   fix/platform-bug-sign-in-issues
   feat/add-guide-article-for-javascript
   translate/add-spanish-basic-html
   ```

4. Edite páginas e trabalhe no código em seu editor de texto favorito.

5. Quando estiver satisfeito com as alterações, você deve opcionalmente executar o freeCodeCamp para visualizar as alterações.

6. Certifique-se de corrigir quaisquer erros e verificar a formatação de suas alterações.

7. Verifique e confirme os arquivos que você está atualizando:

   ```console
   git status
   ```

   Isso deve mostrar uma lista dos arquivos `unstaged` que você editou.

   ```console
   Na branch feat/documentation
   Sua branch está atualizada com 'upstream/feat/documentation'.

   As mudanças não estão organizadas para commit:
   (use "git add/rm <file>..." para atualizar o que será enviado)
   (use "git checkout -- <file>..." para descartar as mudanças do diretório)

       modificado:   CONTRIBUTING.md
       modificado:   docs/README.md
       modificado:   docs/how-to-setup-freecodecamp-locally.md
       modificado:   docs/how-to-work-on-guide-articles.md
   ...
   ```

8. Organize as alterações e faça um commit:

   Nesta etapa, você só deve marcar arquivos que você editou ou adicionou. Você pode executar um reset e resolver arquivos que você não pretendeu mudar se necessário.

   ```console
   git add caminho/para/meu/arquivo/alterado.ext
   ```

   Ou você pode adicionar todos os arquivos `unstaged` para a área de preparação:

   ```console
   git add .
   ```

   Apenas os arquivos que foram movidos para a área de staging serão adicionados quando você fizer um commit.

   ```console
   git status
   ```

   Resultado:

   ```console
   Na branch feat/documentation
   Sua branch está atualizada com 'upstream/feat/documentation'.

   Mudanças para as quais devemos fazer um commit:
   (use "git reset HEAD <file>..." para descartar as mudanças do diretório)

       modificado:   CONTRIBUTING.md
       modificado:   docs/README.md
       modificado:   docs/how-to-setup-freecodecamp-locally.md
       modificado:   docs/how-to-work-on-guide-articles.md
   ```

   Agora, você pode fazer o commit das alterações com uma pequena mensagem assim:

   ```console
   git commit -m "fix: my short commit message"
   ```

   Alguns exemplos:

   ```md
   fix: adicionado teste para JavaScript - passo do laço for
   feat: adicionado link para o artigo de habilidades em alexa
   ```

   Faça uma mensagem de commit convencional. Essa é uma boa prática. Como desenvolvedor, você estará seguindo as práticas padrão.

   Alguns exemplos de mensagens convencionais de commit são:

   ```md
   fix: melhorar o passo do HTML
   fix: consertar scripts de build para o Travis-CI
   feat: adicionar o link para o artigo de hoisting do JavaScript
   docs: atualizar as diretrizes de colaboração
   ```

   Escreva pouco, não mais do que 50 caracteres. Você sempre pode adicionar informações extras na descrição da mensagem de commit.

   Isso não leva mais tempo do que uma mensagem não convencional como 'atualizar arquivo' ou 'adicionar index.md'

   Você pode aprender mais sobre o motivo de usar commits convencionais [aqui](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#why-use-conventional-commits).

9. Se você se deu conta que precisa editar um arquivo ou atualizar a mensagem de commit você pode fazer isso assim:

   ```console
   git commit --amend
   ```

   Isso abrirá um editor de texto padrão, como `nano` ou `vi` onde você pode editar o título da mensagem de commit e adicionar/editar a descrição.

10. Em seguida, você pode fazer push das suas alterações no seu fork:

    ```console
    git push origin branch/nome-aqui
    ```

## Propondo um Pull Request (PR)

Após ter feito as alterações, veja [como abrir um Pull Request](how-to-open-a-pull-request.md).

## Referência de comandos rápidos

Uma rápida referência aos comandos que você precisará ao trabalhar.

| comando                                                           | descrição                                                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `pnpm test`                                                       | Executa todos os testes JS no sistema, incluindo cliente, servidor, lint e testes dos desafios. |
| `pnpm run test-client`                                            | Executa o conjunto de testes do cliente.                                                        |
| `pnpm run test:curriculum`                                        | Executa o conjunto de teste de currículo.                                                       |
| `FCC_BLOCK='Basic HTML and HTML5' pnpm run test:curriculum`       | Testa um bloco específico.                                                                      |
| `FCC_SUPERBLOCK='responsive-web-design' pnpm run test:curriculum` | Testa um super bloco específico.                                                                |
| `pnpm run test-curriculum-full-output`                            | Executa o ocnjunto de teste de currículo, sem parar após o primeiro erro                        |
| `pnpm run test-server`                                            | Executa o conjunto de testes de servidor.                                                       |
| `pnpm run e2e`                                                    | Executa os testes de ponta a ponta do Cypress.                                                  |
| `pnpm run clean`                                                  | Desinstala todas as dependências e limpa os caches.                                             |
| `pnpm run storybook`                                              | Inicia o Storybook para o desenvolvimento da biblioteca de componentes.                         |
