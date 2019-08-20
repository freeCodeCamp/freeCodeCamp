---
title: Shell scripting
localeTitle: Scripts de shell
---
# Scripts de shell

Na linha de comando, um script de shell é um arquivo executável que contém um conjunto de instruções que o shell irá executar. Seu principal objetivo é reduzir um conjunto de instruções (ou comandos) em apenas um arquivo. Também pode manipular alguma lógica, porque é uma linguagem de programação.

## Como criá-lo

1) Crie o arquivo:

```bash
$ touch myscript.sh 
```

2) Adicione um [shebang](https://en.wikipedia.org/wiki/Shebang_(Unix)) no início do arquivo. A linha Shebang é responsável por deixar o interpretador de comandos saber com qual interpretador o script de shell será executado:

```bash
$ echo "#!/bin/bash" > myscript.sh 
 # or 
 $ your-desired-editor myscript.sh 
 # write at the first line #!/bin/bash 
```

3) Adicione alguns comandos:

```bash
$ echo "echo Hello World!" >> myscript.sh 
```

4) Dê o modo de _execução de_ arquivo:

```bash
$ chmod +x myscript.sh 
```

5) Execute-o!

```bash
$ ./myscript.sh 
 Hello World! 
```

Mais informações sobre shell-scripting podem ser encontradas [aqui](https://www.shellscript.sh/)

# Variáveis

O shell apresenta muitos recursos úteis que o colocam em um patamar de uma linguagem de programação.
Um desses recursos são as ## Variáveis. Com elas você pode salvar dados temporários e ate mesmo obter
informações do usuário deixando seu script mais dinâmico.

O formato para a criação de uma variável é essa:

##### nome da variável=valor da variavel

Obs: Não deve haver espaços entre o nome ou o valor da variável e o sinal de '=', caso o contrário o bash interpretará
o "nome da variavel" como sendo um comando, e o sinal de '=' e o "valor da variável" como sendo argumentos para o "nome da váriavel"

#### Exemplos de váriaveis
```
nome="Denilson Silva"
idade=20
```
Uma variável pode tambem conter a saída de um comando do shell, bastando apenas enclausurá-lo com "$()" ou "\`\`".

#### Exemplo
```
data=$(date)
```
Para usar a variável que você criou, basta apenas colocá-la entre "${}".

#### Exemplo
```
nome="Denilson Silva"
idade=19
echo -e "Olá, eu me chamo ${nome} e tenho ${idade} anos de idade."
```
